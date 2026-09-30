document.addEventListener("DOMContentLoaded", function () {
    checkLogin();
    displayUsername();
    loadWorkouts();
});

function addWorkout() {

    const workoutName = document.getElementById("workoutName").value.trim();
    const duration = Number(document.getElementById("duration").value);

    if (workoutName === "") {
        alert("Please enter workout name.");
        return;
    }

    if (duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    const workout = {
        name: workoutName,
        duration: duration,
        date: new Date().toLocaleDateString()
    };

    let workouts = JSON.parse(localStorage.getItem("workoutList")) || [];

    workouts.push(workout);

    localStorage.setItem("workoutList", JSON.stringify(workouts));

    let totalWorkouts = Number(localStorage.getItem("workouts")) || 0;

    totalWorkouts++;

    localStorage.setItem("workouts", totalWorkouts);

    alert("Workout added successfully! ✅");

    document.getElementById("workoutName").value = "";
    document.getElementById("duration").value = "";

    loadWorkouts();
}

function loadWorkouts() {

    const list = document.getElementById("workoutList");

    if (!list) {
        return;
    }

    const workouts = JSON.parse(localStorage.getItem("workoutList")) || [];

    list.innerHTML = "";

    if (workouts.length === 0) {
        list.innerHTML = `
            <div class="empty-message">
                No workouts added yet.
            </div>
        `;
        return;
    }

    workouts.forEach(function (workout, index) {

        const item = document.createElement("div");

        item.className = "workout-item";

        item.innerHTML = `
            <h3>🏋️ ${workout.name}</h3>
            <p>⏱️ Duration: ${workout.duration} minutes</p>
            <p>📅 Date: ${workout.date}</p>

            <button onclick="deleteWorkout(${index})">
                🗑️ Delete
            </button>
        `;

        list.appendChild(item);
    });
}

function deleteWorkout(index) {

    let workouts = JSON.parse(localStorage.getItem("workoutList")) || [];

    workouts.splice(index, 1);

    localStorage.setItem("workoutList", JSON.stringify(workouts));

    let totalWorkouts = Number(localStorage.getItem("workouts")) || 0;

    if (totalWorkouts > 0) {
        totalWorkouts--;
    }

    localStorage.setItem("workouts", totalWorkouts);

    loadWorkouts();
}