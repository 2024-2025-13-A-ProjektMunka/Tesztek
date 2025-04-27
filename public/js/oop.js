let oop = [
    'Objektum-Orientált Programozás (OOP)',
    8,
    [
        {
            fokerdes:
                'Melyik állítás nem igaz egy osztály (class) szerepére objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'Az osztályok sablonként szolgálnak objektumok létrehozásához.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztályok csak egyszer használhatók egy projektben.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztályok adattagokat (mezőket) és metódusokat (függvényeket) tartalmazhatnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztály példányai objektumoknak nevezhetők.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'Az osztályok nem korlátozódnak egyszeri használatra; ugyanazt az osztályt többször is példányosíthatjuk különböző objektumok létrehozására.',
        },
        {
            fokerdes:
                'Mely állítások igazak egy új osztály létrehozására egy fejlesztőkörnyezetben (IDE)?',
            kerdesek: [
                {
                    kerdes: 'IDE-ben grafikus felületen is létrehozhatunk új osztályt, például menüből választva.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden új osztályhoz kötelező grafikus felhasználói felületet is készíteni.',
                    eldont: 0,
                },
                {
                    kerdes: 'IDE-ben új osztály létrehozásakor gyakran választható, hogy az osztály örököl-e egy másik osztályból.',
                    eldont: 1,
                },
                {
                    kerdes: 'Új osztály létrehozásához parancssor használata kötelező.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'IDE-kben (pl. IntelliJ, Eclipse, Visual Studio) grafikus menükön keresztül egyszerűen létrehozhatunk osztályokat, és gyakran beállíthatjuk az öröklődési kapcsolatokat is.',
        },
        {
            fokerdes:
                'Melyik állítás igaz egy osztályon belüli adattagok (mezők) és metódusok (függvények) szerepére?',
            kerdesek: [
                {
                    kerdes: 'Az osztály adattagjai csak statikus változók lehetnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adattagok tárolják az objektum állapotát, míg a metódusok az objektum viselkedését határozzák meg.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztály metódusai kizárólag privát láthatóságúak lehetnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztály adattagjait nem kell inicializálni.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'Az adattagok az objektum állapotát, a metódusok pedig az objektum viselkedését írják le. A láthatóság és inicializálás nem korlátozott ilyen szigorúan.',
        },
        {
            fokerdes:
                'Melyek igazak egy objektumorientált projekt (OOP-projekt) létrehozására egy fejlesztőkörnyezetben (IDE)?',
            kerdesek: [
                {
                    kerdes: 'Egy új OOP-projekt létrehozásakor megadhatjuk a fő csomag vagy névtér nevét.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy OOP-projekt nem tartalmazhat több osztályt egyszerre.',
                    eldont: 0,
                },
                {
                    kerdes: 'A projekt létrehozásakor választhatunk, hogy konzolos vagy grafikus alkalmazást szeretnénk készíteni.',
                    eldont: 1,
                },
                {
                    kerdes: 'IDE-ben nem lehet fájlszerkezetet automatikusan generálni az osztályokhoz.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'Egy OOP-projekt létrehozásakor általában meg kell adnunk egy névteret vagy csomagot, és dönthetünk a projekt típusáról is, például konzolos vagy GUI alkalmazás.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az osztályszintű (statikus) változókra?',
            kerdesek: [
                {
                    kerdes: 'Az osztályszintű változók az osztály minden példányára közösen érvényesek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Statikus változók az osztály létrehozása után külön-külön példányosodnak minden objektumnál.',
                    eldont: 1,
                },
                {
                    kerdes: 'Statikus változók értékét az összes objektum példány közösen használja.',
                    eldont: 0,
                },
                {
                    kerdes: 'Statikus változókhoz az osztály nevén keresztül is hozzá lehet férni.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'A statikus változókat nem példányosítja minden objektum külön, hanem közös adattérként működnek az osztály összes példánya között.',
        },
        {
            fokerdes:
                'Mely állítások igazak a statikus (class-level) metódusokra?',
            kerdesek: [
                {
                    kerdes: 'Statikus metódusok nem érhetik el közvetlenül az osztály példányváltozóit.',
                    eldont: 1,
                },
                {
                    kerdes: 'Statikus metódusok meghívásához mindig példányt kell létrehozni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Statikus metódusokat gyakran használják segédfüggvények létrehozására.',
                    eldont: 1,
                },
                {
                    kerdes: 'Statikus metódusok nem tartalmazhatnak paramétereket.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'Statikus metódusok nem férnek hozzá példányváltozókhoz, és segédfüggvényként gyakran használtak, például matematikai műveletekhez.',
        },
        {
            fokerdes:
                'Melyik állítás igaz a példány- és statikus változók közötti különbségre?',
            kerdesek: [
                {
                    kerdes: 'A példányváltozó minden objektumnál külön tárolódik, míg a statikus változó közös.',
                    eldont: 1,
                },
                {
                    kerdes: 'Mind a példány-, mind a statikus változó csak az objektum példányán keresztül érhető el.',
                    eldont: 0,
                },
                {
                    kerdes: 'A statikus változót minden objektum példány automatikusan felülírja saját értékével.',
                    eldont: 0,
                },
                {
                    kerdes: 'A példányváltozókhoz közvetlenül az osztály nevével is hozzá lehet férni példány nélkül.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'A példányváltozó minden objektumnak saját másolatban van jelen, míg a statikus változó az összes példány között közösen osztott érték.',
        },
        {
            fokerdes:
                'Melyek igazak az osztályszintű (statikus) adattagokkal és metódusokkal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Statikus adattagok és metódusok akkor is elérhetők, ha nincs egyetlen példány sem létrehozva az osztályból.',
                    eldont: 1,
                },
                {
                    kerdes: 'A statikus adattagokhoz csak statikus metódusok férhetnek hozzá.',
                    eldont: 0,
                },
                {
                    kerdes: 'Statikus metódusok hívhatók az osztály nevén keresztül.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztályszintű scope csak privát láthatóságú lehet.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'Statikus adattagok és metódusok példány nélkül is elérhetők az osztály nevével, és bármilyen láthatósági szinttel rendelkezhetnek.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a publikus osztálymezőkre?',
            kerdesek: [
                {
                    kerdes: 'Publikus mezők bárhonnan elérhetők az alkalmazásban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A publikus mezők közvetlenül módosíthatók kívülről.',
                    eldont: 0,
                },
                {
                    kerdes: 'Publikus mezők automatikusan csak olvashatók kívülről.',
                    eldont: 1,
                },
                {
                    kerdes: 'A publikus mezők használata csökkentheti az adatok védelmét.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'Publikus mezők nem automatikusan csak olvashatók; kívülről szabadon olvashatók és módosíthatók is, hacsak nem alkalmazunk külön korlátozásokat.',
        },
        {
            fokerdes: 'Mely állítások igazak a privát osztálymezőkre?',
            kerdesek: [
                {
                    kerdes: 'Privát mezőket csak az adott osztály metódusai érhetik el.',
                    eldont: 1,
                },
                {
                    kerdes: 'Privát mezőkhöz bármely másik osztály közvetlenül hozzáférhet.',
                    eldont: 0,
                },
                {
                    kerdes: 'Privát mezők eléréséhez getter és setter metódusokat szokás létrehozni.',
                    eldont: 1,
                },
                {
                    kerdes: 'Privát mezők automatikusan öröklődnek az alosztályokba publikusként.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'Privát mezők csak az adott osztályon belül érhetők el, és gyakran getter/setter metódusokat használnak hozzáférésük biztosítására.',
        },
        {
            fokerdes: 'Melyik állítás igaz a protected láthatóságú mezőkre?',
            kerdesek: [
                {
                    kerdes: 'A protected mezők csak az adott osztályban láthatók, és nem az alosztályokban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Protected mezők elérhetők az alosztályokból is, még ha azok más csomagban vannak is.',
                    eldont: 1,
                },
                {
                    kerdes: 'Protected mezők automatikusan priváttá válnak minden leszármazott osztályban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Protected mezők csak ugyanabban a csomagban található osztályokból érhetők el.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'A protected mezők elérhetők az alosztályokból, függetlenül attól, hogy ugyanabban a csomagban vannak-e.',
        },
        {
            fokerdes:
                'Mely állítások igazak az osztálymezők láthatósági módosítóiról?',
            kerdesek: [
                {
                    kerdes: 'A public kulcsszóval rendelkező mezők az egész programban elérhetők.',
                    eldont: 1,
                },
                {
                    kerdes: 'A private kulcsszóval rendelkező mezők kizárólag az adott osztályon belül használhatók.',
                    eldont: 1,
                },
                {
                    kerdes: 'A protected mezők mindig privát mezőként működnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A public mezőkhöz csak getter metódussal lehet hozzáférni.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'A public mezők bárhonnan elérhetők, míg a private mezők kizárólag az osztályon belül hozzáférhetők.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az érték szerinti átadásra (pass by value)?',
            kerdesek: [
                {
                    kerdes: 'Érték szerinti átadás esetén a függvény másolatot kap a paraméterről.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az eredeti változó értéke megváltozik a függvényhívás után.',
                    eldont: 1,
                },
                {
                    kerdes: 'A függvény belsejében módosított érték nem befolyásolja az eredeti változót.',
                    eldont: 0,
                },
                {
                    kerdes: 'A primitív típusok általában érték szerint kerülnek átadásra.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'Érték szerinti átadásnál a függvény másolatot kap, így az eredeti változó értéke nem változik meg a függvényhívás után.',
        },
        {
            fokerdes:
                'Melyik állítások igazak egy függvény visszatérési értékére vonatkozóan?',
            kerdesek: [
                {
                    kerdes: 'A visszatérési érték lehet primitív típus is.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy függvény nem adhat vissza objektumot.',
                    eldont: 0,
                },
                {
                    kerdes: 'A return kulcsszó a függvény végrehajtását is befejezi.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden függvénynek kötelezően vissza kell adnia egy értéket.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'Egy függvény visszaadhat primitív értéket vagy objektumot is, és a return kulcsszó befejezi a függvény futását.',
        },
        {
            fokerdes:
                'Melyik állítás igaz, ha egy objektumot adunk át érték szerint egy függvénynek?',
            kerdesek: [
                {
                    kerdes: 'A függvény egy új, független másolatot kap az objektumról.',
                    eldont: 0,
                },
                {
                    kerdes: 'A függvény ugyanazt a hivatkozást kapja, de maga a referencia érték szerint adódik át.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az eredeti objektum sosem változhat meg a függvényhívás során.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az átadás automatikusan mély másolatot hoz létre.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 1,
            indoklas:
                'Objektum átadásánál a referencia kerül érték szerint átadásra, így a függvény ugyanazt az objektumot módosíthatja.',
        },
        {
            fokerdes:
                'Milyen típusú értékeket adhat vissza egy függvény objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'Csak számokat adhat vissza.',
                    eldont: 0,
                },
                {
                    kerdes: 'Adhat vissza objektumot is.',
                    eldont: 1,
                },
                {
                    kerdes: 'Visszatérhet lista vagy tömb típusú adatszerkezettel.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak logikai értékeket adhat vissza.',
                    eldont: 0,
                },
            ],
            kep: 'https://atlacademy.az/images/cache/44/44142b_opp-nedir.jpg',
            helyes: 2,
            indoklas:
                'Egy függvény sokféle típusú értéket adhat vissza, például objektumot, listát, tömböt, vagy más komplex adatstruktúrát.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a main függvényre objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'A main függvény az alkalmazás belépési pontja.',
                    eldont: 0,
                },
                {
                    kerdes: 'A main függvény csak egyszer szerepelhet egy programban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A main függvény privát láthatóságú kell legyen.',
                    eldont: 1,
                },
                {
                    kerdes: 'A main függvény általában a program vezérlésének kezdetét jelenti.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'A main függvény általában publikus, mivel külső rendszerhívások (például az operációs rendszer) indítják el.',
        },
        {
            fokerdes:
                'Mely állítások igazak a main függvény helyes szintaxisára vonatkozóan (pl. Java, C++)?',
            kerdesek: [
                {
                    kerdes: 'A main függvény visszatérési típusa általában void vagy int.',
                    eldont: 1,
                },
                {
                    kerdes: 'A main függvény paraméter nélkül is létezhet.',
                    eldont: 1,
                },
                {
                    kerdes: 'A main függvény mindig static kulcsszóval kell rendelkezzen C++ nyelvben.',
                    eldont: 0,
                },
                {
                    kerdes: 'A main függvény nem adhat vissza visszatérési értéket.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                'A main függvény int vagy void típusú lehet, és paraméter nélkül is definiálható, de Java nyelvben static kulcsszó szükséges.',
        },
        {
            fokerdes:
                'Melyik állítás igaz a main függvény futására vonatkozóan?',
            kerdesek: [
                {
                    kerdes: 'A main függvény futása automatikusan új példányokat hoz létre minden osztályból.',
                    eldont: 0,
                },
                {
                    kerdes: 'A main függvény futása során kézzel kell példányosítani az osztályokat, ha szükséges.',
                    eldont: 1,
                },
                {
                    kerdes: 'A main függvény végrehajtása nem befolyásolja a program kimenetelét.',
                    eldont: 0,
                },
                {
                    kerdes: 'A main függvény nem használhat függvényhívásokat más osztályokból.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'A main függvényben a fejlesztő példányosítja az osztályokat és hívja meg a szükséges metódusokat.',
        },
        {
            fokerdes:
                'Mely állítások jellemzőek a main függvényre objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'A main függvény visszatérhet egy hibakóddal a program végén.',
                    eldont: 1,
                },
                {
                    kerdes: 'A main függvényből kiléphetünk a return utasítással.',
                    eldont: 1,
                },
                {
                    kerdes: 'A main függvénynek mindig grafikus felületet kell indítania.',
                    eldont: 0,
                },
                {
                    kerdes: 'A main függvény csak szöveges programok esetén kötelező.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                'A main függvényből hibakóddal térhetünk vissza, valamint a return utasítás befejezi a függvény futását.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz egy objektumorientált esettanulmány bevezetésére?',
            kerdesek: [
                {
                    kerdes: 'Az esettanulmány valós problémák modellezésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az esettanulmány segíthet az osztályok közötti kapcsolatok megértésében.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az esettanulmány kizárólag algoritmusok optimalizálásáról szól.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az esettanulmány segíthet meghatározni az osztályok felelősségeit.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'Az esettanulmány célja valós problémák objektumorientált modellezése, nem pusztán algoritmusok optimalizálása.',
        },
        {
            fokerdes:
                'Mely állítások igazak egy új osztály létrehozására egy esettanulmány során?',
            kerdesek: [
                {
                    kerdes: 'Az osztályoknak megfelelő adatmezőkkel és metódusokkal kell rendelkezniük.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztályok nevei tükrözzék az általuk képviselt valós entitást.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden osztályban csak statikus metódusok lehetnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztályok sosem tartalmazhatnak privát adatmezőket.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                'Az osztályoknak logikus mezőkkel és metódusokkal kell rendelkezniük, és nevüknek kifejezőnek kell lennie.',
        },
        {
            fokerdes:
                'Melyik állítás igaz egy osztály példányosításáról objektumorientált nyelvben?',
            kerdesek: [
                {
                    kerdes: 'Az osztály példányosításához mindig szükség van egy konstruktor meghívására.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztály példányosításakor automatikusan létrejön több objektum is.',
                    eldont: 0,
                },
                {
                    kerdes: 'Példányosítás során nem szükséges memóriaterületet lefoglalni az objektumnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztály példányosítása csak absztrakt osztályoknál történik.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'Példányosításkor a konstruktor hívódik meg, amely memóriát foglal az új objektumnak.',
        },
        {
            fokerdes:
                'Mely szintaktikai szabályok helyesek osztály példányosításakor például Java-ban vagy C++-ban?',
            kerdesek: [
                {
                    kerdes: "A példányosítás során a 'new' kulcsszót kell használni.",
                    eldont: 1,
                },
                {
                    kerdes: 'Példányosítás után az objektumra pontoperátorral hivatkozhatunk.',
                    eldont: 1,
                },
                {
                    kerdes: 'Példányosítás után az objektum statikusan elérhető lesz minden osztályból.',
                    eldont: 0,
                },
                {
                    kerdes: 'Példányosítás során meg kell adni minden esetben alapértelmezett értékeket az összes mezőnek.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                "A példányosítás 'new' kulcsszóval történik (Java/C#), és a létrejött objektumot pontoperátorral érjük el.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a new kulcsszó használatára példányosításkor?',
            kerdesek: [
                {
                    kerdes: 'A new kulcsszó memóriát foglal le egy új objektum számára.',
                    eldont: 0,
                },
                {
                    kerdes: 'A new kulcsszó automatikusan meghívja az osztály konstruktorát.',
                    eldont: 0,
                },
                {
                    kerdes: 'A new kulcsszó csak statikus metódusok létrehozására szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A new kulcsszó után általában zárójelek következnek.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'A new kulcsszó nem statikus metódusok létrehozására szolgál, hanem új objektum példányosítására.',
        },
        {
            fokerdes: 'Mely állítások igazak, ha új objektumot példányosítunk?',
            kerdesek: [
                {
                    kerdes: 'Minden példány egyedi memóriacímmel rendelkezik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Két példány ugyanazon változóra mutat automatikusan.',
                    eldont: 0,
                },
                {
                    kerdes: 'Példányosításkor a konstruktor paraméterekkel is hívható.',
                    eldont: 1,
                },
                {
                    kerdes: 'Példányosítás csak absztrakt osztályok esetén kötelező.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                'Minden új objektum saját memóriacímet kap, és példányosítás során konstruktor paraméterek is megadhatók.',
        },
        {
            fokerdes: 'Melyik állítás igaz objektumok összehasonlítására?',
            kerdesek: [
                {
                    kerdes: 'Az objektumok összehasonlításakor alapértelmezetten a memóriacímüket hasonlítják össze.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az objektumok összehasonlítása automatikusan a mezők értékének összevetését jelenti.',
                    eldont: 0,
                },
                {
                    kerdes: 'Minden objektum automatikusan egyedi értéket ad vissza összehasonlításkor.',
                    eldont: 0,
                },
                {
                    kerdes: 'Összehasonlításnál mindig szöveg-alapú összevetés történik.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'Alapértelmezetten az objektumok memóriacímeit hasonlítjuk össze, nem a tartalmukat.',
        },
        {
            fokerdes:
                'Mely állítások igazak az objektumok tartalmi összehasonlítására?',
            kerdesek: [
                {
                    kerdes: 'Az objektumok tartalmi összehasonlításához felül kell írni egy egyenlőség-ellenőrző metódust (pl. equals).',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha az equals metódust felüldefiniáljuk, a tartalom alapján is összehasonlíthatók az objektumok.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az objektumok tartalmi összehasonlítása automatikusan történik minden osztály esetén.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak primitív típusok összehasonlításánál kell equals metódust írni.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                'A tartalmi összehasonlításhoz az equals metódust kell felülírni, így az objektumok nemcsak a memóriacím, hanem a tartalom alapján is összevethetők.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz az objektumreferenciákra?',
            kerdesek: [
                {
                    kerdes: 'Az objektumreferencia egy memóriacímet tárol, amely az objektumot jelöli.',
                    eldont: 0,
                },
                {
                    kerdes: 'Két referencia ugyanarra az objektumra is mutathat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az objektumreferencia mindig tartalmazza az objektum teljes másolatát.',
                    eldont: 1,
                },
                {
                    kerdes: 'Objektumreferencia használatával módosíthatjuk az eredeti objektum adatait.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'Az objektumreferencia csak az objektum helyét tárolja a memóriában, nem másolatot.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az objektumreferenciák viselkedésére?',
            kerdesek: [
                {
                    kerdes: 'Ha két referencia ugyanarra az objektumra mutat, az egyik módosítása a másikon is látható lesz.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden referencia egy külön példányra mutat még akkor is, ha ugyanazt példányosítjuk.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az objektumreferenciák null értéket is felvehetnek.',
                    eldont: 1,
                },
                {
                    kerdes: 'A referencia automatikusan törli az objektumot, amikor megszűnik.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                'Ha két referencia ugyanarra az objektumra mutat, akkor az egyik által végzett módosítások a másikon is láthatók, és a referencia null értékű is lehet.',
        },
        {
            fokerdes:
                'Melyik állítás igaz, ha két objektumreferenciát összehasonlítunk?',
            kerdesek: [
                {
                    kerdes: 'Az összehasonlítás során az objektumok tartalma automatikusan kerül összevetésre.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az összehasonlítás során az objektumreferenciák memóriacímei hasonlítódnak össze.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az objektumreferenciák összehasonlítása mindig igazat ad vissza.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az objektumreferenciák automatikusan érték szerinti összehasonlítást végeznek.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 1,
            indoklas:
                'Az objektumreferenciák összehasonlítása a memóriacímeket veti össze, nem az objektum tartalmát.',
        },
        {
            fokerdes:
                'Mely állítások igazak az objektumreferenciák használatára?',
            kerdesek: [
                {
                    kerdes: 'Objektumreferencia segítségével meghívhatók az adott objektum metódusai.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy objektumhoz több referencia is tartozhat egyszerre.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden objektumreferencia kizárólag egyszer használható a programban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Objektumreferencia csak olvasási műveletekre alkalmas, írásra nem.',
                    eldont: 0,
                },
            ],
            kep: 'https://as1.ftcdn.net/v2/jpg/04/82/41/76/1000_F_482417602_F4qMc75cVZgs0iRI4W8iibBzL0Y0aJLN.jpg',
            helyes: 2,
            indoklas:
                'Objektumreferenciával meghívhatók az objektum metódusai, és több referencia is mutathat ugyanarra az objektumra.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a memóriakezelésre objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'Az objektumok a heap memóriaterületen kerülnek eltárolásra.',
                    eldont: 0,
                },
                {
                    kerdes: 'A példányosított objektumok automatikusan törlődnek, amikor kikerülnek a láthatósági körből.',
                    eldont: 1,
                },
                {
                    kerdes: 'A szemétgyűjtő (garbage collector) eltávolítja az elérhetetlen objektumokat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Referencia megszűnése után az objektum memóriában maradhat egy ideig.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 1,
            indoklas:
                'Az objektumok nem azonnal törlődnek a láthatósági körből való kilépéskor, hanem a garbage collector kezeli őket.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a memóriakezelés különböző területeire?',
            kerdesek: [
                {
                    kerdes: 'A stack memóriában általában a lokális változók tárolódnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A heap memória statikus adatok tárolására szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A heap memória dinamikus példányok tárolására szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A stack memória lassabb hozzáférésű, mint a heap memória.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 2,
            indoklas:
                'A stack a lokális változók gyors tárolására szolgál, míg a heap dinamikusan létrehozott objektumokat tartalmaz.',
        },
        {
            fokerdes:
                'Melyik állítás igaz az objektumok heap-ben való tárolására?',
            kerdesek: [
                {
                    kerdes: 'Az objektumok a stack memóriában élnek, ha példányosítjuk őket.',
                    eldont: 0,
                },
                {
                    kerdes: 'A heap memória garantálja az automatikus memóriafelszabadítást közvetlenül példányosítás után.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az objektumokat a heap memóriába a new kulcsszóval hozzuk létre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A heap memória olvasása mindig gyorsabb, mint a stack memóriaé.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 1,
            indoklas:
                'Az objektumokat a new kulcsszóval példányosítjuk, amely a heap memóriában hoz létre helyet számukra.',
        },
        {
            fokerdes:
                'Mely állítások igazak a szemétgyűjtő (garbage collector) működésére?',
            kerdesek: [
                {
                    kerdes: 'A garbage collector automatikusan felszabadítja a már nem használt objektumokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A garbage collector futása mindig kiszámítható időpontban történik.',
                    eldont: 0,
                },
                {
                    kerdes: 'A garbage collector célja a memóriahasználat optimalizálása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A garbage collector kézzel hívható minden programozási nyelvben.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 2,
            indoklas:
                'A garbage collector automatikusan dolgozik a háttérben, optimalizálva a memóriahasználatot, de futása nem előre megjósolható.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a konstruktorok működésére objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'A konstruktor speciális függvény, amely az objektum létrehozásakor fut le.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konstruktor visszatérési típusa mindig void.',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha nem definiálunk konstruktort, akkor a fordító automatikusan létrehoz egy alapértelmezettet.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konstruktor neve megegyezik az osztály nevével.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 1,
            indoklas:
                'A konstruktoroknak nincs visszatérési típusuk, még void sem.',
        },
        {
            fokerdes:
                'Mely állítások igazak az alapértelmezett értékekre objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'Az alapértelmezett konstruktor paraméter nélküli.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az alapértelmezett értékeket mindig a konstruktorban kell megadni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha egy attribútumnak nem adunk értéket, a nyelv típusa alapján alapértéket kaphat.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az alapértelmezett konstruktor kötelező minden osztályban.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 2,
            indoklas:
                'Az alapértelmezett konstruktor nem tartalmaz paramétereket, és az attribútumok automatikusan alapértelmezett értéket kaphatnak típusuk alapján.',
        },
        {
            fokerdes:
                'Melyik állítás igaz a nullértékre objektumorientált programozásban?',
            kerdesek: [
                {
                    kerdes: 'A nullérték azt jelenti, hogy az objektum egy nem inicializált referencia.',
                    eldont: 1,
                },
                {
                    kerdes: 'A nullérték azt jelenti, hogy az objektum már törlésre került a memóriából.',
                    eldont: 0,
                },
                {
                    kerdes: 'Nullértéket csak szám típusú változók vehetnek fel.',
                    eldont: 0,
                },
                {
                    kerdes: 'Nullérték esetén az objektum minden metódusa automatikusan fut.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 1,
            indoklas:
                'A nullérték azt jelenti, hogy a referencia nem mutat semmilyen objektumra.',
        },
        {
            fokerdes: 'Mely állítások igazak a konstruktorok szintaxisára?',
            kerdesek: [
                {
                    kerdes: 'A konstruktor nem adhat visszaértéket, még void típusút sem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A konstruktorokat overloading (túlterhelés) nem támogatja.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konstruktorok neve kötelezően megegyezik az osztály nevével.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy osztálynak legfeljebb egy konstruktora lehet.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:600/1*xeyTIjxHp9hmWPi_HxiRlw.png',
            helyes: 2,
            indoklas:
                'A konstruktor neve mindig megegyezik az osztály nevével, és nem ad visszaértéket. Overloading (túlterhelés) lehetséges.',
        },
        {
            fokerdes:
                'Miért fontos az osztályváltozók megfelelő inicializálása konstruktorban?',
            kerdesek: [
                {
                    kerdes: 'Az inicializálás biztosítja, hogy az objektum minden adattagja érvényes állapotban legyen.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az inicializálás elhagyható, mert a változók automatikusan optimalizálódnak futás közben.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az inicializálás csak az öröklődő osztályokra kötelező.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az inicializálás elősegíti a hibák elkerülését a program futása során.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'A konstruktorban történő inicializálás megbízhatóvá teszi az objektumok állapotát; az optimalizációt nem a változók automatikusan végzik, és nemcsak öröklődő osztályok esetében szükséges.',
        },
        {
            fokerdes:
                'Mely állítások igazak az osztályváltozók konstruktorban történő inicializálására?',
            kerdesek: [
                {
                    kerdes: 'Segít elkerülni a nullértékű hivatkozásokat és hibákat.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az inicializálás megakadályozza, hogy a változó érték nélküli maradjon.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztályváltozókat csak metódusokban lehet inicializálni, konstruktorban nem.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az inicializálás csak public változók esetén fontos.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'Az inicializálás elkerüli a null hivatkozásokat és biztosítja, hogy a változóknak érvényes értéke legyen.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az osztályváltozók közvetlen módosítására?',
            kerdesek: [
                {
                    kerdes: 'Az osztályváltozók közvetlen módosítása növelheti a hibák esélyét.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztályváltozók közvetlen módosítása mindig biztonságos és ajánlott.',
                    eldont: 1,
                },
                {
                    kerdes: 'Getter és setter metódusok használatával szabályozható a változók elérése.',
                    eldont: 0,
                },
                {
                    kerdes: 'A közvetlen módosítás nehezíti az objektumok állapotának nyomon követését.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 1,
            indoklas:
                'A közvetlen módosítás nem mindig biztonságos, ezért érdemes getter és setter metódusokat alkalmazni a kontrollált hozzáférés érdekében.',
        },
        {
            fokerdes:
                'Mely állítások igazak az osztályváltozók közvetlen módosításával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A közvetlen módosítás megnehezítheti a hibák detektálását és javítását.',
                    eldont: 1,
                },
                {
                    kerdes: 'Getter/setter metódusokkal könnyebb érvényességi ellenőrzéseket végezni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A közvetlen változóelérés teljesen kizárja az inkonzisztens állapotok lehetőségét.',
                    eldont: 0,
                },
                {
                    kerdes: 'A közvetlen változóelérés mindig gyorsabb és hibamentes megoldás.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'A getter és setter metódusok segítenek az érvényességi ellenőrzésekben, a közvetlen módosítás pedig könnyen hibákhoz vezethet.',
        },
        {
            fokerdes:
                'Miért érdemes osztályváltozókat konstruktorban módosítani?',
            kerdesek: [
                {
                    kerdes: 'Mert így minden példány külön értékekkel rendelkezhet az osztályváltozók számára.',
                    eldont: 0,
                },
                {
                    kerdes: 'Mert a konstruktor futása után az osztályváltozók mindig readonly (csak olvasható) lesznek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Mert a konstruktor minden változót automatikusan null-ra állít.',
                    eldont: 1,
                },
                {
                    kerdes: 'Mert így biztosított az objektum inicializált, érvényes állapota.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'Az osztályváltozók konstruktorban történő módosítása biztosítja, hogy minden példány egyedi és érvényes állapottal jöjjön létre.',
        },
        {
            fokerdes:
                'Mely állítások igazak a konstruktorban történő osztályváltozó-módosításra?',
            kerdesek: [
                {
                    kerdes: 'Segít a kötelező adattagok megfelelő inicializálásában.',
                    eldont: 1,
                },
                {
                    kerdes: 'A konstruktorban nem lehet értéket adni az osztályváltozóknak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konstruktor lehetővé teszi, hogy minden példány eltérő kezdőértékekkel jöjjön létre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A konstruktor futása után az osztályváltozók mindig törlődnek.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'A konstruktor felelős az adattagok inicializálásáért, és lehetőséget ad példányonkénti eltérő értékadásra is.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a default (alapértelmezett) konstruktorra?',
            kerdesek: [
                {
                    kerdes: 'A default konstruktor olyan konstruktor, amelynek nincs paramétere.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha nem írunk saját konstruktort, a fordító automatikusan létrehoz egy default konstruktort.',
                    eldont: 0,
                },
                {
                    kerdes: 'A default konstruktor mindig minden változót automatikusan 1-re állít.',
                    eldont: 1,
                },
                {
                    kerdes: 'A default konstruktor létrehozza az objektumot alapértelmezett állapotban.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 1,
            indoklas:
                'A default konstruktor nem állítja automatikusan 1-re a változókat; azok típusuk szerint alapértelmezett értéket kapnak (pl. 0, null, false).',
        },
        {
            fokerdes:
                'Mely állítások igazak a default konstruktorral kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A default konstruktor nem tartalmaz paramétereket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A default konstruktor automatikusan létrejön, ha nem definiálunk másik konstruktort.',
                    eldont: 1,
                },
                {
                    kerdes: 'A default konstruktor csak privát adattagokat képes inicializálni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A default konstruktor megakadályozza, hogy új példányokat hozzunk létre az osztályból.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'A default konstruktor paraméter nélküli, és automatikusan generálódik, ha nem írunk saját konstruktorokat.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a this kulcsszóra?',
            kerdesek: [
                {
                    kerdes: 'A this az aktuális objektum példányára hivatkozik.',
                    eldont: 0,
                },
                {
                    kerdes: 'A this használható konstruktoron belül a példányváltozók megkülönböztetésére.',
                    eldont: 0,
                },
                {
                    kerdes: 'A this a statikus metódusokban is mindig az aktuális példányra mutat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A this segítségével meghívható ugyanazon osztály egy másik konstruktora.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 1,
            indoklas:
                'A statikus metódusok nem példányhoz kötöttek, így azokban a this kulcsszó nem használható az aktuális objektum elérésére.',
        },
        {
            fokerdes: 'Mely állítások igazak a this kulcsszóra?',
            kerdesek: [
                {
                    kerdes: 'A this kulcsszóval az aktuális objektum adattagjai érhetők el.',
                    eldont: 1,
                },
                {
                    kerdes: 'A this csak privát változók elérésére használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A this segítségével meghívható ugyanazon osztály egy másik konstruktora.',
                    eldont: 1,
                },
                {
                    kerdes: 'A this egy új objektum példányosítására szolgál.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'A this kulcsszó az aktuális objektum példányváltozóinak elérésére szolgál, illetve konstruktorok között is hívást lehet vele végezni.',
        },
        {
            fokerdes: 'Mire nem használható a konstruktorban a this kulcsszó?',
            kerdesek: [
                {
                    kerdes: 'Példányváltozók értékadására.',
                    eldont: 0,
                },
                {
                    kerdes: 'Másik konstruktor meghívására ugyanabban az osztályban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Objektum törlésére a memóriából.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az aktuális objektum hivatkozására.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 1,
            indoklas:
                'A this kulcsszó nem használható objektumok memóriából való törlésére; az a szemétgyűjtés (garbage collector) feladata.',
        },
        {
            fokerdes:
                'Mely állítások igazak a this kulcsszó konstruktorhívásban történő használatára?',
            kerdesek: [
                {
                    kerdes: 'A this() hívásnak mindig az első utasításnak kell lennie a konstruktorban.',
                    eldont: 1,
                },
                {
                    kerdes: 'A this() hívással paraméter nélküli konstruktor nem hívható meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'A this() segítségével elkerülhető a kód duplikáció több konstruktor között.',
                    eldont: 1,
                },
                {
                    kerdes: 'A this() csak akkor használható, ha az osztálynak pontosan két konstruktora van.',
                    eldont: 0,
                },
            ],
            kep: 'https://armsasu.com/wp-content/uploads/2023/08/OOP.png',
            helyes: 2,
            indoklas:
                'A this() hívásnak az első utasításnak kell lennie a konstruktorban, és segít a kód ismétlődésének elkerülésében több konstruktor között.',
        },
    ],
];
