import{s as De,a as ne,n as J,o as Se}from"../chunks/scheduler.h1jTRUOO.js";import{S as Ce,i as Ie,e as g,s as B,t as se,a as v,j as I,g as y,c as j,k as oe,d as m,b as p,f as V,l as _,m as Ve,q as Q,h as Ae,r as F,u as te,v as q,w as U,x as ae,y as ce,z as ie,A as re,B as le}from"../chunks/index.ZqXQ7sVt.js";function O(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function he(c,e,t){const l=c.slice();return l[4]=e[t],l}function me(c){let e=c[4]+"",t,l;return{c(){t=se(e),l=g("br")},l(n){t=oe(n,e),l=v(n,"BR",{})},m(n,s){V(n,t,s),V(n,l,s)},p(n,s){s&1&&e!==(e=n[4]+"")&&Ve(t,e)},d(n){n&&(m(t),m(l))}}}function de(c){let e,t,l;return{c(){e=g("div"),t=g("img"),this.h()},l(n){e=v(n,"DIV",{class:!0});var s=I(e);t=v(s,"IMG",{src:!0,class:!0,alt:!0}),s.forEach(m),this.h()},h(){ne(t.src,l=c[0].full_picture)||p(t,"src",l),p(t,"class","rounded img-fluid w-100"),p(t,"alt","Facebook"),p(e,"class","col-12 d-flex align-items-center align-content-center")},m(n,s){V(n,e,s),_(e,t)},p(n,s){s&1&&!ne(t.src,l=n[0].full_picture)&&p(t,"src",l)},d(n){n&&m(e)}}}function Te(c){let e,t,l,n,s,i,$="The Animal Sanctuary",z,A,T=c[2](c[0].created_time)+"",x,R,k,Z,G,L,S,N,d,W,w,C=O(c[1](c[0].message)),u=[];for(let f=0;f<C.length;f+=1)u[f]=me(he(c,C,f));let D=c[0].full_picture&&de(c);return{c(){e=g("div"),t=g("div"),l=g("div"),n=g("img"),i=g("b"),i.textContent=$,z=B(),A=g("small"),x=se(T),R=B(),k=g("p");for(let f=0;f<u.length;f+=1)u[f].c();Z=B(),G=g("br"),L=B(),S=g("a"),N=se("See more "),d=g("i"),w=B(),D&&D.c(),this.h()},l(f){e=v(f,"DIV",{class:!0});var b=I(e);t=v(b,"DIV",{class:!0});var r=I(t);l=v(r,"DIV",{class:!0});var H=I(l);n=v(H,"IMG",{src:!0,alt:!0,class:!0}),i=v(H,"B",{"data-svelte-h":!0}),y(i)!=="svelte-9ejnh"&&(i.textContent=$),z=j(H),A=v(H,"SMALL",{class:!0});var E=I(A);x=oe(E,T),E.forEach(m),H.forEach(m),R=j(r),k=v(r,"P",{});var a=I(k);for(let o=0;o<u.length;o+=1)u[o].l(a);Z=j(a),G=v(a,"BR",{}),L=j(a),S=v(a,"A",{href:!0,target:!0,class:!0});var h=I(S);N=oe(h,"See more "),d=v(h,"I",{class:!0}),I(d).forEach(m),h.forEach(m),a.forEach(m),r.forEach(m),w=j(b),D&&D.l(b),b.forEach(m),this.h()},h(){ne(n.src,s="images/news/facebook-logo.png")||p(n,"src",s),p(n,"alt","The Animal Sanctuary NZ Facebook logo"),p(n,"class","custom-news-logo"),p(A,"class","ms-auto"),p(l,"class","d-flex"),p(d,"class","fa-solid fa-arrow-right"),p(S,"href",W=c[0].permalink_url),p(S,"target","_blank"),p(S,"class","in-text-link-facebook"),p(t,"class","col-12 p-2"),p(e,"class","row g-0 mb-3 custom-content-news")},m(f,b){V(f,e,b),_(e,t),_(t,l),_(l,n),_(l,i),_(l,z),_(l,A),_(A,x),_(t,R),_(t,k);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(k,null);_(k,Z),_(k,G),_(k,L),_(k,S),_(S,N),_(S,d),_(e,w),D&&D.m(e,null)},p(f,[b]){if(b&1&&T!==(T=f[2](f[0].created_time)+"")&&Ve(x,T),b&3){C=O(f[1](f[0].message));let r;for(r=0;r<C.length;r+=1){const H=he(f,C,r);u[r]?u[r].p(H,b):(u[r]=me(H),u[r].c(),u[r].m(k,Z))}for(;r<u.length;r+=1)u[r].d(1);u.length=C.length}b&1&&W!==(W=f[0].permalink_url)&&p(S,"href",W),f[0].full_picture?D?D.p(f,b):(D=de(f),D.c(),D.m(e,null)):D&&(D.d(1),D=null)},i:J,o:J,d(f){f&&m(e),Q(u,f),D&&D.d()}}}const xe="News from The Animal Sanctuary.",Ne=65;function Fe(c,e,t){let{post:l}=e;const n=i=>i?(i.split(" ").slice(0,Ne).join(" ")+" ...").split(`
`):[xe],s=i=>{const $={day:"2-digit",month:"short"};return new Intl.DateTimeFormat("en-NZ",$).format(new Date(i)).replace(/^0/,"")};return c.$$set=i=>{"post"in i&&t(0,l=i.post)},[l,n,s]}class fe extends Ce{constructor(e){super(),Ie(this,e,Fe,Te,De,{post:0})}}function _e(c,e,t){const l=c.slice();return l[4]=e[t],l[6]=t,l}function pe(c,e,t){const l=c.slice();return l[4]=e[t],l[6]=t,l}function ge(c,e,t){const l=c.slice();return l[4]=e[t],l[6]=t,l}function ve(c){let e,t="Loading news....";return{c(){e=g("p"),e.textContent=t},l(l){e=v(l,"P",{"data-svelte-h":!0}),y(e)!=="svelte-1a1mu1l"&&(e.textContent=t)},m(l,n){V(l,e,n)},p:J,d(l){l&&m(e)}}}function Le(c){let e,t,l,n;return t=new fe({props:{post:c[4]}}),{c(){e=g("div"),ae(t.$$.fragment),l=B(),this.h()},l(s){e=v(s,"DIV",{class:!0});var i=I(e);ce(t.$$.fragment,i),i.forEach(m),l=j(s),this.h()},h(){p(e,"class","col")},m(s,i){V(s,e,i),ie(t,e,null),V(s,l,i),n=!0},p(s,i){const $={};i&1&&($.post=s[4]),t.$set($)},i(s){n||(F(t.$$.fragment,s),n=!0)},o(s){q(t.$$.fragment,s),n=!1},d(s){s&&(m(e),m(l)),re(t)}}}function be(c){let e=c[1](c[6]),t,l,n=e&&Le(c);return{c(){n&&n.c(),t=U()},l(s){n&&n.l(s),t=U()},m(s,i){n&&n.m(s,i),V(s,t,i),l=!0},p(s,i){e&&n.p(s,i)},i(s){l||(F(n),l=!0)},o(s){q(n),l=!1},d(s){s&&m(t),n&&n.d(s)}}}function we(c){let e,t="Loading news....";return{c(){e=g("p"),e.textContent=t},l(l){e=v(l,"P",{"data-svelte-h":!0}),y(e)!=="svelte-1a1mu1l"&&(e.textContent=t)},m(l,n){V(l,e,n)},p:J,d(l){l&&m(e)}}}function Be(c){let e,t,l,n;return t=new fe({props:{post:c[4]}}),{c(){e=g("div"),ae(t.$$.fragment),l=B(),this.h()},l(s){e=v(s,"DIV",{class:!0});var i=I(e);ce(t.$$.fragment,i),i.forEach(m),l=j(s),this.h()},h(){p(e,"class","col")},m(s,i){V(s,e,i),ie(t,e,null),V(s,l,i),n=!0},p(s,i){const $={};i&1&&($.post=s[4]),t.$set($)},i(s){n||(F(t.$$.fragment,s),n=!0)},o(s){q(t.$$.fragment,s),n=!1},d(s){s&&(m(e),m(l)),re(t)}}}function $e(c){let e=c[2](c[6]),t,l,n=e&&Be(c);return{c(){n&&n.c(),t=U()},l(s){n&&n.l(s),t=U()},m(s,i){n&&n.m(s,i),V(s,t,i),l=!0},p(s,i){e&&n.p(s,i)},i(s){l||(F(n),l=!0)},o(s){q(n),l=!1},d(s){s&&m(t),n&&n.d(s)}}}function ke(c){let e,t="Loading news....";return{c(){e=g("p"),e.textContent=t},l(l){e=v(l,"P",{"data-svelte-h":!0}),y(e)!=="svelte-1a1mu1l"&&(e.textContent=t)},m(l,n){V(l,e,n)},p:J,d(l){l&&m(e)}}}function Ee(c){let e,t,l;return e=new fe({props:{post:c[4]}}),{c(){ae(e.$$.fragment),t=B()},l(n){ce(e.$$.fragment,n),t=j(n)},m(n,s){ie(e,n,s),V(n,t,s),l=!0},p(n,s){const i={};s&1&&(i.post=n[4]),e.$set(i)},i(n){l||(F(e.$$.fragment,n),l=!0)},o(n){q(e.$$.fragment,n),l=!1},d(n){n&&m(t),re(e,n)}}}function je(c){let e,t,l,n="NEWS",s,i,$='<b>Our NEWS page is updated from our Facebook page. To see more, come <a href="https://www.facebook.com/TheAnimalSanctuaryNZ" target="_blank" class="in-text-link-facebook">Follow us on Facebook</a>.</b>',z,A,T,x,R,k,Z,G,L,S,N=O(c[0]),d=[];for(let a=0;a<N.length;a+=1)d[a]=be(ge(c,N,a));const W=a=>q(d[a],1,1,()=>{d[a]=null});let w=null;N.length||(w=ve());let C=O(c[0]),u=[];for(let a=0;a<C.length;a+=1)u[a]=$e(pe(c,C,a));const D=a=>q(u[a],1,1,()=>{u[a]=null});let f=null;C.length||(f=we());let b=O(c[0]),r=[];for(let a=0;a<b.length;a+=1)r[a]=Ee(_e(c,b,a));const H=a=>q(r[a],1,1,()=>{r[a]=null});let E=null;return b.length||(E=ke()),{c(){e=B(),t=g("div"),l=g("h1"),l.textContent=n,s=B(),i=g("p"),i.innerHTML=$,z=B(),A=g("div"),T=g("div"),x=g("div");for(let a=0;a<d.length;a+=1)d[a].c();w&&w.c(),R=B(),k=g("div");for(let a=0;a<u.length;a+=1)u[a].c();f&&f.c(),Z=B(),G=g("div"),L=g("div");for(let a=0;a<r.length;a+=1)r[a].c();E&&E.c(),this.h()},l(a){Ae("svelte-3cujzf",document.head).forEach(m),e=j(a),t=v(a,"DIV",{class:!0});var o=I(t);l=v(o,"H1",{"data-svelte-h":!0}),y(l)!=="svelte-9yag3r"&&(l.textContent=n),s=j(o),i=v(o,"P",{class:!0,"data-svelte-h":!0}),y(i)!=="svelte-10l6n7p"&&(i.innerHTML=$),z=j(o),A=v(o,"DIV",{class:!0});var M=I(A);T=v(M,"DIV",{class:!0});var K=I(T);x=v(K,"DIV",{class:!0});var X=I(x);for(let P=0;P<d.length;P+=1)d[P].l(X);w&&w.l(X),X.forEach(m),R=j(K),k=v(K,"DIV",{class:!0});var Y=I(k);for(let P=0;P<u.length;P+=1)u[P].l(Y);f&&f.l(Y),Y.forEach(m),K.forEach(m),M.forEach(m),Z=j(o),G=v(o,"DIV",{class:!0});var ue=I(G);L=v(ue,"DIV",{class:!0});var ee=I(L);for(let P=0;P<r.length;P+=1)r[P].l(ee);E&&E.l(ee),ee.forEach(m),ue.forEach(m),o.forEach(m),this.h()},h(){document.title="News | The Animal Sanctuary",p(i,"class","text-center"),p(x,"class","col-lg-6 mb-4 mb-lg-0"),p(k,"class","col-lg-6 mb-4 mb-lg-0"),p(T,"class","row"),p(A,"class","d-none d-lg-block"),p(L,"class","row"),p(G,"class","d-block d-lg-none"),p(t,"class","container custom-content shadow-lg")},m(a,h){V(a,e,h),V(a,t,h),_(t,l),_(t,s),_(t,i),_(t,z),_(t,A),_(A,T),_(T,x);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(x,null);w&&w.m(x,null),_(T,R),_(T,k);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(k,null);f&&f.m(k,null),_(t,Z),_(t,G),_(G,L);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(L,null);E&&E.m(L,null),S=!0},p(a,[h]){if(h&3){N=O(a[0]);let o;for(o=0;o<N.length;o+=1){const M=ge(a,N,o);d[o]?(d[o].p(M,h),F(d[o],1)):(d[o]=be(M),d[o].c(),F(d[o],1),d[o].m(x,null))}for(le(),o=N.length;o<d.length;o+=1)W(o);te(),!N.length&&w?w.p(a,h):N.length?w&&(w.d(1),w=null):(w=ve(),w.c(),w.m(x,null))}if(h&5){C=O(a[0]);let o;for(o=0;o<C.length;o+=1){const M=pe(a,C,o);u[o]?(u[o].p(M,h),F(u[o],1)):(u[o]=$e(M),u[o].c(),F(u[o],1),u[o].m(k,null))}for(le(),o=C.length;o<u.length;o+=1)D(o);te(),!C.length&&f?f.p(a,h):C.length?f&&(f.d(1),f=null):(f=we(),f.c(),f.m(k,null))}if(h&1){b=O(a[0]);let o;for(o=0;o<b.length;o+=1){const M=_e(a,b,o);r[o]?(r[o].p(M,h),F(r[o],1)):(r[o]=Ee(M),r[o].c(),F(r[o],1),r[o].m(L,null))}for(le(),o=b.length;o<r.length;o+=1)H(o);te(),!b.length&&E?E.p(a,h):b.length?E&&(E.d(1),E=null):(E=ke(),E.c(),E.m(L,null))}},i(a){if(!S){for(let h=0;h<N.length;h+=1)F(d[h]);for(let h=0;h<C.length;h+=1)F(u[h]);for(let h=0;h<b.length;h+=1)F(r[h]);S=!0}},o(a){d=d.filter(Boolean);for(let h=0;h<d.length;h+=1)q(d[h]);u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)q(u[h]);r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)q(r[h]);S=!1},d(a){a&&(m(e),m(t)),Q(d,a),w&&w.d(),Q(u,a),f&&f.d(),Q(r,a),E&&E.d()}}}const Me="https://560dcon6p6.execute-api.us-east-1.amazonaws.com/default/animal-sanctuary-news-api-poc";function Pe(c,e,t){let l=[];const n=async()=>{const $=await fetch(Me,{method:"GET",headers:{Accept:"application/json"}}),z=await $.json();$.ok&&t(0,l=z.posts.data)},s=$=>$%2===0,i=$=>!s($);return Se(n),[l,s,i]}class Ge extends Ce{constructor(e){super(),Ie(this,e,Pe,je,De,{})}}export{Ge as component};