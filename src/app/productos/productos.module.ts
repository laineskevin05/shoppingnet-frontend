import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosComponent } from './pages/products/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ProductosRoutingModule } from './productos-routing.module';



@NgModule({
  declarations: [
    ProductosComponent,
    DetalleProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
