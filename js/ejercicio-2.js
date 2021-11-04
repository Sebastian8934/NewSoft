// We declare variables
let numbers = [1, 2, 3, 4, 15, 5, 6, 7, 8, 9, 10];

let mayor = 0;

for(i = 0; i < numbers.length; i++){
    if (numbers[i] > mayor)
    {
        mayor = numbers[i];
    }
}
 
console.log(mayor);