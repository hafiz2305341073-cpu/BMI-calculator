# BMI Calculator

A simple, responsive BMI calculator built with HTML, CSS, and JavaScript.

This version uses:
- Weight in kilograms (kg)
- Height in inches (in)

## Features

- Clean single-page UI
- Input validation for weight and height
- BMI value rounded to 1 decimal place
- Category result:
  - Underweight
  - Normal weight
  - Overweight
  - Obesity

## How It Works

BMI is calculated with:

$$
BMI = \frac{weight\ (kg)}{height\ (m)^2}
$$

Since height is entered in inches, it is converted first:

$$
height\ (m) = height\ (in) \times 0.0254
$$

## Run Locally

1. Open the project folder.
2. Open `index.html` in your browser.

No build step or dependencies are required.

## Project Structure

- `index.html` - app layout and form
- `style.css` - app styling and responsive layout
- `script.js` - BMI calculation and validation logic

## Future Improvements

- Add BMI history (save previous results)
- Add healthy weight range suggestions
- Add unit switcher for cm/ft inputs
