(()=>{"use strict";var n={3:(n,e,t)=>{t.d(e,{A:()=>s});var i=t(601),r=t.n(i),o=t(314),a=t.n(o)()(r());a.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\nhtml {\n  /* color-scheme: dark light; */\n  hanging-punctuation: first last;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  min-height: 100svh;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  font-style: italic;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\np {\n  max-width: 75ch;\n  text-wrap: pretty;\n}\n\nbutton,\ninput:is([type="submit"], [type="button"], [type="checkbox"]) {\n  color: inherit;\n  cursor: pointer;\n  letter-spacing: inherit;\n}\n\ninput[type="number"] {\n  appearance: normal;\n  -moz-appearance: textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ntable {\n  font-variant-numeric: tabular-nums;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :has(:target) {\n    scroll-behavior: smooth;\n    scroll-padding-top: 3rem;\n  }\n}\n',""]);const s=a},669:(n,e,t)=>{t.d(e,{A:()=>s});var i=t(601),r=t.n(i),o=t(314),a=t.n(o)()(r());a.push([n.id,':root {\n    --main-white: #ffffff;\n    --main-black: #000000;\n}\n\n/* * {\n    border: 1px solid green;\n} */\n\n.page-container {\n    width: 90dvw;\n}\n\nimg {\n    width: 300px;\n    height: 300px;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    .page-container {\n        flex-wrap: wrap;\n        display: flex;\n        justify-content: space-between;\n        p {\n            text-transform: uppercase;\n        }\n    }\n}\n\nnav {\n    position: fixed;\n    z-index: 999;\n    bottom: 4vh;\n    left: 50%;\n    width: 380px;\n    height: 53px;\n    padding: 0 25px;\n    margin-left: -190px;\n    box-sizing: border-box;\n    border: 1px solid #090909;\n    border-radius: 52px;\n    background-color: hsla(0, 0%, 98%, .8);\n    backdrop-filter: blur(5px);\n    ul {\n        list-style: none;\n        flex: 1 1;\n        position: relative;\n        z-index: 1000;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        text-transform: uppercase;\n        padding-left: 0;\n        a {\n            text-decoration: none;\n            color: var(--main-black);\n            font-size: 1rem;\n        }\n    }\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    #hero {\n        min-height: 100svh;\n        .page-container {\n            h1 {\n                font-size: 12dvw;\n                text-align: center;\n            }\n            .hero-text-and-img {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                gap: 2rem;\n                h2 {\n                    font-size: 3dvw;\n                }\n                #heroImg {\n                    width: 20dvw;   \n                    height: auto;\n                }\n            }\n        }\n    }\n    #projects {\n        min-height: 100svh;\n        .page-container {\n            .projects-heading {\n                font-size: 3rem;\n            }\n            .grid-container {\n                display: grid;\n                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n                gap: 1rem;\n                justify-content: center;\n                align-items: center;\n                .card {\n                    cursor: pointer;\n                    display: flex;\n                    flex-direction: column;\n                    height: 100%;\n                    a {\n                        text-decoration: none;\n                        color: var(--main-black);\n                    }\n                    :hover img {\n                        border-radius: 50%;\n                        transition-duration: 0.4s;\n                    }\n                    .project-number {\n                        color: #8c8c8c;\n                    }\n                    img {\n                        width: 100%;\n                        height: auto;\n                        transition-duration: 0.4s;\n                    }\n                    hr {\n                        border: 0.5px solid var(--main-black);\n                    }\n                    .project-tags {\n                        text-transform: uppercase;\n                        font-size: .8rem;\n                    }\n                    .project-title {\n                        text-transform: uppercase;\n                        font-size: 2rem ;\n                        margin: 0;\n                    }\n                }\n            }\n        }\n    }\n    #about {\n        min-height: 100svh;\n        width: 97dvw;\n        background-color: var(--main-black);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 1%;\n        .page-container {\n            color: var(--main-white);\n            .about-heading {\n                font-size: 6rem;\n                .demure {\n                    background-image: linear-gradient(45deg, #ffb3ba, #c49c6e, #bfbf76, #77b084, #ff7e74, #3b82f6, #c084fc, #db2777);\n                    color: transparent;\n                    -webkit-background-clip: text; /* Edge, Chrome */\n                    background-clip: text; /* Safari, FF */\n                    animation: gradientAnimation 8s linear infinite;\n                    animation-direction: alternate;\n                    background-size: 300% 100%;\n                }\n                @keyframes gradientAnimation {\n                    0% {\n                        background-position: 0;\n                    }\n                    100% {\n                        background-position: 100%;\n                    }\n                }\n            }\n            .about-card {\n                display: flex;\n                justify-content: space-between;\n                align-items: start;\n                gap: 3rem;\n                .about-text {\n                    p {\n                        font-size: 1.5rem;\n                        line-height: 1.8rem;\n                    }\n                }\n                .about-img {\n                    width: 30%;\n                    height: auto;\n                    border-radius: 50%;\n                }\n            }\n        }\n    }\n    #testimonial {\n        min-height: 100svh;\n        margin-top: 3rem;\n        .page-container {\n\n            .testimonial-start {\n                min-height: 40svh;\n                h1 {\n                    font-size: 6rem;\n                    text-transform: uppercase;\n                }\n                #testimonialHeading{\n\n                    min-width: 100%;\n                    display: flex;\n                    justify-content: right;\n                    gap: 4rem;\n                    #testimonial-left {\n                        font-size: 1.5rem;\n                        text-transform: uppercase;\n                    }\n                    #testimonial-right {\n                        font-size: 1.5rem;\n                        width: 40%;\n                        margin-right: 6rem;\n                    }\n                }\n            }\n            \n            .slideshow-container {\n\n                .slides {\n                    display: none;\n                    /* display: grid; */\n                    grid-template-columns: 1fr 1fr;\n\n                    min-height: 90svh;\n                    justify-content: space-between;\n                    .slideshow-left {\n                        display: flex;\n                        flex-direction: column;\n                        .slide-header {\n                            min-height: 90%;\n                            h2 {\n    \n                            }\n                            .client-name {\n    \n                            }\n                            .client-company {\n    \n                            }\n                            .project-tag {\n    \n                                span {\n    \n                                }\n                            }\n                        }\n                        .slide-controller {\n                            display: flex;\n                            align-items: center;\n                            justify-content: space-between;\n                            \n                            .slide-number {\n            \n                            }\n                            .slide-button-container {\n            \n                                .slide-buttons {\n                                    font-size: 2rem;\n                                    border-radius: 5rem;\n                                    padding: 1rem;\n                                    width: 8rem;\n                                }\n                            }\n                        }\n                    }\n                    .slide-img {\n                        min-width: 50dvw;\n                        height: auto; \n                    }\n                }\n                .slides:first-child {\n                    display: grid;\n                }\n            }\n        }\n    }\n    #contact {\n        min-height: 100svh;\n        width: 97dvw;\n        background-color: var(--main-black);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 1%;\n        .page-container {\n            color: var(--main-white);\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            .contact-heading {\n                text-align: center;\n                font-size: 8rem;\n            }\n            .cta-button {\n                font-size: 3rem;\n                color: var(--main-white);\n                background-color: #1F61EB;\n                border-radius: 80px;\n                padding: 1rem;\n                border-style: none;\n                width: 30rem;\n                border-right: 20px solid #1F61EB;\n                border-bottom-right-radius: 4px 3px;\n            }\n            .cta-button:hover span {\n                display:none\n            }\n            .cta-button:hover:before {\n                content:"Yes!";\n            }\n            .cta-button:hover {\n                background-color: var(--main-black);\n                border-right: 20px solid var(--main-black);\n            }\n            .read {\n                margin-top: 0.5rem;\n                font-size: 1.5rem;\n                width: 30rem;\n                text-align: right;\n                color: #9b9b9b;\n            }\n        }\n    }\n}\n\nfooter {\n    min-height: 45svh;\n    display: flex;\n    justify-content: center;\n    margin-top: 3rem;\n    .page-container {\n\n        #footerTop {\n            display: flex;\n            justify-content: space-between; \n            #footerMenu {\n\n                h3 {\n                    font-size: 2rem;\n                }\n\n                hr {\n                    width: 40dvw;\n                }\n\n                ul {\n                    padding-left: 0;\n                    li {\n                        list-style: none;\n                        line-height: 2rem;\n                        a {\n                            font-size: 1.5rem;\n                            text-decoration: none;\n                            color: var(--main-black);\n                        }\n                        a:hover {\n                            color: #0000ff;\n                        }\n                    }\n                }\n            }\n\n            #socialLinks {\n\n                h3 {\n                    font-size: 2rem;\n                }\n\n                hr {\n                    width: 40dvw;\n                }\n\n                ul {\n                    padding-left: 0;\n                    li {\n                        list-style: none;\n                        line-height: 2rem;\n                        a {\n                            font-size: 1.5rem;\n                            text-decoration: none;\n                            color: var(--main-black);\n                        }\n                        a:hover {\n                            color: #0000ff;\n                        }\n                    }\n                }\n            }\n        }\n\n        #footerBottom {\n            display: flex;\n            justify-content: space-between;\n            #copyright {\n\n                p {\n                    font-size: 3dvw;\n                }\n            }\n\n            #localTime {\n                \n                p {\n                    font-size: 1.5rem;\n                }\n                span {\n                    font-size: 1rem;\n                }\n            }\n\n            #backToTop {\n\n                button {\n                    border-radius: 100%;\n                    width: 100%;\n                    height: 50%;\n                    a {\n                        font-size: 1rem;\n                        text-decoration: none;\n                        color: var(--main-black);\n                        padding: 1rem;\n                    }\n                }\n            }\n        }\n    }\n\n}\n\n\n/* marquee */\n.marquee-wrapper {\n    max-width: 100%;\n    overflow: hidden;\n    position: relative;\n    .marquee {\n        white-space: nowrap;\n        overflow: hidden;\n        display: inline-block;\n        animation: marquee 30s linear infinite;\n        span {\n            display: inline-block;\n            font-size: 3rem;\n            padding-right: 2rem;\n        }\n    }\n}\n\n@keyframes marquee {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-100%);\n    }\n}\n',""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=i.base?c[0]+i.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=i(n,r),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var i=t(72),r=t.n(i),o=t(825),a=t.n(o),s=t(659),c=t.n(s),l=t(56),d=t.n(l),p=t(540),m=t.n(p),u=t(113),f=t.n(u),h=t(3),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;var b=t(669),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=m(),r()(b.A,v),b.A&&b.A.locals&&b.A.locals;const y=t.p+"6c563a5fa2a35c51af9f.jpg";t.p;const x=(n,e)=>({title:n,link:e}),w=[x("projects","#projects"),x("about","#about"),x("contact","#contact")],k=(n,e,t,i)=>({title:n,tag:e,image:t,link:i}),j=[k("V.0 Portfolio",["Web Development","Web Design"],"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://github.com/MaybeJod/v.0_portfolio"),k("E-store",["Web Development","SEO"],"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://github.com/MaybeJod/e-store"),k("Weather app",["Web Development"],"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://github.com/MaybeJod/ODIN-weather-app")],E=(n,e,t,i,r)=>({clientName:n,clientCompany:e,statement:t,projectTag:i,img:r}),z=[E("NotJod","A cool company","Jod is phenomenal. An absolute pleasure to work with!",["web dev","web design","seo"],y),E("DefinitelyNotJod","Company Name","Beyond standards, Jod grasped our vision and brought it to life brilliantly.",["web dev","web design"],y)];document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.querySelector("header"),e=document.createElement("div");e.classList.add("page-container"),e.innerHTML="\n        <p>web experience lab</p>\n        <p>@notjod</p>\n        <p>jodwongphayak@gmail.com</p>\n    ",n.appendChild(e)}(),function(){const n=document.querySelector("nav"),e=document.createElement("ul");n.appendChild(e),w.forEach((n=>{const t=document.createElement("li"),i=document.createElement("a");i.href=n.link,i.innerText=n.title,t.appendChild(i),e.appendChild(t)}))}(),function(){const n=document.querySelector("#projects"),e=document.createElement("div"),t=document.createElement("h1"),i=document.createElement("div");e.classList.add("page-container"),t.classList.add("projects-heading"),t.textContent="Creations in progress",i.classList.add("grid-container"),n.appendChild(e),e.appendChild(t),e.appendChild(i),j.forEach(((n,e)=>{const t=document.createElement("article");t.classList.add("card"),t.innerHTML=`\n            <a href="${n.link}">\n                <span class="project-number">00-${e+1}</span>\n                <img src="${n.image}" alt="project image">\n                <hr>\n                <p class="project-tags">${n.tag.join(" - ")}</p>\n                <h1 class="project-title">${n.title}</h1>\n            </a>\n        `,i.appendChild(t)}))}(),function(){const n=document.createElement("div");n.classList.add("page-container"),n.innerHTML='\n        <div class="testimonial-start">\n            <h1>don\'t take my word for it</h1>\n            <div id="testimonialHeading">\n                <p id="testimonial-left">(testimonials)</p>\n                <p id="testimonial-right">Here\'s what my clients say about our collaboration. Their satisfaction and meeting expectations are my top priorities, ensuring the best experience possible.</p>\n            </div>\n        </div>\n        <hr>\n        <div class="slideshow-container"></div>\n    ',document.querySelector("#testimonial").appendChild(n);const e=n.querySelector(".slideshow-container");z.forEach(((n,t)=>{const i=document.createElement("div");i.classList.add("slides"),i.innerHTML=`\n            <div class="slideshow-left">\n                <div class="slide-header">\n                    <h2>"${n.statement}"</h2>\n                    <p class="client-name">${n.clientName}</p>\n                    <p class="client-company">${n.clientCompany}</p>\n                    <div class="project-tag">\n                        ${n.projectTag.map((n=>`<span>${n}</span>`)).join("")}\n                    </div>\n                </div>\n                <div class="slide-controller">\n                    <p class="slide-number">[${t+1} / ${z.length}]</p>\n                    <div class="slide-button-container">\n                        <button class="slide-buttons prevBtn">prev</button>\n                        <button class="slide-buttons nextBtn">next</button>\n                    </div>\n                </div>\n            </div>\n            <img src="${n.img}" alt="client image" class="slide-img">\n        `,e.appendChild(i)})),function(){let n=1;const e=document.getElementsByClassName("slides");function t(t){if(0!==e.length){t>e.length&&(n=1),t<1&&(n=e.length);for(let n=0;n<e.length;n++)e[n].style.display="none";e[n-1].style.display="grid"}}function i(e){n+=e,t(n)}document.querySelectorAll(".prevBtn").forEach((n=>{n.addEventListener("click",(()=>i(-1)))})),document.querySelectorAll(".nextBtn").forEach((n=>{n.addEventListener("click",(()=>i(1)))})),t(n)}()}()}))})();