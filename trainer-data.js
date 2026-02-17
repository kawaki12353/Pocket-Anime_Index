const trainers = [
{
  trainer: "Martial Artist Koti",
  mode: "1v1",
  photo: "assets/trainers/martial_artist_koti.png",
  description_pt: "*Perfeito! Estou no meio do treinamento com meu Animon!*",
  description_en: "*Perfect! I'm in the middle of training with my Animon!*",
  drops_pt: "Fighter Crate, 500 Credits",
  drops_en: "Fighter Crate, 500 Credits",
  animons: ["Kid Gocu", "Pickle Jr.", "Gocu", "Super Gocu"]
},
{
  trainer: "Captain Selene",
  mode: "1v1",
  photo: "assets/trainers/captain_selene.png",
  description_pt: "*Cadetes! Mantenham a formação. ...Ah, você aí. Você não é um dos meus recrutas.*",
  description_en: "*Cadets! Hold formation. ...Ah, you there. You're not one is my recruits.*",
  drops_pt: "Marine Crate, 600 Credits",
  drops_en: "Marine Crate, 600 Credits",
  animons: ["Cadet", "Kid Hero", "Axe Man", "Taesheegi"]
},
{
  trainer: "Manager Vira",
  mode: "1v1",
  photo: "assets/trainers/manager_vira.png",
  description_pt: "Por enquanto nada...",
  description_en: "Nothing for now....",
  drops_pt: "Highstar Crate, ??? Credits",
  drops_en: "Highstar Crate, ??? Credits",
  animons: ["???"]
},
{
  trainer: "Bandit King Lucas",
  mode: "2v2",
  photo: "assets/trainers/bandit_king_lucas.png",
  description_pt: "*Eu sou o Rei desta Floresta! O Rei Bandido Lucas, para ser mais exato!*",
  description_en: "*I'm the King of this Forest! Bandit King Lucas, to be exact!*",
  drops_pt: "Bandit Crate, 600 Credits",
  drops_en: "Bandit Crate, 600 Credits",
  animons: ["Bandit", "Strong Bandit", "Bandit", "Battle Wolf", "Teen Wolfman"]
}
];

const animonElements = {
  "Cadet": ["neutral"],
  "Kid Hero": ["water"],
  "Axe Man": ["earth"],
  "Taesheegi": ["water"],
  "Bandit": ["neutral"],
  "Strong Bandit": ["dark"],
  "Battle Wolf": ["neutral"],
  "Teen Wolfman": ["fighting"],
  "Kid Gocu": ["fighting", "beast"],
  "Pickle Jr.": ["demon", "psychic"],
  "Gocu": ["fighting"],
  "Super Gocu": ["fighting"],
  "???": []
};