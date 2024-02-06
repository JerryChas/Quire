function tagFunctionality(noteObject) {

    const addTagsButton = document.getElementById("add-tag_btn");
    const tagsLabelSpan = document.getElementById("tags_label")
    console.log(tagsLabelSpan)
    // console.log(addTagsButton)


    addTagsButton.addEventListener("click", (e) => {
        //chack if it already exixt in the spa:
        const tagInputField = document.getElementById("tag-input");
        //om existingInputfield bär värde så lägger vi inte till den igen: 
        if (!tagInputField) {
            tagsLabelSpan.innerHTML += `<input type="text" id="tag-input">`
            const tagInput = document.getElementById("tag-input");
            addTagsButton.innerHTML = "Add tag"
            tagInput.focus();
        }

        //hooking upp ways to save:
        addTagsButton.addEventListener("click", saveTagInput)

    });

    function saveTagInput() {
        console.log("saraspara")




    }











}