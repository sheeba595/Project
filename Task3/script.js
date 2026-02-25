const addButtons = document.querySelectorAll('.add-btn');
const cartTableBody = document.querySelector('#cartTable tbody');
const grandTotalEl = document.getElementById('grandTotal');

let cart = [];

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const productEl = btn.parentElement;
        const name = productEl.querySelector('.name').textContent;
        const price = parseFloat(productEl.querySelector('.price').dataset.price);

        // Check if product already in cart
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        renderCart();
    });
});

function renderCart() {
    cartTableBody.innerHTML = '';
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const total = item.price * item.quantity;
        grandTotal += total;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><input type="number" min="1" value="${item.quantity}" data-index="${index}"></td>
            <td>₹${total}</td>
            <td><button class="remove-btn" data-index="${index}">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    grandTotalEl.textContent = `Grand Total: ₹${grandTotal}`;

    // Add event listeners for quantity change
    document.querySelectorAll('#cartTable input[type="number"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = e.target.dataset.index;
            cart[idx].quantity = parseInt(e.target.value);
            renderCart();
        });
    });

    // Add event listeners for remove button
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.target.dataset.index;
            cart.splice(idx, 1);
            renderCart();
        });
    });
}