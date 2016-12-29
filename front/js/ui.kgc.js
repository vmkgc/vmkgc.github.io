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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // import './dev'; //개발용 스크립트 프로덕션시 삭제
	
	
	__webpack_require__(1);
	
	/*import '../scss/kgc.common.scss';
	import '../scss/kgc.layout.scss';
	import '../scss/kgc.sub.scss';
	import '../scss/kgc.main.scss';
	import '../scss/kgc.swiper.scss';*/
	
	var $ = window.$;
	var win = window,
	    doc = document;
	
	win.ui = window.ui || {
	
		//공통
		common: {
			// 빈 함수 클릭시 오류 방지
			commonNothing: function commonNothing() {},
	
			// a태그의 href 값이 # 일경우 commonNothing()으로 대체
			emptyLinkFunc: function emptyLinkFunc() {
				//a태그 href에 더미 함수 삽입
				var allA = doc.querySelectorAll('a'),
				    aTag = null,
				    href = null;
				for (var i = 0, length = allA.length; i < length; i++) {
					aTag = allA[i];
					href = aTag.getAttribute('href');
					if (ui.util.trim(href) == '#' || href == null) aTag.setAttribute('href', 'javascript:ui.common.commonNothing();');
				}
			},
	
			//검색 레이어
			searchLayer: function searchLayer() {
				var header = $('#header'),
				    body = $('body');
				header.find('.btn-search').on('click', function () {
					body.find(' > .search').addClass('active');
					body.append('<div class="dimm"></div>');
	
					$('.dimm').add(body.find('> .search button.btn-close')).on('click', function () {
						body.find(' > .search').removeClass('active');
						$('.dimm').remove();
					});
				});
			},
	
			subnaviPositionSet: function subnaviPositionSet() {
				var executer = function executer() {
					var scope = $('.sub-navi'),
					    el = scope.find('li'),
					    ul = scope.find('> ul').get(0),
					    elLength = el.length,
					    activeEl = scope.find('.active').get(0),
					    allWidth = 0,
					    currentLeft = 0,
					    i = 0;
					for (; i < elLength; i += 1) {
						allWidth += el.eq(i).width();
					}
	
					if (allWidth > scope.outerWidth()) {
						scope.addClass('end-fade');
						currentLeft = activeEl.offsetLeft - window.innerWidth / 2 + activeEl.clientWidth / 2;
						ul.scrollLeft = currentLeft;
	
						$(ul).on('scroll', function () {
							var that = $(this).get(0),
							    left = that.scrollLeft;
							if (left < 1) {
								$(this).parent().removeClass('start-fade');
							} else if (left >= 1) {
								$(this).parent().addClass('start-fade');
							}
	
							if (left >= that.scrollWidth - $(this).parent().width()) {
								$(this).parent().removeClass('end-fade');
							} else if (left < that.scrollWidth - $(this).parent().width()) {
								$(this).parent().addClass('end-fade');
							}
						}).trigger('scroll');
					}
				};
				executer();
			},
	
			toggleAccordian: function toggleAccordian(_scope, eventTarget, evt) {
				var target = $(_scope);
				target.on('click', function () {
					var parent = $(this).parent(),
					    klassCtrl = 'active',
					    speed = 300;
					if (parent.hasClass(klassCtrl)) {
						parent.removeClass(klassCtrl).siblings(eventTarget).stop().slideUp(speed);
					} else {
						parent.addClass(klassCtrl).siblings(eventTarget).stop().slideDown(speed);
					}
				});
			},
	
			toggleNavi: {
				flag: true,
				open: function open() {
					var navi = $('#navi'),
					    body = $('body');
					body.append('<div class="dimm"></div>');
					navi.addClass('active');
					if (this.flag) {
						this.flag = false;
						navi.find('.navi-list > li > a').on('click', function () {
							$(this).parent().addClass('active').siblings('li').removeClass('active');
						});
						this.depth3Toggle();
					}
				},
				close: function close() {
					$('#navi').removeClass('active');
					$('body > .dimm').remove();
				},
				depth3Toggle: function depth3Toggle() {
					$('.navi-list-sub > li.hasList > a').on('click', function () {
						var list = $(this).next('.navi-list-sub-02'),
						    parent = $(this).parent(),
						    speed = 200;
						if (parent.hasClass('active')) {
							list.stop().slideUp(speed, function () {
								parent.removeClass('active');
							});
						} else {
							parent.addClass('active');
							list.stop().slideDown(speed, function () {});
							parent.siblings().find('.navi-list-sub-02').stop().slideUp(speed, function () {
								$(this).parent().removeClass('active');
							});
						}
					});
				}
			}
	
		},
	
		util: {
	
			// 양쪽 여백 제거
			trim: function trim(str) {
				if (str == null || typeof str == 'undefined') return "";
				return str.replace(/^\s+|\s+$/g, "");
			},
	
			//글자수 자르기
			cutstr: function cutStr(str, limit) {
				var strLength = 0,
				    strTitle = "",
				    strPiece = "",
				    code,
				    ch;
	
				for (i = 0; i < str.length; i++) {
					code = str.charCodeAt(i), ch = str.substr(i, 1).toUpperCase();
					strPiece = str.substr(i, 1);
					code = parseInt(code);
	
					if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && (code > 255 || code < 0)) strLength = strLength + 3; //UTF-8 3byte 로 계산
					else strLength = strLength + 1;
	
					if (strLength > limit) //제한 길이 확인
						break;else strTitle = strTitle + strPiece; //제한길이 보다 작으면 자른 문자를 붙여준다.
				}
				return strTitle;
			},
	
			/*
	   *	Image preloader (c) yikl1004@gmail.com, 2016.11
	   */
			imagePreloader: function imagePreloader(img, callback) {
	
				var count = 0;
	
				if (Array.isArray(img) && (typeof img === 'undefined' ? 'undefined' : _typeof(img))) {
	
					img.forEach(function (el, index) {
						var images = document.createElement('img');
						images.src = img;
						images.addEventListener('load', function () {
							count++;
							if (typeof callback == 'function' && count == img.length) callback(images);
						}, false);
					});
				} else if (typeof img == 'string') {
					var images = document.createElement('img');
					images.src = img;
					images.addEventListener('load', function () {
						if (typeof callback == 'function') callback(images);
					}, false);
				}
			},
	
			// mobile detecting
			isDevice: function isDevice() {
				//모바일 UA
				var ua = navigator.userAgent;
				return {
					check: function check() {
						if (this.android) {
							if (this.gingerbread) return 'gingerbread';else return 'android';
						}
						if (this.ios) return 'ios';
						if (!this.android && !this.ios) return 'no-mobile';
					},
					ios: ua.match('iPhone') ? true : false,
					android: ua.match('Android') ? true : false,
					gingerbread: ua.match('Android 2.3') ? true : false
				};
			},
			deviceSize: 'device-size-' + window.innerWidth
	
		},
	
		//슬라이드 참고 사이트 : http://idangero.us/swiper/api/#.WFsqHraLSAw
		swiper: {
			_scope: '',
	
			defaultOptions: {
				direction: 'horizontal',
				loop: true,
				pagination: '.swiper-pagination',
				paginationType: 'fraction'
			},
	
			init: function init(scope, options) {
				this._scope = scope;
				var assign = typeof Object.assign == 'undefined' ? $.extend : Object.assign; //assign 함수 존재 여부 체크, 없으면 $.extend로 대체
				options = typeof options == 'undefined' ? this.defaultOptions : assign({}, this.defaultOptions, options); //options 매개변수가 undefined 일 경우를 체크하여 오류 방지
				this.swiper(options);
			},
	
			swiper: function swiper(options) {
				$(this._scope).data('manager', new Swiper(this._scope, options));
			},
	
			manager: function manager() {
				return $(this._scope).data('manager');
			}
		}
	
	};
	
	//DOM 로드후 화면 보여줌
	win.addEventListener('DOMContentLoaded', function () {
		$(document.body).stop().animate({ opacity: 1 }, 300, function () {});
	});
	
	$(function () {
	
		var util = ui.util,
		    common = ui.common,
		    isDevice = util.isDevice();
	
		//빈 링크 채우기
		common.emptyLinkFunc();
	
		//검색창 열기
		common.searchLayer();
	
		//모바일 넓이, OS 클래스 삽입
		$('body').addClass([isDevice.check(), util.deviceSize].join(' '));
	
		//navigation open
		$('a.btn-navi').on('click', function () {
			common.toggleNavi.open();
			$('body > .dimm').on('click', function () {
				common.toggleNavi.close();
			});
		});
	
		//sub navi
		if ($('body').has('.sub-navi')) {
			ui.common.subnaviPositionSet();
		}
	
		//navigation close
		$('#navi .btn-close').on('click', function () {
			common.toggleNavi.close();
		});
	
		//위로가기
		$('button.to-top').on('click', function () {
			$('body, html').stop().animate({ scrollTop: 0 }, 300, 'easeInOutQuart', function () {});
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2Y1OTdiODAwYTBhNDI3Njc5OWQ/OTQ5YiIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvanMvdWkuY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9zY3NzL2NvbmNhdC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJ3aW4iLCJkb2MiLCJkb2N1bWVudCIsInVpIiwiY29tbW9uIiwiY29tbW9uTm90aGluZyIsImVtcHR5TGlua0Z1bmMiLCJhbGxBIiwicXVlcnlTZWxlY3RvckFsbCIsImFUYWciLCJocmVmIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInV0aWwiLCJ0cmltIiwic2V0QXR0cmlidXRlIiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJib2R5IiwiZmluZCIsIm9uIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInN1Ym5hdmlQb3NpdGlvblNldCIsImV4ZWN1dGVyIiwic2NvcGUiLCJlbCIsInVsIiwiZ2V0IiwiZWxMZW5ndGgiLCJhY3RpdmVFbCIsImFsbFdpZHRoIiwiY3VycmVudExlZnQiLCJlcSIsIndpZHRoIiwib3V0ZXJXaWR0aCIsIm9mZnNldExlZnQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxMZWZ0IiwidGhhdCIsImxlZnQiLCJwYXJlbnQiLCJzY3JvbGxXaWR0aCIsInRyaWdnZXIiLCJ0b2dnbGVBY2NvcmRpYW4iLCJfc2NvcGUiLCJldmVudFRhcmdldCIsImV2dCIsInRhcmdldCIsImtsYXNzQ3RybCIsInNwZWVkIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsInN0b3AiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwidG9nZ2xlTmF2aSIsImZsYWciLCJvcGVuIiwibmF2aSIsImRlcHRoM1RvZ2dsZSIsImNsb3NlIiwibGlzdCIsIm5leHQiLCJzdHIiLCJyZXBsYWNlIiwiY3V0c3RyIiwiY3V0U3RyIiwibGltaXQiLCJzdHJMZW5ndGgiLCJzdHJUaXRsZSIsInN0clBpZWNlIiwiY29kZSIsImNoIiwiY2hhckNvZGVBdCIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJpbWFnZVByZWxvYWRlciIsImltZyIsImNhbGxiYWNrIiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbWFnZXMiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzRGV2aWNlIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjaGVjayIsImFuZHJvaWQiLCJnaW5nZXJicmVhZCIsImlvcyIsIm1hdGNoIiwiZGV2aWNlU2l6ZSIsInN3aXBlciIsImRlZmF1bHRPcHRpb25zIiwiZGlyZWN0aW9uIiwibG9vcCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uVHlwZSIsImluaXQiLCJvcHRpb25zIiwiYXNzaWduIiwiT2JqZWN0IiwiZXh0ZW5kIiwiZGF0YSIsIlN3aXBlciIsIm1hbmFnZXIiLCJhbmltYXRlIiwib3BhY2l0eSIsImpvaW4iLCJoYXMiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7K1FDdENBOzs7QUFDQTs7QUFDQTs7Ozs7O0FBTUEsS0FBSUEsSUFBSUMsT0FBT0QsQ0FBZjtBQUNBLEtBQUlFLE1BQU1ELE1BQVY7QUFBQSxLQUNDRSxNQUFNQyxRQURQOztBQUdBRixLQUFJRyxFQUFKLEdBQVNKLE9BQU9JLEVBQVAsSUFBYTs7QUFFckI7QUFDQUMsVUFBUTtBQUNQO0FBQ0FDLGtCQUFlLHlCQUFXLENBQUUsQ0FGckI7O0FBSVA7QUFD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SUFBbEI7QUFDQWpFLEtBQUUsY0FBRixFQUFrQnVCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDeENqQixXQUFPeUQsVUFBUCxDQUFrQkssS0FBbEI7QUFDQSxJQUZEO0FBR0EsR0FMRDs7QUFPQTtBQUNBLE1BQUtwRSxFQUFFLE1BQUYsRUFBVTRILEdBQVYsQ0FBYyxXQUFkLENBQUwsRUFBa0M7QUFDakN2SCxNQUFHQyxNQUFILENBQVV1QixrQkFBVjtBQUNBOztBQUVEO0FBQ0E3QixJQUFFLGtCQUFGLEVBQXNCdUIsRUFBdEIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUMzQ2pCLFVBQU95RCxVQUFQLENBQWtCSyxLQUFsQjtBQUNBLEdBRkQ7O0FBSUE7QUFDQXBFLElBQUUsZUFBRixFQUFtQnVCLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDeEN2QixLQUFFLFlBQUYsRUFBZ0I0RCxJQUFoQixHQUF1QjZELE9BQXZCLENBQStCLEVBQUNJLFdBQVcsQ0FBWixFQUEvQixFQUErQyxHQUEvQyxFQUFvRCxnQkFBcEQsRUFBc0UsWUFBVSxDQUFFLENBQWxGO0FBQ0EsR0FGRDtBQUlBLEVBdkNELEU7Ozs7OztBQzFRQSwwQyIsImZpbGUiOiJ1aS5rZ2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2Y1OTdiODAwYTBhNDI3Njc5OWQiLCIvLyBpbXBvcnQgJy4vZGV2JzsgLy/qsJzrsJzsmqkg7Iqk7YGs66a97Yq4IO2UhOuhnOuNleyFmOyLnCDsgq3soJxcbmltcG9ydCAnLi4vc2Nzcy9jb25jYXQuc2Nzcyc7XG4vKmltcG9ydCAnLi4vc2Nzcy9rZ2MuY29tbW9uLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5sYXlvdXQuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLnN1Yi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2MubWFpbi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2Muc3dpcGVyLnNjc3MnOyovXG5cbnZhciAkID0gd2luZG93LiQ7XG52YXIgd2luID0gd2luZG93LFxuXHRkb2MgPSBkb2N1bWVudDtcblxud2luLnVpID0gd2luZG93LnVpIHx8IHtcblxuXHQvL+qzte2GtVxuXHRjb21tb246IHtcblx0XHQvLyDruYgg7ZWo7IiYIO2BtOumreyLnCDsmKTrpZgg67Cp7KeAXG5cdFx0Y29tbW9uTm90aGluZzogZnVuY3Rpb24oKSB7fSxcblxuXHRcdC8vIGHtg5zqt7jsnZggaHJlZiDqsJLsnbQgIyDsnbzqsr3smrAgY29tbW9uTm90aGluZygp7Jy866GcIOuMgOyytFxuXHRcdGVtcHR5TGlua0Z1bmM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9h7YOc6re4IGhyZWbsl5Ag642U66+4IO2VqOyImCDsgr3snoVcblx0XHRcdHZhciBhbGxBID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSxcblx0XHRcdFx0YVRhZyA9IG51bGwsXG5cdFx0XHRcdGhyZWYgPSBudWxsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFsbEEubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YVRhZyA9IGFsbEFbaV07XG5cdFx0XHRcdGhyZWYgPSBhVGFnLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdFx0XHRpZiAodWkudXRpbC50cmltKGhyZWYpID09ICcjJyB8fCBocmVmID09IG51bGwpXG5cdFx0XHRcdFx0YVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDp1aS5jb21tb24uY29tbW9uTm90aGluZygpOycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvL+qygOyDiSDroIjsnbTslrRcblx0XHRzZWFyY2hMYXllcjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaGVhZGVyID0gJCgnI2hlYWRlcicpLFxuXHRcdFx0IFx0Ym9keSA9ICQoJ2JvZHknKTtcblx0XHRcdGhlYWRlci5maW5kKCcuYnRuLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJvZHkuZmluZCgnID4gLnNlYXJjaCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0Ym9keS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cblx0XHRcdFx0JCgnLmRpbW0nKS5hZGQoIGJvZHkuZmluZCgnPiAuc2VhcmNoIGJ1dHRvbi5idG4tY2xvc2UnKSApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Ym9keS5maW5kKCcgPiAuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQoJy5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHN1Ym5hdmlQb3NpdGlvblNldDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBleGVjdXRlciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBzY29wZSA9ICQoJy5zdWItbmF2aScpLFxuXHRcdFx0XHRcdGVsID0gc2NvcGUuZmluZCgnbGknKSxcblx0XHRcdFx0XHR1bCA9IHNjb3BlLmZpbmQoJz4gdWwnKS5nZXQoMCksXG5cdFx0XHRcdFx0ZWxMZW5ndGggPSBlbC5sZW5ndGgsXG5cdFx0XHRcdFx0YWN0aXZlRWwgPSBzY29wZS5maW5kKCcuYWN0aXZlJykuZ2V0KDApLFxuXHRcdFx0XHRcdGFsbFdpZHRoID0gMCxcblx0XHRcdFx0XHRjdXJyZW50TGVmdCA9IDAsXG5cdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdGZvciAoIDsgaSA8IGVsTGVuZ3RoOyBpKz0xICkge1xuXHRcdFx0XHRcdGFsbFdpZHRoICs9IGVsLmVxKGkpLndpZHRoKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGFsbFdpZHRoID4gc2NvcGUub3V0ZXJXaWR0aCgpICkge1xuXHRcdFx0XHRcdHNjb3BlLmFkZENsYXNzKCdlbmQtZmFkZScpO1xuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gYWN0aXZlRWwub2Zmc2V0TGVmdCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgKCBhY3RpdmVFbC5jbGllbnRXaWR0aCAvIDIgKVxuXHRcdFx0XHRcdHVsLnNjcm9sbExlZnQgPSBjdXJyZW50TGVmdDtcblxuXHRcdFx0XHRcdCQodWwpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dmFyIHRoYXQgPSAkKHRoaXMpLmdldCgwKSxcblx0XHRcdFx0XHRcdFx0bGVmdCA9IHRoYXQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHRcdGlmICggbGVmdCA8IDEgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3N0YXJ0LWZhZGUnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPj0gMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIGxlZnQgPj0gKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBsZWZ0IDwgKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkudHJpZ2dlcignc2Nyb2xsJyk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRleGVjdXRlcigpO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVBY2NvcmRpYW46IGZ1bmN0aW9uKF9zY29wZSwgZXZlbnRUYXJnZXQsIGV2dCkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICQoX3Njb3BlKTtcblx0XHRcdHRhcmdldC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKSxcblx0XHRcdFx0XHRrbGFzc0N0cmwgPSAnYWN0aXZlJyxcblx0XHRcdFx0XHRzcGVlZCA9IDMwMDtcblx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3Moa2xhc3NDdHJsKSApIHtcblx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3Moa2xhc3NDdHJsKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhldmVudFRhcmdldCkuc3RvcCgpLnNsaWRlVXAoc3BlZWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcyhrbGFzc0N0cmwpXG5cdFx0XHRcdFx0LnNpYmxpbmdzKGV2ZW50VGFyZ2V0KS5zdG9wKCkuc2xpZGVEb3duKHNwZWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZU5hdmk6IHtcblx0XHRcdGZsYWc6IHRydWUsXG5cdFx0XHRvcGVuOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBuYXZpID0gJCgnI25hdmknKSxcblx0XHRcdFx0IFx0Ym9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0Ym9keS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cdFx0XHRcdG5hdmkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRpZiAoIHRoaXMuZmxhZyApIHtcblx0XHRcdFx0XHR0aGlzLmZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRuYXZpLmZpbmQoJy5uYXZpLWxpc3QgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZGVwdGgzVG9nZ2xlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCcjbmF2aScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCgnYm9keSA+IC5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGVwdGgzVG9nZ2xlOiBmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCcubmF2aS1saXN0LXN1YiA+IGxpLmhhc0xpc3QgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgbGlzdCA9ICQodGhpcykubmV4dCgnLm5hdmktbGlzdC1zdWItMDInKSxcblx0XHRcdFx0XHRcdHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0XHRzcGVlZCA9IDIwMDtcblx0XHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlRG93bihzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cGFyZW50LnNpYmxpbmdzKCkuZmluZCgnLm5hdmktbGlzdC1zdWItMDInKS5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9LFxuXG5cdHV0aWw6IHtcblxuXHRcdC8vIOyWkeyqvSDsl6zrsLEg7KCc6rGwXG5cdFx0dHJpbTogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRpZiAoc3RyID09IG51bGwgfHwgdHlwZW9mIHN0ciA9PSAndW5kZWZpbmVkJykgcmV0dXJuIFwiXCI7XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHRcdH0sXG5cblx0XHQvL+q4gOyekOyImCDsnpDrpbTquLBcblx0XHRjdXRzdHI6IGZ1bmN0aW9uIGN1dFN0cihzdHIsIGxpbWl0KXsgICAgXG5cdFx0XHR2YXIgc3RyTGVuZ3RoID0gMCxcblx0XHRcdFx0c3RyVGl0bGUgPSBcIlwiLFxuXHRcdFx0XHRzdHJQaWVjZSA9IFwiXCIsXG5cdFx0XHRcdGNvZGUsIGNoO1xuXHRcdFx0XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Y29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpLFxuXHRcdFx0XHRjaCA9IHN0ci5zdWJzdHIoaSwxKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRzdHJQaWVjZSA9IHN0ci5zdWJzdHIoaSwxKVxuXHRcdFx0XHRjb2RlID0gcGFyc2VJbnQoY29kZSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoKGNoIDwgXCIwXCIgfHwgY2ggPiBcIjlcIikgJiYgKGNoIDwgXCJBXCIgfHwgY2ggPiBcIlpcIikgJiYgKChjb2RlID4gMjU1KSB8fCAoY29kZSA8IDApKSlcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAzOyAvL1VURi04IDNieXRlIOuhnCDqs4TsgrBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDE7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdHJMZW5ndGg+bGltaXQpIC8v7KCc7ZWcIOq4uOydtCDtmZXsnbhcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZWxzZSBzdHJUaXRsZSA9IHN0clRpdGxlK3N0clBpZWNlOyAvL+ygnO2VnOq4uOydtCDrs7Tri6Qg7J6R7Jy866m0IOyekOuluCDrrLjsnpDrpbwg67aZ7Jes7KSA64ukLlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0clRpdGxlO1xuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCAqXHRJbWFnZSBwcmVsb2FkZXIgKGMpIHlpa2wxMDA0QGdtYWlsLmNvbSwgMjAxNi4xMVxuXHRcdCAqL1xuXHRcdGltYWdlUHJlbG9hZGVyOiBmdW5jdGlvbihpbWcsIGNhbGxiYWNrKSB7XG5cblx0XHRcdHZhciBjb3VudCA9IDA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggaW1nICkgJiYgdHlwZW9mIGltZyApIHtcblxuXHRcdFx0XHRpbWcuZm9yRWFjaChmdW5jdGlvbihlbCwgaW5kZXgpe1xuXHRcdFx0XHRcdHZhciBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0XHRpbWFnZXMuc3JjID0gaW1nO1xuXHRcdFx0XHRcdGltYWdlcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nICYmIGNvdW50ID09IGltZy5sZW5ndGgpIGNhbGxiYWNrKGltYWdlcyk7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIGltZyA9PSAnc3RyaW5nJyApIHtcblx0XHRcdFx0dmFyIGltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRpbWFnZXMuc3JjID0gaW1nO1xuXHRcdFx0XHRpbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soaW1hZ2VzKTtcblx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8vIG1vYmlsZSBkZXRlY3Rpbmdcblx0XHRpc0RldmljZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+uqqOuwlOydvCBVQVxuXHRcdFx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoZWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5hbmRyb2lkKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5naW5nZXJicmVhZCkgcmV0dXJuICdnaW5nZXJicmVhZCc7XG5cdFx0XHRcdFx0XHRlbHNlIHJldHVybiAnYW5kcm9pZCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLmlvcykgcmV0dXJuICdpb3MnO1xuXHRcdFx0XHRcdGlmICghdGhpcy5hbmRyb2lkICYmICF0aGlzLmlvcykgcmV0dXJuICduby1tb2JpbGUnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRpb3M6IHVhLm1hdGNoKCdpUGhvbmUnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0YW5kcm9pZDogdWEubWF0Y2goJ0FuZHJvaWQnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0Z2luZ2VyYnJlYWQ6IHVhLm1hdGNoKCdBbmRyb2lkIDIuMycpID8gdHJ1ZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZXZpY2VTaXplOiAnZGV2aWNlLXNpemUtJyArIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0fSxcblxuXG5cdC8v7Iqs65287J2065OcIOywuOqzoCDsgqzsnbTtirggOiBodHRwOi8vaWRhbmdlcm8udXMvc3dpcGVyL2FwaS8jLldGc3FIcmFMU0F3XG5cdHN3aXBlcjoge1xuXHRcdF9zY29wZTogJycsXG5cblx0XHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdFx0ZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0cGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXG5cdFx0XHRwYWdpbmF0aW9uVHlwZTogJ2ZyYWN0aW9uJ1xuXHRcdH0sXG5cblx0XHRpbml0OiBmdW5jdGlvbihzY29wZSwgb3B0aW9ucykge1xuXHRcdFx0dGhpcy5fc2NvcGUgPSBzY29wZTtcblx0XHRcdHZhciBhc3NpZ24gPSAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT0gJ3VuZGVmaW5lZCcpID8gJC5leHRlbmQgOiBPYmplY3QuYXNzaWduOyAvL2Fzc2lnbiDtlajsiJgg7KG07J6sIOyXrOu2gCDssrTtgawsIOyXhuycvOuptCAkLmV4dGVuZOuhnCDrjIDssrRcblx0XHRcdG9wdGlvbnMgPSAodHlwZW9mIG9wdGlvbnMgPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5kZWZhdWx0T3B0aW9ucyA6IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7IC8vb3B0aW9ucyDrp6TqsJzrs4DsiJjqsIAgdW5kZWZpbmVkIOydvCDqsr3smrDrpbwg7LK07YGs7ZWY7JesIOyYpOulmCDrsKnsp4Bcblx0XHRcdHRoaXMuc3dpcGVyKG9wdGlvbnMpO1xuXHRcdH0sXG5cblx0XHRzd2lwZXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdCQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInLCBuZXcgU3dpcGVyKHRoaXMuX3Njb3BlLCBvcHRpb25zKSk7XG5cdFx0fSxcblxuXHRcdG1hbmFnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInKTtcblx0XHR9XG5cdH1cblxufTtcblxuXG5cbi8vRE9NIOuhnOuTnO2bhCDtmZTrqbQg67O07Jes7KSMXG53aW4uYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG5cdCQoIGRvY3VtZW50LmJvZHkgKS5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMzAwLCBmdW5jdGlvbigpe1xuXHR9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdHZhciB1dGlsID0gdWkudXRpbCxcblx0XHRjb21tb24gPSB1aS5jb21tb24sXG5cdFx0aXNEZXZpY2UgPSB1dGlsLmlzRGV2aWNlKCk7XG5cblxuXHQvL+u5iCDrp4Htgawg7LGE7Jqw6riwXG5cdGNvbW1vbi5lbXB0eUxpbmtGdW5jKCk7XG5cblx0Ly/qsoDsg4nssL0g7Je06riwXG5cdGNvbW1vbi5zZWFyY2hMYXllcigpO1xuXG5cdC8v66qo67CU7J28IOuEk+ydtCwgT1Mg7YG0656Y7IqkIOyCveyehVxuXHQkKCdib2R5JykuYWRkQ2xhc3MoW2lzRGV2aWNlLmNoZWNrKCksIHV0aWwuZGV2aWNlU2l6ZV0uam9pbignICcpKTtcblxuXHQvL25hdmlnYXRpb24gb3BlblxuXHQkKCdhLmJ0bi1uYXZpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5vcGVuKCk7XG5cdFx0JCgnYm9keSA+IC5kaW1tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHRcdH0pXG5cdH0pO1xuXG5cdC8vc3ViIG5hdmlcblx0aWYgKCAkKCdib2R5JykuaGFzKCcuc3ViLW5hdmknKSApIHtcblx0XHR1aS5jb21tb24uc3VibmF2aVBvc2l0aW9uU2V0KCk7XG5cdH1cblxuXHQvL25hdmlnYXRpb24gY2xvc2Vcblx0JCgnI25hdmkgLmJ0bi1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29tbW9uLnRvZ2dsZU5hdmkuY2xvc2UoKTtcblx0fSk7XG5cblx0Ly/snITroZzqsIDquLBcblx0JCgnYnV0dG9uLnRvLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAzMDAsICdlYXNlSW5PdXRRdWFydCcsIGZ1bmN0aW9uKCl7fSk7XG5cdH0pO1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udC9qcy91aS5jb21tb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250L3Njc3MvY29uY2F0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==