import { Component } from '@angular/core';
import { Student } from 'src/app/core/models/students.model';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from '../../core/services/students.service';
import { AddStudentComponent } from 'src/app/shared/dialogs-modals/add-student/add-student.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  public hover: number;
  spinnerLoading = true
  public student$: Observable<Student[]>;

  displayedColumns = ['id', 'name', 'email', 'gender', 'edit', 'deleteOption']
  element: Student;

  constructor(
    private studentsService: StudentsService,
    private readonly dialogService: MatDialog
  ) { }

  ngOnInit(): void {
    this.student$ = this.studentsService.students$

    setTimeout(() => {
      this.spinnerLoading = false
    }, 2000)
  }

  //borrar estudiante
  clickDeleteStudent(student: Student) {
    this.studentsService.deleteStudent(student)
  }

  //editar estudiante
  clickEditStudent(student: Student) {
    this.studentsService.editStudent(student)
  }
  clickAddStudent() {
    const dialog = this.dialogService.open(AddStudentComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.addStudent({
          id: data.id,
          name: data.name,
          email: data.email,
          gender: data.gender,
          edit: false,
          deleteOption: false,
          lastName: data.lastName
        })
      }
    })
  }
}