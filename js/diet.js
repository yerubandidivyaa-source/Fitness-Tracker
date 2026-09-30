// ===============================
// FITNESS TRACKER - DIET
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    checkLogin();
    displayUsername();
    loadDiet();

});


// Add food
function addFood() {

    const foodName = document.getElementById("foodName").value.trim();
    const calories = Number(document.getElementById("foodCalories").value);

    if (foodName === "" || calories <= 0) {
        alert("Please enter valid food details.");
        return;
    }

    const food = {
        name: foodName,
        calories: calories,
        date: new Date().toLocaleDateString()
    };

    let dietList = JSON.parse(localStorage.getItem("dietList")) || [];

    dietList.push(food);

    localStorage.setItem("dietList", JSON.stringify(dietList));

    document.getElementById("foodName").value = "";
    document.getElementById("foodCalories").value = "";

    alert("Food added successfully!");

    loadDiet();
}


// Display diet
function loadDiet() {

    const list = document.getElementById("dietList");

    if (!list) return;

    const dietList = JSON.parse(localStorage.getItem("dietList")) || [];

    list.innerHTML = "";

    if (dietList.length === 0) {
        list.innerHTML = "<p>No food records available.</p>";
        return;
    }

    dietList.forEach(function (food, index) {

        const item = document.createElement("div");

        item.className = "diet-item";

        item.innerHTML = `
            <h3>${food.name}</h3>
            <p>Calories: ${food.calories} kcal</p>
            <p>Date: ${food.date}</p>
            <button onclick="deleteFood(${index})">
                Delete
            </button>
        `;

        list.appendChild(item);
    });

}


// Delete food
function deleteFood(index) {

    let dietList = JSON.parse(localStorage.getItem("dietList")) || [];

    dietList.splice(index, 1);

    localStorage.setItem("dietList", JSON.stringify(dietList));

    loadDiet();
}