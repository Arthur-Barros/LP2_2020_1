//sabe ler o arquivo esse fs  e o path mostra o fs  
import fs from 'fs';
import path from 'path';
import  excelToJson from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';


export default class ArrecadacaoDAO{

    carregarArrecadacoesDosMunicipios (){
        let municipios = [];


        /**
         * Aponta para o arquivo da planilha de dados
         * 
         */
        let caminhoArquivo = path.resolve(__dirname,'../../data/dados.xls');


        let dados = excelToJson({
            source: fs.readFileSync(caminhoArquivo),
            // intervalo das células do excel  - se colocar nada ele assuma que é a primeira planilha
            range: 'A4:P185'
        });

        dados.Plan1.forEach(elemento => {
            let nome = elemento.A;
            // value = traz todos valores de um objeto console.log(Object.values(elemento));

            /**
             * Object.values devolve todos os valores das propriedades existentes dentro de um objeto
             * console.log(Object.values(elemento));
             */
            let valores = Object.values(elemento);
            let arrecadacoes = valores.slice(1, valores.length);
            let municipio = new Municipio (nome, arrecadacoes);
            municipios.push(municipio);

        })


        return municipios;
    }


}