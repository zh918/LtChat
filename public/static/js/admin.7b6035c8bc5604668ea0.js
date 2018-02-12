webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(32),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const resetRootFontSize = function (doc, win) {
    let viewport = document.querySelector("meta[name=viewport]");
    if (window.devicePixelRatio == 1) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    }
    // if (window.devicePixelRatio == 2) {  
    //     viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
    // }
    // if (window.devicePixelRatio == 3) {
    //     viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
    // }

    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) return;

        docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
        console.log(clientWidth);
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
};

resetRootFontSize(document, window);

// window.onResize = function() {
//     console.log('界面大小reset========================================')
//     resetRootFontSize(document, window);
// }

/* unused harmony default export */ var _unused_webpack_default_export = (resetRootFontSize);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dispatchRouter__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rem__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App__);





class Bootstrap {
    constructor() {
        this.dispatchRouter = new __WEBPACK_IMPORTED_MODULE_1__dispatchRouter__["a" /* default */]();
    }

    run(router, store) {
        let _this = this;
        _this.appListener(function () {
            _this.initVue(router, store).then(result => {
                _this.dispatchRouter.dispatch();
            });
        });
    }

    // 先发起请求，后加载vue
    initVue(router, store) {
        return new Promise(function (resolve, reject) {
            window.globalVue = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
                router,
                store,
                template: '<App />',
                components: {
                    App: __WEBPACK_IMPORTED_MODULE_3__App___default.a
                }
            }).$mount('#app');
            resolve(true);
        });
        // return import('./App').then((App) => {
        //     window.globalVue = new Vue({
        //         router,
        //         store,
        //         template: '<App />',
        //         components: {
        //             App
        //         }
        //     }).$mount('#app'); 
        // });
    }

    appListener(cb) {
        cb();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bootstrap;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_env__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_env___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_env__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messageHelper__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parmsHelper__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parmsHelper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__parmsHelper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__imageHelper__ = __webpack_require__(17);
// 全局注入









window.$isOnLineData = true;
window.$isOnLine = true;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_number__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_date__ = __webpack_require__(25);




// export default Vue.filter(Number)

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_logger__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rootMutation__ = __webpack_require__(29);
// store入口管理



//import rootAction from './rootAction'


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const state = {};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    mutations: __WEBPACK_IMPORTED_MODULE_3__rootMutation__["a" /* default */],
    modules: {},
    strict: true,
    plugins: false ? [createLogger()] : []
}));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    created() {
        console.log('layout');
    },
    components: {}
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
// 封装ajax请求


// 地址分类
const urlType = {
    bizProxyUrl: 0,
    resourceProxyUrl: 1,
    commonProxyUrl: 2
};

const post = (urlObj, params = {}, headers = {}) => {
    let option = Object.assign({}, headers);
    let url = "";

    if (urlObj.urlType == urlType.bizProxyUrl) {
        url = $AppConfig.setApiUrl() + urlObj.url;
        console.log(url);
    }

    return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: 'post',
        url: url,
        data: params,
        headers: option
    }).then(res => {
        // exceptionHandler(res);

        if (res.data && 11 <= res.data.errorCode && res.data.errorCode <= 19) {
            globalVue.$message({
                msg: $MessageHelper.toMsg(res.data), //"系统体力不支倒下啦，狠狠的抽醒他吧！",
                duration: 1500
            });
        }

        // globalVue.$finish();
        log('请求返回完整数据:', res.data);
        return res.data;
    }).catch(res => {
        // globalVue.$finish(); 
        log("请求失败", res);
        if (res.message == 'Network Error') {
            globalVue.$message({
                msg: '当前网络不可用，请检查网络设置', //"系统体力不支倒下啦，狠狠的抽醒他吧！",
                duration: 2000
            });
        }

        return Promise.resolve({ errorCode: -1 });
    });
};

const get = urlObj => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(urlObj.url);
};

