// We declare variables
const MAIN = document.querySelector('.main');

// Logic
for (let i = 1; i <= 100; i++) {
    // Conditional
    if ((i % 3 == 0) && (i % 5 == 0)) {
        showNumbers(`${i} - mareigua`);
    } else if (i % 3 == 0) {
        showNumbers(`${i} - mare`);
    } else if (i % 5 == 0) {
        showNumbers(`${i} - igua`);
    } else {
        showNumbers(i);
    }
}

// Create Paragraphs
function showNumbers(result) {
    let element = MAIN.appendChild(document.createElement('p'));
    element.textContent = result;
}