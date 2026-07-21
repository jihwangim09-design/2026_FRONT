/*
    DOM : Document(HMTL문서), Object(객체), Model(표준)
        -html 언어는 객체가 없다. 즉 변수/연산/함수 등등 없어서 제어/조작 불가능
        -JS 언어는 객체가 있다. 즉 JS가 HTML 제어/조작 한다.
        1. 내장객체 : document , JS가 HTML 구조 (객체로) 갖는다 , JS가 포함된 HTMl
        2. 주요속성 : .querySelector( "css선택자" ) : 선택자의 마크업을 객체로 변환
*/

// [1] HTML 전체 DOM 확인
console.log ( document )
// [2] HTML 내 특정한 마크업 확인
const div = document.querySelector( 'div' ) //한개씩 가져올떄는 querySelector
console.log(div)
const box2 = document.querySelector( '.box2' ) 
console.log(box2)
const box3 = document.querySelector( '#box3' ) 
console.log(box3)
const divList = document.querySelectorAll( 'div' ) //여러개 가져올 떄는 querySelectorAll
console.log( divList )
// [3] 가져온 DOM 마크업 객체에 속성
const divHTML = div.innerHTML // <마크업> inner  </마크업> 마크업과 마크업 사이를 inner
console.log( divHTML )
div.innerHTML = "상자1" // 대입을 하면 수정을 하는것 이렇게 하면 html이 박스1에서 상자1로 변경
// [4] 입력받은 값 가져오는 속성
const name = document.querySelector('.name')
const value = name.value        // <input value="" /> 인풋박스에 밸류를 가져옴?
console.log (value)
name.value = "제목입력해!"
// [5] 함수활용 : 입력받은 값 함수내 가져오기
function 등록함수( ){
    //1. 특정한 마크업DOM 가져오기
    const 입력마크업 = document.querySelector('.title')
    //2. 가져온 마크업DOM 에서 value 속성 가져오기
    const 입력받은값 = 입력마크업.value;
    //3. 특정한 위치에 출력
    box2.innerHTML = 입력받은값
} // f end
// [6] CSS활용, .style = "css문법"
// 1. 특정한 마크업 DOM 가져오기
const 제목마크업 = document.querySelector('.title2')
// 2. 가져온 마크업DOM 에서 style 속성 대입하기
제목마크업.style = "color:red; font-size:5px"


/*예제 1: 요소 내용 변경하기
id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.*/

/*예제 2: 사용자 입력값 가져와서 표시하기
id가 'usernameInput'인 <input>에 이름을 입력하고 '확인' 버튼(id: 'submitBtn')을 클릭하면, id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.*/

/*예제 3: 요소 스타일 동적으로 변경하기
'스타일 변경' 버튼(id: 'styleBtn')을 클릭하면, id가 'colorBox'인 <div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.*/

/*예제 4: CSS 클래스 토글하기 (다크 모드 예시)
'테마 변경' 버튼(id: 'themeBtn')을 클릭할 때마다 <body> 태그에 'dark-mode' 클래스를 추가하거나 제거(토글)하시오. */

/*예제 5: 특정 HTML 요소 제거하기
'박스 삭제' 버튼(id: 'removeBtn')을 클릭하면, id가 'targetBox'인 <div> 요소를 문서에서 제거하시오. */

/*예제 6: 여러 요소에 동일한 작업 반복하기*/
클래스가 'item'인 모든 <p> 요소의 글자색을 'green'으로, 글자 두께를 'bold'로 변경하시오. */

/*예제 7: 이미지 소스(src) 변경하기 , https://placehold.co/ 
'이미지 변경' 버튼(id: 'changeImgBtn')을 클릭하면, id가 'mainImage'인 <img> 요소의 src 속성을 'https://placehold.co/600x400/red/white'로 변경하시오. */

/* 예제 8 : select 에서 선택한 option값 console 출력하기. */

/* 예제 9 : input 에서 입력받은 값을 전역 배열에 저장하고 배열 상태를 출력하기. */