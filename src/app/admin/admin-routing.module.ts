import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditPlantillaComponent } from './pages/edit-plantilla/edit-plantilla.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'usuarios', component: DashboardComponent },
      { path: 'plantillas', component: PlantillasComponent },
      { path: 'plantillas/editar/:id', component: EditPlantillaComponent },

      { path: '**', redirectTo: 'usuarios' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
