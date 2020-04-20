import * as db from './config/db';

import contatoCtrl from './controller/ContatoContraller';

let recuperarContato = async () =>{
    db.conectarBD();

    const contatos = await contatoCtrl.recuperarPorNome('a');
    contatos.forEach(contato => console.log(contato))

    db.desconectarBD();
}

recuperarContato();