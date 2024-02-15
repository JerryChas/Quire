
const bodyTag = document.querySelector("body");
console.log(bodyTag);


//This Function takes the entire note as an object :)

function previewModal(noteToPreview) {
    //adding html for modal:
    //creating a div to will:
    const divForModal = document.createElement('div');
    divForModal.innerHTML = `
    <div id="preview-background-plate">
        <div id="preview-container">
        <div id="modal-exit-button">X</div>
            <h2>${noteToPreview.title}</h2>
            <p class="date-information"> Created ${noteToPreview.dateCreated} | Last edited ${noteToPreview.dateLastEdited}</p>
            <p id="preview-body-text">${noteToPreview.bodyText}</p>
            <button class="button">Edit</button>
        </div>
    </div>`;

    // get parent for mainContainer(the main container is the body tag. And the parent will be the html...)
    // this is a tjorv just to get this towork hehe.
    const mainContainersParentElement = bodyTag.parentNode;
    //place the container directly in the html tagg:
    mainContainersParentElement.insertBefore(divForModal, bodyTag);


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
        //Deleting the div:
        divForModal.remove();
    };
}