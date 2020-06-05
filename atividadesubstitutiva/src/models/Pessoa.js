import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    areaDeAtuacao: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
});


const Pessoa = mongoose.model('Pessoa', esquema);

export default Pessoa;