// ===============================
// FITNESS TRACKER - HEALTH
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    checkLogin();
    displayUsername();
    loadHealthData();

});


// Save health information
function saveHealth() {

    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (age === "" || height === "" || weight === "") {
        alert("Please fill all health details.");
        return;
    }

    const healthData = {
        age: Number(age),
        height: Number(height),
        weight: Number(weight)
    };

    localStorage.setItem(
        "healthData",
        JSON.stringify(healthData)
    );

    calculateBMI();

    alert("Health information saved successfully!");
}


// Calculate BMI
function calculateBMI() {

    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const bmiDisplay = document.getElementById("bmi");

    if (!heightInput || !weightInput || !bmiDisplay) {
        return;
    }

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (height <= 0 || weight <= 0) {
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight /
        (heightInMeters * heightInMeters);

    bmiDisplay.textContent = bmi.toFixed(2);
}


// Load saved health data
function loadHealthData() {

    const data =
        JSON.parse(localStorage.getItem("healthData"));

    if (!data) return;

    const age = document.getElementById("age");
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");

    if (age) age.value = data.age;
    if (height) height.value = data.height;
    if (weight) weight.value = data.weight;

    calculateBMI();
}