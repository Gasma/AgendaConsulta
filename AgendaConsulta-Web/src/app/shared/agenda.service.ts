import { Agenda } from './agenda.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  formData: Agenda;

  constructor() { }
}
