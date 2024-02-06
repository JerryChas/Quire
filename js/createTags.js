function tagFunctionality(noteObject) {

    const addTagsButton = document.getElementById("add-tag_btn");
    const tagsLabelSpan = document.getElementById("tags_label")
    console.log(tagsLabelSpan)
    // console.log(addTagsButton)

    addTagsButton.addEventListener("click", () => {

        tagsLabelSpan.innerHTML += `<input type="text" id="tag-input">`
        const tagInput = document.getElementById("tag-input");
        tagInput.focus();
    });

}