import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, Observable } from 'rxjs';
import { User } from 'src/app/core/models/users.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/app/store/app.reducer';
import { authenticatedUserSelector } from 'src/app/store/authentication/authentication.selector';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  // public user: User | null = null;
  public user: Observable<User | null>
  private destroyed$ = new Subject();

  constructor(private readonly sessionService: SessionService, public readonly authService: AuthService, private readonly store: Store<AppState>) {

    this.user = this.store.select(authenticatedUserSelector)

    // this.sessionService.user$.pipe(takeUntil(this.destroyed$)).subscribe((user) => {
    //   if (user) this.user = user
    // })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }
}