let userAge = document.getElementById("age");
let verifyMessage = document.querySelector(".verifyMessage");
let ageVerifyBtn = document.getElementById("btn-age-verify");
let formSection = document.querySelector(".form-section");

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Maharashtra",
  "Punjab",
  "Uttar Pradesh",
];

let stateOptions = "";
for (var i = 0; i < states.length; i++) {
  stateOptions += '<option value="' + states[i] + '" />';
}
document.getElementById("statesList").innerHTML = stateOptions;

const cities = [
  "Akola",
  "Amravati",
  "Beed",
  "Bhandara",
  "Nagpur",
  "Nanded",
  "Parbhani",
  "Jalna",
  "Aurangabad",
];

let cityOptions = "";
for (var i = 0; i < cities.length; i++) {
  cityOptions += '<option value="' + cities[i] + '" />';
}
document.getElementById("citiesList").innerHTML = cityOptions;

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
      verifyMessage.textContent = "Congrats! You are eligible.";
      formSection.style.display = "block";
    } else {
      verifyMessage.textContent = "Sorry! You are under age.";
    }
  }
  userAge.value = "";
}

ageVerifyBtn.addEventListener("click", verifyAge);
