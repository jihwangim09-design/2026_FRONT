const 학과 = [
  { 학과id: 1, name: '산경' },
  { 학과id: 2, name: '컴공' },
  { 학과id: 3, name: '정통' },
]

const 학생 = [
    { 학생id: 1, name: '임준희', 학과id: 2},
    { 학생id: 2, name: '조현우', 학과id: 1},
    { 학생id: 3, name: '김지환', 학과id: 3},
]

const 교과목 = [
    { 교과목id: 1, name: '객체', 학과id: 3},
    { 교과목id: 2, name: '배열', 학과id: 2},
    { 교과목id: 3, name: 'c언어', 학과id: 1},
    
]

const 수강신청내역 = [
  { 수강신청내역기록id: 1, 학생id:1, 교과목id:1},
  { 수강신청내역기록id: 2, 학생id:2, 교과목id:2},
  { 수강신청내역기록id: 3, 학생id:3, 교과목id:3},
]

// 그냥 이름만 출력 console.log( 학생[1].name)
//수강신청내역추가
let 입력학생id = Number(prompt('학생 id를 입력하세요 (1~3)'));
let 입력과목id = Number(prompt('신청과목 id를 입력하세요 (1~3)'));

수강신청내역.push ({
    수강신청내역기록id: 수강신청내역.length + 1,
    학생id:  입력학생id,
    교과목id: 입력과목id,
})

for (let i = 0; i <= 수강신청내역.length - 1; i++) {

    console.log( 
    " 학생이름: " + 학생[i].name + 
    " 신청과목: " + 교과목[i].name
  );

}







