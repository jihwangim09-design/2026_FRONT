function boardwrite() {
    const titleinput = document.querySelector('#title')
    const contentinput = document.querySelector('#content')
    const pwinput = document.querySelector('#pw')

    const title = titleinput.value
    const content = contentinput.value
    const pw = pwinput.value

    let obj = { title, content, pw }

    let boardList = localStorage.getItem('boardList')
    if (boardList == null ) ( boardList = [] )
        else { boardList = JSON.parse(boardList)}

    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length -1].no + 1
    boardList.push(obj)

    localStorage.setItem('boardList' , JSON.stringify(boardList) )

    alert('게시물 등록 성공!')
}