// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

const number = prompt("Please enter yout number")
if(isNaN(number)){
    alert("Incorrect input. Please enter a number.")
}
console.log(0.1*number);