// export const injectHttp = () => {
//     if(typeof window.$http == 'undefined') {
//         window.$http = {};
//         window.$http.post = post;
//         window.$http.get = get;
//     }
// }
// 
if (typeof window.$http == 'undefined') {
    window.$http = {};
    window.$http.post = post;
    window.$http.get = get;
}

// const exceptionHandler = (res) => {
//     if ((res.status !== 200 && res.status != 304) && urlObj.noNetwork) { 
//         globalVue.$NoNetwork({el:"no-network",cb:()=>{ 
//             post(urlObj,params,headers)
//         }});             
//     }
//     else if (res.status !== 200 && res.status != 304) {
//         globalVue.$message({
//             msg: "当前网络不可用，请检查网络设置",
//             duration: 1500
//         });
//     } 
// }

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function detectSubsampling(img) {
  var iw = img.naturalWidth,
      ih = img.naturalHeight;
  if (iw * ih > 1024 * 1024) {
    // subsampling may happen over megapixel image
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, -iw + 1, 0);

    return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
  } else {
    return false;
  }
}

function detectVerticalSquash(img, iw, ih) {
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  var data = ctx.getImageData(0, 0, 1, ih).data;

  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }
    py = ey + sy >> 1;
  }
  var ratio = py / ih;
  return ratio === 0 ? 1 : ratio;
}

function renderImageToDataURL(img, options, doSquash) {
  var canvas = document.createElement('canvas');
  renderImageToCanvas(img, canvas, options, doSquash);
  return canvas.toDataURL("image/jpeg", options.quality || 0.8);
}

function renderImageToCanvas(img, canvas, options, doSquash) {
  var iw = img.naturalWidth,
      ih = img.naturalHeight;
  if (!(iw + ih)) return;
  var width = options.width,
      height = options.height;
  var ctx = canvas.getContext('2d');
  ctx.save();
  transformCoordinate(canvas, ctx, width, height, options.orientation);
  var subsampled = detectSubsampling(img);
  if (subsampled) {
    iw /= 2;
    ih /= 2;
  }
  var d = 1024; // size of tiling canvas
  var tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = tmpCanvas.height = d;
  var tmpCtx = tmpCanvas.getContext('2d');
  var vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;
  var dw = Math.ceil(d * width / iw);
  var dh = Math.ceil(d * height / ih / vertSquashRatio);
  var sy = 0;
  var dy = 0;
  while (sy < ih) {
    var sx = 0;
    var dx = 0;
    while (sx < iw) {
      tmpCtx.clearRect(0, 0, d, d);
      tmpCtx.drawImage(img, -sx, -sy);
      ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
      sx += d;
      dx += dw;
    }
    sy += d;
    dy += dh;
  }
  ctx.restore();
  tmpCanvas = tmpCtx = null;
}

function transformCoordinate(canvas, ctx, width, height, orientation) {
  switch (orientation) {
    case 5:
    case 6:
    case 7:
    case 8:
      canvas.width = height;
      canvas.height = width;
      break;
    default:
      canvas.width = width;
      canvas.height = height;
  }
  switch (orientation) {
    case 2:
      // horizontal flip
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
      break;
    case 3:
      // 180 rotate left
      ctx.translate(width, height);
      ctx.rotate(Math.PI);
      break;
    case 4:
      // vertical flip
      ctx.translate(0, height);
      ctx.scale(1, -1);
      break;
    case 5:
      // vertical flip + 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;
    case 6:
      // 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -height);
      break;
    case 7:
      // horizontal flip + 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(width, -height);
      ctx.scale(-1, 1);
      break;
    case 8:
      // 90 rotate left
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-width, 0);
      break;
    default:
      break;
  }
}

var URL = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;

function MegaPixImage(srcImage) {
  if (window.Blob && srcImage instanceof Blob) {
    if (!URL) {
      throw Error("No createObjectURL function found to create blob url");
    }
    var img = new Image();
    img.src = URL.createObjectURL(srcImage);
    this.blob = srcImage;
    srcImage = img;
  }
  if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
    var _this = this;
    srcImage.onload = srcImage.onerror = function () {
      var listeners = _this.imageLoadListeners;
      if (listeners) {
        _this.imageLoadListeners = null;
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i]();
        }
      }
    };
    this.imageLoadListeners = [];
  }
  this.srcImage = srcImage;
}

