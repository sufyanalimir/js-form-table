let userAge = document.getElementById("age");
let verifyMessage = document.querySelector(".verifyMessage");
let ageVerifyBtn = document.getElementById("btn-age-verify");

function inputLength() {
  if (userAge.value.length > 0) {
    return userAge.value.length;
  } else {
    alert("Oooops! You left the field empty..");
  }
}

function verifyAge() {
  if (inputLength() > 0) {
    if (userAge.value >= 18) {
      verifyMessage.textContent = "Congrats! You are eligible";
    } else {
      verifyMessage.textContent = "Sorry! You are under age";
    }
  }
  userAge.value = "";
}

ageVerifyBtn.addEventListener("click", verifyAge);
