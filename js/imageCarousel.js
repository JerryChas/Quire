
/* *******************************************************************
** This sctipt is shameless stolen from Akshay Chandran on code pen  *
** and integrated on this app.                                       *
** https://codepen.io/akshaych/pen/RwaqJNW ***************************
******************************************************************* */

function renderImageCarousel(noteID) {

    /* **************************** */
    //THE DYNAMIC IMAGE CONTAINER IN THE NOTE:
    const dynamicImageCarouselContainer = document.getElementById("dynamic-image-carousel_container");
    /* **************************** */

    //Render the carousel into the dynamic image container:
    dynamicImageCarouselContainer.innerHTML = `    
    <div class="carousel-container">
        <span id=carousel-delete-current-image>
            Delete this image <i class="fa-regular fa-trash-can"></i>
        </span>
        <div class="carousel-main-img" id=carousel-main-img>
        <!-- THIS IS THE AREA FOR THE BIG IMAGE-->
           
        </div>

        <!-- Adding buttons to slide -->
        <div class="carousel-slide-buttons" id="carousel-slide-buttons-container">
            <!-- THIS IS THE AREA WHERE THE BUTTONS WILL EXIST IF THER IS MORE THAN ONE IMAGE -->
        </div>
        <div class="carousel-sub-imgs" id="sub-images-area">
            <!-- THIS IS THE AREA WHERE THE THUMBNAILS WILL BE PLACED-->
    </div>`

    const mainImageContainer = document.getElementById("carousel-main-img")
    const thumbnailsArea = document.getElementById("sub-images-area")
    const slideButtonsContainer = document.getElementById("carousel-slide-buttons-container")
    const carouselDeleteCurrentImage = document.getElementById("carousel-delete-current-image")


    //getting the current note from notes array:
    const currentNote = notes.find((note) => note.id == noteID);
    // console.log(currentNote.images)

    // variable for tracking the current img that is showing so we can delete the right img
    // when new image is klicked the currentImg will uppdate .......
    const currentImg = {
        noteId: noteID,
        imgUrl: "",
    }



    // we seting the first image in the array to be the main image at first.
    mainImageContainer.innerHTML = `<img src="${currentNote.images[0]}" alt="image" id="carousel-current-img"></img>`

    //send information about the current image for the delete function:
    currentImg.imgUrl = currentNote.images[0]

    // if there is more than ONE image...
    // --- we also get acces to the thumbnail-area/sunimages-area.
    // --- Ew also get slide-buttons.
    if (currentNote.images.length > 1) {
        //fill the sub-images area:
        currentNote.images.forEach((image) => {
            thumbnailsArea.innerHTML += `<img src="${image}" alt="image1">`
        })

        //creating sliding buttons:
        slideButtonsContainer.innerHTML = `
            <button id="carousel-left-button">&lsaquo;</button>
            <button id="carousel-right-button">&rsaquo;</button>`

    }

    //hooking up eventlistener to the delete-button
    carouselDeleteCurrentImage.addEventListener("click", () => {
        deleteCurrentImage(currentImg)
    });

    // --------------------------------------------------
    // DELETE FUNCTION


    // when user cklicks on delete image: 
    function deleteCurrentImage(currentImg) {
        /* Denhär funktionen får via currentImg veta 2 saker:
         -- currentImg.noteId är det id som noten har i vår stora databas.
         -- currentImg.imgUrl är den specifika urlen som bilden kommer från.
         */

        //ask the user if they really want to delete:
        let wantTodelete = confirm(`Do you really want to delete This awesome image? 📷 `)

        if (wantTodelete) {
            alert(`Okay....delete delete... ⚙️ 🔧 🙂`);

            //Find the index of the image to remove:
            let indexOfImgaToRemove = currentNote.images.indexOf(currentImg.imgUrl);

            // deleting ONE thing in the note.images w start at the index that we defined:
            currentNote.images.splice(indexOfImgaToRemove, 1);

        }
        //call function that render the image-carousel if there is any images in the note:
        if (currentNote.images.length > 0) {
            renderImageCarousel(currentNote.id);
        } else {
            // else we emtying the carousel div:
            const imgCarouselContainer = document.getElementById("dynamic-image-carousel_container")
            imgCarouselContainer.innerHTML = "";
            
        }

        saveNotesToLocalStorage()
    }
    // end of deletefunktion


    // *********************************************************************
    /* ###########  For the image carousel ########### */

    // IF WE HAVE MORE THAN ONE IMAGE WE ALSO ADD JS FOR THE THUMBNAILS AND SLIDING-FUNCTIONALITY:
    if (currentNote.images.length > 1) {

        const current = document.querySelector('#carousel-current-img');
        // select all sub images
        const imgs = document.querySelectorAll(".carousel-sub-imgs img");
        const img_opacity = 0.6;

        // set the first image opacity directly
        imgs[0].style.opacity = img_opacity;


        // Using Event delegation to select an image
        // * --- setting up eventlistener on thumbnails .....
        document.querySelector(".carousel-sub-imgs").addEventListener("click", imgClick);

        //  Loop through the nodeList and reach out each image, method 1
        // imgs.forEach(img => img.addEventListener('click', imgClick));

        function imgClick(e) {
            // Reset the opacity of all the images
            // * --- the clicked thumbnail style changes:
            imgs.forEach(img => (img.style.opacity = 1));

            // Change current image to source of clicked image
            // * --- calling on function to set the clicked thumbnail to also be the big image:
            changeImageTo(e.target);

            // sending information about the current image that is showing for the delete function:
            currentImg.imgUrl = e.target.src;
            // console.log(currentImg);
        }

        // * FUNCTION FOR SETTING THE CKLICKED THUMBNAIL TO BE THE BIG IMAGE:
        function changeImageTo(image) {
            imgs.forEach((img) => (img.style.opacity = 1));

            if (image.tagName === "IMG") {
                current.src = image.src;

                // Add fade in class
                current.classList.add("fade-in");

                // Remove fade-in after 0.5 seconds
                setTimeout(() => current.classList.remove("fade-in"), 500);

                // Change the current image opacity
                image.style.opacity = img_opacity;
            }
        }


        // Adding buttons for image change

        // Selections
        const leftButton = document.getElementById("carousel-left-button");
        const rightButton = document.getElementById("carousel-right-button");

        // Event listener
        leftButton.addEventListener('click', leftScroll);
        rightButton.addEventListener('click', rightScroll);

        // functions

        function leftScroll() {
            for (let i = 0; i < imgs.length; i++) {
                if (imgs[i].src === current.src) {
                    currIndex = i - 1;
                    if (currIndex < 0) {
                        currIndex += imgs.length;
                    }
                    changeImageTo(imgs[currIndex]);

                    // sending information about the current image that is showing for the delete function:
                    currentImg.imgUrl = current.src;
                    // console.log(currentImg);
                    break;
                }
            }
        }

        function rightScroll() {
            for (let i = 0; i < imgs.length; i++) {
                if (imgs[i].src === current.src) {
                    currIndex = i + 1;
                    if (currIndex > imgs.length - 1) {
                        currIndex -= imgs.length;
                    }
                    changeImageTo(imgs[currIndex]);

                    // sending information about the current image that is showing for the delete function:
                    currentImg.imgUrl = current.src;

                    break;
                }
            }
        }

    }


};



