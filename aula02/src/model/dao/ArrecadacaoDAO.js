//sabe ler o arquivo esse fs  e o path mostra o fs  
import fs from 'fs';
import path from 'path';
import excelToJson from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';
import { ANOS } from "../../constants/Coluna";

export default class ArrecadacaoDAO {

    carregarArrecadacoesDosMunicipios() {
        let municipios = [];


        /**
         * Aponta para o arquivo da planilha de dados
         * 
         */
       


        let dados = this.extrairDadosDaPlanilha('A4:P185');

        dados.Plan1.forEach(elemento => {
            let nome = elemento.A;
            // value = traz todos valores de um objeto console.log(Object.values(elemento));

            /**
             * Object.values devolve todos os valores das propriedades existentes dentro de um objeto
             * console.log(Object.values(elemento));
             */
            let valores = Object.values(elemento);
            let arrecadacoes = valores.slice(1, valores.length);
            let municipio = new Municipio(nome, arrecadacoes);
            municipios.push(municipio);

        })


        return municipios;
    }

    carregarArrecadacoesPorAno(ano) {
        if (ano in ANOS) {
            let coluna = ANOS[ano];
            let range = `${coluna}4:${coluna}185`;

            let arrecadacoes = this.extrairDadosDaPlanilha(range);
            let nomesMunicipios = this.extrairDadosDaPlanilha('A:4A185');
            console.log(arrecadacoes, nomesMunicipios);
        }
    }

    extrairDadosDaPlanilha(range) {
        /**
         * Aponta para o arquivo da planilha de dados
         */
        let caminhoArquivo = path.resolve(__dirname, '../../data/dados.xls');

        let dados = excelToJson({
            source: fs.readFileSync(caminhoArquivo),
            //A intervalo das células do exvel - se não colocar nada ele assume que é a primeira planilha 
            // A linha abaixo é isso range: range
            range
        });

        return dados;
    }
}