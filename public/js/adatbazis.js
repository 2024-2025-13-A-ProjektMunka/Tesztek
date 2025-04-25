let adatbazis = [
    'Adatbázis-tervezés, adatbázis-kezelés, SQL',
    4,
    [
        {
            fokerdes: 'Melyik SQL utasítás hoz létre új adatbázist?',
            kerdesek: [
                {
                    kerdes: 'INSERT DATABASE SchoolDB;',
                    eldont: 0,
                },
                {
                    kerdes: 'CREATE DATABASE SchoolDB;',
                    eldont: 1,
                },
                {
                    kerdes: 'NEW DATABASE SchoolDB;',
                    eldont: 0,
                },
                {
                    kerdes: 'ADD DATABASE SchoolDB;',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'Az SQL-ben az CREATE DATABASE utasítással lehet új adatbázist létrehozni. Ez a DDL (Data Definition Language) parancsok egyike. ',
        },
        {
            fokerdes:
                'Mely adattípusokat használhatjuk egy SQL-táblában szöveges adatok tárolására?',
            kerdesek: [
                {
                    kerdes: 'VARCHAR',
                    eldont: 1,
                },
                {
                    kerdes: 'CHAR',
                    eldont: 1,
                },
                {
                    kerdes: 'INT',
                    eldont: 0,
                },
                {
                    kerdes: 'DATE',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'A CHAR és a VARCHAR adattípusok szöveges karakterláncok tárolására szolgálnak SQL-ben. Az INT számokat, a DATE pedig dátumokat tárol.',
        },
        {
            fokerdes:
                'Melyik SQL parancs segítségével lehet új táblát létrehozni egy adatbázisban?',
            kerdesek: [
                {
                    kerdes: 'MAKE TABLE Students;',
                    eldont: 0,
                },
                {
                    kerdes: 'ADD TABLE Students;',
                    eldont: 0,
                },
                {
                    kerdes: 'CREATE TABLE Students (...);',
                    eldont: 1,
                },
                {
                    kerdes: 'NEW TABLE Students;',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'A CREATE TABLE parancs egy új táblát hoz létre egy létező adatbázisban. A zárójelek között kell megadni az oszlopokat és azok típusait.',
        },
        {
            fokerdes:
                'Mely SQL záradékokat használhatjuk meződefinícióknál egy tábla létrehozásakor?',
            kerdesek: [
                {
                    kerdes: 'NOT NULL',
                    eldont: 1,
                },
                {
                    kerdes: 'PRIMARY KEY',
                    eldont: 1,
                },
                {
                    kerdes: 'GROUP BY',
                    eldont: 0,
                },
                {
                    kerdes: 'ORDER BY',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'A NOT NULL és PRIMARY KEY záradékokat az oszlopdefiníciók részeként használjuk táblák létrehozásakor. A GROUP BY és ORDER BY lekérdezésekhez tartoznak.',
        },
        {
            fokerdes:
                'Melyik SQL parancs tartozik a DDL (Data Definition Language) műveletek közé?',
            kerdesek: [
                {
                    kerdes: 'INSERT INTO Students VALUES (...);',
                    eldont: 0,
                },
                {
                    kerdes: "UPDATE Students SET name = 'Anna';",
                    eldont: 0,
                },
                {
                    kerdes: 'CREATE TABLE Students (...);',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT * FROM Students;',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'A CREATE TABLE parancs DDL művelet, mivel szerkezetet (struktúrát) hoz létre az adatbázisban. Az INSERT, UPDATE és SELECT parancsok DML vagy lekérdező nyelvi parancsok.',
        },
        {
            fokerdes:
                'Mely parancsok tartoznak a DML (Data Manipulation Language) kategóriába?',
            kerdesek: [
                {
                    kerdes: 'INSERT',
                    eldont: 1,
                },
                {
                    kerdes: 'DELETE',
                    eldont: 1,
                },
                {
                    kerdes: 'DROP',
                    eldont: 0,
                },
                {
                    kerdes: 'CREATE',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'Az INSERT és DELETE parancsok DML parancsok, mivel adatokat módosítanak a táblákban. A CREATE és DROP parancsok viszont a DDL-hez tartoznak, mert az adatbázis struktúráját érintik.',
        },
        {
            fokerdes:
                'Mi történik, ha végrehajtjuk a következő parancsot: DROP TABLE Orders;',
            kerdesek: [
                {
                    kerdes: 'A tábla összes rekordja törlődik, de a tábla megmarad.',
                    eldont: 0,
                },
                {
                    kerdes: 'A tábla törlődik, de az adatok megmaradnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'A tábla és az összes benne lévő adat véglegesen törlődik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak a tábla neve kerül átnevezésre.',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'A DROP TABLE parancs véglegesen eltávolítja a táblát az adatbázisból, a benne lévő adatokkal együtt. Ez egy DDL parancs.',
        },
        {
            fokerdes:
                'Mely állítások igazak a DML és DDL parancsok közti különbségre?',
            kerdesek: [
                {
                    kerdes: 'A DDL parancsok szerkezeti módosításokat hajtanak végre az adatbázison.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DML parancsokkal adatokat manipulálhatunk a meglévő struktúrákban.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DML parancsok új adatbázisokat hoznak létre.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DDL parancsok csak olvasásra alkalmasak.',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'A DDL parancsok (pl. CREATE, ALTER) szerkezetet hoznak létre vagy módosítanak, míg a DML parancsok (pl. INSERT, UPDATE) az adatok kezelésére szolgálnak.',
        },
        {
            fokerdes: 'Mit jelent a NOT NULL záradék egy meződefiníciónál?',
            kerdesek: [
                {
                    kerdes: 'A mező értéke bármikor NULL lehet.',
                    eldont: 0,
                },
                {
                    kerdes: 'A mező csak egyszer szerepelhet a táblában.',
                    eldont: 0,
                },
                {
                    kerdes: 'A mező nem vehet fel NULL értéket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A mező csak más táblákban létezhet.',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'A NOT NULL záradék azt jelenti, hogy a mező minden sorban kötelező értéket kell, hogy tartalmazzon - nem lehet üres (NULL).',
        },
        {
            fokerdes: 'Mely záradékokat lehet táblaszinten megadni?',
            kerdesek: [
                {
                    kerdes: 'PRIMARY KEY',
                    eldont: 1,
                },
                {
                    kerdes: 'FOREIGN KEY',
                    eldont: 1,
                },
                {
                    kerdes: 'NOT NULL',
                    eldont: 0,
                },
                {
                    kerdes: 'DEFAULT',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'A PRIMARY KEY és FOREIGN KEY záradékokat jellemzően táblaszinten is meg lehet adni, különösen több oszlopra vonatkozóan. A NOT NULL és DEFAULT mezőszintű (oszlophoz kapcsolt) záradékok.',
        },
        {
            fokerdes:
                'Mire szolgál az UNIQUE záradék egy SQL tábla létrehozásakor?',
            kerdesek: [
                {
                    kerdes: 'Megakadályozza, hogy az adott mezőben duplikált értékek szerepeljenek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak karakter típusú mezőknél alkalmazható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A mező minden értékét NULL-lá alakítja.',
                    eldont: 0,
                },
                {
                    kerdes: 'Megtiltja a mező módosítását az INSERT után.',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'A UNIQUE záradék biztosítja, hogy az adott mező minden értéke egyedi legyen a táblán belül, vagyis ne lehessen duplikáció.',
        },
        {
            fokerdes:
                'Mely záradékok kapcsolódnak kulcsok definiálásához SQL táblákban?',
            kerdesek: [
                {
                    kerdes: 'PRIMARY KEY',
                    eldont: 1,
                },
                {
                    kerdes: 'FOREIGN KEY',
                    eldont: 1,
                },
                {
                    kerdes: 'NOT NULL',
                    eldont: 0,
                },
                {
                    kerdes: 'AUTO_INCREMENT',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'A PRIMARY KEY egyedi azonosítóként működik a táblában, míg a FOREIGN KEY kapcsolatot hoz létre más táblák kulcsaihoz. A NOT NULL az érték kötelező voltát határozza meg, az AUTO_INCREMENT pedig numerikus sorszámozást végez.',
        },
        {
            fokerdes:
                'Mire használható a REFERENCES záradék egy SQL tábla létrehozásakor?',
            kerdesek: [
                {
                    kerdes: 'Egy oszlop alapértelmezett értékének megadására.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy oszlop nevének módosítására.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy másik tábla oszlopára való hivatkozásra idegen kulcsként.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy sor törlésének megakadályozására.',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'A REFERENCES záradék idegen kulcs (foreign key) létrehozására szolgál, amely egy másik tábla oszlopára hivatkozik, biztosítva ezzel az adatintegritást.',
        },
        {
            fokerdes: 'Mely állítások igazak a FOREIGN KEY záradékra?',
            kerdesek: [
                {
                    kerdes: 'A FOREIGN KEY biztosítja, hogy az adott mező csak létező értéket tartalmazhat egy másik táblából.',
                    eldont: 1,
                },
                {
                    kerdes: 'A FOREIGN KEY kulcs nem lehet NULL.',
                    eldont: 0,
                },
                {
                    kerdes: 'A FOREIGN KEY kapcsolatot hoz létre két tábla között.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy táblában csak egy FOREIGN KEY lehet.',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'A FOREIGN KEY célja az adatintegritás biztosítása: az adott mezőben szereplő értéknek meg kell egyeznie egy másik tábla elsődleges kulcsával. Lehet több FOREIGN KEY is egy táblában, és az ilyen mezők NULL-t is tartalmazhatnak.',
        },
        {
            fokerdes:
                'Melyik állítás igaz egy táblaszintű PRIMARY KEY záradékra?',
            kerdesek: [
                {
                    kerdes: 'Egyszerre több PRIMARY KEY is lehet egy táblában.',
                    eldont: 0,
                },
                {
                    kerdes: 'PRIMARY KEY csak szám típusú mezőre alkalmazható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PRIMARY KEY egyedi azonosítót biztosít a tábla rekordjai számára.',
                    eldont: 1,
                },
                {
                    kerdes: 'PRIMARY KEY csak ideiglenes táblákhoz adható meg.',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 1,
            indoklas:
                'A PRIMARY KEY minden sorhoz egyedi azonosítót rendel, biztosítva, hogy ne legyenek duplikált rekordok. Egy táblának csak egy PRIMARY KEY-je lehet, de az több oszlopból is állhat. ',
        },
        {
            fokerdes:
                'Mely záradékok ellenőrzik az oszlopértékek érvényességét?',
            kerdesek: [
                {
                    kerdes: 'CHECK',
                    eldont: 1,
                },
                {
                    kerdes: 'REFERENCES',
                    eldont: 0,
                },
                {
                    kerdes: 'UNIQUE',
                    eldont: 1,
                },
                {
                    kerdes: 'AUTO_INCREMENT',
                    eldont: 0,
                },
            ],
            kep: 'https://i.ytimg.com/vi/k9gv6MDI8PY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCo8MtrDXqwslX9brXecO4rWBIzEg',
            helyes: 2,
            indoklas:
                'A CHECK záradék feltétel alapján ellenőrzi az értékeket (pl. > 0), míg a UNIQUE biztosítja, hogy az érték ne ismétlődjön. A REFERENCES kapcsolatra vonatkozik, nem értékellenőrzésre.',
        },
        {
            fokerdes: 'Mi az adatbázis indexek fő szerepe?',
            kerdesek: [
                {
                    kerdes: 'Megakadályozzák az adatok duplikálását.',
                    eldont: 0,
                },
                {
                    kerdes: 'Gyorsítják az adatok keresését és lekérdezését.',
                    eldont: 1,
                },
                {
                    kerdes: 'Automatikusan frissítik az idegen kulcsokat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Kódolják az adatokat biztonsági okokból.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'Az indexek elsődleges célja, hogy gyorsabbá tegyék az adatok keresését, különösen nagy táblák esetében. Az indexek használata csökkenti a lekérdezési időt.',
        },
        {
            fokerdes:
                'Mely objektumok törlésére használható a DROP utasítás SQL-ben?',
            kerdesek: [
                {
                    kerdes: 'Adatbázis',
                    eldont: 1,
                },
                {
                    kerdes: 'Index',
                    eldont: 1,
                },
                {
                    kerdes: 'Táblák oszlopai',
                    eldont: 0,
                },
                {
                    kerdes: 'Sorok egy táblából',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'A DROP utasítással teljes adatbázisokat, táblákat vagy indexeket lehet törölni, de nem használható egy oszlop vagy sor törlésére - erre más utasítások, mint pl. ALTER TABLE ... DROP COLUMN vagy DELETE szolgálnak.',
        },
        {
            fokerdes: 'Mire szolgál az ALTER utasítás az SQL-ben?',
            kerdesek: [
                {
                    kerdes: 'Új adatbázis létrehozására.',
                    eldont: 0,
                },
                {
                    kerdes: 'Lekérdezések optimalizálására.',
                    eldont: 0,
                },
                {
                    kerdes: 'Meglévő táblák vagy indexek szerkezetének módosítására.',
                    eldont: 1,
                },
                {
                    kerdes: 'Adatok rendezésére a lekérdezésben.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'Az ALTER utasítással módosíthatjuk a táblák szerkezetét, például új oszlopokat adhatunk hozzá, törölhetünk oszlopokat, vagy megváltoztathatjuk egy oszlop adattípusát.',
        },
        {
            fokerdes: 'Mely SQL utasításokkal lehet indexet létrehozni?',
            kerdesek: [
                {
                    kerdes: 'CREATE INDEX',
                    eldont: 1,
                },
                {
                    kerdes: 'ALTER TABLE ... ADD INDEX',
                    eldont: 1,
                },
                {
                    kerdes: 'DROP INDEX',
                    eldont: 0,
                },
                {
                    kerdes: 'INSERT INTO',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'Az indexeket létre lehet hozni önállóan CREATE INDEX segítségével, vagy egy táblán belül is hozzáadhatók ALTER TABLE ... ADD INDEX utasítással. A DROP INDEX index törlésére, míg az INSERT INTO adatok beszúrására szolgál.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás helyes egy új rekord beszúrásához egy táblába?',
            kerdesek: [
                {
                    kerdes: "ADD INTO students (name, age) VALUES ('Anna', 20);",
                    eldont: 0,
                },
                {
                    kerdes: "INSERT students VALUES ('Anna', 20);",
                    eldont: 0,
                },
                {
                    kerdes: "INSERT INTO students (name, age) VALUES ('Anna', 20);",
                    eldont: 1,
                },
                {
                    kerdes: "PUT INTO students VALUES ('Anna', 20);",
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'Az INSERT INTO az érvényes SQL-szintaxis új rekord beszúrásához. A megadott oszlopokhoz tartozó értékeket `VALUES` után kell felsorolni. A többi példa nem létező vagy hibás kulcsszavakat tartalmaz.',
        },
        {
            fokerdes: 'Melyik SQL utasítás töröl adatokat egy táblából?',
            kerdesek: [
                {
                    kerdes: 'DELETE FROM students WHERE age < 18;',
                    eldont: 1,
                },
                {
                    kerdes: 'DROP FROM students WHERE age < 18;',
                    eldont: 0,
                },
                {
                    kerdes: 'DELETE students WHERE age < 18;',
                    eldont: 0,
                },
                {
                    kerdes: 'DELETE FROM students;',
                    eldont: 1,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'A DELETE FROM utasítás segítségével törölhetünk rekordokat egy adott feltétel alapján, vagy akár az összes sort is, ha nem adunk meg WHERE feltételt. A DROP parancs teljes táblát töröl, nem adatokat.',
        },
        {
            fokerdes: 'Hogyan lehet SQL-ben egy rekord értékét módosítani?',
            kerdesek: [
                {
                    kerdes: "UPDATE students SET age = 21 WHERE name = 'Anna';",
                    eldont: 1,
                },
                {
                    kerdes: "MODIFY students SET age = 21 WHERE name = 'Anna';",
                    eldont: 0,
                },
                {
                    kerdes: "ALTER TABLE students age = 21 WHERE name = 'Anna';",
                    eldont: 0,
                },
                {
                    kerdes: "CHANGE students SET age = 21 WHERE name = 'Anna';",
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'Az UPDATE ... SET ... WHERE ... szerkezet az adatok módosítására szolgál. A többi parancs nem érvényes SQL-módosító utasítás.',
        },
        {
            fokerdes:
                'Mely állítások igazak az UPDATE és DELETE utasításokkal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Ha nem használunk WHERE feltételt, minden rekord módosul vagy törlődik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az UPDATE utasítás új rekordokat ad hozzá a táblához.',
                    eldont: 0,
                },
                {
                    kerdes: 'DELETE utasítással táblák is törölhetők.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az UPDATE SET utasítással egy vagy több oszlop értéke is módosítható.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'Az UPDATE és DELETE parancsoknál, ha nem használunk WHERE feltételt, akkor az összes rekord érintett. Az UPDATE nem beszúr, hanem módosít. Táblák törlésére a DROP TABLE szolgál. Több oszlop is módosítható egyszerre az UPDATE ... SET szintaxissal.',
        },
        {
            fokerdes:
                "Melyik SQL utasítás helyes a teljes 'employees' tábla lekérdezéséhez?",
            kerdesek: [
                {
                    kerdes: 'GET * FROM employees;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT ALL FROM employees;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT * FROM employees;',
                    eldont: 1,
                },
                {
                    kerdes: 'SHOW ALL employees;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'Az SQL SELECT * FROM utasítás a leggyakoribb módja az összes oszlop lekérdezésének egy adott táblából. A többi példa hibás SQL szintaxist használ.',
        },
        {
            fokerdes:
                'Mely operátorokat lehet használni az SQL WHERE záradékban?',
            kerdesek: [
                {
                    kerdes: 'LIKE',
                    eldont: 1,
                },
                {
                    kerdes: 'STARTS WITH',
                    eldont: 0,
                },
                {
                    kerdes: 'IN',
                    eldont: 1,
                },
                {
                    kerdes: 'CONTAINS',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'Az IN és LIKE kulcsszavak a WHERE záradékban szűrésre szolgálnak. Az IN felsorolt értékek közötti egyezést keres, a LIKE pedig mintázat alapján szűr. A STARTS WITH és CONTAINS nem része a szabványos SQL-nek.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás választja ki azokat a dolgozókat, akiknek a fizetése 3000 fölött van?',
            kerdesek: [
                {
                    kerdes: 'SELECT * FROM employees WHERE salary > 3000;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT ALL FROM employees WHEN salary > 3000;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT FROM employees WHERE salary > 3000;',
                    eldont: 0,
                },
                {
                    kerdes: 'GET * FROM employees WHERE salary =< 3000;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'A SELECT * FROM ... WHERE a helyes szerkezet, a salary > 3000 pedig pontos feltétel az érték összehasonlításához. A többi válasz szintaktikailag helytelen.',
        },
        {
            fokerdes:
                'Mely SQL feltételek választják ki azokat a rekordokat, ahol az életkor 18 és 25 év között van?',
            kerdesek: [
                {
                    kerdes: 'WHERE age BETWEEN 18 AND 25',
                    eldont: 1,
                },
                {
                    kerdes: 'WHERE age >= 18 AND age <= 25',
                    eldont: 1,
                },
                {
                    kerdes: 'WHERE age > 25 AND age < 18',
                    eldont: 0,
                },
                {
                    kerdes: 'WHERE age IN (18 TO 25)',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'A BETWEEN és a >= ... AND <= ... a két megfelelő módja egy értéktartomány szűrésének SQL-ben. Az IN nem használható így, a > 25 AND < 18 pedig logikailag ellentmondásos.',
        },
        {
            fokerdes:
                "Melyik SQL utasítás rendezi a rekordokat a 'salary' mező szerint növekvő sorrendbe?",
            kerdesek: [
                {
                    kerdes: 'SELECT * FROM employees ORDER salary ASC;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT * FROM employees SORT BY salary;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT * FROM employees ORDER BY salary ASC;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT ALL FROM employees WHERE salary ASC;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'Az ORDER BY salary ASC helyesen rendezi a rekordokat a fizetés mező szerint növekvő sorrendben. Az SQL szintaxisában az ORDER BY kulcsszó szolgál a rendezésre.',
        },
        {
            fokerdes:
                'Mely állítások igazak az SQL lekérdezésekben használt álnevekre (alias)?',
            kerdesek: [
                {
                    kerdes: 'Az álnevek a `AS` kulcsszóval adhatók meg.',
                    eldont: 1,
                },
                {
                    kerdes: 'Álneveket kizárólag táblákhoz lehet rendelni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az álnevek használata javítja az olvashatóságot.',
                    eldont: 1,
                },
                {
                    kerdes: 'Álnevek használata kötelező minden SELECT lekérdezésben.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'Az álnevek (alias) az AS kulcsszóval adhatók meg és segítenek az oszlop- vagy táblanevek rövidítésében, átnevezésében. Nem kötelezőek, és nem csak táblákhoz használhatók.',
        },
        {
            fokerdes:
                "Melyik SQL minta felel meg azoknak a neveknek, amelyek 'A' betűvel kezdődnek?",
            kerdesek: [
                {
                    kerdes: "WHERE name LIKE '%A'",
                    eldont: 0,
                },
                {
                    kerdes: "WHERE name = 'A*'",
                    eldont: 0,
                },
                {
                    kerdes: "WHERE name LIKE 'A%'",
                    eldont: 1,
                },
                {
                    kerdes: "WHERE name LIKE '_A%'",
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 1,
            indoklas:
                'Az SQL LIKE mintaillesztésben a % helyettesít tetszőleges számú karaktert. Az A% minta minden olyan nevet visszaad, ami A betűvel kezdődik.',
        },
        {
            fokerdes:
                'Mely SQL utasítások adnak vissza rendezett eredményt először vezetéknév, majd keresztnév szerint növekvő sorrendben?',
            kerdesek: [
                {
                    kerdes: 'SELECT * FROM employees ORDER BY lastname ASC, firstname ASC;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT * FROM employees ORDER BY lastname, firstname;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT * FROM employees SORTED BY lastname THEN firstname;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT * FROM employees GROUP BY lastname, firstname;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.webdice.hu/images/content/stock/pexels/resized-831/webp/AdobeStock_143813030.webp',
            helyes: 2,
            indoklas:
                'Az ORDER BY záradékban több mező is megadható, sorrend szerint. Ha nem szerepel az ASC, akkor alapértelmezés szerint növekvő sorrendet alkalmaz az SQL. A GROUP BY csoportosít, nem rendez.',
        },
        {
            fokerdes:
                "Melyik SQL lekérdezés adja vissza a különböző (nem ismétlődő) városneveket a 'customers' táblából?",
            kerdesek: [
                {
                    kerdes: 'SELECT city FROM customers;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT ALL city FROM customers;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT DISTINCT city FROM customers;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT UNIQUE city FROM customers;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A SELECT DISTINCT záradék biztosítja, hogy a lekérdezés csak az egyedi (különböző) értékeket adja vissza, és elnyomja az ismétlődő sorokat.',
        },
        {
            fokerdes:
                'Mely SQL utasítások helyesek, ha a vásárlók országonkénti számát szeretnénk megjeleníteni, csak azokét, ahol több mint 10 vásárló van?',
            kerdesek: [
                {
                    kerdes: 'SELECT country, COUNT(*) FROM customers GROUP BY country HAVING COUNT(*) > 10;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT country, COUNT(*) FROM customers HAVING COUNT(*) > 10 GROUP BY country;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT country, COUNT(*) FROM customers GROUP BY country HAVING COUNT(customer_id) > 10;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT COUNT(*), country FROM customers WHERE COUNT(*) > 10 GROUP BY country;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A GROUP BY csoportosítja az adatokat, míg a HAVING feltétel a csoportosított sorokat szűri. A HAVING COUNT(*) > 10 helyesen korlátozza a visszatérő sorokat a 10-nél több rekordot tartalmazó csoportokra.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás korlátozza az eredménytáblát az első 5 rekordra?',
            kerdesek: [
                {
                    kerdes: 'SELECT * FROM customers LIMIT 5;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT TOP 5 * FROM customers;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT FIRST 5 FROM customers;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT * FROM customers WHERE ROWNUM <= 5;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A LIMIT záradék az eredményhalmaz méretét korlátozza. A LIMIT 5 például csak az első öt találatot adja vissza. Ez főleg MySQL-ben használatos.',
        },
        {
            fokerdes:
                'Melyik állítások igazak a GROUP BY és a DISTINCT záradékokra?',
            kerdesek: [
                {
                    kerdes: 'A GROUP BY lehetővé teszi az adatok aggregálását csoportonként.',
                    eldont: 1,
                },
                {
                    kerdes: 'A DISTINCT és a GROUP BY használható hasonló célokra, de más működési logikával.',
                    eldont: 1,
                },
                {
                    kerdes: 'A GROUP BY csak szám mezők esetén használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DISTINCT mindig gyorsabb, mint a GROUP BY.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A GROUP BY csoportonkénti műveletekhez (pl. COUNT, SUM) használatos, míg a DISTINCT ismétlődő sorokat szűr ki. Bár néha hasonló eredményt adhatnak, a működésük eltér.',
        },
        {
            fokerdes:
                'Hogyan lehet egy számított mezőt létrehozni SQL lekérdezésben?',
            kerdesek: [
                {
                    kerdes: 'SELECT salary + bonus FROM employees;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT salary + bonus AS total_compensation FROM employees;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT salary & bonus AS compensation FROM employees;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT salary bonus AS compensation FROM employees;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A számított mezőt úgy hozhatjuk létre, hogy az oszlopok között műveletet végzünk, majd álnevet (AS) adunk neki. A helyes megoldás a SELECT salary + bonus AS total_compensation.',
        },
        {
            fokerdes: 'Mely állítások igazak a COUNT() és AVG() függvényekre?',
            kerdesek: [
                {
                    kerdes: 'A COUNT() függvény megszámolja a sorokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az AVG() visszaadja egy oszlop értékeinek szórását.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az AVG() egy numerikus oszlop átlagát számolja ki.',
                    eldont: 1,
                },
                {
                    kerdes: 'A COUNT() csak numerikus oszlopon működik.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A COUNT() bármilyen nem NULL érték megszámolására alkalmas. Az AVG() numerikus értékek átlagát számítja ki, nem szórást.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás számítja ki a teljes fizetési összegét az alkalmazottaknak?',
            kerdesek: [
                {
                    kerdes: 'SELECT SUM(salary) FROM employees;',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT salary FROM employees SUM();',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT SUM FROM employees.salary;',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT TOTAL(salary) FROM employees;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A SUM() függvény összegzi a megadott numerikus oszlop értékeit, így a SELECT SUM(salary) a helyes mód a fizetések összegének lekérésére.',
        },
        {
            fokerdes: 'Mely állítások igazak a MIN() és MAX() függvényekre?',
            kerdesek: [
                {
                    kerdes: 'A MAX() visszaadja egy oszlop legnagyobb értékét.',
                    eldont: 1,
                },
                {
                    kerdes: 'A MIN() visszaadja egy oszlop első rekordját.',
                    eldont: 0,
                },
                {
                    kerdes: 'A MIN() visszaadja a legalacsonyabb értéket egy adott oszlopban.',
                    eldont: 1,
                },
                {
                    kerdes: 'A MAX() csak karakterláncokon használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A MIN() és MAX() függvények numerikus és szöveges mezők esetén is működnek, és a legalacsonyabb illetve legmagasabb értéket adják vissza.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás adja vissza két szöveg összefűzését és a végeredmény hosszát?',
            kerdesek: [
                {
                    kerdes: "SELECT LENGTH('Hello', 'World');",
                    eldont: 0,
                },
                {
                    kerdes: "SELECT LENGTH(CONCAT('Hello', 'World'));",
                    eldont: 1,
                },
                {
                    kerdes: "SELECT CONCAT_LENGTH('Hello', 'World');",
                    eldont: 0,
                },
                {
                    kerdes: "SELECT LENGTH('Hello' + 'World');",
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A CONCAT() függvény összefűzi a szövegeket, a LENGTH() pedig a karakterlánc hosszát adja vissza. Így a LENGTH(CONCAT(...)) kombináció a helyes megoldás.',
        },
        {
            fokerdes:
                'Mely állítások igazak a ROUND() és TRUNC() függvényekre SQL-ben?',
            kerdesek: [
                {
                    kerdes: 'A ROUND() kerekíti a számot a megadott tizedesjegyre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A TRUNC() függvény levágja a számot a megadott tizedesjegyig, nem kerekít.',
                    eldont: 1,
                },
                {
                    kerdes: 'A ROUND() mindig felfelé kerekít.',
                    eldont: 0,
                },
                {
                    kerdes: 'A TRUNC() a számot karakterlánccá alakítja.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A ROUND() kerekítési logikát követ, míg a TRUNC() egyszerűen levágja a felesleges tizedesjegyeket. Ez fontos különbség például pénzügyi számításoknál.',
        },
        {
            fokerdes:
                "Mit ad vissza a következő SQL utasítás: SELECT SUBSTR('Informatika', 1, 5);",
            kerdesek: [
                {
                    kerdes: "'nform'",
                    eldont: 0,
                },
                {
                    kerdes: "'Infor'",
                    eldont: 1,
                },
                {
                    kerdes: "'Info'",
                    eldont: 0,
                },
                {
                    kerdes: "'Informa'",
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                "A SUBSTR('Informatika', 1, 5) visszaadja az első karaktertől indulva az első 5 karaktert: 'Infor'. SQL-ben az indexelés általában 1-től indul.",
        },
        {
            fokerdes:
                'Melyik SQL függvényekkel lehet szöveget formázni vagy módosítani?',
            kerdesek: [
                {
                    kerdes: 'A REPLACE() lecserél egy szövegrészletet másikra.',
                    eldont: 1,
                },
                {
                    kerdes: 'A FORMAT() számokat vagy dátumokat formáz megadott formában.',
                    eldont: 1,
                },
                {
                    kerdes: 'A FORMAT() csak karakterláncokat tud módosítani.',
                    eldont: 0,
                },
                {
                    kerdes: 'A REPLACE() kerekít egy számot a legközelebbi egészre.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A REPLACE() szövegrészleteket cserél le, míg a FORMAT() a számokat és dátumokat alakítja emberileg olvasható formátumba, például pénznemként vagy dátumként.',
        },
        {
            fokerdes: 'Mi az ER-modell fő célja az adatbázistervezés során?',
            kerdesek: [
                {
                    kerdes: 'Az adatok megjelenítésének testreszabása a felhasználói felületen.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adatok fizikai tárolásának optimalizálása.',
                    eldont: 0,
                },
                {
                    kerdes: 'A valós világ entitásainak és kapcsolataiknak vizuális ábrázolása.',
                    eldont: 1,
                },
                {
                    kerdes: 'SQL lekérdezések automatikus generálása.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'Az ER-modell célja, hogy a valós világ objektumait (entitásokat), azok attribútumait és kapcsolatait szemléletes módon jelenítse meg a tervezés során. Ez elősegíti az adatbázis logikai szerkezetének tiszta meghatározását.',
        },
        {
            fokerdes:
                'Melyek a többértékű attribútum relációs modellre való átalakításának helyes lépései?',
            kerdesek: [
                {
                    kerdes: 'Külön reláció (tábla) létrehozása az attribútum számára.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az attribútum közvetlenül szerepeltetése több oszlopban az eredeti táblában.',
                    eldont: 0,
                },
                {
                    kerdes: 'Kapcsolattá való alakítás az entitás és az attribútum reláció között.',
                    eldont: 1,
                },
                {
                    kerdes: 'Törlés az ER-diagramból, mert több érték tárolása nem támogatott.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A többértékű attribútumokat nem lehet közvetlenül tárolni egy relációban, ezért az átalakítás során külön relációba kerülnek, és idegen kulccsal kötjük össze őket az eredeti entitással.',
        },
        {
            fokerdes:
                'Mi történik az ER-modellben szereplő N-ágú kapcsolatok relációs modellre való átalakításakor?',
            kerdesek: [
                {
                    kerdes: 'Az összes entitás összeolvad egyetlen táblába.',
                    eldont: 0,
                },
                {
                    kerdes: 'Külön reláció jön létre a kapcsolat számára, amely tartalmazza az összes entitás kulcsát.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kapcsolat megszűnik, és csak az entitások maradnak meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kapcsolat egyedivé válik, és minden entitás külön táblát kap.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'Az N-ágú (három vagy több entitást érintő) kapcsolatok esetén egy külön reláció jön létre, amely minden érintett entitás kulcsát tartalmazza.',
        },
        {
            fokerdes:
                'Mely állítások igazak a gyenge entitásokra az ER-modellben?',
            kerdesek: [
                {
                    kerdes: 'Nem rendelkeznek saját kulccsal.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az azonosításhoz egy másik entitáshoz kapcsolódnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'Önállóan is képesek az egyediség biztosítására.',
                    eldont: 0,
                },
                {
                    kerdes: 'Nem szerepelhetnek kapcsolatokban más entitásokkal.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A gyenge entitások nem rendelkeznek saját elsődleges kulccsal, az egyediséghez szükségük van egy másik (erős) entitás kulcsára. Ezt hívjuk részleges kulcsnak is.',
        },
        {
            fokerdes:
                'Melyik típus nem jellemző az egymásba ágyazott (nested) SQL lekérdezésekre?',
            kerdesek: [
                {
                    kerdes: 'Korrelált (correlated) lekérdezés',
                    eldont: 0,
                },
                {
                    kerdes: 'Nem korrelált (uncorrelated) lekérdezés',
                    eldont: 0,
                },
                {
                    kerdes: 'Rekurzív JOIN lekérdezés',
                    eldont: 1,
                },
                {
                    kerdes: 'Beágyazott lekérdezés FROM záradékban',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A korrelált és nem korrelált beágyazott lekérdezések az SQL nyelv részei. FROM záradékban is használhatunk beágyazott lekérdezést. A rekurzív JOIN nem egy beágyazott lekérdezéstípus, hanem inkább speciális öncsatolásos struktúrákhoz tartozik.',
        },
        {
            fokerdes:
                'Mely operátorokat használhatjuk beágyazott lekérdezés előtt SQL-ben?',
            kerdesek: [
                {
                    kerdes: 'IN',
                    eldont: 1,
                },
                {
                    kerdes: 'BETWEEN',
                    eldont: 0,
                },
                {
                    kerdes: 'EXISTS',
                    eldont: 1,
                },
                {
                    kerdes: 'LIMIT',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'Az IN és EXISTS operátorokat gyakran használjuk beágyazott lekérdezések előtt a feltétel meghatározására. A BETWEEN numerikus értéktartományra vonatkozik, a LIMIT pedig az eredményhalmaz korlátozására szolgál.',
        },
        {
            fokerdes:
                'Melyik állítás igaz a B-tree indexre SQL adatbázisok esetében?',
            kerdesek: [
                {
                    kerdes: 'Kifejezetten szöveg alapú keresésekhez optimalizált.',
                    eldont: 0,
                },
                {
                    kerdes: 'A B-tree indexek csak egyedi kulcsokhoz használhatók.',
                    eldont: 0,
                },
                {
                    kerdes: 'Hatékony a tartomány lekérdezésekhez (pl. WHERE x BETWEEN y AND z).',
                    eldont: 1,
                },
                {
                    kerdes: 'A B-tree nem alkalmas a sorrend szerinti keresésekre.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A B-tree index ideális tartomány- vagy sorrend szerinti lekérdezésekhez. Az adatokat strukturált módon tárolja, így gyors a keresés, beszúrás és törlés.',
        },
        {
            fokerdes:
                'Mely módszerek segítik egy SQL lekérdezés teljesítményének javítását?',
            kerdesek: [
                {
                    kerdes: 'Megfelelő indexek használata a gyakran szűrt oszlopokon',
                    eldont: 1,
                },
                {
                    kerdes: 'SELECT * minden lekérdezésben',
                    eldont: 0,
                },
                {
                    kerdes: 'Lekérdezés-terv (execution plan) elemzése',
                    eldont: 1,
                },
                {
                    kerdes: 'Redundáns al-lekérdezések ismétlése',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'Az indexek segítenek gyorsítani az adatkeresést, míg az execution plan elemzése rávilágít a lekérdezés gyenge pontjaira. A SELECT * és redundáns al-lekérdezések kerülendők, mert felesleges terhelést okoznak.',
        },
        {
            fokerdes:
                'Melyik nem tartozik az adatbázis-tranzakciók ACID tulajdonságai közé?',
            kerdesek: [
                {
                    kerdes: 'Atomiság (Atomicity)',
                    eldont: 1,
                },
                {
                    kerdes: 'Konzisztencia (Consistency)',
                    eldont: 1,
                },
                {
                    kerdes: 'Izoláció (Isolation)',
                    eldont: 1,
                },
                {
                    kerdes: 'Kapcsolhatóság (Connectivity)',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 3,
            indoklas:
                'Az ACID mozaikszó az atomi működésre, konzisztenciára, izolációra és tartósságra utal. A kapcsolhatóság nem része ennek a fogalomkörnek.',
        },
        {
            fokerdes: 'Melyek SQL-ben definiált tranzakciós izolációs szintek?',
            kerdesek: [
                {
                    kerdes: 'READ COMMITTED',
                    eldont: 1,
                },
                {
                    kerdes: 'READ AFTER WRITE',
                    eldont: 0,
                },
                {
                    kerdes: 'REPEATABLE READ',
                    eldont: 1,
                },
                {
                    kerdes: 'SIMPLE READ',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'Az SQL szabvány négy izolációs szintet definiál: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ és SERIALIZABLE. A READ AFTER WRITE és SIMPLE READ nem részei a hivatalos szabványnak.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás nem vonható vissza (nem lehet ROLLBACK-kel visszaállítani)?',
            kerdesek: [
                {
                    kerdes: 'DELETE FROM employees WHERE id = 5;',
                    eldont: 0,
                },
                {
                    kerdes: 'UPDATE employees SET salary = salary + 1000;',
                    eldont: 0,
                },
                {
                    kerdes: 'DROP TABLE employees;',
                    eldont: 1,
                },
                {
                    kerdes: 'INSERT INTO employees VALUES (...);',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A DROP TABLE parancs a legtöbb adatbázisban nem vonható vissza tranzakcióból (kivéve ha az adott rendszer támogatja a DDL tranzakciókat, pl. PostgreSQL). A DML utasítások (INSERT, UPDATE, DELETE) viszont visszavonhatók.',
        },
        {
            fokerdes:
                'Mely SQL utasítások váltanak ki implicit COMMIT-et (végrehajtást)?',
            kerdesek: [
                {
                    kerdes: 'DROP TABLE',
                    eldont: 1,
                },
                {
                    kerdes: 'ALTER TABLE',
                    eldont: 1,
                },
                {
                    kerdes: 'INSERT',
                    eldont: 0,
                },
                {
                    kerdes: 'SELECT',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A legtöbb adatbázis-kezelő rendszer (pl. Oracle, MySQL) automatikusan COMMIT-ot hajt végre bizonyos DDL (Data Definition Language) utasításoknál, például DROP vagy ALTER parancsok esetén.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás zárja le a tranzakciót és véglegesíti a benne szereplő műveleteket?',
            kerdesek: [
                {
                    kerdes: 'START TRANSACTION',
                    eldont: 0,
                },
                {
                    kerdes: 'ROLLBACK',
                    eldont: 0,
                },
                {
                    kerdes: 'COMMIT',
                    eldont: 1,
                },
                {
                    kerdes: 'SAVEPOINT',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A COMMIT utasítás a tranzakció végét jelzi, és véglegesíti a benne végrehajtott módosításokat. A ROLLBACK ezzel szemben visszavonja azokat.',
        },
        {
            fokerdes:
                'Mely SQL utasítások kapcsolódnak közvetlenül a zárolás kezeléséhez?',
            kerdesek: [
                {
                    kerdes: 'LOCK TABLES',
                    eldont: 1,
                },
                {
                    kerdes: 'UNLOCK TABLES',
                    eldont: 1,
                },
                {
                    kerdes: 'REVOKE',
                    eldont: 0,
                },
                {
                    kerdes: 'ROLLBACK',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'LOCK TABLES és UNLOCK TABLES utasításokat használjuk manuális táblazárolásra (pl. MySQL-ben). A `REVOKE` jogosultságokat kezel, a ROLLBACK pedig tranzakciós utasítás.',
        },
        {
            fokerdes:
                'Melyik SQL utasítással lehet egy új tranzakciót elindítani?',
            kerdesek: [
                {
                    kerdes: 'BEGIN TRANSACTION',
                    eldont: 0,
                },
                {
                    kerdes: 'START TRANSACTION',
                    eldont: 1,
                },
                {
                    kerdes: 'NEW SESSION',
                    eldont: 0,
                },
                {
                    kerdes: 'INIT TRANSACTION',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A szabványos SQL és MySQL a START TRANSACTION utasítást használja új tranzakció indítására. Alternatív formája lehet a BEGIN, de az nem minden rendszerben egyenértékű.',
        },
        {
            fokerdes:
                'Milyen szerepet töltenek be a beépített rendszerfelhasználók adatbázis-kezelés során?',
            kerdesek: [
                {
                    kerdes: 'Kezelik az automatikus mentéseket és replikációt.',
                    eldont: 1,
                },
                {
                    kerdes: 'Felhasználói jelszavak titkosítása tartozik hozzájuk.',
                    eldont: 1,
                },
                {
                    kerdes: 'Grafikus felhasználói felület biztosítása.',
                    eldont: 0,
                },
                {
                    kerdes: 'A tranzakciók optimalizálása a felhasználó beavatkozásával.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'A rendszerfelhasználók (pl. mysql.sys, root, replication) fontos feladatokat látnak el, mint replikáció, mentés, jogosultságkezelés. Nem felelősek GUI biztosításáért vagy felhasználói optimalizálásért.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás hoz létre egy új adatbázis-felhasználót?',
            kerdesek: [
                {
                    kerdes: "GRANT USER 'ujfelhasznalo' IDENTIFIED BY 'jelszo';",
                    eldont: 0,
                },
                {
                    kerdes: "CREATE ROLE 'ujfelhasznalo';",
                    eldont: 0,
                },
                {
                    kerdes: "CREATE USER 'ujfelhasznalo' IDENTIFIED BY 'jelszo';",
                    eldont: 1,
                },
                {
                    kerdes: "ADD USER 'ujfelhasznalo' WITH PASSWORD 'jelszo';",
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'CREATE USER parancsot használjuk új adatbázis-felhasználó létrehozására. A GRANT parancs jogosultságot ad, nem hoz létre új felhasználót.',
        },
        {
            fokerdes:
                'Mely SQL utasítások kapcsolódnak közvetlenül a jogosultságkezeléshez?',
            kerdesek: [
                {
                    kerdes: 'SHOW GRANTS',
                    eldont: 1,
                },
                {
                    kerdes: "GRANT SELECT ON adatbazis.tabla TO 'user';",
                    eldont: 1,
                },
                {
                    kerdes: 'DROP DATABASE jogosultsagok;',
                    eldont: 0,
                },
                {
                    kerdes: 'CREATE INDEX ON tabla (oszlop);',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'GRANT parancs jogosultságot ad, míg a SHOW GRANTS megmutatja, milyen jogokkal rendelkezik egy felhasználó. A másik két parancs nem jogosultságkezeléssel kapcsolatos.',
        },
        {
            fokerdes: 'Mi a célja az SQL-ben definiált szerepköröknek (ROLE)?',
            kerdesek: [
                {
                    kerdes: 'Az adatbázis sémák verziókövetését segítik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Felhasználók csoportos jogosultságkezelését szolgálják.',
                    eldont: 1,
                },
                {
                    kerdes: 'Segítik a replikációs műveletek gyorsítását.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adatbázisok közötti kapcsolatokat tárolják.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A szerepkörök (ROLE-ok) lehetővé teszik több felhasználó számára ugyanazon jogosultságok öröklését, így egyszerűsítik a jogosultságkezelést.',
        },
        {
            fokerdes:
                'Mely SQL utasításokat használjuk szerepkörök kezelésére?',
            kerdesek: [
                {
                    kerdes: "CREATE ROLE 'olvaso';",
                    eldont: 1,
                },
                {
                    kerdes: "DROP ROLE 'admin';",
                    eldont: 1,
                },
                {
                    kerdes: "DELETE USER FROM ROLE 'admin';",
                    eldont: 0,
                },
                {
                    kerdes: "MODIFY ROLE 'user';",
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 2,
            indoklas:
                'CREATE ROLE és DROP ROLE a szerepkörök létrehozására és törlésére szolgálnak. A SET ROLE segítségével szerepkört lehet aktiválni. A DELETE USER FROM ROLE és MODIFY ROLE nem létező parancsok.',
        },
        {
            fokerdes:
                'Melyik SQL utasítással hozható létre egy nézettábla (view)?',
            kerdesek: [
                {
                    kerdes: 'CREATE VIEW nev AS SELECT * FROM tabla;',
                    eldont: 1,
                },
                {
                    kerdes: 'CREATE TABLE VIEW nev AS SELECT * FROM tabla;',
                    eldont: 0,
                },
                {
                    kerdes: 'MAKE VIEW nev FROM tabla;',
                    eldont: 0,
                },
                {
                    kerdes: 'VIEW CREATE nev FROM SELECT;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A CREATE VIEW utasítást használjuk nézettábla létrehozására.',
        },
        {
            fokerdes:
                'Melyik SQL utasítás használható tárolt eljárás (stored procedure) létrehozására?',
            kerdesek: [
                {
                    kerdes: 'CREATE FUNCTION eljaras() BEGIN ... END;',
                    eldont: 0,
                },
                {
                    kerdes: 'CREATE PROCEDURE eljaras() BEGIN ... END;',
                    eldont: 1,
                },
                {
                    kerdes: 'DEFINE PROCEDURE eljaras() DO ... END;',
                    eldont: 0,
                },
                {
                    kerdes: 'MAKE FUNCTION eljaras() RETURNS VOID;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A CREATE PROCEDURE parancs hoz létre tárolt eljárást. A CREATE FUNCTION függvényt hoz létre, nem eljárást.',
        },
        {
            fokerdes: 'Melyik állítás igaz az SQL triggerekre?',
            kerdesek: [
                {
                    kerdes: 'A triggerek kézzel meghívható eljárások, amelyeket a felhasználó futtat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A triggerek automatikusan végrehajtódnak bizonyos eseményekre (pl. INSERT, UPDATE).',
                    eldont: 1,
                },
                {
                    kerdes: 'A triggerek csak SELECT műveletekre alkalmazhatók.',
                    eldont: 0,
                },
                {
                    kerdes: 'Triggerek nem tartalmazhatnak IF vagy CASE szerkezetet.',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                'A triggerek automatikusan hajtódnak végre, ha meghatározott adatbázis-esemény történik.',
        },
        {
            fokerdes:
                'Melyik utasítással törölhető egy tárolt függvény (stored function)?',
            kerdesek: [
                {
                    kerdes: 'DROP FUNCTION fuggveny_nev;',
                    eldont: 1,
                },
                {
                    kerdes: 'DELETE FUNCTION fuggveny_nev;',
                    eldont: 0,
                },
                {
                    kerdes: 'REMOVE FUNCTION fuggveny_nev;',
                    eldont: 0,
                },
                {
                    kerdes: 'DROP PROCEDURE fuggveny_nev;',
                    eldont: 0,
                },
            ],
            kep: 'https://mortoff.hu/files/articles/0/3/3/33/_thumb/20211027155712-61795ab861c5a-modern-adatbazisok-masolat-big_jpg.jpg?v=1737561955',
            helyes: 1,
            indoklas:
                '`DROP FUNCTION` parancs használható tárolt függvények eltávolítására.',
        },
    ],
];
