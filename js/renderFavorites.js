function renderFavorites() {
  const displayFavorite = document.getElementById("favorite-container");
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const favorites = notes.filter((note) => note.isFavourite);

  //Displays favorites on the page
  if (favorites.length > 0) {
    displayFavorite.innerHTML = `
            <h4 id="favorites"> Your Favorite Notes</h4>
            <div class="your_favorites"> </div>
            `;

    const favoritesContainer = document.querySelector(".your_favorites");

    //For each favorite note, it creates a div with title and content
    favorites.forEach((favNote) => {
      const favoriteNote = document.createElement('div');
      favoriteNote.classList.add('favorite-note');
      //Adding dataset to identidy the note:
      favoriteNote.setAttribute('data-note-id', favNote.id);

      // Creating a snippet of the body text to display in the card:
      let bodyTextSnippet = favNote.bodyText.substring(0, 100);

      //Adding dots in the end if necessary
      if (favNote.bodyText.length > 100) {
        bodyTextSnippet += ' ...';
      }

      //Adding the star to favorites-page
      favoriteNote.innerHTML = `
                <h5 id="favtitle">${favNote.title}</h5>
                <div id="favourite-icon-div">
                <svg class="favorite-icon2" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path id="favourite-icon-path"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                </div>
                <p id="favcontent">${favNote.bodyText}</p>
                `;

      const starBtn = favoriteNote.querySelector("#favourite-icon-path");

      //If its favorite or not, change color
      if (favNote.isFavourite) {
        starBtn.style.fill = "#EFBD02";
      } else {
        starBtn.style.fill = "#FFFFFF";
      }

      favoritesContainer.appendChild(favoriteNote);

      starBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        let changedNote = notes.find((note) => {
          return note.id == favNote.id;
        });
        if (changedNote) {
          //Checking if changedNote is undefined
          changedNote.isFavourite = !changedNote.isFavourite;
        } else {
          console.error("Note not found");
        }
        localStorage.setItem("notes", JSON.stringify(notes));
        if (favNote.isFavourite) {
          starBtn.style.fill = "#EFBD02";
        } else {
          starBtn.style.fill = "#FFFFFF";
        }
      });

    });


    // Calling modal based of clicked card.:
    favoritesContainer.addEventListener('click', (event) => {
      console.log("vi är inne i klick")

      //storing clicked card:
      const clickedCard = event.target.closest('.favorite-note');

      //if the clicked element is a valid card we will show the modal....
      //(else, the value of clickedCard is false).
      if (clickedCard) {

        //storing dataset.noteID.
        const noteIdeToDisplay = clickedCard.dataset.noteId;
        //console.log(noteIdeToDisplay);
        console.log(clickedCard.dataset);

        // finding the note to preview in modal:
        const noteToPreview = notes.find((note) => {
          return (note.id == noteIdeToDisplay);
        });

        //calling th preview Modal:
        previewModal(noteToPreview)

      }

    });
    //--------------end of modal calling--------------

    // If you don't have a favorite, this renders
  } else {
    displayFavorite.innerHTML = `
            <h4 id="favorites"> Your Favorite Notes  </h4>
            <div class="no_favorites"> You don't have any favorites yet.. </div>
            `;
  }
}
renderFavorites();
