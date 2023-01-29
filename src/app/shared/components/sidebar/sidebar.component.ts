import { Component, EventEmitter, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/users.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})


export class SidebarComponent implements OnDestroy {

  public user: User | null = null;

  constructor(public readonly authservice: AuthService) { }

  ngOnDestroy(): void {
    console.log(this.user)
  }
}