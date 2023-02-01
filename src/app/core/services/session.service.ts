import { Injectable } from "@angular/core";
import { BehaviorSubject, take } from 'rxjs';
import { User } from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user = new BehaviorSubject<User | null>(null)
  public user$ = this.user.asObservable();

  constructor() { }

  setUser(user: User | null): void {
    this.user.next(user);
  }
}