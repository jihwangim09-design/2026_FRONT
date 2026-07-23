boardprint()
function boardprint() {
    const boardTbody = document.querySelector('#boardTbody')

    let boardList = localStorage.getItem('boardList')
    if (boardList == null) (boardList = [] )
        else{ boardList = JSON.parse(boardList)}

    html = ''
    for( i = 0 ; i <= )
}