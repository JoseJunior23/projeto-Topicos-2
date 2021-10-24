## Este projeto esta sendo desenvolvido durate as aulas de tópicos essenciais 2 na Fatec Franca

> status: 🚧 Em desenvolvimento ⚠️ 
---
### 💻 Tecnologias utilizadas: 
 - [Typescript](https://www.typescriptlang.org)
 - [Node](https://nodejs.org/en/docs/)
- [Tyopeorm](https://typeorm.io/#/)
---
### Clone do projeto
``` bash
#clonar o repositório
$ git clone https://github.com/JoseJunior23/projeto-Topicos-2

# Entrar no diretório
$ cd backend

#Instalar as dependências
$ yarn install
      ou
  npm install
  
# criar o arquivo ormconfig
$ Criar um arquivo com o nome ormconfig.json na raiz do projeto, contendo os dados para conexão com o banco de dados
Ex: {
  "type": "",
  "host": "",
  "port": ,
  "username": "",
  "password": "",
  "database": "",
  "entities": [
    "src/entities/*.ts"
  ],
  "migrations": [
    "src/shared/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/shared/typeorm/migrations"
  }
}
#Iniciar o projeto 
$ yarn dev
      ou
  npm run dev     

```