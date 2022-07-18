import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }


  registrar(){
    this.router.navigateByUrl('/auth/registro-empresa');
  }

}
