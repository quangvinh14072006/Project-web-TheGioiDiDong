const adressbtn = document.querySelector("#adress-from");
const adressclose = document.querySelector("#adress-close");
const form = document.querySelector(".adress-from");
// console.log(adressbtn)
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
