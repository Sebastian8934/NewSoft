// We declare variables
const MAIN3 = document.querySelector('.main3');
let pInverse = document.getElementById('pInverse');

let textNormal = [];
let newElementP =  pInverse.appendChild(document.createElement('p'));

function reverse(str) {
    // Convert to array
    let acum = "";
    textNormal = Array.from(str);
    for (let i = textNormal.length - 1; i >= 0; i--) {
        acum = acum + textNormal[i];
    }
    newElementP.textContent = `Su palabra al reverso es: ${acum}`;
}