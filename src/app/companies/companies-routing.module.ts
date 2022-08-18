import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaginasComponent } from './pages/paginas/paginas.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { DetalleProductoComponent } from './productos/pages/detalle-producto/detalle-producto.component';
import { ProductosComponent } from './productos/pages/products/productos.component';
import { InventarioProductosComponent } from './productos/pages/inventario-productos/inventario-productos.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pages', component: PaginasComponent },
      { path: 'pages/editar/:id', component: EditPageComponent },

      //Productos
      { path: 'productos', component: ProductosComponent },
      { path: 'productos/:id', component: DetalleProductoComponent },
      { path: 'inventario', component: InventarioProductosComponent },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
