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
	
	__webpack_require__(1);
	
	/*import '../scss/kgc.common.scss';
	import '../scss/kgc.layout.scss';
	import '../scss/kgc.sub.scss';
	import '../scss/kgc.main.scss';
	import '../scss/kgc.swiper.scss';*/
	
	var $ = window.$; // import './dev'; //개발용 스크립트 프로덕션시 삭제
	
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
	
		// kgc.accordian.init('.accordian');
	
		// common.loadingComplete(function() {
		//     //callbacks
		// });
	
		//개발용 메서드 실행
		// if (location.href.indexOf('?dev') > -1) {
		// 	dev.appendMenuList();
		// 	dev.appendMenuBtn();
		// }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTVhNGM4MjVlNDMzNjcxMmUxN2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJ1aSIsImNvbW1vbiIsImNvbW1vbk5vdGhpbmciLCJlbXB0eUxpbmtGdW5jIiwiYWxsQSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhVGFnIiwiaHJlZiIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsIiwidHJpbSIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUFjY29yZGlhbiIsIl9zY29wZSIsImV2ZW50VGFyZ2V0IiwiZXZ0IiwidGFyZ2V0Iiwib24iLCJwYXJlbnQiLCJrbGFzc0N0cmwiLCJzcGVlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzaWJsaW5ncyIsInN0b3AiLCJzbGlkZVVwIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iLCJ0b2dnbGVOYXZpIiwiZmxhZyIsIm9wZW4iLCJuYXZpIiwiYm9keSIsImFwcGVuZCIsImZpbmQiLCJkZXB0aDNUb2dnbGUiLCJjbG9zZSIsInJlbW92ZSIsImxpc3QiLCJuZXh0Iiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJhZGQiLCJzdWJuYXZpUG9zaXRpb25TZXQiLCJleGVjdXRlciIsInNjb3BlIiwiZWwiLCJ1bCIsImdldCIsImVsTGVuZ3RoIiwiYWN0aXZlRWwiLCJhbGxXaWR0aCIsImN1cnJlbnRMZWZ0IiwiZXEiLCJ3aWR0aCIsIm91dGVyV2lkdGgiLCJvZmZzZXRMZWZ0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsTGVmdCIsInRoYXQiLCJsZWZ0Iiwic2Nyb2xsV2lkdGgiLCJ0cmlnZ2VyIiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaXNEZXZpY2UiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNoZWNrIiwiYW5kcm9pZCIsImdpbmdlcmJyZWFkIiwiaW9zIiwibWF0Y2giLCJkZXZpY2VTaXplIiwic3dpcGVyIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXJlY3Rpb24iLCJsb29wIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25UeXBlIiwiaW5pdCIsIm9wdGlvbnMiLCJhc3NpZ24iLCJPYmplY3QiLCJleHRlbmQiLCJkYXRhIiwiU3dpcGVyIiwibWFuYWdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbmltYXRlIiwib3BhY2l0eSIsImpvaW4iLCJoYXMiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7O0FBQ0E7Ozs7OztBQU1BLEtBQUlBLElBQUlDLE9BQU9ELENBQWYsQyxDQVJBOztBQVNBLEtBQUlFLE1BQU1ELE1BQVY7QUFBQSxLQUNDRSxNQUFNQyxRQURQOztBQUdBRixLQUFJRyxFQUFKLEdBQVNKLE9BQU9JLEVBQVAsSUFBYTs7QUFFckI7QUFDQUMsVUFBUTtBQUNQO0FBQ0FDLGtCQUFlLHlCQUFXLENBQUUsQ0FGckI7O0FBSVA7QUFDQUMsa0JBQWUseUJBQVc7QUFDekI7QUFDQSxRQUFJQyxPQUFPTixJQUFJTyxnQkFBSixDQUFxQixHQUFyQixDQUFYO0FBQUEsUUFDQ0MsT0FBTyxJQURSO0FBQUEsUUFFQ0MsT0FBTyxJQUZSO0FBR0Es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QTtBQUNBaEgsSUFBRSxZQUFGLEVBQWdCd0IsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVTtBQUNyQ2xCLFVBQU82QixVQUFQLENBQWtCRSxJQUFsQjtBQUNBckMsS0FBRSxjQUFGLEVBQWtCd0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN4Q2xCLFdBQU82QixVQUFQLENBQWtCUSxLQUFsQjtBQUNBLElBRkQ7QUFHQSxHQUxEOztBQU9BO0FBQ0EsTUFBSzNDLEVBQUUsTUFBRixFQUFVaUgsR0FBVixDQUFjLFdBQWQsQ0FBTCxFQUFrQztBQUNqQzVHLE1BQUdDLE1BQUgsQ0FBVTRDLGtCQUFWO0FBQ0E7O0FBRUQ7QUFDQWxELElBQUUsa0JBQUYsRUFBc0J3QixFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQzNDbEIsVUFBTzZCLFVBQVAsQ0FBa0JRLEtBQWxCO0FBQ0EsR0FGRDs7QUFJQTtBQUNBM0MsSUFBRSxlQUFGLEVBQW1Cd0IsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVTtBQUN4Q3hCLEtBQUUsWUFBRixFQUFnQitCLElBQWhCLEdBQXVCK0UsT0FBdkIsQ0FBK0IsRUFBQ0ksV0FBVyxDQUFaLEVBQS9CLEVBQStDLEdBQS9DLEVBQW9ELGdCQUFwRCxFQUFzRSxZQUFVLENBQUUsQ0FBbEY7QUFDQSxHQUZEOztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsRUFwREQsRTs7Ozs7O0FDOU9BLDBDIiwiZmlsZSI6InVpLmtnYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NWE0YzgyNWU0MzM2NzEyZTE3YSIsIi8vIGltcG9ydCAnLi9kZXYnOyAvL+qwnOuwnOyaqSDsiqTtgazrpr3tirgg7ZSE66Gc642V7IWY7IucIOyCreygnFxuaW1wb3J0ICcuLi9zY3NzL2NvbmNhdC5zY3NzJztcbi8qaW1wb3J0ICcuLi9zY3NzL2tnYy5jb21tb24uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLmxheW91dC5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2Muc3ViLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5tYWluLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5zd2lwZXIuc2Nzcyc7Ki9cblxudmFyICQgPSB3aW5kb3cuJDtcbnZhciB3aW4gPSB3aW5kb3csXG5cdGRvYyA9IGRvY3VtZW50O1xuXG53aW4udWkgPSB3aW5kb3cudWkgfHwge1xuXG5cdC8v6rO17Ya1XG5cdGNvbW1vbjoge1xuXHRcdC8vIOu5iCDtlajsiJgg7YG066at7IucIOyYpOulmCDrsKnsp4Bcblx0XHRjb21tb25Ob3RoaW5nOiBmdW5jdGlvbigpIHt9LFxuXG5cdFx0Ly8gYe2DnOq3uOydmCBocmVmIOqwkuydtCAjIOydvOqyveyasCBjb21tb25Ob3RoaW5nKCnsnLzroZwg64yA7LK0XG5cdFx0ZW1wdHlMaW5rRnVuYzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2Htg5zqt7ggaHJlZuyXkCDrjZTrr7gg7ZWo7IiYIOyCveyehVxuXHRcdFx0dmFyIGFsbEEgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnYScpLFxuXHRcdFx0XHRhVGFnID0gbnVsbCxcblx0XHRcdFx0aHJlZiA9IG51bGw7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYWxsQS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRhVGFnID0gYWxsQVtpXTtcblx0XHRcdFx0aHJlZiA9IGFUYWcuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cdFx0XHRcdGlmICh1aS51dGlsLnRyaW0oaHJlZikgPT0gJyMnIHx8IGhyZWYgPT0gbnVsbClcblx0XHRcdFx0XHRhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsICdqYXZhc2NyaXB0OnVpLmNvbW1vbi5jb21tb25Ob3RoaW5nKCk7Jyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHRvZ2dsZUFjY29yZGlhbjogZnVuY3Rpb24oX3Njb3BlLCBldmVudFRhcmdldCwgZXZ0KSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChfc2NvcGUpO1xuXHRcdFx0dGFyZ2V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdGtsYXNzQ3RybCA9ICdhY3RpdmUnLFxuXHRcdFx0XHRcdHNwZWVkID0gMzAwO1xuXHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcyhrbGFzc0N0cmwpICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDbGFzcyhrbGFzc0N0cmwpXG5cdFx0XHRcdFx0LnNpYmxpbmdzKGV2ZW50VGFyZ2V0KS5zdG9wKCkuc2xpZGVVcChzcGVlZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKGtsYXNzQ3RybClcblx0XHRcdFx0XHQuc2libGluZ3MoZXZlbnRUYXJnZXQpLnN0b3AoKS5zbGlkZURvd24oc3BlZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlTmF2aToge1xuXHRcdFx0ZmxhZzogdHJ1ZSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG5hdmkgPSAkKCcjbmF2aScpLFxuXHRcdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblx0XHRcdFx0bmF2aS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGlmICggdGhpcy5mbGFnICkge1xuXHRcdFx0XHRcdHRoaXMuZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdG5hdmkuZmluZCgnLm5hdmktbGlzdCA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5kZXB0aDNUb2dnbGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQoJyNuYXZpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHQkKCdib2R5ID4gLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXB0aDNUb2dnbGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCQoJy5uYXZpLWxpc3Qtc3ViID4gbGkuaGFzTGlzdCA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBsaXN0ID0gJCh0aGlzKS5uZXh0KCcubmF2aS1saXN0LXN1Yi0wMicpLFxuXHRcdFx0XHRcdFx0cGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKSxcblx0XHRcdFx0XHRcdHNwZWVkID0gMjAwO1xuXHRcdFx0XHRcdGlmICggcGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVEb3duKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRwYXJlbnQuc2libGluZ3MoKS5maW5kKCcubmF2aS1saXN0LXN1Yi0wMicpLnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8v6rKA7IOJIOugiOydtOyWtFxuXHRcdHNlYXJjaExheWVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoZWFkZXIgPSAkKCcjaGVhZGVyJyksXG5cdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0aGVhZGVyLmZpbmQoJy5idG4tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0Ym9keS5maW5kKCcgPiAuc2VhcmNoJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblxuXHRcdFx0XHQkKCcuZGltbScpLmFkZCggYm9keS5maW5kKCc+IC5zZWFyY2ggYnV0dG9uLmJ0bi1jbG9zZScpICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCgnLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0c3VibmF2aVBvc2l0aW9uU2V0OiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGV4ZWN1dGVyID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHNjb3BlID0gJCgnLnN1Yi1uYXZpJyksXG5cdFx0XHRcdFx0ZWwgPSBzY29wZS5maW5kKCdsaScpLFxuXHRcdFx0XHRcdHVsID0gc2NvcGUuZmluZCgnPiB1bCcpLmdldCgwKSxcblx0XHRcdFx0XHRlbExlbmd0aCA9IGVsLmxlbmd0aCxcblx0XHRcdFx0XHRhY3RpdmVFbCA9IHNjb3BlLmZpbmQoJy5hY3RpdmUnKS5nZXQoMCksXG5cdFx0XHRcdFx0YWxsV2lkdGggPSAwLFxuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gMCxcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0Zm9yICggOyBpIDwgZWxMZW5ndGg7IGkrPTEgKSB7XG5cdFx0XHRcdFx0YWxsV2lkdGggKz0gZWwuZXEoaSkud2lkdGgoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggYWxsV2lkdGggPiBzY29wZS5vdXRlcldpZHRoKCkgKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWRkQ2xhc3MoJ2VuZC1mYWRlJyk7XG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSBhY3RpdmVFbC5vZmZzZXRMZWZ0IC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKyAoIGFjdGl2ZUVsLmNsaWVudFdpZHRoIC8gMiApXG5cdFx0XHRcdFx0dWwuc2Nyb2xsTGVmdCA9IGN1cnJlbnRMZWZ0O1xuXG5cdFx0XHRcdFx0JCh1bCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR2YXIgdGhhdCA9ICQodGhpcykuZ2V0KDApLFxuXHRcdFx0XHRcdFx0XHRsZWZ0ID0gdGhhdC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRcdFx0aWYgKCBsZWZ0IDwgMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbGVmdCA+PSAxICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdzdGFydC1mYWRlJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICggbGVmdCA+PSAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPCAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KS50cmlnZ2VyKCdzY3JvbGwnKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGV4ZWN1dGVyKCk7XG5cdFx0fVxuXG5cdH0sXG5cblx0dXRpbDoge1xuXG5cdFx0Ly8g7JaR7Kq9IOyXrOuwsSDsoJzqsbBcblx0XHR0cmltOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdGlmIChzdHIgPT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09ICd1bmRlZmluZWQnKSByZXR1cm4gXCJcIjtcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdFx0fSxcblxuXHRcdC8v6riA7J6Q7IiYIOyekOultOq4sFxuXHRcdGN1dHN0cjogZnVuY3Rpb24gY3V0U3RyKHN0ciwgbGltaXQpeyAgICBcblx0XHRcdHZhciBzdHJMZW5ndGggPSAwLFxuXHRcdFx0XHRzdHJUaXRsZSA9IFwiXCIsXG5cdFx0XHRcdHN0clBpZWNlID0gXCJcIixcblx0XHRcdFx0Y29kZSwgY2g7XG5cdFx0XHRcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSksXG5cdFx0XHRcdGNoID0gc3RyLnN1YnN0cihpLDEpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHN0clBpZWNlID0gc3RyLnN1YnN0cihpLDEpXG5cdFx0XHRcdGNvZGUgPSBwYXJzZUludChjb2RlKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICgoY2ggPCBcIjBcIiB8fCBjaCA+IFwiOVwiKSAmJiAoY2ggPCBcIkFcIiB8fCBjaCA+IFwiWlwiKSAmJiAoKGNvZGUgPiAyNTUpIHx8IChjb2RlIDwgMCkpKVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDM7IC8vVVRGLTggM2J5dGUg66GcIOqzhOyCsFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN0ckxlbmd0aD5saW1pdCkgLy/soJztlZwg6ri47J20IO2ZleyduFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRlbHNlIHN0clRpdGxlID0gc3RyVGl0bGUrc3RyUGllY2U7IC8v7KCc7ZWc6ri47J20IOuztOuLpCDsnpHsnLzrqbQg7J6Q66W4IOusuOyekOulvCDrtpnsl6zspIDri6QuXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyVGl0bGU7XG5cdFx0fSxcblxuXHRcdC8vIG1vYmlsZSBkZXRlY3Rpbmdcblx0XHRpc0RldmljZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+uqqOuwlOydvCBVQVxuXHRcdFx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoZWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5hbmRyb2lkKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5naW5nZXJicmVhZCkgcmV0dXJuICdnaW5nZXJicmVhZCc7XG5cdFx0XHRcdFx0XHRlbHNlIHJldHVybiAnYW5kcm9pZCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLmlvcykgcmV0dXJuICdpb3MnO1xuXHRcdFx0XHRcdGlmICghdGhpcy5hbmRyb2lkICYmICF0aGlzLmlvcykgcmV0dXJuICduby1tb2JpbGUnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRpb3M6IHVhLm1hdGNoKCdpUGhvbmUnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0YW5kcm9pZDogdWEubWF0Y2goJ0FuZHJvaWQnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0Z2luZ2VyYnJlYWQ6IHVhLm1hdGNoKCdBbmRyb2lkIDIuMycpID8gdHJ1ZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZXZpY2VTaXplOiAnZGV2aWNlLXNpemUtJyArIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0fSxcblxuXG5cdC8v7Iqs65287J2065OcIOywuOqzoCDsgqzsnbTtirggOiBodHRwOi8vaWRhbmdlcm8udXMvc3dpcGVyL2FwaS8jLldGc3FIcmFMU0F3XG5cdHN3aXBlcjoge1xuXHRcdF9zY29wZTogJycsXG5cblx0XHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdFx0ZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0cGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXG5cdFx0XHRwYWdpbmF0aW9uVHlwZTogJ2ZyYWN0aW9uJ1xuXHRcdH0sXG5cblx0XHRpbml0OiBmdW5jdGlvbihzY29wZSwgb3B0aW9ucykge1xuXHRcdFx0dGhpcy5fc2NvcGUgPSBzY29wZTtcblx0XHRcdHZhciBhc3NpZ24gPSAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT0gJ3VuZGVmaW5lZCcpID8gJC5leHRlbmQgOiBPYmplY3QuYXNzaWduOyAvL2Fzc2lnbiDtlajsiJgg7KG07J6sIOyXrOu2gCDssrTtgawsIOyXhuycvOuptCAkLmV4dGVuZOuhnCDrjIDssrRcblx0XHRcdG9wdGlvbnMgPSAodHlwZW9mIG9wdGlvbnMgPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5kZWZhdWx0T3B0aW9ucyA6IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7IC8vb3B0aW9ucyDrp6TqsJzrs4DsiJjqsIAgdW5kZWZpbmVkIOydvCDqsr3smrDrpbwg7LK07YGs7ZWY7JesIOyYpOulmCDrsKnsp4Bcblx0XHRcdHRoaXMuc3dpcGVyKG9wdGlvbnMpO1xuXHRcdH0sXG5cblx0XHRzd2lwZXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdCQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInLCBuZXcgU3dpcGVyKHRoaXMuX3Njb3BlLCBvcHRpb25zKSk7XG5cdFx0fSxcblxuXHRcdG1hbmFnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInKTtcblx0XHR9XG5cdH1cblxufTtcblxuXG5cbi8vRE9NIOuhnOuTnO2bhCDtmZTrqbQg67O07Jes7KSMXG53aW4uYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG5cdCQoIGRvY3VtZW50LmJvZHkgKS5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMzAwLCBmdW5jdGlvbigpe1xuXHR9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdHZhciB1dGlsID0gdWkudXRpbCxcblx0XHRjb21tb24gPSB1aS5jb21tb24sXG5cdFx0aXNEZXZpY2UgPSB1dGlsLmlzRGV2aWNlKCk7XG5cblxuXHQvL+u5iCDrp4Htgawg7LGE7Jqw6riwXG5cdGNvbW1vbi5lbXB0eUxpbmtGdW5jKCk7XG5cblx0Ly/qsoDsg4nssL0g7Je06riwXG5cdGNvbW1vbi5zZWFyY2hMYXllcigpO1xuXG5cdC8v66qo67CU7J28IOuEk+ydtCwgT1Mg7YG0656Y7IqkIOyCveyehVxuXHQkKCdib2R5JykuYWRkQ2xhc3MoW2lzRGV2aWNlLmNoZWNrKCksIHV0aWwuZGV2aWNlU2l6ZV0uam9pbignICcpKTtcblxuXHQvL25hdmlnYXRpb24gb3BlblxuXHQkKCdhLmJ0bi1uYXZpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5vcGVuKCk7XG5cdFx0JCgnYm9keSA+IC5kaW1tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHRcdH0pXG5cdH0pO1xuXG5cdC8vc3ViIG5hdmlcblx0aWYgKCAkKCdib2R5JykuaGFzKCcuc3ViLW5hdmknKSApIHtcblx0XHR1aS5jb21tb24uc3VibmF2aVBvc2l0aW9uU2V0KCk7XG5cdH1cblxuXHQvL25hdmlnYXRpb24gY2xvc2Vcblx0JCgnI25hdmkgLmJ0bi1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29tbW9uLnRvZ2dsZU5hdmkuY2xvc2UoKTtcblx0fSk7XG5cblx0Ly/snITroZzqsIDquLBcblx0JCgnYnV0dG9uLnRvLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAzMDAsICdlYXNlSW5PdXRRdWFydCcsIGZ1bmN0aW9uKCl7fSk7XG5cdH0pO1xuXG5cblx0Ly8ga2djLmFjY29yZGlhbi5pbml0KCcuYWNjb3JkaWFuJyk7XG5cblx0Ly8gY29tbW9uLmxvYWRpbmdDb21wbGV0ZShmdW5jdGlvbigpIHtcblx0Ly8gICAgIC8vY2FsbGJhY2tzXG5cdC8vIH0pO1xuXG5cdC8v6rCc67Cc7JqpIOuplOyEnOuTnCDsi6Ttlolcblx0Ly8gaWYgKGxvY2F0aW9uLmhyZWYuaW5kZXhPZignP2RldicpID4gLTEpIHtcblx0Ly8gXHRkZXYuYXBwZW5kTWVudUxpc3QoKTtcblx0Ly8gXHRkZXYuYXBwZW5kTWVudUJ0bigpO1xuXHQvLyB9XG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9