import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PagesService } from '../../services/pages.service';
import { CreatePageResponse, Page } from '../../types/page.interface';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
})
export class PaginasComponent implements OnInit {
  public paginas: Page[] = [];
  public plantillaSelect: number = 0;
  public plantillas: Page[] = [];

  constructor(
    private pagesService: PagesService,
    private authService: AuthService,
    private router: Router
  ) {
    this.pagesService.getPaginas().subscribe((resp) => {
      this.paginas = resp.pages;
    });
    this.pagesService.getPlantillas().subscribe((resp) => {
      this.plantillas = resp.pages;
    });
  }

  ngOnInit(): void {}

  cambioPlantillaSelect(numero: number) {
    this.plantillaSelect = numero;
  }

  crearPagina() {
    const nuevaPagina: Page = {
      nombre: new Date().toLocaleString(),
      user: this.authService.usuario.uid || '',
      mostrarNavbar: true,
      listHtml: [],
      detalle: 'visible',
    };

    if (this.plantillaSelect === 0) {
      this.pagesService.crearPagina(nuevaPagina).subscribe(
        (value) => {
          console.log(value, 'pagina creada');
          this.router.navigate([
            'admin-companies/pages/editar/',
            value.page._id,
          ]);
        },
        (err) => {
          console.log(err, 'error en la creacion de la pagina');
        }
      );
    }
    if (this.plantillaSelect > 0) {
      nuevaPagina.listHtml =
        this.plantillas[this.plantillaSelect - 1].listHtml || [];
      this.pagesService.crearPagina(nuevaPagina).subscribe(
        (value) => {
          console.log(value, 'pagina creada');
          this.router.navigate([
            'admin-companies/pages/editar/',
            value.page._id,
          ]);
        },
        (err) => {
          console.log(err, 'error en la creacion de la pagina');
        }
      );
    }
  }
}
