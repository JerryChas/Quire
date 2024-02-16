function toggleFavorite(noteObject) {
    const starButton = document.getElementById("favourite-icon");

    // Creates click event when clicked and toggles status of isFav
    starButton.addEventListener("click", function () {
        
        //Alicias spårningskod, kollar hur många gånger stjärnan klickas på i editorn
        gtag("event", "star_click", {
        event_category: "Button",
        event_label: "star_button",
        });

        let changedNote = notes.find((note) => {
            return note.id == noteObject.id;
        });

        console.log(changedNote);

        if (changedNote) {
            //Checking if changedNote is undefined
            changedNote.isFavourite = !changedNote.isFavourite;
            console.log(notes);
            console.log(changedNote);
        } else {
            console.error("Note not found");
        }
        localStorage.setItem("notes", JSON.stringify(notes));
        styleOfFavouriteStar(noteObject);
    });

}
