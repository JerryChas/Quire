// Store selected note and go to index.html
function storeNoteAndGoToEditor(noteObject) {
  localStorage.setItem('selectedNote', JSON.stringify(noteObject));
  window.location.href = 'index.html';
}

//  Function for "click n go" -to index.html with specific note
function clickButton(button, noteObject) {

  const trigger = document.querySelector(button);
  console.log(trigger); //! DEBUGGING
  trigger.addEventListener('click', () => {
    console.log('klickat på edit'); //! DEBUGGING
    storeNoteAndGoToEditor(noteObject);
  });
}
