// 1. 회원가입 함수
function signup() {
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;

    // localStorage에서 기존 데이터 가져오기
    let memberString = localStorage.getItem('memberList');
    let memberList = [];
    if (memberString != null) {
        memberList = JSON.parse(memberString);
    }

    // 번호(no) 자동 부여 (마지막 번호 + 1)
    let no = 1;
    if (memberList.length > 0) {
        no = memberList[memberList.length - 1].no + 1;
    }

    // 객체 생성 및 배열에 추가
    let newMember = { 'no': no, 'id': id, 'pw': pw };
    memberList.push(newMember);

    // localStorage에 문자열로 변환하여 저장
    localStorage.setItem('memberList', JSON.stringify(memberList));
    
    alert('회원가입이 완료되었습니다.');
    document.querySelector('.signId').value = '';
    document.querySelector('.signPw').value = '';
}

// 2. 로그인 함수
function login() {
    let id = document.querySelector('.loginId').value;
    let pw = document.querySelector('.loginPw').value;

    // localStorage에서 기존 데이터 가져오기
    let memberString = localStorage.getItem('memberList');
    let memberList = [];
    if (memberString != null) {
        memberList = JSON.parse(memberString);
    }

    // 배열을 돌면서 아이디와 비밀번호 비교
    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].id == id && memberList[i].pw == pw) {
            alert('로그인 성공');
            return; 
        }
    }

    // 일치하는 정보가 없을 경우
    alert('동일한 회원정보가 없습니다. 로그인 실패');
}