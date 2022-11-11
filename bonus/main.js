// References
const galleryElement = document.getElementById("gallery");
const inputUp = document.getElementById("input-up");
const inputDown = document.getElementById("input-down");

// Gallery setup
const nOfImages = 5;
const gallery = [];

// Active item
let activeImage = 0;

// Build gallery
for (let i = 0; i < nOfImages; i++) {

    // Create image element
    const image = document.createElement("img");
    image.src = `img/0${i + 1}.webp`;

    // Link gallery active element to activeImage
    if (i == activeImage) {
        image.classList.add("active");
    }

    // Add image to galleries
    galleryElement.append(image);
    gallery.push(image);
}

// Listen for clicks
inputUp.addEventListener("click", function () {

    // Hide old active image
    gallery[activeImage].classList.remove("active");

    // Check for images on right
    if (activeImage == gallery.length - 1) {
        // no more images on right
        activeImage = 0;
    } else {
        activeImage++;
    }

    // Dispay new active image
    gallery[activeImage].classList.add("active");

});
inputDown.addEventListener("click", function () {

    // Hide old active image
    gallery[activeImage].classList.remove("active");

    // Check for images on right
    if (activeImage == 0) {
        // no more images on right
        activeImage = gallery.length - 1;
    } else {
        activeImage--;
    }

    // Dispay new active image
    gallery[activeImage].classList.add("active");

});

