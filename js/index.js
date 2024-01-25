/* Creates variable for the id and keeps track of the last id
If there is no id the counter starts at 0 */
let idCounter = parseInt(localStorage.getItem('lastNoteId')) || 0;

//Creates variable for date
let dateToday;

//Get notes from localStorage or an empty array
let notes = JSON.parse(localStorage.getItem('notes')) || [
  /*{
    title: 'Första inlägget',
    id: 99991,
    dateCreated: '2022-01-01',
    dateLastEdited: '2022-01-05',
    bodyText:
      'Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare.',
  },
  {
    title: 'Ett annat inlägg',
    id: 99992,
    dateCreated: '2022-02-10',
    dateLastEdited: '2022-02-15',
    bodyText:
      'Idag vill jag dela med mig av några tankar om mitt senaste ämne. Det har varit en spännande resa att utforska detta ämne och jag ser fram emot att höra era åsikter och reflektioner om det.',
  },
  {
    title: 'En dag i mitt liv',
    id: 99993,
    dateCreated: '2022-03-20',
    dateLastEdited: '2022-03-25',
    bodyText:
      'I dagens inlägg tänkte jag berätta om en vanlig dag i mitt liv. Det finns något vackert i det vardagliga, och jag hoppas kunna dela med mig av de små ögonblicken som gör livet speciellt.',
  },
  {
    title: 'Reseberättelse',
    id: 99994,
    dateCreated: '2022-04-05',
    dateLastEdited: '2022-04-10',
    bodyText:
      'För några veckor sedan hade jag möjlighet att resa till en otrolig plats. Utsikten, kulturen och människorna gjorde det till en oförglömlig upplevelse. Här är min detaljerade reseskildring som jag hoppas att ni kommer att njuta av.',
  },
  {
    title: "här är ett inlägg med favorit och bild",
    id: 9999999,
    dateCreated: "1995-12-25",
    dateLastEdited: "1995-12-25",
    isFavourite: true,
    images: ["https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D", "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", "https://i.pinimg.com/736x/79/a3/16/79a3168cf52edca304ff32db46e0f888.jpg"],
    bodyText: 'Dehär inlägget innehåller också lite bil :) Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare.'
  }

*/];

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
    month: 'long',
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
  </form>
  `;
  const saveNoteBtn = document.querySelector('.save-note_btn');

  // Saves note to localstorage
  saveNoteBtn.addEventListener('click', () => {
    dateToday = getDateStamp();
    getInputs();
    saveNotesToLocalStorage();
  });
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
function getWelcomeAgain(){
    localStorage.removeItem('visited');

    window.location.href = './index.html'
}
