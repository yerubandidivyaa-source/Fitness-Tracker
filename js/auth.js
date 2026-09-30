document.addEventListener("DOMContentLoaded", function () {

    console.log("auth.js loaded successfully.");

});


// =================================
// SIGNUP
// =================================

function signup() {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!nameInput || !emailInput || !passwordInput) {
        alert("Signup form not found.");
        return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }


    // Check if account already exists
    const existingUser =
        localStorage.getItem("fitnessUser");


    if (existingUser) {

        const user =
            JSON.parse(existingUser);

        if (user.email === email) {

            alert("An account with this email already exists.");

            return;
        }
    }


    const user = {

        name: name,
        email: email,
        password: password

    };


    localStorage.setItem(
        "fitnessUser",
        JSON.stringify(user)
    );


    alert("Signup successful! Please login.");

    window.location.href = "index.html";
}


// =================================
// LOGIN
// =================================

function login() {

    const emailInput =
        document.getElementById("email");

    const passwordInput =
        document.getElementById("password");


    if (!emailInput || !passwordInput) {

        alert("Login form not found.");

        return;
    }


    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value.trim();


    if (email === "" || password === "") {

        alert("Please enter email and password.");

        return;
    }


    const savedUser =
        localStorage.getItem("fitnessUser");


    if (!savedUser) {

        alert("No account found. Please signup first.");

        return;
    }


    const user =
        JSON.parse(savedUser);


    if (
        email === user.email &&
        password === user.password
    ) {

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        alert("Login successful!");


        window.location.href =
            "dashboard.html";

    } else {

        alert("Incorrect email or password.");

    }
}


// =================================
// LOGOUT
// =================================

function logout() {

    localStorage.removeItem("isLoggedIn");

    window.location.href =
        "index.html";
}


// =================================
// CHECK LOGIN
// =================================

function checkLogin() {

    const loggedIn =
        localStorage.getItem("isLoggedIn");


    if (loggedIn !== "true") {

        window.location.href =
            "index.html";
    }
}


// =================================
// DISPLAY USERNAME
// =================================

function displayUsername() {

    const savedUser =
        localStorage.getItem("fitnessUser");


    if (!savedUser) {
        return;
    }


    const user =
        JSON.parse(savedUser);


    const elements =
        document.querySelectorAll(".user-name");


    elements.forEach(function (element) {

        element.textContent =
            user.name;

    });
}