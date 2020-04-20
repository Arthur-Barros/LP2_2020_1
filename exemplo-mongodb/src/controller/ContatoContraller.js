import Contato from '../models/Contato';

const controller = {
    salvar: async (contato) => {
        await Contato.create(contato);
    },

    // recuperarTodos: async () => {
    //     await Contato.find();
    // }

    //dessa forma ja me retorna
    recuperarTodos: async () => await Contato.find(),

    recuperarPorNome: async (nomeConsulta) => await Contato.find({
        nome: {
            '$regex': nomeConsulta,

            '$options': 'i'

        }
    })

};

export default controller;