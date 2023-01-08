import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/students.model';
import { AddStudentComponent } from '../add-student/add-student.component';
import { ModifyStudentComponent } from '../modify-student/modify-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  public hover: number

  students: Student[] = [
    new Student(1, 'Juan', 'Perez', 'asdsad@hotmail.com', 'M', true, true),
    new Student(2, 'Analia', 'Rodriguez', 'asdsad@hotmail.com', 'F', true, true),
    new Student(3, 'Zacarias', 'Fernandez', 'asdsad@hotmail.com', 'M', true, true),
    new Student(4, 'Graciela', 'Hernandez', 'asdsad@hotmail.com', 'F', true, true)
  ]

  displayedColumns = ['id', 'name', 'email', 'gender', 'edit', 'deleteOption']
  constructor(private readonly dialogService: MatDialog) { }

  //functions

  //agregar estudiante
  addStudent() {
    let dialog = this.dialogService.open(AddStudentComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        let lastId = this.students[this.students.length - 1]?.id;
        this.students = [...this.students, new Student(lastId + 1, value.name, value.lastName, value.email, value.gender, true, true)]
      }
      else {
        this.students = [new Student(1, value.name, value.lastName, value.email, value.gender, true, true)]
      }
    })
  }

  //borrar estudiante
  deleteStudent(student: Student) {
    this.students = this.students.filter((element) => element.id != student.id)
  }

  //editar estudiante
  editStudent(student: Student) {
    let dialog = this.dialogService.open(ModifyStudentComponent, { data: student })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((element) => element.id === student.id ? { ...element, ...data } : element)
      }
    })
  }
}
