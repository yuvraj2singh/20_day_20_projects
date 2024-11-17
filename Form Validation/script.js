// Select form and error message elements
const name_error = document.querySelector("#name-error");
const email_error = document.querySelector("#email-error");
const phone_error = document.querySelector("#phone-error");
const message_error = document.querySelector("#message-error");
const submit_btn = document.querySelector("#submit-button");

const form = document.querySelector("#contact-form");

// Validation functions

function ValidateName() {
    let name = document.querySelector("#input-name").value;
    if (name.length === 0) {
        name_error.innerHTML = "Name is required";
        return false;
    } else if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(name)) {
        name_error.innerHTML = "Enter a valid name";
        return false;
    } else {
        name_error.style.color = "green";
        name_error.innerHTML = "valid";
        return true;
    }
}

function ValidateEmail() {
    let email = document.querySelector("#input-email").value;
    if (email.length == 0) {
        email_error.innerHTML = "Email is required";
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        email_error.innerHTML = "Enter a valid email address";
        return false;
    } else {
        email_error.style.color = "green";
        email_error.innerHTML = "valid";
        return true;
    }
}

function ValidatePhoneNumber() {
    let phone = document.querySelector("#input-phone").value;
    const phonePattern = /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

    if (phone.length == 0) {
        phone_error.innerHTML = "Phone number is required";
        return false;
    } else if (!phonePattern.test(phone)) {
        phone_error.innerHTML = "Enter a valid phone number (e.g., +1 123-456-7890)";
        return false;
    } else {
        phone_error.style.color = "green";
        phone_error.innerHTML = "Valid phone number";
        return true;
    }
}

function ValidateMessage() {
    let message = document.querySelector("#input-message").value;
    let minLetter = 30;
    let left = minLetter - message.length;
    if (left > 0) {
        message_error.innerHTML = `${left} more characters remaining`;
        return false;
    } else {
        message_error.style.color = "green";
        message_error.innerHTML = "valid";
        return true;
    }
}

form.addEventListener("submit", function (event) {
    if (!ValidateMessage() || !ValidatePhoneNumber() || !ValidateEmail() || !ValidateName()) {
        event.preventDefault();
        submit_btn.style.opacity = 0.5;
        submit_btn.style.cursor = "not-allowed";
        return false;
    } else {
        submit_btn.style.opacity = 1;
        submit_btn.style.cursor = "pointer";
        return true;
    }
});