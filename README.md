# api-investimentos
Está api foi criada para fins didáticos onde é possível realizar o cadastro, consulta, edição e remoção de investimentos, contendo os seguintes atributos:
- id
- nome
- data_aplicacao
- data_vencimento
- valor

## Dependências
- cors
- express
- fs
- https
- nodemon
- sqlite
- sqlite3

## Executar
```
npm run dev
```

## Endpoints e responses

### `GET /`
```ts
{
  "statusCode": 200,
  "msg": "Api rodando"
}
```

### `GET /investimento`
Body:
```ts
{
  "id":3
}
```
Response:
```ts
[
  {
    "id": 3,
    "nome": "LCA SOFISA 190% CDI",
    "data_aplicacao": "2022-06-13",
    "data_vencimento": "2027-06-13",
    "valor": 250.88,
    "data_criacao": "2022-06-14 02:07:32"
  }
]
```

### `GET /investimentos`
```ts
[
  {
    "id": 3,
    "nome": "LCA SOFISA 190% CDI",
    "data_aplicacao": "2022-06-13",
    "data_vencimento": "2027-06-13",
    "valor": 250.88,
    "data_criacao": "2022-06-14 02:07:32"
  },
  {
    "id": 4,
    "nome": "CDB INTER IPCA + 5% a.a.",
    "data_aplicacao": "2022-06-13",
    "data_vencimento": "2027-06-13",
    "valor": 250.88,
    "data_criacao": "2022-06-19 22:16:24"
  }
]
```

### `POST /investimento`
body:
```ts
{
  "nome":"Nome do investimento",
  "data_aplicacao":"aaaa-mm-dd",
  "data_vencimento":"aaaa-mm-dd",
  "valor": 0.00
}
```
response:
```ts
{
  "statusCode":200
}
```

### `PUT /investimento`
body:
```ts
{
  "id": 0
  "nome":"Nome do investimento",
  "data_aplicacao":"aaaa-mm-dd",
  "data_vencimento":"aaaa-mm-dd",
  "valor": 0.00
}
```
response:
```ts
{
  "statusCode":200
}
```

### `DELETE /investimento`
Body:
```ts
{
  "id":0
}
```
Response:
```ts
{
  "statusCode":200
}
```
