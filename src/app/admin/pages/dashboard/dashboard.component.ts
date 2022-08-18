import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AdminService } from '../../service/admin.service';
import { Usuario } from '../../types/admin.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public usuarios: Usuario[] = [];
  constructor(private adminSevice: AdminService) {
    this.adminSevice.getUsuarios().subscribe((resp) => {
      this.usuarios = resp.usuarios;
      console.log(this.usuarios);
    });
  }

  ngOnInit(): void {}
}
