import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../interfaces/interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})

export class DetalleProductoComponent implements OnInit {

  id!: string;
  producto!: Producto;

  constructor(
    public productoService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.productoService.getProducto(this.id)
        .subscribe(
          res => {
            this.producto = res;
          },
          err => console.log(err)
        )
    });
  }

}
