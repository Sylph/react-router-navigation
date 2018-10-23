Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _history=require('history');var _reactRouter=require('react-router');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}exports.default={listen:function listen(history,callback){var lastHistory=_extends({},history);return history.listen(function(){callback(lastHistory,history);lastHistory=_extends({},history);});},createLocation:function createLocation(history,route){var path=route.initialPath||route.path;return(0,_history.createLocation)(path,history.location.state,undefined,history.location);},saveNodes:function saveNodes(source,route,localHistoryState){var historyRootIndex=localHistoryState.historyRootIndex,historyNodes=localHistoryState.historyNodes;if('pathname'in source){var location=source;var historyNode=historyNodes[route.name];var _index=historyNode?historyNode.index:0;var _entries=historyNode?historyNode.entries:[location];return _extends({},historyNodes,_defineProperty({},route.name,{index:_index,entries:_entries}));}var history=source;var initialEntries=history.entries.slice(historyRootIndex);var initialIndex=initialEntries.findIndex(function(location){return route.match&&(0,_reactRouter.matchPath)(location.pathname,{path:route.match.path});});var index=history.index-historyRootIndex-initialIndex;var entries=initialEntries.slice(initialIndex);return _extends({},historyNodes,_defineProperty({},route.name,{index:index,entries:entries}));},regenerateFromEntries:function regenerateFromEntries(history,historyNode,historyRootIndex){if(historyNode.entries.length>1||history.entries.length>historyRootIndex+1){history.entries=[].concat(_toConsumableArray(history.entries.slice(0,historyRootIndex)),_toConsumableArray(historyNode.entries));history.index=historyRootIndex+historyNode.index;}history.replace(historyNode.entries[historyNode.index].pathname);},regenerateFromLocation:function regenerateFromLocation(history,location){history.replace(location.pathname);}};