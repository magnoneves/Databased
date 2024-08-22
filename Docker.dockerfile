# Use a imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
