// sem Prototype
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


// Com Prototype
interface Prototype {
  clone(): Prototype;
}

class Inimigo implements Prototype {
  tipo: string;
  vida: number;
  arma: string;

  constructor(tipo: string, vida: number, arma: string) {
    this.tipo = tipo;
    this.vida = vida;
    this.arma = arma;
  }

  clone(): Inimigo {
    return new Inimigo(this.tipo, this.vida, this.arma);
  }
}

const orcOriginal = new Inimigo("Orc", 100, "Machado");
const orcClone = orcOriginal.clone(); // Sem repetir atributos
