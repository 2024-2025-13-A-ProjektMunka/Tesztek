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
    ],
];
