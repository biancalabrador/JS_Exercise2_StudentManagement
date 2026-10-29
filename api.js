// Prepopulated array storing student objects
const mockStudentDb = [
  {
    id: 11112003,
    firstName: "Pamela Kaye",
    lastName: "Magnifico",
    email: "pamela.magnifico@example.com"
  },
  {
    id: 10232003,
    firstName: "Jhqq Phyrr",
    lastName: "Avellana",
    email: "jhqqphyrr.avellana@example.com"
  }
];

/**
 * Simulates a GET request to retrieve all students.
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