export default function getStudentsByLocation(listOfStudents, city) {
  const filteredStudents = listOfStudents.filter((student) => student.location === city);
  return filteredStudents;
}
