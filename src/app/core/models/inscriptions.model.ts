interface Student {
  id: number,
  name: string,
  lastName: string,
}

interface Course {
  id: number,
  name: string,
}

export interface Inscription {
  id: number;
  student: Student;
  course: Course;
}

