class Poligono{

    arestas;

    constructor(arestas){

        this.arestas = arestas;

    }

    area(){
        console.log('Área do poligono genérico');
        console.log(this.arestas);

    }

}


export default Poligono;