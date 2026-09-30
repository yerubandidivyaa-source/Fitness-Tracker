// ===============================
// FITNESS TRACKER - GOALS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    checkLogin();
    displayUsername();
    loadGoals();

});


// Add goal
function addGoal() {

    const goalName = document.getElementById("goalName").value.trim();
    const target = document.getElementById("goalTarget").value.trim();

    if (goalName === "" || target === "") {
        alert("Please enter your goal details.");
        return;
    }

    const goal = {
        name: goalName,
        target: target,
        completed: false
    };

    let goals = JSON.parse(localStorage.getItem("goals")) || [];

    goals.push(goal);

    localStorage.setItem("goals", JSON.stringify(goals));

    document.getElementById("goalName").value = "";
    document.getElementById("goalTarget").value = "";

    alert("Goal added successfully!");

    loadGoals();
}


// Load goals
function loadGoals() {

    const list = document.getElementById("goalList");

    if (!list) return;

    const goals = JSON.parse(localStorage.getItem("goals")) || [];

    list.innerHTML = "";

    if (goals.length === 0) {
        list.innerHTML = "<p>No goals added yet.</p>";
        return;
    }

    goals.forEach(function (goal, index) {

        const item = document.createElement("div");

        item.className = "goal-item";

        item.innerHTML = `
            <h3>${goal.name}</h3>
            <p>Target: ${goal.target}</p>
            <p>Status: ${goal.completed ? "Completed" : "In Progress"}</p>

            <button onclick="completeGoal(${index})">
                ${goal.completed ? "Completed" : "Complete"}
            </button>

            <button onclick="deleteGoal(${index})">
                Delete
            </button>
        `;

        list.appendChild(item);
    });
}


// Complete goal
function completeGoal(index) {

    let goals = JSON.parse(localStorage.getItem("goals")) || [];

    goals[index].completed = true;

    localStorage.setItem("goals", JSON.stringify(goals));

    loadGoals();
}


// Delete goal
function deleteGoal(index) {

    let goals = JSON.parse(localStorage.getItem("goals")) || [];

    goals.splice(index, 1);

    localStorage.setItem("goals", JSON.stringify(goals));

    loadGoals();
}