parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"paDP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;var e=[{date:"2018-12-03",close:25.719999},{date:"2018-12-04",close:23.5},{date:"2018-12-06",close:23.27},{date:"2018-12-07",close:21.57},{date:"2018-12-10",close:21.32},{date:"2018-12-11",close:21.98},{date:"2018-12-12",close:23.110001},{date:"2018-12-13",close:23.27},{date:"2018-12-14",close:23},{date:"2018-12-17",close:21.85},{date:"2018-12-18",close:21.530001},{date:"2018-12-19",close:21.58},{date:"2018-12-20",close:20.51},{date:"2018-12-21",close:19.42},{date:"2018-12-24",close:18.99},{date:"2018-12-26",close:21.41},{date:"2018-12-27",close:21},{date:"2018-12-28",close:21.57},{date:"2018-12-31",close:21.389999},{date:"2019-01-02",close:22.75},{date:"2019-01-03",close:22.040001},{date:"2019-01-04",close:23.51},{date:"2019-01-07",close:23.709999},{date:"2019-01-08",close:23.360001},{date:"2019-01-09",close:23.870001},{date:"2019-01-10",close:23.940001},{date:"2019-01-11",close:23.6},{date:"2019-01-14",close:23.51},{date:"2019-01-15",close:23.389999},{date:"2019-01-16",close:23.219999},{date:"2019-01-17",close:22.379999},{date:"2019-01-18",close:21.139999},{date:"2019-01-22",close:21.209999},{date:"2019-01-23",close:21.469999},{date:"2019-01-24",close:21.110001},{date:"2019-01-25",close:22.42},{date:"2019-01-28",close:22.790001},{date:"2019-01-29",close:22.700001},{date:"2019-01-30",close:23.4},{date:"2019-01-31",close:24.33},{date:"2019-02-01",close:24.9},{date:"2019-02-04",close:23.299999},{date:"2019-02-05",close:23.940001},{date:"2019-02-06",close:23.58},{date:"2019-02-07",close:22.969999},{date:"2019-02-08",close:23.48},{date:"2019-02-11",close:22.67},{date:"2019-02-12",close:23.299999},{date:"2019-02-13",close:23},{date:"2019-02-14",close:22.82},{date:"2019-02-15",close:23.1},{date:"2019-02-19",close:21.620001},{date:"2019-02-20",close:24.059999},{date:"2019-02-21",close:24.59},{date:"2019-02-22",close:23.85},{date:"2019-02-25",close:24.700001},{date:"2019-02-26",close:24.42},{date:"2019-02-27",close:24.719999},{date:"2019-02-28",close:24.08},{date:"2019-03-01",close:23.35},{date:"2019-03-04",close:21.120001},{date:"2019-03-05",close:17.76},{date:"2019-03-06",close:18.26},{date:"2019-03-07",close:18.17},{date:"2019-03-08",close:18.16},{date:"2019-03-11",close:17.690001},{date:"2019-03-12",close:17.77},{date:"2019-03-13",close:17.940001},{date:"2019-03-14",close:17.379999},{date:"2019-03-15",close:17.17},{date:"2019-03-18",close:16.02},{date:"2019-03-19",close:17.120001},{date:"2019-03-20",close:16.98},{date:"2019-03-21",close:16.09},{date:"2019-03-22",close:15.74},{date:"2019-03-25",close:15.78},{date:"2019-03-26",close:15.77},{date:"2019-03-27",close:15.61},{date:"2019-03-28",close:15.2},{date:"2019-03-29",close:15.66},{date:"2019-04-01",close:15.25},{date:"2019-04-02",close:15.35},{date:"2019-04-03",close:15.4},{date:"2019-04-04",close:16.629999},{date:"2019-04-05",close:17.52}];exports.data=e;
},{}],"4itQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HIGHLIGHT_LINE_WIDTH=exports.TEXT_BASELINE=exports.FONT=exports.LINE_PLOT_WIDTH=exports.TEXT_COLOR=exports.FILL_COLOR=exports.CIRCLE_RADIUS=exports.TICK_LENGTH=exports.AXIS_LINE_WIDTH=exports.AXIS_WIDTH=exports.MOVING_AVG_DAYS=void 0;var r=20;exports.MOVING_AVG_DAYS=r;var I=40;exports.AXIS_WIDTH=I;var e=1.5;exports.AXIS_LINE_WIDTH=e;var _=5;exports.TICK_LENGTH=_;var t=4;exports.CIRCLE_RADIUS=t;var o="#ffa500";exports.FILL_COLOR=o;var s="#000";exports.TEXT_COLOR=s;var p=.5;exports.LINE_PLOT_WIDTH=p;var T="11px serif";exports.FONT=T;var x="top";exports.TEXT_BASELINE=x;var L=3;exports.HIGHLIGHT_LINE_WIDTH=L;
},{}],"PblJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertData=t;var e=require("../config");function r(e){return Number(e.toFixed(2))}function t(t){var o=[],c=0;return t.forEach(function(t,n,u){n+1<e.MOVING_AVG_DAYS?c+=t.close:(n>=e.MOVING_AVG_DAYS&&(c-=u[n-e.MOVING_AVG_DAYS].close),c+=t.close,o.push({date:t.date,closeAvg:r(c/e.MOVING_AVG_DAYS)}))}),o}
},{"../config":"4itQ"}],"Xd+c":[function(require,module,exports) {
"use strict";function e(e){var o=e[0].closeAvg;return e.forEach(function(e){e.closeAvg>o&&(o=e.closeAvg)}),o}function o(e){var o=e[0].closeAvg;return e.forEach(function(e){e.closeAvg<o&&(o=e.closeAvg)}),o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMaxY=e,exports.getMinY=o;
},{}],"WJPE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.normalizePoints=o;var e=require("../config"),t=require("./utils");function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(n,o,i){e.AXIS_WIDTH;var u=Math.ceil((0,t.getMaxY)(n)),c=Math.floor((0,t.getMinY)(n)),l=(i-e.AXIS_WIDTH)/n.length,a=(o-e.AXIS_WIDTH)/(u-c);return n.map(function(t,n){return r({},t,{x:l*n+e.AXIS_WIDTH,y:o-e.AXIS_WIDTH-a*(t.closeAvg-c)})})}
},{"../config":"4itQ","./utils":"Xd+c"}],"ZY77":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawAxes=I;var e=require("../config"),t=require("./utils");function I(I,i,n,a){var r=Math.ceil((0,t.getMaxY)(i)),l=Math.floor((0,t.getMinY)(i));I.lineWidth=e.AXIS_LINE_WIDTH,I.fillStyle=e.TEXT_COLOR,I.strokeStyle=e.TEXT_COLOR;var _=(n-e.AXIS_WIDTH)/(r-l),D=(a-e.AXIS_WIDTH)/i.length;T(I,_,r,l,n,a),o(I,D,i,n,a)}function T(t,I,T,o,n,a){i(t,n,a);for(var r=0;Math.ceil(T)-r>Math.floor(o);)t.beginPath(),t.fillText(Math.ceil(T)-r,e.AXIS_WIDTH-e.AXIS_WIDTH/2,I*r,e.AXIS_WIDTH),t.beginPath(),t.moveTo(e.AXIS_WIDTH,I*r),t.lineTo(-1*(e.TICK_LENGTH-e.AXIS_WIDTH),I*r),t.stroke(),r++;t.moveTo(e.AXIS_WIDTH,0),t.lineTo(e.AXIS_WIDTH,n-e.AXIS_WIDTH),t.stroke()}function i(t,I,T){var i=e.AXIS_WIDTH+e.AXIS_LINE_WIDTH;t.beginPath(),t.fillText("Closing Average Price",i,0)}function o(t,I,T,i,o){var a;n(t,i,o),T.forEach(function(T,o){if(a!==new Date(T.date).getMonth()){var n=new Date(T.date);a=n.getMonth(),t.beginPath(),t.fillText(n.getMonth()+1+" / "+n.getFullYear(),e.AXIS_WIDTH+I*o,i-e.AXIS_WIDTH+e.AXIS_LINE_WIDTH)}}),t.moveTo(e.AXIS_WIDTH,i-e.AXIS_WIDTH),t.lineTo(o,i-e.AXIS_WIDTH),t.stroke()}function n(t,I,T){var i=T/2,o=I-e.AXIS_WIDTH/2;t.beginPath(),t.fillText("Date",i,o)}
},{"../config":"4itQ","./utils":"Xd+c"}],"seJS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.plot=t;var e=require("../config");function t(t,o){var r,i;t.lineWidth=e.LINE_PLOT_WIDTH,t.strokeStyle=e.FILL_COLOR,t.fillStyle=e.FILL_COLOR,o.forEach(function(o,l){l>0&&(t.beginPath(),t.moveTo(r,i),t.lineTo(o.x,o.y),t.stroke()),t.beginPath(),t.arc(o.x,o.y,e.CIRCLE_RADIUS,0,2*Math.PI),t.stroke(),t.fill(),r=o.x,i=o.y})}
},{"../config":"4itQ"}],"yg57":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.draw=r,exports.drawLinesToPoint=i;var e=require("../config"),t=require("./drawAxes"),o=require("./plot");function r(r,i,n,I){r.font=e.FONT,r.textBaseline=e.TEXT_BASELINE,(0,t.drawAxes)(r,i,n,I),(0,o.plot)(r,i)}function i(t,o,r){t.strokeStyle=e.TEXT_COLOR,t.lineWidth=e.AXIS_LINE_WIDTH,t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(e.AXIS_WIDTH,o.y),t.stroke(),t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(o.x,r-e.AXIS_WIDTH),t.stroke(),t.beginPath(),t.lineWidth=e.HIGHLIGHT_LINE_WIDTH,t.arc(o.x,o.y,e.CIRCLE_RADIUS,0,2*Math.PI),t.stroke(),t.fill()}
},{"../config":"4itQ","./drawAxes":"ZY77","./plot":"seJS"}],"5YxI":[function(require,module,exports) {
"use strict";var t=require("./data"),e=require("./utils/convertData"),n=require("./draw/normalizePoints"),r=require("./draw/draw"),a=require("./config");function i(t,e,n,i,o){var c=o.target.getBoundingClientRect(),d=o.clientX-c.left,l=o.clientY-c.top,u=!0,v=!1,s=void 0;try{for(var I,g=e[Symbol.iterator]();!(u=(I=g.next()).done);u=!0){var w=I.value;if(d<w.x+a.CIRCLE_RADIUS&&d>w.x-a.CIRCLE_RADIUS&&l<w.y+a.CIRCLE_RADIUS&&l>w.y-a.CIRCLE_RADIUS){t.clearRect(0,0,i,n),(0,r.draw)(t,e,n,i),(0,r.drawLinesToPoint)(t,w,n),tip.innerText="\n\t\t\t\t".concat(new Date(w.date).toDateString(),"\n\n\t\t\t\t").concat(w.closeAvg,"\n\t\t\t");break}}}catch(C){v=!0,s=C}finally{try{u||null==g.return||g.return()}finally{if(v)throw s}}}!function(){var a=document.getElementById("canvas"),o=(document.getElementById("tip"),a.getContext("2d")),c=window.getComputedStyle(a),d=c.height,l=c.width;d=parseInt(d,10),l=parseInt(l,10);var u=(0,e.convertData)(t.data);u=(0,n.normalizePoints)(u,d,l),(0,r.draw)(o,u,d,l),a.addEventListener("click",i.bind(this,o,u,d,l))}();
},{"./data":"paDP","./utils/convertData":"PblJ","./draw/normalizePoints":"WJPE","./draw/draw":"yg57","./config":"4itQ"}]},{},["5YxI"], null)
//# sourceMappingURL=/chart.js.map