import Pessoa from '../models/Pessoa';


export default class PessoaController {


    async salvar(pessoa) {
        const pessoaSalva = await Pessoa.create(pessoa);
        return pessoaSalva;
    }


    async recuperarTodos() {
        const pessoas = await Pessoa.find();
        return pessoas;
    }

    async recuperarPorNome(nomeConsulta){
        const pessoa = await Pessoa.find({
            nome:{
                '$regex': nomeConsulta,
    
                '$options': 'i'
            }
        });

        return pessoa;
    } 

    async recuperarPorEndereco(enderecoConsulta){
        const pessoa = await Pessoa.find({
            endereco:{
                '$regex': enderecoConsulta,
    
                '$options': 'i'
            }
        });

        return pessoa;
    } 


    async remover(id){
        const resposta = await Pessoa.deleteOne({_id: id});
        return resposta;
    }

}