MegaPixImage.prototype.render = function (target, options, callback) {
  if (this.imageLoadListeners) {
    var _this = this;
    this.imageLoadListeners.push(function () {
      _this.render(target, options, callback);
    });
    return;
  }
  options = options || {};
  var imgWidth = this.srcImage.naturalWidth,
      imgHeight = this.srcImage.naturalHeight,
      width = options.width,
      height = options.height,
      maxWidth = options.maxWidth,
      maxHeight = options.maxHeight,
      doSquash = !this.blob || this.blob.type === 'image/jpeg';
  if (width && !height) {
    height = imgHeight * width / imgWidth << 0;
  } else if (height && !width) {
    width = imgWidth * height / imgHeight << 0;
  } else {
    width = imgWidth;
    height = imgHeight;
  }
  if (maxWidth && width > maxWidth) {
    width = maxWidth;
    height = imgHeight * width / imgWidth << 0;
  }
  if (maxHeight && height > maxHeight) {
    height = maxHeight;
    width = imgWidth * height / imgHeight << 0;
  }
  var opt = { width: width, height: height };
  for (var k in options) opt[k] = options[k];

  var tagName = target.tagName.toLowerCase();
  if (tagName === 'img') {
    target.src = renderImageToDataURL(this.srcImage, opt, doSquash);
  } else if (tagName === 'canvas') {
    renderImageToCanvas(this.srcImage, target, opt, doSquash);
  }
  if (typeof this.onrender === 'function') {
    this.onrender(target);
  }
  if (callback) {
    callback();
  }
  if (this.blob) {
    this.blob = null;
    URL.revokeObjectURL(this.srcImage.src);
  }
};

if (typeof window.$MegaPixImage === 'undefined') window.$MegaPixImage = MegaPixImage;

/* unused harmony default export */ var _unused_webpack_default_export = (MegaPixImage);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 前端自定义code编码段位：8000-9000
 * 后端codes编码与api保持一致
 * @type {Array}
 */
const messages = [{
				code: 9999,
				codes: [],
				msg: "当前网络不可用，请检查网络设置" // 前端解析消息
}, {
				code: 8000, // 该code为前端自定义编码，仅提供给特定情况下直接输出message，也与后台api进行区分
				codes: [],
				msg: "请上传行驶证照片" // 前端解析消息
}, {
				code: 8001,
				codes: [],
				msg: "请输入行驶城市"
}, {
				code: 8002,
				codes: [],
				msg: "请输入车主姓名"
}, {
				code: 8003,
				codes: [],
				msg: "请输入正确的车主姓名"
}, {
				code: 8004,
				codes: [],
				msg: "请输入车主身份证号"
}, {
				code: 8005,
				codes: [],
				msg: "请输入正确的车主身份证号"
}, {
				code: 8006,
				codes: [],
				msg: "请输入车牌号"
}, {
				code: 8007,
				codes: [],
				msg: "请输入正确的车牌号"
},
// {
//     code: 8008,
//     codes: ["g5_2001", "business_2001"],
//     msg:"asdf"
// },
{
				code: 8009,
				codes: ["g5_2012", "business_2012"],
				msg: "您选择的行驶城市未开通产品的购买，请重新选择行驶城市 。"
}, {
				code: 8010,
				codes: ["business_2004", "business_2506"],
				msg: "商品已下架" // 前端解析消息
}, {
				code: 8011,
				codes: ["business_2501"],
				msg: "您是黑名单用户，不能购买"
}, {
				code: 8012,
				codes: ["business_2509"],
				msg: "保险公司停止接单了，本订单目前无法确认，请在工作时间段内重新询价。"
},
// 差异消息处理
{
				// code:8007, 
				codes: ["g5_2012", "business_2012", "business_2505"],
				msg: "您选择的行驶城市未开通产品的购买，请重新选择行驶城市 。"
}, {
				codes: [11, 12, 13, 14, 15, 16, 17, 18, 19],
				msg: "系统体力不支倒下啦，狠狠的抽醒他吧！"
}];

