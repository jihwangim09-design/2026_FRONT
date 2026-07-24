let vacationList = [ 
{ 'vcode': 1, 'ecode': 1, 'name': '김민준', 'startDay': '2025-08-04', 'endDay': '2025-08-04', 'reason': '병원 진료' },
{ 'vcode': 2, 'ecode': 2, 'name': '이서연', 'startDay': '2025-07-21', 'endDay': '2025-07-25', 'reason': '여름 휴가' }
]

let employeeList = [ 
{ 'ecode' : 1, 'eimg' : 'https://placehold.co/100x100', 'name' : '김민준', 'dcode' : 1, 'position': '선임 개발자' } ,
{ 'ecode' : 2, 'eimg' : 'https://placehold.co/100x100', 'name' : '이서연', 'dcode' : 2, 'position': '수석 디자이너' } ,
{ 'ecode' : 3, 'eimg' : 'https://placehold.co/100x100', 'name' : '박도윤', 'dcode' : 3, 'position': '팀장' }
] // 사원 목록							


let departmentList = [
{ 'dcode': 1, 'dname': '개발팀' },
{ 'dcode': 2, 'dname': '디자인팀' },
{ 'dcode': 3, 'dname': '기획팀' }
] // 부서 목록

// let departmentStaffList = [
//     { 'dcode': 1, 'dname': '개발팀', 'ecode': 1, 'name': '김민준' },
//     { 'dcode': 2, 'dname': '디자인팀', 'ecode': 2, 'name': '이서연' },
//     { 'dcode': 3, 'dname': '기획팀', 'ecode': 3, 'name': '박도윤' }
// ]

// 1열 ==========================================================================================================================================================================

// [1] 전체조회 함수 
departmentPrint()
function departmentPrint() {
    let tbody = document.querySelector('.col-left > .card > table > tbody')
    let html = ""
    for (let i = 0; i <= departmentList.length - 1; i++) {
        let department = departmentList[i]
        html += `<tr>
              <td>${departmentList[i].dname}</td>
              <td class="action-links align-right">
                <a href="#" class="link-edit" onclick = 'departmentUpdate(${departmentList[i].dcode})'>수정</a>
                <a href="#" class="link-delete" onclick = 'departmentDelete(${departmentList[i].dcode})'>삭제</a>
              </td>
            </tr>`
    }
    tbody.innerHTML = html
}

let finaldcode = 3; //마지막으로 쓴 부서번호(전역변수)
function departmentAdd() {
    let department = document.querySelector('.col-left > .card > .dept-input-group > input').value
    if (department == "") {
        alert('부서명을 입력하세요.')
        return
    }

    for (let i = 0; i <= departmentList.length - 1; i++) {
        if (departmentList[i].dname == department) {
            alert('이미 존재하는 부서입니다.')
            return
        }
    }
    finaldcode += 1
    let object = { dcode: finaldcode, dname: department }
    departmentList.push(object)
    console.log(object)

    department.value = ""
    departmentPrint()
    employeePrint()
    vacationPrint()
}
// [3] 수정 함수
function departmentUpdate(dcode) {
    for (let i = 0; i <= departmentList.length - 1; i++) {
        if (departmentList[i].dcode == dcode) {
            let newdname = prompt('수정할 부서명을 입력하세요.')
            if (newdname == null || newdname == "") { return }
            departmentList[i].dname = newdname
            departmentPrint()
            employeePrint()
            vacationPrint()
            return
        }
    }
}

function departmentDelete(dcode) {
    for(let index = 0; index <= employeeList.length - 1; index++){
        if (dcode == employeeList[index].dcode) {
            alert("부서에 소속되어 있는 인원이 존재합니다.")
            return;
        }
    }
    for (let i = 0; i <= departmentList.length - 1; i++) {
        if (departmentList[i].dcode == dcode) {
            departmentList.splice(i, 1)
            alert('삭제 성공')
            departmentPrint()
            employeePrint()
            vacationPrint()
            return
        }
    }
}

// 2열 ==========================================================================================================================================================================

