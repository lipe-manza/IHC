# Redesign da Linha do Tempo Nintendo

**Projeto:** `nintendo-timeline`
**GitHub:** https://github.com/lipe-manza/IHC/

## 1. Introdução

O redesign da linha do tempo dos consoles Nintendo teve como objetivo melhorar a **legibilidade, organização e hierarquia visual** da interface, utilizando os princípios **CRAP (Contrast, Repetition, Alignment e Proximity)** apresentados em aula.

O conteúdo dos consoles foi mantido. As alterações foram concentradas principalmente na apresentação visual, no alinhamento dos elementos e na organização das informações.

---

## 2. Contraste

No design inicial, alguns textos, bordas e elementos estruturais apresentavam **baixo contraste** com o fundo, dificultando a identificação de algumas informações.

No redesign, essas cores foram escurecidas, aumentando a diferença entre textos, elementos gráficos e fundo. A linha central da timeline e as divisórias também passaram a ter maior destaque, pois antes estavam sendo sobrepostas pelos cards devido ao mau alinhamento.

A tipografia foi alterada de **Space Grotesk e Inter** para **Bungee e STIX Two Math**, criando uma diferenciação maior entre títulos e textos e reforçando a hierarquia visual.

Os cards também deixaram de utilizar a borda clara do design inicial e passaram a utilizar principalmente **sombras** para se destacar do fundo, resultando em uma aparência mais limpa e em maior contraste no estado de "hover" (devido ao aumento da opacidade da sombra).

Além disso, os cards tiveram sua largura aumentada, proporcionando mais espaço para as informações e dando maior destaque ao conteúdo de cada console.

### Resultado

O princípio de **Contraste** foi aplicado para:

* melhorar a legibilidade;
* destacar informações importantes;
* reforçar a hierarquia entre títulos e textos;
* diferenciar melhor os cards, divisores e a linha da timeline do fundo.

---

## 3. Repetição

No design inicial, os ícones utilizados nos cards dependiam de uma **fonte de ícones (Nerd Font)** instalada no computador do usuário. Quando essa fonte não estava disponível, os ícones podiam ser exibidos incorretamente ou como caracteres vazios.

No redesign, esses ícones foram substituídos por **SVGs**, incorporados diretamente ao código. Dessa forma, os mesmos ícones são exibidos de maneira consistente, independentemente das fontes instaladas no computador do usuário.

Outro problema relacionado à repetição estava na apresentação das fases. No design inicial, as cinco fases da evolução da Nintendo eram apresentadas em uma legenda separada no topo da timeline. Após a criação dos divisores dentro da timeline, manter essa legenda faria com que as mesmas informações fossem apresentadas duas vezes.

No redesign, a legenda superior foi removida e cada fase passou a ser apresentada diretamente antes do primeiro console correspondente, além do divisor de fases da timeline que foi acrescentado a fim de melhorar a repetição e distribuir as informações de datas na timeline.

Também foi mantido um padrão visual consistente entre os elementos. Os cards possuem a mesma estrutura e os divisores de fase utilizam a mesma organização, diferenciando-se pela cor de cada fase.

### Resultado

O princípio de **Repetição** foi aplicado para:

* garantir que os ícones sejam exibidos de forma consistente;
* manter um padrão visual entre os cards e divisores;
* utilizar as cores das fases de maneira consistente;
* evitar a repetição desnecessária das informações sobre as fases.

---

## 4. Alinhamento

No design inicial, alguns elementos da timeline não estavam corretamente alinhados entre si. No desktop, os **pontos da timeline ficavam desconectados visualmente dos cards**, pois o posicionamento dos elementos e o espaçamento entre eles fazia com que os pontos não coincidissem adequadamente com a estrutura dos cards.

No mobile, os pontos também não ficavam corretamente centralizados em relação aos cards, prejudicando a percepção de continuidade da timeline.

Outro problema estava no conteúdo dos cards. O texto não seguia um único padrão de alinhamento: os cards de um lado apresentavam partes do conteúdo alinhadas de maneira diferente dos cards do outro lado. No redesign, descrições e highlights passaram a utilizar **alinhamento à esquerda, independentemente do lado da timeline**, tornando a leitura mais consistente.

Também foram ajustados os espaçamentos entre os cards e a linha central. No design inicial, os cards ficavam muito próximos da linha e, em alguns casos, **acabavam cobrindo ou "comendo" parte da timeline**. No redesign, foi criado um espaçamento adequado entre os cards e a linha, mantendo a linha central visualmente contínua.

### Resultado

O princípio de **Alinhamento** foi aplicado para:

* alinhar corretamente os pontos com a linha central;
* manter os pontos posicionados de forma consistente em relação aos cards;
* corrigir o posicionamento dos pontos em telas menores;
* padronizar o alinhamento do conteúdo dos cards;
* evitar que os cards cubram a linha central;
* manter um espaçamento consistente entre cards e timeline.

---

## 5. Proximidade

No design inicial, as informações sobre as fases ficavam separadas dos consoles em uma legenda localizada acima da timeline. Isso criava uma distância visual entre a fase e os consoles que pertenciam a ela.

No redesign, os divisores de fase foram inseridos **diretamente dentro da timeline**, imediatamente antes dos consoles correspondentes.

O JavaScript identifica quando uma nova fase começa e insere seu divisor naquele ponto da timeline. Dessa forma, o nome e o período da fase ficam próximos dos elementos que representam aquela etapa da evolução dos consoles.

Essa organização também facilita a identificação dos grupos e permite compreender rapidamente quais consoles pertencem a cada fase.

### Resultado

O princípio de **Proximidade** foi aplicado para:

* aproximar cada fase dos consoles correspondentes;
* facilitar a associação entre as informações;
* deixar mais clara a divisão entre os períodos históricos;
* reduzir a necessidade de consultar uma legenda separada.
