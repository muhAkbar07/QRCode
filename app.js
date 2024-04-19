function generateQR() {
  var nomorTransaksi = document.getElementsByName("nomor_transaksi")[0].value;
  var typeBarang = document.getElementsByName("type_barang")[0].value;
  var imei = document.getElementsByName("imei")[0].value;
  var namaPengguna = document.getElementsByName("nama_pengguna")[0].value;

  var dataString = `${nomorTransaksi}, ${typeBarang}, ${imei}, ${namaPengguna}`;
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${dataString}`;

  var qrImg = document.getElementById("img");
  var qrContainer = document.getElementById("qrContainer");
  var iconImg = document.querySelector(".icon");

  qrImg.src = url;

  // Tampilkan gambar QR dan ikon setelah QR code digenerate
  qrImg.style.display = "block";
  iconImg.style.display = "block";
}

function printQR() {
  var qrContainer = document.getElementById("qrContainer");
  var qrImgSrc = qrContainer.querySelector("#img").src;

  // Buka jendela baru untuk mencetak
  var printWindow = window.open("", "_blank");
  printWindow.document.write("<html><head><title>Print QR Code</title></head><body>");

  // Tambahkan gambar QR ke dokumen baru
  printWindow.document.write('<img src="' + qrImgSrc + '" style="display: block; margin: auto;"/>');

  printWindow.document.write("</body></html>");
  printWindow.document.close();

  // Cetak dokumen
  printWindow.print();
}
