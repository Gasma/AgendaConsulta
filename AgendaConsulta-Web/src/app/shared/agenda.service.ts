import { Agenda } from './agenda.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  formData: Agenda;

  readonly rootURL = 'http://localhost:62032/api';
  list: Agenda[];
  constructor(private http: HttpClient) {

  }
  validateDates() {
    this.formData.InicioConsulta = new Date(this.formData.InicioConsulta);
    this.formData.TerminoConsulta = new Date(this.formData.TerminoConsulta);
    this.formData.Nascimento = new Date(this.formData.Nascimento);
  }

  saveAgenda() {
    if (this.formData.AgendaId === 0) {
      return this.postAgenda();
    } else {
      return this.putAgenda();
    }
  }
  private postAgenda() {
    return this.http.post(this.rootURL + '/Agenda', this.formData);
  }

  private putAgenda() {
    return this.http.put(this.rootURL + '/Agenda/' + this.formData.AgendaId, this.formData);
  }

  deleteAgenda(AgendaId) {
    return this.http.delete(this.rootURL + '/Agenda/' + AgendaId);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Agenda')
      .toPromise()
      .then(res => this.list = res as Agenda[]);
  }
}
