

let width = window.innerWidth;
if (width <= 740) {
    addCarousel();
}
window.addEventListener("resize", updateWidthSize);
screen.orientation.addEventListener("change", updateWidthSize)

function updateWidthSize() {
    width = window.innerWidth;
    if (width <= 740) {
        addCarousel();
    } else {
        removeCarousel();
    }
}


function addCarousel() {
    const gallerySection = document.querySelector(".gallery");
    const imgWrapper = document.querySelector(".gallery__img-wrapper");
    const imageSections = document.querySelectorAll(".gallery__img-item");
    if (!gallerySection.matches('carousel')) {
        gallerySection.classList.add("carousel");
    }
    if (!gallerySection.matches('carousel-dark')) {
        gallerySection.classList.add("carousel-dark");
    }
    if (!gallerySection.matches('slide')) {
        gallerySection.classList.add("slide");
    }
    if (!imgWrapper.matches('carousel-inner')) {
        imgWrapper.classList.add("carousel-inner");
    }
    imageSections.forEach((img) => {
        if (!img.matches("carousel-item")) {
            img.classList.add("carousel-item")
        }
    })
}
function removeCarousel() {
    const gallerySection = document.querySelector(".gallery");
    const imgWrapper = document.querySelector(".gallery__img-wrapper");
    const imageSections = document.querySelectorAll(".gallery__img-item");
    gallerySection.classList.remove("carousel");
    gallerySection.classList.remove("carousel-dark");
    gallerySection.classList.remove("slide");
    imgWrapper.classList.remove("carousel-inner");
    imageSections.forEach((img) => {
        img.classList.remove("carousel-item")
    })
}
