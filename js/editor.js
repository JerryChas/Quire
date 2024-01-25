//Funktion för att rendera ut notes i containern i main


//============================================
//Calling the render funktion with dubby data:
//This is dummy data just for development state:


/* renderNotesMain({
    title: 'Första inlägget',
    id: 99991,
    dateCreated: '2022-01-01',
    dateLastEdited: '2022-01-05',
    bodyText:
        'Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare.',
}); */


//============================================

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