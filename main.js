const adressbtn = document.querySelector("#adress-from");
const adressclose = document.querySelector("#adress-close");
const form = document.querySelector(".adress-from");
adressbtn.addEventListener("click", function () {
  console.log("Đã ấn mở");
  //Ngăn chặn hành vi mặc định của thẻ a(Không bị load lại trang)
  event.preventDefault();
  //   document.querySelector(".adress-from").style.display = "flex";
  // Thêm class "active" để hiển thị khung địa chỉ
  form.classList.add("active");
});
adressclose.addEventListener("click", function () {
  console.log("Đã ấn đóng");
  //   document.querySelector(".adress-from").style.display = "none";
  // Xóa class "active" để ẩn khung địa chỉ đi
  form.classList.remove("active");
});
// SLIDER
let index = 0;
//số lượng ảnh
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
const rightbtn = document.querySelector(".fa-chevron-right");
const leftbtn = document.querySelector(".fa-chevron-left");
console.log(imgNumber.length);
rightbtn.addEventListener("click", function () {
  index += 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  console.log("Đã click right");
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});
leftbtn.addEventListener("click", function () {
  index -= 1;
  if (index <= 0) {
    index = imgNumber.length-1;
  }
  console.log("Đã click right");
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});
