import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import locateES from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingGeneralComponent } from './landing-general/landing-general.component';
import { PlanesComponent } from './planes/planes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { PageComponent } from './compani/page/page.component';
registerLocaleData(locateES, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LandingGeneralComponent,
    
    PlanesComponent,
    
    CarritoComponent,
    ListaEmpresasComponent,
    OrdenesComponent,
    ArchivosComponent,
    PageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