/**
 * 前端解析code输出message
 */
class MessageHelper {
				/**
     * @描述     根据api返回结果来输出message，该message可能与api返回msg不一致，以前端定义message为准
     * @开发     zh
     * @时间     2017-08-03
     * @param  {[type]}   result [description]
     * @return {[type]}          [description]
     */
				static toMsg(result, defaultVal) {
								log("MessageHelper====", result);
								if (typeof result == "number") {
												let msgObj = messages.find(m => m.code == result);
												log(msgObj);
												if (msgObj) {
																return msgObj.msg;
												} else {
																return "系统异常";
												}
								} else if (typeof result == "undefined") {
												return "系统异常";
								} else {
												let msgObj = messages.find(m => m.codes.some(c => c == result.errorCode));
												if (msgObj && msgObj.msg) {
																return msgObj.msg;
												}

												return result.errorMsg;
								}
				}

}
/* unused harmony export default */


if (typeof window.$MessageHelper == "undefined") window.$MessageHelper = MessageHelper;

/***/ }),
/* 19 */
/***/ (function(module, exports) {


class ParmsHelper {
	/**
  * @描述     获取页面query 参数
  * @开发     zh
  * @时间     2017-09-25
  * @param  {[type]}   key [description]
  * @return {[type]}       [description]
  */
	static loadPageParms(key, searchType = "hash") {
		let searchVal = window.location.hash;
		if (searchType == "query") searchVal = window.location.search;
		return decodeURI(searchVal.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	}

	static getParms(url, key) {
		return decodeURI(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	}
}

if (typeof window.$ParmsHelper == "undefined") window.$ParmsHelper = ParmsHelper;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// find
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

// some
if (!Array.prototype.some) {
  Array.prototype.some = function (fun /*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}

// addEventListener
(function () {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault = function () {
      this.returnValue = false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation = function () {
      this.cancelBubble = true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners = [];

    var addEventListener = function (type, listener /*, useCapture (will be ignored) */) {
      var self = this;
      var wrapper = function (e) {
        e.target = e.srcElement;
        e.currentTarget = self;
        if (typeof listener.handleEvent != 'undefined') {
          listener.handleEvent(e);
        } else {
          listener.call(self, e);
        }
      };
      if (type == "DOMContentLoaded") {
        var wrapper2 = function (e) {
          if (document.readyState == "complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange", wrapper2);
        eventListeners.push({ object: this, type: type, listener: listener, wrapper: wrapper2 });

        if (document.readyState == "complete") {
          var e = new Event();
          e.srcElement = window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on" + type, wrapper);
        eventListeners.push({ object: this, type: type, listener: listener, wrapper: wrapper });
      }
    };
    var removeEventListener = function (type, listener /*, useCapture (will be ignored) */) {
      var counter = 0;
      while (counter < eventListeners.length) {
        var eventListener = eventListeners[counter];
        if (eventListener.object == this && eventListener.type == type && eventListener.listener == listener) {
          if (type == "DOMContentLoaded") {
            this.detachEvent("onreadystatechange", eventListener.wrapper);
          } else {
            this.detachEvent("on" + type, eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener = addEventListener;
    Element.prototype.removeEventListener = removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener = addEventListener;
      HTMLDocument.prototype.removeEventListener = removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener = addEventListener;
      Window.prototype.removeEventListener = removeEventListener;
    }
  }
})();

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);
// 存储


const clear = () => {
	let obj = __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get();
	for (let c in obj) {
		if (obj.hasOwnProperty(c)) {
			__WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(c);
		}
	}
};

// export const injectCookie = () => {
// 	if (typeof window.Cookie == 'undefined'){
// 		window.Cookie = Cookie;
// 	}

// 	if (typeof window.Cookie.clear == 'undefined'){
// 		window.Cookie.clear = clear;
// 	}
// } 
// 


if (typeof window.Cookie == 'undefined') {
	window.Cookie = __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a;
}

if (typeof window.Cookie.clear == 'undefined') {
	window.Cookie.clear = clear;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deepCopy;
/* unused harmony export forEachValue */
/* unused harmony export isObject */
/* unused harmony export isPromise */
/* unused harmony export assert */
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}

/**
 * forEach for object
 */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key));
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

class AppConfig {

	static setApiUrl() {
		if (false) {
			// 本地
			return 'http://192.168.1.25:30006/external';
		} else if (false) {
			// 开发
			return 'http://192.168.1.25:30006/external';
		} else if (false) {
			// 测试
			return ''; //'http://192.168.1.50:30006/external';
		} else if (false) {
			// uat
			// return 'http://www.yitianxian.com/wechatServer';
			return '';
		} else {
			// 线上
			return '';
		}
	}

	/**
  * @描述    设置app配置信息，可全局使用
  * @开发    zh
  * @时间    2017-07-27
  * @param {[type]}   config = {}
  */
	static setAppConfig(...config) {
		// AppConfig.config = {};
		log(config);

		let configArray = [...config];
		configArray.forEach(c => {
			Object.assign(AppConfig.config, c);
		});
	}

	/**
  * @描述    配置全局开关信息
  * @开发    英文
  * @时间    2017-07-27
  * @param {[type]}   flag {log:true,error:true,...}
  */
	static setFlag(flag = {}) {
		Object.assign(AppConfig.config.flag, flag);
	}

}

if (typeof window.$AppConfig == "undefined") window.$AppConfig = AppConfig;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class DispatchRouter {
    // config = {}

    constructor() {}

    dispatch() {
        // log("DispatchRouter监控到的路由信息", this.config);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DispatchRouter;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);


/**
   * 日期格式重置   页面用法：{{'2017-08-22 18:30:26','yyyy-mm-dd hhmm' | formatDate}}  返回值：'2017-08-22 18:30'
   * @param {Object} value     //需要匹配的原始值
   * @param {Object} value2    //需要得到的日期格式（页面不区分大小写,可不传,不传默认返回年月日） 
   */
/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter("formatDate", function (value) {
	if (value) {
		let h = value.slice(11, 13);
		let m = value.slice(14, 16);
		return h + "时" + m + "分";
	}
}));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);


//全局过滤器
// 注册
/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter('number', function (oldValue) {
    // 返回处理后的值
    var f = parseFloat(oldValue);
    if (isNaN(f)) {
        return;
    }
    var f = Math.round(oldValue * 100) / 100;
    var newValue = f.toString();
    var rs = newValue.indexOf('.');
    if (rs < 0) {
        rs = newValue.length;
        newValue += '.';
    }
    while (newValue.length <= rs + 2) {
        newValue += '0';
    }
    return newValue;
}));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 触发mutations 事件名   大写常量名和值

// 说明：...........
const LOADING_BEGIN = 'LOADING_BEGIN';
/* unused harmony export LOADING_BEGIN */

const LOADING_END = 'LOADING_END';
/* unused harmony export LOADING_END */


// 产品相关
const PRODUCT_LOADING = 'PRODUCT_LOADING';
/* unused harmony export PRODUCT_LOADING */

const PRODUCT_CHOOSE = 'PRODUCT_CHOOSE';
/* unused harmony export PRODUCT_CHOOSE */

const ORDER_CHANGE_INFO = 'ORDER_CHANGE_INFO';
/* unused harmony export ORDER_CHANGE_INFO */

const BUY_NUMBER_ADD = 'BUY_NUMBER_ADD';
/* unused harmony export BUY_NUMBER_ADD */


//报价单状态信息以及报价单ID
const QUOTE_STATUS = 'QUOTE_STATUS';
/* unused harmony export QUOTE_STATUS */

//客服电话
const TELEPHONE = 'TELEPHONE';
/* unused harmony export TELEPHONE */


//报价成功设置传给确认订单的参数(报价基本信息)
const SET_QUATATION_INFO = 'SET_QUATATION_INFO';
/* unused harmony export SET_QUATATION_INFO */

//报价成功设置传给确认订单的参数(保障套餐)
const SET_PROTECTION = 'SET_PROTECTION';
/* unused harmony export SET_PROTECTION */

//报价成功设置传给确认订单的参数(保费)
const SET_INSUREFEE = 'SET_INSUREFEE';
/* unused harmony export SET_INSUREFEE */

//报价成功设置传给确认订单的参数(最优优惠券)
const SET_BEST_COUPON = 'SET_BEST_COUPON';
/* unused harmony export SET_BEST_COUPON */

//报价成功设置传给确认订单的参数(保险公司)
const SET_COMPANY = 'SET_COMPANY';
/* unused harmony export SET_COMPANY */

//保存保障套餐列表
const SAVE_PROTECTION_LIST = 'SAVE_PROTECTION_LIST';
/* unused harmony export SAVE_PROTECTION_LIST */

//修改保障套餐列表
const MODIFY_PROTECTION_LIST = 'MODIFY_PROTECTION_LIST';
/* unused harmony export MODIFY_PROTECTION_LIST */


//选择优惠券
const SAVE_COUPON = 'SAVE_COUPON';
/* unused harmony export SAVE_COUPON */


// 新增/编辑/查看 车辆
const CAR_LOAD_ALL = "CAR_LOAD_ALL";
/* unused harmony export CAR_LOAD_ALL */


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util__ = __webpack_require__(22);
// Credits: borrowed code from fcomb/redux-logger



function createLogger({
  collapsed = true,
  filter = (mutation, stateBefore, stateAfter) => true,
  transformer = state => state,
  mutationTransformer = mut => mut
} = {}) {
  return store => {
    let prevState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_util__["a" /* deepCopy */])(store.state);

    store.subscribe((mutation, state) => {
      if (typeof console === 'undefined') {
        return;
      }
      const nextState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_util__["a" /* deepCopy */])(state);

      if (filter(mutation, prevState, nextState)) {
        const time = new Date();
        const formattedTime = ` @ ${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}`;
        const formattedMutation = mutationTransformer(mutation);
        const message = `mutation ${mutation.type}${formattedTime}`;
        const startMessage = collapsed ? console.groupCollapsed : console.group;

        // render
        try {
          startMessage.call(console, message);
        } catch (e) {
          log(message);
        }

        log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
        log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
        log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));

        try {
          console.groupEnd();
        } catch (e) {
          log('—— log end ——');
        }
      }

      prevState = nextState;
    });
  };
}

