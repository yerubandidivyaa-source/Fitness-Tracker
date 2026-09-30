// ===============================
// FITNESS TRACKER - PROGRESS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    checkLogin();
    displayUsername();
    loadProgress();

});


// Load progress information
function loadProgress() {

    const steps = Number(localStorage.getItem("steps")) || 0;
    const calories = Number(localStorage.getItem("calories")) || 0;
    const workouts = Number(localStorage.getItem("workouts")) || 0;

    const goals =
        JSON.parse(localStorage.getItem("goals")) || [];

    const completedGoals =
        goals.filter(goal => goal.completed).length;


    const stepsElement =
        document.getElementById("progressSteps");

    const caloriesElement =
        document.getElementById("progressCalories");

    const workoutsElement =
        document.getElementById("progressWorkouts");

    const goalsElement =
        document.getElementById("progressGoals");


    if (stepsElement) {
        stepsElement.textContent = steps;
    }

    if (caloriesElement) {
        caloriesElement.textContent = calories + " kcal";
    }

    if (workoutsElement) {
        workoutsElement.textContent = workouts;
    }

    if (goalsElement) {
        goalsElement.textContent =
            completedGoals + " / " + goals.length;
    }


    updateProgressBar(steps);
}


// Progress bar
function updateProgressBar(steps) {

    const progressBar =
        document.getElementById("progressBar");

    const progressText =
        document.getElementById("progressText");

    if (!progressBar) return;

    const dailyGoal = 10000;

    let percentage =
        (steps / dailyGoal) * 100;

    if (percentage > 100) {
        percentage = 100;
    }

    progressBar.style.width = percentage + "%";

    if (progressText) {
        progressText.textContent =
            Math.round(percentage) + "%";
    }
}