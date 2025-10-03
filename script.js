const form = document.getElementById("validationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

// Validation functions
function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, nameError);
    return false;
  } else {
    showSuccess(nameInput, nameError);
    return true;
  }
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailInput.value.trim())) {
    showError(emailInput, emailError);
    return false;
  } else {
    showSuccess(emailInput, emailError);
    return true;
  }
}

function validatePhone() {
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  if (!regex.test(phoneInput.value.trim())) {
    showError(phoneInput, phoneError);
    return false;
  } else {
    showSuccess(phoneInput, phoneError);
    return true;
  }
}

// Show error
function showError(input, errorElement) {
  input.classList.add("invalid");
  input.classList.remove("valid");
  errorElement.style.display = "block";
}

// Show success
function showSuccess(input, errorElement) {
  input.classList.remove("invalid");
  input.classList.add("valid");
  errorElement.style.display = "none";
}

// Real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();

  if (isNameValid && isEmailValid && isPhoneValid) {
    alert("✅ Form submitted successfully!");
    form.reset();

    // Remove success styles after reset
    nameInput.classList.remove("valid");
    emailInput.classList.remove("valid");
    phoneInput.classList.remove("valid");
  }
});
