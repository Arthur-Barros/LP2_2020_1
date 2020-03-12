import ArrecadacaoDAO from './model/dao/ArrecadacaoDAO';


let dao = new ArrecadacaoDAO();

let municipios = dao.carregarArrecadacoesDosMunicipios();

console.log(municipios);