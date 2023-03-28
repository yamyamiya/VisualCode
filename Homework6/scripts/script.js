/// task 1
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
console.log("Task 1")
for (let index = 0; index <= 10; index+=2) {
    console.log(index);
}

/// task 2
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
console.log("Task 2")
for (let index = 55; index >=20; index--) {
    console.log(index);
}

/// task 3
// Дан массив numbers. Вывести в консоль все числа из массива

// const numbers = [3, 5, 11, 2, 8, 1, 6];

// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
console.log("Task 3")
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = [];
for (let index = 0; index < numbers.length; index++) {
    numbers_squared.push(numbers[index]**2);
}
console.log(numbers_squared);

/// task 4
// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
console.log("Task 4")
const last_elem = numbers_squared[6];
console.log(last_elem);

/// task 5
// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

// const user = {
// first_name: 'Ivan', 
// last_name: 'Ivanov', 
// age: 20, 
// salary: 500
// }

console.log("Task 5")
const user = {
first_name: "Ivan", 
last_name: "Ivanov", 
age: 20, 
salary: 500
}
console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`);

