//  let notes = [
//     {
//         title: "titel1",
//         id: 1,
//         dateCreated: "1995-12-25",
//         dateLastEdited: "1995-12-25",
//         bodyText: "lorem ipsum jadi jadi 1"
//     },
//     {
//         title: "titel2",
//         id: 2,
//         dateCreated: "1995-12-26",
//         dateLastEdited: "1995-12-26",
//         bodyText: "lorem ipsum jadi jadi 2"
//     },

const notesListUl = document.getElementById('notes-list_ul');

//Funktion för att rendera ut listan med notes i aside
 function renderNotesAsideList() {
        notesListUl.innerHTML = "";
 notes.forEach((note) => {
        const notesList = document.createElement('li');
        notesList.textContent = note.title;
        if (notesList.textContent.length >= 17) {
            notesList.textContent = notesList.textContent.substring(0, 17) + "...";
        }

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
renderNotesAsideList();
//variabel för att hämta containern där notes ska finnas i main
const displayContainer = document.getElementById('display_container');




