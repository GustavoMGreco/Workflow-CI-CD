function calculaIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento + 'T00:00:00');

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();
  const mesNasc = nascimento.getMonth();
  const diaNasc = nascimento.getDate();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }

  return idade;
}

module.exports = calculaIdade;
