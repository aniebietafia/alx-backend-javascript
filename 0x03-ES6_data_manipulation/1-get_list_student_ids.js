export default function getListStudentIds(objArray) {
  //checks if not an array
  if (!Array.isArray(objArray)) {
    return [];
  }

  // using map method to retrieve student id
  return objArray.map((student) => {
    return student.id;
  });
}
