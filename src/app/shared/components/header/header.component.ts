import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/models/users.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  public user: User | null = null;
  private destroyed$ = new Subject();

  constructor(private readonly sessionService: SessionService, public readonly authService: AuthService) {

    this.sessionService.user$.pipe(takeUntil(this.destroyed$)).subscribe((user) => {
      if (user) this.user = user
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }
}