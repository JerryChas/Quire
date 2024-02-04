/* -------------------------ADD IMAGE TO NOTE----------------------------- */

function imgToNote(noteObject) {
  //*--------------------------------FUNCTIONS------------------------------*//
  // Function to start the Img Modal PopUp Window
  function renderAddImgModal() {
    console.log(`(open modal) noteID: ${noteObject.id}`); //!  DEBUGGING

    // Modal content
    const modal = document.querySelector('.add-img_modal');
    modal.innerHTML = `
    <div class="image-preview_container"> 
    </div>
    <input id="img-url_input" type="url" placeholder="Paste your URL of your favorite image"></input>
    <button class="button add-img-to-note_btn">Add to notes</button>
    `;

    // display add-img_modal
    toggleModal();

    // Get elements inside the modal and assign them as variables
    const imgUrlInput = document.getElementById('img-url_input');
    const imagePreviewContainer = document.querySelector('.image-preview_container');
    const addImgToNoteBtn = document.querySelector('.add-img-to-note_btn');

    // Input function to get the URL from the user
    imgUrlInput.addEventListener('input', () => {
      const imageUrl = imgUrlInput.value;

      //  If there is a valid url, show it in the preview container
      if (isValidUrl(imageUrl)) {
        // Check if url contains real image or not
        checkIfImageExists(imageUrl, (exists) => {
          if (exists) {
            //  Show the preview by creating an 'img' element with the source being the provided url
            imagePreviewContainer.innerHTML = `
            <img src="${imageUrl}" alt="image from user" width="250">
          `;
            //  Enable the "Add Image To Note" button
            addImgToNoteBtn.disabled = false;

            // If there isn't a eventlistener already
            if (!addImgToNoteBtn.clickEventAdded) {
              //   Add a click event listener that adds the image to the note when clicked
              addImgToNoteBtn.addEventListener('click', () => {
                handleAddImageToNote(noteObject, imageUrl);
              });
            }
            addImgToNoteBtn.clickEventAdded = true; //  Mark this so we don't add the event listener again next time
          } else {
            //  show message if the link doesn't contain any image
            console.error('Image does not exist.');
            imagePreviewContainer.innerHTML = 'Image not found';

            addImgToNoteBtn.disabled = true; //  Disable the "Add Image To Note" button
          }
        });
      } else {
        //  show error message if the input isn't a valid url
        console.error('Invalid URL.');
        // Display error message
        imagePreviewContainer.innerHTML = 'Please submit a valid URL';

        addImgToNoteBtn.disabled = true; //   Disable the "Add Image To Note" button
      }
    });
  }
  
  // Toogle Modal (add image modal)
  function toggleModal() {
    const modal = document.querySelector('.add-img_modal');
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    } else {
      modal.style.display = 'block';

      window.addEventListener('click', (e) => {
        if (e.target !== modal && !modal.contains(e.target)) {
          modal.style.display = 'none';
        }
      });
    }
    
  }

  // Check if the URL is valid
  function isValidUrl(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  }

  function handleAddImageToNote(noteObject, imageUrl) {
    addImageToNote(noteObject, imageUrl);
    // Uppdatera local storage med de nya noterna
    saveNotesToLocalStorage();
    // Stäng modalen
    toggleModal();

    // Uppdatera DOM:en för att visa de nya noterna
    renderNotesMain(noteObject);
  }

  // Add image to note
  function addImageToNote(noteObject, url) {
    noteObject.images.push(String(url));

    console.log(noteObject); //!  DEBUGGING

    // IF this is a new note and the user hasn't set the title to something, we need to give it a default title so it can appear in the sidebar.:
    if (noteObject.title == '') {
      noteObject.title = 'New note';
    }
    renderNotesAsideList();
  }
  //*-------------------------------------------------------------------------*//

  const addImgBtn = document.querySelector('.add-img_btn');
  addImgBtn.addEventListener('click', (e) => {
    console.log('Clicked: "Add image"  noteID:', e.target.dataset.noteId); //!  DEBUGGING
    e.stopPropagation();
    renderAddImgModal()
  });
   


}