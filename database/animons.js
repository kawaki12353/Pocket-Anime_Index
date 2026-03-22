const animons = [
  { id: 1, name: "Ruffy", type: "Fighting", sprite: "assets/animons-icon/ruffy.png", stats: { hp: 46, atk: 65, def: 55, spAtk: 35, spDef: 44, spd: 55 }, areas: ["0000"],
    traits: [
      { name: "Pirates Resolve", chance: "100%" },
      { name: "Adventurous Spirit", chance: "75%" },
      { name: "Shock Immunity", chance: "50%" }],
    desc_pt: "Eu vou ser o Rei dos Piratas!",
    desc_en: "I'm gonna be King of the Pirates!",
    anime: { name: "Luffy", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Punch" },
      { level: 1, name: "Rubber Balloon" },
      { level: 5, name: "Rubber Pistol" },
      { level: 8, name: "Fighting Spirit" },
      { level: 10, name: "Rapid Punches" },
      { level: 15, name: "Bazooka" },
      { level: 18, name: "Phase Two" },
      { level: 21, name: "Armament" },
      { level: 24, name: "Headbutt" }
    ]
  },
  { id: 1.01, name: "TS Ruffy", type: "Fighting", sprite: "assets/animons-icon/ts_ruffy.png", stats: { hp: 62, atk: 93, def: 70, spAtk: 25, spDef: 52, spd: 75 },
    traits: [
      { name: "Pirates Resolve", chance: "100%" },
      { name: "Adventurous Spirit", chance: "75%" },
      { name: "Shock Immunity", chance: "50%" },
      { name: "Rubber Resilience", chance: "5%" }],
    desc_pt: "A pessoa mais livre do mundo é o Rei dos Piratas.",
    desc_en: "The most free person in the world is the King of the Pirates.",
    anime: { name: "Luffy", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Punch" },
      { level: 1, name: "Rubber Balloon" },
      { level: 5, name: "Rubber Pistol" },
      { level: 8, name: "Fighting Spirit" },
      { level: 10, name: "Rapid Punches" },
      { level: 15, name: "Bazooka" },
      { level: 18, name: "Phase Two" },
      { level: 21, name: "Armament" },
      { level: 24, name: "Headbutt" }
    ]
  },
  { id: 2, name: "Mystic Bojin", type: "Psychic", sprite: "assets/animons-icon/mystic_bojin.png", stats: { hp: 62, atk: 33, def: 52, spAtk: 70, spDef: 46, spd: 45 }, areas: ["0000"],
    traits: [
      { name: "Confident", chance: "100%" },
      { name: "Primal Power", chance: "50%" },
      { name: "Elastic Body", chance: "20%" },
      { name: "Regenerative Aura", chance: "10%" },
      { name: "Consume", chance: "10%" },
      { name: "Mystic Absorption", chance: "5%" }],
    desc_pt: "Hehe! Bojin te faz doces, e se você for malvado, Bojin te esmaga!",
    desc_en: "Hee Hee! Bojin make you candy, and if you bad, Bojin smash you!",
    anime: { name: "Majin Boo", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Energy Blast" }, 
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Psychic Blast" },
      { level: 10, name: "Candy Beam" },
      { level: 14, name: "Rest" },
      { level: 18, name: "Angry Explosion" },
      { level: 18, name: "Limb Regrowth" },
      { level: 21, name: "Demon Elbow" }
    ]
  },
  { id: 2.01, name: "Super Bojin", type: "Psychic", sprite: "assets/animons-icon/super_bojin.png", stats: { hp: 80, atk: 39, def: 67, spAtk: 90, spDef: 49, spd: 63 },
    traits: [
      { name: "Confident", chance: "100%" },
      { name: "Primal Power", chance: "20%" },
      { name: "Elastic Body", chance: "20%" },
      { name: "Regenerative Aura", chance: "15%" },
      { name: "Consume", chance: "10%" },
      { name: "Mystic Absorption", chance: "5%" }],
    desc_pt: "Bojin vai te matar.",
    desc_en: "Bojin make you dead.",
    anime: { name: "Super Boo", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Energy Blast" },
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Psychic Blast" },
      { level: 4, name: "Solar Flare" },
      { level: 6, name: "Vanishing Blow" },
      { level: 10, name: "Candy Beam" },
      { level: 12, name: "Drain Life" },
      { level: 14, name: "Rest" },
      { level: 18, name: "Angry Explosion" },
      { level: 24, name: "Limb Regrowth" },
      { level: 21, name: "Demon Elbow" }
    ]
  },
  { id: 3, name: "Sasken", type: "Fire", sprite: "assets/animons-icon/sasken.png", stats: { hp: 40, atk: 52, def: 43, spAtk: 60, spDef: 45, spd: 60 }, areas: ["0000"],
    traits: [
      { name: "Ninjutsu Mastery", chance: "100%" },
      { name: "Lightning Affinity", chance: "50%" },
      { name: "Fire Affinity", chance: "50%" },
      { name: "Vengeful Eyes", chance: "5%" }],
    desc_pt: "Não tenho interesse em fazer amigos. Meu único objetivo é fazer com que certo homem pague pelo que fez ao nosso clã.",
    desc_en: "I have no interest in making friends. My only goal is to make a certain man pay for what he did to our clan.",
    anime: { name: "Sasuke", anime:"Naruto" },
    movesList: [
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Kunai Barrage" },
      { level: 5, name: "Fireball" },
      { level: 7, name: "Substitution" },
      { level: 12, name: "Tiger's Barrage" },
      { level: 13, name: "Electric Strike" },
      { level: 15, name: "Vengeful Illusion" }
    ]
  },
  { id: 3.01, name: "TS Saskeh", type: ["Fire", "Lightning"], sprite: "assets/animons-icon/ts_saskeh.png", stats: { hp: 58, atk: 75, def: 53, spAtk: 87, spDef: 55, spd: 70 },
    traits: [
      { name: "Ninjutsu Mastery", chance: "100%" },
      { name: "Lightning Affinity", chance: "50%" },
      { name: "Fire Affinity", chance: "50%" },
      { name: "Vengeful Eyes", chance: "10%" },
      { name: "Eternal Eyes", chance: "5%" }],
    desc_pt: "Eu sou um vingador. Cortei todos os meus laços, eles só te enfraquecem.",
    desc_en: "I am an avenger. I have cut all my ties, they only make you weak.",
    anime: { name: "Sasuke", anime:"Naruto" },
    movesList: [
      { level: 0, name: "Lightning Spread" },
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Kunai Barrage" },
      { level: 5, name: "Fireball" },
      { level: 7, name: "Substitution" },
      { level: 12, name: "Tiger's Barrage" },
      { level: 13, name: "Electric Strike" },
      { level: 15, name: "Vengeful Illusion" },
      { level: 18, name: "Pheonix Fire Bomb" },
      { level: 21, name: "Lightning Spear" },
      { level: 24, name: "Heavenly Flame" }
    ]
  },
  { id: 4, name: "Isamu", type: "Neutral", sprite: "assets/animons-icon/isamu.png", stats: { hp: 45, atk: 54, def: 35, spAtk: 50, spDef: 45, spd: 71 }, areas: ["0000"],
    traits: [
      { name: "Exorcist", chance: "100%" },
      { name: "Inner Focus", chance: "100%" },
      { name: "Battle Adaptability", chance: "50%" },
      { name: "Fast Step", chance: "20%" },
      { name: "Number One", chance: "5%" }],
    desc_pt: "Se eu não empunhar esta espada, não poderei proteger as pessoas de quem gosto!",
    desc_en: "If I don't take up this sword, I can't protect the people I care about!",
    anime: { name: "Ichigo Kurosaki", anime:"Bleach" },
    movesList: [
      { level: 1, name: "Spiritual Pressure" }, 
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Blade Surge" },
      { level: 10, name: "Sword Slam" },
      { level: 11, name: "Lunge" },
      { level: 16, name: "Moon Fang Slash" },
      { level: 18, name: "Blitz" },
      { level: 22, name: "Moon Fang Barrage" },
      { level: 26, name: "Menacing Aura" },
      { level: 32, name: "Cut Down" }
    ] 
  },
  { id: 4.01, name: "Release Isamu", type: ["Dark", "Soul"], sprite: "assets/animons-icon/release_isamu.png", stats: { hp: 58, atk: 87, def: 52, spAtk: 80, spDef: 47, spd: 97 },
    traits: [
      { name: "Exorcist", chance: "100%" },
      { name: "Inner Focus", chance: "100%" },
      { name: "Battle Adaptability", chance: "50%" },
      { name: "Fast Step", chance: "20%" },
      { name: "Number One", chance: "5%" }],
    desc_pt: "Meu estilo de desembainhar a espada não se baseia em truques vistosos. Trata-se de terminar as lutas rapidamente.",
    desc_en: "My sword release isn't about flashy tricks. It's about ending fights fast.",
    anime: { name: "Ichigo Kurosaki", anime:"Bleach" },
    movesList: [
      { level: 1, name: "Spiritual Pressure" }, 
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Blade Surge" },
      { level: 10, name: "Sword Slam" },
      { level: 11, name: "Lunge" },
      { level: 16, name: "Moon Fang Slash" },
      { level: 18, name: "Blitz" },
      { level: 22, name: "Moon Fang Barrage" },
      { level: 26, name: "Menacing Aura" },
      { level: 32, name: "Cut Down" }
    ] 
  },  
  { id: 5, name: "Bandit", type: "Neutral", sprite: "assets/animons-icon/bandit.png", stats: { hp: 40, atk: 58, def: 35, spAtk: 42, spDef: 30, spd: 45 }, areas: ["0001", "0002", "0003", "0004", "0005", "0007", "0009"],
    movesList: [
      { level: 1, name: "Cut Down"}, 
      { level: 1, name: "Plunder" },
      { level: 1, name: "Sword Slash" },
      { level: 1, name: "Taunt" },
      { level: 5, name: "Rifle Shot" },
      { level: 9, name: "Guzzle" },
      { level: 15, name: "Double Shot" },
      { level: 17, name: "Lunge" },
      { level: 20, name: "Coated Blade" }
    ]
  },
  { id: 5.01, name: "Strong Bandit", type: "Dark", sprite: "assets/animons-icon/strong_bandit.png", stats: { hp: 59, atk: 70, def: 44, spAtk: 59, spDef: 39, spd: 61 },
    movesList: [
      { level: 1, name: "Cut Down"}, 
      { level: 1, name: "Plunder" },
      { level: 1, name: "Sword Slash" },
      { level: 1, name: "Taunt" },
      { level: 5, name: "Guzzle" },
      { level: 5, name: "Rifle Shot" },
      { level: 15, name: "Double Shot" },
      { level: 17, name: "Lunge" },
      { level: 20, name: "Coated Blade" }
    ]
  },
  { id: 6, name: "Cadet", type: "Neutral", sprite: "assets/animons-icon/cadet.png", stats: { hp: 35, atk: 50, def: 35, spAtk: 50, spDef: 35, spd: 45 }, areas: ["0001", "0002", "0003", "0004", "0005", "0007", "0008", "0009"],
    anime: { name: "Marine", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Mop the floor"}, 
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Rifle Shot" },
      { level: 9, name: "Bounty Hunt" },
      { level: 15, name: "Buckshot" },
      { level: 18, name: "Armament" },
      { level: 19, name: "Aqua Cross" },
      { level: 22, name: "Iron Body" },
      { level: 24, name: "Justice Cannon" }
    ]
  },
  { id: 6.01, name: "Navy Captain", type: "Water", sprite: "assets/animons-icon/navy_captain.png", stats: { hp: 45, atk: 65, def: 45, spAtk: 65, spDef: 45, spd: 75 },
    anime: { name: "Marine Captain", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Mop the floor"}, 
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Rifle Shot" },
      { level: 9, name: "Bounty Hunt" },
      { level: 15, name: "Buckshot" },
      { level: 18, name: "Armament" },
      { level: 19, name: "Aqua Cross" },
      { level: 22, name: "Iron Body" },
      { level: 24, name: "Justice Cannon" }
    ]
  },
  { id: 7, name: "Kid Hero", type: "Water", sprite: "assets/animons-icon/kid_hero.png", stats: { hp: 42, atk: 27, def: 32, spAtk: 25, spDef: 34, spd: 50 }, areas: ["0001", "0003", "0005"],
    anime: { name: "Koby", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Mop the floor" },
      { level: 1, name: "Mop Attack" },
      { level: 1, name: "Taunt" },
      { level: 5, name: "Rifle Shot" },
      { level: 5, name: "Bounty Hunt" },
      { level: 10, name: "Quick Assist" },
      { level: 16, name: "Wave Kick" },
      { level: 20, name: "Afterimage" },    
      { level: 24, name: "Armament" }
    ]
  },
  { id: 7.01, name: "Lt. Hero", type: "Water", sprite: "assets/lt_hero.png", stats: { hp: 56, atk: 51, def: 39, spAtk: 41, spDef: 45, spd: 74 },
    anime: { name: "Koby", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Mop the floor" },
      { level: 1, name: "Mop Attack"},
      { level: 1, name: "Blitz" },
      { level: 5, name: "Taunt" },
      { level: 10, name: "Quick Assist" },
      { level: 16, name: "Wave Kick" },
      { level: 20, name: "Afterimage" },
      { level: 24, name: "Armament" }
    ]
  },
  { id: 8, name: "Battle Wolf", type: "Neutral", sprite: "assets/animons-icon/battle_wolf.png", stats: { hp: 35, atk: 62, def: 33, spAtk: 25, spDef: 28, spd: 70 }, areas: ["0002", "0009"],
    movesList: [
      { level: 1, name: "Growl"}, 
      { level: 1, name: "Sharp Claw" },
      { level: 5, name: "Quick Attack" },
      { level: 11, name: "Bite" },
      { level: 17, name: "Savage Fang" },
      { level: 23, name: "Ripping Claw" }
   ]
  },
  { id: 8.01, name: "Teen Battle Wolf", type: "Beast", sprite: "assets/animons-icon/teen_battle_wolf.png", stats: { hp: 54, atk: 85, def: 44, spAtk: 36, spDef: 40, spd: 90 },
    movesList: [
      { level: 1, name: "Growl"}, 
      { level: 1, name: "Sharp Claw" },
      { level: 5, name: "Quick Attack" },
      { level: 11, name: "Bite" },
      { level: 17, name: "Savage Fang" },
      { level: 23, name: "Ripping Claw" }
   ]
  },
  { id: 9, name: "Joyful", type: ["Wind", "Beast"], sprite: "assets/animons-icon/joyful.png", stats: { hp: 35, atk: 25, def: 35, spAtk: 50, spDef: 35, spd: 70 }, areas: ["0001", "0004", "0005"],
    movesList: [
      { level: 1, name: "Growl"}, 
      { level: 1, name: "Sharp Claw"}, 
      { level: 5, name: "Quick Attack"}, 
      { level: 10, name: "Charm"}, 
      { level: 15, name: "Swift Wind" },
      { level: 20, name: "Quick Assist" },
      { level: 22, name: "Blitz" }
   ]
  }, 
  { id: 10, name: "Teen Wolfman", type: "Fighting", sprite: "assets/animons-icon/teen_wolfman.png", stats: { hp: 35, atk: 53, def: 35, spAtk: 49, spDef: 30, spd: 51 }, areas: ["0002", "0003", "0009"],
    anime: { name: "Yamcha", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Fighting Spirit" },
      { level: 1, name: "Sharp Claw" },
      { level: 5, name: "Energy Wave" },
      { level: 10, name: "Vanishing Blow" },
      { level: 16, name: "Wolf Attack" },
      { level: 20, name: "Solar Flare" },
      { level: 24, name: "Spirit Ball" }
    ]
  },
  { id: 10.01, name: "Adult Wolfman", type: "Fighting", sprite: "assets/animons-icon/adult_wolfman.png", stats: { hp: 47, atk: 63, def: 44, spAtk: 62, spDef: 39, spd: 73 },
    anime: { name: "Yamcha", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Fighting Spirit" },
      { level: 1, name: "Sharp Claw" },
      { level: 5, name: "Energy Wave" },
      { level: 10, name: "Vanishing Blow" },
      { level: 16, name: "Wolf Attack" },
      { level: 20, name: "Solar Flare" },
      { level: 24, name: "Spirit Ball" }
    ]
  },
  { id: 11, name: "Sniper", type: "Neutral", sprite: "assets/animons-icon/sniper.png", stats: { hp: 35, atk: 27, def: 29, spAtk: 60, spDef: 33, spd: 45 },
    anime: { name: "Usopp", anime:"One Piece" }, areas: ["0005"],
    movesList: [
      { level: 1, name: "Sling Shot" },
      { level: 1, name: "Taunt" },
      { level: 4, name: "Spikes" },
      { level: 10, name: "Fire Star" },
      { level: 14, name: "Gas Bomb" },
      { level: 18, name: "Impact Dial" },
      { level: 23, name: "Golden Pound" }
    ]  
  },
  { id: 11.01, name: "Big-Nose", type: ["Neutral", "Fire"], sprite: "assets/animons-icon/big_nose.png", stats: { hp: 64, atk: 39, def: 39, spAtk: 90, spDef: 44, spd: 60 },
    anime: { name: "Usopp", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Sling Shot" },
      { level: 1, name: "Taunt" },
      { level: 4, name: "Spikes" },
      { level: 10, name: "Fire Star" },
      { level: 14, name: "Gas Bomb" },
      { level: 18, name: "Impact Dial" },
      { level: 23, name: "Golden Pound" }
    ]  
  },
  { id: 12, name: "Secret Ninja", type: "Fire", sprite: "assets/animons-icon/secret_ninja.png", stats: { hp: 42, atk: 50, def: 34, spAtk: 46, spDef: 34, spd: 66 }, areas: ["0006"],
    movesList: [
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Kunai Barrage" },
      { level: 6, name: "Fireball" },
      { level: 12, name: "Explosive Kunai" },
      { level: 16, name: "Substitution" },
      { level: 20, name: "Pheonix Fire Bomb" },
      { level: 24, name: "Cut Down" }
    ]  
  },
  { id: 13, name: "Ramen", type: "Wind", sprite: "assets/animons-icon/ramen.png", stats: { hp: 45, atk: 75, def: 40, spAtk: 48, spDef: 40, spd: 65 }, areas: ["0006"],
    traits: [
      { name: "Ninjutsu Mastery", chance: "50%" }],
    desc_pt: "Um dia eu vou me tornar Hokage, e todos vão me reconhecer!",
    desc_en: "Someday I’ll become Hokage, and everyone will acknowledge me!",
    anime: { name: "Naruto", anime:"Naruto" },
    event: "Shinobi",
    movesList: [
      { level: 1, name: "Energy Charge" }, 
      { level: 1, name: "Kunai Barrage" },
      { level: 5, name: "Aerial Combo" },
      { level: 11, name: "Clone Barrage" },
      { level: 14, name: "Smoke Screen" },
      { level: 19, name: "Wind Palm" }
    ]
  },
  { id: 13.01, name: "TS Ramen", type: ["Wind", "Demon"], sprite: "assets/animons-icon/ts_ramen.png", stats: { hp: 54, atk: 88, def: 48, spAtk: 54, spDef: 48, spd: 80 },
    traits: [
      { name: "Fox Spirit", chance: "5%" },
      { name: "Ninjutsu Mastery", chance: "75%" },
      { name: "Wind Affinity", chance: "75%" }],
    desc_pt: "Eu nunca volto atrás na minha palavra. Esse é o meu jeito ninja!",
    desc_en: "I never go back on my word. That's my ninja way!",
    anime: { name: "Naruto", anime:"Naruto" },
    movesList: [
      { level: 1, name: "Energy Charge" }, 
      { level: 1, name: "Kunai Barrage" },
      { level: 5, name: "Aerial Combo" },
      { level: 11, name: "Clone Barrage" },
      { level: 14, name: "Smoke Screen" },
      { level: 19, name: "Wind Palm" },
      { level: 24, name: "Wind Shuriken" }
    ]
  },
  { id: 14, name: "Dinosaur", type: "Beast", sprite: "assets/animons-icon/dinosaur.png", stats: { hp: 74, atk: 80, def: 60, spAtk: 25, spDef: 29, spd: 46 },
    movesList: [
      { level: 1, name: "Growl" },
      { level: 1, name: "Sharp Claw" },
      { level: 6, name: "Sudden Impact" },
      { level: 11, name: "Crush" },
      { level: 17, name: "Bite" },
      { level: 19, name: "Ripping Claw" },
      { level: 21, name: "Menacing Aura" },
      { level: 23, name: "Savage Fang" }
    ]  
  },
  { id: 15, name: "Pickle Jr.", type: ["Demon", "Psychic"], sprite: "assets/animons-icon/pickle_jr.png", stats: { hp: 57, atk: 53, def: 45, spAtk: 85, spDef: 41, spd: 70 },
    movesList: [
      { level: 1, name: "Energy Blast" },
      { level: 1, name: "Limb Regrowth" },
      { level: 6, name: "Dark Shocker" },
      { level: 9, name: "Energy Beam" },
      { level: 12, name: "Precise Energy Beam" },
      { level: 17, name: "Energy Vortex" },
      { level: 21, name: "Demon Elbow" },
      { level: 23, name: "Light Grenade" }
    ]  
  },
  { id: 15.01, name: "Fused Pickle", type: ["Demon", "Psychic"], sprite: "assets/animons-icon/fused_pickle.png", stats: { hp: 67, atk: 59, def: 51, spAtk: 93, spDef: 41, spd: 79 },
    movesList: [
      { level: 1, name: "Energy Blast" },
      { level: 1, name: "Limb Regrowth" },
      { level: 6, name: "Dark Shocker" },
      { level: 9, name: "Energy Beam" },
      { level: 12, name: "Precise Energy Beam" },
      { level: 17, name: "Energy Vortex" },
      { level: 21, name: "Demon Elbow" },
      { level: 23, name: "Light Grenade" }
    ]  
  },
  { id: 16, name: "Kaiyuki", type: "Demon", sprite: "assets/animons-icon/kaiyuki.png", stats: { hp: 52, atk: 70, def: 42, spAtk: 39, spDef: 39, spd: 70 }, areas: ["0009"],
    movesList: [
      { level: 1, name: "Growl" },
      { level: 1, name: "Sinister Presence" },
      { level: 1, name: "Sword Slash" },
      { level: 6, name: "Sword Slam" },
      { level: 8, name: "Blade Surge" },
      { level: 12, name: "Soul Reaver" },
      { level: 21, name: "Wind Scar" },
      { level: 23, name: "Crimson Blades" },
      { level: 24, name: "Fury" }
    ]  
  },
  { id: 17, name: "Green Head", type: "Neutral", sprite: "assets/animons-icon/green_head.png", stats: { hp: 40, atk: 20, def: 39, spAtk: 30, spDef: 25, spd: 65 } },
  { id: 18, name: "Zoko", type: "Wind", sprite: "assets/animons-icon/zoko.png", stats: { hp: 41, atk: 57, def: 41, spAtk: 35, spDef: 37, spd: 51 }, areas: ["0007"],
    anime: { name: "Zoro", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Dexterity" }, 
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Blade Surge" },
      { level: 11, name: "Slashgiri" },
      { level: 17, name: "108 Hawk" },
      { level: 19, name: "Armament" },
      { level: 23, name: "5000 Worlds" },
      { level: 25, name: "Sinister Presence" },
      { level: 29, name: "Tiger Song" }
    ]
  },
  { id: 18.01, name: "TS Zoko", type: "Wind", sprite: "assets/animons-icon/ts_zoko.png", stats: { hp: 53, atk: 66, def: 50, spAtk: 55, spDef: 47, spd: 70 },
    anime: { name: "Zoro", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Dexterity" }, 
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Blade Surge" },
      { level: 11, name: "Slashgiri" },
      { level: 17, name: "108 Hawk" },
      { level: 19, name: "Armament" },
      { level: 23, name: "5000 Worlds" },
      { level: 25, name: "Sinister Presence" },
      { level: 29, name: "Tiger Song" }
    ]
  },
  { id: 19, name: "Axe Man", type: "Earth", sprite: "assets/animons-icon/axe_man.png", stats: { hp: 42, atk: 70, def: 43, spAtk: 35, spDef: 35, spd: 45 }, areas: ["0008"],
    movesList: [
      { level: 1, name: "Axe Attack" },
      { level: 1, name: "Rally" },
      { level: 6, name: "Axe Slam" },
      { level: 12, name: "Axe Splitter" },
      { level: 16, name: "Bounty Hunt" },
      { level: 22, name: "Cleave" }
    ]
  },
  { id: 20, name: "Wuno", type: "Wind", sprite: "assets/animons-icon/wuno.png", stats: { hp: 50, atk: 37, def: 47, spAtk: 80, spDef: 65, spd: 75 },
    movesList: [
      { level: 1, name: "Energy Shell" },
      { level: 1, name: "Mystic Shot" },
      { level: 6, name: "Swift Wind" },
      { level: 10, name: "Storm Tower" },
      { level: 16, name: "Wind Dagger" },
      { level: 22, name: "Twin Tornado" }
    ]
  },
  { id: 21, name: "Laxon", type: "Lightning", sprite: "assets/animons-icon/laxon.png", stats: { hp: 64, atk: 70, def: 45, spAtk: 74, spDef: 54, spd: 74 } },
  { id: 22, name: "Rie", type: ["Fire", "Psychic"], sprite: "assets/animons-icon/rie.png", stats: { hp: 54, atk: 25, def: 38, spAtk: 100, spDef: 40, spd: 60 },
    movesList: [
      { level: 1, name: "Energy Shell" },
      { level: 1, name: "Mystic Shot" },
      { level: 5, name: "Junk Toss" },
      { level: 7, name: "Eureka" },
      { level: 12, name: "Explosion" },
      { level: 15, name: "Charm" },
      { level: 18, name: "Fire Zone" },
      { level: 21, name: "Fortune" },
      { level: 21, name: "Wide Explosion" }
    ]
  },
  { id: 23, name: "Radish", type: ["Dark", "Fighting"], sprite: "assets/animons-icon/radish.png", stats: { hp: 60, atk: 65, def: 45, spAtk: 75, spDef: 54, spd: 75 } },
  { id: 24, name: "Monkey Warrior", type: "Fighting", sprite: "assets/animons-icon/monkey_warrior.png", stats: { hp: 70, atk: 75, def: 52, spAtk: 75, spDef: 46, spd: 80 } },
  { id: 25, name: "Alien", type: "Psychic", sprite: "assets/animons-icon/alien.png", stats: { hp: 48, atk: 50, def: 41, spAtk: 80, spDef: 50, spd: 80 } },
  { id: 26, name: "Vegetable", type: "Fighting", sprite: "assets/animons-icon/vegetable.png", stats: { hp: 52, atk: 60, def: 51, spAtk: 82, spDef: 51, spd: 80 } },
  { id: 26.01, name: "Super Vegetable", type: "Fighting", sprite: "assets/animons-icon/super_vegetable.png", stats: { hp: 67, atk: 72, def: 58, spAtk: 90, spDef: 57, spd: 90 },
    anime: { name: "Vegeta", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Energy Blast" }, 
      { level: 1, name: "Energy Charge" },
      { level: 7, name: "Dirty Fireworks" },
      { level: 12, name: "Energy Beam" },
      { level: 18, name: "Galaxy Wave" },
      { level: 20, name: "Galaxy Burst" },
      { level: 24, name: "Dive Kick" }
     ]
  },
  { id: 27, name: "Kid Gocu", type: ["Fighting", "Beast"], sprite: "assets/animons-icon/kid_gocu.png", stats: { hp: 49, atk: 65, def: 45, spAtk: 52, spDef: 33, spd: 68 } },
  { id: 27.01, name: "Adult Gocu", type: "Fighting", sprite: "assets/animons-icon/adult_gocu.png", stats: { hp: 55, atk: 80, def: 50, spAtk: 71, spDef: 45, spd: 80 } },
  { id: 27.02, name: "Super Gocu", type: "Fighting", sprite: "assets/animons-icon/super_gocu.png", stats: { hp: 63, atk: 93, def: 54, spAtk: 82, spDef: 51, spd: 90 },
    anime: { name: "Goku", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Energy Charge" }, 
      { level: 1, name: "Punch" },
      { level: 1, name: "Vanishing Blow" },
      { level: 6, name: "Energy Wave" },
      { level: 9, name: "Solar Flare" },
      { level: 11, name: "Cyclone Throw" },
      { level: 16, name: "Super Energy Wave" },
      { level: 20, name: "Meteor Combo" },
      { level: 21, name: "Afterimage" },
      { level: 24, name: "Divine Bomb" }
    ]
  },
  { id: 28, name: "Green Alien", type: "Nature", sprite: "assets/animons-icon/green_alien.png", stats: { hp: 52, atk: 63, def: 43, spAtk: 70, spDef: 39, spd: 75 } },
  { id: 29, name: "Large Ronin", type: "Neutral", sprite: "assets/animons-icon/large_ronin.png", stats: { hp: 90, atk: 55, def: 62, spAtk: 31, spDef: 43, spd: 45 } },
  { id: 30, name: "Bulme", type: "Neutral", sprite: "assets/animons-icon/bulme.png", stats: { hp: 46, atk: 25, def: 25, spAtk: 50, spDef: 52, spd: 45 } },
  { id: 31, name: "Monkey Beast", type: "Beast", sprite: "assets/animons-icon/monkey_beast.png", stats: { hp: 75, atk: 80, def: 65, spAtk: 85, spDef: 55, spd: 63 } },
  { id: 32, name: "Imperfect Warrior Bug", type: ["Fighting", "Psychic"], sprite: "assets/animons-icon/imperfect_warrior_bug.png", stats: { hp: 52, atk: 57, def: 51, spAtk: 64, spDef: 45, spd: 93 },
    traits: [
      { name: "Scaredy Cat", chance: "50%" },
      { name: "Consume", chance: "20%" },
      { name: "Copycat", chance: "20%" }],
    desc_pt: "Preciso me alimentar para que minha forma amadureça...",
    desc_en: "I need to feed for my form to mature...",
    anime: { name: "Imperfect Cell", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Energy Blast" },
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Energy Shell" },
      { level: 4, name: "Solar Flare" },
      { level: 6, name: "Energy Wave" },
      { level: 12, name: "Drain Life" },
      { level: 17, name: "Super Energy Wave" },
      { level: 22, name: "Precise Energy Beam" },
      { level: 24, name: "Limb Regrowth" }
    ]
  },
  { id: 32.01, name: "Perfect Warrior Bug", type: ["Fighting", "Psychic"], sprite: "assets/animons-icon/perfect_warrior_bug.png", stats: { hp: 67, atk: 84, def: 57, spAtk: 95, spDef: 57, spd: 107 },
    traits: [
      { name: "Consume", chance: "20%" },
      { name: "Fast Step", chance: "20%" },
      { name: "Copycat", chance: "20%" },
      { name: "Confident", chance: "100%" },
      { name: "Perfect", chance: "5%" },
      { name: "Reincarnation", chance: "10%" }],
    desc_pt: "Eu sou perfeito!",
    desc_en: "I am perfect!",
    anime: { name: "Perfect Cell", anime:"Dragon Ball" },
    evolution: ["Imperfect Warrior Bug", "Perfect Warrior Bug"],
    movesList: [
      { level: 1, name: "Blitz" },
      { level: 1, name: "Afterimage" }, 
      { level: 1, name: "Energy Blast" },
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Energy Shell" },
      { level: 4, name: "Solar Flare" },
      { level: 6, name: "Energy Wave" },
      { level: 12, name: "Drain Life" },
      { level: 17, name: "Super Energy Wave" },
      { level: 22, name: "Precise Energy Beam" },
      { level: 24, name: "Limb Regrowth" },
      { level: 24, name: "Solar Energy Wave" }
    ]
  },
  { id: 33, name: "Boulder Li", type: "Fighting", sprite: "assets/animons-icon/boulder_li.png", stats: { hp: 57, atk: 90, def: 49, spAtk: 25, spDef: 38, spd: 80 },
    anime: { name: "Rock Lee", anime:"Naruto" },
    movesList: [
      { level: 1, name: "Fighting Spirit" }, 
      { level: 1, name: "Kunai Barrage" },
      { level: 9, name: "Afterimage" },
      { level: 12, name: "Tiger's Barrage" },
      { level: 15, name: "False Courage" },
      { level: 15, name: "Dive Kick" },
      { level: 20, name: "Reverse Lily" },
      { level: 21, name: "Blitz" },
      { level: 24, name: "Guzzle" }
    ]
  },
  { id: 33.01, name: "TS Boulder Li", type: "Fighting", sprite: "assets/animons-icon/ts_boulder_li.png", stats: { hp: 64, atk: 100, def: 55, spAtk: 30, spDef: 43, spd: 100 },
    anime: { name: "Rock Lee", anime:"Naruto" },
    movesList: [
      { level: 1, name: "Fighting Spirit" }, 
      { level: 1, name: "Kunai Barrage" },
      { level: 9, name: "Afterimage" },
      { level: 12, name: "Tiger's Barrage" },
      { level: 15, name: "False Courage" },
      { level: 15, name: "Dive Kick" },
      { level: 20, name: "Reverse Lily" },
      { level: 21, name: "Blitz" },
      { level: 24, name: "Guzzle" }
    ]
  }, 
  { id: 34, name: "Ganra", type: "Earth", sprite: "assets/animons-icon/ganra.png", stats: { hp: 51, atk: 40, def: 75, spAtk: 72, spDef: 60, spd: 40 }, 
    anime: { name: "Gaara", anime:"Naruto" },
    movesList: [
      { level: 1, name: "Energy Charge" }, 
      { level: 1, name: "Kunai Barrage" },
      { level: 6, name: "Sand Tsunami" },
      { level: 8, name: "Sand Storm" },
      { level: 13, name: "Sand Burial" },
      { level: 18, name: "Sand Bomb" },
      { level: 20, name: "Substitution" },
      { level: 24, name: "Sand Arm" }
    ] 
  },
  { id: 34.01, name: "Tanuki Ganra", type: ["Earth", "Demon"], sprite: "assets/animons-icon/tanuki_ganra.png", stats: { hp: 65, atk: 46, def: 94, spAtk: 81, spDef: 65, spd: 48 },
    anime: { name: "Gaara", anime:"Naruto" },
    movesList: [
      { level: 1, name: "Energy Charge" }, 
      { level: 1, name: "Kunai Barrage" },
      { level: 6, name: "Sand Tsunami" },
      { level: 8, name: "Sand Storm" },
      { level: 13, name: "Sand Burial" },
      { level: 18, name: "Sand Bomb" },
      { level: 20, name: "Substitution" },
      { level: 24, name: "Sand Arm" }
    ] 
  },
  { id: 35, name: "Nerdy Ronin", type: "Neutral", sprite: "assets/animons-icon/nerdy_ronin.png", stats: { hp: 50, atk: 65, def: 41, spAtk: 49, spDef: 50, spd: 45 } },
  { id: 36, name: "Mitsooke", type: ["Wind", "Lightning"], sprite: "assets/animons-icon/mitsooke.png", stats: { hp: 62, atk: 52, def: 45, spAtk: 78, spDef: 54, spd: 70 } },
  { id: 40, name: "Fishman", type: "Water", sprite: "assets/animons-icon/fishman.png", stats: { hp: 45, atk: 60, def: 39, spAtk: 40, spDef: 35, spd: 50 } },
  { id: 42, name: "Whale Shark", type: ["Fighting", "Water"], sprite: "assets/animons-icon/whale_shark.png", stats: { hp: 64, atk: 80, def: 55, spAtk: 54, spDef: 45, spd: 55 },
    anime: { name: "Jinbe", anime:"One Piece" },
    movesList: [
      { level: 1, name: "False Courage" },
      { level: 1, name: "Punch" },
      { level: 4, name: "Armament" },
      { level: 10, name: "Shark Tile Fist" },
      { level: 14, name: "Brick Fist" },
      { level: 19, name: "Shark Throw" },
      { level: 23, name: "Water Spear" }
    ]
  },
  { id: 42.01, name: "Karate Whale Shark", type: ["Fighting", "Water"], sprite: "assets/animons-icon/karate_whale_shark.png", stats: { hp: 75, atk: 95, def: 62, spAtk: 60, spDef: 51, spd: 62 },
    anime: { name: "Jinbe", anime:"One Piece" },
    movesList: [
      { level: 1, name: "False Courage" },
      { level: 1, name: "Punch" },
      { level: 4, name: "Armament" },
      { level: 10, name: "Shark Tile Fist" },
      { level: 14, name: "Brick Fist" },
      { level: 19, name: "Shark Throw" },
      { level: 23, name: "Water Spear" }
    ]
  },
  { id: 43, name: "Mist Sharkada", type: "Water", sprite: "assets/animons-icon/mist_sharkada.png", stats: { hp: 64, atk: 80, def: 45, spAtk: 75, spDef: 45, spd: 63 } },
  { id: 43.01, name: "Rouge Sharkada", type: "Water", sprite: "assets/animons-icon/rouge_sharkada.png", stats: { hp: 68, atk: 96, def: 50, spAtk: 72, spDef: 52, spd: 68 } },
  { id: 44, name: "Water Goddess", type: ["Water", "Light"], sprite: "assets/animons-icon/water_goddess.png", stats: { hp: 57, atk: 27, def: 35, spAtk: 85, spDef: 64, spd: 54 },
    movesList: [
      { level: 1, name: "Splashing Water" },
      { level: 1, name: "Mystic Shot" },
      { level: 5, name: "Water Blast" },
      { level: 10, name: "Charm" }
    ]
  },
  { id: 45, name: "Bomb Man", type: "Fire", sprite: "assets/animons-icon/bomb_man.png", stats: { hp: 59, atk: 67, def: 49, spAtk: 54, spDef: 40, spd: 64 } },
  { id: 47, name: "Hired Assassin", type: ["Fighting", "Dark"], sprite: "assets/animons-icon/hired_assassin.png", stats: { hp: 50, atk: 65, def: 50, spAtk: 63, spDef: 43, spd: 80 } },
  { id: 48, name: "Hired Spy", type: "Dark", sprite: "assets/animons-icon/hired_spy.png", stats: { hp: 50, atk: 52, def: 53, spAtk: 60, spDef: 51, spd: 74 } },
  { id: 49, name: "Little Cow", type: "Lightning", sprite: "assets/animons-icon/little_cow.png", stats: { hp: 40, atk: 35, def: 30, spAtk: 60, spDef: 35, spd: 50 },
    movesList: [
      { level: 1, name: "Junk Toss" }, 
      { level: 1, name: "Taunt" },
      { level: 5, name: "Rifle Shot" },
      { level: 9, name: "Missile Barrage" },
      { level: 12, name: "Thunder Set" },
      { level: 16, name: "Electric Horn Angle" },
      { level: 19, name: "Discharge" },
      { level: 22, name: "Lightning Strike" }
    ]
  },
  { id: 49.01, name: "Cow Man", type: "Lightning", sprite: "assets/animons-icon/cow_man.png", stats: { hp: 57, atk: 65, def: 40, spAtk: 85, spDef: 60, spd: 62 },
    movesList: [
      { level: 1, name: "Junk Toss" }, 
      { level: 1, name: "Taunt" },
      { level: 5, name: "Rifle Shot" },
      { level: 9, name: "Missile Barrage" },
      { level: 12, name: "Thunder Set" },
      { level: 16, name: "Electric Horn Angle" },
      { level: 19, name: "Discharge" },
      { level: 22, name: "Lightning Strike" }
    ]
  },
  { id: 50, name: "Water Mage", type: "Water", sprite: "assets/animons-icon/water_mage.png", stats: { hp: 52, atk: 49, def: 40, spAtk: 70, spDef: 60, spd: 50 } },
  { id: 52, name: "Ice Sculpture", type: "Ice", sprite: "assets/animons-icon/ice_sculpture.png", stats: { hp: 52, atk: 52, def: 40, spAtk: 65, spDef: 44, spd: 60 },
    anime: { name: "Gray Fullbuster", anime:"Fairy Tail" },
    movesList: [
      { level: 1, name: "Cold Snap" },
      { level: 1, name: "Punch" },
      { level: 6, name: "Ice Spikes" },
      { level: 10, name: "Ice Clone" },
      { level: 16, name: "Ice Lance" },
      { level: 20, name: "Glacial Blade" }
    ]
  },
  { id: 52.01, name: "Demon Ice Sculpture", type: ["Ice", "Demon"], sprite: "assets/animons-icon/demon_ice_sculpture.png", stats: { hp: 62, atk: 65, def: 53, spAtk: 83, spDef: 50, spd: 71 },
    anime: { name: "Gray Fullbuster", anime:"Fairy Tail" },
    movesList: [
      { level: 1, name: "Cold Snap" },
      { level: 1, name: "Punch" },
      { level: 6, name: "Ice Spikes" },
      { level: 10, name: "Ice Clone" },
      { level: 16, name: "Ice Lance" },
      { level: 20, name: "Glacial Blade" }
    ]
  },
  { id: 53, name: "Gokidaru", type: "Fire", sprite: "assets/animons-icon/gokidaru.png", stats: { hp: 60, atk: 65, def: 40, spAtk: 53, spDef: 44, spd: 60 },
    movesList: [
      { level: 1, name: "Punch" },
      { level: 5, name: "Smoke Screen" },
      { level: 8, name: "Bomb Strike" },
      { level: 10, name: "Gas Bomb" },
      { level: 13, name: "Trip Wire" },
      { level: 16, name: "Rocket Dynamite" },
      { level: 21, name: "Missile Barrage" }
    ]
  },
  { id: 53.01, name: "Storm Gokidaru", type: ["Fire", "Wind"], sprite: "assets/animons-icon/storm_gokidaru.png", stats: { hp: 66, atk: 79, def: 46, spAtk: 77, spDef: 45, spd: 63 },
    movesList: [
      { level: 1, name: "Punch" },
      { level: 1, name: "Taunt" },
      { level: 5, name: "Smoke Screen" },
      { level: 8, name: "Bomb Strike" },
      { level: 10, name: "Gas Bomb" },
      { level: 13, name: "Trip Wire" },
      { level: 16, name: "Rocket Dynamite" },
      { level: 21, name: "Missile Barrage" },
      { level: 22, name: "Storm Flame Arrow" },
      { level: 24, name: "Swift Wind" }
    ]
  },
  { id: 54, name: "Goblin", type: "Neutral", sprite: "assets/animons-icon/goblin.png", stats: { hp: 47, atk: 64, def: 39, spAtk: 55, spDef: 32, spd: 67 } },
  { id: 54.01, name: "Hobgoblin", type: "Dark", sprite: "assets/animons-icon/hobgoblin.png", stats: { hp: 57, atk: 82, def: 45, spAtk: 65, spDef: 44, spd: 78 } },
  { id: 55, name: "Earth Queen", type: "Earth", sprite: "assets/animons-icon/earth_queen.png", stats: { hp: 59, atk: 70, def: 65, spAtk: 50, spDef: 49, spd: 45 },
    movesList: [
      { level: 1, name: "Axe Attack" },
      { level: 1, name: "Earth Wall" },
      { level: 5, name: "Crush" },
      { level: 10, name: "Axe Slam" },
      { level: 14, name: "Iron Body" },
      { level: 20, name: "Gideon" }
    ]
  },
  { id: 56, name: "Chimera", type: "Beast", sprite: "assets/animons-icon/chimera.png", stats: { hp: 50, atk: 65, def: 52, spAtk: 44, spDef: 43, spd: 67 } },
  { id: 56.01, name: "Mutated Chimera", type: "Beast", sprite: "assets/animons-icon/mutated_chimera.png", stats: { hp: 64, atk: 77, def: 58, spAtk: 53, spDef: 48, spd: 79 } },
  { id: 58, name: "Waterfall Samurai", type: ["Water", "Fire"], sprite: "assets/animons-icon/waterfall_samurai.png", stats: { hp: 59, atk: 70, def: 48, spAtk: 44, spDef: 44, spd: 73 } },
  { id: 59, name: "Warrior Bug Jr.", type: "Fighting", sprite: "assets/animons-icon/warrior_bug_jr.png", stats: { hp: 52, atk: 70, def: 41, spAtk: 60, spDef: 39, spd: 90 } },
  { id: 60, name: "Fire Prince", type: "Fire", sprite: "assets/animons-icon/fire_prince.png", stats: { hp: 49, atk: 54, def: 42, spAtk: 44, spDef: 35, spd: 62 },
    movesList: [
      { level: 1, name: "Dexterity" },
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Blade Surge" },
      { level: 8, name: "Lunge" },
      { level: 11, name: "Searing Slices" },
      { level: 15, name: "Flame Dance" },
      { level: 20, name: "Flame Storm" }
    ]
  },
  { id: 60.01, name: "Fire King", type: "Fire", sprite: "assets/animons-icon/fire_king.png", stats: { hp: 63, atk: 70, def: 54, spAtk: 60, spDef: 44, spd: 76 },
    movesList: [
      { level: 1, name: "Dexterity" },
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Blade Surge" },
      { level: 8, name: "Lunge" },
      { level: 11, name: "Searing Slices" },
      { level: 15, name: "Flame Dance" },
      { level: 20, name: "Flame Storm" },
      { level: 24, name: "Extreme Flame Burst" },
    ]
  },
  { id: 73, name: "Fedora", type: ["Earth", "Dark"], sprite: "assets/animons-icon/fedora.png", stats: { hp: 65, atk: 56, def: 110, spAtk: 70, spDef: 85, spd: 60 } },
  { id: 74, name: "Brorok", type: ["Fighting", "Dark"], sprite: "assets/animons-icon/brorok.png", stats: { hp: 49, atk: 80, def: 50, spAtk: 70, spDef: 45, spd: 85 },
    traits: [
      { name: "Sadist", chance: "50%" },
      { name: "Fearsome", chance: "100%" },
      { name: "Major Threat", chance: "100%" },
      { name: "Legendary Warrior", chance: "5%" }],
    desc_pt: "Meu poder está aumentando... transbordando...!",
    desc_en: "My power it's rising... overflowing...!",
    anime: { name: "Broly", anime:"Dragon Ball" },
    movesList: [
      { level: 1, name: "Energy Blast" },
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Energy Shell" },
      { level: 1, name: "Punch" },
      { level: 6, name: "Crush" },
      { level: 10, name: "Fury" },
      { level: 15, name: "Cyclone Throw" },
      { level: 18, name: "Z Bomb" }
    ]
  },
  { id: 74.01, name: "Full Power Brorok", type: ["Fighting", "Dark"], sprite: "assets/animons-icon/full_power_brorok.png", stats: { hp: 66, atk: 90, def: 66, spAtk: 105, spDef: 66, spd: 93 },
    anime: { name: "Broly", anime:"Dragon Ball" },
    traits: [
      { name: "Sadist", chance: "50%" },
      { name: "Fearsome", chance: "100%" },
      { name: "Major Threat", chance: "5%" },
      { name: "Legendary Warrior", chance: "100%" }],
    desc_pt: "Meu poder é máximo!",
    desc_en: "My power is maximum!",
    movesList: [
      { level: 1, name: "Energy Blast" },
      { level: 1, name: "Energy Charge" },
      { level: 1, name: "Energy Shell" },
      { level: 1, name: "Punch" },
      { level: 6, name: "Crush" },
      { level: 10, name: "Fury" },
      { level: 15, name: "Cyclone Throw" },
      { level: 18, name: "Z Bomb" }
    ]
  },
  { id: 75, name: "Yoshi", type: ["Fighting", "Fire"], sprite: "assets/animons-icon/yoshi.png", stats: { hp: 85, atk: 125, def: 75, spAtk: 80, spDef: 75, spd: 103 } },
  { id: 78, name: "Master Swordsman", type: "Dark", sprite: "assets/animons-icon/master_swordsman.png", stats: { hp: 62, atk: 110, def: 60, spAtk: 75, spDef: 49, spd: 80 } },
  { id: 79, name: "Bald Warrior", type: ["Dark", "Fighting"], sprite: "assets/animons-icon/bald_warrior.png", stats: { hp: 63, atk: 75, def: 50, spAtk: 62, spDef: 41, spd: 75 } },
  { id: 79.01, name: "Super Bald Warrior", type: ["Dark", "Fighting"], sprite: "assets/animons-icon/super_bald_warrior.png", stats: { hp: 72, atk: 95, def: 62, spAtk: 78, spDef: 47, spd: 81 } },
  { id: 81, name: "Alligator", type: "Earth", sprite: "assets/animons-icon/alligator.png", stats: { hp: 66, atk: 60, def: 59, spAtk: 87, spDef: 57, spd: 67 },
    anime: { name: "Crocodile", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Menacing Aura" },
      { level: 1, name: "Sharp Claw" },
      { level: 6, name: "Sand Tsunami" },
      { level: 11, name: "Sand Bomb" },
      { level: 16, name: "Coated Blade" },
      { level: 20, name: "Sand Storm" },
      { level: 23, name: "Desert Espada" }
    ]
  },
  { id: 83, name: "Taesheegi", type: "Water", sprite: "assets/animons-icon/taesheegi.png", stats: { hp: 54, atk: 75, def: 45, spAtk: 28, spDef: 32, spd: 63 }, areas: ["0008"],
    anime: { name: "Tashigi", anime:"One Piece" },
    movesList: [
      { level: 1, name: "Bounty Hunt" },
      { level: 1, name: "Sword Slash" },
      { level: 5, name: "Blade Surge" },
      { level: 8, name: "Dexterity" },
      { level: 12, name: "Lunge" },
      { level: 15, name: "Armament" },
      { level: 19, name: "Calm Water Slash" },
      { level: 22, name: "False Courage" }
    ]
  },
  { id: 84, name: "Water Chimera", type: ["Water", "Beast"], sprite: "assets/animons-icon/water_chimera.png", stats: { hp: 75, atk: 75, def: 50, spAtk: 67, spDef: 54, spd: 75 } },
  { id: 84.01, name: "Mutated Water Chimera", type: ["Water", "Beast"], sprite: "assets/animons-icon/mutated_water_chimera.png", stats: { hp: 100, atk: 90, def: 70, spAtk: 77, spDef: 64, spd: 81 } }
];
