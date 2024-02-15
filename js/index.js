/* Creates variable for the id and keeps track of the last id
If there is no id the counter starts at 0 */
let idCounter = parseInt(localStorage.getItem("lastNoteId")) || 0;

//Creates variable for date
let dateToday;

//Get notes from localStorage or an empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [
  //!-----------------------------------------DUMMY NOTES----------------------------------!//

  {
    title: "Mitt första inlägg",
    id: 999999999901,
    dateCreated: "1995-12-25",
    dateLastEdited: "1995-12-25",
    isFavourite: true,
    images: [],
    tags: ["Banan"],
    bodyText:
      "Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare. Utökad text för att skapa intresse och engagemang.",
    tags: [
      "blogg",
      "första",
      "erfarenheter",
      "intresse",
      "gemensamtagg1",
      "gemensamtagg2",
    ],
  },
  {
    title: "🐈 MÅNGA bilder ",
    id: 999999999902,
    dateCreated: "1995-12-25",
    dateLastEdited: "1995-12-25",
    isFavourite: true,
    images: [
      "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D",
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
      "https://i.pinimg.com/736x/79/a3/16/79a3168cf52edca304ff32db46e0f888.jpg",
    ],

    bodyText:
      "Kolla vad många bilder på gulliga katter jag hittat på internet! Jag älskar katter :) 🐈",
    tags: [
      "katt",
      "bilder",
      "gullig",
      "internet",
      "intresse",
      ,
      "gemensamtagg1",
      "gemensamtagg2",
    ],
  },
  {
    title: "only one 🐈‍⬛ 📷",
    id: 999999999903,
    dateCreated: "1995-12-25",
    dateLastEdited: "1995-12-25",
    isFavourite: true,
    images: [
      "https://fourfriends.se/wp-content/uploads/2018/10/neva-masquerade-kitten-fourfriends.jpg",
    ],

    bodyText:
      "Gulligaste katten jag sett. Den förtjänar en egen anteckning. <br> Kolla också vad häftig denhär appen är som inte visar några thumbnails eller pilar när det bara finns EN bild :) WOW!",
    tags: ["katt", "gullig", "appen", "gemensamtagg1", "gemensamtagg2"],
  },
  {
    title: "Min resa till fjällen",
    id: 999999999904,
    dateCreated: "2023-05-10",
    dateLastEdited: "2023-05-15",
    isFavourite: false,
    images: [],
    tags: [],
    bodyText:
      "En fantastisk resa till fjällen! Jag ville uppleva naturens skönhet och lugn. Denna resa har gett mig minnen för livet. Här delar jag med mig av mina upplevelser och bilder från vackra platser.",
  },
  {
    title: "En dag i mitt programmeringsliv",
    id: 999999999905,
    dateCreated: "2024-01-26",
    dateLastEdited: "2024-01-26",
    isFavourite: true,
    images: [],
    tags: [],
    bodyText:
      "Idag hade jag en intensiv dag med kodning. Arbetade med spännande projekt och löste knepiga problem. Här delar jag med mig av min dag och några kodsnuttar.",
  },
  {
    title: "Mina favoritböcker",
    id: 999999999906,
    dateCreated: "2023-08-15",
    dateLastEdited: "2023-08-20",
    isFavourite: false,
    images: [],
    tags: [],
    bodyText:
      "Läsning är en passion! Här är några av mina favoritböcker. Delar med mig av recensioner och varför jag älskar varje bok.",
  },
  {
    title: "Mitt bästa recept: Pasta Carbonara",
    id: 999999999907,
    dateCreated: "2023-03-05",
    dateLastEdited: "2023-03-05",
    isFavourite: true,
    images: [],
    tags: [],
    bodyText:
      "Att laga mat är lika roligt som att koda! Delar med mig av mitt bästa recept på Pasta Carbonara. Steg för steg guide och läckra bilder.",
  },
  {
    title: "Min trädgårdsodling",
    id: 999999999908,
    dateCreated: "2023-07-20",
    dateLastEdited: "2023-07-25",
    isFavourite: false,
    images: [],
    bodyText:
      "Gröna fingrar i aktion! Delar med mig av min trädgårdsodling. Från plantering till skörd, en resa fylld av grönsaksglädje.",
  },
  {
    title: "En dag på stranden",
    id: 999999999909,
    dateCreated: "2023-06-12",
    dateLastEdited: "2023-06-12",
    isFavourite: true,
    images: [],
    bodyText:
      "Solen, sanden och havet! En perfekt dag på stranden. Här delar jag med mig av de avkopplande stunderna och solnedgången över horisonten.",
  },
  {
    title: "Mitt nya projekt: Digitalt anteckningsblock",
    id: 999999999910,
    dateCreated: "2024-02-10",
    dateLastEdited: "2024-01-15",
    isFavourite: false,
    images: [],
    tags: [],
    bodyText:
      "Arbetar på ett spännande projekt! Ett digitalt anteckningsblock som förenklar livet. Delar med mig av mina framsteg och några kodsnuttar från projektet.",
  },
  {
    title: "Mina favoritplatser i staden",
    id: 999999999911,
    dateCreated: "2023-09-28",
    dateLastEdited: "2023-09-28",
    isFavourite: true,
    images: [],
    tags: [],
    bodyText:
      "Staden har så många underbara platser att erbjuda. Här delar jag med mig av mina favoritplatser och varför de är speciella för mig.",
  },
  {
    title: "Min första vecka som fullstack utvecklare",
    id: 999999999912,
    dateCreated: "2022-01-26",
    dateLastEdited: "2022-01-26",
    isFavourite: false,
    images: [],
    tags: [],
    bodyText:
      "En spännande start som fullstack utvecklare! Delar med mig av mina upplevelser, lärdomar och några kodsnuttar från min första vecka i branschen.",
    tags: ["hej"],
  },

  //!-----------------------------------------------------------------------------------------------------!//
];

