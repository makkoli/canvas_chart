// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = [{
  date: '2018-12-03',
  close: 25.719999
}, {
  date: '2018-12-04',
  close: 23.5
}, {
  date: '2018-12-06',
  close: 23.27
}, {
  date: '2018-12-07',
  close: 21.57
}, {
  date: '2018-12-10',
  close: 21.32
}, {
  date: '2018-12-11',
  close: 21.98
}, {
  date: '2018-12-12',
  close: 23.110001
}, {
  date: '2018-12-13',
  close: 23.27
}, {
  date: '2018-12-14',
  close: 23
}, {
  date: '2018-12-17',
  close: 21.85
}, {
  date: '2018-12-18',
  close: 21.530001
}, {
  date: '2018-12-19',
  close: 21.58
}, {
  date: '2018-12-20',
  close: 20.51
}, {
  date: '2018-12-21',
  close: 19.42
}, {
  date: '2018-12-24',
  close: 18.99
}, {
  date: '2018-12-26',
  close: 21.41
}, {
  date: '2018-12-27',
  close: 21
}, {
  date: '2018-12-28',
  close: 21.57
}, {
  date: '2018-12-31',
  close: 21.389999
}, {
  date: '2019-01-02',
  close: 22.75
}, {
  date: '2019-01-03',
  close: 22.040001
}, {
  date: '2019-01-04',
  close: 23.51
}, {
  date: '2019-01-07',
  close: 23.709999
}, {
  date: '2019-01-08',
  close: 23.360001
}, {
  date: '2019-01-09',
  close: 23.870001
}, {
  date: '2019-01-10',
  close: 23.940001
}, {
  date: '2019-01-11',
  close: 23.6
}, {
  date: '2019-01-14',
  close: 23.51
}, {
  date: '2019-01-15',
  close: 23.389999
}, {
  date: '2019-01-16',
  close: 23.219999
}, {
  date: '2019-01-17',
  close: 22.379999
}, {
  date: '2019-01-18',
  close: 21.139999
}, {
  date: '2019-01-22',
  close: 21.209999
}, {
  date: '2019-01-23',
  close: 21.469999
}, {
  date: '2019-01-24',
  close: 21.110001
}, {
  date: '2019-01-25',
  close: 22.42
}, {
  date: '2019-01-28',
  close: 22.790001
}, {
  date: '2019-01-29',
  close: 22.700001
}, {
  date: '2019-01-30',
  close: 23.4
}, {
  date: '2019-01-31',
  close: 24.33
}, {
  date: '2019-02-01',
  close: 24.9
}, {
  date: '2019-02-04',
  close: 23.299999
}, {
  date: '2019-02-05',
  close: 23.940001
}, {
  date: '2019-02-06',
  close: 23.58
}, {
  date: '2019-02-07',
  close: 22.969999
}, {
  date: '2019-02-08',
  close: 23.48
}, {
  date: '2019-02-11',
  close: 22.67
}, {
  date: '2019-02-12',
  close: 23.299999
}, {
  date: '2019-02-13',
  close: 23
}, {
  date: '2019-02-14',
  close: 22.82
}, {
  date: '2019-02-15',
  close: 23.1
}, {
  date: '2019-02-19',
  close: 21.620001
}, {
  date: '2019-02-20',
  close: 24.059999
}, {
  date: '2019-02-21',
  close: 24.59
}, {
  date: '2019-02-22',
  close: 23.85
}, {
  date: '2019-02-25',
  close: 24.700001
}, {
  date: '2019-02-26',
  close: 24.42
}, {
  date: '2019-02-27',
  close: 24.719999
}, {
  date: '2019-02-28',
  close: 24.08
}, {
  date: '2019-03-01',
  close: 23.35
}, {
  date: '2019-03-04',
  close: 21.120001
}, {
  date: '2019-03-05',
  close: 17.76
}, {
  date: '2019-03-06',
  close: 18.26
}, {
  date: '2019-03-07',
  close: 18.17
}, {
  date: '2019-03-08',
  close: 18.16
}, {
  date: '2019-03-11',
  close: 17.690001
}, {
  date: '2019-03-12',
  close: 17.77
}, {
  date: '2019-03-13',
  close: 17.940001
}, {
  date: '2019-03-14',
  close: 17.379999
}, {
  date: '2019-03-15',
  close: 17.17
}, {
  date: '2019-03-18',
  close: 16.02
}, {
  date: '2019-03-19',
  close: 17.120001
}, {
  date: '2019-03-20',
  close: 16.98
}, {
  date: '2019-03-21',
  close: 16.09
}, {
  date: '2019-03-22',
  close: 15.74
}, {
  date: '2019-03-25',
  close: 15.78
}, {
  date: '2019-03-26',
  close: 15.77
}, {
  date: '2019-03-27',
  close: 15.61
}, {
  date: '2019-03-28',
  close: 15.2
}, {
  date: '2019-03-29',
  close: 15.66
}, {
  date: '2019-04-01',
  close: 15.25
}, {
  date: '2019-04-02',
  close: 15.35
}, {
  date: '2019-04-03',
  close: 15.4
}, {
  date: '2019-04-04',
  close: 16.629999
}, {
  date: '2019-04-05',
  close: 17.52
}];
exports.data = data;
},{}],"src/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIGHLIGHT_LINE_WIDTH = exports.TEXT_BASELINE = exports.FONT = exports.LINE_PLOT_WIDTH = exports.TEXT_COLOR = exports.FILL_COLOR = exports.CIRCLE_RADIUS = exports.TICK_LENGTH = exports.AXIS_LINE_WIDTH = exports.AXIS_WIDTH = exports.MOVING_AVG_DAYS = void 0;
var MOVING_AVG_DAYS = 20;
exports.MOVING_AVG_DAYS = MOVING_AVG_DAYS;
var AXIS_WIDTH = 40;
exports.AXIS_WIDTH = AXIS_WIDTH;
var AXIS_LINE_WIDTH = 1.5;
exports.AXIS_LINE_WIDTH = AXIS_LINE_WIDTH;
var TICK_LENGTH = 5;
exports.TICK_LENGTH = TICK_LENGTH;
var CIRCLE_RADIUS = 4;
exports.CIRCLE_RADIUS = CIRCLE_RADIUS;
var FILL_COLOR = '#ffa500';
exports.FILL_COLOR = FILL_COLOR;
var TEXT_COLOR = '#000';
exports.TEXT_COLOR = TEXT_COLOR;
var LINE_PLOT_WIDTH = 0.5;
exports.LINE_PLOT_WIDTH = LINE_PLOT_WIDTH;
var FONT = '11px serif';
exports.FONT = FONT;
var TEXT_BASELINE = 'top';
exports.TEXT_BASELINE = TEXT_BASELINE;
var HIGHLIGHT_LINE_WIDTH = 3;
exports.HIGHLIGHT_LINE_WIDTH = HIGHLIGHT_LINE_WIDTH;
},{}],"src/utils/convertData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertData = convertData;

