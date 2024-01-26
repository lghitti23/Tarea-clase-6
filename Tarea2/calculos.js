function calcularSalarioAnualMayor(numeros) {
  let mayorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorNumero) {
      mayorNumero = numeros[i];
    }
  }

  return mayorNumero;
}

function calcularSalarioAnualMenor(numeros) {
  let menorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }

  return menorNumero;
}

function calcularSalarioAnualPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }

  return (acumulador / numeros.length).toFixed(2);
}

function calcularSalarioMensualPromedio(numeros) {
  let acumulador = 0;
  const MESES_EN_UN_AÑO = 12;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }

  return (acumulador / numeros.length / MESES_EN_UN_AÑO).toFixed(2);
}
