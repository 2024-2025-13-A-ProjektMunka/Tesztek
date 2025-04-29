let javaecma = [
    'JavaScript, ECMAScript',
    2,
    [
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript nyelv szerepével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A JavaScriptet elsősorban a weboldalak interaktivitásának növelésére használják.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JavaScript csak szerveroldalon futtatható.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JavaScriptet használhatjuk űrlapok ellenőrzésére a böngészőben.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JavaScript segítségével dinamikusan módosítható a HTML tartalom.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A JavaScript kliens- és szerveroldalon is futtatható (Node.js például a szerveren), de eredetileg a böngészők számára készült.',
        },
        {
            fokerdes:
                'Mely állítások igazak a JavaScript fontosabb tulajdonságaira?',
            kerdesek: [
                {
                    kerdes: 'A JavaScript dinamikusan típusos nyelv.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JavaScript erősen típusos nyelv.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JavaScript esemény-vezérelt programozásra is alkalmas.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JavaScript fordítási idejű típusellenőrzést végez alapból.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                'A JavaScript dinamikusan típusos és jól támogatja az esemény-vezérelt programozási mintát, például kattintások vagy billentyűleütések kezelésére.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript futási környezetével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A JavaScriptet futtathatjuk Node.js környezetben is szerveroldalon.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JavaScript kizárólag HTML fájlokban használható.',
                    eldont: 1,
                },
                {
                    kerdes: 'JavaScript kód beágyazható HTML dokumentumba &lt;script&gt; tagekkel.',
                    eldont: 0,
                },
                {
                    kerdes: 'JavaScript kód külön .js fájlokban is tárolható és betölthető.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A JavaScript nem csak HTML fájlokban használható: önálló fájlokból (.js) is betölthető vagy Node.js környezetben is futtatható.',
        },
        {
            fokerdes:
                'Mely állítások igazak a JavaScript nyelv működésével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A JavaScript eseménykezeléssel reagálhat felhasználói műveletekre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JavaScript képes manipulálni a Document Object Model-t (DOM).',
                    eldont: 1,
                },
                {
                    kerdes: 'A JavaScript kizárólag szinkron módon képes végrehajtani a műveleteket.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JavaScript nem képes hálózati kéréseket (pl. HTTP) küldeni.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                'A JavaScript képes DOM manipulációra és események kezelésére is, és akár aszinkron műveleteket is végezhet például fetch vagy async/await segítségével.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript kód weboldalba való beágyazásával kapcsolatban? ',
            kerdesek: [
                {
                    kerdes: 'A JavaScript kód közvetlenül a &lt;script&gt; tagok közé írható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JavaScript kódot csak a &lt;body&gt; elem után szabad megírni.',
                    eldont: 1,
                },
                {
                    kerdes: "A JavaScript kód külön fájlból is betölthető a &lt;script src='...'&gt; szintaxissal.",
                    eldont: 0,
                },
                {
                    kerdes: 'A JavaScript kódot a &lt;head&gt; vagy &lt;body&gt; szakaszokban is elhelyezhetjük.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A JavaScript kódot a &lt;head&gt; vagy &lt;body&gt; szakaszokban is elhelyezhetjük, nem csak a &lt;body&gt; után.',
        },
        {
            fokerdes:
                'Mely állítások igazak, ha JavaScript kódot külön fájlból szeretnénk betölteni?',
            kerdesek: [
                {
                    kerdes: 'A külső JavaScript fájl kiterjesztése általában .js.',
                    eldont: 1,
                },
                {
                    kerdes: 'A külső JavaScript fájlt &lt;link&gt; taggal kell betölteni, mint a CSS-t.',
                    eldont: 0,
                },
                {
                    kerdes: "A külső JavaScript fájlt &lt;script src='...'&gt;&lt;/script&gt; szintaxissal kell betölteni.",
                    eldont: 1,
                },
                {
                    kerdes: 'A külső JavaScript fájlok csak a &lt;head&gt; szekcióban tölthetők be.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                "A külső JavaScript fájlok .js kiterjesztésűek, és a &lt;script src='...'&gt; szintaxissal lehet őket beilleszteni, nem &lt;link&gt; taggal.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a &lt;script&gt; tagok helyével kapcsolatban egy HTML dokumentumban?',
            kerdesek: [
                {
                    kerdes: 'A &lt;script&gt; tag elhelyezhető a &lt;head&gt; szakaszban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;script&gt; tag elhelyezhető közvetlenül a &lt;/body&gt; záró tag előtt is.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;script&gt; tagot kizárólag a HTML dokumentum legelső sorában helyezhetjük el.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;script&gt; tagot elhelyezhetjük akár több helyen is egy oldalon.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A &lt;script&gt; tag nem kizárólag a dokumentum elején helyezhető el, hanem a &lt;head&gt; vagy &lt;body&gt; szekcióban tetszőleges helyen.',
        },
        {
            fokerdes:
                'Melyek helyes módszerek JavaScript kód beillesztésére egy HTML oldalba?',
            kerdesek: [
                {
                    kerdes: 'Közvetlenül a HTML dokumentumba &lt;script&gt; tagek közé írjuk a kódot.',
                    eldont: 1,
                },
                {
                    kerdes: "Külön .js fájlból történő betöltés &lt;script src='...'&gt; segítségével.",
                    eldont: 1,
                },
                {
                    kerdes: 'JavaScript kódot csak CSS fájlokon keresztül lehet beágyazni.',
                    eldont: 0,
                },
                {
                    kerdes: 'JavaScript kódot kizárólag iframe elemben lehet futtatni.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                "A JavaScript kódot vagy közvetlenül a HTML-ben, vagy külön fájlból lehet beilleszteni &lt;script src='...'&gt; segítségével.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript konzolos futtatására?',
            kerdesek: [
                {
                    kerdes: 'A konzol megnyitása után közvetlenül írhatunk JavaScript kódot.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konzolon futtatott kód azonnal végrehajtódik.',
                    eldont: 0,
                },
                {
                    kerdes: 'JavaScript kódot a konzolon csak akkor lehet futtatni, ha előtte letöltöttük a Node.js-t.',
                    eldont: 1,
                },
                {
                    kerdes: 'A böngészők beépített konzolja támogatja a JavaScript parancsok futtatását.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A böngészők beépített fejlesztői eszközeiben (F12) a konzolon közvetlenül lehet JavaScript kódot futtatni, nem szükséges hozzá külön Node.js telepítés.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a JavaScript konzolon történő kódfuttatásával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A konzolba írt parancsok azonnal végrehajtódnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A konzolon kiadott JavaScript kód hatással lehet az aktuális weboldal DOM-jára.',
                    eldont: 1,
                },
                {
                    kerdes: 'A konzol kizárólag hibák megjelenítésére használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konzolban nem lehet változókat létrehozni.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                'A konzolon beírt JavaScript parancsok azonnal végrehajtódnak, és akár módosíthatják az aktuális oldal DOM szerkezetét is.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a böngésző konzoljáról?',
            kerdesek: [
                {
                    kerdes: 'A konzol elérhető az F12 billentyű lenyomásával.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konzolt használva megfigyelhetjük a JavaScript hibákat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A konzolt csak adminisztrátori jogosultsággal lehet megnyitni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A konzolban JavaScript parancsokat lehet kiadni.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A konzol megnyitásához nem szükséges adminisztrátori jogosultság, csak egy böngésző és a fejlesztői eszközök (pl. F12) használata.',
        },
        {
            fokerdes: 'Melyek a konzol által támogatott JavaScript funkciók?',
            kerdesek: [
                {
                    kerdes: 'Változók létrehozása és értékadás.',
                    eldont: 1,
                },
                {
                    kerdes: 'Függvények definiálása és meghívása.',
                    eldont: 1,
                },
                {
                    kerdes: 'HTML sablonok közvetlen szerkesztése.',
                    eldont: 0,
                },
                {
                    kerdes: 'CSS stíluslapok közvetlen szerkesztése.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                'A konzolon változókat hozhatunk létre, értéket adhatunk nekik, valamint függvényeket definiálhatunk és meghívhatunk JavaScript nyelven.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript elemi adattípusaira?',
            kerdesek: [
                {
                    kerdes: 'A Boolean adattípus két értéket vehet fel: true vagy false.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Number adattípus egész és lebegőpontos számokat is reprezentálhat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A String adattípus kizárólag számjegyekből állhat.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az undefined egy olyan érték, amit változóhoz rendelhetünk, ha még nem adtunk neki értéket.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A String adattípus karakterláncot reprezentál, amely bármilyen karaktereket tartalmazhat, nemcsak számjegyeket.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az összetett adattípusokra a JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'Az Array több érték tárolására szolgál egyetlen változóban.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Map kulcs-érték párokat tárol, ahol a kulcs bármilyen típusú lehet.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Set lehetővé teszi, hogy ugyanaz az érték többször is szerepeljen.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Object adattípus csak szöveges kulcsokat támogat.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                'Az Array több értéket tárolhat, a Map pedig bármilyen típusú kulcsot megenged, szemben az Object szöveges kulcsaival. A Set egyedi értékeket tárol.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript aritmetikai műveleteire?',
            kerdesek: [
                {
                    kerdes: "A '+' operátor számok összeadására és szövegek összefűzésére is használható.",
                    eldont: 0,
                },
                {
                    kerdes: "A '/' operátor két szám osztását végzi el.",
                    eldont: 0,
                },
                {
                    kerdes: "A '%' operátor a szövegek közötti százalékarányt számolja ki.",
                    eldont: 1,
                },
                {
                    kerdes: "A '*' operátor szorzásra szolgál.",
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                "A '%' operátor maradékos osztást (modulus) végez, nem százalékszámítást.",
        },
        {
            fokerdes:
                'Melyik állítások igazak a JavaScript logikai műveleteire?',
            kerdesek: [
                {
                    kerdes: "A '&&' operátor akkor ad true értéket, ha mindkét operandus true.",
                    eldont: 1,
                },
                {
                    kerdes: "A '||' operátor akkor ad true értéket, ha legalább az egyik operandus true.",
                    eldont: 1,
                },
                {
                    kerdes: "A '!' operátor az operandus értékét számértékre alakítja át.",
                    eldont: 0,
                },
                {
                    kerdes: "A '==' és a '===' operátorok mindig ugyanazt az eredményt adják.",
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                "A '&&' és '||' logikai operátorok a feltételek igazságértékén alapulnak. A '!' logikai negációt végez, míg a '==' és '===' között típusellenőrzési különbség van.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript reguláris kifejezéseire?',
            kerdesek: [
                {
                    kerdes: 'A reguláris kifejezéseket szövegek keresésére és módosítására használhatjuk.',
                    eldont: 0,
                },
                {
                    kerdes: 'A reguláris kifejezések csak számokkal dolgoznak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A reguláris kifejezés mintaillesztésre alkalmas.',
                    eldont: 0,
                },
                {
                    kerdes: 'A reguláris kifejezések az objektumok között is használhatók.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                'A reguláris kifejezések nem kizárólag számokkal, hanem bármilyen szöveggel dolgozhatnak.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a reguláris kifejezések szintaxisára JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A reguláris kifejezést két perjellel (/) határoljuk.',
                    eldont: 1,
                },
                {
                    kerdes: "A 'g' flag a globális keresést engedélyezi.",
                    eldont: 1,
                },
                {
                    kerdes: "A reguláris kifejezések végén kötelező a '?' karakter.",
                    eldont: 0,
                },
                {
                    kerdes: 'A reguláris kifejezéseket csak string literálként adhatjuk meg.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                "A reguláris kifejezéseket két perjellel (/pattern/) határoljuk, a 'g' flag pedig globális keresést jelent.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a reguláris kifejezések speciális karaktereire?',
            kerdesek: [
                {
                    kerdes: "A '.' karakter bármilyen egyetlen karaktert jelöl (kivéve sortörést).",
                    eldont: 0,
                },
                {
                    kerdes: "A '\\d' minta egy számjegyet jelent.",
                    eldont: 0,
                },
                {
                    kerdes: "A '^' karakter a minta végét jelzi.",
                    eldont: 1,
                },
                {
                    kerdes: "A '\\s' minta bármilyen szóköz karaktert jelent.",
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 1,
            indoklas:
                "A '^' karakter a szöveg vagy sor elejét jelzi, nem a végét (a '$' jelzi a végét).",
        },
        {
            fokerdes:
                'Melyik állítások igazak a reguláris kifejezések használatára JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A test() metódus igaz vagy hamis értékkel tér vissza.',
                    eldont: 1,
                },
                {
                    kerdes: 'A match() függvény egy találatokból álló tömböt ad vissza.',
                    eldont: 1,
                },
                {
                    kerdes: 'A search() függvény mindig egy sztringgel tér vissza.',
                    eldont: 0,
                },
                {
                    kerdes: 'A replace() függvény nem támogat reguláris kifejezéseket.',
                    eldont: 0,
                },
            ],
            kep: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
            helyes: 2,
            indoklas:
                'A test() igaz/hamis értékkel tér vissza, a match() pedig egy találatokból álló tömböt ad vissza. A replace() is támogat reguláris kifejezéseket.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a var, let és const változók deklarálására JavaScriptben?',
            kerdesek: [
                {
                    kerdes: "A 'var' kulcsszóval deklarált változó függvény szintű láthatóságú.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'let' kulcsszóval deklarált változók blokk szintűek.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'const' kulcsszóval deklarált változót újra lehet értékesíteni.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'let' és a 'const' is hoistingolódik, de nem inicializálódik automatikusan.",
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                "A 'const' változók értékét deklarálás után nem lehet újra hozzárendelni.",
        },
        {
            fokerdes:
                'Melyik állítások igazak a var, let és const változók láthatóságára JavaScriptben?',
            kerdesek: [
                {
                    kerdes: "A 'var' változó globálissá válik, ha függvényen kívül deklaráljuk.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'let' és 'const' változók csak az adott blokkban érhetők el.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'var' változók blokkszintű láthatóságot biztosítanak.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'const' változók automatikusan globális változók lesznek.",
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                "A 'var' globális lesz függvényen kívül, míg a 'let' és 'const' blokk szintű hatókörűek.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a const kulcsszóval létrehozott változókra?',
            kerdesek: [
                {
                    kerdes: "A 'const' kulcsszóval deklarált változó értéke nem változtatható meg új érték hozzárendelésével.",
                    eldont: 0,
                },
                {
                    kerdes: "Objektum esetén a 'const' deklaráció után az objektum tulajdonságai módosíthatók.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'const' kulcsszóval deklarált változó láthatósága globális.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'const' változókat azonnal inicializálni kell deklaráláskor.",
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                "A 'const' változók láthatósága nem globális, hanem blokk szintű, akárcsak a 'let' változóké.",
        },
        {
            fokerdes:
                "Melyik állítások igazak a 'var' kulcsszóval deklarált változókra JavaScriptben?",
            kerdesek: [
                {
                    kerdes: "A 'var' deklarált változók hoistingolódnak a függvény tetejére.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'var' változó láthatósága függvényszintű.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'var' deklarált változók csak blokk szinten elérhetők.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'var' változók deklarációja hibát dob, ha újra deklaráljuk ugyanabban a függvényben.",
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                "A 'var' változók függvényszintűek és hoistingolódnak a függvény tetejére.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a for of ciklussal kapcsolatban JavaScriptben?',
            kerdesek: [
                {
                    kerdes: "A 'for of' ciklus tömbök elemeinek bejárására alkalmas.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'for of' ciklus objektumok kulcsainak bejárására szolgál.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'for of' ciklus használható String típusú változók karaktereinek bejárására is.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'for of' ciklus csak iterálható objektumokon működik.",
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                "A 'for of' ciklus az értékeket járja be, nem az objektum kulcsait. Kulcsok bejárására a 'for in' ciklust használjuk.",
        },
        {
            fokerdes:
                'Melyik állítások igazak a while ciklus működésére JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A while ciklus addig fut, amíg a megadott feltétel igaz.',
                    eldont: 1,
                },
                {
                    kerdes: 'A while ciklusban a feltétel kiértékelése a ciklus végén történik.',
                    eldont: 0,
                },
                {
                    kerdes: 'A while ciklusban először ellenőrizzük a feltételt, majd végrehajtjuk a ciklusmagot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A while ciklust csak numerikus változókra lehet használni.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                'A while ciklusban először kiértékeljük a feltételt, és csak ha igaz, akkor fut le a ciklus törzse.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a switch szerkezetről JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A switch szerkezet lehetővé teszi több feltétel egyszerűbb kezelését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A switch szerkezetben a break utasítás megakadályozza a további esetek végrehajtását.',
                    eldont: 0,
                },
                {
                    kerdes: 'A switch szerkezet csak szám típusú értékeket tud összehasonlítani.',
                    eldont: 1,
                },
                {
                    kerdes: 'A switch case ágak összehasonlításkor szigorú egyezést (===) alkalmaznak.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                'A switch szerkezet nemcsak szám típusú értékek összehasonlítására képes, hanem stringekkel is dolgozhat.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a for in és for of ciklusok különbségeiről?',
            kerdesek: [
                {
                    kerdes: "A 'for in' ciklus az objektum kulcsain iterál.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'for of' ciklus az iterálható objektumok értékein iterál.",
                    eldont: 1,
                },
                {
                    kerdes: "A 'for in' ciklus csak tömbök esetén használható.",
                    eldont: 0,
                },
                {
                    kerdes: "A 'for of' ciklus objektumok kulcsait adja vissza.",
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                "A 'for in' kulcsokon iterál, míg a 'for of' az értékeken iterál. A 'for in' nemcsak tömbökre alkalmazható, hanem objektumokra is.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript függvénydeklarációkkal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Egy függvény deklarálható a function kulcsszóval.',
                    eldont: 0,
                },
                {
                    kerdes: 'A függvény deklarációja automatikusan a program végére kerül.',
                    eldont: 1,
                },
                {
                    kerdes: 'A függvénydeklarációk hoistingolódnak (a kód elejére kerülnek) JavaScriptben.',
                    eldont: 0,
                },
                {
                    kerdes: 'A függvényeket paraméterekkel is elláthatjuk.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                'A függvénydeklarációk a kód elejére kerülnek (hoisting), de nem a program végére. Ezért nem igaz, hogy automatikusan a végére kerülnének.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript függvénydeklarációkra?',
            kerdesek: [
                {
                    kerdes: 'Függvénydeklarációval már a definíció előtt is meghívható a függvény.',
                    eldont: 0,
                },
                {
                    kerdes: 'Függvénydeklarációkor a függvény neve opcionális.',
                    eldont: 1,
                },
                {
                    kerdes: 'Függvénydeklaráció esetén a függvény a teljes szkript betöltésekor inicializálódik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Függvények paramétereket és visszatérési értéket is használhatnak.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                'Függvénydeklarációnál a függvénynév kötelező. A név opcionális csak névtelen függvénykifejezéseknél lehet.',
        },
        {
            fokerdes:
                'Mely állítások igazak az arrow function-ökre JavaScriptben?',
            kerdesek: [
                {
                    kerdes: "Az arrow function-ök nem rendelkeznek saját 'this' kulcsszóval.",
                    eldont: 1,
                },
                {
                    kerdes: 'Az arrow function-ök automatikusan hoistingolódnak, mint a deklarált függvények.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az arrow function-ök rövidebb szintaxist kínálnak a hagyományos függvényekhez képest.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az arrow function-öknél mindig kötelező a return kulcsszó.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                "Az arrow function-ök nem hoistingolódnak és nem rendelkeznek saját 'this'-el, valamint rövidebb szintaxist biztosítanak.",
        },
        {
            fokerdes:
                'Melyik állítások igazak az arrow function (nyílfüggvény) szintaxisra JavaScriptben?',
            kerdesek: [
                {
                    kerdes: "Arrow function nem rendelkezik saját 'this' kontextussal.",
                    eldont: 1,
                },
                {
                    kerdes: 'Arrow function mindig blokk-kifejezést ({}-t) igényel.',
                    eldont: 0,
                },
                {
                    kerdes: 'Arrow function rövidítheti az egyetlen kifejezést visszaadó függvényeket.',
                    eldont: 1,
                },
                {
                    kerdes: 'Arrow function segítségével nem adható vissza objektum.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                "Arrow function nem köt saját 'this'-t, és rövid szintaxist kínál kifejezés visszaadására.",
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az arrow function-ök működéséről?',
            kerdesek: [
                {
                    kerdes: "Az arrow function-ök öröklik a szülő scope 'this' értékét.",
                    eldont: 0,
                },
                {
                    kerdes: 'Az arrow function-ök saját arguments objektummal rendelkeznek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egysoros arrow function-ök automatikusan visszatérnek az értékkel return kulcsszó nélkül.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az arrow function szintaxis rövidebb, mint a hagyományos function szintaxis.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                'Az arrow function-ök nem rendelkeznek saját arguments objektummal, hanem a szülő scope arguments objektumát használják.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz az arrow function működésére?',
            kerdesek: [
                {
                    kerdes: 'Arrow function nem használható konstruktor függvényként (new kulcsszóval).',
                    eldont: 0,
                },
                {
                    kerdes: 'Arrow function automatikusan hoistolódik a kódban, mint a függvénydeklarációk.',
                    eldont: 1,
                },
                {
                    kerdes: 'Arrow function esetén a paraméterlista elhagyható, ha csak egy paraméter van.',
                    eldont: 0,
                },
                {
                    kerdes: 'Arrow function esetén a return kulcsszó elhagyható egyetlen kifejezés esetén.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                'Az arrow function nem hoistolódik, csak a deklaráció után érhető el.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a hagyományos függvények és az arrow function-ök közti különbségekre?',
            kerdesek: [
                {
                    kerdes: "A hagyományos függvények rendelkeznek saját 'this' kulcsszóval.",
                    eldont: 1,
                },
                {
                    kerdes: "Az arrow function-ök mindig egy új 'this'-t hoznak létre.",
                    eldont: 0,
                },
                {
                    kerdes: 'A hagyományos függvények használhatják az arguments objektumot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hagyományos függvények rövidebb szintaxist használnak az arrow function-ökhöz képest.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                "A hagyományos függvények rendelkeznek saját 'this' kulcsszóval és elérhetik az arguments objektumot, míg az arrow function-ök nem.",
        },
        {
            fokerdes:
                'Melyik állítások igazak az arrow function szintaktikai sajátosságairól?',
            kerdesek: [
                {
                    kerdes: 'Több paraméter esetén a paramétereket zárójelezni kell.',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha nincs paraméter, akkor is kötelező üres zárójelet írni.',
                    eldont: 1,
                },
                {
                    kerdes: 'Tömb visszaadása esetén nem kell zárójelezni az értéket.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az arrow function mindig aszinkron módon hajtódik végre.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                'Több paraméter, vagy 0 paraméter esetén is kötelező a zárójelek használata az arrow function definíciónál.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a DOM (Document Object Model) felépítésére?',
            kerdesek: [
                {
                    kerdes: 'A DOM fa struktúrában ábrázolja a weboldal elemeit.',
                    eldont: 0,
                },
                {
                    kerdes: 'Minden HTML elemhez tartozik egy node (csomópont) a DOM-ban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DOM kizárólag csak a szöveges tartalmat reprezentálja.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DOM lehetőséget ad a weboldal dinamikus módosítására JavaScript segítségével.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                'A DOM a teljes dokumentumot modellezi, beleértve a struktúrát, attribútumokat és szöveges tartalmakat is, nemcsak a szöveget.',
        },
        {
            fokerdes: 'Mely állítások igazak a DOM node típusaira?',
            kerdesek: [
                {
                    kerdes: 'Az element node egy HTML elemet reprezentál.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az attribute node egy elem attribútumát írja le.',
                    eldont: 1,
                },
                {
                    kerdes: 'A text node nem tartalmazhat üres szöveget.',
                    eldont: 0,
                },
                {
                    kerdes: 'Minden node automatikusan egy form elemmé válik.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                'Element node-ok HTML tageket, az attribute node-ok pedig a tagekhez tartozó attribútumokat képviselik. A text node lehet üres is.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript DOM manipulációs lehetőségeire?',
            kerdesek: [
                {
                    kerdes: 'A JavaScript segítségével új HTML elemeket is létrehozhatunk a DOM-ban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DOM elemek nem módosíthatók JavaScript segítségével, csak olvashatók.',
                    eldont: 1,
                },
                {
                    kerdes: 'Attribútumokat is lehet módosítani JavaScript kóddal.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy elem szöveges tartalma is megváltoztatható JavaScript használatával.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 1,
            indoklas:
                'A JavaScript nemcsak olvasni, hanem aktívan módosítani is tudja a DOM elemeket, például attribútumok és tartalom szintjén.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a DOM node-okkal való munkavégzés során?',
            kerdesek: [
                {
                    kerdes: 'Az appendChild metódussal új elemet adhatunk egy meglévő elemhez.',
                    eldont: 1,
                },
                {
                    kerdes: 'A removeChild segítségével törölhetünk egy meglévő DOM elemet.',
                    eldont: 1,
                },
                {
                    kerdes: 'A node-ok között nem lehet hierarchiát kialakítani.',
                    eldont: 0,
                },
                {
                    kerdes: 'A text node csak attribútumokat tárol.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png',
            helyes: 2,
            indoklas:
                'Az appendChild és removeChild metódusok lehetővé teszik a DOM fa dinamikus módosítását, például elemek hozzáadását vagy eltávolítását.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az elemek JavaScript-ben való elérésére?',
            kerdesek: [
                {
                    kerdes: 'Az getElementById egy adott azonosítóval rendelkező elemet ad vissza.',
                    eldont: 0,
                },
                {
                    kerdes: 'A querySelector csak ID alapján tud elemet kiválasztani.',
                    eldont: 1,
                },
                {
                    kerdes: 'A getElementsByClassName tömbszerű objektumot ad vissza.',
                    eldont: 0,
                },
                {
                    kerdes: 'A querySelectorAll több elemet is vissza tud adni egyszerre.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A querySelector bármilyen CSS szelektort elfogad, nem csak ID-t.',
        },
        {
            fokerdes:
                'Mely állítások igazak az elemek módosítására JavaScript használatával?',
            kerdesek: [
                {
                    kerdes: 'Az innerHTML használatával megváltoztathatjuk egy elem tartalmát.',
                    eldont: 1,
                },
                {
                    kerdes: 'A setAttribute metódussal módosíthatunk egy elem attribútumait.',
                    eldont: 1,
                },
                {
                    kerdes: 'A classList.remove() új osztályt ad az elemhez.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az innerText módosítása törli az elemet a DOM-ból.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az innerHTML módosítja az elem tartalmát, a setAttribute pedig az attribútumokat változtatja meg.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az új HTML elemek létrehozására JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'Az createElement metódussal új HTML elemet hozhatunk létre.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy újonnan létrehozott elem automatikusan megjelenik az oldalon.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy új elemhez attribútumokat is rendelhetünk JavaScript segítségével.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az appendChild metódussal adhatjuk hozzá az új elemet a DOM-hoz.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'Egy újonnan létrehozott elem csak akkor jelenik meg az oldalon, ha kifejezetten hozzáadjuk a DOM-hoz például appendChild segítségével.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az elemek DOM-hoz való hozzáadásával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az appendChild egy meglévő elemhez csatol egy új elemet.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az insertBefore egy elemet ad hozzá egy másik meglévő elem elé.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az replaceChild nem tud lecserélni egy meglévő DOM elemet.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az új elemek automatikusan az oldal tetejére kerülnek.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az appendChild és insertBefore a DOM struktúrába helyezi az új elemeket, a replaceChild pedig lecserélhet egy meglévőt.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az onClick eseményre JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'Az onClick esemény akkor aktiválódik, amikor egy elemre kattintunk.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onClick csak az input elemekhez rendelhető hozzá.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az onClick eseményt JavaScript kódból is hozzáadhatjuk addEventListener-rel.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onClick eseményt HTML-ben inline módon is megadhatjuk.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'Az onClick esemény bármelyik HTML elemhez hozzárendelhető, nem csak input mezőkhöz.',
        },
        {
            fokerdes: 'Mely állítások igazak az onLoad eseményre?',
            kerdesek: [
                {
                    kerdes: 'Az onLoad esemény akkor következik be, amikor az oldal vagy egy elem teljesen betöltődött.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az onLoad esemény képes reagálni egy képfájl teljes betöltődésére is.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az onLoad esemény mindig azonnal fut, amikor a JavaScript fájl betöltődik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onLoad csak a script fájlokra vonatkozik, más elemeket nem érint.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az onLoad esemény akkor fut le, amikor az adott elem, például kép vagy az egész oldal teljesen betöltődött.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az onBlur eseményre JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'Az onBlur esemény akkor következik be, amikor egy input elem elveszíti a fókuszt.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onBlur csak a `textarea` elemekre alkalmazható.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az onBlur esemény például űrlap-ellenőrzésre is használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onBlur eseményt JavaScript kódból is kezelhetjük addEventListener-rel.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'Az onBlur nemcsak `textarea` elemekhez, hanem más input típusokhoz is hozzárendelhető.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az onFocus eseményre JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'Az onFocus esemény akkor következik be, amikor egy elem fókuszba kerül.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az onFocus kizárólag formokban használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onFocus esemény felhasználható mezők kiemelésére.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az onFocus eseményt nem lehet JavaScript segítségével figyelni.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az onFocus esemény akkor aktiválódik, ha egy elem aktívvá válik, és gyakran használják vizuális kiemelésre is.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a &lt;form&gt; elemre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;form&gt; elem űrlapok létrehozására szolgál weboldalakon.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;form&gt; elem csak egyetlen &lt;input&gt; elemet tartalmazhat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;form&gt; elemhez JavaScript segítségével eseménykezelőt lehet rendelni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;form&gt; elem használható adatok szerverre küldésére.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A &lt;form&gt; több &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt; elemet is tartalmazhat, nem korlátozódik egyre.',
        },
        {
            fokerdes:
                'Mely állítások igazak a &lt;select&gt; és &lt;option&gt; elemekre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;select&gt; elem legördülő lista megjelenítésére szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az &lt;option&gt; elem egy választható lehetőséget jelöl egy listában.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;select&gt; elem csak rádiógombokat jelenít meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az &lt;option&gt; csak JavaScript kóddal hozható létre.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A &lt;select&gt; és &lt;option&gt; elemek lehetőséget adnak több opció közül választani, nem rádiógombok és nem csak JavaScript-tel hozhatók létre.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a &lt;textarea&gt; elemre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;textarea&gt; több soros szövegbevitelre szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;textarea&gt; elem használható üzenetek vagy megjegyzések bekérésére.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;textarea&gt; elembe nem írhatunk be szöveget a felhasználó által.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;textarea&gt; elem JavaScript-tel módosítható.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A &lt;textarea&gt; kifejezetten a felhasználói szövegbevitelre készült, így természetesen írható bele szöveg.',
        },
        {
            fokerdes: 'Mely állítások igazak a &lt;label&gt; elemre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;label&gt; elem egy űrlapmező leírására szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;label&gt; elemre kattintva az összekapcsolt mező is fókuszt kap.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;label&gt; elem csak dekorációs célokat szolgál, semmi funkciója nincs.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;label&gt; nem használható input mezők leírására.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A &lt;label&gt; elem megkönnyíti az űrlapok használatát, és kattintásra fókuszba helyezi a kapcsolódó input mezőt.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz az ES6 spread operátorra?',
            kerdesek: [
                {
                    kerdes: 'A spread operátor (...) segítségével tömbök és objektumok másolhatók.',
                    eldont: 0,
                },
                {
                    kerdes: 'A spread operátor több elemet külön-külön ad át függvényeknek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A spread operátor kizárólag számok összeadására szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A spread operátor tömbök egyesítésére is használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A spread operátor nemcsak számokhoz, hanem tömbök, objektumok kibontására és másolására is használható.',
        },
        {
            fokerdes: 'Mely állítások igazak az Array.map() függvényre?',
            kerdesek: [
                {
                    kerdes: 'Az Array.map() új tömböt hoz létre a meglévő tömb elemeinek átalakításával.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Array.map() módosítja az eredeti tömböt.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Array.map() minden tömbelemre meghív egy callback függvényt.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Array.map() kizárólag objektumokat tud feldolgozni.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az Array.map() új tömböt ad vissza, minden elemre meghívva a megadott függvényt, az eredeti tömböt nem módosítja.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz az Object.keys() függvényre?',
            kerdesek: [
                {
                    kerdes: 'Az Object.keys() egy objektum kulcsait adja vissza tömbként.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Object.keys() visszatérési értéke mindig objektum típusú.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Object.keys() segítségével végig lehet iterálni egy objektum tulajdonságain.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Object.keys() csak enumerable (felsorolható) tulajdonságokat ad vissza.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'Az Object.keys() mindig egy tömböt ad vissza, nem pedig objektumot.',
        },
        {
            fokerdes: 'Mely állítások igazak az Array.filter() függvényre?',
            kerdesek: [
                {
                    kerdes: 'Az Array.filter() új tömböt hoz létre a feltételnek megfelelő elemekből.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Array.filter() minden elemet átalakít egy új értékké.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Array.filter() nem módosítja az eredeti tömböt.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Array.filter() mindig az összes elemet visszaadja.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az Array.filter() a megadott feltétel szerint válogat elemeket, új tömböt hozva létre anélkül, hogy az eredeti tömböt módosítaná.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a console.log() használatára JavaScript hibakeresés során?',
            kerdesek: [
                {
                    kerdes: 'A console.log() segítségével változók értékei jeleníthetők meg a konzolon.',
                    eldont: 0,
                },
                {
                    kerdes: 'A console.log() automatikusan kijavítja a szintaktikai hibákat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A console.log() segít a program futási idejű viselkedésének megértésében.',
                    eldont: 0,
                },
                {
                    kerdes: 'A console.log() a fejlesztői eszközökben látható.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A console.log() csak információkat jelenít meg a konzolon, nem javítja ki automatikusan a hibákat.',
        },
        {
            fokerdes: 'Mely állítások igazak a JavaScript hibakeresésére?',
            kerdesek: [
                {
                    kerdes: 'A debugger kulcsszóval megszakítható a kód futása egy adott ponton.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hibák mindig csak a szintaktikai problémákból adódnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A böngészők fejlesztői eszközei segítségével lépésenként futtatható a JavaScript kód.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hibakeresés során a változók értékei nem ellenőrizhetők.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A debugger kulcsszó és a fejlesztői eszközök lehetővé teszik a kód futásának megszakítását és elemzését, nemcsak szintaktikai, hanem logikai hibákat is keresve.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript tesztelésére unit tesztekkel?',
            kerdesek: [
                {
                    kerdes: 'A unit tesztek célja, hogy kis kódrészek helyes működését ellenőrizzék.',
                    eldont: 0,
                },
                {
                    kerdes: 'A unit tesztek automatikusan futtathatók tesztkörnyezetekben, például Jest-tel.',
                    eldont: 0,
                },
                {
                    kerdes: 'A unit tesztek garantálják, hogy a program mindig hibátlan lesz.',
                    eldont: 1,
                },
                {
                    kerdes: 'A unit tesztek növelhetik a kód megbízhatóságát.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A unit tesztek segítenek hibák feltárásában, de nem garantálják a hibátlan működést minden körülmény között.',
        },
        {
            fokerdes:
                'Mely állítások igazak az assert() függvényre JavaScript teszteléskor?',
            kerdesek: [
                {
                    kerdes: 'Az assert() ellenőrzi, hogy egy állítás igaz-e.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az assert() futtatásakor soha nem keletkezik hibaüzenet.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az assert() hibát dob, ha a feltétel hamis.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az assert() csak sztring típusú adatokat képes ellenőrizni.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az assert() igazságérték ellenőrzésére szolgál, és hibát jelez, ha a feltétel hamis.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a setTimeout() függvényre JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'A setTimeout() egy adott idő elteltével hajtja végre a megadott függvényt.',
                    eldont: 0,
                },
                {
                    kerdes: 'A setTimeout() mindig pontosan időre futtatja a kódot, garantált késés nélkül.',
                    eldont: 1,
                },
                {
                    kerdes: 'A setTimeout() nem blokkolja a fő szálat a várakozás alatt.',
                    eldont: 0,
                },
                {
                    kerdes: 'A setTimeout() visszatérési értéke egy azonosító (ID), amely a timeout törlésére is használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A setTimeout() nem garantálja az időzítést más műveletek prioritása miatt, ezért lehet némi késés.',
        },
        {
            fokerdes:
                'Mely állítások igazak az event listener-ekre JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'Egy event listener figyeli egy adott esemény bekövetkezését egy elemnél.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy event listener egyszerre csak egy eseményt tud figyelni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy elemhez több event listener is hozzáadható különböző eseményekre.',
                    eldont: 1,
                },
                {
                    kerdes: 'Event listener-ek csak a gombokhoz rendelhetők hozzá.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az event listener-ek eseményeket figyelnek bármely DOM elemnél, és egy elemhez több is társítható különböző eseményekre.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a callback függvényekre JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'A callback függvényeket általában egy művelet befejeződése után hívjuk meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'A callback-ek a JavaScript szinkron működését biztosítják.',
                    eldont: 1,
                },
                {
                    kerdes: 'A callback lehet névtelen függvény is.',
                    eldont: 0,
                },
                {
                    kerdes: 'Callback használható például egy gomb kattintásának kezelésére is.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A callback-ek pont az aszinkron működést segítik, nem szinkronizálják a kódot.',
        },
        {
            fokerdes:
                'Mely állítások igazak a setTimeout() és setInterval() függvényekre JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'A setTimeout() egyszer hajtja végre a megadott függvényt késleltetéssel.',
                    eldont: 1,
                },
                {
                    kerdes: 'A setInterval() folyamatosan, megadott időközönként futtatja a függvényt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A setTimeout() automatikusan ismétli a függvényt minden 1000ms után.',
                    eldont: 0,
                },
                {
                    kerdes: 'A setInterval() csak egyszer futtatja a függvényt.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A setTimeout() egyszeri késleltetést alkalmaz, míg a setInterval() ciklikusan hajtja végre a függvényt.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JavaScript Promise objektumra?',
            kerdesek: [
                {
                    kerdes: 'A Promise aszinkron műveletek eredményét kezeli.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Promise azonnal visszatér az aszinkron művelet eredményével.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Promise lehet fulfilled, rejected vagy pending állapotú.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Promise segítségével elkerülhető a callback hell.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A Promise nem tér vissza azonnal az eredménnyel, hanem egy jövőbeli értéket képvisel, amelyet később kapunk meg.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az async/await használatára JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'Az await kulcsszó megvárja, hogy egy Promise teljesüljön, mielőtt a kód tovább futna.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az async függvények mindig Promise-t adnak vissza.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az await kulcsszót használhatjuk bármilyen függvényen belül.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az async/await használatával szinkron kódfolyamatot hozunk létre az adatbázis-kezeléshez.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az async függvény mindig Promise-t ad vissza, és az await megvárja annak teljesülését. Az await csak async függvényen belül használható.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az async kulcsszóra JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'Az async kulcsszóval ellátott függvények automatikusan Promise-t adnak vissza.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az async kulcsszó biztosítja, hogy a függvény blokkolja a fő szálat a végrehajtás alatt.',
                    eldont: 1,
                },
                {
                    kerdes: 'Async függvényen belül az await kulcsszóval várhatunk Promise teljesülésére.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az async függvények használata olvashatóbbá teszi az aszinkron kódot.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'Az async nem blokkolja a fő szálat, az async/await páros az aszinkron kód szebb kezelésére szolgál.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a Promise hibakezelésére JavaScript-ben?',
            kerdesek: [
                {
                    kerdes: 'A .catch() metódust a Promise hibakezelésére használjuk.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az async/await szintaxisban a try/catch blokkot használjuk hibakezelésre.',
                    eldont: 1,
                },
                {
                    kerdes: 'Promise hibák nem kezelhetők, ezért mindig elkerülhetők kell legyenek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha egy Promise hibát dob, az automatikusan újrapróbálkozik.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A Promise-ok hibakezelésére a .catch() vagy try/catch blokkot alkalmazzuk async/await esetén. Az automatikus újrapróbálkozást kézzel kell implementálni.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a JSON formátumra?',
            kerdesek: [
                {
                    kerdes: 'A JSON egy könnyű adatcsere formátum.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON formátumban az objektum kulcsai idézőjelek között vannak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON lehet közvetlenül JavaScript függvényeket is tartalmazó adatstruktúra.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON egyszerűen olvasható ember és gép számára is.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A JSON csak adatok tárolására használható, nem tartalmazhat függvényeket, csak szöveget, számokat, objektumokat, tömböket, logikai értékeket és null-t.',
        },
        {
            fokerdes:
                'Mely állítások igazak a JSON.parse() és JSON.stringify() függvényekre?',
            kerdesek: [
                {
                    kerdes: 'A JSON.parse() egy JSON szöveget alakít JavaScript objektummá.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON.stringify() JavaScript objektumot alakít JSON szöveggé.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON.stringify() JSON szöveget alakít JavaScript tömbbé.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON.parse() futtat bármilyen benne található JavaScript kódot.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A JSON.parse() JSON szöveget konvertál objektummá, a JSON.stringify() pedig objektumot alakít JSON szöveggé. A JSON.parse() nem futtat kódot, csak adatot alakít át.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a JSON adatstruktúrával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A JSON adatok kulcs-érték párokból állnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON megengedi, hogy undefined típusú értékek is szerepeljenek.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON objektumokat és tömböket is képes ábrázolni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON adattípusai közé tartozik a string, szám, logikai érték, tömb és objektum.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A JSON nem támogatja az undefined értékeket, csak null-t használhat helyette.',
        },
        {
            fokerdes:
                'Mely állítások igazak a JSON adatformátum tulajdonságaira?',
            kerdesek: [
                {
                    kerdes: 'A JSON adattípusai között szerepel a boolean.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON formátumban az értékek közé számok is írhatók idézőjelek nélkül.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON formátum megengedi a kommentek beszúrását az adatfájlba.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON fájlok csak angol karaktereket tartalmazhatnak.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A JSON támogatja a boolean típusú értékeket, és a számokat nem kell idézőjelbe tenni. Kommenteket nem enged meg a szabványos JSON szintaxis.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a REST API architektúrára?',
            kerdesek: [
                {
                    kerdes: 'A REST API-k az állapotmentesség elvén működnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A REST API-k minden kérésnél tartalmazzák a szükséges összes információt.',
                    eldont: 0,
                },
                {
                    kerdes: 'A REST API mindig WebSocket protokollt használ az adatátvitelre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A REST API-k általában HTTP protokollon keresztül működnek.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A REST API-k főként HTTP-t használnak, nem WebSocket-et. A REST architektúra állapotmentes, és minden kérés teljes információt tartalmaz.',
        },
        {
            fokerdes: 'Mely állítások igazak a REST API működésére?',
            kerdesek: [
                {
                    kerdes: 'A REST API műveletei között a GET a lekérdezésre szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A REST API-ban a POST kérés adatok módosítására szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A REST API PUT művelete adatok létrehozására vagy frissítésére használható.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DELETE művelet új erőforrás létrehozását végzi.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A GET kérés adatokat kér le, a PUT adatokat frissít vagy hoz létre. A POST inkább új adat létrehozására szolgál, a DELETE törli az adatokat.',
        },
        {
            fokerdes: 'Melyik nem jellemző REST API elv?',
            kerdesek: [
                {
                    kerdes: 'Állapotmentesség (statelessness).',
                    eldont: 0,
                },
                {
                    kerdes: 'Egységes interfész (uniform interface).',
                    eldont: 0,
                },
                {
                    kerdes: 'Üzenet-alapú titkosítás kötelezővé tétele minden REST kéréshez.',
                    eldont: 1,
                },
                {
                    kerdes: 'Erőforrások egyedi azonosítása URI-val.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A REST API nem írja elő kötelezően az üzenet-alapú titkosítást; a biztonságos kommunikációt (például HTTPS) más módon biztosítják.',
        },
        {
            fokerdes: 'Mely állítások igazak egy REST API szerkezetére?',
            kerdesek: [
                {
                    kerdes: 'A REST API-kban az erőforrásokat URL-ekkel azonosítjuk.',
                    eldont: 1,
                },
                {
                    kerdes: 'A REST API-kban a HTTP metódusok (GET, POST, PUT, DELETE) szabványos jelentéssel bírnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A REST API-khoz minden kéréshez külön adatbázis-kapcsolatot kell létrehozni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A REST API-k csak JSON formátumban képesek adatot visszaadni.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'Az erőforrások URL-lel azonosíthatók, a HTTP metódusok pedig szabványos funkciókat töltenek be. A REST API nem kötelezően JSON-t használ, XML is lehet például.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az AJAX működésével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az AJAX lehetővé teszi, hogy a weboldal frissítése újratöltés nélkül történjen.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az AJAX mindig XML formátumot használ az adatok küldésére.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az AJAX HTTP kéréseket használ az adatok küldésére és fogadására.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az AJAX aszinkron módon kommunikál a szerverrel.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'Az AJAX eredetileg XML-t használt, de ma már JSON vagy más formátumok is általánosak.',
        },
        {
            fokerdes: 'Melyik állítások igazak a fetch() függvényre?',
            kerdesek: [
                {
                    kerdes: 'A fetch() egy Promise-t ad vissza.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() csak szinkron HTTP kérések küldésére használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch() alapértelmezett módszere a GET.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() csak JSON válaszok kezelésére képes.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A fetch() egy Promise-t ad vissza, és alapból GET metódust használ. Szinkron módon nem működik, és nem csak JSON válaszokat kezel.',
        },
        {
            fokerdes:
                'Melyik nem kötelező paraméter a fetch() függvény hívásakor?',
            kerdesek: [
                {
                    kerdes: 'URL cím, ahová a kérés irányul.',
                    eldont: 0,
                },
                {
                    kerdes: 'HTTP metódus beállítása (pl. GET, POST).',
                    eldont: 1,
                },
                {
                    kerdes: 'Az adatok JSON formátumba alakítása a válasz feldolgozásakor.',
                    eldont: 0,
                },
                {
                    kerdes: 'Kérés fejlécének (headers) megadása, ha szükséges.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 1,
            indoklas:
                'A fetch() alapértelmezett metódusa a GET, így nem kötelező külön megadni, hacsak nem változtatni akarunk rajta.',
        },
        {
            fokerdes: 'Melyek igazak a fetch() válaszobjektumra (Response)?',
            kerdesek: [
                {
                    kerdes: 'A response.json() Promise-t ad vissza a JSON-adatok feldolgozásához.',
                    eldont: 1,
                },
                {
                    kerdes: 'A response.text() a választ szövegként adja vissza.',
                    eldont: 1,
                },
                {
                    kerdes: 'A response.ok tulajdonság mindig false értékű, ha a HTTP státusz 404.',
                    eldont: 0,
                },
                {
                    kerdes: 'A response.body automatikusan JSON-objektumot ad vissza.',
                    eldont: 0,
                },
            ],
            kep: 'https://cubixedu.com/app/uploads/2022/05/javascript-felhasznalasi-teruletek.jpg',
            helyes: 2,
            indoklas:
                'A response.json() és a response.text() aszinkron metódusok, melyek Promise-t adnak vissza. A response.ok igaz, ha a státusz kód 200–299 közé esik.',
        },
    ],
];
