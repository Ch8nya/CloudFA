document.addEventListener('DOMContentLoaded', () => {
    fetchSweaters();
    document.getElementById('order-form').addEventListener('submit', placeOrder);
});

async function fetchSweaters() {
    try {
        const response = await fetch('/api/sweaters');
        const sweaters = await response.json();
        displaySweaters(sweaters);
    } catch (error) {
        console.error('Error fetching sweaters:', error);
    }
}

function displaySweaters(sweaters) {
    const productList = document.getElementById('product-list');
    sweaters.forEach(sweater => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${sweater.image}" alt="${sweater.name}">
            <h3>${sweater.name}</h3>
            <p>$${sweater.price.toFixed(2)}</p>
            <button onclick="addToCart(${sweater.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(sweaterId) {
    // In a real application, you would implement cart functionality here
    console.log(`Added sweater with ID ${sweaterId} to cart`);
    alert('Sweater added to cart!');
}

async function placeOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    const order = { name, email, address };

    try {
        const response = await fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        const result = await response.json();
        alert(`Order placed successfully! Order ID: ${result.orderId}`);
        document.getElementById('order-form').reset();
    } catch (error) {
        console.error('Error placing order:', error);
        alert('There was an error placing your order. Please try again.');
    }
}