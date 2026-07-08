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