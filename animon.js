let lang = localStorage.getItem("siteLang") || "pt";
let currentAnimon = null;
let radarChart = null;
let openedMoveBalloon = null;
let currentLocIndex = 0;
let balloonAnchor = null;

const uiText = {
    pt: {
        btnInfo: "Informações", btnMoves: "Moves", btnWeak: "Fraquezas", btnLoc: "Localização",
        noDesc: "Ainda não possui descrição.",
        noMoves: "Ainda não possui movimentos.",
        noTraits: "Sem habilidades ainda",
        notDef: "Ainda não definido.",
        notAvail: "Ainda não é capturavel.",
        lvl: "Nvl", name: "Nome", type: "Tipo", cat: "Categoria",
        btn: "🇧🇷 PT", totalStr: "TOTAL: ", moveEmpty: "Nenhum",
        weak4: "Fraqueza Extrema (x4)",
        weak2: "Fraqueza (x2)",
        normal: "Dano Normal (x1)",
        res05: "Resistência (x0.5)",
        res025: "Super Resistência (x0.25)",
        imm0: "Imune (x0)",
        traits: "Habilidades",
        status: "Status",
        attacks: "Ataques",
        typeChart: "Tabela de Tipo",
        evoTitle: "Grade Evolutiva",
        readMore: "Ver mais",
        readLess: "Ver menos",
        animonsInEvent: "Animons neste evento:"
    },
    en: {
        btnInfo: "Information", btnMoves: "Moves", btnWeak: "Weaknesses", btnLoc: "Location",
        noDesc: "No description available yet.",
        noMoves: "No moves available yet.",
        noTraits: "No traits yet",
        notDef: "Not defined yet.",
        notAvail: "It is not yet capturable.",
        lvl: "Lvl", name: "Name", type: "Type", Carney: "Category",
        btn: "🇺🇸 EN", totalStr: "Total: ", moveEmpty: "None",
        weak4: "Extreme Weakness (x4)",
        weak2: "Weakness (x2)",
        normal: "Normal Damage (x1)",
        res05: "Resistance (x0.5)",
        res025: "Super Resistance (x0.25)",
        imm0: "Immune (x0)",
        traits: "Traits",
        status: "Status",
        attacks: "Attacks",
        typeChart: "Type Chart",
        evoTitle: "Evolution Grade",
        readMore: "See more",
        readLess: "See less",
        animonsInEvent: "Animons in this event:"
    }
};

