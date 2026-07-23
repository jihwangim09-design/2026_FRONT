/*
    QueryString : URL 웹 주소 상에 매개변수 사용
        - 페이지 이동 간에 매개변수 값 전달 , ** 주로 식별자 자료 또는 CSS 식별자 **
        - URL ? 매개변수명=값 & 매개변수=값
        - 사용법
        - 1) new URLSearchParams (location.search) : queryString 객체 반환
        - 2) .get( '매개변수명' ) : queryString 내 특정한 매개변수명의 값 반환

*/
// [1] JS에서 URL 정보 객체 호출
let url = new URLSearchParams (location.search);
console.log( url )
// http://127.0.0.1:5500/day13/exam2.html?name=유재석
let name = url.get('name')
console.log( name ) // 링크1 //링크3



// [2] 페이지 이동하는 방법
// 1) <a href=" URL?매개변수=값"> 링크 </>
let pcode = url.get( 'pcode' ); //링크2
let page = url.get( 'page' );
console.log( pcode , page )
// 2) location.href = "URL?매개변수=값" 해당하는 위치로 이동 가능
function 링크함수() {
    location.href = "exam2.html?name=강호동"
}

/*
    인터벌 : 특정한 주기에 따라 코드를 반복 실행
        -사용법
        인터벌객체 = setInterval( 함수명, 주기 ) 반복할함수명을 넣는다
                -> 함수명에 () 소괄호 넣지 않는다!
                -> 밀리초(1/1000) : 1000 -> 1초 , 반복 주기
                clearInterval( 인터벌객체 )

*/

 
let value = 0;
function 증가함수() {
    value += 1
    document.querySelector('#box1').innerHTML = value
} // f end
// [1] 특정한 함수를 주기에 따라 반복 실행
setInterval( 증가함수 , 1000 )

function 시계함수() {
    let today = new Date() // 1) 현재 날짜/시간을 가졍노다
    let hour = today.getHours()      // 2) 시
    let minute = today.getMinutes() // 2-1) 분
    let second = today.getSeconds() // 2-2) 초
    
    let time = `${hour} : ${minute} : ${second < 10 ? "0"+second : second}`    // 3) 시 분 초 조합
    // ${second < 10 ? "0"+second : second} 이거는 초 단위가 10초보다 작으면 앞에 0을 붙혀서 01 02 03 이렇게 표시함
    document.querySelector('#box2').innerHTML = time    //4) html 출력
}
setInterval( 시계함수 , 1000 )

// [3] 인터벌 시작 / 종료
let time = 0;       // 초 저장하는 변수 
let timeInter;      // 인터벌 저장하는 변수
function 타이머시작(){
    timeInter = setInterval( 타이머함수 , 1000)
} // f end

function 타이머함수(){
    time++;
    document.querySelector('#box3').innerHTML = time
} // f end

function 타이머종료(){
    clearInterval (timeInter)
} // f end