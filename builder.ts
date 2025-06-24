// sem Builder
class Inimigo {
  tipo: string;
  vida: number;
  arma: string;

  constructor(tipo: string, vida: number, arma: string) {
    this.tipo = tipo;
    this.vida = vida;
    this.arma = arma;
  }
}

const orc = new Inimigo("Orc", 100, "Machado");
const orc2 = new Inimigo("Orc", 100, "Machado");


// Com Builder
class Inimigo {
  tipo: string;
  vida: number;
  arma: string;

  constructor(tipo: string, vida: number, arma: string) {
    this.tipo = tipo;
    this.vida = vida;
    this.arma = arma;
  }
}

class InimigoBuilder {
  private tipo: string = "Desconhecido";
  private vida: number = 0;
  private arma: string = "Nenhuma";

  setTipo(tipo: string): InimigoBuilder {
    this.tipo = tipo;
    return this;
  }

  setVida(vida: number): InimigoBuilder {
    this.vida = vida;
    return this;
  }

  setArma(arma: string): InimigoBuilder {
    this.arma = arma;
    return this;
  }

  build(): Inimigo {
    return new Inimigo(this.tipo, this.vida, this.arma);
  }
}

const orc = new InimigoBuilder()
  .setTipo("Orc")
  .setVida(100)
  .setArma("Machado")
  .build();

const orc2 = new InimigoBuilder()
  .setTipo("Orc")
  .setVida(100)
  .setArma("Machado")
  .build();



