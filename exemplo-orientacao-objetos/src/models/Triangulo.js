import Poligono from "./Poligono";

class Triangulo extends Poligono {
 
    #base;
    #altura;

    constructor(arestas){
        super(arestas);
        this.#base =  arestas.base;
        this.#altura = arestas.altura;

    }

    area() {
        return (this.#base * this.#altura) / 2
    }

    get base(){
        return this.#base;
    }


    set base(base){
        return this.#base = base;
    }


    get altura(){
        return this.#altura;
    }


    set altura(altura){
        this.#altura = altura;
    }


}



export default Triangulo;

