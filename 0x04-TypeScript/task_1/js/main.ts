// Task 1 Teacher interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Task 2 Directors interface
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3 Printing teachers
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// returns the first letter of the firstName and the full lastName
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName[0]}. ${lastName}`;
};

// Task 4 Writing a class
export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() { return 'Currently working'; }
  displayName() { return this.firstName; }
}

export interface StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
