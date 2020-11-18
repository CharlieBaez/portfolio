var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function a(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){t=""+t,e.data!==t&&(e.data=t)}let g;function b(e){g=e}const v=[],$=[],w=[],A=[],E=Promise.resolve();let x=!1;function y(e){w.push(e)}function D(){const e=new Set;do{for(;v.length;){const e=v.shift();b(e),k(e.$$)}for(;$.length;)$.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];e.has(n)||(n(),e.add(n))}w.length=0}while(v.length);for(;A.length;)A.pop()();x=!1}function k(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const S=new Set;let I;function T(e,t){e&&e.i&&(S.delete(e),e.i(t))}function R(e,t,n,o){if(e&&e.o){if(S.has(e))return;S.add(e),I.c.push(()=>{S.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function _(e){e&&e.c()}function C(e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:c}=e.$$;s&&s.m(n,r),y(()=>{const n=l.map(t).filter(a);i?i.push(...n):o(n),e.$$.on_mount=[]}),c.forEach(y)}function N(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function B(e,t){-1===e.$$.dirty[0]&&(v.push(e),x||(x=!0,E.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L(t,a,r,s,l,i,c=[-1]){const u=g;b(t);const d=a.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:c};let p=!1;f.ctx=r?r(t,d,(e,n,o=n)=>(f.ctx&&l(f.ctx[e],f.ctx[e]=o)&&(f.bound[e]&&f.bound[e](o),p&&B(t,e)),n)):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),a.target&&(a.hydrate?f.fragment&&f.fragment.l(function(e){return Array.from(e.childNodes)}(a.target)):f.fragment&&f.fragment.c(),a.intro&&T(t.$$.fragment),C(t,a.target,a.anchor),D()),b(u)}class O{$destroy(){N(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function j(e,t,n){const o=e.slice();return o[4]=t[n],o}function q(e){let t,n,a,r,c,g,b=e[4].title+"";return{c(){t=u("li"),n=d(b),a=f(),m(t,"class","navbar-item link svelte-1vkexb"),m(t,"name",r=e[4].title),m(t,"tabindex","0"),m(t,"role","link"),m(t,"aria-label",c="Link to "+e[4].title+" section"),g=[p(t,"click",e[1]),p(t,"keyup",e[2])]},m(e,o){l(e,t,o),s(t,n),s(t,a)},p(e,o){1&o&&b!==(b=e[4].title+"")&&h(n,b),1&o&&r!==(r=e[4].title)&&m(t,"name",r),1&o&&c!==(c="Link to "+e[4].title+" section")&&m(t,"aria-label",c)},d(e){e&&i(t),o(g)}}}function G(t){let n,o,a,r=t[0],d=[];for(let e=0;e<r.length;e+=1)d[e]=q(j(t,r,e));return{c(){n=u("section"),o=u("nav"),a=u("ul");for(let e=0;e<d.length;e+=1)d[e].c();m(a,"class","navbar-list svelte-1vkexb"),m(o,"class","navbar svelte-1vkexb"),m(n,"id","nav-bar")},m(e,t){l(e,n,t),s(n,o),s(o,a);for(let e=0;e<d.length;e+=1)d[e].m(a,null)},p(e,[t]){if(7&t){let n;for(r=e[0],n=0;n<r.length;n+=1){const o=j(e,r,n);d[n]?d[n].p(o,t):(d[n]=q(o),d[n].c(),d[n].m(a,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=r.length}},i:e,o:e,d(e){e&&i(n),c(d,e)}}}function M(e,t,n){let{navlists:o=[]}=t;document.querySelectorAll(".navbar-item");return e.$set=e=>{"navlists"in e&&n(0,o=e.navlists)},[o,e=>{const t=e.target.getAttribute("name");document.getElementById(t).scrollIntoView({behavior:"smooth"})},e=>{13===e.keyCode&&(e.preventDefault(),e.target.click(),setTimeout((function(){const t=e.target.getAttribute("name");document.getElementById(t).querySelector("[tabindex], a, input, textarea").focus()}),700))}]}class U extends O{constructor(e){super(),L(this,e,M,G,r,{navlists:0})}}function H(t){let n,o,a,r,c;return{c(){n=u("section"),o=u("h1"),o.textContent=`${t[0]}`,a=f(),r=u("div"),c=u("p"),c.textContent=`${t[1]}`,m(o,"class","hero-headline svelte-tlebkh"),m(r,"class","hero-copy svelte-tlebkh"),m(n,"class","hero svelte-tlebkh")},m(e,t){l(e,n,t),s(n,o),s(n,a),s(n,r),s(r,c)},p:e,i:e,o:e,d(e){e&&i(n)}}}function W(e,t,n){let{bannerData:o={}}=t;const{HEADING:a,DECRIPTION:r,TUTORIAL_URL:s,WATCH_TUTORIAL:l}=o;return e.$set=e=>{"bannerData"in e&&n(2,o=e.bannerData)},[a,r,o]}class z extends O{constructor(e){super(),L(this,e,W,H,r,{bannerData:2})}}function P(t){let n,o,a,r,c,d,p,h,g,b;return{c(){n=u("section"),o=u("img"),r=f(),c=u("h2"),c.textContent=`${t[0]}`,d=f(),p=u("p"),p.textContent=`${t[2]}`,h=f(),g=u("blockquote"),b=u("em"),b.textContent=`${t[3]} — ${t[4]}`,o.src!==(a=t[1])&&m(o,"src",a),m(o,"class","headshot scalers svelte-1p0rs6a"),m(o,"alt","charlie_baez"),m(c,"class","fade-ins"),m(p,"class","fade-ins svelte-1p0rs6a"),m(g,"class","fade-ins svelte-1p0rs6a"),m(n,"class","about svelte-1p0rs6a"),m(n,"id","about")},m(e,t){l(e,n,t),s(n,o),s(n,r),s(n,c),s(n,d),s(n,p),s(n,h),s(n,g),s(g,b)},p:e,i:e,o:e,d(e){e&&i(n)}}}function Q(e,t,n){let{aboutData:o={}}=t;const{HEADING:a,TITLE:r,IMAGE_URL:s,DESCRIPTION:l,QUOTE:i,BYLINE:c}=o;return e.$set=e=>{"aboutData"in e&&n(5,o=e.aboutData)},[a,s,l,i,c,o]}class K extends O{constructor(e){super(),L(this,e,Q,P,r,{aboutData:5})}}function V(e,t,n){const o=e.slice();return o[3]=t[n],o}function J(t){let n,o,a,r,c,p,h,g,b,v,$,w,A,E=t[3].project+"",x=t[3].description+"",y=t[3].tools+"";return{c(){n=u("div"),o=u("h3"),a=u("a"),r=d(E),p=f(),h=u("p"),g=d(x),b=f(),v=u("p"),$=u("em"),w=d(y),A=f(),m(a,"tabindex","0"),m(a,"href",c=t[3].url),m(a,"target","_blank"),m(a,"class","link svelte-1fuaq60"),m(o,"class","svelte-1fuaq60"),m(h,"class","svelte-1fuaq60"),m(v,"class","svelte-1fuaq60"),m(n,"class","work-projects svelte-1fuaq60")},m(e,t){l(e,n,t),s(n,o),s(o,a),s(a,r),s(n,p),s(n,h),s(h,g),s(n,b),s(n,v),s(v,$),s($,w),s(n,A)},p:e,d(e){e&&i(n)}}}function Y(t){let n,o,a,r,d,p,h=t[0],g=[];for(let e=0;e<h.length;e+=1)g[e]=J(V(t,h,e));return{c(){n=u("section"),o=u("h2"),o.textContent="work",a=f(),r=u("div");for(let e=0;e<g.length;e+=1)g[e].c();d=f(),p=u("div"),p.innerHTML='\n    checkout my\n    <a href="https://codepen.io/RasterWolf" target="_blank" class="link svelte-1fuaq60">\n      CodePen\n    </a>\n    where I sketch out ideas for personal and professional projects\n  ',m(r,"class","work-grid svelte-1fuaq60"),m(p,"class","work-cta fade-ins svelte-1fuaq60"),m(n,"class","work svelte-1fuaq60"),m(n,"id","work")},m(e,t){l(e,n,t),s(n,o),s(n,a),s(n,r);for(let e=0;e<g.length;e+=1)g[e].m(r,null);s(n,d),s(n,p)},p(e,[t]){if(1&t){let n;for(h=e[0],n=0;n<h.length;n+=1){const o=V(e,h,n);g[n]?g[n].p(o,t):(g[n]=J(o),g[n].c(),g[n].m(r,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=h.length}},i:e,o:e,d(e){e&&i(n),c(g,e)}}}function F(e,t,n){let{workData:o={}}=t;const{HEADING:a,WORKGRID_LIST:r}=o;return e.$set=e=>{"workData"in e&&n(1,o=e.workData)},[r,o]}class X extends O{constructor(e){super(),L(this,e,F,Y,r,{workData:1})}}function Z(t){let n,o,a,r,c,d,h;return{c(){n=u("section"),o=u("h2"),o.textContent="shoot me a message!",a=f(),r=u("div"),c=f(),d=u("form"),d.innerHTML='<input required="" type="text" id="name" name="name" placeholder="name" class="svelte-108z15m"> \n    <input required="" type="email" id="email" name="email" placeholder="email" class="svelte-108z15m"> \n    <textarea name="message" type="text" id="message" rows="6" placeholder="message" class="svelte-108z15m"></textarea> \n    <button class="button svelte-108z15m" type="submit" value="submit">send</button>',m(o,"class","fade-ins"),m(r,"id","form-messages"),m(r,"class","messages"),m(d,"class","form fade-ins svelte-108z15m"),m(d,"name","contact"),m(d,"method","post"),m(n,"class","contact-form svelte-108z15m"),m(n,"id","contact"),h=p(d,"submit",t[0])},m(e,t){l(e,n,t),s(n,o),s(n,a),s(n,r),s(n,c),s(n,d)},p:e,i:e,o:e,d(e){e&&i(n),h()}}}function ee(e){return[e=>{window.open("mailto:charliewbaez@gmail.com")}]}class te extends O{constructor(e){super(),L(this,e,ee,Z,r,{})}}function ne(t){let n,o,a,r,c,p,g,b,v,$,w,A,E,x,y,D,k,S,I,T,R,_,C,N,B,L,O,j,q,G,M,U,H,W,z,P;return{c(){n=u("section"),o=u("img"),r=f(),c=u("div"),p=u("div"),g=u("div"),b=u("div"),v=d(t[0]),$=f(),w=u("p"),w.textContent=`${t[1]}`,A=f(),E=u("div"),x=u("p"),x.textContent=`${t[4]}`,y=f(),D=u("p"),k=u("i"),S=f(),I=d(t[5]),T=f(),R=u("p"),_=u("i"),C=f(),N=d(t[6]),B=f(),L=u("p"),O=u("i"),j=f(),q=d(t[7]),G=f(),M=u("div"),U=u("p"),U.textContent=`${t[2]}`,H=f(),W=u("input"),z=f(),P=u("button"),P.textContent=`${t[3]}`,o.src!==(a="images/wave2.png")&&m(o,"src","images/wave2.png"),m(o,"alt",""),m(o,"class","wave-img svelte-9trpfq"),m(b,"class","company_brand"),m(g,"class","col-md-4 footer-box"),m(x,"class","footer-title svelte-9trpfq"),m(k,"class","fas fa-map-marker-alt"),m(_,"class","fas fa-phone"),m(O,"class","fas fa-envelope"),m(E,"class","col-md-4 footer-box"),m(U,"class","footer-title svelte-9trpfq"),m(W,"type","email"),m(W,"class","form-control round-border svelte-9trpfq"),m(W,"placeholder","Your Email"),m(P,"type","button"),m(P,"class","btn btn-outline-light round-border svelte-9trpfq"),m(M,"class","col-md-4 footer-box svelte-9trpfq"),m(p,"class","row section-body"),m(c,"class","container"),m(n,"class","main-bgcolor light-color"),m(n,"id","footer")},m(e,t){l(e,n,t),s(n,o),s(n,r),s(n,c),s(c,p),s(p,g),s(g,b),s(b,v),s(g,$),s(g,w),s(p,A),s(p,E),s(E,x),s(E,y),s(E,D),s(D,k),s(D,S),s(D,I),s(E,T),s(E,R),s(R,_),s(R,C),s(R,N),s(E,B),s(E,L),s(L,O),s(L,j),s(L,q),s(p,G),s(p,M),s(M,U),s(M,H),s(M,W),s(M,z),s(M,P)},p(e,[t]){1&t&&h(v,e[0])},i:e,o:e,d(e){e&&i(n)}}}function oe(e,t,n){let{footerData:o={}}=t,{header:a=""}=t;const{DESCRIPTION:r,CONTACT_DETAILS:s,SUBSCRIBE_NEWSLETTER:l,SUBSCRIBE:i}=o,{HEADING:c,ADDRESS:u,MOBILE:d,EMAIL:f}=s;return e.$set=e=>{"footerData"in e&&n(8,o=e.footerData),"header"in e&&n(0,a=e.header)},[a,r,l,i,c,u,d,f,o]}class ae extends O{constructor(e){super(),L(this,e,oe,ne,r,{footerData:8,header:0})}}const re={NAVBAR_DATA:[{id:1,url:"#about",title:"about",tabIndex:1},{id:2,url:"#work",title:"work",tabIndex:2},{id:3,url:"#contact",title:"contact",tabIndex:3}],BANNER_DATA:{HEADING:"Charlie Baez Does Web Stuff",DECRIPTION:"...hace bien"},ABOUT_DATA:{HEADING:"hola",IMAGE_URL:"/images/selfie_gray_glasses.png",DESCRIPTION:"I am a developer with a focus in UI, Motion Design, UX and Accessibility. I utilize a variety of tools including Javascript, modern js frameworks (Svelte, React, and Gatsby), GraphQL, a11y Web Standards and more to build engaging, immersive, and accessible user experiences. I love learning and exploring this ever evolving digital landscape.",QUOTE:'"Somewhere, something incredible is waiting to be known."',BYLINE:"Carl Sagan"},WORKGRID_DATA:{HEADING:"work",WORKGRID_LIST:[{url:"https://wwex.com/",project:"World Wide Express",description:"website resdesign and development. Because of budget and time constraints, we concentrated on theming and flexibility of limited components",tools:"SASS | jQuery | Green Sock | Bootstrap | Nunjucks"},{url:"https://expensivo.netlify.app/",project:"¡Expensivo!",description:"Budget Calculator App. This was a personal Project to learn SvelteJs",tools:"Svelte | Rollup | CSS Custom Properties | Netlify"},{url:"https://edc-static.netlify.app",project:"Entrust Data Card",description:"website resdesign and development. The link leads to a static style guide not the production sight. This was used for dev and design to interogate the components in realtime.",tools:"SASS | jQuery | Custom SVG Library | Bootstrap | Nunjucks"},{url:"https://www.milwaukeetool.com/Innovations/m12",project:"Milwaukee Tool",description:"website and app development for Milwaukee Tool brand update; heavy work on animations and interactivity",tools:"SASS | jQuery | Green Sock | Bootstrap"},{url:"https://www.bremer.com",project:"Bremer \n Bank",description:"website and app development for Bremer Bank re-branding. A major part of the project was an accessibility audit and compliance development",tools:"SASS | jQuery | React | Bootstrap | Nunjucks"},{url:"https://estimate-calculator-fed.baezcharliew.now.sh/",project:"Task Based Estimator",description:"A prototype for a task based estimator for Project Managers",tools:"SASS | React | Reactstrap | NextJs"}]},FOOTER_DATA:{DESCRIPTION:"We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",CONTACT_DETAILS:{HEADING:"Contact us",ADDRESS:"La trobe street docklands, Melbourne",MOBILE:"+1 61234567890",EMAIL:"nixalar@gmail.com"},SUBSCRIBE_NEWSLETTER:"Subscribe newsletter",SUBSCRIBE:"Subscribe"}};function se(t){let n,o,a,r,c,d,p,h,g,b,v,$,w,A,E;const x=new U({props:{navlists:re.NAVBAR_DATA,header:re.HEADER}}),y=new z({props:{bannerData:re.BANNER_DATA,"}":!0}}),D=new K({props:{aboutData:re.ABOUT_DATA}}),k=new X({props:{workData:re.WORKGRID_DATA}}),S=new te({}),I=new ae({props:{footerData:re.FOOTER_DATA,header:re.HEADER}});return{c(){n=u("div"),o=f(),a=u("div"),r=f(),c=u("div"),d=f(),p=u("header"),_(x.$$.fragment),h=f(),_(y.$$.fragment),g=f(),b=u("main"),_(D.$$.fragment),v=f(),_(k.$$.fragment),$=f(),_(S.$$.fragment),w=f(),A=u("footer"),_(I.$$.fragment),m(n,"id","stars"),m(a,"id","stars2"),m(c,"id","stars3"),m(p,"class","container"),m(b,"class","container"),m(A,"class","container")},m(e,t){l(e,n,t),l(e,o,t),l(e,a,t),l(e,r,t),l(e,c,t),l(e,d,t),l(e,p,t),C(x,p,null),s(p,h),C(y,p,null),l(e,g,t),l(e,b,t),C(D,b,null),s(b,v),C(k,b,null),s(b,$),C(S,b,null),l(e,w,t),l(e,A,t),C(I,A,null),E=!0},p:e,i(e){E||(T(x.$$.fragment,e),T(y.$$.fragment,e),T(D.$$.fragment,e),T(k.$$.fragment,e),T(S.$$.fragment,e),T(I.$$.fragment,e),E=!0)},o(e){R(x.$$.fragment,e),R(y.$$.fragment,e),R(D.$$.fragment,e),R(k.$$.fragment,e),R(S.$$.fragment,e),R(I.$$.fragment,e),E=!1},d(e){e&&i(n),e&&i(o),e&&i(a),e&&i(r),e&&i(c),e&&i(d),e&&i(p),N(x),N(y),e&&i(g),e&&i(b),N(D),N(k),N(S),e&&i(w),e&&i(A),N(I)}}}const le=new class extends O{constructor(e){super(),L(this,e,null,se,r,{})}}({target:document.body,props:{name:"world"}}),ie=document.querySelectorAll(".work-projects"),ce=document.querySelectorAll(".fade-ins"),ue=document.querySelectorAll(".scalers"),de=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),t.unobserve(e.target))})}),{threshold:0,rootMargin:"0px 0px -150px 0px"});return ie.forEach(e=>{de.observe(e)}),ce.forEach(e=>{de.observe(e)}),ue.forEach(e=>{de.observe(e)}),window.addEventListener("load",(function(){setTimeout(()=>{window.scrollTo(0,0)},10)})),le}();
//# sourceMappingURL=bundle.js.map
