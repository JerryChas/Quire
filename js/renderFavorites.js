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

      // Creating a snippet of the body text to display in the card:
      let bodyTextSnippet = favNote.bodyText.substring(0, 100);
    
      //Adding dots in the end if necessary
      if (favNote.bodyText.length > 100) {
        bodyTextSnippet += ' ...';
      }

      favoriteNote.innerHTML = `
                <h5 id="favtitle">${favNote.title}</h5>
                <p id="favcontent">${bodyTextSnippet}</p>
                `;

      favoritesContainer.appendChild(favoriteNote);
    });

    // If you don't have a favorite, this renders
  } else {
    displayFavorite.innerHTML = `
            <h4 id="favorites"> Your Favorite Notes  </h4>
            <div class="no_favorites"> You don´t have any favorites yet.. </div>
            `;
  }
}
renderFavorites();

