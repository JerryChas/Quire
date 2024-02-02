//https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand

function activatingRichTextStyle () {

    let optionsButtons = document.querySelectorAll('.option-button')
    active(optionsButtons, false);
    
    //Function för calling the execCommand method with specific values
    const editTextStyle = (commandName, aShowDefaultUI, value) => {
        document.execCommand(commandName, aShowDefaultUI, value);
    };

/*Function for reaching each editButton and then a nestled function to give
it a eventlistener, so i dont have to repeat any code, then i call the editTextStyle
function so it reads/retrieves the execCommand values*/ 
    optionsButtons.forEach((button) => {
        button.addEventListener('click', () => {
            editTextStyle(button.id, false, null)
        })
    });
}

//Function for active removing/enabling editorstyle
const active = (className, remove) => {
    className.forEach((button) => {

        button.addEventListener('click', () => {
            let alreadyActive;
            if(remove){
                alreadyActive = false;
            }
            // Check if the element already has the activeTextStyle class
            if (button.classList.contains('activeTextStyle')) {
                alreadyActive = true;
            }
            //Check if the element already has the active style/class
            if (!alreadyActive) {
                button.classList.add('activeTextStyle');
            }
            else {
                button.classList.toggle("activeTextStyle");
              }
        })
    })
};
