interface StudentSub {
  id: number,
  name: string,
  apellido: string,
}

interface CourseSub {
  id: number,
  courseName: string,
}

export interface Inscripciones {
  id: number;
  student: StudentSub;
  course: CourseSub;
}

