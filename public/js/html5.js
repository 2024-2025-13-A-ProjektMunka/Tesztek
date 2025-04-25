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
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
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
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
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
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 3,
            indoklas:
                'A @media lehetővé teszi a reszponzív design kialakítását. A @import másik CSS fájl tartalmát tölti be. Az @font-face segítségével saját betűtípusokat is betölthetünk, nem csak a rendszeren telepítetteket. Az @keyframes valóban a CSS3 egyik újítása volt, amely lehetővé teszi animációk létrehozását.',
        },
        {
            fokerdes:
                'Melyik HTML elem tartalmazza a weboldal látható tartalmát?',
            kerdesek: [
                {
                    kerdes: '&lt;head&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;meta&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;body&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;html&gt;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;body&gt; elem tartalmazza azokat az elemeket, amelyek a felhasználó számára megjelennek, például szövegeket, képeket és gombokat. A &lt;head&gt; az oldal metaadatait és konfigurációs információit tárolja.',
        },
        {
            fokerdes:
                'Melyik elem szükséges egy érvényes HTML5 dokumentum létrehozásához?',
            kerdesek: [
                {
                    kerdes: '&lt;!DOCTYPE html&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;head&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;script&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;meta&gt;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A &lt!DOCTYPE html&gt; deklaráció szükséges ahhoz, hogy a böngésző tudja, hogy HTML5 dokumentumot olvas be. A &lt;head&gt; elem a dokumentum metaadatait tartalmazza, például a karakterkódolást és a cím megadását. A &lt;script&gt; nem kötelező elem egy HTML-oldal működéséhez.',
        },
        {
            fokerdes:
                'Mire szolgál a &lt;meta charset="UTF-8"&gt; tag egy HTML dokumentumban?',
            kerdesek: [
                {
                    kerdes: 'A dokumentum karakterkódolásának beállítására.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az oldal leírásának megadására.',
                    eldont: 0,
                },
                {
                    kerdes: 'A böngésző címsorában megjelenő cím beállítására.',
                    eldont: 0,
                },
                {
                    kerdes: 'A CSS-stílusok beállítására.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A&lt;meta charset="UTF-8"&gt; tag a karakterkódolást állítja be, amely lehetővé teszi, hogy a különböző nyelvi karakterek (például ékezetes betűk) helyesen jelenjenek meg a böngészőben.',
        },
        {
            fokerdes: 'Mi a &lt;!DOCTYPE html&gt; deklaráció szerepe?',
            kerdesek: [
                {
                    kerdes: 'Meghatározza a weboldal nyelvét.',
                    eldont: 0,
                },
                {
                    kerdes: 'Értesíti a böngészőt, hogy HTML5 szabványt használjon.',
                    eldont: 1,
                },
                {
                    kerdes: 'Betölti a külső CSS fájlokat.',
                    eldont: 0,
                },
                {
                    kerdes: 'Meghatározza az alapértelmezett karakterkódolást.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;!DOCTYPE html&gt; deklaráció tájékoztatja a böngészőt arról, hogy a dokumentum HTML5 formátumban van megírva, így a megfelelő renderelési módot alkalmazza. Ez nem egy HTML tag, hanem egy dokumentumtípus-meghatározás.',
        },
        {
            fokerdes:
                'Melyik HTML elem szükséges minden érvényes HTML5 dokumentumban?',
            kerdesek: [
                {
                    kerdes: '&lt;html&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;body&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;header&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;aside&gt;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A &lt;html&gt; az egész dokumentum gyökéreleme, nélküle a böngésző nem tudná értelmezni a HTML-kódot. A &lt;body&gt; tartalmazza a látható weboldal tartalmát, így ez is alapvetően szükséges. A &lt;header&gt; és &lt;aside&gt; strukturális elemek, de nem kötelezőek egy érvényes HTML dokumentumban.',
        },
        {
            fokerdes: 'Melyik állítás igaz a &lt;head&gt; elemre?',
            kerdesek: [
                {
                    kerdes: 'Tartalmazhat &lt;meta&gt; elemeket.',
                    eldont: 1,
                },
                {
                    kerdes: 'Kötelezően tartalmaznia kell egy &lt;title&gt; elemet.',
                    eldont: 1,
                },
                {
                    kerdes: 'Közvetlenül megjeleníti a tartalmát a böngészőablakban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Tartalmazhat JavaScript és CSS hivatkozásokat.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 3,
            indoklas:
                'A &lt;head&gt; tartalmazhat &lt;meta&gt; elemeket, amelyek például a karakterkódolás vagy az oldal leírásának megadására szolgálnak. A &lt;title&gt; kötelező elem, amely meghatározza az oldal címét, amit a böngésző fülén is látunk. A &lt;head&gt; nem jelenít meg közvetlen tartalmat a böngészőben, csak a dokumentum háttérinformációit tárolja. CSS és JavaScript fájlok hivatkozásait is itt helyezzük el (&lt;link&gt; és &lt;script&gt; elemekkel).',
        },
        {
            fokerdes: 'Melyik HTML elem használható címsorok létrehozására?',
            kerdesek: [
                {
                    kerdes: '&lt;h1&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;title&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;strong&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;span&gt;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;h1&gt;-&lt;h6&gt; elemek a HTML címsorok megjelenítésére szolgálnak, ahol a &lt;h1&gt; a legfontosabb és legnagyobb méretű címsor, míg a &lt;h6&gt; a legkisebb. A &lt;title&gt; az oldal nevét határozza meg, a &lt;strong&gt; szövegkiemelésre használható, a &lt;span&gt; pedig inline elemek csoportosítására.',
        },
        {
            fokerdes:
                'Melyik HTML elemek használhatók képek és képaláírások megjelenítésére?',
            kerdesek: [
                {
                    kerdes: '&lt;img&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;figure&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;table&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;em&gt;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'Az &lt;img&gt; elem képek beillesztésére szolgál. A &lt;figure&gt; egy strukturális elem, amely képeket, grafikákat vagy diagramokat foglalhat magában, és opcionálisan egy &lt;figcaption&gt; elemet is tartalmazhat a képaláírás számára. A &lt;table&gt; táblázatokhoz használatos, az &lt;em&gt; pedig dőlt szöveg kiemelésére.',
        },
        {
            fokerdes: 'Mire való az &lt;a&gt; HTML elem?',
            kerdesek: [
                {
                    kerdes: 'Szöveg kiemelésére.',
                    eldont: 0,
                },
                {
                    kerdes: 'Hivatkozások (linkek) létrehozására.',
                    eldont: 1,
                },
                {
                    kerdes: 'Képek beillesztésére.',
                    eldont: 0,
                },
                {
                    kerdes: 'Felsorolások létrehozására.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'Az &lt;a&gt; (anchor) elem hiperhivatkozások létrehozására szolgál, amelyek más weboldalakra, dokumentumokra vagy egy adott oldalon belüli elemekre mutathatnak. A href attribútum határozza meg a cél URL-t.',
        },
        {
            fokerdes:
                'Melyik állítás igaz a &lt;div&gt; és &lt;span&gt; elemekre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;div&gt; blokk szintű elem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;span&gt; inline szintű elem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;div&gt; csak táblázatokban használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;span&gt; általában egyéni formázásokhoz használatos.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 3,
            indoklas:
                'A&lt;div&gt; egy blokk szintű elem, amely strukturális szempontból csoportosít más elemeket. A &lt;span&gt; egy inline elem, amelyet kisebb szövegrészek kijelölésére és stílusozására használunk. A &lt;div&gt; nem csak táblázatokban használható, hanem bármilyen más HTML szerkezetben is.',
        },
        {
            fokerdes:
                'Melyik attribútum határozza meg egy kép alternatív szövegét?',
            kerdesek: [
                {
                    kerdes: 'src',
                    eldont: 0,
                },
                {
                    kerdes: 'alt',
                    eldont: 1,
                },
                {
                    kerdes: 'href',
                    eldont: 0,
                },
                {
                    kerdes: 'target',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'Az alt attribútum egy kép alternatív szövegét határozza meg. Ez akkor jelenik meg, ha a kép nem tölthető be, illetve a képernyőolvasók ezt használják a látássérült felhasználók számára.',
        },
        {
            fokerdes:
                'Melyik attribútumok befolyásolják egy &lt;a&gt; (link) elem viselkedését?',
            kerdesek: [
                {
                    kerdes: 'href',
                    eldont: 1,
                },
                {
                    kerdes: 'target',
                    eldont: 1,
                },
                {
                    kerdes: 'alt',
                    eldont: 0,
                },
                {
                    kerdes: 'src',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A href attribútum határozza meg a cél URL-t, ahová a link mutat. A target attribútum azt szabályozza, hogy a link új ablakban (_blank), ugyanabban az ablakban (_self, az alapértelmezett) vagy egy adott keretben nyíljon meg. Az alt és src attribútumok képekre vonatkoznak, nem linkekre.',
        },
        {
            fokerdes: 'Melyik attribútum határozza meg a weboldal nyelvét?',
            kerdesek: [
                {
                    kerdes: 'charset',
                    eldont: 0,
                },
                {
                    kerdes: 'lang',
                    eldont: 1,
                },
                {
                    kerdes: 'style',
                    eldont: 0,
                },
                {
                    kerdes: 'target',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A lang attribútum a dokumentum vagy egy adott HTML elem nyelvét határozza meg. Például &lt;html lang="hu"&gt; esetén a böngésző és a keresőmotorok tudni fogják, hogy a tartalom magyar nyelvű.',
        },
        {
            fokerdes: 'Melyik állítás igaz a charset és style attribútumokra?',
            kerdesek: [
                {
                    kerdes: 'A charset az oldal karakterkódolását határozza meg.',
                    eldont: 1,
                },
                {
                    kerdes: 'A style attribútummal CSS tulajdonságokat lehet megadni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A charset csak képeknél használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A style ajánlott helyettesítője a külső CSS fájlok használata.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 3,
            indoklas:
                'A charset attribútum az oldal karakterkódolását állítja be, például &lt;meta charset="UTF-8"&gt;, amely biztosítja az ékezetes és speciális karakterek helyes megjelenítését. A style attribútummal inline CSS-t adhatunk egy elemhez, például: &lt;p style="color: red;"&gt;. A külső CSS fájlok használata ajánlott, mert átláthatóbb és jobban kezelhető kódszerkezetet eredményez.',
        },
        {
            fokerdes:
                'Melyik HTML elem használandó rendezetlen lista létrehozásához?',
            kerdesek: [
                {
                    kerdes: '&lt;ol&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;ul&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;li&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;dl&gt;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;ul&gt; (unordered list) elem rendezetlen listát hoz létre, amelyben az egyes listaelemeket &lt;li&gt; tagek határozzák meg. Az ilyen listákban az elemek általában pontokkal (bullet points) jelennek meg. Az &lt;ol&gt; rendezett listát jelent, a &lt;li&gt; egy listaelem, míg a &lt;dl&gt; egy definíciós lista létrehozására szolgál.',
        },
        {
            fokerdes:
                'Melyik HTML elemek szükségesek egy rendezett lista létrehozásához?',
            kerdesek: [
                {
                    kerdes: '&lt;ol&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;ul&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;li&gt;',
                    eldont: 1,
                },
                {
                    kerdes: '&lt;dl&gt;',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A &lt;ol&gt; (ordered list) elem rendezett listát hoz létre, amely számozott vagy betűkkel jelölt listaelemekből áll. A &lt;li&gt; (list item) az egyes elemeket határozza meg mind a &lt;ul&gt;, mind az &lt;ol&gt; listákon belül. A &lt;ul&gt; rendezetlen listához kell, a &lt;dl&gt; pedig definíciós listákhoz.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a &lt;dl&gt; (definíciós lista) elemre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;dl&gt; definíciós listát hoz létre.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;dt&gt; elem a definíció címét jelöli.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;dl&gt; mindig számozott listát jelenít meg.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;dd&gt; az adott definícióhoz tartozó magyarázatot adja.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;dl&gt; (definition list) definíciós listát hoz létre, amelyben a &lt;dt&gt; a definiált kifejezést, a &lt;dd&gt; pedig annak magyarázatát tartalmazza.',
        },
        {
            fokerdes: 'Melyik HTML elem NEM használható listák létrehozásához?',
            kerdesek: [
                {
                    kerdes: '&lt;dl&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;ul&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;li&gt;',
                    eldont: 0,
                },
                {
                    kerdes: '&lt;span&gt;',
                    eldont: 1,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;span&gt; egy inline elem, amely szövegek formázására szolgál, de nem használható listák létrehozására. A &lt;dl&gt; definíciós listához, a &lt;ul&gt; rendezetlen listához, a &lt;li&gt; pedig listaelemekhez használatos.',
        },
        {
            fokerdes: 'Melyik HTML elem használandó táblázat létrehozásához?',
            kerdesek: [
                {
                    kerdes: 'A &lt;table&gt; elem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;div&gt; elem.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;tr&gt; elem.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;span&gt; elem.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;table&gt; elem a HTML-ben táblázatok létrehozására szolgál. A &lt;tr&gt; csak egy táblázatsor, a &lt;div&gt; és &lt;span&gt; pedig általános konténerek, nem táblázatokhoz valók.',
        },
        {
            fokerdes:
                'Mely HTML elemek szükségesek egy táblázatsor és egy cella létrehozásához?',
            kerdesek: [
                {
                    kerdes: 'A &lt;tr&gt; és a &lt;th&gt; elem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;ul&gt; és a &lt;li&gt; elem.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;th&gt; és a &lt;td&gt; elem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;p&gt; és a &lt;br&gt; elem.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A &lt;tr&gt; elem egy táblázatsort, míg a &lt;td&gt; elem egy táblázati cellát hoz létre. A &lt;th&gt; is cella, de fejlécnek való. Az &lt;ul&gt;, &lt;li&gt;, &lt;p&gt; és &lt;br&gt; nem használandó táblázatokhoz.',
        },
        {
            fokerdes:
                'Melyik HTML elem használható táblázati fejléc létrehozásához?',
            kerdesek: [
                {
                    kerdes: 'A &lt;th&gt; elem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;td&gt; elem.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;caption&gt; elem.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;h1&gt; elem.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;th&gt; elem fejléc cellát hoz létre a táblázatban. A &lt;td&gt; sima cella, a &lt;caption&gt; táblázatcímet ad, a &lt;h1&gt; pedig címsor, nem táblázati elem.',
        },
        {
            fokerdes: 'Melyik állítás igaz a &lt;caption&gt; elemre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;caption&gt; egy táblázat címének megadására szolgál.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;caption&gt; egy cellában megjelenő szöveg kiemelésére szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;caption&gt; mindig a táblázat felett jelenik meg.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;caption&gt; használata kötelező minden táblázat esetében.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A &lt;caption&gt; egy táblázat címének megadására való, és alapértelmezés szerint a táblázat felett jelenik meg. Nem kötelező minden táblázatban használni, de ajánlott a jobb érthetőség érdekében.',
        },
        {
            fokerdes:
                'Melyik szabály határozza meg a CSS szabályok érvényesülési sorrendjét?',
            kerdesek: [
                {
                    kerdes: 'A specifikusság.',
                    eldont: 1,
                },
                {
                    kerdes: 'A forráskód sorrendje.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az !important használata.',
                    eldont: 1,
                },
                {
                    kerdes: 'A HTML elemek természetes sorrendje.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A CSS kiértékelésénél először a specifikusság számít, majd ha azonosak, a forráskódban később megadott stílus érvényesül. Az !important felülírhat más szabályokat, de nem a kiértékelési sorrend alapvető szabálya.',
        },
        {
            fokerdes: 'Melyik CSS szabály élvez elsőbbséget az alábbiak közül?',
            kerdesek: [
                {
                    kerdes: 'Egy beágyazott &lt;style&gt; blokkban megadott szabály.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy külső CSS fájlban megadott szabály.',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy inline stílus (style attribútum a HTML elemben).',
                    eldont: 1,
                },
                {
                    kerdes: 'Egy böngésző alapértelmezett stílusa.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A böngésző alapértelmezett stílusait a felhasználó által definiált vagy a fejlesztő által írt stílusok felülírják. Az inline stílus a legmagasabb prioritású, kivéve ha egy másik szabály !important-tal van megadva.',
        },
        {
            fokerdes: 'Melyik állítás igaz a !important kulcsszóra?',
            kerdesek: [
                {
                    kerdes: 'Felülír minden más stílust, függetlenül a specifikusságtól.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak az azonos specifikusságú szabályokat írja felül.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak inline stílusok esetében használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A !important-tal megjelölt stílust csak egy másik !important felülírása írhatja felül.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'Az !important minden más szabályt felülír, függetlenül a forráskód sorrendjétől vagy specifikusságától. Azonban egy másik !important-tal ellátott szabály magasabb specifikussággal még mindig érvényesülhet.',
        },
        {
            fokerdes:
                'Mely tényezők befolyásolják egy CSS szabály érvényesülését?',
            kerdesek: [
                {
                    kerdes: 'A specifikusság.',
                    eldont: 1,
                },
                {
                    kerdes: 'A deklaráció helye (külső, belső, inline).',
                    eldont: 1,
                },
                {
                    kerdes: 'A HTML elemek sorrendje a dokumentumban.',
                    eldont: 0,
                },
                {
                    kerdes: 'A forráskód sorrendje.',
                    eldont: 1,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 3,
            indoklas:
                'A CSS szabályok érvényesülését elsősorban a specifikusság, a deklaráció helye és a forráskódban való sorrendje határozza meg. A HTML elemek sorrendje önmagában nem befolyásolja a CSS alkalmazását.',
        },
        {
            fokerdes: 'Mit jelöl a CSS-ben az univerzális szelektor *?',
            kerdesek: [
                { kerdes: 'Csak a szöveges elemeket választja ki.', eldont: 0 },
                { kerdes: 'Minden HTML-elemet kiválaszt.', eldont: 1 },
                { kerdes: 'Csak a képeket célozza meg.', eldont: 0 },
                {
                    kerdes: 'Az összes beágyazott iframe-et célozza.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'Az univerzális szelektor * az összes HTML-elemet kiválasztja, így gyakran használják alapértelmezett stílusok (pl. margin, padding nullázása) beállítására.',
        },
        {
            fokerdes: 'Mit csinál a * univerzális CSS szelektor?',
            kerdesek: [
                {
                    kerdes: 'Kiválaszt minden HTML-elemet az oldalon.',
                    eldont: 1,
                },
                {
                    kerdes: 'Csak a &lt;div&gt; elemeket célozza meg.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak azokat az elemeket, amelyeknek van id attribútuma.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak azokat az elemeket, amelyek rejtettek.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A * univerzális szelektor minden elemet kiválaszt az oldalon, függetlenül a típusától vagy attribútumaitól. Gyakran használják resetelésre vagy alapértelmezett stílusok beállítására.',
        },
        {
            fokerdes:
                'Melyik szelektor célozza meg az összes &lt;p&gt; elemet, amely highlight osztályú?',
            kerdesek: [
                {
                    kerdes: 'p.highlight',
                    eldont: 1,
                },
                {
                    kerdes: '.p highlight',
                    eldont: 0,
                },
                {
                    kerdes: '#highlight p',
                    eldont: 0,
                },
                {
                    kerdes: 'highlight.p',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A p.highlight egy kombinált elem- és osztályszelektor, amely minden &lt;p&gt; elemet kiválaszt, amely rendelkezik a highlight osztállyal.',
        },
        {
            fokerdes:
                'Mely CSS szelektorok használhatók konkrét elemek kiválasztására?',
            kerdesek: [
                { kerdes: '#nav', eldont: 1 },
                { kerdes: '.menu', eldont: 1 },
                { kerdes: 'img', eldont: 0 },
                { kerdes: '*', eldont: 0 },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A #nav egy azonosítóra (id) hivatkozik, míg a .menu egy osztályra (class). Ezek célzott szelektorok, amelyek konkrét elemeket vagy elemcsoportokat formáznak.',
        },
        {
            fokerdes:
                'Melyik CSS pszeudoszelektorokat használhatjuk az első és az utolsó elem kijelölésére egy listában?',
            kerdesek: [
                {
                    kerdes: ':first-child',
                    eldont: 1,
                },
                {
                    kerdes: ':last-child',
                    eldont: 1,
                },
                {
                    kerdes: ':hover',
                    eldont: 0,
                },
                {
                    kerdes: ':nth-child(2)',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A :first-child és :last-child pszeudoszelektorok lehetővé teszik az első és az utolsó elem stílusozását egy adott szülőn belül. Ezeket gyakran használják listák, menük formázásánál.',
        },
        {
            fokerdes: 'Melyek érvényes CSS pszeudoszelektorok?',
            kerdesek: [
                { kerdes: ':hover', eldont: 1 },
                { kerdes: ':first-child', eldont: 1 },
                { kerdes: ':image', eldont: 0 },
                { kerdes: ':box', eldont: 0 },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A :hover és :first-child érvényes pszeudoszelektorok, amelyek az elem állapotára vagy elhelyezkedésére reagálnak. A :image és :box nem létező vagy érvénytelen CSS pszeudoszelektorok.',
        },
        {
            fokerdes:
                'Mely szelektorok használhatók egyedi elemek és közvetlen gyermekek kiválasztására?',
            kerdesek: [
                {
                    kerdes: '#header',
                    eldont: 1,
                },
                {
                    kerdes: 'section > p',
                    eldont: 1,
                },
                {
                    kerdes: '.container p',
                    eldont: 0,
                },
                {
                    kerdes: 'ul li a',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A #header egy azonosítószelektor, amely konkrét elemre vonatkozik. A section > p csak a közvetlen gyermekeket jelöli ki, míg a ul li a és .container p szelektorok hierarchikus vagy kombinált szelekciót tesznek lehetővé.',
        },
        {
            fokerdes: 'Mit csinál a div > p CSS szelektor?',
            kerdesek: [
                {
                    kerdes: 'Kiválaszt minden p elemet a dokumentumban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Kiválaszt minden p elemet, amely egy div közvetlen gyermeke.',
                    eldont: 1,
                },
                {
                    kerdes: 'Kiválaszt minden p elemet, amely bármilyen mélységben a div alatt van.',
                    eldont: 0,
                },
                {
                    kerdes: 'Kiválasztja az összes div elemet, amely p-t tartalmaz.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A div > p szelektor csak azokat a p elemeket választja ki, amelyek közvetlen gyermekei egy div elemnek. Ez egy speciális (gyermek) szelektor.',
        },
        {
            fokerdes: 'Mit csinál a box-shadow CSS tulajdonság?',
            kerdesek: [
                { kerdes: 'Megváltoztatja az elem átlátszóságát.', eldont: 0 },
                { kerdes: 'Szövegárnyékot hoz létre.', eldont: 0 },
                {
                    kerdes: 'Külső vagy belső árnyékot ad a dobozhoz.',
                    eldont: 1,
                },
                { kerdes: 'A keret színét változtatja meg.', eldont: 0 },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A box-shadow segítségével az elem dobozához külső vagy belső árnyékot adhatunk, ami gyakran használatos dizájnelemként.',
        },
        {
            fokerdes:
                'Mely CSS tulajdonságokat használhatjuk szöveg igazítására vagy alakítására?',
            kerdesek: [
                { kerdes: 'text-transform', eldont: 1 },
                { kerdes: 'text-align', eldont: 1 },
                { kerdes: 'box-sizing', eldont: 0 },
                { kerdes: 'z-index', eldont: 0 },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A text-align a szöveg vízszintes igazítására szolgál (balra, jobbra, középre stb.), míg a text-transform a szöveg nagybetűs, kisbetűs vagy nagy kezdőbetűs alakítására használható.',
        },
        {
            fokerdes: 'Mi a különbség a margin és a padding között?',
            kerdesek: [
                {
                    kerdes: 'A margin a tartalom és a keret közti térköz.',
                    eldont: 0,
                },
                {
                    kerdes: 'A padding a szomszédos elemek közti térköz.',
                    eldont: 0,
                },
                {
                    kerdes: 'A margin a külső térköz, míg a padding a belső térköz.',
                    eldont: 1,
                },
                {
                    kerdes: 'A margin csak a bal oldalon alkalmazható.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A margin a doboz külső szélei és más elemek közötti térközt határozza meg, míg a padding a tartalom és a doboz kerete közötti belső térköz.',
        },
        {
            fokerdes:
                'Mely position értékek használhatók CSS-ben az elem pozicionálására?',
            kerdesek: [
                { kerdes: 'static', eldont: 1 },
                { kerdes: 'absolute', eldont: 1 },
                { kerdes: 'center', eldont: 0 },
                { kerdes: 'relative-top', eldont: 0 },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A static az alapértelmezett pozicionálás, míg az absolute lehetővé teszi az elem elhelyezését a legközelebbi pozicionált őse alapján. A center és relative-top nem érvényes értékek.',
        },
        {
            fokerdes: 'Mit határoz meg a CSS opacity tulajdonság?',
            kerdesek: [
                {
                    kerdes: 'A szöveg dőlt stílusát.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az elem átlátszóságát.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az elem körvonalának vastagságát.',
                    eldont: 0,
                },
                {
                    kerdes: 'A betűméretet.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'Az opacity tulajdonsággal az elem átlátszóságát állíthatjuk be. Értéke 0 (teljesen átlátszó) és 1 (teljesen átlátszatlan) között lehet.',
        },
        {
            fokerdes:
                'Mely CSS tulajdonságokat használhatjuk az elemek elhelyezésének és megjelenítésének vezérlésére?',
            kerdesek: [
                {
                    kerdes: 'display',
                    eldont: 1,
                },
                {
                    kerdes: 'float',
                    eldont: 1,
                },
                {
                    kerdes: 'font-family',
                    eldont: 0,
                },
                {
                    kerdes: 'line-height',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A display értékei (pl. block, inline, flex) az elem megjelenítési módját határozzák meg, míg a float segítségével az elem elhelyezhető balra vagy jobbra az adott tartalomfolyamon belül.',
        },
        {
            fokerdes:
                'Melyik tulajdonság határozza meg a szöveg dőlését CSS-ben?',
            kerdesek: [
                {
                    kerdes: 'font-style',
                    eldont: 1,
                },
                {
                    kerdes: 'text-align',
                    eldont: 0,
                },
                {
                    kerdes: 'font-weight',
                    eldont: 0,
                },
                {
                    kerdes: 'text-transform',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A font-style tulajdonság a szöveg stílusát határozza meg - például normál, dőlt (italic) vagy oblique lehet.',
        },
        {
            fokerdes:
                'Melyik CSS tulajdonságok foglalnak magukba több résztulajdonságot?',
            kerdesek: [
                {
                    kerdes: 'background',
                    eldont: 1,
                },
                {
                    kerdes: 'border',
                    eldont: 1,
                },
                {
                    kerdes: 'text-align',
                    eldont: 0,
                },
                {
                    kerdes: 'cursor',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A background tulajdonság magában foglalja például a background-color, background-image, background-size, stb. értékeket, míg a border tartalmazhatja a vastagságot, színt és stílust is.',
        },
        {
            fokerdes:
                'Melyik CSS-függvény használható átlátszóság beállítására színek esetén?',
            kerdesek: [
                {
                    kerdes: 'url()',
                    eldont: 0,
                },
                {
                    kerdes: 'rgba()',
                    eldont: 1,
                },
                {
                    kerdes: 'calc()',
                    eldont: 0,
                },
                {
                    kerdes: 'hsl()',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'Az rgba() függvény lehetővé teszi az RGB-szín megadását egy negyedik értékkel, amely az átlátszóságot (alfa csatornát) jelöli. Ezáltal például rgba(255, 0, 0, 0.5) egy félig átlátszó piros színt jelent.',
        },
        {
            fokerdes: 'Mire használható a CSS calc() függvény?',
            kerdesek: [
                {
                    kerdes: 'Két mértékegység összekombinálására (pl. %, px)',
                    eldont: 1,
                },
                {
                    kerdes: 'Szöveg átalakítására nagybetűssé',
                    eldont: 0,
                },
                {
                    kerdes: 'Számítások végzésére stílusértékek között',
                    eldont: 1,
                },
                {
                    kerdes: 'SVG képek beágyazására',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A calc() függvénnyel matematikai műveletek végezhetők stílusértékek között, például width: calc(100% - 50px); egy dinamikus szélességszámítás. Lehetővé teszi különböző mértékegységek (%, px, em stb.) együttes használatát.',
        },
        {
            fokerdes: 'Mire szolgál a CSS url() függvény?',
            kerdesek: [
                {
                    kerdes: 'Színek átalakítására HSL formátumba',
                    eldont: 0,
                },
                {
                    kerdes: 'Weboldal háttérképének megadására',
                    eldont: 1,
                },
                {
                    kerdes: 'Listajelek testreszabására',
                    eldont: 0,
                },
                {
                    kerdes: 'Betűtípus-választásra',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                "A url() függvény segítségével hivatkozhatunk külső fájlokra (pl. képek, betűtípusok). Gyakran használják background-image vagy @font-face szabályban. Például: background-image: url('hatter.jpg');.",
        },
        {
            fokerdes: 'Mi a célja a CSS reset használatának?',
            kerdesek: [
                {
                    kerdes: 'A böngészők gyári stílusainak egységesítése',
                    eldont: 1,
                },
                {
                    kerdes: 'A különböző böngészők közötti konzisztens megjelenés biztosítása',
                    eldont: 1,
                },
                {
                    kerdes: 'Animációk hozzáadása HTML-elemekhez',
                    eldont: 0,
                },
                {
                    kerdes: 'A CSS fájlok betöltésének gyorsítása',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A CSS reset célja, hogy eltávolítsa a különböző böngészők alapértelmezett stílusait, így egységes kiindulási pontot biztosít a webfejlesztéshez. Népszerű reset példák: Eric Meyer reset, Normalize.css.',
        },
        {
            fokerdes:
                'Milyen tartalomhoz célszerű használni a &lt;article&gt; elemet?',
            kerdesek: [
                {
                    kerdes: 'Fő navigációs menühöz',
                    eldont: 0,
                },
                {
                    kerdes: 'Egy cikkhez vagy blogbejegyzéshez, amely önálló egységet alkot',
                    eldont: 1,
                },
                {
                    kerdes: 'Lábléc elrendezéséhez',
                    eldont: 0,
                },
                {
                    kerdes: 'Oldal felső sávjához',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;article&gt; elem olyan tartalomhoz való, amely önállóan is értelmezhető - például cikkek, blogposztok, hírek. Lehetővé teszi az újrafelhasználhatóságot, pl. RSS-ben.',
        },
        {
            fokerdes:
                'Mely állítások igazak a &lt;header&gt; és &lt;footer&gt; HTML5 elemekre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;header&gt; csak az oldal tetején szerepelhet.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;footer&gt; elem tartalmazhat szerzői jogi információt.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;header&gt; használható szekciók címsoraként is.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;footer&gt; csak egyetlen példányban szerepelhet egy oldalon.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A &lt;header&gt; nemcsak az oldal tetején, hanem külön szekciókban is használható (pl. egy cikk fejlécében). A &lt;footer&gt; általában jogi információkat, hivatkozásokat tartalmaz - és többször is szerepelhet egy oldalon, például szekciók végén.',
        },
        {
            fokerdes:
                'Melyik helyzetben indokolt a &lt;nav&gt; elem használata?',
            kerdesek: [
                {
                    kerdes: 'Egy cikk címsorának megadásához',
                    eldont: 0,
                },
                {
                    kerdes: 'Kapcsolódó cikkek listájának megjelenítéséhez',
                    eldont: 0,
                },
                {
                    kerdes: 'Oldalmenü vagy fő navigációs menü létrehozásához',
                    eldont: 1,
                },
                {
                    kerdes: 'Láblécben elhelyezett szerzői jogi szöveghez',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 1,
            indoklas:
                'A &lt;nav&gt; elem szemantikusan navigációs linkek csoportosítására szolgál, például főmenük, oldalsó menük vagy akár láblécek navigációs részei.',
        },
        {
            fokerdes:
                'Mely állítások igazak a &lt;section&gt; és &lt;aside&gt; HTML5 elemekre?',
            kerdesek: [
                {
                    kerdes: 'A &lt;section&gt; elem logikailag kapcsolódó tartalmakat foglalhat magába.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;aside&gt; elem gyakran oldalsávban található és kiegészítő tartalmat tartalmaz.',
                    eldont: 1,
                },
                {
                    kerdes: 'A &lt;section&gt; csak az &lt;article&gt; elemben használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A &lt;aside&gt; kizárólag hirdetések megjelenítésére használható.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
            helyes: 2,
            indoklas:
                'A &lt;section&gt; szemantikus konténer, amely tartalmilag összefüggő blokkokat jelöl (pl. fejezetek, témák). Az &lt;aside&gt; elem nem kizárólag reklámra van - általában kiegészítő, mellékes információkat tartalmaz, például linkeket, oldalsávot.',
        },
        {
            fokerdes: 'Mit jelent a box-sizing: border-box beállítás?',
            kerdesek: [
                {
                    kerdes: 'A padding és a border nem számít bele az elem teljes méretébe.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az elem teljes szélessége a tartalom szélességét, a paddinget és a bordert is tartalmazza.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az elem csak a tartalom méretével egyenlő.',
                    eldont: 0,
                },
                {
                    kerdes: 'Ez az alapértelmezett viselkedés minden böngészőben.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A box-sizing: border-box azt jelenti, hogy a width és height értékek már tartalmazzák a padding és border értékeket is - így az elem nem fogja túllépni a megadott méreteket. Ez sokszor hasznosabb, mint az alapértelmezett content-box.',
        },
        {
            fokerdes:
                'Mely állítások igazak a z-index tulajdonságra vonatkozóan?',
            kerdesek: [
                {
                    kerdes: 'Csak position: relative vagy más pozicionált elemeken működik.',
                    eldont: 1,
                },
                {
                    kerdes: 'Minél nagyobb a z-index értéke, annál hátrébb kerül az elem.',
                    eldont: 0,
                },
                {
                    kerdes: 'A z-index értéke határozza meg az egymást átfedő elemek megjelenítési sorrendjét.',
                    eldont: 1,
                },
                {
                    kerdes: 'A z-index csak negatív szám lehet.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A z-index csak olyan elemen működik, amely pozicionált (relative, absolute, fixed, sticky). Nagyobb érték előrébb helyezi az elemet a megjelenítési rétegekben.',
        },
        {
            fokerdes: 'Mi a célja a clearfix technikának?',
            kerdesek: [
                {
                    kerdes: 'Animációk lassítására használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'Eltünteti a scrollbart a túlcsorduló tartalmaknál.',
                    eldont: 0,
                },
                {
                    kerdes: 'Megakadályozza, hogy a szülőelem összeomoljon, ha csak lebegő (float) elemeket tartalmaz.',
                    eldont: 1,
                },
                {
                    kerdes: 'Kikapcsolja az öröklődést a CSS-ben.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 1,
            indoklas:
                'A clearfix technika megakadályozza, hogy a lebegtetett elemeket tartalmazó szülőelem magassága 0 legyen. Ez úgy történik, hogy egy láthatatlan, tisztító pszeudoelem kerül a tartalom végére.',
        },
        {
            fokerdes: 'Mely állítások igazak a CSS box modellre?',
            kerdesek: [
                {
                    kerdes: 'A margin a legkülső réteg, amely távolságot hoz létre az elem és más elemek között.',
                    eldont: 1,
                },
                {
                    kerdes: 'A padding az elem tartalma körüli belső térköz.',
                    eldont: 1,
                },
                {
                    kerdes: 'A border nem része a box modellnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A content az elem legkülső rétege.',
                    eldont: 0,
                },
            ],
            kep: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
            helyes: 2,
            indoklas:
                'A box modell elemei: content, padding, border, margin. A padding a tartalom és a border között van, míg a margin a legkülső. A border természetesen része a modellnek.',
        },
    ],
];
