"use strict";
// STEP ONE: Fetch data from server
function fetchData(data) {
    return new Promise((resolve) => {
        resolve(data);
    });
}
// STEP TWO
function execute() {
    const booksElement = document.getElementById('container');
    if (!booksElement) {
        console.error("Container element not found.");
        return;
    }
    fetch("http://localhost:5000/books")
        .then((response) => response.json())
        .then((data) => fetchData(data))
        .then((result) => {
        result.forEach((book) => {
            const eachBook = document.createElement('div');
            eachBook.classList.add('bookContainer');
            eachBook.innerHTML = `
                    <img src="${book.image}" alt="Book Image"/>
                    <p>${book.title}</p>
                    <p>${book.author}</p>
                    <p>${book.genre}</p>
                    <p>${book.year}</p>
                    <p>${book.pages} Pages</p>
                    <p>${book.publisher}</p>
                    <p>${book.description}</p>
                    <button class="buyButton">Buy Now</button>
                    <p><span>$</span> <span>${book.price}</span></p>
                `;
            booksElement.appendChild(eachBook);
            const buyButton = eachBook.querySelector('.buyButton');
            buyButton.addEventListener('click', () => {
                showPaymentModule(book);
            });
        });
    })
        .catch((error) => {
        console.log(error.message);
    });
}
function showPaymentModule(book) {
    let paymentModule = document.querySelector('.paymentModule');
    if (!paymentModule) {
        paymentModule = document.createElement('div');
        paymentModule.classList.add('paymentModule');
        document.body.appendChild(paymentModule);
    }
    let quantity = 1;
    const totalPrice = book.price * quantity;
    paymentModule.innerHTML = `
        <h2>Cart Details</h2>
        <p>Book: ${book.title}</p>
        <p>Price per unit: $${book.price}</p>
        <div class="quantityControl">
            <button class="decreaseQuantity">-</button>
            <span class="quantity">${quantity}</span>
            <button class="increaseQuantity">+</button>
        </div>
        <p>Total Price: $<span class="totalPrice">${totalPrice.toFixed(2)}</span></p>
         <img src="payment.png"></img>
        <div class="paymentMethod">
            <input type="radio" id="visa" name="payment" value="Visa">
            <label for="visa">Visa</label><br>
            <input type="radio" id="MasterCard" name="payment" value="MasterCard">
            <label for="MasterCard">MasterCard</label>
        </div>
        <button class="confirmPurchase">Check Out</button>
        <button class="closeButton">Close</button>
    `;
    const quantityElement = paymentModule.querySelector('.quantity');
    const totalPriceElement = paymentModule.querySelector('.totalPrice');
    const increaseQuantityButton = paymentModule.querySelector('.increaseQuantity');
    const decreaseQuantityButton = paymentModule.querySelector('.decreaseQuantity');
    const closeButton = paymentModule.querySelector('.closeButton');
    increaseQuantityButton.addEventListener('click', () => {
        quantity += 1;
        updateQuantityAndPrice(quantity, book.price);
    });
    decreaseQuantityButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity -= 1;
            updateQuantityAndPrice(quantity, book.price);
        }
    });
    closeButton.addEventListener('click', () => {
        document.body.removeChild(paymentModule);
    });
    function updateQuantityAndPrice(newQuantity, unitPrice) {
        quantityElement.textContent = newQuantity.toString();
        const newTotalPrice = newQuantity * unitPrice;
        totalPriceElement.textContent = newTotalPrice.toFixed(2);
    }
}
window.addEventListener('load', () => {
    execute();
});
