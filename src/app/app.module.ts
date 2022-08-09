import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingGeneralComponent } from './landing-general/landing-general.component';
import { PlanesComponent } from './planes/planes.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ArchivosComponent } from './archivos/archivos.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingGeneralComponent,
    DetalleProductoComponent,
    PlanesComponent,
    ProductosComponent,
    CarritoComponent,
    ListaEmpresasComponent,
    OrdenesComponent,
    ArchivosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
