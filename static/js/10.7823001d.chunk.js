(window["webpackJsonpjsonplaceholder-explorer"]=window["webpackJsonpjsonplaceholder-explorer"]||[]).push([[10],{125:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return b});var r=n(75),a=n(0),u=n.n(a),c=n(33),o=n(121),i=n(110),s=n(111),p=n(122),f=n(112),l=n(72),h=Object(c.a)(function(t){return{root:{width:"100%",height:800,backgroundColor:t.palette.background.paper}}});function d(t){var e=t.index,n=t.style,r=t.data[e];return u.a.createElement(o.a,{button:!0,style:n,key:e},u.a.createElement(i.a,null,u.a.createElement(s.a,{alt:r.title,src:r.thumbnailUrl})),u.a.createElement(p.a,{primary:r.title}))}function b(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],o=h();return Object(a.useEffect)(function(){Object(l.c)().then(c).catch(console.error)},[]),u.a.createElement("div",null,u.a.createElement("h1",null,"Photos"),u.a.createElement("div",{className:o.root},u.a.createElement(f.a,{height:800,width:"100%",itemSize:52,itemData:n,itemCount:n.length},d)))}},72:function(t,e,n){"use strict";var r=n(69),a=n.n(r),u=n(70),c=n(74),o=n.n(c).a.create({baseURL:"https://jsonplaceholder.typicode.com/",headers:{"Content-Type":"application/json"}});function i(){return s.apply(this,arguments)}function s(){return(s=Object(u.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/albums").then(function(t){return t.data}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/comments").then(function(t){return t.data}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/photos").then(function(t){return t.data}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/posts").then(function(t){return t.data}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/todos").then(function(t){return t.data}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function y(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/users").then(function(t){return t.data}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return p}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return d}),n.d(e,"e",function(){return m}),n.d(e,"f",function(){return y})}}]);
//# sourceMappingURL=10.7823001d.chunk.js.map