// ===== 1. 학과정보 =====
const departments = [
  { id: 1, name: '정보통신공학과' },
  { id: 2, name: '경영학과' },
  { id: 3, name: '유아교육과' },
];

// ===== 2. 학생 =====
// majorId로 departments의 id를 참조
const students = [
  { id: 1, name: '김철수', majorId: 1 },
  { id: 2, name: '이영희', majorId: 2 },
  { id: 3, name: '박지성', majorId: 3 },
];

// ===== 3. 교과목정보 =====
// departmentId로 departments의 id를 참조
const courses = [
  { id: 1, name: '프로그래밍언어', departmentId: 1 },
  { id: 2, name: '회계원리', departmentId: 2 },
  { id: 3, name: '유아교육개론', departmentId: 3 },
  { id: 4, name: '웹프로그래밍', departmentId: 1 },
];

// ===== 4. 수강신청내역 =====
// studentId로 students의 id를, courseId로 courses의 id를 참조
const enrollments = [
  { id: 1, studentId: 1, courseId: 1 },
  { id: 2, studentId: 1, courseId: 4 },
  { id: 3, studentId: 2, courseId: 2 },
  { id: 4, studentId: 3, courseId: 3 },
];


// ================================
// 조회 (for문 + if문만 사용)
// ================================

// 사용자한테 조회하고 싶은 학생 id를 직접 입력받는다
// prompt()는 입력받은 값을 항상 "문자열"로 주기 때문에 Number()로 숫자로 바꿔줌
let targetStudentId = Number(prompt('학생 id를 입력하세요 (1~3)'));


// --- 1) 입력받은 학생의 학과 찾기 ---

// 아직 못 찾았으니 일단 0으로 비워둔 그릇 (학과 id를 담을 예정)
let foundMajorId = 0;

// students 배열을 처음부터 끝까지 한 명씩 확인
for (let i = 0; i < students.length; i++) {
  // 지금 보고 있는 학생의 id가 방금 입력받은 targetStudentId랑 같은지 비교
  if (students[i].id === targetStudentId) {
    // 같으면 그 학생의 majorId(소속 학과 id)를 꺼내서 저장
    foundMajorId = students[i].majorId;
  }
}

// foundMajorId(숫자)를 실제 "학과 이름"으로 바꿔줄 그릇
let majorName = '';

// departments 배열을 처음부터 끝까지 확인
for (let i = 0; i < departments.length; i++) {
  // 지금 보고 있는 학과의 id가 foundMajorId랑 같은지 비교
  if (departments[i].id === foundMajorId) {
    majorName = departments[i].name;
  }
}

console.log(targetStudentId + '번 학생의 학과:', majorName);


// --- 2) 위에서 찾은 학과(foundMajorId)가 개설한 과목 목록 ---
// 중요: targetDeptId를 새로 1이라고 고정하지 않고, 1번에서 이미 찾은 foundMajorId를 그대로 재사용한다
// 이렇게 해야 "입력한 학생 → 그 학생 학과 → 그 학과 과목" 순서로 값이 이어짐
let targetDeptId = foundMajorId;

console.log(majorName + ' 개설 과목:');

// courses 배열을 처음부터 끝까지 한 과목씩 확인
for (let i = 0; i < courses.length; i++) {
  // 이 과목이 targetDeptId(방금 찾은 학과)의 과목인지 확인
  if (courses[i].departmentId === targetDeptId) {
    console.log('-', courses[i].name);
  }
}


// --- 3) 입력받은 학생이 실제로 신청한 과목 목록 ---
// 주의: 2번은 "학과가 개설한 전체 과목"이고, 3번은 "그 학생이 실제로 신청한 과목"이라 서로 다름
console.log(targetStudentId + '번 학생의 수강신청 목록:');

// enrollments(수강신청내역) 배열을 처음부터 끝까지 한 건씩 확인
for (let i = 0; i < enrollments.length; i++) {
  // 이 신청 건의 studentId가 입력받은 targetStudentId와 같은지 확인
  if (enrollments[i].studentId === targetStudentId) {

    // 같다면, 이 신청 건에 적힌 courseId(무슨 과목을 신청했는지)를 꺼낸다
    let thisCourseId = enrollments[i].courseId;

    // courses 배열을 뒤져서 thisCourseId랑 id가 같은 과목의 이름을 찾는다
    for (let j = 0; j < courses.length; j++) {
      if (courses[j].id === thisCourseId) {
        console.log('-', courses[j].name);
      }
    }
  }
}


// --- 4) 특정 과목의 수강생 목록 (과목 id도 입력받기) ---
let targetCourseId = Number(prompt('수강생을 조회할 과목 id를 입력하세요 (1~4)'));

// 입력한 과목 id를 과목 "이름"으로 먼저 바꿔서 출력 문구에 쓰기 위함
let targetCourseName = '';
for (let i = 0; i < courses.length; i++) {
  if (courses[i].id === targetCourseId) {
    targetCourseName = courses[i].name;
  }
}

console.log(targetCourseName + ' 수강생:');

// enrollments 배열을 처음부터 끝까지 한 건씩 확인
for (let i = 0; i < enrollments.length; i++) {
  // 이 신청 건의 courseId가 입력받은 targetCourseId와 같은지 확인
  if (enrollments[i].courseId === targetCourseId) {

    // 같다면, 이 신청 건에 적힌 studentId(누가 신청했는지)를 꺼낸다
    let thisStudentId = enrollments[i].studentId;

    // students 배열을 뒤져서 thisStudentId랑 id가 같은 학생의 이름을 찾는다
    for (let j = 0; j < students.length; j++) {
      if (students[j].id === thisStudentId) {
        console.log('-', students[j].name);
      }
    }
  }
}