# 🧬 Padrão de Projeto: Prototype

O padrão de projeto Prototype faz parte do grupo dos padrões **criacionais**, ou seja, aqueles que lidam com a criação de objetos. 
Sua principal proposta é permitir que um objeto seja **clonado** em vez de ser criado do zero com o operador `new` e todos os seus parâmetros novamente.

Esse padrão é especialmente útil quando você precisa *criar vários objetos muito parecidos* entre si, ou quando o processo de criação de um objeto envolve algum tipo de custo — seja de tempo, processamento ou complexidade.

Sem utilizar o Prototype, surge um problema comum. Por exemplo: imagine um jogo em que você precisa criar vários inimigos do tipo **Orc**. Todos eles compartilham os mesmos atributos — mesmo tipo, mesma quantidade de vida e a mesma arma.

Se não usarmos o padrão Prototype, a cada novo inimigo você terá que reescrever os mesmos valores manualmente:
const orc1 = new Inimigo("Orc", 100, "Machado");
const orc2 = new Inimigo("Orc", 100, "Machado");

Outra função importante do Prototype é que podemos alterar somente o clone, sem modificar o objeto original.

Por excemplo: digamos que você precise de um Orc mais forte para ser o chefe da fase. 
Em vez de criar um novo do zero, basta clonar o orcOriginal e alterar apenas os atributos desejados:

const orcOriginal = new Inimigo("Orc", 100, "Machado");

const orcChefe = orcOriginal.clone();
orcChefe.vida = 250;
orcChefe.arma = "Espada flamejante";
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



# 🧱 Padrão de Projeto: Builder
O padrão de projeto Builder também faz parte do grupo dos padrões criacionais. Ele é usado quando queremos construir objetos passo a passo, principalmente quando a criação envolve muitos parâmetros ou combinações diferentes.

Esse padrão é útil quando você precisa criar objetos complexos de forma flexível, legível e reutilizável.

Com o padrão Builder, podemos criar um objeto "modelo" (um builder configurado) e gerar várias instâncias iguais de forma limpa e flexível.



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



# 🧩 Padrão de Projeto: Singleton
O Singleton é um padrão criacional que tem como finalidade controlar a criação de objetos, garantindo que uma classe possua apenas uma única instância ao longo de toda a execução do sistema. Além disso, ele oferece um acesso global e controlado a essa instância única.

Esse padrão é especialmente útil quando há a necessidade de um objeto central que gerencie recursos ou funcionalidades compartilhadas, como gerenciadores de configurações, serviços de log ou conexões com bancos de dados. Com o Singleton, evita-se a geração de múltiplas instâncias que poderiam ocasionar problemas como conflitos ou uso excessivo de recursos.

Sem a aplicação do Singleton, surgem desafios comuns. Por exemplo, num sistema que registra logs, se cada componente criar sua própria instância do gerenciador de logs, diferentes objetos podem tentar gravar simultaneamente no mesmo arquivo, ocasionando falhas ou perda de informações.

Ao utilizar o Singleton, asseguramos que todas as partes do sistema utilizem a mesma instância da classe, centralizando o controle e promovendo maior eficiência e segurança.