function openEventModal(eventKey) {
    if (!events) return;
    const ev = Array.isArray(events) ? events.find(e => e.id === eventKey) : events[eventKey];
    if (!ev) return;

    const modal = document.getElementById('eventModal');
    const overlay = document.getElementById('eventOverlay');
    const ui = uiText[lang];

    let animonsHtml = "";
    if (ev.animon && ev.animon.length > 0) {
        animonsHtml = `<div class="event-modal-list"><h4>${ui.animonsInEvent}</h4>`;

        ev.animon.forEach(name => {
            const data = animons.find(a => a.name.toLowerCase() === name.toLowerCase());
            if (data) {
                const sprite = data.sprite || `assets/sprites/${data.id}.png`;
                let typesHtml = "";
                let typesArr = Array.isArray(data.type) ? data.type : (data.types || [data.type]);

                typesArr.forEach(t => {
                    typesHtml += `<img src="assets/${t.toLowerCase().trim()}_element.png" class="event-animon-type-icon" onerror="this.src='assets/neutral_element.png'">`;
                });

                animonsHtml += `
                    <div class="event-animon-item">
                        <div class="event-animon-left">
                            <img src="${sprite}" class="event-animon-sprite" onerror="this.src='assets/sem_icone.png'">
                            <span class="event-animon-name">${data.name}</span>
                        </div>
                        <div class="event-animon-types">${typesHtml}</div>
                    </div>
                `;
            } else {
                animonsHtml += `<div class="event-animon-item"><span class="event-animon-name">${name}</span></div>`;
            }
        });

        animonsHtml += `</div>`;
    }

    modal.innerHTML = `
        <div class="event-modal-title">${ev.name}</div>
        <img src="${ev.sprite}" class="event-modal-sprite" onerror="this.src='assets/sem_icone.png'">
        <div class="event-modal-desc">${parseColoredText(ev[`desc_${lang}`] || ev.desc_pt)}</div>
        ${animonsHtml}
    `;

    overlay.classList.add('active');
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeEventModal() {
    const modal = document.getElementById('eventModal');
    const overlay = document.getElementById('eventOverlay');
    modal.classList.remove('open');
    setTimeout(() => overlay.classList.remove('active'), 300);
}

function getMoveInfo(moveInput) {
    if (!moveInput) return null;
    let finalName = typeof moveInput === 'string' ? moveInput.trim() : (moveInput.name || "Unknown");
    let moveData = null;
    if (typeof moves !== "undefined") {
        if (Array.isArray(moves)) {
            moveData = moves.find(m => (m.name && m.name.toLowerCase().trim() === finalName.toLowerCase()));
        } else {
            const exactKey = Object.keys(moves).find(k => k.toLowerCase().trim() === finalName.toLowerCase());
            if (exactKey) moveData = moves[exactKey];
        }
    }

    if (!moveData) return { name: finalName, typeStr: "neutral", attackStr: "physical", power: "??", accuracy: "??", desc: "??" };

    const typeValue = Array.isArray(moveData.type) ? moveData.type[0] : (moveData.type || "neutral");
    const attackValue = moveData.attack || "physical";

    const finalPower = (moveData.power !== undefined && moveData.power !== null && moveData.power !== "") 
                        ? (moveData.power === 0 || moveData.power === "0" ? "--" : moveData.power) 
                        : "??";

    const finalAccuracy = (moveData.accuracy !== undefined && moveData.accuracy !== null && moveData.accuracy !== "") 
                        ? (moveData.accuracy === 0 || moveData.accuracy === "0" ? "--" : moveData.accuracy) 
                        : "??";

    const rawDesc = moveData[`desc_${lang}`] || moveData.desc_pt || moveData.desc;
    const finalDesc = (rawDesc && rawDesc !== "") ? rawDesc : "??";

    return {
        name: moveData.name || finalName,
        typeStr: String(typeValue).toLowerCase().trim(),
        attackStr: String(attackValue).toLowerCase().trim(),
        power: finalPower,
        accuracy: finalAccuracy,
        desc: finalDesc
    };
}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    if (idParam && typeof animons !== 'undefined') {
        currentAnimon = animons.find(a => a.id == idParam || a.name.toLowerCase() === idParam.toLowerCase());
    }
    if (!currentAnimon) {
        document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>Animon não encontrado</h1>";
        return;
    }

    const currentIdStr = currentAnimon.id.toString();
    const currentBaseId = currentIdStr.split('.')[0];
    const lastIdStr = sessionStorage.getItem('lastAnimonId');
    const lastBaseId = lastIdStr ? lastIdStr.split('.')[0] : null;

    const cameFromSelf = document.referrer.includes("animon.html");
    const isSameFamily = (lastBaseId === currentBaseId) && cameFromSelf;

    document.getElementById('animonIdDisplay').textContent = '#' + currentAnimon.id;

    const spriteSrc = currentAnimon.sprite || `assets/sprites/${currentAnimon.id}.png`;
    document.getElementById('animonSprite').src = spriteSrc;
    document.getElementById('animonSprite').onerror = function() { this.src = 'assets/sem_icone.png'; };

    if (isSameFamily) {
        const savedTab = sessionStorage.getItem('lastTab');
        if (savedTab) switchTab(savedTab);

        setTimeout(() => {
            const scrollPos = sessionStorage.getItem('scrollPos');
            if (scrollPos) {
                window.scrollTo(0, parseInt(scrollPos));
                sessionStorage.removeItem('scrollPos');
            }
        }, 100);
    } else {
        sessionStorage.removeItem('lastTab');
        sessionStorage.removeItem('scrollPos');
        window.scrollTo(0, 0);
    }

    sessionStorage.setItem('lastAnimonId', currentIdStr);

    updateLang();

    document.getElementById('traitsContainer').addEventListener('scroll', updateBalloonPosition);
    document.getElementById('tab-moves').addEventListener('scroll', updateBalloonPosition);
    window.addEventListener('scroll', updateBalloonPosition);
};

