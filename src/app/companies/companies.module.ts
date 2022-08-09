import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MainComponent } from './pages/main/main.component';
import { PaginasComponent } from './pages/paginas/paginas.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    PaginasComponent,
    MenuComponent,
    DashboardComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    MonacoEditorModule.forRoot(),

    ReactiveFormsModule,
    CompaniesRoutingModule,
    SharedModule,
  ],
})
export class CompaniesModule {}
