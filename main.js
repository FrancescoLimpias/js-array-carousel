// References
const galleryElement = document.getElementById("gallery");
const inputToRight = document.getElementById("input-to-right");
const inputToLeft = document.getElementById("input-to-left");

// Array with images PATHS
const gallery = [
    "path1",
    "path2"
];

// Active item
let activeItem = 0;

// Parse gallery (from PATHS to DOMElements)
for(let i = 0; i < gallery.length; i++){

    // Create image element
    const image = document.createElement("img");
    image.src = gallery[i];

    // If it's the first image set it to active
    if(i == activeItem){
        image.classList.add("active");
    }

    // Add to DOM gallery
    galleryElement.append(image);

    // Save reference (overwrite gallery path)
    gallery[i] = image;
}

// Listen for clicks
inputToRight.addEventListener("click", function(){

    switch(activeItem ){
        case gallery.length - 2

    }

    if(activeItem < gallery.length - 1){
        // active item in gallery

        // Hide old active image
        gallery[activeItem].classList.remove("active");

        // Dispay new active image
        gallery[++activeItem].classList.add("active");

        // Check if it is the last available image
        if()

    } else {
        // active item out of gallery

        
    }

});

