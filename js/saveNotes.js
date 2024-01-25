// Test object:
// const testObj = {
//   title: "Lolololol",
//   id: 3,
//   dateCreated: "2021-01-24",
//   dateLastEdited: "2021-01-24",
//   isFavourite: false,
//   images: [`https://hejochhå.jpg`, `https://hejochhå.jpg`],
//   bodyText: "DET HAR BYTTS UT",
// };

// Function to save notes 
function saveNote(obj) {
  // Change last edited date
obj.dateLastEdited = getDateStamp();

// Call the search function
searchId(obj);

/* Search for the id in notes 
If it exists we replace it */
function searchId(objToSave) {
  let noteIndex;
  noteIndex = notes.findIndex((note) => {
   return objToSave.id === note.id;
  }
  )
  // If it doesn't exist, push into notes
  if (noteIndex < 0) {
    obj.dateCreated = getDateStamp();
    obj.id = generateID();
    notes.push(obj);
  }

saveNotesToLocalStorage();
renderNotesAsideList();
}
}
