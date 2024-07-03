Projeto MF_VÍDEOS
Este projeto é uma aplicação web composta por duas micro-frontend (mf_drawer e mf_videos). A aplicação mf_videos permite buscar e listar vídeos do YouTube, 
adicionar vídeos aos favoritos, e reproduzir vídeos diretamente na aplicação. O projeto utiliza Node.js para o BFF e Docker para gerenciar os microfrontends.

Pré-requisitos:

Node.js (versão 12 ou superior)
Docker
Docker Compose

Instalação:
git clone https://github.com/daniel-almeid/icasei.git
cd icasei

Instalando dependências:

Navegue até a pasta mf_videos e instale as dependências:
npm install

Na raiz do projeto, execute o comando:
docker-compose up --build

Ao executar este comando, o BFF estará rodando na porta: http://localhost:3000
O MF_Drawer na porta: http://localhost:3001
O MF_Videos na porta: http://localhost:3002

Funcionalidades:

mf_drawer: Microfrontend com links para "VÍDEOS" e "FAVORITOS".
mf_videos: Microfrontend para buscar vídeos no YouTube, listar vídeos, adicionar aos favoritos e reproduzir vídeos.

Tecnologias Utilizadas:

HTML5
CSS3
JavaScript
Node.js
Docker
YouTube API
