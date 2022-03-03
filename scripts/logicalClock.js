export default function logicalClock() {
    const $ = document.querySelector.bind(document)

    let  horarioHtml = $("#horario h1")
    let  diaHtml = $("#Dia p")

    let date = new Date();

    let horas = date.getHours();
    let minutos= date.getMinutes();

    let diaSemana = date.getDay();
    let dia = date.getDate();
    let mes = date.getMonth();
    let ano = date.getFullYear();

    const dias = [ 
        "domingo", 
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ]

    const mesesAno = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ] 

    horarioHtml.textContent = `${horas <= 9 ? "0" : ""}${horas}:${minutos<=9 ? "0" : ""}${minutos}`
    diaHtml.textContent = `${dias[diaSemana]}, ${dia <= 9 ? "0" : ""}${dia} de ${mesesAno[mes]} de ${ano}`
}