// Hämtar knappen
const addNewBtn = document.getElementById("add-new_btn");

//* ---------- FUNCTIONS ---------- *//

//Saves id to note and saves it to localStorage
function saveNotesToLocalStorage() {
  sortNotesByLastEdited();
  localStorage.setItem("notes", JSON.stringify(notes));
}

function sortNotesByLastEdited() {
  return notes.sort((a, b) => {
    return new Date(a.dateLastEdited) > new Date(b.dateLastEdited) ? -1 : 1;
  });
}

// Function to get current date and time
function getDateTimeStamp() {
  const now = new Date();

  // Get date and time
  const dateTime = now.toLocaleString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Extract date part only
  const date = dateTime.split(",")[0]; // Split on comma to separate date and time, and take the date part

  return dateTime;
}

let note;

// Generates new id to every note
function generateID() {
  idCounter += 1;
  //store the last id that was set:
  localStorage.setItem("lastNoteId", JSON.stringify(idCounter));
  return idCounter;
}

// Gets inputs from user
function getInputs() {
  const titleInput = document.getElementById("note-title");
  const noteInput = document.getElementById("note-text");

  const titleValue = titleInput.value;
  const noteValue = noteInput.value;
  const newID = generateID();

  note = {
    title: titleValue,
    id: newID,
    isFavourite: false,
    dateCreated: dateToday,
    // dateLastEdited: ,
    bodyText: noteValue,
  };

  //Puts note to the array
  notes.push(note);
}

//* ---------------------------------------------------------------------*//

// When click you get the form (PEN)
addNewBtn.addEventListener("click", () => {
  // Paulinas custom event
  gtag("event", "pen_click", {
    event_label: "create_note",
  });

  console.log("klick");
  dateToday = getDateTimeStamp();
  let newID = generateID();

  let newNote = {
    title: "",
    id: newID,
    dateCreated: dateToday,
    dateLastEdited: dateToday,
    isFavourite: false,
    images: [],
    bodyText: "",
  };

  // Uppdatera local storage med de nya noterna
  saveNotesToLocalStorage();
  // Rendrera det nya anteckningsformuläret
  renderNotesMain(newNote);
});

//------------------CODE FOR RETRIEVING THE WELCOME MESSAGE AGAIN------------------------------//
const infoBtn = document.getElementById("info-btn");
infoBtn.addEventListener("click", getWelcomeAgain);

document.getElementById("add-new_btn").innerHTML = '<i class="fas fa-pen"></i>';

//function for deleting the visited keyn from localstorage and to send the user to index.html
function getWelcomeAgain() {
  localStorage.removeItem("visited");

  window.location.href = "./index.html";
}
