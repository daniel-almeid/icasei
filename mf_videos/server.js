const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`mf_videos rodando na porta ${PORT}`);
});
