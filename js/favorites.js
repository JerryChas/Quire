function favorite(changedNote){

  //Saves the notes to local storage
  function saveToLocalStorage() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(changedNote);
    console.log('fghvb');
    // If the note is a favorite, it gets pushed to the favorites
    if (changedNote.isFavourite == true) {
      favorites.push(changedNote);

    //   //Otherwise it removes it from favorites
    } else {
      localStorage.setItem("favorites", JSON.stringify(favorites.filter((favNote) => favNote.id !== changedNote.id)));
      return;
    }

    //Saves the favorites to localstorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  saveToLocalStorage();
}