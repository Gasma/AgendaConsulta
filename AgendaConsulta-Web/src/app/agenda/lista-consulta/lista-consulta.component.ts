import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { Agenda } from 'src/app/shared/agenda.model';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styles: []
})
export class ListaConsultaComponent implements OnInit {

  constructor(private service: AgendaService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd: Agenda) {
    this.service.formData = pd;
  }
}
