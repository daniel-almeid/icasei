# Use a imagem base do Node.js
FROM node:latest

# Crie um diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que o aplicativo irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
