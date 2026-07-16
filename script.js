console.log("KnightCore website loaded");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("mouseenter", () => {
    button.style.transform="scale(1.05)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform="scale(1)";
});

});
