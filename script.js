const oDemDon = document.getElementById("dem-don");
const cacHangDon = document.querySelectorAll(".hang-don");

function locTheoTrangThai(trangThai) {
  let soDonHienThi = 0;

  cacHangDon.forEach(function (hang) {
    const trangThaiCuaHang = hang.dataset.trangThai;

    if (trangThai === "tat-ca" || trangThaiCuaHang === trangThai) {
      hang.style.display = "table-row";
      soDonHienThi = soDonHienThi + 1;
    } else {
      hang.style.display = "none";
    }
  });

  oDemDon.textContent = "Hiện có " + soDonHienThi + " đơn hàng.";
}

document.getElementById("btn-tat-ca").addEventListener("click", function () {
  locTheoTrangThai("tat-ca");
});

document.getElementById("btn-dang-giao").addEventListener("click", function () {
  locTheoTrangThai("dang-giao");
});

document.getElementById("btn-da-giao").addEventListener("click", function () {
  locTheoTrangThai("da-giao");
});

locTheoTrangThai("tat-ca");






























































































































