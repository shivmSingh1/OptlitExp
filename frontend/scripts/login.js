// import { shToast, danger } from "../modules/toast"

import { danger, shToast, success } from "../modules/toast";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;;
// console.log('BASE_URL:', BASE_URL);

const loginForm = document.querySelector("#login-form");
const loginBtn = document.querySelector(".login-btn");

loginForm.addEventListener("submit", async (e) => {

	e.preventDefault();
	loginBtn.disabled = true;
	loginBtn.style.opacity = 0.5;

	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	if (!email || !password) {
		console.log("Email and password are required.");
		return;
	}

	try {

		const response = await fetch(`https://optlit.onrender.com/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password })
		})

		if (response) {
			loginBtn.disabled = false;
			loginBtn.style.opacity = 1;
		}

		if (response.ok) {
			const result = await response.json(); // Parse JSON response
			// Store user's name in localStorage
			localStorage.setItem("userName", result.name);

			loginForm.reset(); // Clear form fields
			window.location.href = "../index.html";
		} else {
			const errorText = await response.text();
			shToast(errorText, danger)
		}

	} catch (error) {
		console.log(error)
		loginBtn.disabled = false;
		loginBtn.style.opacity = 1;
	}

})

