const hamburger = document.querySelector(".header__hamburger");
const closeButton = document.querySelector(".header__close");

hamburger.addEventListener("click", ()=>menuPopUp());
closeButton.addEventListener("click", ()=>closeMenu());

function menuPopUp(){
  document.body.classList.toggle("menu-open");
}

function closeMenu(){
  document.body.classList.remove("menu-open");
}