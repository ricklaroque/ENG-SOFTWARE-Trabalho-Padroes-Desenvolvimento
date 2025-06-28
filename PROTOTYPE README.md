🧬 Padrão de Projeto: Prototype
O padrão de projeto Prototype faz parte do grupo dos padrões criacionais, ou seja, aqueles que lidam com a criação de objetos. Sua principal proposta é permitir que um objeto seja clonado em vez de ser criado do zero com o operador new e todos os seus parâmetros novamente.

Esse padrão é especialmente útil quando você precisa criar vários objetos muito parecidos entre si, ou quando o processo de criação de um objeto envolve algum tipo de custo — seja de tempo, processamento ou complexidade.

Sem utilizar o Prototype, surge um problema comum. Por exemplo: imagine um jogo em que você precisa criar vários inimigos do tipo Orc. Todos eles compartilham os mesmos atributos — mesmo tipo, mesma quantidade de vida e a mesma arma.

Se não usarmos o padrão Prototype, a cada novo inimigo você terá que reescrever os mesmos valores manualmente: const orc1 = new Inimigo("Orc", 100, "Machado"); const orc2 = new Inimigo("Orc", 100, "Machado");

Outra função importante do Prototype é que podemos alterar somente o clone, sem modificar o objeto original.

Por excemplo: digamos que você precise de um Orc mais forte para ser o chefe da fase. Em vez de criar um novo do zero, basta clonar o orcOriginal e alterar apenas os atributos desejados:

```ts
const orcOriginal = new Inimigo("Orc", 100, "Machado");

const orcChefe = orcOriginal.clone(); orcChefe.vida = 250; orcChefe.arma = "Espada flamejante";

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
