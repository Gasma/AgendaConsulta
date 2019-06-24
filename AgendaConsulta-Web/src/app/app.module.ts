import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { InputMaskModule } from 'racoon-mask-raw';
import localeBr from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { NovaConsultaComponent } from './agenda/nova-consulta/nova-consulta.component';
import { ListaConsultaComponent } from './agenda/lista-consulta/lista-consulta.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaService } from './shared/agenda.service';

registerLocaleData(localeBr, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    NovaConsultaComponent,
    ListaConsultaComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputMaskModule,
    ToastrModule.forRoot()
  ],
  providers: [AgendaService, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
