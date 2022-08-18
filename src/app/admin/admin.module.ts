import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { AdminRoutingModule } from './admin-routing.module';

import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import { EditPlantillaComponent } from './pages/edit-plantilla/edit-plantilla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    MenuComponent,
    PlantillasComponent,
    EditPlantillaComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    CKEditorModule,
    MonacoEditorModule.forRoot(),

    ReactiveFormsModule,

    SharedModule,
  ],
})
export class AdminModule {}
