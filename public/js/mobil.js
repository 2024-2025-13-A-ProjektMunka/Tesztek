let mobil = [
    'Mobil alkalmazás-fejlesztés',
    5,
    [
        {
            fokerdes:
                'Melyik állítás nem igaz az Android fejlesztőkörnyezet (IDE) kialakítására? ',
            kerdesek: [
                {
                    kerdes: 'Az Android Studio egy ingyenesen elérhető fejlesztői környezet Android alkalmazásokhoz.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Android Emulator lehetővé teszi az alkalmazások fizikai eszköz nélküli tesztelését.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Android Studio nem támogatja a Java nyelvet.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Android Studio tartalmaz beépített eszközöket a fordításhoz és hibakereséshez.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'Az Android Studio alapértelmezés szerint támogatja a Java-t, Kotlin-t és C++-t is.',
        },
        {
            fokerdes: 'Melyik állítás igaz az Android Emulator használatára?',
            kerdesek: [
                {
                    kerdes: 'Csak akkor futtatható, ha csatlakoztatva van egy fizikai Android eszköz.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak a Google Play szolgáltatásokkal rendelkező alkalmazások tesztelésére használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'A fejlesztő számítógépén virtuálisan futtat Android rendszert teszteléshez.',
                    eldont: 1,
                },
                {
                    kerdes: 'Nem képes emulálni különböző képernyőméreteket.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'Az Android Emulator egy szoftveres eszköz, amely lehetővé teszi az Android rendszer futtatását a fejlesztői gépen.',
        },
        {
            fokerdes:
                'Melyik eszköz felelős az Android alkalmazás lefordításáért és APK fájl generálásáért?',
            kerdesek: [
                {
                    kerdes: 'Gradle',
                    eldont: 1,
                },
                {
                    kerdes: 'Logcat',
                    eldont: 0,
                },
                {
                    kerdes: 'ADB (Android Debug Bridge)',
                    eldont: 0,
                },
                {
                    kerdes: 'DDMS (Dalvik Debug Monitor Service)',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A Gradle egy automatizált build rendszer, amely felel az alkalmazás összeállításáért és APK fájl létrehozásáért.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az Android alkalmazások publikálására?',
            kerdesek: [
                {
                    kerdes: 'Az alkalmazást digitálisan alá kell írni kiadás előtt.',
                    eldont: 0,
                },
                {
                    kerdes: 'A Google Play Console felületén történik a publikálás.',
                    eldont: 0,
                },
                {
                    kerdes: 'Csak emulátorra telepített alkalmazások publikálhatók.',
                    eldont: 1,
                },
                {
                    kerdes: 'A kiadási APK-t vagy AAB-t kell feltölteni a Play Áruházba.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'Az alkalmazások fizikai eszközökre és áruházakba (pl. Google Play) is publikálhatók, nem csak emulátorra.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a React Native fejlesztői környezet kialakítására?',
            kerdesek: [
                {
                    kerdes: 'A Node.js és az npm telepítése szükséges a React Native projektek elindításához.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Expo CLI használható a gyorsabb fejlesztéshez és teszteléshez.',
                    eldont: 0,
                },
                {
                    kerdes: 'A React Native nem igényel semmilyen szerkesztőt vagy editor programot.',
                    eldont: 1,
                },
                {
                    kerdes: 'A npx react-native init parancs új projektet hoz létre.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A React Native fejlesztéshez valamilyen kódszerkesztő (pl. Visual Studio Code) használata erősen ajánlott.',
        },
        {
            fokerdes:
                'Melyik igaz az Expo eszközre a React Native fejlesztés során?',
            kerdesek: [
                {
                    kerdes: 'Az Expo csak iOS eszközön működik, Androidon nem.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Expo egy mobilalkalmazás, amellyel React Native alkalmazásokat lehet futtatni fizikai eszközön.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az Expo csak akkor használható, ha telepítve van Android Studio.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Expo CLI nem használható új projekt létrehozására.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'Az Expo egy mobil app és CLI, amely megkönnyíti a React Native alkalmazások fejlesztését és futtatását valódi eszközön is.',
        },
        {
            fokerdes:
                'Melyik állítás igaz a React Native fejlesztés során használt npm és npx parancsokra?',
            kerdesek: [
                {
                    kerdes: 'Az npm csak grafikus felületen keresztül használható.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az npx parancs segítségével telepítés nélkül is futtathatók eszközök, mint például a react-native CLI.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az npx egy szövegszerkesztő bővítmény.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az npm nem képes csomagok telepítésére.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'npx használatával olyan parancsokat futtathatunk, amelyek nincsnek globálisan telepítve a rendszerre.',
        },
        {
            fokerdes:
                'Melyik módszerrel NEM lehet React Native alkalmazást Android eszközre telepíteni?',
            kerdesek: [
                {
                    kerdes: 'USB-n keresztül ADB segítségével.',
                    eldont: 0,
                },
                {
                    kerdes: 'QR-kód beolvasásával az Expo Go alkalmazásban.',
                    eldont: 0,
                },
                {
                    kerdes: 'Bluetooth-on keresztül közvetlenül a Node.js-ből.',
                    eldont: 1,
                },
                {
                    kerdes: 'A react-native run-android paranccsal, ha az Android eszköz csatlakoztatva van.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'Bluetooth nem használható natív alkalmazás telepítésére; az Android Debug Bridge (ADB) az ajánlott mód.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a Progressive Web App (PWA) alkalmazásokra?',
            kerdesek: [
                {
                    kerdes: 'A PWA-k webtechnológiákkal (HTML, CSS, JavaScript) készülnek.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PWA-k képesek offline is működni a serviceWorker révén.',
                    eldont: 0,
                },
                {
                    kerdes: 'A PWA-kat csak App Store-on keresztül lehet telepíteni.',
                    eldont: 1,
                },
                {
                    kerdes: 'A PWA-k képesek értesítéseket küldeni a felhasználónak.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A PWA-k nem igényelnek app store-os publikációt, telepíthetők böngészőn keresztül is.',
        },
        {
            fokerdes:
                'Melyik állítás igaz a manifest.json fájl szerepére egy PWA-ban?',
            kerdesek: [
                {
                    kerdes: 'A manifest.json csak a weboldal stílusait tartalmazza.',
                    eldont: 0,
                },
                {
                    kerdes: 'A manifest.json lehetővé teszi, hogy a PWA alkalmazás ikonnal, névvel telepíthető legyen.',
                    eldont: 1,
                },
                {
                    kerdes: 'A manifest.json kizárólag a serviceWorker konfigurálására szolgál.',
                    eldont: 0,
                },
                {
                    kerdes: 'A manifest.json nem szükséges a PWA működéséhez.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A manifest.json határozza meg az alkalmazás nevét, ikonját, színét, és lehetővé teszi az eszközre telepítést.',
        },
        {
            fokerdes:
                'Melyik nem igaz a serviceWorker működésére egy PWA esetében?',
            kerdesek: [
                {
                    kerdes: 'A serviceWorker a háttérben fut, és kezeli a gyorsítótárat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A serviceWorker csak egyszer fut le, mikor a weboldalt először megnyitják.',
                    eldont: 1,
                },
                {
                    kerdes: 'A serviceWorker képes elfogni és kezelni a hálózati kéréseket.',
                    eldont: 0,
                },
                {
                    kerdes: 'A serviceWorker lehetővé teszi az offline működést is.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A serviceWorker nem csak egyszer fut le, hanem folyamatosan működik, és figyeli a hálózati eseményeket.',
        },
        {
            fokerdes: 'Melyik eszköz NEM szükséges egy PWA fejlesztéséhez?',
            kerdesek: [
                {
                    kerdes: 'Visual Studio Code vagy más editor',
                    eldont: 0,
                },
                {
                    kerdes: 'Node.js és npm',
                    eldont: 0,
                },
                {
                    kerdes: 'Android Studio',
                    eldont: 1,
                },
                {
                    kerdes: 'Webszerver (pl. live-server vagy express)',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A PWA fejlesztés nem igényli az Android Studio használatát, mivel webes technológiákon alapul.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az Android UI-elemek elrendezésére?',
            kerdesek: [
                {
                    kerdes: 'A LinearLayout egymás alá vagy mellé rendezi a gyermekelemeket.',
                    eldont: 0,
                },
                {
                    kerdes: 'A ConstraintLayout lehetővé teszi az elemek egymáshoz rögzítését.',
                    eldont: 0,
                },
                {
                    kerdes: 'A RelativeLayout csak vízszintesen rendezhető.',
                    eldont: 1,
                },
                {
                    kerdes: 'A layout XML fájlban meghatározhatjuk az elemek elhelyezkedését.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A RelativeLayout nemcsak vízszintesen, hanem függőlegesen is el tud helyezni elemeket egymáshoz képest.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az adatközvetlenítésre (data binding) Android fejlesztésben?',
            kerdesek: [
                {
                    kerdes: 'A data binding lehetővé teszi az adatok és a UI közvetlen összekapcsolását.',
                    eldont: 0,
                },
                {
                    kerdes: 'A data binding automatikusan frissíti a UI-t, ha az adatmodell változik.',
                    eldont: 0,
                },
                {
                    kerdes: 'A data binding csak XML fájlokban használható, Java vagy Kotlin kódban nem.',
                    eldont: 1,
                },
                {
                    kerdes: 'A @Bindable annotációval jelezhetjük a változásra figyelő mezőket.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A data binding XML és programkódban is használható, nem kizárólag XML-ben.',
        },
        {
            fokerdes:
                'Melyik nem jellemző a UI-elemekkel való interakció kezelésére Android alkalmazásban?',
            kerdesek: [
                {
                    kerdes: 'Az `onClickListener` segítségével kezelhetjük a gombnyomásokat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A UI eseményeket csak a manifest fájlban lehet beállítani.',
                    eldont: 1,
                },
                {
                    kerdes: 'A felhasználói interakciók eseménykezelők segítségével figyelhetők.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az interakciókhoz gyakran használunk lambda kifejezéseket Kotlinban.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A manifest fájl nem alkalmas UI interakciók kezelésére, ezeket kódból kell kezelni eseménykezelőkkel.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz az Android UI fejlesztés kapcsán?',
            kerdesek: [
                {
                    kerdes: 'A UI elemeket XML-ben vagy kódból is létrehozhatjuk.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az interakciókat csak XML attribútumokkal kezeljük.',
                    eldont: 1,
                },
                {
                    kerdes: 'Data binding segítségével csökkenthető a kézi frissítések száma.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az Android Studio segíti a vizuális UI tervezést.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'Az interakciók XML attribútumokkal is kezdhetők, de a tényleges kezelés általában Java/Kotlin kódban történik.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a HTTP kérés küldésére mobilalkalmazásban?',
            kerdesek: [
                {
                    kerdes: 'A HTTP kérés elküldéséhez használhatunk fetch, axios vagy Retrofit könyvtárat.',
                    eldont: 0,
                },
                {
                    kerdes: 'A HTTP kérés csak szinkron módon működik mobilalkalmazásban.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON-válasz feldolgozása történhet deszerializálással.',
                    eldont: 0,
                },
                {
                    kerdes: 'A HTTP kérés során a POST kérés általában adatküldésre szolgál.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A HTTP kérés mobilalkalmazásban szinte mindig aszinkron, így nem blokkolja a fő szálat.',
        },
        {
            fokerdes:
                'Mely állítások igazak a JSON adatok szerializálására és deszerializálására mobilalkalmazásban?',
            kerdesek: [
                {
                    kerdes: 'A szerializáció során objektumot alakítunk át JSON szöveggé.',
                    eldont: 1,
                },
                {
                    kerdes: 'A deszerializáció során egy JSON szövegből adatobjektumot hozunk létre.',
                    eldont: 1,
                },
                {
                    kerdes: 'A JSON egy bináris formátum, amit nem lehet szövegesen olvasni.',
                    eldont: 0,
                },
                {
                    kerdes: 'A JSON csak backend rendszerekben használható, mobilon nem.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 2,
            indoklas:
                'A JSON szerializáció és deszerializáció objektum ↔ JSON szöveg átalakítást jelent, amit gyakran használnak mobilfejlesztés során is.',
        },
        {
            fokerdes:
                'Melyik állítás nem igaz a HTTP válasz mentésére és UI-n történő megjelenítésére?',
            kerdesek: [
                {
                    kerdes: 'A válasz tárolható memóriában, adatbázisban vagy fájlban is.',
                    eldont: 0,
                },
                {
                    kerdes: 'A UI-t nem szükséges frissíteni, ha az adat megváltozott.',
                    eldont: 1,
                },
                {
                    kerdes: 'Az állapotkezelő rendszerek (pl. ViewModel) segíthetnek az adatok és a UI szinkronizálásában.',
                    eldont: 0,
                },
                {
                    kerdes: 'Az aszinkron válasz után célszerű frissíteni a megjelenített adatokat.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 1,
            indoklas:
                'A UI-t frissíteni kell, ha az adat megváltozik - különben a felhasználó elavult információt lát.',
        },
        {
            fokerdes:
                'Mely állítások igazak, ha a HTTP válasz tartalmát szeretnénk megjeleníteni az alkalmazásban?',
            kerdesek: [
                {
                    kerdes: 'Az adatot célszerű elmenteni egy állapotkezelőbe vagy memóriába a frissítéshez.',
                    eldont: 1,
                },
                {
                    kerdes: 'A szerializált JSON közvetlenül megjeleníthető minden UI komponensben.',
                    eldont: 0,
                },
                {
                    kerdes: 'A deszerializált adat objektumként jeleníthető meg egy listában vagy szövegként.',
                    eldont: 1,
                },
                {
                    kerdes: 'A UI csak akkor frissíthető, ha újraindítjuk az alkalmazást.',
                    eldont: 0,
                },
            ],
            kep: 'https://m.blog.hu/al/alkalmazasfejlesztes/image/android_ios_vs_crossplatform.png',
            helyes: 2,
            indoklas:
                'Az adatot a memóriában vagy állapotban célszerű tárolni, és a deszerializált objektum használható listák, szövegek megjelenítésére is.',
        },
    ],
];
