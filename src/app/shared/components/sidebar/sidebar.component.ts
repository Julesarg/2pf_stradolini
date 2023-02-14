import { Component, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/users.model';
import { SessionService } from 'src/app/core/services/session.service';
import { Subject, Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { authenticatedUserSelector } from '../../../store/authentication/authentication.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {

  public user: Observable<User | null>;
  private destroyed$ = new Subject();

  constructor(private readonly sessionService: SessionService,
    public readonly authService: AuthService, private readonly store: Store<AppState>) {
    this.user = this.store.select(authenticatedUserSelector)
  }
}