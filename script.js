let userAge = document.getElementById("age");
let verifyMessage = document.querySelector(".verifyMessage");
let ageVerifyBtn = document.getElementById("btn-age-verify");

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userMobile = document.getElementById("mobile");
let userState = document.getElementById("states");
let userCity = document.getElementById("cities");

let formSection = document.querySelector(".form-section");
let formSubmitBtn = document.getElementById("form-submit");

let dataTable = document.querySelector(".data-table");
let dataObj = {
  name: "",
  email: "",
  mobile: "",
  state: "",
  city: "",
};
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
      formSection.style.display = "none";
    }
  }
  userAge.value = "";
}

function createNewRow() {
  var row = dataTable.insertRow(1);
  var cell_1 = row.insertCell(0);
  var cell_2 = row.insertCell(1);
  var cell_3 = row.insertCell(2);
  var cell_4 = row.insertCell(3);
  var cell_5 = row.insertCell(4);

  var cell_6 = row.insertCell(5);
  var cell_7 = row.insertCell(6);

  cell_1.innerHTML = dataObj.name;
  cell_2.innerHTML = dataObj.email;
  cell_3.innerHTML = dataObj.mobile;
  cell_4.innerHTML = dataObj.state;
  cell_5.innerHTML = dataObj.city;
}

function resetAll() {
  userName.value = "";
  userEmail.value = "";
  userMobile.value = "";
  userState.value = "";
  userCity.value = "";
}

function submitData() {
  if (
    userName.value === "" ||
    userEmail.value === "" ||
    userMobile.value === "" ||
    userState.value === "" ||
    userCity.value === ""
  ) {
    alert("All fields are mandatory. Please fill.");
  } else {
    dataObj.name = userName.value;
    dataObj.email = userEmail.value;
    dataObj.mobile = userMobile.value;
    dataObj.state = userState.value;
    dataObj.city = userCity.value;
    createNewRow();
    formSection.style.display = "none";
    resetAll();
  }
}

//Event Listeners
ageVerifyBtn.addEventListener("click", verifyAge);
formSubmitBtn.addEventListener("click", submitData);
