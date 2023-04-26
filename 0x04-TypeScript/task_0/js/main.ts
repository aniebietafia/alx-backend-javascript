// Defining interface named 'Student'
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// creating first Student from interface
const firstStudent: Student = {
  firstName: 'Aniebiet',
  lastName: 'Afia',
  age: 32,
  location: 'Nigeria',
};

const secondStudent: Student = {
  firstName: 'Joy',
  lastName: 'Benani',
  age: 23,
  location: 'Nigeria',
};

// array of the students
const studentsList: Array<Student> = [firstStudent, secondStudent];

// Create table using 'create element'
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

const rowHeading: HTMLTableRowElement = thead.insertRow(0);
const th_1: HTMLTableCellElement = rowHeading.insertCell(0);
const th_2: HTMLTableCellElement = rowHeading.insertCell(1);

th_1.innerHTML = 'First Name';
th_2.innerHTML = 'Location';

table.append(thead);

studentsList.map(function (student) {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const firstNameCell: HTMLTableCellElement = row.insertCell(0);
  const locationCell: HTMLTableCellElement = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

table.append(tbody);
