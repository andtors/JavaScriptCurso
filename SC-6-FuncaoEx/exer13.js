
const meuArray = [];

function adicionarValor(valor1, valor2, valor3) {
    meuArray.push(valor1, valor2, valor3)
}

function somarValores(array) {
  const soma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  console.log(`A soma dos valores no array é: ${soma}`);
}

adicionarValor(5, 10, 10);

somarValores(meuArray);