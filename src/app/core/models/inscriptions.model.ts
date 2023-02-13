interface inscripAlumno {
  id: number,
  nombre: string,
  apellido: string,
}

interface inscripCurso {
  id: number,
  nombreCurso: string,
}

export interface Inscripciones {
  id: number;
  alumno: inscripAlumno;
  curso: inscripCurso;
}

