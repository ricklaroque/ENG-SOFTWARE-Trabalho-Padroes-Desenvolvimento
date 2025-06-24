# 🧬 Padrão de Projeto: Prototype

O padrão de projeto Prototype faz parte do grupo dos padrões **criacionais**, ou seja, aqueles que lidam com a criação de objetos. 
Sua principal proposta é permitir que um objeto seja **clonado** em vez de ser criado do zero com o operador `new` e todos os seus parâmetros novamente.

Esse padrão é especialmente útil quando você precisa *criar vários objetos muito parecidos* entre si, ou quando o processo de criação de um objeto envolve algum tipo de custo — seja de tempo, processamento ou complexidade.

Sem utilizar o Prototype, surge um problema comum. Por exemplo: imagine um jogo em que você precisa criar vários inimigos do tipo **Orc**. Todos eles compartilham os mesmos atributos — mesmo tipo, mesma quantidade de vida e a mesma arma.

Se não usarmos o padrão Prototype, a cada novo inimigo você terá que reescrever os mesmos valores manualmente:

const orc1 = new Inimigo("Orc", 100, "Machado");
const orc2 = new Inimigo("Orc", 100, "Machado");

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



# 🧩 Padrão de Projeto: Flyweight
O padrão de projeto Flyweight também faz parte do grupo dos padrões estruturais, e sua principal função é economizar memória quando o sistema precisa criar muitos objetos semelhantes.

A ideia central é compartilhar partes comuns do estado entre múltiplas instâncias de objetos, ao invés de armazenar esses dados repetidamente em cada um deles. Isso é especialmente útil em jogos, simulações ou sistemas que lidam com grandes volumes de entidades idênticas.

O Flyweight é ideal quando se vai ter grande volume de objetos, pois ele prioriza o uso eficiente de memória e deixando o código mais leve e otimizado.

