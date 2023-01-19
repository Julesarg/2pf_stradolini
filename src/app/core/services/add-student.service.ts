import { Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, mergeMap, Observable, of, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/students.model';
@Injectable({
  providedIn: 'root',
})
export class AddStudentService {
  public students$: Observable<Student[]>;
  private students = new BehaviorSubject<Student[]>([]);

  constructor(
    private readonly dialogService: MatDialog,
    private httpClient: HttpClient
  ) {
    this.students$ = this.students.asObservable();
    this.getstudentsFromAPI().subscribe((student) => {
      this.students.next(student);
    });
  }
  getstudentsFromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      'https://63c49434f0028bf85faa17cd.mockapi.io/students'
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
}

