const PHASES = [
  {
    id: "experimentacao",
    label: "Experimentação",
    range: "1977–1980",
    color: "#963C3C",
  },
  {
    id: "plataforma",
    label: "Consoles como plataforma",
    range: "1983–1989",
    color: "#A62323",
  },
  {
    id: "evolucao",
    label: "Evolução tecnológica",
    range: "1990–2001",
    color: "#DE102B",
  },
  {
    id: "interfaces",
    label: "Novas interfaces",
    range: "2004–2012",
    color: "#FF2E2E",
  },
  {
    id: "convergencia",
    label: "Convergência",
    range: "2017–2025",
    color: "#FF0000",
  },
];

const CONSOLES = [
  {
    id: "color-tv-game",
    year: "1977",
    name: "Color TV-Game",
    type: "home",
    phase: "experimentacao",
    tag: "Jogo embutido",
    image: "images/colortv6.png",
    description:
      "Primeira linha de consoles domésticos da Nintendo, lançada no Japão nas versões Color TV-Game 6 e Color TV-Game 15. Os jogos já vinham integrados ao hardware, sem cartuchos, marcando o início da Nintendo no mercado de videogames.",
    highlights: [
      "Primeira linha doméstica da Nintendo",
      "Jogos integrados ao hardware",
      "Lançamento exclusivo no Japão",
    ],
  },

  {
    id: "game-watch",
    year: "1980",
    name: "Game & Watch",
    type: "portable",
    phase: "experimentacao",
    tag: "Nasce a portabilidade",
    image: "images/game&watch.png",
    description:
      "A Nintendo entra no mercado portátil com dispositivos que combinavam tela LCD, controles físicos e jogos integrados em um único aparelho. O primeiro modelo foi Ball, dando início a uma linha que ajudaria a definir a experiência portátil da empresa.",
    highlights: ["Tela LCD", "Formato portátil", "Estreia com Ball"],
  },

  {
    id: "famicom",
    year: "1983",
    name: "Family Computer (Famicom)",
    type: "home",
    phase: "plataforma",
    tag: "Cartuchos intercambiáveis",
    image: "images/familycomputer.png",
    description:
      "O Famicom consolidou o uso de cartuchos intercambiáveis nos consoles da Nintendo, permitindo que o mesmo hardware recebesse uma biblioteca crescente de jogos. O console deixa de ser ligado a um único jogo e passa a funcionar como uma plataforma.",
    highlights: [
      "Cartuchos intercambiáveis",
      "Console como plataforma",
      "Lançamento no Japão",
    ],
  },

  {
    id: "nes",
    year: "1985",
    name: "Nintendo Entertainment System (NES)",
    type: "home",
    phase: "plataforma",
    tag: "Expansão internacional",
    image: "images/NES.png",
    description:
      "Versão do Famicom para mercados ocidentais, o NES ajudou a Nintendo a entrar novamente no mercado norte-americano após a crise de 1983. Com jogos como Super Mario Bros., a plataforma ganhou uma identidade forte e uma biblioteca cada vez maior.",
    highlights: [
      "Expansão para o mercado ocidental",
      "Pós-crise de 1983",
      "Super Mario Bros.",
    ],
  },

  {
    id: "game-boy",
    year: "1989",
    name: "Game Boy",
    type: "portable",
    phase: "plataforma",
    tag: "Portátil + biblioteca de jogos",
    image: "images/game-boy.png",
    description:
      "O Game Boy levou a ideia de jogos portáteis a uma nova escala, combinando cartuchos intercambiáveis, hardware dedicado e uma biblioteca de jogos expansível. O lançamento acompanhado de Tetris ajudou a transformar o aparelho em um fenômeno mundial.",
    highlights: [
      "Cartuchos intercambiáveis",
      "Lançamento com Tetris",
      "Biblioteca portátil expansível",
    ],
  },

  {
    id: "snes",
    year: "1990/1991",
    name: "Super Famicom / SNES",
    type: "home",
    phase: "evolucao",
    tag: "8-bit → 16-bit",
    image: "images/super-famicom.png",
    description:
      "Sucessor do Famicom, o Super Famicom trouxe uma nova geração de hardware com maior capacidade de processamento e recursos gráficos e sonoros mais avançados. A evolução para 16 bits também permitiu jogos mais complexos e cartuchos com maior capacidade.",
    highlights: [
      "Transição para 16 bits",
      "Gráficos e áudio mais avançados",
      "Cartuchos de maior capacidade",
    ],
  },

  {
    id: "n64",
    year: "1996",
    name: "Nintendo 64",
    type: "home",
    phase: "evolucao",
    tag: "A virada para o 3D",
    image: "images/nintendo64.png",
    description:
      "O Nintendo 64 consolidou a transição da Nintendo para os jogos tridimensionais. Super Mario 64 tornou-se um marco do design em 3D, enquanto o controle analógico trouxe uma nova forma de movimentação e interação com esses ambientes.",
    highlights: [
      "Consolidação dos jogos 3D",
      "Super Mario 64",
      "Controle analógico",
    ],
  },

  {
    id: "game-boy-color",
    year: "1998",
    name: "Game Boy Color",
    type: "portable",
    phase: "evolucao",
    tag: "Tela colorida",
    image: "images/game-boy-color.png",
    description:
      "O Game Boy Color atualizou a plataforma portátil com uma tela colorida, ampliando as possibilidades visuais sem abandonar a biblioteca do Game Boy. O período também coincidiu com a explosão mundial de Pokémon, fortalecendo ainda mais o mercado portátil da Nintendo.",
    highlights: [
      "Tela colorida",
      "Compatibilidade com jogos do Game Boy",
      "Expansão de Pokémon",
    ],
  },

  {
    id: "gamecube",
    year: "2001",
    name: "Nintendo GameCube",
    type: "home",
    phase: "evolucao",
    tag: "Discos ópticos",
    image: "images/gamecube.png",
    description:
      "O GameCube trouxe uma nova geração de hardware doméstico, com maior capacidade gráfica e processamento mais avançado. A Nintendo também abandonou os cartuchos no console doméstico e adotou discos ópticos proprietários para seus jogos.",
    highlights: [
      "Discos ópticos",
      "Maior capacidade gráfica",
      "Nova geração doméstica",
    ],
  },

  {
    id: "game-boy-advance",
    year: "2001",
    name: "Game Boy Advance",
    type: "portable",
    phase: "evolucao",
    tag: "Duas linhas em paralelo",
    image: "images/game-boy-advance.png",
    description:
      "O Game Boy Advance levou a linha portátil a uma nova geração, com mais poder de processamento e gráficos mais avançados. Lançado no mesmo ano do GameCube, manteve a divisão da Nintendo entre uma plataforma doméstica e outra portátil.",
    highlights: [
      "Hardware portátil mais poderoso",
      "Evolução da linha Game Boy",
      "Linha portátil paralela ao GameCube",
    ],
  },

  {
    id: "nintendo-ds",
    year: "2004",
    name: "Nintendo DS",
    type: "portable",
    phase: "interfaces",
    tag: "Duas telas + toque",
    image: "images/nintendo-ds-2004.png",
    description:
      "O Nintendo DS mudou a forma de interagir com os jogos ao combinar duas telas, touchscreen e stylus. A Nintendo passou a explorar novas formas de controle e comunicação, indo além da evolução tradicional de gráficos e processamento.",
    highlights: [
      "Duas telas",
      "Touchscreen e stylus",
      "Novas formas de interação",
    ],
  },

  {
    id: "wii",
    year: "2006",
    name: "Nintendo Wii",
    type: "home",
    phase: "interfaces",
    tag: "Controle por movimento",
    image: "images/wii.png",
    description:
      "O Wii apostou menos no aumento do poder gráfico e mais em uma nova forma de jogar. O Wii Remote e seus sensores de movimento tornaram os gestos parte do controle e ajudaram a Nintendo a alcançar um público muito mais amplo.",
    highlights: [
      "Wii Remote",
      "Controle por movimento",
      "Ampliação do público",
    ],
  },

  {
    id: "nintendo-3ds",
    year: "2011",
    name: "Nintendo 3DS",
    type: "portable",
    phase: "interfaces",
    tag: "3D sem óculos",
    image: "images/nintendo3ds.png",
    description:
      "O Nintendo 3DS levou a fórmula do DS para uma nova geração, adicionando câmeras e uma tela capaz de produzir efeito 3D estereoscópico sem óculos. A Nintendo continuou experimentando com novas formas de apresentar e interagir com os jogos.",
    highlights: [
      "3D estereoscópico sem óculos",
      "Câmeras integradas",
      "Evolução do Nintendo DS",
    ],
  },

  {
    id: "wii-u",
    year: "2012",
    name: "Wii U",
    type: "home",
    phase: "interfaces",
    tag: "Tela no controle",
    image: "images/wii-u.png",
    description:
      "O Wii U levou a ideia de uma segunda tela para o console doméstico através do Wii U GamePad. Apesar de seu desempenho comercial abaixo do Wii, o conceito de jogar com uma tela própria no controle antecipou parte da ideia que seria desenvolvida no Switch.",
    highlights: [
      "GamePad com tela própria",
      "Experiência de segunda tela",
      "Antecedente do Switch",
    ],
  },

  {
    id: "switch",
    year: "2017",
    name: "Nintendo Switch",
    type: "hybrid",
    phase: "convergencia",
    tag: "Doméstico + portátil",
    image: "images/nintendo-switch.png",
    description:
      "O Switch unificou as duas principais linhas de hardware da Nintendo em uma única plataforma. O console pode ser usado na televisão através do dock ou levado para o modo portátil, enquanto os Joy-Con permitem diferentes formas de controle.",
    highlights: [
      "Console doméstico e portátil",
      "Joy-Con removíveis",
      "Uma plataforma para as duas linhas",
    ],
  },

  {
    id: "switch-lite",
    year: "2019",
    name: "Nintendo Switch Lite",
    type: "portable",
    phase: "convergencia",
    tag: "Foco no portátil",
    image: "images/switch-lite.png",
    description:
      "O Switch Lite é uma versão voltada exclusivamente para o uso portátil. Com controles integrados e sem suporte ao modo TV, oferece uma alternativa menor e mais simples ao Switch original.",
    highlights: [
      "Uso exclusivamente portátil",
      "Controles integrados",
      "Formato mais compacto",
    ],
  },

  {
    id: "switch-oled",
    year: "2021",
    name: "Nintendo Switch OLED",
    type: "hybrid",
    phase: "convergencia",
    tag: "Revisão de hardware",
    image: "images/switch-oled.png",
    description:
      "O Switch OLED é uma revisão do Switch original, não uma nova geração. A atualização trouxe uma tela OLED de 7 polegadas, 64 GB de armazenamento, suporte traseiro ajustável, áudio aprimorado e um dock com porta Ethernet.",
    highlights: [
      'Tela OLED de 7"',
      "64 GB de armazenamento",
      "Dock com Ethernet",
    ],
  },

  {
    id: "switch-2",
    year: "2025",
    name: "Nintendo Switch 2",
    type: "hybrid",
    phase: "convergencia",
    tag: "Híbrido de nova geração",
    image: "images/nintendo-switch-2.png",
    description:
      "O Switch 2 dá continuidade ao conceito híbrido estabelecido pelo Switch, combinando uso portátil e doméstico em uma única plataforma. A nova geração traz hardware mais poderoso, novos recursos de interação e compatibilidade com jogos do Switch original.",
    highlights: [
      "Nova geração híbrida",
      "Hardware mais poderoso",
      "Compatibilidade com jogos do Switch",
    ],
  },
];
