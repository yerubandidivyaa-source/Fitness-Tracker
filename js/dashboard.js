document.addEventListener("DOMContentLoaded", function () {

    checkLogin();

    displayUsername();

    updateDashboard();

});


function updateDashboard() {

    // Get saved data from localStorage

    const steps =
        Number(localStorage.getItem("steps")) || 0;

    const calories =
        Number(localStorage.getItem("calories")) || 0;

    const workouts =
        Number(localStorage.getItem("workouts")) || 0;

    const water =
        Number(localStorage.getItem("water")) || 0;


    // Get dashboard elements

    const stepsElement =
        document.getElementById("dashboardSteps");

    const caloriesElement =
        document.getElementById("dashboardCalories");

    const workoutElement =
        document.getElementById("dashboardWorkouts");

    const waterElement =
        document.getElementById("dashboardWater");


    // Display data

    if (stepsElement) {

        stepsElement.textContent = steps;

    }


    if (caloriesElement) {

        caloriesElement.textContent =
            calories + " kcal";

    }


    if (workoutElement) {

        workoutElement.textContent =
            workouts;

    }


    if (waterElement) {

        waterElement.textContent =
            water + " L";

    }

}


// Open another page

function openPage(page) {

    window.location.href = page;

}