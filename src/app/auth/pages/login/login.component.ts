import { AuthResponse } from './../../interfaces/interfaces';
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

    this.authService.login(email, password).subscribe((resp: AuthResponse) => {
      console.log('Login exitoso!', resp.ok, resp.usuario?.tipoUsuario);
      if (resp.ok === true) {
        if ((resp.ok, resp.usuario?.tipoUsuario === 'empresa')) {
          this.router.navigateByUrl('/admin-companies/');
        }
        if ((resp.ok, resp.usuario?.tipoUsuario === 'administrador')) {
          this.router.navigateByUrl('/admin/');
        }
      } else {
        console.log('Error', resp.ok, 'error');
      }
    });
  }
}
