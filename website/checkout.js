// checkout.js

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the cart data from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const cartQueryParam = urlParams.get('cart');
    const cart = JSON.parse(decodeURIComponent(cartQueryParam || '[]'));

    // Display cart items
    const itemsListElement = document.getElementById('itemsList');
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        itemsListElement.appendChild(listItem);
        totalAmount += item.price;
    });

    // Calculate and display total amount
    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
});

function submitOrder(event) {
    event.preventDefault();
    // Handle form submission (you can add AJAX or other logic here)
    alert('Order submitted successfully!');
}
