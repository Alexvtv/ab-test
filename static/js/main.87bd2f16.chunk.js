(this["webpackJsonpab-test"]=this["webpackJsonpab-test"]||[]).push([[0],{17:function(e,t,n){},2:function(e,t,n){e.exports={container:"cards_container__2ly-l",filterPanel:"cards_filterPanel__30qTQ",filterText:"cards_filterText__dqRNM",like:"cards_like__3M6MW",listWrapper:"cards_listWrapper__1q6EQ",list:"cards_list__2j3gz",showMoreButton:"cards_showMoreButton__24MUa"}},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),c=n.n(i),s=(n(16),n(17),n(3)),l=n(11),d=n(5),o=function(){return Object(d.b)()},u=d.c,j=n(7),f=Object(j.b)({name:"cards",initialState:{list:[],isLoading:!0,likedCardsId:[],deletedCardsId:[],likesFiltering:!1},reducers:{uploadData:function(e,t){e.list=t.payload,e.isLoading=!1},likeCard:function(e,t){var n=t.payload,r=e.likedCardsId;r.includes(n)?e.likedCardsId=r.filter((function(e){return e!==n})):r.push(n)},deleteCard:function(e,t){var n=t.payload;e.deletedCardsId.push(n)},changeFiltering:function(e){e.likesFiltering=!e.likesFiltering}}}),h=f.actions,b=h.likeCard,_=h.deleteCard,p=h.uploadData,m=h.changeFiltering,O=function(e){var t=e.cards,n=t.likesFiltering,r=t.list,a=t.deletedCardsId,i=t.likedCardsId,c=t.isLoading,s=r.filter((function(e){var t=e.id;return!a.includes(t)}));return c?{isLoading:!0,data:[]}:{isLoading:!1,data:n?s.filter((function(e){var t=e.id;return i.includes(t)})):s}},g=function(e){return e.cards.likedCardsId},k=function(e){return e.cards.likesFiltering},x=f.reducer,v=n(4),C=n.n(v),y=n(1),N=function(e){var t=e.data,n=o(),r=u(g),a=t.id,i=t.name,c=t.country;return Object(y.jsxs)("div",{className:C.a.card,children:[Object(y.jsx)("div",{className:C.a.cross,onClick:function(){return n(_(a))},children:"\u2716"}),Object(y.jsx)("p",{className:C.a.name,children:i}),Object(y.jsx)("p",{className:C.a.country,children:c}),Object(y.jsx)("img",{onClick:function(){return n(b(a))},src:"like.png",style:r.includes(a)?{}:{filter:"grayscale(100%)"},className:C.a.like,alt:""})]})},w=n(2),I=n.n(w),F=function(){var e=o(),t=u(O),n=t.isLoading,a=t.data,i=u(k),c=Object(r.useState)(20),s=Object(l.a)(c,2),d=s[0],j=s[1];return Object(y.jsxs)("div",{className:I.a.container,children:[Object(y.jsxs)("div",{className:I.a.filterPanel,children:[Object(y.jsx)("p",{className:I.a.filterText,children:"\u0444\u0438\u043b\u044c\u0442\u0440"}),Object(y.jsx)("img",{onClick:function(){return e(m())},src:"like.png",alt:"",className:I.a.like,style:i?{}:{filter:"grayscale(100%)"}})]}),Object(y.jsx)("div",{className:I.a.listWrapper,children:n?Object(y.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}):Object(y.jsxs)("div",{className:I.a.list,children:[a.slice(0,d).map((function(e){return Object(y.jsx)(N,{data:e},e.id)})),Object(y.jsx)("div",{style:{width:"100%"},children:a.length>d?Object(y.jsx)("button",{onClick:function(){return j((function(e){return e+20}))},className:I.a.showMoreButton,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"}):null})]})})]})};n(25);var M=function(){var e=o();return Object(r.useEffect)((function(){fetch("http://universities.hipolabs.com/search?country=Russian+Federation").then((function(e){return e.json()})).then((function(t){return e(p(t.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{id:t})}))))})).catch((function(e){console.error(e,"err")}))}),[e]),Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("header",{className:"App-header",children:Object(y.jsx)(F,{})})})},L=Object(j.a)({reducer:{cards:x}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(d.a,{store:L,children:Object(y.jsx)(M,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={card:"card_card__2NltT",cross:"card_cross__3azCS",name:"card_name__38evP",country:"card_country__2A22I",like:"card_like__3T2Au"}}},[[26,1,2]]]);
//# sourceMappingURL=main.87bd2f16.chunk.js.map