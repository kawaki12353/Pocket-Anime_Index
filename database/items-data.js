const items=[
{rarity:"rare", name:"Highstar Key", cat:"key",
 pt:{desc:"Uma chave misteriosa...",note:"Serve para acessar a Highstar Base.",drop:"Baú na Great Plains."},
 en:{desc:"A mysterious key..",note:"It is used to access a Highstar Base.",drop:"Chest in the Great Plains."},
 icon:"highstar_key.png"
},
{rarity:"epic", name:"Castle Badge", cat:"key",
 pt:{desc:"Concedido àqueles que derrotaram a primeira cápsula.",drop:"Se consegue Derrotando o primeiro ginásio."},
 en:{desc:"Awarded to those who have defeated the first capsule.",drop:"You get it by defeating the first gym."},
 icon:"castle_badge.png"
},
{rarity:"epic", name:"Lesser Trait Crystal", cat:"status",
 pt:{desc:"Um cristal único que muda a Trait do seu Animon!",drop:"Consiga em [012]Códigos[000] ou [012]Caixas[000]."},
 en:{desc:"A unique crystal that changes your Animon's Trait!",drop:"Get them via [012]codes[000] or [012]crates[000]."},
 icon:"lesser_trait_crystal.png"
},
{rarity:"epic", name:"Nature Candy", cat:"status",
 pt:{desc:"Um doce único que muda a natureza do seu Animon!",drop:"Consiga em [012]Códigos[000] ou [012]Caixas[000]."},
 en:{desc:"A unique candy that changes your Animon's nature!",drop:"Get them via [012]codes[000] or [012]crates[000]."}
},
{rarity:"rare", name:"Scorching Crystal", cat:"evolution",
 pt:{desc:"Uma joia luminosa que abriga um inferno vibrante e turbulento em seu interior.",drop:"Derrotando Animons do tipo [012]Fire[000]."},
 en:{desc:"A luminous gem that houses a vibrant, swirling inferno within.",drop:"Defeating [012]Fire-type[000] Animons."},
 icon:"scorching_crystal.png"
},
{rarity:"rare", name:"Seastone Cuff", cat:"battle",
 pt:{desc:"Algemas feitas com uma pedra especial! Podem ferir usuários elementais.",drop:"Marine Crate"},
 en:{desc:"Cuffs made with special stone! Can damage elemental users.",drop:"Marine Crate"},
 icon:"seastone_cuff.png"
},
{rarity:"epic", name:"Celestial Key", cat:"evolution",
 pt:{desc:"Uma chave dourada que brilha com luz celestial, desbloqueando poderes inimagináveis.",drop:"Derrotando Animons do tipo [012]Light[000]."},
 en:{desc:"A golden key that shimmers with heavenly light, unlocking untold powers.",drop:"Defeating [012]Light-type[000] Animons."},
 icon:"celestial_key.png"
},
{rarity:"uncommon", name:"Bandit Cutlass", cat:"battle",
 pt:{desc:"A Bandit Cutlass! Aumenta o atributo de ATAQUE do Animon que estiver equipado durante a batalha!",drop:"Derrotando o Animon Bandit."},
 en:{desc:"The Bandit Cutlass! Increases the ATK stat of the Animon equipping it during battle!",drop:"Defeating the Bandit Animon."},
 icon:"bandit_cutlass.png"
},
{rarity:"uncommon", name:"Plain Cloth", cat:"evolution",
 pt:{desc:"Um simples rolo de tecido, versátil e sem adornos.",drop:"Derrotando Animons do tipo [012]Neutral[000]."},
 en:{desc:"A simple roll of cloth, versatile and unadorned.",drop:"Defeating [012]Neutral-type[000] Animons."},
 icon:"plain_cloth.png"
},
{rarity:"rare", name:"Tide Crystal", cat:"evolution",
 pt:{desc:"Um cristal azul profundo com camadas que imitam as profundezas tranquilas do oceano.",drop:"Derrotando Animons do tipo [012]Water[000]."},
 en:{desc:"A deep blue crystal with layers that mimic the tranquil depths of the ocean.",drop:"Defeating [012]Water-type[000] Animons."}
},
{rarity:"common", name:"GX-Accuracy", cat:"misc",
 pt:{desc:"Um acelerador metabólico de assimilação rápida da Gamyng Corp, criado para aumentar drasticamente a precisão dos Animons.",drop:"Lojas"},
 en:{desc:"A rapid-assimilation metabolic accelerator from Gamyng Corp, crafted to drastically increase Animons accuracy.",drop:"Shops"}
},
{rarity:"common", name:"Capsule", cat:"capture",
 pt:{desc:"Uma das tecnologias de cápsula mais populares, esta cápsula concede a habilidade de capturar Animons selvagens!",note:"x1 a Chance de Captura.",drop:"Lojas"},
 en:{desc:"One of the most popular Capsule Tech, this capsule grants the ability to capture wild Animons!",note:"x1 Capture Chance.",drop:"Shops"},
 icon:"capsule.png"
},
{rarity:"uncommon", name:"Advance Capsule", cat:"capture",
 pt:{desc:"Uma das tecnologias de cápsula mais populares, esta cápsula concede a habilidade de capturar Animons selvagens!",note:"x1 a Chance de Captura.",drop:"Lojas"},
 en:{desc:"One of the most popular Capsule Tech, this capsule grants the ability to capture wild Animons!",note:"x1 Capture Chance.",drop:"Shops"},
 icon:"advance_capsule.png" 
},
{rarity:"legendary", name:"Z-Capsule", cat:"capture",
 pt:{desc:"Uma das tecnologias de cápsula mais populares, esta cápsula concede a habilidade de capturar Animons selvagens!",note:"x2 a Chance de Captura.",drop:"Limitado a fase 2 de Testes."},
 en:{desc:"One of the most popular Capsule Tech, this capsule grants the ability to catch wild Animons!",note:"x2 Capture Chance.",drop:"Limited to Phase 2 Testing."}
},
{rarity:"uncommon", name:"Aqua Gem", cat:"evolution",
 pt:{desc:"Uma joia azul e transparente que abriga em seu interior um pequeno vórtice giratório de água pura.",drop:"Derrotando Animons do tipo [012]Water[000]."},
 en:{desc:"A clear, blue gem that holds within it a miniature, swirling vortex of pure water.",drop:"Defeating [012]Water-type[000] Animons."},
 icon:"aqua_gem.png"
},
{rarity:"rare", name:"Battle Claw", cat:"evolution",
 pt:{desc:"Uma garra poderosa, afiada e resistente, simbolizando força bruta e proeza em combate.",drop:"Derrotando Animons do tipo [012]Fighting[000]."},
 en:{desc:"A powerful claw, sharp and tough, symbolizing raw strength and combat prowess.",drop:"Defeating [012]Fighting-type[000] Animons."},
 icon:"battle_claw.png"
},
{rarity:"uncommon", name:"Breeze Feather", cat:"evolution",
 pt:{desc:"Uma pena leve e delicada que balança com a mais suave das brisas.",drop:"Derrotando Animons do tipo [012]Wind[000]."},
 en:{desc:"A light and delicate feather that sways with the gentlest breeze.",drop:"Defeating [012]Wind-type[000] Animons."},
 icon:"breeze_feather.png"
},
{rarity:"rare", name:"Demon Essence", cat:"evolution",
 pt:{desc:"Fornecida por demônios poderosos.",drop:"Derrotando Animons do tipo [012]Demon[000]."},
 en:{desc:"Provided by strong demons.",drop:"Defeating [012]Demon-type[000] Animons."}
},
{rarity:"epic", name:"Divination Cushion", cat:"evolution",
 pt:{desc:"Uma almofada roxa e macia adornada com alfinetes encantados, usada por videntes em seus rituais mais poderosos.",drop:"Derrotando Animons do tipo [012]Psychic[000]."},
 en:{desc:"A plush, purple cushion adorned with enchanted pins, used by seers for their most potent rituals.",drop:"Defeating [012]Psychic-type[000] Animons."}
},
{rarity:"rare", name:"Enchanted Fabric", cat:"evolution",
 pt:{desc:"Rolos de tecido mítico, tecidos com fios que pulsam com poder mental.",drop:"Derrotando Animons do tipo [012]Psychic[000]."},
 en:{desc:"Rolls of mythical fabric, woven with threads that pulsate with mental power.",drop:"Defeating [012]Psychic-type[000] Animons."},
 icon:"enchanted_fabric.png"
},
{rarity:"uncommon", name:"Fiend Claw", cat:"evolution",
 pt:{desc:"Uma garra afiada e ameaçadora de um demônio menor, infundida com poder sombrio.",drop:"Derrotando Animons do tipo [012]Demon[000]."},
 en:{desc:"A sharp, menacing claw from a lesser demon, infused with dark power.",drop:"Defeating [012]Demon-type[000] Animons."},
 icon:"fiend_claw.png"
},
{rarity:"uncommon", name:"Frost Shard", cat:"evolution",
 pt:{desc:"Um fragmento de gelo elegante e afiado, imbuído com a essência do frio.",drop:"Derrotando Animons do tipo [012]Ice[000]."},
 en:{desc:"A sleek, icy shard with a sharp edge, imbued with the essence of cold.",drop:"Defeating [012]Ice-type[000] Animons."}
},
{rarity:"uncommon", name:"Ignite Gem", cat:"evolution",
 pt:{desc:"Uma joia luminosa que abriga em seu interior um inferno vibrante e turbulento.",drop:"Derrotando Animons do tipo [012]Fire[000]."},
 en:{desc:"A luminous gem that houses a vibrant, swirling inferno within.",drop:"Defeating [012]Fire-type[000] Animons."},
 icon:"ignite_gem.png"
},
{rarity:"epic", name:"King's Pincer", cat:"evolution",
 pt:{desc:"Uma pinça enorme e irregular do lendário Rei Caranguejo, imbuída com poder e resistência incomparáveis.",drop:"Derrotando Animons do tipo [012]Fighting[000]."},
 en:{desc:"An enormous, jagged pincer from the legendary Crab King, imbued with unmatched power and resilience.",drop:"Defeating [012]Fighting-type[000] Animons."},
 icon:"king's_pincer.png"
},
{rarity:"rare", name:"Lush Foliage", cat:"evolution",
 pt:{desc:"Um vibrante conjunto de folhas verdes densas, irradiando energia natural.",drop:"Derrotando Animons do tipo [012]Nature[000]."},
 en:{desc:"A vibrant bundle of dense, green leaves, radiating with natural energy.",drop:"Defeating [012]Nature-type[000] Animons."},
 icon:"lush_foliage.png"
},
{rarity:"epic", name:"Magma Crystal", cat:"evolution",
 pt:{desc:"Um fragmento enigmático moldado por forças vulcânicas, brilhando com núcleos derretidos e manchas flamejantes.",drop:"Derrotando Animons do tipo [012]Fire[000]. Derrotando o Animon Dinossaur."},
 en:{desc:"An enigma shard shaped by volcanic forces, glowing with molten cores and fiery blotches.",drop:"Defeating [012]Fire-type[000] Animons. Defeating the Dinossaur Animon."},
 icon:"magma_crystal.png"
},
{rarity:"uncommon", name:"Mind Thread", cat:"evolution",
 pt:{desc:"Um carretel de linha roxa cintilante, irradiando energia psíquica.",drop:"Derrotando Animons do tipo [012]Psychic[000]."},
 en:{desc:"A spool of shimmering purple thread, radiating with psychic energy.",drop:"Defeating [012]Psychic-type[000] Animons."},
 icon:"mind_thread.png"
},
{rarity:"uncommon", name:"Mystic Tablet", cat:"evolution",
 pt:{desc:"Uma antiga tábua de bronze gravada com runas misteriosas.",drop:"Derrotando Animons do tipo [012]Soul[000]."},
 en:{desc:"An ancient bronze tablet engraved with mysterious runes.",drop:"Defeating [012]Soul-type[000] Animons."},
 icon:"mystic_tablet.png"
},
{rarity:"epic", name:"Pure Sphere", cat:"evolution",
 pt:{desc:"Uma esfera perfeitamente lisa e translúcida, irradiando uma energia suave e equilibrada.",drop:"Derrotando Animons do tipo [012]Neutral[000]."},
 en:{desc:"A perfectly smooth, translucent sphere, radiating a gentle, balanced energy.",drop:"Defeating [012]Neutral-type[000] Animons."},
 icon:"pure_sphere.png"
},
{rarity:"epic", name:"Radiant Blossom", cat:"evolution",
 pt:{desc:"Uma haste majestosa adornada com flores douradas e brilhantes, repletas de poderosa energia natural.",drop:"Derrotando Animons do tipo [012]Nature[000]."},
 en:{desc:"A Majestic stalk adorned with glowing, golden flowers brimming with potent natural energy.",drop:"Defeating [012]Nature-type[000] Animons."},
 icon:"radiant_blossom.png" 
},
{rarity:"uncommon", name:"Radiant Ring", cat:"evolution",
 pt:{desc:"Um anel dourado que brilha com uma luz interna quente.",drop:"Derrotando Animons do tipo [012]Light[000]."},
 en:{desc:"A golden ring that glows with a warm, inner light.",drop:"Defeating [012]Light-type[000] Animons."},
 icon:"radiant_ring.png"
},
{rarity:"uncommon", name:"Shadow Fang", cat:"evolution",
 pt:{desc:"Um osso simples e pálido imbuído de energia sombria.",drop:"Derrotando Animons do tipo [012]Dark[000]."},
 en:{desc:"A simple, pale bone imbued with dark energy.",drop:"Defeating [012]Dark-type[000] Animons."}
},
{rarity:"uncommon", name:"Spark Gem", cat:"evolution",
 pt:{desc:"Uma joia roxa vibrante contendo uma pequena nuvem de tempestade ativa, com relâmpagos visíveis em seu interior.",drop:"Derrotando Animons do tipo [012]Lightning[000]."},
 en:{desc:"A vibrant purple gem containing a small, active storm cloud, with occasional flashes of lightning visible within.",drop:"Defeating [012]Lightning-type[000] Animons."},
 icon:"spark_gem.png"
},
{rarity:"rare", name:"Stone Slab", cat:"evolution",
 pt:{desc:"Uma placa de pedra robusta e sem marcas, carregando uma energia simples, porém sólida.",drop:"Derrotando Animons do tipo [012]Neutral[000]."},
 en:{desc:"A rugged, unremarkable slab of stone, carrying an unassuming but solid energy.",drop:"Defeating [012]Neutral-type[000] Animons."},
 icon:"stone_slab.png"
},
{rarity:"uncommon", name:"Terra Shards", cat:"evolution",
 pt:{desc:"Fragmentos resistentes da terra, sólidos e confiáveis.",drop:"Derrotando Animons do tipo [012]Earth[000]."},
 en:{desc:"Rugged shards of the earth, solid and dependable.",drop:"Defeating [012]Earth-type[000] Animons."},
 icon:"terra_shards.png"
},
{rarity:"epic", name:"Thunder Orb", cat:"evolution",
 pt:{desc:"Um grande orbe roxo radiante que encapsula uma tempestade elétrica eternamente ativa.",drop:"Derrotando Animons do tipo [012]Lightning[000]."},
 en:{desc:"A large, radiant purple orb, encapsulating a vibrant ever-active electrical storm.",drop:"Defeating [012]Lightning-type[000] Animons."}
},
{rarity:"uncommon", name:"Venom Vial", cat:"evolution",
 pt:{desc:"Um pequeno frasco contendo um líquido verde vibrante que borbulha de forma ameaçadora.",drop:"Derrotando Animons do tipo [012]Poison[000]."},
 en:{desc:"A small vial containing a vibrant green liquid that bubbles ominiously.",drop:"Defeating [012]Poison-type[000] Animons."},
 icon:"venom_vial.png"
},
{rarity:"uncommon", name:"Verdant Sprigs", cat:"evolution",
 pt:{desc:"Um conjunto de folhas frescas e brilhantes.",drop:"Derrotando Animons do tipo [012]Nature[000]."},
 en:{desc:"A bundle of fresh, glowing leaves.",drop:"Defeating [012]Nature-type[000] Animons."},
 icon:"verdant_sprigs.png"
},
{rarity:"uncommon", name:"Warrior Horn", cat:"evolution",
 pt:{desc:"Um chifre robusto que pertenceu a uma besta feroz, transbordando espírito de luta.",drop:"Derrotando Animons do tipo [012]Fighting[000]."},
 en:{desc:"A sturdy horn that once belonged to a fierce beast, brimming with fighting spirit.",drop:"Defeating [012]Fighting-type[000] Animons."},
 icon:"warrior_horn.png"
},
{rarity:"uncommon", name:"Aloe", cat:"medical",
 pt:{desc:"Tratamento para queimaduras! Aplique no seu Animon!",note:"Serve para retirar [003]Queimadura[000] do Animon.",drop:"Lojas"},
 en:{desc:"Treatment for burn! Apply it on your Animon!",note:"Cures [003]Burn[000] status.",drop:"Shops"}
},
{rarity:"common", name:"C-Potion", cat:"medical",
 pt:{desc:"Um item que rejuvenesce seus Animons e os deixa prontos para a batalha!",note:"Recupera [012]25 de HP[000].",drop:"Loja"},
 en:{desc:"An item that rejuvenates your Animons and gets them up and ready for battle!",note:"Restores [012]25 HP[000].",drop:"Shop"},
 icon:"c-potion.png"
},
{rarity:"epic", name:"Endless Bento", cat:"battle",
 pt:{desc:"Recupera automaticamente 1/14 do HP Máx no final de cada rodada.",drop:"Dentro da Torre do Korin"},
 en:{desc:"Automatically regain 1/14th MAX HP at the end of each round.",drop:"Inside Korin Tower"},
 icon:"endless_bento.png"
},
{rarity:"uncommon", name:"Green Bean", cat:"medical",
 pt:{desc:"Um feijão verde estranho! Possui propriedades curativas e também cura se o HP cair para 30%!",note:"Recupera 25 de HP.",drop:"Loja da Torre do Korin"},
 en:{desc:"A weird Green Bean! Has some properties to heal your Animons! Also heals them if their HP drops to 30%!",note:"Restores 25 HP.",drop:"Korin Tower Shop"}
},
{rarity:"common", name:"Revive", cat:"medical",
 pt:{desc:"Revive Animons desmaiados com 1% de HP.",drop:"Loja"},
 en:{desc:"Revives fainted Animons with 1% Health.",drop:"Shop"}
},
{rarity:"uncommon", name:"Spark-Leaf", cat:"medical",
 pt:{desc:"Uma folha estática com efeito anti-paralisia!",note:"Serve para retirar [008]Paralisia[000] do Animon.",drop:"Lojas"},
 en:{desc:"A static leaf with an anti-paralysis effect!",note:"Cures [008]Paralysis[000] status.",drop:"Shops"},
 icon:"spark-leaf.png"
},
{rarity:"rare", name:"Vitaloom", cat:"status",
 pt:{desc:"Rica em polpa e refrescante. Dizem que floresce quanto mais é mastigada!",note:"Aumenta o [013]HP TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Pulp-rich and refreshing. Said to bloom the longer it's chewed!",note:"Increases [013]HP TV[000] by 10",drop:"Phase Shop"}
},
{rarity:"rare", name:"Witherloom", cat:"status",
 pt:{desc:"Carne seca e desbotada que drena o vigor quanto mais é mastigada.",note:"Diminui o [013]HP TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Dry, faded flesh that saps vigor the longer it's chewed.",note:"Decreases [013]HP TV[000] by 10",drop:"Phase Shop"},
 icon:"witherloom.png"
},
{rarity:"uncommon", name:"Blaze Orb", cat:"battle",
 pt:{desc:"Um pequeno orbe que queima com uma chama eterna, intensificando golpes do tipo Fire.",drop:"Loja in Capsule City"},
 en:{desc:"A small orb that burns with an eternal flame, enhancing the intensity of Fire-Type moves.",drop:"Shop in Capsule City"},
 icon:"blaze_orb.png"
},
{rarity:"rare", name:"Crimberry", cat:"status",
 pt:{desc:"Uma fruta ácida que alimenta a agressividade. Seu gosto forte deixa marca.",note:"Aumenta o [013]ATK TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"A tangy fruit that fuels aggression. Its sharp taste leaves a bite.",note:"Increases [013]ATK TV[000] by 10",drop:"Phase Shop"},
 icon:"crimberry.png"
},
{rarity:"rare", name:"Crumblefruit", cat:"status",
 pt:{desc:"Polpa quebradiça que se desfaz ao toque, deixando você se sentindo frágil.",note:"Diminui o [013]DEF TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Brittle pulp that flakes at a touch, leaving you feeling fragile.",note:"Decreases [013]DEF TV[000] by 10",drop:"Phase Shop"},
 icon:"crumblefruit.png"
},
{rarity:"rare", name:"Dashfruit", cat:"status",
 pt:{desc:"Cítrica e leve — uma mordida e você já está em movimento!",note:"Aumenta o [013]SPD TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Zesty and light — one bite and you're already moving!",note:"Increases [013]SPD TV[000] by 10",drop:"Phase Shop"}
},
{rarity:"uncommon", name:"Demon Shuriken", cat:"battle",
 pt:{desc:"Uma ferramenta ninja rara, conhecida por sua lâmina afiada e durabilidade. A Shuriken Demoníaca aprimora a eficácia das ferramentas ninja!",drop:"Loja em Capsule City"},
 en:{desc:"A rare ninja tool, known for its sharpness and durability. The Demon Shuriken enhances the effectiveness of Ninja tools!",drop:"Shop in Capsule City"},
 icon:"demon_shuriken.png"
},
{rarity:"uncommon", name:"Dinosaur Hide", cat:"misc",
 pt:{desc:"Um couro grosso e resistente deixado por um dinossauro poderoso.",drop:"Derrotando o Animon Dinossaur"},
 en:{desc:"A strong thick hide dropped by a strong dinosaur.",drop:"Defeating the Dinossaur Animon"}
},
{rarity:"rare", name:"Dragfruit", cat:"status",
 pt:{desc:"Pesada e lenta, seu peso parece te puxar para trás a cada mordida.",note:"Diminui o [013]SPD TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Heavy and sluggish, its weight seems to pull you back with every bite.",note:"Decreases [013]SPD TV[000] by 10",drop:"Phase Shop"}
},
{rarity:"rare", name:"Dullapple", cat:"status",
 pt:{desc:"Sem sabor e amarga; reduz a clareza e embota o foco em batalha.",note:"Diminui o [013]SP.ATK TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Flat and bitter; it mutes clarity and blunts focus in battle.",note:"Decreases [013]SP.ATK TV[000] by 10",drop:"Phase Shop"}
},
{rarity:"rare", name:"Fisher's Pass", cat:"key",
 pt:{desc:"Um passe concedido a qualquer um digno de segurar uma vara de pesca! Permite comprar itens em qualquer loja de pesca.",drop:"Quest em Great Plains"},
 en:{desc:"A pass given to anyone worthy enough to hold up a fishing rod! Allows you to purchase items from any fishing shop.",drop:"Quest in Great Plains"}
},
{rarity:"common", name:"Fishing Reel", cat:"misc",
 pt:{desc:"Um molinete usado para pesca! Um molinete por uso!",drop:"Loja de Pesca"},
 en:{desc:"A reel used for fishing! One reel per use!",drop:"Fishing Shop"}
},
{rarity:"common", name:"GX-Attack", cat:"misc",
 pt:{desc:"Um acelerador metabólico de assimilação rápida da Gamyng Corp, criado para aumentar drasticamente o ataque dos Animons.",drop:"Lojas"},
 en:{desc:"A rapid-assimilation metabolic accelerator from Gamyng Corp, crafted to drastically increase Animons attack.",drop:"Shops"}
},
{rarity:"common", name:"GX-Defense", cat:"misc",
 pt:{desc:"Um acelerador metabólico de assimilação rápida da Gamyng Corp, criado para aumentar drasticamente a defesa dos Animons.",drop:"Lojas"},
 en:{desc:"A rapid-assimilation metabolic accelerator from Gamyng Corp, crafted to drastically increase Animons defense.",drop:"Shops"}
},
{rarity:"common", name:"GX-Special Atk", cat:"misc",
 pt:{desc:"Um acelerador metabólico de assimilação rápida da Gamyng Corp, criado para aumentar drasticamente o ataque especial dos Animons.",drop:"Lojas"},
 en:{desc:"A rapid-assimilation metabolic accelerator from Gamyng Corp, crafted to drastically increase Animons special atk.",drop:"Shops"}
},
{rarity:"common", name:"GX-Special Def", cat:"misc",
 pt:{desc:"Um acelerador metabólico de assimilação rápida da Gamyng Corp, criado para aumentar drasticamente a defesa especial dos Animons.",drop:"Lojas"},
 en:{desc:"A rapid-assimilation metabolic accelerator from Gamyng Corp, crafted to drastically increase Animons special def.",drop:"Shops"}
},
{rarity:"common", name:"GX-Speed", cat:"misc",
 pt:{desc:"Um acelerador metabólico de assimilação rápida da Gamyng Corp, criado para aumentar drasticamente a velocidade dos Animons.",drop:"Lojas"},
 en:{desc:"A rapid-assimilation metabolic accelerator from Gamyng Corp, crafted to drastically increase Animons speed.",drop:"Shops"}
},
{rarity:"rare", name:"Gilded Sidearm", cat:"battle",
 pt:{desc:"Aumenta o Dano de Arma em 1.2x",drop:"Baú no labirinto do Palácio"},
 en:{desc:"Increases Gun Damage by 1.2x",drop:"Chest in the Palace labyrinth"},
 icon:"gilded_sidearm.png"
},
{rarity:"rare", name:"Grimberry", cat:"status",
 pt:{desc:"Uma fruta azeda e cruel que arde ao descer, temperando a agressividade bruta.",note:"Diminui o [013]ATK TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"A tart, mean little berry that stings on the way down, tempering raw aggression.",note:"Decreases [013]ATK TV[000] by 10",drop:"Phase Shop"},
 icon:"grimberry.png"
},
{rarity:"rare", name:"Hushmelon", cat:"status",
 pt:{desc:"Macia e silenciosa, suaviza os sentidos e reduz sua guarda.",note:"Diminui o [013]SP.DEF TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Cushioned and quiet, it softens the senses and dulls your guard.",note:"Decreases [013]SP.DEF TV[000] by 10",drop:"Phase Shop"},
 icon:"hushmelon.png"
},
{rarity:"rare", name:"Imperfect Materials", cat:"misc",
 pt:{desc:"Fornecidos por guerreiros poderosos, usados para criar Animons ainda mais fortes.",drop:"Derrotando Warrior Bug Jr e Green Alien"},
 en:{desc:"Provided by strong warriors, used to create even stronger Animons.",drop:"Defeating Warrior Bug Jr and Green Alien"}
},
{rarity:"rare", name:"Mindapple", cat:"status",
 pt:{desc:"Uma fruta amarga que dizem despertar inspiração em batalha!",note:"Aumenta o [013]SP.ATK TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"A bitter fruit said to spark inspiration in battle!",note:"Increases [013]SP.ATK TV[000] by 10",drop:"Phase Shop"},
 icon:"mindapple.png"
},
{rarity:"rare", name:"Rocky Helmet", cat:"battle",
 pt:{desc:"Reflete de volta ao atacante um dano equivalente a 1/12 do dano causado.",drop:"???"},
 en:{desc:"Reflects back damage done by the attacker equal to 1/12th of damage dealt.",drop:"???"},
 icon:"rocky_helmet.png"
},
{rarity:"uncommon", name:"S-Potion", cat:"medical",
 pt:{desc:"Uma versão aprimorada da C-Potion.",drop:"Lojas"},
 en:{desc:"An upgraded version of the C-Potion.",drop:"Shops"}
},
{rarity:"rare", name:"Seismic Buckler", cat:"battle",
 pt:{desc:"Reduz o dano do tipo Earth em 1.2x",drop:"Baú no Palácio"},
 en:{desc:"Reduces Earth damage by 1.2x",drop:"Chest in the Palace"},
 icon:"seismic_buckler.png"
},
{rarity:"common", name:"Smoke Bomb", cat:"misc",
 pt:{desc:"Este item possui a habilidade de te teleportar para a sua última visita a uma anistation!",drop:"Lojas"},
 en:{desc:"This item has the ability to teleport you to your last anistation visit!",drop:"Shops"},
 icon:"smoke_bomb.png"
},
{rarity:"rare", name:"Stonefruit", cat:"status",
 pt:{desc:"Pesada e densa. Comê-la faz você se sentir como uma parede.",note:"Aumenta o [013]DEF TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Heavy and dense. Eating it makes you feel like a wall.",note:"Decreases [013]DEF TV[000] by 10",drop:"Phase Shop"}
},
{rarity:"rare", name:"Strong Axe", cat:"battle",
 pt:{desc:"Ataques aumentam o dano em 1.2x",drop:"Derrotando o Animon Axe Man."},
 en:{desc:"Attacks increase damage by 1.2x",drop:"Defeating the Axe Man Animon."},
 icon:"strong_axe.png"
},
{rarity:"rare", name:"Warrior Essence", cat:"misc",
 pt:{desc:"Fornecida por guerreiros poderosos, usados para criar Animons ainda mais fortes.",drop:"Derrote Warrior Bug Jr ou Derrote Animons do Saiyan Event"},
 en:{desc:"Provided by strong warriors, used to create even stronger Animons.",drop:"Defeat Warrior Bug Jr or defeat Animons from the Saiyan Event"}
},
{rarity:"rare", name:"Weighted Clothes", cat:"battle",
 pt:{desc:"Dobra a quantidade de TVs ganhas após derrotar um oponente.",drop:"Fighter Crate"},
 en:{desc:"Doubles the amount of TVs gained after defeating an opponent.",drop:"Fighter Crate"},
 icon:"weighted_clothes.png"
},
{rarity:"rare", name:"Wispmelon", cat:"status",
 pt:{desc:"Suave e reconfortante, este melão acalma e protege a alma!",note:"Aumenta o [013]SP.DEF TV[000] em 10",drop:"Loja de Fase"},
 en:{desc:"Soothing and soft, this melon calms and shields the soul!",note:"Increase the [013]SP.DEF TV[000] by 10",drop:"Phase Shop"}
},
{rarity:"uncommon", name:"Wolf Fang", cat:"misc",
 pt:{desc:"Uma presa elegante e extremamente afiada de um lobo formidável, um claro testemunho da natureza selvagem indomável.",drop:"Derrotando Battle Wolf ou Teen Battle Wolf"},
 en:{desc:"A sleek, razor-sharp fang from a formidable wolf, a stark testament to the untamed wild.",drop:"Defeating Battle Wolf or Teen Battle Wolf"}
},
{rarity:"common", name:"Cloth Rags", cat:"misc",
 pt:{desc:"Alguns trapos usados por bandidos... parecem bem inúteis para mim.",drop:"Derrotando o Animon Bandit"},
 en:{desc:"Some rags worn by bandits... looks pretty useless to me.",drop:"Defeating the Bandit Animon"}
},
{rarity:"uncommon", name:"Scarf", cat:"misc",
 pt:{desc:"[Sem Descrição]",drop:"Derrotando o Animon Wolfman"},
 en:{desc:"[No Description]",drop:"Defeating the Wolfman Animon"}
},
{rarity:"common", name:"Shell Casings", cat:"misc",
 pt:{desc:"Parece ser algum tipo de munição usada pela Marinha! Também bem inútil.",drop:"Lojas"},
 en:{desc:"Seems to be some sort of ammo used by the Marines! Also pretty useless.",drop:"Shops"}
},
{rarity:"uncommon", name:"Wolf-Fang", cat:"misc",
 pt:{desc:"Chance de drop ao derrotar Battle Wolf.",drop:"Derrotando Battle Wolf"},
 en:{desc:"Chance to drop from Battle Wolf.",drop:"Defeating Battle Wolf"}
},
{rarity:"rare", name:"Fighter Sash", cat:"battle",
 pt:{desc:"Fighter Sash! Conhecida por aumentar o dano de habilidades do atributo ki.",drop:"Fighter Crate"},
 en:{desc:"Fighter Sash! Known to increase damage of ki-attribute abilities.",drop:"Fighter Crate"},
 icon:"fighter_sash.png"
},
{rarity:"epic", name:"Beast Talisman", cat:"battle",
 pt:{desc:"Um talismã gravado em carmesim que, ao ser usado no Animon escolhido com Fox Spirit, desperta sua forma Beast e libera um poder adormecido.",drop:"Bandit Crate"},
 en:{desc:"A crimson-etched talisman that, when used on its chosen Animon with Fox Spirit, awakens their Beast form and unleashes dormant power.",drop:"Bandit Crate"},
 icon:"beast_talisman.png"
},
{rarity:"epic", name:"Tempest Quills", cat:"evolution",
 pt:{desc:"Duas penas escuras e resistentes, amarradas juntas, impregnadas com a força de uma tempestade furiosa.",drop:"Derrotando Animons do tipo [012]Wind[000]."},
 en:{desc:"Two dark, sturdy feathers tied together, infused with the might of a raging storm.",drop:"Defeating [012]Wind-type[000] Animons."},
 icon:"tempest_quills.png"
},
{rarity:"epic", name:"Demonic Blade", cat:"battle",
 pt:{desc:"A Lâmina Demoníaca, envolta em mistério e trevas, é uma arma que prospera no calor da batalha!",note:"Derrote Animons para aumentar o dano das habilidades de espadachim! [1.2x-1.8x]",drop:"Fishing Crate"},
 en:{desc:"The Demonic Blade, shrouded in mystery and darkness, is a weapon that thrives on the heat of battle! ",note:"Defeat Animons to increase the damage of your swordsman skills! [1.2x-1.8x]",drop:"Fishing Crate"},
 icon:"demonic_blade.png"
},
{rarity:"epic", name:"Mysterious Egg", cat:"key",
 pt:{desc:"Um ovo misterioso e enigmático...",drop:"Quest em Great Plains"},
 en:{desc:"A mysterious and omincus egg...",drop:"Quest in Great Plains"},
 icon:"mysterious_egg.png"
},
{rarity:"uncommon", name:"Antidote", cat:"medical",
 pt:{desc:"Tratamento para veneno! Aplique no seu Animon!",note:"Serve para retirar [006]Veneno[000] do Animon.",drop:"Lojas"},
 en:{desc:"Treatment for poison! Apply it on your Animon!",note:"Cures [006]Poison[000] status.",drop:"Shops"},
 icon:"antidote.png" 
},
{rarity:"common", name:"Missing Shipments", cat:"misc",
 pt:{desc:"Restos desaparecidos! Por algum motivo, os alienígenas selvagens são atraídos por isso.",drop:"Derrotando o Animon Alien."},
 en:{desc:"Missing scraps! For some reason the wild aliens are attracted to this.",drop:"Defeating the Animon Alien."},
 icon:"missing_shipments.png"
},
{rarity:"uncommon", name:"Shadow Bone", cat:"evolution",
 pt:{desc:"[Sem Descrição ainda]",drop:"???"},
 en:{desc:"[No description yet]",drop:"???"},
 icon:"shadow_bone.png"
},
{rarity:"uncommon", name:"Storm Battery", cat:"battle",
 pt:{desc:"Uma bateria que absorve eletricidade estática do ar, aumentando o poder dos golpes do tipo Elétrico!",drop:"Loja em Capsule City"},
 en:{desc:"A battery that absorbs static electricity from the air, boosting the power of Electric-type moves!",drop:"Shop in Capsule City"},
 icon:"storm_battery.png"
},
{rarity:"epic", name:"Abyssal Eye", cat:"evolution",
 pt:{desc:"Um olho grande e ameaçador, com um olhar penetrante, pulsando com energia malévola.",drop:"Derrotando Animons do tipo [012]Demon[000]."},
 en:{desc:"A large, ominous eye with a piercing gaze, pulsing with malevolent energy.",drop:"Defeating [012]Demon-type[000] Animons."},
 icon:"abyssal_eye.png"
},
{rarity:"rare", name:"Merciful Blow Scroll", cat:"scroll",
 pt:{desc:"Uma técnica misericordiosa, que só pode ser aprendida por espadachins específicos.",note:"Aprende o ataque Merciful Blow, que ao atacar, impede o alvo de ser derrotado. O alvo fica com pelo menos 1 de HP.",drop:"15k na Loja em Capsule City ou Highstar Base Crate."},
 en:{desc:"A merciful technique, can only be learned by specific swordsman.",note:"Learn the Merciful Blow attack, which, when used, prevents the target from being defeated. The target is left with at least 1 HP.",drop:"15k in Shop in Capsule City or Highstar Base Crate."},
 icon:"merciful_blow_scroll.png"
},
{rarity:"rare", name:"Storm Crystal", cat:"evolution",
 pt:{desc:"Um cristal roxo mais escuro com uma tempestade mais intensa em seu interior, crepitando com poderosos raios.",drop:"Derrotando Animons do tipo [012]Lighting[000]."},
 en:{desc:"A deeper purple crystal with a more intense storm raging within, crackling with powerful bolts of lightning.",drop:"Defeating [012]Lightning-type[000] Animon."},
 icon:"storm_crystal.png"
},
{rarity:"rare", name:"Earth Blocks", cat:"evolution",
 pt:{desc:"Blocos densos de terra comprimida, impregnados de energia elemental.",drop:"Derrotando Animons do tipo [012]Earth[000]."},
 en:{desc:"Dense blocks of compressed earth, infused with elemental energy.",drop:"Defeating [012]Earth-type[000] Animon."},
 icon:"earth_blocks.png" 
},
{rarity:"epic", name:"Ancient Stone", cat:"evolution",
 pt:{desc:"Pedras antigas e robustas que guardam o poder do núcleo da Terra.",drop:"Derrotando Animons do tipo [012]Earth[000]."},
 en:{desc:"Sturdy, ancient stones that hold the power of the earth's core.",drop:"Defeating [012]Earth-type[000] Animon."},
 icon:"ancient_stone.png"
}
];
