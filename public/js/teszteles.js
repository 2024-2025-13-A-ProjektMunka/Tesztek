let teszteles = [
    'Tesztelés',
    10,
    [
        {
            fokerdes:
                'Melyik állítás nem igaz az egységtesztekkel kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Egységtesztek kis kódrészek, például függvények vagy metódusok tesztelésére szolgálnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egységtesztek végrehajtása gyors és olcsó.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egységtesztekkel a teljes rendszert egyszerre teszteljük.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egységtesztek gyakran automatikusan futtathatók a fejlesztési folyamat során.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 1,
            indoklas:
                'Az egységtesztek kis kódrészeket vizsgálnak külön-külön, nem az egész rendszert egyszerre.',
        },
        {
            fokerdes: 'Milyen feladatokat lát el az integrációs tesztelés?',
            kerdesek: [
                {
                    kerdes: 'Teszteli az egyes komponensek közötti adatcserét.',
                    eldont: 1,
                },
                {
                    kerdes: 'Vizsgálja az adatbázis és a backend szerver közötti kapcsolatot.',
                    eldont: 1,
                },
                {
                    kerdes: 'Kizárólag felhasználói felület tesztelésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak a forráskód stílusát ellenőrzi.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 2,
            indoklas:
                'Az integrációs tesztelés az egyes komponensek közötti működést és adatcserét ellenőrzi, például adatbázis-kapcsolatokat.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a rendszerteszteléssel kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A rendszertesztelés a teljes alkalmazást egy egészként vizsgálja.',
                    eldont: 0,
                },
                {
                    kerdes: 'A rendszertesztelés során a rendszer összes modulját külön-külön tesztelik, nem együtt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A rendszertesztelés ellenőrzi a funkcionális és nem-funkcionális követelmények teljesülését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A rendszertesztelés egy független tesztelési szakasz lehet a fejlesztés után.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 1,
            indoklas:
                'A rendszertesztelés a teljes alkalmazást együtt vizsgálja, nem modulonként külön-külön.',
        },
        {
            fokerdes: 'Mely állítások igazak az átvételi tesztelésre?',
            kerdesek: [
                {
                    kerdes: 'Az átvételi tesztelést gyakran az ügyfél vagy a végfelhasználó végzi.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az átvételi tesztelés célja annak ellenőrzése, hogy a rendszer megfelel-e az üzleti követelményeknek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az átvételi tesztelés csak a fejlesztők belső ellenőrzésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'Átvételi teszteléskor kizárólag a kód minőségét ellenőrzik.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 2,
            indoklas:
                'Az átvételi tesztelést az ügyfél végzi, hogy eldöntse, átveszi-e a terméket, az üzleti követelmények teljesülése alapján.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a szoftver életciklusára?',
            kerdesek: [
                {
                    kerdes: 'A szoftver életciklusa a tervezéssel és fejlesztéssel kezdődik.',
                    eldont: 0,
                },
                {
                    kerdes: 'A szoftver életciklusa a karbantartási fázissal ér véget.',
                    eldont: 0,
                },
                {
                    kerdes: 'A szoftver életciklusa kizárólag a kódolás szakaszára korlátozódik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A tesztelés is része a szoftver életciklusának.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 1,
            indoklas:
                'A szoftver életciklusa nem csak a kódolásra korlátozódik; magába foglalja a tervezést, tesztelést, bevezetést és karbantartást is.',
        },
        {
            fokerdes:
                'Mely modellek tartoznak a szoftverfejlesztés életciklus modelljei közé?',
            kerdesek: [
                {
                    kerdes: 'Vízesés modell (Waterfall Model)',
                    eldont: 1,
                },
                {
                    kerdes: 'Agilis (Agile) megközelítés',
                    eldont: 1,
                },
                {
                    kerdes: 'Ciklusmentes modell',
                    eldont: 0,
                },
                {
                    kerdes: 'Fizikai hardvermodell',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 2,
            indoklas:
                'A vízesés modell és az agilis megközelítés is a szoftverfejlesztési életciklus-modellek közé tartozik.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a szoftver karbantartási szakaszára?',
            kerdesek: [
                {
                    kerdes: 'A karbantartás során hibák javítása történik.',
                    eldont: 0,
                },
                {
                    kerdes: 'A karbantartás célja a szoftver funkcionalitásának bővítése is lehet.',
                    eldont: 0,
                },
                {
                    kerdes: 'A karbantartás kizárólag az alkalmazás grafikai megjelenésének változtatására korlátozódik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A karbantartás során új követelmények beépítése is megtörténhet.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 1,
            indoklas:
                'A karbantartás nemcsak grafikai változásokat, hanem hibajavítást, új funkciók hozzáadását is tartalmazhat.',
        },
        {
            fokerdes:
                'Milyen feladatokat lát el a tesztelés a szoftver életciklusa során?',
            kerdesek: [
                {
                    kerdes: 'Hibák azonosítása a fejlesztés után.',
                    eldont: 1,
                },
                {
                    kerdes: 'Biztosítani a követelmények helyes megvalósítását.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak a dokumentáció készítése.',
                    eldont: 0,
                },
                {
                    kerdes: 'A rendszer funkcionalitásának mellőzése.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 2,
            indoklas:
                'A tesztelés célja a hibák felderítése és annak ellenőrzése, hogy a rendszer megfelel-e a követelményeknek.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a Vízesés (Waterfall) modellre?',
            kerdesek: [
                {
                    kerdes: 'A vízesés modell szigorúan egymás után következő fázisokat ír elő.',
                    eldont: 0,
                },
                {
                    kerdes: 'A következő fázis csak az előző teljes befejezése után kezdődhet.',
                    eldont: 0,
                },
                {
                    kerdes: 'A vízesés modell rugalmasan támogatja a folyamatos változtatásokat a projekt során.',
                    eldont: 1,
                },
                {
                    kerdes: 'A vízesés modell alkalmas stabil és jól meghatározott projektekhez.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 1,
            indoklas:
                'A vízesés modell merev és nehezen kezeli a változásokat, mivel minden fázist teljesen le kell zárni a következő előtt.',
        },
        {
            fokerdes:
                'Mely állítások igazak az agilis fejlesztési módszertanokra?',
            kerdesek: [
                {
                    kerdes: 'Az agilis módszertan iteratív és inkrementális fejlesztést alkalmaz.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az agilis módszertan szigorúan tiltja az ügyfél közvetlen bevonását.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az agilis fejlesztés hangsúlyozza a gyorsan reagáló, rugalmas munkafolyamatokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az agilis projektek ritkán módosulnak a fejlesztés során.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 2,
            indoklas:
                'Az agilis módszertanok rugalmasak, iteratív fejlesztést támogatnak és kiemelten kezelik az ügyfél visszajelzéseit.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az iteratív fejlesztési modellre?',
            kerdesek: [
                {
                    kerdes: 'Az iteratív fejlesztés lehetőséget ad a fokozatos tökéletesítésre.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az iteratív modellben egyszerre az összes funkciót teljesen ki kell fejleszteni.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az iterációk során a termék részleteiben fejlődik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az iteratív modell lehetőséget biztosít a visszajelzések alapján történő módosításokra.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 1,
            indoklas:
                'Az iteratív modell célja a fokozatos fejlesztés és finomítás, nem az összes funkció azonnali megvalósítása.',
        },
        {
            fokerdes: 'Mely állítások igazak a DevOps módszertanra?',
            kerdesek: [
                {
                    kerdes: 'A DevOps célja a fejlesztés és az üzemeltetés közötti együttműködés javítása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DevOps modellben a fejlesztés és üzemeltetés teljesen különálló csapatokat jelent.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DevOps elősegíti az automatizált folyamatok használatát a gyorsabb szállítás érdekében.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DevOps kizárólag csak manuális telepítési folyamatokra épül.',
                    eldont: 0,
                },
            ],
            kep: 'https://docplayer.hu/docs-images/91/107170913/images/15-0.jpg',
            helyes: 2,
            indoklas:
                'A DevOps az együttműködés és az automatizáció előmozdítását szolgálja a fejlesztés és az üzemeltetés között.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a V-modellre?',
            kerdesek: [
                {
                    kerdes: 'A V-modellben a fejlesztési fázisok mindegyikéhez kapcsolódik egy megfelelő tesztelési szint.',
                    eldont: 0,
                },
                {
                    kerdes: 'A V-modell egy lineáris, kizárólag fejlesztési fázisokból álló modell.',
                    eldont: 1,
                },
                {
                    kerdes: 'A V-modell a tesztelési tevékenységeket korai szakaszban is figyelembe veszi.',
                    eldont: 0,
                },
                {
                    kerdes: 'A V-modell az egyes fejlesztési fázisok lezárása után tesztelési fázisokkal folytatódik.',
                    eldont: 0,
                },
            ],
            kep: 'https://rockkid777.github.io/pti-msc-2015-zv/s01/img/v_model.png',
            helyes: 1,
            indoklas:
                'A V-modell fejlesztési és tesztelési fázisokat is tartalmaz, nem csupán lineáris fejlesztési lépésekből áll.',
        },
        {
            fokerdes:
                'Mely állítások igazak a V-modell tesztelési megközelítésére?',
            kerdesek: [
                {
                    kerdes: 'Az egységtesztelés az implementáció után közvetlenül történik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A rendszerintegrációs teszt az egyedi modulok tesztelése után következik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A V-modell kizárólag az éles üzem előtti tesztelést támogatja.',
                    eldont: 0,
                },
                {
                    kerdes: 'A tesztelést csak a projekt végén szabad elkezdeni.',
                    eldont: 0,
                },
            ],
            kep: 'https://rockkid777.github.io/pti-msc-2015-zv/s01/img/v_model.png',
            helyes: 2,
            indoklas:
                'A V-modell minden fejlesztési szinthez megfelelő tesztelési szintet társít, így a tesztelés már a kezdetektől jelen van.',
        },
        {
            fokerdes: 'Miben tér el a V-modell a vízesés modelltől?',
            kerdesek: [
                {
                    kerdes: 'A V-modell a fejlesztés során nem veszi figyelembe a tesztelést.',
                    eldont: 1,
                },
                {
                    kerdes: 'A V-modell a fejlesztési és tesztelési fázisokat párhuzamosan tervezi.',
                    eldont: 0,
                },
                {
                    kerdes: 'A vízesés modell lineáris sorrendet követ, míg a V-modellnél tesztelési lépések is vannak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A V-modell ábrázolása V-alakú, amely a fejlesztés és a tesztelés kapcsolatát mutatja.',
                    eldont: 0,
                },
            ],
            kep: 'https://rockkid777.github.io/pti-msc-2015-zv/s01/img/v_model.png',
            helyes: 1,
            indoklas:
                'A V-modell szemben a vízesés modellel, már korán figyelembe veszi a tesztelést, ezért nem igaz az, hogy figyelmen kívül hagyja azt.',
        },
        {
            fokerdes: 'Mely állítások igazak a V-modell előnyeire?',
            kerdesek: [
                {
                    kerdes: 'Korai hibafelismerést tesz lehetővé.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csökkenti a tesztelés tervezésére fordított időt.',
                    eldont: 0,
                },
                {
                    kerdes: 'Átlátható kapcsolatot biztosít a fejlesztési és tesztelési szintek között.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fejlesztési és tesztelési folyamatok teljesen függetlenek egymástól.',
                    eldont: 0,
                },
            ],
            kep: 'https://rockkid777.github.io/pti-msc-2015-zv/s01/img/v_model.png',
            helyes: 2,
            indoklas:
                'A V-modell segítségével már a fejlesztési fázisok során megtervezik a teszteket, így korán felismerhetők a hibák és világos a fejlesztés-tesztelés összefüggés.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a prototípus modellre?',
            kerdesek: [
                {
                    kerdes: 'A prototípus modell célja, hogy a végleges szoftver korai verzióját mutassa be a felhasználóknak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A prototípus modellben a felhasználói visszajelzések nem számítanak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A prototípus modell segít a követelmények pontosításában.',
                    eldont: 0,
                },
                {
                    kerdes: 'A prototípus modell iteratív fejlesztést támogat.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/d90dd1da-7869-4b14-9699-2930f5fbf90a/Protot%C3%ADpus_modell.png',
            helyes: 1,
            indoklas:
                'A prototípus modell lényege éppen az, hogy a felhasználói visszajelzések alapján javítsák és pontosítsák a rendszert.',
        },
        {
            fokerdes: 'Mely állítások igazak a prototípus szerepére?',
            kerdesek: [
                {
                    kerdes: 'A prototípus bemutatja a rendszer kinézetét és alapfunkcióit.',
                    eldont: 1,
                },
                {
                    kerdes: 'A prototípus kizárólag végleges, teljes funkcionalitású szoftver.',
                    eldont: 0,
                },
                {
                    kerdes: 'A prototípus segítségével a követelmények jobban megérthetők és tisztázhatók.',
                    eldont: 1,
                },
                {
                    kerdes: 'A prototípus nem alkalmas a projekt kockázatainak csökkentésére.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/d90dd1da-7869-4b14-9699-2930f5fbf90a/Protot%C3%ADpus_modell.png',
            helyes: 2,
            indoklas:
                'A prototípus célja, hogy vizuálisan és funkcionálisan is bemutassa az elképzeléseket, és segítse a követelmények pontosítását.',
        },
        {
            fokerdes: 'Melyik nem előnye a prototípus modellnek?',
            kerdesek: [
                {
                    kerdes: 'Csökkenti a félreértések esélyét a fejlesztők és felhasználók között.',
                    eldont: 0,
                },
                {
                    kerdes: 'Segít a követelmények pontos meghatározásában.',
                    eldont: 0,
                },
                {
                    kerdes: 'Minden projektben gazdaságosabb, mint bármely más fejlesztési modell.',
                    eldont: 1,
                },
                {
                    kerdes: 'Javítja a felhasználói elégedettséget azáltal, hogy bevonja őket a fejlesztés korai szakaszába.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/d90dd1da-7869-4b14-9699-2930f5fbf90a/Protot%C3%ADpus_modell.png',
            helyes: 1,
            indoklas:
                'A prototípus modell nem minden projekt esetén gazdaságosabb; többszöri módosítások miatt költséges lehet.',
        },
        {
            fokerdes: 'Melyek a prototípus fejlesztési típusai?',
            kerdesek: [
                {
                    kerdes: 'Eldobható prototípus készítése.',
                    eldont: 1,
                },
                {
                    kerdes: 'Végleges, minden funkciót tartalmazó prototípus az első verzióban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Evolúciós prototípus fejlesztése, amit folyamatosan továbbfejlesztenek.',
                    eldont: 1,
                },
                {
                    kerdes: 'A prototípus modellben nincs szükség felhasználói visszajelzésekre.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/d90dd1da-7869-4b14-9699-2930f5fbf90a/Protot%C3%ADpus_modell.png',
            helyes: 2,
            indoklas:
                'A prototípus lehet eldobható (ha csak egyszeri célra készül) vagy evolúciós (ha folyamatos fejlesztés történik).',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az iteratív és inkrementális fejlesztési módszertanokra?',
            kerdesek: [
                {
                    kerdes: 'Az iteratív módszertanban a fejlesztés ciklusokban történik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az inkrementális fejlesztés során a rendszer folyamatosan új funkciókkal bővül.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az iteratív módszertan célja, hogy a teljes rendszert egyszerre adjuk át.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az iterációk során a meglévő funkciók is tovább finomíthatók.',
                    eldont: 0,
                },
            ],
            kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/800px-Waterfall_model.svg.png',
            helyes: 1,
            indoklas:
                'Az iteratív fejlesztés során a rendszer fokozatosan készül el, nem egyszerre adják át a teljes rendszert.',
        },
        {
            fokerdes: 'Mely állítások igazak az iteratív fejlesztési modellre?',
            kerdesek: [
                {
                    kerdes: 'Az iteratív modell során minden iteráció egy működőképes verziót eredményezhet.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az iteratív fejlesztés során a rendszer első verziója a végleges termék.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az iteratív módszer támogatja a folyamatos felhasználói visszajelzéseket.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az iterációk során csak dokumentáció készül, működő kód nem.',
                    eldont: 0,
                },
            ],
            kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/800px-Waterfall_model.svg.png',
            helyes: 2,
            indoklas:
                'Az iteratív modell célja, hogy minden iteráció során egy működő, javított rendszerverzió készüljön, a felhasználók visszajelzései alapján.',
        },
        {
            fokerdes: 'Melyik nem előnye az inkrementális fejlesztésnek?',
            kerdesek: [
                {
                    kerdes: 'A fejlesztés során gyorsan szállíthatóak részfunkciók.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az inkrementális fejlesztés teljesen elkerüli a hibákat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A felhasználók hamarabb használható funkciókhoz jutnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A problémák korábban felismerhetők és kezelhetők.',
                    eldont: 0,
                },
            ],
            kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/800px-Waterfall_model.svg.png',
            helyes: 1,
            indoklas:
                'Az inkrementális fejlesztés előnye a gyors részszállítás, de a hibák előfordulását nem tudja teljesen elkerülni.',
        },
        {
            fokerdes:
                'Melyek igazak az iteratív és inkrementális módszertanok közötti különbségekre?',
            kerdesek: [
                {
                    kerdes: 'Az iteratív módszer a meglévő funkcionalitás finomítására fókuszál.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az inkrementális módszer új funkcionalitások hozzáadását helyezi előtérbe.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az iteratív módszerben minden fejlesztési ciklus után új projektet indítanak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az inkrementális módszertan kizárólag hibajavításra használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/800px-Waterfall_model.svg.png',
            helyes: 2,
            indoklas:
                'Az iteratív módszer a meglévő rendszer javítására, az inkrementális pedig új részek hozzáadására fókuszál.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a RAD (Rapid Application Development) modellre?',
            kerdesek: [
                {
                    kerdes: 'A RAD célja a gyors fejlesztés és szállítás.',
                    eldont: 0,
                },
                {
                    kerdes: 'A RAD modell az összes követelményt már az első nap rögzíti, és nem változtat rajtuk.',
                    eldont: 1,
                },
                {
                    kerdes: 'A RAD gyakran használ prototípusokat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A felhasználók aktívan részt vesznek a fejlesztésben.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/0f05d5a4-ee10-4783-ab09-41b553e6d2ec/RAD.jpeg',
            helyes: 1,
            indoklas:
                'A RAD modell során a követelmények rugalmasan kezelhetők a fejlesztés alatt is, nem csak az elején rögzítik őket.',
        },
        {
            fokerdes: 'Mely állítások igazak a RAD modellre?',
            kerdesek: [
                {
                    kerdes: 'A fejlesztés rövid ciklusokban zajlik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A végfelhasználói visszajelzések nem fontosak a RAD modellben.',
                    eldont: 0,
                },
                {
                    kerdes: 'A RAD gyakran használ előre elkészített komponenseket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A RAD modell mindig hosszú fejlesztési ciklusokat igényel.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/0f05d5a4-ee10-4783-ab09-41b553e6d2ec/RAD.jpeg',
            helyes: 2,
            indoklas:
                'A RAD modell rövid iterációkra és komponens-alapú fejlesztésre épít, hogy gyorsan elkészüljön a termék.',
        },
        {
            fokerdes: 'Melyik nem előnye a RAD modellnek?',
            kerdesek: [
                {
                    kerdes: 'Gyors fejlesztési idő.',
                    eldont: 0,
                },
                {
                    kerdes: 'Nagy rugalmasság a változó követelmények esetén.',
                    eldont: 0,
                },
                {
                    kerdes: 'Magas fejlesztési költségek nagy csapat esetén.',
                    eldont: 1,
                },
                {
                    kerdes: 'A felhasználói igények gyors beépítése.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/0f05d5a4-ee10-4783-ab09-41b553e6d2ec/RAD.jpeg',
            helyes: 1,
            indoklas:
                'A RAD előnye a gyorsaság és a rugalmasság, de nagy fejlesztői csapatok esetén a költségek magasak lehetnek.',
        },
        {
            fokerdes: 'Mely helyzetekben ideális választás a RAD modell?',
            kerdesek: [
                {
                    kerdes: 'Ha a projekt kis méretű és gyorsan kell szállítani.',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha a követelmények teljesen stabilak és nem változnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha a felhasználók szoros együttműködésre készek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha a projekt hosszú, többéves fejlesztést igényel.',
                    eldont: 0,
                },
            ],
            kep: 'https://t2568455.p.clickup-attachments.com/t2568455/0f05d5a4-ee10-4783-ab09-41b553e6d2ec/RAD.jpeg',
            helyes: 2,
            indoklas:
                'A RAD kisebb, gyors projektetekhez ideális, ahol a felhasználók folyamatosan részt vesznek a fejlesztésben.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz az agilis szoftverfejlesztésre?',
            kerdesek: [
                {
                    kerdes: 'Az agilis módszertan támogatja a változó követelményeket, még a fejlesztés késői szakaszában is.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az agilis fejlesztés mindig szigorúan dokumentum-alapú és kevés interakciót enged meg.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az ügyfél folyamatos bevonása fontos az agilis módszertanban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az agilis fejlesztésben a működő szoftver az elsődleges eredmény.',
                    eldont: 0,
                },
            ],
            kep: 'https://pallas70.hu/storage/images/news/5092.jpg?v=1725739550',
            helyes: 1,
            indoklas:
                'Az agilis fejlesztés épp az interakciókat és a működő szoftvert helyezi előtérbe, nem a szigorú dokumentációt.',
        },
        {
            fokerdes: 'Mely állítások tükrözik az agilis módszertan értékeit?',
            kerdesek: [
                {
                    kerdes: 'Az egyének és az interakciók fontosabbak a folyamatoknál és eszközöknél.',
                    eldont: 1,
                },
                {
                    kerdes: 'A részletes dokumentáció mindenek felett áll.',
                    eldont: 0,
                },
                {
                    kerdes: 'A változások üdvözöltek, még késői szakaszban is.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az eredményes tárgyalás fontosabb, mint a vásárlóval való együttműködés.',
                    eldont: 0,
                },
            ],
            kep: 'https://pallas70.hu/storage/images/news/5092.jpg?v=1725739550',
            helyes: 2,
            indoklas:
                'Az agilis szemlélet az egyénekre, az interakciókra és a változások rugalmas kezelésére épül.',
        },
        {
            fokerdes: 'Melyik nem agilis fejlesztési módszertan?',
            kerdesek: [
                {
                    kerdes: 'Scrum',
                    eldont: 0,
                },
                {
                    kerdes: 'Kanban',
                    eldont: 0,
                },
                {
                    kerdes: 'Vízesés modell',
                    eldont: 1,
                },
                {
                    kerdes: 'Extreme Programming (XP)',
                    eldont: 0,
                },
            ],
            kep: 'https://pallas70.hu/storage/images/news/5092.jpg?v=1725739550',
            helyes: 1,
            indoklas:
                'A vízesés modell nem agilis megközelítés, hanem egy hagyományos, szekvenciális fejlesztési modell.',
        },
        {
            fokerdes: 'Melyik gyakorlatok jellemzőek az agilis fejlesztésre?',
            kerdesek: [
                {
                    kerdes: 'Napi stand-up meetingek tartása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fejlesztési ciklus végén egyszeri nagy bemutató tartása, minden részlet egyszerre átadása nélkül visszajelzésre.',
                    eldont: 0,
                },
                {
                    kerdes: 'Rendszeres iterációk és inkrementumok szállítása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A projektmenedzser kizárólagos döntéshozó a termékfejlesztésben.',
                    eldont: 0,
                },
            ],
            kep: 'https://pallas70.hu/storage/images/news/5092.jpg?v=1725739550',
            helyes: 2,
            indoklas:
                'Az agilis fejlesztés rendszeres stand-up meetingeket és folyamatos szállítást ír elő a gyors visszacsatolás érdekében.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a Scrum szerepkörökre?',
            kerdesek: [
                {
                    kerdes: 'A Product Owner felelős a Product Backlog kezeléséért.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Scrum Master feladata a csapat akadályainak elhárítása.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Scrum csapatban a Projektmenedzser irányítja a fejlesztést.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Fejlesztőcsapat tagjai közösen felelősek a munkájukért.',
                    eldont: 0,
                },
            ],
            kep: 'https://bluebird.hu/wp-content/uploads/2021/05/Scrum-modszertan-Bluebird.jpg',
            helyes: 1,
            indoklas:
                'A Scrum-ban nincs hagyományos projektmenedzseri szerep; a csapat önszerveződő és közösen felelős a munkáért.',
        },
        {
            fokerdes: 'Mely események kötelezőek a Scrum keretrendszerben?',
            kerdesek: [
                {
                    kerdes: 'Sprint Planning',
                    eldont: 1,
                },
                {
                    kerdes: 'Sprint Retrospective',
                    eldont: 1,
                },
                {
                    kerdes: 'Sprint Approval Meeting',
                    eldont: 0,
                },
                {
                    kerdes: 'Monthly Performance Review',
                    eldont: 0,
                },
            ],
            kep: 'https://bluebird.hu/wp-content/uploads/2021/05/Scrum-modszertan-Bluebird.jpg',
            helyes: 2,
            indoklas:
                'A Sprint Planning és a Sprint Retrospective alapvető események a Scrum-ban, míg az Approval Meeting és Performance Review nem kötelező Scrum események.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a Scrum alapelveivel kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A Scrum támogatja az átláthatóságot, az ellenőrzést és az alkalmazkodást.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Scrum célja, hogy rugalmasan kezelje a változásokat a fejlesztés során.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Scrum előírja, hogy a teljes termék minden sprint végére kész legyen piacra dobásra.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Scrum keretrendszer iteratív és inkrementális megközelítést alkalmaz.',
                    eldont: 0,
                },
            ],
            kep: 'https://bluebird.hu/wp-content/uploads/2021/05/Scrum-modszertan-Bluebird.jpg',
            helyes: 1,
            indoklas:
                'A Scrum célja egy működőképes inkrementum létrehozása minden sprint végén, de nem feltétel, hogy azonnal piacra dobható legyen.',
        },
        {
            fokerdes: 'Mely állítások igazak a Product Backlog-ra?',
            kerdesek: [
                {
                    kerdes: 'A Product Backlog egy élő dokumentum, amely folyamatosan változhat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Product Backlog csak a projekt elején kerül véglegesítésre, és utána nem módosítható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Product Backlog elemei prioritás szerint vannak rendezve.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Product Backlog kizárólag a Scrum Master tulajdona.',
                    eldont: 0,
                },
            ],
            kep: 'https://bluebird.hu/wp-content/uploads/2021/05/Scrum-modszertan-Bluebird.jpg',
            helyes: 2,
            indoklas:
                'A Product Backlog folyamatosan frissül, és az elemek prioritás szerint rendeződnek, hogy mindig a legfontosabbak kerüljenek előre.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az Integration Level Testing (ILT) céljára?',
            kerdesek: [
                {
                    kerdes: 'Az ILT célja az egyes modulok közötti kapcsolatok helyes működésének ellenőrzése.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az ILT során az egyes modulok egyedi működését külön-külön teszteljük.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az ILT során a modulok közötti adatátvitelt is teszteljük.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az ILT során a rendszerszintű tesztelés előtti hibákat igyekszünk kiszűrni.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'Az ILT nem az egyes modulok egyedi, hanem azok együttműködésének helyességét ellenőrzi.',
        },
        {
            fokerdes:
                'Melyik két típus jellemző az Integration Level Testing (ILT) megközelítésekre?',
            kerdesek: [
                {
                    kerdes: 'Top-down integrációs tesztelés',
                    eldont: 1,
                },
                {
                    kerdes: 'Bottom-up integrációs tesztelés',
                    eldont: 1,
                },
                {
                    kerdes: 'White-box komponens tesztelés',
                    eldont: 0,
                },
                {
                    kerdes: 'Acceptance testing',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'Az ILT két klasszikus módszere a Top-down és a Bottom-up integrációs tesztelés.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a stubokkal és driverekkel kapcsolatban az ILT során?',
            kerdesek: [
                {
                    kerdes: 'A stubok az alsóbb szintű modulok helyettesítésére szolgálnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A driverek a felsőbb szintű modulok helyettesítésére szolgálnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A stubok és driverek végleges rendszerelemek, amelyeket a termék részeként szállítanak.',
                    eldont: 1,
                },
                {
                    kerdes: 'Stubok és driverek segítenek az egyes komponensek tesztelésében részleges környezet mellett.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'A stubok és driverek csak ideiglenes eszközök a tesztelés támogatására, nem részei a végső terméknek.',
        },
        {
            fokerdes:
                'Melyek jellemző kihívások az Integration Level Testing (ILT) során?',
            kerdesek: [
                {
                    kerdes: 'Az interfészek hibáinak azonosítása nehézkes lehet.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az összes komponens teljesítményének mérése könnyű feladat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adatok helyes átadása és feldolgozása kritikus fontosságú.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az ILT kizárólag manuális tesztelést igényel, automatizáció nem alkalmazható.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'Az interfészek hibái és az adatok helyes kezelése gyakori kihívás az ILT során, míg automatizáció is támogatott.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a System Level Testing (SLT) céljára?',
            kerdesek: [
                {
                    kerdes: 'Az SLT célja a teljes rendszer viselkedésének ellenőrzése.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az SLT kizárólag a forráskód egyes moduljainak működését vizsgálja.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az SLT során funkcionális és nem-funkcionális követelményeket is tesztelhetünk.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az SLT a felhasználói követelmények teljesülését is ellenőrzi.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'Az SLT nem csupán modulokat, hanem a teljes rendszer működését vizsgálja.',
        },
        {
            fokerdes:
                'Mely két típusú tesztelés tartozhat a System Level Testing (SLT) körébe?',
            kerdesek: [
                {
                    kerdes: 'Funkcionális tesztelés',
                    eldont: 1,
                },
                {
                    kerdes: 'Teljesítménytesztelés',
                    eldont: 1,
                },
                {
                    kerdes: 'Unit tesztelés',
                    eldont: 0,
                },
                {
                    kerdes: 'Kódelemzés',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'Az SLT során mind funkcionális, mind nem-funkcionális, például teljesítményteszteket is végzünk.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a System Level Testing (SLT) tesztkörnyezetével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az SLT ideális esetben éles környezetet szimulál.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az SLT során szükséges minden külső interfészt és adatforrást szimulálni vagy csatlakoztatni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az SLT nem igényel valós felhasználói környezetet, elég a kódszintű tesztelés.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az SLT rendszerintegrációt és kommunikációt is vizsgál.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'Az SLT célja a rendszer életszerű tesztelése, nem csupán kódszintű ellenőrzés.',
        },
        {
            fokerdes:
                'Milyen típusú hibák azonosíthatók jellemzően a System Level Testing (SLT) során?',
            kerdesek: [
                {
                    kerdes: 'Integrációs hibák a komponensek között',
                    eldont: 1,
                },
                {
                    kerdes: 'Teljesítménybeli problémák',
                    eldont: 1,
                },
                {
                    kerdes: 'Szintaktikai hibák egy modulon belül',
                    eldont: 0,
                },
                {
                    kerdes: 'Fordítási hibák a kódban',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'Az SLT során gyakran derülnek ki az integrációs problémák és a teljesítményproblémák is.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a User Acceptance Testing (UAT) céljára?',
            kerdesek: [
                {
                    kerdes: 'Az UAT során a végfelhasználók ellenőrzik, hogy a rendszer megfelel-e az üzleti követelményeknek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az UAT célja a rendszer belső kódhibáinak javítása.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az UAT során a felhasználók valós üzleti szcenáriókat futtatnak le.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az UAT a szoftver átadásának előfeltétele lehet.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'Az UAT célja nem a kódhibák javítása, hanem a felhasználói elvárásoknak való megfelelés ellenőrzése.',
        },
        {
            fokerdes:
                'Mely állítások igazak a User Acceptance Testing (UAT) jellemzőire?',
            kerdesek: [
                {
                    kerdes: 'Az UAT-t általában üzleti felhasználók végzik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az UAT közvetlenül a fejlesztési fázis megkezdése előtt történik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az UAT során a funkcionális követelmények teljesülését ellenőrzik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az UAT célja a forráskód optimalizálása.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'Az UAT-t üzleti felhasználók végzik, és a funkcionális követelmények teljesülését ellenőrzik.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a User Acceptance Testing (UAT) folyamatára?',
            kerdesek: [
                {
                    kerdes: 'Az UAT során előre definiált teszteseteket alkalmaznak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az UAT tesztelés eredményeként a rendszer közvetlenül élesbe áll.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az UAT során nem szükséges dokumentálni az eredményeket.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az UAT fontos része a hibák észlelése és visszajelzése.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'Az UAT során minden eredményt dokumentálni kell a nyomon követhetőség érdekében.',
        },
        {
            fokerdes:
                'Milyen típusú problémák merülhetnek fel User Acceptance Testing (UAT) során?',
            kerdesek: [
                {
                    kerdes: 'Funkcionális eltérések a követelményekhez képest',
                    eldont: 1,
                },
                {
                    kerdes: 'Nem megfelelő felhasználói élmény (UX)',
                    eldont: 1,
                },
                {
                    kerdes: 'Fordítási hibák a kódban',
                    eldont: 0,
                },
                {
                    kerdes: 'Memóriakezelési hibák az operációs rendszer szintjén',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'Az UAT során főként funkcionális eltéréseket és felhasználói élményt érintő problémákat azonosítanak.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a biztonsági tesztelésre?',
            kerdesek: [
                {
                    kerdes: 'A biztonsági tesztelés célja a rendszer sebezhetőségeinek felderítése.',
                    eldont: 0,
                },
                {
                    kerdes: 'A biztonsági tesztelés során a jelszavak titkosítása nem fontos.',
                    eldont: 1,
                },
                {
                    kerdes: 'A biztonsági tesztelés során ellenőrzik, hogy a rendszer képes-e megakadályozni a jogosulatlan hozzáférést.',
                    eldont: 0,
                },
                {
                    kerdes: 'A biztonsági tesztelés során fontos a titkosítás, az azonosítás és a hozzáférés-ellenőrzés vizsgálata.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'A biztonsági tesztelés célja, hogy feltárja a rendszer sebezhetőségeit és megelőzze a jogosulatlan hozzáféréseket. A jelszavak titkosítása a tesztelés része.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a teljesítmény- és terheléstesztelésre?',
            kerdesek: [
                {
                    kerdes: 'A teljesítménytesztelés során a rendszer válaszidejét és sebességét mérjük.',
                    eldont: 1,
                },
                {
                    kerdes: 'A terheléstesztelés célja a rendszer terhelés alatti stabilitásának tesztelése.',
                    eldont: 1,
                },
                {
                    kerdes: 'A terheléstesztelés során a rendszer ellenállóképességét teszteljük a fokozott terhelés ellen.',
                    eldont: 0,
                },
                {
                    kerdes: 'A teljesítménytesztelés nem vizsgálja a rendszer válaszidejét.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'A teljesítménytesztelés célja a rendszer válaszidejének és sebességének vizsgálata, míg a terheléstesztelés a rendszer terhelés alatti stabilitását ellenőrzi.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a biztonsági tesztelési módszerekre?',
            kerdesek: [
                {
                    kerdes: 'A penetrációs tesztelés a rendszer sebezhetőségeinek manuális vizsgálata.',
                    eldont: 0,
                },
                {
                    kerdes: 'A sebezhetőségi vizsgálat során automatizált eszközöket alkalmazunk a biztonsági rések keresésére.',
                    eldont: 0,
                },
                {
                    kerdes: 'A biztonsági tesztelés során nem szükséges a rendszer kódjának átvizsgálása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kód auditálása fontos része a biztonsági tesztelésnek.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'A biztonsági tesztelés során elengedhetetlen a rendszer kódjának átvizsgálása, hogy feltárjuk a potenciális biztonsági rést.',
        },
        {
            fokerdes:
                'Milyen típusú teszteléseket végeznek teljesítmény- és terheléstesztelés során?',
            kerdesek: [
                {
                    kerdes: 'A stressztesztelés a rendszer működésének vizsgálata extrém körülmények között.',
                    eldont: 1,
                },
                {
                    kerdes: 'A terheléstesztelés célja a rendszer válaszidejének mérése, miközben a rendszer terhelése fokozatosan nő.',
                    eldont: 1,
                },
                {
                    kerdes: 'A teljesítménytesztelés a biztonsági kockázatok azonosítására koncentrál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A terheléstesztelés nem foglalkozik a rendszer terhelés alatti viselkedésével.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'A stressztesztelés és a terheléstesztelés a rendszer viselkedését vizsgálják különböző terhelési szinteken, miközben a terhelés fokozatos növelése a rendszer stabilitását teszteli.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a TDD (Test-Driven Development) fejlesztési módszertanra?',
            kerdesek: [
                {
                    kerdes: 'A TDD módszertanban a tesztelés előtt a kódot írjuk meg.',
                    eldont: 1,
                },
                {
                    kerdes: 'A TDD a tesztírásra fókuszál először, majd kódot írunk, hogy a tesztet teljesítse.',
                    eldont: 0,
                },
                {
                    kerdes: 'A TDD célja, hogy a fejlesztés során minden új funkcióval új tesztet hozzunk létre.',
                    eldont: 0,
                },
                {
                    kerdes: 'A TDD során a tesztelés és a kódírás folyamatosan váltakozik, amíg a tesztek át nem mennek.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'A TDD módszertan alapvetően a tesztírással kezdődik, nem a kód megírásával. A tesztelés előzi meg a kód írását.',
        },
        {
            fokerdes: 'Melyek a TDD folyamatának jellemzői?',
            kerdesek: [
                {
                    kerdes: 'A TDD során először írunk teszteket, majd implementáljuk a szükséges kódot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A TDD csak unit tesztelésre használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A TDD folyamata folyamatosan ismétlődő ciklusokból áll.',
                    eldont: 1,
                },
                {
                    kerdes: 'A TDD-ben a tesztelés nem fontos része a fejlesztési folyamatnak.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'A TDD ciklikus folyamat, amely először a tesztírásra összpontosít, majd a kódot implementáljuk. A tesztelés minden ciklus szerves része.',
        },
        {
            fokerdes: 'Melyik állítás igaz a TDD előnyeire?',
            kerdesek: [
                {
                    kerdes: 'A TDD csökkenti a kód átláthatóságát és nehezebbé teszi a hibák keresését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A TDD növeli a kód minőségét és csökkenti a hibák számát.',
                    eldont: 1,
                },
                {
                    kerdes: 'A TDD nem befolyásolja a tesztelés hatékonyságát.',
                    eldont: 0,
                },
                {
                    kerdes: 'A TDD során a tesztelés nem befolyásolja a fejlesztési időt.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 1,
            indoklas:
                'A TDD segít a kód minőségének javításában, mivel folyamatos tesztelést és kódrefaktorálást végez a fejlesztés során, csökkentve a hibák előfordulását.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a TDD használatának hátrányaira?',
            kerdesek: [
                {
                    kerdes: 'A TDD kezdeti fázisában időigényes és nehézkes lehet a tesztelés megírása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A TDD nem alkalmas olyan projektekhez, amelyekben gyors kódfejlesztésre van szükség.',
                    eldont: 1,
                },
                {
                    kerdes: 'A TDD alkalmazása mindenképpen felgyorsítja a fejlesztési folyamatot.',
                    eldont: 0,
                },
                {
                    kerdes: 'A TDD nem segít a tesztelés hibáinak azonosításában.',
                    eldont: 0,
                },
            ],
            kep: 'https://devakademia.hu/wp-content/uploads/2022/02/szoftvertesztelo-kepzes.png',
            helyes: 2,
            indoklas:
                'A TDD eleinte időigényes lehet, különösen a tesztelés megírása és a kódírás közötti folyamatos váltakozás miatt. Továbbá nem minden projekt számára ideális, különösen ha gyors kódfejlesztésre van szükség.',
        },
    ],
];
