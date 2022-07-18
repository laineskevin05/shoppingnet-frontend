import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'registro-empresa', component:RegistroEmpresaComponent },
      { path: 'registro-usuario', component:RegistroUsuarioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
