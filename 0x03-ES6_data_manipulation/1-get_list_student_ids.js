export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }

  const ids = objArray.map((student) => student.id);

  return ids;
}
