const displayContainer = document.getElementById('display_container');
const notesListUl = document.getElementById('notes-list_ul');

//Funktion för att rendera ut listan med notes i aside
function renderNotesAsideList() {
  notesListUl.innerHTML = '';
  notes.forEach((note) => {
    const notesList = document.createElement('li');
    notesList.textContent = note.title;
    if (notesList.textContent.length >= 17) {
      notesList.textContent = notesList.textContent.substring(0, 17) + '...';
    }

    //* Apply "DELETE BUTTONS"
    applyDeleteBtns(notesList, note);

    //La till klassnamn för att redigera stil i css
    notesList.className = 'aside-note_li';
    notesListUl.appendChild(notesList);

    //En eventlistener för att kalla på renderNotesMain funktionen när man klickar på note-Li
    notesList.addEventListener('click', () => {
      renderNotesMain(note);
      // Remove stylingclass from the previous active note
      document.querySelectorAll('.aside-note_li').forEach((noteLi) => {
        noteLi.classList.remove('activeNote');
      });
      // document.querySelector('.aside-note_li').classList.add('activeNote');
      console.log('Clicked on note object: ', note); //!  DEBUGGING
    });

    // Function to add styling to the current active note
    notesList.addEventListener('click', (event) => {
      activeNoteElement = event.target.closest('.aside-note_li');
      // Add activeNote class to the clicked note
      if (activeNoteElement) {
        activeNoteElement.classList.add('activeNote');
      }
    });
  });
}

//* Function to remove a note from array and update local storage
function removeNoteFromArrayAndLocalStorage(specificNote) {
  //  Find the index of that specific object in the array
  const index = notes.indexOf(specificNote);
  // Check if the object exists in the array
  if (index !== -1) {
    notes.splice(index, 1); //  Remove it from the array
    saveNotesToLocalStorage(); // Save the updated array back into local storage
    console.log(`Deleted: `, specificNote); //! DEBUGGING
  }
}

//* Create deletebtns w/ function, and  append them to each li element
function applyDeleteBtns(applyTo, noteObj) {
  // Button to delete a specific note
  const delBtn = document.createElement('span');
  delBtn.textContent = 'X'; // button content
  delBtn.classList.add('delBtn');
  applyTo.appendChild(delBtn);

  // When click on delete button
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop the event from propagating up the DOM tree
    removeNoteFromArrayAndLocalStorage(noteObj); // delete note
    renderNotesAsideList(); //  Update the list with new data
  });
}

//*-------------------------------------------------------*//
renderNotesAsideList();
