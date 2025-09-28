let navMb = document.querySelector("#nav-mb");
let menuBtn = document.querySelector("#menu-btn");
let menuCtrl = false;
menuBtn.addEventListener("click", () => {
    if (menuCtrl) {
        navMb.style.display = "none";
        menuCtrl = false;
    } else {
        navMb.style.display = "block";
        menuCtrl = true;
    }
})

let loadpg = document.querySelector("#load-page");

window.addEventListener("load",()=>{
    loadpg.style.display = "none"
})