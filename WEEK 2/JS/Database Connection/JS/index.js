document.addEventListener('DOMContentLoaded', () => {
    const productInfo = document.getElementById('display');// get the div id from the html file to manipulate from 

    fetch("http://localhost:5000/products") //Fetch the data from the JSON server
        .then(response => response.json()) // convert the response from the fetched command to json
        .then(products => {
            products.forEach(product => {
                const productDivision = document.createElement("div");// create the div in the display div for each object in the products data json file
                productDivision.innerHTML = `
             <h4>${product.name}</h4>
             <p><strong>Description: </strong>${product.description}</p>
              <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Stock:</strong> ${product.stock} available</p>
                <hr>
             `//accessing the elements using the dot notation with the key
             productInfo.appendChild(productDivision);
            })
    })
    //print out to catch any exceptions while trying to access the json file
    .catch(error => console.error('Error while fetching the products' , error))
})