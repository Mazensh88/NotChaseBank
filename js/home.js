console.log("HeLLO!");

//take user info & valedation
function loginInfo() {
  let name = document.getElementById("userName").value;
  let pass = document.getElementById("password").value;
  console.log(name, pass);

  if (name == "user" && pass == "pass") {
    document.getElementById("welcome").innerHTML = "Welcome User";
    window.location.href = "user.html";
  } else {
    document.getElementById("errorMessage").innerHTML =
      "Email or password might be wrong.<br> use this to login <b> user </b> for user name <b>pass</b> for password ";
  }
}
