let idStarter = 0;

//Generates new id to every note
function generateID(){
    idStarter += 1;
    return idStarter;
}

//Saves id to note and saves it to localStorage
function saveNotesToLocalStorage(){
    
    note.id = generateID();

    localStorage.setItem('notes', JSON.stringify(note));
}