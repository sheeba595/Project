const dropdown = document.getElementById('customDropdown');
const selected = dropdown.querySelector('.dropdown-selected');
const optionsContainer = dropdown.querySelector('.dropdown-options');

// Array of options
const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

// Populate options
options.forEach(optionText => {
    const option = document.createElement('div');
    option.textContent = optionText;
    option.addEventListener('click', () => {
        selected.textContent = optionText;
        dropdown.classList.remove('open');
    });
    optionsContainer.appendChild(option);
});

// Toggle dropdown open/close
selected.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});