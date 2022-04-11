function searchItem(){
    let input = document.getElementById('inputSearch').value;
    input = input.toLowerCase();

    if(input.length === 0){
        alert("Please enter a title")
        return
    }
    let books = document.getElementsByClassName('book');

    for (let i = 0; i < books.length; i++){
        //If cannot find the book, the book will not show up.
        if(!books[i].querySelector(".bookTitle").innerHTML.toLowerCase().includes(input)){
            books[i].style.display="none";
        }else{
        //If find the book, display it.
            books[i].style.display="inline";
        }
    }
}

function searchClick(){
    document.addEventListener('click', searchItem())
}
