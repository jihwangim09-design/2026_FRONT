// 중요 파트 사원내용

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
]


// ============================ 1열 ================================

let finaldcode = 3;

departmentPrint();
// [1] 부서 전체조회 함수
function departmentPrint() {
    let tbody = document.querySelector('.col-left table tbody');
    let html = "";
    
    for (let i = 0; i <= departmentList.length - 1; i++) {
        let department = departmentList[i];

        html += `<tr>
                    <td>${department.dname}</td>
                    <td class="action-links align-right">
                        <a href="#" class="link-edit" onclick="departmentUpdate(${department.dcode})">수정</a>
                        <a href="#" class="link-delete" onclick="departmentDelete(${department.dcode})">삭제</a>
                    </td>
                 </tr>`;
    }
    tbody.innerHTML = html;
}

// [2] 부서 등록 함수
function departmentAdd() {
    let input = document.querySelector('.col-left input[type="text"]');
    let dname = input.value;

    if (dname == "") {
        alert('부서명을 입력하세요.');
        return;
    }

    for (let i = 0; i <= departmentList.length - 1; i++) {
        if (departmentList[i].dname == dname) {
            alert('이미 존재하는 부서입니다.');
            return;
        }
    }

    let object = { dcode: finaldcode + 1, dname: dname };
    departmentList.push(object);
    finaldcode += 1;

    input.value = "";
    departmentPrint();
}

// [3] 부서 수정 함수
function departmentUpdate(dcode) {
    for (let i = 0; i <= departmentList.length - 1; i++) {
        if (departmentList[i].dcode == dcode) {
            let newdname = prompt('수정할 부서명을 입력하세요.', departmentList[i].dname);
            
            if (newdname == null || newdname == "") { 
                return; 
            }
            
            departmentList[i].dname = newdname;
            departmentPrint();
        
            return;
        }
    }
}

// [4] 부서 삭제 함수
function departmentDelete(dcode) {
    for (let i = 0; i <= employeeList.length - 1; i++) {
        if (employeeList[i].dcode == dcode) {
            alert('해당 부서에 소속된 사원이 있습니다.');
            return; 
        }
    }

    for (let i = 0; i <= departmentList.length - 1; i++) {
        if (departmentList[i].dcode == dcode) {
            departmentList.splice(i, 1);
            alert('삭제 성공');
            departmentPrint();
            return;
        }
    }
}

//     <!-- 2열: 사원 등록 및 사원 목록 --> ===========================================

// [1] 전체조회 함수
employeePrint();
function employeePrint() {
    // 1. 어디에
    let tbody = document.querySelector(".employee-table tbody");
    // 2. 무엇을 , 배열내 모든 객체(자료) 들을 HTML(문자열)형식 구성
    let html = "";
    for (let i = 0; i <= employeeList.length-1; i++) {
        let employee = employeeList[i];
        let dname = ""
        for (let j = 0; j <= departmentList.length-1; j++) {
            if (departmentList[j].dcode == employee.dcode) {
                dname = departmentList[j].dname;
                break;
            }
        }
        html += `<tr>
                    <td><img src="${employee.eimg}" class="profile-img"></td>
                    <td>${employee.name}</td>
                    <td>${dname}</td>
                    <td>${employee.position}</td>
                    <td class="action-links align-right">
                        <a href="#" class="updateBtn"onclick="employeeUpdate(${employee.ecode}); ">수정</a>
                        <a href="#" class="deleteBtn"onclick="employeeDelete(${employee.ecode}); ">삭제</a>
                    </td>
                </tr>
                 `;
    } // for end 
    // 3. 출력
    tbody.innerHTML = html;
}

// [2] 삭제 함수 
function employeeDelete(ecode){
    for( let i = 0 ; i <= employeeList.length-1 ; i++ ){
        if( employeeList[i].ecode == ecode ){
            employeeList.splice( i , 1 ); // 2. 배열에서 요소 삭제 . splice( 인덱스번호 , 개수 )
            alert('삭제 성공');
            employeePrint() // 3. 조회구역 최신화
            return 
        } // if end 
    } // for end 
} // f end 
// [3] 수정 함수
function employeeUpdate(ecode){
    // 1. 수정할 ecode의 사원번호를 배열에서 찾는다.
    for( let i = 0 ; i <= employeeList.length-1 ; i++ ){
        if( employeeList[i].ecode == ecode ){
            let newEname = prompt('수정할 사원명 입력하세요.')
            let newPosition = prompt('수정할 직급 입력하세요.')
            employeeList[i].name = newEname 
            employeeList[i].position = newPosition
            employeePrint(); return;
        } //if end 
    } // for end 
} // f end 

// [4] 등록 함수 
let finalEcode = employeeList[employeeList.length - 1].ecode; // 현재 마지막으로 사용한 사원코드 
function employeeAdd( ){
    // 1. 입력받은 값 가져오기 
    let name = document.querySelector('.ename').value
    let position = document.querySelector('.eposition').value
    let dname  = document.querySelector('.dname').value
    let image = document.querySelector('.eimg').files[0]  
         if(name ==''){
            alert("사원명을 입력해주세요");
            return;
        }
        if(position ==''){
            alert("직급명을 입력해주세요");
            return;
        }
        
    // 부서번호 찾기
    let dcode = 0
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].dname == dname) {
            dcode = departmentList[i].dcode
            break;
        }
    }
    

    let object = {ecode : finalEcode+1 ,name : name, dcode : dcode ,position : position, 
        eimg : image == undefined ?'https://placehold.co/100x100': URL.createObjectURL(image)
    }
    employeeList.push(object);
    alert('등록성공');
    employeePrint();
}


// ============================== 3열 ==========================================

// 휴가신청 ====================================================================================================
vacationPrint()

//사원 휴가신청 데이터 변경 시 업데이트 (READ)
function vacationPrint (){
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

// 사원 휴가 신청 카드에서 신청버튼 클릭 시
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
    
    vacationPrint()
}

// 사원 휴가내역 삭제
function vacationDelete(vcode){
    console.log(vcode)
    for(let i = 0; i <= vacationList.length - 1; i++){
        if(vacationList[i].vcode == vcode){
            vacationList.splice(i,1)
            alert("휴가 내역을 삭제했습니다.")

            vacationPrint()
            return;
        }
    }
}