window.onbeforeunload = () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
};

function updateLang() {
    if (!currentAnimon) return;
    const ui = uiText[lang];
    document.getElementById('nameInside').textContent = currentAnimon.name;
    document.getElementById('langBtn').textContent = ui.btn;
    document.getElementById('btnInfo').textContent = ui.btnInfo;
    document.getElementById('btnMoves').textContent = ui.btnMoves;
    document.getElementById('btnWeak').textContent = ui.btnWeak;
    document.getElementById('btnLoc').textContent = ui.btnLoc;
    document.getElementById('labelTraits').textContent = ui.traits;
    document.getElementById('labelEvo').textContent = ui.evoTitle;

    const activeTab = document.querySelector('.tab-content.active').id;
    updateTabTitle(activeTab);

    renderDescription();
    renderDescTypes();
    renderStats();
    renderTraits();
    renderMoves();
    renderTypeChart();
    renderEvolutions();
    renderLocations();
}

function renderDescription() {
    const ui = uiText[lang];
    let descText = (currentAnimon.desc && currentAnimon.desc[lang]) ? currentAnimon.desc[lang] : (currentAnimon[`desc_${lang}`] || ui.noDesc);
    descText = descText.replace(/^"|"$/g, ''); 

    const isMobile = window.innerWidth <= 768;
    const limit = 70; 

    if (isMobile && descText.length > limit) {
        const truncated = descText.substring(0, limit) + "...";
        document.getElementById('animonDesc').innerHTML = `<i>${truncated}<span class="read-more-link" onclick="expandDescription()">${ui.readMore}</span></i>`;
    } else {
        document.getElementById('animonDesc').innerHTML = `<i>${descText}</i>`;
    }
}

function expandDescription() {
    const ui = uiText[lang];
    let descText = (currentAnimon.desc && currentAnimon.desc[lang]) ? currentAnimon.desc[lang] : (currentAnimon[`desc_${lang}`] || ui.noDesc);
    descText = descText.replace(/^"|"$/g, ''); 
    document.getElementById('animonDesc').innerHTML = `<i>${descText}<span class="read-more-link" onclick="renderDescription()">${ui.readLess}</span></i>`;
}

function renderDescTypes() {
    const container = document.getElementById('descTypes');
    container.innerHTML = "";
    let rawType = currentAnimon.type || currentAnimon.types || ["neutral"];
    let typesArr = Array.isArray(rawType) ? rawType : [rawType];

    typesArr.forEach(t => {
        const tStr = String(t).toLowerCase().trim();
        const wrapper = document.createElement('div');
        wrapper.className = `element-wrapper element-${tStr}`;

        wrapper.innerHTML = `
            <div class="element-inner">
                <img src="assets/${tStr}_element.png" alt="${t}" onerror="this.src='assets/neutral_element.png'">
            </div>
        `;

        wrapper.onclick = (e) => {
            e.stopPropagation();
            showGeneralBalloon(wrapper, `<span style="text-transform: capitalize; font-weight: bold;">${t}</span>`);
        };

        container.appendChild(wrapper);
    });
}

function renderStats() {
    const st = currentAnimon.stats || { hp:0, atk:0, def:0, spAtk:0, spDef:0, spd:0 };
    const total = st.hp + st.atk + st.def + (st.spAtk || 0) + (st.spDef || 0) + st.spd;
    document.getElementById('statsTotal').textContent = uiText[lang].totalStr + total;
    const rootStyle = getComputedStyle(document.documentElement);
    const textColor = rootStyle.getPropertyValue('--text').trim() || '#111';
    const chartFill = rootStyle.getPropertyValue('--chart-fill').trim() || 'rgba(13, 71, 161, 0.4)';
    const chartLine = rootStyle.getPropertyValue('--chart-line').trim() || '#0d47a1';
    const ctx = document.getElementById('statsChart').getContext('2d');
    if (radarChart) radarChart.destroy();
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [`HP: ${st.hp}`, `ATK: ${st.atk}`, `DEF: ${st.def}`, `SPEED: ${st.spd}`, `SP.DEF: ${st.spDef}`, `SP.ATK: ${st.spAtk}`],
            datasets: [{
                data: [st.hp, st.atk, st.def, st.spd, st.spDef, st.spAtk],
                backgroundColor: chartFill,
                borderColor: chartLine,
                pointBackgroundColor: chartLine,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: { color: textColor, opacity: 0.2 },
                    grid: { color: textColor, opacity: 0.2 },
                    pointLabels: { color: textColor, font: { size: 11, weight: 'bold' }, padding: 10 },
                    ticks: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 160
                }
            },
            plugins: { legend: { display: false }, tooltip: { enabled: false } }
        }
    });
}

