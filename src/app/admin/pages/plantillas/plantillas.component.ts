import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Page } from 'src/app/companies/types/page.interface';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css'],
})
export class PlantillasComponent implements OnInit {
  public paginas: Page[] = [];
  public plantillaSelect: number = 0;

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router
  ) {
    this.adminService.getPlantillas().subscribe((resp) => {
      this.paginas = resp.pages;
    });
  }

  ngOnInit(): void {}

  cambioPlantillaSelect(numero: number) {
    this.plantillaSelect = numero;
  }

  crearPagina() {
    if (this.plantillaSelect === 0) {
      const nuevaPagina: Page = {
        nombre: new Date().toLocaleString(),
        user: this.authService.usuario.uid || '',
        mostrarNavbar: true,
        listHtml: [],
        detalle: 'visible',
      };
      this.adminService.crearPlantilla(nuevaPagina).subscribe(
        (value) => {
          console.log(value, 'pagina creada');
          this.router.navigate(['admin/plantillas/editar/', value.page._id]);
        },
        (err) => {
          console.log(err, 'error en la creacion de la pagina');
        }
      );
    }
  }
}
