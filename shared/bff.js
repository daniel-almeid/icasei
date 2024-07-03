const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuração do CORS para requisições do frontend
app.use(cors());

const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyD0i0T6OoGsJvmivQ2ljFhYEc5qJtzeo2I',
});

// Rota para buscar vídeos
app.get('/searchVideos', async (req, res) => {
  const { q } = req.query;

  try {
    const response = await youtube.search.list({
      part: 'snippet',
      q,
      maxResults: 10,
    });

    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    res.status(500).json({ error: 'Erro ao buscar vídeos' });
  }
});

app.listen(PORT, () => {
  console.log(`BFF rodando na porta ${PORT}`);
});