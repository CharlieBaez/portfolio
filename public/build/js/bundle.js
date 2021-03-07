var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function f(){return u(" ")}function p(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let h;function v(e){h=e}const g=[],b=[],w=[],y=[],A=Promise.resolve();let z=!1;function $(e){w.push(e)}function k(){const e=new Set;do{for(;g.length;){const e=g.shift();v(e),E(e.$$)}for(;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];e.has(n)||(n(),e.add(n))}w.length=0}while(g.length);for(;y.length;)y.pop()();z=!1}function E(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const C=new Set;let _;function x(e,t){e&&e.i&&(C.delete(e),e.i(t))}function I(e,t,n,a){if(e&&e.o){if(C.has(e))return;C.add(e),_.c.push(()=>{C.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function S(e){e&&e.c()}function T(e,n,o){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=e.$$;s&&s.m(n,o),$(()=>{const n=i.map(t).filter(r);l?l.push(...n):a(n),e.$$.on_mount=[]}),c.forEach($)}function D(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function N(e,t){-1===e.$$.dirty[0]&&(g.push(e),z||(z=!0,A.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L(t,r,o,s,i,l,c=[-1]){const d=h;v(t);const u=r.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:c};let p=!1;f.ctx=o?o(t,u,(e,n,a=n)=>(f.ctx&&i(f.ctx[e],f.ctx[e]=a)&&(f.bound[e]&&f.bound[e](a),p&&N(t,e)),n)):[],f.update(),p=!0,a(f.before_update),f.fragment=!!s&&s(f.ctx),r.target&&(r.hydrate?f.fragment&&f.fragment.l(function(e){return Array.from(e.childNodes)}(r.target)):f.fragment&&f.fragment.c(),r.intro&&x(t.$$.fragment),T(t,r.target,r.anchor),k()),v(d)}class R{$destroy(){D(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function B(e,t,n){const a=e.slice();return a[4]=t[n],a}function j(e){let t,n,r,o,c,h,v=e[4].title+"";return{c(){t=d("li"),n=u(v),r=f(),m(t,"class","navbar-item link svelte-1vkexb"),m(t,"name",o=e[4].title),m(t,"tabindex","0"),m(t,"role","navigation"),m(t,"aria-label",c="Link to "+e[4].title+" section"),h=[p(t,"click",e[1]),p(t,"keyup",e[2])]},m(e,a){i(e,t,a),s(t,n),s(t,r)},p(e,a){1&a&&v!==(v=e[4].title+"")&&function(e,t){t=""+t,e.data!==t&&(e.data=t)}(n,v),1&a&&o!==(o=e[4].title)&&m(t,"name",o),1&a&&c!==(c="Link to "+e[4].title+" section")&&m(t,"aria-label",c)},d(e){e&&l(t),a(h)}}}function M(t){let n,a,r,o=t[0],u=[];for(let e=0;e<o.length;e+=1)u[e]=j(B(t,o,e));return{c(){n=d("section"),a=d("nav"),r=d("ul");for(let e=0;e<u.length;e+=1)u[e].c();m(r,"role","navigation"),m(r,"class","navbar-list svelte-1vkexb"),m(a,"class","navbar svelte-1vkexb"),m(n,"id","nav-bar")},m(e,t){i(e,n,t),s(n,a),s(a,r);for(let e=0;e<u.length;e+=1)u[e].m(r,null)},p(e,[t]){if(7&t){let n;for(o=e[0],n=0;n<o.length;n+=1){const a=B(e,o,n);u[n]?u[n].p(a,t):(u[n]=j(a),u[n].c(),u[n].m(r,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=o.length}},i:e,o:e,d(e){e&&l(n),c(u,e)}}}function W(e,t,n){let{navlists:a=[]}=t;document.querySelectorAll(".navbar-item");return e.$set=e=>{"navlists"in e&&n(0,a=e.navlists)},[a,e=>{const t=e.target.getAttribute("name");document.getElementById(t).scrollIntoView({behavior:"smooth"})},e=>{13===e.keyCode&&(e.preventDefault(),e.target.click(),setTimeout((function(){const t=e.target.getAttribute("name");document.getElementById(t).querySelector("[tabindex], a, input, textarea").focus()}),700))}]}class G extends R{constructor(e){super(),L(this,e,W,M,o,{navlists:0})}}function H(t){let n,a,r,o,c;return{c(){n=d("section"),a=d("h1"),a.textContent=`${t[0]}`,r=f(),o=d("div"),c=d("p"),c.textContent=`${t[1]}`,m(a,"class","hero-headline svelte-98373d"),m(o,"class","hero-copy svelte-98373d"),m(n,"class","hero svelte-98373d")},m(e,t){i(e,n,t),s(n,a),s(n,r),s(n,o),s(o,c)},p:e,i:e,o:e,d(e){e&&l(n)}}}function O(e,t,n){let{bannerData:a={}}=t;const{HEADING:r,DECRIPTION:o,TUTORIAL_URL:s,WATCH_TUTORIAL:i}=a;return e.$set=e=>{"bannerData"in e&&n(2,a=e.bannerData)},[r,o,a]}class U extends R{constructor(e){super(),L(this,e,O,H,o,{bannerData:2})}}function P(t){let n,a,r,o,c,u,p,h,v;return{c(){n=d("section"),a=d("img"),r=f(),o=d("h2"),o.textContent=`${t[0]}`,c=f(),u=d("p"),u.textContent=`${t[4]}`,p=f(),h=d("blockquote"),v=d("em"),v.textContent=`${t[5]} — ${t[6]}`,m(a,"data-src",t[1]),m(a,"width",t[3]),m(a,"height",t[2]),m(a,"class","headshot scalers lazyload svelte-1p0rs6a"),m(a,"alt","charlie_baez"),m(o,"class","fade-ins"),m(u,"class","fade-ins svelte-1p0rs6a"),m(h,"class","fade-ins svelte-1p0rs6a"),m(n,"class","about svelte-1p0rs6a"),m(n,"id","about")},m(e,t){i(e,n,t),s(n,a),s(n,r),s(n,o),s(n,c),s(n,u),s(n,p),s(n,h),s(h,v)},p:e,i:e,o:e,d(e){e&&l(n)}}}function q(e,t,n){let{aboutData:a={}}=t;const{HEADING:r,TITLE:o,IMAGE_URL:s,IMAGE_HEIGHT:i,IMAGE_WIDTH:l,DESCRIPTION:c,QUOTE:d,BYLINE:u}=a;return e.$set=e=>{"aboutData"in e&&n(7,a=e.aboutData)},[r,s,i,l,c,d,u,a]}class F extends R{constructor(e){super(),L(this,e,q,P,o,{aboutData:7})}}function Q(e,t,n){const a=e.slice();return a[3]=t[n],a}function J(t){let n,a,r,o,c,p,h,v,g,b,w,y,A,z,$=t[3].project+"",k=t[3].description+"",E=t[3].tools+"";return{c(){n=d("div"),a=d("h3"),r=d("a"),o=u($),h=f(),v=d("p"),g=u(k),b=f(),w=d("p"),y=d("em"),A=u(E),z=f(),m(r,"tabindex","0"),m(r,"href",c=t[3].url),m(r,"class","link work-projects_example svelte-otndwd"),m(r,"aria-label",p="Link to "+t[3].project+" site"),m(r,"target","_blank"),m(r,"rel","noopener"),m(a,"class","svelte-otndwd"),m(v,"class","svelte-otndwd"),m(w,"class","svelte-otndwd"),m(n,"class","work-projects svelte-otndwd")},m(e,t){i(e,n,t),s(n,a),s(a,r),s(r,o),s(n,h),s(n,v),s(v,g),s(n,b),s(n,w),s(w,y),s(y,A),s(n,z)},p:e,d(e){e&&l(n)}}}function K(t){let n,a,r,o,u,p,h,v,g=t[0],b=[];for(let e=0;e<g.length;e+=1)b[e]=J(Q(t,g,e));return{c(){n=d("section"),a=d("h2"),a.textContent="work",r=f(),o=d("div");for(let e=0;e<b.length;e+=1)b[e].c();u=f(),p=d("div"),p.innerHTML='\n    checkout my\n    <a href="https://github.com/CharlieBaez/" rel="noopener" target="_blank" class="link svelte-otndwd">\n      GitHub\n    </a>\n    where I host my personal projects\n  ',h=f(),v=d("div"),v.innerHTML='\n    checkout my\n    <a href="https://codepen.io/RasterWolf" rel="noopener" target="_blank" class="link svelte-otndwd">\n      CodePen\n    </a>\n    where I sketch out ideas and prototype concepts\n  ',m(o,"class","work-grid svelte-otndwd"),m(p,"class","work-cta fade-ins svelte-otndwd"),m(v,"class","work-cta fade-ins svelte-otndwd"),m(n,"class","work svelte-otndwd"),m(n,"id","work")},m(e,t){i(e,n,t),s(n,a),s(n,r),s(n,o);for(let e=0;e<b.length;e+=1)b[e].m(o,null);s(n,u),s(n,p),s(n,h),s(n,v)},p(e,[t]){if(1&t){let n;for(g=e[0],n=0;n<g.length;n+=1){const a=Q(e,g,n);b[n]?b[n].p(a,t):(b[n]=J(a),b[n].c(),b[n].m(o,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=g.length}},i:e,o:e,d(e){e&&l(n),c(b,e)}}}function V(e,t,n){let{workData:a={}}=t;const{HEADING:r,WORKGRID_LIST:o}=a;return e.$set=e=>{"workData"in e&&n(1,a=e.workData)},[o,a]}class Y extends R{constructor(e){super(),L(this,e,V,K,o,{workData:1})}}function X(t){let n,a,r,o;return{c(){n=d("section"),a=d("h2"),r=d("a"),r.textContent="shoot me a message!",m(r,"class","link svelte-1r5sy1n"),m(r,"href","#contact"),m(a,"class","fade-ins svelte-1r5sy1n"),m(n,"class","contact svelte-1r5sy1n"),m(n,"id","contact"),o=p(r,"click",t[0])},m(e,t){i(e,n,t),s(n,a),s(a,r)},p:e,i:e,o:e,d(e){e&&l(n),o()}}}function Z(e){return[e=>{window.open("mailto:charliewbaez@gmail.com?subject=Oh Hey!")}]}class ee extends R{constructor(e){super(),L(this,e,Z,X,o,{})}}function te(t){let n;return{c(){n=d("div"),n.innerHTML='<div class="row footer-copy svelte-1tw2vuz"><div class="footer-title svelte-1tw2vuz">\n      Charlie\n      <br>\n      Baez\n    </div> \n    <div class="footer-social-links svelte-1tw2vuz"><ul class="svelte-1tw2vuz"><li class="svelte-1tw2vuz"><a href="https://www.linkedin.com/in/charlierund/" class="link social-media-links svelte-1tw2vuz" target="_blank" rel="noopener" aria-label="Linkedin"><i class="fab fa-linkedin-in"></i></a></li> \n        <li class="svelte-1tw2vuz"><a href="https://twitter.com/charlie_baez" class="link social-media-links svelte-1tw2vuz" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li> \n        <li class="svelte-1tw2vuz"><a href="https://www.instagram.com/charliebaez85" class="link social-media-links svelte-1tw2vuz" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li></ul></div></div> \n  <div class="row footer-copywrite svelte-1tw2vuz">©2020 Charlie Baez</div>',m(n,"class","container svelte-1tw2vuz")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}class ne extends R{constructor(e){super(),L(this,e,null,te,o,{})}}const ae={NAVBAR_DATA:[{id:1,url:"#about",title:"about",tabIndex:1},{id:2,url:"#work",title:"work",tabIndex:2},{id:3,url:"#contact",title:"contact",tabIndex:3}],BANNER_DATA:{HEADING:"Charlie Baez Does Web Stuff",DECRIPTION:"...hace bien"},ABOUT_DATA:{HEADING:"hola",IMAGE_URL:"/build/images/selfie_gray_glasses.png",IMAGE_WIDTH:"400",IMAGE_HEIGHT:"343",DESCRIPTION:"I am a developer with a focus in UI, Motion Design, UX and Accessibility. I utilize a variety of tools including Javascript, modern js frameworks (Svelte, React, and Gatsby), GraphQL, a11y Web Standards and more to build engaging, immersive, and accessible user experiences. I love learning and exploring this ever evolving digital landscape.",QUOTE:'"Somewhere, something incredible is waiting to be known."',BYLINE:"Carl Sagan"},WORKGRID_DATA:{HEADING:"work",WORKGRID_LIST:[{url:"https://www.seminolewildcard.com/",project:"Seminole Wild Card",description:"website resdesign and development, mobile app development. Colaborative dev with internal team",tools:"Vanilla Javascript | React | React Native | WKWebview | WSO2 | JSP"},{url:"https://weathered-or-not.netlify.app",project:"Weathered",description:"Weather App I built just because it was rainy outside and I was bored",tools:"Vanilla Javascript | Accuweather API"},{url:"https://wwex.com/",project:"World Wide Express",description:"website resdesign and development. Because of budget and time constraints, we concentrated on theming and flexibility of limited components",tools:"SASS | jQuery | Green Sock | Bootstrap | Nunjucks"},{url:"https://animales.netlify.app/",project:"Animales App",description:"App designed by my son and built by me with the SUN stack",tools:"Svelte | Userbase SDK | Netlify"},{url:"https://expensivo.netlify.app/",project:"¡Expensivo!",description:"Budget Calculator App. This was a personal Project to learn SvelteJs",tools:"Svelte | Rollup | CSS Custom Properties | Netlify"},{url:"https://edc-static.netlify.app",project:"Entrust Data Card",description:"website resdesign and development. The link leads to a static style guide not the production sight. This was used for dev and design to interogate the components in realtime.",tools:"SASS | jQuery | Custom SVG Library | Bootstrap | Nunjucks"},{url:"https://www.milwaukeetool.com/Innovations/m12",project:"Milwaukee Tool",description:"website and app development for Milwaukee Tool brand update; heavy work on animations and interactivity",tools:"SASS | jQuery | Green Sock | Bootstrap"},{url:"https://www.bremer.com",project:"Bremer \n Bank",description:"website and app development for Bremer Bank re-branding. A major part of the project was an accessibility audit and compliance development",tools:"SASS | jQuery | React | Bootstrap | Nunjucks"},{url:"https://estimate-calculator-fed.baezcharliew.now.sh/",project:"Task Based Estimator",description:"A prototype for a task based estimator for Project Managers",tools:"SASS | React | Reactstrap | NextJs"}]}};function re(t){let n,a,r,o,c,u,p,h,v,g,b,w,y,A,z;const $=new G({props:{navlists:ae.NAVBAR_DATA,header:ae.HEADER}}),k=new U({props:{bannerData:ae.BANNER_DATA,"}":!0}}),E=new F({props:{aboutData:ae.ABOUT_DATA}}),C=new Y({props:{workData:ae.WORKGRID_DATA}}),_=new ee({}),N=new ne({});return{c(){n=d("div"),a=f(),r=d("div"),o=f(),c=d("div"),u=f(),p=d("header"),S($.$$.fragment),h=f(),S(k.$$.fragment),v=f(),g=d("main"),S(E.$$.fragment),b=f(),S(C.$$.fragment),w=f(),S(_.$$.fragment),y=f(),A=d("footer"),S(N.$$.fragment),m(n,"id","stars"),m(r,"id","stars2"),m(c,"id","stars3"),m(p,"class","container"),m(g,"class","container")},m(e,t){i(e,n,t),i(e,a,t),i(e,r,t),i(e,o,t),i(e,c,t),i(e,u,t),i(e,p,t),T($,p,null),s(p,h),T(k,p,null),i(e,v,t),i(e,g,t),T(E,g,null),s(g,b),T(C,g,null),s(g,w),T(_,g,null),i(e,y,t),i(e,A,t),T(N,A,null),z=!0},p:e,i(e){z||(x($.$$.fragment,e),x(k.$$.fragment,e),x(E.$$.fragment,e),x(C.$$.fragment,e),x(_.$$.fragment,e),x(N.$$.fragment,e),z=!0)},o(e){I($.$$.fragment,e),I(k.$$.fragment,e),I(E.$$.fragment,e),I(C.$$.fragment,e),I(_.$$.fragment,e),I(N.$$.fragment,e),z=!1},d(e){e&&l(n),e&&l(a),e&&l(r),e&&l(o),e&&l(c),e&&l(u),e&&l(p),D($),D(k),e&&l(v),e&&l(g),D(E),D(C),D(_),e&&l(y),e&&l(A),D(N)}}}!function(e,t){e(t={exports:{}},t.exports)}((function(e){!function(t,n){var a=function(e,t,n){var a,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var o=t.documentElement,s=e.HTMLPictureElement,i=e.addEventListener.bind(e),l=e.setTimeout,c=e.requestAnimationFrame||l,d=e.requestIdleCallback,u=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},v=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},b=function(e,t,n){var a=n?"addEventListener":"removeEventListener";n&&b(e,t),f.forEach((function(n){e[a](n,t)}))},w=function(e,n,r,o,s){var i=t.createEvent("Event");return r||(r={}),r.instance=a,i.initEvent(n,!o,!s),i.detail=r,e.dispatchEvent(i),i},y=function(t,n){var a;!s&&(a=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},z=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},$=function(){var e,n,a=[],r=[],o=a,s=function(){var t=o;for(o=a.length?r:a,e=!0,n=!1;t.length;)t.shift()();e=!1},i=function(a,r){e&&!r?a.apply(this,arguments):(o.push(a),n||(n=!0,(t.hidden?l:c)(s)))};return i._lsFlush=s,i}(),k=function(e,t){return t?function(){$(e)}:function(){var t=this,n=arguments;$((function(){e.apply(t,n)}))}},E=function(e){var t,a,r=function(){t=null,e()},o=function(){var e=n.now()-a;e<99?l(o,99-e):(d||r)(r)};return function(){a=n.now(),t||(t=l(o,99))}},C=(q=/^img$/i,F=/^iframe$/i,Q="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),J=0,K=0,V=-1,Y=function(e){K--,(!e||K<0||!e.target)&&(K=0)},X=function(e){return null==P&&(P="hidden"==A(t.body,"visibility")),P||!("hidden"==A(e.parentNode,"visibility")&&"hidden"==A(e,"visibility"))},Z=function(e,n){var a,r=e,s=X(e);for(G-=n,U+=n,H-=n,O+=n;s&&(r=r.offsetParent)&&r!=t.body&&r!=o;)(s=(A(r,"opacity")||1)>0)&&"visible"!=A(r,"overflow")&&(a=r.getBoundingClientRect(),s=O>a.left&&H<a.right&&U>a.top-1&&G<a.bottom+1);return s},ee=function(){var e,n,s,i,l,c,d,u,f,p,m,h,v=a.elements;if((B=r.loadMode)&&K<8&&(e=v.length)){for(n=0,V++;n<e;n++)if(v[n]&&!v[n]._lazyRace)if(!Q||a.prematureUnveil&&a.prematureUnveil(v[n]))ie(v[n]);else if((u=v[n].getAttribute("data-expand"))&&(c=1*u)||(c=J),p||(p=!r.expand||r.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:r.expand,a._defEx=p,m=p*r.expFactor,h=r.hFac,P=null,J<m&&K<1&&V>2&&B>2&&!t.hidden?(J=m,V=0):J=B>1&&V>1&&K<6?p:0),f!==c&&(M=innerWidth+c*h,W=innerHeight+c,d=-1*c,f=c),s=v[n].getBoundingClientRect(),(U=s.bottom)>=d&&(G=s.top)<=W&&(O=s.right)>=d*h&&(H=s.left)<=M&&(U||O||H||G)&&(r.loadHidden||X(v[n]))&&(L&&K<3&&!u&&(B<3||V<4)||Z(v[n],c))){if(ie(v[n]),l=!0,K>9)break}else!l&&L&&!i&&K<4&&V<4&&B>2&&(N[0]||r.preloadAfterLoad)&&(N[0]||!u&&(U||O||H||G||"auto"!=v[n].getAttribute(r.sizesAttr)))&&(i=N[0]||v[n]);i&&!l&&ie(i)}},te=function(e){var t,a=0,o=r.throttleDelay,s=r.ricTimeout,i=function(){t=!1,a=n.now(),e()},c=d&&s>49?function(){d(i,{timeout:s}),s!==r.ricTimeout&&(s=r.ricTimeout)}:k((function(){l(i)}),!0);return function(e){var r;(e=!0===e)&&(s=33),t||(t=!0,(r=o-(n.now()-a))<0&&(r=0),e||r<9?c():l(c,r))}}(ee),ne=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(Y(e),v(t,r.loadedClass),g(t,r.loadingClass),b(t,re),w(t,"lazyloaded"))},ae=k(ne),re=function(e){ae({target:e.target})},oe=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},se=k((function(e,t,n,a,o){var s,i,c,d,f,p;(f=w(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?v(e,r.autosizesClass):e.setAttribute("sizes",a)),i=e.getAttribute(r.srcsetAttr),s=e.getAttribute(r.srcAttr),o&&(d=(c=e.parentNode)&&u.test(c.nodeName||"")),p=t.firesLoad||"src"in e&&(i||s||d),f={target:e},v(e,r.loadingClass),p&&(clearTimeout(R),R=l(Y,2500),b(e,re,!0)),d&&m.call(c.getElementsByTagName("source"),oe),i?e.setAttribute("srcset",i):s&&!d&&(F.test(e.nodeName)?function(e,t){var n=e.getAttribute("data-load-mode")||r.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)}(e,s):e.src=s),o&&(i||d)&&y(e,{src:s})),e._lazyRace&&delete e._lazyRace,g(e,r.lazyClass),$((function(){var t=e.complete&&e.naturalWidth>1;p&&!t||(t&&v(e,r.fastLoadedClass),ne(f),e._lazyCache=!0,l((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&K--}),!0)})),ie=function(e){if(!e._lazyRace){var t,n=q.test(e.nodeName),a=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),o="auto"==a;(!o&&L||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,r.errorClass)||!h(e,r.lazyClass))&&(t=w(e,"lazyunveilread").detail,o&&_.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,K++,se(e,t,o,a,n))}},le=E((function(){r.loadMode=3,te()})),ce=function(){3==r.loadMode&&(r.loadMode=2),le()},de=function(){L||(n.now()-j<999?l(de,999):(L=!0,r.loadMode=3,te(),i("scroll",ce,!0)))},{_:function(){j=n.now(),a.elements=t.getElementsByClassName(r.lazyClass),N=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),i("scroll",te,!0),i("resize",te,!0),i("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&c((function(){n.forEach((function(e){e.complete&&ie(e)}))}))}})),e.MutationObserver?new MutationObserver(te).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o.addEventListener("DOMNodeInserted",te,!0),o.addEventListener("DOMAttrModified",te,!0),setInterval(te,999)),i("hashchange",te,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,te,!0)})),/d$|^c/.test(t.readyState)?de():(i("load",de),t.addEventListener("DOMContentLoaded",te),l(de,2e4)),a.elements.length?(ee(),$._lsFlush()):te()},checkElems:te,unveil:ie,_aLSL:ce}),_=(S=k((function(e,t,n,a){var r,o,s;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),u.test(t.nodeName||""))for(o=0,s=(r=t.getElementsByTagName("source")).length;o<s;o++)r[o].setAttribute("sizes",a);n.detail.dataAttr||y(e,n.detail)})),T=function(e,t,n){var a,r=e.parentNode;r&&(n=z(e,r,n),(a=w(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&S(e,r,a,n))},D=E((function(){var e,t=I.length;if(t)for(e=0;e<t;e++)T(I[e])})),{_:function(){I=t.getElementsByClassName(r.autosizesClass),i("resize",D)},checkElems:D,updateElem:T}),x=function(){!x.i&&t.getElementsByClassName&&(x.i=!0,_._(),C._())};var I,S,T,D;var N,L,R,B,j,M,W,G,H,O,U,P,q,F,Q,J,K,V,Y,X,Z,ee,te,ne,ae,re,oe,se,ie,le,ce,de;return l((function(){r.init&&x()})),a={cfg:r,autoSizer:_,loader:C,init:x,uP:y,aC:v,rC:g,hC:h,fire:w,gW:z,rAF:$}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})}));new URL("../images/selfie_gray_glasses.png",document.currentScript&&document.currentScript.src||new URL("bundle.js",document.baseURI).href).href;const oe=new class extends R{constructor(e){super(),L(this,e,null,re,o,{})}}({target:document.getElementById("root"),props:{name:"world"}}),se=document.querySelectorAll(".work-projects"),ie=document.querySelectorAll(".fade-ins"),le=document.querySelectorAll(".scalers"),ce=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),t.unobserve(e.target))})}),{threshold:0,rootMargin:"0px 0px -150px 0px"});return se.forEach(e=>{ce.observe(e)}),ie.forEach(e=>{ce.observe(e)}),le.forEach(e=>{ce.observe(e)}),window.addEventListener("load",(function(){setTimeout(()=>{window.scrollTo(0,0)},10)})),oe}();
//# sourceMappingURL=bundle.js.map
