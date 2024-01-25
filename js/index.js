/* Creates variable for the id and keeps track of the last id
If there is no id the counter starts at 0 */
let idCounter = parseInt(localStorage.getItem('lastNoteId')) || 0;

//Creates variable for date
let dateToday;

//Get notes from localStorage or an empty array
let notes = JSON.parse(localStorage.getItem('notes')) || [];

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