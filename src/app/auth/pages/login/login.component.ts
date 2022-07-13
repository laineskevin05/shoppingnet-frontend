import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['kevinlaines@gmail.com', [Validators.required, Validators.email]],
    password: [
      'sistemasexpertos',
      [Validators.required, Validators.minLength(6)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((ok) => {
      console.log('Login exitoso!', ok);
      if (ok === true) {
        this.router.navigateByUrl('/admin/');
      } else {
        console.log('Error', ok, 'error');
      }
    });
  }
}
