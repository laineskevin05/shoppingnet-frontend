import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingGeneralComponent } from './landing-general/landing-general.component';
import { PlanesComponent } from './planes/planes.component';

@NgModule({
  declarations: [AppComponent, LandingGeneralComponent, PlanesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
