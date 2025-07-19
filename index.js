//for hide the offer show
let titlediv = document.getElementById("titlediv");
let offer = document.getElementById("offer");

// When the page loads, check if we already hid the titlediv before

offer.addEventListener("click", () => {
    titlediv.style.display = "none";

    // Save this state in localStorage
    localStorage.setItem("titleHidden", "true");
});

//sidenav content toggle
let menu = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")
let sidenav = document.getElementById("sidenav")

menu.addEventListener("click", () => {
    sidenav.style.right = "50%"
})
closenav.addEventListener("click", () => {
    sidenav.style.right = "150%"
})

//for image hidden and block
const slides = document.querySelectorAll('.slider-img');
let currentIndex = 0;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
        slide.classList.toggle('block', i === index);
    });
};

document.getElementById("rightarr").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.getElementById("leftarr").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Initial slide
showSlide(currentIndex);

//newsletter button function
let newsbtn=document.getElementById("newsbtn")
newsbtn.addEventListener("click",()=>{
    alert("You're in! Kaaram Lo Katha family welcomes you! 🌶️")
})