import * as db from './config/db';

import ContatoController from './controllers/ContatoController';



const contatoCtrl = new ContatoController();

let recuperarContato = async () =>{
    db.conectarBD();

    const contatos = await contatoCtrl.recuperarTodos();
    console.log(contatos);

    db.desconectarBD();
}

recuperarContato();