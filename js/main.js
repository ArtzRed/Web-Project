document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro-screen");
    const main = document.getElementById("main-content");

    intro.addEventListener("click", () =>  {
        intro.classList.add("fade-out");
        setTimeout(() => {
            intro.style.display = "none";
            main.style.opacity = "1";
        }, 1000);
    });
});