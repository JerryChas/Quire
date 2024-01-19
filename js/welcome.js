/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
Create the welcome message that shows up the first time you visit the page
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

// Get connection to welcome div that will display all the content
const welcomeDiv = document.getElementById("welcome");

// Add class to the welcomeDiv
welcomeDiv.classList.add("welcome");

/* Create variable that will determine if the page has been visited before
by checking localStorage */
let previouslyVisited = localStorage.getItem("visited");

// On first visit, change visited to true in localStorage
if (!previouslyVisited) {
    localStorage.setItem("visited", true);
    // Create the welcome message and display it on the page
    welcomeDiv.innerHTML = `<br>
    <h2>📚 Welcome to Quire - Your Online Notebook!</h2><br>

<b>Hello and welcome to Quire, your versatile note-taking companion right in your browser! 🚀</b><br><br>

<b>🖊️ Create Notes with a Click:</b>
Simply tap the pen icon to start jotting down your thoughts. Your notes are automatically saved, ensuring that you never lose a brilliant idea.<br><br>

<b>🔍 Effortless Searching:</b>
Looking for something specific? Click on the magnifying glass to easily search through your notes and find what you need in a flash.<br><br>

<b>⭐ Favorites in a Click:</b>
Keep your most cherished notes close by by hitting the star icon. Access your favorites instantly for quick reference.<br><br>

<b>📊 Insights at a Glance:</b>
Curious about your note-taking patterns? Click on the stack icon to dive into statistics and gain valuable insights into your productivity.<br><br>

<b>⚙️ Customize Your Experience:</b>
Tailor Quire to suit your preferences by clicking on the gear icon. Adjust settings to make Quire uniquely yours.<br><br>

<b>🌟 Effortless Note-Taking Awaits:</b>
Quire is here to make your note-taking experience seamless and enjoyable. Dive in and let your ideas flow! 📝✨<br><br>

<h3>Customers reviews</h3>
<b>⭐⭐⭐⭐⭐ Eleanor</b>
Quire is a game-changer! Clicking the pen icon for instant note creation is pure genius. <br>
Automatic saving keeps things hassle-free. The search feature is a dream, and favorites are just a star click away. <br>
The stack icon's stats are unexpectedly motivating. Customization options make Quire my perfect digital sidekick. <br>
It's note-taking made effortless and enjoyable. Highly recommend!
`
} else {
    // When the page has been visited, there is no welcome message
    welcomeDiv.textContent = "";
}