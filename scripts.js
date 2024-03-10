function mostrarresultado(resultado) {
  let elementoresultado = document.getElementById("Vresultado");

  elementoresultado.textContent = resultado;
}

function suma() {
  let valor1 = document.getElementById("ingreso1").value;
  let valor2 = document.getElementById("ingreso2").value;
  let resultado = +valor1 + +valor2;
  mostrarresultado(resultado);
  return resultado;
}

function resta() {
  let valor1 = document.getElementById("ingreso1").value;
  let valor2 = document.getElementById("ingreso2").value;
  let resultado = +valor1 - +valor2;
  mostrarresultado(resultado);
  return resultado;
}

function multiplica() {
  let valor1 = document.getElementById("ingreso1").value;
  let valor2 = document.getElementById("ingreso2").value;
  let resultado = +valor1 * +valor2;
  mostrarresultado(resultado);
  return resultado;
}

function division() {
  let valor1 = document.getElementById("ingreso1").value;
  let valor2 = document.getElementById("ingreso2").value;
  let resultado = +valor1 / +valor2;
  mostrarresultado(resultado);
  return resultado;
}

function raiz() {
  let valor1 = document.getElementById("ingreso1").value;
  let valor2 = document.getElementById("ingreso2").value;
  let resultado = Math.sqrt(+valor1);
  mostrarresultado(resultado);
  return resultado;
}

function potencia() {
  let valor1 = document.getElementById("ingreso1").value;
  let valor2 = document.getElementById("ingreso2").value;
  let resultado = Math.pow(+valor1, valor2);
  mostrarresultado(resultado);
  return resultado;
}

function vabsoluto() {
  let valor1 = document.getElementById("ingreso1").value;
  let valor2 = document.getElementById("ingreso2").value;
  let resultado = Math.abs(+valor1);
  mostrarresultado(resultado);
  return resultado;
}

function random() {
  let valor1 = parseInt(document.getElementById("ingreso1").value);
  let valor2 = parseInt(document.getElementById("ingreso2").value);

  // Asegurarse de que valor1 sea menor o igual que valor2
  if (valor1 > valor2) {
    [valor1, valor2] = [valor2, valor1];
  }

  let resultado = Math.floor(Math.random() * (valor2 - valor1 + 1)) + valor1;
  mostrarresultado(resultado);
  return resultado;
}

function redondear() {
  let valor1r = parseInt(document.getElementById("Vresultado").textContent);

  let resultado = Math.round(valor1r);
  mostrarresultado(resultado);
  return resultado;
}

function floor() {
  let valor1r = parseInt(document.getElementById("Vresultado").textContent);

  let resultado = Math.floor(valor1r);
  mostrarresultado(resultado);
  return resultado;
}

function ceil() {
  let valor1r = parseInt(document.getElementById("Vresultado").textContent);

  let resultado = Math.ceil(valor1r);
  mostrarresultado(resultado);
  return resultado;
}
