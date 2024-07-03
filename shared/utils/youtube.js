const { google } = require('googleapis');
const { api_key } = require('./config');

const youtube = google.youtube({
  version: 'v3',
  auth: api_key,
});

// Função para buscar vídeos no YouTube
async function fetchVideos(searchTerm) {
  const response = await youtube.search.list({
    part: 'snippet',
    q: searchTerm,
    maxResults: 10,
    type: 'video',
  });
  return response.data.items;
}

// Função para adicionar ou remover vídeos dos favoritos
async function toggleFavorite(videoId, addToFavorites) {
  // Lógica para adicionar/remover dos favoritos
  return { success: true }; // Exemplo simples
}

module.exports = {
  fetchVideos,
  toggleFavorite,
};
