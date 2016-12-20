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
	
	__webpack_require__(5);
	
	//개발용 스크립트 프로덕션시 삭제
	
	var $ = window.$; //style
	
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
	
			//검색 레이어
			searchLayer: function searchLayer() {
				var header = $('#header'),
				    body = $('body');
				header.find('.btn-search').on('click', function () {
					header.find('.search').addClass('active');
					body.append('<div class="dimm"></div>');
					console.log($('.dimm'));
					$('.dimm').on('click', function () {
						header.find('.search').removeClass('active');
						$(this).remove();
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
	
	//DOM 로드후 실행
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
		$('a.category').on('click', function () {
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
		if (location.href.indexOf('?dev') > -1) {
			dev.appendMenuList();
			dev.appendMenuBtn();
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var win = window,
	    doc = document,
	    qsa = 'querySelectorAll',
	    qs = 'querySelector';
	
	
	var dom = function dom(s) {
		return document[qs](s);
	},
	    domAll = function domAll(s) {
		return document[qsa](s);
	},
	    makeDom = function makeDom(s, attr) {
		var dom = document.createElement(s);
		if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) == 'object' && Object.keys(attr).length > 0) for (var i in attr) {
			dom.setAttribute(i, attr[i]);
		}return dom;
	},
	    putText = function putText(s) {
		return document.createTextNode(s);
	},
	    prepend = function prepend(item, target) {
		return target.insertBefore(item, target.childNodes[0]);
	},
	    append = function append(item, target) {
		return target.appendChild(item);
	};
	
	var menuData = [{
		depth1: "공통",
		depth2: "",
		links: [{
			title: "댓글",
			href: "/html/common/reply.html",
			complete: true
		}, {
			title: "내용이 없을 때",
			href: "/html/common/no-reply.html",
			complete: true
		}, {
			title: "confirm, alert",
			href: "/html/config/locationServiceAgreement.html",
			complete: true
		}]
	}, {
		depth1: "브랜드메인",
		depth2: "매장정보",
		links: [{
			title: "매장소식",
			href: "/html/brand/storeInfo/storeNews.html",
			complete: true
		}, {
			title: "백화점행사(Sample)",
			href: "/html/brand/storeEvent.html",
			complete: true
		}]
	}, {
		depth1: "",
		depth2: "매장방문후기",
		links: [{
			title: "상세",
			href: "/html/brand/visitorsBookDetail.html",
			complete: false
		}]
	}, {
		depth1: "멤버쉽",
		depth2: "이용약관",
		links: [{
			title: "서비스 이용약관 (뷰티포인트 웹)",
			href: "/html/membership/serviceAgreement/service.html",
			complete: true
		}, {
			title: "개인정보 처리방침 (뷰티포인트 웹)",
			href: "/html/membership/serviceAgreement/personalInfomation.html",
			complete: true
		}, {
			title: "위치기반서비스 이용약관",
			href: "/html/membership/serviceAgreement/locationBased.html",
			complete: true
		}]
	}, {
		depth1: "이벤트&행사",
		depth2: "진행중인 이벤트",
		links: [{
			title: "상세 - 일반",
			href: "/html/event/ongoing/view.html",
			complete: true
		}, {
			title: "상세 - 헤라메이크업쇼",
			href: "/html/event/ongoing/viewHera.html",
			complete: true
		}, {
			title: "상세 (투표하기 - 단일선택)",
			href: "/html/event/ongoing/viewPoll_singleSelect.html",
			complete: true
		}, {
			title: "상세 (투표하기 - 복수선택)",
			href: "/html/event/ongoing/viewPoll_multiSelect.html",
			complete: true
		}, {
			title: "상세 (투표완료)",
			href: "/html/event/ongoing/viewPollComplete.html",
			complete: true
		}, {
			title: "상세 (투표종료 후 확인)",
			href: "/html/event/ongoing/viewPoll_finish.html",
			complete: true
		}, {
			title: "예약 시 - 개인정보 수집 및 이용안내",
			href: "/html/event/reservation/agreement.html",
			complete: true
		}]
	}, {
		depth1: "쿠폰북",
		depth2: "",
		links: [{
			title: "상세",
			href: "/html/couponBook/detail.html",
			complete: true
		}]
	}, {
		depth1: "뷰티컨텐츠",
		depth2: "목록",
		links: [{
			title: "상세(카드뉴스형)",
			href: "/html/beautyContent/cardType.html",
			complete: true
		}, {
			title: "상세(동영상형)",
			href: "/html/beautyContent/movieType.html",
			complete: true
		}]
	}, {
		depth1: "상품정보",
		depth2: "",
		links: [{
			title: "상품 상세",
			href: "/html/productInfo/view.html",
			complete: true
		}]
	}, {
		depth1: "상품 상세",
		depth2: "",
		links: [{
			title: "상품리뷰",
			href: "/html/productReview/view.html",
			complete: true
		}]
	}, {
		depth1: "고객센터",
		depth2: "공지사항",
		links: [{
			title: "목록 + 상세",
			href: "/html/cs/notice/list.html",
			complete: true
		}]
	}, {
		depth1: "도움말",
		depth2: "",
		links: [{
			title: "메인",
			href: "/html/cs/help/index.html",
			complete: true
		}]
	}, {
		depth1: "마이페이지",
		depth2: "",
		links: [{
			title: "나의 등급",
			href: "/html/myPage/grade/index.html",
			complete: true
		}, {
			title: "브랜드별 매장선택",
			href: "/html/myPage/selectStore/index.html",
			complete: true
		}, {
			title: "나의 쿠폰",
			href: "/html/myPage/coupon/index.html",
			complete: true
		}, {
			title: "나의 리뷰 - 방문후기",
			href: "/html/myPage/myReview/visitorsBook.html",
			complete: true
		}, {
			title: "나의 리뷰 - 상품리뷰",
			href: "/html/myPage/myReview/index.html",
			complete: true
		}, {
			title: "관심상품",
			href: "/html/myPage/productOfInterest/index.html",
			complete: true
		}]
	}, {
		depth1: "",
		depth2: "구매현황",
		links: [{
			title: "리스트(popup 포함)",
			href: "/html/myPage/purchase/period.html",
			complete: true
		}]
	}, {
		depth1: "엔젤톡톡",
		depth2: "",
		links: [{
			title: "대화화면",
			href: "/html/engelTalk/talk_inquiry.html",
			complete: true
		}]
	}];
	
	var menuList = menuData.reduce(function (p, c) {
		var depth1 = c.depth1,
		    depth2 = c.depth2,
		    links = c.links;
	
		return (p || '') + '\n\t' + (depth1 ? '<h2><span>' + depth1 + '</span></h2>' : '') + '\n\t' + (depth2 == '' ? depth2 : '<h3><span>' + depth2 + '</span></h3>') + '\n\t<ul>' + links.reduce(function (ip, ic) {
			var title = ic.title,
			    href = ic.href,
			    complete = ic.complete;
	
			return (ip || "") + '\n\t\t<li' + (complete ? ' class="cp"' : "") + '><a href="' + href + '">' + title + '</a></li>';
		}, 0) + '\n\t</ul>\n\t';
	}, 0);
	
	// 메뉴 버튼 삽입
	window.dev = {
		appendMenuBtn: function appendMenuBtn() {
			var menuTrigger = '<button type="button" class="menu-trigger">\n\t<span>toggle menu</span>\n</button>';
	
			if ($('button.menu-trigger').length <= 0) {
				$('#menu').prepend(menuTrigger);
			}
	
			$('.menu-trigger').on('click', function () {
				var menuList = $('#menu-list'),
				    ctrlClass = 'is-active',
				    condition = menuList.hasClass(ctrlClass);
				if (condition) {
					menuList.add($(this)).removeClass(ctrlClass);
				} else {
					menuList.add($(this)).addClass(ctrlClass);
				}
			});
		}
	
		// 메뉴 리스트 삽입
		, appendMenuList: function appendMenuList() {
	
			if ($('#menu').length <= 0) {
				menuList = $('<div id=menu />').append($('<div id=menu-list class=overthrow />').append(menuList));
				$('#wrap').length <= 0 ? $('body').prepend(menuList) : $('#wrap').prepend(menuList);
			}
			$('#menu-list').find('a').each(function () {
				var aHREF = $(this).attr('href');
				if (aHREF.indexOf('?dev') <= -1) {
					$(this).attr('href', aHREF + '?dev');
				}
			});
		},
		dimm: function dimm(msg) {
			msg = msg || '내용이 없습니다.';
			$('body').append($('<div class="dimm" />').append($('<span>' + msg + '<span/><button class="close">[\uB2EB\uAE30]</span></button>')));
			$('.dimm').on('click', '.close', function () {
				$('.dimm').remove();
			});
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA1YmQxYzk3N2ZiMzdiZmQxNTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvanMvZGV2LmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJ3aW4iLCJkb2MiLCJkb2N1bWVudCIsInVpIiwiY29tbW9uIiwiY29tbW9uTm90aGluZyIsImVtcHR5TGlua0Z1bmMiLCJhbGxBIiwicXVlcnlTZWxlY3RvckFsbCIsImFUYWciLCJocmVmIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInV0aWwiLCJ0cmltIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlTmF2aSIsImZsYWciLCJvcGVuIiwibmF2aSIsImJvZHkiLCJhcHBlbmQiLCJhZGRDbGFzcyIsImZpbmQiLCJvbiIsInBhcmVudCIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJkZXB0aDNUb2dnbGUiLCJjbG9zZSIsInJlbW92ZSIsImxpc3QiLCJuZXh0Iiwic3BlZWQiLCJoYXNDbGFzcyIsInN0b3AiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwic2VhcmNoTGF5ZXIiLCJoZWFkZXIiLCJjb25zb2xlIiwibG9nIiwic3RyIiwicmVwbGFjZSIsImN1dHN0ciIsImN1dFN0ciIsImxpbWl0Iiwic3RyTGVuZ3RoIiwic3RyVGl0bGUiLCJzdHJQaWVjZSIsImNvZGUiLCJjaCIsImNoYXJDb2RlQXQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiaXNEZXZpY2UiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNoZWNrIiwiYW5kcm9pZCIsImdpbmdlcmJyZWFkIiwiaW9zIiwibWF0Y2giLCJkZXZpY2VTaXplIiwiaW5uZXJXaWR0aCIsInN3aXBlciIsIl9zY29wZSIsImRlZmF1bHRPcHRpb25zIiwiZGlyZWN0aW9uIiwibG9vcCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uVHlwZSIsImluaXQiLCJzY29wZSIsIm9wdGlvbnMiLCJhc3NpZ24iLCJPYmplY3QiLCJleHRlbmQiLCJkYXRhIiwiU3dpcGVyIiwibWFuYWdlciIsImpvaW4iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwibG9jYXRpb24iLCJpbmRleE9mIiwiZGV2IiwiYXBwZW5kTWVudUxpc3QiLCJhcHBlbmRNZW51QnRuIiwicXNhIiwicXMiLCJkb20iLCJzIiwiZG9tQWxsIiwibWFrZURvbSIsImF0dHIiLCJjcmVhdGVFbGVtZW50Iiwia2V5cyIsInB1dFRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZXBlbmQiLCJpdGVtIiwidGFyZ2V0IiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGROb2RlcyIsImFwcGVuZENoaWxkIiwibWVudURhdGEiLCJkZXB0aDEiLCJkZXB0aDIiLCJsaW5rcyIsInRpdGxlIiwiY29tcGxldGUiLCJtZW51TGlzdCIsInJlZHVjZSIsInAiLCJjIiwiaXAiLCJpYyIsIm1lbnVUcmlnZ2VyIiwiY3RybENsYXNzIiwiY29uZGl0aW9uIiwiYWRkIiwiZWFjaCIsImFIUkVGIiwiZGltbSIsIm1zZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFBZ0I7O0FBRWhCLEtBQUlBLElBQUlDLE9BQU9ELENBQWYsQyxDQUg4Qjs7QUFJOUIsS0FBSUUsTUFBTUQsTUFBVjtBQUFBLEtBQ0NFLE1BQU1DLFFBRFA7O0FBSUFGLEtBQUlHLEVBQUosR0FBU0osT0FBT0ksRUFBUCxJQUFhOztBQUVyQjtBQUNBQyxVQUFRO0FBQ1A7QUFD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aW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTA1YmQxYzk3N2ZiMzdiZmQxNTYiLCJpbXBvcnQgJy4uL3Njc3MvY29uY2F0LnNjc3MnOyAvL3N0eWxlXG5pbXBvcnQgJy4vZGV2JzsgLy/qsJzrsJzsmqkg7Iqk7YGs66a97Yq4IO2UhOuhnOuNleyFmOyLnCDsgq3soJxcblxudmFyICQgPSB3aW5kb3cuJDtcbnZhciB3aW4gPSB3aW5kb3csXG5cdGRvYyA9IGRvY3VtZW50O1xuXG5cbndpbi51aSA9IHdpbmRvdy51aSB8fCB7XG5cblx0Ly/qs7XthrVcblx0Y29tbW9uOiB7XG5cdFx0Ly8g67mIIO2VqOyImCDtgbTrpq3si5wg7Jik66WYIOuwqeyngFxuXHRcdGNvbW1vbk5vdGhpbmc6IGZ1bmN0aW9uKCkge30sXG5cblx0XHQvLyBh7YOc6re47J2YIGhyZWYg6rCS7J20ICMg7J286rK97JqwIGNvbW1vbk5vdGhpbmcoKeycvOuhnCDrjIDssrRcblx0XHRlbXB0eUxpbmtGdW5jOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vYe2DnOq3uCBocmVm7JeQIOuNlOuvuCDtlajsiJgg7IK97J6FXG5cdFx0XHR2YXIgYWxsQSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJyksXG5cdFx0XHRcdGFUYWcgPSBudWxsLFxuXHRcdFx0XHRocmVmID0gbnVsbDtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhbGxBLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFUYWcgPSBhbGxBW2ldO1xuXHRcdFx0XHRocmVmID0gYVRhZy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHRcdFx0aWYgKHVpLnV0aWwudHJpbShocmVmKSA9PSAnIycgfHwgaHJlZiA9PSBudWxsKVxuXHRcdFx0XHRcdGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgJ2phdmFzY3JpcHQ6dWkuY29tbW9uLmNvbW1vbk5vdGhpbmcoKTsnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dG9nZ2xlTmF2aToge1xuXHRcdFx0ZmxhZzogdHJ1ZSxcblx0XHRcdG9wZW46IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG5hdmkgPSAkKCcjbmF2aScpLFxuXHRcdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRib2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRpbW1cIj48L2Rpdj4nKTtcblx0XHRcdFx0bmF2aS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGlmICggdGhpcy5mbGFnICkge1xuXHRcdFx0XHRcdHRoaXMuZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdG5hdmkuZmluZCgnLm5hdmktbGlzdCA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5kZXB0aDNUb2dnbGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQoJyNuYXZpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHQkKCdib2R5ID4gLmRpbW0nKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXB0aDNUb2dnbGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCQoJy5uYXZpLWxpc3Qtc3ViID4gbGkuaGFzTGlzdCA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBsaXN0ID0gJCh0aGlzKS5uZXh0KCcubmF2aS1saXN0LXN1Yi0wMicpLFxuXHRcdFx0XHRcdFx0cGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKSxcblx0XHRcdFx0XHRcdHNwZWVkID0gMjAwO1xuXHRcdFx0XHRcdGlmICggcGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcblx0XHRcdFx0XHRcdGxpc3Quc3RvcCgpLnNsaWRlVXAoc3BlZWQsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0bGlzdC5zdG9wKCkuc2xpZGVEb3duKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRwYXJlbnQuc2libGluZ3MoKS5maW5kKCcubmF2aS1saXN0LXN1Yi0wMicpLnN0b3AoKS5zbGlkZVVwKHNwZWVkLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8v6rKA7IOJIOugiOydtOyWtFxuXHRcdHNlYXJjaExheWVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoZWFkZXIgPSAkKCcjaGVhZGVyJyksXG5cdFx0XHQgXHRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0aGVhZGVyLmZpbmQoJy5idG4tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0aGVhZGVyLmZpbmQoJy5zZWFyY2gnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdGJvZHkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGltbVwiPjwvZGl2PicpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygkKCcuZGltbScpKTtcblx0XHRcdFx0JCgnLmRpbW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGhlYWRlci5maW5kKCcuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH0sXG5cblx0dXRpbDoge1xuXG5cdFx0Ly8g7JaR7Kq9IOyXrOuwsSDsoJzqsbBcblx0XHR0cmltOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdGlmIChzdHIgPT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09ICd1bmRlZmluZWQnKSByZXR1cm4gXCJcIjtcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdFx0fSxcblxuXHRcdC8v6riA7J6Q7IiYIOyekOultOq4sFxuXHRcdGN1dHN0cjogZnVuY3Rpb24gY3V0U3RyKHN0ciwgbGltaXQpeyAgICBcblx0XHRcdHZhciBzdHJMZW5ndGggPSAwLFxuXHRcdFx0XHRzdHJUaXRsZSA9IFwiXCIsXG5cdFx0XHRcdHN0clBpZWNlID0gXCJcIixcblx0XHRcdFx0Y29kZSwgY2g7XG5cdFx0XHRcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSksXG5cdFx0XHRcdGNoID0gc3RyLnN1YnN0cihpLDEpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHN0clBpZWNlID0gc3RyLnN1YnN0cihpLDEpXG5cdFx0XHRcdGNvZGUgPSBwYXJzZUludChjb2RlKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICgoY2ggPCBcIjBcIiB8fCBjaCA+IFwiOVwiKSAmJiAoY2ggPCBcIkFcIiB8fCBjaCA+IFwiWlwiKSAmJiAoKGNvZGUgPiAyNTUpIHx8IChjb2RlIDwgMCkpKVxuXHRcdFx0XHRcdHN0ckxlbmd0aCA9IHN0ckxlbmd0aCArIDM7IC8vVVRGLTggM2J5dGUg66GcIOqzhOyCsFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3RyTGVuZ3RoID0gc3RyTGVuZ3RoICsgMTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN0ckxlbmd0aD5saW1pdCkgLy/soJztlZwg6ri47J20IO2ZleyduFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRlbHNlIHN0clRpdGxlID0gc3RyVGl0bGUrc3RyUGllY2U7IC8v7KCc7ZWc6ri47J20IOuztOuLpCDsnpHsnLzrqbQg7J6Q66W4IOusuOyekOulvCDrtpnsl6zspIDri6QuXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyVGl0bGU7XG5cdFx0fSxcblxuXHRcdC8vIG1vYmlsZSBkZXRlY3Rpbmdcblx0XHRpc0RldmljZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+uqqOuwlOydvCBVQVxuXHRcdFx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoZWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5hbmRyb2lkKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5naW5nZXJicmVhZCkgcmV0dXJuICdnaW5nZXJicmVhZCc7XG5cdFx0XHRcdFx0XHRlbHNlIHJldHVybiAnYW5kcm9pZCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLmlvcykgcmV0dXJuICdpb3MnO1xuXHRcdFx0XHRcdGlmICghdGhpcy5hbmRyb2lkICYmICF0aGlzLmlvcykgcmV0dXJuICduby1tb2JpbGUnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRpb3M6IHVhLm1hdGNoKCdpUGhvbmUnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0YW5kcm9pZDogdWEubWF0Y2goJ0FuZHJvaWQnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0Z2luZ2VyYnJlYWQ6IHVhLm1hdGNoKCdBbmRyb2lkIDIuMycpID8gdHJ1ZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZXZpY2VTaXplOiAnZGV2aWNlLXNpemUtJyArIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0fSxcblxuXHRzd2lwZXI6IHtcblx0XHRfc2NvcGU6ICcnLFxuXG5cdFx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRcdGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdFx0cGFnaW5hdGlvblR5cGU6ICdmcmFjdGlvbidcblx0XHR9LFxuXG5cdFx0aW5pdDogZnVuY3Rpb24oc2NvcGUsIG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuX3Njb3BlID0gc2NvcGU7XG5cdFx0XHR2YXIgYXNzaWduID0gKHR5cGVvZiBPYmplY3QuYXNzaWduID09ICd1bmRlZmluZWQnKSA/ICQuZXh0ZW5kIDogT2JqZWN0LmFzc2lnbjsgLy9hc3NpZ24g7ZWo7IiYIOyhtOyerCDsl6zrtoAg7LK07YGsLCDsl4bsnLzrqbQgJC5leHRlbmTroZwg64yA7LK0XG5cdFx0XHRvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09ICd1bmRlZmluZWQnKSA/IHRoaXMuZGVmYXVsdE9wdGlvbnMgOiBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOyAvL29wdGlvbnMg66ek6rCc67OA7IiY6rCAIHVuZGVmaW5lZCDsnbwg6rK97Jqw66W8IOyytO2BrO2VmOyXrCDsmKTrpZgg67Cp7KeAXG5cdFx0XHR0aGlzLnN3aXBlcihvcHRpb25zKTtcblx0XHR9LFxuXG5cdFx0c3dpcGVyOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHQkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJywgbmV3IFN3aXBlcih0aGlzLl9zY29wZSwgb3B0aW9ucykpO1xuXHRcdH0sXG5cblx0XHRtYW5hZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkKHRoaXMuX3Njb3BlKS5kYXRhKCdtYW5hZ2VyJyk7XG5cdFx0fVxuXHR9XG5cbn07XG5cblxuXG4vL0RPTSDroZzrk5ztm4Qg7Iuk7ZaJXG4kKGZ1bmN0aW9uKCkge1xuXG5cdHZhciB1dGlsID0gdWkudXRpbCxcblx0XHRjb21tb24gPSB1aS5jb21tb24sXG5cdFx0aXNEZXZpY2UgPSB1dGlsLmlzRGV2aWNlKCk7XG5cblxuXHQvL+u5iCDrp4Htgawg7LGE7Jqw6riwXG5cdGNvbW1vbi5lbXB0eUxpbmtGdW5jKCk7XG5cblx0Ly/qsoDsg4nssL0g7Je06riwXG5cdGNvbW1vbi5zZWFyY2hMYXllcigpO1xuXG5cdC8v66qo67CU7J28IOuEk+ydtCwgT1Mg7YG0656Y7IqkIOyCveyehVxuXHQkKCdib2R5JykuYWRkQ2xhc3MoW2lzRGV2aWNlLmNoZWNrKCksIHV0aWwuZGV2aWNlU2l6ZV0uam9pbignICcpKTtcblxuXHQvL25hdmlnYXRpb24gb3BlblxuXHQkKCdhLmNhdGVnb3J5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5vcGVuKCk7XG5cdFx0JCgnYm9keSA+IC5kaW1tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHRcdH0pXG5cdH0pO1xuXG5cdC8vbmF2aWdhdGlvbiBjbG9zZVxuXHQkKCcjbmF2aSAuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb21tb24udG9nZ2xlTmF2aS5jbG9zZSgpO1xuXHR9KTtcblxuXHQvL+ychOuhnOqwgOq4sFxuXHQkKCdidXR0b24udG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDMwMCwgJ2Vhc2VJbk91dFF1YXJ0JywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblxuXHQvLyBrZ2MuYWNjb3JkaWFuLmluaXQoJy5hY2NvcmRpYW4nKTtcblxuXHQvLyBjb21tb24ubG9hZGluZ0NvbXBsZXRlKGZ1bmN0aW9uKCkge1xuXHQvLyAgICAgLy9jYWxsYmFja3Ncblx0Ly8gfSk7XG5cblx0Ly/qsJzrsJzsmqkg66mU7ISc65OcIOyLpO2WiVxuXHRpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKCc/ZGV2JykgPiAtMSkge1xuXHRcdGRldi5hcHBlbmRNZW51TGlzdCgpO1xuXHRcdGRldi5hcHBlbmRNZW51QnRuKCk7XG5cdH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250L2pzL3VpLmNvbW1vbi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZnJvbnQvc2Nzcy9jb25jYXQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCBbd2luLCBkb2MsIHFzYSwgcXNdID0gW3dpbmRvdywgZG9jdW1lbnQsICdxdWVyeVNlbGVjdG9yQWxsJywgJ3F1ZXJ5U2VsZWN0b3InXTtcblxuY29uc3Rcblx0ZG9tIFx0PSBzID0+IGRvY3VtZW50W3FzXShzKSxcblx0ZG9tQWxsIFx0PSBzID0+IGRvY3VtZW50W3FzYV0ocyksXG5cdG1ha2VEb20gPSAocywgYXR0cikgPT4ge1xuXHRcdHZhciBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHMpXG5cdFx0aWYgKCB0eXBlb2YgYXR0ciA9PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhhdHRyKS5sZW5ndGggPiAwIClcblx0XHRcdGZvciAoIGxldCBpIGluIGF0dHIgKVxuXHRcdFx0XHRkb20uc2V0QXR0cmlidXRlKGksIGF0dHJbaV0pO1xuXHRcdHJldHVybiBkb207XG5cdH0sXG5cdHB1dFRleHQgPSBzID0+IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHMpLFxuXHRwcmVwZW5kID0gKGl0ZW0sIHRhcmdldCkgPT4gdGFyZ2V0Lmluc2VydEJlZm9yZShpdGVtLCB0YXJnZXQuY2hpbGROb2Rlc1swXSksXG5cdGFwcGVuZCBcdD0gKGl0ZW0sIHRhcmdldCkgPT4gdGFyZ2V0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG5jb25zdCBtZW51RGF0YSA9IFtcblx0e1xuXHRcdGRlcHRoMTogXCLqs7XthrVcIixcblx0XHRkZXB0aDI6IFwiXCIsXG5cdFx0bGlua3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi64yT6riAXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvY29tbW9uL3JlcGx5Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuuCtOyaqeydtCDsl4bsnYQg65WMXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvY29tbW9uL25vLXJlcGx5Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcImNvbmZpcm0sIGFsZXJ0XCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvY29uZmlnL2xvY2F0aW9uU2VydmljZUFncmVlbWVudC5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9XG5cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRkZXB0aDE6IFwi67iM656c65Oc66mU7J24XCIsXG5cdFx0ZGVwdGgyOiBcIuunpOyepeygleuztFwiLFxuXHRcdGxpbmtzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuunpOyepeyGjOyLnVwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL2JyYW5kL3N0b3JlSW5mby9zdG9yZU5ld3MuaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi67Cx7ZmU7KCQ7ZaJ7IKsKFNhbXBsZSlcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9icmFuZC9zdG9yZUV2ZW50Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRkZXB0aDE6IFwiXCIsXG5cdFx0ZGVwdGgyOiBcIuunpOyepeuwqeusuO2bhOq4sFwiLFxuXHRcdGxpbmtzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuyDgeyEuFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL2JyYW5kL3Zpc2l0b3JzQm9va0RldGFpbC5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGRlcHRoMTogXCLrqaTrsoTsib1cIixcblx0XHRkZXB0aDI6IFwi7J207Jqp7JW96rSAXCIsXG5cdFx0bGlua3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7ISc67mE7IqkIOydtOyaqeyVveq0gCAo67ew7Yuw7Y+s7J247Yq4IOybuSlcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9tZW1iZXJzaGlwL3NlcnZpY2VBZ3JlZW1lbnQvc2VydmljZS5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLqsJzsnbjsoJXrs7Qg7LKY66as67Cp7LmoICjrt7Dti7Dtj6zsnbjtirgg7Ju5KVwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL21lbWJlcnNoaXAvc2VydmljZUFncmVlbWVudC9wZXJzb25hbEluZm9tYXRpb24uaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7JyE7LmY6riw67CY7ISc67mE7IqkIOydtOyaqeyVveq0gFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL21lbWJlcnNoaXAvc2VydmljZUFncmVlbWVudC9sb2NhdGlvbkJhc2VkLmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRkZXB0aDE6IFwi7J2067Kk7Yq4Ju2WieyCrFwiLFxuXHRcdGRlcHRoMjogXCLsp4TtlonspJHsnbgg7J2067Kk7Yq4XCIsXG5cdFx0bGlua3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7IOB7IS4IC0g7J2867CYXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvZXZlbnQvb25nb2luZy92aWV3Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuyDgeyEuCAtIO2XpOudvOuplOydtO2BrOyXheyHvFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL2V2ZW50L29uZ29pbmcvdmlld0hlcmEuaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7IOB7IS4ICjtiKztkZztlZjquLAgLSDri6jsnbzshKDtg50pXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvZXZlbnQvb25nb2luZy92aWV3UG9sbF9zaW5nbGVTZWxlY3QuaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7IOB7IS4ICjtiKztkZztlZjquLAgLSDrs7XsiJjshKDtg50pXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvZXZlbnQvb25nb2luZy92aWV3UG9sbF9tdWx0aVNlbGVjdC5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLsg4HshLggKO2IrO2RnOyZhOujjClcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9ldmVudC9vbmdvaW5nL3ZpZXdQb2xsQ29tcGxldGUuaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7IOB7IS4ICjtiKztkZzsooXro4wg7ZuEIO2ZleyduClcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9ldmVudC9vbmdvaW5nL3ZpZXdQb2xsX2ZpbmlzaC5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLsmIjslb0g7IucIC0g6rCc7J247KCV67O0IOyImOynkSDrsI8g7J207Jqp7JWI64K0XCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvZXZlbnQvcmVzZXJ2YXRpb24vYWdyZWVtZW50Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRkZXB0aDE6IFwi7L+g7Y+w67aBXCIsXG5cdFx0ZGVwdGgyOiBcIlwiLFxuXHRcdGxpbmtzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuyDgeyEuFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL2NvdXBvbkJvb2svZGV0YWlsLmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRkZXB0aDE6IFwi67ew7Yuw7Luo7YWQ7LigXCIsXG5cdFx0ZGVwdGgyOiBcIuuqqeuhnVwiLFxuXHRcdGxpbmtzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuyDgeyEuCjsubTrk5zribTsiqTtmJUpXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvYmVhdXR5Q29udGVudC9jYXJkVHlwZS5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7IOB7IS4KOuPmeyYgeyDge2YlSlcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9iZWF1dHlDb250ZW50L21vdmllVHlwZS5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlLFxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGRlcHRoMTogXCLsg4HtkojsoJXrs7RcIixcblx0XHRkZXB0aDI6IFwiXCIsXG5cdFx0bGlua3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi7IOB7ZKIIOyDgeyEuFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL3Byb2R1Y3RJbmZvL3ZpZXcuaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGRlcHRoMTogXCLsg4Htkogg7IOB7IS4XCIsXG5cdFx0ZGVwdGgyOiBcIlwiLFxuXHRcdGxpbmtzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuyDge2SiOumrOu3sFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL3Byb2R1Y3RSZXZpZXcvdmlldy5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0ZGVwdGgxOiBcIuqzoOqwneyEvO2EsFwiLFxuXHRcdGRlcHRoMjogXCLqs7Xsp4Dsgqztla1cIixcblx0XHRsaW5rczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLrqqnroZ0gKyDsg4HshLhcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9jcy9ub3RpY2UvbGlzdC5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0ZGVwdGgxOiBcIuuPhOybgOunkFwiLFxuXHRcdGRlcHRoMjogXCJcIixcblx0XHRsaW5rczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLrqZTsnbhcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9jcy9oZWxwL2luZGV4Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRkZXB0aDE6XCLrp4jsnbTtjpjsnbTsp4BcIiAsXG5cdFx0ZGVwdGgyOiBcIlwiLFxuXHRcdGxpbmtzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuuCmOydmCDrk7HquIlcIixcblx0XHRcdFx0aHJlZjogXCIvaHRtbC9teVBhZ2UvZ3JhZGUvaW5kZXguaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVx0XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLruIzrnpzrk5zrs4Qg66ek7J6l7ISg7YOdXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvbXlQYWdlL3NlbGVjdFN0b3JlL2luZGV4Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcdFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi64KY7J2YIOy/oO2PsFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL215UGFnZS9jb3Vwb24vaW5kZXguaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVx0XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLrgpjsnZgg66as67ewIC0g67Cp66y47ZuE6riwXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvbXlQYWdlL215UmV2aWV3L3Zpc2l0b3JzQm9vay5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLrgpjsnZgg66as67ewIC0g7IOB7ZKI66as67ewXCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvbXlQYWdlL215UmV2aWV3L2luZGV4Lmh0bWxcIixcblx0XHRcdFx0Y29tcGxldGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIuq0gOyLrOyDge2SiFwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL215UGFnZS9wcm9kdWN0T2ZJbnRlcmVzdC9pbmRleC5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0ZGVwdGgxOiBcIlwiLFxuXHRcdGRlcHRoMjogXCLqtazrp6TtmITtmalcIixcblx0XHRsaW5rczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCLrpqzsiqTtirgocG9wdXAg7Y+s7ZWoKVwiLFxuXHRcdFx0XHRocmVmOiBcIi9odG1sL215UGFnZS9wdXJjaGFzZS9wZXJpb2QuaHRtbFwiLFxuXHRcdFx0XHRjb21wbGV0ZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdGRlcHRoMTogXCLsl5TsoKTthqHthqFcIixcblx0XHRkZXB0aDI6IFwiXCIsXG5cdFx0bGlua3M6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwi64yA7ZmU7ZmU66m0XCIsXG5cdFx0XHRcdGhyZWY6IFwiL2h0bWwvZW5nZWxUYWxrL3RhbGtfaW5xdWlyeS5odG1sXCIsXG5cdFx0XHRcdGNvbXBsZXRlOiB0cnVlXHRcblx0XHRcdH1cblx0XHRdXG5cdH1cblxuXTtcblxudmFyIG1lbnVMaXN0ID0gbWVudURhdGEucmVkdWNlKChwLCBjKSA9PiB7XG5cdGxldCB7ZGVwdGgxLCBkZXB0aDIsIGxpbmtzfSA9IGM7XG5cdHJldHVybiBgJHtwIHx8ICcnfVxuXHQke2RlcHRoMSA/IGA8aDI+PHNwYW4+JHtkZXB0aDF9PC9zcGFuPjwvaDI+YCA6IGBgfVxuXHQke2RlcHRoMiA9PSAnJyA/IGRlcHRoMiA6IGA8aDM+PHNwYW4+JHtkZXB0aDJ9PC9zcGFuPjwvaDM+YH1cblx0PHVsPiR7bGlua3MucmVkdWNlKChpcCwgaWMpID0+IHtcblx0XHRcdGxldCB7dGl0bGUsIGhyZWYsIGNvbXBsZXRlfSA9IGljO1xuXHRcdFx0cmV0dXJuIGAke2lwIHx8IFwiXCJ9XG5cdFx0PGxpJHtjb21wbGV0ZSA/ICcgY2xhc3M9XCJjcFwiJyA6IFwiXCJ9PjxhIGhyZWY9XCIke2hyZWZ9XCI+JHt0aXRsZX08L2E+PC9saT5gfSwgMCl9XG5cdDwvdWw+XG5cdGBcbn0sIDApO1xuXG4vLyDrqZTribQg67KE7Yq8IOyCveyehVxud2luZG93LmRldiA9IHtcblx0YXBwZW5kTWVudUJ0bjogZnVuY3Rpb24oKXtcblx0XHR2YXIgbWVudVRyaWdnZXIgPSBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZW51LXRyaWdnZXJcIj5cblx0PHNwYW4+dG9nZ2xlIG1lbnU8L3NwYW4+XG48L2J1dHRvbj5gO1xuXHRcblx0XHRcdGlmICggJCgnYnV0dG9uLm1lbnUtdHJpZ2dlcicpLmxlbmd0aCA8PSAwKSB7XG5cdFx0XHRcdCQoJyNtZW51JykucHJlcGVuZChtZW51VHJpZ2dlcik7XG5cdFx0XHR9XG5cdFxuXHRcdFx0JCgnLm1lbnUtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1lbnVMaXN0ID0gJCgnI21lbnUtbGlzdCcpLFxuXHRcdFx0XHQgICAgY3RybENsYXNzID0gJ2lzLWFjdGl2ZScsXG5cdFx0XHRcdCAgICBjb25kaXRpb24gPSBtZW51TGlzdC5oYXNDbGFzcyggY3RybENsYXNzICk7XG5cdFx0XHRcdGlmIChjb25kaXRpb24pIHtcblx0XHRcdFx0XHRtZW51TGlzdC5hZGQoJCh0aGlzKSkucmVtb3ZlQ2xhc3MoIGN0cmxDbGFzcyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lbnVMaXN0LmFkZCgkKHRoaXMpKS5hZGRDbGFzcyggY3RybENsYXNzICk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0Ly8g66mU64m0IOumrOyKpO2KuCDsgr3snoVcblx0LGFwcGVuZE1lbnVMaXN0OiBmdW5jdGlvbigpe1xuXG5cdFx0aWYgKCAkKCcjbWVudScpLmxlbmd0aCA8PSAwICkge1xuXHRcdFx0bWVudUxpc3QgPSAkKCc8ZGl2IGlkPW1lbnUgLz4nKS5hcHBlbmQoICQoJzxkaXYgaWQ9bWVudS1saXN0IGNsYXNzPW92ZXJ0aHJvdyAvPicpLmFwcGVuZCggbWVudUxpc3QgKSApO1xuXHRcdFx0JCgnI3dyYXAnKS5sZW5ndGggPD0gMCA/ICQoJ2JvZHknKS5wcmVwZW5kKCBtZW51TGlzdCApIDogJCgnI3dyYXAnKS5wcmVwZW5kKCBtZW51TGlzdCApO1xuXHRcdH1cblx0XHQkKCcjbWVudS1saXN0JykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdHZhciBhSFJFRiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXHRcdFx0aWYgKCBhSFJFRi5pbmRleE9mKCc/ZGV2JykgPD0gLTEgKSB7XG5cdFx0XHRcdCQodGhpcykuYXR0cignaHJlZicsIGFIUkVGICsgJz9kZXYnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHQsZGltbTogZnVuY3Rpb24obXNnKXtcblx0XHRtc2cgPSBtc2cgfHwgJ+uCtOyaqeydtCDsl4bsirXri4jri6QuJztcblx0XHQkKCdib2R5JykuYXBwZW5kKFxuXHRcdFx0JCgnPGRpdiBjbGFzcz1cImRpbW1cIiAvPicpLmFwcGVuZChcblx0XHRcdFx0JChgPHNwYW4+JHttc2d9PHNwYW4vPjxidXR0b24gY2xhc3M9XCJjbG9zZVwiPlvri6vquLBdPC9zcGFuPjwvYnV0dG9uPmApXG5cdFx0XHQpXG5cdFx0KTtcblx0XHQkKCcuZGltbScpLm9uKCdjbGljaycsICcuY2xvc2UnLCBmdW5jdGlvbigpe1xuXHRcdFx0JCgnLmRpbW0nKS5yZW1vdmUoKTtcblx0XHR9KTtcblx0fVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250L2pzL2Rldi5qcyJdLCJzb3VyY2VSb290IjoiIn0=