function renderTraits() {
    const container = document.getElementById('traitsContainer');
    const ui = uiText[lang];
    container.innerHTML = "";
    let traitsList = currentAnimon.traits || [];
    if (traitsList.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.cursor = 'pointer';
        emptyMsg.style.opacity = '0.7';
        emptyMsg.textContent = ui.noTraits;
        emptyMsg.onclick = (e) => { e.stopPropagation(); showGeneralBalloon(emptyMsg, ""); };
        container.appendChild(emptyMsg);
        return;
    }
    const sortedTraits = [...traitsList].sort((a, b) => (parseInt(b.chance) || 0) - (parseInt(a.chance) || 0));
    const listWrapper = document.createElement('div');
    listWrapper.className = 'trait-list-wrapper';
    sortedTraits.forEach(traitObj => {
        const tName = traitObj.name;
        const tChance = traitObj.chance;
        let tInfo = "";
        if (typeof traits !== 'undefined') {
            const data = (Array.isArray(traits)) ? traits.find(x => x.name === tName) : traits[tName];
            if (data) tInfo = data[`desc_${lang}`] || data.desc_pt || data.desc || "";
        }
        const btn = document.createElement('div');
        btn.className = 'trait-button';
        btn.innerHTML = `<div class="trait-chance-tag">${tChance}</div><div class="trait-name-section"><span>${tName}</span><div class="trait-info-icon-ui">i</div></div>`;
        btn.onclick = (e) => { e.stopPropagation(); showGeneralBalloon(btn, tInfo); };
        listWrapper.appendChild(btn);
    });
    container.appendChild(listWrapper);
}

function renderMoves() {
    const container = document.getElementById('movesContainer');
    const ui = uiText[lang];
    container.innerHTML = "";
    const movesList = currentAnimon.movesList || [];
    if (movesList.length === 0) {
        container.innerHTML = `<p style="text-align: center;">${ui.noMoves}</p>`;
        return;
    }
    const sortedMoves = [...movesList].sort((a, b) => a.level - b.level);
    const header = document.createElement('div');
    header.className = 'move-item move-header';
    header.innerHTML = `<span>${ui.lvl}</span><span class="move-name">${ui.name}</span><span>${ui.type}</span><span>${ui.cat}</span>`;
    container.appendChild(header);
    sortedMoves.forEach(m => {
        const minfo = getMoveInfo(m.name);
        const row = document.createElement('div');
        row.className = 'move-item';
        row.dataset.power = minfo.power;
        row.dataset.acc = minfo.accuracy;
        row.dataset.desc = minfo.desc;
        row.innerHTML = `<span style="color: #bbb;">lvl ${m.level}</span><span class="move-name">${minfo.name}</span><img src="assets/${minfo.typeStr}_element.png" class="move-icon" onerror="this.src='assets/neutral_element.png'"><img src="assets/${minfo.attackStr}.png" class="move-icon" onerror="this.src='assets/physical.png'">`;
        row.onclick = (e) => { e.stopPropagation(); toggleMoveBalloon(row); };
        container.appendChild(row);
    });
}

function showGeneralBalloon(element, text) {
    if (openedMoveBalloon) { openedMoveBalloon.remove(); openedMoveBalloon = null; }
    const balloon = document.createElement("div");
    balloon.className = "move-balloon";
    if (text && text !== "") balloon.innerHTML = `<div style="white-space: normal; max-width: 250px; text-align: justify;">${parseColoredText(text)}</div>`;
    else { balloon.style.display = "none"; }
    document.body.appendChild(balloon);

    balloonAnchor = element;
    const rect = element.getBoundingClientRect();
    balloon.style.left = (rect.left + rect.width / 2) + "px";
    balloon.style.top = (rect.bottom + window.scrollY + 8) + "px"; 
    openedMoveBalloon = balloon;
    setTimeout(() => { document.addEventListener("click", closeMoveBalloonOnce, { once: true }); }, 0);
}

