import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { LandingGeneralComponent } from './landing-general/landing-general.component';
import { PlanesComponent } from './planes/planes.component';
import { DetalleProductoComponent } from './companies/productos/pages/detalle-producto/detalle-producto.component';
import { ProductosComponent } from './companies/productos/pages/products/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { PageComponent } from './compani/page/page.component';

const routes: Routes = [
  {
    path: 'archivos',
    component: ArchivosComponent,
  },
  {
    path: 'ordenes',
    component: OrdenesComponent,
  },
  {
    path: 'lista-empresas',
    component: ListaEmpresasComponent,
  },
  {
    path: 'cart',
    component: CarritoComponent,
  },
  {
    path: 'landing',
    component: LandingGeneralComponent,
  },
  {
    path: 'planes',
    component: PlanesComponent,
  },

  {
    path: 'productos',
    loadChildren: () =>
      import('./companies/productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard],
  },
  {
    path: 'admin-companies',
    loadChildren: () =>
      import('./companies/companies.module').then((m) => m.CompaniesModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard],
  },
  {
    path: 'companies/:idCompanies/pages/:idPage',
    component: PageComponent,
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
