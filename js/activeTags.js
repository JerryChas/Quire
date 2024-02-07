/*-------------------------------------------------------------
Som användare vill jag kunna lägga taggar på mina anteckningar 
och kunna plocka fram alla anteckningar med en viss tag

----------använda (.reduce) samt loop eller foreach-----------

Plocka fram alla tags ur objektet men inte upprepa dubbletter
objekt = note.tags
--------------------------------------------------------------*/ 

const activeTagSection = document.getElementById('active-tag_section');

//function for displaying and going through the active tags
const displayactiveTags = () => {

    allTheTags = notes.reduce((acc, note)=> {
        /*checks if its an array it runs through and also so that the objects has the tags property, otherwise it skips the object*/
        if (note.tags && Array.isArray(note.tags)) {
            note.tags.forEach(tag => {
                if (!acc.includes(tag)){
                    acc.push(tag);console.log(hej)
                }   
            });
        }
        return acc;
    }, []);
    // Functionality for rendering the all the tags in a html-li element
    allTheTags.forEach(tag => {
        const tagsLi = document.createElement('li');
        li.textContent = tag;
        activeTagSection.appendChild(tagsLi);
        
    });
};

displayactiveTags();
//const allTheTags = [];
// notes.forEach(note => {
//     if (note.tags && Array.isArray(note.tags)){
//         allTheTags.push(...note.tags);
//     }
// });