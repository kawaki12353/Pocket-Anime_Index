const traits = {
    "Pirates Resolve": {
        desc_pt: "Aumenta os atributos de [002]Ataque[000] e [002]Defesa[000] do personagem em [002][+1][000] estágio quando seu HP cai abaixo de 50%.",
        desc_en: "Increases the character's [002]Attack[000] and [002]Defense[000] Stats by [002][+1][000] stage when their HP falls below 50%."
    },
    "Adventurous Spirit": {
        desc_pt: "Aumenta a [002]SPD [+1][000] ao entrar em batalha contra um oponente de nível superior.",
        desc_en: "Increase [002]SPD [+1][000] when entering battle against a higher-leveled opponent."
    },
    "Shock Immunity": {
        desc_pt: "Imunidade a todos os golpes do tipo Lightning e à [008]paralisia[000].",
        desc_en: "Immunity to all Lightning-type moves and being [008]paralyzed[000]."
    },
    "Rubber Resilience ": {
        desc_pt: "Imunidade a golpes do tipo Lightning e recebe 10% à menos de dano de ataques físicos.",
        desc_en: "Immunity to lightning-type moves and take 10% less damage from physical-attacks"
    },
    "Exorcist": {
        desc_pt: "Ataques contra criaturas do tipo Soul e do tipo Demon causam 20% a mais de dano.",
        desc_en: "Attacks against Soul-types and Demon-types have 20% increased damage."
    },
    "Inner Focus": {
        desc_pt: "Quando reduzido à metade do HP, aumenta a [002]Accuracy [+2][000].",
        desc_en: "When lowered to half HP increase [002]Accuracy [+2][000]."
    },
    "Battle Adaptability": {
        desc_pt: "Tem 15% de chance de aumentar [002]DEF [+1][000] e [002]SP.DEF [+1][000] após sobreviver a um ataque.",
        desc_en: "Has a 15% chance of increasing [002]DEF [+1][000] and [002]SP.DEF [+1][000] after surviving an attack."
    },
    "Number One": {
        desc_pt: "Quando a vida estiver abaixo da metade, receba um bônus de dano de 1,5x para habilidades únicas.",
        desc_en: "When below half HP gain 1.5x damage boost to Unique abilities."
    },
    "Scaredy Cat": {
        desc_pt: "Recue se sua vida cair abaixo de 40%.",
        desc_en: "Retreat if you drop below 40% HP."
    },
    "Lightning Affinity": {
        desc_pt: "Ao usar um movimento do tipo Lightning, há 25% de chance de aumentar seu dano em 1.2x.",
        desc_en: "When using a Lightning-Type move have a 25% to increase its damage 1.2X."
    },
    "Fire Affinity": {
        desc_pt: "Ao usar um movimento do tipo Fire, há 25% de chance de aumentar seu dano em 1.2x.",
        desc_en: "When using a Fire-Type move have a 25% to increase its damage 1.2X."
    },
    "Vengeful Eyes": {
        desc_pt: "Aumenta a [002]Accuracy [+1][000] e a [002]Evasão [+1][000] ao ser invocado.",
        desc_en: "Increases [002]Accuracy [+1][000] and [002]Evasion [+1][000] on summon."
    },
    "Eternal Eyes": {
        desc_pt: "Ao conjurar Chama Negra em um alvo, inflija ruína por 4 turnos. Aumenta a [002]Accuracy [+1][000] e a [002]Evasão [+1][000] ao ser invocado",
        desc_en: "If casting Black Flame on a target, inflict doom for 4 turns. Increases [002]Accuracy [+1][000] and [002]Evasion [+1][000] on summon."
    },
    "Sadist": {
        desc_pt: "Causa 1.2x de dano ao atacar um alvo com uma condição de status.",
        desc_en: "Deal 1.2x damage when attacking a target with a status condition."
    },
    "Fearsome": {
        desc_pt: "Diminui o [001]ATK [-1][000] de todos os inimigos ao entrar em batalha.",
        desc_en: "Decrease the [001]ATK [-1][000] of all enemies on summon."
    },
    "Major Threat": {
        desc_pt: "Inimigos gastam o dobro de PP ao usar movimentos que têm o usuário como alvo.",
        desc_en: "Enemies spend twice as much PP when using moves that target the user."
    },
    "Legendary Warrior": {
        desc_pt: "Turnos consecutivos acertando ataques aumentam [002]ATK [+1][000] ou [002]SP.ATK [+1][000], até um máximo de +3. Contra animons do atributo Saijan aumenta +2 por turno.",
        desc_en: "Consecutive turns landing attacks increase [002]ATK [+1][000] or [002]SP.ATK [+1][000], up to a maximum of +3. This increases to +2 per turn against Saijan-attribute animon."
    },
    "Fox Spirit": {
        desc_pt: "Quando a vida estiver abaixo de 40%, entre em fúria, ganhe [002]ATK [+2][000], [002]SP.ATK [+2][000] e [002]SPD [+2][000] e você estará em fúria. Após a transformação, [002]recupere 10%[000] da vida por 3 turnos.",
        desc_en: "When below 40% HP, go berserk, gain [002]ATK [+2][000], [002]SP.ATK [+2][000] and [002]SPD [+2][000], and you are berserk. After transforming, [002]heal 10%[000] HP for 3 turns."
    },
    "Ninjutsu Mastery": {
        desc_pt: "Usar habilidades do atributo chakra causa 1.2x à mais de dano.",
        desc_en: "Using chakra-attribute skills will have an increased 1.2x damage."
    },
    "Wind Affinity": {
        desc_pt: "Ao usar um movimento do tipo Wind, há 25% de chance de aumentar o dano em 1.2x.",
        desc_en: "When using a Wind-Type move have a 25% chance to increase its damage 1.2x."
    },
    "Consume": {
        desc_pt: "Após derrotar um inimigo, você [002]recupera 30%[000] do seu HP máximo.",
        desc_en: "After defeating an enemy [002]restore 30%[000] of your maximum HP."
    },
    "Fast Step": {
        desc_pt: "Ganhe [002]SPD [+1][000] ao entrar em batalha contra inimigos mais rápidos.",
        desc_en: "Gain [002]SPD [+1][000] when entering battle against faster enemies."
    },
    "Copycat": {
        desc_pt: "Usar o mesmo golpe que um alvo usou em você faz com que cause 25% a mais de dano.",
        desc_en: "Using the same move a target has used on you makes it deal 25% more damage."
    },
    "Confident": {
        desc_pt: "Quando um oponente tiver um de seus status reduzido, aumente seu [002]SPD[+1][000].",
        desc_en: "When an opponent has one of their stats lowered, increase your [002]SPD[+1][002]."
    },
    "Perfect": {
        desc_pt: "Se não for atingido por um golpe super efetivo, [002]cure 1/12[000] do HP naquele turno. Se for atingido por um golpe físico, ganhe [002]SPD[+1][000] uma vez por batalha.",
        desc_en: "If not hit by a super-effective move, [002]heal 1/12[000] that turn. If hit by a physical move, gain [002]SPD[+1][000] once per battle."
    },
    "Reincarnation": {
        desc_pt: "Se estiver afetado por uma condição de status ao final do turno, há 1/4 de chance de [002]recuperar 1/12[000] do HP e remover todas as condições de status.",
        desc_en: "If afflicted by a status condition at the end of a turn, there is a 1/4 chance to [002]recover 1/12th[000] HP and remove all status conditions."
    }
};