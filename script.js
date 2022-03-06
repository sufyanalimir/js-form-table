let userAge = document.getElementById("age");
let verifyMessage = document.querySelector(".verifyMessage");
let ageVerifyBtn = document.getElementById("btn-age-verify");

let form_section = document.querySelector(".form-section");

let userName = document.getElementById("name");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let password = document.getElementById("pswd");
let confirmPass = document.getElementById("conPswd");
let userState = document.getElementById("state");
let userCity = document.getElementById("city");
let span = document.getElementsByTagName("span");
let submit = document.getElementById("submit");
let userId = document.getElementById("userId");
let userIdValue = "";

let dataTable = document.querySelector(".data-table");
let dataObj = {
  id: "",
  name: "",
  mobile: "",
  email: "",
  password: "",
  state: "",
  city: "",
};

let deleteBtn = document.getElementsByClassName("delete");

/* ------------- Loading States and Cities through array ------------- */

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

let stateOptions = "";
for (var i = 0; i < states.length; i++) {
  stateOptions += '<option value="' + states[i] + '" />';
}
document.getElementById("statesList").innerHTML = stateOptions;

let cityOptions = "";
for (var i = 0; i < cities.length; i++) {
  cityOptions += '<option value="' + cities[i] + '" />';
}
document.getElementById("citiesList").innerHTML = cityOptions;

/* --------------------------------------------------------------------- */

/* ----------------------- Age verification ---------------------------- */

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
      form_section.style.display = "block";
    } else {
      verifyMessage.textContent = "Sorry! You are under age.";
      form_section.style.display = "none";
    }
  }
  userAge.value = "";
}

/* ----------------------------------------------------------------------- */

/* ------------------------- Regex Validation ---------------------------- */

function nameValidation() {
  let nameExpr = /^[A-Za-z. ]{4,30}$/;
  if (nameExpr.test(userName.value)) {
    document.getElementById("name_error").innerHTML = "";
    let fullname = userName.value;
    let strippedName = fullname.replace(/\s+/g, "");
    for (let i = 0; i < 4; i++) {
      userIdValue += strippedName[i];
    }
    document.getElementById("name_error").innerHTML = "*Valid Name..";
    document.getElementById("name_error").classList.remove("text-danger");
    document.getElementById("name_error").classList.add("text-success");
  } else {
    document.getElementById("name_error").innerHTML = "*Invalid Name..";
    document.getElementById("name_error").classList.remove("text-success");
    document.getElementById("name_error").classList.add("text-danger");
  }
}

function mobileValidation() {
  let mobileExpr = /^[6789]{1}[0-9]{9}$/;
  if (mobileExpr.test(mobile.value)) {
    document.getElementById("mob_error").innerHTML = "";
    for (let i = 0; i < 2; i++) {
      userIdValue += mobile.value[i];
    }
    userId.value = userIdValue;
    dataObj.id = userIdValue; // storing id in dataObj
    userIdValue = "";
  } else {
    document.getElementById("mob_error").innerHTML = "*Invalid Number";
  }
}

function emailValidation() {
  let emailExpr = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  if (emailExpr.test(email.value)) {
    document.getElementById("email_error").innerHTML = "";
  } else {
    document.getElementById("email_error").innerHTML = "*Invalid Email";
  }
}

function passwordValidation() {
  let passwordExpr = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (passwordExpr.test(password.value)) {
    document.getElementById("pswd_error").innerHTML = "";
  } else {
    document.getElementById("pswd_error").innerHTML = "*Invalid Password";
  }
}

function matchPassword() {
  if (password.value.match(confirmPass.value)) {
    document.getElementById("conPswd_error").innerHTML = "";
  } else {
    document.getElementById("conPswd_error").innerHTML =
      "*Passwords do not match";
  }
}

/* ----------------------------------------------------------------------- */

/* ---------------------Storing Values in Object ------------------------- */

function storeValuesInObject() {
  dataObj.name = userName.value;
  dataObj.mobile = mobile.value;
  dataObj.email = email.value;
  dataObj.password = password.value;
  dataObj.state = userState.value;
  dataObj.city = userCity.value;
}

/* ----------------------------------------------------------------------- */

/* --------------------- Creating New Row -------------------------------- */

function createNewRow() {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");

  let inp1 = document.createElement("input");
  inp1.value = userId.value;
  inp1.setAttribute("readonly", "");
  let inp2 = document.createElement("input");
  inp2.value = userName.value;
  inp2.setAttribute("readonly", "");
  let inp3 = document.createElement("input");
  inp3.value = email.value;
  inp3.setAttribute("readonly", "");
  let inp4 = document.createElement("input");
  inp4.value = mobile.value;
  inp4.setAttribute("readonly", "");
  let inp5 = document.createElement("input");
  inp5.value = userState.value;
  inp5.setAttribute("readonly", "");
  let inp6 = document.createElement("input");
  inp6.value = userCity.value;
  inp6.setAttribute("readonly", "");

  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  btn1.appendChild(document.createTextNode("Edit"));
  btn1.setAttribute("class", "btn btn-primary");
  btn2.appendChild(document.createTextNode("Del"));
  btn2.setAttribute("class", "btn btn-primary delete");
  btn2.onclick = deleteWholeRow;

  td1.appendChild(inp1);
  td2.appendChild(inp2);
  td3.appendChild(inp3);
  td4.appendChild(inp4);
  td5.appendChild(inp5);
  td6.appendChild(inp6);
  td7.appendChild(btn1);
  td8.appendChild(btn2);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);
  dataTable.appendChild(tr);
}

/* ----------------------------------------------------------------------- */

/* --------------------- Reset values of form ---------------------------- */

function resetValuesOfForm() {
  userId.value = "";
  userName.value = "";
  mobile.value = "";
  email.value = "";
  password.value = "";
  confirmPass.value = "";
  userState.value = "";
  userCity.value = "";
}

/* ----------------------------------------------------------------------- */

/* --------------------- final step submit data -------------------------- */

function submitData() {
  let emptyField = false;
  if (
    userName.value === "" ||
    mobile.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPass.value === "" ||
    userState.value === "" ||
    userCity.value === ""
  ) {
    emptyField = true;
  }

  if (emptyField) {
    alert("All fields are mandatory. Please fill all the details.");
  } else {
    storeValuesInObject();
    createNewRow();
    form_section.style.display = "none";
    dataTable.style.display = "table";
    resetValuesOfForm();
    console.log(dataTable);
  }
}

/* ----------------------------------------------------------------------- */

function deleteWholeRow(e) {
  e.target.removeEventListener("click", deleteWholeRow, false);
  e.target.parentNode.parentNode.remove();
}

//Event Listeners
ageVerifyBtn.addEventListener("click", verifyAge);

userName.addEventListener("focusout", nameValidation);
mobile.addEventListener("focusout", mobileValidation);
email.addEventListener("focusout", emailValidation);
password.addEventListener("focusout", passwordValidation);
confirmPass.addEventListener("focusout", matchPassword);

for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteWholeRow, false);
}
submit.addEventListener("click", submitData);
