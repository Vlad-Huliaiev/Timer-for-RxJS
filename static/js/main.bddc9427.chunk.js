(this.webpackJsonprxtimer=this.webpackJsonprxtimer||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(5),i=n.n(c),r=n(16),a=n.n(r),s=(n(21),n(10)),u=(n(22),n(2)),o=function(t){var e=t.startTime,n=Object(c.useState)(e),i=Object(s.a)(n,2),r=i[0],a=i[1],o=Object(c.useState)(!1),b=Object(s.a)(o,2),j=b[0],l=b[1];return Object(c.useEffect)((function(){var t=setInterval((function(){j&&a((function(t){return t+1e3}))}),1e3);return function(){return clearInterval(t)}}),[j,r,e]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h2",{children:"Timer React"}),Object(u.jsx)("div",{className:"time",children:function(t){var e=parseInt(t/1e3%60),n=parseInt(t/6e4%60),c=parseInt(t/36e5%24);return(c=c<10?"0"+c:c)+":"+(n=n<10?"0"+n:n)+":"+(e=e<10?"0"+e:e)}(r)}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("button",{className:"button button-primary-".concat(j?"active":"inactive"),onClick:j?function(){a(e),l(!j)}:function(){l(!j)},children:j?"Stop":"Start"}),Object(u.jsx)("button",{className:"button",onDoubleClick:function(){l(!1)},children:"Wait"}),Object(u.jsx)("button",{className:"button",onClick:function(){a(e),l(!0)},children:"Reset"})]})]})},b=n(30),j=n(29),l=n(28),f=(n(24),function(t){var e=t.startTime,n=Object(c.useState)(e),i=Object(s.a)(n,2),r=i[0],a=i[1],o=Object(c.useState)(!1),f=Object(s.a)(o,2),O=f[0],x=f[1];Object(c.useEffect)((function(){var t=new b.a;return Object(j.a)(1e3).pipe(Object(l.a)(t)).subscribe((function(){O&&a((function(t){return t+1e3}))})),function(){t.next(),t.complete()}}),[O]);return Object(u.jsxs)("div",{className:"appRx",children:[Object(u.jsx)("h2",{children:"Timer RxJS + React"}),Object(u.jsx)("div",{className:"timeRx",children:function(t){var e=parseInt(t/1e3%60),n=parseInt(t/6e4%60),c=parseInt(t/36e5%24);return(c=c<10?"0"+c:c)+":"+(n=n<10?"0"+n:n)+":"+(e=e<10?"0"+e:e)}(r)}),Object(u.jsxs)("div",{className:"rowRx",children:[Object(u.jsx)("button",{className:"buttonRx button-primaryRx-".concat(O?"active":"inactive"),onClick:O?function(){a(e),x(!O)}:function(){x(!O)},children:O?"Stop":"Start"}),Object(u.jsx)("button",{className:"buttonRx",onDoubleClick:function(){x(!1)},children:"Wait"}),Object(u.jsx)("button",{className:"buttonRx",onClick:function(){a(e),x(!0)},children:"Reset"})]})]})});var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{startTime:1e4}),Object(u.jsx)(o,{startTime:1e4})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[25,1,2]]]);
//# sourceMappingURL=main.bddc9427.chunk.js.map