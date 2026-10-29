const mockStudentDb = [
  {
    firstName: "Pamela Kaye",
    lastName: "Magnifico",
    email: "pamela.magnifico@example.com"
  },
  {
    firstName: "Jhqq Phyrr",
    lastName: "Avellana",
    email: "jhqqphyrr.avellana@example.com"
  }
];

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(), //generate random id based on date now
    ...newStudentData
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}