import { Student } from 'src/app/core/models/students.model';

describe('StudentsComponent testing para entrega Angular', () => {
  it('debe listar valor de propiedad', () => {
    let student = new Student(0, "juan", "perez", "test@hotmail.com", "Male", true, true);
    const nombreEstudiante = student.name;
    expect(nombreEstudiante).toBe('juan');
  })
})