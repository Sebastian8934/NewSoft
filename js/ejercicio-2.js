// We declare variables
const MAIN2 = document.querySelector('.main2');
let numbers = [1, 2, 3, 4, 15, 5, 6, 7, 8, 9, 10,20];
let mayor = 0;

for(i = 0; i < numbers.length; i++){
    if (numbers[i] > mayor)
    {
        mayor = numbers[i];
    }
}

showNumbers(mayor,numbers);
 
// Create Paragraphs
function showNumbers(result1,result2) {
    let element = MAIN2.appendChild(document.createElement('p'));
    element.textContent = result2 + " El numero mayor es :" + result1;
}