function toggleMoveBalloon(moveDiv) {
    if (openedMoveBalloon) { openedMoveBalloon.remove(); openedMoveBalloon = null; }
    const power = moveDiv.dataset.power;
    const acc = moveDiv.dataset.acc;
    const desc = moveDiv.dataset.desc;
    const balloon = document.createElement("div");
    balloon.className = "move-balloon";
    let contentHtml = "";
    if (desc && desc !== "undefined" && desc !== "") contentHtml += `<div style="white-space: normal; max-width: 250px; margin-bottom: 8px; text-align: justify;">${parseColoredText(desc)}</div>`;
    contentHtml += `<div style="text-align: center; border-top: 1px solid var(--border); padding-top: 5px;"><span style="color: #ee5047;"><b>Power:</b> ${power}</span> &nbsp;|&nbsp; <span style="color: #fde4a1;"><b>Accuracy:</b> ${acc}</span></div>`;
    balloon.innerHTML = contentHtml;
    document.body.appendChild(balloon);

    balloonAnchor = moveDiv;
    const rect = moveDiv.getBoundingClientRect();
    balloon.style.left = (rect.left + rect.width / 2) + "px";
    balloon.style.top = (rect.bottom + window.scrollY + 8) + "px"; 
    openedMoveBalloon = balloon;
    setTimeout(() => { document.addEventListener("click", closeMoveBalloonOnce, { once: true }); }, 0);
}

function updateBalloonPosition() {
    if (!openedMoveBalloon || !balloonAnchor) return;
    const rect = balloonAnchor.getBoundingClientRect();
    const parentContainer = balloonAnchor.closest('.tab-content, .traits-container');
    if (parentContainer) {
        const parentRect = parentContainer.getBoundingClientRect();
        const buffer = 10;
        if (rect.bottom < parentRect.top + buffer || rect.top > parentRect.bottom - buffer) {
            closeMoveBalloonOnce();
            return;
        }
    }
    openedMoveBalloon.style.left = (rect.left + rect.width / 2) + "px";
    openedMoveBalloon.style.top = (rect.bottom + window.scrollY + 8) + "px";
}

function closeMoveBalloonOnce() { if (openedMoveBalloon) { openedMoveBalloon.remove(); openedMoveBalloon = null; balloonAnchor = null; } }

function renderTypeChart() {
    const container = document.getElementById('typeChartContent');
    const ui = uiText[lang];
    container.innerHTML = "";
    if (typeof chart === 'undefined' || !currentAnimon) return;
    let defenderTypes = [];
    let rawType = currentAnimon.type || currentAnimon.types;
    if (Array.isArray(rawType)) defenderTypes = rawType.filter(t => t).map(t => t.toLowerCase().trim());
    else if (rawType) defenderTypes = [rawType.toLowerCase().trim()];
    if (defenderTypes.length === 0) { container.innerHTML = `<p>${ui.notDef}</p>`; return; }
    const allAttackTypes = Object.keys(chart);
    const multipliers = {};
    allAttackTypes.forEach(atkType => {
        let totalMult = 1.0;
        const atkData = chart[atkType];
        defenderTypes.forEach(defType => {
            const matchKey = Object.keys(atkData).find(k => k.toLowerCase() === defType);
            if (matchKey) totalMult *= atkData[matchKey];
        });
        multipliers[atkType] = totalMult;
    });
    const groups = { x4: [], x2: [], x1: [], x05: [], x025: [], x0: [] };
    Object.entries(multipliers).forEach(([type, val]) => {
        if (val >= 3.5) groups.x4.push(type);
        else if (val >= 1.5 && val < 3.5) groups.x2.push(type);
        else if (val > 0.8 && val < 1.2) groups.x1.push(type);
        else if (val > 0.3 && val <= 0.7) groups.x05.push(type);
        else if (val > 0 && val <= 0.3) groups.x025.push(type);
        else if (val === 0) groups.x0.push(type);
    });
    const order = [{ key: 'x4', label: ui.weak4, val: '4x' }, { key: 'x2', label: ui.weak2, val: '2x' }, { key: 'x1', label: ui.normal, val: '1x' }, { key: 'x05', label: ui.res05, val: '0.5x' }, { key: 'x025', label: ui.res025, val: '0.25x' }, { key: 'x0', label: ui.imm0, val: '0x' }];
    order.forEach(group => {
        if (groups[group.key].length > 0) {
            const section = document.createElement('div');
            section.className = 'type-section';
            const title = document.createElement('div');
            title.className = 'type-section-title';
            title.textContent = group.label;
            section.appendChild(title);
            const grid = document.createElement('div');
            grid.className = 'type-grid';
            groups[group.key].forEach(typeName => {
                const badge = document.createElement('div');
                badge.className = 'type-badge';
                const lowName = typeName.toLowerCase();
                badge.innerHTML = `<img src="assets/${lowName}_element.png" onerror="this.src='assets/neutral_element.png'"><span style="text-transform: capitalize;">${typeName}</span><span class="dmg-multiplier">${group.val}</span>`;
                grid.appendChild(badge);
            });
            section.appendChild(grid);
            container.appendChild(section);
        }
    });
}

