document.addEventListener("DOMContentLoaded", function () {
  let qrcode = new QRCode(document.querySelector(".qrcode"), {
    text: "Why did you scan me?",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  window.generateQr = function () {
    let inputValue = document.querySelector(".qr").value.trim();
    if (inputValue === "") {
      alert("Input Field Cannot be blank!");
    } else {
      qrcode.clear(); // Clear the previous QR code
      qrcode.makeCode(inputValue); // Generate the new QR code
    }
  };
});
