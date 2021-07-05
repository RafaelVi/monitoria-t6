//Fetch
//Execução de chamadas a api
//Retorna uma promise como resposta

const fetch = require('node-fetch');

fetch('https://randomuser.me/api/')
.then(data => data.json())
.then(json => json.results[0])
.then(result => console.log(`${result.name.title} ${result.name.first} ${result.name.last}`));

//PROTOCOLOS HTTP
//HTTP é um protocolo (protocol) que permite a obtenção de recursos, como documentos HTML. 
//É a base de qualquer troca de dados na Web e um protocolo cliente-servidor
//o que significa que as requisições são iniciadas pelo destinatário
//geralmente um navegador da Web.
//RESUMINDO: seu navegador e o servidores da interenet precisam de regras para se comunicarem

//para estabelecer a comunicação precisamos do verbo http e do caminho (e outras coisas também)
//O verbo determina o que o cliente quer fazer e o caminho onde ele quer.

