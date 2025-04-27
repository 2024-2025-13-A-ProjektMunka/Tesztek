let frontend = [
    'Frontend készítésre szolgáló JavaScript keretrendszerek',
    6,
    [
        {
            fokerdes:
                'Melyik állítás nem igaz a setTimeout használatára JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A setTimeout egy adott idő után futtat le egy függvényt.',
                    eldont: 0,
                },
                {
                    kerdes: 'A setTimeout blokkolja a kód futását, amíg az idő le nem telik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A setTimeout aszinkron módon működik.',
                    eldont: 0,
                },
                {
                    kerdes: 'A setTimeout visszatér egy azonosítóval, amivel törölhető.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 1,
            indoklas:
                'A setTimeout nem blokkolja a kódot, hanem aszinkron módon futtatja le a megadott idő után.',
        },
        {
            fokerdes:
                'Mely állítások igazak az event listenerek és callback függvények kapcsán JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'Az event listener egy adott esemény bekövetkeztekor hívja meg a hozzárendelt callbacket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A callback függvényeket mindig szinkron módon futtatja a JavaScript.',
                    eldont: 0,
                },
                {
                    kerdes: 'Több eseményfigyelő is hozzáadható ugyanahhoz az elemhez.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az event listener csak egyetlen eseményhez rendelhető hozzá.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 2,
            indoklas:
                'Az event listenerek több elemhez és eseményhez rendelhetők, és callbackeket aszinkron is meghívhatnak.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a Promise működésére JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A Promise egy aszinkron művelet eredményét képviseli.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Promise csak sikeres lefutás esetén futtat kódot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Promise then metódusa a sikeres eredményre reagál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A catch metódus a hibakezelést szolgálja Promise esetén.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 1,
            indoklas:
                'A Promise a sikeres és hibás kimenetet is képes kezelni — a hibákra a .catch(), sikerre a .then() reagál.',
        },
        {
            fokerdes:
                'Mely állítások igazak a Promise láncolására JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A Promise láncolás lehetővé teszi az aszinkron műveletek egymás utáni végrehajtását.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Promise láncolás nem teszi lehetővé hibakezelést.',
                    eldont: 0,
                },
                {
                    kerdes: 'A then() metódus egymás után többször is hívható.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Promise lánc végén nem lehet catch() metódust használni.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 2,
            indoklas:
                'A Promise láncolás egymás után végrehajtott műveleteket jelent, és minden .then() visszatér egy új Promise-szal, így tovább folytatható a láncolás.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az XMLHttpRequest (XHR) objektumra?',
            kerdesek: [
                {
                    kerdes: 'Az XHR objektummal szinkron és aszinkron kérések is küldhetők.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az XHR csak JSON típusú adatokat képes fogadni.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az XHR használatához a kérést nyitni kell a .open() metódussal.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az XHR .send() metódussal küldi el a kérést.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 1,
            indoklas:
                'Az XHR bármilyen típusú adatot képes küldeni és fogadni, nemcsak JSON-t.',
        },
        {
            fokerdes:
                'Mely állítások igazak a fetch() függvényre JavaScriptben?',
            kerdesek: [
                {
                    kerdes: 'A fetch() mindig egy Promise-t ad vissza.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() alapértelmezetten POST típusú kérést küld.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch() használatakor a válasz tartalmát külön kell kiolvasni (pl. response.json()).',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() nem képes HTTP hibakódokat kezelni.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 2,
            indoklas:
                'A fetch() egy Promise-t ad vissza, és a válasz testét külön kell feldolgozni (pl. response.json()).',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a fetch() hibakezelésével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A fetch() akkor is teljesül, ha a válasz státuszkódja 404.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch() csak hálózati hibák esetén dob hibát.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch automatikusan eldobja a hibát, ha a válasz nem 200-as kód.',
                    eldont: 1,
                },
                {
                    kerdes: 'A válasz státuszkódját külön kell ellenőrizni, pl. if (!response.ok).',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 1,
            indoklas:
                'A fetch nem dob automatikusan hibát nem 200-as státuszkódnál – ezt nekünk kell ellenőriznünk.',
        },
        {
            fokerdes:
                'Mely állítások igazak a fetch() és az XMLHttpRequest (XHR) összehasonlítására?',
            kerdesek: [
                {
                    kerdes: 'A fetch API egyszerűbb és modernebb szintaxist kínál, mint az XHR.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az XHR nem képes header-ek beállítására.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch jobb támogatást nyújt Promise alapú kódhoz.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az XHR nem használható HTTPS kérésekre.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 2,
            indoklas:
                'A fetch modernebb, Promise-alapú API, míg az XHR régiesebb, de több kontrollt kínál - például abortálásra.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a JSON.parse() metódusra?',
            kerdesek: [
                {
                    kerdes: 'A JSON.parse() egy JSON-formátumú szöveget JavaScript objektummá alakít.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON.parse() csak JSON tömböket tud értelmezni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON.parse() szintaktikai hiba esetén hibát dob.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON.parse() visszaadott értéke gyakran egy objektum.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 1,
            indoklas:
                'A JSON.parse() nemcsak tömböket, hanem bármilyen érvényes JSON szöveget - például objektumokat is - képes értelmezni.',
        },
        {
            fokerdes: 'Mely állítások igazak a JSON.stringify() metódusra?',
            kerdesek: [
                {
                    kerdes: 'A JSON.stringify() JavaScript objektumot alakít JSON szöveggé.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON.stringify() csak string típusú értéket tud átalakítani.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON.stringify() kimenete mindig érvényes JSON-formátumú szöveg.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON.stringify() csak akkor működik, ha az objektumban számok vannak.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 2,
            indoklas:
                'A JSON.stringify() bármilyen JavaScript objektumot (nem csak stringet) JSON szöveggé alakít, és a kimenet érvényes JSON-formátum.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a POST típusú HTTP-kérésre a fetch használata esetén?',
            kerdesek: [
                {
                    kerdes: 'A POST kérés gyakran használ adatküldésre a szerver felé.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch kérés body-jába általában string formátumú JSON kerül.',
                    eldont: 0,
                },
                {
                    kerdes: 'A POST kérés nem igényli a Content-Type header beállítását.',
                    eldont: 1,
                },
                {
                    kerdes: "A JSON adatküldéshez gyakori a 'Content-Type: application/json' fejléc használata.",
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 1,
            indoklas:
                'A POST kéréshez szükséges a Content-Type header, ha JSON-t küldünk, különben a szerver nem tudja, hogyan értelmezze az adatot.',
        },
        {
            fokerdes:
                'Mely állítások igazak, ha JSON adatot küldünk POST kéréssel a fetch() használatával?',
            kerdesek: [
                {
                    kerdes: 'A JSON.stringify() segítségével alakítjuk át az objektumot küldés előtt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() csak GET kérések küldésére alkalmas.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON-adatot a fetch kérés body mezőjébe tesszük.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch automatikusan beállítja a megfelelő Content-Type fejlécet JSON-hoz.',
                    eldont: 0,
                },
            ],
            kep: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/IMG-20220603-WA0011.jpg',
            helyes: 2,
            indoklas:
                'A JSON adatot küldés előtt JSON.stringify() segítségével alakítjuk át, majd a body mezőbe helyezzük a fetch kérésben.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a HTTP státuszkódokkal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A 200 státuszkód azt jelenti, hogy a kérés sikeresen teljesült.',
                    eldont: 0,
                },
                {
                    kerdes: 'A 404 státuszkód azt jelzi, hogy a kért erőforrás nem található.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az 500 státuszkód kliensoldali hibát jelez.',
                    eldont: 1,
                },
                {
                    kerdes: 'A 201 státuszkód általában új erőforrás sikeres létrehozását jelzi.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 1,
            indoklas:
                'Az 500 státuszkód szerveroldali hibát jelez, nem kliensoldalit.',
        },
        {
            fokerdes: 'Melyik állítások igazak a HTTP metódusokra?',
            kerdesek: [
                {
                    kerdes: 'A POST metódus adatokat küld a szerverre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DELETE metódus egy erőforrás törlésére szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A GET metódus adatot módosít a szerveren.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PUT metódus csak új erőforrás létrehozására használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 2,
            indoklas:
                'A POST új adatot küld, a DELETE pedig meglévő adat törlésére szolgál. A GET csak olvasásra való, a PUT nem csak új létrehozására használható.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a HTTP státuszkódok kezelésére frontend oldalon?',
            kerdesek: [
                {
                    kerdes: 'A fetch() API válaszát státuszkóddal együtt ellenőrizhetjük.',
                    eldont: 0,
                },
                {
                    kerdes: 'A 204 státuszkód azt jelenti, hogy a válaszban nincs tartalom.',
                    eldont: 0,
                },
                {
                    kerdes: 'A 403 státuszkód a sikeres bejelentkezést jelzi.',
                    eldont: 1,
                },
                {
                    kerdes: 'A válasz status mezőjének vizsgálatával eldönthetjük, hogy sikeres volt-e a kérés.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 1,
            indoklas:
                'A 403 státuszkód tiltott hozzáférést jelent, nem sikeres bejelentkezést.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a fetch API használata során HTTP metódusok beállítására?',
            kerdesek: [
                {
                    kerdes: 'A fetch második paraméterében megadhatjuk a metódust a method kulcs alatt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch alapértelmezett HTTP metódusa a GET.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() csak POST metódust támogat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A method kulcs értéke kötelezően kisbetűs kell legyen.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 2,
            indoklas:
                'A fetch alapértelmezett metódusa a GET, és a második paraméterben a method kulccsal tudjuk módosítani. A metódus neve nagybetűs szokott lenni (pl. POST).',
        },
        {
            fokerdes: 'Melyik állítás nem igaz az API-kulcsokkal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az API-kulcsok célja az API-hozzáférés korlátozása és nyomon követése.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az API-kulcsok teljes körű adatbiztonságot garantálnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az API-kulcsokat általában kérésenként el kell küldeni a szervernek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az API-kulcsokat érdemes környezeti változókban tárolni.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 1,
            indoklas:
                'Az API-kulcsok azonosításra és nyomon követésre szolgálnak, de önmagukban nem nyújtanak teljes körű biztonságot.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az API-kulcs használatára AJAX hívásokban?',
            kerdesek: [
                {
                    kerdes: 'Az API-kulcs a fetch kérés header szekciójába helyezhető.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az API-kulcsot a query stringben is továbbíthatjuk.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az API-kulcsot csak szerveroldalon lehet használni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az API-kulcs mindig titkosítva kerül továbbításra.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 2,
            indoklas:
                'Az API-kulcs továbbítható headerben vagy query stringben, de nem titkosított automatikusan, és frontend oldalról is használható - körültekintően.',
        },
        {
            fokerdes:
                'Melyik állítás nem javasolt gyakorlat az API-kulcs védelmére?',
            kerdesek: [
                {
                    kerdes: 'A kulcsot környezeti változóban tároljuk szerveroldalon.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az API-kulcsot nyíltan beírjuk a frontend JavaScript fájlba.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kulcsot csak HTTPS kapcsolaton keresztül küldjük.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az API-kulcsokat időkorlátosan érvényesítjük.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 1,
            indoklas:
                'Frontend fájlba írt API-kulcs könnyen kinyerhető, így biztonsági kockázatot jelent.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az API-kulcs és hozzáférési jogosultság kapcsolatára?',
            kerdesek: [
                {
                    kerdes: 'Az API-kulcs segítségével szabályozható, hogy ki fér hozzá az API-hoz.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy API-kulcshoz különböző hozzáférési szinteket is társíthatunk.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden API-kulcs teljes hozzáférést biztosít az összes erőforráshoz.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az API-kulcs azonos, függetlenül attól, hogy milyen felhasználó használja.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 2,
            indoklas:
                'Az API-kulcsokhoz hozzáférési jogosultság és kvóták is társíthatók, nem biztosítanak automatikusan teljes hozzáférést.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az MVC (Model-View-Controller) architektúrával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az MVC a felhasználói felület és az üzleti logika szétválasztását segíti.',
                    eldont: 0,
                },
                {
                    kerdes: 'A View a felhasználói felület megjelenítéséért felelős.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Model közvetlenül kezeli a felhasználói eseményeket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Controller a felhasználói események kezeléséért felelős.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 1,
            indoklas:
                'A Model az adatokat és üzleti logikát kezeli, a felhasználói események kezelése a Controller feladata.',
        },
        {
            fokerdes:
                'Mely állítások igazak az MVC modell különböző komponenseiről?',
            kerdesek: [
                {
                    kerdes: 'A View felel az adatok megjelenítéséért a felhasználó számára.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Controller módosítja az adatokat közvetlenül a felhasználó helyett.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Model felel a felhasználói interakciók közvetlen megjelenítéséért.',
                    eldont: 0,
                },
                {
                    kerdes: 'A View kezeli az adatok feldolgozását.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 2,
            indoklas:
                'A View az adatokat jeleníti meg, a Controller pedig az interakciók hatására módosítja a Model állapotát.',
        },
        {
            fokerdes: 'Melyik állítás nem előnye az MVC architektúrának?',
            kerdesek: [
                {
                    kerdes: 'Könnyebb karbantartani és fejleszteni a kódot.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egyszerűbbé válik a csapatmunkában való fejlesztés.',
                    eldont: 0,
                },
                {
                    kerdes: 'Minden logika és megjelenítés ugyanabban a komponensben található.',
                    eldont: 1,
                },
                {
                    kerdes: 'Növeli az alkalmazás újrafelhasználhatóságát.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 1,
            indoklas:
                'Az MVC célja épp a logika és megjelenítés szétválasztása, nem azok egy komponensbe tömörítése.',
        },
        {
            fokerdes: 'Melyik állítások írják le helyesen az MVC működését?',
            kerdesek: [
                {
                    kerdes: 'A felhasználó interakciói a Controller-en keresztül módosítják a Modelt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Model változásai automatikusan frissítik a View-t (megfelelő implementáció esetén).',
                    eldont: 1,
                },
                {
                    kerdes: 'A View közvetlenül írhat adatot a Modelbe.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Controller felel az adatok közvetlen tárolásáért adatbázisban.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/05/image1.png',
            helyes: 2,
            indoklas:
                'Az MVC-ben a Controller módosítja a Modelt, és a View frissülhet a Model változásaira.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a React komponensekről?',
            kerdesek: [
                {
                    kerdes: 'A komponensek újrafelhasználható UI-elemeket reprezentálnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy komponens csak egyszer használható egy alkalmazásban.',
                    eldont: 1,
                },
                {
                    kerdes: 'Komponensek lehetnek osztály alapúak vagy függvény alapúak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A komponensek saját állapotot (state) is kezelhetnek.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A komponensek újrafelhasználhatók több helyen is egy alkalmazásban, nem csak egyszer.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a React komponensek kombinálására?',
            kerdesek: [
                {
                    kerdes: 'Egy komponens tartalmazhat más komponenseket a JSX-ben.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy komponens csak egy másik komponenst tartalmazhat egyszerre.',
                    eldont: 0,
                },
                {
                    kerdes: 'Props segítségével adhatunk át adatot egy szülő komponenstől egy gyermek komponensnek.',
                    eldont: 1,
                },
                {
                    kerdes: 'A komponensek kombinálása csak class alapú komponensek között működik.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'Egy komponens több gyermeket is tartalmazhat, és props segítségével kommunikálhatunk köztük.',
        },
        {
            fokerdes:
                'Melyik állítás hamis a React komponensek működésével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A komponensek visszatérnek egy JSX elemmel, ami a megjelenítendő tartalmat írja le.',
                    eldont: 0,
                },
                {
                    kerdes: 'A komponensek csak HTML-t képesek visszaadni, JavaScript kódot nem tartalmazhatnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSX lehetőséget ad JavaScript kifejezések beszúrására kapcsos zárójelek között.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy komponens akár egy másik komponenst is renderelhet.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A JSX kombinálja a HTML-t és JavaScript kódot, nem csak tiszta HTML-t ad vissza.',
        },
        {
            fokerdes:
                'Melyik állítások írják le helyesen a komponensek közötti kommunikációt React-ben?',
            kerdesek: [
                {
                    kerdes: 'A szülő komponens props segítségével ad át adatot a gyermek komponenseknek.',
                    eldont: 1,
                },
                {
                    kerdes: 'A gyermek komponens közvetlenül módosíthatja a szülő komponens állapotát (state).',
                    eldont: 0,
                },
                {
                    kerdes: 'Callback függvényeket is átadhatunk props-ként a gyermek komponenseknek, hogy azok jelezhessenek vissza.',
                    eldont: 1,
                },
                {
                    kerdes: 'A komponensek közötti kommunikáció mindig globális változókon keresztül történik.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'A komponensek közötti kommunikáció props-ok és callback függvények használatával történik, nem globális változókkal.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a React egyszeres adatkapcsolatáról?',
            kerdesek: [
                {
                    kerdes: 'React-ben az adatfolyam alapértelmezetten egyirányú (parent → child).',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adatkapcsolat kétirányú minden komponens között alapértelmezetten.',
                    eldont: 1,
                },
                {
                    kerdes: 'A komponens adatai (state) meghatározzák a megjelenített értéket.',
                    eldont: 0,
                },
                {
                    kerdes: 'A props csak olvasható adatokat biztosít a gyermek komponensek számára.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'React-ben az adatfolyam egyirányú (unidirectional), nem kétirányú alapból.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a React-ben történő kétirányú adatkapcsolatra?',
            kerdesek: [
                {
                    kerdes: 'A felhasználói interakciók (pl. űrlapkitöltés) módosíthatják a komponens állapotát (state).',
                    eldont: 1,
                },
                {
                    kerdes: 'A kétirányú adatkapcsolat React-ben automatikusan történik minden komponens esetén.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az input mezők értékét a state változókhoz köthetjük, majd az eseményekkel frissíthetjük az állapotot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A React nem támogatja kétirányú adatkapcsolat létrehozását egyáltalán.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'React-ben az input vezérlők kétirányú adatkapcsolatot hozhatnak létre state kezelésével és eseményekkel.',
        },
        {
            fokerdes:
                'Melyik állítás hamis a kontrollált komponensek működésével kapcsolatban React-ben?',
            kerdesek: [
                {
                    kerdes: 'Egy kontrollált komponens értékét egy state változó határozza meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kontrollált komponens mindig az aktuális DOM értékből olvassa az adatot.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az input értékét az onChange esemény segítségével tudjuk módosítani.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kontrollált komponens adatai mindig a React komponens állapotában tárolódnak.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'Kontrollált komponensnél az adat a React state-ből származik, nem közvetlenül a DOM-ból.',
        },
        {
            fokerdes:
                'Melyik állítások helyesek a React adatkötési mechanizmusáról?',
            kerdesek: [
                {
                    kerdes: 'Az érték (value) attribútumot egy állapotváltozóhoz köthetjük.',
                    eldont: 1,
                },
                {
                    kerdes: 'A React komponensekben az adatkapcsolat mindig globális változókon alapul.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onChange esemény segítségével tudjuk szinkronizálni az input mező értékét a komponens state-jével.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az adatkötés automatikusan történik háttérben, eseménykezelők nélkül.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'React-ben az input mezők értékét állapotváltozóhoz kötjük és eseménykezelővel frissítjük.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a React eseménykezelésére?',
            kerdesek: [
                {
                    kerdes: 'React események camelCase szintaxist használnak, pl. onClick.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React eseményeket JavaScript sztringként kell megadni, pl. \'onClick="handleClick()"\'.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az eseménykezelők függvényhivatkozásokat fogadnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React eseménykezelés szintetikusan történik, nem közvetlenül a DOM-on.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'React-ben az eseménykezelőket nem sztringként, hanem függvényhivatkozásként adjuk meg.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a React eseménykezeléssel kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az eseménykezelőt közvetlenül átadjuk a JSX elemnek, például onClick={handleClick}.',
                    eldont: 1,
                },
                {
                    kerdes: 'React-ben az eseménykezelők automatikusan az adott komponenshez vannak kötve, nem kell bind-olni őket class komponenseknél.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha az eseménykezelőben paramétert akarunk átadni, akkor arrow function-t használhatunk, pl. onClick={() => handleClick(param)}.',
                    eldont: 1,
                },
                {
                    kerdes: 'A React események mindig szinkron módon futnak le, függetlenül az async műveletektől.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'A JSX-ben függvényt adunk át eseménykezelőnek, paraméteres átadáshoz arrow function-t használhatunk.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a React esemény objektumára?',
            kerdesek: [
                {
                    kerdes: 'React eseményobjektuma egy szintetikus esemény, amely a böngésző natív eseményét csomagolja.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React eseményobjektuma soha nem tartalmazza az eredeti böngésző esemény adatait.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az event.preventDefault() meghívása megakadályozza az alapértelmezett böngésző viselkedést.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az event.stopPropagation() megállítja az esemény terjedését a DOM fa mentén.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A React szintetikus esemény hozzáférést biztosít az eredeti natív esemény adataihoz is.',
        },
        {
            fokerdes:
                'Melyik állítások helyesek a React komponens eseménykezelésével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A komponens életciklusa alatt regisztrált események memória szivárgáshoz vezethetnek, ha nem távolítjuk el őket megfelelően.',
                    eldont: 1,
                },
                {
                    kerdes: 'Function komponenseknél nincs szükség az eseménykezelők manuális bindolására.',
                    eldont: 1,
                },
                {
                    kerdes: 'A React automatikusan eltávolítja az összes eseménykezelőt, amikor a komponens elpusztul.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az eseménykezelők csak akkor futnak le, ha explicit meghívjuk őket useEffect hívásból.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'Memória szivárgás elkerülése érdekében manuálisan kell törölni egyes eseményeket; function komponenseknél nincs szükség bindolásra.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a React-ben történő AJAX kérésekre?',
            kerdesek: [
                {
                    kerdes: 'A React nem tartalmaz beépített AJAX-képesítést, külön könyvtárat kell használni.',
                    eldont: 0,
                },
                {
                    kerdes: 'AJAX kérések általában a komponens render függvényében történnek.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() vagy axios használata React-ben népszerű megoldás az AJAX-ra.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React komponensek életciklus eseményei jó helyet biztosítanak AJAX kéréseknek.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'AJAX kérések nem a render függvényben történnek, hanem például useEffect-ben vagy lifecycle metódusokban.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az AJAX hívások helyes kezeléséről React-ben?',
            kerdesek: [
                {
                    kerdes: 'Function komponensekben az useEffect hook-ot szokás használni AJAX hívások indítására.',
                    eldont: 1,
                },
                {
                    kerdes: 'AJAX kéréseket legjobb közvetlenül a komponens deklarációja alatt elindítani, még mielőtt render történik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Class komponensek esetében a componentDidMount metódusban érdemes AJAX hívást végezni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A React automatikusan kezeli az AJAX kérések törlését komponens unmount esetén.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'Function komponenseknél useEffect-et, class komponenseknél componentDidMount-ot használunk AJAX hívások indítására.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a fetch() használatára React komponensekben?',
            kerdesek: [
                {
                    kerdes: 'A fetch() egy Promise-alapú API a HTTP kérésekhez.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch() automatikusan JSON-ként értelmezi a válaszokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fetch() hívásokat .then() láncokkal vagy async/await szintaxissal kezelhetjük.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fetch() csak akkor dob hibát, ha a hálózati kérés sikertelen, nem a HTTP státuszkódok alapján.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A fetch() alapból nem konvertál automatikusan JSON-ra, nekünk kell meghívni a response.json() metódust.',
        },
        {
            fokerdes:
                'Melyik állítások igazak az axios használatára React-ben?',
            kerdesek: [
                {
                    kerdes: 'Az axios automatikusan JSON formátumban küldi a kéréseket.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az axios response objektum közvetlenül tartalmazza a válasz adatokat a data property-ben.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az axios mindig GET metódust használ, még ha POST-ot adunk meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az axios nem támogatja az async/await szintaxist.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'Az axios automatikusan JSON-t használ és a válasz a response.data-ban érhető el.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a React Router működésére?',
            kerdesek: [
                {
                    kerdes: 'A React Router lehetővé teszi a kliens oldali navigációt új oldal betöltése nélkül.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React Router automatikusan újratölti a teljes oldalt minden útvonalváltáskor.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;Route&gt; komponens felelős az URL és a komponens megjelenítése közti kapcsolatért.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React Router támogatja a dinamikus útvonal paramétereket.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A React Router nem tölti újra a teljes oldalt, hanem a DOM-ot módosítja a kliens oldalon.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a React Router útvonalkezelésére?',
            kerdesek: [
                {
                    kerdes: 'A &lt;Link&gt; komponens használatával URL-címet lehet váltani anélkül, hogy az oldal újratöltődne.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;BrowserRouter&gt; egy egyszerű wrapper a History API-ra alapozva.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;Router&gt; komponens minden egyes navigációkor frissíti a backend szervert.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;Route&gt; komponensek mindig egyszerre jelennek meg, függetlenül az URL-től.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'A &lt;Link&gt; komponens kliens oldali navigációt biztosít, a &lt;BrowserRouter&gt; pedig a History API-t használja a navigáció kezelésére.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a dinamikus útvonalparaméterek kezelésére a React Router-ben?',
            kerdesek: [
                {
                    kerdes: 'A dinamikus paramétereket a Route komponens path prop-jában kettőspont (:) használatával definiáljuk.',
                    eldont: 0,
                },
                {
                    kerdes: 'A useParams hook segítségével olvashatjuk ki az aktuális URL paramétereket.',
                    eldont: 0,
                },
                {
                    kerdes: 'A dinamikus paramétereket csak POST metódusnál lehet használni.',
                    eldont: 1,
                },
                {
                    kerdes: 'Több dinamikus paramétert is megadhatunk egy útvonalban.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A dinamikus paraméterek URL-ben szerepelnek, GET típusú kéréseknél is használhatók, nem csak POST-nál.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a programozott navigációra a React Router használatával?',
            kerdesek: [
                {
                    kerdes: 'A useNavigate hook segítségével JavaScript-ből irányíthatjuk a felhasználót másik oldalra.',
                    eldont: 1,
                },
                {
                    kerdes: 'A navigate() függvény async/await szintaxissal használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A navigate(-1) hívás visszaléptet az előző oldalra a böngészési előzményekben.',
                    eldont: 1,
                },
                {
                    kerdes: 'A useNavigate csak class komponensekben érhető el.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'A useNavigate hook-kal átirányíthatjuk a felhasználót másik oldalra, a navigate(-1) pedig visszaléptet az előző oldalra.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a React űrlapkezelésére?',
            kerdesek: [
                {
                    kerdes: 'A React komponensekben az űrlapelemek értékét állapotban (state) szokás tárolni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React automatikusan validálja az összes űrlapot küldéskor.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az input mezők értékét onChange eseménnyel lehet frissíteni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A controlled component kifejezés azt jelenti, hogy az érték a komponens állapotából származik.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A React nem automatikusan validálja az űrlapokat; a fejlesztőnek kell ezt megvalósítania egyedi logikával.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a controlled űrlapkomponensekre React-ben?',
            kerdesek: [
                {
                    kerdes: 'A komponens állapota határozza meg az input mező aktuális értékét.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az input értéke közvetlenül az input DOM eleméből olvasható ki.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az onChange események segítségével frissítjük az input értékét.',
                    eldont: 1,
                },
                {
                    kerdes: 'A controlled elemek nem igényelnek állapotkezelést.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'A controlled inputok állapotalapúak, értékük az állapotból jön, és onChange eseményekkel frissítjük azt.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az űrlapok onSubmit eseménykezelésére React-ben?',
            kerdesek: [
                {
                    kerdes: 'Az onSubmit eseményt az űrlap elküldésekor váltjuk ki.',
                    eldont: 0,
                },
                {
                    kerdes: 'A preventDefault() hívása szükséges, ha el akarjuk kerülni az oldal újratöltését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React onSubmit eseménye automatikusan validálja az űrlapot a szerveren.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az onSubmit eseményt általában a form elemhez rendeljük hozzá.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 1,
            indoklas:
                'A React onSubmit nem végez automatikus szerver oldali validációt; ezt manuálisan kell implementálni.',
        },
        {
            fokerdes:
                'Melyik állítások igazak több input mező kezelésére React-ben?',
            kerdesek: [
                {
                    kerdes: 'Egyetlen állapotobjektumban is tárolhatjuk az összes input értékét.',
                    eldont: 1,
                },
                {
                    kerdes: 'A fieldset HTML elem segíthet logikailag csoportosítani az űrlapmezőket.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak külön-külön állapotot használhatunk minden input mezőre.',
                    eldont: 0,
                },
                {
                    kerdes: 'Nem szükséges az input mezők nevére (name) figyelni több mező esetén.',
                    eldont: 0,
                },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/D4D12AQEZg9RbfHERFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677919526250?e=2147483647&v=beta&t=X8Vlb6XABnlNsbiRC_dVL4Hq2qpMaUizNgQZu6hZbgU',
            helyes: 2,
            indoklas:
                'Több mező esetén gyakori az egyetlen állapotobjektumban történő tárolás, és a fieldset elem segíthet a mezők csoportosításában.',
        },
    ],
];
