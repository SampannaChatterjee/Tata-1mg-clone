document.querySelector("#form").addEventListener("submit", pay);
var carddetails = JSON.parse(localStorage.getItem("carddetails"));

function pay(event) {
  event.preventDefault();
  var card_num = document.querySelector("#cardnum").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var cvv = document.querySelector("#cvv").value;
  if (
    card_num == carddetails[0].cardnum &&
    month == carddetails[0].month &&
    year == carddetails[0].year &&
    cvv == carddetails[0].cvv
  ) {
    window.location.href = "OTP.html";
  } else {
    alert("Error");
  }
}