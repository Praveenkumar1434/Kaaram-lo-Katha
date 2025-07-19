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
