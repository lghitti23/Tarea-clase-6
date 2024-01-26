document.querySelector("#agregar").onclick = function (event) {
  agregarSalarioAnual();
  mostrarBotonCalcular();

  event.preventDefault();
};

document.querySelector("#calcular").onclick = function (event) {
  const numeros = conseguirSalariosAnuales();
  imprimirResultado("mayor", calcularSalarioAnualMayor(numeros));
  imprimirResultado("menor", calcularSalarioAnualMenor(numeros));
  imprimirResultado("promedioanual", calcularSalarioAnualPromedio(numeros));
  imprimirResultado("promediomensual", calcularSalarioMensualPromedio(numeros));

  mostrarResultados();

  event.preventDefault();
};

function eliminarInputElement() {
  const ultimoIntegrante = document
    .querySelector("#calcularSalarioAnual")
    .lastElementChild.remove();
  ocultarResultados();
}

function agregarSalarioAnual() {
  const $calcularSalarioAnual = document.querySelector("#calcularSalarioAnual");
  const $div = document.createElement("div");
  $div.className = "integrantes";
  const $label = document.createElement("label");
  $label.textContent = "Agregar Salario Anual Integrante #: ";
  $label.className = "salario";
  const $input = document.createElement("input");
  $input.type = "number";
  $input.className = "salario";
  const $br = document.createElement("br");
  $br.className = "salario";

  $calcularSalarioAnual.appendChild($div);
  $div.appendChild($label);
  $div.appendChild($input);
  $div.appendChild($br);
}

function mostrarBotonCalcular() {
  document.querySelector("#calcular").className = "";
}
function ocultarBotonCalcular() {
  document.querySelector("#calcular").className = "oculto";
}
function ocultarResultados() {
  document.querySelector("#resultados").className = "oculto";
}
function mostrarResultados() {
  document.querySelector("#resultados").className = "";
}

function conseguirSalariosAnuales() {
  let numeros = [];
  const $salarios = document.querySelectorAll("input");

  for (let i = 0; i < $salarios.length; i++) {
    if ($salarios[i].value !== "") {
      numeros.push(Number($salarios[i].value));
    }
  }
  return numeros;
}

function imprimirResultado(tipo, valor) {
  document.querySelector(`#${tipo}-salario`).textContent = valor;
}
