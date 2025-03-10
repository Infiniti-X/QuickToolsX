// Calculator
let calcDisplay = document.getElementById("calc-display");
function calculate(value) {
    calcDisplay.value += value;
}
function calculateResult() {
    try {
        calcDisplay.value = eval(calcDisplay.value);
    } catch {
        calcDisplay.value = "Error";
    }
}
function clearCalc() {
    calcDisplay.value = "";
}

// Word Counter
document.getElementById("word-input").addEventListener("input", function () {
    let text = this.value.trim();
    let words = text.length > 0 ? text.split(/\s+/).length : 0;
    document.getElementById("word-count").innerText = words;
});