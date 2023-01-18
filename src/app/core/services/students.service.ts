import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/students.model';
import { AddStudentComponent } from 'src/app/shared/dialogs-modals/add-student/add-student.component';
import { ModifyStudentComponent } from 'src/app/shared/dialogs-modals/modify-student/modify-student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public students$: Observable<Student[]>;
  private students = new BehaviorSubject<Student[]>([]);

  constructor(private readonly dialogService: MatDialog, private httpClient: HttpClient) {
    this.students$ = this.students.asObservable();
    this.getstudentsFromAPI().subscribe(student => {
      this.students.next(student);
    });
  }

  getstudentsFromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://63c49434f0028bf85faa17cd.mockapi.io/students');
  }

  //borrar estudiante
  deleteStudent(student: Student) {
    this.httpClient.delete(`https://63c49434f0028bf85faa17cd.mockapi.io/students/${student.id}`).subscribe(_ => {
      let newStudentList = this.students.getValue().filter(data => data.id !== student.id);
      this.students.next(newStudentList)
    },
      _ => {
        console.warn('Error message')
      }
    )
  }

  //editar estudiante
  editStudent(student: Student) {
    let dialog = this.dialogService.open(ModifyStudentComponent, { data: student })
    dialog.afterClosed().subscribe((value) => {
      this.httpClient.put(`https://63c49434f0028bf85faa17cd.mockapi.io/students/${student.id}`, value).subscribe(
        _ => {
          let newStudentList = this.students.getValue().map(data => data.id === student.id ? { ...data, ..._ } : data);
          this.students.next(newStudentList)
        },
        _ => {
          console.warn('Error message')
        }
      )
    })
  }

  // //agregar estudiante
  //   addStudent(student: Student) {
  //     let dialog = this.dialogService.open(AddStudentComponent, { data: student })
  //     dialog.afterClosed().subscribe((value) => {
  //       this.httpClient.post('https://63c49434f0028bf85faa17cd.mockapi.io/students', value).subscribe(_ => {
  //         let newStudent = this.students.getValue();
  //         if (value) {
  //           newStudent.push(student);
  //           this.students.next(newStudent)
  //         }
  //         else {
  //           let newStudent = this.students.getValue();
  //           this.students.next(newStudent)
  //         }
  //       }
  //       )
  //     })
  //   }
}