function letrehoz(tomb, ehhez) {
    let tartalom = '';
    tartalom += '<div id="elrejt" onclick="elrejt()">';
    tartalom += '<span class="material-symbols-outlined"> menu </span>';
    tartalom += '</div>';
    tartalom += `<h1>${tomb[0]}</h1>`;
    tartalom += `<p>(${tomb[2].length} kérdés) </p>`;
    tartalom += '<div class="kerdesek-kontener">';
    for (let i = 0; i < tomb[2].length; i++) {
        helyesek.push(tomb[2][i].helyes);
        tartalom += '<div class="egyedi-kerdes">';
        tartalom += `<h3><span class="kerdes-szam">${i + 1}. Kérdés</span>: ${
            tomb[2][i].fokerdes
        } (${tomb[2][i].helyes} jó válasz)</h3>`;
        if (tomb[2][i].kep) {
            tartalom += `<div class="kep-tarto"><img src=${tomb[2][i].kep} /></div>`;
        }
        tartalom += '<ul>';
        kever(tomb[2][i].kerdesek);
        for (let j = 0; j < tomb[2][i].kerdesek.length; j++) {
            if (tomb[2][i].kerdesek[j].eldont === 1) {
                tartalom += `<li class="helyes-valasz">${tomb[2][i].kerdesek[j].kerdes}</li>`;
            } else {
                tartalom += `<li>${tomb[2][i].kerdesek[j].kerdes}</li>`;
            }
        }
        tartalom += '</ul>';
        tartalom += `<p class="kulso-indoklas"><span class="indoklas">Indoklás</span>: ${tomb[2][i].indoklas}</p>`;
        tartalom += `<button class="kigomb" onclick="felfed(${i})">Megoldás</button>`;
        tartalom += '</div>';
    }
    tartalom += '</div>';
    ehhez.innerHTML = tartalom;
}
