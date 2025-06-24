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


// Com Flyweight
class InimigoTipo {
  tipo: string;
  vida: number;
  arma: string;

  constructor(tipo: string, vida: number, arma: string) {
    this.tipo = tipo;
    this.vida = vida;
    this.arma = arma;
  }
}

class Inimigo {
  private tipoCompartilhado: InimigoTipo;
  posicao: { x: number; y: number }; 

  constructor(tipoCompartilhado: InimigoTipo, posicao: { x: number; y: number }) {
    this.tipoCompartilhado = tipoCompartilhado;
    this.posicao = posicao;
  }

  exibir(): void {
    console.log(
      `Inimigo do tipo ${this.tipoCompartilhado.tipo}, com ${this.tipoCompartilhado.vida} de vida e arma ${this.tipoCompartilhado.arma}, na posição (${this.posicao.x}, ${this.posicao.y})`
    );
  }
}

class InimigoFactory {
  private tipos: Map<string, InimigoTipo> = new Map();

  obterTipo(tipo: string, vida: number, arma: string): InimigoTipo {
    const chave = `${tipo}_${vida}_${arma}`;
    if (!this.tipos.has(chave)) {
      this.tipos.set(chave, new InimigoTipo(tipo, vida, arma));
    }
    return this.tipos.get(chave)!;
  }
}


const factory = new InimigoFactory();

const orcTipo = factory.obterTipo("Orc", 100, "Machado");

const orc1 = new Inimigo(orcTipo, { x: 10, y: 20 });
const orc2 = new Inimigo(orcTipo, { x: 15, y: 25 });

orc1.exibir();
orc2.exibir();


