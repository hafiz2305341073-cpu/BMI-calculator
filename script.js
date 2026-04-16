const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultBox = document.getElementById("result");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");
const errorMessage = document.getElementById("error-message");

function getBmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number.parseFloat(weightInput.value);
  const height = Number.parseFloat(heightInput.value);

  if (!Number.isFinite(weight) || weight <= 0) {
    resultBox.hidden = true;
    errorMessage.textContent = "Please enter a valid positive number for weight.";
    errorMessage.hidden = false;
    return;
  }

  if (!Number.isFinite(height) || height <= 0) {
    resultBox.hidden = true;
    errorMessage.textContent = "Please enter a valid positive number for height.";
    errorMessage.hidden = false;
    return;
  }

  const heightMeters = height * 0.0254;
  const bmi = weight / (heightMeters * heightMeters);

  const rounded = bmi.toFixed(1);
  bmiValue.textContent = rounded;
  bmiCategory.textContent = getBmiCategory(bmi);
  resultBox.hidden = false;
  errorMessage.hidden = true;
});
