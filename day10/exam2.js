/*예제 1: 기본 함수 선언 및 호출 '함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello 라는 이름의 함수를 정의하고, 그 함수를 호출하시오.*/
// 1) function  2) 함수명 3) ( 매개변수 )  4) { 실행문; } 
// 정의 
function sayHello( ){  // 매개변수가 없으므로 생략 
    console.log( "함수 호출 성공!" )
    return // return 값이 없으므로 return 뒤로 생략
} // f end 
sayHello( ) // 호출 

/*예제 2: 매개변수를 사용하는 함수, 임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오.*/
function printSum(  x , y ){ // 임의의 두 개의 숫자(number)를 매개변수로 받아
    z = x + y 
    console.log( z ) 
    return 
} // f end 
printSum( 5 , 10 ) // 15
printSum( 3 , 2 ) // 5

/*예제 3: 값을 반환(return)하는 함수, 임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.*/
function getWelcomeMessage( name ){ // 임의의 이름을 문자열(string)로 매개변수를 받아
    return `환영합니다, ${ name }님!`
} // f end 
let result3 = getWelcomeMessage( "유재석" ) // 함수를 호출한 결과를 변수에 저장하고
console.log( result3 ) // 그 변수를 콘솔에 출력하시오.

/*예제 4: 함수를 이용한 카운터, 0의 값을 가진 counter라는 전역 변수를 만드시오. 호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.*/
let counter = 0 // 0의 값을 가진 counter라는 전역 변수 , *함수 밖에 만들기* 
function increaseCount( ){
    counter += 1 // vs counter++ // 함수 밖에 변수를 함수 안에서 사용 가능 
    return
} // f end 
increaseCount() // 함수를 세 번 호출한 뒤
increaseCount()
increaseCount()
console.log( counter ) //  counter의 값을 콘솔에 출력 // 3

/*예제 5: for 반복문을 포함한 함수. 임의의 숫자 n을 매개변수로 받아, 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.*/
function printNumbers( n ){ // 임의의 숫자 n을 매개변수로 받아
    for( let i = 1 ; i <= n ; i++ ){ console.log(i) } // 1부터 n까지의 숫자를 콘솔 출력 
    return
} // f end 
printNumbers( 5 )


/*예제 6: prompt와 함수 활용, prompt를 이용해 사용자로부터 이름을 입력받으시오. 
입력받은 이름을 매개변수로 받아, 해당 이름이 저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오.*/
let 이름 = prompt( '이름 : ')
let userList = [ ]
function addUser( name ){ // 입력받은 이름을 매개변수로 받아
    userList.push( name ) // userList 전역 배열에 push
    return
}
addUser( 이름 )

/*예제 7: 배열을 매개변수로 전달, 임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오. */
function printFruits( nameList ){ // 임의의 이름 들이 담긴 배열을 매개변수로 받아
    for( let index = 0 ; index <= nameList.length - 1 ; index++ ){
        console.log( nameList[index] ) // index번째 값 출력 
    } // for end 
} // f end 
printFruits( ['사과' , '포도' , '바나나' ] ) // 임의의 이름 들이 담긴 배열

/*예제 8: Boolean 값 반환하기, 임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요. */
function isPositive( x ){       // 임의의 숫자 하나를 매개변수로 받아
    if( x > 0 ){ return true }  // 그 숫자가 0보다 크면 true반환
    else{ return false }        // 그렇지 않으면 false를 반환
}// f end 

/*예제 9: 전역 변수와 지역 변수 */
let globalText = '전역'; 
function printLocal( ){
    let localText = '지역';
    console.log( globalText ) // ok
    console.log( localText )  // ok 
} // f end 
console.log( globalText ) // ok
// console.log( localText ) // error : local is not defined

