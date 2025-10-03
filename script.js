const form = document.getElementById("validationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

// ✅ Validate Name
function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, nameError);
    return false;
  } else {
    showSuccess(nameInput, nameError);
    return true;
  }
}

// ✅ Validate Email
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

// ✅ Validate Phone
function validatePhone() {
  // Pattern: 123-456-7890 (you can change this to fit your format)
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  if (!regex.test(phoneInput.value.trim())) {
    showError(phoneInput, phoneError);
    return false;
  } else {
    showSuccess(phoneInput, phoneError);
    return true;
  }
}

// 🚨 Show error
function showError(input, errorElement) {
  input.classList.add("error");
  input.classList.remove("success");
  errorElement.style.display = "block";
}

// ✅ Show success
function showSuccess(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("success");
  errorElement.style.display = "none";
}

// 🔄 Real-time validation (while typing)
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);

// 📩 On form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();

  if (isNameValid && isEmailValid && isPhoneValid) {
    alert("✅ Form submitted successfully!");
    form.reset();

    // Remove success borders after reset
    nameInput.classList.remove("success");
    emailInput.classList.remove("success");
    phoneInput.classList.remove("success");
  }
});
