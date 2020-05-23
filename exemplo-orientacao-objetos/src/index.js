import Poligono from './models/Poligono';

import Retangulo from './models/Retangulo';

import Triangulo from './models/Triangulo';

import TrianguloIsosceles from './models/TrianguloIsosceles';

let p = new Poligono({lado1: 2, lado2: 4});
p.area();


let r = new Retangulo({base: 4, altura: 5});
console.log(r.area());

let t = new Triangulo({base: 4, altura: 5});
console.log(t.area());


let i = new TrianguloIsosceles({base: 12, lado: 10});
console.log(i.area());
