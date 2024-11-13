//C.J. Bales
//WEBT2300 MW
//cbales6@stumail.northeastate.edu
const grades  = new Map([["A", 4],["B", 3],["C", 2],["D", 1],["F", 0]]);

let total = 0;
let newGrades = 0;
let input;

while (true) {
    // Prompt the user for input
    input = prompt("Enter your grades or type 'DONE' to exit");
    input = input.toUpperCase();
    //Loop break for when user wants to exit
    if (input == 'DONE') {
        break;
    }

    //Add input to array and alert users for invalid inputs
    if (grades.has(input)) {
        total += grades.get(input);
        newGrades++;
    } else {
        alert("Invalid input. Please enter a grade letter [A,B,C,D,F] or type 'done' to exit.");
    }
}
let gpa = total/newGrades;
console.log(gpa.toFixed(2));