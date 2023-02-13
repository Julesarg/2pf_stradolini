interface Student {
  id: number,
  name: string,
  lastName: string,
}

interface Course {
  id: number,
  courseName: string,
}

export interface Inscripciones {
  id: number;
  student: Student;
  course: Course;
}

