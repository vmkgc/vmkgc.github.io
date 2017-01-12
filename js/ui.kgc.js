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
				var imgs = $('img');
				var style = {
					backgroundImage: 'url(' + nodataImg + ')',
					backgroundSize: 'contain',
					backgroundPosition: '50% 50%',
					backgroundRepeat: 'no-repeat'
				};
				imgs.each(function (idx, el) {
					$(el).on('error', function () {
						$(this).attr({ src: dummyImg }).css(style);
					});
					console.log(idx, el);
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
	
		//카테고리 탭
		if ($('body').find('.category-detail').length) {
			$('.tab li a').on('click', function () {
				$('.tab li').removeClass('active');
				$(this).parent().addClass('active');
				$('.tab_content').hide();
				var id = $(this).attr("class");
				$("#" + id).show();
			});
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2MzZWVhMDcxYjllMjQxMGIzNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJqUXVlcnkiLCIkIiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJkdW1teUltZyIsIm5vZGF0YUltZyIsInVpIiwiY29tbW9uIiwiY29tbW9uTm90aGluZyIsImVtcHR5TGlua0Z1bmMiLCJhbGxBIiwicXVlcnlTZWxlY3RvckFsbCIsImFUYWciLCJocmVmIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInV0aWwiLCJ0cmltIiwic2V0QXR0cmlidXRlIiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJib2R5IiwiZmluZCIsIm9uIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInN1Ym5hdmlQb3NpdGlvblNldCIsImV4ZWN1dGVyIiwic2NvcGUiLCJlbCIsInVsIiwiZ2V0IiwiZWxMZW5ndGgiLCJhY3RpdmVFbCIsImFsbFdpZHRoIiwiY3VycmVudExlZnQiLCJlcSIsIndpZHRoIiwib3V0ZXJXaWR0aCIsIm9mZnNldExlZnQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxMZWZ0IiwidGhhdCIsImxlZnQiLCJwYXJlbnQiLCJzY3JvbGxXaWR0aCIsInRyaWdnZXIiLCJ0b2dnbGVBY2NvcmRpYW4iLCJfc2NvcGUiLCJldmVudFRhcmdldCIsImV2dCIsInRhcmdldCIsImtsYXNzQ3RybCIsInNwZWVkIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsInN0b3AiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwidG9nZ2xlTmF2aSIsImZsYWciLCJvcGVuIiwibmF2aSIsImRlcHRoM1RvZ2dsZSIsImNsb3NlIiwibGlzdCIsIm5leHQiLCJpbWFnZVJlcGxhY2UiLCJpbWdzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJlYWNoIiwiaWR4IiwiYXR0ciIsInNyYyIsImNzcyIsImNvbnNvbGUiLCJsb2ciLCJzdHIiLCJyZXBsYWNlIiwiY3V0c3RyIiwiY3V0U3RyIiwibGltaXQiLCJzdHJMZW5ndGgiLCJzdHJUaXRsZSIsInN0clBpZWNlIiwiY29kZSIsImNoIiwiY2hhckNvZGVBdCIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJpbWFnZVByZWxvYWRlciIsImltZyIsImNhbGxiYWNrIiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbWFnZXMiLCJjcmVhdGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzRGV2aWNlIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjaGVjayIsImFuZHJvaWQiLCJnaW5nZXJicmVhZCIsImlvcyIsIm1hdGNoIiwiZGV2aWNlU2l6ZSIsInN3aXBlciIsImRlZmF1bHRPcHRpb25zIiwiZGlyZWN0aW9uIiwibG9vcCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uVHlwZSIsImluaXQiLCJvcHRpb25zIiwiYXNzaWduIiwiT2JqZWN0IiwiZXh0ZW5kIiwiZGF0YSIsIlN3aXBlciIsIm1hbmFnZXIiLCJhbmltYXRlIiwib3BhY2l0eSIsImpvaW4iLCJoYXMiLCJzY3JvbGxUb3AiLCJjYXRlZ29yeVZpc3VhbEhlaWdodCIsImgiLCJ3IiwiaW1nU3JjIiwicmVzdWx0IiwicmVzaXplSGVpZ2h0IiwiY0ltZyIsInJlc2l6ZUZ1bmMiLCJsYW5kIiwid2luVyIsImwiLCJzY3JlZW4iLCJvcmllbnRhdGlvbiIsInR5cGUiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJuYXR1cmFsSGVpZ2h0IiwibmF0dXJhbFdpZHRoIiwiTWF0aCIsImNlaWwiLCJoZWlnaHQiLCJkaXNwbGF5IiwiY2F0ZWdvcnlMaXN0IiwiZXZlbnQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGlkZSIsImlkIiwic2hvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQ0E7OztBQUNBOztBQUNBOzs7Ozs7QUFPQUEsUUFBT0MsTUFBUCxHQUFnQkQsT0FBT0UsQ0FBUCxHQUFXQSxDQUEzQjs7QUFFQSxLQUFJQyxNQUFNSCxNQUFWO0FBQUEsS0FDQ0ksTUFBTUMsUUFEUDs7QUFHQTtBQUNBLEtBQ0NDLFdBQVcsb3ZDQURaO0FBQUEsS0FFQ0MsWUFBWSxvb1NBRmI7O0FBS0FKLEtBQUlLLEVBQUosR0FBU1IsT0FBT1EsRUFBUCxJQUFhOztBQUVyQjtBQUNBQyxVQUFRO0FBQ1A7QUFDQUMsa0JBQWUseUJBQVcsQ0FBRSxDQUZyQjs7QUFJUDtBQUNBQyxrQkFBZSx5QkFBVztBQUN6QjtBQUNBLFFBQUlDLE9BQU9SLElBQUlTLGdCQUFKLENBQXFCLEdBQXJCLENBQVg7QUFBQSxRQUNDQyxPQUFPLElBRFI7QUFBQSxRQUVDQyxPQUFPLElBRlI7QUFHQSxTQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxTQUFTTCxLQUFLSyxNQUE5QixFQUFzQ0QsSUFBSUMsTUFBMUMsRUFBa0RELEdBQWxELEVBQXVEO0FBQ3RERixZQUFPRixLQUFLSSxDQUFMLENBQVA7QUFDQUQsWUFBT0QsS0FBS0ksWUFBTCxDQUFrQixNQUFsQixDQUFQO0FBQ0EsU0FBSVYsR0FBR1csSUFBSCxDQUFRQyxJQUFSLENBQWFMLElBQWIsS0FBc0IsR0FBdEIsSUFBNkJBLFFBQVEsSUFBekMsRUFDQ0QsS0FBS08sWUFBTCxDQUFrQixNQUFsQixFQUEwQix1Q0FBMUI7QUFD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QVNySyxPQUFPcUssS0FBeEI7QUFDQUMsTUFBRUMsZUFBRjtBQUNBLElBSEQ7QUFJQTs7QUFFRDtBQUNBLE1BQUtySyxFQUFFLE1BQUYsRUFBVXVCLElBQVYsQ0FBZSxrQkFBZixFQUFtQ1IsTUFBeEMsRUFBaUQ7QUFDaERmLEtBQUUsV0FBRixFQUFld0IsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFVO0FBQzlCeEIsTUFBRSxTQUFGLEVBQWE0QixXQUFiLENBQXlCLFFBQXpCO0FBQ0E1QixNQUFFLElBQUYsRUFBUWlELE1BQVIsR0FBaUJ4QixRQUFqQixDQUEwQixRQUExQjtBQUNBekIsTUFBRSxjQUFGLEVBQWtCc0ssSUFBbEI7QUFDQSxRQUFJQyxLQUFLdkssRUFBRSxJQUFGLEVBQVFpRixJQUFSLENBQWEsT0FBYixDQUFUO0FBQ0FqRixNQUFFLE1BQUl1SyxFQUFOLEVBQVVDLElBQVY7QUFDSCxJQU5KO0FBT0E7QUFFRCxFQTNIRCxFOzs7Ozs7QUNuU0EsMEMiLCJmaWxlIjoidWkua2djLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdjM2VlYTA3MWI5ZTI0MTBiMzVmIiwiXG4vLyBpbXBvcnQgJy4vZGV2JzsgLy/qsJzrsJzsmqkg7Iqk7YGs66a97Yq4IO2UhOuhnOuNleyFmOyLnCDsgq3soJxcbmltcG9ydCAnLi4vc2Nzcy9jb25jYXQuc2Nzcyc7XG4vKmltcG9ydCAnLi4vc2Nzcy9rZ2MuY29tbW9uLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5sYXlvdXQuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLnN1Yi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2MubWFpbi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2Muc3dpcGVyLnNjc3MnOyovXG5cblxud2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0gJDtcblxudmFyIHdpbiA9IHdpbmRvdyxcblx0ZG9jID0gZG9jdW1lbnQ7XG5cbi8v7JeQ65+s7IucIOyXkeuwlSDrsKnsp4BcbmNvbnN0XG5cdGR1bW15SW1nID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBWUFBQUFmRmNTSkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeXBwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRNeUlEYzVMakUxT1RJNE5Dd2dNakF4Tmk4d05DOHhPUzB4TXpveE16bzBNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UVXVOU0FvVFdGamFXNTBiM05vS1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwR01qTkdPVGd4TVVORlJEY3hNVVUyT1RRNU1VRkZSRE5CTlVJME5rVkZNQ0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBHTWpOR09UZ3hNa05GUkRjeE1VVTJPVFE1TVVGRlJETkJOVUkwTmtWRk1DSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPakpCTlRNd1FVUkJRMFV6TnpFeFJUWTVORGt4UVVWRU0wRTFRalEyUlVVd0lpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rWXlNMFk1T0RFd1EwVkVOekV4UlRZNU5Ea3hRVVZFTTBFMVFqUTJSVVV3SWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4KzZmTTU0QUFBQUJCSlJFRlVlTnBpK1AvL1B3TkFnQUVBQ1B3Qy90dWlUUllBQUFBQVNVVk9SSzVDWUlJPScsXG5cdG5vZGF0YUltZyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGgvZ0RtQU5VQUFPcnE2dlB6OC92Nys4VEV4TWZIeCtmbjUvNysvdHZiMiszdDdmVDA5TTdPenZMeTh1Ym01dkh4OGZqNCtNdkx5L241K2NuSnlkL2YzOC9Qeisvdjc5WFYxZUhoNGNYRnhkRFEwTnpjM1BmMzk5ZlgxOVBUMC8zOS9lam82TkhSMGRqWTJOcmEydXZyNjhyS3l2RHc4UHo4L09QajQ4Ykd4dFRVMU1qSXlQcjYrdVhsNWU3dTd2WDE5ZXpzN09EZzRON2Uzc3pNek9UazVNM056ZExTMHRiVzF2YjI5dUxpNHVucDZkM2QzZG5aMmNQRHcvLy8vd0FBQUFBQUFBQUFBQ0gvQzFoTlVDQkVZWFJoV0UxUVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0Z1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0ekxXTXdNVEVnTmpZdU1UUTFOall4TENBeU1ERXlMekF5THpBMkxURTBPalUyT2pJM0lDQWdJQ0FnSUNBaVBpQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQaUE4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Ykc1ek9uaHRjRTFOUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmJXMHZJaUI0Yld4dWN6cHpkRkpsWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wzTlVlWEJsTDFKbGMyOTFjbU5sVW1WbUl5SWdlRzF3T2tOeVpXRjBiM0pVYjI5c1BTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ1ExTTJJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBFTlRGR1F6aEJRVVF5UmpneE1VVTJPRGRDTkVFeFFrVTFRVGxETmtGRk5pSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEVOVEZHUXpoQlFrUXlSamd4TVVVMk9EZENORUV4UWtVMVFUbEROa0ZGTmlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rUTFNVVpET0VFNFJESkdPREV4UlRZNE4wSTBRVEZDUlRWQk9VTTJRVVUySWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tRMU1VWkRPRUU1UkRKR09ERXhSVFk0TjBJMFFURkNSVFZCT1VNMlFVVTJJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrQWYvKy9mejcrdm40OS9iMTlQUHk4ZkR2N3UzczYrcnA2T2ZtNWVUajR1SGczOTdkM052YTJkalgxdFhVMDlMUjBNL096Y3pMeXNuSXg4YkZ4TVBDd2NDL3ZyMjh1N3E1dUxlMnRiU3pzckd3cjY2dHJLdXFxYWlucHFXa282S2hvSitlblp5Ym1wbVlsNWFWbEpPU2taQ1BqbzJNaTRxSmlJZUdoWVNEZ29HQWYzNTlmSHQ2ZVhoM2RuVjBjM0p4Y0c5dWJXeHJhbWxvWjJabFpHTmlZV0JmWGwxY1cxcFpXRmRXVlZSVFVsRlFUMDVOVEV0S1NVaEhSa1ZFUTBKQlFEOCtQVHc3T2prNE56WTFORE15TVRBdkxpMHNLeW9wS0NjbUpTUWpJaUVnSHg0ZEhCc2FHUmdYRmhVVUV4SVJFQThPRFF3TENna0lCd1lGQkFNQ0FRQUFJZmtFQUFBQUFBQXNBQUFBQVA0QTVnQUFCdjlBQUc5SUxCcVB5S1J5eVd3Nm45Q29kRXF0V3ExQzRYWEw3WHEvNExBWXF1V1Z4K2kwZXMxdUk4OW10M3hPcjl1SjhHSCt6dS83LzBsN2VvQ0VoWVp6Z25pSGk0eU5WNGxGa0k2VGxJdVNrWldabW9lWFJwMmJvS0ZobjU2aXBxZGpwRWVxcUsydW1JK3Zzck5LcklHMHVMUzJ0Ym05cUx0THdMN0Rkc0xCeE1pT3hrekx5YzVnemN6UDAzelJUZGJVMlU3WTE5cmVhZHpiMytOZjRVL201TS9vNStudFV1dGs3dkxTZi9EenJ2YnY5L3R4aHZuOG12NVJFUWhRbWNHQzNnaGlRWmhOWVN5R3poeHVrUWlSRHNXSkZYMWQ1TEl4STVxT0hEM0tBdG1GcEVpTXIweWVIS2hySlNpVjBGeG1namxLNWlTYVluRGFWSVJNcDAzL242bDJFZ0w2VWFnZm91Q00za0dxaGlsQXAwMlZ5b0c2aG1vN3ExV2xScDJIVlZ2WE5sK1BHUEFRUXNHT0NCc1c0Q3NZbHNpQ0VUdEFlTEFBSThlTEJMOFl0aVZ4Z1FBTEJCZDJDTjVCQUllcHRvaENDVWd4Z0lJQUFvTWppd2lGMkNLb0YzRjVJSWdjT1lLQVRaWHJNTzFRUUFRQ0huQmQ4R0FSK1VTRkFZSmY4QkFCQUlDQmd5ZUpsakJyd29ZS3dTUjRHTUF3MklRWndSaDQyTWl3ZzhOdFN6OFpNUkJzb1VFTHdSNkdkTEF3US9VUUdqc2U4Q0J4UVBCa1RrSXZHbWl3NGtDRkNSTmdjN2FBQUlMZ0NiY2xDQjV3bWdlTUhRcnc0RUo1bkYwQVh3MEhNQkJBTVVvNXhNSUdrTkh3UWdFRkxCREFoUUZZUUoxcWNPM3cvOEVOa2FVd0JITWdtTUhjRGl0Z0dBQUpGRW93d1E0cGhCQ2NHNkVWSXBBSEl4QWdBUXNkS05FQmNTWkF3SU1KbkEwMlFJOHo3S0FhQk14VjhCd1NBaUNRd1FYZHNWR2pQMm9rb0VBS0pueldoQUVBSUVDQmNHWVZHU0FPTzZBd0JBc3VuTmVFQ2k4UVFJTUdTV25Ga3hnZURKQkJqMVZBUUZ4a0Z5ekFRbDlDVmlIQUJpZTRHWk9kc0lCaHdRWFpiV0hBQ2loTXdFRU9GR1F3d0FocWJXSENBQXpVeEdncFgzaEFRS2RjUUNBQkNoaEFOb0lGSlhnQldIOGxqZnFHRjN5TkdZWUFBUlFLaHFsNGhXVHJyVnRBa0VLb29NRHdRS3dQRFV1c0ZTQnNJTXB3R1RUcjdMTlRMSENCcjZBa01BQ2RMRjE3REJVYlZCdUZBY0dxd1ArRENnYVUwS01BTFF5aFFRQU9ET0ZsQ2N5cU80UytVMVJncmo3aTBoT0ZBQVBZSU1VTEMwd1dLZ01BTkpCQUJ4SWtQQ1M5UEVCUXd4QTNXTUJEQXppc3dJTU1DTkFhQlFJRVBNbE93TjFFNFVHQVVwREF3SmdMcytCQkFqYXdzQzRQRmhRUXJCWVpaR0JBQUN0VTYwRUJIazloQUFFaXA0eXkwazdvQU1NVUVjdkF3OEk4SEpDQUFUSlFvSm9KRk1kaGdBUVdDT0NBQzZGU0lHWVZOY2gyOHRMaVBCR0RvbER3QytYY3d1VkxCTGRTbU1EQjJteTN6WVFCQXdTTENnTGlNZDIzMzByWTV5VXEzaHArT09KSUpMRERLdzdzd093dGo0Y1J3QWxPR0VEaDU1L0h5ME1JRXpTd0p1aWg4NkRCQk5JT2dRRHFGTnJNQTN5WEsvSC9tOXlaczlFQUFVNElVS1JneUg2d1EzOFYvQjZxNUN6eklIeVJGUXdoMk9KSytGNXY3bTdzN2tRSEJ4ekFnV0FSWkQrajhQM05xeUlLT3h3UElCRW1IQkRDZmlFazZQd08wQ2NoUGZYVjgvN0VjUHVwVmFaZ1NSTUJRdms4a053REFpQzQvOFNtQ0lKcEg5Nk1NRC82NmM1K1RwQkJlUFFUZ3c3c2IzaEZnRXU5d0JmQXdkaVBCQU1ZZ0F0T01BRFR2VTh3Z29QU0RxYm5RRFZZendrMmdBMEY4SmNESW5DUUNCcTB6d2w2SkRrQ0hLQ0dKWGpBRG94VGdQQjRDVGdCNEpQOFZ0akNOYnp3YjhTcG9YSXVNSUR2WVJDSFROU0FkNUJIaFBYUjREbkYwOEg3NHFkQ0ZqWnhERTljZ2daRzhBQWxydUFDQlJnQ0J5MlF2UlBFL3lWN0I5akFDTGpJZzkwUWdJVXFTQUVLZXZTOEpqVHdqT1hRMVJOaFFFWWlsQUJjUklBazZVeDNRYzQ4Z0RYSis1a1JXRWk3SkN3Z2pqeG9vQVVnaVVncjBLQjFMeFRBQ1pEbEJBM2t3RitpRzBJTFZLUWlJZkVSU2hLb3dBRjBwUVFkc0d4K0JvaUFCRXBaaFFSc0lFa0Eyb0NwUklBQ3VCZ0lCaVpEQWdYa3M0TUJ3QzBCckR2Q0xZMmdBY2dNUm1OSGdBQUl5aFNERFZCZ0J4Nm9nQkFITUlFUU5KS1lTMWlCa1Fxd3V3NXNZREFSUUZVU2dqbkVEa3duQlNacndQbU0wSUVBeE5JSVlSVEFvSFp3VUR4UU0ydzcwTUNKZG5BQzJjRXpDbVg2d01aNDl4dkIzS0FKOWhrQUVWTEFSQ0lJTkhsUGdFdXd0aWVJNG9VbmxQOU1sRThJTGlxRkRneWdCaWdvbWZWWWNJSVF6S0IxU3pDQUhZT3pnQkRXVHFBUmdOM25GcWk4SVZZc0Fqc3c0UkVld0lFTkRLQUUwbXZCQUVMd2dlVFFGQW9DNkZRRE9tQzlCQWpKQUx4Y0FwRjJFSjhkcU0ya3Y0dU1WSXN3elIzTXdJN05Rd0phaDVBQUZVaFBBK0JLNjFlbGtFYVZZU0FGRTJCQU5EV0F4OFkybHBSRklBRUhJakNCRjlSdUNZY2M3QlJLOEp3bnZyTVI3YkpYU1QrcjJTVElJRkpQcklBWktTRUNjRFl3QkhNdDdSS0NpSUVldlRDR1Q1T0RBY296VXlrWWdBYWVnV205SUhBQm9NbzJDUWtJakFkTk5aM0lLQ0NhWGVnQVpQVWptSDgxd1FFa05SSnJWa0ROSFl5QXRLVmRnRGNKa0FEcnlSTTU0S1gvZ2dDRUdJTG51Q0F5RTRpQ0JxQzZnd3VRUUhydkZjd0RWbnRjSThRQU9SdmxRZVVPS0lYMFhrY3dJRENBQ3VpYlFDbTRkQVRDdGFsZ3hOaGYrVVhBQXd5SUFGbDVCd0FNWkVwTlVlZ0FYQ0tsaEQrZHBidmZ2TjhEWklDREVVQkFlZ3ZvemcxUVd1RWlkSUJaQWxnUDd4YUh1eWFBQ0lCNkRRQUZoQmhYSXpGVkxGN3FRQWVrbCtOOTFkZ0poWlhDT2NNRDNRQ2lHQU1rc01IeXZJdUNFUFR2Q1psOXNoSWNvSzhuTGlnS0VJQnFCQ0JMQkZWeXBtZzVHTXlNQ2d5dUJnYWd5bUxtUVE3QStVUUY2Sk1KQWlET0FQNXNCQnZRTXdBRmdFd0lSRkROQnhDZ3gwNW9qMmluaHdLNGlabFhMQ0JBQkNnUUFKSTVBR2pOdVZBVC8xemd6QUs4WUFLQzFXdUhNZ0RWaGpxaEJDc2F3UVVRRUFBTjdNQkNPQmlBbisrY1p3SC9kekFLRUFFQktLRGNCT0paT05zVFRBeW9heHdpVkZrSEV6N2FEaXh3YlBtWjJMc0JVQktEbTZQRVM5UDNBUUt3SGdrR1U2SWxDRlF3SDVCUEJmSzFBZ0lNSUxlYVNYYVJVSERaSmxoUU1BUjQ4UXBqS0pndjlwb0k5QTJROVE2OEEzakxid01QUUlDM2RwRFhCR3c1VFVNZ1gyUUc4SUY3VXZITFRBQVBZWVJMTU1GYzdOOFZxNEVHV3JCdTYrSEFzaTdvYlJNb1lFY1FZTlUvYng3Q1BTZUlLZ1Jvd0FRa3ZoOEtFdUFBRU5oQWVoUTRRRmp6Q25JalJOa0pJcUI0QXhvUUF4QVVkQUlFZU5XWmh5Q0NBZ2dnVmdtSXBReEFiUCtGTUJmOUNFZGZnZ3grVFlBSERFQ0k0SjVOREZhN083c01Kam42eVE0SFFLWGVrbjVkTEF1UVFLQXdpczhRQUhZQUJPZ1JhM1lneFlvUklQQmdnOHNCaWhnQmpQR3Zwb3oyUUwyL3JxWElmQ0M5cmlQQUNTU2dBUThZQUFJVUNOWm1HRDRFUHhFbTF5K0FqUWgrWFlFdGUvVUplamNTSysrZTNNMFh3QVRnd1VDMWJUeUVPQmNnQXM1eG5VZlhaY2ZmelRldUJuTUNrWVJaQUFZa1NXcDM1MEh4NXN5RGUyTDhDQ3gvUUpKQ29COXo1WmRPL05SdlpHREEzV3BXUUFJbXFJRHVyM2Q0WDNYZ0FSZkEvSEZUVURpMzdNQzZTakNBV1JnUVp4MlVBS28xTkIzeE5RUXlrQUlaMEFMckF5RENzd0VHUUdaVXNBQTdjQUJHb0NILzEvZGtCRUJqa2xOdVRLQWhUd01pMWRJQUlaQWQ1UUY5ZElWdkdtQUF6RUVEUjlZRW16Rk1SVUFrVitJT0lJU0JtY0VFM2pJRHQvRS9GRFlFQVFBWktXSUJPa0FuQWxBbTVtSUF4Wk1DbHVZRUxXZ0VST0l6SUhjb2drR0RHcWdFK2dGS1pnRmlBT0JObkdFQ0J2QnJPbUFBK2ljQlAxSk5oTWFDTytDQzZLTnNzVlZqNWZFQkxnQlpBZ1FES1lSOUhOQWpnTE1EdmNWeWtZRlRORkFDemNXQXN5RVluNWNrRDFBQUs4aEFXM2VHRE5RQU1EQUFLU0IvOEZRNUQxQmxrck1mRlFoWE8wQ0NLdUFCSWdBOVBNVldQZkovRUNjY0dzSTlHVEI1YmZacmlvZ0VJTkpzVDdZWmIyVUVrb01DQlRBQU1lQUVhQko0UzVCMHpmRVoveER3YS9xVWE0T1JBaFZRaGp3QUloc2dUMmhZYUR2d2NVOEdBRURtQXVERVY1a0JIbXgyQkIwZ0Fpc0lBZXNUQWNneWhDY21BV2RBQWxxNEgvQ2hUOXVqQWt0SUJDVHdBcmZoT3pTUVo5Q0lMT0FoQUJCQUF4T1FKQ1h5UDhiNEJQNEVHU0N3T0J4d0FTYlFBUWFrVHc1d2JZUGhoRU9nQUNLMUdaUTFBVUx3UC9YaU94b2xadk1vUi9DakFkbVZHZit6aHZKMUFDdHdaTHpJVUVZd0ZqbkZHUi9Wa0x3emVvTGhNUlFKVXhmNWpFQW1QSXVUZ1R6d2tXbFFWUHNCQWFpR0JDS0FUT2hFQkFyUWtxczRCREZwa2ZKWWsvQkRCRGk1UGlEWkJhWkNHSUZCVXZHb0JBUlVCRVdwR1VlWmsweWtsQmpKbERsV2RScFNJc3dSbGY5WFFBSGI4MjdjT0JoN0F3VmJ1Um0wYUloZVdaRWVzcFRCQXo4UVNHNDh3Qno5V0FVRzhBRWNJQUhKOXlMVnhGOUxFSmVSVVMxSmVaZGhtWmM1NWdJRlVKWjl1UU56R0FaZm8xOFc5UVNLT1pmcTBwaHZTWk9RNlpTWndSeVgrUVg0RXg2SG1BU0t1WXlOU1hRMWxwRk5SU3M0YVpwb3NBQi9za2RVMEpwM1F4eDJDWnNWSnB2THd3RzJWSnFXS1FZb0tCZ1hrQUdRYUFTOGVZeks5WnQ0cVpGeHRqZTFlWnhnc0FEeWxuTlR3SnViUVFQQ0k1MlBxWkVDVUR3UWNKMm4yUVF2VUFQVmdSY1FJQUk1SUpRMWtHcFN3SnMwTUFBQ0VKTy9BWno5SlpzZ0FGRDZrUURvU1FVVXdHQSt0RDBUZ0FGZDBnVzhPUU1RQmdQeEoyRC9wRGVlOXNJRCt0RUFIaEFlQjVBa0c0QkhHVkFBbTJtREFjQWptckdhVEtBQms5bFk3bllBNU9NY0l3QmhvVFFFbGNPZnh5V2JSSENoLzFOa1VVaDliS0FDOGxaazhmZWltelNocnpodFJoQm5DL0F6dEtRaUMvQW9GM0NOYUVBK0cwQnJTNG9oNmhJRGpWY0VPSGxwWjlkdDZVWkdEUUE3MjdNQnNmTUVHdkFDQjNBWHJVUWg4a1FBc05PSlIvQWEzUElmczFkanpJRUM0S2NoemxoNkNobFhFd0JwZEZWc1RyVUVxYWVqK0FZMzcvVUJRbElDbnpJQ3FDaGJSb2h2K3JWYXdzTUJIbENsRnlJQ05jQld4NVpjQktBYWV0aVAwL0VBSzJBaFZZb0FFaEJDRFpXQTNoUUJVOWRyTHBBa2xiVTRHVEFCWmhHYVM3QTlQRm9FLzlCR2doNXdBQmhuQVBBSHBVV0FKcFExSjBUZ0FWWTFBRGZRbklPRkdZWlJCQ1pHZ3ZZQ1hZem1RUTBGR1hoaFZrbndvelNLTi9ZaEdDZndxZ1p3QWZYM2Rac3hoVXZRQWhlZ3JqeXdBUEFCSHg5QVNwVWpRc29WQTRSR092RzZra1hBR3RQSUJPZEVvNzNXQVpvSHFFWndUMG00QkpJVFFoSlFBT3R6QXNRcVB5ZHdBZ1piQkFnYmZVT2dJU3FuQkJtYVQ1aGFwVDF5WUs1NFR5NW9BeCs3cE91REFyc0hRakd3ZTA5V0F2OGxBY2ZXWElaYUpPTGhPeVk1QkdpeU4ydFZzNXhSaDBwQUFlNjJxMStYZ0FyZ0FhdEZBdUJ4QWUzaldJRG5XSTNWYkhBaFZmSjBNZVFCdGRsREhCd0F0VW5pamQxV0FoUXdjeHNiZlJKVUpQOFRVQU9UaFJ6Slp3VHdCMTcvNFNTaDlGOUZvd1NidXFzZGtBT3dZU0NrVTQ3VmhKWjVoZ0FvVmlUV3BBUWFrZ0lkU3ExRnNHRGhnUUpRaFI5SWNMVkowckpKMEFDQytqc3BFTEUxbGdCOCsyWWFrbkQ3aExmS2lZcmNTRklLOEFMZFpyRnZ0N2FlNEc0eVFBTEY5enNLNEt3MHBRSWQ4anZ5a1FNSVFGS3F0VThYWXFMMmRpR0E2Z0NicWdBQlFGMDZDcmYvbHBxMjJ3REpoZ0VOY0U4bndJVlc0THRLVUFJM2NBRUVTUUpDYWFnR0oyWVdRQU92eXhrdk1HVjVhd0l1QUZVeklBSXUyMlltVUFJRklIUVVrZ0ZFbXdSK0NGVWJrQUFKT0JnNjBBRFFacmtKSzF0NVZ3QWE0RktSb1hzaVFBRWFNR1NDTVFNSWNBT1FFUUgvTitDN0FpQy9PbkFBTEVBaHl0UTdEdHdjQytBQkhTa1lGYUFoRmNjWktFQUJJcEFCNllsSWU0QUFHQUFiK1RSUkZLVUJOMEFDQmtUQ0RWQ0ExYlFCZmlzY2x5b0FETEFBTW5BaHJtWUVGQUFDZ1VFREM0QURSUFoyR0pCTEtTQURDYkRFRnNBQzJmVUExeGlEclpBSUxkQUJMZ0IvTEhCZU83QUJhTUlBbXVJQkxvQUFxc2h3RkNBRFJEWURGdENQT1ZNQUNOQnpGSEtOQnNBQ01BQlZUSnZFbFdSMkJOQUFDdEFBSjBBQUlpQThKNEFBbitKV0VJQXVtRU05Z2tBQ2NIRUNZWE9mRENBQ2drckdPYUFmS1lBbVM3d0RHRkRKSWVCTmhsdXE2OXRtRkhBREZhQmNIOEFBTnZBQ0gzd1dIRUFDQ0pnQkVzQUJrZ2tYQXdTOS95eVFBTVNoZ28zOE9JbHdRY1JKc2d2QVlCS1FBUUNnWmk1QUF3bWd4Q1RNaVJKd1FRcXd0VEpBSVZTS0F4UkNSeGl3eENlQUFpdlFBdW1FWXQ3b0FUR2dBQWdRQW83QllEdG5GbFpNam9PeHA2UnlPSkJRdVRQZ0FFMWlBd1I4QWpWZ0FoL0F3aFNnQUJIZ0xUWFFYUU5RQVplNkFBeFFGajdMVGlGZ0FnMndBT2tYdUJqQUFRL1FBRStzQUF6d0doc0FWY3dxdEdsU0Fua1NHUkNFTFNnakNaM01QUWtnQXdNUUFTUlFmdWdXelZnbUFqaUFBQlZBQXFjY3VBT0FBUmx3MEFGUWRhQmpJU1N3QUorVUFSeXd1ZFUwQUNZZ0FRd1FBeDd3ejV0U1JBdThBQVkwVE1ZN0dPZEswdGR5Q1RYY0dnalFBRkNGTUNmTkFHWXhUZitvcW12Tk1YTkZOZ0x4YXF0eE5RSU1kbmJUVmdFczhBSXlZQUV4UUFJNlFBR0dXWEFMWUJZcGdBQWxnTmFSOGErLzdDeWRvQUpHWFhBUXNEMFlrQUNQVWlERkhMWWlrQUl4Z0FDTUZnS2JLaDlKQlFNYlVMbEZnalFJMEFJZ1lnRVQwQUVoRUFOWldBRVlIY0lISUI4UFFBR0pqQUlRc0FBbkxSaU9Dam1qUWdvOUdGZUtlZ01NMndLYjJoa2dRQUhDUTE0anNCbGlNanlRd1FFQmNBQVdrR1k2YWdLbEdBSWl4Q2tXOE1OK2didGFTQUF5Z0p2MXRRSUdZQUdCU3hoL0djKzVMUVVCVUx1YzhkZThmQllBUUFIYmV4WXZJQUVJQUFNVk1tZ004QUI3R1FKb1lwa1NTU0VZZ0FBQW9KMkMwUURFa1FFNG9BTTlZd0Vvc0FIL2gwSlprUkVDK0J1Rk5xQUJmWW9jbUxzS3RySUxIU0FEaVEwQ0VDQURkdlFCQ3dBQThSMGVndkhQSG1ETDUvWGNXWlluZTNscjVDMFlBQUJ0SFBBQ0xiWjZHWm9qa1pFV0hrNFlCYkFkbmgwZXdJREZnQUFNRnVBQ0F1QUJFcmZlQUtBQkVzY0JEY0FDVGU1Y0U0MmZ3VTBXREpkdExVQWgrVlRnR0U3UkZBQ0JHbEtPeTVrQUt3QVhBNUFEVVZMYnplRUNCc0FBZ0RnRlJ0NEh3RkMyUjJ1UE10Q25GYUFCRGJBOENvQURDZkFDMjFiQTNxU1c0U0U1TVU2T0lEQjRhWUlBTEVEUlJUSUROMkFERXVCTkZkQUNBOHdacm1HSVByeHFWVkRuREVJRmdEdHhGWUFEQWhBbHltSWtCd0I2ZjBJQU9pQW1NS0RlY2JWNUtBTGcveDk2NllicXhnbUFBRlpWVFRwZ1ZxME5iQllRSERiQUFEVlF1WFVhRHpzQkRKcGJaRTNNQXVnQ0E5bWxKeW9RdHNybFF4VFFBZ0NRQVNmdXM3OFRBVFh3elFnQUF0NTBBaG5nQUl5bDJSSmdWbkwreWhOSG43anRFY0NnQW03KzJlak1xUGQ2R3lEOW94T1FBeUxRQWl5aVBSTXc1SnpPT291bmNCUmdBUU01R0RUZ0FWNVNKaWV3QWdLQUF4cFhzNWNiNmk0aERBelFzSitUUGpyQTFtYWljQ1FGQnhBZzU5dVdBaCtRSUpkNkllS2pJamFRQUFId1NkcmN5ZDNNQUhpekdWYk1BbWtzR0NwL0FCOWFJUmN5Tk53WkJhSytGV01RSlMvd2NOUEdBak9KQk1lK0FUMFA3cHd4QXNuNHFuR2FBTUdOYnh2QXlrZ1BFUVFCQWY4bW9Jb3VNTVJKMEFJSXdBQXNHcStkck5id29VdVZIQUNQYWdSdzRwWUFjTHAxb2hkMVFBRTFRQUN1V0FnTU1BRVNZUFpmenc5SG44VnNRVk9IYnkzd3RQamhNbGlPYi9RMWVoWEJTUTZSM3d1WFg5ajk2UlgvbHZsMzBtdWU3L25KY1BtaUh4SEVVUHJxb0JFWTJ5aXpnUG9OMFJLcnIrRXBFZnVhVHhtMHp3dW40UHFVTHdxNjd3NWYwZnZ5Z0JYQXp4VXpjZnQwVGduRGIvaTRZZnpIRHgzTXZ4Qlk4dnlNYitmU0x5eEhVZjIxUXYzWW4vMmp2djNjbnhqZVh3NldFZjZMQWhia254UG1mLzdvWC9qcUwvNUYwZjd2THlyd0gvOWVrUHdCZ3czMlg5TGZQLzlaQVFRODRaQllOUElBUitXUzJYUStvVkhwbEZxMVhxMVN5U3lXMi9WK3dXRnhXRHN0ajlGcDlacmRQai9mYmZtY1hyZkhsM2o3bnQvM1MvV0tBdjhJQ3czdm1nWVBGeGtidndJVkhTVW5LUk9QSWlzek5TbmZNRGMvUVEzTFBFTkxUUkZKVDFWWDFRQ0NBQUE3JztcblxuXG53aW4udWkgPSB3aW5kb3cudWkgfHwge1xuXG5cdC8v6rO17Ya1XG5cdGNvbW1vbjoge1xuXHRcdC8vIOu5iCDtlajsiJgg7YG066at7IucIOyYpOulmCDrsKnsp4Bcblx0XHRjb21tb25Ob3RoaW5nOiBmdW5jdGlvbigpIHt9LFxuXG5cdFx0Ly8gYe2DnOq3uOydmCBocmVmIOqwkuydtCAjIOydvOqyveyasCBjb21tb25Ob3RoaW5nKCnsnLzroZwg64yA7LK0XG5cdFx0ZW1wdHlMaW5rRnVuYzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2Htg5zqt7ggaHJlZuyXkCDrjZTrr7gg7ZWo7IiYIOyCveyehVxuXHRcdFx0dmFyIGFsbEEgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnYScpLFxuXHRcdFx0XHRhVGFnID0gbnVsbCxcblx0XHRcdFx0aHJlZiA9IG51bGw7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYWxsQS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRhVGFnID0gYWxsQVtpXTtcblx0XHRcdFx0aHJlZiA9IGFUYWcuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cdFx0XHRcdGlmICh1aS51dGlsLnRyaW0oaHJlZikgPT0gJyMnIHx8IGhyZWYgPT0gbnVsbClcblx0XHRcdFx0XHRhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsICdqYXZhc2NyaXB0OnVpLmNvbW1vbi5jb21tb25Ob3RoaW5nKCk7Jyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8v6rKA7IOJIOugiOydtOyWtFxuXHRcdHNlYXJjaExheWVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoZWFkZXIgPSAkKCcjaGVhZGVyJyksXG5cdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0aGVhZGVyLmZpbmQoJy5idG4tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0Ym9keS5maW5kKCcgPiAuc2VhcmNoJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblxuXHRcdFx0XHQkKCcuZGltbScpLmFkZCggYm9keS5maW5kKCc+IC5zZWFyY2ggYnV0dG9uLmJ0bi1jbG9zZScpICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRib2R5LmZpbmQoJyA+IC5zZWFyY2gnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCgnLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0c3VibmF2aVBvc2l0aW9uU2V0OiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGV4ZWN1dGVyID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHNjb3BlID0gJCgnLnN1Yi1uYXZpJyksXG5cdFx0XHRcdFx0ZWwgPSBzY29wZS5maW5kKCdsaScpLFxuXHRcdFx0XHRcdHVsID0gc2NvcGUuZmluZCgnPiB1bCcpLmdldCgwKSxcblx0XHRcdFx0XHRlbExlbmd0aCA9IGVsLmxlbmd0aCxcblx0XHRcdFx0XHRhY3RpdmVFbCA9IHNjb3BlLmZpbmQoJy5hY3RpdmUnKS5nZXQoMCksXG5cdFx0XHRcdFx0YWxsV2lkdGggPSAwLFxuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gMCxcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0Zm9yICggOyBpIDwgZWxMZW5ndGg7IGkrPTEgKSB7XG5cdFx0XHRcdFx0YWxsV2lkdGggKz0gZWwuZXEoaSkud2lkdGgoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggYWxsV2lkdGggPiBzY29wZS5vdXRlcldpZHRoKCkgKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWRkQ2xhc3MoJ2VuZC1mYWRlJyk7XG5cdFx0XHRcdFx0Y3VycmVudExlZnQgPSBhY3RpdmVFbC5vZmZzZXRMZWZ0IC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKyAoIGFjdGl2ZUVsLmNsaWVudFdpZHRoIC8gMiApXG5cdFx0XHRcdFx0dWwuc2Nyb2xsTGVmdCA9IGN1cnJlbnRMZWZ0O1xuXG5cdFx0XHRcdFx0JCh1bCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR2YXIgdGhhdCA9ICQodGhpcykuZ2V0KDApLFxuXHRcdFx0XHRcdFx0XHRsZWZ0ID0gdGhhdC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRcdFx0aWYgKCBsZWZ0IDwgMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggbGVmdCA+PSAxICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdzdGFydC1mYWRlJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICggbGVmdCA+PSAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPCAodGhhdC5zY3JvbGxXaWR0aCAtICQodGhpcykucGFyZW50KCkud2lkdGgoKSkgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2VuZC1mYWRlJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KS50cmlnZ2VyKCdzY3JvbGwnKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGV4ZWN1dGVyKCk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZUFjY29yZGlhbjogZnVuY3Rpb24oX3Njb3BlLCBldmVudFRhcmdldCwgZXZ0KSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChfc2NvcGUpO1xuXHRcdFx0dGFyZ2V0Lm9uKGV2dCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0a2xhc3NDdHJsID0gJ2FjdGl2ZScsXG5cdFx0XHRcdFx0c3BlZWQgPSAzMDA7XG5cdFx0XHRcdGlmICggcGFyZW50Lmhhc0NsYXNzKGtsYXNzQ3RybCkgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKGtsYXNzQ3RybClcblx0XHRcdFx0XHQuc2libGluZ3MoZXZlbnRUYXJnZXQpLnN0b3AoKS5zbGlkZVVwKHNwZWVkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3Moa2xhc3NDdHJsKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhldmVudFRhcmdldCkuc3RvcCgpLnNsaWRlRG93bihzcGVlZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVOYXZpOiB7XG5cdFx0XHRmbGFnOiB0cnVlLFxuXHRcdFx0b3BlbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbmF2aSA9ICQoJyNuYXZpJyksXG5cdFx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXHRcdFx0XHRuYXZpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0aWYgKCB0aGlzLmZsYWcgKSB7XG5cdFx0XHRcdFx0dGhpcy5mbGFnID0gZmFsc2U7XG5cdFx0XHRcdFx0bmF2aS5maW5kKCcubmF2aS1saXN0ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmRlcHRoM1RvZ2dsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCgnI25hdmknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdCQoJ2JvZHkgPiAuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRlcHRoM1RvZ2dsZTogZnVuY3Rpb24oKXtcblx0XHRcdFx0JCgnLm5hdmktbGlzdC1zdWIgPiBsaS5oYXNMaXN0ID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSAkKHRoaXMpLm5leHQoJy5uYXZpLWxpc3Qtc3ViLTAyJyksXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdFx0c3BlZWQgPSAyMDA7XG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZURvd24oc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHBhcmVudC5zaWJsaW5ncygpLmZpbmQoJy5uYXZpLWxpc3Qtc3ViLTAyJykuc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0aW1hZ2VSZXBsYWNlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaW1ncyA9ICQoJ2ltZycpO1xuXHRcdFx0dmFyIHN0eWxlID0ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIG5vZGF0YUltZyArICcpJyxcblx0XHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcblx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnNTAlIDUwJScsXG5cdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG5cdFx0XHR9O1xuXHRcdFx0aW1ncy5lYWNoKGZ1bmN0aW9uKGlkeCwgZWwpe1xuXHRcdFx0XHQkKGVsKS5vbignZXJyb3InLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdCQodGhpcykuYXR0cih7IHNyYzogZHVtbXlJbWcgfSkuY3NzKCBzdHlsZSApO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2coaWR4LCBlbCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fSxcblxuXHR1dGlsOiB7XG5cblx0XHQvLyDslpHsqr0g7Jes67CxIOygnOqxsFxuXHRcdHRyaW06IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0aWYgKHN0ciA9PSBudWxsIHx8IHR5cGVvZiBzdHIgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBcIlwiO1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0XHR9LFxuXG5cdFx0Ly/quIDsnpDsiJgg7J6Q66W06riwXG5cdFx0Y3V0c3RyOiBmdW5jdGlvbiBjdXRTdHIoc3RyLCBsaW1pdCl7XG5cdFx0XHR2YXIgc3RyTGVuZ3RoID0gMCxcblx0XHRcdFx0c3RyVGl0bGUgPSBcIlwiLFxuXHRcdFx0XHRzdHJQaWVjZSA9IFwiXCIsXG5cdFx0XHRcdGNvZGUsIGNoO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Y29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpLFxuXHRcdFx0XHRjaCA9IHN0ci5zdWJzdHIoaSwxKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRzdHJQaWVjZSA9IHN0ci5zdWJzdHIoaSwxKVxuXHRcdFx0XHRjb2RlID0gcGFyc2VJbnQoY29kZSk7XG5cblx0XHRcdFx0aWYgKChjaCA8IFwiMFwiIHx8IGNoID4gXCI5XCIpICYmIChjaCA8IFwiQVwiIHx8IGNoID4gXCJaXCIpICYmICgoY29kZSA+IDI1NSkgfHwgKGNvZGUgPCAwKSkpXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMzsgLy9VVEYtOCAzYnl0ZSDroZwg6rOE7IKwXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAxO1xuXG5cdFx0XHRcdGlmKHN0ckxlbmd0aD5saW1pdCkgLy/soJztlZwg6ri47J20IO2ZleyduFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRlbHNlIHN0clRpdGxlID0gc3RyVGl0bGUrc3RyUGllY2U7IC8v7KCc7ZWc6ri47J20IOuztOuLpCDsnpHsnLzrqbQg7J6Q66W4IOusuOyekOulvCDrtpnsl6zspIDri6QuXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyVGl0bGU7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0ICpcdEltYWdlIHByZWxvYWRlciAoYykgeWlrbDEwMDRAZ21haWwuY29tLCAyMDE2LjExXG5cdFx0ICovXG5cdFx0aW1hZ2VQcmVsb2FkZXI6IGZ1bmN0aW9uKGltZywgY2FsbGJhY2spIHtcblxuXHRcdFx0dmFyIGNvdW50ID0gMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpbWcgKSAmJiB0eXBlb2YgaW1nICkge1xuXG5cdFx0XHRcdGltZy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpbmRleCl7XG5cdFx0XHRcdFx0dmFyIGltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRcdGltYWdlcy5zcmMgPSBpbWc7XG5cdFx0XHRcdFx0aW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgJiYgY291bnQgPT0gaW1nLmxlbmd0aCkgY2FsbGJhY2soaW1hZ2VzKTtcblx0XHRcdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgaW1nID09ICdzdHJpbmcnICkge1xuXHRcdFx0XHR2YXIgaW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdGltYWdlcy5zcmMgPSBpbWc7XG5cdFx0XHRcdGltYWdlcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhpbWFnZXMpO1xuXHRcdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0Ly8gbW9iaWxlIGRldGVjdGluZ1xuXHRcdGlzRGV2aWNlOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v66qo67CU7J28IFVBXG5cdFx0XHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hlY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmFuZHJvaWQpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdpbmdlcmJyZWFkKSByZXR1cm4gJ2dpbmdlcmJyZWFkJztcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuICdhbmRyb2lkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuaW9zKSByZXR1cm4gJ2lvcyc7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmFuZHJvaWQgJiYgIXRoaXMuaW9zKSByZXR1cm4gJ25vLW1vYmlsZSc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlvczogdWEubWF0Y2goJ2lQaG9uZScpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRhbmRyb2lkOiB1YS5tYXRjaCgnQW5kcm9pZCcpID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRnaW5nZXJicmVhZDogdWEubWF0Y2goJ0FuZHJvaWQgMi4zJykgPyB0cnVlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRldmljZVNpemU6ICdkZXZpY2Utc2l6ZS0nICsgd2luZG93LmlubmVyV2lkdGhcblxuXHR9LFxuXG5cblx0Ly/siqzrnbzsnbTrk5wg7LC46rOgIOyCrOydtO2KuCA6IGh0dHA6Ly9pZGFuZ2Vyby51cy9zd2lwZXIvYXBpLyMuV0ZzcUhyYUxTQXdcblx0c3dpcGVyOiB7XG5cdFx0X3Njb3BlOiAnJyxcblxuXHRcdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRcdHBhZ2luYXRpb25UeXBlOiAnZnJhY3Rpb24nXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG5cdFx0XHR0aGlzLl9zY29wZSA9IHNjb3BlO1xuXHRcdFx0dmFyIGFzc2lnbiA9ICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PSAndW5kZWZpbmVkJykgPyAkLmV4dGVuZCA6IE9iamVjdC5hc3NpZ247IC8vYXNzaWduIO2VqOyImCDsobTsnqwg7Jes67aAIOyytO2BrCwg7JeG7Jy866m0ICQuZXh0ZW5k66GcIOuMgOyytFxuXHRcdFx0b3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PSAndW5kZWZpbmVkJykgPyB0aGlzLmRlZmF1bHRPcHRpb25zIDogYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTsgLy9vcHRpb25zIOunpOqwnOuzgOyImOqwgCB1bmRlZmluZWQg7J28IOqyveyasOulvCDssrTtgaztlZjsl6wg7Jik66WYIOuwqeyngFxuXHRcdFx0dGhpcy5zd2lwZXIob3B0aW9ucyk7XG5cdFx0fSxcblxuXHRcdHN3aXBlcjogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0JCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicsIG5ldyBTd2lwZXIodGhpcy5fc2NvcGUsIG9wdGlvbnMpKTtcblx0XHR9LFxuXG5cdFx0bWFuYWdlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gJCh0aGlzLl9zY29wZSkuZGF0YSgnbWFuYWdlcicpO1xuXHRcdH1cblx0fVxuXG59O1xuXG5cblxuLy9ET00g66Gc65Oc7ZuEIO2ZlOuptCDrs7Tsl6zspIxcbndpbi5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcblx0JCggZG9jdW1lbnQuYm9keSApLnN0b3AoKS5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAzMDAsIGZ1bmN0aW9uKCl7XG5cdH0pO1xufSk7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0dmFyIHV0aWwgPSB1aS51dGlsLFxuXHRcdGNvbW1vbiA9IHVpLmNvbW1vbixcblx0XHRpc0RldmljZSA9IHV0aWwuaXNEZXZpY2UoKTtcblxuXHQvL+ydtOuvuOyngCDsl5HrsKkg67Cp7KeAXG5cdGNvbW1vbi5pbWFnZVJlcGxhY2UoKTtcblxuXHQvL+u5iCDrp4Htgawg7LGE7Jqw6riwXG5cdGNvbW1vbi5lbXB0eUxpbmtGdW5jKCk7XG5cblx0Ly/qsoDsg4nssL0g7Je06riwXG5cdGNvbW1vbi5zZWFyY2hMYXllcigpO1xuXG5cdC8v66qo67CU7J28IOuEk+ydtCwgT1Mg7YG0656Y7IqkIOyCveyehVxuXHQkKCdib2R5JykuYWRkQ2xhc3MoW2lzRGV2aWNlLmNoZWNrKCksIHV0aWwuZGV2aWNlU2l6ZV0uam9pbignICcpKTtcblxuXHQvL25hdmlnYXRpb24gb3BlblxuXHQkKCdhLmJ0bi1uYXZpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5vcGVuKCk7XG5cdFx0JCgnYm9keSA+IC5kaW1tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHRcdH0pXG5cdH0pO1xuXG5cdC8vc3ViIG5hdmlcblx0aWYgKCAkKCdib2R5JykuaGFzKCcuc3ViLW5hdmknKSApIHtcblx0XHR1aS5jb21tb24uc3VibmF2aVBvc2l0aW9uU2V0KCk7XG5cdH1cblxuXHQvL25hdmlnYXRpb24gY2xvc2Vcblx0JCgnI25hdmkgLmJ0bi1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29tbW9uLnRvZ2dsZU5hdmkuY2xvc2UoKTtcblx0fSk7XG5cblx0Ly/snITroZzqsIDquLBcblx0JCgnYnV0dG9uLnRvLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAzMDAsICdlYXNlSW5PdXRRdWFydCcsIGZ1bmN0aW9uKCl7fSk7XG5cdH0pO1xuXG5cdC8v7Lm07YWM6rOg66asIOyDgeyEuCDsg4Htkojrs4Qg7JiB7JetIOuGkuydtFxuXHQvL+yDge2SiOuzhCDruYTso7zslrwg7JiB7JetIOuGkuydtCDrtoDsl6xcblx0dmFyIGNhdGVnb3J5VmlzdWFsSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0YXJnZXQgPSAkKCcuY2F0ZWdvcnktdmlzdWFsLmJnMDEgLmltZy13cmFwJyksXG5cdFx0XHRoID0gMCwgdyA9IDAsXG5cdFx0XHRpbWdTcmMgPSB0YXJnZXQuZmluZCgnLmltZycpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxuXHRcdFx0cmVzdWx0ID0gMDtcblxuXHRcdGlmICggdHlwZW9mIGltZ1NyYyA9PSAndW5kZWZpbmVkJyApIHJldHVybiA7XG5cblx0XHRpbWdTcmMgPSBpbWdTcmMucmVwbGFjZSgvXnVybFxcKHxcXCkkfFxcXCIvZ2ksICcnKTtcblxuXHRcdHZhciByZXNpemVIZWlnaHQgPSBmdW5jdGlvbiAoY0ltZykge1xuXG5cdFx0XHR2YXIgcmVzaXplRnVuYyA9IGZ1bmN0aW9uICggbGFuZCApIHtcblx0XHRcdFx0dmFyIHdpblcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRsID0gc2NyZWVuLm9yaWVudGF0aW9uLnR5cGUudG9TdHJpbmcoKS5pbmRleE9mKCdwb3J0cmFpdCcpID4gLTEgPyAxIDogMC41O1xuXHRcdFx0XHRpZiAoIHdpblcgPiAzMTkgKSB7XG5cdFx0XHRcdFx0aCA9IGNJbWcubmF0dXJhbEhlaWdodDtcblx0XHRcdFx0XHR3ID0gY0ltZy5uYXR1cmFsV2lkdGg7XG5cdFx0XHRcdFx0cmVzdWx0ID0gKCBoKih3aW5XKmwpICkgLyB3O1xuXHRcdFx0XHRcdHJlc3VsdCA9IE1hdGguY2VpbCggcmVzdWx0ICk7XG5cdFx0XHRcdFx0dGFyZ2V0LmhlaWdodCggcmVzdWx0ICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobCk7XG5cdFx0XHRcdFx0aWYgKCBsID09IDAuNSApIHtcblx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnQoKS5oZWlnaHQocmVzdWx0KTtcblx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnQoKS5maW5kKCc+LnR4dCcpLmNzcyh7IGRpc3BsYXk6ICdpbmhlcml0JyB9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIGwgPT0gMSApIHtcblx0XHRcdFx0XHRcdHRhcmdldC5wYXJlbnQoKS5jc3MoeyBoZWlnaHQ6ICdhdXRvJyB9KTtcblx0XHRcdFx0XHRcdHRhcmdldC5zaWJsaW5ncygnLnR4dCcpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IHRhcmdldC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYmxvY2snIDogJ25vbmUnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRhcmdldC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYmxvY2snIDogJ25vbmUnKTtcblx0XHRcdFx0XHRcdC8vIHJlc3VsdCArIHRhcmdldC5wYXJlbnQoKS5maW5kKCdidXR0b24nKS5oZWlnaHQoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXNpemVGdW5jKCk7XG5cdFx0XHR9KS50cmlnZ2VyKCdyZXNpemUnKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc2l6ZUZ1bmMoKTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHR9XG5cblx0XHR1aS51dGlsLmltYWdlUHJlbG9hZGVyKCBpbWdTcmMsIHJlc2l6ZUhlaWdodCk7XG5cdH07XG5cdC8vIGNhdGVnb3J5VmlzdWFsSGVpZ2h0KCk7XG5cblx0Ly/subTthYzqs6DrpqwgaDLtgbTrpq3si5wg7Yag6riAXG5cdHZhciBjYXRlZ29yeUxpc3QgPSAkKCcuY2F0ZWdvcnktbGlzdCcpO1xuXHRpZiAoIGNhdGVnb3J5TGlzdC5sZW5ndGggPiAwICkge1xuXHRcdGNhdGVnb3J5TGlzdC5maW5kKCcuZGVwdGgxID4gbGkgPiBoMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXHRcdFx0XHQuc2libGluZ3MoJy5kZXB0aDInKS5zdG9wKCkuc2xpZGVVcCgzMDAsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxuXHRcdFx0XHQuc2libGluZ3MoJy5kZXB0aDInKS5zdG9wKCkuc2xpZGVEb3duKDMwMCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYXRlZ29yeUxpc3QuZmluZCgnLmRlcHRoMSA+IGxpID4gaDIgPiBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKXtcblx0XHRcdHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcblx0fVxuXG5cdC8v7Lm07YWM6rOg66asIO2DrVxuXHRpZiAoICQoJ2JvZHknKS5maW5kKCcuY2F0ZWdvcnktZGV0YWlsJykubGVuZ3RoICkge1xuXHRcdCQoJy50YWIgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgJCgnLnRhYiBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0ICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0ICAgICAgICAkKCcudGFiX2NvbnRlbnQnKS5oaWRlKCk7XG5cdCAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiY2xhc3NcIik7XG5cdCAgICAgICAgJChcIiNcIitpZCkuc2hvdygpO1xuXHQgICAgfSk7XG5cdH1cblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdWkuY29tbW9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL2NvbmNhdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=