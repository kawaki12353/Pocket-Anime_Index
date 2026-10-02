/* =========================================
   SISTEMA GLOBAL DE TEXTOS COLORIDOS
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
  "000": "inherit"  // Restaura cor padrão (Fecha a tag)
};

/**
 * Converte códigos [XXX] em tags <span> com cor inline
 * @param {string} text - O texto original com os códigos [001], [002], etc.
 * @returns {string} HTML formatado com <span>
 */
function parseColoredText(text) {
  if (!text) return "";

  let formatted = text.replace(/\[(\d{3})\]/g, (match, code) => {
    if (code === "000") return "</span>";
    const color = COLOR_MAP[code];
    if (color) return `</span><span style="color: ${color}; font-weight: bold;">`;
    return match;
  });

  return `<span>${formatted}</span>`;
}
