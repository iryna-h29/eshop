const langSelect = document.querySelector(".header__languages-select");

langSelect.querySelectorAll("option").forEach((opt) => {
    opt.addEventListener("focus", colourTransparent)
})

document.querySelector(".header__action-menu-icon-search").addEventListener("click", () => {
    document.getElementById("myOverlay").style.display = "block"; 
})

function colourTransparent() {
    this.style.background = "white";
}
function closeSearch() { 
    document.getElementById("myOverlay").style.display = "none"; 
}
function toggleMobileMenu() {
    const nav = document.getElementById("menu");
    nav.classList.toggle("open");
    if (nav.matches('open')) {
        document.addEventListener("click", (event) => {
            if (!nav.contains(event.target)) {
                toggleMobileMenu();
            }
        })
    }
}