const itemsProperties = {
  equipable: {
    icon: "assets/properties_icon/equipable.png",
    pt: { name: "Equipável:", desc: "Pode ser equipado em Animons" },
    en: { name: "Equipable:", desc: "Can be equipped on Animons" }
  },
  consumable: {
    icon: "assets/properties_icon/consumable.png",
    pt: { name: "Consumível:", desc: "Consumido ao ser usado" },
    en: { name: "Consumable:", desc: "Consumed when used" }
  },
  tradable: {
    icon: "assets/properties_icon/tradable.png",
    pt: { name: "Trocável:", desc: "Pode ser trocado com outros players" },
    en: { name: "Tradable:", desc: "Can be traded with other players" }
  },
  transformation: {
    icon: "assets/properties_icon/transformation.png",
    pt: { name: "Transformação:", desc: "Permite que um Animon se transforme em outra forma" },
    en: { name: "Transformation:", desc: "Allows an Animon to transform into another form" }
  },
  lootbox: {
    icon: "assets/properties_icon/lootbox.png",
    pt: { name: "Loot Box:", desc: "Permite obter um item aleatório ao ser aberta" },
    en: { name: "Loot Box:", desc: "Allows obtaining a random item when opened" }
  },
  usable_battle: {
    icon: "assets/properties_icon/usable_battle.png",
    pt: { name: "Usável (Batalha):", desc: "Pode ser utilizado durante as batalhas" },
    en: { name: "Usable (Battle):", desc: "Can be used during battles" }
  },
  usable_map: {
    icon: "assets/properties_icon/usable_map.png",
    pt: { name: "Usável (Mapa):", desc: "Pode ser utilizado fora das batalhas, enquanto estiver no mapa" },
    en: { name: "Usable (Map):", desc: "Can be used outside of battles, while on the map" }
  },
  premium: {
    icon: "assets/properties_icon/premium.png",
    pt: { name: "Premium:", desc: "Itens raros que possuem formas especiais ou difíceis de obter" },
    en: { name: "Premium:", desc: "Rare items that have special forms or are difficult to obtain" }
  }
};

const battleProperties = {
  burn: {
    icon: "assets/properties_icon/burn.png",
    pt: { name: "Queimadura:", desc: "Causa queimadura que causa dano por turno e aumenta em 1.25x a chance de Captura" },
    en: { name: "Burn:", desc: "Causes burn dealing damage per turn and increases Catch Rate by 1.25x" }
  },
  poison: {
    icon: "assets/properties_icon/poison.png",
    pt: { name: "Envenenamento:", desc: "Causa envenenamento que causa dano por turno e aumenta em 1.1x a chance de Captura" },
    en: { name: "Poison:", desc: "Causes poison dealing damage per turn and increases Catch Rate by 1.1x" }
  },
  freeze: {
    icon: "assets/properties_icon/freeze.png",
    pt: { name: "Congelamento:", desc: "Congela o alvo, impedindo-o de se mover durante o efeito, e aumenta em 1.25x a chance de Captura" },
    en: { name: "Freeze:", desc: "Freezes the target, preventing movement during the effect, and increases Catch Rate by 1.25x" }
  },
  paralysis: {
    icon: "assets/properties_icon/paralysis.png",
    pt: { name: "Paralisia:", desc: "Paralisa o alvo, podendo impedi-lo de se mover durante o efeito, e aumenta em 1.25x a chance de Captura" },
    en: { name: "Paralysis:", desc: "Paralyzes the target, which may prevent movement during the effect, and increases Catch Rate by 1.25x" }
  },
  attract: {
    icon: "assets/properties_icon/attract.png",
    pt: { name: "Atração:", desc: "Faz com que o alvo fique atraído, podendo fazê-lo errar os ataques durante o efeito, e aumenta em 1.1x a chance de Captura" },
    en: { name: "Attract:", desc: "Infatuates the target, causing attacks to potentially miss during the effect, and increases Catch Rate by 1.1x" }
  },
  sleep: {
    icon: "assets/properties_icon/sleep.png",
    pt: { name: "Adormecimento:", desc: "Faz o alvo dormir, impedindo-o de se mover durante o efeito, com chance de acordar, e aumenta em 1.5x a chance de Captura" },
    en: { name: "Sleep:", desc: "Puts the target to sleep, preventing movement during the effect, with a chance to wake up, and increases Catch Rate by 1.5x" }
  },
  wound: {
    icon: "assets/properties_icon/wound.png",
    pt: { name: "Ferida:", desc: "Causa um ferimento que causa dano por turno e aumenta em 1.1x a chance de Captura" },
    en: { name: "Wound:", desc: "Causes a wound dealing damage per turn and increases Catch Rate by 1.1x" }
  }
};
