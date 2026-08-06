const plFaq = {
  section: {
    eyebrow: "[ Wszystko, o co możesz zapytać ]",
    heading: "Pytania, które warto zadać.",
    description: "Wszystko, co warto wiedzieć, zanim zostawisz coś dla przyszłości.",
    footerHeading: "Nadal masz pytania?",
    footerCta: "Zobacz wszystkie odpowiedzi",
  },
  page: {
    label: "Pytania i odpowiedzi",
    eyebrow: "[ Konkretne odpowiedzi ]",
    heading: "Zanim coś po sobie zostawisz.",
    intro:
      "Bliższe spojrzenie na fizyczny przedmiot, cyfrowe doświadczenie i decyzje, które podejmujemy z myślą o przyszłości.",
    contents: "Tematy",
    questionCount: "pytań",
    closing: "Coś nadal jest niejasne?",
    closingText:
      "ChronoTap wciąż nabiera kształtu. Dołącz do wczesnej listy oczekujących i obserwuj, jak szczegóły stają się ostateczne.",
    closingCta: "Dołącz do listy",
  },
  categories: [
    {
      id: "understanding",
      title: "Zrozumieć produkt",
      items: [
        {
          id: "what-is-chronotap",
          question: "Czym jest ChronoTap?",
          blocks: [
            { type: "paragraph", text: "ChronoTap to fizyczna kapsuła czasu na cyfrowe wspomnienia. Łączy małą kapsułę NFC z prywatną przestrzenią cyfrową, w której możesz zostawić zdjęcia, filmy, wiadomości głosowe, listy i pliki." },
            { type: "paragraph", text: "Możesz zachować ją dla siebie, podarować komuś, ocalić rodzinną historię albo pozostawić do ponownego odkrycia w przyszłości." },
          ],
        },
        {
          id: "how-it-works",
          question: "Jak działa ChronoTap?",
          blocks: [
            { type: "paragraph", text: "Dotknij fizycznej kapsuły telefonem obsługującym NFC, aby otworzyć połączoną z nią przestrzeń cyfrową." },
            { type: "paragraph", text: "Możesz tam dodać to, co ważne, wybrać osoby z dostępem i zdecydować, czy kapsuła pozostanie otwarta, czy poczeka na przyszłą datę." },
            { type: "paragraph", text: "Podstawowy proces jest prosty:" },
            { type: "emphasis", text: "Dotknij. Wypełnij. Wybierz. Zostaw. Przeżyj ponownie." },
          ],
        },
        {
          id: "what-can-i-leave",
          question: "Co mogę zostawić w środku?",
          blocks: [
            { type: "paragraph", text: "ChronoTap może pomieścić kolekcję cyfrowych wspomnień i wiadomości, takich jak:" },
            { type: "list", items: ["zdjęcia", "filmy", "nagrania głosowe", "listy i notatki", "osobiste pliki"] },
            { type: "paragraph", text: "Nie powstał z myślą o całej galerii telefonu. Powstał dla rzeczy, które naprawdę zechcesz kiedyś odnaleźć ponownie." },
          ],
        },
        {
          id: "where-files-live",
          question: "Czy pliki są zapisane w fizycznej kapsule?",
          blocks: [
            { type: "paragraph", text: "Nie. Fizyczna kapsuła zawiera chip NFC, który prowadzi telefon do jej przestrzeni cyfrowej. Zdjęcia, filmy i inne pliki są przechowywane online, a nie bezpośrednio na chipie NFC." },
            { type: "paragraph", text: "Dzięki temu ChronoTap może pomieścić znacznie więcej niż zwykły znacznik NFC, a sam przedmiot pozostaje mały, prosty i trwały." },
          ],
        },
        {
          id: "flash-drive",
          question: "Czy ChronoTap jest pendrivem?",
          blocks: [
            { type: "paragraph", text: "Nie. Pendrive jest przede wszystkim urządzeniem do przechowywania danych." },
            { type: "paragraph", text: "ChronoTap opiera się na intencji, dostępie i ponownym odkrywaniu. Fizyczna kapsuła daje wybranym wspomnieniom miejsce, odbiorcę i powód, by wrócić do nich później." },
            { type: "paragraph", text: "Nie podłączasz jej przewodem. Otwierasz ją, dotykając kompatybilnym telefonem." },
          ],
        },
        {
          id: "app",
          question: "Czy potrzebuję aplikacji?",
          blocks: [
            { type: "paragraph", text: "Podstawowe korzystanie z ChronoTap nie wymaga osobnej aplikacji. Dotknij kapsuły kompatybilnym smartfonem z NFC i otwórz link, który pojawi się na ekranie." },
            { type: "paragraph", text: "W przyszłości może pojawić się aplikacja z dodatkowymi funkcjami, ale podstawowe doświadczenie pozostanie tak proste jak dotknięcie kapsuły telefonem." },
          ],
        },
        {
          id: "phones",
          question: "Które telefony współpracują z ChronoTap?",
          blocks: [
            { type: "paragraph", text: "ChronoTap jest projektowany dla nowoczesnych smartfonów obsługujących odczyt NFC." },
            { type: "paragraph", text: "W większości nowych iPhone’ów i urządzeń z Androidem wystarczy zbliżyć górną część telefonu do kapsuły. Dokładne położenie anteny NFC zależy od modelu." },
          ],
        },
        {
          id: "charging",
          question: "Czy kapsułę trzeba ładować?",
          blocks: [
            { type: "paragraph", text: "Nie. Kapsuła nie ma baterii i nie wymaga ładowania." },
            { type: "paragraph", text: "Chip NFC jest aktywowany przez telefon podczas dotknięcia. Dzięki temu fizyczny produkt pozostaje prosty i nadaje się do długiego przechowywania." },
          ],
        },
        {
          id: "internet",
          question: "Czy potrzebne jest połączenie z internetem?",
          blocks: [
            { type: "paragraph", text: "Obecnie internet jest potrzebny do przesyłania plików i otwierania połączonej przestrzeni cyfrowej." },
            { type: "paragraph", text: "Sama kapsuła nie wymaga zasilania, ale powiązane wspomnienia są dostępne online przez telefon. Dla przyszłych wersji badamy także kopie zapasowe i ograniczony dostęp offline." },
          ],
        },
      ],
    },
    {
      id: "creating",
      title: "Tworzenie i otwieranie",
      items: [
        {
          id: "future-date",
          question: "Czy mogę zamknąć kapsułę do przyszłej daty?",
          blocks: [
            { type: "paragraph", text: "Tak. Możesz wybrać przyszłą datę, przed którą zawartość kapsuły nie zostanie ujawniona." },
            { type: "paragraph", text: "Timer jest opcjonalny. Możesz również pozostawić kapsułę otwartą i wracać do niej, kiedy chcesz." },
          ],
        },
        {
          id: "add-later",
          question: "Czy mogę później dodać więcej wspomnień?",
          blocks: [
            { type: "paragraph", text: "Jeżeli kapsuła nie została trwale zamknięta, możesz do niej wrócić i dalej dodawać wspomnienia." },
            { type: "paragraph", text: "Pozwala to budować historię stopniowo — przez pierwsze lata życia dziecka, podczas długiej podróży albo przez ważny rozdział własnego życia." },
          ],
        },
        {
          id: "after-sealing",
          question: "Co dzieje się po zamknięciu kapsuły?",
          blocks: [
            { type: "paragraph", text: "Po zamknięciu zawartość zostaje zachowana w takim stanie, w jakim ją pozostawisz." },
            { type: "paragraph", text: "Jeżeli wybierzesz przyszłą datę otwarcia, historia pozostanie ukryta aż do tego dnia. Do tego czasu dotknięcie pokaże zamknięty stan kapsuły, ale nie ujawni wspomnień." },
          ],
        },
        {
          id: "who-can-open",
          question: "Kto może ją otworzyć?",
          blocks: [
            { type: "paragraph", text: "To Ty wybierasz sposób dostępu do kapsuły." },
            { type: "paragraph", text: "W zależności od ustawień może być:" },
            { type: "list", items: ["prywatna tylko dla Ciebie", "chroniona hasłem", "udostępniona konkretnej osobie", "otwarta dla każdego, kto fizycznie ją znajdzie"] },
            { type: "paragraph", text: "Samo posiadanie fizycznego przedmiotu nie musi oznaczać publicznego dostępu do kapsuły." },
          ],
        },
        {
          id: "public-default",
          question: "Czy kapsuła jest domyślnie publiczna?",
          blocks: [
            { type: "paragraph", text: "Nie. Kapsuła nie powinna stać się publiczna, dopóki świadomie nie wybierzesz trybu publicznego lub otwartego." },
            { type: "paragraph", text: "Prywatne wspomnienia pozostają prywatne zgodnie z ustawieniami wybranymi przez właściciela." },
          ],
        },
        {
          id: "found-capsule",
          question: "Co się stanie, jeśli ktoś ją znajdzie?",
          blocks: [
            { type: "paragraph", text: "Fizyczne posiadanie kapsuły nie musi automatycznie zapewniać dostępu do prywatnych wspomnień." },
            { type: "paragraph", text: "Dla kapsuł, których nie powinien otwierać każdy znalazca, projektujemy prywatny dostęp i ochronę hasłem. Dostęp publiczny jest używany tylko wtedy, gdy świadomie pozostawisz historię otwartą." },
          ],
        },
        {
          id: "edit-delete",
          question: "Czy mogę edytować lub usunąć kapsułę?",
          blocks: [
            { type: "paragraph", text: "Przed trwałym zamknięciem kapsuły możesz zarządzać jej zawartością i ustawieniami." },
            { type: "paragraph", text: "Właściciel konta powinien także móc poprosić o usunięcie danych osobowych, z uwzględnieniem zasad dostępu i własności wspólnych kapsuł. Szczegółowe opcje zostaną opisane przed premierą." },
          ],
        },
      ],
    },
    {
      id: "uses",
      title: "Sposoby użycia",
      items: [
        {
          id: "gift",
          question: "Czy mogę podarować ChronoTap?",
          blocks: [
            { type: "paragraph", text: "Tak. Prezent to jeden z głównych sposobów, w jakie ChronoTap ma być używany." },
            { type: "paragraph", text: "Możesz przygotować kapsułę ze zdjęciami, filmami, wiadomościami głosowymi i listami, a następnie podarować ją komuś do otwarcia od razu lub w ważnym momencie przyszłości." },
            { type: "paragraph", text: "Może stać się prezentem urodzinowym, wiadomością na rocznicę, kapsułą ślubną, pożegnaniem albo czymś przygotowanym dla dziecka na wiele lat później." },
          ],
        },
        {
          id: "future-self",
          question: "Czy mogę stworzyć kapsułę dla przyszłego siebie?",
          blocks: [
            { type: "paragraph", text: "Tak. Nagraj wiadomość, zbierz wspomnienia ze swojego obecnego życia i wybierz moment, w którym chcesz do nich wrócić." },
            { type: "paragraph", text: "Otwórz ją za rok, po ukończeniu szkoły, ważnej przeprowadzce albo za dziesięć lat. Data jest mniej ważna niż osoba, którą możesz się stać do czasu otwarcia." },
          ],
        },
        {
          id: "for-a-child",
          question: "Czy rodzice mogą stworzyć kapsułę dla dziecka?",
          blocks: [
            { type: "paragraph", text: "Tak. Rodzice mogą stopniowo zbierać chwile sprzed pierwszych świadomych wspomnień dziecka: pierwsze dni i słowa, rodzinne filmy, głosy, listy i zwyczajne momenty z domu." },
            { type: "paragraph", text: "Później kapsułę można przekazać dziecku na urodziny, przed wyprowadzką z domu albo wtedy, gdy historia będzie gotowa, by przejść dalej." },
          ],
        },
        {
          id: "family-stories",
          question: "Czy ChronoTap może zachować rodzinne historie?",
          blocks: [
            { type: "paragraph", text: "Tak. ChronoTap może stać się fizycznym domem dla osobistej historii rodziny: głosów, opowieści, fotografii, listów i wspomnień, które być może nigdy nie trafią do oficjalnego archiwum." },
            { type: "paragraph", text: "Nie chodzi tylko o zachowanie tego, co się wydarzyło, ale także o to, jak ktoś mówił, śmiał się i wspominał." },
          ],
        },
        {
          id: "contributors",
          question: "Czy kilka osób może współtworzyć kapsułę?",
          blocks: [
            { type: "paragraph", text: "Wspólne tworzenie jest częścią wizji ChronoTap." },
            { type: "paragraph", text: "Kapsułę mogłaby wypełniać rodzina, grupa przyjaciół, goście weselni albo ludzie poznani w podróży. Wspólny dostęp jest badany z myślą o przyszłych wersjach doświadczenia." },
          ],
        },
        {
          id: "generations",
          question: "Czy może stać się rodzinnym przedmiotem przekazywanym przez pokolenia?",
          blocks: [
            { type: "paragraph", text: "To jedna z długoterminowych możliwości stojących za tą ideą." },
            { type: "paragraph", text: "Kolejne pokolenia mogłyby dodawać własne głosy, fotografie i historie do tego samego fizycznego przedmiotu, zanim przekażą go dalej." },
            { type: "paragraph", text: "Stworzenie produktu na tak długi czas wymaga starannej pracy nad eksportem, kopiami zapasowymi i długoterminowym dostępem — te obszary nadal rozwijamy." },
          ],
        },
      ],
    },
    {
      id: "trust",
      title: "Zaufanie i trwałość",
      items: [
        {
          id: "storage-protection",
          question: "Jak moje wspomnienia są przechowywane i chronione?",
          blocks: [
            { type: "paragraph", text: "ChronoTap jest projektowany tak, aby zawartość kapsuł była przechowywana w chronionej infrastrukturze online i dostępna wyłącznie zgodnie z wybranymi uprawnieniami. Sama kapsuła NFC nie zawiera plików." },
            { type: "paragraph", text: "Ponieważ produkt jest nadal rozwijany, dokładna architektura hostingu, szyfrowania, kopii zapasowych i odzyskiwania nie jest jeszcze ostateczna. Przed komercyjną premierą opublikujemy jasne informacje o ochronie, eksporcie i usuwaniu danych." },
          ],
        },
        {
          id: "ownership",
          question: "Kto jest właścicielem moich wspomnień?",
          blocks: [
            { type: "emphasis", text: "Ty." },
            { type: "paragraph", text: "Przesłanie wspomnienia do ChronoTap nie przenosi na nas własności Twoich zdjęć, filmów, wiadomości głosowych, listów ani plików." },
            { type: "paragraph", text: "Przetwarzamy wyłącznie dane potrzebne do świadczenia usługi, zgodnie z Polityką prywatności ChronoTap." },
          ],
        },
        {
          id: "advertising-ai",
          question: "Czy ChronoTap wykorzystuje je do reklam lub trenowania AI?",
          blocks: [
            { type: "paragraph", text: "Nie. Prywatne wspomnienia nie są przeznaczone do reklam ani trenowania publicznych modeli AI." },
            { type: "paragraph", text: "Twoje treści istnieją po to, by zapewnić stworzone przez Ciebie doświadczenie kapsuły. Każda przyszła zmiana sposobu przetwarzania prywatnych treści wymagałaby jasnej informacji i odpowiedniej podstawy prawnej." },
          ],
        },
        {
          id: "download",
          question: "Czy mogę pobrać swoje pliki?",
          blocks: [
            { type: "paragraph", text: "Pełny eksport danych jest planowany jako ważny element kontroli użytkownika nad własnymi materiałami." },
            { type: "paragraph", text: "Powinna istnieć możliwość zachowania niezależnych kopii przesłanych oryginałów. Formaty eksportu i kopie zapasowe konta zostaną potwierdzone przed premierą." },
          ],
        },
        {
          id: "longevity",
          question: "Jak długo przetrwa kapsuła?",
          blocks: [
            { type: "paragraph", text: "Fizyczna kapsuła jest projektowana bez baterii i złożonej ruchomej elektroniki, co ogranicza liczbę elementów mogących z czasem ulec awarii." },
            { type: "paragraph", text: "Długoterminowy dostęp zależy jednak zarówno od znacznika NFC, jak i infrastruktury cyfrowej. Projektujemy ChronoTap z myślą o trwałości, kopiach zapasowych i przyszłej przenośności danych." },
            { type: "paragraph", text: "Dokładniejsze zobowiązania techniczne opublikujemy przed pierwszym wydaniem komercyjnym." },
          ],
        },
        {
          id: "chip-failure",
          question: "Co jeśli chip NFC przestanie działać?",
          blocks: [
            { type: "paragraph", text: "Chip NFC jest wygodnym wejściem do kapsuły, ale nie powinien być jedynym sposobem istnienia Twojej historii." },
            { type: "paragraph", text: "Projektujemy opcje odzyskiwania i potwierdzania własności, aby utrata lub uszkodzenie fizycznego przedmiotu nie oznaczały automatycznej utraty wspomnień. Ostateczne szczegóły opublikujemy przed premierą." },
          ],
        },
        {
          id: "service-closes",
          question: "Co jeśli usługa kiedyś przestanie działać?",
          blocks: [
            { type: "paragraph", text: "Produkt tworzony dla przyszłości musi traktować to pytanie poważnie." },
            { type: "paragraph", text: "Naszym celem jest zapewnienie użytkownikom możliwości pobierania i niezależnego zachowania oryginalnych plików, zamiast zamykania ważnych wspomnień wewnątrz jednej platformy." },
            { type: "paragraph", text: "Dokładna polityka eksportu, kopii zapasowych i ciągłości zostanie opublikowana, zanim poprosimy klientów o powierzenie ChronoTap długoterminowych wspomnień." },
          ],
        },
      ],
    },
    {
      id: "availability",
      title: "Produkt i dostępność",
      items: [
        {
          id: "availability-date",
          question: "Kiedy ChronoTap będzie dostępny?",
          blocks: [
            { type: "paragraph", text: "Pierwsze fizyczne kapsuły wciąż nabierają kształtu." },
            { type: "paragraph", text: "ChronoTap znajduje się na wczesnym etapie przed premierą: cyfrowe MVP już działa, a fizyczne prototypy są nadal rozwijane." },
            { type: "paragraph", text: "Dołącz do wczesnej listy oczekujących, aby dowiedzieć się, kiedy pojawią się pierwsze kapsuły." },
          ],
        },
        {
          id: "where-developed",
          question: "Gdzie powstaje ChronoTap?",
          blocks: [
            { type: "paragraph", text: "ChronoTap jest rozwijany w Polsce przez założyciela Artema Naumenkę. Fizyczne prototypowanie i wczesne prace produkcyjne odbywają się we współpracy z lokalnymi partnerami." },
          ],
        },
        {
          id: "not-a-game",
          question: "Czy ChronoTap jest grą?",
          blocks: [
            { type: "paragraph", text: "Nie. ChronoTap to fizyczna kapsuła czasu NFC na cyfrowe wspomnienia, niezwiązana z grami mobilnymi o podobnej nazwie." },
            { type: "paragraph", text: "Oficjalny projekt ChronoTap znajduje się pod adresem chronotap.co." },
          ],
        },
      ],
    },
    {
      id: "experimental",
      title: "Eksperymentalne pomysły",
      items: [
        {
          id: "for-a-stranger",
          question: "Czy mogę zostawić kapsułę nieznajomej osobie?",
          blocks: [
            { type: "paragraph", text: "To jeden z bardziej eksperymentalnych sposobów użycia ChronoTap. Po świadomym wybraniu otwartego dostępu kapsułę można byłoby pozostawić w znaczącym miejscu dla nieznanej osoby." },
            { type: "paragraph", text: "Mogłaby zawierać historię, pytanie albo zaproszenie do dodania czegoś własnego. Nadal liczyłyby się odpowiedzialne umieszczenie i lokalne zasady." },
          ],
        },
        {
          id: "travelling-capsule",
          question: "Czy kapsuła może podróżować między ludźmi?",
          blocks: [
            { type: "paragraph", text: "To jeden z pomysłów, które chcemy zbadać." },
            { type: "paragraph", text: "Podróżująca kapsuła mogłaby przechodzić od osoby do osoby, zbierając na każdym etapie jedną historię, głos lub miejsce." },
            { type: "paragraph", text: "Zamiast należeć na zawsze do jednego właściciela, sama kapsuła stałaby się częścią opowieści." },
          ],
        },
      ],
    },
  ],
};

export default plFaq;
