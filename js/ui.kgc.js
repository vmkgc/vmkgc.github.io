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
	
	//에러시 엑박 방지
	var dummyImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMjNGOTgxMUNFRDcxMUU2OTQ5MUFFRDNBNUI0NkVFMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMjNGOTgxMkNFRDcxMUU2OTQ5MUFFRDNBNUI0NkVFMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBNTMwQURBQ0UzNzExRTY5NDkxQUVEM0E1QjQ2RUUwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYyM0Y5ODEwQ0VENzExRTY5NDkxQUVEM0E1QjQ2RUUwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6fM54AAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=',
	    nodataImg = 'data:image/gif;base64,R0lGODlh/gDmANUAAOrq6vPz8/v7+8TExMfHx+fn5/7+/tvb2+3t7fT09M7OzvLy8ubm5vHx8fj4+MvLy/n5+cnJyd/f38/Pz+/v79XV1eHh4cXFxdDQ0Nzc3Pf399fX19PT0/39/ejo6NHR0djY2Nra2uvr68rKyvDw8Pz8/OPj48bGxtTU1MjIyPr6+uXl5e7u7vX19ezs7ODg4N7e3szMzOTk5M3NzdLS0tbW1vb29uLi4unp6d3d3dnZ2cPDw////wAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENTFGQzhBQUQyRjgxMUU2ODdCNEExQkU1QTlDNkFFNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENTFGQzhBQkQyRjgxMUU2ODdCNEExQkU1QTlDNkFFNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1MUZDOEE4RDJGODExRTY4N0I0QTFCRTVBOUM2QUU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlk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';
	
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
			},
	
			imageReplace: function imageReplace() {
				var imgs = document.querySelectorAll('img');
				imgs.forEach(function (cv, i, arr) {
					cv.addEventListener('error', function () {
						var style = {
							backgroundImage: 'url(' + nodataImg + ')',
							backgroundSize: 'contain',
							backgroundPosition: '50% 50%',
							backgroundRepeat: 'no-repeat'
						};
						this.src = dummyImg;
						for (var i in style) {
							this.style[i] = style[i];
						}
					}, false);
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
	
		//이미지 엑방 방지
		common.imageReplace();
	
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
	
			imgSrc = imgSrc.replace(/^url\(|\)$|\"/gi, '');
	
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
		// categoryVisualHeight();
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTU3YmFhYTM1M2UxNGRjNzEzY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJqUXVlcnkiLCIkIiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJkdW1teUltZyIsIm5vZGF0YUltZyIsInVpIiwiY29tbW9uIiwiY29tbW9uTm90aGluZyIsImVtcHR5TGlua0Z1bmMiLCJhbGxBIiwicXVlcnlTZWxlY3RvckFsbCIsImFUYWciLCJocmVmIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInV0aWwiLCJ0cmltIiwic2V0QXR0cmlidXRlIiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJib2R5IiwiZmluZCIsIm9uIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInN1Ym5hdmlQb3NpdGlvblNldCIsImV4ZWN1dGVyIiwic2NvcGUiLCJlbCIsInVsIiwiZ2V0IiwiZWxMZW5ndGgiLCJhY3RpdmVFbCIsImFsbFdpZHRoIiwiY3VycmVudExlZnQiLCJlcSIsIndpZHRoIiwib3V0ZXJXaWR0aCIsIm9mZnNldExlZnQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxMZWZ0IiwidGhhdCIsImxlZnQiLCJwYXJlbnQiLCJzY3JvbGxXaWR0aCIsInRyaWdnZXIiLCJ0b2dnbGVBY2NvcmRpYW4iLCJfc2NvcGUiLCJldmVudFRhcmdldCIsImV2dCIsInRhcmdldCIsImtsYXNzQ3RybCIsInNwZWVkIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsInN0b3AiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwidG9nZ2xlTmF2aSIsImZsYWciLCJvcGVuIiwibmF2aSIsImRlcHRoM1RvZ2dsZSIsImNsb3NlIiwibGlzdCIsIm5leHQiLCJpbWFnZVJlcGxhY2UiLCJpbWdzIiwiZm9yRWFjaCIsImN2IiwiYXJyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0Iiwic3JjIiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaW1hZ2VQcmVsb2FkZXIiLCJpbWciLCJjYWxsYmFjayIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXgiLCJpbWFnZXMiLCJjcmVhdGVFbGVtZW50IiwiaXNEZXZpY2UiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNoZWNrIiwiYW5kcm9pZCIsImdpbmdlcmJyZWFkIiwiaW9zIiwibWF0Y2giLCJkZXZpY2VTaXplIiwic3dpcGVyIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXJlY3Rpb24iLCJsb29wIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25UeXBlIiwiaW5pdCIsIm9wdGlvbnMiLCJhc3NpZ24iLCJPYmplY3QiLCJleHRlbmQiLCJkYXRhIiwiU3dpcGVyIiwibWFuYWdlciIsImFuaW1hdGUiLCJvcGFjaXR5Iiwiam9pbiIsImhhcyIsInNjcm9sbFRvcCIsImNhdGVnb3J5VmlzdWFsSGVpZ2h0IiwiaCIsInciLCJpbWdTcmMiLCJjc3MiLCJyZXN1bHQiLCJyZXNpemVIZWlnaHQiLCJjSW1nIiwicmVzaXplRnVuYyIsImxhbmQiLCJ3aW5XIiwibCIsInNjcmVlbiIsIm9yaWVudGF0aW9uIiwidHlwZSIsInRvU3RyaW5nIiwiaW5kZXhPZiIsIm5hdHVyYWxIZWlnaHQiLCJuYXR1cmFsV2lkdGgiLCJNYXRoIiwiY2VpbCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwiY2F0ZWdv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LFNBQVNwSyxPQUFPb0ssS0FBeEI7QUFDQUMsTUFBRUMsZUFBRjtBQUNBLElBSEQ7QUFJQTtBQUVELEVBaEhELEU7Ozs7OztBQ3JTQSwwQyIsImZpbGUiOiJ1aS5rZ2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTU3YmFhYTM1M2UxNGRjNzEzY2UiLCJcbi8vIGltcG9ydCAnLi9kZXYnOyAvL+qwnOuwnOyaqSDsiqTtgazrpr3tirgg7ZSE66Gc642V7IWY7IucIOyCreygnFxuaW1wb3J0ICcuLi9zY3NzL2NvbmNhdC5zY3NzJztcbi8qaW1wb3J0ICcuLi9zY3NzL2tnYy5jb21tb24uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLmxheW91dC5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2Muc3ViLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5tYWluLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5zd2lwZXIuc2Nzcyc7Ki9cblxuXG53aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSAkO1xuXG52YXIgd2luID0gd2luZG93LFxuXHRkb2MgPSBkb2N1bWVudDtcblxuLy/sl5Drn6zsi5wg7JeR67CVIOuwqeyngFxuY29uc3Rcblx0ZHVtbXlJbWcgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5cHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVE15SURjNUxqRTFPVEk0TkN3Z01qQXhOaTh3TkM4eE9TMHhNem94TXpvME1DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVdU5TQW9UV0ZqYVc1MGIzTm9LU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBHTWpOR09UZ3hNVU5GUkRjeE1VVTJPVFE1TVVGRlJETkJOVUkwTmtWRk1DSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEdNak5HT1RneE1rTkZSRGN4TVVVMk9UUTVNVUZGUkROQk5VSTBOa1ZGTUNJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qSkJOVE13UVVSQlEwVXpOekV4UlRZNU5Ea3hRVVZFTTBFMVFqUTJSVVV3SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tZeU0wWTVPREV3UTBWRU56RXhSVFk1TkRreFFVVkVNMEUxUWpRMlJVVXdJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrNmZNNTRBQUFBQkJKUkVGVWVOcGkrUC8vUHdOQWdBRUFDUHdDL3R1aVRSWUFBQUFBU1VWT1JLNUNZSUk9Jyxcblx0bm9kYXRhSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaC9nRG1BTlVBQU9ycTZ2UHo4L3Y3KzhURXhNZkh4K2ZuNS83Ky90dmIyKzN0N2ZUMDlNN096dkx5OHVibTV2SHg4Zmo0K012THkvbjUrY25KeWQvZjM4L1B6Ky92NzlYVjFlSGg0Y1hGeGREUTBOemMzUGYzOTlmWDE5UFQwLzM5L2VqbzZOSFIwZGpZMk5yYTJ1dnI2OHJLeXZEdzhQejgvT1BqNDhiR3h0VFUxTWpJeVByNit1WGw1ZTd1N3ZYMTllenM3T0RnNE43ZTNzek16T1RrNU0zTnpkTFMwdGJXMXZiMjl1TGk0dW5wNmQzZDNkbloyY1BEdy8vLy93QUFBQUFBQUFBQUFDSC9DMWhOVUNCRVlYUmhXRTFRUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRnUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzR6TFdNd01URWdOall1TVRRMU5qWXhMQ0F5TURFeUx6QXlMekEyTFRFME9qVTJPakkzSUNBZ0lDQWdJQ0FpUGlBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBpQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXdPa055WldGMGIzSlViMjlzUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnUTFNMklDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEVOVEZHUXpoQlFVUXlSamd4TVVVMk9EZENORUV4UWtVMVFUbEROa0ZGTmlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRU5URkdRemhCUWtReVJqZ3hNVVUyT0RkQ05FRXhRa1UxUVRsRE5rRkZOaUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tRMU1VWkRPRUU0UkRKR09ERXhSVFk0TjBJMFFURkNSVFZCT1VNMlFVVTJJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1ExTVVaRE9FRTVSREpHT0RFeFJUWTROMEkwUVRGQ1JUVkJPVU0yUVVVMklpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtBZi8rL2Z6Nyt2bjQ5L2IxOVBQeThmRHY3dTNzNitycDZPZm01ZVRqNHVIZzM5N2QzTnZhMmRqWDF0WFUwOUxSME0vT3pjekx5c25JeDhiRnhNUEN3Y0MvdnIyOHU3cTV1TGUydGJTenNyR3dyNjZ0ckt1cXFhaW5wcVdrbzZLaG9KK2VuWnlibXBtWWw1YVZsSk9Ta1pDUGpvMk1pNHFKaUllR2hZU0Rnb0dBZjM1OWZIdDZlWGgzZG5WMGMzSnhjRzl1Yld4cmFtbG9aMlpsWkdOaVlXQmZYbDFjVzFwWldGZFdWVlJUVWxGUVQwNU5URXRLU1VoSFJrVkVRMEpCUUQ4K1BUdzdPams0TnpZMU5ETXlNVEF2TGkwc0t5b3BLQ2NtSlNRaklpRWdIeDRkSEJzYUdSZ1hGaFVVRXhJUkVBOE9EUXdMQ2drSUJ3WUZCQU1DQVFBQUlma0VBQUFBQUFBc0FBQUFBUDRBNWdBQUJ2OUFBRzlJTEJxUHlLUnl5V3c2bjlDb2RFcXRXcTFDNFhYTDdYcS80TEFZcXVXVngraTBlczF1STg5bXQzeE9yOXVKOEdIK3p1LzcvMGw3ZW9DRWhZWnpnbmlIaTR5TlY0bEZrSTZUbEl1U2taV1ptb2VYUnAyYm9LRmhuNTZpcHFkanBFZXFxSzJ1bUkrdnNyTktySUcwdUxTMnRibTlxTHRMd0w3RGRzTEJ4TWlPeGt6THljNWd6Y3pQMDN6UlRkYlUyVTdZMTlyZWFkemIzK05mNFUvbTVNL281K250VXV0azd2TFNmL0R6cnZidjkvdHhodm44bXY1UkVRaFFtY0dDM2doaVFaaE5ZU3lHemh4dWtRaVJEc1dKRlgxZDVMSXhJNXFPSEQzS0F0bUZwRWlNcjB5ZUhLaHJKU2lWMEZ4bWdqbEs1aVNhWW5EYVZJUk1wMDMvbjZsMkVnTDZVYWdmb3VDTTNrR3FoaWxBcDAyVnlvRzZobW83cTFXbFJwMkhWVnZYTmwrUEdQQVFRc0dPQ0JzVzRDc1lsc2lDRVR0QWVMQUFJOGVMQkw4WXRpVnhnUUFMQkJkMkNONUJBSWVwdG9oQ0NVZ3hnSUlBQW9Naml3aUYyQ0tvRjNGNUlJZ2NPWUtBVFpYck1PMVFRQVFDSG5CZDhHQVIrVVNGQVlKZjhCQUJBSUNCZ3llSmxqQnJ3b1lLd1NSNEdNQXcySVFad1JoNDJNaXdnOE50U3o4Wk1SQnNvVUVMd1I2R2RMQXdRL1VRR2pzZThDQnhRUEJrVGtJdkdtaXc0a0NGQ1JOZ2M3YUFBSUxnQ2JjbENCNXdtZ2VNSFFydzRFSjVuRjBBWHcwSE1CQkFNVW81eE1JR2tOSHdRZ0VGTEJEQWhRRllRSjFxY08zdy84RU5rYVV3QkhNZ21NSGNEaXRnR0FBSkZFb3d3UTRwaEJDY0c2RVZJcEFISXhBZ0FRc2RLTkVCY1NaQXdJTUpuQTAyUUk4ejdLQWFCTXhWOEJ3U0FpQ1F3UVhkc1ZHalAyb2tvRUFLSm56V2hBRUFJRUNCY0dZVkdTQU9PNkF3QkFzdW5OZUVDaThRUUlNR1NXbkZreGdlREpCQmoxVkFRRnhrRnl6QVFsOUNWaUhBQmllNEdaT2RzSUJod1FYWmJXSEFDaWhNd0VFT0ZHUXd3QWhxYldIQ0FBelV4R2dwWDNoQVFLZGNRQ0FCQ2hoQU5vSUZKWGdCV0g4bGpmcUdGM3lOR1lZQUFSUUtocWw0aFdUcnJWdEFrRUtvb01Ed1FLd1BEVXVzRlNCc0lNcHdHVFRyN0xOVExIQ0JyNkFrTUFDZExGMTdEQlViVkJ1RkFjR3F3UCtEQ2dhVTBLTUFMUXloUVFBT0RPRmxDY3lxTzRTK1UxUmdyajdpMGhPRkFBUFlJTVVMQzB3V0tnTUFOSkJBQnhJa1BDUzlQRUJRd3hBM1dNQkRBemlzd0lNTUNOQWFCUUlFUE1sT3dOMUU0VUdBVXBEQXdKZ0xzK0JCQWphd3NDNFBGaFFRckJZWlpHQkFBQ3RVNjBFQkhrOWhBQUVpcDR5eTBrN29BTU1VRWN2QXc4SThISkNBQVRKUW9Kb0pGTWRoZ0FRV0NPQ0FDNkZTSUdZVk5jaDI4dExpUEJHRG9sRHdDK1hjd3VWTEJMZFNtTURCMm15M3pZUUJBd1NMQ2dMaU1kMjMzMHJZNXlVcTNocCtPT0pJSkxEREt3N3N3T3d0ajRjUndBbE9HRURoNTUvSHkwTUlFelN3SnVpaDg2REJCTklPZ1FEcUZOck1BM3lYSy9IL205eVpzOUVBQVU0SVVLUmd5SDZ3UTM4Vi9CNnE1Q3p6SUh5UkZRd2gyT0pLK0Y1djdtN3M3a1FIQnh6QWdXQVJaRCtqOFAzTnF5SUtPeHdQSUJFbUhCRENmaUVrNlB3TzBDY2hQZlhWOC83RWNQdXBWYVpnU1JNQlF2azhrTndEQWlDNC84U21DSUpwSDk2TU1ELzY2YzUrVHBCQmVQUVRndzdzYjNoRmdFdTl3QmZBd2RpUEJBTVlnQXRPTUFEVHZVOHdnb1BTRHFiblFEVll6d2syZ0EwRjhKY0RJbkNRQ0JxMHp3bDZKRGtDSEtDR0pYakFEb3hUZ1BCNENUZ0I0SlA4VnRqQ05iendiOFNwb1hJdU1JRHZZUkNIVE5TQWQ1QkhoUFhSNERuRjA4SDc0cWRDRmpaeERFOWNnZ1pHOEFBbHJ1QUNCUmdDQnkyUXZSUEUveVY3QjlqQUNMaklnOTBRZ0lVcVNBRUtldlM4SmpUd2pPWFExUk5oUUVZaWxBQmNSSUFrNlV4M1FjNDhnRFhKKzVrUldFaTdKQ3dnamp4b29BVWdpVWdyMEtCMUx4VEFDWkRsQkEza3dGK2lHMElMVktRaUlmRVJTaEtvd0FGMHBRUWRzR3grQm9pQUJFcFpoUVJzSUVrQTJvQ3BSSUFDdUJnSUJpWkRBZ1hrczRNQndDMEJyRHZDTFkyZ0FjZ01SbU5IZ0FBSXloU0REVkJnQng2b2dCQUhNSUVRTkpLWVMxaUJrUXF3dXc1c1lEQVJRRlVTZ2puRURrd25CU1pyd1BtTTBJRUF4TklJWVJUQW9IWndVRHhRTTJ3NzBNQ0pkbkFDMmNFekNtWDZ3TVo0OXh2QjNLQUo5aGtBRVZMQVJDSUlOSGxQZ0V1d3RpZUk0b1VubFA5TWxFOElMaXFGRGd5Z0JpZ29tZlZZY0lJUXpLQjFTekNBSFlPemdCRFdUcUFSZ04zbkZxaThJVllzQWpzdzRSRWV3SUVOREtBRTBtdkJBRUx3Z2VUUUZBb0M2RlFET21DOUJBakpBTHhjQXBGMkVKOGRxTTJrdjR1TVZJc3d6UjNNd0k3TlF3SmFoNUFBRlVoUEErQks2MWVsa0VhVllTQUZFMkJBTkRXQXg4WTJscFJGSUFFSElqQ0JGOVJ1Q1ljYzdCUks4SndudnJNUjdiSlhTVCtyMlNUSUlGSlBySUFaS1NFQ2NEWXdCSE10N1JLQ2lJRWV2VENHVDVPREFjb3pVeWtZZ0FhZWdXbTlJSEFCb01vMkNRa0lqQWROTlozSUtDQ2FYZWdBWlBVam1IODF3UUVrTlJKclZrRE5IWXlBdEtWZGdEY0prQURyeVJNNTRLWC9nZ0NFR0lMbnVDQXlFNGlDQnFDNmd3dVFRSHJ2RmN3RFZudGNJOFFBT1J2bFFlVU9LSVgwWGtjd0lEQ0FDdWliUUNtNGRBVEN0YWxneE5oZitVWEFBd3lJQUZsNUJ3QU1aRXBOVWVnQVhDS2xoRCtkcGJ2ZnZOOERaSUNERVVCQWVndm96ZzFRV3VFaWRJQlpBbGdQN3hhSHV5YUFDSUI2RFFBRmhCaFhJekZWTEY3cVFBZWtsK045MWRnSmhaWENPY01EM1FDaUdBTWtzTUh5dkl1Q0VQVHZDWmw5c2hJY29LOG5MaWdLRUlCcUJDQkxCRlZ5cG1nNUdNeU1DZ3l1QmdhZ3ltTG1RUTdBK1VRRjZKTUpBaURPQVA1c0JCdlFNd0FGZ0V3SVJGRE5CeENneDA1b2oyaW5od0s0aVpsWExDQkFCQ2dRQUpJNUFHak51VkFULzF6Z3pBSzhZQUtDMVd1SE1nRFZoanFoQkNzYXdRVVFFQUFON01CQ09CaUFuKytjWndIL2R6QUtFQUVCS0tEY0JPSlpPTnNUVEF5b2F4d2lWRmtIRXo3YURpeHdiUG1aMkxzQlVCS0RtNlBFUzlQM0FRS3dIZ2tHVTZJbENGUXdINUJQQmZLMUFnSU1JTGVhU1hhUlVIRFpKbGhRTUFSNDhRcGpLSmd2OXBvSTlBMlE5UTY4QTNqTGJ3TVBRSUMzZHBEWEJHdzVUVU1nWDJRRzhJRjdVdkhMVEFBUFlZUkxNTUZjN044VnE0RUdXckJ1NitIQXNpN29iUk1vWUVjUVlOVS9ieDdDUFNlSUtnUm93QVFrdmg4S0V1QUFFTmhBZWhRNFFGanpDbklqUk5rSklxQjRBeG9RQXhBVWRBSUVlTldaaHlDQ0FnZ2dWZ21JcFF4QWJQK0ZNQmY5Q0VkZmdneCtUWUFIREVDSTRKNU5ERmE3TzdzTUpqbjZ5UTRIUUtYZWtuNWRMQXVRUUtBd2lzOFFBSFlBQk9nUmEzWWd4WW9SSVBCZ2c4c0JpaGdCalBHdnBvejJRTDIvcnFYSWZDQzlyaVBBQ1NTZ0FROFlBQUlVQ05abUdENEVQeEVtMXkrQWpRaCtYWUV0ZS9VSmVqY1NLKytlM00wWHdBVGd3VUMxYlR5RU9CY2dBczV4blVmWFpjZmZ6VGV1Qm5NQ2tZUlpBQVlrU1dwMzUwSHg1c3lEZTJMOENDeC9RSkpDb0I5ejVaZE8vTlJ2WkdEQTNXcFdRQUltcUlEdXIzZDRYM1hnQVJmQS9IRlRVRGkzN01DNlNqQ0FXUmdRWngyVUFLbzFOQjN4TlFReWtBSVowQUxyQXlEQ3N3RUdRR1pVc0FBN2NBQkdvQ0gvMS9ka0JFQmprbE51VEtBaFR3TWkxZElBSVpBZDVRRjlkSVZ2R21BQXpFRURSOVlFbXpGTVJVQWtWK0lPSUlTQm1jRUUzaklEdC9FL0ZEWUVBUUFaS1dJQk9rQW5BbEFtNW1JQXhaTUNsdVlFTFdnRVJPSXpJSGNvZ2tHREdxZ0UrZ0ZLWmdGaUFPQk5uR0VDQnZCck9tQUEraWNCUDFKTmhNYUNPK0NDNktOc3NWVmo1ZkVCTGdCWkFnUURLWVI5SE5BamdMTUR2Y1Z5a1lGVE5GQUN6Y1dBc3lFWW41Y2tEMUFBSzhoQVczZUdETlFBTURBQUtTQi84RlE1RDFCbGtyTWZGUWhYTzBDQ0t1QUJJZ0E5UE1WV1BmSi9FQ2NjR3NJOUdUQjViZlpyaW9nRUlOSnNUN1laYjJVRWtvTUNCVEFBTWVBRWFCSjRTNUIwemZFWi94RHdhL3FVYTRPUkFoVlFoandBSWhzZ1QyaFlhRHZ3Y1U4R0FFRG1BdURFVjVrQkhteDJCQjBnQWlzSUFlc1RBY2d5aENjbUFXZEFBbHE0SC9DaFQ5dWpBa3RJQkNUd0FyZmhPelNRWjlDSUxPQWhBQkJBQXhPUUpDWHlQOGI0QlA0RUdTQ3dPQnh3QVNiUUFRYWtUdzV3YllQaGhFT2dBQ0sxR1pRMUFVTHdQL1hpT3hvbFp2TW9SL0NqQWRtVkdmK3podkoxQUN0d1pMeklVRVl3RmpuRkdSL1ZrTHd6ZW9MaE1SUUpVeGY1akVBbVBJdVRnVHp3a1dsUVZQc0JBYWlHQkNLQVRPaEVCQXJRa3FzNEJERnBrZkpZay9CREJEaTVQaURaQmFaQ0dJRkJVdkdvQkFSVUJFV3BHVWVaazB5a2xCakpsRGxXZFJwU0lzd1JsZjlYUUFIYjgyN2NPQmg3QXdWYnVSbTBhSWhlV1pFZXNwVEJBejhRU0c0OHdCejlXQVVHOEFFY0lBSEo5eUxWeEY5TEVKZVJVUzFKZVpkaG1aYzU1Z0lGVUpaOXVRTnpHQVpmbzE4VzlRU0tPWmZxMHBodlNaT1E2WlNad1J5WCtRWDRFeDZIbUFTS3VZeU5TWFExbHBGTlJTczRhWnBvc0FCL3NrZFUwSnAzUXh4MkNac1ZKcHZMd3dHMlZKcVdLUVlvS0JnWGtBR1FhQVM4ZVl6SzladDRxWkZ4dGplMWVaeGdzQUR5bG5OVHdKdWJRUVBDSTUyUHFaRUNVRHdRY0oybjJRUXZVQVBWZ1JjUUlBSTVJSlExa0dwU3dKczBNQUFDRUpPL0FaejlKWnNnQUZENmtRRG9TUVVVd0dBK3REMFRnQUZkMGdXOE9RTVFCZ1B4SjJEL3BEZWU5c0lEK3RFQUhoQWVCNUFrRzRCSEdWQUFtMm1EQWNBam1yR2FUS0FCazlsWTduWUE1T01jSXdCaG9UUUVsY09meHlXYlJIQ2gvMU5rVVVoOWJLQUM4bFprOGZlaW16U2hyemh0UmhCbkMvQXp0S1FpQy9Bb0YzQ05hRUErRzBCclM0b2g2aElEalZjRU9IbHBaOWR0NlVaR0RRQTcyN01Cc2ZNRUd2QUNCM0FYclVRaDhrUUFzTk9KUi9BYTNQSWZzMWRqeklFQzRLY2h6bGg2Q2hsWEV3QnBkRlZzVHJVRXFhZWorQVkzNy9VQlFsSUNueklDcUNoYlJvaHYrclZhd3NNQkhsQ2xGeUlDTmNCV3g1WmNCS0FhZXRpUDAvRUFLMkFoVllvQUVoQkNEWldBM2hRQlU5ZHJMcEFrbGJVNEdUQUJaaEdhUzdBOVBGb0UvOUJHZ2g1d0FCaG5BUEFIcFVXQUpwUTFKMFRnQVZZMUFEZlFuSU9GR1laUkJDWkdndllDWFl6bVFRMEZHWGhoVmtud296U0tOL1loR0Nmd3FnWndBZlgzZFpzeGhVdlFBaGVncmp5d0FQQUJIeDlBU3BValFzb1ZBNFJHT3ZHNmtrWEFHdFBJQk9kRW83M1dBWm9IcUVad1QwbTRCSklUUWhKUUFPdHpBc1FxUHlkd0FnWmJCQWdiZlVPZ0lTcW5CQm1hVDVoYXBUMXlZSzU0VHk1b0F4KzdwT3VEQXJzSFFqR3dlMDlXQXY4bEFjZldYSVphSk9MaE95WTVCR2l5TjJ0VnM1eFJoMHBBQWU2MnExK1hnQXJnQWF0RkF1QnhBZTNqV0lEbldJM1ZiSEFoVmZKME1lUUJ0ZGxESEJ3QXRVbmlqZDFXQWhRd2N4c2JmUkpVSlA4VFVBT1RoUnpKWndUd0IxNy80U1NoOUY5Rm93U2J1cXNka0FPd1lTQ2tVNDdWaEpaNWhnQW9WaVRXcEFRYWtnSWRTcTFGc0dEaGdRSlFoUjlJY0xWSjBySkowQUNDK2pzcEVMRTFsZ0I4KzJZYWtuRDdoTGZLaVlyY1NGSUs4QUxkWnJGdnQ3YWU0RzR5UUFMRjl6c0s0S3cwcFFJZDhqdnlrUU1JUUZLcXRVOFhZcUwyZGlHQTZnQ2JxZ0FCUUYwNkNyZi9scHEyMndESmhnRU5jRThud0lWVzRMdEtVQUkzY0FFRVNRSkNhYWdHSjJZV1FBT3Z5eGt2TUdWNWF3SXVBRlV6SUFJdTIyWW1VQUlGSUhRVWtnRkVtd1IrQ0ZVYmtBQUpPQmc2MEFEUVpya0pLMXQ1VndBYTRGS1JvWHNpUUFFYU1HU0NNUU1JY0FPUUVRSC9OK0M3QWlDL09uQUFMRUFoeXRRN0R0d2NDK0FCSFNrWUZhQWhGY2NaS0VBQklwQUI2WWxJZTRBQUdBQWIrVFJSRktVQk4wQUNCa1RDRFZDQTFiUUJmaXNjbHlvQURMQUFNbkFocm1ZRUZBQUNnVUVEQzRBRFJQWjJHSkJMS1NBRENiREVGc0FDMmZVQTF4aURyWkFJTGRBQkxnQi9MSEJlTzdBQmFNSUFtdUlCTG9BQXFzaHdGQ0FEUkRZREZ0Q1BPVk1BQ05CekZIS05Cc0FDTUFCVlRKdkVsV1IyQk5BQUN0QUFKMEFBSWlBOEo0QUFuK0pXRUlBdW1FTTlna0FDY0hFQ1lYT2ZEQ0FDZ2tyR09hQWZLWUFtUzd3REdGREpJZUJOaGx1cTY5dG1GSEFERmFCY0g4QUFOdkFDSDN3V0hFQUNDSmdCRXNBQmtna1hBd1M5L3l5UUFNU2hnbzM4T0lsd1FjUkpzZ3ZBWUJLUUFRQ2daaTVBQXdtZ3hDVE1pUkp3UVFxd3RUSkFJVlNLQXhSQ1J4aXd4Q2VBQWl2UUF1bUVZdDdvQVRHZ0FBZ1FBbzdCWUR0bkZsWk1qb094cDZSeU9KQlF1VFBnQUUxaUF3UjhBalZnQWgvQXdoU2dBQkhnTFRYUVhRTlFBWmU2QUF4UUZqN0xUaUZnQWcyd0FPa1h1QmpBQVEvUUFFK3NBQXp3R2hzQVZjd3F0R2xTQW5rU0dSQ0VMU2dqQ1ozTVBRa2dBd01RQVNSUWZ1Z1d6VmdtQWppQUFCVkFBcWNjdUFPQUFSbHcwQUZRZGFCaklTU3dBSitVQVJ5d3VkVTBBQ1lnQVF3UUF4N3d6NXRTUkF1OEFBWTBUTVk3R09kSzB0ZHlDVFhjR2dqUUFGQ0ZNQ2ZOQUdZeFRmK29xbXZOTVhORk5nTHhhcXR4TlFJTWRuYlRWZ0VzOEFJeVlBRXhRQUk2UUFHR1dYQUxZQllwZ0FBbGdOYVI4YSsvN0N5ZG9BSkdYWEFRc0QwWWtBQ1BVaURGSExZaWtBSXhnQUNNRmdLYktoOUpCUU1iVUxsRmdqUUkwQUlnWWdFVDBBRWhFQU5aV0FFWUhjSUhJQjhQUUFHSmpBSVFzQUFuTFJpT0NqbWpRZ285R0ZlS2VnTU0yd0tiMmhrZ1FBSENRMTRqc0JsaU1qeVF3UUVCY0FBV2tHWTZhZ0tsR0FJaXhDa1c4TU4rZ2J0YVNBQXlnSnYxdFFJR1lBR0JTeGgvR2MrNUxRVUJVTHVjOGRlOGZCWUFRQUhiZXhZdklBRUlBQU1WTW1nTThBQjdHUUpvWXBrU1NTRVlnQUFBb0oyQzBRREVrUUU0b0FNOVl3RW9zQUgvaDBKWmtSRUMrQnVGTnFBQmZZb2NtTHNLdHJJTEhTQURpUTBDRUNBRGR2UUJDd0FBOFIwZWd2SFBIbURMNS9YY1daWW5lM2xyNUMwWUFBQnRIUEFDTGJaNkdab2prWkVXSGs0WUJiQWRuaDBld0lERmdBQU1GdUFDQXVBQkVyZmVBS0FCRXNjQkRjQUNUZTVjRTQyZndVMFdESmR0TFVBaCtWVGdHRTdSRkFDQkdsS095NWtBS3dBWEE1QURVVkxiemVFQ0JzQUFnRGdGUnQ0SHdGQzJSMnVQTXRDbkZhQUJEYkE4Q29BRENmQUMyMWJBM3FTVzRTRTVNVTZPSURCNGFZSUFMRURSUlRJRE4yQURFdUJORmRBQ0E4d1pybUdJUHJ4cVZWRG5ERUlGZ0R0eEZZQURBaEFseW1Ja0J3QjZmMElBT2lBbU1LRGVjYlY1S0FMZy94OTY2WWJxeGdtQUFGWlZUVHBnVnEwTmJCWVFIRGJBQURWUXVYVWFEenNCREpwYlpFM01BdWdDQTltbEp5b1F0c3JsUXhUUUFnQ1FBU2Z1czc4VEFUWHd6UWdBQXQ1MEFobmdBSXlsMlJKZ1ZuTCt5aE5IbjdqdEVjQ2dBbTcrMmVqTXFQZDZHeUQ5b3hPUUF5TFFBaXlpUFJNdzVKek9Pb3VuY0JSZ0FRTTVHRFRnQVY1U0ppZXdBZ0tBQXhwWHM1Y2I2aTRoREF6UXNKK1RQanJBMW1haWNDUUZCeEFnNTl1V0FoK1FJSmQ2SWVLaklqYVFBQUh3U2RyY3lkM01BSGl6R1ZiTUFta3NHQ3AvQUI5YUlSY3lOTndaQmFLK0ZXTVFKUy93Y05QR0FqT0pCTWUrQVQwUDdwd3hBc240cW5HYUFNR05ieHZBeWtnUEVRUUJBZjhtb0lvdU1NUkowQUlJd0FBc0dxK2RyTmJ3b1V1VkhBQ1BhZ1J3NHBZQWNMcDFvaGQxUUFFMVFBQ3VXQWdNTUFFU1lQWmZ6dzlIbjhWc1FWT0hieTN3dFBqaE1saU9iL1ExZWhYQlNRNlIzd3VYWDlqOTZSWC9sdmwzMG11ZTcvbkpjUG1pSHhIRVVQcnFvQkVZMnlpemdQb04wUktycitFcEVmdWFUeG0wend1bjRQcVVMd3E2N3c1ZjBmdnlnQlhBenhVemNmdDBUZ25EYi9pNFlmekhEeDNNdnhCWTh2eU1iK2ZTTHl4SFVmMjFRdjNZbi8yanZ2M2NueGplWHc2V0VmNkxBaGJrbnhQbWYvN29YL2pxTC81RjBmN3ZMeXJ3SC85ZWtQd0JndzMyWDlMZlAvOVpBUVE4NFpCWU5QSUFSK1dTMlhRK29WSHBsRnExWHExU3lTeVcyL1Yrd1dGeFdEc3RqOUZwOVpyZFBqL2ZiZm1jWHJmSGwzajdudC8zUy9XS0F2OElDdzN2bWdZUEZ4a2J2d0lWSFNVbktST1BJaXN6TlNuZk1EYy9RUTNMUEVOTFRSRkpUMVZYMVFDQ0FBQTcnO1xuXG5cbndpbi51aSA9IHdpbmRvdy51aSB8fCB7XG5cblx0Ly/qs7XthrVcblx0Y29tbW9uOiB7XG5cdFx0Ly8g67mIIO2VqOyImCDtgbTrpq3si5wg7Jik66WYIOuwqeyngFxuXHRcdGNvbW1vbk5vdGhpbmc6IGZ1bmN0aW9uKCkge30sXG5cblx0XHQvLyBh7YOc6re47J2YIGhyZWYg6rCS7J20ICMg7J286rK97JqwIGNvbW1vbk5vdGhpbmcoKeycvOuhnCDrjIDssrRcblx0XHRlbXB0eUxpbmtGdW5jOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vYe2DnOq3uCBocmVm7JeQIOuNlOuvuCDtlajsiJgg7IK97J6FXG5cdFx0XHR2YXIgYWxsQSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJyksXG5cdFx0XHRcdGFUYWcgPSBudWxsLFxuXHRcdFx0XHRocmVmID0gbnVsbDtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhbGxBLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFUYWcgPSBhbGxBW2ldO1xuXHRcdFx0XHRocmVmID0gYVRhZy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHRcdFx0aWYgKHVpLnV0aWwudHJpbShocmVmKSA9PSAnIycgfHwgaHJlZiA9PSBudWxsKVxuXHRcdFx0XHRcdGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgJ2phdmFzY3JpcHQ6dWkuY29tbW9uLmNvbW1vbk5vdGhpbmcoKTsnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly/qsoDsg4kg66CI7J207Ja0XG5cdFx0c2VhcmNoTGF5ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGhlYWRlciA9ICQoJyNoZWFkZXInKSxcblx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRoZWFkZXIuZmluZCgnLmJ0bi1zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXG5cdFx0XHRcdCQoJy5kaW1tJykuYWRkKCBib2R5LmZpbmQoJz4gLnNlYXJjaCBidXR0b24uYnRuLWNsb3NlJykgKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGJvZHkuZmluZCgnID4gLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKCcuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRzdWJuYXZpUG9zaXRpb25TZXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZXhlY3V0ZXIgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgc2NvcGUgPSAkKCcuc3ViLW5hdmknKSxcblx0XHRcdFx0XHRlbCA9IHNjb3BlLmZpbmQoJ2xpJyksXG5cdFx0XHRcdFx0dWwgPSBzY29wZS5maW5kKCc+IHVsJykuZ2V0KDApLFxuXHRcdFx0XHRcdGVsTGVuZ3RoID0gZWwubGVuZ3RoLFxuXHRcdFx0XHRcdGFjdGl2ZUVsID0gc2NvcGUuZmluZCgnLmFjdGl2ZScpLmdldCgwKSxcblx0XHRcdFx0XHRhbGxXaWR0aCA9IDAsXG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSAwLFxuXHRcdFx0XHRcdGkgPSAwO1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBlbExlbmd0aDsgaSs9MSApIHtcblx0XHRcdFx0XHRhbGxXaWR0aCArPSBlbC5lcShpKS53aWR0aCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBhbGxXaWR0aCA+IHNjb3BlLm91dGVyV2lkdGgoKSApIHtcblx0XHRcdFx0XHRzY29wZS5hZGRDbGFzcygnZW5kLWZhZGUnKTtcblx0XHRcdFx0XHRjdXJyZW50TGVmdCA9IGFjdGl2ZUVsLm9mZnNldExlZnQgLSAod2luZG93LmlubmVyV2lkdGggLyAyKSArICggYWN0aXZlRWwuY2xpZW50V2lkdGggLyAyIClcblx0XHRcdFx0XHR1bC5zY3JvbGxMZWZ0ID0gY3VycmVudExlZnQ7XG5cblx0XHRcdFx0XHQkKHVsKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHZhciB0aGF0ID0gJCh0aGlzKS5nZXQoMCksXG5cdFx0XHRcdFx0XHRcdGxlZnQgPSB0aGF0LnNjcm9sbExlZnQ7XG5cdFx0XHRcdFx0XHRpZiAoIGxlZnQgPCAxICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdzdGFydC1mYWRlJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBsZWZ0ID49IDEgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3N0YXJ0LWZhZGUnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCBsZWZ0ID49ICh0aGF0LnNjcm9sbFdpZHRoIC0gJCh0aGlzKS5wYXJlbnQoKS53aWR0aCgpKSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZW5kLWZhZGUnKVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbGVmdCA8ICh0aGF0LnNjcm9sbFdpZHRoIC0gJCh0aGlzKS5wYXJlbnQoKS53aWR0aCgpKSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnZW5kLWZhZGUnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLnRyaWdnZXIoJ3Njcm9sbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZXhlY3V0ZXIoKTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlQWNjb3JkaWFuOiBmdW5jdGlvbihfc2NvcGUsIGV2ZW50VGFyZ2V0LCBldnQpIHtcblx0XHRcdHZhciB0YXJnZXQgPSAkKF9zY29wZSk7XG5cdFx0XHR0YXJnZXQub24oZXZ0LCBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKSxcblx0XHRcdFx0XHRrbGFzc0N0cmwgPSAnYWN0aXZlJyxcblx0XHRcdFx0XHRzcGVlZCA9IDMwMDtcblx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3Moa2xhc3NDdHJsKSApIHtcblx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3Moa2xhc3NDdHJsKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhldmVudFRhcmdldCkuc3RvcCgpLnNsaWRlVXAoc3BlZWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcyhrbGFzc0N0cmwpXG5cdFx0XHRcdFx0LnNpYmxpbmdzKGV2ZW50VGFyZ2V0KS5zdG9wKCkuc2xpZGVEb3duKHNwZWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZU5hdmk6IHtcblx0XHRcdGZsYWc6IHRydWUsXG5cdFx0XHRvcGVuOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBuYXZpID0gJCgnI25hdmknKSxcblx0XHRcdFx0IFx0Ym9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0Ym9keS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cdFx0XHRcdG5hdmkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRpZiAoIHRoaXMuZmxhZyApIHtcblx0XHRcdFx0XHR0aGlzLmZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRuYXZpLmZpbmQoJy5uYXZpLWxpc3QgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZGVwdGgzVG9nZ2xlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCcjbmF2aScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCgnYm9keSA+IC5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGVwdGgzVG9nZ2xlOiBmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCcubmF2aS1saXN0LXN1YiA+IGxpLmhhc0xpc3QgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgbGlzdCA9ICQodGhpcykubmV4dCgnLm5hdmktbGlzdC1zdWItMDInKSxcblx0XHRcdFx0XHRcdHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0XHRzcGVlZCA9IDIwMDtcblx0XHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlRG93bihzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cGFyZW50LnNpYmxpbmdzKCkuZmluZCgnLm5hdmktbGlzdC1zdWItMDInKS5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpbWFnZVJlcGxhY2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG5cdFx0XHRpbWdzLmZvckVhY2goZnVuY3Rpb24gKCBjdiwgaSwgYXJyICkge1xuXHRcdFx0XHRjdi5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIHN0eWxlID0ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBub2RhdGFJbWcgKyAnKScsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnNTAlIDUwJScsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dGhpcy5zcmMgPSBkdW1teUltZztcblx0XHRcdFx0XHRmb3IgKCB2YXIgaSBpbiBzdHlsZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc3R5bGVbaV0gPSBzdHlsZVtpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdH0pXG5cdFx0fVxuXG5cdH0sXG5cblx0dXRpbDoge1xuXG5cdFx0Ly8g7JaR7Kq9IOyXrOuwsSDsoJzqsbBcblx0XHR0cmltOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdGlmIChzdHIgPT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09ICd1bmRlZmluZWQnKSByZXR1cm4gXCJcIjtcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdFx0fSxcblxuXHRcdC8v6riA7J6Q7IiYIOyekOultOq4sFxuXHRcdGN1dHN0cjogZnVuY3Rpb24gY3V0U3RyKHN0ciwgbGltaXQpe1xuXHRcdFx0dmFyIHN0ckxlbmd0aCA9IDAsXG5cdFx0XHRcdHN0clRpdGxlID0gXCJcIixcblx0XHRcdFx0c3RyUGllY2UgPSBcIlwiLFxuXHRcdFx0XHRjb2RlLCBjaDtcblxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKSxcblx0XHRcdFx0Y2ggPSBzdHIuc3Vic3RyKGksMSkudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0c3RyUGllY2UgPSBzdHIuc3Vic3RyKGksMSlcblx0XHRcdFx0Y29kZSA9IHBhcnNlSW50KGNvZGUpO1xuXG5cdFx0XHRcdGlmICgoY2ggPCBcIjBcIiB8fCBjaCA+IFwiOVwiKSAmJiAoY2ggPCBcIkFcIiB8fCBjaCA+IFwiWlwiKSAmJiAoKGNvZGUgPiAyNTUpIHx8IChjb2RlIDwgMCkpKVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDM7IC8vVVRGLTggM2J5dGUg66GcIOqzhOyCsFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMTtcblxuXHRcdFx0XHRpZihzdHJMZW5ndGg+bGltaXQpIC8v7KCc7ZWcIOq4uOydtCDtmZXsnbhcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZWxzZSBzdHJUaXRsZSA9IHN0clRpdGxlK3N0clBpZWNlOyAvL+ygnO2VnOq4uOydtCDrs7Tri6Qg7J6R7Jy866m0IOyekOuluCDrrLjsnpDrpbwg67aZ7Jes7KSA64ukLlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0clRpdGxlO1xuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCAqXHRJbWFnZSBwcmVsb2FkZXIgKGMpIHlpa2wxMDA0QGdtYWlsLmNvbSwgMjAxNi4xMVxuXHRcdCAqL1xuXHRcdGltYWdlUHJlbG9hZGVyOiBmdW5jdGlvbihpbWcsIGNhbGxiYWNrKSB7XG5cblx0XHRcdHZhciBjb3VudCA9IDA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggaW1nICkgJiYgdHlwZW9mIGltZyApIHtcblxuXHRcdFx0XHRpbWcuZm9yRWFjaChmdW5jdGlvbihlbCwgaW5kZXgpe1xuXHRcdFx0XHRcdHZhciBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0XHRpbWFnZXMuc3JjID0gaW1nO1xuXHRcdFx0XHRcdGltYWdlcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nICYmIGNvdW50ID09IGltZy5sZW5ndGgpIGNhbGxiYWNrKGltYWdlcyk7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIGltZyA9PSAnc3RyaW5nJyApIHtcblx0XHRcdFx0dmFyIGltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRpbWFnZXMuc3JjID0gaW1nO1xuXHRcdFx0XHRpbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soaW1hZ2VzKTtcblx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8vIG1vYmlsZSBkZXRlY3Rpbmdcblx0XHRpc0RldmljZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+uqqOuwlOydvCBVQVxuXHRcdFx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoZWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5hbmRyb2lkKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5naW5nZXJicmVhZCkgcmV0dXJuICdnaW5nZXJicmVhZCc7XG5cdFx0XHRcdFx0XHRlbHNlIHJldHVybiAnYW5kcm9pZCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLmlvcykgcmV0dXJuICdpb3MnO1xuXHRcdFx0XHRcdGlmICghdGhpcy5hbmRyb2lkICYmICF0aGlzLmlvcykgcmV0dXJuICduby1tb2JpbGUnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRpb3M6IHVhLm1hdGNoKCdpUGhvbmUnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0YW5kcm9pZDogdWEubWF0Y2goJ0FuZHJvaWQnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0Z2luZ2VyYnJlYWQ6IHVhLm1hdGNoKCdBbmRyb2lkIDIuMycpID8gdHJ1ZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZXZpY2VTaXplOiAnZGV2aWNlLXNpemUtJyArIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0fSxcblxuXG5cdC8v7Iqs65287J2065OcIOywuOqzoCDsgqzsnbTtirggOiBodHRwOi8vaWRhbmdlcm8udXMvc3dpcGVyL2FwaS8jLldGc3FIcmFMU0F3XG5cdHN3aXBlcjoge1xuXHRcdF9zY29wZTogJycsXG5cblx0XHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdFx0ZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0cGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXG5cdFx0XHRwYWdpbmF0aW9uVHlwZTogJ2ZyYWN0aW9uJ1xuXHRcdH0sXG5cblx0XHRpbml0OiBmdW5jdGlvbihzY29wZSwgb3B0aW9ucykge1xuXHRcdFx0dGhpcy5fc2NvcGUgPSBzY29wZTtcblx0XHRcdHZhciBhc3NpZ24gPSAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT0gJ3VuZGVmaW5lZCcpID8gJC5leHRlbmQgOiBPYmplY3QuYXNzaWduOyAvL2Fzc2lnbiDtlajsiJgg7KG07J6sIOyXrOu2gCDssrTtgawsIOyXhuycvOuptCAkLmV4dGVuZOuhnCDrjIDssrRcblx0XHRcdG9wdGlvbnMgPSAodHlwZW9mIG9wdGlvbnMgPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5kZWZhdWx0T3B0aW9ucyA6IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7IC8vb3B0aW9ucyDrp6TqsJzrs4DsiJjqsIAgdW5kZWZpbmVkIOydvCDqsr3smrDrpbwg7LK07YGs7ZWY7JesIOyYpOulmCDrsKnsp4Bcblx0XHRcdHRoaXMuc3dpcGVyKG9wdGlvbnMpO1xuXHRcdH0sXG5cblx0XHRzd2lwZXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdCQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInLCBuZXcgU3dpcGVyKHRoaXMuX3Njb3BlLCBvcHRpb25zKSk7XG5cdFx0fSxcblxuXHRcdG1hbmFnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQodGhpcy5fc2NvcGUpLmRhdGEoJ21hbmFnZXInKTtcblx0XHR9XG5cdH1cblxufTtcblxuXG5cbi8vRE9NIOuhnOuTnO2bhCDtmZTrqbQg67O07Jes7KSMXG53aW4uYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG5cdCQoIGRvY3VtZW50LmJvZHkgKS5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMzAwLCBmdW5jdGlvbigpe1xuXHR9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdHZhciB1dGlsID0gdWkudXRpbCxcblx0XHRjb21tb24gPSB1aS5jb21tb24sXG5cdFx0aXNEZXZpY2UgPSB1dGlsLmlzRGV2aWNlKCk7XG5cblx0Ly/snbTrr7jsp4Ag7JeR67CpIOuwqeyngFxuXHRjb21tb24uaW1hZ2VSZXBsYWNlKCk7XG5cblx0Ly/ruYgg66eB7YGsIOyxhOyasOq4sFxuXHRjb21tb24uZW1wdHlMaW5rRnVuYygpO1xuXG5cdC8v6rKA7IOJ7LC9IOyXtOq4sFxuXHRjb21tb24uc2VhcmNoTGF5ZXIoKTtcblxuXHQvL+uqqOuwlOydvCDrhJPsnbQsIE9TIO2BtOuemOyKpCDsgr3snoVcblx0JCgnYm9keScpLmFkZENsYXNzKFtpc0RldmljZS5jaGVjaygpLCB1dGlsLmRldmljZVNpemVdLmpvaW4oJyAnKSk7XG5cblx0Ly9uYXZpZ2F0aW9uIG9wZW5cblx0JCgnYS5idG4tbmF2aScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29tbW9uLnRvZ2dsZU5hdmkub3BlbigpO1xuXHRcdCQoJ2JvZHkgPiAuZGltbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tbW9uLnRvZ2dsZU5hdmkuY2xvc2UoKTtcblx0XHR9KVxuXHR9KTtcblxuXHQvL3N1YiBuYXZpXG5cdGlmICggJCgnYm9keScpLmhhcygnLnN1Yi1uYXZpJykgKSB7XG5cdFx0dWkuY29tbW9uLnN1Ym5hdmlQb3NpdGlvblNldCgpO1xuXHR9XG5cblx0Ly9uYXZpZ2F0aW9uIGNsb3NlXG5cdCQoJyNuYXZpIC5idG4tY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdH0pO1xuXG5cdC8v7JyE66Gc6rCA6riwXG5cdCQoJ2J1dHRvbi50by10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJ2JvZHksIGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMzAwLCAnZWFzZUluT3V0UXVhcnQnLCBmdW5jdGlvbigpe30pO1xuXHR9KTtcblxuXHQvL+y5tO2FjOqzoOumrCDsg4HshLgg7IOB7ZKI67OEIOyYgeyXrSDrhpLsnbRcblx0Ly/sg4Htkojrs4Qg67mE7KO87Ja8IOyYgeyXrSDrhpLsnbQg67aA7JesXG5cdHZhciBjYXRlZ29yeVZpc3VhbEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGFyZ2V0ID0gJCgnLmNhdGVnb3J5LXZpc3VhbC5iZzAxIC5pbWctd3JhcCcpLFxuXHRcdFx0aCA9IDAsIHcgPSAwLFxuXHRcdFx0aW1nU3JjID0gdGFyZ2V0LmZpbmQoJy5pbWcnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcblx0XHRcdHJlc3VsdCA9IDA7XG5cblx0XHRpZiAoIHR5cGVvZiBpbWdTcmMgPT0gJ3VuZGVmaW5lZCcgKSByZXR1cm4gO1xuXG5cdFx0aW1nU3JjID0gaW1nU3JjLnJlcGxhY2UoL151cmxcXCh8XFwpJHxcXFwiL2dpLCAnJyk7XG5cblx0XHR2YXIgcmVzaXplSGVpZ2h0ID0gZnVuY3Rpb24gKGNJbWcpIHtcblxuXHRcdFx0dmFyIHJlc2l6ZUZ1bmMgPSBmdW5jdGlvbiAoIGxhbmQgKSB7XG5cdFx0XHRcdHZhciB3aW5XID0gd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdFx0bCA9IHNjcmVlbi5vcmllbnRhdGlvbi50eXBlLnRvU3RyaW5nKCkuaW5kZXhPZigncG9ydHJhaXQnKSA+IC0xID8gMSA6IDAuNTtcblx0XHRcdFx0aWYgKCB3aW5XID4gMzE5ICkge1xuXHRcdFx0XHRcdGggPSBjSW1nLm5hdHVyYWxIZWlnaHQ7XG5cdFx0XHRcdFx0dyA9IGNJbWcubmF0dXJhbFdpZHRoO1xuXHRcdFx0XHRcdHJlc3VsdCA9ICggaCood2luVypsKSApIC8gdztcblx0XHRcdFx0XHRyZXN1bHQgPSBNYXRoLmNlaWwoIHJlc3VsdCApO1xuXHRcdFx0XHRcdHRhcmdldC5oZWlnaHQoIHJlc3VsdCApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGwpO1xuXHRcdFx0XHRcdGlmICggbCA9PSAwLjUgKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXQucGFyZW50KCkuaGVpZ2h0KHJlc3VsdCk7XG5cdFx0XHRcdFx0XHR0YXJnZXQucGFyZW50KCkuZmluZCgnPi50eHQnKS5jc3MoeyBkaXNwbGF5OiAnaW5oZXJpdCcgfSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBsID09IDEgKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXQucGFyZW50KCkuY3NzKHsgaGVpZ2h0OiAnYXV0bycgfSk7XG5cdFx0XHRcdFx0XHR0YXJnZXQuc2libGluZ3MoJy50eHQnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiB0YXJnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2Jsb2NrJyA6ICdub25lJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0YXJnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdFx0XHRcdFx0XHQvLyByZXN1bHQgKyB0YXJnZXQucGFyZW50KCkuZmluZCgnYnV0dG9uJykuaGVpZ2h0KClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0cmVzaXplRnVuYygpO1xuXHRcdFx0fSkudHJpZ2dlcigncmVzaXplJyk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNpemVGdW5jKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0dWkudXRpbC5pbWFnZVByZWxvYWRlciggaW1nU3JjLCByZXNpemVIZWlnaHQpO1xuXHR9O1xuXHQvLyBjYXRlZ29yeVZpc3VhbEhlaWdodCgpO1xuXG5cdC8v7Lm07YWM6rOg66asIGgy7YG066at7IucIO2GoOq4gFxuXHR2YXIgY2F0ZWdvcnlMaXN0ID0gJCgnLmNhdGVnb3J5LWxpc3QnKTtcblx0aWYgKCBjYXRlZ29yeUxpc3QubGVuZ3RoID4gMCApIHtcblx0XHRjYXRlZ29yeUxpc3QuZmluZCgnLmRlcHRoMSA+IGxpID4gaDInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCAkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcblx0XHRcdFx0LnNpYmxpbmdzKCcuZGVwdGgyJykuc3RvcCgpLnNsaWRlVXAoMzAwLCBmdW5jdGlvbigpe1xuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcblx0XHRcdFx0LnNpYmxpbmdzKCcuZGVwdGgyJykuc3RvcCgpLnNsaWRlRG93bigzMDAsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2F0ZWdvcnlMaXN0LmZpbmQoJy5kZXB0aDEgPiBsaSA+IGgyID4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICl7XG5cdFx0XHR2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSk7XG5cdH1cblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdWkuY29tbW9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL2NvbmNhdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=