import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../../auth/pages/main/main.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { InventarioProductosComponent } from './pages/inventario-productos/inventario-productos.component';
import { ProductosComponent } from './pages/products/productos.component';


const routes: Routes = [
    {
        path: '',
        /* component: MainComponent, */
        children: [
            {path: 'inventario', component: InventarioProductosComponent},
            {path: 'lista-productos', component: ProductosComponent },
            {path: 'lista-productos/:id', component: DetalleProductoComponent},
            
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ProductosRoutingModule {}
