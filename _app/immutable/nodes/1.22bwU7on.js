import{s as S,n as _,c as x}from"../chunks/scheduler.kAlY8CUs.js";import{S as j,i as q,e as f,t as d,s as y,a as g,j as h,m as v,d as l,c as C,f as m,l as $,n as E}from"../chunks/index.0fZ7xqdG.js";import{s as H}from"../chunks/entry.nuhVfYrO.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",n,o,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),n=d(r),o=y(),i=f("p"),u=d(c)},l(e){t=g(e,"H1",{});var a=h(t);n=v(a,r),a.forEach(l),o=C(e),i=g(e,"P",{});var p=h(i);u=v(p,c),p.forEach(l)},m(e,a){m(e,t,a),$(t,n),m(e,o,a),m(e,i,a),$(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(n,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:_,o:_,d(e){e&&(l(t),l(o),l(i))}}}function z(s,t,r){let n;return x(s,k,o=>r(0,n=o)),[n]}let F=class extends j{constructor(t){super(),q(this,t,z,w,S,{})}};export{F as component};
