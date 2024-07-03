// api.js
const { fetchVideos, fetchFavorites, toggleFavorite } = require('./youtube');

// Função para buscar vídeos
async function handleVideosRequest(searchTerm) {
  return await fetchVideos(searchTerm);
}

// Função para manipular favoritos
async function handleFavoritesRequest(videoId, action) {
  if (action === 'add') {
    return await toggleFavorite(videoId, true);
  } else if (action === 'remove') {
    return await toggleFavorite(videoId, false);
  } else {
    throw new Error('Ação inválida');
  }
}

module.exports = {
  handleVideosRequest,
  handleFavoritesRequest,
};
