# API Petshop Nodejs

API desenvolvida no curso "NodeJS: crie uma API REST padronizada e escalável" da Alura.

## Como rodar

- Rodar o comando abaixo para criar o container do PostgreSQL:

   ``` docker compose up ```   

- Entrar no PgAdmin com os dados abaixo

   ``` 
   url: http://localhost:16543
   usuário: admin@localhost.com
   senha: 123456   
   ```  
 
- Criar uma conexão com os dados abaixo:
   ```  
   host: postgres
   porta: 5432 
   usuário: postgres
   senha: 123456     
   ```
   
- Criar um banco de dados "petshop"

- Ir na raiz da aplicação e rodar o comando abaixo para criar a tabela no banco de dados:

   ```node .\api\database\createTable.js```
   
- Rodar o comando na raiz da aplicação:

   ```npm install```
   
- Executar o comando para rodar a API:

   ```npm run dev```
