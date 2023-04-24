export default function getListStudents() {
  class Students {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }
  }
  const students = [];
  students.push(new Students(1, 'Guillaume', 'San Francisco'));
  students.push(new Students(2, 'James', 'Columbia'));
  students.push(new Students(5, 'Serena', 'San Francisco'));

  return students;
}
