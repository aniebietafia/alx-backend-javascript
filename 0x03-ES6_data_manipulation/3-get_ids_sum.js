export default function getStudentIdsSum(students) {
  const studentIds = students.map((student) => student.id);

  const totalOfIds = studentIds.reduce((prev, curr) => prev + curr, 0);

  return totalOfIds;
}
