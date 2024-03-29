function tagFunctionality(noteObject) {

    const addTagsButton = document.getElementById("add-tag_btn");
    const tagsLabelSpan = document.getElementById("tags_label")
    const tagsContainer = document.getElementById("tags_container");

    //render the tags when de note displays at first... :) 
    renderTags(noteObject);

    addTagsButton.addEventListener("click", (e) => {
        //chack if it already exixt in the span:
        let tagInputField = document.getElementById("tag-input");
        //om existingInputfield dont have any value, we add it. else nothing.: 
        if (!tagInputField) {
            tagsLabelSpan.innerHTML += `<input type="text" id="tag-input">`
            const tagInput = document.getElementById("tag-input");
            addTagsButton.innerHTML = "Add tag"
            tagInput.focus();
            //adding value to the variable for later eventlisteners
            tagInputField = document.getElementById("tag-input");
        }

        //hooking upp ways to save:
        addTagsButton.addEventListener("click", saveTagInput)
        tagInputField.addEventListener("keyup", function (e) {
            if (e.key === 'Enter') {
                saveTagInput();
            }
        });
    });

    function saveTagInput() {
        const tagInputField = document.getElementById("tag-input");

        // erase empty space in start and end
        let tagToSave = tagInputField.value.trim();

        // if there is any real value we put the tag into the noteobject:...
        if (tagToSave) {
            // if there is a array already ...:
            if (!Array.isArray(noteObject.tags)) {
                //... if not, we create ant put the tag in...
                noteObject.tags = [tagToSave];
                

                //if there is a array, we push it in to a array with force :) :
            } else {
                //...We check if the value exist in the array...
                if (noteObject.tags.includes(tagToSave)) {
                    //... if it exist we do nothing...
                    return;
                } else {
                    //... if it does not exist we push it in.
                    noteObject.tags.push(tagToSave);
                    
                }
            }
            //Save note for updating the date :)
            saveNote(noteObject)
            //Save all notes to local storage
            saveNotesToLocalStorage();
            // Reset input field value
        }
        tagInputField.value = "";
        renderTags(noteObject);
    }

    function renderTags(noteObject) {
        //if there is any tags:
        if (noteObject.tags) {
            const tagsToRender = noteObject.tags.map((tag) => {
                return `<div class="small-tag-labels">
                    <span>${tag}</span>
                    <span class="tag-labels-delete-buttons" data-delete-tag="${tag}">X</span>
                </div>`
            }).join("");
            
            tagsContainer.innerHTML = tagsToRender;
        }
    }

    //deletefunctionality:
    tagsContainer.addEventListener("click", (e) => {
        // if the targes has a dataset.deleteTag. we do stuff....
        // ..means.. if the target is a delede-button. we do stuff....
        if (e.target.dataset.deleteTag) {

            //macing a new Updated array containing all tags except of the one to delete:
            const updatedTagsArray = noteObject.tags.filter((tag) => {
                return tag !== e.target.dataset.deleteTag;
            })

            //updating the note w the updated array:
            noteObject.tags = updatedTagsArray

            //Save note for updating the date :)
            saveNote(noteObject)
            //Save all notes to local storage
            saveNotesToLocalStorage();
            // Reset input field value

            //render the tags to page again:
            renderTags(noteObject);

        }
    })

}