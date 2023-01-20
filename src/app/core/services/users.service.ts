import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/students.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly baseUrl = 'https://63c49434f0028bf85faa17cd.mockapi.io';
  public users = new BehaviorSubject<Student[]>([])
  public users$: Observable<Student[]>;
  constructor(private httpClient: HttpClient) {
    this.users$ = this.users.asObservable()
  }

  loadUsers() {
    this.httpClient.get<Student[]>(`${this.baseUrl}/students`).subscribe((apiusers) => {
      this.users.next(apiusers)
    })
  }
}