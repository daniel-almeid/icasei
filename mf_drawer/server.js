// server.js para mf_drawer
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`mf_drawer rodando na porta ${PORT}`);
});
