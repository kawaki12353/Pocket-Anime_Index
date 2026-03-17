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

  // Verifica se os elementos existem antes de atribuir eventos
  if (openMenu && closeMenu && sideMenu && overlay) {
    function closeSideMenu(){
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }

    openMenu.onclick = () => {
      sideMenu.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    };

    closeMenu.onclick = closeSideMenu;
    overlay.onclick   = closeSideMenu;
  }

  setActivePage();
  updateMenuLang(); // Traduz assim que carrega
}

/* MARCA PÁGINA ATUAL */
function setActivePage(){
  const current = location.pathname.split("/").pop() || "index.html";

  const pages = {
    "index.html": "menuHome",
    "moves.html": "menuMoves",
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

// Tornamos a função global para que o botão de tradução da sua página possa chamá-la
window.updateMenuLang = function() {
  const lang = getLang();

  const text = {
    pt: {
      home: "🏠 Início",
      moves: "⚔️ Lista de Moves",
      calc: "🔥 Calculadora",
      items: "🗂 Itens",
      maps: "🗺 Mapas",
      trainers: "🤵‍♂️ Treinadores",
      update: "📝 Update Log"
    },
    en: {
      home: "🏠 Home",
      moves: "⚔️ Moves List",
      calc: "🔥 Calculator",
      items: "🗂 Items",
      maps: "🗺 Maps",
      trainers: "🤵‍♂️ Trainers",
      update: "📝 Update Log"
    }
  };

  const mapping = {
    "menuHome": "home",
    "menuMoves": "moves",
    "menuCalc": "calc",
    "menuItems": "items",
    "menuMaps": "maps",
    "menuTrainers": "trainers",
    "menuUpdate": "update"
  };

  // Loop inteligente para traduzir apenas o que existe na tela
  for (let id in mapping) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text[lang][mapping[id]];
    }
  }
}

// Escuta mudanças no localStorage (útil se a tradução vier de outra aba ou script)
window.addEventListener('storage', (e) => {
  if (e.key === 'siteLang') {
    window.updateMenuLang();
  }
});