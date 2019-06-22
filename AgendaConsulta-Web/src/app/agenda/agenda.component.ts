import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: []
})
export class AgendaComponent implements OnInit {

  constructor(private service: AgendaService) { }

  ngOnInit() {
  }

}
