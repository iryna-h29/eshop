
const legends = document.querySelectorAll(".aside__filter-legend");
const filter = document.querySelector(".main__filter-mobile");
const rectangleBtnToChangeAlignmentOfItems = document.querySelectorAll(".main__sort-rectangle");

legends.forEach((legend) => {
    legend.addEventListener('click', toggleOpenFilter);
});
filter.addEventListener("click", addFilters);


rectangleBtnToChangeAlignmentOfItems.forEach((rect) => {
    rect.addEventListener("click", changeItemsAlignment); // він чогось поламав мобільну версію
})

    
  // Close the full screen search box 


function changeItemsAlignment() {
    if (this.hasAttribute('inactive')) {
        const itemsWrapper = document.querySelector(".main__catalog-items");
        this.removeAttribute("inactive");
        if (this.hasAttribute("line2")) {
            this.nextElementSibling.setAttribute("inactive", "true");
            itemsWrapper.style.gridTemplateColumns = "1fr 1fr";
            const images = itemsWrapper.querySelectorAll('img');
            let photo = 1;
            images.forEach((image) => {
                image.src = `./assets/img/image${photo}.jpg`;
                photo++;
            });
        } else if (this.hasAttribute("line3")){
            this.previousElementSibling.setAttribute("inactive", "true");
            itemsWrapper.style.gridTemplateColumns = "1fr 1fr 1fr";
            itemsWrapper.style.columnGap = "1em";
            const images = itemsWrapper.querySelectorAll('img');
            let photo = 1;
            images.forEach((image) => {
                image.src = `./assets/img/image${photo}_laptop.jpg`;
                photo++;
            })
        }
    }
}

function addFilters() {
    // e.stopPropagation();
    this.querySelector('.main__filter-legend-icon').classList.toggle("open");
    const aside = document.querySelector(".aside");
    const distanceTop = filter.offsetTop;
    const distanceLeft = filter.offsetLeft;
    aside.style.top = `${distanceTop}px`;
    aside.style.left = `${distanceLeft}px`;
    aside.classList.toggle("open");
}
function toggleOpenFilter() {
    const fieldset = this.closest('fieldset');
    fieldset.classList.toggle('open-filter')
}