//Funktion för att rendera ut notes i containern i main

//============================================
//Calling the render funktion with dubby data:
//This is dummy data just for development state:

// renderNotesMain({
//   title: "Mit första inlägg med en bild och så med",
//   id: 9999999,
//   dateCreated: "1995-12-25",
//   dateLastEdited: "1995-12-25",
//   isFavourite: true,
//   images: ["https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D", "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", "https://i.pinimg.com/736x/79/a3/16/79a3168cf52edca304ff32db46e0f888.jpg"],
//   bodyText: 'Dehär inlägget innehåller också lite bil :) Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare.'
// });

//============================================

/* ****************************************************************
 ** This is the main functtino that renders the note to the Ppage **
 **************************************************************** */

function renderNotesMain(noteObject) {
  //render the editor to page:
  displayContainer.innerHTML = `
    <div id="editor">

        <div id="editor-tool-bar">
        <button class="editorbutton option-button" id="bold"><i class="fa-solid fa-bold" style="color: #000000;"></i></button>
        <button class="editorbutton option-button" id="italic"><i class="fa-solid fa-italic" style="color: #000000;"></i></button>
        <button class="editorbutton option-button" id="insertOrderedList"><i class="fa-solid fa-list-ol" style="color: #000000;"></i></button>
        <button class="editorbutton option-button" id="insertUnorderedList"><i class="fa-solid fa-list" style="color: #000000;"></i></button>
        <button class="editorbutton option-button" id="underline"><i class="fa-solid fa-underline" style="color: #000000;"></i></button> 
        <button class="editorbutton" id="print"><i class="fa-solid fa-print" style="color: #000000;"></i></button>
        <select id="dropdown">
        </select>
        <select name="font" id="font-dropdown" class="editorbutton">
        <option value="" selected disabled hidden>Change font</option>
        <option value="" id="font0">Default font</option>
        <option value="Courier Prime" id="font1">Courier Prime</option>
        <option value="Dancing Script" id="font2">Dancing Script</option>
        <option value="Nunito" id="font3">Nunito</option>
        <option value="Wavefont" id="font4">Wavefont</option>
        </select>
        <button id="markdownbutton" class="editorbutton">Markdown</button> 
        </div>

        <div id="document_wrapping-container">
        
        <div id="water-mark">
          <div #water-mark-logo"><i class="fa-brands fa-quora fa-4x"></i></div>
          <div class="text-div">This note was created in <br>the free version of Quire!</div>
        </div>

            <div id="note-document" class="note-document">

                <h1 id="note-headding_container" contenteditable="true">${
                  noteObject.title
                }</h1>

                <div id="favourite-icon-container">
                <svg id="favourite-icon" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path id="favourite-icon-path"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                </div>

                <div id="meta-information_div">
                    <p id="date-stamp_div">Created ${
                      noteObject.dateCreated.split(" ")[0]
                    } | Last edited ${
    noteObject.dateLastEdited.split(" ")[0]
  }</p>
                    <div>
                        <span id="tags_label">Tags: </span>
                        <button class="button" id="add-tag_btn">+</button>
                        <div id="tags_container"></div>
                    </div>
                    <button class="button add-img_btn">Add image</button>
                    <div class="add-img_modal"></div>    
                    <div id="dynamic-image-carousel_container">
                    <!--THIS IS THE AREA FOR THE IMAGE CAROUSEL THAS EXIST IF THERE IS ANY IMAGES IN THE NOTE-->
                    </div>

                </div>



                <div id="note-body-text" contenteditable="true">
                    ${noteObject.bodyText}
                </div>

            </div>

        </div>

    </div>`;

  //adding dynamic place holders:
  const headdingTextField = document.getElementById("note-headding_container");
  const bodyTextField = document.getElementById("note-body-text");
  const defaultheading = "New note";
  placeholderLogic(headdingTextField, defaultheading);
  placeholderLogic(bodyTextField, "What's on your mind?...");

  //Gets font options from drop down menu
  function getFont() {
    let fontSelector = document.getElementById("font-dropdown");
    return fontSelector.value;
  }

  //Applies the font to the bodytext
  function applyFont() {
    let chosenFont = getFont();
    let noteText = document.getElementById("note-body-text");

    let fontSize = '16px';

    //Changes the fontsize based on type of font
    if(chosenFont === 'Wavefont'){
      fontSize = '50px';
    }

    if(chosenFont === 'Dancing Script'){
      fontSize = '22px';
    }

    console.log(fontSize);

    noteText.style.fontFamily = chosenFont;

    noteObject.font = chosenFont;
    noteText.style.fontSize = fontSize;

    saveNote(noteObject);
  }

  if (noteObject.font) {
    let noteText = document.getElementById('note-body-text');
    noteText.style.fontFamily = noteObject.font;
  }

  document.getElementById("font-dropdown").addEventListener("change", applyFont);

  //listening for changes in textfelds and changeing the object to the new text:
  //then we call the save function.
  //We using value of innerhtml in bodytext for prepparing the markup and rich editor functionality...
  const noteDocument = document.getElementById("note-document");
  noteDocument.addEventListener("input", (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.innerHTML)

    switch (e.target.id) {
      case "note-headding_container":
        noteObject.title = e.target.textContent;
        console.log("heddingen redigerades");
        break;
      case "note-body-text":
        noteObject.bodyText = e.target.innerHTML;
        console.log("bodytexten redigerades");
        break;

      default:
        break;
    }

    //fallback:
    //setting default headding, if there is none from the user:
    if (noteObject.title == false) {
      noteObject.title = "New note";
    }

    // Call the save function:
    saveNote(noteObject);
  });

  //call function that render the image-carousel if there is any images in the note:
  if (noteObject.images.length > 0) {
    renderImageCarousel(noteObject.id);
  }

  //checking if the star is going to be yellow or not
  styleOfFavouriteStar(noteObject);
  //call the function that listening for klick on the star:
  toggleFavorite(noteObject);

  //Activate/access the function for rendering optional textstyle
  activatingRichTextStyle();

  // funktionaliity to print BUttoN
  const printBtn = document.getElementById("print");
  printBtn.addEventListener("click", () => {
    print();
  });

  /* ------THEMES for each note---(Dropdown)--- */
  noteThemes(noteObject);

  /* ------add IMAGE to note------ */
  imgToNote(noteObject);

  // Activate tag-functionality:
  tagFunctionality(noteObject);

  // ------------------------------------ Function to convert regular text to Markdown ------------------------------------
  function convertToMarkdown(text) {
    // Replace HTML tags with Markdown syntax
    text = text.replace(/<b>(.*?)<\/b>/gi, '**$1**')
      .replace(/<i>(.*?)<\/i>/gi, '*$1*')
      .replace(/<s>(.*?)<\/s>/gi, '~~$1~~')
      .replace(/<code>(.*?)<\/code>/gi, '`$1`')
      .replace(/<blockquote>(.*?)<\/blockquote>/gi, '\n> $1\n')
      .replace(/<ul>(.*?)<\/ul>/gi, '\n$1\n')
      .replace(/<li>(.*?)<\/li>/gi, '\n* $1')
      .replace(/<ol>(.*?)<\/ol>/gi, '\n$1\n')
      .replace(/<li>(.*?)<\/li>/gi, '\n1. $1');

    return text;
  }

  // ------------------------------------ Function to convert Markdown to regular text ---------------------------------------
  function convertFromMarkdown(markdownText) {
    // Replace Markdown syntax with HTML tags
    markdownText = markdownText.replace(/\*\*(.*?)\*\*/gi, '<b>$1</b>')
      .replace(/\*(.*?)\*/gi, '<i>$1</i>')
      .replace(/~~(.*?)~~/gi, '<s>$1</s>')
      .replace(/`(.*?)`/gi, '<code>$1</code>')
      .replace(/\n> (.*?)\n/gi, '<blockquote>$1</blockquote>')
      .replace(/\n\*(.*?)\n/gi, '<ul><li>$1</li></ul>')
      .replace(/\n\d\.(.*?)\n/gi, '<ol><li>$1</li></ol>');

    return markdownText;
  }

  // ===================================
  // ======= VIKTORS CUSTOM GTAG =======
  noteDocument.addEventListener("keydown", (event) => {

    /* min Förklaring: 
    Jag tänkter att man som administratör eller utvecklare av systemet 
    här kan se vilken tid på dagen som användarna är mest aktiv .
    Man kan även med denna gtag se vilken sorts användning användaren 
    ägnar sig åt. skapande eller raderande :) 
    Enligt internet kan man i google analytics sedan skapa diagram som 
    visualiserar när på dygnet användaren är mest aktiv, samt om den 
    lägger till eller tar bort grejjor.*/

    //geting the current time in  hours and minutes: 
    let editTime = new Date();
    const hour = editTime.getHours();
    const minute = editTime.getMinutes();
    editTime = hour + "." + minute;

    let editType;
    //define edit type
    if (event.key == "Backspace") {
      editType = "DELETE"
    } else {
      editType = "WRITE"
    }

    // console.log(editTime);
    // console.log(editType);

    gtag("event", "edit_note", {
      "edit_time": editTime,
      "edit_type": editType
    });

  });
  // ------- End of Viktors gtag -------
  // ===================================

}

