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
	
			toggleCategory: function toggleCategory() {
				var scope = $('.category-list'),
				    d1 = scope.find('.depth1'),
				    d2 = scope.find('depth2');
	
				d1.find('>li>a').on('click', function () {
					var $this = $(this),
					    parent = $this.parent(),
					    speed = 300;
					$this.next('.depth2').slideDown(speed, function () {
						parent.addClass('active');
					});
	
					parent.siblings().find('.depth2').slideUp(speed, function () {
						$(this).parent().removeClass('active');
					});
				});
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
						allWidth += el.eq(i).outerWidth();
					}
					if (allWidth > scope.outerWidth()) {
						scope.addClass('end-fade');
						currentLeft = activeEl.offsetLeft - window.innerWidth / 2 + activeEl.clientWidth / 2;
						ul.scrollLeft = currentLeft;
					}
					ul.on('scroll', function () {
						var $this = $(this).get(0);
						if ($this.scrollLeft < 1) {}
					}).trigger('scroll');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjA4YWI4OGY5YTQ4ZjhiZWJlMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJ1aSIsImNvbW1vbiIsImNvbW1vbk5vdGhpbmciLCJlbXB0eUxpbmtGdW5jIiwiYWxsQSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhVGFnIiwiaHJlZiIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsIiwidHJpbSIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZU5hdmkiLCJmbGFnIiwib3BlbiIsIm5hdmkiLCJib2R5IiwiYXBwZW5kIiwiYWRkQ2xhc3MiLCJmaW5kIiwib24iLCJwYXJlbnQiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiZGVwdGgzVG9nZ2xlIiwiY2xvc2UiLCJyZW1vdmUiLCJsaXN0IiwibmV4dCIsInNwZWVkIiwiaGFzQ2xhc3MiLCJzdG9wIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZUNhdGVnb3J5Iiwic2NvcGUiLCJkMSIsImQyIiwiJHRoaXMiLCJzZWFyY2hMYXllciIsImhlYWRlciIsImFkZCIsInN1Ym5hdmlQb3NpdGlvblNldCIsImV4ZWN1dGVyIiwiZWwiLCJ1bCIsImdldCIsImVsTGVuZ3RoIiwiYWN0aXZlRWwiLCJhbGxXaWR0aCIsImN1cnJlbnRMZWZ0IiwiZXEiLCJvdXRlcldpZHRoIiwib2Zmc2V0TGVmdCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbExlZnQiLCJ0cmlnZ2VyIiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaXNEZXZpY2UiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNoZWNrIiwiYW5kcm9pZCIsImdpbmdlcmJyZWFkIiwiaW9zIiwibWF0Y2giLCJkZXZpY2VTaXplIiwic3dpcGVyIiwiX3Njb3BlIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXJlY3Rpb24iLCJsb29wIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25UeXBlIiwiaW5pdCIsIm9wdGlvbnMiLCJhc3NpZ24iLCJPYmplY3QiLCJleHRlbmQiLCJkYXRhIiwiU3dpcGVyIiwibWFuYWdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbmltYXRlIiwib3BhY2l0eSIsImpvaW4iLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7O0FBRUEsS0FBSUEsSUFBSUMsT0FBT0QsQ0FBZixDLENBSEE7O0FBSUEsS0FBSUUsTUFBTUQsTUFBVjtBQUFBLEtBQ0NFLE1BQU1DLFFBRFA7O0FBR0FGLEtBQUlHLEVBQUosR0FBU0osT0FBT0ksRUFBUCxJQUFhOztBQUVyQjtBQUNBQyxVQUFRO0FBQ1A7QUFDQUMsa0JBQWUseUJBQVcsQ0FBRSxDQUZyQjs7QUFJUDtBQUNBQyxrQkFBZSx5QkFBVztBQUN6QjtBQUNBLFFBQUlDLE9BQU9OLElBQUlPLGdCQUFKLENBQXFCLEdBQXJCLENBQVg7QUFBQSxRQUNDQyxPQUFPLElBRFI7QUFBQSxRQUVDQyxPQUFPLElBRlI7QUFHQSxTQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxTQUFTTCxLQUFLSyxNQUE5QixFQUFzQ0QsSUFBSUMsTUFBMUMsRUFBa0RELEdBQWxE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QUFFLENBQWxGO0FBQ0EsR0FGRDs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLEVBL0NELEU7Ozs7OztBQ2pPQSwwQyIsImZpbGUiOiJ1aS5rZ2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjA4YWI4OGY5YTQ4ZjhiZWJlMzUiLCIvLyBpbXBvcnQgJy4vZGV2JzsgLy/qsJzrsJzsmqkg7Iqk7YGs66a97Yq4IO2UhOuhnOuNleyFmOyLnCDsgq3soJxcbmltcG9ydCAnLi4vc2Nzcy9jb25jYXQuc2Nzcyc7XG5cbnZhciAkID0gd2luZG93LiQ7XG52YXIgd2luID0gd2luZG93LFxuXHRkb2MgPSBkb2N1bWVudDtcblxud2luLnVpID0gd2luZG93LnVpIHx8IHtcblxuXHQvL+qzte2GtVxuXHRjb21tb246IHtcblx0XHQvLyDruYgg7ZWo7IiYIO2BtOumreyLnCDsmKTrpZgg67Cp7KeAXG5cdFx0Y29tbW9uTm90aGluZzogZnVuY3Rpb24oKSB7fSxcblxuXHRcdC8vIGHtg5zqt7jsnZggaHJlZiDqsJLsnbQgIyDsnbzqsr3smrAgY29tbW9uTm90aGluZygp7Jy866GcIOuMgOyytFxuXHRcdGVtcHR5TGlua0Z1bmM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9h7YOc6re4IGhyZWbsl5Ag642U66+4IO2VqOyImCDsgr3snoVcblx0XHRcdHZhciBhbGxBID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSxcblx0XHRcdFx0YVRhZyA9IG51bGwsXG5cdFx0XHRcdGhyZWYgPSBudWxsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFsbEEubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YVRhZyA9IGFsbEFbaV07XG5cdFx0XHRcdGhyZWYgPSBhVGFnLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdFx0XHRpZiAodWkudXRpbC50cmltKGhyZWYpID09ICcjJyB8fCBocmVmID09IG51bGwpXG5cdFx0XHRcdFx0YVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDp1aS5jb21tb24uY29tbW9uTm90aGluZygpOycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR0b2dnbGVOYXZpOiB7XG5cdFx0XHRmbGFnOiB0cnVlLFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbmF2aSA9ICQoJyNuYXZpJyksXG5cdFx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXHRcdFx0XHRuYXZpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0aWYgKCB0aGlzLmZsYWcgKSB7XG5cdFx0XHRcdFx0dGhpcy5mbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0bmF2aS5maW5kKCcubmF2aS1saXN0ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmRlcHRoM1RvZ2dsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCgnI25hdmknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdCQoJ2JvZHkgPiAuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRlcHRoM1RvZ2dsZTogZnVuY3Rpb24oKXtcblx0XHRcdFx0JCgnLm5hdmktbGlzdC1zdWIgPiBsaS5oYXNMaXN0ID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSAkKHRoaXMpLm5leHQoJy5uYXZpLWxpc3Qtc3ViLTAyJyksXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdFx0c3BlZWQgPSAyMDA7XG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZURvd24oc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHBhcmVudC5zaWJsaW5ncygpLmZpbmQoJy5uYXZpLWxpc3Qtc3ViLTAyJykuc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dG9nZ2xlQ2F0ZWdvcnk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNjb3BlID0gJCgnLmNhdGVnb3J5LWxpc3QnKSxcblx0XHRcdFx0ZDEgPSBzY29wZS5maW5kKCcuZGVwdGgxJyksXG5cdFx0XHRcdGQyID0gc2NvcGUuZmluZCgnZGVwdGgyJyk7XG5cblx0XHRcdGQxLmZpbmQoJz5saT5hJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoKSxcblx0XHRcdFx0XHRzcGVlZCA9IDMwMDtcblx0XHRcdFx0JHRoaXMubmV4dCgnLmRlcHRoMicpLnNsaWRlRG93bihzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRwYXJlbnQuc2libGluZ3MoKS5maW5kKCcuZGVwdGgyJykuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly/qsoDsg4kg66CI7J207Ja0XG5cdFx0c2VhcmNoTGF5ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGhlYWRlciA9ICQoJyNoZWFkZXInKSxcblx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRoZWFkZXIuZmluZCgnLmJ0bi1zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXG5cdFx0XHRcdCQoJy5kaW1tJykuYWRkKCBib2R5LmZpbmQoJz4gLnNlYXJjaCBidXR0b24uYnRuLWNsb3NlJykgKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGJvZHkuZmluZCgnID4gLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKCcuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRzdWJuYXZpUG9zaXRpb25TZXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZXhlY3V0ZXIgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgc2NvcGUgPSAkKCcuc3ViLW5hdmknKSxcblx0XHRcdFx0XHRlbCA9IHNjb3BlLmZpbmQoJ2xpJyksXG5cdFx0XHRcdFx0dWwgPSBzY29wZS5maW5kKCc+IHVsJykuZ2V0KDApLFxuXHRcdFx0XHRcdGVsTGVuZ3RoID0gZWwubGVuZ3RoLFxuXHRcdFx0XHRcdGFjdGl2ZUVsID0gc2NvcGUuZmluZCgnLmFjdGl2ZScpLmdldCgwKSxcblx0XHRcdFx0XHRhbGxXaWR0aCA9IDAsXG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSAwLFxuXHRcdFx0XHRcdGkgPSAwO1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBlbExlbmd0aDsgaSs9MSApIHtcblx0XHRcdFx0XHRhbGxXaWR0aCArPSBlbC5lcShpKS5vdXRlcldpZHRoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBhbGxXaWR0aCA+IHNjb3BlLm91dGVyV2lkdGgoKSApIHtcblx0XHRcdFx0XHRzY29wZS5hZGRDbGFzcygnZW5kLWZhZGUnKTtcblx0XHRcdFx0XHRjdXJyZW50TGVmdCA9IGFjdGl2ZUVsLm9mZnNldExlZnQgLSAod2luZG93LmlubmVyV2lkdGggLyAyKSArICggYWN0aXZlRWwuY2xpZW50V2lkdGggLyAyIClcblx0XHRcdFx0XHR1bC5zY3JvbGxMZWZ0ID0gY3VycmVudExlZnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dWwub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKS5nZXQoMCk7XG5cdFx0XHRcdFx0aWYgKCAkdGhpcy5zY3JvbGxMZWZ0IDwgMSApIHtcblxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH0pLnRyaWdnZXIoJ3Njcm9sbCcpO1xuXHRcdFx0fTtcblx0XHRcdGV4ZWN1dGVyKCk7XG5cdFx0fVxuXG5cdH0sXG5cblx0dXRpbDoge1xuXG5cdFx0Ly8g7JaR7Kq9IOyXrOuwsSDsoJzqsbBcblx0XHR0cmltOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdGlmIChzdHIgPT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09ICd1bmRlZmluZWQnKSByZXR1cm4gXCJcIjtcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdFx0fSxcblxuXHRcdC8v6riA7J6Q7IiYIOyekOultOq4sFxuXHRcdGN1dHN0cjogZnVuY3Rpb24gY3V0U3RyKHN0ciwgbGltaXQpeyAgICBcblx0XHRcdHZhciBzdHJMZW5ndGggPSAwLFxuXHRcdFx0XHRzdHJUaXRsZSA9IFwiXCIsXG5cdFx0XHRcdHN0clBpZWNlID0gXCJcIixcblx0XHRcdFx0Y29kZSwgY2g7XG5cdFx0XHRcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSksXG5cdFx0XHRcdGNoID0gc3RyLnN1YnN0cihpLDEpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHN0clBpZWNlID0gc3RyLnN1YnN0cihpLDEpXG5cdFx0XHRcdGNvZGUgPSBwYXJzZUludChjb2RlKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICgoY2ggPCBcIjBcIiB8fCBjaCA+IFwiOVwiKSAmJiAoY2ggPCBcIkFcIiB8fCBjaCA+IFwiWlwiKSAmJiAoKGNvZGUgPiAyNTUpIHx8IChjb2RlIDwgMCkpKVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDM7IC8vVVRGLTggM2J5dGUg66GcIOqzhOyCsFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN0ckxlbmd0aD5saW1pdCkgLy/soJztlZwg6ri47J20IO2ZleyduFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRlbHNlIHN0clRpdGxlID0gc3RyVGl0bGUrc3RyUGllY2U7IC8v7KCc7ZWc6ri47J20IOuztOuLpCDsnpHsnLzrqbQg7J6Q66W4IOusuOyekOulvCDrtpnsl6zspIDri6QuXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyVGl0bGU7XG5cdFx0fSxcblxuXHRcdC8vIG1vYmlsZSBkZXRlY3Rpbmdcblx0XHRpc0RldmljZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+uqqOuwlOydvCBVQVxuXHRcdFx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoZWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5hbmRyb2lkKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5naW5nZXJicmVhZCkgcmV0dXJuICdnaW5nZXJicmVhZCc7XG5cdFx0XHRcdFx0XHRlbHNlIHJldHVybiAnYW5kcm9pZCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLmlvcykgcmV0dXJuICdpb3MnO1xuXHRcdFx0XHRcdGlmICghdGhpcy5hbmRyb2lkICYmICF0aGlzLmlvcykgcmV0dXJuICduby1tb2JpbGUnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRpb3M6IHVhLm1hdGNoKCdpUGhvbmUnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0YW5kcm9pZDogdWEubWF0Y2goJ0FuZHJvaWQnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0Z2luZ2VyYnJlYWQ6IHVhLm1hdGNoKCdBbmRyb2lkIDIuMycpID8gdHJ1ZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZXZpY2VTaXplOiAnZGV2aWNlLXNpemUtJyArIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0fSxcblxuXG5cdC8v7Iqs65287J2065OcIOywuOqzoCDsgqzsnbTtirggOiBodHRwOi8vaWRhbmdlcm8udXMvc3dpcGVyL2FwaS8jLldGc3FIcmFMU0F3XG5cdHN3aXBlcjoge1xuXHRcdF9zY29wZTogJycsXG5cblx0XHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdFx0ZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0cGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXG5cdFx0XHRwYWdpbmF0aW9uVHlwZTogJ2ZyYWN0aW9uJ1xuXHRcdH0sXG5cblx0XHRpbml0OiBmdW5jdGlvbihzY29wZSwgb3B0aW9ucykge1xuXHRcdFx0dGhpcy5fc2NvcGUgPSBzY29wZTtcblx0XHRcdHZhciBhc3NpZ24gPSAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT0gJ3VuZGVmaW5lZCcpID8gJC5leHRlbmQgOiBPYmplY3QuYXNzaWduOyAvL2Fzc2lnbiDtlajsiJgg7KG07J6sIOyXrOu2gCDssrTtgawsIOyXhuycvOuptCAkLmV4dGVuZOuhnCDrjIDssrRcblx0XHRcdG9wdGlvbnMgPSAodHlwZW9mIG9wdGlvbnMgPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5kZWZhdWx0T3B0aW9ucyA6IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7IC8vb3B0aW9ucyDrp6TqsJzrs4DsiJjqsIAgdW5kZWZpbmVkIOydvCDqsr3smrDrpbwg7LK07YGs7ZWY7JesIOyYpOulmCDrsKnsp4Bcblx0XHRcdHRoaXMuc3dpcGVyKG9wdGlvbnMpO1xuXHRcdH0sXG5cblx0XHRzd2lwZXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdCQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInLCBuZXcgU3dpcGVyKHRoaXMuX3Njb3BlLCBvcHRpb25zKSk7XG5cdFx0fSxcblxuXHRcdG1hbmFnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInKTtcblx0XHR9XG5cdH1cblxufTtcblxuXG5cbi8vRE9NIOuhnOuTnO2bhCDtmZTrqbQg67O07Jes7KSMXG53aW4uYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG5cdCQoIGRvY3VtZW50LmJvZHkgKS5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMzAwLCBmdW5jdGlvbigpe1xuXHR9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdHZhciB1dGlsID0gdWkudXRpbCxcblx0XHRjb21tb24gPSB1aS5jb21tb24sXG5cdFx0aXNEZXZpY2UgPSB1dGlsLmlzRGV2aWNlKCk7XG5cblxuXHQvL+u5iCDrp4Htgawg7LGE7Jqw6riwXG5cdGNvbW1vbi5lbXB0eUxpbmtGdW5jKCk7XG5cblx0Ly/qsoDsg4nssL0g7Je06riwXG5cdGNvbW1vbi5zZWFyY2hMYXllcigpO1xuXG5cdC8v66qo67CU7J28IOuEk+ydtCwgT1Mg7YG0656Y7IqkIOyCveyehVxuXHQkKCdib2R5JykuYWRkQ2xhc3MoW2lzRGV2aWNlLmNoZWNrKCksIHV0aWwuZGV2aWNlU2l6ZV0uam9pbignICcpKTtcblxuXHQvL25hdmlnYXRpb24gb3BlblxuXHQkKCdhLmJ0bi1uYXZpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5vcGVuKCk7XG5cdFx0JCgnYm9keSA+IC5kaW1tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHRcdH0pXG5cdH0pO1xuXG5cdC8vbmF2aWdhdGlvbiBjbG9zZVxuXHQkKCcjbmF2aSAuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHR9KTtcblxuXHQvL+ychOuhnOqwgOq4sFxuXHQkKCdidXR0b24udG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDMwMCwgJ2Vhc2VJbk91dFF1YXJ0JywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblxuXHQvLyBrZ2MuYWNjb3JkaWFuLmluaXQoJy5hY2NvcmRpYW4nKTtcblxuXHQvLyBjb21tb24ubG9hZGluZ0NvbXBsZXRlKGZ1bmN0aW9uKCkge1xuXHQvLyAgICAgLy9jYWxsYmFja3Ncblx0Ly8gfSk7XG5cblx0Ly/qsJzrsJzsmqkg66mU7ISc65OcIOyLpO2WiVxuXHQvLyBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKCc/ZGV2JykgPiAtMSkge1xuXHQvLyBcdGRldi5hcHBlbmRNZW51TGlzdCgpO1xuXHQvLyBcdGRldi5hcHBlbmRNZW51QnRuKCk7XG5cdC8vIH1cblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnQvanMvdWkuY29tbW9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udC9zY3NzL2NvbmNhdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=