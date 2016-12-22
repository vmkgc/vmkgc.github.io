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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzRhMmY1NjczYjA1ZDNjMTM4MjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJ1aSIsImNvbW1vbiIsImNvbW1vbk5vdGhpbmciLCJlbXB0eUxpbmtGdW5jIiwiYWxsQSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhVGFnIiwiaHJlZiIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsIiwidHJpbSIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZU5hdmkiLCJmbGFnIiwib3BlbiIsIm5hdmkiLCJib2R5IiwiYXBwZW5kIiwiYWRkQ2xhc3MiLCJmaW5kIiwib24iLCJwYXJlbnQiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiZGVwdGgzVG9nZ2xlIiwiY2xvc2UiLCJyZW1vdmUiLCJsaXN0IiwibmV4dCIsInNwZWVkIiwiaGFzQ2xhc3MiLCJzdG9wIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZUNhdGVnb3J5Iiwic2NvcGUiLCJkMSIsImQyIiwiJHRoaXMiLCJzZWFyY2hMYXllciIsImhlYWRlciIsImFkZCIsInN0ciIsInJlcGxhY2UiLCJjdXRzdHIiLCJjdXRTdHIiLCJsaW1pdCIsInN0ckxlbmd0aCIsInN0clRpdGxlIiwic3RyUGllY2UiLCJjb2RlIiwiY2giLCJjaGFyQ29kZUF0Iiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJwYXJzZUludCIsImlzRGV2aWNlIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjaGVjayIsImFuZHJvaWQiLCJnaW5nZXJicmVhZCIsImlvcyIsIm1hdGNoIiwiZGV2aWNlU2l6ZSIsImlubmVyV2lkdGgiLCJzd2lwZXIiLCJfc2NvcGUiLCJkZWZhdWx0T3B0aW9ucyIsImRpcmVjdGlvbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpbml0Iiwib3B0aW9ucyIsImFzc2lnbiIsIk9iamVjdCIsImV4dGVuZCIsImRhdGEiLCJTd2lwZXIiLCJtYW5hZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGUiLCJvcGFjaXR5Iiwiam9pbiIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTs7QUFFQSxLQUFJQSxJQUFJQyxPQUFPRCxDQUFmLEMsQ0FIQTs7QUFJQSxLQUFJRSxNQUFNRCxNQUFWO0FBQUEsS0FDQ0UsTUFBTUMsUUFEUDs7QUFHQUYsS0FBSUcsRUFBSixHQUFTSixPQUFPSSxFQUFQLElBQWE7O0FBRXJCO0FBQ0FDLFVBQVE7QUFDUDtBQUNBQyxrQkFBZSx5QkFBVyxDQUFFLENBRnJCOztBQUlQO0FBQ0FDLGtCQUFlLHlCQUFXO0FBQ3pCO0FBQ0EsUUFBSUMsT0FBT04sSUFBSU8sZ0JBQUosQ0FBcUIsR0FBckIsQ0FBWDtBQUFBLFFBQ0NDLE9BQU8sSUFEUjtBQUFBLFFBRUNDLE9BQU8sSUFGUjtBQUdBLFNBQUssSUFBSUMsSUFBSSxDQUFSLEVBQVdDLFNBQVNMLEtBQUtLLE1BQTlCLEVBQXNDRCxJQUFJQyxNQUExQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDdERGLFlBQU9GLEtBQUtJLENBQUwsQ0FBUDtBQUNBRCxZQUFPRCxLQUFLSSxZQUFMLENBQWtCLE1BQWxCLENBQVA7QUFDQSxTQUFJVixHQUFHVyxJQUFILENBQVFDLElBQVIsQ0FBYUwsSUFBYixLQUFzQixHQUF0QixJQUE2QkEsUUFBUSxJQUF6QyxFQUNDRCxLQUFLTyxZ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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0YTJmNTY3M2IwNWQzYzEzODIzIiwiLy8gaW1wb3J0ICcuL2Rldic7IC8v6rCc67Cc7JqpIOyKpO2BrOumve2KuCDtlITroZzrjZXshZjsi5wg7IKt7KCcXG5pbXBvcnQgJy4uL3Njc3MvY29uY2F0LnNjc3MnO1xuXG52YXIgJCA9IHdpbmRvdy4kO1xudmFyIHdpbiA9IHdpbmRvdyxcblx0ZG9jID0gZG9jdW1lbnQ7XG5cbndpbi51aSA9IHdpbmRvdy51aSB8fCB7XG5cblx0Ly/qs7XthrVcblx0Y29tbW9uOiB7XG5cdFx0Ly8g67mIIO2VqOyImCDtgbTrpq3si5wg7Jik66WYIOuwqeyngFxuXHRcdGNvbW1vbk5vdGhpbmc6IGZ1bmN0aW9uKCkge30sXG5cblx0XHQvLyBh7YOc6re47J2YIGhyZWYg6rCS7J20ICMg7J286rK97JqwIGNvbW1vbk5vdGhpbmcoKeycvOuhnCDrjIDssrRcblx0XHRlbXB0eUxpbmtGdW5jOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vYe2DnOq3uCBocmVm7JeQIOuNlOuvuCDtlajsiJgg7IK97J6FXG5cdFx0XHR2YXIgYWxsQSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJyksXG5cdFx0XHRcdGFUYWcgPSBudWxsLFxuXHRcdFx0XHRocmVmID0gbnVsbDtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhbGxBLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFUYWcgPSBhbGxBW2ldO1xuXHRcdFx0XHRocmVmID0gYVRhZy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHRcdFx0aWYgKHVpLnV0aWwudHJpbShocmVmKSA9PSAnIycgfHwgaHJlZiA9PSBudWxsKVxuXHRcdFx0XHRcdGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgJ2phdmFzY3JpcHQ6dWkuY29tbW9uLmNvbW1vbk5vdGhpbmcoKTsnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dG9nZ2xlTmF2aToge1xuXHRcdFx0ZmxhZzogdHJ1ZSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG5hdmkgPSAkKCcjbmF2aScpLFxuXHRcdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblx0XHRcdFx0bmF2aS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGlmICggdGhpcy5mbGFnICkge1xuXHRcdFx0XHRcdHRoaXMuZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdG5hdmkuZmluZCgnLm5hdmktbGlzdCA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5kZXB0aDNUb2dnbGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQoJyNuYXZpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHQkKCdib2R5ID4gLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXB0aDNUb2dnbGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCQoJy5uYXZpLWxpc3Qtc3ViID4gbGkuaGFzTGlzdCA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBsaXN0ID0gJCh0aGlzKS5uZXh0KCcubmF2aS1saXN0LXN1Yi0wMicpLFxuXHRcdFx0XHRcdFx0cGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKSxcblx0XHRcdFx0XHRcdHNwZWVkID0gMjAwO1xuXHRcdFx0XHRcdGlmICggcGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVEb3duKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRwYXJlbnQuc2libGluZ3MoKS5maW5kKCcubmF2aS1saXN0LXN1Yi0wMicpLnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHRvZ2dsZUNhdGVnb3J5OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzY29wZSA9ICQoJy5jYXRlZ29yeS1saXN0JyksXG5cdFx0XHRcdGQxID0gc2NvcGUuZmluZCgnLmRlcHRoMScpLFxuXHRcdFx0XHRkMiA9IHNjb3BlLmZpbmQoJ2RlcHRoMicpO1xuXG5cdFx0XHRkMS5maW5kKCc+bGk+YScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdFx0cGFyZW50ID0gJHRoaXMucGFyZW50KCksXG5cdFx0XHRcdFx0c3BlZWQgPSAzMDA7XG5cdFx0XHRcdCR0aGlzLm5leHQoJy5kZXB0aDInKS5zbGlkZURvd24oc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cGFyZW50LnNpYmxpbmdzKCkuZmluZCgnLmRlcHRoMicpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdC8v6rKA7IOJIOugiOydtOyWtFxuXHRcdHNlYXJjaExheWVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoZWFkZXIgPSAkKCcjaGVhZGVyJyksXG5cdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0aGVhZGVyLmZpbmQoJy5idG4tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0Ym9keS5maW5kKCcgPiAuc2VhcmNoJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblxuXHRcdFx0XHQkKCcuZGltbScpLmFkZCggYm9keS5maW5kKCc+IC5zZWFyY2ggYnV0dG9uLmJ0bi1jbG9zZScpICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCgnLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fSxcblxuXHR1dGlsOiB7XG5cblx0XHQvLyDslpHsqr0g7Jes67CxIOygnOqxsFxuXHRcdHRyaW06IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0aWYgKHN0ciA9PSBudWxsIHx8IHR5cGVvZiBzdHIgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBcIlwiO1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0XHR9LFxuXG5cdFx0Ly/quIDsnpDsiJgg7J6Q66W06riwXG5cdFx0Y3V0c3RyOiBmdW5jdGlvbiBjdXRTdHIoc3RyLCBsaW1pdCl7ICAgIFxuXHRcdFx0dmFyIHN0ckxlbmd0aCA9IDAsXG5cdFx0XHRcdHN0clRpdGxlID0gXCJcIixcblx0XHRcdFx0c3RyUGllY2UgPSBcIlwiLFxuXHRcdFx0XHRjb2RlLCBjaDtcblx0XHRcdFxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKSxcblx0XHRcdFx0Y2ggPSBzdHIuc3Vic3RyKGksMSkudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0c3RyUGllY2UgPSBzdHIuc3Vic3RyKGksMSlcblx0XHRcdFx0Y29kZSA9IHBhcnNlSW50KGNvZGUpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKChjaCA8IFwiMFwiIHx8IGNoID4gXCI5XCIpICYmIChjaCA8IFwiQVwiIHx8IGNoID4gXCJaXCIpICYmICgoY29kZSA+IDI1NSkgfHwgKGNvZGUgPCAwKSkpXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMzsgLy9VVEYtOCAzYnl0ZSDroZwg6rOE7IKwXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAxO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3RyTGVuZ3RoPmxpbWl0KSAvL+ygnO2VnCDquLjsnbQg7ZmV7J24XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGVsc2Ugc3RyVGl0bGUgPSBzdHJUaXRsZStzdHJQaWVjZTsgLy/soJztlZzquLjsnbQg67O064ukIOyekeycvOuptCDsnpDrpbgg66y47J6Q66W8IOu2meyXrOykgOuLpC5cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJUaXRsZTtcblx0XHR9LFxuXG5cdFx0Ly8gbW9iaWxlIGRldGVjdGluZ1xuXHRcdGlzRGV2aWNlOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v66qo67CU7J28IFVBXG5cdFx0XHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hlY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmFuZHJvaWQpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdpbmdlcmJyZWFkKSByZXR1cm4gJ2dpbmdlcmJyZWFkJztcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuICdhbmRyb2lkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuaW9zKSByZXR1cm4gJ2lvcyc7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmFuZHJvaWQgJiYgIXRoaXMuaW9zKSByZXR1cm4gJ25vLW1vYmlsZSc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlvczogdWEubWF0Y2goJ2lQaG9uZScpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRhbmRyb2lkOiB1YS5tYXRjaCgnQW5kcm9pZCcpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRnaW5nZXJicmVhZDogdWEubWF0Y2goJ0FuZHJvaWQgMi4zJykgPyB0cnVlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRldmljZVNpemU6ICdkZXZpY2Utc2l6ZS0nICsgd2luZG93LmlubmVyV2lkdGhcblxuXHR9LFxuXG5cblx0Ly/siqzrnbzsnbTrk5wg7LC46rOgIOyCrOydtO2KuCA6IGh0dHA6Ly9pZGFuZ2Vyby51cy9zd2lwZXIvYXBpLyMuV0ZzcUhyYUxTQXdcblx0c3dpcGVyOiB7XG5cdFx0X3Njb3BlOiAnJyxcblxuXHRcdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRcdHBhZ2luYXRpb25UeXBlOiAnZnJhY3Rpb24nXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG5cdFx0XHR0aGlzLl9zY29wZSA9IHNjb3BlO1xuXHRcdFx0dmFyIGFzc2lnbiA9ICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PSAndW5kZWZpbmVkJykgPyAkLmV4dGVuZCA6IE9iamVjdC5hc3NpZ247IC8vYXNzaWduIO2VqOyImCDsobTsnqwg7Jes67aAIOyytO2BrCwg7JeG7Jy866m0ICQuZXh0ZW5k66GcIOuMgOyytFxuXHRcdFx0b3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PSAndW5kZWZpbmVkJykgPyB0aGlzLmRlZmF1bHRPcHRpb25zIDogYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTsgLy9vcHRpb25zIOunpOqwnOuzgOyImOqwgCB1bmRlZmluZWQg7J28IOqyveyasOulvCDssrTtgaztlZjsl6wg7Jik66WYIOuwqeyngFxuXHRcdFx0dGhpcy5zd2lwZXIob3B0aW9ucyk7XG5cdFx0fSxcblxuXHRcdHN3aXBlcjogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0JCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicsIG5ldyBTd2lwZXIodGhpcy5fc2NvcGUsIG9wdGlvbnMpKTtcblx0XHR9LFxuXG5cdFx0bWFuYWdlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gJCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicpO1xuXHRcdH1cblx0fVxuXG59O1xuXG5cblxuLy9ET00g66Gc65Oc7ZuEIO2ZlOuptCDrs7Tsl6zspIxcbndpbi5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcblx0JCggZG9jdW1lbnQuYm9keSApLnN0b3AoKS5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAzMDAsIGZ1bmN0aW9uKCl7XG5cdH0pO1xufSk7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0dmFyIHV0aWwgPSB1aS51dGlsLFxuXHRcdGNvbW1vbiA9IHVpLmNvbW1vbixcblx0XHRpc0RldmljZSA9IHV0aWwuaXNEZXZpY2UoKTtcblxuXG5cdC8v67mIIOunge2BrCDssYTsmrDquLBcblx0Y29tbW9uLmVtcHR5TGlua0Z1bmMoKTtcblxuXHQvL+qygOyDieywvSDsl7TquLBcblx0Y29tbW9uLnNlYXJjaExheWVyKCk7XG5cblx0Ly/rqqjrsJTsnbwg64ST7J20LCBPUyDtgbTrnpjsiqQg7IK97J6FXG5cdCQoJ2JvZHknKS5hZGRDbGFzcyhbaXNEZXZpY2UuY2hlY2soKSwgdXRpbC5kZXZpY2VTaXplXS5qb2luKCcgJykpO1xuXG5cdC8vbmF2aWdhdGlvbiBvcGVuXG5cdCQoJ2EuYnRuLW5hdmknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLm9wZW4oKTtcblx0XHQkKCdib2R5ID4gLmRpbW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdFx0fSlcblx0fSk7XG5cblx0Ly9uYXZpZ2F0aW9uIGNsb3NlXG5cdCQoJyNuYXZpIC5idG4tY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdH0pO1xuXG5cdC8v7JyE66Gc6rCA6riwXG5cdCQoJ2J1dHRvbi50by10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJ2JvZHksIGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMzAwLCAnZWFzZUluT3V0UXVhcnQnLCBmdW5jdGlvbigpe30pO1xuXHR9KTtcblxuXG5cdC8vIGtnYy5hY2NvcmRpYW4uaW5pdCgnLmFjY29yZGlhbicpO1xuXG5cdC8vIGNvbW1vbi5sb2FkaW5nQ29tcGxldGUoZnVuY3Rpb24oKSB7XG5cdC8vICAgICAvL2NhbGxiYWNrc1xuXHQvLyB9KTtcblxuXHQvL+qwnOuwnOyaqSDrqZTshJzrk5wg7Iuk7ZaJXG5cdC8vIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoJz9kZXYnKSA+IC0xKSB7XG5cdC8vIFx0ZGV2LmFwcGVuZE1lbnVMaXN0KCk7XG5cdC8vIFx0ZGV2LmFwcGVuZE1lbnVCdG4oKTtcblx0Ly8gfVxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udC9qcy91aS5jb21tb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250L3Njc3MvY29uY2F0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==