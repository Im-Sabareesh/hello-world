(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2167:function(e,s,l){"use strict";var n=l(3848);s.default=void 0;var a,r=(a=l(7294))&&a.__esModule?a:{default:a},t=l(1063),i=l(4651),c=l(7426);var o={};function d(e,s,l,n){if(e&&t.isLocalURL(s)){e.prefetch(s,l,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[s+"%"+l+(a?"%"+a:"")]=!0}}var h=function(e){var s,l=!1!==e.prefetch,a=i.useRouter(),h=r.default.useMemo((function(){var s=t.resolveHref(a,e.href,!0),l=n(s,2),r=l[0],i=l[1];return{href:r,as:e.as?t.resolveHref(a,e.as):i||r}}),[a,e.href,e.as]),m=h.href,x=h.as,u=e.children,f=e.replace,j=e.shallow,p=e.scroll,g=e.locale;"string"===typeof u&&(u=r.default.createElement("a",null,u));var v=(s=r.default.Children.only(u))&&"object"===typeof s&&s.ref,b=c.useIntersection({rootMargin:"200px"}),N=n(b,2),y=N[0],Z=N[1],k=r.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);r.default.useEffect((function(){var e=Z&&l&&t.isLocalURL(m),s="undefined"!==typeof g?g:a&&a.locale,n=o[m+"%"+x+(s?"%"+s:"")];e&&!n&&d(a,m,x,{locale:s})}),[x,m,Z,g,l,a]);var w={ref:k,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,l,n,a,r,i,c){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&t.isLocalURL(l))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),s[a?"replace":"push"](l,n,{shallow:r,locale:c,scroll:i}))}(e,a,m,x,f,j,p,g)},onMouseEnter:function(e){t.isLocalURL(m)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),d(a,m,x,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var L="undefined"!==typeof g?g:a&&a.locale,C=a&&a.isLocaleDomain&&t.getDomainLocale(x,L,a&&a.locales,a&&a.domainLocales);w.href=C||t.addBasePath(t.addLocale(x,L,a&&a.defaultLocale))}return r.default.cloneElement(s,w)};s.default=h},7426:function(e,s,l){"use strict";var n=l(3848);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,l=e.disabled||!t,c=a.useRef(),o=a.useState(!1),d=n(o,2),h=d[0],m=d[1],x=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),l||h||e&&e.tagName&&(c.current=function(e,s,l){var n=function(e){var s=e.rootMargin||"",l=i.get(s);if(l)return l;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var s=n.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;s&&l&&s(l)}))}),e);return i.set(s,l={id:s,observer:a,elements:n}),l}(l),a=n.id,r=n.observer,t=n.elements;return t.set(e,s),r.observe(e),function(){t.delete(e),r.unobserve(e),0===t.size&&(r.disconnect(),i.delete(a))}}(e,(function(e){return e&&m(e)}),{rootMargin:s}))}),[l,s,h]);return a.useEffect((function(){if(!t&&!h){var e=r.requestIdleCallback((function(){return m(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[h]),[x,h]};var a=l(7294),r=l(3447),t="undefined"!==typeof IntersectionObserver;var i=new Map},8160:function(e,s,l){"use strict";l.r(s);l(7294);var n=l(682),a=l(4051),r=l(1555),t=l(1330),i=l(2224),c=l(8734),o=l(3936),d=l(5005),h=l(1664),m=l(5893);s.default=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)("header",{className:"fixed-top",children:(0,m.jsx)("div",{className:"main-header py-3",children:(0,m.jsx)(n.Z,{children:(0,m.jsxs)(a.Z,{children:[(0,m.jsx)(r.Z,{md:2,children:(0,m.jsx)(h.default,{href:"/home",children:(0,m.jsx)("a",{children:(0,m.jsx)(t.Z,{src:"/icons/logo.svg",alt:""})})})}),(0,m.jsx)(r.Z,{md:8,children:(0,m.jsx)(i.Z,{expand:"lg",className:"main-menu",children:(0,m.jsxs)(n.Z,{fluid:!0,children:[(0,m.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,m.jsx)(i.Z.Collapse,{id:"basic-navbar-nav",children:(0,m.jsxs)(c.Z,{className:"me-auto",children:[(0,m.jsx)(c.Z.Link,{href:"#link",children:"About Us"}),(0,m.jsx)(c.Z.Link,{href:"#link",children:"Blockchain Solution"}),(0,m.jsx)(c.Z.Link,{href:"#link",children:"Case Studies"}),(0,m.jsxs)(o.Z,{title:"Services",id:"basic-nav-dropdown",children:[(0,m.jsx)(o.Z.Item,{href:"#action/3.1",children:"Action"}),(0,m.jsx)(o.Z.Item,{href:"#action/3.2",children:"Another action"}),(0,m.jsx)(o.Z.Item,{href:"#action/3.3",children:"Something"}),(0,m.jsx)(o.Z.Divider,{}),(0,m.jsx)(o.Z.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})}),(0,m.jsxs)(r.Z,{md:2,className:"text-end mt-2",children:[(0,m.jsx)(d.Z,{variant:"primary",className:"red-btn",children:"Let's Talk"}),(0,m.jsx)("a",{href:"#",className:"ms-2",children:(0,m.jsx)(t.Z,{src:"/icons/icon-search.svg",alt:""})})]})]})})})}),(0,m.jsx)("section",{className:"about-us-banner",children:(0,m.jsx)(n.Z,{children:(0,m.jsx)(a.Z,{children:(0,m.jsx)(r.Z,{children:(0,m.jsxs)("div",{className:"light-text-color text-center w-50 mx-auto",children:[(0,m.jsx)("h1",{className:"h1 light-text-color",children:"About Us"}),(0,m.jsx)("p",{children:"Our vision is to be the world\u2019s most trusted transparency platform to build a system where reputable people buy & sell assets."})]})})})})}),(0,m.jsx)("section",{className:"about-section1 pb-5",children:(0,m.jsx)(n.Z,{fluid:!0,className:"pb-5",children:(0,m.jsx)(a.Z,{className:"pb-5",children:(0,m.jsx)(r.Z,{className:"pb-5",children:(0,m.jsx)(t.Z,{src:"/images/about-us-grid.png",className:"mx-auto d-block",rounded:!0})})})})}),(0,m.jsx)("section",{className:"about-section2 py-5",children:(0,m.jsxs)(n.Z,{children:[(0,m.jsxs)(a.Z,{children:[(0,m.jsx)(r.Z,{lg:5,children:(0,m.jsx)("h2",{className:"h1",children:"Whats Our Story?"})}),(0,m.jsxs)(r.Z,{lg:7,children:[(0,m.jsx)("p",{children:"Blockchain is changing the way the world lives and works \u2013 but it's only a means to an end, not the end itself. We can help you apply this technology to drive your transformation into the future."}),(0,m.jsx)("p",{children:"We start with an understanding of your specific aspirations, followed by a practical application of blockchain innovation. The conversation grows as new opportunities come to light along the way."}),(0,m.jsx)("p",{children:"As the leading independent technology organization, we integrate alliances, partnerships, and leaders from every aspect of the blockchain ecosystem. "})]})]}),(0,m.jsxs)(a.Z,{className:"pt-5 mt-4",children:[(0,m.jsx)(r.Z,{lg:4,children:(0,m.jsxs)("div",{className:"our-story-block",children:[(0,m.jsx)("div",{className:"our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-4",children:(0,m.jsx)("span",{children:"01"})}),(0,m.jsxs)("div",{className:"our-story-block-content",children:[(0,m.jsx)("div",{className:"line-animated rounded position-relative float-start me-4"}),(0,m.jsx)("h3",{className:"h3 purple-gradient-text-color text-uppercase mb-4",children:"Our vision"}),(0,m.jsx)("p",{children:"We believe that universal access to space will inherently improve human life"})]})]})}),(0,m.jsx)(r.Z,{lg:4,children:(0,m.jsxs)("div",{className:"our-story-block",children:[(0,m.jsx)("div",{className:"our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-4",children:(0,m.jsx)("span",{children:"02"})}),(0,m.jsxs)("div",{className:"our-story-block-content",children:[(0,m.jsx)("div",{className:"line-animated rounded position-relative float-start me-4"}),(0,m.jsx)("h3",{className:"h3 purple-gradient-text-color text-uppercase mb-4",children:"Our mission"}),(0,m.jsx)("p",{children:"We believe that universal access to space will inherently improve human life"})]})]})}),(0,m.jsx)(r.Z,{lg:4,children:(0,m.jsxs)("div",{className:"our-story-block",children:[(0,m.jsx)("div",{className:"our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-4",children:(0,m.jsx)("span",{children:"03"})}),(0,m.jsxs)("div",{className:"our-story-block-content",children:[(0,m.jsx)("div",{className:"line-animated rounded position-relative float-start me-4"}),(0,m.jsx)("h3",{className:"h3 purple-gradient-text-color text-uppercase mb-4",children:"what we do"}),(0,m.jsx)("p",{children:"We believe that universal access to space will inherently improve human life"})]})]})})]})]})}),(0,m.jsx)("section",{className:"about-section3 bg-gradient-secondary light-text-color py-5",children:(0,m.jsx)(n.Z,{children:(0,m.jsxs)(a.Z,{className:"px-4 py-4",children:[(0,m.jsxs)(r.Z,{lg:4,children:[(0,m.jsx)("div",{className:"line-animated h-75 rounded position-relative float-start me-4 opacity-50"}),(0,m.jsx)("div",{className:"our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-4",children:(0,m.jsx)("span",{children:"04"})}),(0,m.jsx)("h3",{className:"h2",children:"The Way Forward"})]}),(0,m.jsxs)(r.Z,{lg:8,children:[(0,m.jsx)("p",{className:"h3 lh-base fw-normal",children:"Blockchain is changing the way the world lives and works \u2013 but it's only a means to an end, not the end itself. We can help you apply this technology to drive your transformation into the future. As the leading independent technology organization."}),(0,m.jsx)("p",{className:"h3 lh-base fw-normal",children:"We start with an understanding of your specific aspirations, followed by a practical application of blockchain innovation. The conversation grows as new opportunities come to light along the way."})]})]})})}),(0,m.jsx)("section",{className:"about-section4 py-5",children:(0,m.jsx)(n.Z,{children:(0,m.jsxs)(a.Z,{children:[(0,m.jsx)(r.Z,{lg:5,children:(0,m.jsxs)("div",{className:"dark-box-shadow p-5",children:[(0,m.jsx)("h4",{className:"dark-text-color mb-4 h2",children:"Lets Meet Our Team"}),(0,m.jsxs)("div",{className:"our-team-block",children:[(0,m.jsx)("div",{className:"line-animated rounded position-relative float-start me-4"}),(0,m.jsx)("p",{className:"h3 mb-2 purple-gradient-text-color",children:"8 Members"}),(0,m.jsx)("p",{className:"h3 dark-secondary-text-color",children:"Designer - Developer - Marketing"})]})]})}),(0,m.jsxs)(r.Z,{lg:7,children:[(0,m.jsx)("h6",{className:"h3 text-uppercase dark-text-color mb-4",children:"Our Team"}),(0,m.jsx)("p",{className:"h3 dark-secondary-text-color lh-base fw-normal",children:"Making people smile gets us out of bed every morning. Through thoughtful design we create delightful digital experiences that make life simpler and more enjoyable"})]})]})})}),(0,m.jsx)("footer",{className:"footer-section bg-gradient-secondary",children:(0,m.jsxs)(n.Z,{children:[(0,m.jsxs)(a.Z,{className:"py-5",children:[(0,m.jsxs)(r.Z,{lg:4,className:"text-center",children:[(0,m.jsx)("a",{href:"#",className:"brand-logo",children:(0,m.jsx)(t.Z,{src:"/icons/cc-white-logo.svg",className:"mb-4"})}),(0,m.jsx)("p",{className:"light-text-color text-shadow",children:"Follow Us"}),(0,m.jsxs)("div",{className:"social-icons",children:[(0,m.jsx)("a",{href:"#",className:"mx-2",children:(0,m.jsx)(t.Z,{src:"/icons/facebook.svg"})}),(0,m.jsx)("a",{href:"#",className:"mx-2",children:(0,m.jsx)(t.Z,{src:"/icons/instagram.svg"})}),(0,m.jsx)("a",{href:"#",className:"mx-2",children:(0,m.jsx)(t.Z,{src:"/icons/twitter.svg"})}),(0,m.jsx)("a",{href:"#",className:"mx-2",children:(0,m.jsx)(t.Z,{src:"/icons/youtube.svg"})})]})]}),(0,m.jsxs)(r.Z,{lg:3,children:[(0,m.jsx)("p",{className:"h3 light-text-color mb-3",children:"Our Services"}),(0,m.jsxs)("ul",{className:"lh-lg",children:[(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Decentralized Finance"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Non Fungible Tokens"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Binance Smart Chain"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"App Development"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Web Development"})})]})]}),(0,m.jsxs)(r.Z,{lg:2,children:[(0,m.jsx)("p",{className:"h3 light-text-color mb-3",children:"Expert Solutions"}),(0,m.jsxs)("ul",{className:"lh-lg",children:[(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Live Ledger"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"True Title"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Instasure"})})]})]}),(0,m.jsxs)(r.Z,{lg:{span:2,offset:1},children:[(0,m.jsx)("p",{className:"h3 light-text-color mb-3",children:"Connect With Us"}),(0,m.jsxs)("ul",{className:"lh-lg",children:[(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Contact Us"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Career"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"More About Us"})}),(0,m.jsx)("li",{className:"mb-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Blog"})})]})]})]}),(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center pt-5 pb-3",children:[(0,m.jsx)("span",{className:"light-text-color",children:"\xa9ChainCode PTY LTD 2021. All rights reserved"}),(0,m.jsxs)("ul",{className:"list-inline position-relative footer-after-line",children:[(0,m.jsx)("li",{className:"list-inline-item px-2",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Privacy Policy"})}),(0,m.jsx)("li",{className:"list-inline-item",children:(0,m.jsx)("a",{href:"#",className:"light-text-color",children:"Terms of Service & Rules"})})]})]})]})})]})}},2088:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return l(8160)}])},1664:function(e,s,l){e.exports=l(2167)}},function(e){e.O(0,[774,591,888,179],(function(){return s=2088,e(e.s=s);var s}));var s=e.O();_N_E=s}]);