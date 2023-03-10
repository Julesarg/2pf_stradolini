import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, mergeMap, Observable, of, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/students.model';
import { ModifyStudentComponent } from 'src/app/shared/dialogs-modals/modify-student/modify-student.component';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  public students$: Observable<Student[]>;
  private students = new BehaviorSubject<Student[]>([]);
  private readonly baseURL = 'https://63c49434f0028bf85faa17cd.mockapi.io'

  constructor(
    private readonly dialogService: MatDialog,
    private httpClient: HttpClient,
  ) {
    this.students$ = this.students.asObservable();
    this.getstudentsFromAPI().subscribe((student) => {
      this.students.next(student);
    });
  }

  getstudentsFromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      `${this.baseURL}/students`
    );
  }


  addStudent(student: Student) {
    this.students$
      .pipe(
        take(1),
        mergeMap((studentlist) =>
          this.httpClient
            .post<Student>(
              'https://63c49434f0028bf85faa17cd.mockapi.io/students',
              student
            )
            .pipe(
              tap((addedStudent) =>
                this.students.next([...studentlist, addedStudent])
              )
            )
        ),
      )
      .subscribe()
  }

  //borrar estudiante
  deleteStudent(student: Student) {
    this.httpClient
      .delete(
        `https://63c49434f0028bf85faa17cd.mockapi.io/students/${student.id}`
      )
      .subscribe(
        (_) => {
          let newStudentList = this.students
            .getValue()
            .filter((data) => data.id !== student.id);
          this.students.next(newStudentList);
        },
        (_) => {
          console.warn('Error message');
        }
      );
  }

  //editar estudiante
  editStudent(student: Student) {
    let dialog = this.dialogService.open(ModifyStudentComponent, {
      data: student,
    });
    dialog.afterClosed().subscribe((value) => {
      this.httpClient
        .put(
          `https://63c49434f0028bf85faa17cd.mockapi.io/students/${student.id}`,
          value
        )
        .subscribe(
          (_) => {
            let newStudentList = this.students
              .getValue()
              .map((data) =>
                data.id === student.id ? { ...data, ..._ } : data
              );
            this.students.next(newStudentList);
          },
          (_) => {
            console.warn('Error message');
          }
        );
    });
  }
}