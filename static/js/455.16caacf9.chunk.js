"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[455],{26:function(n,e,t){t.d(e,{Cp:function(){return i},M1:function(){return l},V0:function(){return u},nq:function(){return p},tx:function(){return f}});var r=t(861),c=t(687),a=t.n(c),o="158819e65eb0fbf8513ba7b934c25216",s="https://api.themoviedb.org/3/",i=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/trending/movie/day?api_key=").concat(o,"&page=1"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return t=n.sent,n.abrupt("return",t);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,fetch("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1"));case 5:if((t=n.sent).ok){n.next=8;break}throw new Error(t.statusText);case 8:return n.next=10,t.json();case 10:return r=n.sent,n.abrupt("return",r);case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.statusText);case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.statusText);case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.statusText);case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},455:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,c,a,o,s,i,u,p=t(861),l=t(439),f=t(687),h=t.n(f),x=t(689),v=t(791),d=t(26),m=t(87),w=t(313),g=t(168),k=t(934),b=(0,k.Z)(m.rU)(r||(r=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  :hover {\n    color: orangered;\n  }\n"]))),j=t(184),Z=function(n){var e=n.to,t=n.children;return(0,j.jsxs)(b,{to:e,children:[(0,j.jsx)(w.Ao2,{}),t]})},y=k.Z.div(c||(c=(0,g.Z)(["\n    width: 350px;\n    margin-right: 20px;\n"]))),_=k.Z.p(a||(a=(0,g.Z)(["\n    width: 200px;\n    margin-bottom: 15px;\n    color: grey;\n"]))),U=k.Z.div(o||(o=(0,g.Z)(["\n    display: flex;\n    margin-bottom: 20px;\n"]))),E=k.Z.h2(s||(s=(0,g.Z)(["\n    margin-bottom: 25px;\n"]))),S=k.Z.p(i||(i=(0,g.Z)(["\n    color: grey;\n"]))),T=k.Z.ul(u||(u=(0,g.Z)(["\n    text-decoration: none;\n"]))),C=function(){var n,e,t=(0,x.UO)().id,r=(0,v.useState)([]),c=(0,l.Z)(r,2),a=c[0],o=c[1],s=(0,v.useState)(""),i=(0,l.Z)(s,2),u=i[0],f=i[1],w=(0,x.TH)(),g=(0,v.useRef)(null!==(n=null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,v.useEffect)((function(){f(null);var n=function(){var n=(0,p.Z)(h().mark((function n(){return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d.nq)(t).then((function(n){return o(n)})).catch((function(n){return f(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t,u]);var k=a.title,b=a.poster_path,C=a.release_date,q=a.overview,A=a.genres,O="https://image.tmdb.org/t/p/w500/".concat(b);return(0,j.jsxs)("main",{children:[(0,j.jsx)(Z,{to:g.current,children:"Back to products"}),(0,j.jsxs)(U,{children:[(0,j.jsx)(y,{children:(0,j.jsx)("img",{src:O,alt:k,width:"350",height:"380"})}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(E,{children:[k,"(",C?C.slice(0,4):"",")"]}),(0,j.jsxs)(_,{children:["Overview: ",q]}),(0,j.jsxs)(S,{children:["Genres: ",A?A.map((function(n){return"".concat(n.name," ")})):""]})]})]}),(0,j.jsx)(E,{children:"Aditional information"}),(0,j.jsxs)(T,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(m.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(m.rU,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)(v.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:(0,j.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=455.16caacf9.chunk.js.map