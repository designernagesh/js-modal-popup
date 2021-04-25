let btnModal = document.querySelector("#btnModal"),
    overlay = document.querySelector(".overlay");
    btnClose = document.querySelector(".btnClose");

btnModal.addEventListener('click', function(){
  overlay.classList.add("openModal");
})

btnClose.addEventListener('click', function(){
  overlay.classList.remove("openModal");
})