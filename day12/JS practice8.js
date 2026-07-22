productPrint( ) // JS가 열릴때 최초 1번 실행 
function productPrint( ){
    // 1. 어디에
    let tbody = document.querySelector( '#main table tbody' )
    // 2. 무엇을 , 배열내 모든 객체(자료) 들을 HTML(문자열)형식 구성
    let html = ""
    for( let index = 0 ; index <= productList.length-1 ; index++ ){
        let product = productList[index] // index번째 제품객체 1개 
        // ++ 현재 index번째 제품의 카테고리번호에 해당하는 카테고리명 찾기
        let cname = ''
        for( let j = 0 ; j <= categoryList.length-1 ; j++ ){
            if( categoryList[j].ccode == product.ccode ){ // 만약에 카테고리내 카테고리번호 와 제품의 카테고리번호 같다면 
                cname = categoryList[j].cname;
                break; // 찾았으면 끝 
            }
        } 
        // 만일 샘플 HTML 존재하면 복사 해서 `백틱 사이 붙여넣기 , 변수 자리에 ${ } 변경 
        html += `<tr>
                    <td> <img src=${ product.pimg } /> </td>
                    <td> ${ cname } </td> <td> ${ product.pname } </td> 
                    <td> ${ product.pprice} </td> <td> ${ product.pdate } </td> 
                    <td> 
                        <button class="deleteBtn" onClick="productDelete( ${ product.pcode } )">삭제</button> 
                        <button class="updateBtn" onClick="productUpdate( ${ product.pcode } )">수정</button> 
                    </td>
                </tr>`
    } // for end 
    // 3. 출력 
    tbody.innerHTML = html
} // F END 

// [2] 삭제 함수 , 삭제할 제품코드 매개변수로 받아온다.
function productDelete( pcode ){
    // 1. 삭제할 pcode의 제품객체를 배열에서 찾는다.
    for( let index = 0 ; index <= productList.length-1 ; index++ ){
        if( productList[index].pcode == pcode ){
            productList.splice( index , 1 ); // 2. 배열에서 요소 삭제 . splice( 인덱스번호 , 개수 )
            alert('삭제 성공');
            productPrint() // 3. 조회구역 최신화
            return // 주의할점 구분 : return function{}탈출  VS break for{}탈출
        } // if end 
    } // for end 
} // f end 
// [3] 수정 함수
function productUpdate( pcode ){
    // 1. 수정할 pcode의 제품객체를 배열에서 찾는다.
    for( let index = 0 ; index <= productList.length-1 ; index++ ){
        if( productList[index].pcode == pcode ){
            let newPname = prompt('수정할 제품명 입력하세요.')
            let newPprice = prompt('수정할 가격 입력하세요.')
            productList[index].pname = newPname // 2. 배열에서 특정한 요소값 수정 
            productList[index].pprice = newPprice
            productPrint(); return;
        } //if end 
    } // for end 
} // f end 

// [4] 등록 함수 
let finalPcode = 2 // 현재 마지막으로 사용한 제품코드 
function productAdd( ){
    // 1. 입력받은 값 가져오기 
    let category = document.querySelector('.category').value // <select> 마크업의 value는 선택한 <option value> 반환 
    let name = document.querySelector('.name').value
    let price = document.querySelector('.price').value
    let image = document.querySelector('.image').files[0] // + 첨부파일은 .files[0] 속성에서 첨부파일의 첫번째 자료 가져오기 
        // 꼼꼼히!! , 유효성판단/검사
        if( category == 'disabled') { 
            alert('카테고리선택해주세요'); 
            return;  // * 코드의흐름이 return 만나면 아래코드는 생략하고 강제함수종료
        } 
        // 2. 입력받은 값들을 객체화 , 중간검사 : console.log() 이용한 변수/자료 출력
        // pcode : 제품식별코드로 사용자가 지정하지 않고 *자동번호 부여* , 마지막사용된 제품코드에 + 1
        // pdate : 현재 시스템 날짜/시간 함수 , new Date()
            // 현재연도 : new Date().getFullYear()  ,  현재월(0:1월~11:12월) : new Date().getMonth() , 현재일 : new Date().getDate()
            // console.log( new Date().getFullYear() , new Date().getMonth() , new Date().getDate()  ) 
    let pdate = `${ new Date().getFullYear() }-${ new Date().getMonth()+1 }-${ new Date().getDate() }`
    let object = { ccode : category , pname : name , pprice : price ,
                    // 만약에 첨부파일선택이 없으면(undefined) 기본이미지(https://placehold.co/100) 있으면 선택한첨부파일가상URL 생성 
                    pimg : image == undefined ? 'https://placehold.co/100' : URL.createObjectURL( image ), // URL.createObjectURL( 객체 ) 객체 (가상)주소 생성
                    pcode : finalPcode+1 , pdate : pdate }
    console.log( object )
    // 3. 배열 저장  , **마지막 제품코드 1 증가** 
    productList.push( object ); finalPcode += 1
    // 4. 성공  , 화면 최신화 
    alert('등록성공'); 
    productPrint();
} // f end 