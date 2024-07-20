
Live link : 
This project is a scientific calculator built with React. It includes standard arithmetic operations, scientific functions, and a unique feature where a confetti explosion is triggered when an operation involves the numbers 5 and 6.

Features

1.Basic Arithmetic Operations: Addition, subtraction, multiplication, and division.

2.Scientific Functions: Trigonometric functions (sin, cos, tan), logarithmic functions (ln, log₁₀), exponential functions, factorial, and more.

3.Memory Functions: Memory clear (MC), memory add (M+), memory subtract (M-), and memory recall (MR).

4.Angle Mode: Toggle between radians and degrees for trigonometric functions.

5.Confetti Explosion: Trigger a confetti explosion when an operation involves the numbers 5 and 6.

Calculator Layout

Display Window: Shows the current expression and the result.

Scientific Keys: Includes buttons for scientific functions like sin, cos, tan, ln, log₁₀, π, e, etc.

Basic Keys: Includes buttons for numbers (0-9), arithmetic operators (+, -, *, /), parentheses, and additional functions like x², x³, xʸ, √, and more.

Memory Keys: Includes buttons for memory operations (MC, M+, M-, MR).

Special Confetti Feature: If you perform an operation involving the numbers 5 and 6 (e.g., 5 + 6, 5 * 6), a confetti explosion will be triggered.

-Confetti Explosion

The confetti explosion feature is implemented using the react-confetti-explosion library. It triggers a visual celebration whenever an operation involving 5 and 6 as operands is performed. The confetti explosion lasts for 3 seconds.

Code Overview:--

-Calculator.js

The main component of the calculator that handles the state and logic of the application. It includes:

State Variables: expression, displayEXP, result, memory, isRadians, showConfetti. Functions: calcResult(), handleButton(), factorial(), extractLastNum().

DisplayWindow.js

A component that displays the current expression and result.

-KeysWindow.js

A component that renders the buttons for the calculator. It includes both scientific and basic keys.

-styles.css

CSS styles for the calculator layout and design.

-Dependencies

React: A JavaScript library for building user interfaces.

react-confetti-explosion: A library to trigger confetti explosion animations.

Other dependencies: Standard React development dependencies.

Contributing Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

