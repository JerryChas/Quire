// Test object:
const testObj = {
  title: "EN ny ANteckKNIigGG!!!",
  id: 3,
  dateCreated: "2021-01-24",
  dateLastEdited: "1999-01-23",
  isFavourite: false,
  images: [`https://hejochhå.jpg`, `https://hejochhå.jpg`],
  bodyText: "hej från petter stordalen HÅHÅ (;",
};

// Function to save notes 
function saveNote(obj) {
  // Change last edited date
obj.dateLastEdited = getDateTimeStamp();

// Call the search function
searchId(obj);

/* Search for the id in notes 
If it exists we replace it */
function searchId(objToSave) {
  let noteIndex;
  noteIndex = notes.findIndex((note) => {
  obj.dateLastEdited = getDateTimeStamp();
   return objToSave.id === note.id;
  }
  )
  // If it doesn't exist, push into notes
  if (noteIndex < 0) {
    obj.dateCreated = getDateTimeStamp();
    obj.id = generateID();
    notes.push(obj);
  }

saveNotesToLocalStorage();
renderNotesAsideList();
}
}
