document.querySelector("#siguiente").onclick = function (event) {
  let $cantidadDeIntegrantes = document.querySelector("#cantidad-integrantes");
  let cantidadDeIntegrantes = Number($cantidadDeIntegrantes.value);

  borrarIntegrantesPasados();
  crearIntegrantes(cantidadDeIntegrantes);

  event.preventDefault();
};

document.querySelector("#calcular").onclick = function (event) {
  const numeros = conseguirEdadIntegrantes();
  imprimirEdad(`mayor`, obtenerNumeroMayor(numeros));
  imprimirEdad(`menor`, obtenerNumeroMenor(numeros));
  imprimirEdad(`promedio`, obtenerNumeroPromedio(numeros));

  mostrarResultados();

  event.preventDefault();
};

document.querySelector("#resetear").onclick = resetear;

function borrarIntegrantesPasados() {
  const $integrantes = document.querySelectorAll(".integrante");
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearIntegrantes(cantidadDeIntegrantes) {
  if (cantidadDeIntegrantes > 0) {
    mostrarBotonDeCalculo();
    mostrarBotonResetear();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadDeIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement(`div`);
  $div.className = "integrante";

  const $label = document.createElement("label");
  $label.textContent = "La edad de este integrante es #: " + (indice + 1);
  const $input = document.createElement("input");
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector("#integrantes");
  $integrantes.appendChild($div);
}

function resetear() {
  borrarIntegrantesPasados();
  ocultarBotondeCalculo();
  ocultarResultados();
  ocultarBotonResetear();
}

function ocultarBotonResetear() {
  document.querySelector("#resetear").className = "oculto";
}
function mostrarBotonResetear() {
  document.querySelector("#resetear").className = "";
}

function ocultarBotondeCalculo() {
  document.querySelector("#calcular").className = "oculto";
}

function mostrarBotonDeCalculo() {
  document.querySelector("#calcular").className = "";
}

function ocultarResultados() {
  document.querySelector("#resultados").className = "oculto";
}

function mostrarResultados() {
  document.querySelector("#resultados").className = "";
}

function imprimirEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function conseguirEdadIntegrantes() {
  const $integrantes = document.querySelectorAll(".integrante input");
  const edades = [];

  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}
