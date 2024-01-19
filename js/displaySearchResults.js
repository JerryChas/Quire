//TODO
//TODO
//TODO Modal ska komma upp med den anteckning man sökt
//TODO Skicka till index med sparad i local storge senast anteckning.

//load the div to render to:
// ? This is the div emil said he had created:
const searchResultContainer = document.getElementById('showSearchResults');

//! Mockup:
// !const searchResultContainer = document.querySelector("main");
//! console.log(searchResultContainer);

// - - - - - - -
//! the following is a temporary array to test funktionality when we develop.
//! "LÅT STÅ", for now:
/* let tempArray = [
    {
        title: "Första inlägget",
        id: 1,
        dateCreated: "2022-01-01",
        dateLastEdited: "2022-01-05",
        bodyText: "Det här är det första inlägget i min blogg."
    },
    {
        title: "Ett annat inlägg",
        id: 2,
        dateCreated: "2022-02-10",
        dateLastEdited: "2022-02-15",
        bodyText: "Idag vill jag dela med mig av några tankar om bla bla."
    },
    {
        title: "En dag i mitt liv",
        id: 3,
        dateCreated: "2022-03-20",
        dateLastEdited: "2022-03-25",
        bodyText: "I dagens inlägg tänkte jag berätta om en vanlig dag i mitt liv."
    },
    {
        title: "Reseberättelse",
        id: 4,
        dateCreated: "2022-04-05",
        dateLastEdited: "2022-04-10",
        bodyText: "För några veckor sedan hade jag möjlighet att resa till bla bla"
    },
    {
        title: "Tankar om framtiden",
        id: 5,
        dateCreated: "2022-05-15",
        dateLastEdited: "2022-05-20",
        bodyText: "I dagens inlägg vill jag dela med mig av några av mina tankar om framtiden.  DETTA ÄR ENLÅNG ANTECKNING dgsg jhwegjekwhfjkewh rfkjewh fjkewh fklweh fjklewh fjklhwefkjlehw fkjlewh fjkleh wfjklhegsg jhwegjekwhfjkewh rfkjewh fjkewh fklweh fjklewh fjklhwefkjlehw fkjlewh fjkleh wfjklhegsg jhwegjekwhfjkewh rfkjewh fjkewh fklweh fjklewh fjklhwefkjlehw fkjlewh fjkleh wfjklhegsg jhwegjekwhfjkewh rfkjewh fjkewh fklweh fjklewh fjklhwefkjlehw fkjlewh fjkleh wfjklhegsg jhwegjekwhfjkewh rfkjewh fjkewh fklweh fjklewh fjklhwefkjlehw fkjlewh fjkleh wfjklhegsg jhwegjekwhfjkewh rfkjewh fjkewh fklweh fjklewh fjklhwefkjlehw fkjlewh fjkleh wfjklhe fkljhwefkjlhwekljhweljkf hewljh"
    },
    {
        title: "Det senaste äventyret",
        id: 6,
        dateCreated: "2022-06-25",
        dateLastEdited: "2022-06-30",
        bodyText: "I helgen var jag med om det mest fantastiska äventyret hittills."
    },
    {
        title: "Reflektioner",
        id: 7,
        dateCreated: "2022-07-10",
        dateLastEdited: "2022-07-15",
        bodyText: "Dagens inlägg handlar om några reflektioner jag gjort den senaste tiden."
    }
];*/

//---------------------------------------------------
//When nothing is searched for we show this cute cat:
//Variable for re-using this HTML-snippet:
const displayCatHTML = `<body>
<center><img src="../images/CatSearch.jpg" alt="Searching cat" style="max-width: 100%;"></center>
</body`

//Rende Cute cat when entering the page:
searchResultContainer.innerHTML = displayCatHTML;
//---------------------------------------------------


// TODO ta bort test anropet:
//renderSearchResults(tempArray)

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
}


// ======================================================
// TODO LOCIG FOR MODAL DISPLAY:
// Render preview-modal based of clicked result card.:
searchResultContainer.addEventListener('click', (event) => {
  /*  storing the value of dataset.noteId that is associated 
    with the closest parent of class .result-card (i therer is any) */

  //storing clicked card:
  const clickedCard = event.target.closest('.result-card');

  //if the clicked element is a result-card....
  //(else, the vallue of clickedCard is false).
  if (clickedCard) {
    console.log(clickedCard);

    //storing dataset.noteID.
    const noteIdeToDisplay = clickedCard.dataset.noteId;
    //console.log(noteIdeToDisplay);


    // finding the note to display in modal:
    const noteToPreview = searchResultsArray.find((note) => {
      return (note.id);
    });
    console.log(noteToPreview);
    console.log(noteIdeToDisplay)
  }

  // TODO rendering modal based on the noteId.
});



