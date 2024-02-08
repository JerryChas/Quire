/*-------------------------------------------------------------
Som användare vill jag kunna lägga taggar på mina anteckningar 
och kunna plocka fram alla anteckningar med en viss tag

----------använda (.reduce) samt loop eller foreach-----------

Plocka fram alla tags ur objektet men inte upprepa dubbletter
objekt = note.tags
--------------------------------------------------------------*/ 

const activeTagUl = document.getElementById('active-tag_ul');

//function for displaying and going through the active tags
const displayactiveTags = () => {

// console.log('når den denna?');
activeTagUl.innerHTML = '';

    const allTheTags = notes.reduce((acc, note)=> {
        /*checks if its an array it runs through and also so that the objects has the tags property, otherwise it skips the object*/
        if (note.tags && Array.isArray(note.tags)) {
            note.tags.forEach(tag => {
                if (!acc.includes(tag)){
                    acc.push(tag);
                };   
            });
        }
        return acc;
    }, []);
    // Functionality for rendering the all the tags in a html-li element
    // console.log('tags:', allTheTags.length);
    // console.log('Notes array:', notes);
    
    allTheTags.forEach(tag => {
        const tagsLi = document.createElement('li');
        tagsLi.textContent = tag;
        activeTagUl.appendChild(tagsLi);
    });
};

window.onload = displayactiveTags;

