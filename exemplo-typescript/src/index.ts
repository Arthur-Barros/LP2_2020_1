import Pessoa from './models/Pessoa';


const pessoa = new Pessoa('Joice', '(65)9999-9999');

const mensagem = pessoa.boasVindas();
console.log(mensagem);

