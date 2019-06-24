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

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      AgendaId: 0,
      Paciente: '',
      InicioConsulta: null,
      Observacao: '',
      TerminoConsulta: null,
      Nascimento: null,
    };
  }
  validateDates(form: NgForm) {
    const agenda = {
      AgendaId: form.value.AgendaId,
      Paciente: form.value.Paciente,
      InicioConsulta: new Date(form.value.InicioConsulta),
      TerminoConsulta: new Date(form.value.TerminoConsulta),
      Nascimento: new Date(form.value.Nascimento),
      Observacao: form.value.Observacao
    };
    return agenda;
  }
  onSubmit(form: NgForm) {
    const body = this.validateDates(form);
    this.service.postAgenda(body).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Consulta marcada com sucesso.', 'Agenda Consulta');
      },
      err => {
        console.log(err);
        this.toastr.error('.', 'Agenda Consulta');
      }
    );
  }
}
