import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosComponent } from './pages/products/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { InventarioProductosComponent } from './pages/inventario-productos/inventario-productos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductosComponent,
    DetalleProductoComponent,
    InventarioProductosComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductosModule { }
