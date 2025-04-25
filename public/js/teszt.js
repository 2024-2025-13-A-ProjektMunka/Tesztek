function valogat(tomb, mennyit) {
    if (mennyit === 1) {
        let szam = Math.floor(Math.random() * tomb[2].length);
        return szam;
    } else {
        let belsoTomb = [];
        let szam1 = Math.floor(Math.random() * tomb[2].length);
        belsoTomb.push(szam1);
        let szam2 = Math.floor(Math.random() * tomb[2].length);
        while (szam1 === szam2) {
            szam2 = Math.floor(Math.random() * tomb[2].length);
        }
        belsoTomb.push(szam2);

        return belsoTomb;
    }
}

let kerdesek = [];
kerdesek = [...kerdesek, csoportmunka[2][valogat(csoportmunka, 2)[0]]];
kerdesek = [...kerdesek, csoportmunka[2][valogat(csoportmunka, 2)[1]]];
kerdesek = [...kerdesek, html5[2][valogat(html5, 2)[0]]];
kerdesek = [...kerdesek, html5[2][valogat(html5, 2)[1]]];
// kerdesek = [...kerdesek, javaecma];
kerdesek = [...kerdesek, tisztakod[2][valogat(tisztakod, 2)[0]]];
kerdesek = [...kerdesek, tisztakod[2][valogat(tisztakod, 2)[1]]];
kerdesek = [...kerdesek, adatbazis[2][valogat(adatbazis, 2)[0]]];
kerdesek = [...kerdesek, adatbazis[2][valogat(adatbazis, 2)[1]]];
kerdesek = [...kerdesek, mobil[2][valogat(mobil, 1)]];
// kerdesek = [...kerdesek, frontend];
// kerdesek = [...kerdesek, backend];
// kerdesek = [...kerdesek, oop];
// kerdesek = [...kerdesek, tartalomkezelo];
// kerdesek = [...kerdesek, teszteles];

kever(kerdesek);

const testKerdes = document.querySelector('#test-kerdes');
const balraNyil = document.querySelector('#balra-nyil');
const jobbraNyil = document.querySelector('#jobbra-nyil');

let szamolo = 0;

testKerdes.innerHTML = tesztLetrehoz(szamolo, kerdesek[szamolo]);

function elore() {
    szamolo++;
    if (szamolo === 0) {
        // balraNyil.style.visibility = 'hidden';
        console.log(kerdesek[szamolo]);
    } else if (szamolo === kerdesek.length - 1) {
        jobbraNyil.style.visibility = 'hidden';
        console.log(kerdesek[szamolo]);
    } else {
        // balraNyil.style.visibility = 'visible';
        jobbraNyil.style.visibility = 'visible';
        console.log(kerdesek[szamolo]);
    }
    testKerdes.innerHTML = tesztLetrehoz(szamolo, kerdesek[szamolo]);
}

function hatra() {
    szamolo--;
    if (szamolo === 0) {
        // balraNyil.style.visibility = 'hidden';
    } else if (szamolo === kerdesek.length - 1) {
        jobbraNyil.style.visibility = 'hidden';
    } else {
        // balraNyil.style.visibility = 'visible';
        jobbraNyil.style.visibility = 'visible';
    }
    testKerdes.innerHTML = tesztLetrehoz(szamolo, kerdesek[szamolo]);
}

let szerzettPont = 0;

function kivalaszt(i) {
    let tippek = document.getElementsByName(`${i}kerdes`);
    let joTippek = [];
    let helyesMegoldasok = [];
    for (let k = 0; k < tippek.length; k++) {
        if (tippek[k].checked) joTippek.push(tippek[k].value);
    }

    console.log(joTippek);

    let megoldas = document.querySelector('#megoldas');
    let helyes = '<ul>';

    for (let j = 0; j < kerdesek[i].kerdesek.length; j++) {
        if (kerdesek[i].kerdesek[j].eldont === 1) {
            helyes += `<li>${kerdesek[i].kerdesek[j].kerdes}</li>`;
            let szo = kerdesek[i].kerdesek[j].kerdes.replaceAll('&lt;', '<');
            szo = szo.replaceAll('&gt;', '>');
            helyesMegoldasok.push(szo);
        }
    }
    helyes += '</ul>';

    console.log(helyesMegoldasok);

    if (helyesMegoldasok.length === 1 && helyesMegoldasok[0] === joTippek[0]) {
        szerzettPont += 2;
        helyes += `<p>Kapott pont 2/2, eddig ${
            (i + 1) * 2
        }/${szerzettPont}, azaz ${Math.floor(
            (szerzettPont / ((i + 1) * 2)) * 100
        )}%</p>`;
    } else if (helyesMegoldasok.length === 2) {
        let jo = 0;
        for (let l = 0; l < joTippek.length; l++) {
            for (let n = 0; n < 2; n++) {
                if (joTippek[l] === helyesMegoldasok[n]) jo++;
            }
        }

        if (jo === 2) {
            if (joTippek.length === 2) {
                szerzettPont += 2;
                helyes += `<p>Kapott pont 2/2, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            } else if (joTippek.length === 3 || joTippek.length === 4) {
                helyes += `<p>Kapott pont 2/0, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            }
        } else if (jo === 1) {
            if (joTippek.length === 2 || joTippek.length === 1) {
                szerzettPont += 1;
                helyes += `<p>Kapott pont 2/1, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            } else if (joTippek.length === 3 || joTippek.length === 4) {
                helyes += `<p>Kapott pont 2/0, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            }
        } else {
            helyes += `<p>Kapott pont 2/0, eddig ${
                (i + 1) * 2
            }/${szerzettPont}, azaz ${Math.floor(
                (szerzettPont / ((i + 1) * 2)) * 100
            )}%</p>`;
        }
    } else if (helyesMegoldasok.length === 3) {
        let jo = 0;
        for (let l = 0; l < joTippek.length; l++) {
            for (let n = 0; n < 3; n++) {
                if (joTippek[l] === helyesMegoldasok[n]) jo++;
            }
        }

        if (jo === 3) {
            if (joTippek.length === 3) {
                szerzettPont += 2;
                helyes += `<p>Kapott pont 2/2, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            } else if (joTippek.length === 4) {
                helyes += `<p>Kapott pont 2/0, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            }
        } else if (jo === 2 || jo === 1) {
            if (
                joTippek.length === 3 ||
                joTippek.length === 2 ||
                joTippek.length === 1
            ) {
                szerzettPont += 1;
                helyes += `<p>Kapott pont 2/1, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            } else if (joTippek.length === 4) {
                helyes += `<p>Kapott pont 2/0, eddig ${
                    (i + 1) * 2
                }/${szerzettPont}, azaz ${Math.floor(
                    (szerzettPont / ((i + 1) * 2)) * 100
                )}%</p>`;
            }
        } else {
            helyes += `<p>Kapott pont 2/0, eddig ${
                (i + 1) * 2
            }/${szerzettPont}, azaz ${Math.floor(
                (szerzettPont / ((i + 1) * 2)) * 100
            )}%</p>`;
        }
    } else {
        helyes += `<p>Kapott pont 2/0, eddig ${
            (i + 1) * 2
        }/${szerzettPont}, azaz ${Math.floor(
            (szerzettPont / ((i + 1) * 2)) * 100
        )}%</p>`;
    }

    megoldas.innerHTML = helyes;
}
