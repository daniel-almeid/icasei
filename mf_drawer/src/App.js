document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const drawerContainer = document.createElement('div');
  drawerContainer.classList.add('drawer-container');

  const title = document.createElement('h2');
  title.textContent = 'MF_DRAWER';

  // Criei um botão para acessar a aba vídeos, adicionando o texto, a classe 'drawer-button' e um evento de clique que direciona para o 'http://localhost:3002'
  const videosButton = document.createElement('button');
  videosButton.textContent = 'Acessar Vídeos';
  videosButton.classList.add('drawer-button');
  videosButton.addEventListener('click', () => {
    window.location.href = 'http://localhost:3002';
  });

  drawerContainer.appendChild(title);
  drawerContainer.appendChild(videosButton);
  root.appendChild(drawerContainer);
});
