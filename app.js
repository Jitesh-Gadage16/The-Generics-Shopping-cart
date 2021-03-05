/*** *

if(document.readyState === 'loading'){
    document.addEventListener('DOMContenteLoaded', ready)
}else {
    ready()
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");

    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
       
        var quantityInputs = document.getElementsByClassName('cart-quantity-input');
        for (var i = 0; i < quantityInputs.length; i++){
          var input = quantityInputs[i];
          input.addEventListener('change',quantityChanged);

        var addToCartButtons =document.getElementsByClassName('shop-item-button');
        for (var i = 0; i < addToCartButtons.length; i++){
            var button = addToCartButtons[i];
            button.addEventListener('click', addToCartClicked);
        }
        }
    }
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value < 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imagesrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title,price, imagesrc);
    addItemToCart(title, price, imagesrc);
    updateCartTotal();

}

function addItemToCart(title, price, imagesrc){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = document.getElementsByClassName('cart-item-title');
    for(var i = 0; i < cartItemNames.length; i++){
       if(cartItemNames[i].innerText == title){
           alert("This item Is alresy Added to Cart")
           return
       }
}
    var cartRowContent = ` <div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${imagesrc}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`
   cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);

    cartRow.document.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal(){
    var cartItemContaniner = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContaniner.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++){
       var cartRow = cartRows[i];
       var priceElement =cartRow.getElementsByClassName('cart-price')[0];
       var quantityElement =cartRow.getElementsByClassName('cart-quantity-input')[0];
    //    console.log(priceElement,quantityElement);
    var price =parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + (price * quantity);

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText ='$' + total
}

********/
// if (document.readyState == "loading") {
//   document.addEventlistener("DOMContentLoaded", ready);
// } else {
//   ready();
// }
// function ready() {
//   var removeCartItemButton = document.getElementsByClassName("btn-danger");

//   for (var i = 0; i < removeCartItemButton.length; i++) {
//     var button = removeCartItemButton[i];
//     button.addEventListener("click", function (event) {
//       var buttonClicked = event.target;
//       buttonClicked.parentElement.parentElement.remove();
//       updateCartTotal();
//     });
//   }
// }

// function updateCartTotal() {
//   var carItemContainer = document.getElementsByClassName("cart-items")[0];
//   var cartRows = carItemContainer.getElementsByClassName("cart-row");
//   var total = 0;
//   for (var i = 0; i < cartRows.length; i++) {
//     var cartRow = cartRows[i];
//     var priceElement = cartRow.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartRow.getElementsByClassName(
//       "cart-quantity-input"
//     )[0];
//     var price = parseFloat(priceElement.innerText.replace("$", ""));
//     var quantity = quantityElement.value;
//     total = total + price * quantity;
//   }
//   document.getElementsByClassName("cart-total-price")[0].innerText = total;
// }
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    var removeButton = document.getElementsByClassName('btn-danger');

    for (var i = 0; i < removeButton.length;i++){
        var button = removeButton[i]
        button.addEventListener('click', removeCartItem);
    }
    var changeQuantity = document.getElementsByClassName('cart-quantity-input');
    for(var i = 0; i< changeQuantity.length; i++){
        var quantity = changeQuantity[i];
        quantity.addEventListener('change',quantityChanged)
    }

    var addToCartButton = document.getElementsByClassName('btn-primary');
    for(var i = 0; i< addToCartButton.length; i++){
       var button = addToCartButton[i]
       button.addEventListener('click', addToCartClicked);
    }

    var purchase = document.getElementsByClassName('btn-purchase')[0];
    purchase.addEventListener('click',purchaseClicked);
}

function purchaseClicked(){
    alert("Thank You for your purchase!!")
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
           cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imagesrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(price,title,imagesrc)
    addToCartItem(price,title,imagesrc)
    var removeButon =  button.innerHTML = "Remove";
    var removeText = removeButon.innerText;
 
  
    var removeButton = document.getElementsByClassName('btn-primary');

    for (var i = 0; i < removeButon.length;i++){
        var button = removeButon[i]
        button.addEventListener('click', removeCartItem);
    }

  
    



    
}

function addToCartItem(price,title,imagesrc){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = document.getElementsByClassName('cart-item-title');
    for(var i = 0; i < cartItemNames.length; i++){
       if(cartItemNames[i].innerText == title){
           alert("This item Is alresy Added to Cart")
           return
       }
    }
    var cartRowContent = `
    <div class="cart-item cart-column">
      <img
        class="cart-item-image"
        src="${imagesrc}"
        width="100"
        height="100"
      />
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1" />
      <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
  </div>`
   cartRow.innerHTML= cartRowContent
    cartItems.append(cartRow); 
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
    updateCartTotal()
   
    document.getElementsByClassName('btn-primary')[0].addEventListener('click',removeCartItem);
    
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value < 0){
        input.value = 1
    }
    updateCartTotal()
}


function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal(){
   var cartItemContainer = document.getElementsByClassName('cart-items')[0];
   var cartRow = cartItemContainer.getElementsByClassName('cart-row');
   var total = 0
   for(var i = 0; i< cartRow.length; i++){
       cartRows = cartRow[i]
       var priceElement = cartRows.getElementsByClassName('cart-price')[0];
       var quantityElement = cartRows.getElementsByClassName('cart-quantity-input')[0]
       var price =parseFloat(priceElement.innerText.replace('$', ''));
       var quantity = quantityElement.value
       total = total + (price * quantity);

   }
//    total = Math.random(total * 100) / 100;
   document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total
}

