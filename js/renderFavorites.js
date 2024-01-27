function renderFavorites() {

const displayFavorite = document.getElementById("favorite-container");

console.log(displayFavorite);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  //Displays favorites on the page
  if (favorites.length > 0) {
    displayFavorite.innerHTML = `
            <h4 id="favorites"> Dina favoriter </h4>
            <div class="your_favorites"> </div>
            `;

    const favoritesContainer = document.querySelector(".your_favorites");

    //For each favorite note, it creates a div with title and content
    favorites.forEach((favNote) => {
      const favoriteNote = document.createElement("div");
      favoriteNote.classList.add("favorite-note");

      favoriteNote.innerHTML = `
                <h5 id="favtitle">${favNote.title}</h5>
                <p id="favcontent">${favNote.bodyText}</p>
                `;

      favoritesContainer.appendChild(favoriteNote);
    });

    // If you don't have a favorite, this renders
  } else {
    displayFavorite.innerHTML = `
            <h4 id="favorites">Dina favoriter</h4>
            <div class="no_favorites"> Du har inga favoriter. </div>
            `;
  }
}
renderFavorites();
