import * as db from "./config/db";

import ProdutoController from './controller/ProdutoController';

import Produto from './models/Produto';



const produtoCtrl = new ProdutoController();

let recuperarProduto = async () =>{
    db.conectarBD();

    // const produtos = await produtoCtrl.recuperarTodos();
    // console.log(produtos);

    // const produtos = await produtoCtrl.recuperarTodos();
    // produtos.forEach(produtos => console.log(produtos));

    // const produtos =  await produtoCtrl.recuperarPorDescricao('a');
    // console.log(produtos);

    // const produtos = await produtoCtrl.remover('5eacb25619831a1408cfc483');
    // console.log(produtos);

    // const produto =  new Produto({
    //     descricao: 'Laranja',
    //     quantidade: 5,
    //     unidade: 'UN'
    // });

    // const produtoSalvo = await produtoCtrl.salvar(produto);

   let produto = await produtoCtrl.recuperarPeloId('5eacb2276002d71d24651294');
   produto.marca = 'Seara';
   const produtoatualizado = await produtoCtrl.salvar(produto);
   console.log(produtoatualizado);

    db.desconectarBD();
}

recuperarProduto();