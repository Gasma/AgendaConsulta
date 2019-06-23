import { Agenda } from './agenda.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  formData: Agenda;
  readonly rootURL = 'http://localhost:62032/api';

  constructor(private http: HttpClient) {

  }

  postAgenda(formData: Agenda) {
    return this.http.post(this.rootURL + '/Agenda', formData);
  }
}