// [1] 전체조회 함수 
employeePrint() // JS가 열릴때 최초 1번 실행 
function employeePrint() {
    // ---------------------[사원 추가 카드에 select 프린트(부서 변동 실시간 변동 반영)]----------------------------------------------------
    let options = ''
    let selectValues = document.querySelector(".col-center > .card > form > .input-row > .form-group > select")
    for(let i = 0; i <= departmentList.length - 1; i++){
        options += `<option>${departmentList[i].dname}</option>`
    }
    selectValues.innerHTML = options


    // -----------------------[사원 목록 프린트]---------------------------------------------------------
    // 1. 어디에
    let tbody = document.querySelector('.col-center > .card.sub-section> table > tbody')       // 해보고 안되면 #main table body로 수정.
    // 2. 무엇을 , 배열내 모든 객체(자료) 들을 HTML(문자열)형식 구성
    let html = ""
    for (let i = 0; i <= employeeList.length - 1; i++) {
        let department = employeeList[i].dcode
        for (let j = 0; j <= departmentList.length - 1; j++){
            if (department == departmentList[j].dcode) { department = departmentList[j].dname }
        }
        html += `<tr>
                    <td><img src="${employeeList[i].eimg}" alt="프로필" class="profile-img"></td>
                    <td>${employeeList[i].name}</td>
                    <td>${department}</td>
                    <td>${employeeList[i].position}</td>
                    <td class="action-links align-right">
                        <a href="#" class="updateBtn" onclick='employeeUpdate(${employeeList[i].ecode})'>수정</a>
                        <a href="#" class="deleteBtn" onclick='employeeDelete(${employeeList[i].ecode})'>삭제</a>
                    </td>
                </tr>`
    } // for end 
    // 3. 출력 
    tbody.innerHTML = html
} // F END 

// [2] 삭제 함수 , 삭제할 사원번호를 매개변수로 받아온다.
function employeeDelete(ecode) {
    // 1. 삭제할 ecode의 사원번호를 배열에서 찾는다.
    for (let i = 0; i <= employeeList.length - 1; i++) {
        if (employeeList[i].ecode == ecode) {
            employeeList.splice(i, 1); // 2. 배열에서 요소 삭제 . splice( 인덱스번호 , 개수 )
            alert('삭제 성공');
            departmentPrint();
            employeePrint(); 
            vacationPrint();// 3. 조회구역 최신화
            return // 주의할점 구분 : return function{}탈출  VS break for{}탈출
        } // if end 
    } // for end 
} // f end 

// [3] 수정 함수
function employeeUpdate(ecode) {
    // 1. 수정할 ecode의 사원번호를 배열에서 찾는다.
    for (let i = 0; i <= employeeList.length - 1; i++) {
        if (employeeList[i].ecode == ecode) {
            let newEname = prompt('수정할 사원명 입력하세요.')
            let newDname = prompt('수정할 부서명 입력하세요.')
            let newPosition = prompt('수정할 직급 입력하세요.')
            for(let j = 0; j <= departmentList.length - 1; j++){
                if (newDname == departmentList[j].dname){
                    newDname = departmentList[j].dcode
                }
            }
            
            employeeList[i].name = newEname // 2. 배열에서 특정한 요소값 사원이름 , 부서명,  직급
            employeeList[i].dcode = newDname
            employeeList[i].position = newPosition
            departmentPrint(); employeePrint(); vacationPrint(); return;
        } //if end 
    } // for end 
} // f end 

// [4] 등록 함수 
let finalDcode = 3 // 현재 마지막으로 사용한 부서코드 
function employeeAdd() {
    // 1. 입력받은 값 가져오기 
    let name = document.querySelector('.ename').value
    let department = document.querySelector('.col-center > .card > form > .input-row > .form-group > select').value
    let position = document.querySelector('.eposition').value
    let image = document.querySelector('.eimg').files[0] // + 첨부파일은 .files[0] 속성에서 첨부파일의 첫번째 자료 가져오기 
    console.log(name, department, position, image)
    
    // 꼼꼼히 ! , 유효성판단/검사
    if (department == '부서를 선택하세요') {
        alert("부서를 선택하십시오.");
        return;
    }

    // 2. 입력받은 값들을 객체화 , 중간검사 : console.log()를 이용한 변수/자료 확인
    // pcode : 제품식별코드로 사용자가 지정하지 않고 *자동번호 부여* , 마지막사용된 제품코드에 + 1
    // pdate : 현재 시스템 날짜/시간 함수 , new Date()
    // 현재연도 : new Date().getFullYear()  ,  현재월(0:1월~11:12월) : new Date().getMonth() , 현재일 : new Date().getDate()
    console.log( new Date().getFullYear() , new Date().getMonth() , new Date().getDate()  ) 
    let object = {
        name: name, dname: department, position: position,
        //만약에 첨부파일 선택이 없으면(undifined)
        eimg: image == undefined ? 'https://placehold.co/100x100' : URL.createObjectURL(image),      //  URL.createObjectURL ( 객체 ) 객체 (가상)주소 
        dcode: finalDcode + 1
    }
    // 3. 배열 저장  , **마지막 부서코드 1 증가** 
    employeeList.push(object); finalDcode += 1
    // 4. 성공  , 화면 최신화 
    alert('등록성공');
    departmentPrint();
    employeePrint();
    vacationPrint();
} // f end




