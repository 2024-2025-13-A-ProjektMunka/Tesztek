function kever(tomb) {
    tomb.sort(() => Math.random() - 0.5);
}

let teszt = document.querySelector('#teszt-kontener');

kever(csoportmunka[2]);

let helyesek = [];
letrehoz(csoportmunka, teszt);

function felfed(index) {
    const ki = document.querySelectorAll('.kulso-indoklas');
    ki[index].style.visibility = 'visible';
    const kigombok = document.querySelectorAll('.kigomb');
    kigombok[index].style.visibility = 'hidden';
    const hv = document.querySelectorAll('.helyes-valasz');

    let ettol = 0;
    for (let i = 0; i < index; i++) {
        ettol += helyesek[i];
    }

    for (let i = ettol; i < ettol + helyesek[index]; i++) {
        hv[i].style.color = 'green';
        hv[i].style.fontWeight = 'bold';
        hv[i].style.textDecoration = 'underline';
    }
}

const navKontener = document.querySelector('#nav-kontener');
const navKontenerLik = document.querySelectorAll('#nav-kontener li button');

function betolt(index) {
    if (window.innerWidth < 1000) {
        navKontener.style.display = 'none';
    }
    helyesek = [];
    if (index === 0) {
        kever(csoportmunka[2]);
        letrehoz(csoportmunka, teszt);
    } else if (index === 1) {
        kever(html5[2]);
        letrehoz(html5, teszt);
    } else if (index === 2) {
        kever(javaecma[2]);
        letrehoz(javaecma, teszt);
    } else if (index === 3) {
        kever(tisztakod[2]);
        letrehoz(tisztakod, teszt);
    } else if (index === 4) {
        kever(adatbazis[2]);
        letrehoz(adatbazis, teszt);
    } else if (index === 5) {
        kever(mobil[2]);
        letrehoz(mobil, teszt);
    } else if (index === 6) {
        kever(frontend[2]);
        letrehoz(frontend, teszt);
    } else if (index === 7) {
        kever(backend[2]);
        letrehoz(backend, teszt);
    } else if (index === 8) {
        kever(oop[2]);
        letrehoz(oop, teszt);
    } else if (index === 9) {
        kever(tartalomkezelo[2]);
        letrehoz(tartalomkezelo, teszt);
    } else if (index === 10) {
        kever(teszteles[2]);
        letrehoz(teszteles, teszt);
    }
}

function elrejt() {
    console.log('elrejt');

    navKontener.style.display = 'block';
    navKontener.style.zIndex = '10';
    let tomb = Array.from(navKontenerLik);

    for (let i = 0; i < tomb.length; i++) {
        tomb[i].style.backgroundColor = 'blue';
        tomb[i].style.color = 'white';
    }
}
