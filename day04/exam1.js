// 연산 결과는 항상 1개
// 분기/조건문 : 상황에 따라 흐름 분기 / 제어
    // 비가 오면 우산챙기고 아니면 우산 두고간다
    // 프로젝트/실무 : 어떠한 기능에 따른 상황 판단

// 1. if문 : if( 조건식 ) 실행문, 조건식 결과가 true(참) 이면 실행문 처리
if( 10 > 3 ) console.log ("1. 10은 3보다 크다.")
if( 10 > 30 ) console.log ("2. 10은 30보다 크다.")

// 2. if문 : if( 조건식 ) { 실행문; 실행문; } , 실행문이 2개 이상이면 { }으로 묶는다.
if( 10 > 3 ){
    console.log ( "3. 10은 3보다 크다")
    console.log ( "3. [2] ")
}
// 3. if문 : 조건식 결과 true(참) , false(거짓) 분기 처리
if( 10 >  3 ){console.log( "4. 10은 3보다 크다" ); }
else{ console.log( "4. 10은 보다 작다" ); } 

// 4. if문 ~ else if ~ else if ~ else : 다수 조건에 따른 true/false 결과를 1개만 처리 얘는 한개만 처리
if( 10 > 3 ){ console.log( '5. 10은 3보다 크다'); }
else if( 10 > 2 ) { console.log( '5. 10은 2보다 크다'); }
else if( 10 > 1 ) { console.log( '5. 10은 1보다 크다'); }
else{ console.log( '5. 거짓'); }
// vs if if if : 다수 조건에 따른 다수 결과를 처리
if( 10 > 3 ) { console.log( '5. 10은 3보다 크다'); }
if( 10 > 2 ) { console.log( '5. 10은 2보다 크다'); }
if( 10 > 1 ) { console.log( '5. 10은 1보다 크다'); }
else{ console.log( '5. 거짓'); }

