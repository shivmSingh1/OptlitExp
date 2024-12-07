const signInBtn = document.querySelector(".sign-in-btn");

signInBtn.addEventListener("click", () => {
    window.location.href = "../pages/login.html"
})

// ------------------------------------------------
import { danger, shToast, success } from "../modules/toast";
// console.log("gotin signup.js")

import.meta.env.VITE_API_BASE_URL;
const form = document.getElementById('signupForm');
const signupBtn = document.querySelector(".sign-up-btn")


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    signupBtn.disabled = true;
    signupBtn.style.opacity = 0.5;

    // Client-side validation
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username.length < 6) {
        shToast('Username must be at least 3 characters long.', danger, "black");
        return;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        shToast('Please enter a valid email.', danger);
        return;
    }
    if (password.length < 6) {
        shToast('Password must be at least 6 characters long.', danger);
        return;
    }

    try {
        // Send data to the server
        const response = await fetch(`https://optlit.onrender.com/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const result = await response.text();

        if (response) {
            signupBtn.disabled = false;
            signupBtn.style.opacity = 1;
        }

        if (response.ok) {
            shToast('Signup successful! You can now login.', success, "black");
            form.reset(); // Clear form fields
        } else {
            alert(result); // Display server error
        }
    } catch (error) {
        shToast('An error occurred. Please try again later.', danger);
        console.error(error);
        signupBtn.disabled = false;
        signupBtn.style.opacity = 1;
    }
});