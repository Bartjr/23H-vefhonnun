

document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const cartQueryParam = urlParams.get('cart');
    const cart = JSON.parse(decodeURIComponent(cartQueryParam || '[]'));


    const itemsListElement = document.getElementById('itemsList');
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        itemsListElement.appendChild(listItem);
        totalAmount += item.price;
    });


    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
});

function submitOrder(event) {
    event.preventDefault();

    alert('Takk fyrir að kaupa hja okkur!!');
}
