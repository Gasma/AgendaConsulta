using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AgendaConsulta.Api.Models;
using AgendaConsulta.Api.Services;

namespace AgendaConsulta.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgendaController : ControllerBase
    {
        private readonly AgendaService _service;

        public AgendaController(AgendaService service)
        {
            _service = service;
        }

        // GET: api/Agenda
        [HttpGet]
        public ActionResult<IEnumerable<Agenda>> GetAgenda()
        {
            return _service.GetAgenda().ToList();
        }

        // GET: api/Agenda/5
        [HttpGet("{id}")]
        public ActionResult<Agenda> GetAgenda(int id)
        {
            var agenda = _service.GetAgenda(id);

            if (agenda == null)
            {
                return StatusCode(404);
            }
            return agenda;
        }

        // PUT: api/Agenda/5
        [HttpPut("{id}")]
        public IActionResult PutAgenda(int id, Agenda agenda)
        {
            _service.PutAgenda(id, agenda);
            if (_service.Invalido)
                return StatusCode(404, _service.Notificacoes.Select(m => new { erros = m.Mensagem }));
            return NoContent();
        }

        // POST: api/Agenda
        [HttpPost]
        public IActionResult PostAgenda(Agenda agenda)
        {
            _service.PostAgenda(agenda);
            if (_service.Invalido)
                StatusCode(401, _service.Notificacoes.Select(m => new { erros = m.Mensagem }));
            return NoContent();
        }

        // DELETE: api/Agenda/5
        [HttpDelete("{id}")]
        public IActionResult DeleteAgenda(int id)
        {
            _service.DeleteAgenda(id);
            if (_service.Invalido)
                StatusCode(402, _service.Notificacoes.Select(m => new { erros = m.Mensagem }));
            return NoContent();
        }
    }
}
