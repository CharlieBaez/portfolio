var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){t=""+t,e.data!==t&&(e.data=t)}let g;function v(e){g=e}const b=[],w=[],A=[],x=[],E=Promise.resolve();let y=!1;function D(e){A.push(e)}function k(){const e=new Set;do{for(;b.length;){const e=b.shift();v(e),S(e.$$)}for(;w.length;)w.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];e.has(n)||(n(),e.add(n))}A.length=0}while(b.length);for(;x.length;)x.pop()();y=!1}function S(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const I=new Set;let T;function C(e,t){e&&e.i&&(I.delete(e),e.i(t))}function R(e,t,n,a){if(e&&e.o){if(I.has(e))return;I.add(e),T.c.push(()=>{I.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function _(e){e&&e.c()}function N(e,n,s){const{fragment:r,on_mount:l,on_destroy:i,after_update:c}=e.$$;r&&r.m(n,s),D(()=>{const n=l.map(t).filter(o);i?i.push(...n):a(n),e.$$.on_mount=[]}),c.forEach(D)}function B(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t){-1===e.$$.dirty[0]&&(b.push(e),y||(y=!0,E.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(t,o,s,r,l,i,c=[-1]){const u=g;v(t);const d=o.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:c};let p=!1;f.ctx=s?s(t,d,(e,n,a=n)=>(f.ctx&&l(f.ctx[e],f.ctx[e]=a)&&(f.bound[e]&&f.bound[e](a),p&&L(t,e)),n)):[],f.update(),p=!0,a(f.before_update),f.fragment=!!r&&r(f.ctx),o.target&&(o.hydrate?f.fragment&&f.fragment.l(function(e){return Array.from(e.childNodes)}(o.target)):f.fragment&&f.fragment.c(),o.intro&&C(t.$$.fragment),N(t,o.target,o.anchor),k()),v(u)}class j{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function q(e,t,n){const a=e.slice();return a[4]=t[n],a}function G(e){let t,n,o,s,c,g,v=e[4].title+"";return{c(){t=u("li"),n=d(v),o=f(),m(t,"class","navbar-item link svelte-1vkexb"),m(t,"name",s=e[4].title),m(t,"tabindex","0"),m(t,"role","link"),m(t,"aria-label",c="Link to "+e[4].title+" section"),g=[p(t,"click",e[1]),p(t,"keyup",e[2])]},m(e,a){l(e,t,a),r(t,n),r(t,o)},p(e,a){1&a&&v!==(v=e[4].title+"")&&h(n,v),1&a&&s!==(s=e[4].title)&&m(t,"name",s),1&a&&c!==(c="Link to "+e[4].title+" section")&&m(t,"aria-label",c)},d(e){e&&i(t),a(g)}}}function M(t){let n,a,o,s=t[0],d=[];for(let e=0;e<s.length;e+=1)d[e]=G(q(t,s,e));return{c(){n=u("section"),a=u("nav"),o=u("ul");for(let e=0;e<d.length;e+=1)d[e].c();m(o,"class","navbar-list svelte-1vkexb"),m(a,"class","navbar svelte-1vkexb"),m(n,"id","nav-bar")},m(e,t){l(e,n,t),r(n,a),r(a,o);for(let e=0;e<d.length;e+=1)d[e].m(o,null)},p(e,[t]){if(7&t){let n;for(s=e[0],n=0;n<s.length;n+=1){const a=q(e,s,n);d[n]?d[n].p(a,t):(d[n]=G(a),d[n].c(),d[n].m(o,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=s.length}},i:e,o:e,d(e){e&&i(n),c(d,e)}}}function U(e,t,n){let{navlists:a=[]}=t;document.querySelectorAll(".navbar-item");return e.$set=e=>{"navlists"in e&&n(0,a=e.navlists)},[a,e=>{const t=e.target.getAttribute("name");document.getElementById(t).scrollIntoView({behavior:"smooth"})},e=>{13===e.keyCode&&(e.preventDefault(),e.target.click(),setTimeout((function(){const t=e.target.getAttribute("name");document.getElementById(t).querySelector("[tabindex], a, input, textarea").focus()}),700))}]}class W extends j{constructor(e){super(),O(this,e,U,M,s,{navlists:0})}}function H(t){let n,a,o,s,c;return{c(){n=u("section"),a=u("h1"),a.textContent=`${t[0]}`,o=f(),s=u("div"),c=u("p"),c.textContent=`${t[1]}`,m(a,"class","hero-headline svelte-tlebkh"),m(s,"class","hero-copy svelte-tlebkh"),m(n,"class","hero svelte-tlebkh")},m(e,t){l(e,n,t),r(n,a),r(n,o),r(n,s),r(s,c)},p:e,i:e,o:e,d(e){e&&i(n)}}}function P(e,t,n){let{bannerData:a={}}=t;const{HEADING:o,DECRIPTION:s,TUTORIAL_URL:r,WATCH_TUTORIAL:l}=a;return e.$set=e=>{"bannerData"in e&&n(2,a=e.bannerData)},[o,s,a]}class z extends j{constructor(e){super(),O(this,e,P,H,s,{bannerData:2})}}function Q(t){let n,a,o,s,c,d,p,h,g,v;return{c(){n=u("section"),a=u("img"),s=f(),c=u("h2"),c.textContent=`${t[0]}`,d=f(),p=u("p"),p.textContent=`${t[2]}`,h=f(),g=u("blockquote"),v=u("em"),v.textContent=`${t[3]} — ${t[4]}`,a.src!==(o=t[1])&&m(a,"src",o),m(a,"class","headshot scalers svelte-1p0rs6a"),m(a,"alt","charlie_baez"),m(c,"class","fade-ins"),m(p,"class","fade-ins svelte-1p0rs6a"),m(g,"class","fade-ins svelte-1p0rs6a"),m(n,"class","about svelte-1p0rs6a"),m(n,"id","about")},m(e,t){l(e,n,t),r(n,a),r(n,s),r(n,c),r(n,d),r(n,p),r(n,h),r(n,g),r(g,v)},p:e,i:e,o:e,d(e){e&&i(n)}}}function K(e,t,n){let{aboutData:a={}}=t;const{HEADING:o,TITLE:s,IMAGE_URL:r,DESCRIPTION:l,QUOTE:i,BYLINE:c}=a;return e.$set=e=>{"aboutData"in e&&n(5,a=e.aboutData)},[o,r,l,i,c,a]}class V extends j{constructor(e){super(),O(this,e,K,Q,s,{aboutData:5})}}function J(e,t,n){const a=e.slice();return a[3]=t[n],a}function Y(t){let n,a,o,s,c,p,h,g,v,b,$,w,A,x=t[3].project+"",E=t[3].description+"",y=t[3].tools+"";return{c(){n=u("div"),a=u("h3"),o=u("a"),s=d(x),p=f(),h=u("p"),g=d(E),v=f(),b=u("p"),$=u("em"),w=d(y),A=f(),m(o,"tabindex","0"),m(o,"href",c=t[3].url),m(o,"target","_blank"),m(o,"class","link svelte-1fuaq60"),m(a,"class","svelte-1fuaq60"),m(h,"class","svelte-1fuaq60"),m(b,"class","svelte-1fuaq60"),m(n,"class","work-projects svelte-1fuaq60")},m(e,t){l(e,n,t),r(n,a),r(a,o),r(o,s),r(n,p),r(n,h),r(h,g),r(n,v),r(n,b),r(b,$),r($,w),r(n,A)},p:e,d(e){e&&i(n)}}}function F(t){let n,a,o,s,d,p,h=t[0],g=[];for(let e=0;e<h.length;e+=1)g[e]=Y(J(t,h,e));return{c(){n=u("section"),a=u("h2"),a.textContent="work",o=f(),s=u("div");for(let e=0;e<g.length;e+=1)g[e].c();d=f(),p=u("div"),p.innerHTML='\n    checkout my\n    <a href="https://codepen.io/RasterWolf" target="_blank" class="link svelte-1fuaq60">\n      CodePen\n    </a>\n    where I sketch out ideas for personal and professional projects\n  ',m(s,"class","work-grid svelte-1fuaq60"),m(p,"class","work-cta fade-ins svelte-1fuaq60"),m(n,"class","work svelte-1fuaq60"),m(n,"id","work")},m(e,t){l(e,n,t),r(n,a),r(n,o),r(n,s);for(let e=0;e<g.length;e+=1)g[e].m(s,null);r(n,d),r(n,p)},p(e,[t]){if(1&t){let n;for(h=e[0],n=0;n<h.length;n+=1){const a=J(e,h,n);g[n]?g[n].p(a,t):(g[n]=Y(a),g[n].c(),g[n].m(s,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=h.length}},i:e,o:e,d(e){e&&i(n),c(g,e)}}}function X(e,t,n){let{workData:a={}}=t;const{HEADING:o,WORKGRID_LIST:s}=a;return e.$set=e=>{"workData"in e&&n(1,a=e.workData)},[s,a]}class Z extends j{constructor(e){super(),O(this,e,X,F,s,{workData:1})}}function ee(t){let n;return{c(){n=u("section"),n.innerHTML='<h2 class="fade-ins">contact me</h2> \n  <div id="form-messages" class="messages"></div> \n  <form class="form fade-ins svelte-108z15m" id="ajax-contact" method="post" action="mailer.php"><input required="" type="text" id="name" name="name" placeholder="name" autocomplete="off" class="svelte-108z15m"> \n    <input required="" type="email" id="email" name="email" placeholder="email" autocomplete="off" class="svelte-108z15m"> \n    <textarea name="message" type="text" id="message" rows="6" placeholder="message" class="svelte-108z15m"></textarea> \n    <button class="button svelte-108z15m" type="submit" value="submit">send</button></form>',m(n,"class","contact-form svelte-108z15m"),m(n,"id","contact")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&i(n)}}}class te extends j{constructor(e){super(),O(this,e,null,ee,s,{})}}function ne(t){let n,a,o,s,c,p,g,v,b,$,w,A,x,E,y,D,k,S,I,T,C,R,_,N,B,L,O,j,q,G,M,U,W,H,P,z;return{c(){n=u("section"),a=u("img"),s=f(),c=u("div"),p=u("div"),g=u("div"),v=u("div"),b=d(t[0]),$=f(),w=u("p"),w.textContent=`${t[1]}`,A=f(),x=u("div"),E=u("p"),E.textContent=`${t[4]}`,y=f(),D=u("p"),k=u("i"),S=f(),I=d(t[5]),T=f(),C=u("p"),R=u("i"),_=f(),N=d(t[6]),B=f(),L=u("p"),O=u("i"),j=f(),q=d(t[7]),G=f(),M=u("div"),U=u("p"),U.textContent=`${t[2]}`,W=f(),H=u("input"),P=f(),z=u("button"),z.textContent=`${t[3]}`,a.src!==(o="images/wave2.png")&&m(a,"src","images/wave2.png"),m(a,"alt",""),m(a,"class","wave-img svelte-9trpfq"),m(v,"class","company_brand"),m(g,"class","col-md-4 footer-box"),m(E,"class","footer-title svelte-9trpfq"),m(k,"class","fas fa-map-marker-alt"),m(R,"class","fas fa-phone"),m(O,"class","fas fa-envelope"),m(x,"class","col-md-4 footer-box"),m(U,"class","footer-title svelte-9trpfq"),m(H,"type","email"),m(H,"class","form-control round-border svelte-9trpfq"),m(H,"placeholder","Your Email"),m(z,"type","button"),m(z,"class","btn btn-outline-light round-border svelte-9trpfq"),m(M,"class","col-md-4 footer-box svelte-9trpfq"),m(p,"class","row section-body"),m(c,"class","container"),m(n,"class","main-bgcolor light-color"),m(n,"id","footer")},m(e,t){l(e,n,t),r(n,a),r(n,s),r(n,c),r(c,p),r(p,g),r(g,v),r(v,b),r(g,$),r(g,w),r(p,A),r(p,x),r(x,E),r(x,y),r(x,D),r(D,k),r(D,S),r(D,I),r(x,T),r(x,C),r(C,R),r(C,_),r(C,N),r(x,B),r(x,L),r(L,O),r(L,j),r(L,q),r(p,G),r(p,M),r(M,U),r(M,W),r(M,H),r(M,P),r(M,z)},p(e,[t]){1&t&&h(b,e[0])},i:e,o:e,d(e){e&&i(n)}}}function ae(e,t,n){let{footerData:a={}}=t,{header:o=""}=t;const{DESCRIPTION:s,CONTACT_DETAILS:r,SUBSCRIBE_NEWSLETTER:l,SUBSCRIBE:i}=a,{HEADING:c,ADDRESS:u,MOBILE:d,EMAIL:f}=r;return e.$set=e=>{"footerData"in e&&n(8,a=e.footerData),"header"in e&&n(0,o=e.header)},[o,s,l,i,c,u,d,f,a]}class oe extends j{constructor(e){super(),O(this,e,ae,ne,s,{footerData:8,header:0})}}const se={NAVBAR_DATA:[{id:1,url:"#about",title:"about",tabIndex:1},{id:2,url:"#work",title:"work",tabIndex:2},{id:3,url:"#contact",title:"contact",tabIndex:3}],BANNER_DATA:{HEADING:"Charlie Baez Does Web Stuff",DECRIPTION:"...hace bien"},ABOUT_DATA:{HEADING:"hola",IMAGE_URL:"/images/selfie_gray_glasses.png",DESCRIPTION:"I am a developer with a focus in UI, Motion Design, UX and Accessibility. I utilize a variety of tools including Javascript, modern js frameworks (Svelte, React, and Gatsby), GraphQL, a11y Web Standards and more to build engaging, immersive, and accessible user experiences. I love learning and exploring this ever evolving digital landscape.",QUOTE:'"Somewhere, something incredible is waiting to be known."',BYLINE:"Carl Sagan"},WORKGRID_DATA:{HEADING:"work",WORKGRID_LIST:[{url:"https://wwex.com/",project:"World Wide Express",description:"website resdesign and development. Because of budget and time constraints, we concentrated on theming and flexibility of limited components",tools:"SASS | jQuery | Green Sock | Bootstrap | Nunjucks"},{url:"https://expensivo.netlify.app/",project:"¡Expensivo!",description:"Budget Calculator App. This was a personal Project to learn SvelteJs",tools:"Svelte | Rollup | CSS Custom Properties | Netlify"},{url:"https://edc-static.netlify.app",project:"Entrust Data Card",description:"website resdesign and development. The link leads to a static style guide not the production sight. This was used for dev and design to interogate the components in realtime.",tools:"SASS | jQuery | Custom SVG Library | Bootstrap | Nunjucks"},{url:"https://www.milwaukeetool.com/Innovations/m12",project:"Milwaukee Tool",description:"website and app development for Milwaukee Tool brand update; heavy work on animations and interactivity",tools:"SASS | jQuery | Green Sock | Bootstrap"},{url:"https://www.bremer.com",project:"Bremer \n Bank",description:"website and app development for Bremer Bank re-branding. A major part of the project was an accessibility audit and compliance development",tools:"SASS | jQuery | React | Bootstrap | Nunjucks"},{url:"https://estimate-calculator-fed.baezcharliew.now.sh/",project:"Task Based Estimator",description:"A prototype for a task based estimator for Project Managers",tools:"SASS | React | Reactstrap | NextJs"}]},FOOTER_DATA:{DESCRIPTION:"We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",CONTACT_DETAILS:{HEADING:"Contact us",ADDRESS:"La trobe street docklands, Melbourne",MOBILE:"+1 61234567890",EMAIL:"nixalar@gmail.com"},SUBSCRIBE_NEWSLETTER:"Subscribe newsletter",SUBSCRIBE:"Subscribe"}};function re(t){let n,a,o,s,c,d,p,h,g,v,b,$,w,A,x;const E=new W({props:{navlists:se.NAVBAR_DATA,header:se.HEADER}}),y=new z({props:{bannerData:se.BANNER_DATA,"}":!0}}),D=new V({props:{aboutData:se.ABOUT_DATA}}),k=new Z({props:{workData:se.WORKGRID_DATA}}),S=new te({}),I=new oe({props:{footerData:se.FOOTER_DATA,header:se.HEADER}});return{c(){n=u("div"),a=f(),o=u("div"),s=f(),c=u("div"),d=f(),p=u("header"),_(E.$$.fragment),h=f(),_(y.$$.fragment),g=f(),v=u("main"),_(D.$$.fragment),b=f(),_(k.$$.fragment),$=f(),_(S.$$.fragment),w=f(),A=u("footer"),_(I.$$.fragment),m(n,"id","stars"),m(o,"id","stars2"),m(c,"id","stars3"),m(p,"class","container"),m(v,"class","container"),m(A,"class","container")},m(e,t){l(e,n,t),l(e,a,t),l(e,o,t),l(e,s,t),l(e,c,t),l(e,d,t),l(e,p,t),N(E,p,null),r(p,h),N(y,p,null),l(e,g,t),l(e,v,t),N(D,v,null),r(v,b),N(k,v,null),r(v,$),N(S,v,null),l(e,w,t),l(e,A,t),N(I,A,null),x=!0},p:e,i(e){x||(C(E.$$.fragment,e),C(y.$$.fragment,e),C(D.$$.fragment,e),C(k.$$.fragment,e),C(S.$$.fragment,e),C(I.$$.fragment,e),x=!0)},o(e){R(E.$$.fragment,e),R(y.$$.fragment,e),R(D.$$.fragment,e),R(k.$$.fragment,e),R(S.$$.fragment,e),R(I.$$.fragment,e),x=!1},d(e){e&&i(n),e&&i(a),e&&i(o),e&&i(s),e&&i(c),e&&i(d),e&&i(p),B(E),B(y),e&&i(g),e&&i(v),B(D),B(k),B(S),e&&i(w),e&&i(A),B(I)}}}const le=new class extends j{constructor(e){super(),O(this,e,null,re,s,{})}}({target:document.body,props:{name:"world"}}),ie=document.querySelectorAll(".work-projects"),ce=document.querySelectorAll(".fade-ins"),ue=document.querySelectorAll(".scalers"),de=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),t.unobserve(e.target))})}),{threshold:0,rootMargin:"0px 0px -150px 0px"});return ie.forEach(e=>{de.observe(e)}),ce.forEach(e=>{de.observe(e)}),ue.forEach(e=>{de.observe(e)}),window.addEventListener("load",(function(){setTimeout(()=>{window.scrollTo(0,0)},10)})),$((function(){var e=$("#ajax-contact"),t=$("#form-messages");$(e).submit((function(n){n.preventDefault();var a=$(e).serialize();$.ajax({type:"POST",url:$(e).attr("action"),data:a}).done((function(e){$(t).removeClass("error"),$(t).addClass("success"),$(t).text(e),$("#name").val(""),$("#email").val(""),$("#message").val("")})).fail((function(e){$(t).removeClass("success"),$(t).addClass("error"),""!==e.responseText?$(t).text(e.responseText):$(t).text("Well that didn't work...Please try again.")}))}))})),le}();
//# sourceMappingURL=bundle.js.map
