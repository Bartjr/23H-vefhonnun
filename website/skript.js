// skript.js

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    updateCartDisplay();
    updateCartTotal();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';

        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-from-cart';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(index));

        listItem.appendChild(itemName);
        listItem.appendChild(itemPrice);
        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);

        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function redirectToCheckout() {
    // Encode the cart data as a JSON string to pass as a query parameter
    const cartQueryParam = encodeURIComponent(JSON.stringify(cart));

    // Redirect to the checkout.html page with cart as a query parameter
    window.location.href = `checkout.html?cart=${cartQueryParam}`;
}
