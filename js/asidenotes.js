

const notesListUl = document.getElementById('notes-list_ul');

// function to delete note from list and  database
function removeNoteFromArrayAndLocalStorage(specificNote) {
  //  Find the index of that specific object in the array
  const index = notes.indexOf(specificNote);
  if (index !== -1) { // Check if the object exists in the array
    notes.splice(index, 1); 
    saveNotesToLocalStorage();
  }
}


//Funktion för att rendera ut listan med notes i aside
 function renderNotesAsideList() {
        notesListUl.innerHTML = "";
 notes.forEach((note) => {
   const notesList = document.createElement('li');
   notesList.textContent = note.title;
   if (notesList.textContent.length >= 17) {
     notesList.textContent = notesList.textContent.substring(0, 17) + '...';
   }

   // Button to delete a specific note
   const delBtn = document.createElement('span');
   delBtn.textContent = 'X';
   delBtn.classList.add('delBtn');
   notesList.appendChild(delBtn);

   // When click on delete button
   delBtn.addEventListener('click', (e) => {
     e.stopPropagation(); // Stop the event from propagating up the DOM tree
     console.log(`Delete ${note.title}`);
     // Remove the note from array and local storage
     removeNoteFromArrayAndLocalStorage(note);
     renderNotesAsideList();
   });


   //La till klassnamn för att redigera stil i css
   notesList.className = 'aside-note_li';
   notesListUl.appendChild(notesList);

   //En eventlistener för att kalla på renderNotesMain funktionen när man klickar på note-Li
   notesList.addEventListener('click', () => {
     renderNotesMain(note);
     console.log('Clicked on note object: ', note); //!  DEBUGGING
   });
 });
}
renderNotesAsideList();
//variabel för att hämta containern där notes ska finnas i main
const displayContainer = document.getElementById('display_container');

