// src/mocks/personagensMock.js

const personagens = [
  // --- Protagonistas / Aliados ---
  {
    id: 1,
    nome: "O Cavaleiro",
    descricao: "O protagonista silencioso, um Vessel em busca de respostas.",
    imagem: "/assets/images/cavaleiro.jpg",
    tipo: "jogador"
  },
  {
    id: 2,
    nome: "Hornet",
    descricao: "Guardia ágil de Hallownest, meio-irmã do Cavaleiro.",
    imagem: "/assets/images/hornet.jpg",
    tipo: "aliado"
  },
  {
    id: 3,
    nome: "Rei Pálido",
    descricao: "Antigo governante de Hallownest e criador dos Vessels.",
    imagem: "/assets/images/rei-palido.jpg",
    tipo: "npc"
  },
  {
    id: 4,
    nome: "Dama Branca",
    descricao: "Consorte do Rei Pálido, mãe de Hornet.",
    imagem: "/assets/images/dama-branca.jpg",
    tipo: "npc"
  },
  {
    id: 5,
    nome: "Quirrel",
    descricao: "Explorador curioso, portador do prego de Monomon.",
    imagem: "/assets/images/quirrel.jpg",
    tipo: "aliado"
  },
  {
    id: 6,
    nome: "Zote, o Poderoso",
    descricao: "Um 'herói' incompetente que sonha com glória.",
    imagem: "/assets/images/zote.jpg",
    tipo: "aliado"
  },
  {
    id: 7,
    nome: "Cloth",
    descricao: "Aventureira alegre que busca provar seu valor.",
    imagem: "/assets/images/cloth.jpg",
    tipo: "aliado"
  },
  {
    id: 8,
    nome: "Tiso",
    descricao: "Guerreiro que busca participar da Colosseum of Fools.",
    imagem: "/assets/images/tiso.jpg",
    tipo: "npc"
  },

  // --- Sonhadores ---
  {
    id: 20,
    nome: "Monomon, a Professora",
    descricao: "Uma das três Sonhadoras, responsável por selar a Infecção.",
    imagem: "/assets/images/monomon.jpg",
    tipo: "boss"
  },
  {
    id: 21,
    nome: "Herrah, a Besta",
    descricao: "Rainha das Besta e Sonhadora.",
    imagem: "/assets/images/herrah.jpg",
    tipo: "boss"
  },
  {
    id: 22,
    nome: "Lurien, o Vigilante",
    descricao: "Um dos três Sonhadores, guardião da Cidade das Lágrimas.",
    imagem: "/assets/images/lurien.jpg",
    tipo: "boss"
  },

  // --- Bosses principais ---
  {
    id: 30,
    nome: "Hollow Knight",
    descricao: "O recipiente escolhido para conter a Infecção.",
    imagem: "/assets/images/hollow-knight.jpg",
    tipo: "boss-final"
  },
  {
    id: 31,
    nome: "Radiância",
    descricao: "A fonte da Infecção, uma entidade de pura luz.",
    imagem: "/assets/images/radiancia.jpg",
    tipo: "boss-final"
  },
  {
    id: 32,
    nome: "Nosk",
    descricao: "Criatura que imita amigos para atrair vítimas.",
    imagem: "/assets/images/nosk.jpg",
    tipo: "boss"
  },
  {
    id: 33,
    nome: "Grimm",
    descricao: "Mestre da Trupe Grimm, guardião das Chamas Rituais.",
    imagem: "/assets/images/grimm.jpg",
    tipo: "boss"
  },
  {
    id: 34,
    nome: "Rei Pesadelo Grimm",
    descricao: "Forma verdadeira e terrível de Grimm.",
    imagem: "/assets/images/rei-pesadelo-grimm.jpg",
    tipo: "boss"
  },
  {
    id: 35,
    nome: "Pure Vessel",
    descricao: "Versão não corrompida do Hollow Knight, lutado no Panteão.",
    imagem: "/assets/images/pure-vessel.jpg",
    tipo: "boss"
  },
  {
    id: 36,
    nome: "Mantis Lords",
    descricao: "Três líderes da tribo Louva-a-Deus.",
    imagem: "/assets/images/mantis-lords.jpg",
    tipo: "boss"
  },
  {
    id: 37,
    nome: "Traitor Lord",
    descricao: "Antigo líder dos Louva-a-Deus, que se voltou à Infecção.",
    imagem: "/assets/images/traitor-lord.jpg",
    tipo: "boss"
  },
  {
    id: 38,
    nome: "Dung Defender",
    descricao: "Um dos cinco grandes cavaleiros de Hallownest.",
    imagem: "/assets/images/dung-defender.jpg",
    tipo: "boss"
  },
  {
    id: 39,
    nome: "Oro, Mato & Sheo",
    descricao: "Três Mestres Pregadores que ensinam técnicas de combate.",
    imagem: "/assets/images/nailmasters.jpg",
    tipo: "npc"
  },
  {
    id: 40,
    nome: "Sly",
    descricao: "Vendedor de itens, na verdade um ex-mestre do prego.",
    imagem: "/assets/images/sly.jpg",
    tipo: "npc"
  },

  // --- Colosseum of Fools ---
  {
    id: 50,
    nome: "Colosso dos Tolos",
    descricao: "Onde guerreiros testam suas forças até a morte.",
    imagem: "/assets/images/colosseum.jpg",
    tipo: "local-boss"
  },

  // --- Outros Bosses notáveis ---
  {
    id: 60,
    nome: "Uumuu",
    descricao: "Guardião aquático dos Arquivos da Professora.",
    imagem: "/assets/images/uumuu.jpg",
    tipo: "boss"
  },
  {
    id: 61,
    nome: "Watcher Knights",
    descricao: "Seis cavaleiros que protegem a torre de Lurien.",
    imagem: "/assets/images/watcher-knights.jpg",
    tipo: "boss"
  },
  {
    id: 62,
    nome: "Broken Vessel",
    descricao: "Um Vessel falho, consumido pela Infecção.",
    imagem: "/assets/images/broken-vessel.jpg",
    tipo: "boss"
  },
  {
    id: 63,
    nome: "Lost Kin",
    descricao: "Versão mais poderosa e trágica do Broken Vessel.",
    imagem: "/assets/images/lost-kin.jpg",
    tipo: "boss"
  },
  {
    id: 64,
    nome: "Soul Master",
    descricao: "Guardião da Cidade das Lágrimas, mestre em magias.",
    imagem: "/assets/images/soul-master.jpg",
    tipo: "boss"
  },
  {
    id: 65,
    nome: "Soul Tyrant",
    descricao: "Forma onírica mais poderosa do Soul Master.",
    imagem: "/assets/images/soul-tyrant.jpg",
    tipo: "boss"
  }
];

export default personagens;
