Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _iterall=require('iterall');var _reactRouter=require('react-router');var _RouteUtils=require('./RouteUtils');var _RouteUtils2=_interopRequireDefault(_RouteUtils);var _StackUtils=require('./StackUtils');var _StackUtils2=_interopRequireDefault(_StackUtils);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default={initialize:function initialize(nodes,location,entries,buildFrom,staleNavigationState){var historyEntries=_StackUtils2.default.getHistoryEntries(nodes,entries,location);var staleRoutes=staleNavigationState&&staleNavigationState.routes;if(buildFrom==='nodes'){return nodes.reduce(function(state,item){var entry=void 0;(0,_iterall.forEach)(historyEntries,function(_entry,index){if(!entry){var entryIndex=historyEntries.length-1-index;var currentEntry=historyEntries[entryIndex];if(currentEntry&&(0,_reactRouter.matchPath)(currentEntry.pathname,item)){entry=currentEntry;}}});var match=entry?(0,_reactRouter.matchPath)(entry.pathname,item):null;var staleRoute=staleRoutes&&staleRoutes[state.routes.length];var route=_RouteUtils2.default.create(item,match&&entry,staleRoute);if(!route)return state;var isCurrentLocation=entry&&entry.pathname===location.pathname;return{routes:[].concat(_toConsumableArray(state.routes),[route]),index:isCurrentLocation?state.routes.length:state.index};},{routes:[],index:-1});}return historyEntries.reduce(function(state,entry){var item=nodes.find(function(route){var routePath=route.routePath||route.path;return(0,_reactRouter.matchPath)(entry.pathname,_extends({path:routePath},route));});if(!item||!item.path)return state;var staleRoute=staleRoutes&&staleRoutes[state.routes.length];var route=_RouteUtils2.default.create(item,entry,staleRoute);if(!route)return state;var itemPath=item.routePath||item.path;return{routes:[].concat(_toConsumableArray(state.routes),[route]),index:(0,_reactRouter.matchPath)(location.pathname,_extends({},item,{path:itemPath}))?state.routes.length:state.index};},{routes:[],index:-1});},getRouteIndex:function getRouteIndex(state,arg){if(typeof arg==='number'){if(state.routes[arg])return arg;return-1;}return state.routes.findIndex(function(route){return route.name===arg.name;});},isCorrumped:function isCorrumped(state,history,historyRootIndex){if(!Array.isArray(history.entries))return false;var isCorrumped=false;(0,_iterall.forEach)(state.routes.slice(0,state.index+1),function(route,index){var location=history.entries[historyRootIndex+index];var match=route?route.match:null;if(!location||!(match&&(0,_reactRouter.matchPath)(location.pathname,{path:match.path}))){isCorrumped=true;}});return isCorrumped;},push:function push(state,route){var newRoutes=[].concat(_toConsumableArray(state.routes),[route]);return _extends({},state,{index:newRoutes.length-1,routes:newRoutes});},pop:function pop(state){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;if(n<=0)return state;var newRoutes=state.routes.slice(0,Math.max(state.index+1-n,1));return _extends({},state,{index:newRoutes.length-1,routes:newRoutes});},replace:function replace(state,index,route){if(state.routes[index]===route||index>state.routes.length-1){return state;}var newRoutes=[].concat(_toConsumableArray(state.routes.slice(0,index)),[route],_toConsumableArray(state.routes.slice(index+1)));return _extends({},state,{index:index,routes:newRoutes});},changeIndex:function changeIndex(state,arg){var index=typeof arg==='number'?arg:state.routes.findIndex(function(route){return route.name===arg.name;});if(index===-1||index>state.routes.length-1)return state;var routes=typeof arg==='number'?state.routes:[].concat(_toConsumableArray(state.routes.slice(0,index)),[arg],_toConsumableArray(state.routes.slice(index+1)));return _extends({},state,{routes:routes,index:index});}};