/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies


// Import style


var _lazysizes = __webpack_require__(1);

var _lazysizes2 = _interopRequireDefault(_lazysizes);

var _StickyContact = __webpack_require__(3);

var _StickyContact2 = _interopRequireDefault(_StickyContact);

var _Projects = __webpack_require__(4);

var _Projects2 = _interopRequireDefault(_Projects);

var _DropShadow = __webpack_require__(5);

var _DropShadow2 = _interopRequireDefault(_DropShadow);

var _Globie = __webpack_require__(6);

var _Globie2 = _interopRequireDefault(_Globie);

var _Eyes = __webpack_require__(7);

var _Eyes2 = _interopRequireDefault(_Eyes);

__webpack_require__(9);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Site = function () {
  function Site() {
    _classCallCheck(this, Site);

    this.mobileThreshold = 601;

    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);

    $(window).resize(this.onResize);
    $(document).ready(this.onReady);
  }

  _createClass(Site, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      _lazysizes2.default.init();
    }
  }, {
    key: 'fixWidows',
    value: function fixWidows() {
      // utility class mainly for use on headines to avoid widows [single words on a new line]
      $('.js-fix-widows').each(function () {
        var string = $(this).html();
        string = string.replace(/ ([^ ]*)$/, '&nbsp;$1');
        $(this).html(string);
      });
    }
  }]);

  return Site;
}();

