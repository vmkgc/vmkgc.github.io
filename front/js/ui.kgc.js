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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzAyNTc3YzJjZDlmMDI2OGUyMmI/MzZkOSIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvanMvdWkuY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9zY3NzL2NvbmNhdC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJ3aW4iLCJkb2MiLCJkb2N1bWVudCIsInVpIiwiY29tbW9uIiwiY29tbW9uTm90aGluZyIsImVtcHR5TGlua0Z1bmMiLCJhbGxBIiwicXVlcnlTZWxlY3RvckFsbCIsImFUYWciLCJocmVmIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInV0aWwiLCJ0cmltIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlQWNjb3JkaWFuIiwiX3Njb3BlIiwiZXZlbnRUYXJnZXQiLCJldnQiLCJ0YXJnZXQiLCJvbiIsInBhcmVudCIsImtsYXNzQ3RybCIsInNwZWVkIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNpYmxpbmdzIiwic3RvcCIsInNsaWRlVXAiLCJhZGRDbGFzcyIsInNsaWRlRG93biIsInRvZ2dsZU5hdmkiLCJmbGFnIiwib3BlbiIsIm5hdmkiLCJib2R5IiwiYXBwZW5kIiwiZmluZCIsImRlcHRoM1RvZ2dsZSIsImNsb3NlIiwicmVtb3ZlIiwibGlzdCIsIm5leHQiLCJzZWFyY2hMYXllciIsImhlYWRlciIsImFkZCIsInN1Ym5hdmlQb3NpdGlvblNldCIsImV4ZWN1dGVyIiwic2NvcGUiLCJlbCIsInVsIiwiZ2V0IiwiZWxMZW5ndGgiLCJhY3RpdmVFbCIsImFsbFdpZHRoIiwiY3VycmVudExlZnQiLCJlcSIsIndpZHRoIiwib3V0ZXJXaWR0aCIsIm9mZnNldExlZnQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxMZWZ0IiwidGhhdCIsImxlZnQiLCJzY3JvbGxXaWR0aCIsInRyaWdnZXIiLCJzdHIiLCJyZXBsYWNlIiwiY3V0c3RyIiwiY3V0U3RyIiwibGltaXQiLCJzdHJMZW5ndGgiLCJzdHJUaXRsZSIsInN0clBpZWNlIiwiY29kZSIsImNoIiwiY2hhckNvZGVBdCIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJpc0RldmljZSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY2hlY2siLCJhbmRyb2lkIiwiZ2luZ2VyYnJlYWQiLCJpb3MiLCJtYXRjaCIsImRldmljZVNpemUiLCJzd2lwZXIiLCJkZWZhdWx0T3B0aW9ucyIsImRpcmVjdGlvbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpbml0Iiwib3B0aW9ucyIsImFzc2lnbiIsIk9iamVjdCIsImV4dGVuZCIsImRhdGEiLCJTd2lwZXIiLCJtYW5hZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGUiLCJvcGFjaXR5Iiwiam9pbiIsImhhcyIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTs7QUFDQTs7Ozs7O0FBTUEsS0FBSUEsSUFBSUMsT0FBT0QsQ0FBZixDLENBUkE7O0FBU0EsS0FBSUUsTUFBTUQsTUFBVjtBQUFBLEtBQ0NFLE1BQU1DLFFBRFA7O0FBR0FGLEtBQUlHLEVBQUosR0FBU0osT0FBT0ksRUFBUCxJQUFhOztBQUVyQjtBQUNBQyxVQUFRO0FBQ1A7QUFDQUMsa0JBQWUseUJBQVcsQ0FBRSxDQUZyQjs7QUFJUDtBQUNBQyxrQkFBZSx5QkFBVztBQUN6QjtBQUNBLFFBQUlDLE9BQU9OLElBQUlPLGdCQUFKLENBQXFCLEdBQXJCLENBQVg7QUFBQSxRQUNDQyxPQUFPLElBRFI7QUFBQSxRQUVDQyxPQUFPLElBRlI7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OztBQUVBO0FBQ0FoSCxJQUFFLFlBQUYsRUFBZ0J3QixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFVO0FBQ3JDbEIsVUFBTzZCLFVBQVAsQ0FBa0JFLElBQWxCO0FBQ0FyQyxLQUFFLGNBQUYsRUFBa0J3QixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFXO0FBQ3hDbEIsV0FBTzZCLFVBQVAsQ0FBa0JRLEtBQWxCO0FBQ0EsSUFGRDtBQUdBLEdBTEQ7O0FBT0E7QUFDQSxNQUFLM0MsRUFBRSxNQUFGLEVBQVVpSCxHQUFWLENBQWMsV0FBZCxDQUFMLEVBQWtDO0FBQ2pDNUcsTUFBR0MsTUFBSCxDQUFVNEMsa0JBQVY7QUFDQTs7QUFFRDtBQUNBbEQsSUFBRSxrQkFBRixFQUFzQndCLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFlBQVU7QUFDM0NsQixVQUFPNkIsVUFBUCxDQUFrQlEsS0FBbEI7QUFDQSxHQUZEOztBQUlBO0FBQ0EzQyxJQUFFLGVBQUYsRUFBbUJ3QixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3hDeEIsS0FBRSxZQUFGLEVBQWdCK0IsSUFBaEIsR0FBdUIrRSxPQUF2QixDQUErQixFQUFDSSxXQUFXLENBQVosRUFBL0IsRUFBK0MsR0FBL0MsRUFBb0QsZ0JBQXBELEVBQXNFLFlBQVUsQ0FBRSxDQUFsRjtBQUNBLEdBRkQ7O0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxFQXBERCxFOzs7Ozs7QUM5T0EsMEMiLCJmaWxlIjoidWkua2djLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwMjU3N2MyY2Q5ZjAyNjhlMjJiIiwiLy8gaW1wb3J0ICcuL2Rldic7IC8v6rCc67Cc7JqpIOyKpO2BrOumve2KuCDtlITroZzrjZXshZjsi5wg7IKt7KCcXG5pbXBvcnQgJy4uL3Njc3MvY29uY2F0LnNjc3MnO1xuLyppbXBvcnQgJy4uL3Njc3Mva2djLmNvbW1vbi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2MubGF5b3V0LnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5zdWIuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLm1haW4uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLnN3aXBlci5zY3NzJzsqL1xuXG52YXIgJCA9IHdpbmRvdy4kO1xudmFyIHdpbiA9IHdpbmRvdyxcblx0ZG9jID0gZG9jdW1lbnQ7XG5cbndpbi51aSA9IHdpbmRvdy51aSB8fCB7XG5cblx0Ly/qs7XthrVcblx0Y29tbW9uOiB7XG5cdFx0Ly8g67mIIO2VqOyImCDtgbTrpq3si5wg7Jik66WYIOuwqeyngFxuXHRcdGNvbW1vbk5vdGhpbmc6IGZ1bmN0aW9uKCkge30sXG5cblx0XHQvLyBh7YOc6re47J2YIGhyZWYg6rCS7J20ICMg7J286rK97JqwIGNvbW1vbk5vdGhpbmcoKeycvOuhnCDrjIDssrRcblx0XHRlbXB0eUxpbmtGdW5jOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vYe2DnOq3uCBocmVm7JeQIOuNlOuvuCDtlajsiJgg7IK97J6FXG5cdFx0XHR2YXIgYWxsQSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJyksXG5cdFx0XHRcdGFUYWcgPSBudWxsLFxuXHRcdFx0XHRocmVmID0gbnVsbDtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhbGxBLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFUYWcgPSBhbGxBW2ldO1xuXHRcdFx0XHRocmVmID0gYVRhZy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHRcdFx0aWYgKHVpLnV0aWwudHJpbShocmVmKSA9PSAnIycgfHwgaHJlZiA9PSBudWxsKVxuXHRcdFx0XHRcdGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgJ2phdmFzY3JpcHQ6dWkuY29tbW9uLmNvbW1vbk5vdGhpbmcoKTsnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dG9nZ2xlQWNjb3JkaWFuOiBmdW5jdGlvbihfc2NvcGUsIGV2ZW50VGFyZ2V0LCBldnQpIHtcblx0XHRcdHZhciB0YXJnZXQgPSAkKF9zY29wZSk7XG5cdFx0XHR0YXJnZXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0a2xhc3NDdHJsID0gJ2FjdGl2ZScsXG5cdFx0XHRcdFx0c3BlZWQgPSAzMDA7XG5cdFx0XHRcdGlmICggcGFyZW50Lmhhc0NsYXNzKGtsYXNzQ3RybCkgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKGtsYXNzQ3RybClcblx0XHRcdFx0XHQuc2libGluZ3MoZXZlbnRUYXJnZXQpLnN0b3AoKS5zbGlkZVVwKHNwZWVkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3Moa2xhc3NDdHJsKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhldmVudFRhcmdldCkuc3RvcCgpLnNsaWRlRG93bihzcGVlZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVOYXZpOiB7XG5cdFx0XHRmbGFnOiB0cnVlLFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbmF2aSA9ICQoJyNuYXZpJyksXG5cdFx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXHRcdFx0XHRuYXZpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0aWYgKCB0aGlzLmZsYWcgKSB7XG5cdFx0XHRcdFx0dGhpcy5mbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0bmF2aS5maW5kKCcubmF2aS1saXN0ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmRlcHRoM1RvZ2dsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCgnI25hdmknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdCQoJ2JvZHkgPiAuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRlcHRoM1RvZ2dsZTogZnVuY3Rpb24oKXtcblx0XHRcdFx0JCgnLm5hdmktbGlzdC1zdWIgPiBsaS5oYXNMaXN0ID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSAkKHRoaXMpLm5leHQoJy5uYXZpLWxpc3Qtc3ViLTAyJyksXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdFx0c3BlZWQgPSAyMDA7XG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZURvd24oc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHBhcmVudC5zaWJsaW5ncygpLmZpbmQoJy5uYXZpLWxpc3Qtc3ViLTAyJykuc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly/qsoDsg4kg66CI7J207Ja0XG5cdFx0c2VhcmNoTGF5ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGhlYWRlciA9ICQoJyNoZWFkZXInKSxcblx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRoZWFkZXIuZmluZCgnLmJ0bi1zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXG5cdFx0XHRcdCQoJy5kaW1tJykuYWRkKCBib2R5LmZpbmQoJz4gLnNlYXJjaCBidXR0b24uYnRuLWNsb3NlJykgKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGJvZHkuZmluZCgnID4gLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKCcuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRzdWJuYXZpUG9zaXRpb25TZXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZXhlY3V0ZXIgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgc2NvcGUgPSAkKCcuc3ViLW5hdmknKSxcblx0XHRcdFx0XHRlbCA9IHNjb3BlLmZpbmQoJ2xpJyksXG5cdFx0XHRcdFx0dWwgPSBzY29wZS5maW5kKCc+IHVsJykuZ2V0KDApLFxuXHRcdFx0XHRcdGVsTGVuZ3RoID0gZWwubGVuZ3RoLFxuXHRcdFx0XHRcdGFjdGl2ZUVsID0gc2NvcGUuZmluZCgnLmFjdGl2ZScpLmdldCgwKSxcblx0XHRcdFx0XHRhbGxXaWR0aCA9IDAsXG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSAwLFxuXHRcdFx0XHRcdGkgPSAwO1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBlbExlbmd0aDsgaSs9MSApIHtcblx0XHRcdFx0XHRhbGxXaWR0aCArPSBlbC5lcShpKS53aWR0aCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBhbGxXaWR0aCA+IHNjb3BlLm91dGVyV2lkdGgoKSApIHtcblx0XHRcdFx0XHRzY29wZS5hZGRDbGFzcygnZW5kLWZhZGUnKTtcblx0XHRcdFx0XHRjdXJyZW50TGVmdCA9IGFjdGl2ZUVsLm9mZnNldExlZnQgLSAod2luZG93LmlubmVyV2lkdGggLyAyKSArICggYWN0aXZlRWwuY2xpZW50V2lkdGggLyAyIClcblx0XHRcdFx0XHR1bC5zY3JvbGxMZWZ0ID0gY3VycmVudExlZnQ7XG5cblx0XHRcdFx0XHQkKHVsKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHZhciB0aGF0ID0gJCh0aGlzKS5nZXQoMCksXG5cdFx0XHRcdFx0XHRcdGxlZnQgPSB0aGF0LnNjcm9sbExlZnQ7XG5cdFx0XHRcdFx0XHRpZiAoIGxlZnQgPCAxICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdzdGFydC1mYWRlJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBsZWZ0ID49IDEgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3N0YXJ0LWZhZGUnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCBsZWZ0ID49ICh0aGF0LnNjcm9sbFdpZHRoIC0gJCh0aGlzKS5wYXJlbnQoKS53aWR0aCgpKSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZW5kLWZhZGUnKVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbGVmdCA8ICh0aGF0LnNjcm9sbFdpZHRoIC0gJCh0aGlzKS5wYXJlbnQoKS53aWR0aCgpKSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnZW5kLWZhZGUnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLnRyaWdnZXIoJ3Njcm9sbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZXhlY3V0ZXIoKTtcblx0XHR9XG5cblx0fSxcblxuXHR1dGlsOiB7XG5cblx0XHQvLyDslpHsqr0g7Jes67CxIOygnOqxsFxuXHRcdHRyaW06IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0aWYgKHN0ciA9PSBudWxsIHx8IHR5cGVvZiBzdHIgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBcIlwiO1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0XHR9LFxuXG5cdFx0Ly/quIDsnpDsiJgg7J6Q66W06riwXG5cdFx0Y3V0c3RyOiBmdW5jdGlvbiBjdXRTdHIoc3RyLCBsaW1pdCl7ICAgIFxuXHRcdFx0dmFyIHN0ckxlbmd0aCA9IDAsXG5cdFx0XHRcdHN0clRpdGxlID0gXCJcIixcblx0XHRcdFx0c3RyUGllY2UgPSBcIlwiLFxuXHRcdFx0XHRjb2RlLCBjaDtcblx0XHRcdFxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKSxcblx0XHRcdFx0Y2ggPSBzdHIuc3Vic3RyKGksMSkudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0c3RyUGllY2UgPSBzdHIuc3Vic3RyKGksMSlcblx0XHRcdFx0Y29kZSA9IHBhcnNlSW50KGNvZGUpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKChjaCA8IFwiMFwiIHx8IGNoID4gXCI5XCIpICYmIChjaCA8IFwiQVwiIHx8IGNoID4gXCJaXCIpICYmICgoY29kZSA+IDI1NSkgfHwgKGNvZGUgPCAwKSkpXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMzsgLy9VVEYtOCAzYnl0ZSDroZwg6rOE7IKwXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAxO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3RyTGVuZ3RoPmxpbWl0KSAvL+ygnO2VnCDquLjsnbQg7ZmV7J24XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGVsc2Ugc3RyVGl0bGUgPSBzdHJUaXRsZStzdHJQaWVjZTsgLy/soJztlZzquLjsnbQg67O064ukIOyekeycvOuptCDsnpDrpbgg66y47J6Q66W8IOu2meyXrOykgOuLpC5cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJUaXRsZTtcblx0XHR9LFxuXG5cdFx0Ly8gbW9iaWxlIGRldGVjdGluZ1xuXHRcdGlzRGV2aWNlOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v66qo67CU7J28IFVBXG5cdFx0XHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hlY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmFuZHJvaWQpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdpbmdlcmJyZWFkKSByZXR1cm4gJ2dpbmdlcmJyZWFkJztcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuICdhbmRyb2lkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuaW9zKSByZXR1cm4gJ2lvcyc7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmFuZHJvaWQgJiYgIXRoaXMuaW9zKSByZXR1cm4gJ25vLW1vYmlsZSc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlvczogdWEubWF0Y2goJ2lQaG9uZScpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRhbmRyb2lkOiB1YS5tYXRjaCgnQW5kcm9pZCcpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRnaW5nZXJicmVhZDogdWEubWF0Y2goJ0FuZHJvaWQgMi4zJykgPyB0cnVlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRldmljZVNpemU6ICdkZXZpY2Utc2l6ZS0nICsgd2luZG93LmlubmVyV2lkdGhcblxuXHR9LFxuXG5cblx0Ly/siqzrnbzsnbTrk5wg7LC46rOgIOyCrOydtO2KuCA6IGh0dHA6Ly9pZGFuZ2Vyby51cy9zd2lwZXIvYXBpLyMuV0ZzcUhyYUxTQXdcblx0c3dpcGVyOiB7XG5cdFx0X3Njb3BlOiAnJyxcblxuXHRcdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRcdHBhZ2luYXRpb25UeXBlOiAnZnJhY3Rpb24nXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG5cdFx0XHR0aGlzLl9zY29wZSA9IHNjb3BlO1xuXHRcdFx0dmFyIGFzc2lnbiA9ICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PSAndW5kZWZpbmVkJykgPyAkLmV4dGVuZCA6IE9iamVjdC5hc3NpZ247IC8vYXNzaWduIO2VqOyImCDsobTsnqwg7Jes67aAIOyytO2BrCwg7JeG7Jy866m0ICQuZXh0ZW5k66GcIOuMgOyytFxuXHRcdFx0b3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PSAndW5kZWZpbmVkJykgPyB0aGlzLmRlZmF1bHRPcHRpb25zIDogYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTsgLy9vcHRpb25zIOunpOqwnOuzgOyImOqwgCB1bmRlZmluZWQg7J28IOqyveyasOulvCDssrTtgaztlZjsl6wg7Jik66WYIOuwqeyngFxuXHRcdFx0dGhpcy5zd2lwZXIob3B0aW9ucyk7XG5cdFx0fSxcblxuXHRcdHN3aXBlcjogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0JCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicsIG5ldyBTd2lwZXIodGhpcy5fc2NvcGUsIG9wdGlvbnMpKTtcblx0XHR9LFxuXG5cdFx0bWFuYWdlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gJCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicpO1xuXHRcdH1cblx0fVxuXG59O1xuXG5cblxuLy9ET00g66Gc65Oc7ZuEIO2ZlOuptCDrs7Tsl6zspIxcbndpbi5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcblx0JCggZG9jdW1lbnQuYm9keSApLnN0b3AoKS5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAzMDAsIGZ1bmN0aW9uKCl7XG5cdH0pO1xufSk7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0dmFyIHV0aWwgPSB1aS51dGlsLFxuXHRcdGNvbW1vbiA9IHVpLmNvbW1vbixcblx0XHRpc0RldmljZSA9IHV0aWwuaXNEZXZpY2UoKTtcblxuXG5cdC8v67mIIOunge2BrCDssYTsmrDquLBcblx0Y29tbW9uLmVtcHR5TGlua0Z1bmMoKTtcblxuXHQvL+qygOyDieywvSDsl7TquLBcblx0Y29tbW9uLnNlYXJjaExheWVyKCk7XG5cblx0Ly/rqqjrsJTsnbwg64ST7J20LCBPUyDtgbTrnpjsiqQg7IK97J6FXG5cdCQoJ2JvZHknKS5hZGRDbGFzcyhbaXNEZXZpY2UuY2hlY2soKSwgdXRpbC5kZXZpY2VTaXplXS5qb2luKCcgJykpO1xuXG5cdC8vbmF2aWdhdGlvbiBvcGVuXG5cdCQoJ2EuYnRuLW5hdmknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLm9wZW4oKTtcblx0XHQkKCdib2R5ID4gLmRpbW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdFx0fSlcblx0fSk7XG5cblx0Ly9zdWIgbmF2aVxuXHRpZiAoICQoJ2JvZHknKS5oYXMoJy5zdWItbmF2aScpICkge1xuXHRcdHVpLmNvbW1vbi5zdWJuYXZpUG9zaXRpb25TZXQoKTtcblx0fVxuXG5cdC8vbmF2aWdhdGlvbiBjbG9zZVxuXHQkKCcjbmF2aSAuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHR9KTtcblxuXHQvL+ychOuhnOqwgOq4sFxuXHQkKCdidXR0b24udG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDMwMCwgJ2Vhc2VJbk91dFF1YXJ0JywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblxuXHQvLyBrZ2MuYWNjb3JkaWFuLmluaXQoJy5hY2NvcmRpYW4nKTtcblxuXHQvLyBjb21tb24ubG9hZGluZ0NvbXBsZXRlKGZ1bmN0aW9uKCkge1xuXHQvLyAgICAgLy9jYWxsYmFja3Ncblx0Ly8gfSk7XG5cblx0Ly/qsJzrsJzsmqkg66mU7ISc65OcIOyLpO2WiVxuXHQvLyBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKCc/ZGV2JykgPiAtMSkge1xuXHQvLyBcdGRldi5hcHBlbmRNZW51TGlzdCgpO1xuXHQvLyBcdGRldi5hcHBlbmRNZW51QnRuKCk7XG5cdC8vIH1cblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnQvanMvdWkuY29tbW9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udC9zY3NzL2NvbmNhdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=