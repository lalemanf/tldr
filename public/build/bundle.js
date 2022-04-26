var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,c;function l(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function m(){return f(" ")}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e){c=e}function b(){if(!c)throw new Error("Function called outside component initialization");return c}const $=[],y=[],v=[],k=[],w=Promise.resolve();let q=!1;function x(e){v.push(e)}const _=new Set;let j=0;function E(){const e=c;do{for(;j<$.length;){const e=$[j];j++,g(e),C(e.$$)}for(g(null),$.length=0,j=0;y.length;)y.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];_.has(t)||(_.add(t),t())}v.length=0}while($.length);for(;k.length;)k.pop()();q=!1,_.clear(),g(e)}function C(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const L=new Set;let M;function T(e,t){e&&e.i&&(L.delete(e),e.i(t))}function A(e,t,n,o){if(e&&e.o){if(L.has(e))return;L.add(e),M.c.push((()=>{L.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function H(e,t){const n=t.token={};function r(e,r,a,s){if(t.token!==n)return;t.resolved=s;let c=t.ctx;void 0!==a&&(c=c.slice(),c[a]=s);const l=e&&(t.current=e)(c);let u=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==r&&e&&(M={r:0,c:[],p:M},A(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),M.r||o(M.c),M=M.p)})):t.block.d(1),l.c(),T(l,1),l.m(t.mount(),t.anchor),u=!0),t.block=l,t.blocks&&(t.blocks[r]=l),u&&E()}if((a=e)&&"object"==typeof a&&"function"==typeof a.then){const n=b();if(e.then((e=>{g(n),r(t.then,1,t.value,e),g(null)}),(e=>{if(g(n),r(t.catch,2,t.error,e),g(null),!t.hasCatch)throw e})),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}var a}function N(e){e&&e.c()}function S(e,n,a,s){const{fragment:c,on_mount:l,on_destroy:u,after_update:i}=e.$$;c&&c.m(n,a),s||x((()=>{const n=l.map(t).filter(r);u?u.push(...n):o(n),e.$$.on_mount=[]})),i.forEach(x)}function z(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function O(e,t){-1===e.$$.dirty[0]&&($.push(e),q||(q=!0,w.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(t,r,a,s,l,u,d,p=[-1]){const f=c;g(t);const m=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:r.target||f.$$.root};d&&d(m.root);let h=!1;if(m.ctx=a?a(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&l(m.ctx[e],m.ctx[e]=r)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](r),h&&O(t,e)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);m.fragment&&m.fragment.l(e),e.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&T(t.$$.fragment),S(t,r.target,r.anchor,r.customElement),E()}g(f)}class R{$destroy(){z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function I(e,t,n){const o=e.slice();return o[5]=t[n],o}function P(e,t,n){const o=e.slice();return o[1]=t[n],o}function U(t){return{c:e,m:e,p:e,d:e}}function B(e){let t;function n(e,t){return"games"!==e[0]?K:F}let o=n(e),r=o(e);return{c(){r.c(),t=f("")},m(e,n){r.m(e,n),u(e,t,n)},p(e,a){o===(o=n(e))&&r?r.p(e,a):(r.d(1),r=o(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&i(t)}}}function F(e){let t,n,o,r,a,s=e[1].length+"",c=e[1],g=[];for(let t=0;t<c.length;t+=1)g[t]=G(I(e,c,t));return{c(){t=p("div");for(let e=0;e<g.length;e+=1)g[e].c();n=m(),o=p("p"),r=f("Total juegos: "),a=f(s),h(t,"class","covers svelte-7ljvdw"),h(o,"class","total")},m(e,s){u(e,t,s);for(let e=0;e<g.length;e+=1)g[e].m(t,null);u(e,n,s),u(e,o,s),l(o,r),l(o,a)},p(e,n){if(2&n){let o;for(c=e[1],o=0;o<c.length;o+=1){const r=I(e,c,o);g[o]?g[o].p(r,n):(g[o]=G(r),g[o].c(),g[o].m(t,null))}for(;o<g.length;o+=1)g[o].d(1);g.length=c.length}},d(e){e&&i(t),d(g,e),e&&i(n),e&&i(o)}}}function K(e){let t,n,o,r,a,s=e[1],c=[];for(let t=0;t<s.length;t+=1)c[t]=J(P(e,s,t));return{c(){t=p("figure"),n=p("table"),o=p("thead"),o.innerHTML="<tr><th>Nombre del proyecto &amp; descripción</th> \n                            <th>Enlace</th></tr>",r=m(),a=p("tbody");for(let e=0;e<c.length;e+=1)c[e].c()},m(e,s){u(e,t,s),l(t,n),l(n,o),l(n,r),l(n,a);for(let e=0;e<c.length;e+=1)c[e].m(a,null)},p(e,t){if(2&t){let n;for(s=e[1],n=0;n<s.length;n+=1){const o=P(e,s,n);c[n]?c[n].p(o,t):(c[n]=J(o),c[n].c(),c[n].m(a,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=s.length}},d(e){e&&i(t),d(c,e)}}}function G(t){let n,o,r,a,c,d,f,g;return{c(){var e,l;n=p("div"),o=p("a"),r=p("img"),g=m(),h(r,"alt",a=t[5].name),e=r.src,l=c="public/img/"+t[5].slug+".jpg",s||(s=document.createElement("a")),s.href=l,e!==s.href&&h(r,"src",c),h(r,"class","svelte-7ljvdw"),h(o,"href",d="https://www.youtube.com/watch?v="+t[5].youtube),h(o,"title",f=t[5].name),h(o,"target","_blank"),h(n,"class","cover svelte-7ljvdw")},m(e,t){u(e,n,t),l(n,o),l(o,r),l(n,g)},p:e,d(e){e&&i(n)}}}function J(t){let n,o,r,a,s,c,d,g,b,$,y,v=t[1].name+"",k=t[1].description+"",w=t[1]["link-title"]+"";return{c(){n=p("tr"),o=p("td"),r=f(v),a=f(" ~ "),s=f(k),c=m(),d=p("td"),g=p("a"),b=f(w),y=m(),h(g,"href",$=t[1].link),h(g,"target","_blank"),h(g,"class","glitch")},m(e,t){u(e,n,t),l(n,o),l(o,r),l(o,a),l(o,s),l(n,c),l(n,d),l(d,g),l(g,b),l(n,y)},p:e,d(e){e&&i(n)}}}function Q(t){let n;return{c(){n=p("p"),n.textContent="Loading Data..."},m(e,t){u(e,n,t)},p:e,d(e){e&&i(n)}}}function V(t){let n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:Q,then:B,catch:U,value:1};return H(t[1],o),{c(){n=p("main"),o.block.c()},m(e,t){u(e,n,t),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null},p(e,[n]){!function(e,t,n){const o=t.slice(),{resolved:r}=e;e.current===e.then&&(o[e.value]=r),e.current===e.catch&&(o[e.error]=r),e.block.p(o,n)}(o,t=e,n)},i:e,o:e,d(e){e&&i(n),o.block.d(),o.token=null,o=null}}}function W(e,t,n){let{database:o}=t;let r=fetch("https://tldr-ea4a5-default-rtdb.europe-west1.firebasedatabase.app/"+o+".json").then((e=>e.json())).then((e=>e)).catch((e=>console.error(e)));return e.$$set=e=>{"database"in e&&n(0,o=e.database)},[o,r]}class X extends R{constructor(e){super(),D(this,e,W,V,a,{database:0})}}function Y(t){let n,o,r,a,s,c,d,f,g,b,$,y,v,k,w,q,x,_,j,E,C,L,M,H,O,D,R,I,P,U,B,F,K,G,J;return E=new X({props:{database:"microcomputers"}}),D=new X({props:{database:"frameworks"}}),G=new X({props:{database:"games"}}),{c(){n=p("main"),o=p("h1"),o.textContent="T̷̢̟͓̝̪̖̳̒͑̄͒̈̾̌̀̿L̵̛̛̩̜̹̼̹͕̺͒̀Ḏ̶͎͙̲̑͗͝R̸͍̝̰͖͈͖̮̪̮̯̓̏͂̌̏̉͌͊͑̓",r=m(),a=p("p"),a.textContent="Última actualización /// 26 de Abril de 2022",s=m(),c=p("p"),c.textContent="En este documento se recogen varios consejos y curiosidades que me han parecido interesantes. Espero que os sea de utilidad en vuestra nueva etapa como desarrolladores y os animo a que, de vez en cuando, os hagáis el mismo documento para vosotros mismos y veáis cuánto habéis avanzado con el transcurso del tiempo.",d=m(),f=p("h2"),f.textContent="🅼🅸🅲🆁🅾 🅾🆁🅳🅴🅽🅰🅳🅾🆁🅴🆂",g=m(),b=p("p"),b.textContent="A todos aquellos a los que os gusta trastear y configurar servidores o crear aplicaciones chorra, os recomiendo que os hagáis con una Raspberry o similar. El uso que le vayáis a dar puede ser simplemente autodidáctico, donde poco a poco cogeréis soltura a la hora de entender los diferentes sistemas e incluso haceros una idea de cómo debe gestionarse bien un sistema o servidor.",$=m(),y=p("p"),y.innerHTML='Una buena web para comprar este tipo de cosas es <a class="glitch" href="https://www.kubii.es/215-raspberry-pi" target="_blank">KUBII</a>',v=m(),k=p("p"),k.innerHTML='Si te va más la electrónica puedes probar con <a class="glitch" href="https://www.kubii.fr/26-arduino" target="_blank">Arduino</a> que también da muchísimo juego. Os dejo también por aquí el proyecto <a class="glitch" href="https://github.com/lupastance/Super-Memo" target="_blank">SUPER MEMO</a> que hice con esta plaquita, un pequeño juego al más puro estilo SIMÓN (el de los 4 colores).',w=m(),q=p("p"),q.innerHTML='La diferencia de los proyectos con <a class="glitch" href="https://www.kubii.fr/26-arduino" target="_blank">Arduino</a> es que la programación suele ser una programación que está siempre en un constante bucle para que se refresquen los gráficos de la pantalla, la perspectiva de la lógica cambia bastante y está muy bien que la practiquéis.',x=m(),_=p("p"),_.textContent="Cuidado con ésto porque es un come-horas, pero muy entretenido ;)",j=m(),N(E.$$.fragment),C=m(),L=p("h2"),L.textContent="🅵🆁🅰🅼🅴🆆🅾🆁🅺🆂",M=m(),H=p("p"),H.textContent="Como ya sabéis, hoy en día se utilizan mucho los Frameworks a la hora de trabajar en un proyecto y no habéis tenido la oportunidad de ver nada en clase, salvo una pequeña parte de cómo usar Laravel y Eloquent. El siguiente orden no quiere decir que sean mejor o peor, simplemente es un listado.",O=m(),N(D.$$.fragment),R=m(),I=p("h2"),I.textContent="🆅🅸🅳🅴🅾🅹🆄🅴🅶🅾🆂",P=m(),U=p("p"),U.innerHTML="La mayoría seguro que los conocéis pero por si acaso no habéis tenido ocasión de poder jugarlos, os dejo una lista de juegos muy interesantes y <b>algo distintos</b> a lo que normalmente se juega hoy en día. Puede que algunos títulos todavía <b>no se hayan estrenado</b> pero es bueno que los tengáis en el punto de mira.",B=m(),F=p("p"),F.innerHTML="Es posible que algunos de estos juegos tengan su versión <b>remaster o HD</b> así que antes de poneros a jugar yo miraría si existe dicha versión y si no, tiráis de emulación.",K=m(),N(G.$$.fragment),h(a,"class","blink")},m(e,t){u(e,n,t),l(n,o),l(n,r),l(n,a),l(n,s),l(n,c),l(n,d),l(n,f),l(n,g),l(n,b),l(n,$),l(n,y),l(n,v),l(n,k),l(n,w),l(n,q),l(n,x),l(n,_),l(n,j),S(E,n,null),l(n,C),l(n,L),l(n,M),l(n,H),l(n,O),S(D,n,null),l(n,R),l(n,I),l(n,P),l(n,U),l(n,B),l(n,F),l(n,K),S(G,n,null),J=!0},p:e,i(e){J||(T(E.$$.fragment,e),T(D.$$.fragment,e),T(G.$$.fragment,e),J=!0)},o(e){A(E.$$.fragment,e),A(D.$$.fragment,e),A(G.$$.fragment,e),J=!1},d(e){e&&i(n),z(E),z(D),z(G)}}}return new class extends R{constructor(e){super(),D(this,e,null,Y,a,{})}}({target:document.body,props:{name:"TLDR"}})}();
//# sourceMappingURL=bundle.js.map
