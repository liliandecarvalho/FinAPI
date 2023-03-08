# FinAPI - API para Banco Digital

A FinAPI é uma API para um banco digital desenvolvida em JavaScript utilizando as bibliotecas Express, Date-fns e Nodemon. A API possui diversas funcionalidades como listar contas, criar conta, editar conta, excluir conta, depositar, sacar, transferir, consultar saldo e consultar extrato.

## Pré-requisitos
- Node.js (versão 14 ou superior)
- Git

## Instalação
Clone o repositório:

`git clone https://github.com/liliandecarvalho/FinAPI.git`

Instale as dependências:

`npm install`

Inicie a aplicação:

`npm run dev`

## Utilização
Para testar a API, recomenda-se o uso do Insomnia ou de outra ferramenta similar.

### As rotas disponíveis são:

GET /contas: lista todas as contas;

POST /contas: cria uma nova conta;

PUT /contas/:numeroConta/usuario: atualiza dados da conta informada;

DELETE /contas/:numeroConta: excluí a conta informada;

GET /contas/saldo: retorna o saldo atual da conta informada;

GET /contas/extrato: retorna o extrato com todas as transações efetuadas da conta informada;

POST /transacoes/depositar: realiza depóstidos;

POST /transacoes/sacar: realiza saques;

POST /transacoes/transferir: realiza transferências.

## Contribuição

Contribuições são sempre bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, abra uma issue ou submeta um pull request.

