using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaConsulta.Api.Models
{
    public class Agenda
    {
        [Key]
        public int AgendaId { get; set; }
        [Required]
        public DateTime InicioConsulta { get; set; }
        public DateTime TerminoConsulta { get; set; }
        public string Observacao { get; set; }
        [Required]
        public string Paciente { get; set; }
    }
}