var _config = require("../config");

function toMoney(m) {
  return Number(m.toFixed(2));
}

function convertData(data) {
  var convertedData = [];
  var sum = 0;
  data.forEach(function (d, i, arr) {
    if (i + 1 < _config.MOVING_AVG_DAYS) {
      sum += d.close;
      return;
    } // pop off the last day


    if (i >= _config.MOVING_AVG_DAYS) {
      sum -= arr[i - _config.MOVING_AVG_DAYS].close;
    }

    sum += d.close;
    convertedData.push({
      date: d.date,
      closeAvg: toMoney(sum / _config.MOVING_AVG_DAYS)
    });
  });
  return convertedData;
}
},{"../config":"src/config.js"}],"src/draw/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaxY = getMaxY;
exports.getMinY = getMinY;

function getMaxY(points) {
  var max = points[0].closeAvg;
  points.forEach(function (pt) {
    if (pt.closeAvg > max) {
      max = pt.closeAvg;
    }
  });
  return max;
}

function getMinY(points) {
  var min = points[0].closeAvg;
  points.forEach(function (pt) {
    if (pt.closeAvg < min) {
      min = pt.closeAvg;
    }
  });
  return min;
}
},{}],"src/draw/normalizePoints.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizePoints = normalizePoints;

var _config = require("../config");

