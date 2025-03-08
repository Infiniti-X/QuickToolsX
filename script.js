const units = {
    length: { meter: 1, foot: 3.28084, kilometer: 0.001, mile: 0.000621371 },
    weight: { kilogram: 1, gram: 1000, pound: 2.20462, ounce: 35.274 },
    temperature: { Celsius: 1, Fahrenheit: 1 }
};

function loadUnits() {
    let category = document.getElementById("category").value;
    let fromUnit = document.getElementById("fromUnit");
    let toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    for (let unit in units[category]) {
        fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
        toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    }
}

function convert() {
    let category = document.getElementById("category").value;
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let outputValue = 0;

    if (category === "temperature") {
        if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
            outputValue = (inputValue * 9/5) + 32;
        } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
            outputValue = (inputValue - 32) * 5/9;
        } else {
            outputValue = inputValue;
        }
    } else {
        outputValue = inputValue * (units[category][toUnit] / units[category][fromUnit]);
    }

    document.getElementById("outputValue").innerText = outputValue.toFixed(2);
}

// Load initial units
loadUnits();