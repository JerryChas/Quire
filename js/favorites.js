//Gets the container from HTML
const displayContainer = document.getElementById('display_container');

const starButton = document.getElementById("favourite-icon");

//Creates an event on click
starButton.addEventListener('click',toggleFavorite);

//Toggles the favorite notes
function toggleFavorite(){
    note.isFavourite = !note.isFavourite;

    saveToLocalStorage(note);

    renderFavorites();
}

//Saves the notes to local storage
function saveToLocalStorage(){
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    //If the note is a favorite, it gets pushed to the favorites
    if(note.isFavourite){
        favorites.push(note);
    
    //Otherwise it removes it from favorites
    } else {
        localStorage.setItem('favorites', JSON.stringify(favorites.filter(favNote => favNote.id !== note.id)));
        return;
    }

    //Saves the favorites to localstorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function renderFavorites(){
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    //Displays favorites on the page
    if(favorites.length > 0){
        displayContainer.innerHTML = `
        <h4 id="favorites"> Dina favoriter </h4>
        <div class="your_favorites"> </div>
        `;

        const favoritesContainer = document.querySelector('.your_favorites');

        //For each favorite note, it creates a div with title and content
        favorites.forEach(favNote =>{
            const favoriteNote = document.createElement('div');
            favoriteNote.classList.add('favorite-note');

            favoriteNote.innerHTML = `
            <h5>${favNote.title}</h5>
            <p id="fav_content">${favNote.content}</p>
            `;

            favoritesContainer.appendChild(favoriteNote);
        });

    // If you don't have a favorite, this renders
    } else {
        displayContainer.innerHTML = `
        <h4 id="favorites">Dina favoriter</h4>
        <div class="no_favorites"> Du har inga favoriter. </div>
        `;
    }
}
