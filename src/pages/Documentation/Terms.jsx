import React from "react";
import Markdown from "react-markdown";
import styles from "./Documentation.module.css";
const terms = `# Warunki Korzystania z Usług BugTracker

## Umowa

TO JEST UMOWA MIĘDZY TOBĄ LUB PODMIOTEM, KTÓRY REPREZENTUJESZ (ZWANY DALEJ „TY” LUB „TWOJE”) A ODPOWIEDNIĄ PODMIOTEM KONTRAKTOWYM BugTracker WYMIENIONYM TUTAJ (ZWANY DALEJ „BugTracker”), REGULUJĄCA TWOJE KORZYSTANIE Z PAKIETU BugTracker OPROGRAMOWANIA DO PRODUKTYWNOŚCI BIZNESOWEJ I WSPÓŁPRACY ONLINE.

### Części tej Umowy

Umowa ta składa się z następujących warunków ogólnych (zwanych dalej „Warunki Ogólne”) oraz warunków szczegółowych, o ile takie istnieją, dotyczących korzystania z poszczególnych Usług (zwane dalej „Warunki Specyficzne dla Usług”). W przypadku konfliktu między Warunkami Ogólnymi a Warunkami Specyficznymi dla Usług, Warunki Specyficzne dla Usług mają pierwszeństwo.

### Akceptacja Umowy

Musisz być pełnoletni, aby móc zawrzeć wiążącą umowę i zaakceptować Umowę. Jeśli nie zgadzasz się z Warunkami Ogólnymi, nie korzystaj z żadnych naszych Usług. Jeśli zgadzasz się z Warunkami Ogólnymi, ale nie zgadzasz się z jakimiś Warunkami Specyficznymi dla Usług, nie korzystaj z odpowiadającej Usługi. Możesz zaakceptować Umowę, zaznaczając pole wyboru lub klikając przycisk wskazujący Twoją akceptację Umowy, lub poprzez faktyczne korzystanie z Usług.

### Opis Usługi

Dostarczamy oprogramowanie chmurowe i aplikacje dla firm, w tym powiązane aplikacje offline i mobilne ("Usługa" lub "Usługi"). Możesz korzystać z Usług do osobistego użytku biznesowego lub w celach wewnętrznych w organizacji, którą reprezentujesz. Możesz łączyć się z Usługami za pomocą dowolnej przeglądarki internetowej obsługiwanej przez Usługi. Jesteś odpowiedzialny za uzyskanie dostępu do Internetu i sprzętu niezbędnego do korzystania z Usług. Możesz tworzyć i edytować treści za pomocą swojego konta użytkownika, a jeśli zdecydujesz się na to, możesz publikować i udostępniać takie treści.

### Usługa Beta

Możemy oferować niektóre Usługi jako zamknięte lub otwarte usługi beta ("Usługa Beta" lub „Usługi Beta”) w celu testowania i oceny. Zgadzasz się, że mamy wyłączne prawo i uprawnienia do określenia okresu czasu na testowanie i ocenę Usług Beta. Będziemy jedynym sędzią sukcesu takich testów oraz decyzji, czy zaoferować Usługi Beta jako usługi komercyjne. Nie masz obowiązku nabywania subskrypcji na korzystanie z jakiejkolwiek płatnej Usługi w wyniku subskrypcji na Usługi Beta. Zastrzegamy sobie prawo do całkowitego lub częściowego zaprzestania, w dowolnym czasie i od czasu do czasu, tymczasowego lub stałego zaprzestania dowolnej z Usług Beta, z lub bez powiadomienia. Zgadzasz się, że BugTracker nie będzie ponosić odpowiedzialności wobec Ciebie lub wobec jakiejkolwiek osoby trzeciej za jakiekolwiek szkody związane z, wynikające z lub spowodowane przez modyfikację, zawieszenie lub zaprzestanie jakiejkolwiek z Usług Beta z jakiegokolwiek powodu.

### Bezpłatna wersja próbna

Jeśli zarejestrujesz się na bezpłatną wersję próbną jednej lub więcej Usług, BugTracker udostępni Ci odpowiednie Usługi na zasadach próbnych bezpłatnie do wcześniejszego z następujących terminów: (i) zakończenia okresu bezpłatnej wersji próbnej odpowiednich Usług (chyba że zostanie wcześniej zakończona przez Ciebie), (ii) daty rozpoczęcia okresu płatnej subskrypcji odpowiednich Usług lub (iii) zakończenia przez BugTracker według własnego uznania. Jakiekolwiek dane, które wprowadzisz do Usług oraz jakiekolwiek dostosowania dokonane w Usługach podczas bezpłatnej wersji próbnej, zostaną trwale utracone, chyba że (i) zakupisz odpowiadającą płatną subskrypcję na konto, (ii) zakupisz odpowiednie uaktualnienia Usług lub (iii) wyeksportujesz takie dane przed zakończeniem okresu próbnego. Niezależnie od zawartości niniejszej sekcji, Usługi są oferowane w stanie, w jakim się znajdują podczas bezpłatnej wersji próbnej, bez jakiejkolwiek gwarancji, zobowiązania, wsparcia lub odpowiedzialności, w zakresie dopuszczalnym przez prawo.

### Obowiązki przy rejestracji użytkownika

Musisz zarejestrować konto użytkownika, podając wszystkie wymagane informacje, aby uzyskać dostęp lub korzystać z Usług. Jeśli reprezentujesz organizację i chcesz korzystać z Usług do wewnętrznego użytku korporacyjnego, zalecamy, abyś Ty i wszyscy inni użytkownicy z Twojej organizacji zarejestrowali konta użytkowników, podając swoje dane kontaktowe firmowe. W szczególności zalecamy użycie firmowego adresu e-mail. Zgadzasz się: (i) podać prawdziwe, dokładne, aktualne i kompletne informacje o sobie, jak wymaga tego proces rejestracji; oraz (ii) utrzymywać i szybko aktualizować podane podczas rejestracji informacje, aby były prawdziwe, dokładne, aktualne i kompletne. Jeśli podasz jakiekolwiek informacje, które są nieprawdziwe, nieprecyzyjne, nieaktualne lub niekompletne, lub jeśli BugTracker ma uzasadnione powody, by podejrzewać, że takie informacje są nieprawdziwe, nieprecyzyjne, nieaktualne lub niekompletne, BugTracker może zakończyć Twoje konto użytkownika i odmówić obecnych lub przyszłych korzystania z jakiejkolwiek lub wszystkich Usług.

### Ograniczenia w używaniu

Oprócz wszystkich innych warunków tej Umowy, nie wolno Ci:

1. Przekazywać Usług lub w inny sposób udostępniać je jakiejkolwiek osobie trzeciej.
2. Świadczyć jakiejkolwiek usługi na podstawie Usług bez uprzedniej pisemnej zgody.
3. Pozwolić na współdzielenie licencji użytkownika lub używanie ich przez więcej niż jedną osobę, chyba że poprzez przypisanie licencji użytkownika nowemu użytkownikowi.
4. Próbować demontażu, inżynierii wstecznej lub dekompilacji Usług, o ile nie jest to dozwolone przez obowiązujące prawo.
5. Używać linków stron osób trzecich bez zgody na ich warunki korzystania z witryny.
6. Publikować linki do stron osób trzecich lub używać ich logo, nazwy firmy itp. bez ich uprzedniej pisemnej zgody.
7. Próbować uzyskać nieautoryzowany dostęp do Usług lub powiązanych systemów lub sieci.
8. Używać Usług w sposób, który może uszkodzić, wyłączyć, obciążyć lub zaszkodzić dowolnemu serwerowi, sieci, systemowi komputerowemu, zasobowi BugTracker.
9. Używać Usług do wysyłania lub przechowywania materiału zawierającego wirusy komputerowe, robaki lub inne szkodliwe kody komputerowe, pliki, skrypty lub programy.
10. Używać Usług w sposób, który zakłóca lub zakłóca integralność, bezpieczeństwo lub wydajność Usług, ich składników oraz danych w nich zawartych.
11. Tworzyć fałszywej tożsamości, aby wprowadzić w błąd jakąkolwiek osobę co do tożsamości lub pochodzenia jakiejkolwiek komunikacji.
12. Hostować, wyświetlać, przesyłać, modyfikować, publikować, transmitować, przechowywać, aktualizować lub udostępniać jakiekolwiek informacje należące do innej osoby lub podmiotu, do których nie masz żadnych praw, w tym informacje osobiste lub poufne jakiejkolwiek osoby lub podmiotu, w stosunku do których nie masz zgody lub pozwolenia od takiej osoby lub podmiotu.
13. Używać Usług do przesyłania informacji, które są fałszywe i nieprawdziwe, oraz są pisane lub publikowane w jakiejkolwiek formie, z zamiarem wprowadzenia w błąd lub nękania osoby, podmiotu lub agencji w celu uzyskania korzyści finansowych lub spowodowania jakiejkolwiek szkody jakiejkolwiek osobie.
14. Naruszać jakiegokolwiek obowiązującego prawa lokalnego, stanowego, krajowego lub międzynarodowego.
15. Używać Usług do jakichkolwiek celów konkurencyjnych lub do celów benchmarkingu.
16. Usuawać lub zacierać jakiekolwiek oznaczenia własnościowe lub inne powiadomienia zawarte w Usługach.

### Spamowanie i działalność nielegalna

Zgadzasz się być wyłącznie odpowiedzialnym za treść Twoich przekazów przez Usługi. Zgadzasz się nie używać Usług do celów nielegalnych lub do przesyłania materiału, który jest niezgodny z prawem, zniesławiający, nękający, oszczerczy, naruszający prywatność innych, obraźliwy, groźny, szkodliwy, wulgarny, pornograficzny, obsceniczny lub jest w inny sposób niewłaściwy, obraża uczucia religijne, promuje rasizm, zawiera wirusy lub złośliwe kody lub który narusza lub może naruszać prawa własności intelektualnej lub inne prawa innych. Zgadzasz się nie używać Usług do przesyłania "śmieciowej poczty", "spam", "łańcuszków", „phishing” lub niechcianej masowej dystrybucji e-maili. Zastrzegamy sobie prawo do zakończenia Twojego dostępu do Usług, jeśli istnieją uzasadnione powody, by sądzić, że używałeś Usług do jakiejkolwiek nielegalnej lub nieautoryzowanej działalności.

### Aplikacje osób trzecich

Usługi BugTracker integrują wiele aplikacji osób trzecich (zwane dalej "Aplikacje osób trzecich"). Dostęp i korzystanie z Aplikacji osób trzecich może wymagać akceptacji warunków usługi i polityk prywatności stosowanych do takich Aplikacji osób trzecich (zwane dalej "Warunki osób trzecich"). Jesteś odpowiedzialny za przeczytanie i zrozumienie Warunków osób trzecich przed dostępem lub używaniem jakiejkolwiek Aplikacji osób trzecich. Potwierdzasz i zgadzasz się, że BugTracker nie jest odpowiedzialne za żadne Aplikacje osób trzecich. Chociaż postaramy się dostarczyć Ci wcześniejsze powiadomienie, kiedy jest to możliwe, potwierdzasz i zgadzasz się, że BugTracker może, w dowolnym czasie i według własnego uznania, i bez żadnego powiadomienia, zawiesić, ograniczyć lub wyłączyć dostęp do lub usunąć z Usług BugTracker, jakąkolwiek Aplikację osób trzecich, bez żadnej odpowiedzialności wobec Ciebie, w tym bez ograniczeń za jakiekolwiek straty zysków, przychodów, danych, dobrej woli lub innych strat niematerialnych.

### Opłaty i płatności

Usługi są dostępne w ramach planów subskrypcyjnych różnych czasów trwania. Płatności za plany subskrypcyjne o czasie trwania krótszym niż rok mogą być dokonywane tylko kartą kredytową. Twoja subskrypcja zostanie automatycznie odnowiona na koniec każdego okresu subskrypcji, chyba że zdegradujesz swój płatny plan subskrypcyjny do planu bezpłatnego lub poinformujesz nas, że nie chcesz odnawiać subskrypcji. W momencie automatycznego odnowienia opłata za subskrypcję zostanie obciążona kartą kredytową ostatnio używaną przez Ciebie. Dajemy Ci możliwość zmiany szczegółów, jeśli chcesz, aby płatność za odnowienie była dokonana za pomocą innej karty kredytowej. Jeśli nie chcesz odnowić subskrypcji, musisz poinformować nas o tym co najmniej siedem dni przed datą odnowienia. Jeśli nie zdegradujesz do planu bezpłatnego i nie poinformujesz nas, że nie chcesz odnawiać subskrypcji, będziesz uznany za upoważnionego BugTracker do obciążenia opłatą za subskrypcję kartę kredytową ostatnio używaną przez Ciebie. Kliknij tutaj, aby dowiedzieć się więcej o naszej Polityce Zwrotów.

Od czasu do czasu możemy zmieniać cenę dowolnej Usługi lub pobierać opłaty za korzystanie z Usług, które obecnie są dostępne bezpłatnie. Jakiekolwiek zwiększenie opłat nie będzie miało zastosowania do końca bieżącego cyklu rozliczeniowego. Nie będziesz obciążony za korzystanie z żadnej Usługi, chyba że wybrałeś płatny plan subskrypcyjny.

W przypadku, gdy jakikolwiek podatek, taki jak GST, VAT, podatek od sprzedaży lub podobny jest wymagany przez BugTracker zgodnie z jakimikolwiek lokalnymi, stanowymi, prowincjonalnymi lub zagranicznymi przepisami prawnymi w związku z Twoją subskrypcją naszych Usług ("Podatki"), BugTracker wystawi Ci fakturę za takie Podatki. Zgadzasz się zapłacić BugTracker takie Podatki oprócz opłat abonamentowych. BugTracker dostarczy Ci fakturę w formacie przewidzianym przez obowiązujące lokalne, stanowe, prowincjonalne lub zagraniczne przepisy prawne, aby pomóc Ci uzyskać odpowiednią zaliczkę na podatek naliczony za takie Podatki.

### Konta organizacyjne i administratorzy

Gdy rejestrujesz konto dla swojej organizacji, możesz określić jednego lub więcej administratorów. Administratorzy będą mieli prawo konfigurować Usługi zgodnie z Twoimi wymaganiami oraz zarządzać użytkownikami końcowymi w koncie Twojej organizacji. Jeśli konto Twojej organizacji zostało utworzone i skonfigurowane w Twoim imieniu przez osobę trzecią, prawdopodobnie taka osoba trzecia przyjęła rolę administratora dla Twojego konta organizacji. Upewnij się, że zawarłeś odpowiednią umowę z taką osobą trzecią określającą role i ograniczenia tej osoby jako administratora konta Twojej organizacji.

Jesteś odpowiedzialny za (i) zapewnienie poufności hasła do konta Twojej organizacji, (ii) wyznaczenie kompetentnych osób jako administratorów do zarządzania kontem Twojej organizacji oraz (iii) zapewnienie, że wszystkie działania mające miejsce w związku z kontem Twojej organizacji są zgodne z tą Umową. Rozumiesz, że BugTracker nie jest odpowiedzialne za administrację konta i wewnętrzne zarządzanie Usługami dla Ciebie.

Jesteś odpowiedzialny za podjęcie niezbędnych kroków w celu zapewnienia, że Twoja organizacja nie straci kontroli nad kontami administratorów. Możesz określić proces, który ma być przestrzegany w przypadku takiej utraty kontroli nad kontami administratorów, wysyłając e-mail na adres legal@BugTracker.com, pod warunkiem, że proces ten jest akceptowalny dla BugTracker. W przypadku braku określonego procesu odzyskiwania konta administratora, BugTracker może przekazać kontrolę nad kontem administratora osobie dostarczającej dowody satysfakcjonujące BugTracker, świadczące o upoważnieniu do działania w imieniu organizacji. Zgadzasz się nie obwiniać BugTracker za konsekwencje jakichkolwiek działań podjętych przez BugTracker w dobrej wierze w tej sprawie.

### Informacje osobiste i prywatność

Informacje osobiste, które dostarczasz BugTracker za pośrednictwem Usługi, są regulowane Polityką Prywatności BugTracker. Twoja decyzja o korzystaniu z Usługi oznacza akceptację warunków Polityki Prywatności BugTracker. Jesteś odpowiedzialny za zachowanie poufności swojej nazwy użytkownika, hasła i innych wrażliwych informacji. Jesteś odpowiedzialny za wszystkie działania, które mają miejsce na Twoim koncie użytkownika, i zgadzasz się niezwłocznie powiadomić nas o jakimkolwiek nieautoryzowanym użytkowaniu Twojego konta użytkownika za pośrednictwem e-maila na adres accounts@BugTracker.com lub dzwoniąc na którykolwiek z numerów wymienionych na https://www.BugTracker.com/contact.html. Nie jesteśmy odpowiedzialni za żadne straty lub szkody dla Ciebie lub dla jakiejkolwiek osoby trzeciej, które powstały w wyniku jakiegokolwiek nieautoryzowanego dostępu i/lub użytkowania Twojego konta użytkownika lub w inny sposób.

### Komunikacja od BugTracker

Usługa może zawierać pewne komunikaty od BugTracker, takie jak ogłoszenia usług, wiadomości administracyjne i biuletyny. Rozumiesz, że te komunikaty są uznawane za część korzystania z Usług. Jako część naszej polityki zapewnienia Ci całkowitej prywatności, zapewniamy Ci również możliwość rezygnacji z otrzymywania biuletynów od nas. Jednakże nie będziesz mógł zrezygnować z otrzymywania ogłoszeń usług i wiadomości administracyjnych.

### Skargi

Jeśli otrzymamy skargę od jakiejkolwiek osoby w związku z Twoją działalnością jako część korzystania z Usług, przekażemy skargę na główny adres e-mail Twojego konta użytkownika. Musisz odpowiedzieć na skargę bezpośrednio w ciągu 10 dni od otrzymania przekazanej przez nas skargi i wysłać kopię BugTracker w komunikacji. Jeśli nie odpowiesz na skargę w ciągu 10 dni od daty naszego e-maila do Ciebie, możemy ujawnić Twoje imię i dane kontaktowe skarżącemu, aby umożliwić skarżącemu podjęcie działań prawnych przeciwko Tobie. Rozumiesz, że Twoje nie odpowiedzenie na przekazaną skargę w ciągu 10 dni od daty naszego e-maila będzie traktowane jako Twoja zgoda na ujawnienie Twojego imienia i danych kontaktowych przez BugTracker skarżącemu.

### Polityka dotycząca nieaktywnych kont użytkowników

Zastrzegamy sobie prawo do zakończenia bezpłatnych kont użytkowników, które są nieaktywne przez ciągły okres 120 dni. W przypadku takiego zakończenia wszystkie dane związane z takim kontem użytkownika zostaną usunięte. Zapewniamy Ci wcześniejsze powiadomienie o takim zakończeniu oraz możliwość wykonania kopii zapasowej danych. Polityka usuwania danych może być stosowana w odniesieniu do dowolnych lub wszystkich Usług. Każda Usługa będzie traktowana jako niezależna i odrębna usługa do celów obliczania okresu nieaktywności. Innymi słowy, aktywność w jednej z Usług nie wystarczy, aby utrzymać Twoje konto użytkownika w innej Usłudze jako aktywne. W przypadku kont z więcej niż jednym użytkownikiem, jeśli przynajmniej jeden z użytkowników jest aktywny, konto nie będzie uznane za nieaktywne.

### Własność danych

Szanujemy Twoje prawo do własności treści utworzonych lub przechowywanych przez Ciebie. Jesteś właścicielem treści utworzonych lub przechowywanych przez Ciebie. O ile nie zezwolisz na to wyraźnie, Twoje korzystanie z Usług nie udziela BugTracker licencji na używanie, reprodukowanie, adaptowanie, modyfikowanie, publikowanie lub dystrybuowanie treści utworzonych przez Ciebie lub przechowywanych na Twoim koncie użytkownika w celach komercyjnych, marketingowych lub jakichkolwiek podobnych. Ale udzielasz BugTracker zgody na dostęp, kopiowanie, dystrybucję, przechowywanie, transmisję, formatowanie, publiczne wyświetlanie i publiczne wykonywanie treści Twojego konta użytkownika wyłącznie w celu świadczenia Usług dla Ciebie.

### Lokalizacja hostingu

Lokalizacja obiektu chmurowego, z którego korzystasz, zależy od przypisania Twojego regionu/kraju do dostępnych obiektów chmurowych w momencie rejestracji. Możemy przeprowadzić migrację Twojego konta lub wymagać od Ciebie migracji konta do innego obiektu chmurowego w przypadku jakichkolwiek aktualizacji mapowania regionu/kraju do obiektu chmurowego w dowolnym momencie. Nie powinieneś maskować swojego adresu protokołu internetowego (IP) w momencie rejestracji, ponieważ Twój region/kraj jest określany na podstawie Twojego adresu IP. Jeśli w dowolnym momencie stwierdzimy, że Twój rzeczywisty region/kraj różni się od regionu/kraju w naszych zapisach, BugTracker może podjąć odpowiednie działania, takie jak migracja Twojego konta lub wymaganie migracji Twojego konta do obiektu chmurowego odpowiadającego Twojemu regionowi/krajowi, lub zamknięcie Twojego konta i odmowa świadczenia Usługi dla Ciebie. Jeśli korzystasz z obiektu chmurowego poza swoim regionem/krajem, a grupa BugTracker ma biuro w Twoim regionie/kraju, oprócz przechowywania danych w przypisanym Ci obiekcie chmurowym, możemy przechowywać lokalną kopię danych w Twoim regionie/kraju.

### Treści generowane przez użytkownika

Możesz przesyłać lub publikować treści utworzone przez Ciebie za pomocą dowolnej z Usług lub w inny sposób. Jednakże jesteś wyłącznie odpowiedzialny za takie treści oraz za konsekwencje ich przesyłania lub publikacji. Jakakolwiek treść, która stanie się publiczna, będzie dostępna publicznie przez Internet i może być indeksowana przez wyszukiwarki. Jesteś odpowiedzialny za zapewnienie, że nie udostępnisz przypadkowo żadnych prywatnych treści publicznie. Jakakolwiek treść, którą możesz otrzymać od innych użytkowników Usług, jest dostarczana Tobie TAK JAK JEST do Twojego użytku informacyjnego i osobistego, i zgadzasz się nie używać, kopiować, reprodukować, dystrybuować, transmitować, nadawać, wyświetlać, sprzedawać, licencjonować lub w inny sposób wykorzystywać takiej treści w jakimkolwiek celu, bez wyraźnej pisemnej zgody osoby, która posiada prawa do takiej treści. W trakcie korzystania z dowolnej z Usług, jeśli napotkasz jakąkolwiek treść z powiadomieniem o prawach autorskich lub jakąkolwiek funkcją ochrony kopiowania, zgadzasz się nie usuwać takich powiadomień o prawach autorskich ani nie wyłączać takich funkcji ochrony kopiowania, jak to ma miejsce. Udostępniając jakąkolwiek treść chronioną prawami autorskimi lub możliwą do chronienia prawami autorskimi w dowolnej z Usług, potwierdzasz, że masz zgodę, autoryzację lub pozwolenie, jak to wymagane, od każdej osoby, która może rościć sobie prawa do takiej treści, aby udostępnić taką treść w taki sposób. Ponadto, udostępniając jakąkolwiek treść w wyżej wymieniony sposób, wyraźnie zgadzasz się, że BugTracker ma prawo zablokować dostęp do lub usunąć taką treść udostępnioną przez Ciebie, jeśli BugTracker otrzyma skargi dotyczące jakiejkolwiek nielegalności lub naruszenia praw osób trzecich w takiej treści. Korzystając z dowolnej z Usług i przesyłając lub publikując jakąkolwiek treść za pomocą takiej Usługi, wyraźnie zgadzasz się na rozstrzyganie kwestii legalności lub naruszenia praw osób trzecich w takiej treści przez agenta wyznaczonego przez BugTracker do tego celu.

### Pliki próbne i aplikacje

BugTracker może dostarczać pliki próbne i aplikacje w celu demonstracji możliwości efektywnego korzystania z Usług dla konkretnych celów. Informacje zawarte w takich plikach próbnych i aplikacjach składają się z losowych danych. BugTracker nie udziela żadnej gwarancji, wyraźnej ani domniemanej, co do dokładności, użyteczności, kompletności lub niezawodności tych informacji lub plików próbnych i aplikacji.

### Znaki handlowe

'BugTracker', logo BugTracker, nazwy poszczególnych Usług oraz ich loga są znakami handlowymi BugTracker oration Private Limited. Zgadzasz się nie wyświetlać ani nie używać znaków handlowych BugTracker w żaden sposób bez wcześniejszej zgody BugTracker.

### Zrzeczenie się gwarancji

WYRAŹNIE ROZUMIESZ I ZGADZASZ SIĘ, ŻE KORZYSTANIE Z USŁUG JEST NA TWOJE WŁASNE RYZYKO. USŁUGI DOSTARCZANE SĄ NA ZASADACH "TAK JAK SĄ" I "JAK DOSTĘPNE". BugTracker WYRAŹNIE ZRZEKA SIĘ WSZELKICH GWARANCJI JAKIEGOKOLWIEK RODZAJU, CZY TO WYRAŹNYCH, CZY DOMNIEMANYCH, W TYM MIĘDZY INNYMI GWARANCJI PRZYDATNOŚCI HANDLOWEJ I PRZYDATNOŚCI DO KONKRETNEGO CELU. BugTracker NIE GWARANTUJE, ŻE USŁUGI BĘDĄ DZIAŁAŁY BEZPRZERWOWO, PUNKTUALNIE, BEZPIECZNIE LUB BEZ BŁĘDÓW. KORZYSTANIE Z MATERIAŁÓW POBRANYCH LUB UZYSKANYCH PRZEZ KORZYSTANIE Z USŁUG LEŻY W TWOJEJ WŁASNEJ DYSKRECJI I NA TWOJE WŁASNE RYZYKO, A TY JESTEŚ WYŁĄCZNIE ODPOWIEDZIALNY ZA EWENTUALNE SZKODY WYRZĄDZONE TWOJEMU SYSTEMOWI KOMPUTEROWEMU, TELEFONOWI KOMÓRKOWEMU, URZĄDZENIU BEZPRZEWODOWEMU LUB DANYM, KTÓRE MOGĄ WYNIKNĄĆ Z KORZYSTANIA Z USŁUG LUB POBRANIA TAKICH MATERIAŁÓW. ŻADNE PORADY LUB INFORMACJE, CZY TO PISEMNE, CZY USTNE, UZYSKANE OD BugTracker, JEJ PRACOWNIKÓW LUB PRZEDSTAWICIELI, NIE STWORZĄ GWARANCJI NIE WYRAŹNIE OKREŚLONEJ W UMOWIE.

### Ograniczenie odpowiedzialności

Zgadzasz się, że BugTracker nie będzie w żadnym przypadku odpowiedzialne za jakiekolwiek szkody wtórne, przypadkowe, pośrednie, specjalne, karne ani inne szkody czy straty jakkolwiek spowodowane lub wynikające z Twojego użytkowania lub niemożności użytkowania usługi, nawet jeżeli BugTracker zostało poinformowane o możliwości takich szkód. W żadnym wypadku całkowita odpowiedzialność BugTracker względem Ciebie z tytułu jakiejkolwiek usługi, bezpośrednia bądź pośrednia, nie przekroczy tysiąca dolarów (1000 USD) lub opłat zapłaconych przez Ciebie w ciągu dwunastu (12) miesięcy poprzedzających pierwsze zdarzenie, które dało podstawę do odpowiedzialności, w zależności od tego, która kwota jest wyższa.

### Zwolnienie z odpowiedzialności

Zgadzasz się zrekompensować i zwolnić z odpowiedzialności BugTracker, jego dyrektorów, pracowników, dostawców i afiliantów od wszelkich strat, uszczerbków, grzywien i wydatków (w tym honoraria adwokackie i koszty) wynikających z roszczeń, że użyłeś Usług w sposób naruszający prawa innej strony, naruszający prawo, naruszenia postanowień niniejszej Umowy lub jakiekolwiek inne roszczenia związane z Twoim użytkowaniem Usług, o ile takie użytkowanie nie było autoryzowane przez BugTracker.

### Prawo właściwe i jurysdykcja

Prawo właściwe i jurysdykcja, które będą miały zastosowanie w przypadku jakiegokolwiek sporu czy procesu sądowego wynikającego z niniejszej Umowy, będą zależały od adresu rozliczeniowego, jeśli jesteś płatnym klientem, oraz od stanu lub kraju zamieszkania w pozostałych przypadkach. Zgodnie z tym każda ze stron zgadza się na prawo właściwe (bez uwzględniania zasad kolizyjnych prawa) i wyłączną jurysdykcję sądów wymienionych tutaj w przypadku jakiegokolwiek sporu czy procesu sądowego wynikającego z niniejszej Umowy.

### Zawieszenie i zakończenie

Możemy zawiesić Twoje konto użytkownika lub tymczasowo wyłączyć dostęp do całości lub części Usługi w przypadku podejrzenia o działalność nielegalną, długotrwałą nieaktywność lub na żądanie organów ścigania lub innych agencji rządowych. Załączone obiekcje dotyczące zawieszenia lub wyłączenia kont użytkowników powinny zostać zgłoszone na adres legal@BugTracker.com w ciągu trzydziestu dni od powiadomienia o zawieszeniu. Możemy zakończyć zawieszone lub wyłączone konto użytkownika po trzydziestu dniach. Zakończymy również Twoje konto użytkownika na Twoje żądanie.

### Zmiana Warunków Umowy

Możemy zmienić niniejszą Umowę w dowolnym momencie, informując Cię o tym poprzez ogłoszenie serwisowe lub wysyłając e-mail na Twój główny adres e-mailowy. Jeśli wprowadzimy znaczące zmiany w Umowie, które wpływają na Twoje prawa, zostaniesz poinformowany o tych zmianach przynajmniej na 30 dni przed ich wprowadzeniem, za pomocą e-maila wysłanego na Twój główny adres e-mailowy. Możesz zakończyć korzystanie z Usług, wysyłając BugTracker powiadomienie e-mailem w ciągu 30 dni od momentu powiadomienia o dostępności zmienionej Umowy, jeżeli zmiana Umowy znacząco wpływa na Twoje prawa w związku z korzystaniem z Usług. W przypadku takiego zakończenia masz prawo do proporcjonalnego zwrotu niewykorzystanej części opłat prepaid. Kontynuacja korzystania z Usługi po dniu wejścia w życie zmian w Umowie będzie uznana za Twoją zgodę na zmienioną Umowę.

### Koniec Warunków Umowy

Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące tej Umowy, skontaktuj się z nami pod adresem legal@BugTracker.com.

# Warunki Korzystania z Usług BugTracker

## Umowa

TO JEST UMOWA MIĘDZY TOBĄ LUB PODMIOTEM, KTÓRY REPREZENTUJESZ (ZWANY DALEJ „TY” LUB „TWOJE”) A ODPOWIEDNIĄ PODMIOTEM KONTRAKTOWYM BugTracker WYMIENIONYM TUTAJ (ZWANY DALEJ „BugTracker”), REGULUJĄCA TWOJE KORZYSTANIE Z PAKIETU BugTracker OPROGRAMOWANIA DO PRODUKTYWNOŚCI BIZNESOWEJ I WSPÓŁPRACY ONLINE.

### Części tej Umowy

Umowa ta składa się z następujących warunków ogólnych (zwanych dalej „Warunki Ogólne”) oraz warunków szczegółowych, o ile takie istnieją, dotyczących korzystania z poszczególnych Usług (zwane dalej „Warunki Specyficzne dla Usług”). W przypadku konfliktu między Warunkami Ogólnymi a Warunkami Specyficznymi dla Usług, Warunki Specyficzne dla Usług mają pierwszeństwo.

### Akceptacja Umowy

Musisz być pełnoletni, aby móc zawrzeć wiążącą umowę i zaakceptować Umowę. Jeśli nie zgadzasz się z Warunkami Ogólnymi, nie korzystaj z żadnych naszych Usług. Jeśli zgadzasz się z Warunkami Ogólnymi, ale nie zgadzasz się z jakimiś Warunkami Specyficznymi dla Usług, nie korzystaj z odpowiadającej Usługi. Możesz zaakceptować Umowę, zaznaczając pole wyboru lub klikając przycisk wskazujący Twoją akceptację Umowy, lub poprzez faktyczne korzystanie z Usług.

### Opis Usługi

Dostarczamy oprogramowanie chmurowe i aplikacje dla firm, w tym powiązane aplikacje offline i mobilne ("Usługa" lub "Usługi"). Możesz korzystać z Usług do osobistego użytku biznesowego lub w celach wewnętrznych w organizacji, którą reprezentujesz. Możesz łączyć się z Usługami za pomocą dowolnej przeglądarki internetowej obsługiwanej przez Usługi. Jesteś odpowiedzialny za uzyskanie dostępu do Internetu i sprzętu niezbędnego do korzystania z Usług. Możesz tworzyć i edytować treści za pomocą swojego konta użytkownika, a jeśli zdecydujesz się na to, możesz publikować i udostępniać takie treści.

### Usługa Beta

Możemy oferować niektóre Usługi jako zamknięte lub otwarte usługi beta ("Usługa Beta" lub „Usługi Beta”) w celu testowania i oceny. Zgadzasz się, że mamy wyłączne prawo i uprawnienia do określenia okresu czasu na testowanie i ocenę Usług Beta. Będziemy jedynym sędzią sukcesu takich testów oraz decyzji, czy zaoferować Usługi Beta jako usługi komercyjne. Nie masz obowiązku nabywania subskrypcji na korzystanie z jakiejkolwiek płatnej Usługi w wyniku subskrypcji na Usługi Beta. Zastrzegamy sobie prawo do całkowitego lub częściowego zaprzestania, w dowolnym czasie i od czasu do czasu, tymczasowego lub stałego zaprzestania dowolnej z Usług Beta, z lub bez powiadomienia. Zgadzasz się, że BugTracker nie będzie ponosić odpowiedzialności wobec Ciebie lub wobec jakiejkolwiek osoby trzeciej za jakiekolwiek szkody związane z, wynikające z lub spowodowane przez modyfikację, zawieszenie lub zaprzestanie jakiejkolwiek z Usług Beta z jakiegokolwiek powodu.

### Bezpłatna wersja próbna

Jeśli zarejestrujesz się na bezpłatną wersję próbną jednej lub więcej Usług, BugTracker udostępni Ci odpowiednie Usługi na zasadach próbnych bezpłatnie do wcześniejszego z następujących terminów: (i) zakończenia okresu bezpłatnej wersji próbnej odpowiednich Usług (chyba że zostanie wcześniej zakończona przez Ciebie), (ii) daty rozpoczęcia okresu płatnej subskrypcji odpowiednich Usług lub (iii) zakończenia przez BugTracker według własnego uznania. Jakiekolwiek dane, które wprowadzisz do Usług oraz jakiekolwiek dostosowania dokonane w Usługach podczas bezpłatnej wersji próbnej, zostaną trwale utracone, chyba że (i) zakupisz odpowiadającą płatną subskrypcję na konto, (ii) zakupisz odpowiednie uaktualnienia Usług lub (iii) wyeksportujesz takie dane przed zakończeniem okresu próbnego. Niezależnie od zawartości niniejszej sekcji, Usługi są oferowane w stanie, w jakim się znajdują podczas bezpłatnej wersji próbnej, bez jakiejkolwiek gwarancji, zobowiązania, wsparcia lub odpowiedzialności, w zakresie dopuszczalnym przez prawo.

### Obowiązki przy rejestracji użytkownika

Musisz zarejestrować konto użytkownika, podając wszystkie wymagane informacje, aby uzyskać dostęp lub korzystać z Usług. Jeśli reprezentujesz organizację i chcesz korzystać z Usług do wewnętrznego użytku korporacyjnego, zalecamy, abyś Ty i wszyscy inni użytkownicy z Twojej organizacji zarejestrowali konta użytkowników, podając swoje dane kontaktowe firmowe. W szczególności zalecamy użycie firmowego adresu e-mail. Zgadzasz się: (i) podać prawdziwe, dokładne, aktualne i kompletne informacje o sobie, jak wymaga tego proces rejestracji; oraz (ii) utrzymywać i szybko aktualizować podane podczas rejestracji informacje, aby były prawdziwe, dokładne, aktualne i kompletne. Jeśli podasz jakiekolwiek informacje, które są nieprawdziwe, nieprecyzyjne, nieaktualne lub niekompletne, lub jeśli BugTracker ma uzasadnione powody, by podejrzewać, że takie informacje są nieprawdziwe, nieprecyzyjne, nieaktualne lub niekompletne, BugTracker może zakończyć Twoje konto użytkownika i odmówić obecnych lub przyszłych korzystania z jakiejkolwiek lub wszystkich Usług.

### Ograniczenia w używaniu

Oprócz wszystkich innych warunków tej Umowy, nie wolno Ci:

1. Przekazywać Usług lub w inny sposób udostępniać je jakiejkolwiek osobie trzeciej.
2. Świadczyć jakiejkolwiek usługi na podstawie Usług bez uprzedniej pisemnej zgody.
3. Pozwolić na współdzielenie licencji użytkownika lub używanie ich przez więcej niż jedną osobę, chyba że poprzez przypisanie licencji użytkownika nowemu użytkownikowi.
4. Próbować demontażu, inżynierii wstecznej lub dekompilacji Usług, o ile nie jest to dozwolone przez obowiązujące prawo.
5. Używać linków stron osób trzecich bez zgody na ich warunki korzystania z witryny.
6. Publikować linki do stron osób trzecich lub używać ich logo, nazwy firmy itp. bez ich uprzedniej pisemnej zgody.
7. Próbować uzyskać nieautoryzowany dostęp do Usług lub powiązanych systemów lub sieci.
8. Używać Usług w sposób, który może uszkodzić, wyłączyć, obciążyć lub zaszkodzić dowolnemu serwerowi, sieci, systemowi komputerowemu, zasobowi BugTracker.
9. Używać Usług do wysyłania lub przechowywania materiału zawierającego wirusy komputerowe, robaki lub inne szkodliwe kody komputerowe, pliki, skrypty lub programy.
10. Używać Usług w sposób, który zakłóca lub zakłóca integralność, bezpieczeństwo lub wydajność Usług, ich składników oraz danych w nich zawartych.
11. Tworzyć fałszywej tożsamości, aby wprowadzić w błąd jakąkolwiek osobę co do tożsamości lub pochodzenia jakiejkolwiek komunikacji.
12. Hostować, wyświetlać, przesyłać, modyfikować, publikować, transmitować, przechowywać, aktualizować lub udostępniać jakiekolwiek informacje należące do innej osoby lub podmiotu, do których nie masz żadnych praw, w tym informacje osobiste lub poufne jakiejkolwiek osoby lub podmiotu, w stosunku do których nie masz zgody lub pozwolenia od takiej osoby lub podmiotu.
13. Używać Usług do przesyłania informacji, które są fałszywe i nieprawdziwe, oraz są pisane lub publikowane w jakiejkolwiek formie, z zamiarem wprowadzenia w błąd lub nękania osoby, podmiotu lub agencji w celu uzyskania korzyści finansowych lub spowodowania jakiejkolwiek szkody jakiejkolwiek osobie.
14. Naruszać jakiegokolwiek obowiązującego prawa lokalnego, stanowego, krajowego lub międzynarodowego.
15. Używać Usług do jakichkolwiek celów konkurencyjnych lub do celów benchmarkingu.
16. Usuawać lub zacierać jakiekolwiek oznaczenia własnościowe lub inne powiadomienia zawarte w Usługach.

### Spamowanie i działalność nielegalna

Zgadzasz się być wyłącznie odpowiedzialnym za treść Twoich przekazów przez Usługi. Zgadzasz się nie używać Usług do celów nielegalnych lub do przesyłania materiału, który jest niezgodny z prawem, zniesławiający, nękający, oszczerczy, naruszający prywatność innych, obraźliwy, groźny, szkodliwy, wulgarny, pornograficzny, obsceniczny lub jest w inny sposób niewłaściwy, obraża uczucia religijne, promuje rasizm, zawiera wirusy lub złośliwe kody lub który narusza lub może naruszać prawa własności intelektualnej lub inne prawa innych. Zgadzasz się nie używać Usług do przesyłania "śmieciowej poczty", "spam", "łańcuszków", „phishing” lub niechcianej masowej dystrybucji e-maili. Zastrzegamy sobie prawo do zakończenia Twojego dostępu do Usług, jeśli istnieją uzasadnione powody, by sądzić, że używałeś Usług do jakiejkolwiek nielegalnej lub nieautoryzowanej działalności.

### Aplikacje osób trzecich

Usługi BugTracker integrują wiele aplikacji osób trzecich (zwane dalej "Aplikacje osób trzecich"). Dostęp i korzystanie z Aplikacji osób trzecich może wymagać akceptacji warunków usługi i polityk prywatności stosowanych do takich Aplikacji osób trzecich (zwane dalej "Warunki osób trzecich"). Jesteś odpowiedzialny za przeczytanie i zrozumienie Warunków osób trzecich przed dostępem lub używaniem jakiejkolwiek Aplikacji osób trzecich. Potwierdzasz i zgadzasz się, że BugTracker nie jest odpowiedzialne za żadne Aplikacje osób trzecich. Chociaż postaramy się dostarczyć Ci wcześniejsze powiadomienie, kiedy jest to możliwe, potwierdzasz i zgadzasz się, że BugTracker może, w dowolnym czasie i według własnego uznania, i bez żadnego powiadomienia, zawiesić, ograniczyć lub wyłączyć dostęp do lub usunąć z Usług BugTracker, jakąkolwiek Aplikację osób trzecich, bez żadnej odpowiedzialności wobec Ciebie, w tym bez ograniczeń za jakiekolwiek straty zysków, przychodów, danych, dobrej woli lub innych strat niematerialnych.

### Opłaty i płatności

Usługi są dostępne w ramach planów subskrypcyjnych różnych czasów trwania. Płatności za plany subskrypcyjne o czasie trwania krótszym niż rok mogą być dokonywane tylko kartą kredytową. Twoja subskrypcja zostanie automatycznie odnowiona na koniec każdego okresu subskrypcji, chyba że zdegradujesz swój płatny plan subskrypcyjny do planu bezpłatnego lub poinformujesz nas, że nie chcesz odnawiać subskrypcji. W momencie automatycznego odnowienia opłata za subskrypcję zostanie obciążona kartą kredytową ostatnio używaną przez Ciebie. Dajemy Ci możliwość zmiany szczegółów, jeśli chcesz, aby płatność za odnowienie była dokonana za pomocą innej karty kredytowej. Jeśli nie chcesz odnowić subskrypcji, musisz poinformować nas o tym co najmniej siedem dni przed datą odnowienia. Jeśli nie zdegradujesz do planu bezpłatnego i nie poinformujesz nas, że nie chcesz odnawiać subskrypcji, będziesz uznany za upoważnionego BugTracker do obciążenia opłatą za subskrypcję kartę kredytową ostatnio używaną przez Ciebie. Kliknij tutaj, aby dowiedzieć się więcej o naszej Polityce Zwrotów.

Od czasu do czasu możemy zmieniać cenę dowolnej Usługi lub pobierać opłaty za korzystanie z Usług, które obecnie są dostępne bezpłatnie. Jakiekolwiek zwiększenie opłat nie będzie miało zastosowania do końca bieżącego cyklu rozliczeniowego. Nie będziesz obciążony za korzystanie z żadnej Usługi, chyba że wybrałeś płatny plan subskrypcyjny.

W przypadku, gdy jakikolwiek podatek, taki jak GST, VAT, podatek od sprzedaży lub podobny jest wymagany przez BugTracker zgodnie z jakimikolwiek lokalnymi, stanowymi, prowincjonalnymi lub zagranicznymi przepisami prawnymi w związku z Twoją subskrypcją naszych Usług ("Podatki"), BugTracker wystawi Ci fakturę za takie Podatki. Zgadzasz się zapłacić BugTracker takie Podatki oprócz opłat abonamentowych. BugTracker dostarczy Ci fakturę w formacie przewidzianym przez obowiązujące lokalne, stanowe, prowincjonalne lub zagraniczne przepisy prawne, aby pomóc Ci uzyskać odpowiednią zaliczkę na podatek naliczony za takie Podatki.

### Konta organizacyjne i administratorzy

Gdy rejestrujesz konto dla swojej organizacji, możesz określić jednego lub więcej administratorów. Administratorzy będą mieli prawo konfigurować Usługi zgodnie z Twoimi wymaganiami oraz zarządzać użytkownikami końcowymi w koncie Twojej organizacji. Jeśli konto Twojej organizacji zostało utworzone i skonfigurowane w Twoim imieniu przez osobę trzecią, prawdopodobnie taka osoba trzecia przyjęła rolę administratora dla Twojego konta organizacji. Upewnij się, że zawarłeś odpowiednią umowę z taką osobą trzecią określającą role i ograniczenia tej osoby jako administratora konta Twojej organizacji.

Jesteś odpowiedzialny za (i) zapewnienie poufności hasła do konta Twojej organizacji, (ii) wyznaczenie kompetentnych osób jako administratorów do zarządzania kontem Twojej organizacji oraz (iii) zapewnienie, że wszystkie działania mające miejsce w związku z kontem Twojej organizacji są zgodne z tą Umową. Rozumiesz, że BugTracker nie jest odpowiedzialne za administrację konta i wewnętrzne zarządzanie Usługami dla Ciebie.

Jesteś odpowiedzialny za podjęcie niezbędnych kroków w celu zapewnienia, że Twoja organizacja nie straci kontroli nad kontami administratorów. Możesz określić proces, który ma być przestrzegany w przypadku takiej utraty kontroli nad kontami administratorów, wysyłając e-mail na adres legal@BugTracker.com, pod warunkiem, że proces ten jest akceptowalny dla BugTracker. W przypadku braku określonego procesu odzyskiwania konta administratora, BugTracker może przekazać kontrolę nad kontem administratora osobie dostarczającej dowody satysfakcjonujące BugTracker, świadczące o upoważnieniu do działania w imieniu organizacji. Zgadzasz się nie obwiniać BugTracker za konsekwencje jakichkolwiek działań podjętych przez BugTracker w dobrej wierze w tej sprawie.

### Informacje osobiste i prywatność

Informacje osobiste, które dostarczasz BugTracker za pośrednictwem Usługi, są regulowane Polityką Prywatności BugTracker. Twoja decyzja o korzystaniu z Usługi oznacza akceptację warunków Polityki Prywatności BugTracker. Jesteś odpowiedzialny za zachowanie poufności swojej nazwy użytkownika, hasła i innych wrażliwych informacji. Jesteś odpowiedzialny za wszystkie działania, które mają miejsce na Twoim koncie użytkownika, i zgadzasz się niezwłocznie powiadomić nas o jakimkolwiek nieautoryzowanym użytkowaniu Twojego konta użytkownika za pośrednictwem e-maila na adres accounts@BugTracker.com lub dzwoniąc na którykolwiek z numerów wymienionych na https://www.BugTracker.com/contact.html. Nie jesteśmy odpowiedzialni za żadne straty lub szkody dla Ciebie lub dla jakiejkolwiek osoby trzeciej, które powstały w wyniku jakiegokolwiek nieautoryzowanego dostępu i/lub użytkowania Twojego konta użytkownika lub w inny sposób.

### Komunikacja od BugTracker

Usługa może zawierać pewne komunikaty od BugTracker, takie jak ogłoszenia usług, wiadomości administracyjne i biuletyny. Rozumiesz, że te komunikaty są uznawane za część korzystania z Usług. Jako część naszej polityki zapewnienia Ci całkowitej prywatności, zapewniamy Ci również możliwość rezygnacji z otrzymywania biuletynów od nas. Jednakże nie będziesz mógł zrezygnować z otrzymywania ogłoszeń usług i wiadomości administracyjnych.

### Skargi

Jeśli otrzymamy skargę od jakiejkolwiek osoby w związku z Twoją działalnością jako część korzystania z Usług, przekażemy skargę na główny adres e-mail Twojego konta użytkownika. Musisz odpowiedzieć na skargę bezpośrednio w ciągu 10 dni od otrzymania przekazanej przez nas skargi i wysłać kopię BugTracker w komunikacji. Jeśli nie odpowiesz na skargę w ciągu 10 dni od daty naszego e-maila do Ciebie, możemy ujawnić Twoje imię i dane kontaktowe skarżącemu, aby umożliwić skarżącemu podjęcie działań prawnych przeciwko Tobie. Rozumiesz, że Twoje nie odpowiedzenie na przekazaną skargę w ciągu 10 dni od daty naszego e-maila będzie traktowane jako Twoja zgoda na ujawnienie Twojego imienia i danych kontaktowych przez BugTracker skarżącemu.

### Polityka dotycząca nieaktywnych kont użytkowników

Zastrzegamy sobie prawo do zakończenia bezpłatnych kont użytkowników, które są nieaktywne przez ciągły okres 120 dni. W przypadku takiego zakończenia wszystkie dane związane z takim kontem użytkownika zostaną usunięte. Zapewniamy Ci wcześniejsze powiadomienie o takim zakończeniu oraz możliwość wykonania kopii zapasowej danych. Polityka usuwania danych może być stosowana w odniesieniu do dowolnych lub wszystkich Usług. Każda Usługa będzie traktowana jako niezależna i odrębna usługa do celów obliczania okresu nieaktywności. Innymi słowy, aktywność w jednej z Usług nie wystarczy, aby utrzymać Twoje konto użytkownika w innej Usłudze jako aktywne. W przypadku kont z więcej niż jednym użytkownikiem, jeśli przynajmniej jeden z użytkowników jest aktywny, konto nie będzie uznane za nieaktywne.

### Własność danych

Szanujemy Twoje prawo do własności treści utworzonych lub przechowywanych przez Ciebie. Jesteś właścicielem treści utworzonych lub przechowywanych przez Ciebie. O ile nie zezwolisz na to wyraźnie, Twoje korzystanie z Usług nie udziela BugTracker licencji na używanie, reprodukowanie, adaptowanie, modyfikowanie, publikowanie lub dystrybuowanie treści utworzonych przez Ciebie lub przechowywanych na Twoim koncie użytkownika w celach komercyjnych, marketingowych lub jakichkolwiek podobnych. Ale udzielasz BugTracker zgody na dostęp, kopiowanie, dystrybucję, przechowywanie, transmisję, formatowanie, publiczne wyświetlanie i publiczne wykonywanie treści Twojego konta użytkownika wyłącznie w celu świadczenia Usług dla Ciebie.

### Lokalizacja hostingu

Lokalizacja obiektu chmurowego, z którego korzystasz, zależy od przypisania Twojego regionu/kraju do dostępnych obiektów chmurowych w momencie rejestracji. Możemy przeprowadzić migrację Twojego konta lub wymagać od Ciebie migracji konta do innego obiektu chmurowego w przypadku jakichkolwiek aktualizacji mapowania regionu/kraju do obiektu chmurowego w dowolnym momencie. Nie powinieneś maskować swojego adresu protokołu internetowego (IP) w momencie rejestracji, ponieważ Twój region/kraj jest określany na podstawie Twojego adresu IP. Jeśli w dowolnym momencie stwierdzimy, że Twój rzeczywisty region/kraj różni się od regionu/kraju w naszych zapisach, BugTracker może podjąć odpowiednie działania, takie jak migracja Twojego konta lub wymaganie migracji Twojego konta do obiektu chmurowego odpowiadającego Twojemu regionowi/krajowi, lub zamknięcie Twojego konta i odmowa świadczenia Usługi dla Ciebie. Jeśli korzystasz z obiektu chmurowego poza swoim regionem/krajem, a grupa BugTracker ma biuro w Twoim regionie/kraju, oprócz przechowywania danych w przypisanym Ci obiekcie chmurowym, możemy przechowywać lokalną kopię danych w Twoim regionie/kraju.

### Treści generowane przez użytkownika

Możesz przesyłać lub publikować treści utworzone przez Ciebie za pomocą dowolnej z Usług lub w inny sposób. Jednakże jesteś wyłącznie odpowiedzialny za takie treści oraz za konsekwencje ich przesyłania lub publikacji. Jakakolwiek treść, która stanie się publiczna, będzie dostępna publicznie przez Internet i może być indeksowana przez wyszukiwarki. Jesteś odpowiedzialny za zapewnienie, że nie udostępnisz przypadkowo żadnych prywatnych treści publicznie. Jakakolwiek treść, którą możesz otrzymać od innych użytkowników Usług, jest dostarczana Tobie TAK JAK JEST do Twojego użytku informacyjnego i osobistego, i zgadzasz się nie używać, kopiować, reprodukować, dystrybuować, transmitować, nadawać, wyświetlać, sprzedawać, licencjonować lub w inny sposób wykorzystywać takiej treści w jakimkolwiek celu, bez wyraźnej pisemnej zgody osoby, która posiada prawa do takiej treści. W trakcie korzystania z dowolnej z Usług, jeśli napotkasz jakąkolwiek treść z powiadomieniem o prawach autorskich lub jakąkolwiek funkcją ochrony kopiowania, zgadzasz się nie usuwać takich powiadomień o prawach autorskich ani nie wyłączać takich funkcji ochrony kopiowania, jak to ma miejsce. Udostępniając jakąkolwiek treść chronioną prawami autorskimi lub możliwą do chronienia prawami autorskimi w dowolnej z Usług, potwierdzasz, że masz zgodę, autoryzację lub pozwolenie, jak to wymagane, od każdej osoby, która może rościć sobie prawa do takiej treści, aby udostępnić taką treść w taki sposób. Ponadto, udostępniając jakąkolwiek treść w wyżej wymieniony sposób, wyraźnie zgadzasz się, że BugTracker ma prawo zablokować dostęp do lub usunąć taką treść udostępnioną przez Ciebie, jeśli BugTracker otrzyma skargi dotyczące jakiejkolwiek nielegalności lub naruszenia praw osób trzecich w takiej treści. Korzystając z dowolnej z Usług i przesyłając lub publikując jakąkolwiek treść za pomocą takiej Usługi, wyraźnie zgadzasz się na rozstrzyganie kwestii legalności lub naruszenia praw osób trzecich w takiej treści przez agenta wyznaczonego przez BugTracker do tego celu.

### Pliki próbne i aplikacje

BugTracker może dostarczać pliki próbne i aplikacje w celu demonstracji możliwości efektywnego korzystania z Usług dla konkretnych celów. Informacje zawarte w takich plikach próbnych i aplikacjach składają się z losowych danych. BugTracker nie udziela żadnej gwarancji, wyraźnej ani domniemanej, co do dokładności, użyteczności, kompletności lub niezawodności tych informacji lub plików próbnych i aplikacji.

### Znaki handlowe

'BugTracker', logo BugTracker, nazwy poszczególnych Usług oraz ich loga są znakami handlowymi BugTracker oration Private Limited. Zgadzasz się nie wyświetlać ani nie używać znaków handlowych BugTracker w żaden sposób bez wcześniejszej zgody BugTracker.

### Zrzeczenie się gwarancji

WYRAŹNIE ROZUMIESZ I ZGADZASZ SIĘ, ŻE KORZYSTANIE Z USŁUG JEST NA TWOJE WŁASNE RYZYKO. USŁUGI DOSTARCZANE SĄ NA ZASADACH "TAK JAK SĄ" I "JAK DOSTĘPNE". BugTracker WYRAŹNIE ZRZEKA SIĘ WSZELKICH GWARANCJI JAKIEGOKOLWIEK RODZAJU, CZY TO WYRAŹNYCH, CZY DOMNIEMANYCH, W TYM MIĘDZY INNYMI GWARANCJI PRZYDATNOŚCI HANDLOWEJ I PRZYDATNOŚCI DO KONKRETNEGO CELU. BugTracker NIE GWARANTUJE, ŻE USŁUGI BĘDĄ DZIAŁAŁY BEZPRZERWOWO, PUNKTUALNIE, BEZPIECZNIE LUB BEZ BŁĘDÓW. KORZYSTANIE Z MATERIAŁÓW POBRANYCH LUB UZYSKANYCH PRZEZ KORZYSTANIE Z USŁUG LEŻY W TWOJEJ WŁASNEJ DYSKRECJI I NA TWOJE WŁASNE RYZYKO, A TY JESTEŚ WYŁĄCZNIE ODPOWIEDZIALNY ZA EWENTUALNE SZKODY WYRZĄDZONE TWOJEMU SYSTEMOWI KOMPUTEROWEMU, TELEFONOWI KOMÓRKOWEMU, URZĄDZENIU BEZPRZEWODOWEMU LUB DANYM, KTÓRE MOGĄ WYNIKNĄĆ Z KORZYSTANIA Z USŁUG LUB POBRANIA TAKICH MATERIAŁÓW. ŻADNE PORADY LUB INFORMACJE, CZY TO PISEMNE, CZY USTNE, UZYSKANE OD BugTracker, JEJ PRACOWNIKÓW LUB PRZEDSTAWICIELI, NIE STWORZĄ GWARANCJI NIE WYRAŹNIE OKREŚLONEJ W UMOWIE.

### Ograniczenie odpowiedzialności

Zgadzasz się, że BugTracker nie będzie w żadnym przypadku odpowiedzialne za jakiekolwiek szkody wtórne, przypadkowe, pośrednie, specjalne, karne ani inne szkody czy straty jakkolwiek spowodowane lub wynikające z Twojego użytkowania lub niemożności użytkowania usługi, nawet jeżeli BugTracker zostało poinformowane o możliwości takich szkód. W żadnym wypadku całkowita odpowiedzialność BugTracker względem Ciebie z tytułu jakiejkolwiek usługi, bezpośrednia bądź pośrednia, nie przekroczy tysiąca dolarów (1000 USD) lub opłat zapłaconych przez Ciebie w ciągu dwunastu (12) miesięcy poprzedzających pierwsze zdarzenie, które dało podstawę do odpowiedzialności, w zależności od tego, która kwota jest wyższa.

### Zwolnienie z odpowiedzialności

Zgadzasz się zrekompensować i zwolnić z odpowiedzialności BugTracker, jego dyrektorów, pracowników, dostawców i afiliantów od wszelkich strat, uszczerbków, grzywien i wydatków (w tym honoraria adwokackie i koszty) wynikających z roszczeń, że użyłeś Usług w sposób naruszający prawa innej strony, naruszający prawo, naruszenia postanowień niniejszej Umowy lub jakiekolwiek inne roszczenia związane z Twoim użytkowaniem Usług, o ile takie użytkowanie nie było autoryzowane przez BugTracker.

### Prawo właściwe i jurysdykcja

Prawo właściwe i jurysdykcja, które będą miały zastosowanie w przypadku jakiegokolwiek sporu czy procesu sądowego wynikającego z niniejszej Umowy, będą zależały od adresu rozliczeniowego, jeśli jesteś płatnym klientem, oraz od stanu lub kraju zamieszkania w pozostałych przypadkach. Zgodnie z tym każda ze stron zgadza się na prawo właściwe (bez uwzględniania zasad kolizyjnych prawa) i wyłączną jurysdykcję sądów wymienionych tutaj w przypadku jakiegokolwiek sporu czy procesu sądowego wynikającego z niniejszej Umowy.

### Zawieszenie i zakończenie

Możemy zawiesić Twoje konto użytkownika lub tymczasowo wyłączyć dostęp do całości lub części Usługi w przypadku podejrzenia o działalność nielegalną, długotrwałą nieaktywność lub na żądanie organów ścigania lub innych agencji rządowych. Załączone obiekcje dotyczące zawieszenia lub wyłączenia kont użytkowników powinny zostać zgłoszone na adres legal@BugTracker.com w ciągu trzydziestu dni od powiadomienia o zawieszeniu. Możemy zakończyć zawieszone lub wyłączone konto użytkownika po trzydziestu dniach. Zakończymy również Twoje konto użytkownika na Twoje żądanie.

### Zmiana Warunków Umowy

Możemy zmienić niniejszą Umowę w dowolnym momencie, informując Cię o tym poprzez ogłoszenie serwisowe lub wysyłając e-mail na Twój główny adres e-mailowy. Jeśli wprowadzimy znaczące zmiany w Umowie, które wpływają na Twoje prawa, zostaniesz poinformowany o tych zmianach przynajmniej na 30 dni przed ich wprowadzeniem, za pomocą e-maila wysłanego na Twój główny adres e-mailowy. Możesz zakończyć korzystanie z Usług, wysyłając BugTracker powiadomienie e-mailem w ciągu 30 dni od momentu powiadomienia o dostępności zmienionej Umowy, jeżeli zmiana Umowy znacząco wpływa na Twoje prawa w związku z korzystaniem z Usług. W przypadku takiego zakończenia masz prawo do proporcjonalnego zwrotu niewykorzystanej części opłat prepaid. Kontynuacja korzystania z Usługi po dniu wejścia w życie zmian w Umowie będzie uznana za Twoją zgodę na zmienioną Umowę.

### Koniec Warunków Umowy

Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące tej Umowy, skontaktuj się z nami pod adresem legal@BugTracker.com.
`;
const Terms = () => {
  return (
    <div className={styles.container}>
      <Markdown>{terms}</Markdown>
    </div>
  );
};

export default Terms;
