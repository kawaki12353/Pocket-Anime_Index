/**
 * Sistema Global de Emojis de Elementos
 * Arquivo: element_emojis.js
 */

const ElementEmojis = {
    validElements: [
        "fire", "wind", "soul", "water", "earth", "lightning", "ice", "nature", "light", "dark", "psychic", "poison", "fighting", "demon", "beast", "neutral"
    ],

    // Caminho base das imagens (conforme você definiu)
    basePath: "assets/elements/",

    /**
     * Função que converte as tags em texto para tags <img>
     */
    parse: function(text) {
        if (!text) return text;

        // A Regex \[([a-zA-Z]+)\] procura especificamente por LETRAS dentro de colchetes.
        // Isso impede conflitos com o seu sistema de cores numérico tipo [003] e [000].
        const regex = /\[([a-zA-Z]+)\]/g;

        return text.replace(regex, (match, elementName) => {
            const lowerElement = elementName.toLowerCase();

            // Verifica se a palavra dentro do colchete é um dos 16 elementos válidos
            if (this.validElements.includes(lowerElement)) {
                // Se for válido, troca pelo HTML da imagem
                return `<img src="${this.basePath}${lowerElement}_element.png" alt="${lowerElement}" class="element-emoji" title="${lowerElement}">`;
            }

            // Se for uma palavra aleatória entre colchetes (ex: [clique]), ele não faz nada
            return match; 
        });
    },

    /**
     * Varre o HTML da página e aplica as alterações onde houver o padrão.
     */
    applyToDOM: function() {
        // Para evitar quebrar a página processando o body inteiro de uma vez, 
        // vamos buscar tags onde normalmente existem textos.
        // Adicione outras tags ou classes aqui se necessário (ex: '.descricao', '.move-card')
        const elementsToParse = document.querySelectorAll('p, span, div, td, li, h1, h2, h3, h4');

        elementsToParse.forEach(el => {
            // Processa apenas elementos que não possuem filhos (evita reescrever HTML complexo à toa)
            // ou verifica se há algum colchete "[" antes de tentar rodar a regex
            if (el.children.length === 0 && el.innerHTML.includes('[')) {
                el.innerHTML = this.parse(el.innerHTML);
            } else if (el.children.length > 0 && el.innerHTML.includes('[')) {
                // Se o elemento pai tem filhos (ex: uma div com spans dentro), 
                // varremos os nós de texto diretamente para ser super seguro
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes('[')) {
                        // Cria um elemento temporário para converter o texto formatado em HTML real
                        const tempSpan = document.createElement('span');
                        tempSpan.innerHTML = this.parse(node.nodeValue);
                        node.replaceWith(...tempSpan.childNodes);
                    }
                });
            }
        });
    }
};

// Executa o script automaticamente quando a página HTML terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    ElementEmojis.applyToDOM();
});
