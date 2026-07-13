let output = "";
let size = 10; // 다이아몬드의 절반(가장 넓은 줄의 별 개수)

// 1. 윗부분 삼각형 (별 1개부터 10개까지 증가)
for (let i = 1; i <= size; i++) {
  // 공백 추가 (왼쪽으로 밀어주기 위함)
  for (let j = 1; j <= size - i; j++) {
    output += " ";
  }
  // 별 추가 (별과 공백을 세트로 찍음)
  for (let k = 1; k <= i; k++) {
    output += "* ";
  }
  // 한 줄 완성 후 줄바꿈
  output += "\n";
}

// 2. 아랫부분 역삼각형 (별 9개부터 1개까지 감소)
for (let i = size - 1; i >= 1; i--) {
  // 공백 추가
  for (let j = 1; j <= size - i; j++) {
    output += " ";
  }
  // 별 추가
  for (let k = 1; k <= i; k++) {
    output += "* ";
  }
  // 한 줄 완성 후 줄바꿈
  output += "\n";
}

document.querySelector('#k').innerHTML = output;