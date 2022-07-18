import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { LandingGeneralComponent} from './landing-general/landing-general.component'
import { PlanesComponent } from './planes/planes.component'
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component'
import { ProductosComponent } from './productos/productos.component'
import { CarritoComponent } from './carrito/carrito.component'
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component'


const routes: Routes = [
  {
    path: 'lista-empresas',
    component: ListaEmpresasComponent
  },
  {
    path: 'cart',
    component: CarritoComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'detalle-producto',
    component: DetalleProductoComponent
  },
  {
    path:'landing',
    component: LandingGeneralComponent,
  },
  {
    path:'planes',
    component: PlanesComponent,
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
    path: '**',
    redirectTo: 'auth',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
