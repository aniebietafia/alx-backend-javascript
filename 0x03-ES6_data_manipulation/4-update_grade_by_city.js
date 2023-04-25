function updateStudentGradeByCity(listOfStudents, location, newGrades) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }

  const filteredStudents = listOfStudents.filter((student) => student.location === location);

  const studentsGraded = filteredStudents.map((student) => {
    const gradeFilter = newGrades.filter((newGrade) => newGrade.studentId === student.id);

    let grade;

    if (gradeFilter[0]) {
      grade = gradeFilter[0].grade;
    } else {
      grade = 'N/A';
    }

    return {
      ...student,
      grade,
    };
  });

  return studentsGraded;
}

export default updateStudentGradeByCity;
