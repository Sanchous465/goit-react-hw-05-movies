"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{26:function(n,t,e){e.d(t,{Cp:function(){return s},M1:function(){return f},V0:function(){return i},nq:function(){return p},tx:function(){return h}});var r=e(861),c=e(687),a=e.n(c),u="158819e65eb0fbf8513ba7b934c25216",o="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/trending/movie/day?api_key=").concat(u,"&page=1"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.statusText);case 6:return n.next=8,t.json();case 8:return e=n.sent,n.abrupt("return",e);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,fetch("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&page=1"));case 5:if((e=n.sent).ok){n.next=8;break}throw new Error(e.statusText);case 8:return n.next=10,e.json();case 10:return r=n.sent,n.abrupt("return",r);case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,c,a,u=e(861),o=e(439),s=e(687),i=e.n(s),p=e(689),f=e(791),h=e(26),l=e(168),v=e(934),x=v.Z.div(r||(r=(0,l.Z)(["\n    padding: 30px 0 30px 30px;\n"]))),d=v.Z.h2(c||(c=(0,l.Z)(["\n    margin-bottom: 15px;\n"]))),w=v.Z.li(a||(a=(0,l.Z)(["\n    margin-bottom: 15px;\n"]))),k=e(184),m=function(){var n=(0,p.UO)().id,t=(0,f.useState)({}),e=(0,o.Z)(t,2),r=e[0],c=e[1],a=(0,f.useState)(""),s=(0,o.Z)(a,2),l=s[0],v=s[1];(0,f.useEffect)((function(){v(null);var t=function(){var t=(0,u.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.M1)(n).then((function(n){return c(n)})).catch((function(n){return v(n)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n,l]);var m=r.cast;return(0,k.jsx)(x,{children:m?m.map((function(n){var t=n.id,e=n.profile_path,r=n.name,c=n.character;return(0,k.jsxs)("ul",{children:[(0,k.jsx)(w,{children:(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e),alt:r,width:"250"})}),(0,k.jsx)(w,{children:(0,k.jsx)(d,{children:r})}),(0,k.jsx)(w,{children:(0,k.jsxs)("p",{children:["Character: ",c]})})]},t)})):""})}},861:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),s=o.value}catch(i){return void e(i)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,s,"next",n)}function s(n){r(u,c,a,o,s,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=387.95836411.chunk.js.map