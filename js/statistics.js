// Variable holding Alicia's panel section
const aliciaStatisticsCard = document.getElementById(
  "statistics-alicia_container"
);
const statisticsCard1 = document.getElementById("statistics-1");
const statisticsCard2 = document.getElementById("statistics-2");
const statisticsCard3 = document.getElementById("statistics-3");
const statisticsCard4 = document.getElementById("statistics-4");

// Variable holding Paulina's panel section
const paulinaStatisticsCard = document.getElementById(
  "statistics-paulina_container"
);
const statisticsCard5 = document.getElementById("statistics-5");

//---------------------------------------------------------------
// ALICIA's script-space

let noteCalculation = JSON.parse(localStorage.getItem("notes")) || [];

function calculateNote() {
  // Doin the math
  const totalCharacters = notes.reduce(
    (total, note) => total + note.bodyText.length,
    0
  );

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
<p>🎉 Congratulations on maintaining a consistent effort in your note-taking journey! 🚀 The average character count in your notes reflects your dedication to capturing meaningful thoughts and details. Each character is a testament to your commitment to self-reflection, learning, and creativity. Keep up the fantastic work! 🌟 Remember, every character counts, and your notes are shaping a richer narrative for yourself. Embrace the power of your words, and let your notes continue to be a source of inspiration and growth. You're doing amazing! 🌈✨<b>#NoteTakingJourney #EveryCharacterCounts</b></p>
`;
//---------------------------------------------------------------

let numberOfFavorites = noteCalculation.filter(
  (favorite) => favorite.isFavourite == true
);

statisticsCard2.innerHTML = `
<h2>You have ${numberOfFavorites.length} favorite notes!🌟</h2><br>
<p>Wow!👌 Your collection of favorite notes is a testament to the valuable insights and information you've curated.📖 Each favorite note represents a gem of knowledge or inspiration that has captured your attention and resonated with you. Keep nurturing this collection and let it continue to serve as a source of motivation, learning, and creativity.🖌️ With every favorite note, you're building a personalized library of wisdom within Quire, your trusted digital companion for organizing and accessing your most cherished ideas.💫🌈<b>#DigitalWisdomLibrary #CarpeDiem</b></p>
`;
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
<p>Your dedication to note-taking is commendable! 🎉 Keep up the excellent work, and remember, each note is a step towards greater organization and productivity. Whether you're jotting down ideas, capturing insights, or organizing your thoughts, your notes are invaluable tools for personal and professional growth. Keep exploring, keep learning, and keep making the most of Quire, your digital notebook companion. ✨<b>#NoteTakingGoals #DigitalNotebook</b></p>
`;

//----------------------------------------------------------------

// Get notes from localStorage
const noteImages = JSON.parse(localStorage.getItem("notes")) || [];
let totalImages = 0;

// Looping through the images in notes
for (const noteImages of notes) {
  // Adding it to the variable
  totalImages += noteImages.images.length;
}

statisticsCard1.innerHTML = `
<h2>You have added ${totalImages} images! 📸</h2><br>
<p>Embark on a visual journey within your digital notebook! 🚀📸✨ Each image holds a unique story, a vivid memory, or an inspiring moment.🌟 As you explore the statistics revealing the countless snapshots captured in your notes, remember that every image is a testament to the richness of your experiences. 🎉 Cherish the visual tapestry you've woven, and let it inspire you to create more vibrant and unforgettable entries. Your digital notebook is a canvas of memories, and each picture is a brushstroke painting the narrative of your life. 🌈 Keep clicking, keep capturing, and keep filling your notebook with the colors of your journey! 📸✨ <b>#PicturePerfect #DigitalMemories</b></p>
`;

//---------------------------------------------------------------
// Number of tags

// Get notes in localStorage
const tagsLocal = JSON.parse(localStorage.getItem("notes")) || [];

let totalTags = 0;

for (const note of tagsLocal) {
  // Check if tagsLocal.tags exist
  if (note.tags && Array.isArray(note.tags)) {
    // Add the number of tags to totalTags
    totalTags += note.tags.length;
  }
}
console.log(totalTags);

statisticsCard3.innerHTML = `
<h2>You have created ${totalTags} tags! #️⃣</h2><br>
<p>Embrace the power of organization! 🏷️✨ Each tag you add to your notes is like a guiding star, leading you to a treasure trove of knowledge and memories. Your tags are the keys to unlocking a world of insights, making it easier to navigate through the vast landscape of your thoughts. As the number of tags grows, so does the richness of your digital notebook. Celebrate the diversity of your ideas and the colorful tapestry of tags that weave them together. With each tag, you're creating a roadmap to your unique journey. Keep tagging, keep exploring, and watch your digital notebook flourish with the beauty of organization! 🌟📕 <b>#TaggingJourney #OrganizeYourThoughts</b></p>
`;
