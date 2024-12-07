// Calculator Functions

// Add pressed key to the display
function press(key) {
    const result = document.getElementById('result');
    result.value += key;
}

// Clear the display
function clearResult() {
    document.getElementById('result').value = '';
}

// Perform the calculation
function calculate() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch {
        alert('Invalid Calculation');
        result.value = '';
    }
}
