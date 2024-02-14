
//This Function takes the entire note as an object :)

function previewModal(noteToPreview) {
    //adding html for modal:
    searchResultContainer.innerHTML += `
    <div id="preview-background-plate">
        <div id="preview-container">
        <div id="modal-exit-button">X</div>
            <h2>${noteToPreview.title}</h2>
            <p class="date-information"> Created ${noteToPreview.dateCreated} | Last edited ${noteToPreview.dateLastEdited}</p>
            <p id="preview-body-text">${noteToPreview.bodyText}</p>
        </div>
    </div>`

    //store the background plate ande exit-button in a variable.
    const backgroundPlate = document.getElementById("preview-background-plate");
    const modalExitBtn = document.getElementById("modal-exit-button");

    //if background or cross is clicked the modal closes:
    backgroundPlate.addEventListener("click", (event) => {
        if (!event.target.closest("#preview-container")) {
            exitModal();
        }

    });
    modalExitBtn.addEventListener("click", exitModal);

    function exitModal() {
        backgroundPlate.remove();
    };
}