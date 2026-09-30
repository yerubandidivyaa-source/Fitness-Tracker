document.addEventListener("DOMContentLoaded", function () {

    checkLogin();
    displayUsername();
    loadSteps();

});


function saveSteps() {

    const stepsInput = document.getElementById("steps");

    if (!stepsInput) {
        alert("Steps input not found.");
        return;
    }

    const steps = Number(stepsInput.value);

    if (steps < 0 || isNaN(steps)) {

        alert("Please enter valid steps.");

        return;
    }

    localStorage.setItem("steps", steps);

    // Simple estimated calorie calculation
    const calories = Math.round(steps * 0.04);

    localStorage.setItem("calories", calories);

    alert("Steps updated successfully! ✅");

    loadSteps();

    stepsInput.value = "";
}


function loadSteps() {

    const steps = Number(localStorage.getItem("steps")) || 0;

    const calories = Number(localStorage.getItem("calories")) || 0;

    const stepsDisplay =
        document.getElementById("stepsDisplay");

    const caloriesDisplay =
        document.getElementById("caloriesDisplay");


    if (stepsDisplay) {

        stepsDisplay.textContent = steps;

    }


    if (caloriesDisplay) {

        caloriesDisplay.textContent =
            calories + " kcal";

    }

}