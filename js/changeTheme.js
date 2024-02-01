// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', function () {
    applySavedTheme();
});

document.getElementById("quireTheme").addEventListener("click", function () {
    applyTheme('css/main.css');
});

document.getElementById("melonTheme").addEventListener("click", function () {
    applyTheme('css/alternativeTheme.css');
});

function applyTheme(theme) {
    // Remove the existing theme stylesheet
    const currentTheme = document.getElementById('theme-style');
    currentTheme && currentTheme.parentNode.removeChild(currentTheme);

    // Create a new link element for the selected theme
    const newTheme = document.createElement('link');
    newTheme .id = 'theme-style';
    newTheme .rel = 'stylesheet';
    newTheme .href = theme;

    // Append the new link element to the head of the document
    document.head.appendChild(newTheme );

    // Save the selected theme to localStorage
    saveThemePreference(theme);
}

function saveThemePreference(theme) {
    localStorage.setItem('selectedTheme', theme);
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}
