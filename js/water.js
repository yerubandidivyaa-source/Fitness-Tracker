document.addEventListener("DOMContentLoaded", function () {

    checkLogin();
    displayUsername();
    loadWater();

});


function saveWater() {

    const waterInput = document.getElementById("water");

    if (!waterInput) {
        alert("Water input not found.");
        return;
    }

    const water = Number(waterInput.value);

    if (isNaN(water) || water < 0) {

        alert("Please enter a valid water amount.");

        return;
    }

    localStorage.setItem("water", water);

    alert("Water intake updated successfully! 💧");

    loadWater();

    waterInput.value = "";
}


function loadWater() {

    const water = Number(localStorage.getItem("water")) || 0;

    const waterDisplay =
        document.getElementById("waterDisplay");

    if (waterDisplay) {

        waterDisplay.textContent =
            water + " L";

    }

}