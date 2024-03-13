import{s as q,a as B,o as U,b as I,t as j}from"../chunks/scheduler.S4wXxuDW.js";import{S as z,i as M,s as W,q as h,c as F,f as g,r as E,u as A,v,d as w,e as G,a as H,j as J,b as O,w as d,t as K,k as Q,m as X,x as D,y as R,z as P,A as T,B as L,C as b}from"../chunks/index.g_WIspXK.js";const Y="modulepreload",Z=function(_,t){return new URL(_,t).href},V={},l=function(t,i,r){let o=Promise.resolve();if(i&&i.length>0){const u=document.getElementsByTagName("link");o=Promise.all(i.map(e=>{if(e=Z(e,r),e in V)return;V[e]=!0;const n=e.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(!!r)for(let c=u.length-1;c>=0;c--){const p=u[c];if(p.href===e&&(!n||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":Y,n||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),n)return new Promise((c,p)=>{s.addEventListener("load",c),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${e}`)))})}))}return o.then(()=>t()).catch(u=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=u,window.dispatchEvent(e),!e.defaultPrevented)throw u})},nt={};function $(_){let t,i,r;var o=_[1][0];function u(e,n){return{props:{data:e[3],form:e[2]}}}return o&&(t=R(o,u(_)),_[12](t)),{c(){t&&P(t.$$.fragment),i=h()},l(e){t&&T(t.$$.fragment,e),i=h()},m(e,n){t&&L(t,e,n),g(e,i,n),r=!0},p(e,n){if(n&2&&o!==(o=e[1][0])){if(t){D();const a=t;E(a.$$.fragment,1,0,()=>{b(a,1)}),A()}o?(t=R(o,u(e)),e[12](t),P(t.$$.fragment),v(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else if(o){const a={};n&8&&(a.data=e[3]),n&4&&(a.form=e[2]),t.$set(a)}},i(e){r||(t&&v(t.$$.fragment,e),r=!0)},o(e){t&&E(t.$$.fragment,e),r=!1},d(e){e&&w(i),_[12](null),t&&b(t,e)}}}function x(_){let t,i,r;var o=_[1][0];function u(e,n){return{props:{data:e[3],$$slots:{default:[tt]},$$scope:{ctx:e}}}}return o&&(t=R(o,u(_)),_[11](t)),{c(){t&&P(t.$$.fragment),i=h()},l(e){t&&T(t.$$.fragment,e),i=h()},m(e,n){t&&L(t,e,n),g(e,i,n),r=!0},p(e,n){if(n&2&&o!==(o=e[1][0])){if(t){D();const a=t;E(a.$$.fragment,1,0,()=>{b(a,1)}),A()}o?(t=R(o,u(e)),e[11](t),P(t.$$.fragment),v(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else if(o){const a={};n&8&&(a.data=e[3]),n&8215&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)}},i(e){r||(t&&v(t.$$.fragment,e),r=!0)},o(e){t&&E(t.$$.fragment,e),r=!1},d(e){e&&w(i),_[11](null),t&&b(t,e)}}}function tt(_){let t,i,r;var o=_[1][1];function u(e,n){return{props:{data:e[4],form:e[2]}}}return o&&(t=R(o,u(_)),_[10](t)),{c(){t&&P(t.$$.fragment),i=h()},l(e){t&&T(t.$$.fragment,e),i=h()},m(e,n){t&&L(t,e,n),g(e,i,n),r=!0},p(e,n){if(n&2&&o!==(o=e[1][1])){if(t){D();const a=t;E(a.$$.fragment,1,0,()=>{b(a,1)}),A()}o?(t=R(o,u(e)),e[10](t),P(t.$$.fragment),v(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else if(o){const a={};n&16&&(a.data=e[4]),n&4&&(a.form=e[2]),t.$set(a)}},i(e){r||(t&&v(t.$$.fragment,e),r=!0)},o(e){t&&E(t.$$.fragment,e),r=!1},d(e){e&&w(i),_[10](null),t&&b(t,e)}}}function k(_){let t,i=_[6]&&y(_);return{c(){t=G("div"),i&&i.c(),this.h()},l(r){t=H(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=J(t);i&&i.l(o),o.forEach(w),this.h()},h(){O(t,"id","svelte-announcer"),O(t,"aria-live","assertive"),O(t,"aria-atomic","true"),d(t,"position","absolute"),d(t,"left","0"),d(t,"top","0"),d(t,"clip","rect(0 0 0 0)"),d(t,"clip-path","inset(50%)"),d(t,"overflow","hidden"),d(t,"white-space","nowrap"),d(t,"width","1px"),d(t,"height","1px")},m(r,o){g(r,t,o),i&&i.m(t,null)},p(r,o){r[6]?i?i.p(r,o):(i=y(r),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(r){r&&w(t),i&&i.d()}}}function y(_){let t;return{c(){t=K(_[7])},l(i){t=Q(i,_[7])},m(i,r){g(i,t,r)},p(i,r){r&128&&X(t,i[7])},d(i){i&&w(t)}}}function et(_){let t,i,r,o,u;const e=[x,$],n=[];function a(s,c){return s[1][1]?0:1}t=a(_),i=n[t]=e[t](_);let f=_[5]&&k(_);return{c(){i.c(),r=W(),f&&f.c(),o=h()},l(s){i.l(s),r=F(s),f&&f.l(s),o=h()},m(s,c){n[t].m(s,c),g(s,r,c),f&&f.m(s,c),g(s,o,c),u=!0},p(s,[c]){let p=t;t=a(s),t===p?n[t].p(s,c):(D(),E(n[p],1,1,()=>{n[p]=null}),A(),i=n[t],i?i.p(s,c):(i=n[t]=e[t](s),i.c()),v(i,1),i.m(r.parentNode,r)),s[5]?f?f.p(s,c):(f=k(s),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null)},i(s){u||(v(i),u=!0)},o(s){E(i),u=!1},d(s){s&&(w(r),w(o)),n[t].d(s),f&&f.d(s)}}}function it(_,t,i){let{stores:r}=t,{page:o}=t,{constructors:u}=t,{components:e=[]}=t,{form:n}=t,{data_0:a=null}=t,{data_1:f=null}=t;B(r.page.notify);let s=!1,c=!1,p=null;U(()=>{const m=r.page.subscribe(()=>{s&&(i(6,c=!0),j().then(()=>{i(7,p=document.title||"untitled page")}))});return i(5,s=!0),m});function N(m){I[m?"unshift":"push"](()=>{e[1]=m,i(0,e)})}function S(m){I[m?"unshift":"push"](()=>{e[0]=m,i(0,e)})}function C(m){I[m?"unshift":"push"](()=>{e[0]=m,i(0,e)})}return _.$$set=m=>{"stores"in m&&i(8,r=m.stores),"page"in m&&i(9,o=m.page),"constructors"in m&&i(1,u=m.constructors),"components"in m&&i(0,e=m.components),"form"in m&&i(2,n=m.form),"data_0"in m&&i(3,a=m.data_0),"data_1"in m&&i(4,f=m.data_1)},_.$$.update=()=>{_.$$.dirty&768&&r.page.set(o)},[e,u,n,a,f,s,c,p,r,o,N,S,C]}class st extends z{constructor(t){super(),M(this,t,it,et,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const _t=[()=>l(()=>import("../nodes/0.uTcPgzRn.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>l(()=>import("../nodes/1.V32GZwCr.js"),__vite__mapDeps([3,1,2,4]),import.meta.url),()=>l(()=>import("../nodes/2.mGf8IPbg.js"),__vite__mapDeps([5,1,2]),import.meta.url),()=>l(()=>import("../nodes/3._zeSeAil.js"),__vite__mapDeps([6,1,2]),import.meta.url),()=>l(()=>import("../nodes/4.manI8mV2.js"),__vite__mapDeps([7,1,2]),import.meta.url),()=>l(()=>import("../nodes/5.Ju5v3YHN.js"),__vite__mapDeps([8,1,2]),import.meta.url),()=>l(()=>import("../nodes/6.vWowZc3C.js"),__vite__mapDeps([9,1,2]),import.meta.url),()=>l(()=>import("../nodes/7.nqy7H6to.js"),__vite__mapDeps([10,1,2]),import.meta.url),()=>l(()=>import("../nodes/8.7RtsKqsp.js"),__vite__mapDeps([11,1,2]),import.meta.url),()=>l(()=>import("../nodes/9.Nk1EkoHS.js"),__vite__mapDeps([12,1,2]),import.meta.url),()=>l(()=>import("../nodes/10.2t9Kzyiw.js"),__vite__mapDeps([13,1,2]),import.meta.url),()=>l(()=>import("../nodes/11.JH0EZr1P.js"),__vite__mapDeps([14,1,2]),import.meta.url),()=>l(()=>import("../nodes/12.xKZNe6bv.js"),__vite__mapDeps([15,1,2]),import.meta.url),()=>l(()=>import("../nodes/13.V6sIKOnD.js"),__vite__mapDeps([16,1,2]),import.meta.url),()=>l(()=>import("../nodes/14.f31JPFiK.js"),__vite__mapDeps([17,1,2]),import.meta.url),()=>l(()=>import("../nodes/15.k7WLK0hG.js"),__vite__mapDeps([18,1,2]),import.meta.url),()=>l(()=>import("../nodes/16.9FsbnVet.js"),__vite__mapDeps([19,1,2]),import.meta.url),()=>l(()=>import("../nodes/17.P1Vv-FUQ.js"),__vite__mapDeps([20,1,2]),import.meta.url),()=>l(()=>import("../nodes/18.SWGKOgQP.js"),__vite__mapDeps([21,1,2]),import.meta.url),()=>l(()=>import("../nodes/19.cGPX0AFH.js"),__vite__mapDeps([22,1,2]),import.meta.url),()=>l(()=>import("../nodes/20.uNAtZaq8.js"),__vite__mapDeps([23,1,2]),import.meta.url),()=>l(()=>import("../nodes/21.9geYnFvh.js"),__vite__mapDeps([24,1,2]),import.meta.url),()=>l(()=>import("../nodes/22.BwmX8vV6.js"),__vite__mapDeps([25,1,2]),import.meta.url),()=>l(()=>import("../nodes/23.AebjhkHs.js"),__vite__mapDeps([26,1,2]),import.meta.url),()=>l(()=>import("../nodes/24.kSHjgifB.js"),__vite__mapDeps([27,1,2]),import.meta.url),()=>l(()=>import("../nodes/25.HJWT0nHr.js"),__vite__mapDeps([28,1,2]),import.meta.url),()=>l(()=>import("../nodes/26.ROTOByS8.js"),__vite__mapDeps([29,1,2]),import.meta.url),()=>l(()=>import("../nodes/27.JKaJAEPW.js"),__vite__mapDeps([30,1,2]),import.meta.url)],at=[],lt={"/":[2],"/about":[3],"/adopt":[4],"/animals-bartholomew":[6],"/animals-dick":[7],"/animals-jose":[8],"/animals-lori":[9],"/animals-nellie":[10],"/animals-peacocks":[11],"/animals-queenie":[12],"/animals-romeo":[13],"/animals-sheep":[14],"/animals-sparky":[15],"/animals-tofu":[16],"/animals":[5],"/contact":[17],"/cowcare":[18],"/donate":[19],"/help":[20],"/hens":[21],"/nativebirds":[22],"/news":[23],"/privacy":[24],"/shop":[25],"/sitemap":[26],"/support":[27]},mt={handleError:({error:_})=>{console.error(_)},reroute:()=>{}};export{lt as dictionary,mt as hooks,nt as matchers,_t as nodes,st as root,at as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.uTcPgzRn.js","../chunks/scheduler.S4wXxuDW.js","../chunks/index.g_WIspXK.js","../nodes/1.V32GZwCr.js","../chunks/entry.tK74edGX.js","../nodes/2.mGf8IPbg.js","../nodes/3._zeSeAil.js","../nodes/4.manI8mV2.js","../nodes/5.Ju5v3YHN.js","../nodes/6.vWowZc3C.js","../nodes/7.nqy7H6to.js","../nodes/8.7RtsKqsp.js","../nodes/9.Nk1EkoHS.js","../nodes/10.2t9Kzyiw.js","../nodes/11.JH0EZr1P.js","../nodes/12.xKZNe6bv.js","../nodes/13.V6sIKOnD.js","../nodes/14.f31JPFiK.js","../nodes/15.k7WLK0hG.js","../nodes/16.9FsbnVet.js","../nodes/17.P1Vv-FUQ.js","../nodes/18.SWGKOgQP.js","../nodes/19.cGPX0AFH.js","../nodes/20.uNAtZaq8.js","../nodes/21.9geYnFvh.js","../nodes/22.BwmX8vV6.js","../nodes/23.AebjhkHs.js","../nodes/24.kSHjgifB.js","../nodes/25.HJWT0nHr.js","../nodes/26.ROTOByS8.js","../nodes/27.JKaJAEPW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
