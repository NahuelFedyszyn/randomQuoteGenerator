(this["webpackJsonprndm-quote"]=this["webpackJsonprndm-quote"]||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},425:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(121),s=n.n(a),i=(n(127),n(40)),o=n.n(i),u=n(72),h=n(73),d=(n(128),n(427)),l=n(428),j=n(429),b=(n(129),n(1));var f=function(){var e,t=Object(c.useState)("RNDM"),n=Object(h.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("Author"),i=Object(h.a)(s,2),f=i[0],m=i[1];function x(e,t){var n=document.getElementById(t),c=0;n.style.opacity=c;var r=setInterval((function(){c<1?(c+=.01,n.style.opacity=c):clearInterval(r)}),e)}function p(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function e(t){var n,c,r,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,c=t.method,r=void 0===c?"get":c,a=t.body,s=t.headers,e.prev=1,e.next=4,fetch(n,{method:r,body:a,headers:s});case 4:return i=e.sent,e.abrupt("return",i.json());case 8:e.prev=8,e.t0=e.catch(1),Promise.reject(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var v=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p({url:"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"});case 2:n=t.sent,e=n.quotes,x(5,"quote-box"),a(e[Math.floor(Math.random()*e.length)].quote),m(e[Math.floor(Math.random()*e.length)].author);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)(v,[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"mainDiv",children:Object(b.jsx)(d.a,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{id:"quote-box",className:"mainCard",children:[Object(b.jsx)("h1",{id:"text",children:r}),Object(b.jsx)("p",{id:"author",children:f}),Object(b.jsxs)("div",{className:"cardFooter",children:[Object(b.jsx)("a",{target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(r+" --- "+f),id:"tweet-quote",children:Object(b.jsx)("i",{className:"bi bi-twitter"})}),Object(b.jsx)("button",{onClick:function(){v()},id:"new-quote",children:"New Quote"})]})]})})})})}),Object(b.jsxs)("footer",{children:[Object(b.jsx)(l.a,{children:Object(b.jsx)("a",{className:"footerA",href:"https://nahuelfedyszyn.github.io/nahuelfedy/",children:"by Nahuel Fedyszyn"})}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)("a",{href:"https://www.linkedin.com/in/nahuel-fedyszyn-a95764186/",className:"icon footerA",children:Object(b.jsx)("i",{className:"bi bi-linkedin"})}),Object(b.jsx)("a",{href:"https://github.com/NahuelFedyszyn",className:"footerA icon",children:Object(b.jsx)("i",{className:"bi bi-github"})})]})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,430)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[425,1,2]]]);
//# sourceMappingURL=main.b8ce50f9.chunk.js.map