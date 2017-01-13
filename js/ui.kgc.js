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
						if (screen.orientation.type.indexOf('landscape') > -1) {
							var form = $('.search > form').outerHeight(true),
							    h2 = $('.search > form').outerHeight(true),
							    list = $('.search > .popular-list');
							console.log(form, h2);
							list.css({
								height: window.innerHeight - (form + h2)
							});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGVhNDU5MzFhZTk1NTEzMTI0NmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb25jYXQuc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJqUXVlcnkiLCIkIiwid2luIiwiZG9jIiwiZG9jdW1lbnQiLCJkdW1teUltZyIsIm5vZGF0YUltZyIsInVpIiwiY29tbW9uIiwiY29tbW9uTm90aGluZyIsImVtcHR5TGlua0Z1bmMiLCJhbGxBIiwicXVlcnlTZWxlY3RvckFsbCIsImFUYWciLCJocmVmIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInV0aWwiLCJ0cmltIiwic2V0QXR0cmlidXRlIiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJib2R5IiwiZmluZCIsIm9uIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInNjcm9sbGluZyIsInNjcmVlbiIsIm9yaWVudGF0aW9uIiwidHlwZSIsImluZGV4T2YiLCJmb3JtIiwib3V0ZXJIZWlnaHQiLCJoMiIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwiY3NzIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic3VibmF2aVBvc2l0aW9uU2V0IiwiZXhlY3V0ZXIiLCJzY29wZSIsImVsIiwidWwiLCJnZXQiLCJlbExlbmd0aCIsImFjdGl2ZUVsIiwiYWxsV2lkdGgiLCJjdXJyZW50TGVmdCIsImVxIiwid2lkdGgiLCJvdXRlcldpZHRoIiwib2Zmc2V0TGVmdCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbExlZnQiLCJ0aGF0IiwibGVmdCIsInBhcmVudCIsInNjcm9sbFdpZHRoIiwidHJpZ2dlciIsInRvZ2dsZUFjY29yZGlhbiIsIl9zY29wZSIsImV2ZW50VGFyZ2V0IiwiZXZ0IiwidGFyZ2V0Iiwia2xhc3NDdHJsIiwic3BlZWQiLCJoYXNDbGFzcyIsInNpYmxpbmdzIiwic3RvcCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJ0b2dnbGVOYXZpIiwiZmxhZyIsIm9wZW4iLCJuYXZpIiwiZGVwdGgzVG9nZ2xlIiwiY2xvc2UiLCJuZXh0IiwiaW1hZ2VSZXBsYWNlIiwiaW1ncyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiZWFjaCIsImlkeCIsImF0dHIiLCJzcmMiLCJzdHIiLCJyZXBsYWNlIiwiY3V0c3RyIiwiY3V0U3RyIiwibGltaXQiLCJzdHJMZW5ndGgiLCJzdHJUaXRsZSIsInN0clBpZWNlIiwiY29kZSIsImNoIiwiY2hhckNvZGVBdCIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJpbWFnZVByZWxvYWRlciIsImltZyIsImNhbGxiYWNrIiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbWFnZXMiLCJjcmVhdGVFbGVtZW50IiwiaXNEZXZpY2UiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNoZWNrIiwiYW5kcm9pZCIsImdpbmdlcmJyZWFkIiwiaW9zIiwibWF0Y2giLCJkZXZpY2VTaXplIiwic3dpcGVyIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXJlY3Rpb24iLCJsb29wIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25UeXBlIiwiaW5pdCIsIm9wdGlvbnMiLCJhc3NpZ24iLCJPYmplY3QiLCJleHRlbmQiLCJkYXRhIiwiU3dpcGVyIiwibWFuYWdlciIsImFuaW1hdGUiLCJvcGFjaXR5Iiwiam9pbiIsImhhcyIsInNjcm9sbFRvcCIsImNhdGVnb3J5VmlzdWFsSGVpZ2h0IiwiaCIsInciLCJpbWdTcmMiLCJyZXN1bHQiLCJyZXNpemVIZWlnaHQiLCJjSW1nIiwicmVzaXplRnVuYyIsImxhbmQiLCJ3aW5XIiwibCIsInRvU3RyaW5nIiwibmF0dXJhbEhlaWdodCIsIm5hdHVyYWxXaWR0aCIsIk1hdGgiLCJjZWlsIiwiZGlzcGxheSIsImNhdGVnb3J5TGlzdCIsImV2ZW50IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImhpZGUiLCJpZCIsInNob3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckNBOzs7QUFDQTs7QUFDQTs7Ozs7O0FBT0FBLFFBQU9DLE1BQVAsR0FBZ0JELE9BQU9FLENBQVAsR0FBV0EsQ0FBM0I7O0FBRUEsS0FBSUMsTUFBTUgsTUFBVjtBQUFBLEtBQ0NJLE1BQU1DLFFBRFA7O0FBR0E7QUFDQSxLQUNDQyxXQUFXLG92Q0FEWjtBQUFBLEtBRUNDLFlBQVksb29TQUZiOztBQUtBSixLQUFJSyxFQUFKLEdBQVNSLE9BQU9RLEVBQVAsSUFBYTs7QUFFckI7QUFDQUMsVUFBUTtBQUNQO0FBQ0FDLGtCQUFlLHlCQUFXLENBQUUsQ0FGckI7O0FBSVA7QUFDQUMsa0JBQWUseUJBQVc7QUFDekI7QUFDQSxRQUFJQyxPQUFPUixJQUFJUyxnQkFBSixDQUFxQixHQUFyQixDQUFYO0FBQUEsUUFDQ0MsT0FBTyxJQURSO0FBQUEsUUFFQ0MsT0FBTyxJQUZSO0FBR0EsU0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsU0FBU0wsS0FBS0ssTUFBOUIsRUFBc0NELElBQUlDLE1BQTFDLEVBQWtERCxHQUFsRCxFQUF1RDtBQUN0REYsWUFBT0YsS0FBS0ksQ0FBTCxDQUFQO0FBQ0FELFlBQU9ELEtBQUtJLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBUDtBQUNBLFNBQUlWLEdBQUdXLElBQUgsQ0FBUUMsSUFBUixDQUFhTCxJQUFiLEtBQXNCLEdBQXRCLElBQTZCQSxRQUFR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RixFQUFRZ0UsTUFBUixHQUFpQnZDLFFBQWpCLENBQTBCLFFBQTFCO0FBQ0F6QixNQUFFLGNBQUYsRUFBa0IySyxJQUFsQjtBQUNBLFFBQUlDLEtBQUs1SyxFQUFFLElBQUYsRUFBUStGLElBQVIsQ0FBYSxPQUFiLENBQVQ7QUFDQS9GLE1BQUUsTUFBSTRLLEVBQU4sRUFBVUMsSUFBVjtBQUNILElBTko7QUFPQTtBQUVELEVBM0hELEU7Ozs7OztBQ3RUQSwwQyIsImZpbGUiOiJ1aS5rZ2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGVhNDU5MzFhZTk1NTEzMTI0NmEiLCJcbi8vIGltcG9ydCAnLi9kZXYnOyAvL+qwnOuwnOyaqSDsiqTtgazrpr3tirgg7ZSE66Gc642V7IWY7IucIOyCreygnFxuaW1wb3J0ICcuLi9zY3NzL2NvbmNhdC5zY3NzJztcbi8qaW1wb3J0ICcuLi9zY3NzL2tnYy5jb21tb24uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3Mva2djLmxheW91dC5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9rZ2Muc3ViLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5tYWluLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2tnYy5zd2lwZXIuc2Nzcyc7Ki9cblxuXG53aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSAkO1xuXG52YXIgd2luID0gd2luZG93LFxuXHRkb2MgPSBkb2N1bWVudDtcblxuLy/sl5Drn6zsi5wg7JeR67CVIOuwqeyngFxuY29uc3Rcblx0ZHVtbXlJbWcgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5cHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVE15SURjNUxqRTFPVEk0TkN3Z01qQXhOaTh3TkM4eE9TMHhNem94TXpvME1DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVdU5TQW9UV0ZqYVc1MGIzTm9LU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBHTWpOR09UZ3hNVU5GUkRjeE1VVTJPVFE1TVVGRlJETkJOVUkwTmtWRk1DSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEdNak5HT1RneE1rTkZSRGN4TVVVMk9UUTVNVUZGUkROQk5VSTBOa1ZGTUNJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qSkJOVE13UVVSQlEwVXpOekV4UlRZNU5Ea3hRVVZFTTBFMVFqUTJSVVV3SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tZeU0wWTVPREV3UTBWRU56RXhSVFk1TkRreFFVVkVNMEUxUWpRMlJVVXdJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrNmZNNTRBQUFBQkJKUkVGVWVOcGkrUC8vUHdOQWdBRUFDUHdDL3R1aVRSWUFBQUFBU1VWT1JLNUNZSUk9Jyxcblx0bm9kYXRhSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaC9nRG1BTlVBQU9ycTZ2UHo4L3Y3KzhURXhNZkh4K2ZuNS83Ky90dmIyKzN0N2ZUMDlNN096dkx5OHVibTV2SHg4Zmo0K012THkvbjUrY25KeWQvZjM4L1B6Ky92NzlYVjFlSGg0Y1hGeGREUTBOemMzUGYzOTlmWDE5UFQwLzM5L2VqbzZOSFIwZGpZMk5yYTJ1dnI2OHJLeXZEdzhQejgvT1BqNDhiR3h0VFUxTWpJeVByNit1WGw1ZTd1N3ZYMTllenM3T0RnNE43ZTNzek16T1RrNU0zTnpkTFMwdGJXMXZiMjl1TGk0dW5wNmQzZDNkbloyY1BEdy8vLy93QUFBQUFBQUFBQUFDSC9DMWhOVUNCRVlYUmhXRTFRUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRnUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzR6TFdNd01URWdOall1TVRRMU5qWXhMQ0F5TURFeUx6QXlMekEyTFRFME9qVTJPakkzSUNBZ0lDQWdJQ0FpUGlBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBpQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXdPa055WldGMGIzSlViMjlzUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnUTFNMklDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEVOVEZHUXpoQlFVUXlSamd4TVVVMk9EZENORUV4UWtVMVFUbEROa0ZGTmlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRU5URkdRemhCUWtReVJqZ3hNVVUyT0RkQ05FRXhRa1UxUVRsRE5rRkZOaUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tRMU1VWkRPRUU0UkRKR09ERXhSVFk0TjBJMFFURkNSVFZCT1VNMlFVVTJJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1ExTVVaRE9FRTVSREpHT0RFeFJUWTROMEkwUVRGQ1JUVkJPVU0yUVVVMklpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtBZi8rL2Z6Nyt2bjQ5L2IxOVBQeThmRHY3dTNzNitycDZPZm01ZVRqNHVIZzM5N2QzTnZhMmRqWDF0WFUwOUxSME0vT3pjekx5c25JeDhiRnhNUEN3Y0MvdnIyOHU3cTV1TGUydGJTenNyR3dyNjZ0ckt1cXFhaW5wcVdrbzZLaG9KK2VuWnlibXBtWWw1YVZsSk9Ta1pDUGpvMk1pNHFKaUllR2hZU0Rnb0dBZjM1OWZIdDZlWGgzZG5WMGMzSnhjRzl1Yld4cmFtbG9aMlpsWkdOaVlXQmZYbDFjVzFwWldGZFdWVlJUVWxGUVQwNU5URXRLU1VoSFJrVkVRMEpCUUQ4K1BUdzdPams0TnpZMU5ETXlNVEF2TGkwc0t5b3BLQ2NtSlNRaklpRWdIeDRkSEJzYUdSZ1hGaFVVRXhJUkVBOE9EUXdMQ2drSUJ3WUZCQU1DQVFBQUlma0VBQUFBQUFBc0FBQUFBUDRBNWdBQUJ2OUFBRzlJTEJxUHlLUnl5V3c2bjlDb2RFcXRXcTFDNFhYTDdYcS80TEFZcXVXVngraTBlczF1STg5bXQzeE9yOXVKOEdIK3p1LzcvMGw3ZW9DRWhZWnpnbmlIaTR5TlY0bEZrSTZUbEl1U2taV1ptb2VYUnAyYm9LRmhuNTZpcHFkanBFZXFxSzJ1bUkrdnNyTktySUcwdUxTMnRibTlxTHRMd0w3RGRzTEJ4TWlPeGt6THljNWd6Y3pQMDN6UlRkYlUyVTdZMTlyZWFkemIzK05mNFUvbTVNL281K250VXV0azd2TFNmL0R6cnZidjkvdHhodm44bXY1UkVRaFFtY0dDM2doaVFaaE5ZU3lHemh4dWtRaVJEc1dKRlgxZDVMSXhJNXFPSEQzS0F0bUZwRWlNcjB5ZUhLaHJKU2lWMEZ4bWdqbEs1aVNhWW5EYVZJUk1wMDMvbjZsMkVnTDZVYWdmb3VDTTNrR3FoaWxBcDAyVnlvRzZobW83cTFXbFJwMkhWVnZYTmwrUEdQQVFRc0dPQ0JzVzRDc1lsc2lDRVR0QWVMQUFJOGVMQkw4WXRpVnhnUUFMQkJkMkNONUJBSWVwdG9oQ0NVZ3hnSUlBQW9Naml3aUYyQ0tvRjNGNUlJZ2NPWUtBVFpYck1PMVFRQVFDSG5CZDhHQVIrVVNGQVlKZjhCQUJBSUNCZ3llSmxqQnJ3b1lLd1NSNEdNQXcySVFad1JoNDJNaXdnOE50U3o4Wk1SQnNvVUVMd1I2R2RMQXdRL1VRR2pzZThDQnhRUEJrVGtJdkdtaXc0a0NGQ1JOZ2M3YUFBSUxnQ2JjbENCNXdtZ2VNSFFydzRFSjVuRjBBWHcwSE1CQkFNVW81eE1JR2tOSHdRZ0VGTEJEQWhRRllRSjFxY08zdy84RU5rYVV3QkhNZ21NSGNEaXRnR0FBSkZFb3d3UTRwaEJDY0c2RVZJcEFISXhBZ0FRc2RLTkVCY1NaQXdJTUpuQTAyUUk4ejdLQWFCTXhWOEJ3U0FpQ1F3UVhkc1ZHalAyb2tvRUFLSm56V2hBRUFJRUNCY0dZVkdTQU9PNkF3QkFzdW5OZUVDaThRUUlNR1NXbkZreGdlREpCQmoxVkFRRnhrRnl6QVFsOUNWaUhBQmllNEdaT2RzSUJod1FYWmJXSEFDaWhNd0VFT0ZHUXd3QWhxYldIQ0FBelV4R2dwWDNoQVFLZGNRQ0FCQ2hoQU5vSUZKWGdCV0g4bGpmcUdGM3lOR1lZQUFSUUtocWw0aFdUcnJWdEFrRUtvb01Ed1FLd1BEVXVzRlNCc0lNcHdHVFRyN0xOVExIQ0JyNkFrTUFDZExGMTdEQlViVkJ1RkFjR3F3UCtEQ2dhVTBLTUFMUXloUVFBT0RPRmxDY3lxTzRTK1UxUmdyajdpMGhPRkFBUFlJTVVMQzB3V0tnTUFOSkJBQnhJa1BDUzlQRUJRd3hBM1dNQkRBemlzd0lNTUNOQWFCUUlFUE1sT3dOMUU0VUdBVXBEQXdKZ0xzK0JCQWphd3NDNFBGaFFRckJZWlpHQkFBQ3RVNjBFQkhrOWhBQUVpcDR5eTBrN29BTU1VRWN2QXc4SThISkNBQVRKUW9Kb0pGTWRoZ0FRV0NPQ0FDNkZTSUdZVk5jaDI4dExpUEJHRG9sRHdDK1hjd3VWTEJMZFNtTURCMm15M3pZUUJBd1NMQ2dMaU1kMjMzMHJZNXlVcTNocCtPT0pJSkxEREt3N3N3T3d0ajRjUndBbE9HRURoNTUvSHkwTUlFelN3SnVpaDg2REJCTklPZ1FEcUZOck1BM3lYSy9IL205eVpzOUVBQVU0SVVLUmd5SDZ3UTM4Vi9CNnE1Q3p6SUh5UkZRd2gyT0pLK0Y1djdtN3M3a1FIQnh6QWdXQVJaRCtqOFAzTnF5SUtPeHdQSUJFbUhCRENmaUVrNlB3TzBDY2hQZlhWOC83RWNQdXBWYVpnU1JNQlF2azhrTndEQWlDNC84U21DSUpwSDk2TU1ELzY2YzUrVHBCQmVQUVRndzdzYjNoRmdFdTl3QmZBd2RpUEJBTVlnQXRPTUFEVHZVOHdnb1BTRHFiblFEVll6d2syZ0EwRjhKY0RJbkNRQ0JxMHp3bDZKRGtDSEtDR0pYakFEb3hUZ1BCNENUZ0I0SlA4VnRqQ05iendiOFNwb1hJdU1JRHZZUkNIVE5TQWQ1QkhoUFhSNERuRjA4SDc0cWRDRmpaeERFOWNnZ1pHOEFBbHJ1QUNCUmdDQnkyUXZSUEUveVY3QjlqQUNMaklnOTBRZ0lVcVNBRUtldlM4SmpUd2pPWFExUk5oUUVZaWxBQmNSSUFrNlV4M1FjNDhnRFhKKzVrUldFaTdKQ3dnamp4b29BVWdpVWdyMEtCMUx4VEFDWkRsQkEza3dGK2lHMElMVktRaUlmRVJTaEtvd0FGMHBRUWRzR3grQm9pQUJFcFpoUVJzSUVrQTJvQ3BSSUFDdUJnSUJpWkRBZ1hrczRNQndDMEJyRHZDTFkyZ0FjZ01SbU5IZ0FBSXloU0REVkJnQng2b2dCQUhNSUVRTkpLWVMxaUJrUXF3dXc1c1lEQVJRRlVTZ2puRURrd25CU1pyd1BtTTBJRUF4TklJWVJUQW9IWndVRHhRTTJ3NzBNQ0pkbkFDMmNFekNtWDZ3TVo0OXh2QjNLQUo5aGtBRVZMQVJDSUlOSGxQZ0V1d3RpZUk0b1VubFA5TWxFOElMaXFGRGd5Z0JpZ29tZlZZY0lJUXpLQjFTekNBSFlPemdCRFdUcUFSZ04zbkZxaThJVllzQWpzdzRSRWV3SUVOREtBRTBtdkJBRUx3Z2VUUUZBb0M2RlFET21DOUJBakpBTHhjQXBGMkVKOGRxTTJrdjR1TVZJc3d6UjNNd0k3TlF3SmFoNUFBRlVoUEErQks2MWVsa0VhVllTQUZFMkJBTkRXQXg4WTJscFJGSUFFSElqQ0JGOVJ1Q1ljYzdCUks4SndudnJNUjdiSlhTVCtyMlNUSUlGSlBySUFaS1NFQ2NEWXdCSE10N1JLQ2lJRWV2VENHVDVPREFjb3pVeWtZZ0FhZWdXbTlJSEFCb01vMkNRa0lqQWROTlozSUtDQ2FYZWdBWlBVam1IODF3UUVrTlJKclZrRE5IWXlBdEtWZGdEY0prQURyeVJNNTRLWC9nZ0NFR0lMbnVDQXlFNGlDQnFDNmd3dVFRSHJ2RmN3RFZudGNJOFFBT1J2bFFlVU9LSVgwWGtjd0lEQ0FDdWliUUNtNGRBVEN0YWxneE5oZitVWEFBd3lJQUZsNUJ3QU1aRXBOVWVnQVhDS2xoRCtkcGJ2ZnZOOERaSUNERVVCQWVndm96ZzFRV3VFaWRJQlpBbGdQN3hhSHV5YUFDSUI2RFFBRmhCaFhJekZWTEY3cVFBZWtsK045MWRnSmhaWENPY01EM1FDaUdBTWtzTUh5dkl1Q0VQVHZDWmw5c2hJY29LOG5MaWdLRUlCcUJDQkxCRlZ5cG1nNUdNeU1DZ3l1QmdhZ3ltTG1RUTdBK1VRRjZKTUpBaURPQVA1c0JCdlFNd0FGZ0V3SVJGRE5CeENneDA1b2oyaW5od0s0aVpsWExDQkFCQ2dRQUpJNUFHak51VkFULzF6Z3pBSzhZQUtDMVd1SE1nRFZoanFoQkNzYXdRVVFFQUFON01CQ09CaUFuKytjWndIL2R6QUtFQUVCS0tEY0JPSlpPTnNUVEF5b2F4d2lWRmtIRXo3YURpeHdiUG1aMkxzQlVCS0RtNlBFUzlQM0FRS3dIZ2tHVTZJbENGUXdINUJQQmZLMUFnSU1JTGVhU1hhUlVIRFpKbGhRTUFSNDhRcGpLSmd2OXBvSTlBMlE5UTY4QTNqTGJ3TVBRSUMzZHBEWEJHdzVUVU1nWDJRRzhJRjdVdkhMVEFBUFlZUkxNTUZjN044VnE0RUdXckJ1NitIQXNpN29iUk1vWUVjUVlOVS9ieDdDUFNlSUtnUm93QVFrdmg4S0V1QUFFTmhBZWhRNFFGanpDbklqUk5rSklxQjRBeG9RQXhBVWRBSUVlTldaaHlDQ0FnZ2dWZ21JcFF4QWJQK0ZNQmY5Q0VkZmdneCtUWUFIREVDSTRKNU5ERmE3TzdzTUpqbjZ5UTRIUUtYZWtuNWRMQXVRUUtBd2lzOFFBSFlBQk9nUmEzWWd4WW9SSVBCZ2c4c0JpaGdCalBHdnBvejJRTDIvcnFYSWZDQzlyaVBBQ1NTZ0FROFlBQUlVQ05abUdENEVQeEVtMXkrQWpRaCtYWUV0ZS9VSmVqY1NLKytlM00wWHdBVGd3VUMxYlR5RU9CY2dBczV4blVmWFpjZmZ6VGV1Qm5NQ2tZUlpBQVlrU1dwMzUwSHg1c3lEZTJMOENDeC9RSkpDb0I5ejVaZE8vTlJ2WkdEQTNXcFdRQUltcUlEdXIzZDRYM1hnQVJmQS9IRlRVRGkzN01DNlNqQ0FXUmdRWngyVUFLbzFOQjN4TlFReWtBSVowQUxyQXlEQ3N3RUdRR1pVc0FBN2NBQkdvQ0gvMS9ka0JFQmprbE51VEtBaFR3TWkxZElBSVpBZDVRRjlkSVZ2R21BQXpFRURSOVlFbXpGTVJVQWtWK0lPSUlTQm1jRUUzaklEdC9FL0ZEWUVBUUFaS1dJQk9rQW5BbEFtNW1JQXhaTUNsdVlFTFdnRVJPSXpJSGNvZ2tHREdxZ0UrZ0ZLWmdGaUFPQk5uR0VDQnZCck9tQUEraWNCUDFKTmhNYUNPK0NDNktOc3NWVmo1ZkVCTGdCWkFnUURLWVI5SE5BamdMTUR2Y1Z5a1lGVE5GQUN6Y1dBc3lFWW41Y2tEMUFBSzhoQVczZUdETlFBTURBQUtTQi84RlE1RDFCbGtyTWZGUWhYTzBDQ0t1QUJJZ0E5UE1WV1BmSi9FQ2NjR3NJOUdUQjViZlpyaW9nRUlOSnNUN1laYjJVRWtvTUNCVEFBTWVBRWFCSjRTNUIwemZFWi94RHdhL3FVYTRPUkFoVlFoandBSWhzZ1QyaFlhRHZ3Y1U4R0FFRG1BdURFVjVrQkhteDJCQjBnQWlzSUFlc1RBY2d5aENjbUFXZEFBbHE0SC9DaFQ5dWpBa3RJQkNUd0FyZmhPelNRWjlDSUxPQWhBQkJBQXhPUUpDWHlQOGI0QlA0RUdTQ3dPQnh3QVNiUUFRYWtUdzV3YllQaGhFT2dBQ0sxR1pRMUFVTHdQL1hpT3hvbFp2TW9SL0NqQWRtVkdmK3podkoxQUN0d1pMeklVRVl3RmpuRkdSL1ZrTHd6ZW9MaE1SUUpVeGY1akVBbVBJdVRnVHp3a1dsUVZQc0JBYWlHQkNLQVRPaEVCQXJRa3FzNEJERnBrZkpZay9CREJEaTVQaURaQmFaQ0dJRkJVdkdvQkFSVUJFV3BHVWVaazB5a2xCakpsRGxXZFJwU0lzd1JsZjlYUUFIYjgyN2NPQmg3QXdWYnVSbTBhSWhlV1pFZXNwVEJBejhRU0c0OHdCejlXQVVHOEFFY0lBSEo5eUxWeEY5TEVKZVJVUzFKZVpkaG1aYzU1Z0lGVUpaOXVRTnpHQVpmbzE4VzlRU0tPWmZxMHBodlNaT1E2WlNad1J5WCtRWDRFeDZIbUFTS3VZeU5TWFExbHBGTlJTczRhWnBvc0FCL3NrZFUwSnAzUXh4MkNac1ZKcHZMd3dHMlZKcVdLUVlvS0JnWGtBR1FhQVM4ZVl6SzladDRxWkZ4dGplMWVaeGdzQUR5bG5OVHdKdWJRUVBDSTUyUHFaRUNVRHdRY0oybjJRUXZVQVBWZ1JjUUlBSTVJSlExa0dwU3dKczBNQUFDRUpPL0FaejlKWnNnQUZENmtRRG9TUVVVd0dBK3REMFRnQUZkMGdXOE9RTVFCZ1B4SjJEL3BEZWU5c0lEK3RFQUhoQWVCNUFrRzRCSEdWQUFtMm1EQWNBam1yR2FUS0FCazlsWTduWUE1T01jSXdCaG9UUUVsY09meHlXYlJIQ2gvMU5rVVVoOWJLQUM4bFprOGZlaW16U2hyemh0UmhCbkMvQXp0S1FpQy9Bb0YzQ05hRUErRzBCclM0b2g2aElEalZjRU9IbHBaOWR0NlVaR0RRQTcyN01Cc2ZNRUd2QUNCM0FYclVRaDhrUUFzTk9KUi9BYTNQSWZzMWRqeklFQzRLY2h6bGg2Q2hsWEV3QnBkRlZzVHJVRXFhZWorQVkzNy9VQlFsSUNueklDcUNoYlJvaHYrclZhd3NNQkhsQ2xGeUlDTmNCV3g1WmNCS0FhZXRpUDAvRUFLMkFoVllvQUVoQkNEWldBM2hRQlU5ZHJMcEFrbGJVNEdUQUJaaEdhUzdBOVBGb0UvOUJHZ2g1d0FCaG5BUEFIcFVXQUpwUTFKMFRnQVZZMUFEZlFuSU9GR1laUkJDWkdndllDWFl6bVFRMEZHWGhoVmtud296U0tOL1loR0Nmd3FnWndBZlgzZFpzeGhVdlFBaGVncmp5d0FQQUJIeDlBU3BValFzb1ZBNFJHT3ZHNmtrWEFHdFBJQk9kRW83M1dBWm9IcUVad1QwbTRCSklUUWhKUUFPdHpBc1FxUHlkd0FnWmJCQWdiZlVPZ0lTcW5CQm1hVDVoYXBUMXlZSzU0VHk1b0F4KzdwT3VEQXJzSFFqR3dlMDlXQXY4bEFjZldYSVphSk9MaE95WTVCR2l5TjJ0VnM1eFJoMHBBQWU2MnExK1hnQXJnQWF0RkF1QnhBZTNqV0lEbldJM1ZiSEFoVmZKME1lUUJ0ZGxESEJ3QXRVbmlqZDFXQWhRd2N4c2JmUkpVSlA4VFVBT1RoUnpKWndUd0IxNy80U1NoOUY5Rm93U2J1cXNka0FPd1lTQ2tVNDdWaEpaNWhnQW9WaVRXcEFRYWtnSWRTcTFGc0dEaGdRSlFoUjlJY0xWSjBySkowQUNDK2pzcEVMRTFsZ0I4KzJZYWtuRDdoTGZLaVlyY1NGSUs4QUxkWnJGdnQ3YWU0RzR5UUFMRjl6c0s0S3cwcFFJZDhqdnlrUU1JUUZLcXRVOFhZcUwyZGlHQTZnQ2JxZ0FCUUYwNkNyZi9scHEyMndESmhnRU5jRThud0lWVzRMdEtVQUkzY0FFRVNRSkNhYWdHSjJZV1FBT3Z5eGt2TUdWNWF3SXVBRlV6SUFJdTIyWW1VQUlGSUhRVWtnRkVtd1IrQ0ZVYmtBQUpPQmc2MEFEUVpya0pLMXQ1VndBYTRGS1JvWHNpUUFFYU1HU0NNUU1JY0FPUUVRSC9OK0M3QWlDL09uQUFMRUFoeXRRN0R0d2NDK0FCSFNrWUZhQWhGY2NaS0VBQklwQUI2WWxJZTRBQUdBQWIrVFJSRktVQk4wQUNCa1RDRFZDQTFiUUJmaXNjbHlvQURMQUFNbkFocm1ZRUZBQUNnVUVEQzRBRFJQWjJHSkJMS1NBRENiREVGc0FDMmZVQTF4aURyWkFJTGRBQkxnQi9MSEJlTzdBQmFNSUFtdUlCTG9BQXFzaHdGQ0FEUkRZREZ0Q1BPVk1BQ05CekZIS05Cc0FDTUFCVlRKdkVsV1IyQk5BQUN0QUFKMEFBSWlBOEo0QUFuK0pXRUlBdW1FTTlna0FDY0hFQ1lYT2ZEQ0FDZ2tyR09hQWZLWUFtUzd3REdGREpJZUJOaGx1cTY5dG1GSEFERmFCY0g4QUFOdkFDSDN3V0hFQUNDSmdCRXNBQmtna1hBd1M5L3l5UUFNU2hnbzM4T0lsd1FjUkpzZ3ZBWUJLUUFRQ2daaTVBQXdtZ3hDVE1pUkp3UVFxd3RUSkFJVlNLQXhSQ1J4aXd4Q2VBQWl2UUF1bUVZdDdvQVRHZ0FBZ1FBbzdCWUR0bkZsWk1qb094cDZSeU9KQlF1VFBnQUUxaUF3UjhBalZnQWgvQXdoU2dBQkhnTFRYUVhRTlFBWmU2QUF4UUZqN0xUaUZnQWcyd0FPa1h1QmpBQVEvUUFFK3NBQXp3R2hzQVZjd3F0R2xTQW5rU0dSQ0VMU2dqQ1ozTVBRa2dBd01RQVNSUWZ1Z1d6VmdtQWppQUFCVkFBcWNjdUFPQUFSbHcwQUZRZGFCaklTU3dBSitVQVJ5d3VkVTBBQ1lnQVF3UUF4N3d6NXRTUkF1OEFBWTBUTVk3R09kSzB0ZHlDVFhjR2dqUUFGQ0ZNQ2ZOQUdZeFRmK29xbXZOTVhORk5nTHhhcXR4TlFJTWRuYlRWZ0VzOEFJeVlBRXhRQUk2UUFHR1dYQUxZQllwZ0FBbGdOYVI4YSsvN0N5ZG9BSkdYWEFRc0QwWWtBQ1BVaURGSExZaWtBSXhnQUNNRmdLYktoOUpCUU1iVUxsRmdqUUkwQUlnWWdFVDBBRWhFQU5aV0FFWUhjSUhJQjhQUUFHSmpBSVFzQUFuTFJpT0NqbWpRZ285R0ZlS2VnTU0yd0tiMmhrZ1FBSENRMTRqc0JsaU1qeVF3UUVCY0FBV2tHWTZhZ0tsR0FJaXhDa1c4TU4rZ2J0YVNBQXlnSnYxdFFJR1lBR0JTeGgvR2MrNUxRVUJVTHVjOGRlOGZCWUFRQUhiZXhZdklBRUlBQU1WTW1nTThBQjdHUUpvWXBrU1NTRVlnQUFBb0oyQzBRREVrUUU0b0FNOVl3RW9zQUgvaDBKWmtSRUMrQnVGTnFBQmZZb2NtTHNLdHJJTEhTQURpUTBDRUNBRGR2UUJDd0FBOFIwZWd2SFBIbURMNS9YY1daWW5lM2xyNUMwWUFBQnRIUEFDTGJaNkdab2prWkVXSGs0WUJiQWRuaDBld0lERmdBQU1GdUFDQXVBQkVyZmVBS0FCRXNjQkRjQUNUZTVjRTQyZndVMFdESmR0TFVBaCtWVGdHRTdSRkFDQkdsS095NWtBS3dBWEE1QURVVkxiemVFQ0JzQUFnRGdGUnQ0SHdGQzJSMnVQTXRDbkZhQUJEYkE4Q29BRENmQUMyMWJBM3FTVzRTRTVNVTZPSURCNGFZSUFMRURSUlRJRE4yQURFdUJORmRBQ0E4d1pybUdJUHJ4cVZWRG5ERUlGZ0R0eEZZQURBaEFseW1Ja0J3QjZmMElBT2lBbU1LRGVjYlY1S0FMZy94OTY2WWJxeGdtQUFGWlZUVHBnVnEwTmJCWVFIRGJBQURWUXVYVWFEenNCREpwYlpFM01BdWdDQTltbEp5b1F0c3JsUXhUUUFnQ1FBU2Z1czc4VEFUWHd6UWdBQXQ1MEFobmdBSXlsMlJKZ1ZuTCt5aE5IbjdqdEVjQ2dBbTcrMmVqTXFQZDZHeUQ5b3hPUUF5TFFBaXlpUFJNdzVKek9Pb3VuY0JSZ0FRTTVHRFRnQVY1U0ppZXdBZ0tBQXhwWHM1Y2I2aTRoREF6UXNKK1RQanJBMW1haWNDUUZCeEFnNTl1V0FoK1FJSmQ2SWVLaklqYVFBQUh3U2RyY3lkM01BSGl6R1ZiTUFta3NHQ3AvQUI5YUlSY3lOTndaQmFLK0ZXTVFKUy93Y05QR0FqT0pCTWUrQVQwUDdwd3hBc240cW5HYUFNR05ieHZBeWtnUEVRUUJBZjhtb0lvdU1NUkowQUlJd0FBc0dxK2RyTmJ3b1V1VkhBQ1BhZ1J3NHBZQWNMcDFvaGQxUUFFMVFBQ3VXQWdNTUFFU1lQWmZ6dzlIbjhWc1FWT0hieTN3dFBqaE1saU9iL1ExZWhYQlNRNlIzd3VYWDlqOTZSWC9sdmwzMG11ZTcvbkpjUG1pSHhIRVVQcnFvQkVZMnlpemdQb04wUktycitFcEVmdWFUeG0wend1bjRQcVVMd3E2N3c1ZjBmdnlnQlhBenhVemNmdDBUZ25EYi9pNFlmekhEeDNNdnhCWTh2eU1iK2ZTTHl4SFVmMjFRdjNZbi8yanZ2M2NueGplWHc2V0VmNkxBaGJrbnhQbWYvN29YL2pxTC81RjBmN3ZMeXJ3SC85ZWtQd0JndzMyWDlMZlAvOVpBUVE4NFpCWU5QSUFSK1dTMlhRK29WSHBsRnExWHExU3lTeVcyL1Yrd1dGeFdEc3RqOUZwOVpyZFBqL2ZiZm1jWHJmSGwzajdudC8zUy9XS0F2OElDdzN2bWdZUEZ4a2J2d0lWSFNVbktST1BJaXN6TlNuZk1EYy9RUTNMUEVOTFRSRkpUMVZYMVFDQ0FBQTcnO1xuXG5cbndpbi51aSA9IHdpbmRvdy51aSB8fCB7XG5cblx0Ly/qs7XthrVcblx0Y29tbW9uOiB7XG5cdFx0Ly8g67mIIO2VqOyImCDtgbTrpq3si5wg7Jik66WYIOuwqeyngFxuXHRcdGNvbW1vbk5vdGhpbmc6IGZ1bmN0aW9uKCkge30sXG5cblx0XHQvLyBh7YOc6re47J2YIGhyZWYg6rCS7J20ICMg7J286rK97JqwIGNvbW1vbk5vdGhpbmcoKeycvOuhnCDrjIDssrRcblx0XHRlbXB0eUxpbmtGdW5jOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vYe2DnOq3uCBocmVm7JeQIOuNlOuvuCDtlajsiJgg7IK97J6FXG5cdFx0XHR2YXIgYWxsQSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJyksXG5cdFx0XHRcdGFUYWcgPSBudWxsLFxuXHRcdFx0XHRocmVmID0gbnVsbDtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhbGxBLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFUYWcgPSBhbGxBW2ldO1xuXHRcdFx0XHRocmVmID0gYVRhZy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHRcdFx0aWYgKHVpLnV0aWwudHJpbShocmVmKSA9PSAnIycgfHwgaHJlZiA9PSBudWxsKVxuXHRcdFx0XHRcdGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgJ2phdmFzY3JpcHQ6dWkuY29tbW9uLmNvbW1vbk5vdGhpbmcoKTsnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly/qsoDsg4kg66CI7J207Ja0XG5cdFx0c2VhcmNoTGF5ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGhlYWRlciA9ICQoJyNoZWFkZXInKSxcblx0XHRcdCBcdGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRoZWFkZXIuZmluZCgnLmJ0bi1zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRib2R5LmFkZENsYXNzKCduby1zY3JvbGwnKVxuXHRcdFx0XHQuZmluZCgnID4gLnNlYXJjaCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0Ym9keS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cblx0XHRcdFx0JCgnLmRpbW0nKS5hZGQoIGJvZHkuZmluZCgnPiAuc2VhcmNoIGJ1dHRvbi5idG4tY2xvc2UnKSApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Ym9keS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJykuZmluZCgnID4gLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKCcuZGltbScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR2YXIgc2Nyb2xsaW5nID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRpZiAoIHNjcmVlbi5vcmllbnRhdGlvbi50eXBlLmluZGV4T2YoJ2xhbmRzY2FwZScpID4gLTEgKSB7XG5cdFx0XHRcdFx0XHR2YXIgZm9ybSA9ICQoJy5zZWFyY2ggPiBmb3JtJykub3V0ZXJIZWlnaHQodHJ1ZSksXG5cdFx0XHRcdFx0XHRcdGgyID0gJCgnLnNlYXJjaCA+IGZvcm0nKS5vdXRlckhlaWdodCh0cnVlKSxcblx0XHRcdFx0XHRcdFx0bGlzdCA9ICQoJy5zZWFyY2ggPiAucG9wdWxhci1saXN0Jyk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhmb3JtLCBoMiApO1xuXHRcdFx0XHRcdFx0bGlzdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtICggZm9ybSArIGgyIClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzY3JvbGxpbmcoKTtcblx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRzY3JvbGxpbmcoKTtcblxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHN1Ym5hdmlQb3NpdGlvblNldDogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBleGVjdXRlciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBzY29wZSA9ICQoJy5zdWItbmF2aScpLFxuXHRcdFx0XHRcdGVsID0gc2NvcGUuZmluZCgnbGknKSxcblx0XHRcdFx0XHR1bCA9IHNjb3BlLmZpbmQoJz4gdWwnKS5nZXQoMCksXG5cdFx0XHRcdFx0ZWxMZW5ndGggPSBlbC5sZW5ndGgsXG5cdFx0XHRcdFx0YWN0aXZlRWwgPSBzY29wZS5maW5kKCcuYWN0aXZlJykuZ2V0KDApLFxuXHRcdFx0XHRcdGFsbFdpZHRoID0gMCxcblx0XHRcdFx0XHRjdXJyZW50TGVmdCA9IDAsXG5cdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdGZvciAoIDsgaSA8IGVsTGVuZ3RoOyBpKz0xICkge1xuXHRcdFx0XHRcdGFsbFdpZHRoICs9IGVsLmVxKGkpLndpZHRoKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGFsbFdpZHRoID4gc2NvcGUub3V0ZXJXaWR0aCgpICkge1xuXHRcdFx0XHRcdHNjb3BlLmFkZENsYXNzKCdlbmQtZmFkZScpO1xuXHRcdFx0XHRcdGN1cnJlbnRMZWZ0ID0gYWN0aXZlRWwub2Zmc2V0TGVmdCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgKCBhY3RpdmVFbC5jbGllbnRXaWR0aCAvIDIgKVxuXHRcdFx0XHRcdHVsLnNjcm9sbExlZnQgPSBjdXJyZW50TGVmdDtcblxuXHRcdFx0XHRcdCQodWwpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dmFyIHRoYXQgPSAkKHRoaXMpLmdldCgwKSxcblx0XHRcdFx0XHRcdFx0bGVmdCA9IHRoYXQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHRcdGlmICggbGVmdCA8IDEgKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3N0YXJ0LWZhZGUnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGxlZnQgPj0gMSApIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnc3RhcnQtZmFkZScpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIGxlZnQgPj0gKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBsZWZ0IDwgKHRoYXQuc2Nyb2xsV2lkdGggLSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCkpICkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdlbmQtZmFkZScpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkudHJpZ2dlcignc2Nyb2xsJyk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRleGVjdXRlcigpO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVBY2NvcmRpYW46IGZ1bmN0aW9uKF9zY29wZSwgZXZlbnRUYXJnZXQsIGV2dCkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICQoX3Njb3BlKTtcblx0XHRcdHRhcmdldC5vbihldnQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLFxuXHRcdFx0XHRcdGtsYXNzQ3RybCA9ICdhY3RpdmUnLFxuXHRcdFx0XHRcdHNwZWVkID0gMzAwO1xuXHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcyhrbGFzc0N0cmwpICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDbGFzcyhrbGFzc0N0cmwpXG5cdFx0XHRcdFx0LnNpYmxpbmdzKGV2ZW50VGFyZ2V0KS5zdG9wKCkuc2xpZGVVcChzcGVlZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKGtsYXNzQ3RybClcblx0XHRcdFx0XHQuc2libGluZ3MoZXZlbnRUYXJnZXQpLnN0b3AoKS5zbGlkZURvd24oc3BlZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlTmF2aToge1xuXHRcdFx0ZmxhZzogdHJ1ZSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG5hdmkgPSAkKCcjbmF2aScpLFxuXHRcdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRib2R5LmFkZENsYXNzKCduby1zY3JvbGwnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkaW1tXCI+PC9kaXY+Jyk7XG5cdFx0XHRcdG5hdmkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRpZiAoIHRoaXMuZmxhZyApIHtcblx0XHRcdFx0XHR0aGlzLmZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRuYXZpLmZpbmQoJy5uYXZpLWxpc3QgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZGVwdGgzVG9nZ2xlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCcjbmF2aScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcblx0XHRcdFx0JCgnYm9keSA+IC5kaW1tJykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGVwdGgzVG9nZ2xlOiBmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCcubmF2aS1saXN0LXN1YiA+IGxpLmhhc0xpc3QgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgbGlzdCA9ICQodGhpcykubmV4dCgnLm5hdmktbGlzdC1zdWItMDInKSxcblx0XHRcdFx0XHRcdHBhcmVudCA9ICQodGhpcykucGFyZW50KCksXG5cdFx0XHRcdFx0XHRzcGVlZCA9IDIwMDtcblx0XHRcdFx0XHRpZiAoIHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlRG93bihzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cGFyZW50LnNpYmxpbmdzKCkuZmluZCgnLm5hdmktbGlzdC1zdWItMDInKS5zdG9wKCkuc2xpZGVVcChzcGVlZCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpbWFnZVJlcGxhY2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbWdzID0gJCgnaW1nJyk7XG5cdFx0XHR2YXIgc3R5bGUgPSB7XG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgbm9kYXRhSW1nICsgJyknLFxuXHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuXHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICc1MCUgNTAlJyxcblx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcblx0XHRcdH07XG5cdFx0XHRpbWdzLmVhY2goZnVuY3Rpb24oaWR4LCBlbCl7XG5cdFx0XHRcdCQoZWwpLm9uKCdlcnJvcicsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JCh0aGlzKS5hdHRyKHsgc3JjOiBkdW1teUltZyB9KS5jc3MoIHN0eWxlICk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhpZHgsIGVsKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9LFxuXG5cdHV0aWw6IHtcblxuXHRcdC8vIOyWkeyqvSDsl6zrsLEg7KCc6rGwXG5cdFx0dHJpbTogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRpZiAoc3RyID09IG51bGwgfHwgdHlwZW9mIHN0ciA9PSAndW5kZWZpbmVkJykgcmV0dXJuIFwiXCI7XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHRcdH0sXG5cblx0XHQvL+q4gOyekOyImCDsnpDrpbTquLBcblx0XHRjdXRzdHI6IGZ1bmN0aW9uIGN1dFN0cihzdHIsIGxpbWl0KXtcblx0XHRcdHZhciBzdHJMZW5ndGggPSAwLFxuXHRcdFx0XHRzdHJUaXRsZSA9IFwiXCIsXG5cdFx0XHRcdHN0clBpZWNlID0gXCJcIixcblx0XHRcdFx0Y29kZSwgY2g7XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSksXG5cdFx0XHRcdGNoID0gc3RyLnN1YnN0cihpLDEpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHN0clBpZWNlID0gc3RyLnN1YnN0cihpLDEpXG5cdFx0XHRcdGNvZGUgPSBwYXJzZUludChjb2RlKTtcblxuXHRcdFx0XHRpZiAoKGNoIDwgXCIwXCIgfHwgY2ggPiBcIjlcIikgJiYgKGNoIDwgXCJBXCIgfHwgY2ggPiBcIlpcIikgJiYgKChjb2RlID4gMjU1KSB8fCAoY29kZSA8IDApKSlcblx0XHRcdFx0XHRzdHJMZW5ndGggPSBzdHJMZW5ndGggKyAzOyAvL1VURi04IDNieXRlIOuhnCDqs4TsgrBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDE7XG5cblx0XHRcdFx0aWYoc3RyTGVuZ3RoPmxpbWl0KSAvL+ygnO2VnCDquLjsnbQg7ZmV7J24XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGVsc2Ugc3RyVGl0bGUgPSBzdHJUaXRsZStzdHJQaWVjZTsgLy/soJztlZzquLjsnbQg67O064ukIOyekeycvOuptCDsnpDrpbgg66y47J6Q66W8IOu2meyXrOykgOuLpC5cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJUaXRsZTtcblx0XHR9LFxuXG5cdFx0Lypcblx0XHQgKlx0SW1hZ2UgcHJlbG9hZGVyIChjKSB5aWtsMTAwNEBnbWFpbC5jb20sIDIwMTYuMTFcblx0XHQgKi9cblx0XHRpbWFnZVByZWxvYWRlcjogZnVuY3Rpb24oaW1nLCBjYWxsYmFjaykge1xuXG5cdFx0XHR2YXIgY291bnQgPSAwO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGltZyApICYmIHR5cGVvZiBpbWcgKSB7XG5cblx0XHRcdFx0aW1nLmZvckVhY2goZnVuY3Rpb24oZWwsIGluZGV4KXtcblx0XHRcdFx0XHR2YXIgaW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdFx0aW1hZ2VzLnNyYyA9IGltZztcblx0XHRcdFx0XHRpbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyAmJiBjb3VudCA9PSBpbWcubGVuZ3RoKSBjYWxsYmFjayhpbWFnZXMpO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBpbWcgPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRcdHZhciBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0aW1hZ2VzLnNyYyA9IGltZztcblx0XHRcdFx0aW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGltYWdlcyk7XG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvLyBtb2JpbGUgZGV0ZWN0aW5nXG5cdFx0aXNEZXZpY2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly/rqqjrsJTsnbwgVUFcblx0XHRcdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGVjazogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYW5kcm9pZCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2luZ2VyYnJlYWQpIHJldHVybiAnZ2luZ2VyYnJlYWQnO1xuXHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gJ2FuZHJvaWQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5pb3MpIHJldHVybiAnaW9zJztcblx0XHRcdFx0XHRpZiAoIXRoaXMuYW5kcm9pZCAmJiAhdGhpcy5pb3MpIHJldHVybiAnbm8tbW9iaWxlJztcblx0XHRcdFx0fSxcblx0XHRcdFx0aW9zOiB1YS5tYXRjaCgnaVBob25lJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGFuZHJvaWQ6IHVhLm1hdGNoKCdBbmRyb2lkJykgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGdpbmdlcmJyZWFkOiB1YS5tYXRjaCgnQW5kcm9pZCAyLjMnKSA/IHRydWUgOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGV2aWNlU2l6ZTogJ2RldmljZS1zaXplLScgKyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdH0sXG5cblxuXHQvL+yKrOudvOydtOuTnCDssLjqs6Ag7IKs7J207Yq4IDogaHR0cDovL2lkYW5nZXJvLnVzL3N3aXBlci9hcGkvIy5XRnNxSHJhTFNBd1xuXHRzd2lwZXI6IHtcblx0XHRfc2NvcGU6ICcnLFxuXG5cdFx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRcdGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0cGFnaW5hdGlvblR5cGU6ICdmcmFjdGlvbidcblx0XHR9LFxuXG5cdFx0aW5pdDogZnVuY3Rpb24oc2NvcGUsIG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuX3Njb3BlID0gc2NvcGU7XG5cdFx0XHR2YXIgYXNzaWduID0gKHR5cGVvZiBPYmplY3QuYXNzaWduID09ICd1bmRlZmluZWQnKSA/ICQuZXh0ZW5kIDogT2JqZWN0LmFzc2lnbjsgLy9hc3NpZ24g7ZWo7IiYIOyhtOyerCDsl6zrtoAg7LK07YGsLCDsl4bsnLzrqbQgJC5leHRlbmTroZwg64yA7LK0XG5cdFx0XHRvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09ICd1bmRlZmluZWQnKSA/IHRoaXMuZGVmYXVsdE9wdGlvbnMgOiBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOyAvL29wdGlvbnMg66ek6rCc67OA7IiY6rCAIHVuZGVmaW5lZCDsnbwg6rK97Jqw66W8IOyytO2BrO2VmOyXrCDsmKTrpZgg67Cp7KeAXG5cdFx0XHR0aGlzLnN3aXBlcihvcHRpb25zKTtcblx0XHR9LFxuXG5cdFx0c3dpcGVyOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHQkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJywgbmV3IFN3aXBlcih0aGlzLl9zY29wZSwgb3B0aW9ucykpO1xuXHRcdH0sXG5cblx0XHRtYW5hZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJyk7XG5cdFx0fVxuXHR9XG5cbn07XG5cblxuXG4vL0RPTSDroZzrk5ztm4Qg7ZmU66m0IOuztOyXrOykjFxud2luLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXHQkKCBkb2N1bWVudC5ib2R5ICkuc3RvcCgpLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDMwMCwgZnVuY3Rpb24oKXtcblx0fSk7XG59KTtcblxuJChmdW5jdGlvbigpIHtcblxuXHR2YXIgdXRpbCA9IHVpLnV0aWwsXG5cdFx0Y29tbW9uID0gdWkuY29tbW9uLFxuXHRcdGlzRGV2aWNlID0gdXRpbC5pc0RldmljZSgpO1xuXG5cdC8v7J2066+47KeAIOyXkeuwqSDrsKnsp4Bcblx0Y29tbW9uLmltYWdlUmVwbGFjZSgpO1xuXG5cdC8v67mIIOunge2BrCDssYTsmrDquLBcblx0Y29tbW9uLmVtcHR5TGlua0Z1bmMoKTtcblxuXHQvL+qygOyDieywvSDsl7TquLBcblx0Y29tbW9uLnNlYXJjaExheWVyKCk7XG5cblx0Ly/rqqjrsJTsnbwg64ST7J20LCBPUyDtgbTrnpjsiqQg7IK97J6FXG5cdCQoJ2JvZHknKS5hZGRDbGFzcyhbaXNEZXZpY2UuY2hlY2soKSwgdXRpbC5kZXZpY2VTaXplXS5qb2luKCcgJykpO1xuXG5cdC8vbmF2aWdhdGlvbiBvcGVuXG5cdCQoJ2EuYnRuLW5hdmknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbW1vbi50b2dnbGVOYXZpLm9wZW4oKTtcblx0XHQkKCdib2R5ID4gLmRpbW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbW1vbi50b2dnbGVOYXZpLmNsb3NlKCk7XG5cdFx0fSlcblx0fSk7XG5cblx0Ly9zdWIgbmF2aVxuXHRpZiAoICQoJ2JvZHknKS5oYXMoJy5zdWItbmF2aScpICkge1xuXHRcdHVpLmNvbW1vbi5zdWJuYXZpUG9zaXRpb25TZXQoKTtcblx0fVxuXG5cdC8vbmF2aWdhdGlvbiBjbG9zZVxuXHQkKCcjbmF2aSAuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHR9KTtcblxuXHQvL+ychOuhnOqwgOq4sFxuXHQkKCdidXR0b24udG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDMwMCwgJ2Vhc2VJbk91dFF1YXJ0JywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblx0Ly/subTthYzqs6Drpqwg7IOB7IS4IOyDge2SiOuzhCDsmIHsl60g64aS7J20XG5cdC8v7IOB7ZKI67OEIOu5hOyjvOyWvCDsmIHsl60g64aS7J20IOu2gOyXrFxuXHR2YXIgY2F0ZWdvcnlWaXN1YWxIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRhcmdldCA9ICQoJy5jYXRlZ29yeS12aXN1YWwuYmcwMSAuaW1nLXdyYXAnKSxcblx0XHRcdGggPSAwLCB3ID0gMCxcblx0XHRcdGltZ1NyYyA9IHRhcmdldC5maW5kKCcuaW1nJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXG5cdFx0XHRyZXN1bHQgPSAwO1xuXG5cdFx0aWYgKCB0eXBlb2YgaW1nU3JjID09ICd1bmRlZmluZWQnICkgcmV0dXJuIDtcblxuXHRcdGltZ1NyYyA9IGltZ1NyYy5yZXBsYWNlKC9edXJsXFwofFxcKSR8XFxcIi9naSwgJycpO1xuXG5cdFx0dmFyIHJlc2l6ZUhlaWdodCA9IGZ1bmN0aW9uIChjSW1nKSB7XG5cblx0XHRcdHZhciByZXNpemVGdW5jID0gZnVuY3Rpb24gKCBsYW5kICkge1xuXHRcdFx0XHR2YXIgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0XHRcdGwgPSBzY3JlZW4ub3JpZW50YXRpb24udHlwZS50b1N0cmluZygpLmluZGV4T2YoJ3BvcnRyYWl0JykgPiAtMSA/IDEgOiAwLjU7XG5cdFx0XHRcdGlmICggd2luVyA+IDMxOSApIHtcblx0XHRcdFx0XHRoID0gY0ltZy5uYXR1cmFsSGVpZ2h0O1xuXHRcdFx0XHRcdHcgPSBjSW1nLm5hdHVyYWxXaWR0aDtcblx0XHRcdFx0XHRyZXN1bHQgPSAoIGgqKHdpblcqbCkgKSAvIHc7XG5cdFx0XHRcdFx0cmVzdWx0ID0gTWF0aC5jZWlsKCByZXN1bHQgKTtcblx0XHRcdFx0XHR0YXJnZXQuaGVpZ2h0KCByZXN1bHQgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhsKTtcblx0XHRcdFx0XHRpZiAoIGwgPT0gMC41ICkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudCgpLmhlaWdodChyZXN1bHQpO1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudCgpLmZpbmQoJz4udHh0JykuY3NzKHsgZGlzcGxheTogJ2luaGVyaXQnIH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggbCA9PSAxICkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnBhcmVudCgpLmNzcyh7IGhlaWdodDogJ2F1dG8nIH0pO1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnNpYmxpbmdzKCcudHh0JykuY3NzKHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogdGFyZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdibG9jaycgOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGFyZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdibG9jaycgOiAnbm9uZScpO1xuXHRcdFx0XHRcdFx0Ly8gcmVzdWx0ICsgdGFyZ2V0LnBhcmVudCgpLmZpbmQoJ2J1dHRvbicpLmhlaWdodCgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJlc2l6ZUZ1bmMoKTtcblx0XHRcdH0pLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzaXplRnVuYygpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdH1cblxuXHRcdHVpLnV0aWwuaW1hZ2VQcmVsb2FkZXIoIGltZ1NyYywgcmVzaXplSGVpZ2h0KTtcblx0fTtcblx0Ly8gY2F0ZWdvcnlWaXN1YWxIZWlnaHQoKTtcblxuXHQvL+y5tO2FjOqzoOumrCBoMu2BtOumreyLnCDthqDquIBcblx0dmFyIGNhdGVnb3J5TGlzdCA9ICQoJy5jYXRlZ29yeS1saXN0Jyk7XG5cdGlmICggY2F0ZWdvcnlMaXN0Lmxlbmd0aCA+IDAgKSB7XG5cdFx0Y2F0ZWdvcnlMaXN0LmZpbmQoJy5kZXB0aDEgPiBsaSA+IGgyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdGlmICggJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdC5zaWJsaW5ncygnLmRlcHRoMicpLnN0b3AoKS5zbGlkZVVwKDMwMCwgZnVuY3Rpb24oKXtcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdC5zaWJsaW5ncygnLmRlcHRoMicpLnN0b3AoKS5zbGlkZURvd24oMzAwLCBmdW5jdGlvbigpe1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhdGVnb3J5TGlzdC5maW5kKCcuZGVwdGgxID4gbGkgPiBoMiA+IGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApe1xuXHRcdFx0dmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly/subTthYzqs6Drpqwg7YOtXG5cdGlmICggJCgnYm9keScpLmZpbmQoJy5jYXRlZ29yeS1kZXRhaWwnKS5sZW5ndGggKSB7XG5cdFx0JCgnLnRhYiBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0ICAgICAgICAkKCcudGFiIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHQgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHQgICAgICAgICQoJy50YWJfY29udGVudCcpLmhpZGUoKTtcblx0ICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKTtcblx0ICAgICAgICAkKFwiI1wiK2lkKS5zaG93KCk7XG5cdCAgICB9KTtcblx0fVxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91aS5jb21tb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvY29uY2F0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==