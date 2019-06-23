using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AgendaConsulta.Api.Migrations
{
    public partial class AddNascimentoAgenda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Nascimento",
                table: "Agenda",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nascimento",
                table: "Agenda");
        }
    }
}
