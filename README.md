# vmkgc.github.io
KGC인삼공사


### 작업환경 세팅

1. [node.js 다운로드](https://nodejs.org/ko/)
2. nodejs 설치 확인 : node -v
3. npm i -g gulp webpack webpack-dev-server
4. npm i

** cmd는 반드시 관리자 권한으로 실행하여 설치하시기 바랍니다.


## 퍼블리싱 js 메서드 정리
### ui : 전역객체
> **1depth**: common, swiper, util

#### common
> 자주쓰이는 공통 메서드  

- commonNothing : 빈 함수, 오실행 방지
- emptyLinkFunc : a태그의 href값이 #으로 되있을 경우 빈 함수로 대체
- searchLayer : 검색 레이어 보여주기
- subnaviPositionSet : 서브메뉴 활성화된 메뉴로 위치 조정
- toggleAccordian : 아코디언 기능
- toggleNavi : gnb 각 메뉴별 펼침 기능

#### swiper
> [swiper 참고 사이트](http://idangero.us/swiper/demos/#.WGSV1LaLRhF)  
> jquery plugin  
> 슬라이드, 스크롤 컨테이너 등의 기능 적용시 사용  


 **사용법**
 
 html
 ```html
// 기본 골격 
<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
 ```
 javascript
 ```js
 ui.swiper.init('.swiper-container', {
    height: 300,
    mousewheelControl: false,
    direction: 'vertical',
    freeMode: true,
    loop: false,
    slidesPerView:  'auto'
});
// 실행 이후 옵션사항을 변동 할 때에는 
// $('셀렉터').data('manager') 를 이용해서 메서드 체이닝으로 값을 할당하거나 메서드를 호출하면 됩니다.

// 옵션에 값을 넣지 않아도 적용되는 기본 옵션은 아래 내용을 참고
/*
direction: 'horizontal',
loop: true,
pagination: '.swiper-pagination',
paginationType: 'fraction'
*/
 ```

#### util
> 필요 할 수 있는 작은 기능들을 모아놓은 메서드
> cutstr, deviceSize, imagePreloader, trim

##### ui.util.cutstr(str, limit)
> 문자열 자르기
- str: 자를 문자열 삽입 (string)
- limit: 표현할 글자수 입력 (number)

##### ui.util.deviceSize
> 디바이스 사이즈(넓이) 구하기
- ex) "device-size-320" <-- 이런 문자열이 반환됨.

##### ui.util.trim(str)
> 문자열 양쪽 공백 제거

##### ui.util.imagePreloader([string | array], callback)
> 이미지 로딩 후 콜백 실행해주는 메서드
- 이미지 경로를 문자열 또는 원소가 문자열인 배열을 첫번째 매개변수로 삽입
- 두번째 매개변수는 이미지 로딩 후 실행할 함수를 삽입

##### ui.util.isDevice(null)
> 기기 OS체크 메서드
사용법

```js
var isDevice = ui.util.isDevice();

// 1. 어떤 OS인지 체크하기
isDevice.check();
// return "ios" or "android"

//2. 안드로이드 판별
isDevice.android
//return [boolean]

//3. 안드로이드에서 진저브레드 판별
isDevice.gingerbread
//return [boolean]

//4. ios 판별
isDevice.ios
//return [boolean]
```

