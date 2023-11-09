function calcularDistancia() {
    var x1 = parseFloat(document.getElementById("x1").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var y2 = parseFloat(document.getElementById("y2").value);

    var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    document.getElementById("resultado").innerHTML = "A distância entre os pontos é: " + distancia.toFixed(2);

    desenharPlanoCartesiano(x1, y1, x2, y2);
}

function desenharPlanoCartesiano(x1, y1, x2, y2) {
    var planoCartesiano = document.getElementById("plano-cartesiano");
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    planoCartesiano.innerHTML = "";
    planoCartesiano.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    // Desenhar eixos x e y
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 400);
    ctx.moveTo(0, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();

    // Marcar pontos
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x1 * 20 + 200, 200 - y1 * 20, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x2 * 20 + 200, 200 - y2 * 20, 5, 0, Math.PI * 2);
    ctx.fill();

    // Desenhar linha entre os pontos
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x1 * 20 + 200, 200 - y1 * 20);
    ctx.lineTo(x2 * 20 + 200, 200 - y2 * 20);
    ctx.stroke();
}