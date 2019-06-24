import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { Agenda } from 'src/app/shared/agenda.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styles: []
})
export class ListaConsultaComponent implements OnInit {

  constructor(private service: AgendaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd: Agenda) {
    this.service.formData = Object.assign({}, pd);
  }
  onDelete(AgendaId: any) {
    if (confirm('Deseja excluir o registro? Essa operação não pode ser revertida.')) {
      this.service.deleteAgenda(AgendaId).subscribe(
        response => {
          if (response.status === 200) {
            this.toastr.warning('Excluido com sucesso.', 'Agenda Consulta');
            this.service.refreshList();
          }
        },
        err => {
          console.log(err);
          this.toastr.error('.', 'Agenda Consulta');
        }
      );
    }
  }
}
