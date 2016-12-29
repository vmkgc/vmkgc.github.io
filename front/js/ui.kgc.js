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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzg1YzBkYWIzNWU3YzhlZjcxYWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJ1aSIsImNvbW1vbiIsImNvbW1vbk5vdGhpbmciLCJlbXB0eUxpbmtGdW5jIiwiYWxsQSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhVGFnIiwiaHJlZiIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsIiwidHJpbSIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUFjY29yZGlhbiIsIl9zY29wZSIsImV2ZW50VGFyZ2V0IiwiZXZ0IiwidGFyZ2V0Iiwib24iLCJwYXJlbnQiLCJrbGFzc0N0cmwiLCJzcGVlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzaWJsaW5ncyIsInN0b3AiLCJzbGlkZVVwIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iLCJ0b2dnbGVOYXZpIiwiZmxhZyIsIm9wZW4iLCJuYXZpIiwiYm9keSIsImFwcGVuZCIsImZpbmQiLCJkZXB0aDNUb2dnbGUiLCJjbG9zZSIsInJlbW92ZSIsImxpc3QiLCJuZXh0Iiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJhZGQiLCJzdWJuYXZpUG9zaXRpb25TZXQiLCJleGVjdXRlciIsInNjb3BlIiwiZWwiLCJ1bCIsImdldCIsImVsTGVuZ3RoIiwiYWN0aXZlRWwiLCJhbGxXaWR0aCIsImN1cnJlbnRMZWZ0IiwiZXEiLCJ3aWR0aCIsIm91dGVyV2lkdGgiLCJvZmZzZXRMZWZ0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsTGVmdCIsInRoYXQiLCJsZWZ0Iiwic2Nyb2xsV2lkdGgiLCJ0cmlnZ2VyIiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaW1hZ2VQcmVsb2FkZXIiLCJpbWciLCJjYWxsYmFjayIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImluZGV4IiwiaW1hZ2VzIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0RldmljZSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY2hlY2siLCJhbmRyb2lkIiwiZ2luZ2VyYnJlYWQiLCJpb3MiLCJtYXRjaCIsImRldmljZVNpemUiLCJzd2lwZXIiLCJkZWZhdWx0T3B0aW9ucyIsImRpcmVjdGlvbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpbml0Iiwib3B0aW9ucyIsImFzc2lnbiIsIk9iamVjdCIsImV4dGVuZCIsImRhdGEiLCJTd2lwZXIiLCJtYW5hZ2VyIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJqb2luIiwiaGFzIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OytRQ3RDQTs7O0FBQ0E7O0FBQ0E7Ozs7OztBQU1BLEtBQUlBLElBQUlDLE9BQU9ELENBQWY7QUFDQSxLQUFJRSxNQUFNRCxNQUFWO0FBQUEsS0FDQ0UsTUFBTUMsUUFEUDs7QUFHQUYsS0FBSUcsRUFBSixHQUFTSixPQUFPSSxFQUFQLElBQWE7O0FBRXJCO0FBQ0FDLFVBQVE7QUFDUDtBQUNBQyxrQkFBZSx5QkFBVyxDQUFFLENBRnJCOztBQUlQO0FBQ0FDLGtC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RixFQUFrQndCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDeENsQixXQUFPNkIsVUFBUCxDQUFrQlEsS0FBbEI7QUFDQSxJQUZEO0FBR0EsR0FMRDs7QUFPQTtBQUNBLE1BQUszQyxFQUFFLE1BQUYsRUFBVTRILEdBQVYsQ0FBYyxXQUFkLENBQUwsRUFBa0M7QUFDakN2SCxNQUFHQyxNQUFILENBQVU0QyxrQkFBVjtBQUNBOztBQUVEO0FBQ0FsRCxJQUFFLGtCQUFGLEVBQXNCd0IsRUFBdEIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUMzQ2xCLFVBQU82QixVQUFQLENBQWtCUSxLQUFsQjtBQUNBLEdBRkQ7O0FBSUE7QUFDQTNDLElBQUUsZUFBRixFQUFtQndCLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDeEN4QixLQUFFLFlBQUYsRUFBZ0IrQixJQUFoQixHQUF1QjBGLE9BQXZCLENBQStCLEVBQUNJLFdBQVcsQ0FBWixFQUEvQixFQUErQyxHQUEvQyxFQUFvRCxnQkFBcEQsRUFBc0UsWUFBVSxDQUFFLENBQWxGO0FBQ0EsR0FGRDs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLEVBcERELEU7Ozs7OztBQzNRQSwwQyIsImZpbGUiOiJ1aS5rZ2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzg1YzBkYWIzNWU3YzhlZjcxYWYiLCIvLyBpbXBvcnQgJy4vZGV2JzsgLy/qsJzrsJzsmqkg7Iqk7YGs66a97Yq4IO2UhOuhnOuNleyFmOyLnCDsgq3soJxcbmltcG9ydCAnLi4vc2Nzcy9jb25jYXQuc2Nzcyc7XG4vKmltcG9ydCAnLi4vc2Nzcy9rZ2MuY29tbW9uLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5sYXlvdXQuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLnN1Yi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2MubWFpbi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2Muc3dpcGVyLnNjc3MnOyovXG5cbnZhciAkID0gd2luZG93LiQ7XG52YXIgd2luID0gd2luZG93LFxuXHRkb2MgPSBkb2N1bWVudDtcblxud2luLnVpID0gd2luZG93LnVpIHx8IHtcblxuXHQvL+qzte2GtVxuXHRjb21tb246IHtcblx0XHQvLyDruYgg7ZWo7IiYIO2BtOumreyLnCDsmKTrpZgg67Cp7KeAXG5cdFx0Y29tbW9uTm90aGluZzogZnVuY3Rpb24oKSB7fSxcblxuXHRcdC8vIGHtg5zqt7jsnZggaHJlZiDqsJLsnbQgIyDsnbzqsr3smrAgY29tbW9uTm90aGluZygp7Jy866GcIOuMgOyytFxuXHRcdGVtcHR5TGlua0Z1bmM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9h7YOc6re4IGhyZWbsl5Ag642U66+4IO2VqOyImCDsgr3snoVcblx0XHRcdHZhciBhbGxBID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSxcblx0XHRcdFx0YVRhZyA9IG51bGwsXG5cdFx0XHRcdGhyZWYgPSBudWxsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFsbEEubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YVRhZyA9IGFsbEFbaV07XG5cdFx0XHRcdGhyZWYgPSBhVGFnLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdFx0XHRpZiAodWkudXRpbC50cmltKGhyZWYpID09ICcjJyB8fCBocmVmID09IG51bGwpXG5cdFx0XHRcdFx0YVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDp1aS5jb21tb24uY29tbW9uTm90aGluZygpOycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR0b2dnbGVBY2NvcmRpYW46IGZ1bmN0aW9uKF9zY29wZSwgZXZlbnRUYXJnZXQsIGV2dCkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICQoX3Njb3BlKTtcblx0XHRcdHRhcmdldC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKSxcblx0XHRcdFx0XHRrbGFzc0N0cmwgPSAnYWN0aXZlJyxcblx0XHRcdFx0XHRzcGVlZCA9IDMwMDtcblx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3Moa2xhc3NDdHJsKSApIHtcblx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3Moa2xhc3NDdHJsKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhldmVudFRhcmdldCkuc3RvcCgpLnNsaWRlVXAoc3BlZWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcyhrbGFzc0N0cmwpXG5cdFx0XHRcdFx0LnNpYmxpbmdzKGV2ZW50VGFyZ2V0KS5zdG9wKCkuc2xpZGVEb3duKHNwZWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZU5hdmk6IHtcblx0XHRcdGZsYWc6IHRydWUsXG5cdFx0XHRvcGVuOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBuYXZpID0gJCgnI25hdmknKSxcblx0XHRcdFx0IFx0Ym9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0Ym9keS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cdFx0XHRcdG5hdmkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRpZiAoIHRoaXMuZmxhZyApIHtcblx0XHRcdFx0XHR0aGlzLmZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRuYXZpLmZpbmQoJy5uYXZpLWxpc3QgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZGVwdGgzVG9nZ2xlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCcjbmF2aScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCgnYm9keSA+IC5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGVwdGgzVG9nZ2xlOiBmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCcubmF2aS1saXN0LXN1YiA+IGxpLmhhc0xpc3QgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgbGlzdCA9ICQodGhpcykubmV4dCgnLm5hdmktbGlzdC1zdWItMDInKSxcblx0XHRcdFx0XHRcdHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0XHRzcGVlZCA9IDIwMDtcblx0XHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlRG93bihzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cGFyZW50LnNpYmxpbmdzKCkuZmluZCgnLm5hdmktbGlzdC1zdWItMDInKS5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvL+qygOyDiSDroIjsnbTslrRcblx0XHRzZWFyY2hMYXllcjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaGVhZGVyID0gJCgnI2hlYWRlcicpLFxuXHRcdFx0IFx0Ym9keSA9ICQoJ2JvZHknKTtcblx0XHRcdGhlYWRlci5maW5kKCcuYnRuLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJvZHkuZmluZCgnID4gLnNlYXJjaCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0Ym9keS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cblx0XHRcdFx0JCgnLmRpbW0nKS5hZGQoIGJvZHkuZmluZCgnPiAuc2VhcmNoIGJ1dHRvbi5idG4tY2xvc2UnKSApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Ym9keS5maW5kKCcgPiAuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQoJy5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHN1Ym5hdmlQb3NpdGlvblNldDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBleGVjdXRlciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBzY29wZSA9ICQoJy5zdWItbmF2aScpLFxuXHRcdFx0XHRcdGVsID0gc2NvcGUuZmluZCgnbGknKSxcblx0XHRcdFx0XHR1bCA9IHNjb3BlLmZpbmQoJz4gdWwnKS5nZXQoMCksXG5cdFx0XHRcdFx0ZWxMZW5ndGggPSBlbC5sZW5ndGgsXG5cdFx0XHRcdFx0YWN0aXZlRWwgPSBzY29wZS5maW5kKCcuYWN0aXZlJykuZ2V0KDApLFxuXHRcdFx0XHRcdGFsbFdpZHRoID0gMCxcblx0XHRcdFx0XHRjdXJyZW50TGVmdCA9IDAsXG5cdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdGZvciAoIDsgaSA8IGVsTGVuZ3RoOyBpKz0xICkge1xuXHRcdFx0XHRcdGFsbFdpZHRoICs9IGVsLmVxKGkpLndpZHRoKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGFsbFdpZHRoID4gc2NvcGUub3V0ZXJXaWR0aCgpICkge1xuXHRcdFx0XHRcdHNjb3BlLmFkZENsYXNzKCdlbmQtZmFkZScpO1xuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gYWN0aXZlRWwub2Zmc2V0TGVmdCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgKCBhY3RpdmVFbC5jbGllbnRXaWR0aCAvIDIgKVxuXHRcdFx0XHRcdHVsLnNjcm9sbExlZnQgPSBjdXJyZW50TGVmdDtcblxuXHRcdFx0XHRcdCQodWwpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dmFyIHRoYXQgPSAkKHRoaXMpLmdldCgwKSxcblx0XHRcdFx0XHRcdFx0bGVmdCA9IHRoYXQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHRcdGlmICggbGVmdCA8IDEgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3N0YXJ0LWZhZGUnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPj0gMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIGxlZnQgPj0gKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBsZWZ0IDwgKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkudHJpZ2dlcignc2Nyb2xsJyk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRleGVjdXRlcigpO1xuXHRcdH1cblxuXHR9LFxuXG5cdHV0aWw6IHtcblxuXHRcdC8vIOyWkeyqvSDsl6zrsLEg7KCc6rGwXG5cdFx0dHJpbTogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRpZiAoc3RyID09IG51bGwgfHwgdHlwZW9mIHN0ciA9PSAndW5kZWZpbmVkJykgcmV0dXJuIFwiXCI7XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHRcdH0sXG5cblx0XHQvL+q4gOyekOyImCDsnpDrpbTquLBcblx0XHRjdXRzdHI6IGZ1bmN0aW9uIGN1dFN0cihzdHIsIGxpbWl0KXsgICAgXG5cdFx0XHR2YXIgc3RyTGVuZ3RoID0gMCxcblx0XHRcdFx0c3RyVGl0bGUgPSBcIlwiLFxuXHRcdFx0XHRzdHJQaWVjZSA9IFwiXCIsXG5cdFx0XHRcdGNvZGUsIGNoO1xuXHRcdFx0XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Y29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpLFxuXHRcdFx0XHRjaCA9IHN0ci5zdWJzdHIoaSwxKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRzdHJQaWVjZSA9IHN0ci5zdWJzdHIoaSwxKVxuXHRcdFx0XHRjb2RlID0gcGFyc2VJbnQoY29kZSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoKGNoIDwgXCIwXCIgfHwgY2ggPiBcIjlcIikgJiYgKGNoIDwgXCJBXCIgfHwgY2ggPiBcIlpcIikgJiYgKChjb2RlID4gMjU1KSB8fCAoY29kZSA8IDApKSlcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAzOyAvL1VURi04IDNieXRlIOuhnCDqs4TsgrBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDE7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdHJMZW5ndGg+bGltaXQpIC8v7KCc7ZWcIOq4uOydtCDtmZXsnbhcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZWxzZSBzdHJUaXRsZSA9IHN0clRpdGxlK3N0clBpZWNlOyAvL+ygnO2VnOq4uOydtCDrs7Tri6Qg7J6R7Jy866m0IOyekOuluCDrrLjsnpDrpbwg67aZ7Jes7KSA64ukLlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0clRpdGxlO1xuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCAqXHRJbWFnZSBwcmVsb2FkZXIgKGMpIHlpa2wxMDA0QGdtYWlsLmNvbSwgMjAxNi4xMVxuXHRcdCAqL1xuXHRcdGltYWdlUHJlbG9hZGVyOiBmdW5jdGlvbihpbWcsIGNhbGxiYWNrKSB7XG5cblx0XHRcdHZhciBjb3VudCA9IDA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggaW1nICkgJiYgdHlwZW9mIGltZyApIHtcblxuXHRcdFx0XHRpbWcuZm9yRWFjaChmdW5jdGlvbihlbCwgaW5kZXgpe1xuXHRcdFx0XHRcdHZhciBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0XHRpbWFnZXMuc3JjID0gaW1nO1xuXHRcdFx0XHRcdGltYWdlcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nICYmIGNvdW50ID09IGltZy5sZW5ndGgpIGNhbGxiYWNrKGltYWdlcyk7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIGltZyA9PSAnc3RyaW5nJyApIHtcblx0XHRcdFx0dmFyIGltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRpbWFnZXMuc3JjID0gaW1nO1xuXHRcdFx0XHRpbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soaW1hZ2VzKTtcblx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0fVxuXG5cblx0XHR9LFxuXG5cdFx0Ly8gbW9iaWxlIGRldGVjdGluZ1xuXHRcdGlzRGV2aWNlOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v66qo67CU7J28IFVBXG5cdFx0XHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hlY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmFuZHJvaWQpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdpbmdlcmJyZWFkKSByZXR1cm4gJ2dpbmdlcmJyZWFkJztcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuICdhbmRyb2lkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuaW9zKSByZXR1cm4gJ2lvcyc7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmFuZHJvaWQgJiYgIXRoaXMuaW9zKSByZXR1cm4gJ25vLW1vYmlsZSc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlvczogdWEubWF0Y2goJ2lQaG9uZScpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRhbmRyb2lkOiB1YS5tYXRjaCgnQW5kcm9pZCcpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRnaW5nZXJicmVhZDogdWEubWF0Y2goJ0FuZHJvaWQgMi4zJykgPyB0cnVlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRldmljZVNpemU6ICdkZXZpY2Utc2l6ZS0nICsgd2luZG93LmlubmVyV2lkdGhcblxuXHR9LFxuXG5cblx0Ly/siqzrnbzsnbTrk5wg7LC46rOgIOyCrOydtO2KuCA6IGh0dHA6Ly9pZGFuZ2Vyby51cy9zd2lwZXIvYXBpLyMuV0ZzcUhyYUxTQXdcblx0c3dpcGVyOiB7XG5cdFx0X3Njb3BlOiAnJyxcblxuXHRcdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRcdHBhZ2luYXRpb25UeXBlOiAnZnJhY3Rpb24nXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG5cdFx0XHR0aGlzLl9zY29wZSA9IHNjb3BlO1xuXHRcdFx0dmFyIGFzc2lnbiA9ICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PSAndW5kZWZpbmVkJykgPyAkLmV4dGVuZCA6IE9iamVjdC5hc3NpZ247IC8vYXNzaWduIO2VqOyImCDsobTsnqwg7Jes67aAIOyytO2BrCwg7JeG7Jy866m0ICQuZXh0ZW5k66GcIOuMgOyytFxuXHRcdFx0b3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PSAndW5kZWZpbmVkJykgPyB0aGlzLmRlZmF1bHRPcHRpb25zIDogYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTsgLy9vcHRpb25zIOunpOqwnOuzgOyImOqwgCB1bmRlZmluZWQg7J28IOqyveyasOulvCDssrTtgaztlZjsl6wg7Jik66WYIOuwqeyngFxuXHRcdFx0dGhpcy5zd2lwZXIob3B0aW9ucyk7XG5cdFx0fSxcblxuXHRcdHN3aXBlcjogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0JCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicsIG5ldyBTd2lwZXIodGhpcy5fc2NvcGUsIG9wdGlvbnMpKTtcblx0XHR9LFxuXG5cdFx0bWFuYWdlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gJCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicpO1xuXHRcdH1cblx0fVxuXG59O1xuXG5cblxuLy9ET00g66Gc65Oc7ZuEIO2ZlOuptCDrs7Tsl6zspIxcbndpbi5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcblx0JCggZG9jdW1lbnQuYm9keSApLnN0b3AoKS5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAzMDAsIGZ1bmN0aW9uKCl7XG5cdH0pO1xufSk7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0dmFyIHV0aWwgPSB1aS51dGlsLFxuXHRcdGNvbW1vbiA9IHVpLmNvbW1vbixcblx0XHRpc0RldmljZSA9IHV0aWwuaXNEZXZpY2UoKTtcblxuXG5cdC8v67mIIOunge2BrCDssYTsmrDquLBcblx0Y29tbW9uLmVtcHR5TGlua0Z1bmMoKTtcblxuXHQvL+qygOyDieywvSDsl7TquLBcblx0Y29tbW9uLnNlYXJjaExheWVyKCk7XG5cblx0Ly/rqqjrsJTsnbwg64ST7J20LCBPUyDtgbTrnpjsiqQg7IK97J6FXG5cdCQoJ2JvZHknKS5hZGRDbGFzcyhbaXNEZXZpY2UuY2hlY2soKSwgdXRpbC5kZXZpY2VTaXplXS5qb2luKCcgJykpO1xuXG5cdC8vbmF2aWdhdGlvbiBvcGVuXG5cdCQoJ2EuYnRuLW5hdmknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLm9wZW4oKTtcblx0XHQkKCdib2R5ID4gLmRpbW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdFx0fSlcblx0fSk7XG5cblx0Ly9zdWIgbmF2aVxuXHRpZiAoICQoJ2JvZHknKS5oYXMoJy5zdWItbmF2aScpICkge1xuXHRcdHVpLmNvbW1vbi5zdWJuYXZpUG9zaXRpb25TZXQoKTtcblx0fVxuXG5cdC8vbmF2aWdhdGlvbiBjbG9zZVxuXHQkKCcjbmF2aSAuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHR9KTtcblxuXHQvL+ychOuhnOqwgOq4sFxuXHQkKCdidXR0b24udG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDMwMCwgJ2Vhc2VJbk91dFF1YXJ0JywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblxuXHQvLyBrZ2MuYWNjb3JkaWFuLmluaXQoJy5hY2NvcmRpYW4nKTtcblxuXHQvLyBjb21tb24ubG9hZGluZ0NvbXBsZXRlKGZ1bmN0aW9uKCkge1xuXHQvLyAgICAgLy9jYWxsYmFja3Ncblx0Ly8gfSk7XG5cblx0Ly/qsJzrsJzsmqkg66mU7ISc65OcIOyLpO2WiVxuXHQvLyBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKCc/ZGV2JykgPiAtMSkge1xuXHQvLyBcdGRldi5hcHBlbmRNZW51TGlzdCgpO1xuXHQvLyBcdGRldi5hcHBlbmRNZW51QnRuKCk7XG5cdC8vIH1cblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnQvanMvdWkuY29tbW9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udC9zY3NzL2NvbmNhdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=