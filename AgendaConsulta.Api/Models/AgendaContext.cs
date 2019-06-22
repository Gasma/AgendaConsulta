using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaConsulta.Api.Models
{
    public class AgendaContext:DbContext
    {
        public AgendaContext(DbContextOptions<AgendaContext> options) :base(options)
        {

        }

        public DbSet<Agenda> Agenda { get; set; }
    }
}
