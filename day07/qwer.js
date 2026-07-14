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
// 5. 실제 수강신청 하기 (새 데이터 추가 기능)
// ================================
console.log("--- 새로운 수강신청 하기 ---");

// 누구(학생)가 어떤 과목(교과목)을 신청할지 입력받기
let applyStudentId = Number(prompt('수강신청할 학생 id를 입력하세요 (예: 1~3)'));
let applyCourseId = Number(prompt('신청할 과목 id를 입력하세요 (예: 1~4)'));

// enrollments(수강신청내역) 배열의 맨 끝에 새로운 객체를 밀어 넣기!
enrollments.push({
  id: enrollments.length + 1, // 기존 길이보다 1 큰 숫자로 새 고유 id 부여
  studentId: applyStudentId,
  courseId: applyCourseId
});

console.log("수강신청이 완료되었습니다! 현재 총 신청 건수:", enrollments.length);
console.log("----------------------------");

// ================================
// 6. 조회 (for문 + if문만 사용)
// ================================

// 사용자한테 조회하고 싶은 학생 id를 직접 입력받는다
let targetStudentId = Number(prompt('학생 id를 입력하세요 (1~3)'));

// --- 1) 입력받은 학생의 학과 찾기 ---
let foundMajorId = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].id === targetStudentId) {
    foundMajorId = students[i].majorId;
  }
}

let majorName = '';
for (let i = 0; i < departments.length; i++) {
  if (departments[i].id === foundMajorId) {
    majorName = departments[i].name;
  }
}

console.log(targetStudentId + '번 학생의 학과:', majorName);

// --- 2) 위에서 찾은 학과(foundMajorId)가 개설한 과목 목록 ---
let targetDeptId = foundMajorId;
console.log(majorName + ' 개설 과목:');

for (let i = 0; i < courses.length; i++) {
  if (courses[i].departmentId === targetDeptId) {
    console.log('-', courses[i].name);
  }
}

// --- 3) 입력받은 학생이 실제로 신청한 과목 목록 ---
console.log(targetStudentId + '번 학생의 수강신청 목록:');

for (let i = 0; i < enrollments.length; i++) {
  if (enrollments[i].studentId === targetStudentId) {

    let thisCourseId = enrollments[i].courseId;

    for (let j = 0; j < courses.length; j++) {
      if (courses[j].id === thisCourseId) {
        console.log('-', courses[j].name);
      }
    }
  }
}

// --- 4) 특정 과목의 수강생 목록 (과목 id도 입력받기) ---
let targetCourseId = Number(prompt('수강생을 조회할 과목 id를 입력하세요 (1~4)'));

let targetCourseName = '';
for (let i = 0; i < courses.length; i++) {
  if (courses[i].id === targetCourseId) {
    targetCourseName = courses[i].name;
  }
}

console.log(targetCourseName + ' 수강생:');

for (let i = 0; i < enrollments.length; i++) {
  if (enrollments[i].courseId === targetCourseId) {

    let thisStudentId = enrollments[i].studentId;

    for (let j = 0; j < students.length; j++) {
      if (students[j].id === thisStudentId) {
        console.log('-', students[j].name);
      }
    }
  }
}