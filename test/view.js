getboard()
function getboard() {
    const url = new URLSearchParams ( location.search )
    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if (boardList == null) (boardList = [])
        else {boardList = JSON.parse(boardList)}

    for ( i = 0 ; i <= boardList.length - 1 ; i++) {
        const obj = boardList[i]

    if ( obj.no == selectNo ) {
        document.querySelector('#title').innerHTML = obj.title
        document.querySelector('#content').innerHTML = obj.content
        return;
        }
    }
}


function boardDelete() {
    const url = new URLSearchParams( location.search) 
    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if (boardList == null) { boardList = [] } 
        else { boardList = JSON.parse(boardList) }

    for ( i = 0 ; i <= boardList.length - 1 ; i++) {
        const obj = boardList[i]

        if ( obj.no == selectNo ) {
            let confirm = prompt ('비밀번호 입력') 
            if (obj.pw == confirm) {
                boardList.splice( i, 1)
                localStorage.setItem('boardList' , JSON.stringify(boardList))
                alert('삭제성공')
                location.href = list.html
            }else{ alert('삭제 실패 비밀번호 불일치')}
        }
    }
}


function boardUpdateview() {
    const url = new URLSearchParams( location.search) 
    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if (boardList == null) { boardList = [] }
        else { boardList = JSON.parse(boardList) }

    for ( i = 0 ; i <= boardList.length - 1 ; i++) {
        const obj = boardList[i]

        if ( obj.no == selectNo ) {
            const confirm = prompt('비밀번호 입력')   
            if (obj.pw ==confirm) {
                location.href=`update.html?no=${selectNo}`
            }else{ alert('수정 불가 : 비밀번호 불일치')}
       
            
        }
    }
}


