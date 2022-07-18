import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registrar(){
    this.router.navigateByUrl('/auth/registro-usuario');
  }
}
