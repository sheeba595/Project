const addFieldBtn = document.getElementById('addFieldBtn');
const formFields = document.getElementById('formFields');
const dynamicForm = document.getElementById('dynamicForm');
const formData = document.getElementById('formData');

// Function to add a new input field
addFieldBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('field');
    div.innerHTML = `
        <input type="text" name="field[]" placeholder="Enter value">
        <button type="button" class="remove-btn">Remove</button>
    `;
    formFields.appendChild(div);
});

// Function to remove a field
formFields.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        e.target.parentElement.remove();
    }
});

// Handle form submission
dynamicForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const values = [...dynamicForm.querySelectorAll('input[name="field[]"]')].map(input => input.value);
    formData.textContent = JSON.stringify(values, null, 2);
});