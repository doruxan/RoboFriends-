(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{37:function(e,t,n){e.exports=n(68)},47:function(e,t,n){},48:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(13),c=n.n(a),i=n(12),s=(n(47),n(35)),u=function(e){var t=e.item,n=t.name,o=t.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"RobotImg"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,o)))},l=function(e){return e.items.map((function(e){return r.a.createElement(u,{key:e.id,id:e.id,item:e})}))},h=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},d=function(e){var t=e.children;return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",marginBottom:"100px"}},t)},f=n(10),p=n(31),b=n(15),g=n(16),v=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(f.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{className:"tc"},"Oooops.That is not good"):this.props.children}}]),n}(o.Component),m=(n(48),function(){var e=Object(i.c)((function(e){return[e.home.searchField,e.home.robots,e.home.getRobotsProgress,e.home.getRobotsError]})),t=Object(s.a)(e,4),n=t[0],a=t[1],c=t[2],u=(t[3],Object(i.b)());Object(o.useEffect)((function(){u({type:"GET_ROBOTS"})}),[]);var f=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log("render"),c?r.a.createElement("h1",{className:"tc"},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(h,{onSearchChange:function(e){return u({type:"SET_SEARCH_FIELD",payload:e.target.value})}}),r.a.createElement("button",{onClick:function(){return u({type:"GET_ROBOTS"})}}),r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(l,{items:f}))))}),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(49);var S=n(8),_=n(36),w=n(32),y=n(6),j={searchField:"",getRobotsProgress:!1,robots:[],getRobotsError:""},R=n(9),T=n.n(R),P=n(11),k=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).getRobots=function(){return e._doGet("/users")},e}return n}((function e(){var t=this;Object(f.a)(this,e),this.setHttpService=function(e){t.httpService=e},this._doDelete=function(e,n){return t.httpService.fetch({pureHttpMode:!0,method:"delete",body:n,endpoint:e})},this._doPut=function(e,n){return t.httpService.fetch({pureHttpMode:!0,method:"put",body:n,endpoint:e})},this._doPost=function(e,n){return console.log("BODY",n),t.httpService.fetch({pureHttpMode:!0,method:"post",body:n,endpoint:e})},this._doGet=function(e){return t.httpService.fetch({pureHttpMode:!0,method:"get",endpoint:e})}})),x=n(33),C=n(34),A=n.n(C),F=new k,N=Object(y.a)({},F),B=new function e(){var t=this;Object(f.a)(this,e),this.setConfig=function(e){t.config=e},this.setToken=function(e){t.token=e},this.fetch=function(){var e=Object(x.a)(T.a.mark((function e(n){var o,r,a,c,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.config.API_PATH+n.endpoint,r=n.body||{},a=n.method||"get",c=n.headers||{},i={method:a,headers:Object(y.a)({},c)},"post"!=a&&"put"!=a&&"delete"!=a||(i.body=JSON.stringify(r)),!n.pureHttpMode){e.next=8;break}return e.abrupt("return",t._doPureFetch(o,i));case 8:return e.abrupt("return",t._doFetch(o,i));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._doPureFetch=function(e,t){return new Promise((function(n,o){console.log("full api path",e),console.log("full api path",t),fetch(e,t).then((function(e){e.text().then((function(t){console.log(e),2!==parseInt(e.status/100,10)?(console.log("reject"),o(Object(y.a)({},e,{_bodyText:t}))):(console.log("resolve"),n(Object(y.a)({},e,{_bodyText:t})))}))})).catch((function(e){return o(e)}))}))},this._doFetch=function(e,t){return new Promise((function(n,o){fetch(e,t).then((function(e){e.json().then((function(t){if(2!==parseInt(e.status/100,10)){var r=t.errors,a=t.error;r&&Array.isArray(r)?o(r.map((function(e){return e.msg})).join("\n")):a&&o(a)}else n(t)}))})).catch((function(e){return o(e)}))}))},this.axiosPost=function(e){var n="".concat(t.config.API_PATH).concat(e.endpoint),o=e.body||{};return A.a.post(n,o)}};B.setConfig({API_PATH:"https://jsonplaceholder.typicode.com"}),console.log("Configure Api"),N.setHttpService(B);var G=N,H=T.a.mark(I);function I(e){var t,n,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(P.b)({type:"GET_ROBOTS_PROGRESS"});case 3:return e.next=5,Object(P.a)(G.getRobots);case 5:return t=e.sent,n=JSON.parse(t._bodyText),e.next=9,Object(P.b)({type:"GET_ROBOTS_SUCCESS",payload:n});case 9:e.next=17;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log("Error at getRobotsSaga",e.t0),o=JSON.parse(e.t0._bodyText),e.next=17,Object(P.b)({type:"GET_ROBOTS_FAIL",payload:o});case 17:case"end":return e.stop()}}),H,null,[[0,11]])}var L=T.a.mark(W);function W(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("GET_ROBOTS",I);case 2:case"end":return e.stop()}}),L)}var D=Object(S.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,o=t.payload;return"SET_SEARCH_FIELD"===n?Object(y.a)({},e,{searchField:o}):"GET_ROBOTS_PROGRESS"===n?Object(y.a)({},e,{getRobotsProgress:!0,robots:[],getRobotsError:""}):"GET_ROBOTS_SUCCESS"===n?Object(y.a)({},e,{getRobotsProgress:!1,robots:o,getRobotsError:""}):"GET_ROBOTS_FAIL"===n?Object(y.a)({},e,{getRobotsProgress:!1,robots:[],getRobotsError:o}):e}}),M=Object(_.a)(),U=Object(w.createLogger)(),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d,X=Object(S.e)((function(e,t){return"RESET_APP"===t.type&&(e=void 0),D(e,t)}),J(Object(S.a)(M,U)));M.run(W);var Y=X;c.a.render(r.a.createElement(i.a,{store:Y},r.a.createElement(m,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RoboFriends","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.c3cff840.chunk.js.map