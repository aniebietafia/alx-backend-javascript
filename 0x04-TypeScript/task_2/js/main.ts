// Task 5
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    console.log('Working from home');
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    console.log('Getting a coffee break');
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    console.log('Getting to director tasks');
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) return new Teacher();

  return new Director();
}

// Task 6
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let msg: any;

  if (isDirector(employee)) {
    msg = employee.workDirectorTasks();
  } else {
    msg = employee.workTeacherTasks();
  }

  console.log(msg);
  return msg;
}

// Task 7
type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string | undefined {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
