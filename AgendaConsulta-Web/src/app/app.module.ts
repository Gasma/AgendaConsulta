import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NovaConsultaComponent } from './agenda/nova-consulta/nova-consulta.component';
import { ListaConsultaComponent } from './agenda/lista-consulta/lista-consulta.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaService } from './shared/agenda.service';

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
    NgbModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
