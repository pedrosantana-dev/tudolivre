# tudolivre
Node Package para consultas de informações publicas do Brasil

## Instalação

Usando npm:

`
$ npm install tudolivre
`

## Exemplo

`
const { cep, estado, estados, municipio } = require('tudolivre');

// Consulta endreço por cep
cep(72922677).then((endereco)=> console.log(endereco));

// Consulta UF por sigla
estado('df').then((uf)=> console.log(uf));

// Lista de UF
estados().then((lista)=> console.log(lista));
`