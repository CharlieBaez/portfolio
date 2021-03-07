var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function f(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let h;function g(e){h=e}const v=[],b=[],k=[],w=[],$=Promise.resolve();let y=!1;function A(e){k.push(e)}function x(){const e=new Set;do{for(;v.length;){const e=v.shift();g(e),I(e.$$)}for(;b.length;)b.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];e.has(n)||(n(),e.add(n))}k.length=0}while(v.length);for(;w.length;)w.pop()();y=!1}function I(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const S=new Set;let j;function D(e,t){e&&e.i&&(S.delete(e),e.i(t))}function _(e,t,n,a){if(e&&e.o){if(S.has(e))return;S.add(e),j.c.push(()=>{S.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function E(e){e&&e.c()}function T(e,n,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=e.$$;s&&s.m(n,r),A(()=>{const n=i.map(t).filter(o);l?l.push(...n):a(n),e.$$.on_mount=[]}),c.forEach(A)}function R(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function N(e,t){-1===e.$$.dirty[0]&&(v.push(e),y||(y=!0,$.then(x)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function C(t,o,r,s,i,l,c=[-1]){const u=h;g(t);const d=o.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:c};let f=!1;p.ctx=r?r(t,d,(e,n,a=n)=>(p.ctx&&i(p.ctx[e],p.ctx[e]=a)&&(p.bound[e]&&p.bound[e](a),f&&N(t,e)),n)):[],p.update(),f=!0,a(p.before_update),p.fragment=!!s&&s(p.ctx),o.target&&(o.hydrate?p.fragment&&p.fragment.l(function(e){return Array.from(e.childNodes)}(o.target)):p.fragment&&p.fragment.c(),o.intro&&D(t.$$.fragment),T(t,o.target,o.anchor),x()),g(u)}class B{$destroy(){R(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function L(e,t,n){const a=e.slice();return a[4]=t[n],a}function q(e){let t,n,o,r,c,h,g=e[4].title+"";return{c(){t=u("li"),n=d(g),o=p(),m(t,"class","navbar-item link svelte-1vkexb"),m(t,"name",r=e[4].title),m(t,"tabindex","0"),m(t,"role","navigation"),m(t,"aria-label",c="Link to "+e[4].title+" section"),h=[f(t,"click",e[1]),f(t,"keyup",e[2])]},m(e,a){i(e,t,a),s(t,n),s(t,o)},p(e,a){1&a&&g!==(g=e[4].title+"")&&function(e,t){t=""+t,e.data!==t&&(e.data=t)}(n,g),1&a&&r!==(r=e[4].title)&&m(t,"name",r),1&a&&c!==(c="Link to "+e[4].title+" section")&&m(t,"aria-label",c)},d(e){e&&l(t),a(h)}}}function z(t){let n,a,o,r=t[0],d=[];for(let e=0;e<r.length;e+=1)d[e]=q(L(t,r,e));return{c(){n=u("section"),a=u("nav"),o=u("ul");for(let e=0;e<d.length;e+=1)d[e].c();m(o,"role","navigation"),m(o,"class","navbar-list svelte-1vkexb"),m(a,"class","navbar svelte-1vkexb"),m(n,"id","nav-bar")},m(e,t){i(e,n,t),s(n,a),s(a,o);for(let e=0;e<d.length;e+=1)d[e].m(o,null)},p(e,[t]){if(7&t){let n;for(r=e[0],n=0;n<r.length;n+=1){const a=L(e,r,n);d[n]?d[n].p(a,t):(d[n]=q(a),d[n].c(),d[n].m(o,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=r.length}},i:e,o:e,d(e){e&&l(n),c(d,e)}}}function O(e,t,n){let{navlists:a=[]}=t;document.querySelectorAll(".navbar-item");return e.$set=e=>{"navlists"in e&&n(0,a=e.navlists)},[a,e=>{const t=e.target.getAttribute("name");document.getElementById(t).scrollIntoView({behavior:"smooth"})},e=>{13===e.keyCode&&(e.preventDefault(),e.target.click(),setTimeout((function(){const t=e.target.getAttribute("name");document.getElementById(t).querySelector("[tabindex], a, input, textarea").focus()}),700))}]}class G extends B{constructor(e){super(),C(this,e,O,z,r,{navlists:0})}}function U(t){let n,a,o,r,c;return{c(){n=u("section"),a=u("h1"),a.textContent=`${t[0]}`,o=p(),r=u("div"),c=u("p"),c.textContent=`${t[1]}`,m(a,"class","hero-headline svelte-98373d"),m(r,"class","hero-copy svelte-98373d"),m(n,"class","hero svelte-98373d")},m(e,t){i(e,n,t),s(n,a),s(n,o),s(n,r),s(r,c)},p:e,i:e,o:e,d(e){e&&l(n)}}}function W(e,t,n){let{bannerData:a={}}=t;const{HEADING:o,DECRIPTION:r,TUTORIAL_URL:s,WATCH_TUTORIAL:i}=a;return e.$set=e=>{"bannerData"in e&&n(2,a=e.bannerData)},[o,r,a]}class H extends B{constructor(e){super(),C(this,e,W,U,r,{bannerData:2})}}function M(t){let n,a,o,r,c,d,f,h,g,v;return{c(){n=u("section"),a=u("img"),r=p(),c=u("h2"),c.textContent=`${t[0]}`,d=p(),f=u("p"),f.textContent=`${t[2]}`,h=p(),g=u("blockquote"),v=u("em"),v.textContent=`${t[3]} — ${t[4]}`,a.src!==(o=t[1])&&m(a,"src",o),m(a,"class","headshot scalers svelte-1p0rs6a"),m(a,"alt","charlie_baez"),m(c,"class","fade-ins"),m(f,"class","fade-ins svelte-1p0rs6a"),m(g,"class","fade-ins svelte-1p0rs6a"),m(n,"class","about svelte-1p0rs6a"),m(n,"id","about")},m(e,t){i(e,n,t),s(n,a),s(n,r),s(n,c),s(n,d),s(n,f),s(n,h),s(n,g),s(g,v)},p:e,i:e,o:e,d(e){e&&l(n)}}}function P(e,t,n){let{aboutData:a={}}=t;const{HEADING:o,TITLE:r,IMAGE_URL:s,DESCRIPTION:i,QUOTE:l,BYLINE:c}=a;return e.$set=e=>{"aboutData"in e&&n(5,a=e.aboutData)},[o,s,i,l,c,a]}class Q extends B{constructor(e){super(),C(this,e,P,M,r,{aboutData:5})}}function J(e,t,n){const a=e.slice();return a[3]=t[n],a}function K(t){let n,a,o,r,c,f,h,g,v,b,k,w,$,y,A=t[3].project+"",x=t[3].description+"",I=t[3].tools+"";return{c(){n=u("div"),a=u("h3"),o=u("a"),r=d(A),h=p(),g=u("p"),v=d(x),b=p(),k=u("p"),w=u("em"),$=d(I),y=p(),m(o,"tabindex","0"),m(o,"href",c=t[3].url),m(o,"class","link work-projects_example svelte-qt6ixk"),m(o,"aria-label",f="Link to "+t[3].project+" site"),m(o,"target","_blank"),m(o,"rel","noopener"),m(a,"class","svelte-qt6ixk"),m(g,"class","svelte-qt6ixk"),m(k,"class","svelte-qt6ixk"),m(n,"class","work-projects svelte-qt6ixk")},m(e,t){i(e,n,t),s(n,a),s(a,o),s(o,r),s(n,h),s(n,g),s(g,v),s(n,b),s(n,k),s(k,w),s(w,$),s(n,y)},p:e,d(e){e&&l(n)}}}function V(t){let n,a,o,r,d,f,h,g,v=t[0],b=[];for(let e=0;e<v.length;e+=1)b[e]=K(J(t,v,e));return{c(){n=u("section"),a=u("h2"),a.textContent="work",o=p(),r=u("div");for(let e=0;e<b.length;e+=1)b[e].c();d=p(),f=u("div"),f.innerHTML='\n    checkout my\n    <a href="https://github.com/CharlieBaez/" rel="noopener" target="_blank" class="link svelte-qt6ixk">\n      GitHub\n    </a>\n    where I host my personal projects\n  ',h=p(),g=u("div"),g.innerHTML='\n    checkout my\n    <a href="https://codepen.io/RasterWolf" rel="noopener" target="_blank" class="link svelte-qt6ixk">\n      CodePen\n    </a>\n    where I sketch out ideas and prototype concepts\n  ',m(r,"class","work-grid svelte-qt6ixk"),m(f,"class","work-cta fade-ins svelte-qt6ixk"),m(g,"class","work-cta fade-ins svelte-qt6ixk"),m(n,"class","work svelte-qt6ixk"),m(n,"id","work")},m(e,t){i(e,n,t),s(n,a),s(n,o),s(n,r);for(let e=0;e<b.length;e+=1)b[e].m(r,null);s(n,d),s(n,f),s(n,h),s(n,g)},p(e,[t]){if(1&t){let n;for(v=e[0],n=0;n<v.length;n+=1){const a=J(e,v,n);b[n]?b[n].p(a,t):(b[n]=K(a),b[n].c(),b[n].m(r,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=v.length}},i:e,o:e,d(e){e&&l(n),c(b,e)}}}function Y(e,t,n){let{workData:a={}}=t;const{HEADING:o,WORKGRID_LIST:r}=a;return e.$set=e=>{"workData"in e&&n(1,a=e.workData)},[r,a]}class X extends B{constructor(e){super(),C(this,e,Y,V,r,{workData:1})}}function F(t){let n,a,o,r;return{c(){n=u("section"),a=u("h2"),o=u("a"),o.textContent="shoot me a message!",m(o,"class","link svelte-uipaq7"),m(o,"href","#contact"),m(a,"class","fade-ins svelte-uipaq7"),m(n,"class","contact svelte-uipaq7"),m(n,"id","contact"),r=f(o,"click",t[0])},m(e,t){i(e,n,t),s(n,a),s(a,o)},p:e,i:e,o:e,d(e){e&&l(n),r()}}}function Z(e){return[e=>{window.open("mailto:charliewbaez@gmail.com?subject=Oh Hey!")}]}class ee extends B{constructor(e){super(),C(this,e,Z,F,r,{})}}function te(t){let n;return{c(){n=u("div"),n.innerHTML='<div class="row footer-copy svelte-unzk1j"><div class="footer-title svelte-unzk1j">\n      Charlie\n      <br>\n      Baez\n    </div> \n    <div class="footer-social-links svelte-unzk1j"><ul class="svelte-unzk1j"><li class="svelte-unzk1j"><a href="https://www.linkedin.com/in/charlierund/" class="link social-media-links svelte-unzk1j" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a></li> \n        <li class="svelte-unzk1j"><a href="https://twitter.com/charlie_baez" class="link social-media-links svelte-unzk1j" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a></li> \n        <li class="svelte-unzk1j"><a href="https://www.instagram.com/charliebaez85" class="link social-media-links svelte-unzk1j" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></li></ul></div></div> \n  <div class="row">©2020 Charlie Baez</div>',m(n,"class","container svelte-unzk1j")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}class ne extends B{constructor(e){super(),C(this,e,null,te,r,{})}}const ae={NAVBAR_DATA:[{id:1,url:"#about",title:"about",tabIndex:1},{id:2,url:"#work",title:"work",tabIndex:2},{id:3,url:"#contact",title:"contact",tabIndex:3}],BANNER_DATA:{HEADING:"Charlie Baez Does Web Stuff",DECRIPTION:"...hace bien"},ABOUT_DATA:{HEADING:"hola",IMAGE_URL:"/images/selfie_gray_glasses.png",DESCRIPTION:"I am a developer with a focus in UI, Motion Design, UX and Accessibility. I utilize a variety of tools including Javascript, modern js frameworks (Svelte, React, and Gatsby), GraphQL, a11y Web Standards and more to build engaging, immersive, and accessible user experiences. I love learning and exploring this ever evolving digital landscape.",QUOTE:'"Somewhere, something incredible is waiting to be known."',BYLINE:"Carl Sagan"},WORKGRID_DATA:{HEADING:"work",WORKGRID_LIST:[{url:"https://www.seminolewildcard.com/",project:"Seminole Wild Card",description:"website resdesign and development, mobile app development. Colaborative dev with internal team",tools:"Vanilla Javascript | React | React Native | WKWebview | WSO2 | JSP"},{url:"https://weathered-or-not.netlify.app",project:"Weathered",description:"Weather App I built just because it was rainy outside and I was bored",tools:"Vanilla Javascript | Accuweather API"},{url:"https://wwex.com/",project:"World Wide Express",description:"website resdesign and development. Because of budget and time constraints, we concentrated on theming and flexibility of limited components",tools:"SASS | jQuery | Green Sock | Bootstrap | Nunjucks"},{url:"https://animales.netlify.app/",project:"Animales App",description:"App designed by my son and built by me with the SUN stack",tools:"Svelte | Userbase SDK | Netlify"},{url:"https://expensivo.netlify.app/",project:"¡Expensivo!",description:"Budget Calculator App. This was a personal Project to learn SvelteJs",tools:"Svelte | Rollup | CSS Custom Properties | Netlify"},{url:"https://edc-static.netlify.app",project:"Entrust Data Card",description:"website resdesign and development. The link leads to a static style guide not the production sight. This was used for dev and design to interogate the components in realtime.",tools:"SASS | jQuery | Custom SVG Library | Bootstrap | Nunjucks"},{url:"https://www.milwaukeetool.com/Innovations/m12",project:"Milwaukee Tool",description:"website and app development for Milwaukee Tool brand update; heavy work on animations and interactivity",tools:"SASS | jQuery | Green Sock | Bootstrap"},{url:"https://www.bremer.com",project:"Bremer \n Bank",description:"website and app development for Bremer Bank re-branding. A major part of the project was an accessibility audit and compliance development",tools:"SASS | jQuery | React | Bootstrap | Nunjucks"},{url:"https://estimate-calculator-fed.baezcharliew.now.sh/",project:"Task Based Estimator",description:"A prototype for a task based estimator for Project Managers",tools:"SASS | React | Reactstrap | NextJs"}]}};function oe(t){let n,a,o,r,c,d,f,h,g,v,b,k,w,$,y;const A=new G({props:{navlists:ae.NAVBAR_DATA,header:ae.HEADER}}),x=new H({props:{bannerData:ae.BANNER_DATA,"}":!0}}),I=new Q({props:{aboutData:ae.ABOUT_DATA}}),S=new X({props:{workData:ae.WORKGRID_DATA}}),j=new ee({}),N=new ne({});return{c(){n=u("div"),a=p(),o=u("div"),r=p(),c=u("div"),d=p(),f=u("header"),E(A.$$.fragment),h=p(),E(x.$$.fragment),g=p(),v=u("main"),E(I.$$.fragment),b=p(),E(S.$$.fragment),k=p(),E(j.$$.fragment),w=p(),$=u("footer"),E(N.$$.fragment),m(n,"id","stars"),m(o,"id","stars2"),m(c,"id","stars3"),m(f,"class","container"),m(v,"class","container")},m(e,t){i(e,n,t),i(e,a,t),i(e,o,t),i(e,r,t),i(e,c,t),i(e,d,t),i(e,f,t),T(A,f,null),s(f,h),T(x,f,null),i(e,g,t),i(e,v,t),T(I,v,null),s(v,b),T(S,v,null),s(v,k),T(j,v,null),i(e,w,t),i(e,$,t),T(N,$,null),y=!0},p:e,i(e){y||(D(A.$$.fragment,e),D(x.$$.fragment,e),D(I.$$.fragment,e),D(S.$$.fragment,e),D(j.$$.fragment,e),D(N.$$.fragment,e),y=!0)},o(e){_(A.$$.fragment,e),_(x.$$.fragment,e),_(I.$$.fragment,e),_(S.$$.fragment,e),_(j.$$.fragment,e),_(N.$$.fragment,e),y=!1},d(e){e&&l(n),e&&l(a),e&&l(o),e&&l(r),e&&l(c),e&&l(d),e&&l(f),R(A),R(x),e&&l(g),e&&l(v),R(I),R(S),R(j),e&&l(w),e&&l($),R(N)}}}new URL("../images/selfie_gray_glasses.png",document.currentScript&&document.currentScript.src||new URL("bundle.js",document.baseURI).href).href;const re=new class extends B{constructor(e){super(),C(this,e,null,oe,r,{})}}({target:document.body,props:{name:"world"}}),se=document.querySelectorAll(".work-projects"),ie=document.querySelectorAll(".fade-ins"),le=document.querySelectorAll(".scalers"),ce=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),t.unobserve(e.target))})}),{threshold:0,rootMargin:"0px 0px -150px 0px"});return se.forEach(e=>{ce.observe(e)}),ie.forEach(e=>{ce.observe(e)}),le.forEach(e=>{ce.observe(e)}),window.addEventListener("load",(function(){setTimeout(()=>{window.scrollTo(0,0)},10)})),re}();
//# sourceMappingURL=bundle.js.map
