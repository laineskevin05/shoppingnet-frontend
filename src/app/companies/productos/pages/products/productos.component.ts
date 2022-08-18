import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit {

  constructor(
    public productoService: ProductosService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }


  /* getProductos(){
    this.productoService.getProductos().subscribe((res)=> {
      this.productoService.productos = res;
      console.log("mostrando productos")
    },
      err => console.log(err)
    )
  }
 */

  getProductos(){
    this.productoService.getProductos().subscribe((res)=> {
      this.productoService.productos = res;
      console.log("mostrando productos")
    },
      err => console.log(err)
    )
  }

  /* selectedCard(id: string) {
    console.log(id)
    this.router.navigate(['/productos/lista-productos', id]); 
  } */
}
