import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../core/services/students.service';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(public usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.loadUsers()
  }
}
