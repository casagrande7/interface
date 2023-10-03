"use strict";
class CarroCompacto {
    acelerar(velocidade) {
        console.log("O carro compacto acelerou para" + velocidade + " Km/h");
    }
    frear() {
        console.log("O carro compacto freou.");
    }
}
class CarrosEsportivo {
    acelerar(velocidade) {
        console.log("O carro esportivo acelerou para" + velocidade + " Km/h");
    }
    frear() {
        console.log("O carro esportivo freou.");
    }
}
const meuCarroEsportivo = new CarrosEsportivo();
meuCarroEsportivo.acelerar(200);
meuCarroEsportivo.frear();
const meuCarroCompacto = new CarroCompacto();
meuCarroCompacto.acelerar(120);
meuCarroCompacto.frear();
