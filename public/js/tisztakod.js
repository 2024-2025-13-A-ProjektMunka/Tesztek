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
            helyes: 2,
            indoklas:
                'A változókat ott érdemes deklarálni, ahol először használjuk őket, hogy csökkentsük a felesleges kódbejárást. A hosszú kifejezések sorokra bontása javítja az olvashatóságot. Az indokolatlanul egy helyre csoportosított deklarációk és a túlzott whitespace takarékoskodás rontja a kód érthetőségét.',
        },
    ],
];