function renderEvolutions() {
    const container = document.getElementById('evoContainer');
    container.innerHTML = "";
    if (typeof animons === 'undefined') return;
    const baseId = currentAnimon.id.toString().split('.')[0];
    const family = animons.filter(a => { const aId = a.id.toString(); return aId === baseId || aId.startsWith(baseId + "."); }).sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    if (family.length <= 1) { container.innerHTML = `<p style="text-align:center; opacity:0.6;">${lang === 'pt' ? 'Não possui evoluções.' : 'No evolutions available.'}</p>`; return; }
    const wrapper = document.createElement('div');
    wrapper.className = 'evo-wrapper';
    family.forEach((member, index) => {
        if (index > 0) { const arrow = document.createElement('div'); arrow.className = 'evo-arrow'; arrow.innerHTML = '→'; wrapper.appendChild(arrow); }
        const isCurrent = member.id.toString() === currentAnimon.id.toString();
        const card = document.createElement(isCurrent ? 'div' : 'a');
        card.className = `evo-card ${isCurrent ? 'current' : 'clickable'}`;
        if (!isCurrent) card.href = `animon.html?id=${member.id}`;
        const sprite = member.sprite || `assets/sprites/${member.id}.png`;
        let typesHtml = "";
        let rawType = member.type || member.types || ["neutral"];
        let typesArr = Array.isArray(rawType) ? rawType : [rawType];
        typesArr.forEach(t => { typesHtml += `<img src="assets/${t.toLowerCase().trim()}_element.png" class="evo-type-icon" onerror="this.src='assets/neutral_element.png'">`; });
        card.innerHTML = `<div class="evo-mini-frame"><img src="${sprite}" onerror="this.src='assets/sem_icone.png'"></div><div class="evo-name-tag">${member.name}</div><div class="evo-types-row">${typesHtml}</div>`;
        wrapper.appendChild(card);
    });
    container.appendChild(wrapper);
}

