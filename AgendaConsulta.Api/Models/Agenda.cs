using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaConsulta.Api.Models
{
    public class Agenda
    {
        [Key]
        public int AgendaId { get; set; }

        public DateTime InicioConsulta { get; set; }
        [Column(TypeName = "Date")]
        public DateTime Nascimento { get; set; }
        public DateTime TerminoConsulta { get; set; }
        public string Observacao { get; set; }
        [Required]
        public string Paciente { get; set; }
    }
}
