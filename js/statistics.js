// VARIABLEs:

// Variable holding Alicia's panel section
const aliciaStatisticsCard = document.getElementById(
  "statistics-alicia_container"
);

// Variable holding Emil's panel section
const emilStatisticsCard = document.getElementById("statistics-emil_container");

// Variable holding Jerry's panel section
const jerryStatisticsCard = document.getElementById(
  "statistics-jerry_container"
);

// Variable holding Ibrahim's panel section
const ibrahimStatisticsCard = document.getElementById(
  "statistics-ibrahim_container"
);

// Variable holding Viktor's panel section
const viktorStatisticsCard = document.getElementById(
  "statistics-viktor_container"
);

// Variable holding Paulina's panel section
const paulinaStatisticsCard = document.getElementById(
  "statistics-paulina_container"
);

// Variable holding Moa's panel section
const moaStatisticsCard = document.getElementById("statistics-moa_container");

//---------------------------------------------------------------
// ALICIA's script-space

let noteCalculation = JSON.parse(localStorage.getItem('notes')) || [];

function calculateNote(){

  // Doin the math
  const totalCharacters = notes.reduce((total, note) => total + note.bodyText.length,0);

  // Average
  const averageCharacters = totalCharacters / notes.length;

  return averageCharacters;
}

const averageChars = calculateNote();

console.log(Math.ceil(averageChars));

aliciaStatisticsCard.innerHTML = `
<h2>The average number of characters in your notes is ${Math.ceil(
  averageChars
)}!🌟 </h2><br>
<p>🎉 Congratulations on maintaining a consistent effort in your note-taking journey! 🚀 The average character count in your notes reflects your dedication to capturing meaningful thoughts and details. Each character is a testament to your commitment to self-reflection, learning, and creativity. Keep up the fantastic work! 🌟 Remember, every character counts, and your notes are shaping a richer narrative for yourself. Embrace the power of your words, and let your notes continue to be a source of inspiration and growth. You're doing amazing! 🌈✨</p>
`; 
//---------------------------------------------------------------
// EMIL's script-space

//---------------------------------------------------------------
// JERRY's script-space

//---------------------------------------------------------------
// IBRAHIM's script-space

//---------------------------------------------------------------
// VIKTOR's script-space

//---------------------------------------------------------------
/* PAULINA's script-space
Statistics for total number of notes */

// Get notes from localStorage
const notesLocal = JSON.parse(localStorage.getItem("notes"));

// Count the length of notes
let notesLength = notesLocal.length;
console.log(notesLength);

// Display the data on the page
paulinaStatisticsCard.innerHTML = `
<h2>Your have created ${notesLength} notes! 📝</h2><br>
<p>Your dedication to note-taking is commendable! 🎉 Keep up the excellent work, and remember, each note is a step towards greater organization and productivity. Whether you're jotting down ideas, capturing insights, or organizing your thoughts, your notes are invaluable tools for personal and professional growth. Keep exploring, keep learning, and keep making the most of Quire, your digital notebook companion. ✨</p>
`;

//----------------------------------------------------------------
// MOA's script-space
