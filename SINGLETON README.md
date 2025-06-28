# 🧩 Padrão de Projeto: Singleton

O Singleton é um padrão criacional que tem como finalidade controlar a criação de objetos, garantindo que uma classe possua apenas uma única instância ao longo de toda a execução do sistema. Além disso, ele oferece um acesso global e controlado a essa instância única.

Esse padrão é especialmente útil quando há a necessidade de um objeto central que gerencie recursos ou funcionalidades compartilhadas, como gerenciadores de configurações, serviços de log ou conexões com bancos de dados. Com o Singleton, evita-se a geração de múltiplas instâncias que poderiam ocasionar problemas como conflitos ou uso excessivo de recursos.

Sem a aplicação do Singleton, surgem desafios comuns. Por exemplo, num sistema que registra logs, se cada componente criar sua própria instância do gerenciador de logs, diferentes objetos podem tentar gravar simultaneamente no mesmo arquivo, ocasionando falhas ou perda de informações.

Ao utilizar o Singleton, asseguramos que todas as partes do sistema utilizem a mesma instância da classe, centralizando o controle e promovendo maior eficiência e segurança.

```ts
// Sem Singleton
class Orc {
  tipo: string;
  vida: number;
  arma: string;

  constructor(tipo: string, vida: number, arma: string) {
    this.tipo = tipo;
    this.vida = vida;
    this.arma = arma;
  }

  public exibirStatus(): void {
    console.log(`Tipo: ${this.tipo} | Vida: ${this.vida} | Arma: ${this.arma}`);
  }
}


const orc1 = new Orc("Orc", 100, "Machado");
const orc2 = new Orc("Orc", 100, "Machado");

orc1.exibirStatus(); 
orc2.exibirStatus(); 

console.log("Orc1 e Orc2 são iguais?", orc1 === orc2); 


// Com Singleton
class Orc {
  tipo: string;
  vida: number;
  arma: string;

  constructor(tipo: string, vida: number, arma: string) {
    this.tipo = tipo;
    this.vida = vida;
    this.arma = arma;
  }

  public exibirStatus(): void {
    console.log(`Tipo: ${this.tipo} | Vida: ${this.vida} | Arma: ${this.arma}`);
  }
}


class CriadorDeOrcs {
  private static instancia: CriadorDeOrcs;


  private constructor() {}

 
  public static getInstancia(): CriadorDeOrcs {
    if (!CriadorDeOrcs.instancia) {
      CriadorDeOrcs.instancia = new CriadorDeOrcs();
    }
    return CriadorDeOrcs.instancia;
  }

 
  public criarOrc(): Orc {
    return new Orc("Orc", 100, "Machado");
  }
}


const geradorOrcs = CriadorDeOrcs.getInstancia();
const orc1 = geradorOrcs.criarOrc();
const orc2 = geradorOrcs.criarOrc();

orc1.exibirStatus(); 
orc2.exibirStatus(); 

console.log("Orc1 e Orc2 são iguais?", orc1 === orc2); 
console.log("Gerador é Singleton?", geradorOrcs === CriadorDeOrcs.getInstancia());


