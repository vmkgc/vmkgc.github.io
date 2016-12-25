/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Polyfill
	 *      Object.keys
	 *      Array.prototype.isArray
	 *      String.prototype.trim
	 *
	 * @see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys
	 */
	if (!Object.keys) {
	    Object.keys = function () {
	        var hasOwnProperty = Object.prototype.hasOwnProperty,
	            hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
	            dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
	            dontEnumsLength = dontEnums.length;
	
	        return function (obj) {
	            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
	
	            var result = [];
	
	            for (var prop in obj) {
	                if (hasOwnProperty.call(obj, prop)) result.push(prop);
	            }
	
	            if (hasDontEnumBug) {
	                for (var i = 0; i < dontEnumsLength; i++) {
	                    if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
	                }
	            }
	            return result;
	        };
	    }();
	};
	
	if (!Array.isArray) {
	    Array.isArray = function (arg) {
	        return Object.prototype.toString.call(arg) === '[object Array]';
	    };
	}
	
	if (!String.prototype.trim) {
	    String.prototype.trim = function () {
	        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	    };
	}
	
	// ECMA-262 5판, 15.4.4.21항의 작성 과정
	// 참고: http://es5.github.io/#x15.4.4.21
	if (!Array.prototype.reduce) {
	    Array.prototype.reduce = function (callback /*, initialValue*/) {
	        'use strict';
	
	        if (this == null) {
	            throw new TypeError('Array.prototype.reduce called on null or undefined');
	        }
	        if (typeof callback !== 'function') {
	            throw new TypeError(callback + ' is not a function');
	        }
	        var t = Object(this),
	            len = t.length >>> 0,
	            k = 0,
	            value;
	        if (arguments.length == 2) {
	            value = arguments[1];
	        } else {
	            while (k < len && !(k in t)) {
	                k++;
	            }
	            if (k >= len) {
	                throw new TypeError('Reduce of empty array with no initial value');
	            }
	            value = t[k++];
	        }
	        for (; k < len; k++) {
	            if (k in t) {
	                value = callback(value, t[k], k, t);
	            }
	        }
	        return value;
	    };
	}
	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */
	
	/*global self, document, DOMException */
	
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	
	if ("document" in self) {
	
	    // Full polyfill for browsers with no classList support
	    // Including IE < Edge missing SVGElement.classList
	    if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
	
	        (function (view) {
	
	            "use strict";
	
	            if (!('Element' in view)) return;
	
	            var classListProp = "classList",
	                protoProp = "prototype",
	                elemCtrProto = view.Element[protoProp],
	                objCtr = Object,
	                strTrim = String[protoProp].trim || function () {
	                return this.replace(/^\s+|\s+$/g, "");
	            },
	                arrIndexOf = Array[protoProp].indexOf || function (item) {
	                var i = 0,
	                    len = this.length;
	                for (; i < len; i++) {
	                    if (i in this && this[i] === item) {
	                        return i;
	                    }
	                }
	                return -1;
	            }
	            // Vendors: please allow content code to instantiate DOMExceptions
	            ,
	                DOMEx = function DOMEx(type, message) {
	                this.name = type;
	                this.code = DOMException[type];
	                this.message = message;
	            },
	                checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
	                if (token === "") {
	                    throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
	                }
	                if (/\s/.test(token)) {
	                    throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
	                }
	                return arrIndexOf.call(classList, token);
	            },
	                ClassList = function ClassList(elem) {
	                var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
	                    classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
	                    i = 0,
	                    len = classes.length;
	                for (; i < len; i++) {
	                    this.push(classes[i]);
	                }
	                this._updateClassName = function () {
	                    elem.setAttribute("class", this.toString());
	                };
	            },
	                classListProto = ClassList[protoProp] = [],
	                classListGetter = function classListGetter() {
	                return new ClassList(this);
	            };
	            // Most DOMException implementations don't allow calling DOMException's toString()
	            // on non-DOMExceptions. Error's toString() is sufficient here.
	            DOMEx[protoProp] = Error[protoProp];
	            classListProto.item = function (i) {
	                return this[i] || null;
	            };
	            classListProto.contains = function (token) {
	                token += "";
	                return checkTokenAndGetIndex(this, token) !== -1;
	            };
	            classListProto.add = function () {
	                var tokens = arguments,
	                    i = 0,
	                    l = tokens.length,
	                    token,
	                    updated = false;
	                do {
	                    token = tokens[i] + "";
	                    if (checkTokenAndGetIndex(this, token) === -1) {
	                        this.push(token);
	                        updated = true;
	                    }
	                } while (++i < l);
	
	                if (updated) {
	                    this._updateClassName();
	                }
	            };
	            classListProto.remove = function () {
	                var tokens = arguments,
	                    i = 0,
	                    l = tokens.length,
	                    token,
	                    updated = false,
	                    index;
	                do {
	                    token = tokens[i] + "";
	                    index = checkTokenAndGetIndex(this, token);
	                    while (index !== -1) {
	                        this.splice(index, 1);
	                        updated = true;
	                        index = checkTokenAndGetIndex(this, token);
	                    }
	                } while (++i < l);
	
	                if (updated) {
	                    this._updateClassName();
	                }
	            };
	            classListProto.toggle = function (token, force) {
	                token += "";
	
	                var result = this.contains(token),
	                    method = result ? force !== true && "remove" : force !== false && "add";
	
	                if (method) {
	                    this[method](token);
	                }
	
	                if (force === true || force === false) {
	                    return force;
	                } else {
	                    return !result;
	                }
	            };
	            classListProto.toString = function () {
	                return this.join(" ");
	            };
	
	            if (objCtr.defineProperty) {
	                var classListPropDesc = {
	                    get: classListGetter,
	                    enumerable: true,
	                    configurable: true
	                };
	                try {
	                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	                } catch (ex) {
	                    // IE 8 doesn't support enumerable:true
	                    if (ex.number === -0x7FF5EC54) {
	                        classListPropDesc.enumerable = false;
	                        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	                    }
	                }
	            } else if (objCtr[protoProp].__defineGetter__) {
	                elemCtrProto.__defineGetter__(classListProp, classListGetter);
	            }
	        })(self);
	    } else {
	        // There is full or partial native classList support, so just check if we need
	        // to normalize the add/remove and toggle APIs.
	
	        (function () {
	            "use strict";
	
	            var testElement = document.createElement("_");
	
	            testElement.classList.add("c1", "c2");
	
	            // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	            // classList.remove exist but support only one argument at a time.
	            if (!testElement.classList.contains("c2")) {
	                var createMethod = function createMethod(method) {
	                    var original = DOMTokenList.prototype[method];
	
	                    DOMTokenList.prototype[method] = function (token) {
	                        var i,
	                            len = arguments.length;
	
	                        for (i = 0; i < len; i++) {
	                            token = arguments[i];
	                            original.call(this, token);
	                        }
	                    };
	                };
	                createMethod('add');
	                createMethod('remove');
	            }
	
	            testElement.classList.toggle("c3", false);
	
	            // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	            // support the second argument.
	            if (testElement.classList.contains("c3")) {
	                var _toggle = DOMTokenList.prototype.toggle;
	
	                DOMTokenList.prototype.toggle = function (token, force) {
	                    if (1 in arguments && !this.contains(token) === !force) {
	                        return force;
	                    } else {
	                        return _toggle.call(this, token);
	                    }
	                };
	            }
	
	            testElement = null;
	        })();
	    }
	}
	
	/*! Overthrow v.0.1.0. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
	(function (w, undefined) {
	
	    var doc = w.document,
	        docElem = doc.documentElement,
	        classtext = "overthrow-enabled",
	
	
	    // Touch events are used in the polyfill, and thus are a prerequisite
	    canBeFilledWithPoly = "ontouchmove" in doc,
	
	
	    // The following attempts to determine whether the browser has native overflow support
	    // so we can enable it but not polyfill
	    overflowProbablyAlreadyWorks =
	    // Features-first. iOS5 overflow scrolling property check - no UA needed here. thanks Apple :)
	    "WebkitOverflowScrolling" in docElem.style ||
	    // Touch events aren't supported and screen width is greater than X
	    // ...basically, this is a loose "desktop browser" check. 
	    // It may wrongly opt-in very large tablets with no touch support.
	    !canBeFilledWithPoly && w.screen.width > 1200 ||
	    // Hang on to your hats.
	    // Whitelist some popular, overflow-supporting mobile browsers for now and the future
	    // These browsers are known to get overlow support right, but give us no way of detecting it.
	    function () {
	        var ua = w.navigator.userAgent,
	
	        // Webkit crosses platforms, and the browsers on our list run at least version 534
	        webkit = ua.match(/AppleWebKit\/([0-9]+)/),
	            wkversion = webkit && webkit[1],
	            wkLte534 = webkit && wkversion >= 534;
	
	        return (
	            /* Android 3+ with webkit gte 534
	            ~: Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13 */
	            ua.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && wkLte534 ||
	            /* Blackberry 7+ with webkit gte 534
	            ~: Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0 Mobile Safari/534.11+ */
	            ua.match(/ Version\/([0-9]+)/) && RegExp.$1 >= 0 && w.blackberry && wkLte534 ||
	            /* Blackberry Playbook with webkit gte 534
	            ~: Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+ */
	            ua.indexOf(/PlayBook/) > -1 && RegExp.$1 >= 0 && wkLte534 ||
	            /* Firefox Mobile (Fennec) 4 and up
	            ~: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:2.1.1) Gecko/ Firefox/4.0.2pre Fennec/4.0. */
	            ua.match(/Fennec\/([0-9]+)/) && RegExp.$1 >= 4 ||
	            /* WebOS 3 and up (TouchPad too)
	            ~: Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.48 Safari/534.6 TouchPad/1.0 */
	            ua.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && wkLte534 ||
	            /* Nokia Browser N8
	            ~: Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.0 Mobile Safari/533.4 3gpp-gba 
	            ~: Note: the N9 doesn't have native overflow with one-finger touch. wtf */
	            ua.match(/NokiaBrowser\/([0-9\.]+)/) && parseFloat(RegExp.$1) === 7.3 && webkit && wkversion >= 533
	        );
	    }(),
	
	
	    // Easing can use any of Robert Penner's equations (http://www.robertpenner.com/easing_terms_of_use.html). By default, overthrow includes ease-out-cubic
	    // arguments: t = current iteration, b = initial value, c = end value, d = total iterations
	    // use w.overthrow.easing to provide a custom function externally, or pass an easing function as a callback to the toss method
	    defaultEasing = function defaultEasing(t, b, c, d) {
	        return c * ((t = t / d - 1) * t * t + 1) + b;
	    },
	        enabled = false,
	
	
	    // Keeper of intervals
	    timeKeeper,
	
	
	    /* toss scrolls and element with easing
	     
	    // elem is the element to scroll
	    // options hash:
	        * left is the desired horizontal scroll. Default is "+0". For relative distances, pass a string with "+" or "-" in front.
	        * top is the desired vertical scroll. Default is "+0". For relative distances, pass a string with "+" or "-" in front.
	        * duration is the number of milliseconds the throw will take. Default is 100.
	        * easing is an optional custom easing function. Default is w.overthrow.easing. Must follow the easing function signature 
	    */
	    toss = function toss(elem, options) {
	        var i = 0,
	            sLeft = elem.scrollLeft,
	            sTop = elem.scrollTop,
	
	        // Toss defaults
	        o = {
	            top: "+0",
	            left: "+0",
	            duration: 100,
	            easing: w.overthrow.easing
	        },
	            endLeft,
	            endTop;
	
	        // Mixin based on predefined defaults
	        if (options) {
	            for (var j in o) {
	                if (options[j] !== undefined) {
	                    o[j] = options[j];
	                }
	            }
	        }
	
	        // Convert relative values to ints
	        // First the left val
	        if (typeof o.left === "string") {
	            o.left = parseFloat(o.left);
	            endLeft = o.left + sLeft;
	        } else {
	            endLeft = o.left;
	            o.left = o.left - sLeft;
	        }
	        // Then the top val
	        if (typeof o.top === "string") {
	            o.top = parseFloat(o.top);
	            endTop = o.top + sTop;
	        } else {
	            endTop = o.top;
	            o.top = o.top - sTop;
	        }
	
	        timeKeeper = setInterval(function () {
	            if (i++ < o.duration) {
	                elem.scrollLeft = o.easing(i, sLeft, o.left, o.duration);
	                elem.scrollTop = o.easing(i, sTop, o.top, o.duration);
	            } else {
	                if (endLeft !== elem.scrollLeft) {
	                    elem.scrollLeft = endLeft;
	                }
	                if (endTop !== elem.scrollTop) {
	                    elem.scrollTop = endTop;
	                }
	                intercept();
	            }
	        }, 1);
	
	        // Return the values, post-mixin, with end values specified
	        return { top: endTop, left: endLeft, duration: o.duration, easing: o.easing };
	    },
	
	
	    // find closest overthrow (elem or a parent)
	    closest = function closest(target, ascend) {
	        return !ascend && target.className && target.className.indexOf("overthrow") > -1 && target || closest(target.parentNode);
	    },
	
	
	    // Intercept any throw in progress
	    intercept = function intercept() {
	        clearInterval(timeKeeper);
	    },
	
	
	    // Enable and potentially polyfill overflow
	    enable = function enable() {
	
	        // If it's on, 
	        if (enabled) {
	            return;
	        }
	        // It's on.
	        enabled = true;
	
	        // If overflowProbablyAlreadyWorks or at least the element canBeFilledWithPoly, add a class to cue CSS that assumes overflow scrolling will work (setting height on elements and such)
	        if (overflowProbablyAlreadyWorks || canBeFilledWithPoly) {
	            docElem.className += " " + classtext;
	        }
	
	        // Destroy everything later. If you want to.
	        w.overthrow.forget = function () {
	            // Strip the class name from docElem
	            docElem.className = docElem.className.replace(classtext, "");
	            // Remove touch binding (check for method support since this part isn't qualified by touch support like the rest)
	            if (doc.removeEventListener) {
	                doc.removeEventListener("touchstart", start, false);
	            }
	            // reset easing to default
	            w.overthrow.easing = defaultEasing;
	
	            // Let 'em know
	            enabled = false;
	        };
	
	        // If overflowProbablyAlreadyWorks or it doesn't look like the browser canBeFilledWithPoly, our job is done here. Exit viewport left.
	        if (overflowProbablyAlreadyWorks || !canBeFilledWithPoly) {
	            return;
	        }
	
	        // Fill 'er up!
	        // From here down, all logic is associated with touch scroll handling
	        // elem references the overthrow element in use
	        var elem,
	
	
	        // The last several Y values are kept here
	        lastTops = [],
	
	
	        // The last several X values are kept here
	        lastLefts = [],
	
	
	        // lastDown will be true if the last scroll direction was down, false if it was up
	        lastDown,
	
	
	        // lastRight will be true if the last scroll direction was right, false if it was left
	        lastRight,
	
	
	        // For a new gesture, or change in direction, reset the values from last scroll
	        resetVertTracking = function resetVertTracking() {
	            lastTops = [];
	            lastDown = null;
	        },
	            resetHorTracking = function resetHorTracking() {
	            lastLefts = [];
	            lastRight = null;
	        },
	
	
	        // After releasing touchend, throw the overthrow element, depending on momentum
	        finishScroll = function finishScroll() {
	            // Come up with a distance and duration based on how 
	            // Multipliers are tweaked to a comfortable balance across platforms
	            var top = (lastTops[0] - lastTops[lastTops.length - 1]) * 8,
	                left = (lastLefts[0] - lastLefts[lastLefts.length - 1]) * 8,
	                duration = Math.max(Math.abs(left), Math.abs(top)) / 8;
	
	            // Make top and left relative-style strings (positive vals need "+" prefix)
	            top = (top > 0 ? "+" : "") + top;
	            left = (left > 0 ? "+" : "") + left;
	
	            // Make sure there's a significant amount of throw involved, otherwise, just stay still
	            if (!isNaN(duration) && duration > 0 && (Math.abs(left) > 80 || Math.abs(top) > 80)) {
	                toss(elem, { left: left, top: top, duration: duration });
	            }
	        },
	
	
	        // On webkit, touch events hardly trickle through textareas and inputs
	        // Disabling CSS pointer events makes sure they do, but it also makes the controls innaccessible
	        // Toggling pointer events at the right moments seems to do the trick
	        // Thanks Thomas Bachem http://stackoverflow.com/a/5798681 for the following
	        inputs,
	            setPointers = function setPointers(val) {
	            inputs = elem.querySelectorAll("textarea, input");
	            for (var i = 0, il = inputs.length; i < il; i++) {
	                inputs[i].style.pointerEvents = val;
	            }
	        },
	
	
	        // For nested overthrows, changeScrollTarget restarts a touch event cycle on a parent or child overthrow
	        changeScrollTarget = function changeScrollTarget(startEvent, ascend) {
	            if (doc.createEvent) {
	                var newTarget = (!ascend || ascend === undefined) && elem.parentNode || elem.touchchild || elem,
	                    tEnd;
	
	                if (newTarget !== elem) {
	                    tEnd = doc.createEvent("HTMLEvents");
	                    tEnd.initEvent("touchend", true, true);
	                    elem.dispatchEvent(tEnd);
	                    newTarget.touchchild = elem;
	                    elem = newTarget;
	                    newTarget.dispatchEvent(startEvent);
	                }
	            }
	        },
	
	
	        // Touchstart handler
	        // On touchstart, touchmove and touchend are freshly bound, and all three share a bunch of vars set by touchstart
	        // Touchend unbinds them again, until next time
	        start = function start(e) {
	
	            // Stop any throw in progress
	            intercept();
	
	            // Reset the distance and direction tracking
	            resetVertTracking();
	            resetHorTracking();
	
	            elem = closest(e.target);
	
	            if (!elem || elem === docElem || e.touches.length > 1) {
	                return;
	            }
	
	            setPointers("none");
	            var touchStartE = e,
	                scrollT = elem.scrollTop,
	                scrollL = elem.scrollLeft,
	                height = elem.offsetHeight,
	                width = elem.offsetWidth,
	                startY = e.touches[0].pageY,
	                startX = e.touches[0].pageX,
	                scrollHeight = elem.scrollHeight,
	                scrollWidth = elem.scrollWidth,
	
	
	            // Touchmove handler
	            move = function move(e) {
	
	                var ty = scrollT + startY - e.touches[0].pageY,
	                    tx = scrollL + startX - e.touches[0].pageX,
	                    down = ty >= (lastTops.length ? lastTops[0] : 0),
	                    right = tx >= (lastLefts.length ? lastLefts[0] : 0);
	
	                // If there's room to scroll the current container, prevent the default window scroll
	                if (ty > 0 && ty < scrollHeight - height || tx > 0 && tx < scrollWidth - width) {
	                    e.preventDefault();
	                }
	                // This bubbling is dumb. Needs a rethink.
	                else {
	                        changeScrollTarget(touchStartE);
	                    }
	
	                // If down and lastDown are inequal, the y scroll has changed direction. Reset tracking.
	                if (lastDown && down !== lastDown) {
	                    resetVertTracking();
	                }
	
	                // If right and lastRight are inequal, the x scroll has changed direction. Reset tracking.
	                if (lastRight && right !== lastRight) {
	                    resetHorTracking();
	                }
	
	                // remember the last direction in which we were headed
	                lastDown = down;
	                lastRight = right;
	
	                // set the container's scroll
	                elem.scrollTop = ty;
	                elem.scrollLeft = tx;
	
	                lastTops.unshift(ty);
	                lastLefts.unshift(tx);
	
	                if (lastTops.length > 3) {
	                    lastTops.pop();
	                }
	                if (lastLefts.length > 3) {
	                    lastLefts.pop();
	                }
	            },
	
	
	            // Touchend handler
	            end = function end(e) {
	                // Apply momentum based easing for a graceful finish
	                finishScroll();
	                // Bring the pointers back
	                setPointers("auto");
	                setTimeout(function () {
	                    setPointers("none");
	                }, 450);
	                elem.removeEventListener("touchmove", move, false);
	                elem.removeEventListener("touchend", end, false);
	            };
	
	            elem.addEventListener("touchmove", move, false);
	            elem.addEventListener("touchend", end, false);
	        };
	
	        // Bind to touch, handle move and end within
	        doc.addEventListener("touchstart", start, false);
	    };
	
	    // Expose overthrow API
	    w.overthrow = {
	        set: enable,
	        forget: function forget() {},
	        easing: defaultEasing,
	        toss: toss,
	        intercept: intercept,
	        closest: closest,
	        support: overflowProbablyAlreadyWorks ? "native" : canBeFilledWithPoly && "polyfilled" || "none"
	    };
	
	    // Auto-init
	    enable();
	})(window);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODIwOWVlMzE4YmJjZDYyMDRmZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2pzL3BvbHlmaWxsLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc0RvbnRFbnVtQnVnIiwidG9TdHJpbmciLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImRvbnRFbnVtcyIsImRvbnRFbnVtc0xlbmd0aCIsImxlbmd0aCIsIm9iaiIsIlR5cGVFcnJvciIsInJlc3VsdCIsInByb3AiLCJjYWxsIiwicHVzaCIsImkiLCJBcnJheSIsImlzQXJyYXkiLCJhcmciLCJTdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsInJlZHVjZSIsImNhbGxiYWNrIiwidCIsImxlbiIsImsiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsInNlbGYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJ2aWV3IiwiY2xhc3NMaXN0UHJvcCIsInByb3RvUHJvcCIsImVsZW1DdHJQcm90byIsIkVsZW1lbnQiLCJvYmpDdHIiLCJzdHJUcmltIiwiYXJySW5kZXhPZiIsImluZGV4T2YiLCJpdGVtIiwiRE9NRXgiLCJ0eXBlIiwibWVzc2FnZSIsIm5hbWUiLCJjb2RlIiwiRE9NRXhjZXB0aW9uIiwiY2hlY2tUb2tlbkFuZEdldEluZGV4IiwiY2xhc3NMaXN0IiwidG9rZW4iLCJ0ZXN0IiwiQ2xhc3NMaXN0IiwiZWxlbSIsInRyaW1tZWRDbGFzc2VzIiwiZ2V0QXR0cmlidXRlIiwiY2xhc3NlcyIsInNwbGl0IiwiX3VwZGF0ZUNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdFByb3RvIiwiY2xhc3NMaXN0R2V0dGVyIiwiRXJyb3IiLCJjb250YWlucyIsImFkZCIsInRva2VucyIsImwiLCJ1cGRhdGVkIiwicmVtb3ZlIiwiaW5kZXgiLCJzcGxpY2UiLCJ0b2dnbGUiLCJmb3JjZSIsIm1ldGhvZCIsImpvaW4iLCJkZWZpbmVQcm9wZXJ0eSIsImNsYXNzTGlzdFByb3BEZXNjIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImV4IiwibnVtYmVyIiwiX19kZWZpbmVHZXR0ZXJfXyIsInRlc3RFbGVtZW50IiwiY3JlYXRlTWV0aG9kIiwib3JpZ2luYWwiLCJET01Ub2tlbkxpc3QiLCJfdG9nZ2xlIiwidyIsInVuZGVmaW5lZCIsImRvYyIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc3RleHQiLCJjYW5CZUZpbGxlZFdpdGhQb2x5Iiwib3ZlcmZsb3dQcm9iYWJseUFscmVhZHlXb3JrcyIsInN0eWxlIiwic2NyZWVuIiwid2lkdGgiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIndlYmtpdCIsIm1hdGNoIiwid2t2ZXJzaW9uIiwid2tMdGU1MzQiLCJSZWdFeHAiLCIkMSIsImJsYWNrYmVycnkiLCJwYXJzZUZsb2F0IiwiZGVmYXVsdEVhc2luZyIsImIiLCJjIiwiZCIsImVuYWJsZWQiLCJ0aW1lS2VlcGVyIiwidG9zcyIsIm9wdGlvbnMiLCJzTGVmdCIsInNjcm9sbExlZnQiLCJzVG9wIiwic2Nyb2xsVG9wIiwibyIsInRvcCIsImxlZnQiLCJkdXJhdGlvbiIsImVhc2luZyIsIm92ZXJ0aHJvdyIsImVuZExlZnQiLCJlbmRUb3AiLCJqIiwic2V0SW50ZXJ2YWwiLCJpbnRlcmNlcHQiLCJjbG9zZXN0IiwidGFyZ2V0IiwiYXNjZW5kIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImNsZWFySW50ZXJ2YWwiLCJlbmFibGUiLCJmb3JnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhcnQiLCJsYXN0VG9wcyIsImxhc3RMZWZ0cyIsImxhc3REb3duIiwibGFzdFJpZ2h0IiwicmVzZXRWZXJ0VHJhY2tpbmciLCJyZXNldEhvclRyYWNraW5nIiwiZmluaXNoU2Nyb2xsIiwiTWF0aCIsIm1heCIsImFicyIsImlzTmFOIiwiaW5wdXRzIiwic2V0UG9pbnRlcnMiLCJ2YWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaWwiLCJwb2ludGVyRXZlbnRzIiwiY2hhbmdlU2Nyb2xsVGFyZ2V0Iiwic3RhcnRFdmVudCIsImNyZWF0ZUV2ZW50IiwibmV3VGFyZ2V0IiwidG91Y2hjaGlsZCIsInRFbmQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZSIsInRvdWNoZXMiLCJ0b3VjaFN0YXJ0RSIsInNjcm9sbFQiLCJzY3JvbGxMIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJzdGFydFkiLCJwYWdlWSIsInN0YXJ0WCIsInBhZ2VYIiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJtb3ZlIiwidHkiLCJ0eCIsImRvd24iLCJyaWdodCIsInByZXZlbnREZWZhdWx0IiwidW5zaGlmdCIsInBvcCIsImVuZCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0Iiwic3VwcG9ydCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7OztBQVFBLEtBQUksQ0FBQ0EsT0FBT0MsSUFBWixFQUFrQjtBQUNoQkQsWUFBT0MsSUFBUCxHQUFlLFlBQVk7QUFDekIsYUFBSUMsaUJBQWlCRixPQUFPRyxTQUFQLENBQWlCRCxjQUF0QztBQUFBLGFBQ0lFLGlCQUFpQixDQUFFLEVBQUNDLFVBQVUsSUFBWCxFQUFELENBQW1CQyxvQkFBbkIsQ0FBd0MsVUFBeEMsQ0FEdEI7QUFBQSxhQUVJQyxZQUFZLENBQ1YsVUFEVSxFQUVWLGdCQUZVLEVBR1YsU0FIVSxFQUlWLGdCQUpVLEVBS1YsZUFMVSxFQU1WLHNC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QUFFdUMsU0FBRixHQUFjO0FBQ1ZrRSxjQUFLdEQsTUFESztBQUVWQyxpQkFBUSxrQkFBVSxDQUFFLENBRlY7QUFHVmQsaUJBQVFoQixhQUhFO0FBSVZNLGVBQU1BLElBSkk7QUFLVmdCLG9CQUFXQSxTQUxEO0FBTVZDLGtCQUFTQSxPQU5DO0FBT1Y2RCxrQkFBU25HLCtCQUErQixRQUEvQixHQUEwQ0QsdUJBQXVCLFlBQXZCLElBQXVDO0FBUGhGLE1BQWQ7O0FBVUE7QUFDQTZDO0FBRUgsRUE1V0QsRUE0V0l3RCxNQTVXSixFIiwiZmlsZSI6InBvbHlmaWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgyMDllZTMxOGJiY2Q2MjA0ZmQ0IiwiLyoqXG4gKiBQb2x5ZmlsbFxuICogICAgICBPYmplY3Qua2V5c1xuICogICAgICBBcnJheS5wcm90b3R5cGUuaXNBcnJheVxuICogICAgICBTdHJpbmcucHJvdG90eXBlLnRyaW1cbiAqXG4gKiBAc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9rZXlzXG4gKi9cbmlmICghT2JqZWN0LmtleXMpIHtcbiAgT2JqZWN0LmtleXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgIGhhc0RvbnRFbnVtQnVnID0gISh7dG9TdHJpbmc6IG51bGx9KS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKSxcbiAgICAgICAgZG9udEVudW1zID0gW1xuICAgICAgICAgICd0b1N0cmluZycsXG4gICAgICAgICAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgICAgICAgICAndmFsdWVPZicsXG4gICAgICAgICAgJ2hhc093blByb3BlcnR5JyxcbiAgICAgICAgICAnaXNQcm90b3R5cGVPZicsXG4gICAgICAgICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgICAgICAgICAnY29uc3RydWN0b3InXG4gICAgICAgIF0sXG4gICAgICAgIGRvbnRFbnVtc0xlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7XG4gXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nIHx8IG9iaiA9PT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcbiBcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiBcbiAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHJlc3VsdC5wdXNoKHByb3ApO1xuICAgICAgfVxuIFxuICAgICAgaWYgKGhhc0RvbnRFbnVtQnVnKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGRvbnRFbnVtc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBkb250RW51bXNbaV0pKSByZXN1bHQucHVzaChkb250RW51bXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSkoKVxufTtcblxuaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG59XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS50cmltKSB7XG4gIFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuICB9O1xufVxuXG4vLyBFQ01BLTI2MiA17YyQLCAxNS40LjQuMjHtla3snZgg7J6R7ISxIOqzvOyglVxuLy8g7LC46rOgOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjQuNC4yMVxuaWYgKCFBcnJheS5wcm90b3R5cGUucmVkdWNlKSB7XG4gIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbihjYWxsYmFjayAvKiwgaW5pdGlhbFZhbHVlKi8pIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLnJlZHVjZSBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHQgPSBPYmplY3QodGhpcyksIGxlbiA9IHQubGVuZ3RoID4+PiAwLCBrID0gMCwgdmFsdWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMikge1xuICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChrIDwgbGVuICYmICEoayBpbiB0KSkge1xuICAgICAgICBrKys7XG4gICAgICB9XG4gICAgICBpZiAoayA+PSBsZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB0W2srK107XG4gICAgfVxuICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgIGlmIChrIGluIHQpIHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgdFtrXSwgaywgdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxuLypcbiAqIGNsYXNzTGlzdC5qczogQ3Jvc3MtYnJvd3NlciBmdWxsIGVsZW1lbnQuY2xhc3NMaXN0IGltcGxlbWVudGF0aW9uLlxuICogMS4xLjIwMTUwMzEyXG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogRGVkaWNhdGVkIHRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmLCBkb2N1bWVudCwgRE9NRXhjZXB0aW9uICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvY2xhc3NMaXN0LmpzICovXG5cbmlmIChcImRvY3VtZW50XCIgaW4gc2VsZikge1xuXG4vLyBGdWxsIHBvbHlmaWxsIGZvciBicm93c2VycyB3aXRoIG5vIGNsYXNzTGlzdCBzdXBwb3J0XG4vLyBJbmNsdWRpbmcgSUUgPCBFZGdlIG1pc3NpbmcgU1ZHRWxlbWVudC5jbGFzc0xpc3RcbmlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikpIFxuICAgIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIikpKSB7XG5cbihmdW5jdGlvbiAodmlldykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCEoJ0VsZW1lbnQnIGluIHZpZXcpKSByZXR1cm47XG5cbnZhclxuICAgICAgY2xhc3NMaXN0UHJvcCA9IFwiY2xhc3NMaXN0XCJcbiAgICAsIHByb3RvUHJvcCA9IFwicHJvdG90eXBlXCJcbiAgICAsIGVsZW1DdHJQcm90byA9IHZpZXcuRWxlbWVudFtwcm90b1Byb3BdXG4gICAgLCBvYmpDdHIgPSBPYmplY3RcbiAgICAsIHN0clRyaW0gPSBTdHJpbmdbcHJvdG9Qcm9wXS50cmltIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG4gICAgfVxuICAgICwgYXJySW5kZXhPZiA9IEFycmF5W3Byb3RvUHJvcF0uaW5kZXhPZiB8fCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXJcbiAgICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgICwgbGVuID0gdGhpcy5sZW5ndGhcbiAgICAgICAgO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIC8vIFZlbmRvcnM6IHBsZWFzZSBhbGxvdyBjb250ZW50IGNvZGUgdG8gaW5zdGFudGlhdGUgRE9NRXhjZXB0aW9uc1xuICAgICwgRE9NRXggPSBmdW5jdGlvbiAodHlwZSwgbWVzc2FnZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuICAgICwgY2hlY2tUb2tlbkFuZEdldEluZGV4ID0gZnVuY3Rpb24gKGNsYXNzTGlzdCwgdG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRE9NRXgoXG4gICAgICAgICAgICAgICAgICBcIlNZTlRBWF9FUlJcIlxuICAgICAgICAgICAgICAgICwgXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1xccy8udGVzdCh0b2tlbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBET01FeChcbiAgICAgICAgICAgICAgICAgIFwiSU5WQUxJRF9DSEFSQUNURVJfRVJSXCJcbiAgICAgICAgICAgICAgICAsIFwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyckluZGV4T2YuY2FsbChjbGFzc0xpc3QsIHRva2VuKTtcbiAgICB9XG4gICAgLCBDbGFzc0xpc3QgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICB2YXJcbiAgICAgICAgICAgICAgdHJpbW1lZENsYXNzZXMgPSBzdHJUcmltLmNhbGwoZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKVxuICAgICAgICAgICAgLCBjbGFzc2VzID0gdHJpbW1lZENsYXNzZXMgPyB0cmltbWVkQ2xhc3Nlcy5zcGxpdCgvXFxzKy8pIDogW11cbiAgICAgICAgICAgICwgaSA9IDBcbiAgICAgICAgICAgICwgbGVuID0gY2xhc3Nlcy5sZW5ndGhcbiAgICAgICAgO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goY2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAsIGNsYXNzTGlzdFByb3RvID0gQ2xhc3NMaXN0W3Byb3RvUHJvcF0gPSBbXVxuICAgICwgY2xhc3NMaXN0R2V0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IENsYXNzTGlzdCh0aGlzKTtcbiAgICB9XG47XG4vLyBNb3N0IERPTUV4Y2VwdGlvbiBpbXBsZW1lbnRhdGlvbnMgZG9uJ3QgYWxsb3cgY2FsbGluZyBET01FeGNlcHRpb24ncyB0b1N0cmluZygpXG4vLyBvbiBub24tRE9NRXhjZXB0aW9ucy4gRXJyb3IncyB0b1N0cmluZygpIGlzIHN1ZmZpY2llbnQgaGVyZS5cbkRPTUV4W3Byb3RvUHJvcF0gPSBFcnJvcltwcm90b1Byb3BdO1xuY2xhc3NMaXN0UHJvdG8uaXRlbSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn07XG5jbGFzc0xpc3RQcm90by5jb250YWlucyA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHRva2VuICs9IFwiXCI7XG4gICAgcmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xufTtcbmNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXJcbiAgICAgICAgICB0b2tlbnMgPSBhcmd1bWVudHNcbiAgICAgICAgLCBpID0gMFxuICAgICAgICAsIGwgPSB0b2tlbnMubGVuZ3RoXG4gICAgICAgICwgdG9rZW5cbiAgICAgICAgLCB1cGRhdGVkID0gZmFsc2VcbiAgICA7XG4gICAgZG8ge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG4gICAgICAgIGlmIChjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlICgrK2kgPCBsKTtcblxuICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuICAgIH1cbn07XG5jbGFzc0xpc3RQcm90by5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyXG4gICAgICAgICAgdG9rZW5zID0gYXJndW1lbnRzXG4gICAgICAgICwgaSA9IDBcbiAgICAgICAgLCBsID0gdG9rZW5zLmxlbmd0aFxuICAgICAgICAsIHRva2VuXG4gICAgICAgICwgdXBkYXRlZCA9IGZhbHNlXG4gICAgICAgICwgaW5kZXhcbiAgICA7XG4gICAgZG8ge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG4gICAgICAgIGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcbiAgICAgICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICBpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKCsraSA8IGwpO1xuXG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG4gICAgfVxufTtcbmNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcbiAgICB0b2tlbiArPSBcIlwiO1xuXG4gICAgdmFyXG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbilcbiAgICAgICAgLCBtZXRob2QgPSByZXN1bHQgP1xuICAgICAgICAgICAgZm9yY2UgIT09IHRydWUgJiYgXCJyZW1vdmVcIlxuICAgICAgICA6XG4gICAgICAgICAgICBmb3JjZSAhPT0gZmFsc2UgJiYgXCJhZGRcIlxuICAgIDtcblxuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgdGhpc1ttZXRob2RdKHRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAoZm9yY2UgPT09IHRydWUgfHwgZm9yY2UgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gIXJlc3VsdDtcbiAgICB9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuam9pbihcIiBcIik7XG59O1xuXG5pZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XG4gICAgdmFyIGNsYXNzTGlzdFByb3BEZXNjID0ge1xuICAgICAgICAgIGdldDogY2xhc3NMaXN0R2V0dGVyXG4gICAgICAgICwgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgICAgb2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuICAgIH0gY2F0Y2ggKGV4KSB7IC8vIElFIDggZG9lc24ndCBzdXBwb3J0IGVudW1lcmFibGU6dHJ1ZVxuICAgICAgICBpZiAoZXgubnVtYmVyID09PSAtMHg3RkY1RUM1NCkge1xuICAgICAgICAgICAgY2xhc3NMaXN0UHJvcERlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgb2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuICAgICAgICB9XG4gICAgfVxufSBlbHNlIGlmIChvYmpDdHJbcHJvdG9Qcm9wXS5fX2RlZmluZUdldHRlcl9fKSB7XG4gICAgZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcbn1cblxufShzZWxmKSk7XG5cbn0gZWxzZSB7XG4vLyBUaGVyZSBpcyBmdWxsIG9yIHBhcnRpYWwgbmF0aXZlIGNsYXNzTGlzdCBzdXBwb3J0LCBzbyBqdXN0IGNoZWNrIGlmIHdlIG5lZWRcbi8vIHRvIG5vcm1hbGl6ZSB0aGUgYWRkL3JlbW92ZSBhbmQgdG9nZ2xlIEFQSXMuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtcblxuICAgIHRlc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjMVwiLCBcImMyXCIpO1xuXG4gICAgLy8gUG9seWZpbGwgZm9yIElFIDEwLzExIGFuZCBGaXJlZm94IDwyNiwgd2hlcmUgY2xhc3NMaXN0LmFkZCBhbmRcbiAgICAvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cbiAgICBpZiAoIXRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKSB7XG4gICAgICAgIHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9IERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXTtcblxuICAgICAgICAgICAgRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY3JlYXRlTWV0aG9kKCdhZGQnKTtcbiAgICAgICAgY3JlYXRlTWV0aG9kKCdyZW1vdmUnKTtcbiAgICB9XG5cbiAgICB0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwgZmFsc2UpO1xuXG4gICAgLy8gUG9seWZpbGwgZm9yIElFIDEwIGFuZCBGaXJlZm94IDwyNCwgd2hlcmUgY2xhc3NMaXN0LnRvZ2dsZSBkb2VzIG5vdFxuICAgIC8vIHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAgICBpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpIHtcbiAgICAgICAgdmFyIF90b2dnbGUgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZTtcblxuICAgICAgICBET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuICAgICAgICAgICAgaWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcmNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHRlc3RFbGVtZW50ID0gbnVsbDtcbn0oKSk7XG5cbn1cblxufVxuXG5cbi8qISBPdmVydGhyb3cgdi4wLjEuMC4gQW4gb3ZlcmZsb3c6YXV0byBwb2x5ZmlsbCBmb3IgcmVzcG9uc2l2ZSBkZXNpZ24uIChjKSAyMDEyOiBTY290dCBKZWhsLCBGaWxhbWVudCBHcm91cCwgSW5jLiBodHRwOi8vZmlsYW1lbnRncm91cC5naXRodWIuY29tL092ZXJ0aHJvdy9saWNlbnNlLnR4dCAqL1xuKGZ1bmN0aW9uKCB3LCB1bmRlZmluZWQgKXtcbiAgICAgXG4gICAgdmFyIGRvYyA9IHcuZG9jdW1lbnQsXG4gICAgICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBjbGFzc3RleHQgPSBcIm92ZXJ0aHJvdy1lbmFibGVkXCIsXG4gICAgIFxuICAgICAgICAvLyBUb3VjaCBldmVudHMgYXJlIHVzZWQgaW4gdGhlIHBvbHlmaWxsLCBhbmQgdGh1cyBhcmUgYSBwcmVyZXF1aXNpdGVcbiAgICAgICAgY2FuQmVGaWxsZWRXaXRoUG9seSA9IFwib250b3VjaG1vdmVcIiBpbiBkb2MsXG4gICAgICAgICBcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhdHRlbXB0cyB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgYnJvd3NlciBoYXMgbmF0aXZlIG92ZXJmbG93IHN1cHBvcnRcbiAgICAgICAgLy8gc28gd2UgY2FuIGVuYWJsZSBpdCBidXQgbm90IHBvbHlmaWxsXG4gICAgICAgIG92ZXJmbG93UHJvYmFibHlBbHJlYWR5V29ya3MgPSBcbiAgICAgICAgICAgIC8vIEZlYXR1cmVzLWZpcnN0LiBpT1M1IG92ZXJmbG93IHNjcm9sbGluZyBwcm9wZXJ0eSBjaGVjayAtIG5vIFVBIG5lZWRlZCBoZXJlLiB0aGFua3MgQXBwbGUgOilcbiAgICAgICAgICAgIFwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmdcIiBpbiBkb2NFbGVtLnN0eWxlIHx8XG4gICAgICAgICAgICAvLyBUb3VjaCBldmVudHMgYXJlbid0IHN1cHBvcnRlZCBhbmQgc2NyZWVuIHdpZHRoIGlzIGdyZWF0ZXIgdGhhbiBYXG4gICAgICAgICAgICAvLyAuLi5iYXNpY2FsbHksIHRoaXMgaXMgYSBsb29zZSBcImRlc2t0b3AgYnJvd3NlclwiIGNoZWNrLiBcbiAgICAgICAgICAgIC8vIEl0IG1heSB3cm9uZ2x5IG9wdC1pbiB2ZXJ5IGxhcmdlIHRhYmxldHMgd2l0aCBubyB0b3VjaCBzdXBwb3J0LlxuICAgICAgICAgICAgKCAhY2FuQmVGaWxsZWRXaXRoUG9seSAmJiB3LnNjcmVlbi53aWR0aCA+IDEyMDAgKSB8fFxuICAgICAgICAgICAgLy8gSGFuZyBvbiB0byB5b3VyIGhhdHMuXG4gICAgICAgICAgICAvLyBXaGl0ZWxpc3Qgc29tZSBwb3B1bGFyLCBvdmVyZmxvdy1zdXBwb3J0aW5nIG1vYmlsZSBicm93c2VycyBmb3Igbm93IGFuZCB0aGUgZnV0dXJlXG4gICAgICAgICAgICAvLyBUaGVzZSBicm93c2VycyBhcmUga25vd24gdG8gZ2V0IG92ZXJsb3cgc3VwcG9ydCByaWdodCwgYnV0IGdpdmUgdXMgbm8gd2F5IG9mIGRldGVjdGluZyBpdC5cbiAgICAgICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB1YSA9IHcubmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Via2l0IGNyb3NzZXMgcGxhdGZvcm1zLCBhbmQgdGhlIGJyb3dzZXJzIG9uIG91ciBsaXN0IHJ1biBhdCBsZWFzdCB2ZXJzaW9uIDUzNFxuICAgICAgICAgICAgICAgICAgICB3ZWJraXQgPSB1YS5tYXRjaCggL0FwcGxlV2ViS2l0XFwvKFswLTldKykvICksXG4gICAgICAgICAgICAgICAgICAgIHdrdmVyc2lvbiA9IHdlYmtpdCAmJiB3ZWJraXRbMV0sXG4gICAgICAgICAgICAgICAgICAgIHdrTHRlNTM0ID0gd2Via2l0ICYmIHdrdmVyc2lvbiA+PSA1MzQ7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAvKiBBbmRyb2lkIDMrIHdpdGggd2Via2l0IGd0ZSA1MzRcbiAgICAgICAgICAgICAgICAgICAgfjogTW96aWxsYS81LjAgKExpbnV4OyBVOyBBbmRyb2lkIDMuMDsgZW4tdXM7IFhvb20gQnVpbGQvSFJJMzkpIEFwcGxlV2ViS2l0LzUzNC4xMyAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIFNhZmFyaS81MzQuMTMgKi9cbiAgICAgICAgICAgICAgICAgICAgdWEubWF0Y2goIC9BbmRyb2lkIChbMC05XSspLyApICYmIFJlZ0V4cC4kMSA+PSAzICYmIHdrTHRlNTM0IHx8XG4gICAgICAgICAgICAgICAgICAgIC8qIEJsYWNrYmVycnkgNysgd2l0aCB3ZWJraXQgZ3RlIDUzNFxuICAgICAgICAgICAgICAgICAgICB+OiBNb3ppbGxhLzUuMCAoQmxhY2tCZXJyeTsgVTsgQmxhY2tCZXJyeSA5OTAwOyBlbi1VUykgQXBwbGVXZWJLaXQvNTM0LjExKyAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNy4wLjAgTW9iaWxlIFNhZmFyaS81MzQuMTErICovXG4gICAgICAgICAgICAgICAgICAgIHVhLm1hdGNoKCAvIFZlcnNpb25cXC8oWzAtOV0rKS8gKSAmJiBSZWdFeHAuJDEgPj0gMCAmJiB3LmJsYWNrYmVycnkgJiYgd2tMdGU1MzQgfHxcbiAgICAgICAgICAgICAgICAgICAgLyogQmxhY2tiZXJyeSBQbGF5Ym9vayB3aXRoIHdlYmtpdCBndGUgNTM0XG4gICAgICAgICAgICAgICAgICAgIH46IE1vemlsbGEvNS4wIChQbGF5Qm9vazsgVTsgUklNIFRhYmxldCBPUyAxLjAuMDsgZW4tVVMpIEFwcGxlV2ViS2l0LzUzNC44KyAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMC4wLjEgU2FmYXJpLzUzNC44KyAqLyAgXG4gICAgICAgICAgICAgICAgICAgIHVhLmluZGV4T2YoIC9QbGF5Qm9vay8gKSA+IC0xICYmIFJlZ0V4cC4kMSA+PSAwICYmIHdrTHRlNTM0IHx8XG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggTW9iaWxlIChGZW5uZWMpIDQgYW5kIHVwXG4gICAgICAgICAgICAgICAgICAgIH46IE1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwLjc7IHJ2OjIuMS4xKSBHZWNrby8gRmlyZWZveC80LjAuMnByZSBGZW5uZWMvNC4wLiAqL1xuICAgICAgICAgICAgICAgICAgICB1YS5tYXRjaCggL0Zlbm5lY1xcLyhbMC05XSspLyApICYmIFJlZ0V4cC4kMSA+PSA0IHx8XG4gICAgICAgICAgICAgICAgICAgIC8qIFdlYk9TIDMgYW5kIHVwIChUb3VjaFBhZCB0b28pXG4gICAgICAgICAgICAgICAgICAgIH46IE1vemlsbGEvNS4wIChocC10YWJsZXQ7IExpbnV4OyBocHdPUy8zLjAuMDsgVTsgZW4tVVMpIEFwcGxlV2ViS2l0LzUzNC42IChLSFRNTCwgbGlrZSBHZWNrbykgd09TQnJvd3Nlci8yMzMuNDggU2FmYXJpLzUzNC42IFRvdWNoUGFkLzEuMCAqL1xuICAgICAgICAgICAgICAgICAgICB1YS5tYXRjaCggL3dPU0Jyb3dzZXJcXC8oWzAtOV0rKS8gKSAmJiBSZWdFeHAuJDEgPj0gMjMzICYmIHdrTHRlNTM0IHx8XG4gICAgICAgICAgICAgICAgICAgIC8qIE5va2lhIEJyb3dzZXIgTjhcbiAgICAgICAgICAgICAgICAgICAgfjogTW96aWxsYS81LjAgKFN5bWJpYW4vMzsgU2VyaWVzNjAvNS4yIE5va2lhTjgtMDAvMDEyLjAwMjsgUHJvZmlsZS9NSURQLTIuMSBDb25maWd1cmF0aW9uL0NMREMtMS4xICkgQXBwbGVXZWJLaXQvNTMzLjQgKEtIVE1MLCBsaWtlIEdlY2tvKSBOb2tpYUJyb3dzZXIvNy4zLjAgTW9iaWxlIFNhZmFyaS81MzMuNCAzZ3BwLWdiYSBcbiAgICAgICAgICAgICAgICAgICAgfjogTm90ZTogdGhlIE45IGRvZXNuJ3QgaGF2ZSBuYXRpdmUgb3ZlcmZsb3cgd2l0aCBvbmUtZmluZ2VyIHRvdWNoLiB3dGYgKi9cbiAgICAgICAgICAgICAgICAgICAgdWEubWF0Y2goIC9Ob2tpYUJyb3dzZXJcXC8oWzAtOVxcLl0rKS8gKSAmJiBwYXJzZUZsb2F0KFJlZ0V4cC4kMSkgPT09IDcuMyAmJiB3ZWJraXQgJiYgd2t2ZXJzaW9uID49IDUzM1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSgpLFxuICAgICAgICAgICAgIFxuICAgICAgICAvLyBFYXNpbmcgY2FuIHVzZSBhbnkgb2YgUm9iZXJ0IFBlbm5lcidzIGVxdWF0aW9ucyAoaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZ190ZXJtc19vZl91c2UuaHRtbCkuIEJ5IGRlZmF1bHQsIG92ZXJ0aHJvdyBpbmNsdWRlcyBlYXNlLW91dC1jdWJpY1xuICAgICAgICAvLyBhcmd1bWVudHM6IHQgPSBjdXJyZW50IGl0ZXJhdGlvbiwgYiA9IGluaXRpYWwgdmFsdWUsIGMgPSBlbmQgdmFsdWUsIGQgPSB0b3RhbCBpdGVyYXRpb25zXG4gICAgICAgIC8vIHVzZSB3Lm92ZXJ0aHJvdy5lYXNpbmcgdG8gcHJvdmlkZSBhIGN1c3RvbSBmdW5jdGlvbiBleHRlcm5hbGx5LCBvciBwYXNzIGFuIGVhc2luZyBmdW5jdGlvbiBhcyBhIGNhbGxiYWNrIHRvIHRoZSB0b3NzIG1ldGhvZFxuICAgICAgICBkZWZhdWx0RWFzaW5nID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjKigodD10L2QtMSkqdCp0ICsgMSkgKyBiO1xuICAgICAgICB9LCAgXG4gICAgICAgICAgICAgXG4gICAgICAgIGVuYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgIFxuICAgICAgICAvLyBLZWVwZXIgb2YgaW50ZXJ2YWxzXG4gICAgICAgIHRpbWVLZWVwZXIsXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAvKiB0b3NzIHNjcm9sbHMgYW5kIGVsZW1lbnQgd2l0aCBlYXNpbmdcbiAgICAgICAgIFxuICAgICAgICAvLyBlbGVtIGlzIHRoZSBlbGVtZW50IHRvIHNjcm9sbFxuICAgICAgICAvLyBvcHRpb25zIGhhc2g6XG4gICAgICAgICAgICAqIGxlZnQgaXMgdGhlIGRlc2lyZWQgaG9yaXpvbnRhbCBzY3JvbGwuIERlZmF1bHQgaXMgXCIrMFwiLiBGb3IgcmVsYXRpdmUgZGlzdGFuY2VzLCBwYXNzIGEgc3RyaW5nIHdpdGggXCIrXCIgb3IgXCItXCIgaW4gZnJvbnQuXG4gICAgICAgICAgICAqIHRvcCBpcyB0aGUgZGVzaXJlZCB2ZXJ0aWNhbCBzY3JvbGwuIERlZmF1bHQgaXMgXCIrMFwiLiBGb3IgcmVsYXRpdmUgZGlzdGFuY2VzLCBwYXNzIGEgc3RyaW5nIHdpdGggXCIrXCIgb3IgXCItXCIgaW4gZnJvbnQuXG4gICAgICAgICAgICAqIGR1cmF0aW9uIGlzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoZSB0aHJvdyB3aWxsIHRha2UuIERlZmF1bHQgaXMgMTAwLlxuICAgICAgICAgICAgKiBlYXNpbmcgaXMgYW4gb3B0aW9uYWwgY3VzdG9tIGVhc2luZyBmdW5jdGlvbi4gRGVmYXVsdCBpcyB3Lm92ZXJ0aHJvdy5lYXNpbmcuIE11c3QgZm9sbG93IHRoZSBlYXNpbmcgZnVuY3Rpb24gc2lnbmF0dXJlIFxuICAgICAgICAqL1xuICAgICAgICB0b3NzID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMgKXtcbiAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICBzTGVmdCA9IGVsZW0uc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBzVG9wID0gZWxlbS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgLy8gVG9zcyBkZWZhdWx0c1xuICAgICAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIrMFwiLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIiswXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogdy5vdmVydGhyb3cuZWFzaW5nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbmRMZWZ0LCBlbmRUb3A7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBNaXhpbiBiYXNlZCBvbiBwcmVkZWZpbmVkIGRlZmF1bHRzXG4gICAgICAgICAgICBpZiggb3B0aW9ucyApe1xuICAgICAgICAgICAgICAgIGZvciggdmFyIGogaW4gbyApe1xuICAgICAgICAgICAgICAgICAgICBpZiggb3B0aW9uc1sgaiBdICE9PSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9bIGogXSA9IG9wdGlvbnNbIGogXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENvbnZlcnQgcmVsYXRpdmUgdmFsdWVzIHRvIGludHNcbiAgICAgICAgICAgIC8vIEZpcnN0IHRoZSBsZWZ0IHZhbFxuICAgICAgICAgICAgaWYoIHR5cGVvZiBvLmxlZnQgPT09IFwic3RyaW5nXCIgKXtcbiAgICAgICAgICAgICAgICBvLmxlZnQgPSBwYXJzZUZsb2F0KCBvLmxlZnQgKTtcbiAgICAgICAgICAgICAgICBlbmRMZWZ0ID0gby5sZWZ0ICsgc0xlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmRMZWZ0ID0gby5sZWZ0O1xuICAgICAgICAgICAgICAgIG8ubGVmdCA9IG8ubGVmdCAtIHNMZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlbiB0aGUgdG9wIHZhbFxuICAgICAgICAgICAgaWYoIHR5cGVvZiBvLnRvcCA9PT0gXCJzdHJpbmdcIiApe1xuICAgICAgICAgICAgICAgIG8udG9wID0gcGFyc2VGbG9hdCggby50b3AgKTtcbiAgICAgICAgICAgICAgICBlbmRUb3AgPSBvLnRvcCArIHNUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmRUb3AgPSBvLnRvcDtcbiAgICAgICAgICAgICAgICBvLnRvcCA9IG8udG9wIC0gc1RvcDtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIHRpbWVLZWVwZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIGkrKyA8IG8uZHVyYXRpb24gKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zY3JvbGxMZWZ0ID0gby5lYXNpbmcoIGksIHNMZWZ0LCBvLmxlZnQsIG8uZHVyYXRpb24gKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSBvLmVhc2luZyggaSwgc1RvcCwgby50b3AsIG8uZHVyYXRpb24gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGVuZExlZnQgIT09IGVsZW0uc2Nyb2xsTGVmdCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zY3JvbGxMZWZ0ID0gZW5kTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiggZW5kVG9wICE9PSBlbGVtLnNjcm9sbFRvcCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSBlbmRUb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJjZXB0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMSApO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZXMsIHBvc3QtbWl4aW4sIHdpdGggZW5kIHZhbHVlcyBzcGVjaWZpZWRcbiAgICAgICAgICAgIHJldHVybiB7IHRvcDogZW5kVG9wLCBsZWZ0OiBlbmRMZWZ0LCBkdXJhdGlvbjogby5kdXJhdGlvbiwgZWFzaW5nOiBvLmVhc2luZyB9O1xuICAgICAgICB9LFxuICAgICAgICAgXG4gICAgICAgIC8vIGZpbmQgY2xvc2VzdCBvdmVydGhyb3cgKGVsZW0gb3IgYSBwYXJlbnQpXG4gICAgICAgIGNsb3Nlc3QgPSBmdW5jdGlvbiggdGFyZ2V0LCBhc2NlbmQgKXtcbiAgICAgICAgICAgIHJldHVybiAhYXNjZW5kICYmIHRhcmdldC5jbGFzc05hbWUgJiYgdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCBcIm92ZXJ0aHJvd1wiICkgPiAtMSAmJiB0YXJnZXQgfHwgY2xvc2VzdCggdGFyZ2V0LnBhcmVudE5vZGUgKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vIEludGVyY2VwdCBhbnkgdGhyb3cgaW4gcHJvZ3Jlc3NcbiAgICAgICAgaW50ZXJjZXB0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVLZWVwZXIgKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgICBcbiAgICAgICAgLy8gRW5hYmxlIGFuZCBwb3RlbnRpYWxseSBwb2x5ZmlsbCBvdmVyZmxvd1xuICAgICAgICBlbmFibGUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIGl0J3Mgb24sIFxuICAgICAgICAgICAgaWYoIGVuYWJsZWQgKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJdCdzIG9uLlxuICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSWYgb3ZlcmZsb3dQcm9iYWJseUFscmVhZHlXb3JrcyBvciBhdCBsZWFzdCB0aGUgZWxlbWVudCBjYW5CZUZpbGxlZFdpdGhQb2x5LCBhZGQgYSBjbGFzcyB0byBjdWUgQ1NTIHRoYXQgYXNzdW1lcyBvdmVyZmxvdyBzY3JvbGxpbmcgd2lsbCB3b3JrIChzZXR0aW5nIGhlaWdodCBvbiBlbGVtZW50cyBhbmQgc3VjaClcbiAgICAgICAgICAgIGlmKCBvdmVyZmxvd1Byb2JhYmx5QWxyZWFkeVdvcmtzIHx8IGNhbkJlRmlsbGVkV2l0aFBvbHkgKXtcbiAgICAgICAgICAgICAgICBkb2NFbGVtLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBEZXN0cm95IGV2ZXJ5dGhpbmcgbGF0ZXIuIElmIHlvdSB3YW50IHRvLlxuICAgICAgICAgICAgdy5vdmVydGhyb3cuZm9yZ2V0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgY2xhc3MgbmFtZSBmcm9tIGRvY0VsZW1cbiAgICAgICAgICAgICAgICBkb2NFbGVtLmNsYXNzTmFtZSA9IGRvY0VsZW0uY2xhc3NOYW1lLnJlcGxhY2UoIGNsYXNzdGV4dCwgXCJcIiApO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0b3VjaCBiaW5kaW5nIChjaGVjayBmb3IgbWV0aG9kIHN1cHBvcnQgc2luY2UgdGhpcyBwYXJ0IGlzbid0IHF1YWxpZmllZCBieSB0b3VjaCBzdXBwb3J0IGxpa2UgdGhlIHJlc3QpXG4gICAgICAgICAgICAgICAgaWYoIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyICl7XG4gICAgICAgICAgICAgICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInRvdWNoc3RhcnRcIiwgc3RhcnQsIGZhbHNlICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGVhc2luZyB0byBkZWZhdWx0XG4gICAgICAgICAgICAgICAgdy5vdmVydGhyb3cuZWFzaW5nID0gZGVmYXVsdEVhc2luZztcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gTGV0ICdlbSBrbm93XG4gICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgXG4gICAgICAgICAgICAvLyBJZiBvdmVyZmxvd1Byb2JhYmx5QWxyZWFkeVdvcmtzIG9yIGl0IGRvZXNuJ3QgbG9vayBsaWtlIHRoZSBicm93c2VyIGNhbkJlRmlsbGVkV2l0aFBvbHksIG91ciBqb2IgaXMgZG9uZSBoZXJlLiBFeGl0IHZpZXdwb3J0IGxlZnQuXG4gICAgICAgICAgICBpZiggb3ZlcmZsb3dQcm9iYWJseUFscmVhZHlXb3JrcyB8fCAhY2FuQmVGaWxsZWRXaXRoUG9seSApe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIC8vIEZpbGwgJ2VyIHVwIVxuICAgICAgICAgICAgLy8gRnJvbSBoZXJlIGRvd24sIGFsbCBsb2dpYyBpcyBhc3NvY2lhdGVkIHdpdGggdG91Y2ggc2Nyb2xsIGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgLy8gZWxlbSByZWZlcmVuY2VzIHRoZSBvdmVydGhyb3cgZWxlbWVudCBpbiB1c2VcbiAgICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBUaGUgbGFzdCBzZXZlcmFsIFkgdmFsdWVzIGFyZSBrZXB0IGhlcmVcbiAgICAgICAgICAgICAgICBsYXN0VG9wcyA9IFtdLFxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gVGhlIGxhc3Qgc2V2ZXJhbCBYIHZhbHVlcyBhcmUga2VwdCBoZXJlXG4gICAgICAgICAgICAgICAgbGFzdExlZnRzID0gW10sXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGxhc3REb3duIHdpbGwgYmUgdHJ1ZSBpZiB0aGUgbGFzdCBzY3JvbGwgZGlyZWN0aW9uIHdhcyBkb3duLCBmYWxzZSBpZiBpdCB3YXMgdXBcbiAgICAgICAgICAgICAgICBsYXN0RG93bixcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbGFzdFJpZ2h0IHdpbGwgYmUgdHJ1ZSBpZiB0aGUgbGFzdCBzY3JvbGwgZGlyZWN0aW9uIHdhcyByaWdodCwgZmFsc2UgaWYgaXQgd2FzIGxlZnRcbiAgICAgICAgICAgICAgICBsYXN0UmlnaHQsXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEZvciBhIG5ldyBnZXN0dXJlLCBvciBjaGFuZ2UgaW4gZGlyZWN0aW9uLCByZXNldCB0aGUgdmFsdWVzIGZyb20gbGFzdCBzY3JvbGxcbiAgICAgICAgICAgICAgICByZXNldFZlcnRUcmFja2luZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb3BzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxhc3REb3duID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNldEhvclRyYWNraW5nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbGFzdExlZnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgcmVsZWFzaW5nIHRvdWNoZW5kLCB0aHJvdyB0aGUgb3ZlcnRocm93IGVsZW1lbnQsIGRlcGVuZGluZyBvbiBtb21lbnR1bVxuICAgICAgICAgICAgICAgIGZpbmlzaFNjcm9sbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbWUgdXAgd2l0aCBhIGRpc3RhbmNlIGFuZCBkdXJhdGlvbiBiYXNlZCBvbiBob3cgXG4gICAgICAgICAgICAgICAgICAgIC8vIE11bHRpcGxpZXJzIGFyZSB0d2Vha2VkIHRvIGEgY29tZm9ydGFibGUgYmFsYW5jZSBhY3Jvc3MgcGxhdGZvcm1zXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3AgPSAoIGxhc3RUb3BzWyAwIF0gLSBsYXN0VG9wc1sgbGFzdFRvcHMubGVuZ3RoIC0xIF0gKSAqIDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gKCBsYXN0TGVmdHNbIDAgXSAtIGxhc3RMZWZ0c1sgbGFzdExlZnRzLmxlbmd0aCAtMSBdICkgKiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heCggTWF0aC5hYnMoIGxlZnQgKSwgTWF0aC5hYnMoIHRvcCApICkgLyA4O1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgdG9wIGFuZCBsZWZ0IHJlbGF0aXZlLXN0eWxlIHN0cmluZ3MgKHBvc2l0aXZlIHZhbHMgbmVlZCBcIitcIiBwcmVmaXgpXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9ICggdG9wID4gMCA/IFwiK1wiIDogXCJcIiApICsgdG9wO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gKCBsZWZ0ID4gMCA/IFwiK1wiIDogXCJcIiApICsgbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmUncyBhIHNpZ25pZmljYW50IGFtb3VudCBvZiB0aHJvdyBpbnZvbHZlZCwgb3RoZXJ3aXNlLCBqdXN0IHN0YXkgc3RpbGxcbiAgICAgICAgICAgICAgICAgICAgaWYoICFpc05hTiggZHVyYXRpb24gKSAmJiBkdXJhdGlvbiA+IDAgJiYgKCBNYXRoLmFicyggbGVmdCApID4gODAgfHwgTWF0aC5hYnMoIHRvcCApID4gODAgKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9zcyggZWxlbSwgeyBsZWZ0OiBsZWZ0LCB0b3A6IHRvcCwgZHVyYXRpb246IGR1cmF0aW9uIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gT24gd2Via2l0LCB0b3VjaCBldmVudHMgaGFyZGx5IHRyaWNrbGUgdGhyb3VnaCB0ZXh0YXJlYXMgYW5kIGlucHV0c1xuICAgICAgICAgICAgICAgIC8vIERpc2FibGluZyBDU1MgcG9pbnRlciBldmVudHMgbWFrZXMgc3VyZSB0aGV5IGRvLCBidXQgaXQgYWxzbyBtYWtlcyB0aGUgY29udHJvbHMgaW5uYWNjZXNzaWJsZVxuICAgICAgICAgICAgICAgIC8vIFRvZ2dsaW5nIHBvaW50ZXIgZXZlbnRzIGF0IHRoZSByaWdodCBtb21lbnRzIHNlZW1zIHRvIGRvIHRoZSB0cmlja1xuICAgICAgICAgICAgICAgIC8vIFRoYW5rcyBUaG9tYXMgQmFjaGVtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU3OTg2ODEgZm9yIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgICAgICAgICBpbnB1dHMsXG4gICAgICAgICAgICAgICAgc2V0UG9pbnRlcnMgPSBmdW5jdGlvbiggdmFsICl7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggXCJ0ZXh0YXJlYSwgaW5wdXRcIiApO1xuICAgICAgICAgICAgICAgICAgICBmb3IoIHZhciBpID0gMCwgaWwgPSBpbnB1dHMubGVuZ3RoOyBpIDwgaWw7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0c1sgaSBdLnN0eWxlLnBvaW50ZXJFdmVudHMgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBGb3IgbmVzdGVkIG92ZXJ0aHJvd3MsIGNoYW5nZVNjcm9sbFRhcmdldCByZXN0YXJ0cyBhIHRvdWNoIGV2ZW50IGN5Y2xlIG9uIGEgcGFyZW50IG9yIGNoaWxkIG92ZXJ0aHJvd1xuICAgICAgICAgICAgICAgIGNoYW5nZVNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uKCBzdGFydEV2ZW50LCBhc2NlbmQgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGRvYy5jcmVhdGVFdmVudCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1RhcmdldCA9ICggIWFzY2VuZCB8fCBhc2NlbmQgPT09IHVuZGVmaW5lZCApICYmIGVsZW0ucGFyZW50Tm9kZSB8fCBlbGVtLnRvdWNoY2hpbGQgfHwgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0RW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbmV3VGFyZ2V0ICE9PSBlbGVtICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdEVuZCA9IGRvYy5jcmVhdGVFdmVudCggXCJIVE1MRXZlbnRzXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0RW5kLmluaXRFdmVudCggXCJ0b3VjaGVuZFwiLCB0cnVlLCB0cnVlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5kaXNwYXRjaEV2ZW50KCB0RW5kICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFyZ2V0LnRvdWNoY2hpbGQgPSBlbGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSBuZXdUYXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFRvdWNoc3RhcnQgaGFuZGxlclxuICAgICAgICAgICAgICAgIC8vIE9uIHRvdWNoc3RhcnQsIHRvdWNobW92ZSBhbmQgdG91Y2hlbmQgYXJlIGZyZXNobHkgYm91bmQsIGFuZCBhbGwgdGhyZWUgc2hhcmUgYSBidW5jaCBvZiB2YXJzIHNldCBieSB0b3VjaHN0YXJ0XG4gICAgICAgICAgICAgICAgLy8gVG91Y2hlbmQgdW5iaW5kcyB0aGVtIGFnYWluLCB1bnRpbCBuZXh0IHRpbWVcbiAgICAgICAgICAgICAgICBzdGFydCA9IGZ1bmN0aW9uKCBlICl7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBhbnkgdGhyb3cgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJjZXB0KCk7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGRpc3RhbmNlIGFuZCBkaXJlY3Rpb24gdHJhY2tpbmdcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRWZXJ0VHJhY2tpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRIb3JUcmFja2luZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlbGVtID0gY2xvc2VzdCggZS50YXJnZXQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoICFlbGVtIHx8IGVsZW0gPT09IGRvY0VsZW0gfHwgZS50b3VjaGVzLmxlbmd0aCA+IDEgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXG4gXG4gICAgICAgICAgICAgICAgICAgIHNldFBvaW50ZXJzKCBcIm5vbmVcIiApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG91Y2hTdGFydEUgPSBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVCA9IGVsZW0uc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTCA9IGVsZW0uc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBlbGVtLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZID0gZS50b3VjaGVzWyAwIF0ucGFnZVksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFggPSBlLnRvdWNoZXNbIDAgXS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IGVsZW0uc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSBlbGVtLnNjcm9sbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb3VjaG1vdmUgaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZSA9IGZ1bmN0aW9uKCBlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5ID0gc2Nyb2xsVCArIHN0YXJ0WSAtIGUudG91Y2hlc1sgMCBdLnBhZ2VZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IHNjcm9sbEwgKyBzdGFydFggLSBlLnRvdWNoZXNbIDAgXS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93biA9IHR5ID49ICggbGFzdFRvcHMubGVuZ3RoID8gbGFzdFRvcHNbIDAgXSA6IDAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSB0eCA+PSAoIGxhc3RMZWZ0cy5sZW5ndGggPyBsYXN0TGVmdHNbIDAgXSA6IDAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgcm9vbSB0byBzY3JvbGwgdGhlIGN1cnJlbnQgY29udGFpbmVyLCBwcmV2ZW50IHRoZSBkZWZhdWx0IHdpbmRvdyBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggKCB0eSA+IDAgJiYgdHkgPCBzY3JvbGxIZWlnaHQgLSBoZWlnaHQgKSB8fCAoIHR4ID4gMCAmJiB0eCA8IHNjcm9sbFdpZHRoIC0gd2lkdGggKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYnViYmxpbmcgaXMgZHVtYi4gTmVlZHMgYSByZXRoaW5rLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTY3JvbGxUYXJnZXQoIHRvdWNoU3RhcnRFICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBkb3duIGFuZCBsYXN0RG93biBhcmUgaW5lcXVhbCwgdGhlIHkgc2Nyb2xsIGhhcyBjaGFuZ2VkIGRpcmVjdGlvbi4gUmVzZXQgdHJhY2tpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxhc3REb3duICYmIGRvd24gIT09IGxhc3REb3duICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0VmVydFRyYWNraW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiByaWdodCBhbmQgbGFzdFJpZ2h0IGFyZSBpbmVxdWFsLCB0aGUgeCBzY3JvbGwgaGFzIGNoYW5nZWQgZGlyZWN0aW9uLiBSZXNldCB0cmFja2luZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggbGFzdFJpZ2h0ICYmIHJpZ2h0ICE9PSBsYXN0UmlnaHQgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRIb3JUcmFja2luZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIGxhc3QgZGlyZWN0aW9uIGluIHdoaWNoIHdlIHdlcmUgaGVhZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdERvd24gPSBkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSaWdodCA9IHJpZ2h0OyAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgY29udGFpbmVyJ3Mgc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSB0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNjcm9sbExlZnQgPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VG9wcy51bnNoaWZ0KCB0eSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RMZWZ0cy51bnNoaWZ0KCB0eCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBsYXN0VG9wcy5sZW5ndGggPiAzICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUb3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggbGFzdExlZnRzLmxlbmd0aCA+IDMgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdExlZnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvdWNoZW5kIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGZ1bmN0aW9uKCBlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgbW9tZW50dW0gYmFzZWQgZWFzaW5nIGZvciBhIGdyYWNlZnVsIGZpbmlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaFNjcm9sbCgpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCcmluZyB0aGUgcG9pbnRlcnMgYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvaW50ZXJzKCBcImF1dG9cIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvaW50ZXJzKCBcIm5vbmVcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQ1MCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0b3VjaG1vdmVcIiwgbW92ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwidG91Y2hlbmRcIiwgZW5kLCBmYWxzZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIFwidG91Y2htb3ZlXCIsIG1vdmUsIGZhbHNlICk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciggXCJ0b3VjaGVuZFwiLCBlbmQsIGZhbHNlICk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBCaW5kIHRvIHRvdWNoLCBoYW5kbGUgbW92ZSBhbmQgZW5kIHdpdGhpblxuICAgICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoIFwidG91Y2hzdGFydFwiLCBzdGFydCwgZmFsc2UgKTtcbiAgICAgICAgfTtcbiAgICAgICAgIFxuICAgIC8vIEV4cG9zZSBvdmVydGhyb3cgQVBJXG4gICAgdy5vdmVydGhyb3cgPSB7XG4gICAgICAgIHNldDogZW5hYmxlLFxuICAgICAgICBmb3JnZXQ6IGZ1bmN0aW9uKCl7fSxcbiAgICAgICAgZWFzaW5nOiBkZWZhdWx0RWFzaW5nLFxuICAgICAgICB0b3NzOiB0b3NzLFxuICAgICAgICBpbnRlcmNlcHQ6IGludGVyY2VwdCxcbiAgICAgICAgY2xvc2VzdDogY2xvc2VzdCxcbiAgICAgICAgc3VwcG9ydDogb3ZlcmZsb3dQcm9iYWJseUFscmVhZHlXb3JrcyA/IFwibmF0aXZlXCIgOiBjYW5CZUZpbGxlZFdpdGhQb2x5ICYmIFwicG9seWZpbGxlZFwiIHx8IFwibm9uZVwiXG4gICAgfTtcbiAgICAgXG4gICAgLy8gQXV0by1pbml0XG4gICAgZW5hYmxlKCk7XG4gICAgICAgICBcbn0pKCB3aW5kb3cgKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnQvanMvcG9seWZpbGwuanMiXSwic291cmNlUm9vdCI6IiJ9