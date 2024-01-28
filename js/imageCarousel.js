//calling function for test:
renderNotesMain(notes[0])

/* *******************************************************************
** This sctipt is shameless stolen from Akshay Chandran on code pen! *
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
     <span id=carousel-delete-current-image>Delete this image <i class="fa-regular fa-trash-can"></i></span>
        <div class="carousel-main-img">
            <img src="https://github.com/Akshay-ch-dj/Javascript-experience-projects/blob/master/js_image_slider_tES6/slider_images/wall-%20(1).jpg?raw=true" alt="image" id="carousel-current-img">
           
        </div>

        <!-- Adding buttons to slide -->
        <div class="carousel-slide-buttons">
            <button id="carousel-left-button">&lsaquo;</button>
            <button id="carousel-right-button">&rsaquo;</button>
        </div>
        <!-- All images are from wallpaper flare -->
        <div class="carousel-sub-imgs">
            <img src="https://images.prismic.io/valuemystuff/d1f98dc9-de0d-4b7d-b48c-cd421c421c8e_Chardin_pastel_selfportrait.jpg?auto=compress,format" alt="image1">
            <img src="https://github.com/Akshay-ch-dj/Javascript-experience-projects/blob/master/js_image_slider_tES6/slider_images/wall-%20(2).jpg?raw=true" alt="image2">
            <img src="https://github.com/Akshay-ch-dj/Javascript-experience-projects/blob/master/js_image_slider_tES6/slider_images/wall-%20(3).jpg?raw=true" alt="image3">
    </div>`

    //
    //
    //

    /* ###########  For the image carousel ########### */

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
    // Adding buttons for image change
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
                break;
            }
        }
    }

    // THANKS TO BRAD TRAVERSY AND DEV-ED, FOR GIVING THIS MUCH INSPIRATION.
    // ALL WALLPAPERS FROM wallpaperflare.com










}