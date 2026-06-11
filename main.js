// Lấy id từ bên file html
const adressbtn = document.querySelector("#adress-form");
const closebtn = document.querySelector("#btn-close");
const form = document.querySelector(".adress-form");
// console.log(adressbtn);
adressbtn.addEventListener("click", function () {
  //   document.querySelector(".adress-form").style.display = "flex";
  form.classList.add("active");
});
closebtn.addEventListener("click", function () {
  console.log("đang tắt");
  //   document.querySelector(".adress-form").style.display = "none";
  form.classList.remove("active");
});
