// api.js

// Prepopulated array storing student objects
const mockStudentDb = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  }
];

/**
 * Simulates a GET request to retrieve all students.
 * @returns {Array} Current array of students.
 */
export function getStudentsAPI() {
  return mockStudentDb;
}

/**
 * Simulates a POST request to add a new student.
 * @param {Object} newStudentData - Object containing firstName, lastName, and email.
 * @returns {Object} The newly saved student object.
 */
export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(), // Unique number generated from current timestamp
    ...newStudentData // Copies firstName, lastName, and email
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}