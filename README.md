# 🧬 Padrão de Projeto: Prototype

O padrão de projeto Prototype faz parte do grupo dos padrões **criacionais**, ou seja, aqueles que lidam com a criação de objetos. 
Sua principal proposta é permitir que um objeto seja **clonado** em vez de ser criado do zero com o operador `new` e todos os seus parâmetros novamente.

Esse padrão é especialmente útil quando você precisa *criar vários objetos muito parecidos* entre si, ou quando o processo de criação de um objeto envolve algum tipo de custo — seja de tempo, processamento ou complexidade.

Sem utilizar o Prototype, surge um problema comum. Por exemplo: imagine um jogo em que você precisa criar vários inimigos do tipo **Orc**. Todos eles compartilham os mesmos atributos — mesmo tipo, mesma quantidade de vida e a mesma arma.

Se não usarmos o padrão Prototype, a cada novo inimigo você terá que reescrever os mesmos valores manualmente:

const orc1 = new Inimigo("Orc", 100, "Machado");
const orc2 = new Inimigo("Orc", 100, "Machado");

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



# 🧱 Padrão de Projeto: Builder
O padrão de projeto Builder também faz parte do grupo dos padrões criacionais. Ele é usado quando queremos construir objetos passo a passo, principalmente quando a criação envolve muitos parâmetros ou combinações diferentes.

Esse padrão é útil quando você precisa criar objetos complexos de forma flexível, legível e reutilizável.

Com o padrão Builder, podemos criar um objeto "modelo" (um builder configurado) e gerar várias instâncias iguais de forma limpa e flexível.

