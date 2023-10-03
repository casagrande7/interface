interface Carro{
    acelerar(velocidade: number): void;
    frear(): void
}

class CarroCompacto implements Carro{
    acelerar(velocidade: number): void {
        console.log("O carro compacto acelerou para" +  velocidade + "Km/h");
    }
    frear(): void {
        console.log("O carro compacto freou.");
    }
}

class CarrosEsportivo implements Carro{
    acelerar(velocidade: number): void {
        console.log("O carro esportivo acelerou para" +  velocidade + "Km/h");
    }

    frear(): void {
        console.log("O carro esportivo freou.");
    }
}

const meuCarroEsportivo = new CarrosEsportivo();
meuCarroEsportivo.acelerar(200);
meuCarroEsportivo.frear();

const meuCarroCompacto = new CarroCompacto();
meuCarroCompacto.acelerar(120);
meuCarroCompacto.frear();