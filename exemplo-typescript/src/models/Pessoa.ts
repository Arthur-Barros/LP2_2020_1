export default class Pessoa{

    nome: string;
    telefone: string;

    constructor(nome: string,telefone: string){

        this.nome = nome;
        this.telefone = telefone;

    }


    boasVindas() : string{
        return `Olá ${this.nome}!`
    }
}