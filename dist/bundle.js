!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";var t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e},e=new(function(){function e(){t(this,e),this.$cache=[],this.$middlewares=[],this.$events={}}return n(e,[{key:"use",value:function(){var t=this;return Array.prototype.slice.call(arguments).forEach(function(e){"function"==typeof e&&t.$cache.push(e)}),this}},{key:"next",value:function(e){for(;this.$middlewares.length;){this.$middlewares.shift().call(this,e,this.next.bind(this))}}},{key:"on",value:function(e,t){if("function"!=typeof t)throw"事件回调必须为函数";this.$events[e]=t}},{key:"emit",value:function(e,t){if(!this.$events[e])throw"没有注册这个事件";this.$events[e].call(this,t)}},{key:"execute",value:function(e){return this.$middlewares=this.$cache.map(function(e){return e}),this.next(e)}},{key:"executeFc",value:function(n){var i=this;return new Promise(function(e,t){n.promise={resolve:e,reject:t},i.execute(n)})}}]),e}());e.use(function(e,t){e.data?t(e):e.promise.reject({data:!1,msg:"数据为空"})}).use(function(e,t){e.data<10?e.promise.reject({data:!1,msg:"数据小于10"}):t(e)}).use(function(e,t){e.data<30?e.promise.reject({data:!1,msg:"数据小于30"}):e.promise.resolve({data:!0,msg:"数据小于30"})}),e.executeFc({data:40}).then(function(e){var t=e.data;console.log("finally",t)}).catch(function(e){var t=e.msg;console.log(t)})});
