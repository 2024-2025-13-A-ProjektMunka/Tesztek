let html5 = [
    'HTML5, CSS3',
    1,
    [
        {
            fokerdes: 'Mire szolgál a CSS egy weboldalon?',
            kerdesek: [
                { kerdes: 'Meghatározza a weboldal szerkezetét.', eldont: 0 },
                {
                    kerdes: 'A weboldal vizuális megjelenítését szabályozza.',
                    eldont: 1,
                },
                {
                    kerdes: 'Dinamikus funkcionalitást ad a weboldalhoz.',
                    eldont: 0,
                },
                {
                    kerdes: 'A CSS kizárólag HTML-lel együtt használható.',
                    eldont: 0,
                },
            ],
            helyes: 1,
            indoklas:
                'A CSS (Cascading Style Sheets) feladata a weboldalak megjelenítésének formázása, például a színek, betűtípusok, térközök és elrendezések beállítása. Nem határozza meg a szerkezetet (ez a HTML dolga), és nem biztosít dinamikus funkcionalitást (ez a JavaScript feladata).',
        },
        {
            fokerdes:
                'Melyik CSS szabály érvényes és hatásos egy &lt;p&gt; elemre?',
            kerdesek: [
                { kerdes: 'p { color: blue; }', eldont: 1 },
                {
                    kerdes: '&lt;style&gt; p { color: blue; } &lt;/style&gt;',
                    eldont: 1,
                },
                { kerdes: '&lt;p style="color: blue;"&gt;', eldont: 0 },
                { kerdes: 'paragraph { color: blue; }', eldont: 0 },
            ],
            helyes: 2,
            indoklas:
                'Az első válasz egy érvényes CSS szabály egy különálló CSS fájlban vagy &lt;style&gt; blokkban. A második válasz egy helyes beillesztés a &lt;style&gt; blokkban egy HTML dokumentumon belül. A harmadik lehetőség majdnem jó, de a CSS szabályokat nem így kell írni; ez inkább inline stílus lenne. Az utolsó válasz helytelen, mert a „paragraph” nem egy érvényes HTML elem.',
        },
        {
            fokerdes: 'Mely állítások igazak a CSS3-leírókkal kapcsolatban?',
            kerdesek: [
                {
                    kerdes: 'A @media leíró segítségével különböző eszközökre szabhatjuk a stílusokat.',
                    eldont: 1,
                },
                {
                    kerdes: 'A @import leíró másik CSS fájlt tölthet be.',
                    eldont: 1,
                },
                {
                    kerdes: 'A @font-face csak a rendszerben telepített betűtípusokat engedi használni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A CSS3 bevezette az @keyframes leírót az animációkhoz.',
                    eldont: 1,
                },
            ],
            helyes: 3,
            indoklas:
                'A @media lehetővé teszi a reszponzív design kialakítását. A @import másik CSS fájl tartalmát tölti be. Az @font-face segítségével saját betűtípusokat is betölthetünk, nem csak a rendszeren telepítetteket. Az @keyframes valóban a CSS3 egyik újítása volt, amely lehetővé teszi animációk létrehozását.',
        },
    ],
];
