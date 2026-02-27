const chart = {
  Neutral: { 
    Earth: 0.5, 
    Soul: 0 
  },

  Fighting: {
    Ice: 2, Earth: 2, Neutral: 2,
    Psychic: 0.5, Wind: 0.5, Beast: 0.5, Light: 0.5,
    Soul: 0
  },

  Fire: {
    Nature: 2, Ice: 2, Beast: 2,
    Water: 0.5, Fire: 0.5, Wind: 0.5, Earth: 0.5
  },

  Water: {
    Fire: 2, Earth: 2,
    Nature: 0.5, Lightning: 0.5, Water: 0.5
  },

  Nature: {
    Water: 2, Earth: 2, Lightning: 2,
    Fire: 0.5, Nature: 0.5, Soul: 0.5, Demon: 0.5
  },

  Earth: {
    Fire: 2, Lightning: 2, Wind: 2, Poison: 2,
    Nature: 0.5, Water: 0.5, Fighting: 0.5
  },

  Wind: {
    Fire: 2, Fighting: 2,
    Earth: 0.5, Ice: 0.5, Lightning: 0.5
  },

  Ice: {
    Nature: 2, Wind: 2,
    Fire: 0.5, Ice: 0.5
  },

  Lightning: {
    Water: 2, Wind: 2, Beast: 2,
    Earth: 0.5, Nature: 0.5, Lightning: 0.5
  },

  Soul: {
    Psychic: 2, Soul: 2, Fighting: 2,
    Dark: 0.5, Demon: 0.5,
    Neutral: 0
  },

  Psychic: {
    Fighting: 2, Poison: 2,
    Dark: 0.5, Psychic: 0.5, Beast: 0.5
  },

  Poison: {
    Nature: 2, Light: 2,
    Earth: 0.5, Soul: 0.5, Poison: 0.5, Beast: 0.5
  },

  Light: {
    Dark: 2, Demon: 2, Fighting: 2,
    Soul: 0.5, Light: 0.5
  },

  Dark: {
    Light: 2, Soul: 2, Psychic: 2,
    Demon: 0.5, Poison: 0.5, Fighting: 0.5, Dark: 0.5
  },

  Demon: {
    Soul: 2, Demon: 2,
    Psychic: 0.5, Light: 0.5
  },

  Beast: {
    Psychic: 2, Poison: 2, Dark: 2,
    Fighting: 0.5, Wind: 0.5, Fire: 0.5
  }
};