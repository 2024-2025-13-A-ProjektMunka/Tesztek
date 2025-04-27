let backend = [
    'Backend készítésre szolgáló nyelvek és keretrendszerek, ORM',
    7,
    [
        {
            fokerdes: 'Melyik állítás nem igaz a HTTP GET metódusra?',
            kerdesek: [
                {
                    kerdes: 'A GET metódus adatokat kér le a szervertől.',
                    eldont: 0,
                },
                {
                    kerdes: 'A GET kérések tartalmazhatnak törzset (body).',
                    eldont: 1,
                },
                {
                    kerdes: 'A GET kérések URL-jében szerepelhetnek lekérdezési paraméterek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A GET metódus általában nem módosítja a szerver állapotát.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'A GET metódus általában nem tartalmaz törzset (body), mivel az adatokat az URL-ben adja át a szervernek.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz egy HTTP kérés felépítésére?',
            kerdesek: [
                {
                    kerdes: 'A HTTP kérés mindig tartalmaz egy metódust (pl. GET, POST).',
                    eldont: 0,
                },
                {
                    kerdes: 'A HTTP kérés fejlécében adható át autentikációs adat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A HTTP kérés soha nem tartalmaz üzenettörzset.',
                    eldont: 1,
                },
                {
                    kerdes: 'A HTTP kérés első sora a kérés típusát és a cél URL-t tartalmazza.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'A HTTP kérés bizonyos esetekben tartalmazhat üzenettörzset, például POST vagy PUT metódus esetén.',
        },
        {
            fokerdes: 'Melyik állítás igaz a HTTP POST metódusra?',
            kerdesek: [
                {
                    kerdes: 'A POST metódus csak adatlekérésre használható.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST kérések tartalmazhatnak adatokat a törzsben (body).',
                    eldont: 0,
                },
                {
                    kerdes: 'A POST metódus nem módosítja a szerver állapotát.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST metódus új erőforrások létrehozására használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A POST metódus lehetővé teszi adatok küldését a szervernek a kérés törzsében, és gyakran használják új erőforrások létrehozására vagy meglévők módosítására.',
        },
        {
            fokerdes: 'Mely állítások igazak a HTTP kérés felépítésére?',
            kerdesek: [
                {
                    kerdes: 'A kérés első sora tartalmazza a HTTP metódust, az URL-t és a protokoll verziót.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kérés fejlécében csak tartalomtípus adható meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kérés fejlécében küldhető cookie információ is.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kérés mindig SSL titkosítást használ.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A HTTP kérés első sora a metódust, URL-t és protokoll verziót tartalmazza, és a fejlécben többféle információ, például cookie is megadható.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a HTTP metódusokra?',
            kerdesek: [
                {
                    kerdes: 'A GET metódus adat lekérdezésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A POST metódus adat küldésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PUT metódus mindig új adat létrehozására szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DELETE metódus adatok törlésére használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'A PUT metódus általában meglévő erőforrás teljes frissítésére használatos, nem feltétlenül új adat létrehozására.',
        },
        {
            fokerdes: 'Melyik állítás igaz a HTTP PUT és DELETE metódusokra?',
            kerdesek: [
                {
                    kerdes: 'A PUT metódus új erőforrásokat hoz létre vagy meglévőket frissít.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DELETE metódus törli a megadott erőforrást a szerveren.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PUT metódus csak adatlekérésre használható.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DELETE metódus nem módosítja a szerver állapotát.',
                    eldont: 1,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A PUT metódus új erőforrásokat hozhat létre vagy meglévőket frissíthet, míg a DELETE metódus a megadott erőforrás törlésére szolgál a szerveren.',
        },
        {
            fokerdes: 'Mely állítások igazak a HTTP metódusok jellemzőire?',
            kerdesek: [
                {
                    kerdes: 'A PATCH metódus egy erőforrás részleges frissítésére használható.',
                    eldont: 1,
                },
                {
                    kerdes: 'A GET kérés általában tartalmaz üzenettörzset.',
                    eldont: 0,
                },
                {
                    kerdes: 'A POST kérés üzenettörzsben továbbíthat adatokat a szerver felé.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DELETE kérés sosem igényel szerver oldali feldolgozást.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A PATCH részleges frissítésre, a POST pedig adatküldésre szolgál, ahol az adatokat az üzenettörzsben adhatjuk át.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a HTTP kérés felépítésére?',
            kerdesek: [
                {
                    kerdes: 'A HTTP kérés első sora a kérés sor (request line), amely tartalmazza a metódust, az URL-t és a protokoll verzióját.',
                    eldont: 0,
                },
                {
                    kerdes: 'A HTTP kérés mindig tartalmaz törzset (body).',
                    eldont: 1,
                },
                {
                    kerdes: 'A kérés fejlécében (header) további információk adhatók meg a kérésről.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kérés törzse (body) opcionális, és nem minden metódus használja.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'Nem minden HTTP kérés tartalmaz törzset; például a GET kérések általában nem tartalmaznak body-t.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a GET kérésre?',
            kerdesek: [
                {
                    kerdes: 'A GET kérés adat lekérdezésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A GET kérés általában nem módosít adatokat a szerveren.',
                    eldont: 0,
                },
                {
                    kerdes: 'A GET kérés titkosítja a válaszban kapott adatokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A GET kérés paramétereket is tartalmazhat az URL-ben.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'A GET kérés nem titkosítja az adatokat; az adatok titkosítása az alkalmazott protokolltól (például HTTPS) függ.',
        },
        {
            fokerdes: 'Mely állítások igazak a POST kérésre?',
            kerdesek: [
                {
                    kerdes: 'A POST kérés új erőforrás létrehozására használható.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST kérés mindig idempotens művelet.',
                    eldont: 0,
                },
                {
                    kerdes: 'A POST kérésben az adatok a kérés törzsében küldhetők.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST kérés általában nem tartalmaz adatokat.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A POST kérés általában új adatot hoz létre, és az adatokat a kérés törzsében továbbítja.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a PUT és PATCH metódusokra?',
            kerdesek: [
                {
                    kerdes: 'A PUT egy erőforrás teljes frissítésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PATCH egy erőforrás részleges frissítésére használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PUT és PATCH metódusok soha nem változtatnak meg adatokat a szerveren.',
                    eldont: 1,
                },
                {
                    kerdes: 'A PUT metódus során az egész erőforrás cserélődhet.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'A PUT és PATCH metódusok igenis módosítanak adatokat a szerveren, különböző mértékben.',
        },
        {
            fokerdes: 'Mely állítások igazak a DELETE metódusra?',
            kerdesek: [
                {
                    kerdes: 'A DELETE metódus egy adott erőforrás törlésére szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DELETE metódus eredménye mindig az erőforrás végleges eltávolítása.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DELETE kérés nem garantálja, hogy az erőforrás valóban törlődik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DELETE kérés automatikusan archiválja az adatokat.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A DELETE kérés célja egy erőforrás törlése, de nem garantálja automatikusan a tényleges eltávolítást - ez az alkalmazás logikájától függ.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a HTTP OPTIONS metódusra?',
            kerdesek: [
                {
                    kerdes: 'Az OPTIONS kérés megmutatja, milyen műveletek hajthatók végre egy erőforráson.',
                    eldont: 0,
                },
                {
                    kerdes: "Az OPTIONS válasz tartalmazhatja az 'Allow' fejlécet.",
                    eldont: 0,
                },
                {
                    kerdes: 'Az OPTIONS kérés mindig módosítja az erőforrást.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az OPTIONS kérés választ adhat a CORS előkérdések során.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'Az OPTIONS kérés nem módosítja az erőforrást, csak információt kér róla.',
        },
        {
            fokerdes: 'Mely állítások igazak a HTTP headerök szerepére?',
            kerdesek: [
                {
                    kerdes: 'A Content-Type fejléc megadja az üzenettörzs típusát.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Authorization fejléc hitelesítési információt tartalmazhat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A headerök csak a válaszokban fordulnak elő, kérésekben nem.',
                    eldont: 0,
                },
                {
                    kerdes: 'A headerök opcionális részei a HTTP üzeneteknek.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A Content-Type és Authorization fejléc kulcsfontosságú információkat hordozhat a kérés vagy válasz során.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz a HTTP válaszokra?',
            kerdesek: [
                {
                    kerdes: 'A 200-as státuszkód sikeres választ jelez.',
                    eldont: 0,
                },
                {
                    kerdes: 'A 404-es státuszkód azt jelzi, hogy az erőforrás nem található.',
                    eldont: 0,
                },
                {
                    kerdes: 'A 500-as státuszkód klienshiba miatt keletkezik.',
                    eldont: 1,
                },
                {
                    kerdes: 'A 301-es státuszkód átirányítást jelez.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 1,
            indoklas:
                'Az 500-as státuszkód szerveroldali hiba, nem klienshiba eredménye.',
        },
        {
            fokerdes: 'Mely állítások igazak a HTTP válaszok felépítésére?',
            kerdesek: [
                {
                    kerdes: 'A válasz tartalmazhat fejlécet és törzset is.',
                    eldont: 1,
                },
                {
                    kerdes: 'A válasz első sora a státuszkódot és annak szöveges jelentését tartalmazza.',
                    eldont: 1,
                },
                {
                    kerdes: 'A válasz fejlécében csak dátum információ adható meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'A válasz törzsében kizárólag JSON formátumú adat lehet.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:853/1*8-fT6K1o6nHiBRxKppcqOg.png',
            helyes: 2,
            indoklas:
                'A HTTP válaszok felépítése tartalmazhat státuszkódot, fejlécet és opcionálisan törzset is különböző formátumokban (pl. HTML, XML, JSON).',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a package managerekre (NPM, Composer, Gradle, NuGet)?',
            kerdesek: [
                {
                    kerdes: 'A package managerek segítenek külső könyvtárak egyszerű kezelésében.',
                    eldont: 0,
                },
                {
                    kerdes: 'A package managerek automatikusan kezelik a függőségeket.',
                    eldont: 0,
                },
                {
                    kerdes: 'A package managerek csak helyben telepítenek, távoli tárolókat nem használnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A package.json fájl az NPM csomagok kezeléséhez szükséges.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'A package managerek általában távoli tárolókból (repository) töltik le a csomagokat, nem csak helyi telepítést végeznek.',
        },
        {
            fokerdes:
                'Mely állítások igazak egy backend fejlesztési környezet felépítésére?',
            kerdesek: [
                {
                    kerdes: 'A fejlesztési környezetben szükséges egy webszerver, például Apache vagy Nginx.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az adatbázis-kezelő rendszer, például MySQL vagy PostgreSQL is a környezet része lehet.',
                    eldont: 1,
                },
                {
                    kerdes: 'A frontend könyvtárak automatikusan helyettesítik a backend környezetet.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy környezetben sosem kell külön konfigurációs fájlokat kezelni.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A fejlesztési környezet webszervert, adatbázis-kezelőt és konfigurációs fájlokat is igényelhet.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a csomagkezelő rendszerek működésére?',
            kerdesek: [
                {
                    kerdes: 'A NuGet a .NET ökoszisztéma csomagkezelője.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Gradle-t Java projektek építéséhez és függőségkezeléshez használják.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Composer csak frontend könyvtárak kezelésére való.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az NPM JavaScript projektekhez nyújt támogatást.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'A Composer PHP projektek függőségeit kezeli, nem frontend könyvtárakat.',
        },
        {
            fokerdes:
                'Mely állítások igazak a fejlesztési környezet konfigurációjára?',
            kerdesek: [
                {
                    kerdes: 'A környezet változókat gyakran .env fájlokban tárolják.',
                    eldont: 1,
                },
                {
                    kerdes: 'A helyes portszámok beállítása elengedhetetlen a szerver működéséhez.',
                    eldont: 1,
                },
                {
                    kerdes: 'A környezet konfigurációja sosem változik az éles és fejlesztési környezetek között.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak Windows rendszeren lehet backend környezetet kialakítani.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A .env fájlokban tárolt változók és a helyes portbeállítások létfontosságúak egy működő backend környezetben.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az MVC (Model-View-Controller) architektúrára?',
            kerdesek: [
                {
                    kerdes: 'Az MVC minta segít szétválasztani az alkalmazás logikáját, megjelenítését és adatkezelését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A View kezeli az adatok tárolását az adatbázisban.',
                    eldont: 1,
                },
                {
                    kerdes: 'A Controller irányítja a felhasználói kérések kezelését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Model felelős az adatok kezeléséért és üzleti logikáért.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'Az adatok tárolását a Model végzi, nem a View. A View csak a megjelenítésért felelős.',
        },
        {
            fokerdes:
                'Mely állítások igazak a kontrollerek szerepére az MVC architektúrában?',
            kerdesek: [
                {
                    kerdes: 'A kontroller dolgozza fel a felhasználói kéréseket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kontroller közvetlenül módosítja a View HTML kódját adatbázis lekérdezés nélkül.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kontroller dönt a Model és a View közötti adatáramlásról.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kontroller kizárólag statikus adatokat jelenít meg.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A kontroller kezeli a felhasználói kéréseket és koordinálja a Model és View közötti adatátvitelt.',
        },
        {
            fokerdes:
                'Melyik komponens nem része közvetlenül az MVC architektúrának?',
            kerdesek: [
                {
                    kerdes: 'Model',
                    eldont: 0,
                },
                {
                    kerdes: 'Service',
                    eldont: 1,
                },
                {
                    kerdes: 'View',
                    eldont: 0,
                },
                {
                    kerdes: 'Controller',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'A Service nem része közvetlenül az MVC alapstruktúrájának, bár gyakran használják támogatásként.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a kontrollerek működésére egy webalkalmazásban?',
            kerdesek: [
                {
                    kerdes: 'A kontroller fogadja a HTTP kéréseket, majd kiválasztja a megfelelő műveletet.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kontroller magában tárolja az adatbázistáblákat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kontroller meghívhatja a modellt az adatok lekéréséhez.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kontroller sosem ad választ a felhasználónak.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A kontroller fogadja a kéréseket, meghívja a modellt az adatokért, és válaszol a felhasználónak a megfelelő nézet segítségével.',
        },
        {
            fokerdes: 'Melyik állítás nem igaz az URL-paraméterekről?',
            kerdesek: [
                {
                    kerdes: "Az URL-paraméterek a '?' karakter után helyezkednek el az URL-ben.",
                    eldont: 0,
                },
                {
                    kerdes: "Az URL-paramétereket '&' jellel lehet elválasztani egymástól.",
                    eldont: 0,
                },
                {
                    kerdes: 'Az URL-paramétereket csak POST kérés esetén használhatjuk.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az URL-paraméterek kulcs-érték párokból állnak.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'Az URL-paraméterek GET kérések során jellemzők, nem kizárólag POST kéréshez tartoznak.',
        },
        {
            fokerdes: 'Melyik állítások igazak a HTTP POST kérés body-jára?',
            kerdesek: [
                {
                    kerdes: 'A POST kérés body része tartalmazhat JSON adatokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST kérés body része mindig üres.',
                    eldont: 0,
                },
                {
                    kerdes: 'A POST body-ban továbbíthatunk űrlapadatokat is.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST body része kizárólag bináris adatot tartalmazhat.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A POST kérés body része JSON-t vagy űrlapadatokat (pl. application/x-www-form-urlencoded) is tartalmazhat.',
        },
        {
            fokerdes:
                'Melyik megállapítás nem helyes az URL-paraméterekkel kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az URL-paraméterek segítségével plusz információt adhatunk át a szervernek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az URL-paramétereket a cím végére fűzve küldjük el.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az URL-paraméterek titkosítva vannak HTTPS használata nélkül is.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az URL-paraméterek általában könnyen olvashatóak emberi szemmel is.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'HTTPS nélkül az URL-paraméterek nincsenek titkosítva, így érzékeny adatot nem ajánlott bennük továbbítani.',
        },
        {
            fokerdes:
                'Melyik állítások helyesek a HTTP POST body tartalmával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A POST kérés body részébe tetszőleges formátumú adatot tehetünk, amíg a szerver megérti azt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST kérés body-ja csak URL-paramétereket tartalmazhat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A POST kérés tartalma lehet például XML vagy JSON formátumú is.',
                    eldont: 1,
                },
                {
                    kerdes: 'A POST kérés body-ját nem kell megadni, ha nincs adatátvitel.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A POST body szabadon tartalmazhat bármilyen adatot, például XML-t vagy JSON-t is, ha a szerver képes azt értelmezni.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a Server Side Rendering (SSR) technológiákra?',
            kerdesek: [
                {
                    kerdes: 'Az SSR során a szerver generálja a teljes HTML-oldalt.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az SSR sablonmotorokat, például EJS-t vagy Blade-et használhat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az SSR kizárólag kliensoldali JavaScript-tel működik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az SSR előnyös lehet SEO szempontjából.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'Az SSR nem kizárólag kliensoldali JavaScript-tel működik, hanem a szerver oldalon készíti el a HTML kimenetet.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a formok adatainak kezelésekor a kontrollerekben?',
            kerdesek: [
                {
                    kerdes: 'A kontrollerek képesek a beküldött formadatokat validálni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A formokból érkező adatok automatikusan JSON formátumban jönnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A formok inputjait a backend oldalon külön-külön változókban is el lehet tárolni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A formadatokat mindig közvetlenül az adatbázisba írjuk mentés nélkül.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A kontrollerek a formok adatait képesek validálni és az inputokat változókban feldolgozni, nem automatikusan JSON formátumban érkezik minden adat.',
        },
        {
            fokerdes:
                'Melyik kijelentés nem igaz az EJS, Mustache, Blade és hasonló szerveroldali sablonmotorokra?',
            kerdesek: [
                {
                    kerdes: 'Ezek a sablonmotorok dinamikusan helyettesítik az adatokat a HTML sablonban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az ilyen sablonmotorok lehetővé teszik az if-else logika használatát HTML-ben.',
                    eldont: 0,
                },
                {
                    kerdes: 'A sablonmotorok csak statikus szöveget képesek megjeleníteni, nem támogatják a ciklusokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A szerver adatait közvetlenül be lehet ágyazni a HTML kódba ezekkel a motorokkal.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 1,
            indoklas:
                'A sablonmotorok támogatják a ciklusokat is, nem csak statikus szöveg megjelenítésére alkalmasak.',
        },
        {
            fokerdes:
                'Mely állítások helyesek a formok backend oldali feldolgozásáról?',
            kerdesek: [
                {
                    kerdes: 'A beküldött formadatokat gyakran middleware segítségével dolgozzuk fel (pl. body-parser).',
                    eldont: 1,
                },
                {
                    kerdes: 'A formok inputjai csak GET kéréseken keresztül érkezhetnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A formok hibás adatait validáció után hibajelzéssel vissza lehet küldeni a felhasználónak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A formfeldolgozás kizárólag frontenden történik.',
                    eldont: 0,
                },
            ],
            kep: 'https://res.cloudinary.com/di2vaxvhl/image/upload/v1545849277/HTTP_txch7g.png',
            helyes: 2,
            indoklas:
                'A formadatokat middleware-ek dolgozzák fel, a validáció után hibajelzést is adhatunk vissza a felhasználónak.',
        },
    ],
];
