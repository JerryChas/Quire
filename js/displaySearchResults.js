//TODO Skicka till index med sparad i local storge senast anteckning.

//load the div to render to:
const searchResultContainer = document.getElementById('showSearchResults');

//---------------------------------------------------
//When nothing is searched for we show this cute cat:
//Variable for re-using this HTML-snippet:
const displayCatHTML = `<body>
<center><img src="./images/CatSearch.jpg" alt="Searching cat" style="max-width: 100%;"></center>
</body`

//Rende Cute cat when entering the page:
searchResultContainer.innerHTML = displayCatHTML;
//---------------------------------------------------


// ============================================
//Storing the notes that is searched for, for late use when rendering the modal:
let searchResultsArray;
// ============================================


//This function takes an array of notes that is suposed to be displyed:
function renderSearchResults(notesArrayToDisplay) {

  //Storing the search results:
  searchResultsArray = notesArrayToDisplay;

  searchResultContainer.innerHTML = '';
  notesArrayToDisplay.forEach((note) => {
    // Creating a snippet of the body text to display in the card:
    let bodyTextSnippet = note.bodyText.substring(0, 100);
    // console.log(note.bodyText.length);
    //Adding dots in the end if necessary
    if (note.bodyText.length > 100) {
      bodyTextSnippet += ' ...';
    }

    //render card:
    searchResultContainer.innerHTML += `
        <div class="result-card" data-note-id="${note.id}">
                <h4>${note.title}</h4>
                <p class="body-text-snippet">${bodyTextSnippet}</p>
                <p class="date-information"> Created ${note.dateCreated} | Last edited ${note.dateLastEdited}</p>

        </div>`;
  });

  // if there is no results, then render cute cat:
  if (searchResultContainer.innerHTML == "") {
    searchResultContainer.innerHTML = displayCatHTML;
  }
  else { // ======================================================
    // ======================================================
    // * LOGIC FOR MODAL DISPLAY:

    // Render preview-modal based of clicked result card.:
    searchResultContainer.addEventListener('click', (event) => {
      console.log("vi är inne i klick")
      /*  storing the value of dataset.noteId that is associated 
        with the closest parent of class .result-card (i therer is any) */

      //storing clicked card:
      const clickedCard = event.target.closest('.result-card');

      //if the clicked element is a result-card we will show the modal....
      //(else, the value of clickedCard is false).
      if (clickedCard) {

        //storing dataset.noteID.
        const noteIdeToDisplay = clickedCard.dataset.noteId;
        //console.log(noteIdeToDisplay);

        console.log(clickedCard.dataset);


        // finding the note to preview in modal:
        const noteToPreview = searchResultsArray.find((note) => {
          return (note.id == noteIdeToDisplay);
        });

        //calling th preview Modal:
        previewModal(noteToPreview)


        console.log(event.target.dataset)


    //adding html for modal:
    searchResultContainer.innerHTML += `
    <div id="preview-background-plate">
        <div id="preview-container">
        <div id="modal-exit-button">X</div>
            <h2>${noteToPreview.title}</h2>
            <p class="date-information"> Created ${noteToPreview.dateCreated} | Last edited ${noteToPreview.dateLastEdited}</p>
            <p id="preview-body-text">${noteToPreview.bodyText}</p>
            <button class="button edit_btn">Edit</button>
        </div>
    </div>`

    //store the background plate ande exit-button in a variable.
    const backgroundPlate = document.getElementById("preview-background-plate");
    const modalExitBtn = document.getElementById("modal-exit-button");

    //if background or cross is clicked the modal closes:
    backgroundPlate.addEventListener("click", (event) => {
      if (!event.target.closest("#preview-container")) {
        exitModal();

      }

    //When  click on "edit" button, it will take you to an Edit page with that note
    clickButton('.edit_btn', noteToPreview)

  }
});


// Store selected note and go to index.html
function storeNoteAndGoToEditor(noteObject) {

  localStorage.setItem('selectedNote', JSON.stringify(noteObject));

  window.location.href = 'index.html';
}

//  Function for "click n go" -to index.html with specific note
function clickButton(button, noteObject) {
  const trigger = document.querySelector(button);

  trigger.addEventListener('click', () => storeNoteAndGoToEditor(noteObject))
}
