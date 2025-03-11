let csoportmunka = [
    'Csoportmunkaeszközök, Git',
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
            indoklas:
                'A git clone egy meglévő repository másolatát hozza létre. A git commit egy új verziót rögzít a helyi repositoryban. A git delete nem létezik, és a repository törlése nem ilyen egyszerű. A git push nem oldja meg automatikusan az esetleges konfliktusokat, ez manuális beavatkozást igényel.',
        },
    ],
];
