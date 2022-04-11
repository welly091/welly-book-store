const loopBooklist = (booklist) =>{ 
    const exhibit = document.querySelector('#exhibitContainer')
    for(let book of booklist){
        const div = document.createElement('div');
        div.className="book"
        div.innerHTML =`
            <img class='bookImg' src=${book.src}></img>
            <div class='bookTitle'>
                <div>${book.title}</div>
            </div>
            <div>$${book.price}</div>
            <button class="btn btn-dark btn-md" type="submit" onclick="callAddToCart(${book.id})" >Add to cart</button>  
        `;
        exhibit.appendChild(div)
    }
}
 
function addToCart(id){
    //if(event.target.nodeName != 'BUTTON') return
    const bookId = id;

    //Check if an item is already in shopping cart list.
    //If it is, add one more count   
    for (let shoppingCartItem in shoppingCart){
        if(shoppingCart[shoppingCartItem].id === bookId){
            shoppingCart[shoppingCartItem].count += 1;
            sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
            return;
        }
    }

    //...the item is not in the list, so add it to shopping cart.
    let bookItem = new item(bookId, booklist[bookId].price)
    shoppingCart.push(bookItem)
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
}


function callAddToCart(id) {
    console.log(id)
   document.addEventListener('click', addToCart(id))
} 

loopBooklist(booklist)
