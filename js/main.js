// Navigation Bar
document.querySelector(".bar").addEventListener("click", (el) => {
    document.querySelector(".bar").classList.toggle("clicked");
    document.querySelector(".nav-bar").classList.toggle("clicked");
});