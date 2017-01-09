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
	
		//카테고리 상세 상품별 영역 높이
		//상품별 비주얼 영역 높이 부여
		var categoryVisualHeight = function categoryVisualHeight() {
			var target = $('.category-visual.bg01 .img-wrap'),
			    h = 0,
			    w = 0,
			    imgSrc = target.find('.img').css('background-image'),
			    result = 0;
	
			if (typeof imgSrc == 'undefined') return;
	
			imgSrc = imgSrc.replace(/url\(|\)|\"/gi, '');
	
			var resizeHeight = function resizeHeight(cImg) {
	
				var resizeFunc = function resizeFunc(land) {
					var winW = window.innerWidth,
					    l = screen.orientation.type.toString().indexOf('portrait') > -1 ? 1 : 0.5;
					if (winW > 319) {
						h = cImg.naturalHeight;
						w = cImg.naturalWidth;
						result = h * (winW * l) / w;
						result = Math.ceil(result);
						target.height(result);
						console.log(l);
						if (l == 0.5) {
							target.parent().height(result);
							target.parent().find('>.txt').css({ display: 'inherit' });
						}
	
						if (l == 1) {
							target.parent().css({ height: 'auto' });
							target.siblings('.txt').css({
								display: target.parent().hasClass('active') ? 'block' : 'none'
							});
							console.log(target.parent().hasClass('active') ? 'block' : 'none');
							// result + target.parent().find('button').height()
						}
					}
				};
				$(window).on('resize', function () {
					resizeFunc();
				}).trigger('resize');
				window.addEventListener("orientationchange", function () {
					resizeFunc();
				}, false);
			};
	
			ui.util.imagePreloader(imgSrc, resizeHeight);
		};
		categoryVisualHeight();
	
		//카테고리 h2클릭시 토글
		var categoryList = $('.category-list');
		if (categoryList.length > 0) {
			categoryList.find('.depth1 > li > h2').on('click', function () {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active').siblings('.depth2').stop().slideUp(300, function () {});
				} else {
					$(this).addClass('active').siblings('.depth2').stop().slideDown(300, function () {});
				}
			});
			categoryList.find('.depth1 > li > h2 > button').on('click', function (event) {
				var e = event || window.event;
				e.stopPropagation();
			});
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzJiYTllZTY1MTk3ZWEwNTQ3YjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJqUXVlcnkiLCIkIiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJ1aSIsImNvbW1vbiIsImNvbW1vbk5vdGhpbmciLCJlbXB0eUxpbmtGdW5jIiwiYWxsQSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhVGFnIiwiaHJlZiIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsIiwidHJpbSIsInNldEF0dHJpYnV0ZSIsInNlYXJjaExheWVyIiwiaGVhZGVyIiwiYm9keSIsImZpbmQiLCJvbiIsImFkZENsYXNzIiwiYXBwZW5kIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJzdWJuYXZpUG9zaXRpb25TZXQiLCJleGVjdXRlciIsInNjb3BlIiwiZWwiLCJ1bCIsImdldCIsImVsTGVuZ3RoIiwiYWN0aXZlRWwiLCJhbGxXaWR0aCIsImN1cnJlbnRMZWZ0IiwiZXEiLCJ3aWR0aCIsIm91dGVyV2lkdGgiLCJvZmZzZXRMZWZ0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsTGVmdCIsInRoYXQiLCJsZWZ0IiwicGFyZW50Iiwic2Nyb2xsV2lkdGgiLCJ0cmlnZ2VyIiwidG9nZ2xlQWNjb3JkaWFuIiwiX3Njb3BlIiwiZXZlbnRUYXJnZXQiLCJldnQiLCJ0YXJnZXQiLCJrbGFzc0N0cmwiLCJzcGVlZCIsImhhc0NsYXNzIiwic2libGluZ3MiLCJzdG9wIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZU5hdmkiLCJmbGFnIiwib3BlbiIsIm5hdmkiLCJkZXB0aDNUb2dnbGUiLCJjbG9zZSIsImxpc3QiLCJuZXh0Iiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaW1hZ2VQcmVsb2FkZXIiLCJpbWciLCJjYWxsYmFjayIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImluZGV4IiwiaW1hZ2VzIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0RldmljZSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY2hlY2siLCJhbmRyb2lkIiwiZ2luZ2VyYnJlYWQiLCJpb3MiLCJtYXRjaCIsImRldmljZVNpemUiLCJzd2lwZXIiLCJkZWZhdWx0T3B0aW9ucyIsImRpcmVjdGlvbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpbml0Iiwib3B0aW9ucyIsImFzc2lnbiIsIk9iamVjdCIsImV4dGVuZCIsImRhdGEiLCJTd2lwZXIiLCJtYW5hZ2VyIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJqb2luIiwiaGFzIiwic2Nyb2xsVG9wIiwiY2F0ZWdvcnlWaXN1YWxIZWlnaHQiLCJoIiwidyIsImltZ1NyYyIsImNzcyIsInJlc3VsdCIsInJlc2l6ZUhlaWdodCIsImNJbWciLCJyZXNpemVGdW5jIiwibGFuZCIsIndpblciLCJsIiwic2NyZWVuIiwib3JpZW50YXRpb24iLCJ0eXBlIiwidG9TdHJpbmciLCJpbmRleE9mIiwibmF0dXJhbEhlaWdodCIsIm5hdHVyYWxXaWR0aCIsIk1hdGgiLCJjZWlsIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJjYXRlZ29yeUxpc3QiLCJldmVudCIsImUiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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QixRQUFSLENBQWlCLFFBQWpCLEVBQ0NtQyxRQURELENBQ1UsU0FEVixFQUNxQkMsSUFEckIsR0FDNEJFLFNBRDVCLENBQ3NDLEdBRHRDLEVBQzJDLFlBQVUsQ0FDcEQsQ0FGRDtBQUdBO0FBQ0QsSUFWRDtBQVdBeUYsZ0JBQWFqSSxJQUFiLENBQWtCLDRCQUFsQixFQUFnREMsRUFBaEQsQ0FBbUQsT0FBbkQsRUFBNEQsVUFBVWlJLEtBQVYsRUFBaUI7QUFDNUUsUUFBSUMsSUFBSUQsU0FBU3pKLE9BQU95SixLQUF4QjtBQUNBQyxNQUFFQyxlQUFGO0FBQ0EsSUFIRDtBQUlBO0FBRUQsRUE5R0QsRTs7Ozs7O0FDN1FBLDBDIiwiZmlsZSI6InVpLmtnYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMmJhOWVlNjUxOTdlYTA1NDdiOCIsIlxuLy8gaW1wb3J0ICcuL2Rldic7IC8v6rCc67Cc7JqpIOyKpO2BrOumve2KuCDtlITroZzrjZXshZjsi5wg7IKt7KCcXG5pbXBvcnQgJy4uL3Njc3MvY29uY2F0LnNjc3MnO1xuLyppbXBvcnQgJy4uL3Njc3Mva2djLmNvbW1vbi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2MubGF5b3V0LnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5zdWIuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLm1haW4uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLnN3aXBlci5zY3NzJzsqL1xuXG5cbndpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9ICQ7XG5cbnZhciB3aW4gPSB3aW5kb3csXG5cdGRvYyA9IGRvY3VtZW50O1xuXG53aW4udWkgPSB3aW5kb3cudWkgfHwge1xuXG5cdC8v6rO17Ya1XG5cdGNvbW1vbjoge1xuXHRcdC8vIOu5iCDtlajsiJgg7YG066at7IucIOyYpOulmCDrsKnsp4Bcblx0XHRjb21tb25Ob3RoaW5nOiBmdW5jdGlvbigpIHt9LFxuXG5cdFx0Ly8gYe2DnOq3uOydmCBocmVmIOqwkuydtCAjIOydvOqyveyasCBjb21tb25Ob3RoaW5nKCnsnLzroZwg64yA7LK0XG5cdFx0ZW1wdHlMaW5rRnVuYzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2Htg5zqt7ggaHJlZuyXkCDrjZTrr7gg7ZWo7IiYIOyCveyehVxuXHRcdFx0dmFyIGFsbEEgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnYScpLFxuXHRcdFx0XHRhVGFnID0gbnVsbCxcblx0XHRcdFx0aHJlZiA9IG51bGw7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYWxsQS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRhVGFnID0gYWxsQVtpXTtcblx0XHRcdFx0aHJlZiA9IGFUYWcuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cdFx0XHRcdGlmICh1aS51dGlsLnRyaW0oaHJlZikgPT0gJyMnIHx8IGhyZWYgPT0gbnVsbClcblx0XHRcdFx0XHRhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsICdqYXZhc2NyaXB0OnVpLmNvbW1vbi5jb21tb25Ob3RoaW5nKCk7Jyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8v6rKA7IOJIOugiOydtOyWtFxuXHRcdHNlYXJjaExheWVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoZWFkZXIgPSAkKCcjaGVhZGVyJyksXG5cdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0aGVhZGVyLmZpbmQoJy5idG4tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0Ym9keS5maW5kKCcgPiAuc2VhcmNoJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblxuXHRcdFx0XHQkKCcuZGltbScpLmFkZCggYm9keS5maW5kKCc+IC5zZWFyY2ggYnV0dG9uLmJ0bi1jbG9zZScpICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCgnLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0c3VibmF2aVBvc2l0aW9uU2V0OiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGV4ZWN1dGVyID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHNjb3BlID0gJCgnLnN1Yi1uYXZpJyksXG5cdFx0XHRcdFx0ZWwgPSBzY29wZS5maW5kKCdsaScpLFxuXHRcdFx0XHRcdHVsID0gc2NvcGUuZmluZCgnPiB1bCcpLmdldCgwKSxcblx0XHRcdFx0XHRlbExlbmd0aCA9IGVsLmxlbmd0aCxcblx0XHRcdFx0XHRhY3RpdmVFbCA9IHNjb3BlLmZpbmQoJy5hY3RpdmUnKS5nZXQoMCksXG5cdFx0XHRcdFx0YWxsV2lkdGggPSAwLFxuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gMCxcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0Zm9yICggOyBpIDwgZWxMZW5ndGg7IGkrPTEgKSB7XG5cdFx0XHRcdFx0YWxsV2lkdGggKz0gZWwuZXEoaSkud2lkdGgoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggYWxsV2lkdGggPiBzY29wZS5vdXRlcldpZHRoKCkgKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWRkQ2xhc3MoJ2VuZC1mYWRlJyk7XG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSBhY3RpdmVFbC5vZmZzZXRMZWZ0IC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKyAoIGFjdGl2ZUVsLmNsaWVudFdpZHRoIC8gMiApXG5cdFx0XHRcdFx0dWwuc2Nyb2xsTGVmdCA9IGN1cnJlbnRMZWZ0O1xuXG5cdFx0XHRcdFx0JCh1bCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR2YXIgdGhhdCA9ICQodGhpcykuZ2V0KDApLFxuXHRcdFx0XHRcdFx0XHRsZWZ0ID0gdGhhdC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRcdFx0aWYgKCBsZWZ0IDwgMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbGVmdCA+PSAxICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdzdGFydC1mYWRlJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICggbGVmdCA+PSAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPCAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KS50cmlnZ2VyKCdzY3JvbGwnKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGV4ZWN1dGVyKCk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZUFjY29yZGlhbjogZnVuY3Rpb24oX3Njb3BlLCBldmVudFRhcmdldCwgZXZ0KSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChfc2NvcGUpO1xuXHRcdFx0dGFyZ2V0Lm9uKGV2dCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0a2xhc3NDdHJsID0gJ2FjdGl2ZScsXG5cdFx0XHRcdFx0c3BlZWQgPSAzMDA7XG5cdFx0XHRcdGlmICggcGFyZW50Lmhhc0NsYXNzKGtsYXNzQ3RybCkgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKGtsYXNzQ3RybClcblx0XHRcdFx0XHQuc2libGluZ3MoZXZlbnRUYXJnZXQpLnN0b3AoKS5zbGlkZVVwKHNwZWVkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3Moa2xhc3NDdHJsKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhldmVudFRhcmdldCkuc3RvcCgpLnNsaWRlRG93bihzcGVlZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVOYXZpOiB7XG5cdFx0XHRmbGFnOiB0cnVlLFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbmF2aSA9ICQoJyNuYXZpJyksXG5cdFx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXHRcdFx0XHRuYXZpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0aWYgKCB0aGlzLmZsYWcgKSB7XG5cdFx0XHRcdFx0dGhpcy5mbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0bmF2aS5maW5kKCcubmF2aS1saXN0ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmRlcHRoM1RvZ2dsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCgnI25hdmknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdCQoJ2JvZHkgPiAuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRlcHRoM1RvZ2dsZTogZnVuY3Rpb24oKXtcblx0XHRcdFx0JCgnLm5hdmktbGlzdC1zdWIgPiBsaS5oYXNMaXN0ID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSAkKHRoaXMpLm5leHQoJy5uYXZpLWxpc3Qtc3ViLTAyJyksXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdFx0c3BlZWQgPSAyMDA7XG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZURvd24oc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHBhcmVudC5zaWJsaW5ncygpLmZpbmQoJy5uYXZpLWxpc3Qtc3ViLTAyJykuc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0fSxcblxuXHR1dGlsOiB7XG5cblx0XHQvLyDslpHsqr0g7Jes67CxIOygnOqxsFxuXHRcdHRyaW06IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0aWYgKHN0ciA9PSBudWxsIHx8IHR5cGVvZiBzdHIgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBcIlwiO1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0XHR9LFxuXG5cdFx0Ly/quIDsnpDsiJgg7J6Q66W06riwXG5cdFx0Y3V0c3RyOiBmdW5jdGlvbiBjdXRTdHIoc3RyLCBsaW1pdCl7XG5cdFx0XHR2YXIgc3RyTGVuZ3RoID0gMCxcblx0XHRcdFx0c3RyVGl0bGUgPSBcIlwiLFxuXHRcdFx0XHRzdHJQaWVjZSA9IFwiXCIsXG5cdFx0XHRcdGNvZGUsIGNoO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Y29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpLFxuXHRcdFx0XHRjaCA9IHN0ci5zdWJzdHIoaSwxKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRzdHJQaWVjZSA9IHN0ci5zdWJzdHIoaSwxKVxuXHRcdFx0XHRjb2RlID0gcGFyc2VJbnQoY29kZSk7XG5cblx0XHRcdFx0aWYgKChjaCA8IFwiMFwiIHx8IGNoID4gXCI5XCIpICYmIChjaCA8IFwiQVwiIHx8IGNoID4gXCJaXCIpICYmICgoY29kZSA+IDI1NSkgfHwgKGNvZGUgPCAwKSkpXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMzsgLy9VVEYtOCAzYnl0ZSDroZwg6rOE7IKwXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAxO1xuXG5cdFx0XHRcdGlmKHN0ckxlbmd0aD5saW1pdCkgLy/soJztlZwg6ri47J20IO2ZleyduFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRlbHNlIHN0clRpdGxlID0gc3RyVGl0bGUrc3RyUGllY2U7IC8v7KCc7ZWc6ri47J20IOuztOuLpCDsnpHsnLzrqbQg7J6Q66W4IOusuOyekOulvCDrtpnsl6zspIDri6QuXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyVGl0bGU7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0ICpcdEltYWdlIHByZWxvYWRlciAoYykgeWlrbDEwMDRAZ21haWwuY29tLCAyMDE2LjExXG5cdFx0ICovXG5cdFx0aW1hZ2VQcmVsb2FkZXI6IGZ1bmN0aW9uKGltZywgY2FsbGJhY2spIHtcblxuXHRcdFx0dmFyIGNvdW50ID0gMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpbWcgKSAmJiB0eXBlb2YgaW1nICkge1xuXG5cdFx0XHRcdGltZy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpbmRleCl7XG5cdFx0XHRcdFx0dmFyIGltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRcdGltYWdlcy5zcmMgPSBpbWc7XG5cdFx0XHRcdFx0aW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgJiYgY291bnQgPT0gaW1nLmxlbmd0aCkgY2FsbGJhY2soaW1hZ2VzKTtcblx0XHRcdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgaW1nID09ICdzdHJpbmcnICkge1xuXHRcdFx0XHR2YXIgaW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdGltYWdlcy5zcmMgPSBpbWc7XG5cdFx0XHRcdGltYWdlcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhpbWFnZXMpO1xuXHRcdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0Ly8gbW9iaWxlIGRldGVjdGluZ1xuXHRcdGlzRGV2aWNlOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v66qo67CU7J28IFVBXG5cdFx0XHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hlY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmFuZHJvaWQpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdpbmdlcmJyZWFkKSByZXR1cm4gJ2dpbmdlcmJyZWFkJztcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuICdhbmRyb2lkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuaW9zKSByZXR1cm4gJ2lvcyc7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmFuZHJvaWQgJiYgIXRoaXMuaW9zKSByZXR1cm4gJ25vLW1vYmlsZSc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlvczogdWEubWF0Y2goJ2lQaG9uZScpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRhbmRyb2lkOiB1YS5tYXRjaCgnQW5kcm9pZCcpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRnaW5nZXJicmVhZDogdWEubWF0Y2goJ0FuZHJvaWQgMi4zJykgPyB0cnVlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRldmljZVNpemU6ICdkZXZpY2Utc2l6ZS0nICsgd2luZG93LmlubmVyV2lkdGhcblxuXHR9LFxuXG5cblx0Ly/siqzrnbzsnbTrk5wg7LC46rOgIOyCrOydtO2KuCA6IGh0dHA6Ly9pZGFuZ2Vyby51cy9zd2lwZXIvYXBpLyMuV0ZzcUhyYUxTQXdcblx0c3dpcGVyOiB7XG5cdFx0X3Njb3BlOiAnJyxcblxuXHRcdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRcdHBhZ2luYXRpb25UeXBlOiAnZnJhY3Rpb24nXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG5cdFx0XHR0aGlzLl9zY29wZSA9IHNjb3BlO1xuXHRcdFx0dmFyIGFzc2lnbiA9ICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PSAndW5kZWZpbmVkJykgPyAkLmV4dGVuZCA6IE9iamVjdC5hc3NpZ247IC8vYXNzaWduIO2VqOyImCDsobTsnqwg7Jes67aAIOyytO2BrCwg7JeG7Jy866m0ICQuZXh0ZW5k66GcIOuMgOyytFxuXHRcdFx0b3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PSAndW5kZWZpbmVkJykgPyB0aGlzLmRlZmF1bHRPcHRpb25zIDogYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTsgLy9vcHRpb25zIOunpOqwnOuzgOyImOqwgCB1bmRlZmluZWQg7J28IOqyveyasOulvCDssrTtgaztlZjsl6wg7Jik66WYIOuwqeyngFxuXHRcdFx0dGhpcy5zd2lwZXIob3B0aW9ucyk7XG5cdFx0fSxcblxuXHRcdHN3aXBlcjogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0JCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicsIG5ldyBTd2lwZXIodGhpcy5fc2NvcGUsIG9wdGlvbnMpKTtcblx0XHR9LFxuXG5cdFx0bWFuYWdlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gJCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicpO1xuXHRcdH1cblx0fVxuXG59O1xuXG5cblxuLy9ET00g66Gc65Oc7ZuEIO2ZlOuptCDrs7Tsl6zspIxcbndpbi5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcblx0JCggZG9jdW1lbnQuYm9keSApLnN0b3AoKS5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAzMDAsIGZ1bmN0aW9uKCl7XG5cdH0pO1xufSk7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0dmFyIHV0aWwgPSB1aS51dGlsLFxuXHRcdGNvbW1vbiA9IHVpLmNvbW1vbixcblx0XHRpc0RldmljZSA9IHV0aWwuaXNEZXZpY2UoKTtcblxuXG5cdC8v67mIIOunge2BrCDssYTsmrDquLBcblx0Y29tbW9uLmVtcHR5TGlua0Z1bmMoKTtcblxuXHQvL+qygOyDieywvSDsl7TquLBcblx0Y29tbW9uLnNlYXJjaExheWVyKCk7XG5cblx0Ly/rqqjrsJTsnbwg64ST7J20LCBPUyDtgbTrnpjsiqQg7IK97J6FXG5cdCQoJ2JvZHknKS5hZGRDbGFzcyhbaXNEZXZpY2UuY2hlY2soKSwgdXRpbC5kZXZpY2VTaXplXS5qb2luKCcgJykpO1xuXG5cdC8vbmF2aWdhdGlvbiBvcGVuXG5cdCQoJ2EuYnRuLW5hdmknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLm9wZW4oKTtcblx0XHQkKCdib2R5ID4gLmRpbW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdFx0fSlcblx0fSk7XG5cblx0Ly9zdWIgbmF2aVxuXHRpZiAoICQoJ2JvZHknKS5oYXMoJy5zdWItbmF2aScpICkge1xuXHRcdHVpLmNvbW1vbi5zdWJuYXZpUG9zaXRpb25TZXQoKTtcblx0fVxuXG5cdC8vbmF2aWdhdGlvbiBjbG9zZVxuXHQkKCcjbmF2aSAuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHR9KTtcblxuXHQvL+ychOuhnOqwgOq4sFxuXHQkKCdidXR0b24udG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDMwMCwgJ2Vhc2VJbk91dFF1YXJ0JywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblx0Ly/subTthYzqs6Drpqwg7IOB7IS4IOyDge2SiOuzhCDsmIHsl60g64aS7J20XG5cdC8v7IOB7ZKI67OEIOu5hOyjvOyWvCDsmIHsl60g64aS7J20IOu2gOyXrFxuXHR2YXIgY2F0ZWdvcnlWaXN1YWxIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRhcmdldCA9ICQoJy5jYXRlZ29yeS12aXN1YWwuYmcwMSAuaW1nLXdyYXAnKSxcblx0XHRcdGggPSAwLCB3ID0gMCxcblx0XHRcdGltZ1NyYyA9IHRhcmdldC5maW5kKCcuaW1nJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXG5cdFx0XHRyZXN1bHQgPSAwO1xuXG5cdFx0aWYgKCB0eXBlb2YgaW1nU3JjID09ICd1bmRlZmluZWQnICkgcmV0dXJuIDtcblxuXHRcdGltZ1NyYyA9IGltZ1NyYy5yZXBsYWNlKC91cmxcXCh8XFwpfFxcXCIvZ2ksICcnKTtcblxuXHRcdHZhciByZXNpemVIZWlnaHQgPSBmdW5jdGlvbiAoY0ltZykge1xuXG5cdFx0XHR2YXIgcmVzaXplRnVuYyA9IGZ1bmN0aW9uICggbGFuZCApIHtcblx0XHRcdFx0dmFyIHdpblcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRsID0gc2NyZWVuLm9yaWVudGF0aW9uLnR5cGUudG9TdHJpbmcoKS5pbmRleE9mKCdwb3J0cmFpdCcpID4gLTEgPyAxIDogMC41O1xuXHRcdFx0XHRpZiAoIHdpblcgPiAzMTkgKSB7XG5cdFx0XHRcdFx0aCA9IGNJbWcubmF0dXJhbEhlaWdodDtcblx0XHRcdFx0XHR3ID0gY0ltZy5uYXR1cmFsV2lkdGg7XG5cdFx0XHRcdFx0cmVzdWx0ID0gKCBoKih3aW5XKmwpICkgLyB3O1xuXHRcdFx0XHRcdHJlc3VsdCA9IE1hdGguY2VpbCggcmVzdWx0ICk7XG5cdFx0XHRcdFx0dGFyZ2V0LmhlaWdodCggcmVzdWx0ICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobCk7XG5cdFx0XHRcdFx0aWYgKCBsID09IDAuNSApIHtcblx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnQoKS5oZWlnaHQocmVzdWx0KTtcblx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnQoKS5maW5kKCc+LnR4dCcpLmNzcyh7IGRpc3BsYXk6ICdpbmhlcml0JyB9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIGwgPT0gMSApIHtcblx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnQoKS5jc3MoeyBoZWlnaHQ6ICdhdXRvJyB9KTtcblx0XHRcdFx0XHRcdHRhcmdldC5zaWJsaW5ncygnLnR4dCcpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IHRhcmdldC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYmxvY2snIDogJ25vbmUnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRhcmdldC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYmxvY2snIDogJ25vbmUnKTtcblx0XHRcdFx0XHRcdC8vIHJlc3VsdCArIHRhcmdldC5wYXJlbnQoKS5maW5kKCdidXR0b24nKS5oZWlnaHQoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXNpemVGdW5jKCk7XG5cdFx0XHR9KS50cmlnZ2VyKCdyZXNpemUnKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc2l6ZUZ1bmMoKTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHR9XG5cblx0XHR1aS51dGlsLmltYWdlUHJlbG9hZGVyKCBpbWdTcmMsIHJlc2l6ZUhlaWdodCk7XG5cdH07XG5cdGNhdGVnb3J5VmlzdWFsSGVpZ2h0KCk7XG5cblx0Ly/subTthYzqs6DrpqwgaDLtgbTrpq3si5wg7Yag6riAXG5cdHZhciBjYXRlZ29yeUxpc3QgPSAkKCcuY2F0ZWdvcnktbGlzdCcpO1xuXHRpZiAoIGNhdGVnb3J5TGlzdC5sZW5ndGggPiAwICkge1xuXHRcdGNhdGVnb3J5TGlzdC5maW5kKCcuZGVwdGgxID4gbGkgPiBoMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXHRcdFx0XHQuc2libGluZ3MoJy5kZXB0aDInKS5zdG9wKCkuc2xpZGVVcCgzMDAsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxuXHRcdFx0XHQuc2libGluZ3MoJy5kZXB0aDInKS5zdG9wKCkuc2xpZGVEb3duKDMwMCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYXRlZ29yeUxpc3QuZmluZCgnLmRlcHRoMSA+IGxpID4gaDIgPiBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKXtcblx0XHRcdHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcblx0fVxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91aS5jb21tb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvY29uY2F0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==