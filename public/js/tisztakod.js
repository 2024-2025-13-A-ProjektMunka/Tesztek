let tisztakod = [
    'Tiszta kód alapelvek',
    3,
    [
        {
            fokerdes: 'Mi a tiszta kód (Clean Code) egyik alapelve?',
            kerdesek: [
                {
                    kerdes: ' A kódnak rövidnek kell lennie, minden áron.',
                    eldont: 0,
                },
                {
                    kerdes: 'A kódnak könnyen olvashatónak és érthetőnek kell lennie.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az a jó kód, amit csak a szerzője ért.',
                    eldont: 0,
                },
                {
                    kerdes: 'Minél bonyolultabb egy kód, annál hatékonyabb.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 1,
            indoklas:
                'A tiszta kód egyik fő célja az olvashatóság és az érthetőség. Nem a kódsorok száma számít, hanem hogy más fejlesztők könnyen megértsék és fenntartható legyen. A bonyolultság és az egyéni megértés nem előny, hanem probléma.',
        },
        {
            fokerdes: 'Melyik állítás igaz a jól elnevezett változókra?',
            kerdesek: [
                {
                    kerdes: 'A változónévnek rövidnek kell lennie, például x vagy a.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy jó változónév kifejezi a változó célját.',
                    eldont: 1,
                },
                {
                    kerdes: 'A változók nevei lehetnek tetszőleges karakterek sorozatai, mert csak a program működése számít.',
                    eldont: 0,
                },
                {
                    kerdes: 'A változók neveit lehetőleg számokkal kell ellátni (pl. var1, var2).',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 1,
            indoklas:
                'Egy jól elnevezett változó leírja a célját és használatát, így megkönnyíti a kód olvasását és megértését. A túl rövid, értelmetlen vagy számozott változónevek csökkentik az olvashatóságot és növelik a hibalehetőséget.',
        },
        {
            fokerdes: 'Melyik két állítás igaz a tiszta kóddal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A függvényeknek egyértelmű, jól meghatározott céljuk kell, hogy legyen.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kommentek mindig szükségesek, mert a jó kódot csak így lehet megérteni.',
                    eldont: 0,
                },
                {
                    kerdes: ' A hosszú és összetett függvények előnyösebbek, mert kevesebb függvényhívást igényelnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A duplikált kódokat el kell kerülni, mert rontják a kód karbantarthatóságát.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A tiszta kódban a függvényeknek egyértelmű céljuk van, és a kódban kerülni kell a duplikációt, mert az növeli a hibák esélyét és megnehezíti a karbantartást. A kommentek nem mindig szükségesek, mert a jó kód önmagát dokumentálja. A hosszú, összetett függvények helyett kisebb, jól elkülönített funkciókat kell használni.',
        },
        {
            fokerdes: 'Melyik két állítás igaz a kódszagokra ("code smells")?',
            kerdesek: [
                {
                    kerdes: 'A kódszagok olyan problémák, amelyek hosszú távon csökkenthetik a kód minőségét. ',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha egy kód működik, akkor biztosan nincs benne kódszag. ',
                    eldont: 0,
                },
                {
                    kerdes: 'A feleslegesen hosszú osztályok és függvények tipikus példái a kódszagoknak.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kódszagokat figyelmen kívül lehet hagyni, mert azok csak esztétikai problémák.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A kódszagok olyan jelek, amelyek arra utalnak, hogy a kód karbantarthatósága vagy érthetősége problémás lehet. Ezek közé tartozik például a túlzottan hosszú osztályok és függvények. Egy működő kód is tartalmazhat kódszagokat, és ezek hosszú távon problémákat okozhatnak.',
        },
        {
            fokerdes: 'Melyik a jó elnevezési gyakorlat a tiszta kódban?',
            kerdesek: [
                {
                    kerdes: 'A változók nevei legyenek rövidek, például a, b, c.',
                    eldont: 0,
                },
                {
                    kerdes: 'A változók nevei tükrözzék a szerepüket és jelentésüket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A függvénynevek tartalmazzanak technikai részleteket, például _internalProcessData().',
                    eldont: 0,
                },
                {
                    kerdes: 'A konstansok és változók nevei lehetőleg azonosak legyenek, mert így könnyebb kitalálni őket.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 1,
            indoklas:
                'A változók és függvények neveinek leíró jellegűnek kell lenniük, hogy a kód olvasható és érthető legyen. A túl rövid nevek nem adnak elég információt. A technikai részleteket általában kerülni kell a függvénynevekben, és az azonos elnevezésű változók és konstansok zavart kelthetnek.',
        },
        {
            fokerdes: 'Melyik állítás igaz a jól megírt függvényekre?',
            kerdesek: [
                {
                    kerdes: ' Egy függvénynek csak egyetlen dolgot kell csinálnia.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy függvény lehetőleg minél hosszabb legyen, hogy több logikát tartalmazzon.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy függvénynek tartalmaznia kell legalább egy print() utasítást a jobb átláthatóság érdekében.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy függvénynek lehetőleg minél kevesebb paramétere legyen.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A jó függvény egyetlen feladatot végez el, így könnyebben érthető és tesztelhető. A rövidebb és letisztult függvények jobbak, mivel könnyebb őket módosítani és újrafelhasználni. A felesleges print() utasításokat el kell kerülni, és a kevesebb paraméter segíti az egyszerűséget.',
        },
        {
            fokerdes:
                'Melyik két állítás igaz a függvények megfelelő elnevezésével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Egy függvénynév tükrözze a függvény célját.',
                    eldont: 1,
                },
                {
                    kerdes: 'A függvényneveknek tartalmazniuk kell az adott programozási nyelv kulcsszavait. ',
                    eldont: 0,
                },
                {
                    kerdes: 'A függvénynév lehetőleg tartalmazzon igét vagy cselekvést kifejező szót.',
                    eldont: 1,
                },
                {
                    kerdes: 'A rövidítések mindig jók, mert csökkentik a karakterek számát a kódban.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'Egy jó függvénynév világosan kifejezi, hogy mit csinál a függvény, és gyakran tartalmaz igét (pl. calculateTotal(), fetchData()). A kulcsszavakat és felesleges rövidítéseket kerülni kell, mert ezek csökkentik az olvashatóságot.',
        },
        {
            fokerdes:
                'Melyik két állítás igaz a függvények tiszta kódbeli alkalmazására?',
            kerdesek: [
                {
                    kerdes: 'Egy függvény lehetőleg ne változtasson meg külső változókat.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy függvényen belül minél több dolgot kell elvégezni, hogy csökkentsük a függvényhívások számát.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy függvényben az egymást követő műveletek logikus sorrendben legyenek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha egy függvény nagyon hosszú, akkor azt inkább egyetlen helyen használjuk, hogy ne kelljen újra megérteni.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'Egy függvénynek lehetőleg ne legyenek mellékhatásai, vagyis ne módosítson külső változókat, mert ez kiszámíthatatlan viselkedéshez vezethet. A műveletek logikus sorrendje segíti a kód olvashatóságát és megértését. A túl hosszú függvényeket érdemes kisebb, jól érthető részekre bontani.',
        },
        {
            fokerdes: 'Mi a megfelelő kódformázás egyik alapelve?',
            kerdesek: [
                {
                    kerdes: 'A kódot lehetőleg egyetlen hosszú sorba kell írni, hogy csökkentsük a fájl méretét.',
                    eldont: 0,
                },
                {
                    kerdes: 'A megfelelő behúzás és soronkénti tagolás segíti az olvashatóságot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kommentek minden egyes sornál szükségesek, mert a kód önmagában nem lehet érthető.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az üres sorokat kerülni kell, mert csak helyet foglalnak a fájlban.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 1,
            indoklas:
                'A tiszta kód olvasható és rendezett, ezért a behúzások és a logikus tagolás segítenek a megértésben. Az egyetlen sorba írt kód vagy a teljesen kommentekre támaszkodó megközelítés nem előnyös. Az üres sorok segíthetnek a logikai blokkok elkülönítésében.',
        },
        {
            fokerdes: 'Melyik a helyes kódszervezési elv?',
            kerdesek: [
                {
                    kerdes: 'Egy függvény vagy osztály tartalmát vizuálisan is el kell különíteni megfelelő whitespace-ekkel.',
                    eldont: 1,
                },
                {
                    kerdes: 'A sorok hossza lehetőleg ne haladja meg a 80-120 karaktert.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden kódblokkot egy új fájlba kell írni, függetlenül annak méretétől.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az összes változót egy fájl tetején kell deklarálni, akkor is, ha csak egy adott blokkban használjuk őket.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A megfelelő whitespace-ek és a rövid sorok segítenek a kód olvashatóságában. A túl hosszú sorok nehezítik az átláthatóságot, különösen kisebb képernyőkön. A túlzott fájlfelosztás vagy az indokolatlan globális változók rontják a kód szervezettségét.',
        },
        {
            fokerdes:
                'Melyik két állítás igaz a függvények és ciklusok formázásával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A ciklusok és feltételes blokkok belsejét megfelelően behúzva kell formázni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hosszabb függvényeket vizuálisan is érdemes kisebb logikai egységekre bontani.',
                    eldont: 1,
                },
                {
                    kerdes: 'A függvényeken belüli kódsorokat teljesen balra kell igazítani a helytakarékosság érdekében.',
                    eldont: 0,
                },
                {
                    kerdes: 'A függvényeket mindig egyetlen sorban kell definiálni, hogy kevesebb helyet foglaljanak.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A behúzás segíti az olvashatóságot, és a hosszabb függvényekben a logikai részek elkülönítése segít a megértésben. A teljes balra igazítás és az egy soros függvénydefiníciók viszont rontják az áttekinthetőséget.',
        },
        {
            fokerdes:
                'Melyik két állítás igaz a kódsorok elrendezésére vonatkozóan?',
            kerdesek: [
                {
                    kerdes: 'A változók deklarálását mindig a lehető legközelebb kell tenni az első használatukhoz.',
                    eldont: 1,
                },
                {
                    kerdes: 'A túl hosszú kifejezéseket érdemes több sorba tördelni.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az összes deklarációt egy helyen kell tartani, még akkor is, ha később nem egyértelmű a szerepük.',
                    eldont: 0,
                },
                {
                    kerdes: 'A lehető legkevesebb whitespace-t kell használni, hogy a fájlok kisebbek legyenek.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A változókat ott érdemes deklarálni, ahol először használjuk őket, hogy csökkentsük a felesleges kódbejárást. A hosszú kifejezések sorokra bontása javítja az olvashatóságot. Az indokolatlanul egy helyre csoportosított deklarációk és a túlzott whitespace takarékoskodás rontja a kód érthetőségét.',
        },
        {
            fokerdes:
                'Mi a tiszta kód egyik alapelve külső könyvtárak használatakor?',
            kerdesek: [
                {
                    kerdes: 'Mindig saját kódot kell írni, külső könyvtárakat nem szabad használni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A külső könyvtárakat dokumentálni kell, és világosan jelezni, hogy mire használjuk őket.',
                    eldont: 1,
                },
                {
                    kerdes: 'A külső könyvtárakat szabadon frissíthetjük bármikor, anélkül hogy tesztelnénk a kódot.',
                    eldont: 0,
                },
                {
                    kerdes: 'A külső könyvtárak kódját mindig teljes egészében másoljuk be a saját projektünkbe.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 1,
            indoklas:
                'A külső könyvtárak használata megkönnyítheti a fejlesztést, de fontos dokumentálni őket, hogy más fejlesztők is megértsék a szerepüket. A könyvtárak frissítését mindig tesztelni kell, és a másolás helyett a függőségkezelőt kell használni.',
        },
        {
            fokerdes:
                'Hogyan kezeljük a külső API-kat a tiszta kód elvei szerint?',
            kerdesek: [
                {
                    kerdes: 'Az API hívásokat közvetlenül a kódban, mindenhol elhelyezhetjük.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy külön interfészt vagy réteget érdemes létrehozni az API hívásokhoz.',
                    eldont: 1,
                },
                {
                    kerdes: 'Nem szükséges kezelni az API-hívások hibáit, mert azok mindig megfelelő választ adnak.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az API által visszaadott adatokat érdemes validálni és szükség esetén átalakítani.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'Az API-hívásokat egy külön rétegbe szervezve átláthatóbb és könnyebben módosítható a kód. Az adatok validálása segít elkerülni a hibákat, mivel az API-k válaszai változhatnak vagy tartalmazhatnak hibás adatokat.',
        },
        {
            fokerdes:
                'Melyik két állítás igaz a külső könyvtárak és függőségek megfelelő kezelésével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A függőségeket folyamatosan frissíteni kell, de minden változás előtt tesztelni kell a kódot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A külső könyvtárakhoz írt adapterek segíthetnek a kód függetlenítésében és karbantarthatóságában.',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha egy külső könyvtár megszűnik vagy nem frissül, azt mindig tovább kell használni, mert már beépült a kódba.',
                    eldont: 0,
                },
                {
                    kerdes: 'A külső függőségeket mindig közvetlenül kell meghívni, külön réteg létrehozása felesleges.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A függőségek rendszeres frissítése segít a biztonsági problémák elkerülésében, de mindig tesztelni kell a frissítéseket. Az adapterek használata segít elkerülni a külső könyvtárakra való túlzott kötődést, így könnyebb később cserélni vagy eltávolítani őket.',
        },
        {
            fokerdes:
                'Melyik két állítás igaz a határok kezelésére a tiszta kódban?',
            kerdesek: [
                {
                    kerdes: 'A külső rendszerek hatásait izolálni kell, hogy könnyebben tesztelhető legyen a saját kódunk.',
                    eldont: 1,
                },
                {
                    kerdes: 'A külső rendszerekből érkező adatokat mindig megbízhatónak kell tekinteni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha egy külső rendszer API-ja megváltozik, akkor azonnal át kell írni az összes kódrészletet, ahol használjuk.',
                    eldont: 0,
                },
                {
                    kerdes: 'A határok kezelésekor érdemes egy köztes absztrakciós réteget létrehozni, hogy csökkentsük a függőségeket.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.jtechlog.hu/artifacts/posts/2020-03-03-clean-architecture/clean-architecture.jpg',
            helyes: 2,
            indoklas:
                'A külső rendszerek hatásainak izolálása megkönnyíti a tesztelést és a kód karbantartását. Az adatok ellenőrzése mindig szükséges, mert a külső rendszerek nem garantálnak mindig helyes vagy biztonságos adatokat. Egy köztes réteg (például adapter vagy interfész) segíthet csökkenteni a közvetlen függőségeket és megkönnyíti a későbbi módosításokat.',
        },
        {
            fokerdes:
                'Melyik elnevezés a legkevésbé informatív egy fájl törlését végző függvény esetén?',
            kerdesek: [
                {
                    kerdes: 'deleteFile()',
                    eldont: 0,
                },
                {
                    kerdes: 'removeDocument()',
                    eldont: 0,
                },
                {
                    kerdes: 'doStuff()',
                    eldont: 1,
                },
                {
                    kerdes: 'eraseFile(path)',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 1,
            indoklas:
                'A doStuff() egy általános, semmitmondó elnevezés, amelyből nem derül ki, hogy pontosan mit csinál a függvény. A jó elnevezés célorientált és leírja a funkciót.',
        },
        {
            fokerdes:
                'Melyek a jó változónevek jellemzői a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'Értelmesek és jól tükrözik a változó szerepét.',
                    eldont: 1,
                },
                {
                    kerdes: 'Lehetőleg rövidek, egybetűsek (pl. x, y).',
                    eldont: 0,
                },
                {
                    kerdes: 'Következetesen használnak konvenciókat (pl. camelCase).',
                    eldont: 1,
                },
                {
                    kerdes: 'Használjanak minél több rövidítést a helytakarékosság érdekében.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 2,
            indoklas:
                'A jó változónevek legyenek érthetőek és tükrözzék a szerepüket. A konzisztens névhasználat olvashatóbbá és karbantarthatóbbá teszi a kódot. Az egybetűs vagy rövidített nevek csak speciális esetekben (pl. ciklusindexeknél) elfogadhatók.',
        },
        {
            fokerdes:
                'Melyik elnevezés felel meg legjobban a Clean Code szemléletnek egy e-mail érvényességét ellenőrző függvény esetén?',
            kerdesek: [
                {
                    kerdes: 'check()',
                    eldont: 0,
                },
                {
                    kerdes: 'email()',
                    eldont: 0,
                },
                {
                    kerdes: 'validateEmail()',
                    eldont: 1,
                },
                {
                    kerdes: 'func1()',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 1,
            indoklas:
                'A validateEmail() egyértelműen utal arra, mit csinál a függvény. A Clean Code egyik alapelve, hogy a nevek tükrözzék a céljukat. Az általános vagy semmitmondó nevek (pl. func1) elkerülendők.',
        },
        {
            fokerdes:
                'Melyek tipikus hibák a változó- vagy függvényelnevezés során a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'Túl általános vagy homályos nevek használata.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hasonló nevű, de eltérő funkciójú változók összekeverése.',
                    eldont: 1,
                },
                {
                    kerdes: 'Rövid, de egyértelmű nevek (pl. maxValue) alkalmazása.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egységes névkonvenciók követése (pl. camelCase).',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 2,
            indoklas:
                'A homályos és zavaró elnevezések csökkentik a kód olvashatóságát, és növelik a hibalehetőségeket. A konzisztens és világos elnevezés elősegíti a megértést és karbantartást.',
        },
        {
            fokerdes:
                'Melyik esetben tekinthető hasznosnak egy komment a Clean Code irányelvei szerint?',
            kerdesek: [
                {
                    kerdes: 'Ha elmagyarázza a kód működését, mert a kód nehezen olvasható.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha elrejti az ideiglenesen kikommentelt, hibás kódrészeket.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ha jogi vagy licencinformációkat közöl a fájl elején.',
                    eldont: 1,
                },
                {
                    kerdes: 'Ha a komment helyettesíti a nem megfelelően elnevezett változókat.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 1,
            indoklas:
                'A kommentek leginkább akkor hasznosak, ha olyan információt adnak át, amit nem lehet a kódból kiolvasni, például jogi megjegyzések vagy különleges viselkedések dokumentálása. A rossz kódot inkább javítani kell, mint kommentekkel magyarázni.',
        },
        {
            fokerdes:
                'Melyek tekinthetők a jó kódformázás jellemzőinek a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'Következetes behúzás és whitespace használat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A függvények egyetlen képernyőn belül elférnek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minél több logikát zsúfolunk egy sorba a tömörség érdekében.',
                    eldont: 0,
                },
                {
                    kerdes: 'A formázást a programozási nyelv automatikusan megoldja, nem számít.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 2,
            indoklas:
                'A jó formázás megkönnyíti a kód olvasását, átláthatóságát. A rövid, jól tagolt függvények és következetes formázás alapvető. Tömörség helyett az olvashatóság a fontosabb.',
        },
        {
            fokerdes:
                'Melyik típusú komment nem javasolt a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'Amely a függvény célját tömören, világosan elmagyarázza.',
                    eldont: 0,
                },
                {
                    kerdes: 'Amely régi kódrészeket rejt el kommentként.',
                    eldont: 1,
                },
                {
                    kerdes: 'Amely figyelmeztet egy ismert hibára vagy korlátozásra.',
                    eldont: 0,
                },
                {
                    kerdes: 'Amely licencfeltételeket tartalmaz a fájl elején.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 1,
            indoklas:
                'A kikommentelt kódrészek összezavarják az olvasót és elavult információkat tartalmazhatnak. Ezeket inkább törölni vagy verziókövető rendszerben tárolni érdemes.',
        },
        {
            fokerdes:
                'Mely állítások igazak a jól megírt kommentekre a Clean Code elvei szerint?',
            kerdesek: [
                {
                    kerdes: 'Kiegészítik a kódot, nem helyettesítik azt.',
                    eldont: 1,
                },
                {
                    kerdes: 'Képesek kiemelni a szokatlan megoldásokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A komment célja az, hogy megmagyarázza a rosszul megírt kódot.',
                    eldont: 0,
                },
                {
                    kerdes: 'Minél hosszabb, annál jobb a komment.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 2,
            indoklas:
                'A jó kommentek nem magyarázzák a rossz kódot, hanem segítenek a szokatlan döntések megértésében. Tömören, világosan egészítik ki a kódot, nem a hiányosságait fedik el.',
        },
        {
            fokerdes:
                'Melyik állítás tükrözi leginkább a Clean Code szemléletét az objektumokkal és adatstruktúrákkal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az objektumok adatot és viselkedést egyesítenek, míg az adatstruktúrák csak adatot tárolnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az objektumok nem tartalmazhatnak metódusokat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adatstruktúrák kizárólag osztályokban létezhetnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A jó objektumoknak csak publikus mezői vannak.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 1,
            indoklas:
                'A Clean Code szerint az objektumok felelőssége az állapotuk védelme és viselkedés biztosítása, míg az adatstruktúrák inkább adatok tárolására szolgálnak és kevésbé tartalmaznak viselkedést.',
        },
        {
            fokerdes:
                'Mely állítások tükrözik a Clean Code ajánlásait a hibakezeléssel kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A kivételeket használjuk, ne hibakódokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hibakezelés ne zavarja meg az üzleti logikát.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hibák elhallgatása előnyös, hogy ne zavarjuk a felhasználót.',
                    eldont: 0,
                },
                {
                    kerdes: 'A try/catch blokkokat minden függvénybe tegyük, még ha nincs is kivétel.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 2,
            indoklas:
                'A Clean Code javaslata szerint a hibákat kivételekkel kell kezelni, nem visszatérési értékekkel. A hibakezelésnek tisztának és elválasztottnak kell lennie az üzleti logikától.',
        },
        {
            fokerdes:
                'Melyik megközelítés felel meg leginkább a Clean Code elveinek adatstruktúrák használatánál?',
            kerdesek: [
                {
                    kerdes: 'Az adatstruktúrák legyenek nyíltak minden módosítás előtt.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adatstruktúrákat gyakran örököljük és bővítjük metódusokkal.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az adatstruktúrák publikus mezőket tartalmazhatnak viselkedés nélkül.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az adatstruktúrák minden viselkedést is tartalmazzanak, akárcsak az objektumok.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 1,
            indoklas:
                'A Clean Code megkülönbözteti az objektumokat és az adatstruktúrákat. Az utóbbiak főként adatok tárolására szolgálnak, viselkedés nélkül, gyakran publikus mezőkkel.',
        },
        {
            fokerdes:
                'Melyik állítások jellemzőek a hibás hibakezelésre a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'A kivételek elkapása után a hibák figyelmen kívül hagyása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kivételek naplózása, de nem továbbadása vagy újradobása.',
                    eldont: 1,
                },
                {
                    kerdes: 'A hibakezelést elkülönítjük az üzleti logikától.',
                    eldont: 0,
                },
                {
                    kerdes: 'Specifikus kivételosztályokat használunk különféle hibákra.',
                    eldont: 0,
                },
            ],
            kep: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqgs49kuky6z7zp744sem.png',
            helyes: 2,
            indoklas:
                'A hibakezelés egyik leggyakoribb hibája, hogy a kivételeket elkapjuk, de semmit nem teszünk velük. Ez hibák elfedéséhez és nehéz hibakereséshez vezethet.',
        },
        {
            fokerdes:
                'Mit javasol a Clean Code a külső könyvtárak (pl. API-k, framework-ök) használatára vonatkozóan?',
            kerdesek: [
                {
                    kerdes: 'Minél több API-függőséget közvetlenül a kódba kell írni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A külső könyvtárakat közvetlenül kell meghívni minden osztályból.',
                    eldont: 0,
                },
                {
                    kerdes: 'A külső kódot határok mögé kell rejteni (pl. adapter osztály).',
                    eldont: 1,
                },
                {
                    kerdes: 'A könyvtárak verziója nem számít, ha működik.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 1,
            indoklas:
                'A Clean Code elve szerint a külső kódot el kell szigetelni a rendszer logikájától, például adapterekkel. Így elkerülhetők a későbbi frissítések miatti kódmódosítások.',
        },
        {
            fokerdes:
                'Melyik megközelítés felel meg a Clean Code elveinek külső könyvtárak használatakor?',
            kerdesek: [
                {
                    kerdes: 'A külső könyvtárak típusait közvetlenül használd a saját kódodban mindenhol.',
                    eldont: 0,
                },
                {
                    kerdes: 'Különítsd el a külső könyvtár használatát, így könnyebb cserélni később.',
                    eldont: 1,
                },
                {
                    kerdes: 'Tölts be minél több könyvtárat, hogy több funkció legyen elérhető.',
                    eldont: 0,
                },
                {
                    kerdes: 'A könyvtár frissítése után azonnal használd az új API-t mindenhol.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 1,
            indoklas:
                'A Clean Code javasolja a külső könyvtárak köré réteg (wrapper) írását, hogy a projekt független maradjon a könyvtár konkrét implementációjától. Így ha változik vagy lecserélődik, nem kell mindenhol módosítani.',
        },
        {
            fokerdes:
                'Melyek az egységtesztek (unit tesztek) fő jellemzői a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'Gyorsan lefutnak és izoláltak más kódtól.',
                    eldont: 1,
                },
                {
                    kerdes: 'Hálózati kapcsolatot igényelnek a teljes rendszer teszteléséhez.',
                    eldont: 0,
                },
                {
                    kerdes: 'Konkrét viselkedést tesztelnek, nem implementációs részleteket.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden unit tesztnek UI-t is tartalmaznia kell.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                'A jó unit tesztek gyorsak, determinisztikusak és nem függenek más moduloktól. Nem a teljes rendszert, hanem egyetlen komponens viselkedését ellenőrzik.',
        },
        {
            fokerdes:
                'Melyek a jól megírt egységtesztek jellemzői a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'Gyorsan lefutnak.',
                    eldont: 1,
                },
                {
                    kerdes: 'Függenek az adatbázistól vagy más külső rendszertől.',
                    eldont: 0,
                },
                {
                    kerdes: 'Könnyen olvashatók és karbantarthatók.',
                    eldont: 1,
                },
                {
                    kerdes: 'Egyetlen teszt több különböző funkciót is ellenőrizzen egyszerre.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                'A jó egységtesztek gyorsak, függetlenek és könnyen értelmezhetők. A tesztek ne függjenek külső forrásoktól, és egyértelműen egyetlen felelősségük legyen.',
        },
        {
            fokerdes:
                "Mit jelent a 'tesztek karbantarthatósága' a Clean Code szerint?",
            kerdesek: [
                {
                    kerdes: 'A tesztek ne változzanak, ha a viselkedés nem változik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden teszt új példányt generáljon az adatbázisban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A tesztek csak hibákat írjanak ki a konzolra.',
                    eldont: 0,
                },
                {
                    kerdes: 'A teszteket ritkán kell futtatni, főleg kiadás előtt.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 1,
            indoklas:
                'A Clean Code szerint a teszteknek stabilnak kell lenniük. Ha nem változik a szoftver viselkedése, akkor a teszt se változzon — ez biztosítja a kód bizalmasságát és megbízhatóságát.',
        },
        {
            fokerdes:
                'Mi a célja a Clean Code szerint a boundary osztályoknak?',
            kerdesek: [
                {
                    kerdes: 'Az adatbázis indexek optimalizálása.',
                    eldont: 0,
                },
                {
                    kerdes: 'A külső könyvtárak és rendszerek elválasztása a saját üzleti logikától.',
                    eldont: 1,
                },
                {
                    kerdes: 'A UI elemek renderelése.',
                    eldont: 0,
                },
                {
                    kerdes: 'A memóriahasználat csökkentése.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 1,
            indoklas:
                'A boundary osztályok olyan rétegek, amelyek elválasztják a rendszerünket a külső forrásoktól (pl. API-k, könyvtárak). Ez elősegíti a kód újrafelhasználhatóságát és karbantarthatóságát.',
        },
        {
            fokerdes:
                'Hogyan kezeljük a külső API-kat egységtesztelés során a Clean Code elvei szerint?',
            kerdesek: [
                {
                    kerdes: 'Mock objektumokat használunk a külső hívások helyett.',
                    eldont: 1,
                },
                {
                    kerdes: 'A tesztek közvetlenül hívják az élő API-t a valós válaszokért.',
                    eldont: 0,
                },
                {
                    kerdes: 'Külön interfészen keresztül absztraháljuk az API-t.',
                    eldont: 1,
                },
                {
                    kerdes: 'Kihagyjuk a külső API-kat, nem szükséges őket tesztelni.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                'Külső API-k egységtesztelése során a Clean Code elve az, hogy ezeket ne közvetlenül teszteljük. Ehelyett használjunk mockokat vagy adaptereket, hogy a teszt izolált és gyors maradjon. Az egységtesztek egy fázisában a mock objektumok összetett, bonyolult viselkedéssel bíró objektumokat helyettesítenek olyan esetekben, amikor nem praktikus vagy lehetetlen az eredeti objektumokat használni.',
        },
        {
            fokerdes:
                'Mely állítások jellemzőek a rosszul megírt egységtesztekre?',
            kerdesek: [
                {
                    kerdes: 'A tesztek sorrendje befolyásolja az eredményt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A teszt kimenete eltér ugyanazon bemenetre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A tesztek dokumentálják a rendszer viselkedését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A tesztek elszigetelik az üzleti logikát.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                'A nem determinisztikus, más tesztektől függő tesztek hibásak és megbízhatatlanok. Egy jó teszt mindig ugyanazt az eredményt adja adott bemenetre, és független más tesztektől.',
        },
        {
            fokerdes:
                "Mit jelent a 'Single Responsibility Principle' (SRP) a Clean Code-ban?",
            kerdesek: [
                {
                    kerdes: 'Az osztály több különböző funkciót is kezelhet, ha azok logikusan összefüggnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztálynak csak egyetlen okból szabad megváltoznia.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztály egyetlen metódust tartalmazhat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztály minden adatot közvetlenül elérhetővé tesz.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 1,
            indoklas:
                'Az SRP szerint minden osztálynak egyetlen felelőssége kell, hogy legyen - vagyis egyetlen okból változhat. Ez csökkenti a kód komplexitását és javítja a karbantarthatóságot.',
        },
        {
            fokerdes:
                'Mely állítások igazak egy jól megírt osztályra a Clean Code szerint?',
            kerdesek: [
                {
                    kerdes: 'A publikus metódusok egy logikus történetet mesélnek el.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden adattagot publikusra kell állítani a könnyű hozzáférés miatt.',
                    eldont: 0,
                },
                {
                    kerdes: 'A metódusokat a használat sorrendjében célszerű elhelyezni.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztályoknak minél több felelősséget kell ellátniuk a hatékonyság érdekében.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                "A jól strukturált osztály 'mesél': a publikus metódusok egy logikus sorrendet követnek, és belső részleteik rejtettek. Ez növeli a kód olvashatóságát és csökkenti a bonyolultságot.",
        },
        {
            fokerdes:
                'Mi a Clean Code álláspontja az osztályok méretével kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'Az osztály lehet bármilyen hosszú, ha működik.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztályok legyenek rövidek, lehetőleg 200 sor alatt.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztályokat sosem szabad újrafelhasználni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A hosszú osztályok könnyebben tesztelhetők.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 1,
            indoklas:
                'A Clean Code elve szerint a kisebb osztályok könnyebben olvashatók, karbantarthatók és tesztelhetők. Ezért javasolt a 200 sor körüli mérethatár.',
        },
        {
            fokerdes:
                'Milyen szempontokat érdemes figyelembe venni egy osztály felelősségi körének kialakításakor?',
            kerdesek: [
                {
                    kerdes: 'Az osztály egyetlen felelősséget lásson el.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztály tartalmazzon minden funkciót, amit a program valaha használhat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az osztály metódusai legyenek szorosan összefüggőek.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az osztály felelősségi köre minél tágabb legyen, hogy rugalmas maradjon.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                'Az osztály felelőssége legyen világos, szűk és összefüggő. A szoros kohézió és egyértelmű felelősség megkönnyíti a karbantartást és a tesztelést.',
        },
        {
            fokerdes: 'Mely állítások igazak az Open/Closed elvre (OCP)?',
            kerdesek: [
                {
                    kerdes: 'A kódot nyitottnak kell tekinteni bővítésre, de zártnak módosításra.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az új funkciókat csak a meglévő kód módosításával szabad hozzáadni.',
                    eldont: 0,
                },
                {
                    kerdes: 'Új viselkedés hozzáadását örökléssel vagy interfészen keresztül kell megoldani.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Open/Closed elv csak frontend alkalmazásokra vonatkozik.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                'Az OCP szerint egy osztály legyen nyitott bővítésre (például új viselkedés hozzáadása), de zárt módosításra, vagyis ne kelljen meglévő kódot átírni. Ez gyakran absztrakt osztályokkal és interfészekkel valósítható meg.',
        },
        {
            fokerdes: 'Mit jelent a Liskov-helyettesítési elv (LSP)?',
            kerdesek: [
                {
                    kerdes: 'Minden osztálynak rendelkeznie kell legalább egy absztrakt metódussal.',
                    eldont: 0,
                },
                {
                    kerdes: 'A szülő osztály példánya helyett bármelyik leszármazott osztály példányát is használhatjuk, anélkül, hogy a program viselkedése megváltozna.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minden metódusnak pontosan ugyanúgy kell működnie, mint a főosztályban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A leszármazott osztályoknak nem szabad felüldefiniálniuk semmit.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 1,
            indoklas:
                'Az LSP azt mondja ki, hogy az alosztályoknak helyettesíthetőnek kell lenniük a szülőosztályukkal. Ez azt jelenti, hogy a kódnak ugyanúgy kell működnie, akár az ősosztályt, akár annak bármelyik leszármazottját használjuk.',
        },
        {
            fokerdes:
                'Mely állítások igazak az Interface Segregation (ISP) és a Dependency Inversion Principle (DIP) elvekre?',
            kerdesek: [
                {
                    kerdes: 'A DIP szerint a magas szintű modulok ne függjenek alacsony szintű moduloktól.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az ISP szerint jobb, ha a kliensek több kisebb interfészt használnak, mint egy nagyot.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az ISP szerint minden osztálynak egyetlen interfészt kell használnia.',
                    eldont: 0,
                },
                {
                    kerdes: 'A DIP azt javasolja, hogy az implementáció függjön a részletektől, ne az absztrakcióktól.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:640/1*h4_BugUpRdyoLbRfeHGS7Q.jpeg',
            helyes: 2,
            indoklas:
                'Az Interface Segregation Principle célja, hogy a kliensek csak azokat a metódusokat ismerjék, amelyekre valóban szükségük van. A Dependency Inversion Principle pedig azt javasolja, hogy az absztrakciók vezéreljék a függőségeket - vagyis mind a magas, mind az alacsony szintű modulok interfészeken keresztül kommunikáljanak.',
        },
    ],
];
