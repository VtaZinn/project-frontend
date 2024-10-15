const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON no body da requisição
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