var _utils = require("./utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// normalize the points for plotting on the canvas
function normalizePoints(points, height, width) {
  var originX = _config.AXIS_WIDTH;
  var originY = height;
  var maxY = Math.ceil((0, _utils.getMaxY)(points));
  var minY = Math.floor((0, _utils.getMinY)(points));
  var xAxisStep = (width - _config.AXIS_WIDTH) / points.length;
  var yAxisStep = (height - _config.AXIS_WIDTH) / (maxY - minY);
  return points.map(function (pt, i) {
    return _objectSpread({}, pt, {
      x: xAxisStep * i + _config.AXIS_WIDTH,
      y: height - _config.AXIS_WIDTH - yAxisStep * (pt.closeAvg - minY)
    });
  });
}
},{"../config":"src/config.js","./utils":"src/draw/utils.js"}],"src/draw/drawAxes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawAxes = drawAxes;

var _config = require("../config");

var _utils = require("./utils");

function drawAxes(ctx, pts, height, width) {
  var max = Math.ceil((0, _utils.getMaxY)(pts));
  var min = Math.floor((0, _utils.getMinY)(pts));
  ctx.lineWidth = _config.AXIS_LINE_WIDTH;
  ctx.fillStyle = _config.TEXT_COLOR;
  ctx.strokeStyle = _config.TEXT_COLOR;
  var yAxisStep = (height - _config.AXIS_WIDTH) / (max - min);
  var xAxisStep = (width - _config.AXIS_WIDTH) / pts.length;
  drawYAxis(ctx, yAxisStep, max, min, height, width);
  drawXAxis(ctx, xAxisStep, pts, height, width);
}

function drawYAxis(ctx, step, max, min, height, width) {
  drawYAxisLabel(ctx, height, width);
  var i = 0;

  while (Math.ceil(max) - i > Math.floor(min)) {
    // draw price
    ctx.beginPath();
    ctx.fillText(Math.ceil(max) - i, _config.AXIS_WIDTH - _config.AXIS_WIDTH / 2, step * i, _config.AXIS_WIDTH); // draw tick

    ctx.beginPath();
    ctx.moveTo(_config.AXIS_WIDTH, step * i);
    ctx.lineTo((_config.TICK_LENGTH - _config.AXIS_WIDTH) * -1, step * i);
    ctx.stroke();
    i++;
  }

  ctx.moveTo(_config.AXIS_WIDTH, 0);
  ctx.lineTo(_config.AXIS_WIDTH, height - _config.AXIS_WIDTH);
  ctx.stroke();
}

function drawYAxisLabel(ctx, height, width) {
  var x = _config.AXIS_WIDTH + _config.AXIS_LINE_WIDTH;
  var y = 0;
  ctx.beginPath();
  ctx.fillText('Closing Average Price', x, y);
}

function drawXAxis(ctx, step, pts, height, width) {
  drawXAxisLabel(ctx, height, width);
  var currentMonth;
  pts.forEach(function (pt, i) {
    if (currentMonth !== new Date(pt.date).getMonth()) {
      var date = new Date(pt.date);
      currentMonth = date.getMonth();
      ctx.beginPath();
      ctx.fillText(date.getMonth() + 1 + ' / ' + date.getFullYear(), _config.AXIS_WIDTH + step * i, height - _config.AXIS_WIDTH + _config.AXIS_LINE_WIDTH);
    }
  });
  ctx.moveTo(_config.AXIS_WIDTH, height - _config.AXIS_WIDTH);
  ctx.lineTo(width, height - _config.AXIS_WIDTH);
  ctx.stroke();
}

