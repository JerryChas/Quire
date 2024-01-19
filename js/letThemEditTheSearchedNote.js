function sendUserToEditor(event) {

    //Storing the if of the note that the user want to edit:
    const noteIdToEdit = event.target.dataset.noteId;

    //Storing the note in local storag:
    localStorage.setItem("recentNote", noteIdToEdit);

    /* Redirect the user to index.html where the page will automatically open
   the note that corresponds to the stored ID from local storage: */
    location.href = "index.html";



    // console.log("===========================================")
    // console.log("anteckning som användaren vill redigera: ", noteIdToEdit)
    // console.log("hämtad anteckning från local storage id:", hejj);




}