function repeat(str, times) {
  return new Array(times + 1).join(str);
}

function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutationType__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  "data-v-7c4d0758",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', [_c('router-view')], 1)])
},staticRenderFns: []}

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_test__ = __webpack_require__(69);
// 管理





/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	mode: 'hash',
	routes: [__WEBPACK_IMPORTED_MODULE_2__map_test__["a" /* default */]]
}));

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      title: 'hello'
    };
  },
  beforeCreate() {},
  created() {},
  methods: {
    a() {},
    b() {}
  }
});

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_inject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_admin__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bootstrap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_iconfont_iconfont_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_iconfont_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_iconfont_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ref_ymt_ui_style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ref_ymt_ui_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ref_ymt_ui_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_normalize_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_default_root_less__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_default_root_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__style_default_root_less__);















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
console.log('管理员分支');
new __WEBPACK_IMPORTED_MODULE_7__bootstrap__["a" /* default */]().run(__WEBPACK_IMPORTED_MODULE_4__router_admin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */]);

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_layout_layout__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_layout_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_layout_layout__);

const admin = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(72))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/* harmony default export */ __webpack_exports__["a"] = ({
	name: '客服管理',
	path: '/',
	component: __WEBPACK_IMPORTED_MODULE_0__components_common_layout_layout___default.a,
	children: [{
		name: '客服',
		path: '/admin/chat',
		component: admin
	}]
});

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h1', [_vm._v("管理员 " + _vm._s(_vm.title))])])
},staticRenderFns: []}

/***/ })
],[66]);