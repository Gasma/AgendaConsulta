using Microsoft.EntityFrameworkCore.Migrations;

namespace AgendaConsulta.Api.Migrations
{
    public partial class AgendaUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DuracaoConsulta",
                table: "Agenda");

            migrationBuilder.AddColumn<string>(
                name: "Paciente",
                table: "Agenda",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Paciente",
                table: "Agenda");

            migrationBuilder.AddColumn<string>(
                name: "DuracaoConsulta",
                table: "Agenda",
                nullable: true);
        }
    }
}
