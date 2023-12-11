

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


appleLogo.addEventListener('click', function (event) {
    event.preventDefault();


    confirmationDialog.style.display = 'block';
});


confirmYes.addEventListener('click', function () {
    window.open('https://www.apple.com', '_blank');
    confirmationDialog.style.display = 'none';
});

confirmNo.addEventListener('click', function () {
    confirmationDialog.style.display = 'none';
});


function toggleColorOptions(phone) {
    const colorOptions = document.querySelector(`[data-phone="${phone}"] .color-options`);
    colorOptions.style.display = (colorOptions.style.display === 'block') ? 'none' : 'block';
}

function selectColor(phone, color) {
    const colorCircle = document.querySelector(`[data-phone="${phone}"] .color-circle`);
    colorCircle.style.backgroundColor = color;
    toggleColorOptions(phone); 
}

function closeColorModal() {
    document.getElementById('colorModal').style.display = 'none';
}

