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
    ],
];
