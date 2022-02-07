let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

document.querySelector(".form-btn").addEventListener("click", (event) => {
  // event.preventDefault();
  checkInputs();
  checkInputs();
	if (isFormValid) {
		form.submit();
	} else {
		e.preventDefault();
	}
});
function isFormValid() {
  const inputContainers = form.querySelectorAll(".form-control");
  let result = true;
  inputContainers.forEach((input) => {
    if (input.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}
function checkInputs() {
  //get the value fron the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  //username 
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }
  //email 
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Provide a valid email adresse");
  } else {
    setSuccessFor(email);
  }
  //password 
  if (passwordValue === '') {
    setErrorFor(password, "Password can not be empty")
  } else if (passwordValue.length < 6 || passwordValue.length > 20) {
    setErrorFor(password, 'Password min 6 and max 20 characters')
  } else {
    setSuccessFor(password)
  }
  //confirm password
  if (password2Value === '') {
    setErrorFor(password2, "Password can not be empty");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password does not match")
  } else {
    setSuccessFor(password2)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("error");
  formControl.classList.remove("success");
  small.textContent = message;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//show email
let paragraph = document.querySelector('.yourEmail');
console.log(paragraph)