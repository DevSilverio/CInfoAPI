```markdown
# CInfoAPI

A `CInfoAPI` é uma API simples para armazenar informações de clientes em um banco de dados MongoDB. Esta API permite que você adicione(, recupere, atualize e exclua) informações de clientes de maneira fácil e eficiente.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Endpoints](#endpoints)
  - [POST /clientinfo](#post-clientinfo)
  - [GET /clientinfo/:id](#get-clientinfoid)
  - [PUT /clientinfo/:id](#put-clientinfoid)
  - [DELETE /clientinfo/:id](#delete-clientinfoid)
- [Como Usar](#como-usar)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- [Outras dependências conforme necessário]

## Endpoints

### POST /clientinfo

Adiciona uma nova informação de cliente.

**Request Body:**
```json
{
  "name": "Nome do Cliente",
  "email": "email@exemplo.com",
  "phone": "1234567890"
}
```

**Response:**
- **Status 201**: Retorna a informação do cliente criada.
- **Status 400**: Se os dados fornecidos estiverem incorretos.

**Exemplo de Requisição:**
```bash
curl -X POST http://localhost:3000/clientinfo \
-H "Content-Type: application/json" \
-d '{"name": "João Silva", "email": "joao.silva@email.com", "phone": "1234567890"}'
```

### GET /clientinfo/:id

Recupera as informações de um cliente específico pelo ID.

**Response:**
- **Status 200**: Retorna as informações do cliente.
- **Status 404**: Se o cliente não for encontrado.

**Exemplo de Requisição:**
```bash
curl http://localhost:3000/clientinfo/60b8d6f77f1a2c001f8e4b57
```

### PUT /clientinfo/:id

Atualiza as informações de um cliente existente.

**Request Body:**
```json
{
  "name": "Novo Nome",
  "email": "novo.email@exemplo.com",
  "phone": "0987654321"
}
```

**Response:**
- **Status 200**: Retorna as informações atualizadas do cliente.
- **Status 404**: Se o cliente não for encontrado.

**Exemplo de Requisição:**
```bash
curl -X PUT http://localhost:3000/clientinfo/60b8d6f77f1a2c001f8e4b57 \
-H "Content-Type: application/json" \
-d '{"name": "João Silva", "email": "novo.email@exemplo.com", "phone": "0987654321"}'
```

### DELETE /clientinfo/:id

Remove as informações de um cliente.

**Response:**
- **Status 204**: Se a exclusão for bem-sucedida.
- **Status 404**: Se o cliente não for encontrado.

**Exemplo de Requisição:**
```bash
curl -X DELETE http://localhost:3000/clientinfo/60b8d6f77f1a2c001f8e4b57
```

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/DevSilverio/CInfoAPI.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd CInfoAPI
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão do MongoDB:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.trlat.mongodb.net/seu_nome_de_banco
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. A API estará disponível em `http://localhost:3000`.

## Configuração do Ambiente

- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
- **MongoDB**: Você precisará de uma conta no MongoDB Atlas ou um servidor MongoDB local.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
```

### Como Adicionar a Documentação ao seu `README.md`

1. Abra o arquivo `README.md` no seu projeto.
2. Cole o conteúdo da documentação acima no arquivo.
3. Salve as alterações.

Essa documentação oferece um guia completo para os usuários entenderem como utilizar sua API, como configurá-la, e como contribuir para o projeto. Se houver mais detalhes específicos sobre sua API que você gostaria de incluir, sinta-se à vontade para personalizar conforme necessário!
