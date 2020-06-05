import faker from 'faker/locale/pt_BR';

export default class Popular{
    
    constructor(){
        this.pessoas = [];
        const Qtde_Pessoas = 200;
        faker.locale = "pt_BR";
        for(let i = 0; i < Qtde_Pessoas; i++){
            const pessoa = {
                nome: faker.name.findName(),
                areaDeAtuacao: faker.name.jobType(),
                telefone: faker.phone.phoneNumberFormat(),
                endereco: faker.address.streetAddress()
            };
            
            this.pessoas.push(pessoa);
        }
        
    }

}