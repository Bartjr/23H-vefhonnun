// Define the shopping cart and total variables
const cartItems = [];
let cartTotal = 0;

// Function to add items to the cart
function addToCart(productName, price) {
    // Create a cart item object
    const cartItem = {
        name: productName,
        price: price
    };

    // Add the item to the cart array
    cartItems.push(cartItem);

    // Update the cart display
    updateCartDisplay();

    // Update the cart total
    cartTotal += price;
    updateCartTotal();
}

// Function to remove items from the cart
function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;

    // Update the cart display and total
    updateCartDisplay();
    updateCartTotal();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];

        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `<span>${item.name} - $${item.price.toFixed(2)}</span>
                             <button class="remove-from-cart" onclick="removeFromCart(${i})">Remove</button>`;

        cartList.appendChild(listItem);
    }
}

// Function to update the cart total
function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.textContent = cartTotal.toFixed(2);
}