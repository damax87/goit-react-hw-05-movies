"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{197:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return f},q5:function(){return d},z1:function(){return s},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=fb4d32df726045baecdec6a9a9dd278e",o=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie".concat(i,"&query=").concat(n,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n).concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},742:function(t,n,e){e.d(n,{O:function(){return c}});var r=e(689),a=e(87),u=e(184),c=function(t){var n=t.movies,e=(0,r.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})})}},415:function(t,n,e){e.r(n);var r=e(439),a=e(791),u=e(197),c=e(742),i=e(184);n.default=function(){var t=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],c=n[1];return(0,a.useEffect)((function(){u.Hg().then((function(t){return c(t)}))}),[]),{trendingMovies:e}}(),n=t.trendingMovies;return(0,i.jsx)("div",{children:(0,i.jsx)(c.O,{movies:n})})}}}]);
//# sourceMappingURL=415.e2ec98d3.chunk.js.map