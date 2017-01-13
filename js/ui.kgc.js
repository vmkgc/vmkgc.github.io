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
					body.addClass('no-scroll').find(' > .search').addClass('active');
					body.append('<div class="dimm"></div>');
	
					$('.dimm').add(body.find('> .search button.btn-close')).on('click', function () {
						body.removeClass('no-scroll').find(' > .search').removeClass('active');
						$('.dimm').remove();
					});
	
					var scrolling = function scrolling() {
						var form = $('.search > form').outerHeight(true),
						    h2 = $('.search > form').outerHeight(true),
						    list = $('.search > .popular-list');
						if (screen.orientation.type.indexOf('landscape') > -1) {
							list.css({
								height: window.innerHeight - (form + h2)
							});
						} else {
							list.removeAttr('style');
						}
					};
					window.addEventListener("orientationchange", function () {
						scrolling();
					}, false);
					scrolling();
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
					body.addClass('no-scroll').append('<div class="dimm"></div>');
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
					$('body').removeClass('no-scroll');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODJmY2E2YWVhMWFhMWVmYzVhMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJqUXVlcnkiLCIkIiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJkdW1teUltZyIsIm5vZGF0YUltZyIsInVpIiwiY29tbW9uIiwiY29tbW9uTm90aGluZyIsImVtcHR5TGlua0Z1bmMiLCJhbGxBIiwicXVlcnlTZWxlY3RvckFsbCIsImFUYWciLCJocmVmIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInV0aWwiLCJ0cmltIiwic2V0QXR0cmlidXRlIiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJib2R5IiwiZmluZCIsIm9uIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInNjcm9sbGluZyIsImZvcm0iLCJvdXRlckhlaWdodCIsImgyIiwibGlzdCIsInNjcmVlbiIsIm9yaWVudGF0aW9uIiwidHlwZSIsImluZGV4T2YiLCJjc3MiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInJlbW92ZUF0dHIiLCJhZGRFdmVudExpc3RlbmVyIiwic3VibmF2aVBvc2l0aW9uU2V0IiwiZXhlY3V0ZXIiLCJzY29wZSIsImVsIiwidWwiLCJnZXQiLCJlbExlbmd0aCIsImFjdGl2ZUVsIiwiYWxsV2lkdGgiLCJjdXJyZW50TGVmdCIsImVxIiwid2lkdGgiLCJvdXRlcldpZHRoIiwib2Zmc2V0TGVmdCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbExlZnQiLCJ0aGF0IiwibGVmdCIsInBhcmVudCIsInNjcm9sbFdpZHRoIiwidHJpZ2dlciIsInRvZ2dsZUFjY29yZGlhbiIsIl9zY29wZSIsImV2ZW50VGFyZ2V0IiwiZXZ0IiwidGFyZ2V0Iiwia2xhc3NDdHJsIiwic3BlZWQiLCJoYXNDbGFzcyIsInNpYmxpbmdzIiwic3RvcCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJ0b2dnbGVOYXZpIiwiZmxhZyIsIm9wZW4iLCJuYXZpIiwiZGVwdGgzVG9nZ2xlIiwiY2xvc2UiLCJuZXh0IiwiaW1hZ2VSZXBsYWNlIiwiaW1ncyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiZWFjaCIsImlkeCIsImF0dHIiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaW1hZ2VQcmVsb2FkZXIiLCJpbWciLCJjYWxsYmFjayIsImNvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImluZGV4IiwiaW1hZ2VzIiwiY3JlYXRlRWxlbWVudCIsImlzRGV2aWNlIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjaGVjayIsImFuZHJvaWQiLCJnaW5nZXJicmVhZCIsImlvcyIsIm1hdGNoIiwiZGV2aWNlU2l6ZSIsInN3aXBlciIsImRlZmF1bHRPcHRpb25zIiwiZGlyZWN0aW9uIiwibG9vcCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uVHlwZSIsImluaXQiLCJvcHRpb25zIiwiYXNzaWduIiwiT2JqZWN0IiwiZXh0ZW5kIiwiZGF0YSIsIlN3aXBlciIsIm1hbmFnZXIiLCJhbmltYXRlIiwib3BhY2l0eSIsImpvaW4iLCJoYXMiLCJzY3JvbGxUb3AiLCJjYXRlZ29yeVZpc3VhbEhlaWdodCIsImgiLCJ3IiwiaW1nU3JjIiwicmVzdWx0IiwicmVzaXplSGVpZ2h0IiwiY0ltZyIsInJlc2l6ZUZ1bmMiLCJsYW5kIiwid2luVyIsImwiLCJ0b1N0cmluZyIsIm5hdHVyYWxIZWlnaHQiLCJuYXR1cmFsV2lkdGgiLCJNYXRoIiwiY2VpbCIsImRpc3BsYXkiLCJjYXRlZ29yeUxpc3QiLCJldmVudCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJoaWRlIiwiaWQiLCJzaG93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JDQTs7O0FBQ0E7O0FBQ0E7Ozs7OztBQU9BQSxRQUFPQyxNQUFQLEdBQWdCRCxPQUFPRSxDQUFQLEdBQVdBLENBQTNCOztBQUVBLEtBQUlDLE1BQU1ILE1BQVY7QUFBQSxLQUNDSSxNQUFNQyxRQURQOztBQUdBO0FBQ0EsS0FDQ0MsV0FBVyxvdkNBRFo7QUFBQSxLQUVDQyxZQUFZLG9vU0FGYjs7QUFLQUosS0FBSUssRUFBSixHQUFTUixPQUFPUSxFQUFQLElBQWE7O0FBRXJCO0FBQ0FDLFVBQVE7QUFDUDtBQUNBQyxrQkFBZSx5QkFBVyxDQUFFLENBRnJCOztBQUlQO0FBQ0FDLGtCQUFlLHlCQUFXO0FBQ3pCO0FBQ0EsUUFBSUMsT0FBT1IsSUFBSVMsZ0JBQUosQ0FBcUIsR0FBckIsQ0FBWDtBQUFBLFFBQ0NDLE9BQU8sSUFEUjtBQUFBLFFBRUNDLE9BQU8sSUFGUjtBQUdBLFNBQUssSUFBSUMsSUFBSSxDQUFSLEVBQVdDLFNBQVNMLEtBQUtLLE1BQTlCLEVBQXNDRCxJQUFJQyxNQUExQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDdERGLFlBQU9GLEtBQUtJLENBQUwsQ0FBUDtBQUNBRCxZQUFPRCxLQUFLSSxZQUFMLENBQWtCLE1BQWxCLENBQVA7QUFDQSxTQUFJVixHQUFHVyxJQUFILENBQVFDLElBQVIsQ0FBYUwsSUFBYixLQUFzQixHQUF0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QUNBNUIsTUFBRSxJQUFGLEVBQVErRCxNQUFSLEdBQWlCdEMsUUFBakIsQ0FBMEIsUUFBMUI7QUFDQXpCLE1BQUUsY0FBRixFQUFrQjRLLElBQWxCO0FBQ0EsUUFBSUMsS0FBSzdLLEVBQUUsSUFBRixFQUFROEYsSUFBUixDQUFhLE9BQWIsQ0FBVDtBQUNBOUYsTUFBRSxNQUFJNkssRUFBTixFQUFVQyxJQUFWO0FBQ0gsSUFOSjtBQU9BO0FBRUQsRUEzSEQsRTs7Ozs7O0FDdlRBLDBDIiwiZmlsZSI6InVpLmtnYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MmZjYTZhZWExYWExZWZjNWExZSIsIlxuLy8gaW1wb3J0ICcuL2Rldic7IC8v6rCc67Cc7JqpIOyKpO2BrOumve2KuCDtlITroZzrjZXshZjsi5wg7IKt7KCcXG5pbXBvcnQgJy4uL3Njc3MvY29uY2F0LnNjc3MnO1xuLyppbXBvcnQgJy4uL3Njc3Mva2djLmNvbW1vbi5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2MubGF5b3V0LnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5zdWIuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLm1haW4uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLnN3aXBlci5zY3NzJzsqL1xuXG5cbndpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9ICQ7XG5cbnZhciB3aW4gPSB3aW5kb3csXG5cdGRvYyA9IGRvY3VtZW50O1xuXG4vL+yXkOufrOyLnCDsl5HrsJUg67Cp7KeAXG5jb25zdFxuXHRkdW1teUltZyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVlBQUFBZkZjU0pBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlwcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UTXlJRGM1TGpFMU9USTROQ3dnTWpBeE5pOHdOQzh4T1MweE16b3hNem8wTUNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVFV1TlNBb1RXRmphVzUwYjNOb0tTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEdNak5HT1RneE1VTkZSRGN4TVVVMk9UUTVNVUZGUkROQk5VSTBOa1ZGTUNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwR01qTkdPVGd4TWtORlJEY3hNVVUyT1RRNU1VRkZSRE5CTlVJME5rVkZNQ0krSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pKQk5UTXdRVVJCUTBVek56RXhSVFk1TkRreFFVVkVNMEUxUWpRMlJVVXdJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1l5TTBZNU9ERXdRMFZFTnpFeFJUWTVORGt4UVVWRU0wRTFRalEyUlVVd0lpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCs2Zk01NEFBQUFCQkpSRUZVZU5waStQLy9Qd05BZ0FFQUNQd0MvdHVpVFJZQUFBQUFTVVZPUks1Q1lJST0nLFxuXHRub2RhdGFJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoL2dEbUFOVUFBT3JxNnZQejgvdjcrOFRFeE1mSHgrZm41LzcrL3R2YjIrM3Q3ZlQwOU03T3p2THk4dWJtNXZIeDhmajQrTXZMeS9uNStjbkp5ZC9mMzgvUHorL3Y3OVhWMWVIaDRjWEZ4ZERRME56YzNQZjM5OWZYMTlQVDAvMzkvZWpvNk5IUjBkalkyTnJhMnV2cjY4ckt5dkR3OFB6OC9PUGo0OGJHeHRUVTFNakl5UHI2K3VYbDVlN3U3dlgxOWV6czdPRGc0TjdlM3N6TXpPVGs1TTNOemRMUzB0YlcxdmIyOXVMaTR1bnA2ZDNkM2RuWjJjUER3Ly8vL3dBQUFBQUFBQUFBQUNIL0MxaE5VQ0JFWVhSaFdFMVFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NGdQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNHpMV013TVRFZ05qWXVNVFExTmpZeExDQXlNREV5THpBeUx6QTJMVEUwT2pVMk9qSTNJQ0FnSUNBZ0lDQWlQaUE4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGlBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWlCNGJXeHVjenB6ZEZKbFpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFVtVm1JeUlnZUcxd09rTnlaV0YwYjNKVWIyOXNQU0pCWkc5aVpTQlFhRzkwYjNOb2IzQWdRMU0ySUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRU5URkdRemhCUVVReVJqZ3hNVVUyT0RkQ05FRXhRa1UxUVRsRE5rRkZOaUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBFTlRGR1F6aEJRa1F5UmpneE1VVTJPRGRDTkVFeFFrVTFRVGxETmtGRk5pSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1ExTVVaRE9FRTRSREpHT0RFeFJUWTROMEkwUVRGQ1JUVkJPVU0yUVVVMklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rUTFNVVpET0VFNVJESkdPREV4UlRZNE4wSTBRVEZDUlRWQk9VTTJRVVUySWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K0FmLysvZno3K3ZuNDkvYjE5UFB5OGZEdjd1M3M2K3JwNk9mbTVlVGo0dUhnMzk3ZDNOdmEyZGpYMXRYVTA5TFIwTS9PemN6THlzbkl4OGJGeE1QQ3djQy92cjI4dTdxNXVMZTJ0YlN6c3JHd3I2NnRyS3VxcWFpbnBxV2tvNktob0orZW5aeWJtcG1ZbDVhVmxKT1NrWkNQam8yTWk0cUppSWVHaFlTRGdvR0FmMzU5Zkh0NmVYaDNkblYwYzNKeGNHOXViV3hyYW1sb1oyWmxaR05pWVdCZlhsMWNXMXBaV0ZkV1ZWUlRVbEZRVDA1TlRFdEtTVWhIUmtWRVEwSkJRRDgrUFR3N09qazROelkxTkRNeU1UQXZMaTBzS3lvcEtDY21KU1FqSWlFZ0h4NGRIQnNhR1JnWEZoVVVFeElSRUE4T0RRd0xDZ2tJQndZRkJBTUNBUUFBSWZrRUFBQUFBQUFzQUFBQUFQNEE1Z0FBQnY5QUFHOUlMQnFQeUtSeXlXdzZuOUNvZEVxdFdxMUM0WFhMN1hxLzRMQVlxdVdWeCtpMGVzMXVJODltdDN4T3I5dUo4R0grenUvNy8wbDdlb0NFaFlaemduaUhpNHlOVjRsRmtJNlRsSXVTa1pXWm1vZVhScDJib0tGaG41NmlwcWRqcEVlcXFLMnVtSSt2c3JOS3JJRzB1TFMydGJtOXFMdEx3TDdEZHNMQnhNaU94a3pMeWM1Z3pjelAwM3pSVGRiVTJVN1kxOXJlYWR6YjMrTmY0VS9tNU0vbzUrbnRVdXRrN3ZMU2YvRHpydmJ2OS90eGh2bjhtdjVSRVFoUW1jR0MzZ2hpUVpoTllTeUd6aHh1a1FpUkRzV0pGWDFkNUxJeEk1cU9IRDNLQXRtRnBFaU1yMHllSEtockpTaVYwRnhtZ2psSzVpU2FZbkRhVklSTXAwMy9uNmwyRWdMNlVhZ2ZvdUNNM2tHcWhpbEFwMDJWeW9HNmhtbzdxMVdsUnAySFZWdlhObCtQR1BBUVFzR09DQnNXNENzWWxzaUNFVHRBZUxBQUk4ZUxCTDhZdGlWeGdRQUxCQmQyQ041QkFJZXB0b2hDQ1VneGdJSUFBb01qaXdpRjJDS29GM0Y1SUlnY09ZS0FUWlhyTU8xUVFBUUNIbkJkOEdBUitVU0ZBWUpmOEJBQkFJQ0JneWVKbGpCcndvWUt3U1I0R01BdzJJUVp3Umg0Mk1pd2c4TnRTejhaTVJCc29VRUx3UjZHZExBd1EvVVFHanNlOENCeFFQQmtUa0l2R21pdzRrQ0ZDUk5nYzdhQUFJTGdDYmNsQ0I1d21nZU1IUXJ3NEVKNW5GMEFYdzBITUJCQU1VbzV4TUlHa05Id1FnRUZMQkRBaFFGWVFKMXFjTzN3LzhFTmthVXdCSE1nbU1IY0RpdGdHQUFKRkVvd3dRNHBoQkNjRzZFVklwQUhJeEFnQVFzZEtORUJjU1pBd0lNSm5BMDJRSTh6N0tBYUJNeFY4QndTQWlDUXdRWGRzVkdqUDJva29FQUtKbnpXaEFFQUlFQ0JjR1lWR1NBT082QXdCQXN1bk5lRUNpOFFRSU1HU1duRmt4Z2VESkJCajFWQVFGeGtGeXpBUWw5Q1ZpSEFCaWU0R1pPZHNJQmh3UVhaYldIQUNpaE13RUVPRkdRd3dBaHFiV0hDQUF6VXhHZ3BYM2hBUUtkY1FDQUJDaGhBTm9JRkpYZ0JXSDhsamZxR0YzeU5HWVlBQVJRS2hxbDRoV1RyclZ0QWtFS29vTUR3UUt3UERVdXNGU0JzSU1wd0dUVHI3TE5UTEhDQnI2QWtNQUNkTEYxN0RCVWJWQnVGQWNHcXdQK0RDZ2FVMEtNQUxReWhRUUFPRE9GbENjeXFPNFMrVTFSZ3JqN2kwaE9GQUFQWUlNVUxDMHdXS2dNQU5KQkFCeElrUENTOVBFQlF3eEEzV01CREF6aXN3SU1NQ05BYUJRSUVQTWxPd04xRTRVR0FVcERBd0pnTHMrQkJBamF3c0M0UEZoUVFyQllaWkdCQUFDdFU2MEVCSGs5aEFBRWlwNHl5MGs3b0FNTVVFY3ZBdzhJOEhKQ0FBVEpRb0pvSkZNZGhnQVFXQ09DQUM2RlNJR1lWTmNoMjh0TGlQQkdEb2xEd0MrWGN3dVZMQkxkU21NREIybXkzellRQkF3U0xDZ0xpTWQyMzMwclk1eVVxM2hwK09PSklKTERES3c3c3dPd3RqNGNSd0FsT0dFRGg1NS9IeTBNSUV6U3dKdWloODZEQkJOSU9nUURxRk5yTUEzeVhLL0gvbTl5WnM5RUFBVTRJVUtSZ3lINndRMzhWL0I2cTVDenpJSHlSRlF3aDJPSksrRjV2N203czdrUUhCeHpBZ1dBUlpEK2o4UDNOcXlJS094d1BJQkVtSEJEQ2ZpRWs2UHdPMENjaFBmWFY4LzdFY1B1cFZhWmdTUk1CUXZrOGtOd0RBaUM0LzhTbUNJSnBIOTZNTUQvNjZjNStUcEJCZVBRVGd3N3NiM2hGZ0V1OXdCZkF3ZGlQQkFNWWdBdE9NQURUdlU4d2dvUFNEcWJuUURWWXp3azJnQTBGOEpjREluQ1FDQnEwendsNkpEa0NIS0NHSlhqQURveFRnUEI0Q1RnQjRKUDhWdGpDTmJ6d2I4U3BvWEl1TUlEdllSQ0hUTlNBZDVCSGhQWFI0RG5GMDhINzRxZENGalp4REU5Y2dnWkc4QUFscnVBQ0JSZ0NCeTJRdlJQRS95VjdCOWpBQ0xqSWc5MFFnSVVxU0FFS2V2UzhKalR3ak9YUTFSTmhRRVlpbEFCY1JJQWs2VXgzUWM0OGdEWEorNWtSV0VpN0pDd2dqanhvb0FVZ2lVZ3IwS0IxTHhUQUNaRGxCQTNrd0YraUcwSUxWS1FpSWZFUlNoS293QUYwcFFRZHNHeCtCb2lBQkVwWmhRUnNJRWtBMm9DcFJJQUN1QmdJQmlaREFnWGtzNE1Cd0MwQnJEdkNMWTJnQWNnTVJtTkhnQUFJeWhTRERWQmdCeDZvZ0JBSE1JRVFOSktZUzFpQmtRcXd1dzVzWURBUlFGVVNnam5FRGt3bkJTWnJ3UG1NMElFQXhOSUlZUlRBb0had1VEeFFNMnc3ME1DSmRuQUMyY0V6Q21YNndNWjQ5eHZCM0tBSjloa0FFVkxBUkNJSU5IbFBnRXV3dGllSTRvVW5sUDlNbEU4SUxpcUZEZ3lnQmlnb21mVlljSUlRektCMVN6Q0FIWU96Z0JEV1RxQVJnTjNuRnFpOElWWXNBanN3NFJFZXdJRU5ES0FFMG12QkFFTHdnZVRRRkFvQzZGUURPbUM5QkFqSkFMeGNBcEYyRUo4ZHFNMmt2NHVNVklzd3pSM013STdOUXdKYWg1QUFGVWhQQStCSzYxZWxrRWFWWVNBRkUyQkFORFdBeDhZMmxwUkZJQUVISWpDQkY5UnVDWWNjN0JSSzhKd252ck1SN2JKWFNUK3IyU1RJSUZKUHJJQVpLU0VDY0RZd0JITXQ3UktDaUlFZXZUQ0dUNU9EQWNvelV5a1lnQWFlZ1dtOUlIQUJvTW8yQ1FrSWpBZE5OWjNJS0NDYVhlZ0FaUFVqbUg4MXdRRWtOUkpyVmtETkhZeUF0S1ZkZ0RjSmtBRHJ5Uk01NEtYL2dnQ0VHSUxudUNBeUU0aUNCcUM2Z3d1UVFIcnZGY3dEVm50Y0k4UUFPUnZsUWVVT0tJWDBYa2N3SURDQUN1aWJRQ200ZEFUQ3RhbGd4TmhmK1VYQUF3eUlBRmw1QndBTVpFcE5VZWdBWENLbGhEK2RwYnZmdk44RFpJQ0RFVUJBZWd2b3pnMVFXdUVpZElCWkFsZ1A3eGFIdXlhQUNJQjZEUUFGaEJoWEl6RlZMRjdxUUFla2wrTjkxZGdKaFpYQ09jTUQzUUNpR0FNa3NNSHl2SXVDRVBUdkNabDlzaEljb0s4bkxpZ0tFSUJxQkNCTEJGVnlwbWc1R015TUNneXVCZ2FneW1MbVFRN0ErVVFGNkpNSkFpRE9BUDVzQkJ2UU13QUZnRXdJUkZETkJ4Q2d4MDVvajJpbmh3SzRpWmxYTENCQUJDZ1FBSkk1QUdqTnVWQVQvMXpnekFLOFlBS0MxV3VITWdEVmhqcWhCQ3Nhd1FVUUVBQU43TUJDT0JpQW4rK2Nad0gvZHpBS0VBRUJLS0RjQk9KWk9Oc1RUQXlvYXh3aVZGa0hFejdhRGl4d2JQbVoyTHNCVUJLRG02UEVTOVAzQVFLd0hna0dVNklsQ0ZRd0g1QlBCZksxQWdJTUlMZWFTWGFSVUhEWkpsaFFNQVI0OFFwaktKZ3Y5cG9JOUEyUTlRNjhBM2pMYndNUFFJQzNkcERYQkd3NVRVTWdYMlFHOElGN1V2SExUQUFQWVlSTE1NRmM3TjhWcTRFR1dyQnU2K0hBc2k3b2JSTW9ZRWNRWU5VL2J4N0NQU2VJS2dSb3dBUWt2aDhLRXVBQUVOaEFlaFE0UUZqekNuSWpSTmtKSXFCNEF4b1FBeEFVZEFJRWVOV1poeUNDQWdnZ1ZnbUlwUXhBYlArRk1CZjlDRWRmZ2d4K1RZQUhERUNJNEo1TkRGYTdPN3NNSmpuNnlRNEhRS1hla241ZExBdVFRS0F3aXM4UUFIWUFCT2dSYTNZZ3hZb1JJUEJnZzhzQmloZ0JqUEd2cG96MlFMMi9ycVhJZkNDOXJpUEFDU1NnQVE4WUFBSVVDTlptR0Q0RVB4RW0xeStBalFoK1hZRXRlL1VKZWpjU0srK2UzTTBYd0FUZ3dVQzFiVHlFT0JjZ0FzNXhuVWZYWmNmZnpUZXVCbk1Da1lSWkFBWWtTV3AzNTBIeDVzeURlMkw4Q0N4L1FKSkNvQjl6NVpkTy9OUnZaR0RBM1dwV1FBSW1xSUR1cjNkNFgzWGdBUmZBL0hGVFVEaTM3TUM2U2pDQVdSZ1FaeDJVQUtvMU5CM3hOUVF5a0FJWjBBTHJBeURDc3dFR1FHWlVzQUE3Y0FCR29DSC8xL2RrQkVCamtsTnVUS0FoVHdNaTFkSUFJWkFkNVFGOWRJVnZHbUFBekVFRFI5WUVtekZNUlVBa1YrSU9JSVNCbWNFRTNqSUR0L0UvRkRZRUFRQVpLV0lCT2tBbkFsQW01bUlBeFpNQ2x1WUVMV2dFUk9JeklIY29na0dER3FnRStnRktaZ0ZpQU9CTm5HRUNCdkJyT21BQStpY0JQMUpOaE1hQ08rQ0M2S05zc1ZWajVmRUJMZ0JaQWdRREtZUjlITkFqZ0xNRHZjVnlrWUZUTkZBQ3pjV0FzeUVZbjVja0QxQUFLOGhBVzNlR0ROUUFNREFBS1NCLzhGUTVEMUJsa3JNZkZRaFhPMENDS3VBQklnQTlQTVZXUGZKL0VDY2NHc0k5R1RCNWJmWnJpb2dFSU5Kc1Q3WVpiMlVFa29NQ0JUQUFNZUFFYUJKNFM1QjB6ZkVaL3hEd2EvcVVhNE9SQWhWUWhqd0FJaHNnVDJoWWFEdndjVThHQUVEbUF1REVWNWtCSG14MkJCMGdBaXNJQWVzVEFjZ3loQ2NtQVdkQUFscTRIL0NoVDl1akFrdElCQ1R3QXJmaE96U1FaOUNJTE9BaEFCQkFBeE9RSkNYeVA4YjRCUDRFR1NDd09CeHdBU2JRQVFha1R3NXdiWVBoaEVPZ0FDSzFHWlExQVVMd1AvWGlPeG9sWnZNb1IvQ2pBZG1WR2Yremh2SjFBQ3R3Wkx6SVVFWXdGam5GR1IvVmtMd3plb0xoTVJRSlV4ZjVqRUFtUEl1VGdUendrV2xRVlBzQkFhaUdCQ0tBVE9oRUJBclFrcXM0QkRGcGtmSllrL0JEQkRpNVBpRFpCYVpDR0lGQlV2R29CQVJVQkVXcEdVZVprMHlrbEJqSmxEbFdkUnBTSXN3UmxmOVhRQUhiODI3Y09CaDdBd1ZidVJtMGFJaGVXWkVlc3BUQkF6OFFTRzQ4d0J6OVdBVUc4QUVjSUFISjl5TFZ4RjlMRUplUlVTMUplWmRobVpjNTVnSUZVSlo5dVFOekdBWmZvMThXOVFTS09aZnEwcGh2U1pPUTZaU1p3UnlYK1FYNEV4NkhtQVNLdVl5TlNYUTFscEZOUlNzNGFacG9zQUIvc2tkVTBKcDNReHgyQ1pzVkpwdkx3d0cyVkpxV0tRWW9LQmdYa0FHUWFBUzhlWXpLOVp0NHFaRnh0amUxZVp4Z3NBRHlsbk5Ud0p1YlFRUENJNTJQcVpFQ1VEd1FjSjJuMlFRdlVBUFZnUmNRSUFJNUlKUTFrR3BTd0pzME1BQUNFSk8vQVp6OUpac2dBRkQ2a1FEb1NRVVV3R0ErdEQwVGdBRmQwZ1c4T1FNUUJnUHhKMkQvcERlZTlzSUQrdEVBSGhBZUI1QWtHNEJIR1ZBQW0ybURBY0FqbXJHYVRLQUJrOWxZN25ZQTVPTWNJd0Job1RRRWxjT2Z4eVdiUkhDaC8xTmtVVWg5YktBQzhsWms4ZmVpbXpTaHJ6aHRSaEJuQy9BenRLUWlDL0FvRjNDTmFFQStHMEJyUzRvaDZoSURqVmNFT0hscFo5ZHQ2VVpHRFFBNzI3TUJzZk1FR3ZBQ0IzQVhyVVFoOGtRQXNOT0pSL0FhM1BJZnMxZGp6SUVDNEtjaHpsaDZDaGxYRXdCcGRGVnNUclVFcWFlaitBWTM3L1VCUWxJQ256SUNxQ2hiUm9odityVmF3c01CSGxDbEZ5SUNOY0JXeDVaY0JLQWFldGlQMC9FQUsyQWhWWW9BRWhCQ0RaV0EzaFFCVTlkckxwQWtsYlU0R1RBQlpoR2FTN0E5UEZvRS85QkdnaDV3QUJobkFQQUhwVVdBSnBRMUowVGdBVlkxQURmUW5JT0ZHWVpSQkNaR2d2WUNYWXptUVEwRkdYaGhWa253b3pTS04vWWhHQ2Z3cWdad0FmWDNkWnN4aFV2UUFoZWdyanl3QVBBQkh4OUFTcFVqUXNvVkE0UkdPdkc2a2tYQUd0UElCT2RFbzczV0Fab0hxRVp3VDBtNEJKSVRRaEpRQU90ekFzUXFQeWR3QWdaYkJBZ2JmVU9nSVNxbkJCbWFUNWhhcFQxeVlLNTRUeTVvQXgrN3BPdURBcnNIUWpHd2UwOVdBdjhsQWNmV1hJWmFKT0xoT3lZNUJHaXlOMnRWczV4UmgwcEFBZTYycTErWGdBcmdBYXRGQXVCeEFlM2pXSURuV0kzVmJIQWhWZkowTWVRQnRkbERIQndBdFVuaWpkMVdBaFF3Y3hzYmZSSlVKUDhUVUFPVGhSekpad1R3QjE3LzRTU2g5RjlGb3dTYnVxc2RrQU93WVNDa1U0N1ZoSlo1aGdBb1ZpVFdwQVFha2dJZFNxMUZzR0RoZ1FKUWhSOUljTFZKMHJKSjBBQ0MranNwRUxFMWxnQjgrMllha25EN2hMZktpWXJjU0ZJSzhBTGRackZ2dDdhZTRHNHlRQUxGOXpzSzRLdzBwUUlkOGp2eWtRTUlRRktxdFU4WFlxTDJkaUdBNmdDYnFnQUJRRjA2Q3JmL2xwcTIyd0RKaGdFTmNFOG53SVZXNEx0S1VBSTNjQUVFU1FKQ2FhZ0dKMllXUUFPdnl4a3ZNR1Y1YXdJdUFGVXpJQUl1MjJZbVVBSUZJSFFVa2dGRW13UitDRlVia0FBSk9CZzYwQURRWnJrSksxdDVWd0FhNEZLUm9Yc2lRQUVhTUdTQ01RTUljQU9RRVFIL04rQzdBaUMvT25BQUxFQWh5dFE3RHR3Y0MrQUJIU2tZRmFBaEZjY1pLRUFCSXBBQjZZbEllNEFBR0FBYitUUlJGS1VCTjBBQ0JrVENEVkNBMWJRQmZpc2NseW9BRExBQU1uQWhybVlFRkFBQ2dVRURDNEFEUlBaMkdKQkxLU0FEQ2JERUZzQUMyZlVBMXhpRHJaQUlMZEFCTGdCL0xIQmVPN0FCYU1JQW11SUJMb0FBcXNod0ZDQURSRFlERnRDUE9WTUFDTkJ6RkhLTkJzQUNNQUJWVEp2RWxXUjJCTkFBQ3RBQUowQUFJaUE4SjRBQW4rSldFSUF1bUVNOWdrQUNjSEVDWVhPZkRDQUNna3JHT2FBZktZQW1TN3dER0ZESkllQk5obHVxNjl0bUZIQURGYUJjSDhBQU52QUNIM3dXSEVBQ0NKZ0JFc0FCa2drWEF3UzkveXlRQU1TaGdvMzhPSWx3UWNSSnNndkFZQktRQVFDZ1ppNUFBd21neENUTWlSSndRUXF3dFRKQUlWU0tBeFJDUnhpd3hDZUFBaXZRQXVtRVl0N29BVEdnQUFnUUFvN0JZRHRuRmxaTWpvT3hwNlJ5T0pCUXVUUGdBRTFpQXdSOEFqVmdBaC9Bd2hTZ0FCSGdMVFhRWFFOUUFaZTZBQXhRRmo3TFRpRmdBZzJ3QU9rWHVCakFBUS9RQUUrc0FBendHaHNBVmN3cXRHbFNBbmtTR1JDRUxTZ2pDWjNNUFFrZ0F3TVFBU1JRZnVnV3pWZ21BamlBQUJWQUFxY2N1QU9BQVJsdzBBRlFkYUJqSVNTd0FKK1VBUnl3dWRVMEFDWWdBUXdRQXg3d3o1dFNSQXU4QUFZMFRNWTdHT2RLMHRkeUNUWGNHZ2pRQUZDRk1DZk5BR1l4VGYrb3Ftdk5NWE5GTmdMeGFxdHhOUUlNZG5iVFZnRXM4QUl5WUFFeFFBSTZRQUdHV1hBTFlCWXBnQUFsZ05hUjhhKy83Q3lkb0FKR1hYQVFzRDBZa0FDUFVpREZITFlpa0FJeGdBQ01GZ0tiS2g5SkJRTWJVTGxGZ2pRSTBBSWdZZ0VUMEFFaEVBTlpXQUVZSGNJSElCOFBRQUdKakFJUXNBQW5MUmlPQ2ptalFnbzlHRmVLZWdNTTJ3S2IyaGtnUUFIQ1ExNGpzQmxpTWp5UXdRRUJjQUFXa0dZNmFnS2xHQUlpeENrVzhNTitnYnRhU0FBeWdKdjF0UUlHWUFHQlN4aC9HYys1TFFVQlVMdWM4ZGU4ZkJZQVFBSGJleFl2SUFFSUFBTVZNbWdNOEFCN0dRSm9ZcGtTU1NFWWdBQUFvSjJDMFFERWtRRTRvQU05WXdFb3NBSC9oMEpaa1JFQytCdUZOcUFCZllvY21Mc0t0cklMSFNBRGlRMENFQ0FEZHZRQkN3QUE4UjBlZ3ZIUEhtREw1L1hjV1pZbmUzbHI1QzBZQUFCdEhQQUNMYlo2R1pvamtaRVdIazRZQmJBZG5oMGV3SURGZ0FBTUZ1QUNBdUFCRXJmZUFLQUJFc2NCRGNBQ1RlNWNFNDJmd1UwV0RKZHRMVUFoK1ZUZ0dFN1JGQUNCR2xLT3k1a0FLd0FYQTVBRFVWTGJ6ZUVDQnNBQWdEZ0ZSdDRId0ZDMlIydVBNdENuRmFBQkRiQThDb0FEQ2ZBQzIxYkEzcVNXNFNFNU1VNk9JREI0YVlJQUxFRFJSVElETjJBREV1Qk5GZEFDQTh3WnJtR0lQcnhxVlZEbkRFSUZnRHR4RllBREFoQWx5bUlrQndCNmYwSUFPaUFtTUtEZWNiVjVLQUxnL3g5NjZZYnF4Z21BQUZaVlRUcGdWcTBOYkJZUUhEYkFBRFZRdVhVYUR6c0JESnBiWkUzTUF1Z0NBOW1sSnlvUXRzcmxReFRRQWdDUUFTZnVzNzhUQVRYd3pRZ0FBdDUwQWhuZ0FJeWwyUkpnVm5MK3loTkhuN2p0RWNDZ0FtNysyZWpNcVBkNkd5RDlveE9RQXlMUUFpeWlQUk13NUp6T09vdW5jQlJnQVFNNUdEVGdBVjVTSmlld0FnS0FBeHBYczVjYjZpNGhEQXpRc0orVFBqckExbWFpY0NRRkJ4QWc1OXVXQWgrUUlKZDZJZUtqSWphUUFBSHdTZHJjeWQzTUFIaXpHVmJNQW1rc0dDcC9BQjlhSVJjeU5Od1pCYUsrRldNUUpTL3djTlBHQWpPSkJNZStBVDBQN3B3eEFzbjRxbkdhQU1HTmJ4dkF5a2dQRVFRQkFmOG1vSW91TU1SSjBBSUl3QUFzR3ErZHJOYndvVXVWSEFDUGFnUnc0cFlBY0xwMW9oZDFRQUUxUUFDdVdBZ01NQUVTWVBaZnp3OUhuOFZzUVZPSGJ5M3d0UGpoTWxpT2IvUTFlaFhCU1E2UjN3dVhYOWo5NlJYL2x2bDMwbXVlNy9uSmNQbWlIeEhFVVBycW9CRVkyeWl6Z1BvTjBSS3JyK0VwRWZ1YVR4bTB6d3VuNFBxVUx3cTY3dzVmMGZ2eWdCWEF6eFV6Y2Z0MFRnbkRiL2k0WWZ6SER4M012eEJZOHZ5TWIrZlNMeXhIVWYyMVF2M1luLzJqdnYzY254amVYdzZXRWY2TEFoYmtueFBtZi83b1gvanFMLzVGMGY3dkx5cndILzlla1B3Qmd3MzJYOUxmUC85WkFRUTg0WkJZTlBJQVIrV1MyWFErb1ZIcGxGcTFYcTFTeVN5VzIvVit3V0Z4V0RzdGo5RnA5WnJkUGovZmJmbWNYcmZIbDNqN250LzNTL1dLQXY4SUN3M3ZtZ1lQRnhrYnZ3SVZIU1VuS1JPUElpc3pOU25mTURjL1FRM0xQRU5MVFJGSlQxVlgxUUNDQUFBNyc7XG5cblxud2luLnVpID0gd2luZG93LnVpIHx8IHtcblxuXHQvL+qzte2GtVxuXHRjb21tb246IHtcblx0XHQvLyDruYgg7ZWo7IiYIO2BtOumreyLnCDsmKTrpZgg67Cp7KeAXG5cdFx0Y29tbW9uTm90aGluZzogZnVuY3Rpb24oKSB7fSxcblxuXHRcdC8vIGHtg5zqt7jsnZggaHJlZiDqsJLsnbQgIyDsnbzqsr3smrAgY29tbW9uTm90aGluZygp7Jy866GcIOuMgOyytFxuXHRcdGVtcHR5TGlua0Z1bmM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9h7YOc6re4IGhyZWbsl5Ag642U66+4IO2VqOyImCDsgr3snoVcblx0XHRcdHZhciBhbGxBID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSxcblx0XHRcdFx0YVRhZyA9IG51bGwsXG5cdFx0XHRcdGhyZWYgPSBudWxsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFsbEEubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YVRhZyA9IGFsbEFbaV07XG5cdFx0XHRcdGhyZWYgPSBhVGFnLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdFx0XHRpZiAodWkudXRpbC50cmltKGhyZWYpID09ICcjJyB8fCBocmVmID09IG51bGwpXG5cdFx0XHRcdFx0YVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDp1aS5jb21tb24uY29tbW9uTm90aGluZygpOycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvL+qygOyDiSDroIjsnbTslrRcblx0XHRzZWFyY2hMYXllcjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaGVhZGVyID0gJCgnI2hlYWRlcicpLFxuXHRcdFx0IFx0Ym9keSA9ICQoJ2JvZHknKTtcblx0XHRcdGhlYWRlci5maW5kKCcuYnRuLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJvZHkuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpXG5cdFx0XHRcdC5maW5kKCcgPiAuc2VhcmNoJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblxuXHRcdFx0XHQkKCcuZGltbScpLmFkZCggYm9keS5maW5kKCc+IC5zZWFyY2ggYnV0dG9uLmJ0bi1jbG9zZScpICkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRib2R5LnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKS5maW5kKCcgPiAuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQoJy5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHZhciBzY3JvbGxpbmcgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBmb3JtID0gJCgnLnNlYXJjaCA+IGZvcm0nKS5vdXRlckhlaWdodCh0cnVlKSxcblx0XHRcdFx0XHRcdGgyID0gJCgnLnNlYXJjaCA+IGZvcm0nKS5vdXRlckhlaWdodCh0cnVlKSxcblx0XHRcdFx0XHRcdGxpc3QgPSAkKCcuc2VhcmNoID4gLnBvcHVsYXItbGlzdCcpO1xuXHRcdFx0XHRcdGlmICggc2NyZWVuLm9yaWVudGF0aW9uLnR5cGUuaW5kZXhPZignbGFuZHNjYXBlJykgPiAtMSApIHtcblx0XHRcdFx0XHRcdGxpc3QuY3NzKHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoIGZvcm0gKyBoMiApXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGlzdC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzY3JvbGxpbmcoKTtcblx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRzY3JvbGxpbmcoKTtcblxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHN1Ym5hdmlQb3NpdGlvblNldDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBleGVjdXRlciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBzY29wZSA9ICQoJy5zdWItbmF2aScpLFxuXHRcdFx0XHRcdGVsID0gc2NvcGUuZmluZCgnbGknKSxcblx0XHRcdFx0XHR1bCA9IHNjb3BlLmZpbmQoJz4gdWwnKS5nZXQoMCksXG5cdFx0XHRcdFx0ZWxMZW5ndGggPSBlbC5sZW5ndGgsXG5cdFx0XHRcdFx0YWN0aXZlRWwgPSBzY29wZS5maW5kKCcuYWN0aXZlJykuZ2V0KDApLFxuXHRcdFx0XHRcdGFsbFdpZHRoID0gMCxcblx0XHRcdFx0XHRjdXJyZW50TGVmdCA9IDAsXG5cdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdGZvciAoIDsgaSA8IGVsTGVuZ3RoOyBpKz0xICkge1xuXHRcdFx0XHRcdGFsbFdpZHRoICs9IGVsLmVxKGkpLndpZHRoKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGFsbFdpZHRoID4gc2NvcGUub3V0ZXJXaWR0aCgpICkge1xuXHRcdFx0XHRcdHNjb3BlLmFkZENsYXNzKCdlbmQtZmFkZScpO1xuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gYWN0aXZlRWwub2Zmc2V0TGVmdCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgKCBhY3RpdmVFbC5jbGllbnRXaWR0aCAvIDIgKVxuXHRcdFx0XHRcdHVsLnNjcm9sbExlZnQgPSBjdXJyZW50TGVmdDtcblxuXHRcdFx0XHRcdCQodWwpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dmFyIHRoYXQgPSAkKHRoaXMpLmdldCgwKSxcblx0XHRcdFx0XHRcdFx0bGVmdCA9IHRoYXQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHRcdGlmICggbGVmdCA8IDEgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3N0YXJ0LWZhZGUnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPj0gMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIGxlZnQgPj0gKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBsZWZ0IDwgKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkudHJpZ2dlcignc2Nyb2xsJyk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRleGVjdXRlcigpO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVBY2NvcmRpYW46IGZ1bmN0aW9uKF9zY29wZSwgZXZlbnRUYXJnZXQsIGV2dCkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICQoX3Njb3BlKTtcblx0XHRcdHRhcmdldC5vbihldnQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdGtsYXNzQ3RybCA9ICdhY3RpdmUnLFxuXHRcdFx0XHRcdHNwZWVkID0gMzAwO1xuXHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcyhrbGFzc0N0cmwpICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDbGFzcyhrbGFzc0N0cmwpXG5cdFx0XHRcdFx0LnNpYmxpbmdzKGV2ZW50VGFyZ2V0KS5zdG9wKCkuc2xpZGVVcChzcGVlZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKGtsYXNzQ3RybClcblx0XHRcdFx0XHQuc2libGluZ3MoZXZlbnRUYXJnZXQpLnN0b3AoKS5zbGlkZURvd24oc3BlZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlTmF2aToge1xuXHRcdFx0ZmxhZzogdHJ1ZSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG5hdmkgPSAkKCcjbmF2aScpLFxuXHRcdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRib2R5LmFkZENsYXNzKCduby1zY3JvbGwnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cdFx0XHRcdG5hdmkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRpZiAoIHRoaXMuZmxhZyApIHtcblx0XHRcdFx0XHR0aGlzLmZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRuYXZpLmZpbmQoJy5uYXZpLWxpc3QgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZGVwdGgzVG9nZ2xlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCcjbmF2aScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcblx0XHRcdFx0JCgnYm9keSA+IC5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGVwdGgzVG9nZ2xlOiBmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCcubmF2aS1saXN0LXN1YiA+IGxpLmhhc0xpc3QgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgbGlzdCA9ICQodGhpcykubmV4dCgnLm5hdmktbGlzdC1zdWItMDInKSxcblx0XHRcdFx0XHRcdHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0XHRzcGVlZCA9IDIwMDtcblx0XHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlRG93bihzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cGFyZW50LnNpYmxpbmdzKCkuZmluZCgnLm5hdmktbGlzdC1zdWItMDInKS5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpbWFnZVJlcGxhY2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbWdzID0gJCgnaW1nJyk7XG5cdFx0XHR2YXIgc3R5bGUgPSB7XG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgbm9kYXRhSW1nICsgJyknLFxuXHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuXHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICc1MCUgNTAlJyxcblx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcblx0XHRcdH07XG5cdFx0XHRpbWdzLmVhY2goZnVuY3Rpb24oaWR4LCBlbCl7XG5cdFx0XHRcdCQoZWwpLm9uKCdlcnJvcicsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCh0aGlzKS5hdHRyKHsgc3JjOiBkdW1teUltZyB9KS5jc3MoIHN0eWxlICk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhpZHgsIGVsKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9LFxuXG5cdHV0aWw6IHtcblxuXHRcdC8vIOyWkeyqvSDsl6zrsLEg7KCc6rGwXG5cdFx0dHJpbTogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRpZiAoc3RyID09IG51bGwgfHwgdHlwZW9mIHN0ciA9PSAndW5kZWZpbmVkJykgcmV0dXJuIFwiXCI7XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHRcdH0sXG5cblx0XHQvL+q4gOyekOyImCDsnpDrpbTquLBcblx0XHRjdXRzdHI6IGZ1bmN0aW9uIGN1dFN0cihzdHIsIGxpbWl0KXtcblx0XHRcdHZhciBzdHJMZW5ndGggPSAwLFxuXHRcdFx0XHRzdHJUaXRsZSA9IFwiXCIsXG5cdFx0XHRcdHN0clBpZWNlID0gXCJcIixcblx0XHRcdFx0Y29kZSwgY2g7XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSksXG5cdFx0XHRcdGNoID0gc3RyLnN1YnN0cihpLDEpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHN0clBpZWNlID0gc3RyLnN1YnN0cihpLDEpXG5cdFx0XHRcdGNvZGUgPSBwYXJzZUludChjb2RlKTtcblxuXHRcdFx0XHRpZiAoKGNoIDwgXCIwXCIgfHwgY2ggPiBcIjlcIikgJiYgKGNoIDwgXCJBXCIgfHwgY2ggPiBcIlpcIikgJiYgKChjb2RlID4gMjU1KSB8fCAoY29kZSA8IDApKSlcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAzOyAvL1VURi04IDNieXRlIOuhnCDqs4TsgrBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDE7XG5cblx0XHRcdFx0aWYoc3RyTGVuZ3RoPmxpbWl0KSAvL+ygnO2VnCDquLjsnbQg7ZmV7J24XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGVsc2Ugc3RyVGl0bGUgPSBzdHJUaXRsZStzdHJQaWVjZTsgLy/soJztlZzquLjsnbQg67O064ukIOyekeycvOuptCDsnpDrpbgg66y47J6Q66W8IOu2meyXrOykgOuLpC5cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJUaXRsZTtcblx0XHR9LFxuXG5cdFx0Lypcblx0XHQgKlx0SW1hZ2UgcHJlbG9hZGVyIChjKSB5aWtsMTAwNEBnbWFpbC5jb20sIDIwMTYuMTFcblx0XHQgKi9cblx0XHRpbWFnZVByZWxvYWRlcjogZnVuY3Rpb24oaW1nLCBjYWxsYmFjaykge1xuXG5cdFx0XHR2YXIgY291bnQgPSAwO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGltZyApICYmIHR5cGVvZiBpbWcgKSB7XG5cblx0XHRcdFx0aW1nLmZvckVhY2goZnVuY3Rpb24oZWwsIGluZGV4KXtcblx0XHRcdFx0XHR2YXIgaW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdFx0aW1hZ2VzLnNyYyA9IGltZztcblx0XHRcdFx0XHRpbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyAmJiBjb3VudCA9PSBpbWcubGVuZ3RoKSBjYWxsYmFjayhpbWFnZXMpO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBpbWcgPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRcdHZhciBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0aW1hZ2VzLnNyYyA9IGltZztcblx0XHRcdFx0aW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGltYWdlcyk7XG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvLyBtb2JpbGUgZGV0ZWN0aW5nXG5cdFx0aXNEZXZpY2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly/rqqjrsJTsnbwgVUFcblx0XHRcdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGVjazogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYW5kcm9pZCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2luZ2VyYnJlYWQpIHJldHVybiAnZ2luZ2VyYnJlYWQnO1xuXHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gJ2FuZHJvaWQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5pb3MpIHJldHVybiAnaW9zJztcblx0XHRcdFx0XHRpZiAoIXRoaXMuYW5kcm9pZCAmJiAhdGhpcy5pb3MpIHJldHVybiAnbm8tbW9iaWxlJztcblx0XHRcdFx0fSxcblx0XHRcdFx0aW9zOiB1YS5tYXRjaCgnaVBob25lJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGFuZHJvaWQ6IHVhLm1hdGNoKCdBbmRyb2lkJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGdpbmdlcmJyZWFkOiB1YS5tYXRjaCgnQW5kcm9pZCAyLjMnKSA/IHRydWUgOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGV2aWNlU2l6ZTogJ2RldmljZS1zaXplLScgKyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdH0sXG5cblxuXHQvL+yKrOudvOydtOuTnCDssLjqs6Ag7IKs7J207Yq4IDogaHR0cDovL2lkYW5nZXJvLnVzL3N3aXBlci9hcGkvIy5XRnNxSHJhTFNBd1xuXHRzd2lwZXI6IHtcblx0XHRfc2NvcGU6ICcnLFxuXG5cdFx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRcdGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0cGFnaW5hdGlvblR5cGU6ICdmcmFjdGlvbidcblx0XHR9LFxuXG5cdFx0aW5pdDogZnVuY3Rpb24oc2NvcGUsIG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuX3Njb3BlID0gc2NvcGU7XG5cdFx0XHR2YXIgYXNzaWduID0gKHR5cGVvZiBPYmplY3QuYXNzaWduID09ICd1bmRlZmluZWQnKSA/ICQuZXh0ZW5kIDogT2JqZWN0LmFzc2lnbjsgLy9hc3NpZ24g7ZWo7IiYIOyhtOyerCDsl6zrtoAg7LK07YGsLCDsl4bsnLzrqbQgJC5leHRlbmTroZwg64yA7LK0XG5cdFx0XHRvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09ICd1bmRlZmluZWQnKSA/IHRoaXMuZGVmYXVsdE9wdGlvbnMgOiBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOyAvL29wdGlvbnMg66ek6rCc67OA7IiY6rCAIHVuZGVmaW5lZCDsnbwg6rK97Jqw66W8IOyytO2BrO2VmOyXrCDsmKTrpZgg67Cp7KeAXG5cdFx0XHR0aGlzLnN3aXBlcihvcHRpb25zKTtcblx0XHR9LFxuXG5cdFx0c3dpcGVyOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHQkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJywgbmV3IFN3aXBlcih0aGlzLl9zY29wZSwgb3B0aW9ucykpO1xuXHRcdH0sXG5cblx0XHRtYW5hZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJyk7XG5cdFx0fVxuXHR9XG5cbn07XG5cblxuXG4vL0RPTSDroZzrk5ztm4Qg7ZmU66m0IOuztOyXrOykjFxud2luLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXHQkKCBkb2N1bWVudC5ib2R5ICkuc3RvcCgpLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDMwMCwgZnVuY3Rpb24oKXtcblx0fSk7XG59KTtcblxuJChmdW5jdGlvbigpIHtcblxuXHR2YXIgdXRpbCA9IHVpLnV0aWwsXG5cdFx0Y29tbW9uID0gdWkuY29tbW9uLFxuXHRcdGlzRGV2aWNlID0gdXRpbC5pc0RldmljZSgpO1xuXG5cdC8v7J2066+47KeAIOyXkeuwqSDrsKnsp4Bcblx0Y29tbW9uLmltYWdlUmVwbGFjZSgpO1xuXG5cdC8v67mIIOunge2BrCDssYTsmrDquLBcblx0Y29tbW9uLmVtcHR5TGlua0Z1bmMoKTtcblxuXHQvL+qygOyDieywvSDsl7TquLBcblx0Y29tbW9uLnNlYXJjaExheWVyKCk7XG5cblx0Ly/rqqjrsJTsnbwg64ST7J20LCBPUyDtgbTrnpjsiqQg7IK97J6FXG5cdCQoJ2JvZHknKS5hZGRDbGFzcyhbaXNEZXZpY2UuY2hlY2soKSwgdXRpbC5kZXZpY2VTaXplXS5qb2luKCcgJykpO1xuXG5cdC8vbmF2aWdhdGlvbiBvcGVuXG5cdCQoJ2EuYnRuLW5hdmknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLm9wZW4oKTtcblx0XHQkKCdib2R5ID4gLmRpbW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdFx0fSlcblx0fSk7XG5cblx0Ly9zdWIgbmF2aVxuXHRpZiAoICQoJ2JvZHknKS5oYXMoJy5zdWItbmF2aScpICkge1xuXHRcdHVpLmNvbW1vbi5zdWJuYXZpUG9zaXRpb25TZXQoKTtcblx0fVxuXG5cdC8vbmF2aWdhdGlvbiBjbG9zZVxuXHQkKCcjbmF2aSAuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHR9KTtcblxuXHQvL+ychOuhnOqwgOq4sFxuXHQkKCdidXR0b24udG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDMwMCwgJ2Vhc2VJbk91dFF1YXJ0JywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblx0Ly/subTthYzqs6Drpqwg7IOB7IS4IOyDge2SiOuzhCDsmIHsl60g64aS7J20XG5cdC8v7IOB7ZKI67OEIOu5hOyjvOyWvCDsmIHsl60g64aS7J20IOu2gOyXrFxuXHR2YXIgY2F0ZWdvcnlWaXN1YWxIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRhcmdldCA9ICQoJy5jYXRlZ29yeS12aXN1YWwuYmcwMSAuaW1nLXdyYXAnKSxcblx0XHRcdGggPSAwLCB3ID0gMCxcblx0XHRcdGltZ1NyYyA9IHRhcmdldC5maW5kKCcuaW1nJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXG5cdFx0XHRyZXN1bHQgPSAwO1xuXG5cdFx0aWYgKCB0eXBlb2YgaW1nU3JjID09ICd1bmRlZmluZWQnICkgcmV0dXJuIDtcblxuXHRcdGltZ1NyYyA9IGltZ1NyYy5yZXBsYWNlKC9edXJsXFwofFxcKSR8XFxcIi9naSwgJycpO1xuXG5cdFx0dmFyIHJlc2l6ZUhlaWdodCA9IGZ1bmN0aW9uIChjSW1nKSB7XG5cblx0XHRcdHZhciByZXNpemVGdW5jID0gZnVuY3Rpb24gKCBsYW5kICkge1xuXHRcdFx0XHR2YXIgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0XHRcdGwgPSBzY3JlZW4ub3JpZW50YXRpb24udHlwZS50b1N0cmluZygpLmluZGV4T2YoJ3BvcnRyYWl0JykgPiAtMSA/IDEgOiAwLjU7XG5cdFx0XHRcdGlmICggd2luVyA+IDMxOSApIHtcblx0XHRcdFx0XHRoID0gY0ltZy5uYXR1cmFsSGVpZ2h0O1xuXHRcdFx0XHRcdHcgPSBjSW1nLm5hdHVyYWxXaWR0aDtcblx0XHRcdFx0XHRyZXN1bHQgPSAoIGgqKHdpblcqbCkgKSAvIHc7XG5cdFx0XHRcdFx0cmVzdWx0ID0gTWF0aC5jZWlsKCByZXN1bHQgKTtcblx0XHRcdFx0XHR0YXJnZXQuaGVpZ2h0KCByZXN1bHQgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhsKTtcblx0XHRcdFx0XHRpZiAoIGwgPT0gMC41ICkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudCgpLmhlaWdodChyZXN1bHQpO1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudCgpLmZpbmQoJz4udHh0JykuY3NzKHsgZGlzcGxheTogJ2luaGVyaXQnIH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggbCA9PSAxICkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudCgpLmNzcyh7IGhlaWdodDogJ2F1dG8nIH0pO1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnNpYmxpbmdzKCcudHh0JykuY3NzKHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogdGFyZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdibG9jaycgOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGFyZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdibG9jaycgOiAnbm9uZScpO1xuXHRcdFx0XHRcdFx0Ly8gcmVzdWx0ICsgdGFyZ2V0LnBhcmVudCgpLmZpbmQoJ2J1dHRvbicpLmhlaWdodCgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJlc2l6ZUZ1bmMoKTtcblx0XHRcdH0pLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzaXplRnVuYygpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdH1cblxuXHRcdHVpLnV0aWwuaW1hZ2VQcmVsb2FkZXIoIGltZ1NyYywgcmVzaXplSGVpZ2h0KTtcblx0fTtcblx0Ly8gY2F0ZWdvcnlWaXN1YWxIZWlnaHQoKTtcblxuXHQvL+y5tO2FjOqzoOumrCBoMu2BtOumreyLnCDthqDquIBcblx0dmFyIGNhdGVnb3J5TGlzdCA9ICQoJy5jYXRlZ29yeS1saXN0Jyk7XG5cdGlmICggY2F0ZWdvcnlMaXN0Lmxlbmd0aCA+IDAgKSB7XG5cdFx0Y2F0ZWdvcnlMaXN0LmZpbmQoJy5kZXB0aDEgPiBsaSA+IGgyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdGlmICggJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdC5zaWJsaW5ncygnLmRlcHRoMicpLnN0b3AoKS5zbGlkZVVwKDMwMCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdC5zaWJsaW5ncygnLmRlcHRoMicpLnN0b3AoKS5zbGlkZURvd24oMzAwLCBmdW5jdGlvbigpe1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhdGVnb3J5TGlzdC5maW5kKCcuZGVwdGgxID4gbGkgPiBoMiA+IGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApe1xuXHRcdFx0dmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly/subTthYzqs6Drpqwg7YOtXG5cdGlmICggJCgnYm9keScpLmZpbmQoJy5jYXRlZ29yeS1kZXRhaWwnKS5sZW5ndGggKSB7XG5cdFx0JCgnLnRhYiBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0ICAgICAgICAkKCcudGFiIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHQgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHQgICAgICAgICQoJy50YWJfY29udGVudCcpLmhpZGUoKTtcblx0ICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKTtcblx0ICAgICAgICAkKFwiI1wiK2lkKS5zaG93KCk7XG5cdCAgICB9KTtcblx0fVxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91aS5jb21tb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvY29uY2F0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==