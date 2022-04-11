const shoppingTable = document.querySelector('#shoppingTableBody')
const totalPrice = document.querySelector('#totalPrice')
let result = 0;

const cart = () =>{
    
    for(let shoppingCartItem in shoppingCart){
        const obj = shoppingCart[shoppingCartItem]
        const id = obj.id
        const totalEachBook = obj.price * obj.count
        const td = document.createElement('tr');
        td.innerHTML = `
            <th><img width='30px' height='50px' src='${booklist[id].src}'></img></th>
            <th>${booklist[id].title}</th>
            <th>$${parseInt(obj.price)}</th>
            <th>${parseInt(obj.count)}</th>
            <th>$${totalEachBook.toFixed(2)}</th>
            <th><button class='btn bg-primary bg-gradient btn-md text-light' id=${id} onclick='deleteBook(this.id)'>Delete</botton></th>
        `
        shoppingTable.appendChild(td)
        result += totalEachBook;
    }
    
    const result_div = document.createElement('div');
    result_div.innerHTML = `<div>Total price: ${result.toFixed(2)}</div>`
    totalPrice.append(result_div)
}

//Delete item from cart
function deleteACartItem(id){
    const deleteBookId = parseInt(id)
    for(let i =0; i < shoppingCart.length; i++){
        const item_id = parseInt(shoppingCart[i].id)
        if(item_id === deleteBookId){
            shoppingCart.splice(i,1)
            sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
            location.reload(true);
            return
        }
    }
}
function deleteBook(id){
    document.addEventListener('click', deleteACartItem(id))
}

//Chackout button event
function checkout(){
    if(result === 0 ){
        alert("No book in your cart!")
    }else{
        sessionStorage.clear();
        alert("Thank you!");
    }
}

function checkoutClicked(){
    document.addEventListener('click', checkout())
}

window.addEventListener('load',cart)

