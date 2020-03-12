/**
 * Importa a classe Cliente com a função require (forma antiga do JS  )
 */
import Cliente from '../model/Cliente';

export default class ClienteController{

    criarCliente(nome,endereco, cpf, telefone){

        /**
         * Instancia um novo objeto da classe Cliente 
         */

         let cliente = new Cliente(nome, endereco, cpf, telefone);
         return cliente;

    }

}