/** ******************* End of main function *********************
 **************************************************************** */

//
//
//

// ==============================================================
// Other functions tat the main funchtion uses is comming here:
// ---------------------------------------------------------------

//put the favourite icon in the right style based of if the note is fav or not:
function styleOfFavouriteStar(noteObject) {
  const favouriteIconPath = document.querySelector("#favourite-icon-path");
  if (noteObject.isFavourite) {
    //hooking up the favouriteicon:
    // console.log("den här noten är en favorit");
    favouriteIconPath.style.fill = "#EFBD02";
  } else {
    // console.log("den här noten är inte en favorit");
    favouriteIconPath.style.fill = "none";
  }
}

// ---------------------------------------------------------------

//Adding dynamic placeholder text in textelds when there is othing inthere from the user:
function placeholderLogic(textfield, placeholdertext) {
  // when the notes opens and the is nithing in the textfield....
  // --- add placeholder text.
  // --- change color.
  if (textfield.innerHTML == false) {
    textfield.innerHTML = placeholdertext;
    textfield.style.color = "rgba(125, 125, 125, 0.500)";
    textfield.dataset.isFilled = false;
  }
  // when focused and dataset.isFilled=false...
  // --- removse the placeholder color.
  // --- remove the placeholdertext.
  textfield.addEventListener("focus", () => {
    if (textfield.dataset.isFilled === "false") {
      textfield.removeAttribute("style");
      textfield.innerHTML = "";
      textfield.dataset.isFilled = true;
    }
  });
  // when the use unfocus the field and there still is no headding...
  // --- Whe do the same thing as in the first step.
  textfield.addEventListener("blur", () => {
    if (textfield.innerHTML == false) {
      textfield.innerHTML = placeholdertext;
      textfield.style.color = "rgba(125, 125, 125, 0.500)";
      textfield.dataset.isFilled = false;
    }
  });
}

// ---------------------------------------------------------------
