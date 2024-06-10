console.log("Ciao!");
/*
dateElement = document.querySelector("#date");

today = new Date();

dateElement.innerText = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
*/


function toggleMenu() {
    let menuMobile = document.querySelector("nav.mobile");
    if (activeMenu == true) {
        menuMobile.classList.add("hide");
        activeMenu = false;
    } else {
        menuMobile.classList.remove("hide");
        activeMenu = true;
    }
}

let activeMenu = false;
let hamburgerElement = document.querySelector(".hamburger");
let menuMobile = document.querySelector("nav.mobile");


hamburgerElement.addEventListener("click",
    () => menuMobile.classList.toggle("hide"));


