let img = document.querySelector(".photo");
let background = document.querySelector(".all");
//function phones(phone) {
//  img.src = phone;
//}

let items = document.querySelectorAll(".item");

items.forEach((e) => {
  e.addEventListener("click", function() {
    img.src = this.src;
    background.style.background = this.dataset.color;

  });
  //e.onclick = function() {
  //  img.src = this.src;
  //};
});