/* CARREGAMENTO DO MENU */
fetch("menu.html")
  .then(res => res.text())
  .then(html => {
    // "afterbegin" garante que o menu seja o primeiro elemento do body,
    // evitando que herde larguras de containers de conteúdo da página.
    document.body.insertAdjacentHTML("afterbegin", html);
    initMenu();
  })
  .catch(err => console.error("Erro ao carregar o menu:", err));

function getLang() {
  return localStorage.getItem("siteLang") || "pt";
}

function initMenu() {
  const openMenu  = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const sideMenu  = document.getElementById("sideMenu");
  const overlay   = document.getElementById("menuOverlay");

  if (openMenu && closeMenu && sideMenu && overlay) {

    // Função para fechar o menu e liberar o scroll
    const closeSideMenu = () => {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    };

    // Função para abrir o menu e travar o scroll
    openMenu.onclick = () => {
      sideMenu.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    };

    closeMenu.onclick = closeSideMenu;
    overlay.onclick   = closeSideMenu;

    // Fecha o menu se a tecla Esc for pressionada
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") closeSideMenu();
    });
  }

  setActivePage();
  window.updateMenuLang(); // Traduz assim que carrega
}

/* MARCA PÁGINA ATUAL */
function setActivePage() {
  // Pega o nome do arquivo atual (ex: index.html)
  const current = location.pathname.split("/").pop() || "index.html";

  // Mapeamento dos IDs dos links (o logotipo não entra aqui pois não é mais um link)
  const pages = {
    "index.html": "menuHome",
    "moves.html": "menuMoves",
    "calculator.html": "menuCalc",
    "items.html": "menuItems",
    "maps.html": "menuMaps",
    "trainer.html": "menuTrainers",
    "update-log.html": "menuUpdate"
  };

  // Remove classes active de todos os links para evitar duplicidade
  document.querySelectorAll(".side-menu a").forEach(link => link.classList.remove("active"));

  if (pages[current]) {
    const activeElement = document.getElementById(pages[current]);
    if (activeElement) activeElement.classList.add("active");
  }
}

/* TRADUÇÃO DO MENU */
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

  for (let id in mapping) {
    const element = document.getElementById(id);
    if (element) {
      // Mantém a estrutura de ícones e texto baseada no idioma selecionado
      element.innerHTML = text[lang][mapping[id]];
    }
  }
};

// Escuta mudanças no localStorage para trocar o idioma em tempo real
window.addEventListener('storage', (e) => {
  if (e.key === 'siteLang') {
    window.updateMenuLang();
  }
});