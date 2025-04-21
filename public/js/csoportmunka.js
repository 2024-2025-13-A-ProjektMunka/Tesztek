let csoportmunka = [
    'Csoportmunka-eszközök, Git',
    0,
    [
        {
            fokerdes: 'Mi a Git fő célja?',
            kerdesek: [
                { kerdes: 'Dokumentumok online tárolása.', eldont: 0 },
                {
                    kerdes: 'Verziókövetés és csapatmunka támogatása.',
                    eldont: 1,
                },
                { kerdes: 'Weboldalak hosztolása.', eldont: 0 },
                { kerdes: 'Programok futtatása a szerveren.', eldont: 0 },
            ],
            helyes: 1,
            kep: 'https://ositcom.com/static/images/images/git-blog-header_1.png',
            indoklas:
                'A Git egy elosztott verziókezelő rendszer, amely lehetővé teszi a forráskód változásainak nyomon követését és csapatmunkát. Nem dokumentumtárként vagy weboldalhosztként szolgál, és nem is programfuttatásra való.',
        },
        {
            fokerdes:
                'Melyik Git parancs inicializál egy új helyi repositoryt?',
            kerdesek: [
                { kerdes: 'git init', eldont: 1 },
                { kerdes: 'git start', eldont: 0 },
                { kerdes: 'git create', eldont: 0 },
                { kerdes: 'git new', eldont: 0 },
            ],
            helyes: 1,
            kep: 'https://www.git-tower.com/learn/media/pages/git/ebook/en/command-line/remote-repositories/introduction/ca91d7d832-1744138177/basic-remote-workflow.png',
            indoklas:
                'A git init parancs egy új helyi Git repositoryt hoz létre az aktuális mappában. A többi válasz helytelen, mert a Git nem ismeri ezeket a parancsokat új repository létrehozására.',
        },
        {
            fokerdes: 'Mely állítások igazak a Git használatával kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A git clone egy meglévő repository másolatát készíti el.',
                    eldont: 1,
                },
                {
                    kerdes: 'A git commit a fájlok módosításait véglegesen elmenti a repositoryban.',
                    eldont: 1,
                },
                {
                    kerdes: 'A git delete véglegesen törli a repositoryt.',
                    eldont: 0,
                },
                {
                    kerdes: 'A git push mindig automatikusan összeolvasztja a változtatásokat konfliktusok nélkül.',
                    eldont: 0,
                },
            ],
            helyes: 2,
            kep: 'https://www.devguide.at/wp-content/uploads/2019/06/git-basic-commands.png',
            indoklas:
                'A git clone egy meglévő repository másolatát hozza létre. A git commit egy új verziót rögzít a helyi repositoryban. A git delete nem létezik, és a repository törlése nem ilyen egyszerű. A git push nem oldja meg automatikusan az esetleges konfliktusokat, ez manuális beavatkozást igényel.',
        },
        {
            fokerdes:
                'Melyik lépés szükséges a Git helyi telepítéséhez Windows rendszeren?',
            kerdesek: [
                {
                    kerdes: 'Letöltjük a Git telepítőt a hivatalos weboldalról.',
                    eldont: 1,
                },
                { kerdes: 'Bejelentkezünk egy GitHub-fiókba.', eldont: 0 },
                { kerdes: 'Telepítjük az MS Office csomagot.', eldont: 0 },
                {
                    kerdes: 'Először újra kell telepíteni az operációs rendszert.',
                    eldont: 0,
                },
            ],
            kep: 'https://blog.ronin.cloud/content/images/2022/01/git-feature.png',
            helyes: 1,
            indoklas:
                'A Git hivatalos oldaláról letölthető a megfelelő telepítő, amellyel egyszerűen elvégezhető a helyi telepítés Windows rendszeren.',
        },
        {
            fokerdes: 'Melyek a Git verziókezelő rendszer alapvető funkciói?',
            kerdesek: [
                { kerdes: 'Verziók létrehozása és visszaállítása.', eldont: 1 },
                {
                    kerdes: 'Csapatmunka távoli repository használatával.',
                    eldont: 1,
                },
                { kerdes: 'Közvetlen kódfuttatás a szerveren.', eldont: 0 },
                { kerdes: 'Csak egyedüli felhasználásra alkalmas.', eldont: 0 },
            ],
            kep: 'https://cdn-images-1.medium.com/max/832/1*UJhBACoeEKH3lxXUpNx6MA.jpeg',
            helyes: 2,
            indoklas:
                'A Git egyik fő funkciója, hogy verziókat kezel, lehetővé téve visszaállítást, és támogatja a csapatmunkát távoli repository-kon keresztül. Nem egy futtatókörnyezet, és nem csak egyéni használatra való.',
        },
        {
            fokerdes:
                'Mely Git parancsok tartoznak az alapértelmezett használathoz?',
            kerdesek: [
                { kerdes: 'git init', eldont: 1 },
                { kerdes: 'git commit', eldont: 1 },
                { kerdes: 'git delete', eldont: 0 },
                { kerdes: 'git transfer', eldont: 0 },
            ],
            kep: 'https://sst.jguni.in/wp-content/uploads/2024/12/How-Does-Git-Work.jpg',
            helyes: 2,
            indoklas:
                'A git init parancs egy új repository-t hoz létre, a git commit pedig a változtatásokat rögzíti. A git delete és git transfer nem létező Git parancsok.',
        },
        {
            fokerdes: 'Mit csinál a git init parancs?',
            kerdesek: [
                {
                    kerdes: 'Letölti a repositoryt egy távoli szerverről.',
                    eldont: 0,
                },
                { kerdes: 'Elindítja a Git szervert.', eldont: 0 },
                {
                    kerdes: 'Inicializál egy új helyi Git repositoryt.',
                    eldont: 1,
                },
                { kerdes: 'Megjeleníti az aktuális ág nevét.', eldont: 0 },
            ],
            kep: 'https://i.ytimg.com/vi/bc3_FL9zWWs/maxresdefault.jpg',
            helyes: 1,
            indoklas:
                'A git init létrehoz egy új, üres Git repository-t az aktuális könyvtárban. Ez az első lépés egy projekt verziókezelésének megkezdéséhez.',
        },
        {
            fokerdes:
                'Mely parancsok szükségesek a módosított fájlok mentéséhez a Git lokális repositoryba?',
            kerdesek: [
                { kerdes: 'git add &lt;fájlnév&gt;', eldont: 1 },
                { kerdes: 'git commit -m "üzenet"', eldont: 1 },
                { kerdes: 'git delete &lt;fájlnév&gt;', eldont: 0 },
                { kerdes: 'git revert', eldont: 0 },
            ],
            kep: 'https://flatlogic.com/blog/wp-content/uploads/2022/01/Untitled-2-1024x591.png',
            helyes: 2,
            indoklas:
                'A git add kijelöli a fájlokat a commit-hoz, a git commit pedig rögzíti a módosításokat a repository történetében. A git delete fájl törlésre, a git revert pedig visszavonásra szolgál.',
        },
        {
            fokerdes:
                'Mire használhatóak a git branch és git checkout parancsok?',
            kerdesek: [
                { kerdes: 'git branch új ágakat hoz létre.', eldont: 1 },
                {
                    kerdes: 'git checkout lehetővé teszi ágak közötti váltást.',
                    eldont: 1,
                },
                { kerdes: 'git branch törli az aktuális ágat.', eldont: 0 },
                {
                    kerdes: 'git checkout letölti a repository-t távolról.',
                    eldont: 0,
                },
            ],
            kep: 'https://cdn.prod.website-files.com/5ef788f07804fb7d78a4127a/60095db29f3c9d65476efdef_Git%20Branching%20strategies.png',
            helyes: 2,
            indoklas:
                'A git branch új ágakat hoz létre vagy listázza őket, míg a git checkout lehetővé teszi az ágak közti váltást. Nem használatosak sem törlésre, sem letöltésre.',
        },
        {
            fokerdes: 'Mit jelez a git status parancs?',
            kerdesek: [
                {
                    kerdes: 'Megjeleníti a repository távoli URL-címét.',
                    eldont: 0,
                },
                {
                    kerdes: 'Listázza a repositoryban lévő összes ágat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Információt ad a staging állapotról és változásokról.',
                    eldont: 1,
                },
                { kerdes: 'Futtatja a kódot a háttérben.', eldont: 0 },
            ],
            kep: 'https://docs.nesi.org.nz/assets/images/Git-Reference_Sheet.svg',
            helyes: 1,
            indoklas:
                'A git status megmutatja, mely fájlok kerültek módosításra, melyek kerültek a staging area-ba, és melyek várnak commit-ra. Ez segít nyomon követni a munkaállapotot.',
        },
        {
            fokerdes: 'Mit csinál a git clone parancs?',
            kerdesek: [
                { kerdes: 'Összefésüli a különböző ágakat.', eldont: 0 },
                {
                    kerdes: 'Feltölti a helyi módosításokat a GitHubra.',
                    eldont: 0,
                },
                {
                    kerdes: 'Lemásol egy távoli repository-t a helyi gépre.',
                    eldont: 1,
                },
                {
                    kerdes: 'Frissíti a meglévő repositoryt új verzióval.',
                    eldont: 0,
                },
            ],
            kep: 'https://miro.medium.com/v2/resize:fit:1400/0*5k_9JRI5dsoSqnk7.png',
            helyes: 1,
            indoklas:
                'A git clone egy távoli repository teljes másolatát hozza létre a helyi gépen, beleértve a fájlokat, a commit-hisztóriát és az ágakat.',
        },
        {
            fokerdes:
                'Melyik parancs küldi el a helyi módosításokat a távoli repositoryba?',
            kerdesek: [
                { kerdes: 'git pull', eldont: 0 },
                { kerdes: 'git fetch', eldont: 0 },
                { kerdes: 'git commit', eldont: 0 },
                { kerdes: 'git push', eldont: 1 },
            ],
            kep: 'https://i.ytimg.com/vi/e9lnsKot_SQ/maxresdefault.jpg',
            helyes: 1,
            indoklas:
                'git push feltölti a helyi repositoryban végzett commitokat a GitHub (vagy más távoli szerver) repositoryjába.',
        },
        {
            fokerdes:
                'Melyik parancs(ok) használhatók a távoli repository frissítéseinek lekérésére?',
            kerdesek: [
                { kerdes: 'git fetch', eldont: 1 },
                { kerdes: 'git pull', eldont: 1 },
                { kerdes: 'git clone', eldont: 0 },
                { kerdes: 'git init', eldont: 0 },
            ],
            kep: 'https://www.prooktatas.hu/assets/img/GIT-Commit-Flow.png',
            helyes: 2,
            indoklas:
                'A git fetch letölti a távoli repository legfrissebb változásait, de nem egyesíti őket automatikusan a helyi ággal. A git pull ugyanezt megteszi, de automatikusan merge-öli is a változásokat.',
        },
        {
            fokerdes:
                'Milyen lehetőségeket kínál a GitHub szolgáltatás a felhasználóknak?',
            kerdesek: [
                {
                    kerdes: 'Távoli repositoryk tárolása és megosztása.',
                    eldont: 1,
                },
                { kerdes: 'Online kódszerkesztés és verziózás.', eldont: 1 },
                {
                    kerdes: 'Programok automatikus futtatása GitHub szerverén.',
                    eldont: 0,
                },
                { kerdes: 'Játékok tárolása és futtatása.', eldont: 0 },
            ],
            kep: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            helyes: 2,
            indoklas:
                'A GitHub lehetővé teszi a repositoryk távoli tárolását, nyomon követését, verziózását, valamint a fájlok szerkesztését a webes felületen is. Automatizált workflow-k (pl. GitHub Actions) is támogatottak, de nem általános programfuttatás vagy játékhosztolás céljára való.',
        },
        {
            fokerdes: 'Mi a Slack fő célja csoportmunka során?',
            kerdesek: [
                {
                    kerdes: 'Programozási hibák automatikus javítása.',
                    eldont: 0,
                },
                { kerdes: 'Forráskód tárolása és verziókezelés.', eldont: 0 },
                {
                    kerdes: 'Valós idejű kommunikáció és együttműködés biztosítása.',
                    eldont: 1,
                },
                {
                    kerdes: 'Alkalmazások kiadása a nyilvánosságnak.',
                    eldont: 0,
                },
            ],
            kep: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
            helyes: 1,
            indoklas:
                'A Slack egy valós idejű kommunikációt lehetővé tévő platform, amelyet csapatok használnak együttműködésre, üzenetküldésre, fájlmegosztásra és integrációkra más eszközökkel.',
        },
        {
            fokerdes: "Mire használhatók a Slack-ben a 'csatornák' (channels)?",
            kerdesek: [
                { kerdes: 'Automatikus kódgenerálásra.', eldont: 0 },
                { kerdes: 'Fájlok titkos tárolására.', eldont: 0 },
                {
                    kerdes: 'Tematikus beszélgetések és projektek szervezésére.',
                    eldont: 1,
                },
                { kerdes: 'Hírlevelek készítésére és kiküldésére.', eldont: 0 },
            ],
            kep: 'https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v1569479844.jpg',
            helyes: 1,
            indoklas:
                'A Slack csatornái strukturált formában teszik lehetővé a projektek vagy témák szerinti kommunikációt, így a csapattagok könnyen megtalálhatják a releváns információkat.',
        },
        {
            fokerdes:
                'Melyik szolgáltatás integrálható közvetlenül a Slack-be?',
            kerdesek: [
                { kerdes: 'GitHub', eldont: 1 },
                { kerdes: 'Google Drive', eldont: 1 },
                { kerdes: 'Paint 3D', eldont: 0 },
                { kerdes: 'Minecraft', eldont: 0 },
            ],
            kep: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d5/06/37/d5063751-1a6b-9b43-3988-82a1e5186847/electron.png/1200x600bf.png',
            helyes: 2,
            indoklas:
                'A Slack lehetőséget nyújt népszerű fejlesztői és irodai alkalmazások integrálására, mint a GitHub vagy a Google Drive, ezzel automatizálva a munkafolyamatokat.',
        },
        {
            fokerdes: 'Melyik funkciók találhatók meg a Slack szolgáltatásban?',
            kerdesek: [
                {
                    kerdes: 'Üzenetek visszakeresése és archiválása.',
                    eldont: 1,
                },
                { kerdes: 'Videóhívás kezdeményezése.', eldont: 1 },
                { kerdes: 'Zárt forráskódú szoftverfejlesztés.', eldont: 0 },
                { kerdes: 'Szerveroldali programok tárolása.', eldont: 0 },
            ],
            kep: 'https://mp-cdn.elgato.com/media/01a11cf1-c0b5-46f0-9def-1dbb8d39d3e2/67184c0b-a8b6-45fd-bdda-1b43e951ad28/Slack-preview-intrinsic-6747b18e-a526-4cdd-96ad-ed0f967a68a6.jpg',
            helyes: 2,
            indoklas:
                'A Slack lehetőséget biztosít üzenetek keresésére, archiválására, valamint hang- és videóhívásokra is. Nem tárol kódot vagy futtat szerveroldali programokat.',
        },
        {
            fokerdes: 'Mi a Figma elsődleges célja a csoportmunkában?',
            kerdesek: [
                {
                    kerdes: 'Forráskód szerkesztése és verziókezelés.',
                    eldont: 0,
                },
                {
                    kerdes: 'Grafikai elemek készítése, prototípus tervezése valós idejű együttműködéssel.',
                    eldont: 1,
                },
                {
                    kerdes: 'Futtatási környezet biztosítása mobilalkalmazásokhoz.',
                    eldont: 0,
                },
                { kerdes: 'Hangfájlok szerkesztése és keverése.', eldont: 0 },
            ],
            kep: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
            helyes: 1,
            indoklas:
                'A Figma egy böngészőalapú grafikai és prototípus-tervező eszköz, amely lehetővé teszi a csapatok számára a valós idejű együttműködést.',
        },
        {
            fokerdes: 'Hogyan segíti a Figma az online csapatmunkát?',
            kerdesek: [
                {
                    kerdes: 'Valós idejű közös szerkesztést tesz lehetővé ugyanazon a projekten.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak egy felhasználó dolgozhat egy projekten egyszerre.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak helyi számítógépen fut, online hozzáférés nélkül.',
                    eldont: 0,
                },
                {
                    kerdes: 'Verziókövetést biztosít bináris fájlokhoz Git segítségével.',
                    eldont: 0,
                },
            ],
            kep: 'https://gotrialpro.com/wp-content/uploads/edd/2024/07/Figma-Free-Plan.png',
            helyes: 1,
            indoklas:
                'A Figma egyik legnagyobb előnye a valós idejű kollaboráció, ahol több felhasználó egyszerre dolgozhat ugyanazon a fájlon.',
        },
        {
            fokerdes: 'Mely funkciók érhetők el a Figma-ban?',
            kerdesek: [
                {
                    kerdes: 'Prototípus készítés interaktív átmenetekkel.',
                    eldont: 1,
                },
                {
                    kerdes: 'Verziókövetés a dokumentumtörténeten keresztül.',
                    eldont: 1,
                },
                {
                    kerdes: 'Programozási hibák automatikus észlelése.',
                    eldont: 0,
                },
                {
                    kerdes: 'Hangfelvétel készítése beépített funkcióval.',
                    eldont: 0,
                },
            ],
            kep: 'https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png',
            helyes: 2,
            indoklas:
                'A Figma lehetővé teszi interaktív prototípusok létrehozását, valamint automatikusan menti a fájlokat, így elérhető a verziótörténet is.',
        },
        {
            fokerdes:
                'Milyen lehetőségeket nyújt a Figma a fejlesztőkkel való együttműködéshez?',
            kerdesek: [
                {
                    kerdes: 'CSS, iOS és Android kódnézet exportálása.',
                    eldont: 1,
                },
                {
                    kerdes: 'Specifikációk és méretek automatikus megosztása fejlesztőknek.',
                    eldont: 1,
                },
                { kerdes: 'Közvetlen GitHub commit lehetőség.', eldont: 0 },
                { kerdes: 'Beépített Python szkriptek futtatása.', eldont: 0 },
            ],
            kep: 'https://media.licdn.com/dms/image/v2/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=h6MzVUlztZY6PUfNM-iBl_H9ne7K_pqsnn4vJFKmdjU',
            helyes: 2,
            indoklas:
                'A Figma fejlesztőbarát funkciói közé tartozik a kódnézet és specifikáció megosztás, így a design fejlesztési szempontból is könnyen értelmezhetővé válik.',
        },
    ],
];
