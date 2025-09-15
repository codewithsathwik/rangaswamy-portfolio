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




// image clicking
document.querySelectorAll(".main-art img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});


// x button
document.querySelector(".popup-image span").onclick=() =>{
    document.querySelector(".popup-image").style.display = "none";
}