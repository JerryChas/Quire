//Funktion för att rendera ut notes i containern i main
function renderNotesMain(note) {

    console.log("vi är här")
    //Om det var någon note framme innan så tas den bort med detta
    displayContainer.innerHTML = '';

    const titleDiv = document.createElement('div');
    //La till klassnamn för att redigera stil i css
    titleDiv.className = 'note-title_div';
    titleDiv.textContent = note.title;

    const bodyTextDiv = document.createElement('div')
    //La till klassnamn för att redigera stil i css
    bodyTextDiv.className = 'note-bodytext_div';
    bodyTextDiv.textContent = note.bodyText;

    displayContainer.appendChild(titleDiv);
    displayContainer.appendChild(bodyTextDiv);
}  