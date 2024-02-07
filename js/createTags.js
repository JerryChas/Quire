function tagFunctionality(noteObject) {

    const addTagsButton = document.getElementById("add-tag_btn");
    const tagsLabelSpan = document.getElementById("tags_label")
    console.log(tagsLabelSpan)
    // console.log(addTagsButton)


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
                // console.log(noteObject)

                //if there is a array, we push it in to a array with force :) :
            } else {
                //...We check if the value exist in the array...
                if (noteObject.tags.includes(tagToSave)) {
                    //... if it exist we do nothing...
                    return;
                } else {
                    //... if it does not exist we push it in.
                    noteObject.tags.push(tagToSave);
                    // console.log(noteObject)
                }
            }
            //Save note for updating the date :)
            saveNote(noteObject)
            //Save all notes to local storage
            saveNotesToLocalStorage();
            // Reset input field value
        }
        tagInputField.value = "";
    }

}