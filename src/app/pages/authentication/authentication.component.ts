import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  hide = true;

  emailControl = new FormControl('test@admin.com', [Validators.required, Validators.email]);
  passwordControl = new FormControl('passwordadmin', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z 0-9]*')])

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl
  });
}