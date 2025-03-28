"use strict";

// STEP ONE: Fetch data from server
function fetchData(data) {
    return new Promise((resolve) => {
        resolve(data);
    });
}

// STEP TWO: Fetch and display books
function execute(filterOption = null, searchQuery = "") {
    const booksElement = document.getElementById('container');
    if (!booksElement) {
        console.error("Container element not found.");
        return;
    }

    fetch("http://localhost:4000/api/books")
        .then((response) => response.json())
        .then((data) => fetchData(data.books)) 
        .then((booksArray) => {
            booksElement.innerHTML = ""; 

            // Apply filtering based on selected filter option
            if (filterOption && filterOption !== "Genre") {
                switch (filterOption) {
                    case "Oldest Book":
                        booksArray.sort((a, b) => a.year - b.year);
                        break;
                    case "Newest Book":
                        booksArray.sort((a, b) => b.year - a.year);
                        break;
                    case "17th Century":
                        booksArray = booksArray.filter(book => book.year >= 1600 && book.year < 1700);
                        break;
                    case "18th Century":
                        booksArray = booksArray.filter(book => book.year >= 1700 && book.year < 1800);
                        break;
                    case "19th Century":
                        booksArray = booksArray.filter(book => book.year >= 1800 && book.year < 1900);
                        break;
                    case "20th Century":
                        booksArray = booksArray.filter(book => book.year >= 1900 && book.year < 2000);
                        break;
                    case "Most Affordable":
                        booksArray.sort((a, b) => a.price - b.price);
                        break;
                    case "Least Century":
                        booksArray.sort((a, b) => a.year - b.year);
                        break;
                    case "A-Z":
                        booksArray.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    case "Dystopian":
                        booksArray = booksArray.filter(book => book.genre.toLowerCase() === "dystopian");
                        break;
                    case "Fantasy":
                        booksArray = booksArray.filter(book => book.genre.toLowerCase() === "fantasy");
                        break;
                    case "Fiction":
                        booksArray = booksArray.filter(book => book.genre.toLowerCase() === "fiction");
                        break;
                }
            }
            
            if (searchQuery.trim() !== "") {
                booksArray = booksArray.filter(book => 
                    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    book.description.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            booksArray.forEach((book) => {
                const eachBook = document.createElement('div');
                eachBook.classList.add('bookContainer');

                eachBook.innerHTML = `
                    <img src="${book.image}" alt="Book Image"/>
                    <p><strong>Title:</strong> ${book.title}</p>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Genre:</strong> ${book.genre}</p>
                    <p><strong>Year:</strong> ${book.year}</p>
                    <p><strong>Pages:</strong> ${book.pages}</p>
                    <p><strong>Publisher:</strong> ${book.publisher}</p>
                    <p><strong>Description:</strong> ${book.description}</p>
                    <p><strong>Price:</strong> $${book.price}</p>
                    <button class="buyButton">Buy Now</button>
                `;

                booksElement.appendChild(eachBook);

                // Add event listener to open the payment module
                const buyButton = eachBook.querySelector('.buyButton');
                buyButton.addEventListener('click', () => {
                    showPaymentModule(book);
                });
            });
        })
        .catch((error) => {
            console.error("Error fetching books:", error.message);
        });
}

// Payment Module Functionality
function showPaymentModule(book) {
    let paymentModule = document.querySelector('.paymentModule');
    if (!paymentModule) {
        paymentModule = document.createElement('div');
        paymentModule.classList.add('paymentModule');
        document.body.appendChild(paymentModule);
    }

    let quantity = 1;
    
    function updateQuantityAndPrice() {
        document.querySelector('.quantity').textContent = quantity;
        document.querySelector('.totalPrice').textContent = (quantity * book.price).toFixed(2);
    }

    paymentModule.innerHTML = `
        <h2>Cart Details</h2>
        <p><strong>Book:</strong> ${book.title}</p>
        <p><strong>Price per unit:</strong> $${book.price}</p>
        <div class="quantityControl">
            <button class="decreaseQuantity">-</button>
            <span class="quantity">${quantity}</span>
            <button class="increaseQuantity">+</button>
        </div>
        <p><strong>Total Price:</strong> $<span class="totalPrice">${(book.price * quantity).toFixed(2)}</span></p>
        <img src="payment.png" alt="Payment Options">
        <div class="paymentMethod">
            <input type="radio" id="visa" name="payment" value="Visa">
            <label for="visa">Visa</label><br>
            <input type="radio" id="mastercard" name="payment" value="MasterCard">
            <label for="mastercard">MasterCard</label>
        </div>
        <button class="confirmPurchase">Check Out</button>
        <button class="closeButton">Continue Shopping</button>
    `;

    document.querySelector('.increaseQuantity').addEventListener('click', () => {
        quantity++;
        updateQuantityAndPrice();
    });
    
    document.querySelector('.decreaseQuantity').addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantityAndPrice();
        }
    });

    document.querySelector('.confirmPurchase').addEventListener('click', () => {
        alert("CHILL, THIS IS NOT A REAL BOOKSHOP 😎😎😎");
    });

    document.querySelector('.closeButton').addEventListener('click', () => {
        document.body.removeChild(paymentModule);
        execute();
    });
}

// Event Listeners for Filtering
window.addEventListener('DOMContentLoaded', () => {
    execute(); 
    
    const filterDropdown = document.getElementById('BookByYear');
    const searchInput = document.querySelector('input[type="text"]');
    const searchButton = document.getElementById('search');
    const bookstoreButton = document.getElementById('bookstore');

    if (filterDropdown) {
        filterDropdown.addEventListener('change', (event) => {
            execute(event.target.value, searchInput.value);
        });
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            execute(filterDropdown.value, searchInput.value);
        });

        searchInput.addEventListener('keyup', (event) => {
            if (event.key === "Enter") {
                execute(filterDropdown.value, searchInput.value);
            }
        });
    }
});
