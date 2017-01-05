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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	// import './dev'; //개발용 스크립트 프로덕션시 삭제
	
	
	__webpack_require__(1);
	
	/*import '../scss/kgc.common.scss';
	import '../scss/kgc.layout.scss';
	import '../scss/kgc.sub.scss';
	import '../scss/kgc.main.scss';
	import '../scss/kgc.swiper.scss';*/
	
	window.jQuery = window.$ = $;
	
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
				target.on(evt, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDcxYzA5YzRkOGRlNDRlYTMyOTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJqUXVlcnkiLCIkIiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJ1aSIsImNvbW1vbiIsImNvbW1vbk5vdGhpbmciLCJlbXB0eUxpbmtGdW5jIiwiYWxsQSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhVGFnIiwiaHJlZiIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsIiwidHJpbSIsInNldEF0dHJpYnV0ZSIsInNlYXJjaExheWVyIiwiaGVhZGVyIiwiYm9keSIsImZpbmQiLCJvbiIsImFkZENsYXNzIiwiYXBwZW5kIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJzdWJuYXZpUG9zaXRpb25TZXQiLCJleGVjdXRlciIsInNjb3BlIiwiZWwiLCJ1bCIsImdldCIsImVsTGVuZ3RoIiwiYWN0aXZlRWwiLCJhbGxXaWR0aCIsImN1cnJlbnRMZWZ0IiwiZXEiLCJ3aWR0aCIsIm91dGVyV2lkdGgiLCJvZmZzZXRMZWZ0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsTGVmdCIsInRoYXQiLCJsZWZ0IiwicGFyZW50Iiwic2Nyb2xsV2lkdGgiLCJ0cmlnZ2VyIiwidG9nZ2xlQWNjb3JkaWFuIiwiX3Njb3BlIiwiZXZlbnRUYXJnZXQiLCJldnQiLCJ0YXJnZXQiLCJrbGFzc0N0cmwiLCJzcGVlZCIsImhhc0NsYXNzIiwic2libGluZ3MiLCJzdG9wIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZU5hdmkiLCJmbGFnIiwib3BlbiIsIm5hdmkiLCJkZXB0aDNUb2dnbGUiLCJjbG9zZSIsImxpc3QiLCJuZXh0Iiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaW1hZ2VQcmVsb2FkZXIiLCJpbWciLCJjYWxsYmFjayIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImluZGV4IiwiaW1hZ2VzIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0RldmljZSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY2hlY2siLCJhbmRyb2lkIiwiZ2luZ2VyYnJlYWQiLCJpb3MiLCJtYXRjaCIsImRldmljZVNpemUiLCJzd2lwZXIiLCJkZWZhdWx0T3B0aW9ucyIsImRpcmVjdGlvbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpbml0Iiwib3B0aW9ucyIsImFzc2lnbiIsIk9iamVjdCIsImV4dGVuZCIsImRhdGEiLCJTd2lwZXIiLCJtYW5hZ2VyIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJqb2luIiwiaGFzIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JDQTs7O0FBQ0E7O0FBQ0E7Ozs7OztBQU9BQSxRQUFPQyxNQUFQLEdBQWdCRCxPQUFPRSxDQUFQLEdBQVdBLENBQTNCOztBQUVBLEtBQUlDLE1BQU1ILE1BQVY7QUFBQSxLQUNDSSxNQUFNQyxRQURQOztBQUdBRixLQUFJRyxFQUFKLEdBQVNOLE9BQU9NLEVBQVAsSUFBYTs7QUFFckI7QUFDQUMsVUFBUTtBQUNQO0FBQ0FDLGtCQUFlLHlCQUFXLENBQUUsQ0FG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QUFQLENBQWtCRSxJQUFsQjtBQUNBaEUsS0FBRSxjQUFGLEVBQWtCc0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN4Q2pCLFdBQU95RCxVQUFQLENBQWtCSyxLQUFsQjtBQUNBLElBRkQ7QUFHQSxHQUxEOztBQU9BO0FBQ0EsTUFBS25FLEVBQUUsTUFBRixFQUFVMkgsR0FBVixDQUFjLFdBQWQsQ0FBTCxFQUFrQztBQUNqQ3ZILE1BQUdDLE1BQUgsQ0FBVXVCLGtCQUFWO0FBQ0E7O0FBRUQ7QUFDQTVCLElBQUUsa0JBQUYsRUFBc0JzQixFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQzNDakIsVUFBT3lELFVBQVAsQ0FBa0JLLEtBQWxCO0FBQ0EsR0FGRDs7QUFJQTtBQUNBbkUsSUFBRSxlQUFGLEVBQW1Cc0IsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVTtBQUN4Q3RCLEtBQUUsWUFBRixFQUFnQjJELElBQWhCLEdBQXVCNkQsT0FBdkIsQ0FBK0IsRUFBQ0ksV0FBVyxDQUFaLEVBQS9CLEVBQStDLEdBQS9DLEVBQW9ELGdCQUFwRCxFQUFzRSxZQUFVLENBQUUsQ0FBbEY7QUFDQSxHQUZEO0FBSUEsRUF2Q0QsRTs7Ozs7O0FDN1FBLDBDIiwiZmlsZSI6InVpLmtnYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNzFjMDljNGQ4ZGU0NGVhMzI5OSIsIlxuLy8gaW1wb3J0ICcuL2Rldic7IC8v6rCc67Cc7JqpIOyKpO2BrOumve2KuCDtlITroZzrjZXshZjsi5wg7IKt7KCcXG5pbXBvcnQgJy4uL3Njc3MvY29uY2F0LnNjc3MnO1xuLyppbXBvcnQgJy4uL3Njc3Mva2djLmNvbW1vbi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2MubGF5b3V0LnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5zdWIuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLm1haW4uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLnN3aXBlci5zY3NzJzsqL1xuXG5cbndpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9ICQ7XG5cbnZhciB3aW4gPSB3aW5kb3csXG5cdGRvYyA9IGRvY3VtZW50O1xuXG53aW4udWkgPSB3aW5kb3cudWkgfHwge1xuXG5cdC8v6rO17Ya1XG5cdGNvbW1vbjoge1xuXHRcdC8vIOu5iCDtlajsiJgg7YG066at7IucIOyYpOulmCDrsKnsp4Bcblx0XHRjb21tb25Ob3RoaW5nOiBmdW5jdGlvbigpIHt9LFxuXG5cdFx0Ly8gYe2DnOq3uOydmCBocmVmIOqwkuydtCAjIOydvOqyveyasCBjb21tb25Ob3RoaW5nKCnsnLzroZwg64yA7LK0XG5cdFx0ZW1wdHlMaW5rRnVuYzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2Htg5zqt7ggaHJlZuyXkCDrjZTrr7gg7ZWo7IiYIOyCveyehVxuXHRcdFx0dmFyIGFsbEEgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnYScpLFxuXHRcdFx0XHRhVGFnID0gbnVsbCxcblx0XHRcdFx0aHJlZiA9IG51bGw7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYWxsQS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRhVGFnID0gYWxsQVtpXTtcblx0XHRcdFx0aHJlZiA9IGFUYWcuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cdFx0XHRcdGlmICh1aS51dGlsLnRyaW0oaHJlZikgPT0gJyMnIHx8IGhyZWYgPT0gbnVsbClcblx0XHRcdFx0XHRhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsICdqYXZhc2NyaXB0OnVpLmNvbW1vbi5jb21tb25Ob3RoaW5nKCk7Jyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8v6rKA7IOJIOugiOydtOyWtFxuXHRcdHNlYXJjaExheWVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoZWFkZXIgPSAkKCcjaGVhZGVyJyksXG5cdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0aGVhZGVyLmZpbmQoJy5idG4tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0Ym9keS5maW5kKCcgPiAuc2VhcmNoJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblxuXHRcdFx0XHQkKCcuZGltbScpLmFkZCggYm9keS5maW5kKCc+IC5zZWFyY2ggYnV0dG9uLmJ0bi1jbG9zZScpICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCgnLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0c3VibmF2aVBvc2l0aW9uU2V0OiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGV4ZWN1dGVyID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHNjb3BlID0gJCgnLnN1Yi1uYXZpJyksXG5cdFx0XHRcdFx0ZWwgPSBzY29wZS5maW5kKCdsaScpLFxuXHRcdFx0XHRcdHVsID0gc2NvcGUuZmluZCgnPiB1bCcpLmdldCgwKSxcblx0XHRcdFx0XHRlbExlbmd0aCA9IGVsLmxlbmd0aCxcblx0XHRcdFx0XHRhY3RpdmVFbCA9IHNjb3BlLmZpbmQoJy5hY3RpdmUnKS5nZXQoMCksXG5cdFx0XHRcdFx0YWxsV2lkdGggPSAwLFxuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gMCxcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0Zm9yICggOyBpIDwgZWxMZW5ndGg7IGkrPTEgKSB7XG5cdFx0XHRcdFx0YWxsV2lkdGggKz0gZWwuZXEoaSkud2lkdGgoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggYWxsV2lkdGggPiBzY29wZS5vdXRlcldpZHRoKCkgKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWRkQ2xhc3MoJ2VuZC1mYWRlJyk7XG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSBhY3RpdmVFbC5vZmZzZXRMZWZ0IC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKyAoIGFjdGl2ZUVsLmNsaWVudFdpZHRoIC8gMiApXG5cdFx0XHRcdFx0dWwuc2Nyb2xsTGVmdCA9IGN1cnJlbnRMZWZ0O1xuXG5cdFx0XHRcdFx0JCh1bCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR2YXIgdGhhdCA9ICQodGhpcykuZ2V0KDApLFxuXHRcdFx0XHRcdFx0XHRsZWZ0ID0gdGhhdC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRcdFx0aWYgKCBsZWZ0IDwgMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbGVmdCA+PSAxICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdzdGFydC1mYWRlJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICggbGVmdCA+PSAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPCAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KS50cmlnZ2VyKCdzY3JvbGwnKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGV4ZWN1dGVyKCk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZUFjY29yZGlhbjogZnVuY3Rpb24oX3Njb3BlLCBldmVudFRhcmdldCwgZXZ0KSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChfc2NvcGUpO1xuXHRcdFx0dGFyZ2V0Lm9uKGV2dCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0a2xhc3NDdHJsID0gJ2FjdGl2ZScsXG5cdFx0XHRcdFx0c3BlZWQgPSAzMDA7XG5cdFx0XHRcdGlmICggcGFyZW50Lmhhc0NsYXNzKGtsYXNzQ3RybCkgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKGtsYXNzQ3RybClcblx0XHRcdFx0XHQuc2libGluZ3MoZXZlbnRUYXJnZXQpLnN0b3AoKS5zbGlkZVVwKHNwZWVkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3Moa2xhc3NDdHJsKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhldmVudFRhcmdldCkuc3RvcCgpLnNsaWRlRG93bihzcGVlZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVOYXZpOiB7XG5cdFx0XHRmbGFnOiB0cnVlLFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbmF2aSA9ICQoJyNuYXZpJyksXG5cdFx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXHRcdFx0XHRuYXZpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0aWYgKCB0aGlzLmZsYWcgKSB7XG5cdFx0XHRcdFx0dGhpcy5mbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0bmF2aS5maW5kKCcubmF2aS1saXN0ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmRlcHRoM1RvZ2dsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCgnI25hdmknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdCQoJ2JvZHkgPiAuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRlcHRoM1RvZ2dsZTogZnVuY3Rpb24oKXtcblx0XHRcdFx0JCgnLm5hdmktbGlzdC1zdWIgPiBsaS5oYXNMaXN0ID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSAkKHRoaXMpLm5leHQoJy5uYXZpLWxpc3Qtc3ViLTAyJyksXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdFx0c3BlZWQgPSAyMDA7XG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZURvd24oc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHBhcmVudC5zaWJsaW5ncygpLmZpbmQoJy5uYXZpLWxpc3Qtc3ViLTAyJykuc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0fSxcblxuXHR1dGlsOiB7XG5cblx0XHQvLyDslpHsqr0g7Jes67CxIOygnOqxsFxuXHRcdHRyaW06IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0aWYgKHN0ciA9PSBudWxsIHx8IHR5cGVvZiBzdHIgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBcIlwiO1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0XHR9LFxuXG5cdFx0Ly/quIDsnpDsiJgg7J6Q66W06riwXG5cdFx0Y3V0c3RyOiBmdW5jdGlvbiBjdXRTdHIoc3RyLCBsaW1pdCl7ICAgIFxuXHRcdFx0dmFyIHN0ckxlbmd0aCA9IDAsXG5cdFx0XHRcdHN0clRpdGxlID0gXCJcIixcblx0XHRcdFx0c3RyUGllY2UgPSBcIlwiLFxuXHRcdFx0XHRjb2RlLCBjaDtcblx0XHRcdFxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKSxcblx0XHRcdFx0Y2ggPSBzdHIuc3Vic3RyKGksMSkudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0c3RyUGllY2UgPSBzdHIuc3Vic3RyKGksMSlcblx0XHRcdFx0Y29kZSA9IHBhcnNlSW50KGNvZGUpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKChjaCA8IFwiMFwiIHx8IGNoID4gXCI5XCIpICYmIChjaCA8IFwiQVwiIHx8IGNoID4gXCJaXCIpICYmICgoY29kZSA+IDI1NSkgfHwgKGNvZGUgPCAwKSkpXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMzsgLy9VVEYtOCAzYnl0ZSDroZwg6rOE7IKwXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAxO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3RyTGVuZ3RoPmxpbWl0KSAvL+ygnO2VnCDquLjsnbQg7ZmV7J24XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGVsc2Ugc3RyVGl0bGUgPSBzdHJUaXRsZStzdHJQaWVjZTsgLy/soJztlZzquLjsnbQg67O064ukIOyekeycvOuptCDsnpDrpbgg66y47J6Q66W8IOu2meyXrOykgOuLpC5cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJUaXRsZTtcblx0XHR9LFxuXG5cdFx0Lypcblx0XHQgKlx0SW1hZ2UgcHJlbG9hZGVyIChjKSB5aWtsMTAwNEBnbWFpbC5jb20sIDIwMTYuMTFcblx0XHQgKi9cblx0XHRpbWFnZVByZWxvYWRlcjogZnVuY3Rpb24oaW1nLCBjYWxsYmFjaykge1xuXG5cdFx0XHR2YXIgY291bnQgPSAwO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGltZyApICYmIHR5cGVvZiBpbWcgKSB7XG5cblx0XHRcdFx0aW1nLmZvckVhY2goZnVuY3Rpb24oZWwsIGluZGV4KXtcblx0XHRcdFx0XHR2YXIgaW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdFx0aW1hZ2VzLnNyYyA9IGltZztcblx0XHRcdFx0XHRpbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyAmJiBjb3VudCA9PSBpbWcubGVuZ3RoKSBjYWxsYmFjayhpbWFnZXMpO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBpbWcgPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRcdHZhciBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0aW1hZ2VzLnNyYyA9IGltZztcblx0XHRcdFx0aW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGltYWdlcyk7XG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvLyBtb2JpbGUgZGV0ZWN0aW5nXG5cdFx0aXNEZXZpY2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly/rqqjrsJTsnbwgVUFcblx0XHRcdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGVjazogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYW5kcm9pZCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2luZ2VyYnJlYWQpIHJldHVybiAnZ2luZ2VyYnJlYWQnO1xuXHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gJ2FuZHJvaWQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5pb3MpIHJldHVybiAnaW9zJztcblx0XHRcdFx0XHRpZiAoIXRoaXMuYW5kcm9pZCAmJiAhdGhpcy5pb3MpIHJldHVybiAnbm8tbW9iaWxlJztcblx0XHRcdFx0fSxcblx0XHRcdFx0aW9zOiB1YS5tYXRjaCgnaVBob25lJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGFuZHJvaWQ6IHVhLm1hdGNoKCdBbmRyb2lkJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGdpbmdlcmJyZWFkOiB1YS5tYXRjaCgnQW5kcm9pZCAyLjMnKSA/IHRydWUgOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGV2aWNlU2l6ZTogJ2RldmljZS1zaXplLScgKyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdH0sXG5cblxuXHQvL+yKrOudvOydtOuTnCDssLjqs6Ag7IKs7J207Yq4IDogaHR0cDovL2lkYW5nZXJvLnVzL3N3aXBlci9hcGkvIy5XRnNxSHJhTFNBd1xuXHRzd2lwZXI6IHtcblx0XHRfc2NvcGU6ICcnLFxuXG5cdFx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRcdGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0cGFnaW5hdGlvblR5cGU6ICdmcmFjdGlvbidcblx0XHR9LFxuXG5cdFx0aW5pdDogZnVuY3Rpb24oc2NvcGUsIG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuX3Njb3BlID0gc2NvcGU7XG5cdFx0XHR2YXIgYXNzaWduID0gKHR5cGVvZiBPYmplY3QuYXNzaWduID09ICd1bmRlZmluZWQnKSA/ICQuZXh0ZW5kIDogT2JqZWN0LmFzc2lnbjsgLy9hc3NpZ24g7ZWo7IiYIOyhtOyerCDsl6zrtoAg7LK07YGsLCDsl4bsnLzrqbQgJC5leHRlbmTroZwg64yA7LK0XG5cdFx0XHRvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09ICd1bmRlZmluZWQnKSA/IHRoaXMuZGVmYXVsdE9wdGlvbnMgOiBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOyAvL29wdGlvbnMg66ek6rCc67OA7IiY6rCAIHVuZGVmaW5lZCDsnbwg6rK97Jqw66W8IOyytO2BrO2VmOyXrCDsmKTrpZgg67Cp7KeAXG5cdFx0XHR0aGlzLnN3aXBlcihvcHRpb25zKTtcblx0XHR9LFxuXG5cdFx0c3dpcGVyOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHQkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJywgbmV3IFN3aXBlcih0aGlzLl9zY29wZSwgb3B0aW9ucykpO1xuXHRcdH0sXG5cblx0XHRtYW5hZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJyk7XG5cdFx0fVxuXHR9XG5cbn07XG5cblxuXG4vL0RPTSDroZzrk5ztm4Qg7ZmU66m0IOuztOyXrOykjFxud2luLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXHQkKCBkb2N1bWVudC5ib2R5ICkuc3RvcCgpLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDMwMCwgZnVuY3Rpb24oKXtcblx0fSk7XG59KTtcblxuJChmdW5jdGlvbigpIHtcblxuXHR2YXIgdXRpbCA9IHVpLnV0aWwsXG5cdFx0Y29tbW9uID0gdWkuY29tbW9uLFxuXHRcdGlzRGV2aWNlID0gdXRpbC5pc0RldmljZSgpO1xuXG5cblx0Ly/ruYgg66eB7YGsIOyxhOyasOq4sFxuXHRjb21tb24uZW1wdHlMaW5rRnVuYygpO1xuXG5cdC8v6rKA7IOJ7LC9IOyXtOq4sFxuXHRjb21tb24uc2VhcmNoTGF5ZXIoKTtcblxuXHQvL+uqqOuwlOydvCDrhJPsnbQsIE9TIO2BtOuemOyKpCDsgr3snoVcblx0JCgnYm9keScpLmFkZENsYXNzKFtpc0RldmljZS5jaGVjaygpLCB1dGlsLmRldmljZVNpemVdLmpvaW4oJyAnKSk7XG5cblx0Ly9uYXZpZ2F0aW9uIG9wZW5cblx0JCgnYS5idG4tbmF2aScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29tbW9uLnRvZ2dsZU5hdmkub3BlbigpO1xuXHRcdCQoJ2JvZHkgPiAuZGltbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tbW9uLnRvZ2dsZU5hdmkuY2xvc2UoKTtcblx0XHR9KVxuXHR9KTtcblxuXHQvL3N1YiBuYXZpXG5cdGlmICggJCgnYm9keScpLmhhcygnLnN1Yi1uYXZpJykgKSB7XG5cdFx0dWkuY29tbW9uLnN1Ym5hdmlQb3NpdGlvblNldCgpO1xuXHR9XG5cblx0Ly9uYXZpZ2F0aW9uIGNsb3NlXG5cdCQoJyNuYXZpIC5idG4tY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdH0pO1xuXG5cdC8v7JyE66Gc6rCA6riwXG5cdCQoJ2J1dHRvbi50by10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJ2JvZHksIGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMzAwLCAnZWFzZUluT3V0UXVhcnQnLCBmdW5jdGlvbigpe30pO1xuXHR9KTtcblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdWkuY29tbW9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL2NvbmNhdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=