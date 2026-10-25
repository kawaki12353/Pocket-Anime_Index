const traits = {
    "Fist of the Wolf": {
        id: 78,
        desc_pt: "Aumenta a [002]SPD [+1][000] após acertar um Ataque de Lobo com sucesso.",
        desc_en: "Increase [002]SPD [+1][000] after landing a successful Wolf Attack."
    },
    "Looter": {
        id: 77,
        desc_pt: "Se não estiver segurando um item, há chance de roubar um de um alvo disponível.",
        desc_en: "If not holding an item, chance to steal one from an available target."
    },
    "Queen of the Giants": {
        id: 76,
        desc_pt: "Ganhe [002]HP [+1][000] ao entrar em batalha.",
        desc_en: "Gain [002]HP [+1][000] when entering battle."
    },
    "Four Leaf Fortune": {
        id: 75,
        desc_pt: "Chance de acerto crítico 4x ao usar habilidades com [013]atributo mágico[000].",
        desc_en: "4X Critical chance when using [013]Magical attribute[000] skills."
    },
    "Royal Swordplay": {
        id: 74,
        desc_pt: "Um [012]acerto crítico[000] no seu alvo reduz a [001]DEF [-1][000] dele.",
        desc_en: "[012]Critical[000] striking your target decreases their [001]DEF [-1][000]."
    },
    "Bomber Man": {
        id: 73,
        desc_pt: "15% de chance de explodir ao ser atingido por um [012]ataque físico[000]; isso causa dano equivalente a [012]1/8 [12,5%][000] do HP e aplica [003]queimadura[000].",
        desc_en: "15% chance to explode when hit by a [012]physical attack[000], this deal [012]1/8 [12.5%][000] HP damage and applies [003]burn[000]."
    },
    "Field Guardian": {
        id: 72,
        desc_pt: "Não afetado por riscos do campo.",
        desc_en: "Unaffected by field hazards."
    },
    "Gadgetry": {
        id: 71,
        desc_pt: "Os obstáculos que você coloca no campo são aplicados em todas as zonas inimigas.",
        desc_en: "Stage hazards you place on the field are put on all enemy zones."
    },
    "Marine's Grit": {
        id: 70,
        desc_pt: "Ataques contra o tipo [012]Dark[000] causam [002]20% mais dano[000].",
        desc_en: "Attacks against [012]Dark-types[000] have [002]20% increased damage[000]."
    },
    "Sand Logia": {
        id: 69,
        desc_pt: "Não pode ser atingido por golpes, a menos que sejam eficazes contra o tipo [012]Earth[000].",
        desc_en: "Can not be hit by moves unless they are effective against [012]Earth-type[000]"
    },
    "Prepared": {
        id: 68,
        desc_pt: "Movimentos de status aumentarão a [002]Accuracy [+1][000].",
        desc_en: "Status moves have increased [002]ACCURACY [+1][000]."
    },
    "King of Snipers": {
        id: 67,
        desc_pt: "Aumento de [002]ACC [+2][000] em movimentos especiais.",
        desc_en: "Increased [002]ACC [+2][000] on special moves."
    },
    "Sharpshooter": {
        id: 66,
        desc_pt: "Usar um ataque especial com [013]atributo de atirador de elite[000] aumenta em 2x a chance de acerto crítico.",
        desc_en: "Using a special attack with a [013]marksman attribute[000] has increased 2X crit chance."
    },
    "Giant Sized": {
        id: 65,
        desc_pt: "Ao entrar em batalha, perde-se [001]EVASIVE [-1][000], mas ganha [002]HP [+2][000].",
        desc_en: "Entering battle lose [001]EVASIVE [-1][000] but gain [002]HP [+2][000]."
    },
    "Nearsighted": {
        id: 64,
        desc_pt: "Os ataques não atingirão mais de um alvo.",
        desc_en: "Attacks will not hit more than one target."
    },
    "Explosion Immunity": {
        id: 63,
        desc_pt: "Imune a todos os golpes com [013]atributo de explosão[000].",
        desc_en: "Immune to all [013]explosion-attribute[000] moves."
    },
    "Explosive Arts": {
        id: 62,
        desc_pt: "Enquanto o HP estiver acima de 50%, habilidades do [013]atributo Explosão[000] causam [002]+50% de dano[000]. A próxima habilidade utilizada após uma magia do tipo [012]Fire[000] falhará.",
        desc_en: "While above 50% HP, [013]Explosion-attribute[000] moves deal [002]+50% damage[000]. Your next skill used after a [012]Fire-type[000] spell will fail."
    },
    "Ice Affinity": {
        id: 61,
        desc_pt: "Ao usar um golpe do tipo [012]Ice[000], há 25% de chance de aumentar o dano em [002]1,2x[000].",
        desc_en: "When using a [012]Ice-Type[000] move have a 25% to increase its damage [002]1.2X[000]."
    },
    "Union Raid: Water and Ice": {
        id: 60,
        desc_pt: "Ao serem invocados na presença um do outro, a [012]Water Mage[000] e o [012]Ice Sculpture[000] ganham [002]SP.ATK [+1][000].",
        desc_en: "On summon in the presence of the other, [012]Water Mage[000] and [012]Ice Sculpture[000] will gain [002]SP.ATK [+1][000]."
    },
    "Slayerborn": {
        id: 59,
        desc_pt: "[013]Absorva [012]ataques especiais[000] do seu tipo correspondente, aumentando o [002]SP.ATK [+1][000] e o [002]ATQ [+1][000] em vez de sofrer dano.",
        desc_en: "[013]Absorb [012]special attacks[000] of your matching type, raising [002]SP.ATK [+1][000] and [002]ATK [+1][000] instead of taking damage."
    },
    "Battle Hardened": {
        id: 58,
        desc_pt: "Ser atingido pelo mesmo golpe duas vezes seguidas faz com que ele cause [001]20% menos dano[000].",
        desc_en: "Getting hit by the same move two turns in a row makes it do [001]20% less damage[000]."
    },
    "Turtle School Finisher": {
        id: 57,
        desc_pt: "Um inimigo atingido por uma [012]habilidade[000] do [013]Atributo Onda de Energia[000] e que ficar com [012]menos de 5% de vida[000] será [001]executado[000].",
        desc_en: "An enemy hit by an [013]energy wave-attribute [012]skill[000] and [012]left within 5% HP[000] will be [001]executed[000]."
    },
    "Martial Artist": {
        id: 56,
        desc_pt: "Quando o Animon usa golpes físicos do tipo [012]Lutador[000], sua [002]Accuracy [+1][000] aumenta.",
        desc_en: "When the Animon uses [012]Fighting-type[000] physical moves they have increased [002]ACCURACY [+1][000]."
    },
    "Clumsy": {
        id: 55,
        desc_pt: "Segurar um item tem [012]25% de chance[000] de diminuir a [001]SPD [-1][000] a cada turno.",
        desc_en: "Holding an item has a [012]25% chance[000] to decrease [001]SPD [-1][000] every turn."
    },
    "Static": {
        id: 54,
        desc_pt: "Possui [012]20%[000] de chance de [008]paralisar[000] um oponente ao entrar em contato com você.",
        desc_en: "Has a [012]20%[000] chance to [008]paralyze[000] an opponent when they make contact with you."
    },
    "Indecisive": {
        id: 53,
        desc_pt: "Atingir um inimigo diferente daquele que você atingiu anteriormente causará [001]dano reduzido[000].",
        desc_en: "Hitting a different enemy from the one you previously hit will deal [001]decreased damage[000]."
    },
    "Pint-Sized": {
        id: 52,
        desc_pt: "Os ataques físicos sempre terão [012]15%[000] de [012]chance de errar[000].",
        desc_en: "Physical Attacks will always have a [012]15% chance to miss[000]."
    },
    "Personal Bodyguard": {
        id: 51,
        desc_pt: "Ao ver, pela primeira vez, um aliado cair abaixo de [012]30% de HP[000], ganha [002]SPD [+2][000].",
        desc_en: "The first time seeing an all fall below [012]30% HP[000] gain [002]SPD [+2][000]."
    },
    "Magical Empowerment": {
        id: 50,
        desc_pt: "Usar um ataque especial com [013]atributo mágico[000] tem 20% de chance de causar um [012]acerto crítico[000].",
        desc_en: "Using a special attack with [013]magical attribute[000] has a 20% chance of [012]critically striking[000]."
    },
    "Fraud": {
        id: 49,
        desc_pt: "Não consegue atingir os outros com golpes Super Efetivos.",
        desc_en: "Can not hit others super-effectively."
    },
    "Traitless": {
        id: 48,
        desc_pt: "Absolutamente nada.",
        desc_en: "Absolutely nothing."
    },
    "Bruise Easily": {
        id: 47,
        desc_pt: "Diminui a [001]DEF [-1][000] ao ser atingido mais de uma vez em batalha.",
        desc_en: "Decrease [001]DEF [-1][000] when hit more than once in battle."
    },
    "Natural Intake": {
        id: 46,
        desc_pt: "A cada turno em que você não ataca, aumenta sua [002]SP.DEF [+1][000].",
        desc_en: "Each turn that you don't attack increase your [002]SP.DEF [+1][000]."
    },
    "Water Affinity": {
        id: 45,
        desc_pt: "Ao usar um golpe do tipo [012]Water[000], há 25% de chance de aumentar o dano em [002]1,2x[000].",
        desc_en: "When using a [012]Water-Type[000] move have a 25% to increase its damage [002]1.2X[000]."
    },
    "Sharkskin": {
        id: 44,
        desc_pt: "Acertar um alvo com ataques físicos tem 20% de chance de [001]reduzir[000] aleatoriamente o [013]PP[000] de uma de suas habilidades em 1.",
        desc_en: "Hitting a target with physical attacks has a 20% chance to randomly [001]lower[000] the [013]PP[000] of one of their skills by 1.'s moves by 1."
    },
    "Unwavering Spirit": {
        id: 43,
        desc_pt: "Não pode ser [004]confundido[000] - em vez disso, ganhe [002]SP.DEF [+1][000].",
        desc_en: "Can not be [004]confused[000] - instead gain [002]SP.DEF [+1][000]."
    },
    "Dizzy Retaliation": {
        id: 42,
        desc_pt: "Aumenta o [002]ATQ [+1][000] quando [004]confuso[000].",
        desc_en: "Increases [002]ATK [+1][000] when [004]confused[000]."
    },
    "Hard Worker": {
        id: 41,
        desc_pt: "Aumentar os níveis de atributos [012]removerá[000] as [012]condições de status[000].",
        desc_en: "Gaining stat stages will [012]remove status conditions[000]."
    },
    "Inner Gates": {
        id: 40,
        desc_pt: "Usar ataques físicos desbloqueia seus portões internos. A cada estágio, reduza [001]SP.DEF [-1][000] e [001]DEF [-1][000] enquanto aumenta [002]ATK [+1][000] e [002]SPD [+1][000]. No nível +5, você perde [001]1/8 HP[000] a cada turno.",
        desc_en: "Using physical attacks unlocks your inner gates. At every stage, decrease [001]SP.DEF [-1][000] and [001]DEF [-1][000] while increasing [002]ATK [+1][000] and [002]SPD [+1][000]. At +5, you lose [001]1/8 HP[000] every turn."
    },
    "Bloodlust": {
        id: 39,
        desc_pt: "Ao sofrer dano, há uma chance de ganhar [002]SP.ATK [+1][000] ou [002]ATK [+1][000], dependendo de qual for maior.",
        desc_en: "When taking damage, a chance to gain [002]SP.ATK [+1][000] or [002]ATK [+1][000], depending on which is higher."
    },
    "Earth Affinity": {
        id: 38,
        desc_pt: "Ao usar um movimento do tipo [012]Earth[000], há 25% de chance de aumentar seu dano em [002]1.2x[000].",
        desc_en: "When using a [012]Earth-Type[000] move have a 25% to increase its damage [002]1.2X[000]."
    },
    "Sand Shroud": {
        id: 37,
        desc_pt: "Ativa a [012]Tempestade de Areia[000] ao ser Invocado.",
        desc_en: "Activates [012]Sandstorm[000] on Summon."
    },
    "Sand Shell": {
        id: 36,
        desc_pt: "Ao final de cada turno durante uma tempestade de areia, ganhe [002]DEF[+1][000].",
        desc_en: "At the end of every turn during a sandstorm gain [002]DEF [+1][000]."
    },
    "Magical Protection": {
        id: 35,
        desc_pt: "Resista a 25% do dano causado por ataques de [013]atributo mágico[000].",
        desc_en: "Resist 25% of damage dealt by [013]magical-attribute[000] attacks."
    },
    "Danger Sense": {
        id: 34,
        desc_pt: "Na primeira vez que um oponente obtiver um aumento de atributo, ganhe [002]Evasão [+1][000].",
        desc_en: "The first time an opponent has a stat increase, gain [002]EVA [+1][000]"
    },
    "Three Sword Style": {
        id: 33,
        desc_pt: "A chance de acerto crítico é 6x maior ao usar uma habilidade com o [013]atributo de três espadas[000].",
        desc_en: "Critical chance is 6X if using a [013]three-sword attribute[000] skill."
    },
    "Blademaster": {
        id: 32,
        desc_pt: "Usar um ataque físico com o [013]atributo de espadachim[000] dobra a chance de acerto crítico.",
        desc_en: "Using a physical attack with a [013]swordsman attribute[000] has increased 2X crit chance."
    },
    "Hunter": {
        id: 31,
        desc_pt: "Chance crítica aumentada em 1,5x contra alvos com menos de [012]33% de vida[000].",
        desc_en: "Increased 1.5X critical chance against those below [012]33% health[000]."
    },
    "Primal Power": {
        id: 30,
        desc_pt: "Quando a saúde estiver [012]abaixo de 50%[000], entre em fúria ganhando [002]DEF [+1][000], [002]SP.DEF [+1][000], [002]ATK [+1][000], [002]SP.ATK [+1][000].",
        desc_en: "When [012]below 50% health[000], go berserk gaining [002]DEF [+1][000], [002]SP.DEF [+1][000], [002]ATK [+1][000], [002]SP.ATK [+1][000]."
    },
    "Elastic Body": {
        id: 29,
        desc_pt: "Aumenta a [002]evasão[000] na Invocação em [002][+1][000] estágio, tornando mais difícil para os oponentes acertarem ataques.",
        desc_en: "Increases [002]evasion[000] on Summon by [002][+1][000] stage, making it harder for opponents to land attacks."
    },
    "Regenerative Aura": {
        id: 28,
        desc_pt: "[002]Regenera 1/16 [6,25%][000] de HP no final de cada rodada.",
        desc_en: "[002]Regenerate 1/16th [6.25%][000] HP at the end of every round."
    },
    "Mystic Absorption": {
        id: 27,
        desc_pt: "Ao derrotar um alvo, você ganha o bônus de atributo mais alto dele.",
        desc_en: "When defeating a target gain their highest stat bonus."
    },
    "Pirate's Resolve": {
        id: 26,
        desc_pt: "Aumenta os atributos de [002]Ataque[000] e [002]Defesa[000] do personagem em [002][+1][000] estágio quando seu HP cai [012]abaixo de 50%[000].",
        desc_en: "Increases the character's [002]Attack[000] and [002]Defense[000] Stats by [002][+1][000] stage when their HP falls [012]below 50%[000]."
    },
    "Adventurous Spirit": {
        id: 25,
        desc_pt: "Aumenta a [002]SPD [+1][000] ao entrar em batalha contra um oponente de nível superior.",
        desc_en: "Increase [002]SPD [+1][000] when entering battle against a higher-leveled opponent."
    },
    "Shock Immunity": {
        id: 24,
        desc_pt: "Imunidade a todos os golpes do tipo [012]Lightning[000] e à [008]paralisia[000].",
        desc_en: "Immunity to all [012]Lightning-type[000] moves and being [008]paralyzed[000]."
    },
    "Rubber Resilience": {
        id: 23,
        desc_pt: "Imunidade a golpes do tipo [012]Lightning[000] e recebe 10% à menos de dano de ataques físicos.",
        desc_en: "Immunity to [012]Lightning-type[000] moves and take 10% less damage from physical-attacks."
    },
    "Exorcist": {
        id: 22,
        desc_pt: "Ataques contra criaturas do tipo [012]Soul[000] e do tipo [012]Demon[000] causam [002]20%[000] a [002]mais de dano[000].",
        desc_en: "Attacks against [012]Soul-types[000] and [012]Demon-types[000] have [002]20% increased damage[000]."
    },
    "Inner Focus": {
        id: 21,
        desc_pt: "Quando reduzido à metade do HP, aumenta a [002]Accuracy [+2][000].",
        desc_en: "When lowered to half HP increase [002]Accuracy [+2][000]."
    },
    "Battle Adaptability": {
        id: 20,
        desc_pt: "Tem 15% de chance de aumentar [002]DEF [+1][000] e [002]SP.DEF [+1][000] após sobreviver a um ataque.",
        desc_en: "Has a 15% chance of increasing [002]DEF [+1][000] and [002]SP.DEF [+1][000] after surviving an attack."
    },
    "Number One": {
        id: 19,
        desc_pt: "Quando a vida estiver abaixo da metade, receba um bônus de dano de [002]1,5x[000] para habilidades únicas.",
        desc_en: "When below half HP gain [002]1.5x[000] damage boost to Unique abilities."
    },
    "Scaredy Cat": {
        id: 18,
        desc_pt: "Recue se sua vida cair [012]abaixo de 40%[000].",
        desc_en: "Retreat if you drop below [012]40% HP[000]."
    },
    "Lightning Affinity": {
        id: 17,
        desc_pt: "Ao usar um movimento do tipo [012]Lightning[000], há 25% de chance de aumentar seu dano em [002]1.2x[000].",
        desc_en: "When using a [012]Lightning-Type[000] move have a 25% to increase its damage [002]1.2X[000]."
    },
    "Fire Affinity": {
        id: 16,
        desc_pt: "Ao usar um movimento do tipo [012]Fire[000], há 25% de chance de aumentar seu dano em [002]1.2x[000].",
        desc_en: "When using a [012]Fire-Type[000] move have a 25% to increase its damage [002]1.2X[000]."
    },
    "Vengeful Eyes": {
        id: 15,
        desc_pt: "Aumenta a [002]Accuracy [+1][000] e a [002]Evasão [+1][000] ao ser invocado.",
        desc_en: "Increases [002]Accuracy [+1][000] and [002]Evasion [+1][000] on summon."
    },
    "Eternal Eyes": {
        id: 14,
        desc_pt: "Ao conjurar Chama Negra em um alvo, inflija ruína por 4 turnos. Aumenta a [002]Accuracy [+1][000] e a [002]Evasão [+1][000] ao ser invocado",
        desc_en: "If casting Black Flame on a target, inflict doom for 4 turns. Increases [002]Accuracy [+1][000] and [002]Evasion [+1][000] on summon."
    },
    "Sadist": {
        id: 13,
        desc_pt: "Causa [002]1.2x[000] de dano ao atacar um alvo com uma [012]condição de status[000].",
        desc_en: "Deal [002]1.2X[000] damage when attacking a target with a [012]status condition[000]."
    },
    "Fearsome": {
        id: 12,
        desc_pt: "Diminui o [001]ATK [-1][000] de todos os inimigos ao entrar em batalha.",
        desc_en: "Decrease the [001]ATK [-1][000] of all enemies on summon."
    },
    "Major Threat": {
        id: 11,
        desc_pt: "Inimigos [012]gastam o dobro[000] de [013]PP[000] ao usar movimentos que têm o usuário como alvo.",
        desc_en: "Enemies [012]spend twice[000] as much [013]PP[000] when using moves that target the user."
    },
    "Legendary Warrior": {
        id: 10,
        desc_pt: "Turnos consecutivos acertando ataques aumentam [002]ATK [+1][000] ou [002]SP.ATK [+1][000], até um máximo de +3. Contra animons do [013]atributo Saijan[000] aumenta +2 por turno.",
        desc_en: "Consecutive turns landing attacks increase [002]ATK [+1][000] or [002]SP.ATK [+1][000], up to a maximum of +3. This increases to +2 per turn against [013]Saijan-attribute[000] animon."
    },
    "Fox Spirit": {
        id: 9,
        desc_pt: "Quando a vida estiver abaixo de [012]40%[000], entre em fúria, ganhe [002]ATK [+2][000], [002]SP.ATK [+2][000] e [002]SPD [+2][000] e você estará em fúria. Após a transformação, [002]recupere 10%[000] da vida por 3 turnos.",
        desc_en: "When below [012]40%[000] HP, go berserk, gain [002]ATK [+2][000], [002]SP.ATK [+2][000] and [002]SPD [+2][000], and you are berserk. After transforming, [002]heal 10%[000] HP for 3 turns."
    },
    "Ninjutsu Mastery": {
        id: 8,
        desc_pt: "Usar habilidades do [013]atributo Chakra[000] causa [002]1.2x[000] à mais de dano.",
        desc_en: "Using [013]Chakra-attribute[000] skills will have an increased [002]1.2x[000] damage."
    },
    "Wind Affinity": {
        id: 7,
        desc_pt: "Ao usar um movimento do tipo [012]Wind[000], há 25% de chance de aumentar o dano em [002]1.2x[000].",
        desc_en: "When using a [012]Wind-Type[000] move have a 25% chance to increase its damage [002]1.2X[000]."
    },
    "Consume": {
        id: 6,
        desc_pt: "Após derrotar um inimigo, você [002]recupera 30%[000] do seu HP máximo.",
        desc_en: "After defeating an enemy [002]restore 30%[000] of your maximum HP."
    },
    "Fast Step": {
        id: 5,
        desc_pt: "Ganhe [002]SPD [+1][000] ao entrar em batalha contra inimigos mais rápidos.",
        desc_en: "Gain [002]SPD [+1][000] when entering battle against faster enemies."
    },
    "Copycat": {
        id: 4,
        desc_pt: "Usar o mesmo golpe que um alvo usou em você faz com que cause [002]25%[000] a [002]mais de dano[000].",
        desc_en: "Using the same move a target has used on you makes it deal [002]25% more damage[000]."
    },
    "Confident": {
        id: 3,
        desc_pt: "Quando um oponente tiver um de seus status reduzido, aumente seu [002]SPD [+1][000].",
        desc_en: "When an opponent has one of their stats lowered, increase your [002]SPD [+1][000]."
    },
    "Perfect": {
        id: 2,
        desc_pt: "Se não for atingido por um golpe super efetivo, [002]cure 1/12[000] do HP naquele turno. Se for atingido por um golpe físico, ganhe [002]SPD [+1][000] uma vez por batalha.",
        desc_en: "If not hit by a super-effective move, [002]heal 1/12[000] that turn. If hit by a physical move, gain [002]SPD [+1][000] once per battle."
    },
    "Reincarnation": {
        id: 1,
        desc_pt: "Se estiver afetado por uma condição de status ao final do turno, há 1/4 de chance de [002]recuperar 1/12[000] do HP e remover todas as condições de status.",
        desc_en: "If afflicted by a status condition at the end of a turn, there is a 1/4 chance to [002]recover 1/12th[000] HP and remove all status conditions."
    }
};
