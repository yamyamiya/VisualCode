// Написать программу, которая получает два числа и выводит наименьшее
const number1 = prompt("Please add the first number")
const number2= prompt("Please add the second number")
if(number1>number2){
    console.log(`The bigger number is first number: ${number1}`);
} else if(number2>number1){
    console.log(`The bigger number is second number: ${number2}`);
} else{
    console.log(`The numbers are equal.`);
}
