let loadpg = document.querySelector("#load-page");

window.addEventListener("load", () => {
    loadpg.style.display = "none"
});


// navigantion bar
let navMb = document.querySelector("#nav-mb");
let menuBtn = document.querySelector("#menu-btn");
let menuCtrl = false;

menuBtn.addEventListener("click", () => {
    if (!menuCtrl) {
    navMb.classList.remove("ani-up");
    navMb.classList.add("ani-dwn");
    menuCtrl = true; // menu is now open
  } else {
    navMb.classList.add("ani-up");
    navMb.classList.remove("ani-dwn");
    menuCtrl = false; // menu is now closed
  }
});


list = document.querySelector("#btn-list");
listItems = list.querySelectorAll("a");

listItems.forEach(a => {
  a.addEventListener("click", ()=> {
    navMb.classList.add("ani-up");
    navMb.classList.remove("ani-dwn");
    menuCtrl = false;
  })
});