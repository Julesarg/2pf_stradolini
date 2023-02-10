import { Component } from '@angular/core';
import { Student } from 'src/app/core/models/students.model';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from '../../core/services/students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  public hover: number
  public student$: Observable<Student[]>;

  displayedColumns = ['id', 'name', 'email', 'gender', 'edit', 'deleteOption']
  element: Student;

  constructor(
    private studentsService: StudentsService
  ) { }


  ngOnInit(): void {
    this.student$ = this.studentsService.students$
  }

  //abrir modal
  clickOpenDialog(student: Student) {
    this.studentsService.openDialog(student)
  }

  //borrar estudiante
  clickDeleteStudent(student: Student) {
    this.studentsService.deleteStudent(student)
  }

  //editar estudiante
  clickEditStudent(student: Student) {
    this.studentsService.editStudent(student)
  }
}