import Triangulo from "./Triangulo";


class TrianguloIsosceles extends Triangulo {

    #lado;

    constructor(arestas) {
        super(arestas);
        this.#lado = arestas.lado;
        this.calcularAltura();
    }

    calcularAltura() {

        const meiaBase = this.base / 2;

        let subrtracaoPotencias = Math.pow(meiaBase, 2) - Math.pow(this.#lado, 2);
        subrtracaoPotencias = subrtracaoPotencias < 0 ? subrtracaoPotencias * -1 : subrtracaoPotencias;
        this.altura = Math.sqrt(subrtracaoPotencias);
    }

}


export default TrianguloIsosceles;