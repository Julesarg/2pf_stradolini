import { Component, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/users.model';
import { SessionService } from 'src/app/core/services/session.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})


export class SidebarComponent implements OnDestroy {

  public user: User | null = null;
  private destroyed$ = new Subject();

  constructor(private readonly sessionService: SessionService) {

    this.sessionService.user$.pipe(takeUntil(this.destroyed$)).subscribe((user) => {
      if (user) this.user = user
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }
}