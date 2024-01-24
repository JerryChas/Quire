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
    notes.forEach((note) => {
        const notesList = document.createElement('li');
        notesList.textContent = note.title;
        //La till klassnamn för att redigera stil i css
        notesList.className = 'aside-note_li';
        notesListUl.appendChild(notesList);

        //En eventlistener för att kalla på renderNotesMain funktionen när man klickar på note-Li
        notesList.addEventListener('click', () => {
            renderNotesMain(note);
        });
    });
}
renderNotesAsideList();
//variabel för att hämta containern där notes ska finnas i main
const displayContainer = document.getElementById('display_container');
