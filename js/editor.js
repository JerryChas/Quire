//Funktion för att rendera ut notes i containern i main


//============================================
//Calling the render funktion with dubby data:
//This is dummy data just for development state:

// renderNotesMain({
//     title: "Mit första inlägg med en bild och så med",
//     id: 9999999,
//     dateCreated: "1995-12-25",
//     dateLastEdited: "1995-12-25",
//     isFavourite: true,
//     images: ["https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D", "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", "https://i.pinimg.com/736x/79/a3/16/79a3168cf52edca304ff32db46e0f888.jpg"],
//     bodyText: 'Dehär inlägget innehåller också lite bil :) Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare.'
// });


//============================================




/* **************************************************************** 
** This is the main funcktino that renders the note to the Ppage **
**************************************************************** */

function renderNotesMain(noteObject) {


    //render the editor to page:
    displayContainer.innerHTML = `
    <div id="editor">

        <!-- <div id="editor-tool-bar"> Här kan toolbar finnas om vi hinner utveckla avancerad editor</div> -->

        <div id="document_wrapping-container">

            <div id="note-document">

                <h1 id="note-headding_container" contenteditable="true">${noteObject.title}</h1>

                <div id="favourite-icon-container">
                <svg id="favourite-icon" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path id="favourite-icon-path"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                </div>

                <div id="meta-information_div">
                    <p id="date-stamp_div">Last edited ${noteObject.dateCreated} | Last edited ${noteObject.dateCreated}</p>
                    <div>
                        <span>Taggs:</span>
                        <span id="tags_container">(Här kan dokumentets taggar dyka upp)</span>
                        <button class="button" id="add-tagg_btn">+</button>
                    </div>
                    <div style="background-color: #eeeeee; font-size: 0.8rem">
                    (Här skulle det kunna ligga en knapp och en div som fylls med de bilder man har laddat in. Kanske som en simpel image carusell från internet. kanske code pen?)
                    </div>

                </div>



                <div id="note-body-text" contenteditable="true">
                    ${noteObject.bodyText} hej
                </div>

            </div>

        </div>

    </div>`;



    //listening for changes in textfelds and changeing the object to the new text:
    //then we call the save function.
    //We using value of innerhtml for prepparing the markup and rich editor functionality...
    const noteDocument = document.getElementById("note-document");
    noteDocument.addEventListener("input", (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.innerHTML)

        switch (e.target.id) {
            case "note-headding_container":
                noteObject.title = e.target.innerHTML
                console.log("heddingen redigerades")
                break;
            case "note-body-text":
                noteObject.bodyText = e.target.innerHTML
                console.log("bodytexten redigerades")
                break;

            default:
                break;
        }

        // todo: kalla på sparafunktinen:
        saveNote(noteObject);

    });


    //todo: om objektet har bilder så renderar vi ut de.


    //checking if the star is going to be yellow or not
    styleOfFavouriteStar(noteObject);
}

/** ******************* End of main function *********************
**************************************************************** */


// 
// 


// ==============================================================
// Other functions tat the main funchtion uses is comming here:
// ---------------------------------------------------------------

//put the favourite icon in the right style based of if the note is fav or not:
function styleOfFavouriteStar(noteObject) {
    if (noteObject.isFavourite) {
        //hooking up the favouriteicon:
        const favouriteIconPath = document.querySelector("#favourite-icon-path");
        console.log("den här noten är en favorit");
        favouriteIconPath.style.fill = "#EFBD02";
    }
}