var IGV = new Site();
var IGVStickyContact = new _StickyContact2.default();
var IGVProjects = new _Projects2.default();
var IGVDropShadow = new _DropShadow2.default();
var IGVGlobie = new _Globie2.default();
var IGVEyes = new _Eyes2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = lazySizes;
	}
})(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */

	if (!document.getElementsByClassName) {
		return;
	}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function hasClass(ele, cls) {
		if (!regClassCache[cls]) {
			regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function addClass(ele, cls) {
		if (!hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function removeClass(ele, cls) {
		var reg;
		if (reg = hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
		var action = add ? _addEventListener : 'removeEventListener';
		if (add) {
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function (evt) {
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
		var event = document.createEvent('CustomEvent');

		if (!detail) {
			detail = {};
		}

		detail.instance = lazysizes;

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function updatePolyfill(el, full) {
		var polyfill;
		if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
			polyfill({ reevaluate: true, elements: [el] });
		} else if (full && full.src) {
			el.src = full.src;
		}
	};

	var getCSS = function getCSS(elem, style) {
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function getWidth(elem, parent, width) {
		width = width || elem.offsetWidth;

		while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
			width = parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = function () {
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function run() {
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while (runFns.length) {
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function rafBatch(fn, queue) {
			if (running && !queue) {
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if (!waiting) {
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	}();

	var rAFIt = function rAFIt(fn, simple) {
		return simple ? function () {
			rAF(fn);
		} : function () {
			var that = this;
			var args = arguments;
			rAF(function () {
				fn.apply(that, args);
			});
		};
	};

	var throttle = function throttle(fn) {
		var running;
		var lastTime = 0;
		var gDelay = lazySizesConfig.throttleDelay;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function run() {
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
			requestIdleCallback(run, { timeout: rICTimeout });

			if (rICTimeout !== lazySizesConfig.ricTimeout) {
				rICTimeout = lazySizesConfig.ricTimeout;
			}
		} : rAFIt(function () {
			setTimeout(run);
		}, true);

		return function (isPriority) {
			var delay;

			if (isPriority = isPriority === true) {
				rICTimeout = 33;
			}

			if (running) {
				return;
			}

			running = true;

			delay = gDelay - (Date.now() - lastTime);

			if (delay < 0) {
				delay = 0;
			}

			if (isPriority || delay < 9) {
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function debounce(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function run() {
			timeout = null;
			func();
		};
		var later = function later() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function () {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function () {
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for (prop in lazySizesDefaults) {
			if (!(prop in lazySizesConfig)) {
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function () {
			if (lazySizesConfig.init) {
				init();
			}
		});
	})();

	var loader = function () {
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = 'onscroll' in window && !/glebot/.test(navigator.userAgent);

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function resetPreloading(e) {
			isLoading--;
			if (e && e.target) {
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if (!e || isLoading < 0 || !e.target) {
				isLoading = 0;
			}
		};

		var isNestedVisible = function isNestedVisible(elem, elemExpand) {
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
				visible = (getCSS(parent, 'opacity') || 1) > 0;

				if (visible && getCSS(parent, 'overflow') != 'visible') {
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
				}
			}

			return visible;
		};

		var checkElements = function checkElements() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			var lazyloadElems = lazysizes.elements;

			if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

				i = 0;

				lowRuns++;

				if (preloadExpand == null) {
					if (!('expand' in lazySizesConfig)) {
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for (; i < eLlen; i++) {

					if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
						continue;
					}

					if (!supportScroll) {
						unveilElement(lazyloadElems[i]);continue;
					}

					if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
						elemExpand = currentExpand;
					}

					if (beforeExpandVal !== elemExpand) {
						eLvW = innerWidth + elemExpand * hFac;
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if (isLoading > 9) {
							break;
						}
					} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if (autoLoadElem && !loadedSomething) {
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function switchLoadingClass(e) {
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
			triggerEvent(e.target, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
			rafedSwitchLoadingClass({ target: e.target });
		};

		var changeIframeSrc = function changeIframeSrc(elem, src) {
			try {
				elem.contentWindow.location.replace(src);
			} catch (e) {
				elem.src = src;
			}
		};

		var handleSources = function handleSources(source) {
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
				source.setAttribute('media', customMedia);
			}

			if (sourceSrcset) {
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
			var src, srcset, parent, isPicture, event, firesLoad;

			if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

				if (sizes) {
					if (isAuto) {
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if (isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

				event = { target: elem };

				if (firesLoad) {
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if (isPicture) {
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if (srcset) {
					elem.setAttribute('srcset', srcset);
				} else if (src && !isPicture) {
					if (regIframe.test(elem.nodeName)) {
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if (isImg && (srcset || isPicture)) {
					updatePolyfill(elem, { src: src });
				}
			}

			if (elem._lazyRace) {
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function () {
				if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
					if (firesLoad) {
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			}, true);
		});

		var unveilElement = function unveilElement(elem) {
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
				return;
			}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if (isAuto) {
				autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function onload() {
			if (isCompleted) {
				return;
			}
			if (Date.now() - started < 999) {
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function () {
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function () {
				if (lazySizesConfig.loadMode == 3) {
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function _() {
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if (window.MutationObserver) {
					new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if (/d$|^c/.test(document.readyState)) {
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if (lazysizes.elements.length) {
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	}();

	var autoSizer = function () {
		var autosizesElems;

		var sizeElement = rAFIt(function (elem, parent, event, width) {
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if (regPicture.test(parent.nodeName || '')) {
				sources = parent.getElementsByTagName('source');
				for (i = 0, len = sources.length; i < len; i++) {
					sources[i].setAttribute('sizes', width);
				}
			}

			if (!event.detail.dataAttr) {
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function getSizeElement(elem, dataAttr, width) {
			var event;
			var parent = elem.parentNode;

			if (parent) {
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

				if (!event.defaultPrevented) {
					width = event.detail.width;

					if (width && width !== elem._lazysizesWidth) {
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function updateElementsSizes() {
			var i;
			var len = autosizesElems.length;
			if (len) {
				i = 0;

				for (; i < len; i++) {
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function _() {
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	}();

	var init = function init() {
		if (!init.i) {
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF
	};

	return lazysizes;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

var StickyContact = function () {
  function StickyContact() {
    _classCallCheck(this, StickyContact);

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.handleScroll = this.handleScroll.bind(this);

    this.$stickyContact = $('#contact');
    this.$footerContact = $('#footer .contact-item');
  }

  _createClass(StickyContact, [{
    key: 'onResize',
    value: function onResize() {
      this.handleScroll();
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.stickyContact();
    }
  }, {
    key: 'stickyContact',
    value: function stickyContact() {
      $(window).on('scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var $body = $('body');
      var stickyTop = $(window).height() - this.$stickyContact.height();
      var scrollPosition = $(document).scrollTop() + stickyTop;
      var footerContactTop = this.$footerContact.offset().top;

      if (scrollPosition >= footerContactTop && !$body.hasClass('contact-stuck')) {
        $body.addClass('contact-stuck');
      } else if (scrollPosition < footerContactTop && $body.hasClass('contact-stuck')) {
        $body.removeClass('contact-stuck');
      }
    }
  }]);

  return StickyContact;
}();

exports.default = StickyContact;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

var Projects = function () {
  function Projects() {
    _classCallCheck(this, Projects);

    this.handleProjectListTitleClick = this.handleProjectListTitleClick.bind(this);
    this.handleProjectCloseOverlayClick = this.handleProjectCloseOverlayClick.bind(this);
    this.handleSiteTitleClick = this.handleSiteTitleClick.bind(this);
    this.stickTitle = this.stickTitle.bind(this);
    this.unstickTitle = this.unstickTitle.bind(this);
    this.stickGlobie = this.stickGlobie.bind(this);
    this.unstickGlobie = this.unstickGlobie.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);

    // Project Events
    this.openEvent = new Event('projectOpen');
    this.closeEvent = new Event('projectClose');

    // Elements
    this.$body = $('body');
    this.$headerSiteTitle = $('#header-site-title');
    this.$projectSiteTitle = $('#project-site-title');
    this.$footerGlobie = $('#footer svg.globie');
    this.$projectGlobie = $('#project svg.globie');

    $(window).resize(this.onResize);
    $(document).ready(this.onReady);
  }

  _createClass(Projects, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      this.bindProjectList();
      this.bindHomeClick();

      if (this.$body.hasClass('single-project')) {
        // If single project template:
        // Set first project active &
        // disable scrolling on home content
        $('.project-content').addClass('active');
        $('html').css('overflow', 'hidden');
      }
    }
  }, {
    key: 'bindProjectList',
    value: function bindProjectList() {
      $('.project-list-title a').on('click', this.handleProjectListTitleClick);
    }
  }, {
    key: 'handleProjectListTitleClick',
    value: function handleProjectListTitleClick(e) {
      e.preventDefault();

      this.getProject(e.target);
    }
  }, {
    key: 'getProject',
    value: function getProject(target) {
      var _this = this;

      var projectUrl = target.href;
      var projectId = target.dataset.id;

      if (!this.$body.hasClass('project-open')) {
        this.openProjectPanel();
      }

      $.ajax({
        type: 'GET',
        url: projectUrl,
        dataType: 'html',
        success: function success(data) {
          return _this.handleAjaxSuccess(data, projectUrl, projectId);
        }
      });
    }
  }, {
    key: 'handleAjaxSuccess',
    value: function handleAjaxSuccess(data, projectUrl, projectId) {
      var $parsed = $('<div>').append($.parseHTML(data));
      var project = $parsed.find('#project-' + projectId);
      var title = $parsed.find('title').text();

      if (this.$body.hasClass('project-loaded')) {
        $('#project-container').append(project);
      } else {
        $('#project-container').html(project);
        this.$body.addClass('project-loaded');
        $(project).addClass('active');
      }

      this.updateHistory(title, projectUrl);
    }
  }, {
    key: 'updateHistory',
    value: function updateHistory(title, url) {
      history.pushState(null, title, url);
      document.title = title;
    }
  }, {
    key: 'bindHomeClick',
    value: function bindHomeClick() {
      $('#project-close-overlay').on('click', this.handleProjectCloseOverlayClick);

      $('.site-title a').on('click', this.handleSiteTitleClick);
    }
  }, {
    key: 'handleProjectCloseOverlayClick',
    value: function handleProjectCloseOverlayClick() {
      this.closeProjectPanel();
      this.updateHistory(WP.siteTitle, WP.siteUrl);
    }
  }, {
    key: 'handleSiteTitleClick',
    value: function handleSiteTitleClick(e) {
      if ($('body').hasClass('project-open')) {
        e.preventDefault();
        this.closeProjectPanel();
        this.updateHistory(WP.siteTitle, WP.siteUrl);
      }
    }
  }, {
    key: 'openProjectPanel',
    value: function openProjectPanel() {
      // Trigger event on window
      window.dispatchEvent(this.openEvent);

      $('#project-wrapper').scrollTop(0);
      $('html').css('overflow', 'hidden');
      this.$body.addClass('project-open');
      this.titleSwapRequest = window.requestAnimationFrame(this.stickTitle);
      this.globieSwapRequest = window.requestAnimationFrame(this.stickGlobie);
    }
  }, {
    key: 'closeProjectPanel',
    value: function closeProjectPanel() {
      // Trigger event on window
      window.dispatchEvent(this.closeEvent);

      $('html').css('overflow', 'initial');
      this.$body.removeClass('project-open project-loaded');
      this.titleSwapRequest = window.requestAnimationFrame(this.unstickTitle);
      this.globieSwapRequest = window.requestAnimationFrame(this.unstickGlobie);
    }
  }, {
    key: 'stickTitle',
    value: function stickTitle() {
      var siteTitleLeft = this.$headerSiteTitle.offset().left;
      var panelTitleLeft = this.$projectSiteTitle.offset().left;

      if (panelTitleLeft <= siteTitleLeft) {
        window.cancelAnimationFrame(this.titleSwapRequest);
        this.$body.addClass('title-stuck');
      } else {
        this.titleSwapRequest = window.requestAnimationFrame(this.stickTitle);
      }
    }
  }, {
    key: 'unstickTitle',
    value: function unstickTitle() {
      var siteTitleLeft = this.$headerSiteTitle.offset().left;
      var panelTitleLeft = this.$projectSiteTitle.offset().left;

      if (panelTitleLeft >= siteTitleLeft) {
        window.cancelAnimationFrame(this.titleSwapRequest);
        this.$body.removeClass('title-stuck');
      } else {
        this.titleSwapRequest = window.requestAnimationFrame(this.unstickTitle);
      }
    }
  }, {
    key: 'stickGlobie',
    value: function stickGlobie() {
      var footerGlobieLeft = this.$footerGlobie.offset().left;
      var projectGlobieLeft = this.$projectGlobie.offset().left;

      if (projectGlobieLeft <= footerGlobieLeft) {
        window.cancelAnimationFrame(this.globieSwapRequest);
        this.$body.addClass('globie-stuck');
      } else {
        this.globieSwapRequest = window.requestAnimationFrame(this.stickGlobie);
      }
    }
  }, {
    key: 'unstickGlobie',
    value: function unstickGlobie() {
      var footerGlobieLeft = this.$footerGlobie.offset().left;
      var projectGlobieLeft = this.$projectGlobie.offset().left;

      if (projectGlobieLeft >= footerGlobieLeft) {
        window.cancelAnimationFrame(this.globieSwapRequest);
        this.$body.removeClass('globie-stuck');
      } else {
        this.globieSwapRequest = window.requestAnimationFrame(this.unstickGlobie);
      }
    }
  }]);

  return Projects;
}();

exports.default = Projects;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

var DropShadow = function () {
  function DropShadow() {
    _classCallCheck(this, DropShadow);

    this.mobileThreshold = 601;
    // Get the canvas
    this.canvas = document.getElementById("dropshadow");
    this.context = this.canvas.getContext("2d");

    // Define the image dimensions
    this.width = this.canvas.width = this.canvas.scrollWidth;
    this.height = this.canvas.height = this.canvas.scrollHeight;

    // Create "image"
    this.imagedata = this.context.createImageData(this.width, this.height);

    // Bind ready and resize
    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);
    $(window).resize(this.onResize);
    $(document).ready(this.onReady);

    // Bind other function
    this.animation = this.animation.bind(this);
    this.handleFrame = this.handleFrame.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    this.stopAnimation = this.stopAnimation.bind(this);

    // Bind animation to open/close project events
    $(window).on('projectOpen', this.startAnimation).on('projectClose', this.stopAnimation);

    if ($('body').hasClass('project-open')) {
      this.startAnimation();
    }
  }

  _createClass(DropShadow, [{
    key: "startAnimation",
    value: function startAnimation() {
      this.animating = true;;
      this.handleFrame(0);
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      var _this = this;

      // Timeout to wait till the pane is closed to stop the animation
      setTimeout(function () {
        return _this.animating = false;
      }, 700);
    }
  }, {
    key: "handleFrame",
    value: function handleFrame(frame) {
      if (this.animating) {
        // Request animation frames
        window.requestAnimationFrame(this.handleFrame);

        // Create the image
        this.animation(Math.floor(frame / 10));

        // Draw the image data to the canvas
        this.context.putImageData(this.imagedata, 0, 0);
      }
    }
  }, {
    key: "animation",
    value: function animation(offset) {
      // if( offset % 3 == 0) {
      // Loop over all of the pixels
      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          // Get the pixel index
          var pixelindex = (y * this.width + x) * 4;

          // Generate a xor pattern with some random noise
          var prob = 1.03 / this.width * x;

          prob = prob * prob; //* (offset * 0.001);

          var value = Math.random() >= prob;

          // Set the pixel data
          this.imagedata.data[pixelindex] = value ? 255 : 0; // Red
          this.imagedata.data[pixelindex + 1] = value ? 255 : 0; // Green
          this.imagedata.data[pixelindex + 2] = value ? 255 : 0; // Blue
          this.imagedata.data[pixelindex + 3] = value ? 0 : 255; // Alpha
        }
      }
      //}
    }
  }, {
    key: "onResize",
    value: function onResize() {
      // Define the image dimensions
      this.width = this.canvas.width = this.canvas.scrollWidth;
      this.height = this.canvas.height = this.canvas.scrollHeight;
      this.imagedata = this.context.createImageData(this.width, this.height);
    }
  }, {
    key: "onReady",
    value: function onReady() {}
  }]);

  return DropShadow;
}();

exports.default = DropShadow;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

var Globie = function () {
  function Globie() {
    _classCallCheck(this, Globie);

    // BINDINGS
    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.triggerFootTap = this.triggerFootTap.bind(this);
    this.runFootTap = this.runFootTap.bind(this);

    $(window).resize(this.onResize);

    $(document).ready(this.onReady);

    this.$globie = $('svg.globie');
    this.footFrame = 1;
    this.footTapRate = 60;
    this.bodyRotateRate = 30;
  }

  _createClass(Globie, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      this.triggerFootTap();

      this.bindScroll();
    }
  }, {
    key: 'bindScroll',
    value: function bindScroll() {
      $(window).on('scroll', this.handleScroll);
      $('#project-wrapper').on('scroll', this.handleScroll);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(event) {
      this.scrollTop = $(event.target).scrollTop();
      this.rotateBody();
    }
  }, {
    key: 'rotateBody',
    value: function rotateBody() {
      var scrollTop = this.scrollTop / this.bodyRotateRate;
      var frame = Math.floor(scrollTop % 24) + 1;

      this.$globie.find('g.show').removeClass('show');
      this.$globie.find('g._Body_' + frame + '_').addClass('show');
    }
  }, {
    key: 'triggerFootTap',
    value: function triggerFootTap() {
      setTimeout(this.runFootTap, this.footTapRate);
    }
  }, {
    key: 'runFootTap',
    value: function runFootTap() {
      window.requestAnimationFrame(this.triggerFootTap);
      this.tapFoot();
    }
  }, {
    key: 'tapFoot',
    value: function tapFoot() {
      this.$globie.find('path.Right-' + this.footFrame).removeClass('show');
      this.footFrame = this.footFrame === 8 ? 1 : this.footFrame + 1;
      this.$globie.find('path.Right-' + this.footFrame).addClass('show');
    }
  }]);

  return Globie;
}();

exports.default = Globie;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

var _snapsvgCjs = __webpack_require__(15);

var _snapsvgCjs2 = _interopRequireDefault(_snapsvgCjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(_snapsvgCjs2.default);

var Eyes = function () {
  function Eyes() {
    _classCallCheck(this, Eyes);

    // BINDINGS

    $(window).resize(this.onResize);

    $(document).ready(this.onReady);
  }

  _createClass(Eyes, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      // assign svg .globie as Snap object
      var globie = (0, _snapsvgCjs2.default)('.globie');
      // select #leftEye from globie object
      this.lefteye = globie.select('.EyeLeftFill');
      // draw left eyeball in globie object
      this.leftball = globie.ellipse(220, 150, 27, 40).attr({});
      // select #rightEye from globie object
      this.righteye = globie.select('.EyeRightFill');
      // draw right eyeball in globie object
      this.rightball = globie.ellipse(280, 150, 27, 40).attr({});

      // get length of left eye path
      this.lenl = _snapsvgCjs2.default.path.getTotalLength(this.lefteye);
      // get length of right eye path
      this.lenr = _snapsvgCjs2.default.path.getTotalLength(this.lefteye);
      // get bounding box of left eye path
      this.bbl = _snapsvgCjs2.default.path.getBBox(this.lefteye);
      // get bounding box of right eye path
      this.bbr = _snapsvgCjs2.default.path.getBBox(this.righteye);

      // find center point of left eye
      this.midl = {
        x: this.bbl.x + this.bbl.width / 2,
        y: this.bbl.y + this.bbl.height / 2
      };

      // find center point of right eye
      this.midr = {
        x: this.bbr.x + this.bbr.width / 2,
        y: this.bbr.y + this.bbr.height / 2
      };

      // Returns the (x,y) coordinate in user space which is distance units along the path
      this.lpal = _snapsvgCjs2.default.path.getPointAtLength(this.lefteye);
      // Returns the (x,y) coordinate in user space which is distance units along the path
      this.rpal = _snapsvgCjs2.default.path.getPointAtLength(this.righteye);

      this.bind();
    }
  }, {
    key: 'bind',
    value: function bind() {
      // mobile width check to be made does hover exist check
      if (window.innerWidth > 720) {
        // Eyeballs follow cursor
        $(document).mousemove(function (e) {
          this.moveEyes(e.pageX, e.pageY);
        }.bind(this));
      } else {
        if (window.DeviceOrientationEvent) {
          window.addEventListener('deviceorientation', function (e) {
            return this.onDeviceOrientationChange(e);
          }.bind(this), false);
        }
      }
    }
  }, {
    key: 'onDeviceOrientationChange',
    value: function onDeviceOrientationChange(event) {
      var x = (event.gamma + 90) / 180 * window.innerWidth;
      var y = (event.beta - 45 + 90) / 180 * window.innerHeight;

      this.moveEyes(x, y);
    }
  }, {
    key: 'moveEyes',
    value: function moveEyes(posX, posY) {
      var mX = posX - $('.globie:first-of-type').offset().left;
      var mY = posY - $('.globie:first-of-type').offset().top;

      var tl = _snapsvgCjs2.default.angle(this.midl.x, this.midl.y, mX, mY) / 360;
      var tr = _snapsvgCjs2.default.angle(this.midr.x, this.midr.y, mX, mY) / 360;

      var lpal = this.lefteye.getPointAtLength(tl * this.lenl % this.lenl);
      var lpalx = lpal.x;
      var lpaly = lpal.y;

      var rpal = this.righteye.getPointAtLength(tr * this.lenr % this.lenr);
      var rpalx = rpal.x;
      var rpaly = rpal.y;

      if (_snapsvgCjs2.default.path.isPointInside(this.lefteye, mX, mY)) {
        this.leftball.attr({
          cx: mX,
          cy: mY
        });
      } else {
        this.leftball.attr({
          cx: lpalx,
          cy: lpaly
        });
      }

      if (_snapsvgCjs2.default.path.isPointInside(this.righteye, mX, mY)) {
        this.rightball.attr({
          cx: mX,
          cy: mY
        });
      } else {
        this.rightball.attr({
          cx: rpalx,
          cy: rpaly
        });
      }
    }
  }]);

  return Eyes;
}();

exports.default = Eyes;

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Pollyfill for requestAnimationFrame and cancelAnimationFrame
 */
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
  return setTimeout(f, 1000 / 60);
};

window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (requestID) {
  clearTimeout(requestID);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__.p + "ead8daa303a24f922b76b6639107fa29.js";

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map