import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnDestroy {
  hide = true;
  public loading = false

  public loginForm = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required, Validators.email]),
    password: new FormControl('cityslicka', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z 0-9]*')])
  })
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly router: Router,
  ) {
    this.sessionService.user$.pipe(takeUntil(this.destroyed$)).subscribe((user) => {
      if (user) this.router.navigate(['dashboard', 'home'])
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  login() {
    this.loading = true
    this.authService.login({
      email: this.loginForm.get('email')?.value || '',
      password: this.loginForm.get('password')?.value || ''
    }).subscribe(() => this.loading = true)
  }
}