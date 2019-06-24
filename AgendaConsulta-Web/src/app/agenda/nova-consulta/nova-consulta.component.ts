import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nova-consulta',
  templateUrl: './nova-consulta.component.html',
  styles: []
})
export class NovaConsultaComponent implements OnInit {

  constructor(private service: AgendaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.service.formData = {
      AgendaId: 0,
      Paciente: '',
      InicioConsulta: null,
      Observacao: '',
      TerminoConsulta: null,
      Nascimento: null,
    };
  }

  onSubmit() {
    this.service.saveAgenda().subscribe(
      response => {
        if (response.status === 200) {
          this.resetForm();
          this.toastr.success('A Consulta foi salva com sucesso.', 'Agenda Consulta');
          this.service.refreshList();
        }
        if (response.status === 404) {
          this.toastr.warning('Erro ao marcar essa consulta, verifique se já existe uma consulta nesse horário.', 'Agenda Consulta');
        }
      },
      err => {
        console.log(err);
        this.toastr.error('.', 'Agenda Consulta');
      }
    );
  }
}
