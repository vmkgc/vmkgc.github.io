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
	
							if (left >= that.scrollWidth - $(this).width()) {
								$(this).parent().removeClass('end-fade');
							} else if (left < that.scrollWidth - $(this).width()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTliMzhkZmNhNmY1MzFlMDAwNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJ1aSIsImNvbW1vbiIsImNvbW1vbk5vdGhpbmciLCJlbXB0eUxpbmtGdW5jIiwiYWxsQSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhVGFnIiwiaHJlZiIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsIiwidHJpbSIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZU5hdmkiLCJmbGFnIiwib3BlbiIsIm5hdmkiLCJib2R5IiwiYXBwZW5kIiwiYWRkQ2xhc3MiLCJmaW5kIiwib24iLCJwYXJlbnQiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiZGVwdGgzVG9nZ2xlIiwiY2xvc2UiLCJyZW1vdmUiLCJsaXN0IiwibmV4dCIsInNwZWVkIiwiaGFzQ2xhc3MiLCJzdG9wIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZUNhdGVnb3J5Iiwic2NvcGUiLCJkMSIsImQyIiwiJHRoaXMiLCJzZWFyY2hMYXllciIsImhlYWRlciIsImFkZCIsInN1Ym5hdmlQb3NpdGlvblNldCIsImV4ZWN1dGVyIiwiZWwiLCJ1bCIsImdldCIsImVsTGVuZ3RoIiwiYWN0aXZlRWwiLCJhbGxXaWR0aCIsImN1cnJlbnRMZWZ0IiwiZXEiLCJ3aWR0aCIsIm91dGVyV2lkdGgiLCJvZmZzZXRMZWZ0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsTGVmdCIsInRoYXQiLCJsZWZ0Iiwic2Nyb2xsV2lkdGgiLCJ0cmlnZ2VyIiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaXNEZXZpY2UiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNoZWNrIiwiYW5kcm9pZCIsImdpbmdlcmJyZWFkIiwiaW9zIiwibWF0Y2giLCJkZXZpY2VTaXplIiwic3dpcGVyIiwiX3Njb3BlIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXJlY3Rpb24iLCJsb29wIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25UeXBlIiwiaW5pdCIsIm9wdGlvbnMiLCJhc3NpZ24iLCJPYmplY3QiLCJleHRlbmQiLCJkYXRhIiwiU3dpcGVyIiwibWFuYWdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbmltYXRlIiwib3BhY2l0eSIsImpvaW4iLCJoYXMiLCJzY3JvbGxUb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7O0FBRUEsS0FBSUEsSUFBSUMsT0FBT0QsQ0FBZixDLENBSEE7O0FBSUEsS0FBSUUsTUFBTUQsTUFBVjtBQUFBLEtBQ0NFLE1BQU1DLFFBRFA7O0FBR0FGLEtBQUlHLEVBQUosR0FBU0osT0FBT0ksRUFBUCxJQUFhOztBQUVyQjtBQUNBQyxVQUFRO0FBQ1A7QUFDQUMsa0JBQWUseUJBQVcsQ0FBRSxDQUZyQjs7QUFJUDtBQUNBQyxrQkFBZSx5QkFBVztBQUN6QjtBQUNBLFFBQUlDLE9BQU9OLElBQUlPLGdCQUFKLENBQXFCLEdBQXJCLENBQVg7QUFBQSxRQUNDQyxPQUFPLElBRFI7QUFBQSxRQUVDQyxPQUFPLElBRlI7QUFHQSxTQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxTQUFTTCxL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eUMsR0FBekMsQ0FBbkI7O0FBRUE7QUFDQS9HLElBQUUsWUFBRixFQUFnQjJCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVU7QUFDckNyQixVQUFPYSxVQUFQLENBQWtCRSxJQUFsQjtBQUNBckIsS0FBRSxjQUFGLEVBQWtCMkIsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUN4Q3JCLFdBQU9hLFVBQVAsQ0FBa0JhLEtBQWxCO0FBQ0EsSUFGRDtBQUdBLEdBTEQ7O0FBT0E7QUFDQSxNQUFLaEMsRUFBRSxNQUFGLEVBQVVnSCxHQUFWLENBQWMsV0FBZCxDQUFMLEVBQWtDO0FBQ2pDM0csTUFBR0MsTUFBSCxDQUFVMkMsa0JBQVY7QUFDQTs7QUFFRDtBQUNBakQsSUFBRSxrQkFBRixFQUFzQjJCLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFlBQVU7QUFDM0NyQixVQUFPYSxVQUFQLENBQWtCYSxLQUFsQjtBQUNBLEdBRkQ7O0FBSUE7QUFDQWhDLElBQUUsZUFBRixFQUFtQjJCLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDeEMzQixLQUFFLFlBQUYsRUFBZ0JzQyxJQUFoQixHQUF1QnVFLE9BQXZCLENBQStCLEVBQUNJLFdBQVcsQ0FBWixFQUEvQixFQUErQyxHQUEvQyxFQUFvRCxnQkFBcEQsRUFBc0UsWUFBVSxDQUFFLENBQWxGO0FBQ0EsR0FGRDs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLEVBcERELEU7Ozs7OztBQzVPQSwwQyIsImZpbGUiOiJ1aS5rZ2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTliMzhkZmNhNmY1MzFlMDAwNmIiLCIvLyBpbXBvcnQgJy4vZGV2JzsgLy/qsJzrsJzsmqkg7Iqk7YGs66a97Yq4IO2UhOuhnOuNleyFmOyLnCDsgq3soJxcbmltcG9ydCAnLi4vc2Nzcy9jb25jYXQuc2Nzcyc7XG5cbnZhciAkID0gd2luZG93LiQ7XG52YXIgd2luID0gd2luZG93LFxuXHRkb2MgPSBkb2N1bWVudDtcblxud2luLnVpID0gd2luZG93LnVpIHx8IHtcblxuXHQvL+qzte2GtVxuXHRjb21tb246IHtcblx0XHQvLyDruYgg7ZWo7IiYIO2BtOumreyLnCDsmKTrpZgg67Cp7KeAXG5cdFx0Y29tbW9uTm90aGluZzogZnVuY3Rpb24oKSB7fSxcblxuXHRcdC8vIGHtg5zqt7jsnZggaHJlZiDqsJLsnbQgIyDsnbzqsr3smrAgY29tbW9uTm90aGluZygp7Jy866GcIOuMgOyytFxuXHRcdGVtcHR5TGlua0Z1bmM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9h7YOc6re4IGhyZWbsl5Ag642U66+4IO2VqOyImCDsgr3snoVcblx0XHRcdHZhciBhbGxBID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSxcblx0XHRcdFx0YVRhZyA9IG51bGwsXG5cdFx0XHRcdGhyZWYgPSBudWxsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFsbEEubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YVRhZyA9IGFsbEFbaV07XG5cdFx0XHRcdGhyZWYgPSBhVGFnLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdFx0XHRpZiAodWkudXRpbC50cmltKGhyZWYpID09ICcjJyB8fCBocmVmID09IG51bGwpXG5cdFx0XHRcdFx0YVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDp1aS5jb21tb24uY29tbW9uTm90aGluZygpOycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR0b2dnbGVOYXZpOiB7XG5cdFx0XHRmbGFnOiB0cnVlLFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbmF2aSA9ICQoJyNuYXZpJyksXG5cdFx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXHRcdFx0XHRuYXZpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0aWYgKCB0aGlzLmZsYWcgKSB7XG5cdFx0XHRcdFx0dGhpcy5mbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0bmF2aS5maW5kKCcubmF2aS1saXN0ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmRlcHRoM1RvZ2dsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCgnI25hdmknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdCQoJ2JvZHkgPiAuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRlcHRoM1RvZ2dsZTogZnVuY3Rpb24oKXtcblx0XHRcdFx0JCgnLm5hdmktbGlzdC1zdWIgPiBsaS5oYXNMaXN0ID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSAkKHRoaXMpLm5leHQoJy5uYXZpLWxpc3Qtc3ViLTAyJyksXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdFx0c3BlZWQgPSAyMDA7XG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZURvd24oc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHBhcmVudC5zaWJsaW5ncygpLmZpbmQoJy5uYXZpLWxpc3Qtc3ViLTAyJykuc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dG9nZ2xlQ2F0ZWdvcnk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNjb3BlID0gJCgnLmNhdGVnb3J5LWxpc3QnKSxcblx0XHRcdFx0ZDEgPSBzY29wZS5maW5kKCcuZGVwdGgxJyksXG5cdFx0XHRcdGQyID0gc2NvcGUuZmluZCgnZGVwdGgyJyk7XG5cblx0XHRcdGQxLmZpbmQoJz5saT5hJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoKSxcblx0XHRcdFx0XHRzcGVlZCA9IDMwMDtcblx0XHRcdFx0JHRoaXMubmV4dCgnLmRlcHRoMicpLnNsaWRlRG93bihzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRwYXJlbnQuc2libGluZ3MoKS5maW5kKCcuZGVwdGgyJykuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Ly/qsoDsg4kg66CI7J207Ja0XG5cdFx0c2VhcmNoTGF5ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGhlYWRlciA9ICQoJyNoZWFkZXInKSxcblx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRoZWFkZXIuZmluZCgnLmJ0bi1zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXG5cdFx0XHRcdCQoJy5kaW1tJykuYWRkKCBib2R5LmZpbmQoJz4gLnNlYXJjaCBidXR0b24uYnRuLWNsb3NlJykgKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGJvZHkuZmluZCgnID4gLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKCcuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRzdWJuYXZpUG9zaXRpb25TZXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZXhlY3V0ZXIgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgc2NvcGUgPSAkKCcuc3ViLW5hdmknKSxcblx0XHRcdFx0XHRlbCA9IHNjb3BlLmZpbmQoJ2xpJyksXG5cdFx0XHRcdFx0dWwgPSBzY29wZS5maW5kKCc+IHVsJykuZ2V0KDApLFxuXHRcdFx0XHRcdGVsTGVuZ3RoID0gZWwubGVuZ3RoLFxuXHRcdFx0XHRcdGFjdGl2ZUVsID0gc2NvcGUuZmluZCgnLmFjdGl2ZScpLmdldCgwKSxcblx0XHRcdFx0XHRhbGxXaWR0aCA9IDAsXG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSAwLFxuXHRcdFx0XHRcdGkgPSAwO1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBlbExlbmd0aDsgaSs9MSApIHtcblx0XHRcdFx0XHRcdGFsbFdpZHRoICs9IGVsLmVxKGkpLndpZHRoKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGFsbFdpZHRoID4gc2NvcGUub3V0ZXJXaWR0aCgpICkge1xuXHRcdFx0XHRcdHNjb3BlLmFkZENsYXNzKCdlbmQtZmFkZScpO1xuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gYWN0aXZlRWwub2Zmc2V0TGVmdCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgKCBhY3RpdmVFbC5jbGllbnRXaWR0aCAvIDIgKVxuXHRcdFx0XHRcdHVsLnNjcm9sbExlZnQgPSBjdXJyZW50TGVmdDtcblxuXHRcdFx0XHRcdCQodWwpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dmFyIHRoYXQgPSAkKHRoaXMpLmdldCgwKSxcblx0XHRcdFx0XHRcdFx0bGVmdCA9IHRoYXQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHRcdGlmICggbGVmdCA8IDEgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3N0YXJ0LWZhZGUnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPj0gMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIGxlZnQgPj0gKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBsZWZ0IDwgKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkudHJpZ2dlcignc2Nyb2xsJyk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRleGVjdXRlcigpO1xuXHRcdH1cblxuXHR9LFxuXG5cdHV0aWw6IHtcblxuXHRcdC8vIOyWkeyqvSDsl6zrsLEg7KCc6rGwXG5cdFx0dHJpbTogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRpZiAoc3RyID09IG51bGwgfHwgdHlwZW9mIHN0ciA9PSAndW5kZWZpbmVkJykgcmV0dXJuIFwiXCI7XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHRcdH0sXG5cblx0XHQvL+q4gOyekOyImCDsnpDrpbTquLBcblx0XHRjdXRzdHI6IGZ1bmN0aW9uIGN1dFN0cihzdHIsIGxpbWl0KXsgICAgXG5cdFx0XHR2YXIgc3RyTGVuZ3RoID0gMCxcblx0XHRcdFx0c3RyVGl0bGUgPSBcIlwiLFxuXHRcdFx0XHRzdHJQaWVjZSA9IFwiXCIsXG5cdFx0XHRcdGNvZGUsIGNoO1xuXHRcdFx0XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Y29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpLFxuXHRcdFx0XHRjaCA9IHN0ci5zdWJzdHIoaSwxKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRzdHJQaWVjZSA9IHN0ci5zdWJzdHIoaSwxKVxuXHRcdFx0XHRjb2RlID0gcGFyc2VJbnQoY29kZSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoKGNoIDwgXCIwXCIgfHwgY2ggPiBcIjlcIikgJiYgKGNoIDwgXCJBXCIgfHwgY2ggPiBcIlpcIikgJiYgKChjb2RlID4gMjU1KSB8fCAoY29kZSA8IDApKSlcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAzOyAvL1VURi04IDNieXRlIOuhnCDqs4TsgrBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDE7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdHJMZW5ndGg+bGltaXQpIC8v7KCc7ZWcIOq4uOydtCDtmZXsnbhcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZWxzZSBzdHJUaXRsZSA9IHN0clRpdGxlK3N0clBpZWNlOyAvL+ygnO2VnOq4uOydtCDrs7Tri6Qg7J6R7Jy866m0IOyekOuluCDrrLjsnpDrpbwg67aZ7Jes7KSA64ukLlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0clRpdGxlO1xuXHRcdH0sXG5cblx0XHQvLyBtb2JpbGUgZGV0ZWN0aW5nXG5cdFx0aXNEZXZpY2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly/rqqjrsJTsnbwgVUFcblx0XHRcdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGVjazogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYW5kcm9pZCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2luZ2VyYnJlYWQpIHJldHVybiAnZ2luZ2VyYnJlYWQnO1xuXHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gJ2FuZHJvaWQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5pb3MpIHJldHVybiAnaW9zJztcblx0XHRcdFx0XHRpZiAoIXRoaXMuYW5kcm9pZCAmJiAhdGhpcy5pb3MpIHJldHVybiAnbm8tbW9iaWxlJztcblx0XHRcdFx0fSxcblx0XHRcdFx0aW9zOiB1YS5tYXRjaCgnaVBob25lJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGFuZHJvaWQ6IHVhLm1hdGNoKCdBbmRyb2lkJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGdpbmdlcmJyZWFkOiB1YS5tYXRjaCgnQW5kcm9pZCAyLjMnKSA/IHRydWUgOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGV2aWNlU2l6ZTogJ2RldmljZS1zaXplLScgKyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdH0sXG5cblxuXHQvL+yKrOudvOydtOuTnCDssLjqs6Ag7IKs7J207Yq4IDogaHR0cDovL2lkYW5nZXJvLnVzL3N3aXBlci9hcGkvIy5XRnNxSHJhTFNBd1xuXHRzd2lwZXI6IHtcblx0XHRfc2NvcGU6ICcnLFxuXG5cdFx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRcdGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0cGFnaW5hdGlvblR5cGU6ICdmcmFjdGlvbidcblx0XHR9LFxuXG5cdFx0aW5pdDogZnVuY3Rpb24oc2NvcGUsIG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuX3Njb3BlID0gc2NvcGU7XG5cdFx0XHR2YXIgYXNzaWduID0gKHR5cGVvZiBPYmplY3QuYXNzaWduID09ICd1bmRlZmluZWQnKSA/ICQuZXh0ZW5kIDogT2JqZWN0LmFzc2lnbjsgLy9hc3NpZ24g7ZWo7IiYIOyhtOyerCDsl6zrtoAg7LK07YGsLCDsl4bsnLzrqbQgJC5leHRlbmTroZwg64yA7LK0XG5cdFx0XHRvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09ICd1bmRlZmluZWQnKSA/IHRoaXMuZGVmYXVsdE9wdGlvbnMgOiBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOyAvL29wdGlvbnMg66ek6rCc67OA7IiY6rCAIHVuZGVmaW5lZCDsnbwg6rK97Jqw66W8IOyytO2BrO2VmOyXrCDsmKTrpZgg67Cp7KeAXG5cdFx0XHR0aGlzLnN3aXBlcihvcHRpb25zKTtcblx0XHR9LFxuXG5cdFx0c3dpcGVyOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHQkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJywgbmV3IFN3aXBlcih0aGlzLl9zY29wZSwgb3B0aW9ucykpO1xuXHRcdH0sXG5cblx0XHRtYW5hZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJyk7XG5cdFx0fVxuXHR9XG5cbn07XG5cblxuXG4vL0RPTSDroZzrk5ztm4Qg7ZmU66m0IOuztOyXrOykjFxud2luLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXHQkKCBkb2N1bWVudC5ib2R5ICkuc3RvcCgpLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDMwMCwgZnVuY3Rpb24oKXtcblx0fSk7XG59KTtcblxuJChmdW5jdGlvbigpIHtcblxuXHR2YXIgdXRpbCA9IHVpLnV0aWwsXG5cdFx0Y29tbW9uID0gdWkuY29tbW9uLFxuXHRcdGlzRGV2aWNlID0gdXRpbC5pc0RldmljZSgpO1xuXG5cblx0Ly/ruYgg66eB7YGsIOyxhOyasOq4sFxuXHRjb21tb24uZW1wdHlMaW5rRnVuYygpO1xuXG5cdC8v6rKA7IOJ7LC9IOyXtOq4sFxuXHRjb21tb24uc2VhcmNoTGF5ZXIoKTtcblxuXHQvL+uqqOuwlOydvCDrhJPsnbQsIE9TIO2BtOuemOyKpCDsgr3snoVcblx0JCgnYm9keScpLmFkZENsYXNzKFtpc0RldmljZS5jaGVjaygpLCB1dGlsLmRldmljZVNpemVdLmpvaW4oJyAnKSk7XG5cblx0Ly9uYXZpZ2F0aW9uIG9wZW5cblx0JCgnYS5idG4tbmF2aScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29tbW9uLnRvZ2dsZU5hdmkub3BlbigpO1xuXHRcdCQoJ2JvZHkgPiAuZGltbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tbW9uLnRvZ2dsZU5hdmkuY2xvc2UoKTtcblx0XHR9KVxuXHR9KTtcblxuXHQvL3N1YiBuYXZpXG5cdGlmICggJCgnYm9keScpLmhhcygnLnN1Yi1uYXZpJykgKSB7XG5cdFx0dWkuY29tbW9uLnN1Ym5hdmlQb3NpdGlvblNldCgpO1xuXHR9XG5cblx0Ly9uYXZpZ2F0aW9uIGNsb3NlXG5cdCQoJyNuYXZpIC5idG4tY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdH0pO1xuXG5cdC8v7JyE66Gc6rCA6riwXG5cdCQoJ2J1dHRvbi50by10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJ2JvZHksIGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMzAwLCAnZWFzZUluT3V0UXVhcnQnLCBmdW5jdGlvbigpe30pO1xuXHR9KTtcblxuXG5cdC8vIGtnYy5hY2NvcmRpYW4uaW5pdCgnLmFjY29yZGlhbicpO1xuXG5cdC8vIGNvbW1vbi5sb2FkaW5nQ29tcGxldGUoZnVuY3Rpb24oKSB7XG5cdC8vICAgICAvL2NhbGxiYWNrc1xuXHQvLyB9KTtcblxuXHQvL+qwnOuwnOyaqSDrqZTshJzrk5wg7Iuk7ZaJXG5cdC8vIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoJz9kZXYnKSA+IC0xKSB7XG5cdC8vIFx0ZGV2LmFwcGVuZE1lbnVMaXN0KCk7XG5cdC8vIFx0ZGV2LmFwcGVuZE1lbnVCdG4oKTtcblx0Ly8gfVxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udC9qcy91aS5jb21tb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250L3Njc3MvY29uY2F0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==