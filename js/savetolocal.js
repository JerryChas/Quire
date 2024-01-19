import { note } from "ibra.js";

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
  const newNote = {id: newID, content: note};
  notes.push(newNote);

  localStorage.setItem("notes", JSON.stringify(notes));
}
