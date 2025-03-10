// Text Case Converter
function convertText(type) {
    let text = document.getElementById("text-input").value;
    if (type === "upper") {
        document.getElementById("text-output").innerText = text.toUpperCase();
    } else if (type === "lower") {
        document.getElementById("text-output").innerText = text.toLowerCase();
    } else if (type === "capitalize") {
        document.getElementById("text-output").innerText = text.replace(/\b\w/g, char => char.toUpperCase());
    }
}

// Word & Character Counter
document.getElementById("word-counter-input").addEventListener("input", function() {
    let text = this.value.trim();
    document.getElementById("word-count").innerText = text === "" ? 0 : text.split(/\s+/).length;
    document.getElementById("char-count").innerText = text.length;
});

// Basic Calculator
let calcInput = document.getElementById("calc-input");
function calculate(value) {
    if (value === "=") {
        calcInput.value = eval(calcInput.value);
    } else if (value === "C") {
        calcInput.value = "";
    } else {
        calcInput.value += value;
    }
}
function clearCalc() {
    calcInput.value = "";
}

// QR Code Generator
function generateQR() {
    let qrText = document.getElementById("qr-text").value;
    let qrOutput = document.getElementById("qr-output");
    if (qrText === "") {
        qrOutput.innerHTML = "<p style='color: red;'>Please enter text!</p>";
    } else {
        qrOutput.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}" alt="QR Code">`;
    }
}