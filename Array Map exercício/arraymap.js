const users = [
  {
    nome: "Abraão Farias",
    idade: 22,
    animal: "Gato",
  },
  {
    nome: "Michelina Souza",
    idade: 12,
    animal: "Hamster",
  },
  {
    nome: "Venâncio Almeida",
    idade: 45,
    animal: "",
  },
  {
    nome: "Maria Silva",
    idade: 15,
    animal: "Coelho",
  },
  {
    nome: "José Eustáquio",
    idade: 32,
    animal: "Gato",
  },
];

const nomeAbrev = users.map((usuario) => {
  let array = usuario.nome.split(" ");
  return `${array[0].charAt(0)}.${array[1].charAt(0)}`;
});

console.log(nomeAbrev);

const amantesGato = users
  .filter((usuario) => usuario.animal == "Gato")
  .map((usuario) => {
    let array = usuario.nome.split(" ");
    return `${array[0].charAt(0)}.${array[1].charAt(0)}`;
});

console.log(amantesGato);

const maiores = users
  .filter((usuario) => usuario.idade > 18)
  .map((usuario) => {
    return usuario.nome;
});

console.log(maiores);
