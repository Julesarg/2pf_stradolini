import { BehaviorSubject, Observable } from "rxjs";
import { Student } from "../models/students.model";

export class UsersServiceMock {
  public users = new BehaviorSubject<Student[]>([])
  public users$: Observable<Student[]>;

  constructor() {
    this.users$ = this.users.asObservable()
  }

  loadUsers() {
    this.users.next([
      {
        id: 1,
        name: 'test',
        lastName: 'test',
        email: 'test',
        gender: 'test',
        edit: true,
        deleteOption: true
      }
    ])
  }
}