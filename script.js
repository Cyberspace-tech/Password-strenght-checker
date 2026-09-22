
const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", function () {

    const value = password.value;

    let score = 0;

    // Password length
    if (value.length >= 8) {
        score++;
    }

    // Uppercase letter
    if (/[A-Z]/.test(value)) {
        score++;
    }

    // Lowercase letter
    if (/[a-z]/.test(value)) {
        score++;
    }

    // Number
    if (/[0-9]/.test(value)) {
        score++;
    }

    // Special character
    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
    }


    // Empty password
    if (value.length === 0) {

        strengthBar.style.width = "0%";

        strengthText.textContent = "Enter a password";

        strengthText.style.color = "#64748b";

        return;
    }


    // Weak
    if (score <= 2) {

        strengthBar.style.width = "30%";

        strengthBar.style.background = "red";

        strengthText.textContent = "Weak Password";

        strengthText.style.color = "red";
    }


    // Medium
    else if (score <= 4) {

        strengthBar.style.width = "65%";

        strengthBar.style.background = "orange";

        strengthText.textContent = "Medium Password";

        strengthText.style.color = "orange";
    }


    // Strong
    else {

        strengthBar.style.width = "100%";

        strengthBar.style.background = "green";

        strengthText.textContent = "Strong Password";

        strengthText.style.color = "green";
    }

})

