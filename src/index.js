import { getMaxPrice } from "./home_modules/home1"; 
import { getSum } from "./home_modules/home2";
import { getMaxDigit } from "./home_modules/home3";
import { getStudentsPairs } from "./home_modules/home4";
import { getRandomArray } from "./home_modules/home5";
import { getSubjects } from "./home_modules/home6";
import { getMySalary } from "./home_modules/home7";
import { Student } from "./home_modules/home8";
import { createBoxes } from "./home_modules/home9";

let maxPrice = getMaxPrice(5, 120, 44);
document.querySelector('#hw1').textContent = `Homework 1. Function getMaxPrice: ${maxPrice}`;

let sum = getSum(2, 6, true);
document.querySelector('#hw2').textContent = `Homework 2. Function getSum: ${sum}`;

let maxDigit = getMaxDigit(73951);
document.querySelector('#hw3').textContent = `Homework 3. Function getMaxDigit: ${maxDigit}`;

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const pairs = getStudentsPairs(students);
document.querySelector('#hw4').textContent = `Homework 4. Function getStudentsPairs: ${pairs}`;

let randomArr = getRandomArray(6, 2, 100);
document.querySelector('#hw5').textContent = `Homework 5. Function getRandomArray: ${randomArr}`;

const studentsArr = {
    name: "Illia",
    course: 2,
    subjects: {
        math: [3, 4, 2, 4],
        algorithms: [2, 3, 5, 4, 3, 4],
        data_science: [5, 2, 3, 5]
    }
}
    
let subjects = getSubjects(studentsArr);
document.querySelector('#hw6').textContent = `Homework 6. Function getSubjects: ${subjects}`;

const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};
let salary = getMySalary(ukraine);
document.querySelector('#hw7').textContent = `Homework 7. Function getMySalary: output in console`;

const stud1 = new Student("NLTUU", 1, "Illia Turovskyi");
const studentInfo = stud1.getInfo();
document.querySelector('#hw8').textContent = `Homework 8. Function getInfo: ${studentInfo}`;

let boxes = createBoxes();
document.querySelector('#hw9').textContent = `Homework 9. Function createBoxes`;





