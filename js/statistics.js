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
//_______________________________________________________________

//Code-inspo from internet

function findMostUsedWord(wordNote) {
  // Create a string of all notes
  const allText = wordNote.reduce((acc, note) => acc + ' ' + note.bodyText, '');

  // Split the string to words
  const words = allText.split(/\s+/);

  // Create a variable for counting words
  const wordCount = {};
  words.forEach(word => {
    // Ignore special signs
    const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

    // Count word
    if (cleanedWord !== '' && cleanedWord.length > 2) {
      wordCount[cleanedWord] = (wordCount[cleanedWord] || 0) + 1;
    }
  });

  // Find the most used word
  let mostUsedWord = '';
  let maxCount = 0;
  Object.entries(wordCount).forEach(([word, count]) => {
    if (count > maxCount) {
      mostUsedWord = word;
      maxCount = count;
    }
  });

  return mostUsedWord;
}

// Use the function
const wordNote = JSON.parse(localStorage.getItem("notes")) || [];
const mostUsedWord = findMostUsedWord(wordNote);

statisticsCard4.innerHTML = `
<h2>Your most used word is: <i>${mostUsedWord}</i> !</h2><br>
<p>In the realm of your digital notebook, one word stands tall, echoing the essence of your thoughts, dreams, and reflections. That word, the most frequently used, weaves a tapestry of your journey—one keystroke at a time.

Embrace it, celebrate it, for within its syllables lies the heartbeat of your creativity. It's more than letters on a screen; it's a testament to the depth of your expressions. This word, a silent companion in your musings, has become a beacon illuminating the path of your storytelling.

As you navigate the vast landscape of your words, remember that each stroke contributes to the vibrant mosaic of your narrative. The most used word isn't just a linguistic artifact; it's a 🌟reflection🌟 of your unique voice, resonating with the rhythms of your soul.

So, let this revelation inspire you to continue pouring your thoughts onto the digital canvas. In each word, there's potential, a force waiting to be harnessed. Your most used word isn't just a collection of letters; it's a key 🔑 unlocking the boundless creativity within you.

Embrace your words, for in them, you find the power to shape worlds and inspire others. Your digital notebook is a testament to the journey you've embarked upon—one where every word contributes to the masterpiece that is your story.

Keep writing, keep expressing, and let your most used word be the anthem of your creativity. 🚀📖✨🌈 <b>#SpeakYourTruth #ExpressYourself</b></p>
`;

//______________________________________________________________________

function calculateWords(){
  //Gets notes from LS
  const calcNote = JSON.parse(localStorage.getItem("notes")) || [];

  //Calculates the total amount of words
  const totalWords = calcNote.reduce((total, note) => {
    const words = note.bodyText.split(/\s+/);
    return total + words.length;
  }, 0);

  //Calculates the genomsnittliga amount of words
  const averageWords = totalWords / calcNote.length || 0;

  return averageWords;
};

const averageWords = calculateWords();

console.log(Math.ceil(averageWords));

//Shows it on the page
statisticsCard5.innerHTML = `
<h2>The average amount of words in your notes are ${Math.ceil(
  averageWords
)}!</h2><br>
<p>🚀 Wow, you've crafted a digital tapestry of thoughts and ideas, each word a brushstroke painting the vibrant landscape of your journey. 🌈✨ Your dedication to expressing yourself through words shines in the average word count of your notes— a testament to the depth and richness of your reflections. 🌟 Embrace the power of your narrative, and let each word be a stepping stone towards self-discovery and creativity. 🎉 Keep writing, keep expressing, and watch as your digital notebook becomes a masterpiece of your unique voice! 🖋️💫 Remember, every word carries a universe within it, and your notes are a constellation of your extraordinary story. 🌌✨ <b>#WordArtistry #ExpressYourJourney</b></p>
`;

