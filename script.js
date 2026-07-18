const elements = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


});



elements.forEach(element=>{

observer.observe(element);

});


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("fade-out");

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});
