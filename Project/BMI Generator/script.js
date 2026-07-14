const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please enter a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please enter a valid weight.";
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        console.log(typeof BMI)
        let guide = " ";

        if (BMI < 18.6) {
            guide = "Under Weight";
        } else if (BMI <= 24.9) {
            guide = "Normal weight";
        } else {
            guide = "Overweight";
        }

        results.innerHTML = `Your BMI is ${BMI} you are ${guide} `;
    }
});
