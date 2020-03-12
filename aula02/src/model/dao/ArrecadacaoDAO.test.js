import ArrecadacaoDAO from './ArrecadacaoDAO';

const descricao = `Testa as operações de leitura sobre a planilha de dados de arrecadação
 de tributos sobre exploração mineral nos municípios do estado do Paraná
`;


var dao;

describe(descricao, () => {

    beforeAll(() => dao = new ArrecadacaoDAO());

    test('deve carregar as arrecadações de todos os municípios', () => {
        let municipios = dao.carregarArrecadacoesDosMunicipios();
        /**
         * Espera que o vetor municípios tenha 182 elementos dentro dele, ou seja, os 182 municípios existentes 
         * na planilha de dados
         */
        expect(municipios.length).toBe(182);
    });
});


