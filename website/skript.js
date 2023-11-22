

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

    const cartQueryParam = encodeURIComponent(JSON.stringify(cart));


    window.location.href = `checkout.html?cart=${cartQueryParam}`;
}

function toggleNav() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}


const appleLogo = document.getElementById('appleLogo');
const confirmationDialog = document.getElementById('confirmationDialog');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

// Add a click event listener to the logo
appleLogo.addEventListener('click', function (event) {
    event.preventDefault();

    // Show the confirmation dialog
    confirmationDialog.style.display = 'block';
});

// Add click event listeners to the Yes and No buttons
confirmYes.addEventListener('click', function () {
    window.open('https://www.apple.com', '_blank');
    confirmationDialog.style.display = 'none';
});

confirmNo.addEventListener('click', function () {
    confirmationDialog.style.display = 'none';
});

// Add a function to show color options
function showColorOptions(phoneName) {
    // Customize this part based on your color options
    const colorOptions = ['Red', 'Blue', 'Green'];

    // Show a confirmation dialog with color options
    const confirmationDialog = document.getElementById('confirmationDialog');
    const dialogBox = confirmationDialog.querySelector('.confirmation-dialog-box');
    const message = dialogBox.querySelector('.message');
    const buttonsContainer = dialogBox.querySelector('.buttons-container');

    // Clear previous buttons
    buttonsContainer.innerHTML = '';

    // Set the message
    message.textContent = `Choose a color for ${phoneName}:`;

    // Create buttons for each color option
    colorOptions.forEach(color => {
        const button = document.createElement('button');
        button.textContent = color;
        button.addEventListener('click', () => selectColor(phoneName, color));
        buttonsContainer.appendChild(button);
    });

    // Show the confirmation dialog
    confirmationDialog.style.display = 'flex';
}

// Add a function to handle color selection
function selectColor(phoneName, color) {
    // Customize this part based on your logic for handling color selection
    alert(`You chose ${color} color for ${phoneName}`);
    
    // Close the confirmation dialog
    const confirmationDialog = document.getElementById('confirmationDialog');
    confirmationDialog.style.display = 'none';
}