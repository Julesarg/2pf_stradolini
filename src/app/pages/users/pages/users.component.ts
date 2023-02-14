import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/core/services/users.service';
import { loadUsers } from '../store/user.actions';
import { selectUsersArray, selectTotalUsers } from '../store/user.selectors';
import { UserList } from '../model/userlist.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['id', 'email', 'name', 'last_name', 'avatar']
  public userslist: UserList[] = [];
  public totalUsers: number;
  public perPage = 4;
  public perPageOpt = [1, 2, 4]

  constructor(public usersService: UsersService, private store: Store) { }
  ngOnInit(): void {
    this.store.dispatch(loadUsers({ page: 1, per_page: 4 }))
    this.store.select(selectUsersArray).subscribe((usuarios) => {
      this.userslist = usuarios
    })
    this.store.select(selectTotalUsers).subscribe((total) => {
      this.totalUsers = total
    })
  }

  onChange(event: PageEvent) {
    console.log(event)
    this.store.dispatch(loadUsers({ page: event.pageIndex + 1, per_page: event.pageSize }))

  }
}
