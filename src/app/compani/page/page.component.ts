import { PagesService } from './../../companies/services/pages.service';
import { Component, OnInit } from '@angular/core';
import { Page } from '../../companies/types/page.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public paginas: Page[] = [];
  public pagina: Page | undefined;
  html: string = '';
  guardadoProductos: boolean = false;
  guardadoHtmlProductos: boolean = false;

  constructor(
    private pagesService: PagesService,
    private productosService: ProductosService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pagesService
        .getPaginas(params.get('idCompanies') || undefined)
        .subscribe((resp) => {
          if (!this.guardadoProductos) {
            this.paginas = [...this.paginas, ...resp.pages];
            this.guardadoProductos = true;
          }
          this.pagina = this.paginas.find(
            (page) => page._id === this.route.snapshot.params['idPage']
          );
          console.log(this.pagina);
        });
      this.productosService.getProductos().subscribe((resp) => {
        resp.forEach((producto) => {
          this.html += `<div class="card card-photo" style="width: 18rem;" ">
          

          <div class="card-body">
              <div class="d-flex justify-content-between ">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">L. ${producto.precio}</p>
              </div>
          <a href="#" class="btn btn-warning btn-sm">Comprar</a>
          </div>
      </div>`;
        });
        if (!this.guardadoHtmlProductos) {
          this.paginas = [
            {
              nombre: 'Lista de productos',
              detalle: 'visible',
              user: '62c67ba0e85553ae02182727',
              mostrarNavbar: true,
              _id: 'lista',
              listHtml: [
                {
                  col_g: '12',
                  col_s: '12',
                  html: `<div class="container"><div class="row">${this.html}</div></div>`,
                  tipoContenido: 'html',
                },
              ],
              ...this.paginas,
            },
          ];
          this.guardadoHtmlProductos = true;
        }
        this.pagina = this.paginas.find(
          (page) => page._id === this.route.snapshot.params['idPage']
        );
      });
    });
  }

  ngOnInit(): void {}
}
