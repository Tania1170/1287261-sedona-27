var popup=document.querySelector(".reservation");
var close=document.querySelector(".button-search");
close.addEventListener("click",function (evt){
  evt.preventDefault();
popup.classList.toggle("modal-close");
});
