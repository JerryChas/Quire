/* Creates variable for the id and keeps track of the last id
If there is no id the counter starts at 0 */
let idCounter = parseInt(localStorage.getItem('lastNoteId')) || 0;

//Creates variable for date
let dateToday;

//Get notes from localStorage or an empty array
let notes = JSON.parse(localStorage.getItem('notes')) || [
  //!-----------------------------------------DUMMY NOTES----------------------------------!//
  {
    title: 'Mitt första inlägg',
    id: 9999999,
    dateCreated: '1995-12-25',
    dateLastEdited: '1995-12-25',
    isFavourite: true,
    images: [
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D',
      'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
      'https://i.pinimg.com/736x/79/a3/16/79a3168cf52edca304ff32db46e0f888.jpg',
    ],
    bodyText:
      'Dehär inlägget innehåller också lite bil :) Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare. Utökad text för att skapa intresse och engagemang.',
  },
  {
    title: 'Min resa till fjällen',
    id: 8888888,
    dateCreated: '2023-05-10',
    dateLastEdited: '2023-05-15',
    isFavourite: false,
    images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg'],
    bodyText:
      'En fantastisk resa till fjällen! Jag ville uppleva naturens skönhet och lugn. Denna resa har gett mig minnen för livet. Här delar jag med mig av mina upplevelser och bilder från vackra platser.',
  },
  {
    title: 'En dag i mitt programmeringsliv',
    id: 7777777,
    dateCreated: '2024-01-26',
    dateLastEdited: '2024-01-26',
    isFavourite: true,
    images: ['https://example.com/coding1.jpg', 'https://example.com/coding2.jpg', 'https://example.com/coding3.jpg'],
    bodyText:
      'Idag hade jag en intensiv dag med kodning. Arbetade med spännande projekt och löste knepiga problem. Här delar jag med mig av min dag och några kodsnuttar.',
  },
  {
    title: 'Mina favoritböcker',
    id: 6666666,
    dateCreated: '2023-08-15',
    dateLastEdited: '2023-08-20',
    isFavourite: false,
    images: ['https://example.com/book1.jpg', 'https://example.com/book2.jpg', 'https://example.com/book3.jpg'],
    bodyText:
      'Läsning är en passion! Här är några av mina favoritböcker. Delar med mig av recensioner och varför jag älskar varje bok.',
  },
  {
    title: 'Mitt bästa recept: Pasta Carbonara',
    id: 5555555,
    dateCreated: '2023-03-05',
    dateLastEdited: '2023-03-05',
    isFavourite: true,
    images: ['https://example.com/pasta1.jpg', 'https://example.com/pasta2.jpg', 'https://example.com/pasta3.jpg'],
    bodyText:
      'Att laga mat är lika roligt som att koda! Delar med mig av mitt bästa recept på Pasta Carbonara. Steg för steg guide och läckra bilder.',
  },
  {
    title: 'Min trädgårdsodling',
    id: 4444444,
    dateCreated: '2023-07-20',
    dateLastEdited: '2023-07-25',
    isFavourite: false,
    images: ['https://example.com/garden1.jpg', 'https://example.com/garden2.jpg', 'https://example.com/garden3.jpg'],
    bodyText:
      'Gröna fingrar i aktion! Delar med mig av min trädgårdsodling. Från plantering till skörd, en resa fylld av grönsaksglädje.',
  },
  {
    title: 'En dag på stranden',
    id: 3333333,
    dateCreated: '2023-06-12',
    dateLastEdited: '2023-06-12',
    isFavourite: true,
    images: ['https://example.com/beach1.jpg', 'https://example.com/beach2.jpg', 'https://example.com/beach3.jpg'],
    bodyText:
      'Solen, sanden och havet! En perfekt dag på stranden. Här delar jag med mig av de avkopplande stunderna och solnedgången över horisonten.',
  },
  {
    title: 'Mitt nya projekt: Digitalt anteckningsblock',
    id: 2222222,
    dateCreated: '2024-02-10',
    dateLastEdited: '2024-02-15',
    isFavourite: false,
    images: [
      'https://example.com/project1.jpg',
      'https://example.com/project2.jpg',
      'https://example.com/project3.jpg',
    ],
    bodyText:
      'Arbetar på ett spännande projekt! Ett digitalt anteckningsblock som förenklar livet. Delar med mig av mina framsteg och några kodsnuttar från projektet.',
  },
  {
    title: 'Mina favoritplatser i staden',
    id: 1111111,
    dateCreated: '2023-09-28',
    dateLastEdited: '2023-09-28',
    isFavourite: true,
    images: ['https://example.com/place1.jpg', 'https://example.com/place2.jpg', 'https://example.com/place3.jpg'],
    bodyText:
      'Staden har så många underbara platser att erbjuda. Här delar jag med mig av mina favoritplatser och varför de är speciella för mig.',
  },
  {
    title: 'Min första vecka som fullstack utvecklare',
    id: 999999,
    dateCreated: '2022-01-26',
    dateLastEdited: '2022-01-26',
    isFavourite: false,
    images: [
      'https://example.com/developer1.jpg',
      'https://example.com/developer2.jpg',
      'https://example.com/developer3.jpg',
    ],
    bodyText:
      'En spännande start som fullstack utvecklare! Delar med mig av mina upplevelser, lärdomar och några kodsnuttar från min första vecka i branschen.',
  },
  //!-----------------------------------------------------------------------------------------------------!//
];

