function kever(tomb) {
    tomb.sort(() => Math.random() - 0.5);
}

function tesztLetrehoz(i, objektum) {
    let tartalom = '';
    tartalom += '<div class="test-egyedi-kerdes">';
    tartalom += `<h3><span class="kerdes-szam">${i + 1}. Kérdés</span>: ${
        objektum.fokerdes
    } (${objektum.helyes} jó válasz)</h3>`;
    if (objektum.kep) {
        tartalom += `<div class="kep-tarto"><img src=${objektum.kep} /></div>`;
    }
    tartalom += '<form>';
    kever(objektum.kerdesek);
    if (objektum.helyes === 1) {
        for (let j = 0; j < objektum.kerdesek.length; j++) {
            tartalom += `<input type="radio" value='${objektum.kerdesek[j].kerdes}' id='${objektum.kerdesek[j].kerdes}' name='${i}kerdes' />`;
            tartalom += `<label for='${objektum.kerdesek[j].kerdes}'>${objektum.kerdesek[j].kerdes}</label><br />`;
        }
    } else {
        for (let j = 0; j < objektum.kerdesek.length; j++) {
            tartalom += `<input type="checkbox" value='${objektum.kerdesek[j].kerdes}' id='${objektum.kerdesek[j].kerdes}' name='${i}kerdes' />`;
            tartalom += `<label for='${objektum.kerdesek[j].kerdes}'>${objektum.kerdesek[j].kerdes}</label><br />`;
        }
    }
    tartalom += '</form>';
    tartalom += `<button class="kigomb" onclick="kivalaszt(${i})">Kiválaszt</button>`;
    tartalom += '<div id="megoldas"></div>';
    tartalom += '</div>';

    return tartalom;
}
