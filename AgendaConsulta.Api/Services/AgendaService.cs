﻿using AgendaConsulta.Api.Models;
using JNogueira.Infraestrutura.NotifiqueMe;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaConsulta.Api.Services
{
    public class AgendaService : Notificavel
    { 
        private readonly AgendaContext _context;

        public AgendaService(AgendaContext context)
        {
            _context = context;
        }

        public IEnumerable<Agenda> GetAgenda()
        {
            return _context.Agenda.ToList();
        }

        public Agenda GetAgenda(int id)
        {
            var agenda = _context.Agenda.Find(id);
            return agenda;
        }

        public void PutAgenda(int id, Agenda agenda)
        {
            if (id != agenda.AgendaId)
            {
                this.AdicionarNotificacao("Informações invalidas");
            }
            _context.Entry(agenda).State = EntityState.Modified;
            try
            {
                 _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgendaExists(id))
                {
                    this.AdicionarNotificacao("Registro inesistente");
                }
                else
                {
                    throw;
                }
            }
        }

        public void PostAgenda(Agenda agenda)
        {
            
            try
            {
                if (!ConflitoHorario(agenda))
                {
                    _context.Agenda.Add(agenda);
                    _context.SaveChanges();
                }
                else
                {
                    this.AdicionarNotificacao("Horario já ocupado na agenda");
                }
            }
            catch (DbUpdateConcurrencyException)
            {
                this.AdicionarNotificacao("Não foi possivel salvar o registro");
            }
        }

        public void DeleteAgenda(int id)
        {
            var agenda = _context.Agenda.Find(id);
            if (agenda == null)
            {
                this.AdicionarNotificacao("Registro informado não existe");
                return;
            }
            try
            {
                _context.Agenda.Remove(agenda);
                _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                this.AdicionarNotificacao("Ocorreu um erro ao tentar excluir o registro");
            }
        }

        private bool ConflitoHorario(Agenda agenda)
        {
            var result = _context.Agenda
                .Where(a => a.InicioConsulta < agenda.InicioConsulta && a.TerminoConsulta > agenda.InicioConsulta);
            var result2 = _context.Agenda
                .Where(a => a.InicioConsulta < agenda.TerminoConsulta && a.TerminoConsulta > agenda.TerminoConsulta);
            return (result.Count() + result2.Count()) > 0 ? true: false;
        }

        private bool AgendaExists(int id)
        {
            return _context.Agenda.Any(e => e.AgendaId == id);
        }
        public string GetNotificacoes()
        {
            if (!Invalido)
                return "";
            string str = "";
            foreach (var item in Notificacoes)
            {
                str += item.Mensagem + " | ";
            }
            return str;
        }
    }
}
