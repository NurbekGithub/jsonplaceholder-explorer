(window["webpackJsonpjsonplaceholder-explorer"]=window["webpackJsonpjsonplaceholder-explorer"]||[]).push([[5],{107:function(e,t,n){e.exports=n(108)()},108:function(e,t,n){"use strict";var r=n(109);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},109:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},132:function(e,t,n){"use strict";n.r(t);var r=n(75),a=n(0),o=n.n(a),i=n(72),c=n(76),s=n(121),u=n(122),p=n(1),d=n(2),l=n(5),f=(n(107),n(10)),h=o.a.forwardRef(function(e,t){var n=e.classes,r=e.className,a=e.component,i=void 0===a?"div":a,c=e.disableAnimate,s=void 0!==c&&c,u=e.height,f=e.variant,h=void 0===f?"text":f,m=e.width,b=Object(d.a)(e,["classes","className","component","disableAnimate","height","variant","width"]);return o.a.createElement(i,Object(p.a)({ref:t,className:Object(l.a)(n.root,n[h],r,!s&&n.animate)},b,{style:Object(p.a)({width:m,height:u},b.style)}))}),m=Object(f.a)(function(e){return{root:{backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:"0.8em",marginBottom:"0.8em",borderRadius:e.shape.borderRadius},rect:{},circle:{borderRadius:"50%"},animate:{animation:"$mui-skeleton 1.5s ease-in-out infinite"},"@keyframes mui-skeleton":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}}}},{name:"MuiSkeleton"})(h);function b(){var e=Object(a.useState)({posts:[],loading:!1}),t=Object(r.a)(e,2),n=t[0],p=t[1];return Object(a.useEffect)(function(){p({loading:!0,posts:[]}),Object(i.d)().then(function(e){return p({loading:!1,posts:e})}).catch(function(e){console.error(e),p({loading:!1,posts:[]})})},[]),o.a.createElement("div",null,o.a.createElement("h1",null,"Posts"),o.a.createElement(c.a,null,n.loading?Array(20).fill(null).map(function(e,t){return o.a.createElement(s.a,{key:t,divider:!0},o.a.createElement("div",{className:"w-100"},o.a.createElement(m,{height:6,width:"80%"}),o.a.createElement(m,{height:6,width:"100%"})))}):n.posts.map(function(e){return o.a.createElement(s.a,{key:e.id,divider:!0},o.a.createElement(u.a,{primary:e.title,secondary:e.body}))})))}n.d(t,"default",function(){return b})},72:function(e,t,n){"use strict";var r=n(69),a=n.n(r),o=n(70),i=n(74),c=n.n(i).a.create({baseURL:"https://jsonplaceholder.typicode.com/",headers:{"Content-Type":"application/json"}});function s(){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/albums").then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/comments").then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/photos").then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/posts").then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/todos").then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/users").then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"a",function(){return s}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return b}),n.d(t,"f",function(){return g})},76:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(0),i=n.n(o),c=(n(17),n(5)),s=n(10),u=n(73),p=i.a.forwardRef(function(e,t){var n=e.children,o=e.classes,s=e.className,p=e.component,d=void 0===p?"ul":p,l=e.dense,f=void 0!==l&&l,h=e.disablePadding,m=void 0!==h&&h,b=e.subheader,y=Object(a.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),g=i.a.useMemo(function(){return{dense:f}},[f]);return i.a.createElement(u.a.Provider,{value:g},i.a.createElement(d,Object(r.a)({className:Object(c.a)(o.root,s,f&&o.dense,!m&&o.padding,b&&o.subheader),ref:t},y),b,n))});t.a=Object(s.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(p)}}]);
//# sourceMappingURL=5.a4dd0714.chunk.js.map