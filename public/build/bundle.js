var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,l;function i(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function p(){return f(" ")}function h(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $(e){l=e}function v(){if(!l)throw new Error("Function called outside component initialization");return l}const y=[],k=[],q=[],w=[],j=Promise.resolve();let x=!1;function _(e){q.push(e)}const E=new Set;let L=0;function M(){const e=l;do{for(;L<y.length;){const e=y[L];L++,$(e),T(e.$$)}for($(null),y.length=0,L=0;k.length;)k.pop()();for(let e=0;e<q.length;e+=1){const t=q[e];E.has(t)||(E.add(t),t())}q.length=0}while(y.length);for(;w.length;)w.pop()();x=!1,E.clear(),$(e)}function T(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const C=new Set;let H;function A(e,t){e&&e.i&&(C.delete(e),e.i(t))}function S(e,t,n,o){if(e&&e.o){if(C.has(e))return;C.add(e),H.c.push((()=>{C.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function N(e,t){const n=t.token={};function r(e,r,a,s){if(t.token!==n)return;t.resolved=s;let l=t.ctx;void 0!==a&&(l=l.slice(),l[a]=s);const i=e&&(t.current=e)(l);let c=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==r&&e&&(H={r:0,c:[],p:H},S(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),H.r||o(H.c),H=H.p)})):t.block.d(1),i.c(),A(i,1),i.m(t.mount(),t.anchor),c=!0),t.block=i,t.blocks&&(t.blocks[r]=i),c&&M()}if((a=e)&&"object"==typeof a&&"function"==typeof a.then){const n=v();if(e.then((e=>{$(n),r(t.then,1,t.value,e),$(null)}),(e=>{if($(n),r(t.catch,2,t.error,e),$(null),!t.hasCatch)throw e})),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}var a}function z(e){e&&e.c()}function D(e,n,a,s){const{fragment:l,on_mount:i,on_destroy:c,after_update:u}=e.$$;l&&l.m(n,a),s||_((()=>{const n=i.map(t).filter(r);c?c.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(_)}function O(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function R(e,t){-1===e.$$.dirty[0]&&(y.push(e),x||(x=!0,j.then(M)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,r,a,s,i,c,d,m=[-1]){const f=l;$(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:r.target||f.$$.root};d&&d(p.root);let h=!1;if(p.ctx=a?a(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),h&&R(t,e)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&A(t.$$.fragment),D(t,r.target,r.anchor,r.customElement),M()}$(f)}class P{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function B(e,t,n){const o=e.slice();return o[5]=t[n],o}function I(e,t,n){const o=e.slice();return o[1]=t[n],o}function U(t){return{c:e,m:e,p:e,d:e}}function K(e){let t;function n(e,t){return"games"!==e[0]?J:G}let o=n(e),r=o(e);return{c(){r.c(),t=f("")},m(e,n){r.m(e,n),c(e,t,n)},p(e,a){o===(o=n(e))&&r?r.p(e,a):(r.d(1),r=o(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&u(t)}}}function G(e){let t,n,o,r,a,s=e[1].length+"",l=e[1],h=[];for(let t=0;t<l.length;t+=1)h[t]=Q(B(e,l,t));return{c(){t=m("div");for(let e=0;e<h.length;e+=1)h[e].c();n=p(),o=m("p"),r=f("Total juegos: "),a=f(s),g(t,"class","covers svelte-7ljvdw"),g(o,"class","total")},m(e,s){c(e,t,s);for(let e=0;e<h.length;e+=1)h[e].m(t,null);c(e,n,s),c(e,o,s),i(o,r),i(o,a)},p(e,n){if(2&n){let o;for(l=e[1],o=0;o<l.length;o+=1){const r=B(e,l,o);h[o]?h[o].p(r,n):(h[o]=Q(r),h[o].c(),h[o].m(t,null))}for(;o<h.length;o+=1)h[o].d(1);h.length=l.length}},d(e){e&&u(t),d(h,e),e&&u(n),e&&u(o)}}}function J(e){let t,n,o,r,a,s=e[1],l=[];for(let t=0;t<s.length;t+=1)l[t]=V(I(e,s,t));return{c(){t=m("figure"),n=m("table"),o=m("thead"),o.innerHTML="<tr><th>Nombre del proyecto &amp; descripción</th> \n                            <th>Enlace</th></tr>",r=p(),a=m("tbody");for(let e=0;e<l.length;e+=1)l[e].c()},m(e,s){c(e,t,s),i(t,n),i(n,o),i(n,r),i(n,a);for(let e=0;e<l.length;e+=1)l[e].m(a,null)},p(e,t){if(2&t){let n;for(s=e[1],n=0;n<s.length;n+=1){const o=I(e,s,n);l[n]?l[n].p(o,t):(l[n]=V(o),l[n].c(),l[n].m(a,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(e){e&&u(t),d(l,e)}}}function Q(t){let n,o,r,a,l,d,f,h;return{c(){var e,i;n=m("div"),o=m("a"),r=m("img"),h=p(),g(r,"alt",a=t[5].name),e=r.src,i=l="public/img/"+t[5].slug+".jpg",s||(s=document.createElement("a")),s.href=i,e!==s.href&&g(r,"src",l),g(r,"class","svelte-7ljvdw"),g(o,"href",d="https://www.youtube.com/watch?v="+t[5].youtube),g(o,"title",f=t[5].name),g(o,"target","_blank"),g(n,"class","cover svelte-7ljvdw")},m(e,t){c(e,n,t),i(n,o),i(o,r),i(n,h)},p:e,d(e){e&&u(n)}}}function V(t){let n,o,r,a,s,l,d,h,b,$,v,y=t[1].name+"",k=t[1].description+"",q=t[1]["link-title"]+"";return{c(){n=m("tr"),o=m("td"),r=f(y),a=f(" ~ "),s=f(k),l=p(),d=m("td"),h=m("a"),b=f(q),v=p(),g(h,"href",$=t[1].link),g(h,"target","_blank")},m(e,t){c(e,n,t),i(n,o),i(o,r),i(o,a),i(o,s),i(n,l),i(n,d),i(d,h),i(h,b),i(n,v)},p:e,d(e){e&&u(n)}}}function W(t){let n;return{c(){n=m("p"),n.textContent="Loading Data..."},m(e,t){c(e,n,t)},p:e,d(e){e&&u(n)}}}function X(t){let n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:W,then:K,catch:U,value:1};return N(t[1],o),{c(){n=m("main"),o.block.c()},m(e,t){c(e,n,t),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null},p(e,[n]){!function(e,t,n){const o=t.slice(),{resolved:r}=e;e.current===e.then&&(o[e.value]=r),e.current===e.catch&&(o[e.error]=r),e.block.p(o,n)}(o,t=e,n)},i:e,o:e,d(e){e&&u(n),o.block.d(),o.token=null,o=null}}}function Y(e,t,n){let{database:o}=t;let r=fetch("https://tldr-ea4a5-default-rtdb.europe-west1.firebasedatabase.app/"+o+".json").then((e=>e.json())).then((e=>e)).catch((e=>console.error(e)));return e.$$set=e=>{"database"in e&&n(0,o=e.database)},[o,r]}class Z extends P{constructor(e){super(),F(this,e,Y,X,a,{database:0})}}function ee(e,t,n){const o=e.slice();return o[3]=t[n],o}function te(e,t,n){const o=e.slice();return o[3]=t[n],o}function ne(e){let t,n,o,r,a,s,l=e[0],f=[];for(let t=0;t<l.length;t+=1)f[t]=oe(te(e,l,t));return{c(){t=m("div"),n=m("h1"),n.textContent="T̷̢̟͓̝̪̖̳̒͑̄͒̈̾̌̀̿L̵̛̛̩̜̹̼̹͕̺͒̀Ḏ̶͎͙̲̑͗͝R̸͍̝̰͖͈͖̮̪̮̯̓̏͂̌̏̉͌͊͑̓",o=p(),r=m("ul");for(let e=0;e<f.length;e+=1)f[e].c();g(n,"class","blink svelte-10m2b5q"),g(r,"class","svelte-10m2b5q"),g(t,"class","menu-aside svelte-10m2b5q")},m(l,u){c(l,t,u),i(t,n),i(t,o),i(t,r);for(let e=0;e<f.length;e+=1)f[e].m(r,null);a||(s=h(t,"click",e[2]),a=!0)},p(e,t){if(5&t){let n;for(l=e[0],n=0;n<l.length;n+=1){const o=te(e,l,n);f[n]?f[n].p(o,t):(f[n]=oe(o),f[n].c(),f[n].m(r,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=l.length}},d(e){e&&u(t),d(f,e),a=!1,s()}}}function oe(e){let t,n,o,r,a,s,l,d,$=e[3]+"";return{c(){t=m("li"),n=m("a"),o=f($),s=p(),g(n,"class","glitch svelte-10m2b5q"),g(n,"href",r="#"+e[3]),g(n,"title",a=e[3]),g(t,"class","svelte-10m2b5q")},m(r,a){c(r,t,a),i(t,n),i(n,o),i(t,s),l||(d=h(n,"click",e[2]),l=!0)},p(e,t){1&t&&$!==($=e[3]+"")&&b(o,$),1&t&&r!==(r="#"+e[3])&&g(n,"href",r),1&t&&a!==(a=e[3])&&g(n,"title",a)},d(e){e&&u(t),l=!1,d()}}}function re(e){let t,n,o,r,a,s,l=e[3]+"";return{c(){t=m("li"),n=m("a"),o=f(l),s=p(),g(n,"class","glitch svelte-10m2b5q"),g(n,"href",r="#"+e[3]),g(n,"title",a=e[3])},m(e,r){c(e,t,r),i(t,n),i(n,o),i(t,s)},p(e,t){1&t&&l!==(l=e[3]+"")&&b(o,l),1&t&&r!==(r="#"+e[3])&&g(n,"href",r),1&t&&a!==(a=e[3])&&g(n,"title",a)},d(e){e&&u(t)}}}function ae(t){let n,o,r,a,s,l,f,b=t[1]&&ne(t),$=t[0],v=[];for(let e=0;e<$.length;e+=1)v[e]=re(ee(t,$,e));return{c(){n=m("main"),o=m("span"),o.innerHTML='<img class="blink svelte-10m2b5q" src="public/img/menu.png" alt=""/>',r=p(),b&&b.c(),a=p(),s=m("ul");for(let e=0;e<v.length;e+=1)v[e].c();g(o,"class","menu-trigger svelte-10m2b5q"),g(s,"class","menu svelte-10m2b5q")},m(e,u){c(e,n,u),i(n,o),i(n,r),b&&b.m(n,null),i(n,a),i(n,s);for(let e=0;e<v.length;e+=1)v[e].m(s,null);l||(f=h(o,"click",t[2]),l=!0)},p(e,[t]){if(e[1]?b?b.p(e,t):(b=ne(e),b.c(),b.m(n,a)):b&&(b.d(1),b=null),1&t){let n;for($=e[0],n=0;n<$.length;n+=1){const o=ee(e,$,n);v[n]?v[n].p(o,t):(v[n]=re(o),v[n].c(),v[n].m(s,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}},i:e,o:e,d(e){e&&u(n),b&&b.d(),d(v,e),l=!1,f()}}}function se(e,t,n){let{items:o}=t,r=!1;return e.$$set=e=>{"items"in e&&n(0,o=e.items)},[o,r,function(){n(1,r=!r),document.documentElement.style.overflow=r?"hidden":"scroll"}]}class le extends P{constructor(e){super(),F(this,e,se,ae,a,{items:0})}}function ie(t){let n,o,r,a,s,l,d,f,h,b,$,v,y,k,q,w,j,x,_,E,L,M,T,C,H,N,R,F,P,B,I,U,K,G,J,Q,V,W,X,Y,ee,te,ne,oe,re;return a=new le({props:{items:t[0]}}),M=new Z({props:{database:"microcomputers"}}),F=new Z({props:{database:"frameworks"}}),W=new Z({props:{database:"games"}}),{c(){n=m("main"),o=m("h1"),o.textContent="T̷̢̟͓̝̪̖̳̒͑̄͒̈̾̌̀̿L̵̛̛̩̜̹̼̹͕̺͒̀Ḏ̶͎͙̲̑͗͝R̸͍̝̰͖͈͖̮̪̮̯̓̏͂̌̏̉͌͊͑̓",r=p(),z(a.$$.fragment),s=p(),l=m("p"),l.textContent="Actualizado: 29 / 04 / 2022",d=p(),f=m("p"),f.textContent="En este documento se recogen varios consejos y curiosidades que me han parecido interesantes. Espero que os sea de utilidad en vuestra nueva etapa como desarrolladores y os animo a que, de vez en cuando, os hagáis el mismo documento para vosotros mismos y veáis cuánto habéis avanzado con el transcurso del tiempo.",h=p(),b=m("h2"),b.innerHTML='<a href="#top">🅼🅸🅲🆁🅾 🅾🆁🅳🅴🅽🅰🅳🅾🆁🅴🆂</a>',$=p(),v=m("p"),v.textContent="A todos aquellos a los que os gusta trastear y configurar servidores o crear aplicaciones chorra, os recomiendo que os hagáis con una Raspberry o similar. El uso que le vayáis a dar puede ser simplemente autodidáctico, donde poco a poco cogeréis soltura a la hora de entender los diferentes sistemas e incluso haceros una idea de cómo debe gestionarse bien un sistema o servidor.",y=p(),k=m("p"),k.innerHTML='Una buena web para comprar este tipo de cosas es <a href="https://www.kubii.es/215-raspberry-pi" target="_blank">KUBII</a>',q=p(),w=m("p"),w.innerHTML='Si te va más la electrónica puedes probar con <a href="https://www.kubii.fr/26-arduino" target="_blank">Arduino</a> que también da muchísimo juego. Os dejo también por aquí el proyecto <a href="https://github.com/lupastance/Super-Memo" target="_blank">SUPER MEMO</a> que hice con esta plaquita, un pequeño juego al más puro estilo SIMÓN (el de los 4 colores).',j=p(),x=m("p"),x.innerHTML='La diferencia de los proyectos con <a href="https://www.kubii.fr/26-arduino" target="_blank">Arduino</a> es que la programación suele ser una programación que está siempre en un constante bucle para que se refresquen los gráficos de la pantalla, la perspectiva de la lógica cambia bastante y está muy bien que la practiquéis.',_=p(),E=m("p"),E.textContent="Cuidado con ésto porque es un come-horas, pero muy entretenido ;)",L=p(),z(M.$$.fragment),T=p(),C=m("h2"),C.innerHTML='<a href="#top">🅵🆁🅰🅼🅴🆆🅾🆁🅺🆂</a>',H=p(),N=m("p"),N.textContent="Como ya sabéis, hoy en día se utilizan mucho los Frameworks a la hora de trabajar en un proyecto y no habéis tenido la oportunidad de ver nada en clase, salvo una pequeña parte de cómo usar Laravel y Eloquent. El siguiente orden no quiere decir que sean mejor o peor, simplemente es un listado.",R=p(),z(F.$$.fragment),P=p(),B=m("h2"),B.innerHTML='<a href="#top">🆅🅸🅳🅴🅾🅹🆄🅴🅶🅾🆂</a>',I=p(),U=m("p"),U.innerHTML="La mayoría seguro que los conocéis pero por si acaso no habéis tenido ocasión de poder jugarlos, os dejo una lista de juegos muy interesantes y <b>algo distintos</b> a lo que normalmente se juega hoy en día. Puede que algunos títulos todavía <b>no se hayan estrenado</b> pero es bueno que los tengáis en el punto de mira.",K=p(),G=m("p"),G.innerHTML="Seguramente veréis juegos que son muy conocidos y no tan raros, que forman parte de alguna saga como <b>Final Fantasy</b> o el incansable <b>Mario Bros.</b> pero os pongo los juegos de dichas sagas que considero los mejores (siempre dentro de mi humilde opinión como jugón desde los 80) o, por lo menos, distintos al resto.",J=p(),Q=m("p"),Q.innerHTML="Es posible que algunos de estos juegos tengan su versión <b>remaster o HD</b> así que antes de poneros a jugar yo miraría si existe dicha versión y si no, tiráis de emulación.",V=p(),z(W.$$.fragment),X=p(),Y=m("h2"),Y.innerHTML='<a href="#top">🅲🅸🅽🅴🅼🅰</a>',ee=p(),te=m("p"),te.textContent="En el siguiente listado se muestran películas, series y documentales relacionados con el mundo de la informática y los videojuegos. Contenido que considero bastante interesante y que, si no tenéis nada mejor que hacer o no os apetece jugar a ningún juego de la lista y estáis algo aburrid@s, le deis una oportunidad a alguna de estas cintas.",ne=p(),oe=m("p"),oe.textContent="Próximamente",g(o,"id","top"),g(l,"class","blink"),g(b,"id","microordenadores"),g(C,"id","frameworks"),g(B,"id","videojuegos"),g(Y,"id","cinema"),g(oe,"class","blink")},m(e,t){c(e,n,t),i(n,o),i(n,r),D(a,n,null),i(n,s),i(n,l),i(n,d),i(n,f),i(n,h),i(n,b),i(n,$),i(n,v),i(n,y),i(n,k),i(n,q),i(n,w),i(n,j),i(n,x),i(n,_),i(n,E),i(n,L),D(M,n,null),i(n,T),i(n,C),i(n,H),i(n,N),i(n,R),D(F,n,null),i(n,P),i(n,B),i(n,I),i(n,U),i(n,K),i(n,G),i(n,J),i(n,Q),i(n,V),D(W,n,null),i(n,X),i(n,Y),i(n,ee),i(n,te),i(n,ne),i(n,oe),re=!0},p:e,i(e){re||(A(a.$$.fragment,e),A(M.$$.fragment,e),A(F.$$.fragment,e),A(W.$$.fragment,e),re=!0)},o(e){S(a.$$.fragment,e),S(M.$$.fragment,e),S(F.$$.fragment,e),S(W.$$.fragment,e),re=!1},d(e){e&&u(n),O(a),O(M),O(F),O(W)}}}function ce(e){return[["microordenadores","frameworks","videojuegos","cinema"]]}return new class extends P{constructor(e){super(),F(this,e,ce,ie,a,{})}}({target:document.body,props:{name:"TLDR"}})}();
//# sourceMappingURL=bundle.js.map
