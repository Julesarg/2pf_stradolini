import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/students.model';
// import { ModifyStudentComponent } from 'src/app/shared/dialogs-modals/modify-student/modify-student.component';
import { AddStudentComponent } from 'src/app/shared/dialogs-modals/add-student/add-student.component';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from '../../core/services/students.service';
import { AddStudentErrorsComponent } from '../../shared/errors/add-student-errors/add-student-errors.component';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  public hover: number
  public student$: Observable<Student[]>;

  displayedColumns = ['id', 'name', 'email', 'gender', 'edit', 'deleteOption']
  dialogService: any;
  element: Student;

  constructor(
    private studentsService: StudentsService
  ) { }


  ngOnInit(): void {
    this.student$ = this.studentsService.students$
  }


  // //agregar estudiante
  // clickNewStudent(student: Student) {
  //   this.studentsService.addStudent(student)
  // }

  //borrar estudiante
  clickDeleteStudent(student: Student) {
    this.studentsService.deleteStudent(student)
  }

  //editar estudiante
  clickEditStudent(student: Student) {
    this.studentsService.editStudent(student)
  }
}
