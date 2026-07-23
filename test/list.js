boardprint()
function boardprint() {
    const boardTbody = document.querySelector('#boardTbody')

    let boardList = localStorage.getItem('boardList')
    if( boardList == null ) {boardList = []} 
        else {boardList = JSON.parse(boardList)}
    
    let html = ''
    for (let i = 0 ; i <= boardList.length - 1 ; i++) {
        const obj = boardList[i]


    html += `<tr>
            <td> ${ obj.no } </td>
            <td> <a href="view.html?no=${obj.no}">${obj.title} </a> </td>
            </tr>`
    }
    boardTbody.innerHTML = html;
}