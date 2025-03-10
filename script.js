function showTool(toolId) {
    document.querySelectorAll('.tool-container').forEach(tool => {
        tool.style.display = 'none';
    });
    document.getElementById(toolId).style.display = 'block';
}

// Calculator Functions
function calcInput(value) {
    document.getElementById('calc-display').value += value;
}
function calculateResult() {
    try {
        document.getElementById('calc-display').value = eval(document.getElementById('calc-display').value);
    } catch {
        document.getElementById('calc-display').value = 'Error';
    }
}
function clearCalc() {
    document.getElementById('calc-display').value = '';
}

// Word Counter
function countWords() {
    let text = document.getElementById('text-input').value.trim();
    let words = text ? text.split(/\s+/).length : 0;
    document.getElementById('word-count').innerText = words;
}