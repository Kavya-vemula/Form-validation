function clearError() {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = '';
}
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission
  clearError(); // Clear any previous error message
  if (validateForm()) {
   alert('Form submitted successfully!');
   // Here you can submit the form data to your server
 }
 }

function validateForm(){
// Get form values
var fullname = document.getElementById('fullname').value.trim();
var email = document.getElementById('email').value.trim();
var age = document.getElementById('age').value.trim();
var phone = document.getElementById('phone').value.trim();
var gender = document.getElementById('gender').value.trim();
var password = document.getElementById('password').value.trim();
var confirm_password = document.getElementById('confirm_password').value.trim();

// Validate full name
if (fullname === "") {
  showError("Full name is required.");
  return;
}

// Validate email
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  showError("Invalid email address.");
  return;
}

// Validate age
if (isNaN(age) || age <= 0) {
  showError("Invalid age.");
  return;
}
if (age < 18 || age > 120) {
  showError("Age must be between 18 and 120");
  return;
}

// Validate phone number
var phoneRegex = /^\d{10}$/; // Assuming phone number should be 10 digits
if (!phoneRegex.test(phone)) {
  showError("Invalid phone number.");
  return;
}

// Validate gender
if (gender === "") {
  showError("Please select a gender.");
  return;
}

// Validate password


// Validate confirm password
if (password !== confirm_password) {
  showError("Passwords do not match.");
  return;
}

return true;
}
document.getElementById('myForm').addEventListener('submit', handleSubmit);
// If all validations pass, you can submit the form

// Function to display error messages
function showError(message) {
var errorMessageElement = document.getElementById('error-message');
errorMessageElement.innerHTML = message;
errorMessageElement.style.color = 'red';
}

const formInputs = document.querySelectorAll('input');
formInputs.forEach(input => {
input.addEventListener('input', clearError);
});