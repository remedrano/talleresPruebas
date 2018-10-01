import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportePaletaComponent } from './reporte-paleta/reporte-paleta.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportePaletaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
