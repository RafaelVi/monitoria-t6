//o que é o Node?
//Resumidamente, é um interpretador de javascript
//que permite rodar a linguagem sem a necessidade de um browser
//A sintaxe permanece a mesma como por exemplo:
console.log('Hello World');

//Promises
//Padrão de linguagem para resolver operações assíncronas

//Mas o que são operações assíncronas?
//Operações sincronas possuem uma ordem de execução e só podem ser iniciadas assim
//que sua antecessora termine, o ato de esperar uma operação pode travar nossa aplicação
//Operações assíncronas podem resolver isso já que as operações podem ser executadas paralelamente.

//exemplo simples de promise:
const exemplo = new Promise((resolve,reject) => {
    setTimeout(() => Math.random() * 10 > 5? resolve("Era maior") : reject("Não era"),3000);
    //Depois de 3 segundos ele sorteia um numero de 0 a 10 e verifica se é maior que 5
});
exemplo
.then(data => console.log(data))
.catch(erro => console.log(erro));
