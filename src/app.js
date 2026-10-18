const express = require('express');
const calculaIdade = require('./calculaIdade');

const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

const usuarios = [];

app.post('/usuarios', (req, res) => {
  const { cpf, nome, dataNascimento } = req.body;

  if (!cpf || !nome || !dataNascimento) {
    return res
      .status(400)
      .json({ erro: 'cpf, nome e dataNascimento são obrigatórios' });
  }

  const idade = calculaIdade(dataNascimento);
  const usuario = { cpf, nome, dataNascimento, idade };
  usuarios.push(usuario);

  return res.status(201).json(usuario);
});

app.get('/usuarios', (_req, res) => {
  return res.json(usuarios);
});

app.get('/usuarios/:cpf', (req, res) => {
  const usuario = usuarios.find((u) => u.cpf === req.params.cpf);
  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  return res.json(usuario);
});

app.get('/health', (_req, res) => {
  return res.json({ status: 'ok' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;
