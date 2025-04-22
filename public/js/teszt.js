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

const testKerdes = document.querySelector('#test-kerdes');

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
console.log(kerdesek);

testKerdes.innerHTML = 'alma';
