// STEP ONE: Fetch data from server
function fetchData<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
        resolve(data);
    });
}
interface Book {
    image: string;
    title: string;
    author: string;
    genre: string;
    year: number;
    pages: number;
    publisher: string;
    description: string;
    price: number;
}

// STEP TWO
function execute(): void {
    const booksElement = document.getElementById('container') as HTMLElement;
    if (!booksElement) {
        console.error("Container element not found.");
        return;
    }

    fetch("http://localhost:5000/books")
        .then((response) => response.json())
        .then((data: Book[]) => fetchData(data))
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
                
                const buyButton = eachBook.querySelector('.buyButton') as HTMLButtonElement;

                buyButton.addEventListener('click', () => {
                    showPaymentModule(book);
                });
            });
        })
        .catch((error: Error) => {
            console.log(error.message);
        });
}

function showPaymentModule(book: Book): void {
    let paymentModule = document.querySelector('.paymentModule') as HTMLDivElement;
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

    const quantityElement = paymentModule.querySelector('.quantity') as HTMLElement;
    const totalPriceElement = paymentModule.querySelector('.totalPrice') as HTMLElement;
    const increaseQuantityButton = paymentModule.querySelector('.increaseQuantity') as HTMLButtonElement;
    const decreaseQuantityButton = paymentModule.querySelector('.decreaseQuantity') as HTMLButtonElement;
    const closeButton = paymentModule.querySelector('.closeButton') as HTMLButtonElement;

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

    function updateQuantityAndPrice(newQuantity: number, unitPrice: number): void {
        quantityElement.textContent = newQuantity.toString();
        const newTotalPrice = newQuantity * unitPrice;
        totalPriceElement.textContent = newTotalPrice.toFixed(2);
    }

    
}

window.addEventListener('load', () => {
    execute();
});
