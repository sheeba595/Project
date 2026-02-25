const themeSelect = document.getElementById('themeSelect');

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('dashboardTheme') || 'light';
document.body.className = savedTheme;
themeSelect.value = savedTheme;

// Change theme when user selects a new option
themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
    document.body.className = selectedTheme;
    localStorage.setItem('dashboardTheme', selectedTheme);
});