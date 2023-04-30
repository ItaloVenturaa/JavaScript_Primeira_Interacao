function obterNomeMes(mes) {
    var meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return meses[mes - 1];
}

function exibirData() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    // Certifique-se de que o dia e o mês tenham 2 dígitos
    if (dia.length < 2) {
        dia = "0" + dia;
    }
    if (mes.length < 2) {
        mes = "0" + mes;
    }

    document.write("Data inserida: " + dia + " de " + obterNomeMes(mes) + " de " + ano + "<br>");

    document.write("Meses em ordem crescente: <ul>");
    for (var i = parseInt(mes); i <= 12; i++) {
        document.write("<li>" + obterNomeMes(i) + "</li>");
    }
    for (var i = 1; i < parseInt(mes); i++) {
        document.write("<li>" + obterNomeMes(i) + "</li>");
    }
    document.write("</ul>");
}


