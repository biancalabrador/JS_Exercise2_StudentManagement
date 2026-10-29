// main.js
import { getStudentsAPI, addStudentsAPI } from './api.js';

// Test Case 1: Display initial populated database
console.log("--- Test Case 1: Initial Database ---");
console.log(getStudentsAPI());

// Test Case 2: Create a new student and display the newly added student
console.log("\n--- Test Case 2: Add New Student ---");
const newStudent = addStudentsAPI({
  firstName: "Pamela",
  lastName: "Magnifico",
  email: "pamela.magnifico@example.com"
});
console.log("Newly Added Student:", newStudent);

// Test Case 3: Display the updated database
console.log("\n--- Test Case 3: Updated Database ---");
console.log(getStudentsAPI());