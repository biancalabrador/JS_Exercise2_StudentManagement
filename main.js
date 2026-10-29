import { getStudentsAPI, addStudentsAPI } from './api.js';

// test 1
console.log("---Initial Database ---");
console.log(getStudentsAPI());

// test 2
console.log("\n--- Test Case 2: Add New Student ---");
const newStudent = addStudentsAPI({
  firstName: "Keanu Dave",
  lastName: "Andal",
  email: "keanu.andal@example.com"
});
console.log("Newly Added Student:", newStudent);

// test 2
console.log("\n---Updated Database ---");
console.log(getStudentsAPI());