/* ================================================== [3열] =======================================================================================================*/

// 휴가신청 ====================================================================================================
vacationPrint()

//사원 휴가신청 데이터 변경 시 업데이트 (READ)
function vacationPrint (){

    // ---------------------[휴가 신청 추가 카드에 select 프린트(부서 변동 실시간 변동 반영)]----------------------------------------------------
    let options = ''
    let selectValues = document.querySelector(".col-right > .card > form > .form-group > select")
    for (let i = 0; i <= employeeList.length - 1; i++) {
        options += `<option>${employeeList[i].name}</option>`
    }
    selectValues.innerHTML = options

    //=====================================================================================================
    // 표시할 곳 -> 사원 휴가신청 전체 목록 카드
    let fbody = document.querySelector( '.col-right > .card.sub-section')
    let html = ' '
    for (let i = 0; i <= vacationList.length - 1; i++){
        // 뭘 표시할거냐 -> vacationList 안에 있는 거 전부 다
        html += `
                <div class="vacation-card">
                    <div class="user-name">${vacationList[i].name}</div>
                    <div class="date">${vacationList[i].startDay} ~ ${vacationList[i].endDay}</div>
                    <div class="reason">사유: ${vacationList[i].reason}</div>
                    <button type="button" class="btn-cancel" onclick = 'vacationDelete(${vacationList[i].vcode})'>신청취소</button>
                </div>
                `

    }
    fbody.innerHTML = html
}

// 사원 휴가 신청 카드에서 신청버튼 클릭 시(CREATE)
function vacationAdd () {
    // 1. 입력받은 값을 가져오기 ---------------------------------------------------------------------------------
    // 사원 이름
    let inputName = document.querySelector('.col-right > .card > form > .form-group > select').value
    
    if (inputName == '휴가 신청 사원을 선택하세요') {alert('사원을 선택해야 합니다.'); return;}


    // 휴가기간 시작일, 종료일
    let inputDay = document.querySelectorAll('.col-right > .card > form > .input-row > .form-group > input')
    let outputDay = []
    for(let i = 0; i <= inputDay.length - 1; i++){
        outputDay.push(inputDay[i].value) //outputDay[0] = 시작일 ~ outputDay[1] = 복귀일
    }
    if (outputDay[0] == '' || outputDay[1] == '') { alert('휴가 날짜를 설정해야 합니다.'); return; }

    //휴가사유
    let inputReason = document.querySelector('.col-right > .card > form > .form-group > input').value
    if ( inputReason == '') { alert('휴가 사유를 작성해야 합니다.'); return; }

    console.log(name, outputDay[0], outputDay[1], inputReason)

    //2. 신청사원 이름 키 가져오기(외래키: ecode) ---------------------------------------------------------------------------------
    let ecode = -1;
    for(i = 0; i <= employeeList.length - 1; i++){
        if (employeeList[i].name == inputName){ ecode = employeeList[i].ecode }
    }


    //3. 입력받은 값을 객체화하기 ---------------------------------------------------------------------------------
    let lastVcode = vacationList[vacationList.length - 1].vcode //마지막 휴가내역코드(key)
    // console.log(lastVcode)

    let newVacation = {
        'vcode': lastVcode + 1, 'ecode': ecode, 'name': inputName, 'startDay': outputDay[0], 'endDay': outputDay[1], 'reason': inputReason
    }

    console.log(newVacation)
    vacationList.push(newVacation)
    lastVcode ++ // 신청내역 식별자 1 더하기
    departmentPrint()
    employeePrint()
    vacationPrint()
    
}

// 사원 휴가내역 삭제(DELETE)
function vacationDelete(vcode){
    console.log(vcode)
    for(let i = 0; i <= vacationList.length - 1; i++){
        if(vacationList[i].vcode == vcode){
            vacationList.splice(i,1)
            alert("휴가 내역을 삭제했습니다.")

            departmentPrint()
            employeePrint()
            vacationPrint()
            return;
        }
    }
}