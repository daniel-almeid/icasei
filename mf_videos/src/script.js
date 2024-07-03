// Define a URL base da API
const API_BASE_URL = 'http://localhost:3000';

// Obtém referências aos elementos do DOM
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const videosContainer = document.getElementById('videosContainer');
const favoritesCount = document.querySelector('.favorites-count');
const favoritesContainer = document.getElementById('favoritesContainer');
const videosSection = document.getElementById('videosSection');
const favoritesSection = document.getElementById('favoritesSection');
const videosLink = document.getElementById('videosLink');
const favoritesLink = document.getElementById('favoritesLink');

// Elementos do modal de vídeo
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeModal = document.getElementById('closeModal');

let favorites = [];

// Função para buscar vídeos, convertendo a resposta para JSON e exibindo os vídeos encontrados na tela
const searchVideos = async (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) return;

  try {
    const response = await fetch(`${API_BASE_URL}/searchVideos?q=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    displayVideos(data.items);
  } catch (error) {
    console.error('Erro ao buscar vídeos:', error);
  }
};

// Função para exibir vídeos na tela
const displayVideos = (videos) => {
  videosContainer.innerHTML = '';
  videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-card');
    videoItem.innerHTML = `
      <h2>${video.snippet.title}</h2>
      <img src="${video.snippet.thumbnails.default.url}" alt="Thumbnail">
      <button class="play-button" data-video-id="${video.id.videoId}">Reproduzir</button>
      <button class="favorite-button" data-video-id="${video.id.videoId}">
        ${favorites.some(fav => fav.videoId === video.id.videoId) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    `;
    // Evento para reproduzir vídeo ou adicionar/remover dos favoritos
    videoItem.querySelector('.play-button').addEventListener('click', () => playVideo(video.id.videoId));
    videoItem.querySelector('.favorite-button').addEventListener('click', () => toggleFavorite(video.id.videoId, video.snippet.title, video.snippet.thumbnails.default.url));
    videosContainer.appendChild(videoItem);
  });
};

// Função para adicionar/remover vídeo aos favoritos
const toggleFavorite = (videoId, title, thumbnail) => {
  const index = favorites.findIndex(fav => fav.videoId === videoId);
  if (index === -1) {
    favorites.push({ videoId, title, thumbnail });
  } else {
    favorites.splice(index, 1);
  }
  favoritesCount.textContent = favorites.length;
  displayFavorites();
  updateFavoriteButtons();
};

// Função para exibir favoritos na lista
const displayFavorites = () => {
    favoritesContainer.innerHTML = '';
    favorites.forEach(video => {
      const favoriteItem = document.createElement('div');
      favoriteItem.classList.add('video-card');
      favoriteItem.innerHTML = `
        <h2>${video.title}</h2>
        <img src="${video.thumbnail}" alt="Thumbnail">
        <button class="play-button" data-video-id="${video.videoId}">Reproduzir</button>
        <button data-video-id="${video.videoId}">
          Remover dos Favoritos
        </button>
      `;
      favoriteItem.querySelector('.play-button').addEventListener('click', () => playVideo(video.videoId));
      favoriteItem.querySelector('button').addEventListener('click', () => toggleFavorite(video.videoId, video.title, video.thumbnail));
      favoritesContainer.appendChild(favoriteItem);
    });
  };

// Atualiza botões de favoritos nos vídeos
const updateFavoriteButtons = () => {
  const buttons = document.querySelectorAll('.favorite-button');
  buttons.forEach(button => {
    const videoId = button.getAttribute('data-video-id');
    button.textContent = favorites.some(fav => fav.videoId === videoId) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos';
  });
};

// Alternar entre seções (vídeos e favoritos)
const showSection = (section) => {
  if (section === 'videos') {
    videosSection.classList.remove('hidden');
    favoritesSection.classList.add('hidden');
  } else if (section === 'favorites') {
    videosSection.classList.add('hidden');
    favoritesSection.classList.remove('hidden');
    displayFavorites();
  }
};

// Evento para navegação
videosLink.addEventListener('click', () => showSection('videos'));
favoritesLink.addEventListener('click', () => showSection('favorites'));

// Evento para o formulário de busca
searchForm.addEventListener('submit', searchVideos);

// Função para reproduzir vídeo em um modal
const playVideo = (videoId) => {
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
  videoModal.style.display = 'block';
};

closeModal.addEventListener('click', () => {
  videoModal.style.display = 'none';
  videoPlayer.src = '';
});

// Fechar o modal quando o usuário clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
    videoPlayer.src = '';
  }
});
