// Array with notes
let noteArray = [];

// Hämtar knappen
const addNewBtn = document.getElementById("add-new_btn");

function getDateStamp() {
  const now = new Date();

  const date = now.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return date;
}

function getInputs() {
  const titleInput = getElementById("note-title");
  const noteInput = document.getElementById("note-text");

  const titleValue = titleInput.value;
  const noteValue = noteInput.value;

  let note = {
    title: titleValue,
    id: 0,
    dateCreated: dateToday,
    // dateLastEdited: ,
    bodyText: noteValue,
  };

  noteArray.push(note);
  saveNotesToLocalStorage();
}

function renderNewNoteForm() {
  const displayContainer = document.getElementById("display_container");

  displayContainer.innerHTML = `
  <form id="note_form">
  
  <label for="note-title">Title:</label>
  <input type="text" id="note-title">
  
  <label for="note-text">Text:</label>
  <textarea id="note-text" name="note" rows="6" cols="30"></textarea>
  
  <button class="button save-note_btn">Save Note</button>
  </form>
  `;
  const saveNoteBtn = document.querySelector(".save-note_btn");

  // SAVE-BUTTON
  saveNoteBtn.addEventListener("click", () => {
    // get value of title
    // Get value of text
    // Push them into note[] as a object
    dateToday = getDateStamp();
    getInputs();
  });
}

// Vid klick på knappen
addNewBtn.addEventListener("click", () => {
  console.log("klick");
  renderNewNoteForm();
});

console.log(dateToday);

let idStarter = 0;

//Generates new id to every note
function generateID() {
  idStarter += 1;
  return idStarter;
}

//Saves id to note and saves it to localStorage
function saveNotesToLocalStorage() {
  //Get notes from localStorage
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  //Creates a new ID to a variable
  const newID = generateID();

  //Gives the id to the note
  note.id = newID;

  //Creates a variable and pushes it to the note variable
  const newNote = { id: newID, content: note };
  notes.push(newNote);

  localStorage.setItem("notes", JSON.stringify(notes));
}
