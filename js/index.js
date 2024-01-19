// Creates variable for the id
let idCounter = parseInt(localStorage.getItem('lastNoteId')) || 0;

//Creates variable for date
let dateToday;

//Get notes from localStorage or an empty array
let notes = JSON.parse(localStorage.getItem('notes')) || [
  {
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

  //Storing the note as the most recent note in local storage:
  localStorage.setItem("recentNote", note.id);
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
  saveNoteBtn.addEventListener('click', (e) => {
    dateToday = getDateStamp();
    getInputs();
    saveNotesToLocalStorage();
  });
}

//* ------------------------------------------------*//

// When clicked you get the form
addNewBtn.addEventListener('click', () => {
  console.log('klick');
  renderNewNoteForm();
});
