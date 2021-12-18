console.log("Can u see me");

$(document).ready(function () {
  $("#credit").click(function () {
    $("#sec").fadeIn();
    $("#sec2").hide();
  });
});

$(document).ready(function () {
  $("#debit").click(function () {
    $("#sec2").fadeIn();
  });
});
