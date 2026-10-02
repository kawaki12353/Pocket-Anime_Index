/* =========================================
   SISTEMA GLOBAL DE TEXTOS FORMATADOS (DISCORD + CORES)
   ========================================= */

// Mapeamento de códigos [XXX] para cores hexadecimais
const COLOR_MAP = {
  "001": "#ff4d4d", // Vermelho
  "002": "#2ecc71", // Verde
  "003": "#f39c12", // Laranja
  "004": "#95a5a6", // Cinza
  "005": "#a93226", // Vinho / Vermelho Escuro
  "006": "#d2b4de", // Lavanda
  "007": "#1a5276", // Azul Escuro
  "008": "#ffe100", // Amarelo
  "009": "#4db8ff", // Azul Claro
  "010": "#703d90", // Roxo
  "011": "#1f56ca", // Azul
  "000": "inherit"  // Restaura cor padrão
};

function parseDiscordBold(text) {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function parseColoredText(text) {
  if (!text) return "";

  let colorOpen = false;

  let formatted = text.replace(/\[(\d{3})\]/g, (match, code) => {
    if (code === "000") {
      if (colorOpen) {
        colorOpen = false;
        return "</span>";
      }
      return "";
    }

    const color = COLOR_MAP[code];
    if (color) {
      let prefix = colorOpen ? "</span>" : "";
      colorOpen = true;
      return `${prefix}<span style="color: ${color};">`;
    }

    return match;
  });

  if (colorOpen) {
    formatted += "</span>";
  }

  return formatted;
}

function parseFormattedText(text) {
  if (!text) return "";
  
  // 1. Aplica o negrito do Discord
  const boldText = parseDiscordBold(text);
  
  // 2. Aplica os códigos de cor
  return parseColoredText(boldText);
}
