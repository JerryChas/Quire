

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
          console.log('Clicked on note object: ', note); //!  DEBUGGING
        });
    });
}
renderNotesAsideList();
//variabel för att hämta containern där notes ska finnas i main
const displayContainer = document.getElementById('display_container');