// Hämtar knappen
const addNewBtn = document.getElementById('add-new_btn');

//* ---------- FUNCTIONS ---------- *//

//Saves id to note and saves it to localStorage
function saveNotesToLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Gets current date
function getDateStamp() {
  const now = new Date();

  //Makes date to string
  const date = now.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return date;
}

// Generates new id to every note
function generateID() {
  idCounter += 1;
  //store the last id that was set:
  localStorage.setItem('lastNoteId', JSON.stringify(idCounter));
  return idCounter;
}

// Gets inputs from user
function getInputs() {
  const titleInput = document.getElementById('note-title');
  const noteInput = document.getElementById('note-text');

  const titleValue = titleInput.value;
  const noteValue = noteInput.value;
  const newID = generateID();

  let note = {
    title: titleValue,
    id: newID,
    dateCreated: dateToday,
    // dateLastEdited: ,
    bodyText: noteValue,
  };

  //Puts note to the array
  notes.push(note);
}

// Render and display form for new note
function renderNewNoteForm() {
  const displayContainer = document.getElementById('display_container');

  displayContainer.innerHTML = `
  <form id="note_form">
  
  <label for="note-title">Title:</label>
  <input type="text" id="note-title">
  
  <label for="note-text">Text:</label>
  <textarea id="note-text" name="note" rows="6" cols="30"></textarea>
  
  <button class="button save-note_btn">Save Note</button>
  <button class="button add-img_btn">Add image</button>
  </form>
  

  `;

  // Saves note to localstorage
  const saveNoteBtn = document.querySelector('.save-note_btn');
  saveNoteBtn.addEventListener('click', () => {
    dateToday = getDateStamp();
    getInputs();
    saveNotesToLocalStorage();
  });

  // Add image - BUTTON
  const addImgBtn = document.querySelector('.add-img_btn');
  addImgBtn.addEventListener('click', () => {
    renderAddImgModal();
  });
}
// Function to start the Img Modal PopUp Window
function renderAddImgModal() {
  displayContainer.innerHTML += `
    <div class="add-img_modal">
      <div class="image-preview_container"> 
      </div>
      <input id="img-url_input" type="url" placeholder="Paste your URL of your favorite image"></input>
      <button class="button">Add to notes</button>
    </div>
  `;

  const imgUrlInput = document.getElementById('img-url_input');
  const imagePreviewContainer = document.querySelector('.image-preview_container');
  // Input function to get the URL from the user
  imgUrlInput.addEventListener('input', () => {
    const imageUrl = imgUrlInput.value;
    // Check if the URL needs to checked or not
    if (isValidUrl(imageUrl)) {
      imagePreviewContainer.innerHTML = `
        <img src="${imageUrl}" alt="image from user" width="300">
      `;
    } else {
      // Display error message
      imagePreviewContainer.innerHTML = 'Please submit a valid URL';
    }
  });
}
// Check if the URL is valid
function isValidUrl(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
}

// Add image to note
function addImageToNote() {
  const imageUrl = imgUrlInput.value;
  return imageUrl;
}

//* ------------------------------------------------*//

// When click you get the form
addNewBtn.addEventListener('click', () => {
  console.log('klick');
  renderNewNoteForm();
});

//------------------CODE FOR RETRIEVING THE WELCOME MESSAGE AGAIN------------------------------//
const infoBtn = document.getElementById('info-btn');
infoBtn.addEventListener('click', getWelcomeAgain);

//function for deleting the visited keyn from localstorage and to send the user to index.html
function getWelcomeAgain() {
  localStorage.removeItem('visited');

  window.location.href = './index.html';
}