function renderLocations() {
    const container = document.getElementById('locationContent');
    container.innerHTML = "";
    if (!currentAnimon) return;

    let eventBtn = null;
    if (currentAnimon.event && typeof events !== 'undefined') {
        const evKey = currentAnimon.event;
        const eventData = Array.isArray(events) ? events.find(e => e.id === evKey) : events[evKey];
        if (eventData) {
            eventBtn = document.createElement('div');
            eventBtn.className = 'event-banner-btn';
            eventBtn.innerHTML = `<span>${eventData.chat}</span><span style="font-size: 18px;">ⓘ</span>`;
            eventBtn.onclick = () => openEventModal(evKey);
        }
    }

    if (!currentAnimon.areas || currentAnimon.areas.length === 0) { 
        const noAvail = document.createElement('p');
        noAvail.style.textAlign = 'center';
        noAvail.style.fontWeight = 'bold';
        noAvail.textContent = uiText[lang].notAvail;
        container.appendChild(noAvail);
        if (eventBtn) container.appendChild(eventBtn);
        return; 
    }

    const areaIds = currentAnimon.areas;
    const areaDataList = areaIds.map(id => areas[id]).filter(data => data);

    if (areaDataList.length === 0) { 
        const noAvail = document.createElement('p');
        noAvail.style.textAlign = 'center';
        noAvail.style.fontWeight = 'bold';
        noAvail.textContent = uiText[lang].notAvail;
        container.appendChild(noAvail);
        if (eventBtn) container.appendChild(eventBtn);
        return; 
    }

    currentLocIndex = 0;
    const locWrapper = document.createElement('div');
    locWrapper.className = 'location-container';

    const viewport = document.createElement('div');
    viewport.className = 'location-viewport';

    const track = document.createElement('div');
    track.className = 'location-track';

    areaDataList.forEach(area => {
        const slide = document.createElement('div');
        slide.className = 'location-slide';
        const desc = lang === 'pt' ? area.desc_pt : area.desc_en;
        slide.innerHTML = `
            <div class="location-region">${area.region}</div>
            <div class="location-desc">${desc}</div>
            <img src="${area.file}" class="location-image" onerror="this.src='assets/sem_icone.png'">
        `;
        track.appendChild(slide);
    });

    viewport.appendChild(track);
    locWrapper.appendChild(viewport);

    const dotsRow = document.createElement('div');
    dotsRow.className = 'location-image-dots';
    if (areaDataList.length > 1) {
        areaDataList.forEach((_, i) => { 
            const dot = document.createElement('div'); 
            dot.className = `dot ${i === 0 ? 'active' : ''}`; 
            dot.onclick = () => moveToSlide(i); 
            dotsRow.appendChild(dot); 
        });
    }
    locWrapper.appendChild(dotsRow);

    function moveToSlide(index) {
        if (index >= areaDataList.length) index = 0;
        else if (index < 0) index = areaDataList.length - 1;
        currentLocIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        const allDots = dotsRow.querySelectorAll('.dot');
        allDots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    let startX = 0;
    let isDragging = false;
    const dragStart = (e) => { isDragging = true; startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX; track.style.transition = 'none'; };
    const dragMove = (e) => { if (!isDragging) return; const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX; const walk = x - startX; const baseTranslate = -(currentLocIndex * 100); const percentMove = (walk / viewport.offsetWidth) * 100; track.style.transform = `translateX(${baseTranslate + percentMove}%)`; };
    const dragEnd = (e) => { if (!isDragging) return; isDragging = false; track.style.transition = ''; const x = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX; const diff = startX - x; if (Math.abs(diff) > 50) { if (diff > 0) moveToSlide(currentLocIndex + 1); else moveToSlide(currentLocIndex - 1); } else { moveToSlide(currentLocIndex); } };

    viewport.addEventListener('mousedown', dragStart); viewport.addEventListener('mousemove', dragMove); window.addEventListener('mouseup', dragEnd);
    viewport.addEventListener('touchstart', dragStart, {passive: true}); viewport.addEventListener('touchmove', dragMove, {passive: true}); viewport.addEventListener('touchend', dragEnd, {passive: true});

    container.appendChild(locWrapper);

    if (eventBtn) {
        container.appendChild(eventBtn);
    }
}

function updateTabTitle(tabId) {
    const ui = uiText[lang];
    const display = document.getElementById('tabTitleDisplay');
    if (tabId === 'tab-info') display.textContent = ui.status;
    else if (tabId === 'tab-moves') display.textContent = ui.attacks;
    else if (tabId === 'tab-weak') display.textContent = ui.typeChart;
    else if (tabId === 'tab-loc') display.textContent = ui.btnLoc;
}

function switchTab(tabId) {
    closeMoveBalloonOnce(); 
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    const btnMap = { 'tab-info': 'btnInfo', 'tab-moves': 'btnMoves', 'tab-weak': 'btnWeak', 'tab-loc': 'btnLoc' };
    document.getElementById(btnMap[tabId]).classList.add('active');
    updateTabTitle(tabId);
    sessionStorage.setItem('lastTab', tabId);
}

document.getElementById("langBtn").onclick = () => {
    lang = lang === "pt" ? "en" : "pt";
    localStorage.setItem("siteLang", lang);
    updateLang();
    if (typeof updateMenuLang === "function") updateMenuLang();
};