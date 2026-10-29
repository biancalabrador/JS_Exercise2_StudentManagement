import { getStudentsAPI, addStudentsAPI } from './api.js';

// test 1
console.log("--- Test Case 1: Initial Database ---");
console.log(getStudentsAPI());

// test 2
console.log("\n--- Test Case 2: Add New Student ---");
const newStudent = addStudentsAPI({
  firstName: "Keanu Dave",
  lastName: "Johnson",
  email: "keanu.johnson@example.com"
});
console.log("Newly Added Student:", newStudent);

// test 2
console.log("\n--- Test Case 3: Updated Database ---");
console.log(getStudentsAPI());