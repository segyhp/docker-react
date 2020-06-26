(this["webpackJsonpdocker-react"]=this["webpackJsonpdocker-react"]||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),i=n(7),s=(n(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(27);var u=n(1),d=n(2),h=n(4),f=n(3),p=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5"},r.a.createElement("h1",null,"Robot Card"),r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x20")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return console.log("Cardlist"),r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(p,{key:t,id:e.id,name:e.name,email:e.email})})))},g=function(e){var t=e.searchChange;return console.log("Searchbox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"Search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},m=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("Couter button"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(o.Component),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f2"},"Robo Friends"),r.a.createElement(v,{color:"blue"}))}}]),n}(o.Component),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oop.. Something wrong"):this.props.children}}]),n}(o.Component),w=(n(28),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSeachChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(E,null),r.a.createElement(g,{searchChange:n,searchField:t}),r.a.createElement(m,null,r.a.createElement(O,null,r.a.createElement(b,{robots:c}))))}}]),n}(o.Component)),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.pending,error:e.requestRobots.error}}),(function(e){return{onSeachChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(w),C=n(5),S=n(14),j={searchField:""},R={isPending:!1,robots:[],error:""},k=n(15),_=(Object(S.createLogger)(),Object(C.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),T=Object(C.d)(_,Object(C.a)(k.a));c.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/docker-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/docker-react","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.ab7b8308.chunk.js.map