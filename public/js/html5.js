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
            helyes: 1,
            indoklas:
                'A &lt;body&gt; elem tartalmazza azokat az elemeket, amelyek a felhasználó számára megjelennek, például szövegeket, képeket és gombokat. A &lt;head&gt; az oldal metaadatait és konfigurációs információit tárolja.',
        },
        {
            fokerdes:
                'Melyik elem szükséges egy érvényes HTML5 dokumentum létrehozásához?',
            kerdesek: [
                {
                    kerdes: '&lt!DOCTYPE html&gt;',
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
            helyes: 3,
            indoklas:
                'A CSS szabályok érvényesülését elsősorban a specifikusság, a deklaráció helye és a forráskódban való sorrendje határozza meg. A HTML elemek sorrendje önmagában nem befolyásolja a CSS alkalmazását.',
        },
    ],
];
