


//문제1
//손님에게 이름과 원하는 음료, 그리고 수량을 순서대로 물어본 후, 모든 정보를 조합하여 
//바리스타가 볼 수 있도록 콘솔에 주문 내역을 출력하는 프로그램을 만드세요.


console.log("[주문 접수]");

alert("안녕하세요 손님의 성함을 입력해주세요!");
console.log("이름")
let username = prompt();
console.log(username)

alert("드시고 싶은 음료 이름을 입력해주세요!");
console.log("메뉴")
let foodname = prompt();
console.log(foodname)

alert("수량을 입력해주세요!");
console.log("수량")
let quantity = prompt();
console.log(quantity)

document.write("<h1>주문 정보</h1>");
document.write("이름 : " + username + "<br />");
document.write("메뉴 : " + foodname + "<br />");
document.write("수량 : " + quantity + "<br />");


//- 문제2 사용자에게 이름과 오늘 한 운동 종류, 그리고 운동 시간(분) 을 순서대로 물어본 후, 입력된 정보를 바탕으로 콘솔에 오늘의 운동 기록을 보기 좋게 출력하는 프로그램을 만드세요.



console.log("[운동 기록]");

console.log("이름");
let 이름 = prompt ( "성함을 적어주세요" )
console.log( 이름 )
console.log("")
console.log("운동종류");
let 운동 = prompt ( "어떤 운동을 하시나요?" )   
console.log( 운동 )
console.log("")
console.log("운동시간");
let 시간 = Number( prompt ( "운동을 얼마나 하시나요?" ) )
console.log( 시간 )
console.log("")
console.log("칼로리");
let 칼로리 = (시간 * 7)
console.log( 칼로리 )


