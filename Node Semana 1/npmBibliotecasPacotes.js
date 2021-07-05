//BIBLIOTECAS
//santo-graal do programador
//códigos escritos por outros programadores
//com finalidade especifica que podem ser reutilizados
//resumindo: é tipo aqueles templates prontos do power point que tu só preenche os dados

//NPM
//pra não virar bagunça o node possui uma forma de gerenciar 
//esses códigos que são chamados de pacotes
//ele é muito útil para documentar um projeto e quais pacotes você utilizou nele.

//Para iniciar o npm escrevemos npm init no terminal
//e fornecemos as informações do nosso projeto

//Tres arquivos serao criados: package.json, package-lock.json e a pasta node_modules
//a pasta contem nossos pacotes e deve sempre ser incluida no gitignore
//o package.lock possui as informações que inserimos no npm init :)

//Usando uma biblioteca:
const chalk = require('chalk');
console.log(chalk.green('Mensagem em verde'));