function drawXAxisLabel(ctx, height, width) {
  var x = width / 2;
  var y = height - _config.AXIS_WIDTH / 2;
  ctx.beginPath();
  ctx.fillText('Date', x, y);
}
},{"../config":"src/config.js","./utils":"src/draw/utils.js"}],"src/draw/plot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plot = plot;

var _config = require("../config");

function plot(ctx, points) {
  var prevX, prevY;
  ctx.lineWidth = _config.LINE_PLOT_WIDTH;
  ctx.strokeStyle = _config.FILL_COLOR;
  ctx.fillStyle = _config.FILL_COLOR;
  points.forEach(function (pt, i) {
    // plot lines after first pt is plotted
    if (i > 0) {
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(pt.x, pt.y, _config.CIRCLE_RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    prevX = pt.x;
    prevY = pt.y;
  });
}
},{"../config":"src/config.js"}],"src/draw/draw.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = draw;
exports.drawLinesToPoint = drawLinesToPoint;

var _config = require("../config");

var _drawAxes = require("./drawAxes");

var _plot = require("./plot");

function draw(ctx, points, height, width) {
  // set up canvas
  ctx.font = _config.FONT;
  ctx.textBaseline = _config.TEXT_BASELINE;
  (0, _drawAxes.drawAxes)(ctx, points, height, width);
  (0, _plot.plot)(ctx, points);
}

function drawLinesToPoint(ctx, pt, height) {
  // draw the lines pointing to the selected point
  ctx.strokeStyle = _config.TEXT_COLOR;
  ctx.lineWidth = _config.AXIS_LINE_WIDTH;
  ctx.beginPath();
  ctx.moveTo(pt.x, pt.y);
  ctx.lineTo(_config.AXIS_WIDTH, pt.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(pt.x, pt.y);
  ctx.lineTo(pt.x, height - _config.AXIS_WIDTH);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = _config.HIGHLIGHT_LINE_WIDTH;
  ctx.arc(pt.x, pt.y, _config.CIRCLE_RADIUS, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}
},{"../config":"src/config.js","./drawAxes":"src/draw/drawAxes.js","./plot":"src/draw/plot.js"}],"src/chart.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");

var _convertData = require("./utils/convertData");

var _normalizePoints = require("./draw/normalizePoints");

var _draw = require("./draw/draw");

var _config = require("./config");

function onCanvasClick(ctx, points, height, width, e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pt = _step.value;

      if (x < pt.x + _config.CIRCLE_RADIUS && x > pt.x - _config.CIRCLE_RADIUS && y < pt.y + _config.CIRCLE_RADIUS && y > pt.y - _config.CIRCLE_RADIUS) {
        ctx.clearRect(0, 0, width, height);
        (0, _draw.draw)(ctx, points, height, width);
        (0, _draw.drawLinesToPoint)(ctx, pt, height);
        tip.innerText = "\n\t\t\t\t".concat(new Date(pt.date).toDateString(), "\n\n\t\t\t\t").concat(pt.closeAvg, "\n\t\t\t");
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

(function () {
  var canvas = document.getElementById('canvas');
  var tip = document.getElementById('tip');
  var ctx = canvas.getContext('2d');

  var _window$getComputedSt = window.getComputedStyle(canvas),
      height = _window$getComputedSt.height,
      width = _window$getComputedSt.width;

  height = parseInt(height, 10);
  width = parseInt(width, 10);
  var points = (0, _convertData.convertData)(_data.data);
  points = (0, _normalizePoints.normalizePoints)(points, height, width);
  (0, _draw.draw)(ctx, points, height, width);
  canvas.addEventListener('click', onCanvasClick.bind(this, ctx, points, height, width));
})();
},{"./data":"src/data.js","./utils/convertData":"src/utils/convertData.js","./draw/normalizePoints":"src/draw/normalizePoints.js","./draw/draw":"src/draw/draw.js","./config":"src/config.js"}],"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41349" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/chart.js"], null)
//# sourceMappingURL=/chart.750f4ff0.js.map