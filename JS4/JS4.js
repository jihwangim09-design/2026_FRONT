let departmentStaffList = [ { 'dcode' : 1 , 'dname' : '개발팀'  }, 
                            { 'dcode' : 2 , 'dname' : '디자인팀' },
                            { 'dcode' : 3 , 'dname' : '기획팀' }
                        ]
let vacationList = [ 
{ 'vcode': 1, 'ecode': 1, 'name': '김민준', 'startDay': '2025-08-04', 'endDay': '2025-08-04', 'reason': '병원 진료' },
{ 'vcode': 2, 'ecode': 2, 'name': '이서연', 'startDay': '2025-07-21', 'endDay': '2025-07-25', 'reason': '여름 휴가' }
] // 휴가신청 목록
let employeeList = [ 
    { 'ecode' : 1 , 'eimg' :'https://placehold.co/100x100', 'name' : '김민준' , 'dcode' : 1 , 'position': '선임 개발자'} , 
    { 'ecode' : 2 , 'eimg' :'https://placehold.co/100x100', 'name' : '이서연' , 'dcode' : 2 , 'position': '수석 디자이너'} ,
    {'ecode' : 3 , 'eimg' :'https://placehold.co/100x100', 'name' : '박도윤' , 'dcode' : 3 , 'position': '팀장'}
] // 사원 목록

let finaldcode = 2;

// [1] 전체조회 함수 
departmentPrint( ) // JS가 열릴때 최초 1번 실행 
function departmentPrint( ){
    // 1. 어디에
    let tbody = document.querySelector( '#depf-body' )
    // 2. 무엇을 , 배열내 모든 객체(자료) 들을 HTML(문자열)형식 구성
    let html = ""
    for( let i = 0 ; i <= departmentList.length-1 ; i++ ){
        let department = departmentList[i] // i번째 제품객체 1개 
        html += `<tr> 
                    <td> ${ department.dname} </td> 
                    <td> <button class="updateBtn" onClick="departmentupdate"( ${ department.dcode } )">수정</button> </td>
                    <td> <button class="updateBtn1" onClick="departmentdelete"( ${ department.dname } )">삭제</button> </td>
                 </tr>`
    } // for end 
    // 3. 출력 
    tbody.innerHTML = html
} // F END 


function departmentAdd( ){
    let input = document.querySelector('.deftname.Input')
    let dname = input.value

    if (dname == "")
    alret('부서명을 입력하세요.')
    return;

    for ( let i = 0 ; i <= departmentList.length-1 ; i++ ){
        if (departmentList[i].dname == dname)
            alert('이미 존재하는 부서입니다.')
        return;
    }

    let welcomedcode = { dcode: finaldcode+1, dname: dname}
    departmentList.push(welcomedcode)
    finaldcode += 1

    input.value = ""

    departmentPrint()

}
// [3] 수정 함수
function departmentupdate( dcode ){
    // 1. 수정할 pcode의 제품객체를 배열에서 찾는다.
    for( let i = 0 ; i <= departmentList.length-1 ; i++ ){
        if( departmentList[i].dcode == dcode ){
            let newdname = prompt('수정할 부서명을 입력하세요.' ,departmentList[i].dname)
            epartmentList[i].dcode = newdname // 2. 배열에서 특정한 요소값 수정 
            departmentStaffList[i].dname = newdname
            departmentPrint()
            return;
        } 
    } 
}

function departmentDelete(dcode) {
    for (let i = 0 ; i <= departmentList.length-1 ; i++) {
        if (departmentList[i].dcode == dcode) {
            departmentList.splice(i, 1)
            alert('삭제 성공')
            departmentPrint()
            return;
        }
    }
}
