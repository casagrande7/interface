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