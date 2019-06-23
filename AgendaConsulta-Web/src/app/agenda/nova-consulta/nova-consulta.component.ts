import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { NgForm } from '@angular/forms';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-nova-consulta',
  templateUrl: './nova-consulta.component.html',
  styles: []
})
export class NovaConsultaComponent implements OnInit {

  constructor(private service: AgendaService) { }

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

  ConvertData(form: NgForm) {
    // InicioConsulta = new Date(InicioConsulta);
  }
  onSubmit(form: NgForm) {
    this.ConvertData(form);
    this.service.postAgenda(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    );
  }
}
