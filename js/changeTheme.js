// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', function () {
    applySavedTheme();
});

const quireTheme = document.getElementById('quireTheme');
if (quireTheme) {
    document.getElementById("quireTheme").addEventListener("click", function () {
        applyTheme('./css/main.css');
    });
    
    document.getElementById("melonTheme").addEventListener("click", function () {
        applyTheme('./css/alternativeTheme.css');
    });

    document.getElementById('bubblegumTheme').addEventListener('click', () => {
        applyTheme('./css/bubblegumtheme.css')
    })

    document.getElementById('halloweenTheme').addEventListener('click', () => {
        applyTheme('./css/halloweentheme.css')
    })

    document.getElementById('pixelTheme').addEventListener('click', () => {
        applyTheme('./css/pixeltheme.css')
    })
} 

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
    // Emil's G-Tag - With this custom event we can track how often the user changes the main theme on the app.
    gtag('event', 'button_click', {
        'event_category': 'theme_changes',
        'event_label': 'user_change'
    });
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
