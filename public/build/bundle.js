
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function is_promise(value) {
        return value && typeof value === 'object' && typeof value.then === 'function';
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = value;
            let child_ctx = info.ctx;
            if (key !== undefined) {
                child_ctx = child_ctx.slice();
                child_ctx[key] = value;
            }
            const block = type && (info.current = type)(child_ctx);
            let needs_flush = false;
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                if (info.blocks[i] === block) {
                                    info.blocks[i] = null;
                                }
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                needs_flush = true;
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
            if (needs_flush) {
                flush();
            }
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
                if (!info.hasCatch) {
                    throw error;
                }
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = promise;
        }
    }
    function update_await_block_branch(info, ctx, dirty) {
        const child_ctx = ctx.slice();
        const { resolved } = info;
        if (info.current === info.then) {
            child_ctx[info.value] = resolved;
        }
        if (info.current === info.catch) {
            child_ctx[info.error] = resolved;
        }
        info.block.p(child_ctx, dirty);
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.47.0' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\ContentTable\ContentTable.svelte generated by Svelte v3.47.0 */

    const { console: console_1 } = globals;
    const file$1 = "src\\ContentTable\\ContentTable.svelte";

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (1:0) <script>      export let database;            const dataBaseURL = 'https://tldr-ea4a5-default-rtdb.europe-west1.firebasedatabase.app/';        const fetchData = () => {          return fetch(dataBaseURL + database + '.json')              .then(res => res.json())              .then(res => res)              .catch(e => console.error(e))      }
    function create_catch_block(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block.name,
    		type: "catch",
    		source: "(1:0) <script>      export let database;            const dataBaseURL = 'https://tldr-ea4a5-default-rtdb.europe-west1.firebasedatabase.app/';        const fetchData = () => {          return fetch(dataBaseURL + database + '.json')              .then(res => res.json())              .then(res => res)              .catch(e => console.error(e))      }",
    		ctx
    	});

    	return block;
    }

    // (20:4) {:then data}
    function create_then_block(ctx) {
    	let if_block_anchor;

    	function select_block_type(ctx, dirty) {
    		if (/*database*/ ctx[0] !== `games`) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block.name,
    		type: "then",
    		source: "(20:4) {:then data}",
    		ctx
    	});

    	return block;
    }

    // (55:8) {:else}
    function create_else_block(ctx) {
    	let div;
    	let t0;
    	let p;
    	let t1;
    	let t2_value = /*data*/ ctx[1].length + "";
    	let t2;
    	let each_value_1 = /*data*/ ctx[1];
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t0 = space();
    			p = element("p");
    			t1 = text("Total juegos: ");
    			t2 = text(t2_value);
    			attr_dev(div, "class", "covers svelte-82b41x");
    			add_location(div, file$1, 55, 12, 1833);
    			attr_dev(p, "class", "total");
    			add_location(p, file$1, 71, 12, 2475);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			insert_dev(target, t0, anchor);
    			insert_dev(target, p, anchor);
    			append_dev(p, t1);
    			append_dev(p, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*data*/ 2) {
    				each_value_1 = /*data*/ ctx[1];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(55:8) {:else}",
    		ctx
    	});

    	return block;
    }

    // (21:8) {#if database !== `games`}
    function create_if_block(ctx) {
    	let figure;
    	let table;
    	let thead;
    	let tr;
    	let th0;
    	let t1;
    	let th1;
    	let t3;
    	let tbody;
    	let each_value = /*data*/ ctx[1];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			figure = element("figure");
    			table = element("table");
    			thead = element("thead");
    			tr = element("tr");
    			th0 = element("th");
    			th0.textContent = "Nombre del proyecto & descripción";
    			t1 = space();
    			th1 = element("th");
    			th1.textContent = "Enlace";
    			t3 = space();
    			tbody = element("tbody");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(th0, file$1, 25, 28, 638);
    			add_location(th1, file$1, 28, 28, 774);
    			add_location(tr, file$1, 24, 24, 604);
    			add_location(thead, file$1, 23, 20, 571);
    			add_location(tbody, file$1, 33, 20, 936);
    			add_location(table, file$1, 22, 16, 542);
    			add_location(figure, file$1, 21, 12, 516);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, figure, anchor);
    			append_dev(figure, table);
    			append_dev(table, thead);
    			append_dev(thead, tr);
    			append_dev(tr, th0);
    			append_dev(tr, t1);
    			append_dev(tr, th1);
    			append_dev(table, t3);
    			append_dev(table, tbody);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(tbody, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*data*/ 2) {
    				each_value = /*data*/ ctx[1];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(tbody, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(figure);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(21:8) {#if database !== `games`}",
    		ctx
    	});

    	return block;
    }

    // (57:16) { #each data as game }
    function create_each_block_1(ctx) {
    	let div;
    	let a;
    	let img;
    	let img_src_value;
    	let t;

    	const block = {
    		c: function create() {
    			div = element("div");
    			a = element("a");
    			img = element("img");
    			t = space();
    			attr_dev(img, "alt", /*game*/ ctx[5].name);
    			if (!src_url_equal(img.src, img_src_value = `publi/img/` + /*game*/ ctx[5].slug + `.jpg`)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "class", "svelte-82b41x");
    			add_location(img, file$1, 63, 28, 2201);
    			attr_dev(a, "href", `https://www.youtube.com/watch?v=` + /*game*/ ctx[5].youtube);
    			attr_dev(a, "title", /*game*/ ctx[5].name);
    			attr_dev(a, "target", "_blank");
    			add_location(a, file$1, 58, 24, 1960);
    			attr_dev(div, "class", "cover svelte-82b41x");
    			add_location(div, file$1, 57, 20, 1915);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, a);
    			append_dev(a, img);
    			append_dev(div, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(57:16) { #each data as game }",
    		ctx
    	});

    	return block;
    }

    // (35:24) { #each data as data }
    function create_each_block(ctx) {
    	let tr;
    	let td0;
    	let t0_value = /*data*/ ctx[1].name + "";
    	let t0;
    	let t1;
    	let t2_value = /*data*/ ctx[1].description + "";
    	let t2;
    	let t3;
    	let td1;
    	let a;
    	let t4_value = /*data*/ ctx[1]["link-title"] + "";
    	let t4;
    	let t5;

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = text(" ~ ");
    			t2 = text(t2_value);
    			t3 = space();
    			td1 = element("td");
    			a = element("a");
    			t4 = text(t4_value);
    			t5 = space();
    			add_location(td0, file$1, 36, 32, 1059);
    			attr_dev(a, "href", /*data*/ ctx[1].link);
    			attr_dev(a, "target", "_blank");
    			attr_dev(a, "class", "glitch");
    			add_location(a, file$1, 40, 36, 1252);
    			add_location(td1, file$1, 39, 32, 1210);
    			add_location(tr, file$1, 35, 28, 1021);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t0);
    			append_dev(td0, t1);
    			append_dev(td0, t2);
    			append_dev(tr, t3);
    			append_dev(tr, td1);
    			append_dev(td1, a);
    			append_dev(a, t4);
    			append_dev(tr, t5);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(35:24) { #each data as data }",
    		ctx
    	});

    	return block;
    }

    // (18:17)           <p>Loading Data...</p>      {:then data}
    function create_pending_block(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Loading Data...";
    			add_location(p, file$1, 18, 8, 426);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block.name,
    		type: "pending",
    		source: "(18:17)           <p>Loading Data...</p>      {:then data}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let main;

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: false,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block,
    		value: 1
    	};

    	handle_promise(/*data*/ ctx[1], info);

    	const block = {
    		c: function create() {
    			main = element("main");
    			info.block.c();
    			add_location(main, file$1, 16, 0, 391);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			info.block.m(main, info.anchor = null);
    			info.mount = () => main;
    			info.anchor = null;
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			update_await_block_branch(info, ctx, dirty);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			info.block.d();
    			info.token = null;
    			info = null;
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const dataBaseURL = 'https://tldr-ea4a5-default-rtdb.europe-west1.firebasedatabase.app/';

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('ContentTable', slots, []);
    	let { database } = $$props;

    	const fetchData = () => {
    		return fetch(dataBaseURL + database + '.json').then(res => res.json()).then(res => res).catch(e => console.error(e));
    	};

    	let data = fetchData();
    	const writable_props = ['database'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<ContentTable> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('database' in $$props) $$invalidate(0, database = $$props.database);
    	};

    	$$self.$capture_state = () => ({ database, dataBaseURL, fetchData, data });

    	$$self.$inject_state = $$props => {
    		if ('database' in $$props) $$invalidate(0, database = $$props.database);
    		if ('data' in $$props) $$invalidate(1, data = $$props.data);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [database, data];
    }

    class ContentTable extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { database: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ContentTable",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*database*/ ctx[0] === undefined && !('database' in props)) {
    			console_1.warn("<ContentTable> was created without expected prop 'database'");
    		}
    	}

    	get database() {
    		throw new Error("<ContentTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set database(value) {
    		throw new Error("<ContentTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Index.svelte generated by Svelte v3.47.0 */
    const file = "src\\Index.svelte";

    function create_fragment(ctx) {
    	let main;
    	let h1;
    	let t1;
    	let p0;
    	let t3;
    	let p1;
    	let t5;
    	let h20;
    	let t7;
    	let p2;
    	let t9;
    	let p3;
    	let t10;
    	let a0;
    	let t12;
    	let p4;
    	let t13;
    	let a1;
    	let t15;
    	let a2;
    	let t17;
    	let t18;
    	let p5;
    	let t19;
    	let a3;
    	let t21;
    	let t22;
    	let p6;
    	let t24;
    	let contenttable0;
    	let t25;
    	let h21;
    	let t27;
    	let p7;
    	let t29;
    	let contenttable1;
    	let t30;
    	let h22;
    	let t32;
    	let p8;
    	let t33;
    	let b0;
    	let t35;
    	let b1;
    	let t37;
    	let t38;
    	let p9;
    	let t39;
    	let b2;
    	let t41;
    	let t42;
    	let contenttable2;
    	let current;

    	contenttable0 = new ContentTable({
    			props: { database: `microcomputers` },
    			$$inline: true
    		});

    	contenttable1 = new ContentTable({
    			props: { database: `frameworks` },
    			$$inline: true
    		});

    	contenttable2 = new ContentTable({
    			props: { database: `games` },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			main = element("main");
    			h1 = element("h1");
    			h1.textContent = "T̷̢̟͓̝̪̖̳̒͑̄͒̈̾̌̀̿L̵̛̛̩̜̹̼̹͕̺͒̀Ḏ̶͎͙̲̑͗͝R̸͍̝̰͖͈͖̮̪̮̯̓̏͂̌̏̉͌͊͑̓";
    			t1 = space();
    			p0 = element("p");
    			p0.textContent = "Última actualización /// 26 de Abril de 2022";
    			t3 = space();
    			p1 = element("p");
    			p1.textContent = "En este documento se recogen varios consejos y curiosidades que me han parecido interesantes. Espero que os sea de utilidad en vuestra nueva etapa como desarrolladores y os animo a que, de vez en cuando, os hagáis el mismo documento para vosotros mismos y veáis cuánto habéis avanzado con el transcurso del tiempo.";
    			t5 = space();
    			h20 = element("h2");
    			h20.textContent = "🅼🅸🅲🆁🅾🅾🆁🅳🅴🅽🅰🅳🅾🆁🅴🆂";
    			t7 = space();
    			p2 = element("p");
    			p2.textContent = "A todos aquellos a los que os gusta trastear y configurar servidores o crear aplicaciones chorra, os recomiendo que os hagáis con una Raspberry o similar. El uso que le vayáis a dar puede ser simplemente autodidáctico, donde poco a poco cogeréis soltura a la hora de entender los diferentes sistemas e incluso haceros una idea de cómo debe gestionarse bien un sistema o servidor.";
    			t9 = space();
    			p3 = element("p");
    			t10 = text("Una buena web para comprar este tipo de cosas es ");
    			a0 = element("a");
    			a0.textContent = "KUBII";
    			t12 = space();
    			p4 = element("p");
    			t13 = text("Si te va más la electrónica puedes probar con ");
    			a1 = element("a");
    			a1.textContent = "Arduino";
    			t15 = text(" que también da muchísimo juego. Os dejo también por aquí el proyecto ");
    			a2 = element("a");
    			a2.textContent = "SUPER MEMO";
    			t17 = text(" que hice con esta plaquita, un pequeño juego al más puro estilo SIMÓN (el de los 4 colores).");
    			t18 = space();
    			p5 = element("p");
    			t19 = text("La diferencia de los proyectos con ");
    			a3 = element("a");
    			a3.textContent = "Arduino";
    			t21 = text(" es que la programación suele ser una programación que está siempre en un constante bucle para que se refresquen los gráficos de la pantalla, la perspectiva de la lógica cambia bastante y está muy bien que la practiquéis.");
    			t22 = space();
    			p6 = element("p");
    			p6.textContent = "Cuidado con ésto porque es un come-horas, pero muy entretenido ;)";
    			t24 = space();
    			create_component(contenttable0.$$.fragment);
    			t25 = space();
    			h21 = element("h2");
    			h21.textContent = "🅵🆁🅰🅼🅴🆆🅾🆁🅺🆂";
    			t27 = space();
    			p7 = element("p");
    			p7.textContent = "Como ya sabéis, hoy en día se utilizan mucho los Frameworks a la hora de trabajar en un proyecto y no habéis tenido la oportunidad de ver nada en clase, salvo una pequeña parte de cómo usar Laravel y Eloquent. El siguiente orden no quiere decir que sean mejor o peor, simplemente es un listado.";
    			t29 = space();
    			create_component(contenttable1.$$.fragment);
    			t30 = space();
    			h22 = element("h2");
    			h22.textContent = "🆅🅸🅳🅴🅾🅹🆄🅴🅶🅾🆂";
    			t32 = space();
    			p8 = element("p");
    			t33 = text("La mayoría seguro que los conocéis pero por si acaso no habéis tenido ocasión de poder jugarlos, os dejo una lista de juegos muy interesantes y ");
    			b0 = element("b");
    			b0.textContent = "algo distintos";
    			t35 = text(" a lo que normalmente se juega hoy en día. Puede que algunos títulos todavía ");
    			b1 = element("b");
    			b1.textContent = "no se hayan estrenado";
    			t37 = text(" pero es bueno que los tengáis en el punto de mira.");
    			t38 = space();
    			p9 = element("p");
    			t39 = text("Es posible que algunos de estos juegos tengan su versión ");
    			b2 = element("b");
    			b2.textContent = "remaster o HD";
    			t41 = text(" así que antes de poneros a jugar yo miraría si existe dicha versión y si no, tiráis de emulación.");
    			t42 = space();
    			create_component(contenttable2.$$.fragment);
    			add_location(h1, file, 5, 4, 103);
    			attr_dev(p0, "class", "blink");
    			add_location(p0, file, 9, 4, 198);
    			add_location(p1, file, 13, 4, 291);
    			add_location(h20, file, 17, 4, 636);
    			add_location(p2, file, 21, 8, 705);
    			attr_dev(a0, "class", "glitch");
    			attr_dev(a0, "href", "https://www.kubii.es/215-raspberry-pi");
    			attr_dev(a0, "target", "_blank");
    			add_location(a0, file, 26, 61, 1193);
    			add_location(p3, file, 25, 8, 1127);
    			attr_dev(a1, "class", "glitch");
    			attr_dev(a1, "href", "https://www.kubii.fr/26-arduino");
    			attr_dev(a1, "target", "_blank");
    			add_location(a1, file, 30, 58, 1371);
    			attr_dev(a2, "class", "glitch");
    			attr_dev(a2, "href", "https://github.com/lupastance/Super-Memo");
    			attr_dev(a2, "target", "_blank");
    			add_location(a2, file, 30, 212, 1525);
    			add_location(p4, file, 29, 8, 1308);
    			attr_dev(a3, "class", "glitch");
    			attr_dev(a3, "href", "https://www.kubii.fr/26-arduino");
    			attr_dev(a3, "target", "_blank");
    			add_location(a3, file, 34, 47, 1792);
    			add_location(p5, file, 33, 8, 1740);
    			add_location(p6, file, 37, 8, 2123);
    			add_location(h21, file, 43, 4, 2285);
    			add_location(p7, file, 46, 8, 2340);
    			add_location(h22, file, 52, 4, 2727);
    			add_location(b0, file, 56, 156, 2945);
    			add_location(b1, file, 56, 254, 3043);
    			add_location(p8, file, 55, 8, 2784);
    			add_location(b2, file, 60, 69, 3222);
    			add_location(p9, file, 59, 8, 3148);
    			add_location(main, file, 4, 0, 91);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, h1);
    			append_dev(main, t1);
    			append_dev(main, p0);
    			append_dev(main, t3);
    			append_dev(main, p1);
    			append_dev(main, t5);
    			append_dev(main, h20);
    			append_dev(main, t7);
    			append_dev(main, p2);
    			append_dev(main, t9);
    			append_dev(main, p3);
    			append_dev(p3, t10);
    			append_dev(p3, a0);
    			append_dev(main, t12);
    			append_dev(main, p4);
    			append_dev(p4, t13);
    			append_dev(p4, a1);
    			append_dev(p4, t15);
    			append_dev(p4, a2);
    			append_dev(p4, t17);
    			append_dev(main, t18);
    			append_dev(main, p5);
    			append_dev(p5, t19);
    			append_dev(p5, a3);
    			append_dev(p5, t21);
    			append_dev(main, t22);
    			append_dev(main, p6);
    			append_dev(main, t24);
    			mount_component(contenttable0, main, null);
    			append_dev(main, t25);
    			append_dev(main, h21);
    			append_dev(main, t27);
    			append_dev(main, p7);
    			append_dev(main, t29);
    			mount_component(contenttable1, main, null);
    			append_dev(main, t30);
    			append_dev(main, h22);
    			append_dev(main, t32);
    			append_dev(main, p8);
    			append_dev(p8, t33);
    			append_dev(p8, b0);
    			append_dev(p8, t35);
    			append_dev(p8, b1);
    			append_dev(p8, t37);
    			append_dev(main, t38);
    			append_dev(main, p9);
    			append_dev(p9, t39);
    			append_dev(p9, b2);
    			append_dev(p9, t41);
    			append_dev(main, t42);
    			mount_component(contenttable2, main, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contenttable0.$$.fragment, local);
    			transition_in(contenttable1.$$.fragment, local);
    			transition_in(contenttable2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contenttable0.$$.fragment, local);
    			transition_out(contenttable1.$$.fragment, local);
    			transition_out(contenttable2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			destroy_component(contenttable0);
    			destroy_component(contenttable1);
    			destroy_component(contenttable2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Index', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Index> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ ContentTable });
    	return [];
    }

    class Index extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Index",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const index = new Index({
    	target: document.body,
    	props: {
    		name: 'TLDR'
    	}
    });

    return index;

})();
//# sourceMappingURL=bundle.js.map
