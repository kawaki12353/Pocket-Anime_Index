fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);
    initMenu();
  });

function getLang(){
  return localStorage.getItem("siteLang") || "pt";
}

function initMenu(){
  const openMenu  = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const sideMenu  = document.getElementById("sideMenu");
  const overlay   = document.getElementById("menuOverlay");

  function closeSideMenu(){
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  openMenu.onclick = () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  };

  closeMenu.onclick = closeSideMenu;
  overlay.onclick   = closeSideMenu;

  setActivePage();
  updateMenuLang();
}

/* MARCA PÁGINA ATUAL */
function setActivePage(){
  const current = location.pathname.split("/").pop() || "index.html";

  const pages = {
    "index.html": "menuHome",
    "moves.html": "menuMoves", // Adicionado
    "calculator.html": "menuCalc",
    "items.html": "menuItems",
    "maps.html": "menuMaps",
    "trainer.html": "menuTrainers",
    "update-log.html": "menuUpdate"
  };

  if (pages[current]) {
    const activeElement = document.getElementById(pages[current]);
    if (activeElement) activeElement.classList.add("active");
  }
}

function updateMenuLang(){
  const lang = getLang();

  const text = {
    pt: {
      home: "🏠 Início",
      moves: "⚔️ Lista de Moves", // Adicionado
      calc: "🔥 Calculadora",
      items: "🗂 Itens",
      maps: "🗺 Mapas",
      trainers: "🤵‍♂️ Treinadores",
      update: "📝 Update Log"
    },
    en: {
      home: "🏠 Home",
      moves: "⚔️ Moves List", // Adicionado
      calc: "🔥 Calculator",
      items: "🗂 Items",
      maps: "🗺 Maps",
      trainers: "🤵‍♂️ Trainers",
      update: "📝 Update Log"
    }
  };

  // Aplicação dos textos nos IDs correspondentes
  document.getElementById("menuHome").textContent = text[lang].home;
  document.getElementById("menuMoves").textContent = text[lang].moves; // Adicionado
  document.getElementById("menuCalc").textContent = text[lang].calc;
  document.getElementById("menuItems").textContent = text[lang].items;
  document.getElementById("menuMaps").textContent = text[lang].moves; // Nota: Corrigido para .maps
  document.getElementById("menuMaps").textContent = text[lang].maps;
  document.getElementById("menuTrainers").textContent = text[lang].trainers;
  document.getElementById("menuUpdate").textContent = text[lang].update;
}