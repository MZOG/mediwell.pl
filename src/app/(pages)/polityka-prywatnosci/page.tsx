import Typography from "@/components/Typography";
import Link from "next/link";

export default function TermsPage() {
  return (
    <section className="max-w-5xl mx-auto px-5">
      <Typography type="h1">Polityka prywatności</Typography>
      <div className="bg-green-100 inline-flex my-10 py-2 px-5 rounded-lg">
        <p className="text-sm font-semibold">Aktualizacja: 13 Luty 2025</p>
      </div>

      <div className="text-base/7 space-y-5">
        <p>
          Poniższa Polityka Prywatności określa zasady zapisywania i uzyskiwania
          dostępu do danych na Urządzeniach Użytkowników korzystających z
          Serwisu do celów świadczenia usług drogą elektroniczną przez
          Administratora oraz zasady gromadzenia i przetwarzania danych
          osobowych Użytkowników, które zostały podane przez nich osobiście i
          dobrowolnie za pośrednictwem narzędzi dostępnych w Serwisie.
        </p>

        <p>
          Poniższa Polityka Prywatności jest integralną częścią{" "}
          <Link
            href="/regulamin"
            className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
          >
            Regulaminu Serwisu
          </Link>
          , który określa zasady, prawa i obowiązki Użytkowników korzystających
          z Serwisu.
        </p>

        <Typography type="h2">§1 Definicje</Typography>

        <ul className="list-inside space-y-2">
          <li>
            <span className="font-semibold">Serwis</span> - serwis internetowy
            &quot;Mediwell.pl&quot; działający pod adresem{" "}
            <a
              href="https://mediwell.pl"
              className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
            >
              https://mediwell.pl
            </a>
          </li>
          <li>
            <span className="font-semibold">Serwis zewnętrzny</span> - serwisy
            internetowe partnerów, usługodawców lub usługobiorców
            współpracujących z Administratorem
          </li>
          <li>
            <span className="font-semibold">
              Administrator Serwisu / Danych
            </span>{" "}
            - Administratorem Serwisu oraz Administratorem Danych (dalej
            Administrator) jest firma &quot;Marcin Zogrodnik&quot;, prowadząca
            działalność pod adresem: Ul. Ułańska 66, 43-143 Lędziny, o nadanym
            numerze identyfikacji podatkowej (NIP): 6462985329, świadcząca
            usługi drogą elektroniczną za pośrednictwem Serwisu
          </li>
          <li>
            <span className="font-semibold">Użytkownik</span> - osoba fizyczna,
            dla której Administrator świadczy usługi drogą elektroniczną za
            pośrednictwem Serwisu.
          </li>
          <li>
            <span className="font-semibold">Urządzenie</span> - elektroniczne
            urządzenie wraz z oprogramowaniem, za pośrednictwem którego
            Użytkownik uzyskuje dostęp do Serwisu
          </li>
          <li>
            <span className="font-semibold">Cookies (ciasteczka)</span> - dane
            tekstowe gromadzone w formie plików zamieszczanych na Urządzeniu
            Użytkownika
          </li>
          <li>
            <span className="font-semibold">RODO</span> - Rozporządzenie
            Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
            2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
            danych osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
            danych)
          </li>
          <li>
            <span className="font-semibold">Dane osobowe</span> - oznaczają
            informacje o zidentyfikowanej lub możliwej do zidentyfikowania
            osobie fizycznej („osobie, której dane dotyczą”); możliwa do
            zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio
            lub pośrednio zidentyfikować, w szczególności na podstawie
            identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny,
            dane o lokalizacji, identyfikator internetowy lub jeden bądź kilka
            szczególnych czynników określających fizyczną, fizjologiczną,
            genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną
            tożsamość osoby fizycznej
          </li>
          <li>
            <span className="font-semibold">Przetwarzanie</span> - oznacza
            operację lub zestaw operacji wykonywanych na danych osobowych lub
            zestawach danych osobowych w sposób zautomatyzowany lub
            niezautomatyzowany, taką jak zbieranie, utrwalanie, organizowanie,
            porządkowanie, przechowywanie, adaptowanie lub modyfikowanie,
            pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez
            przesłanie, rozpowszechnianie lub innego rodzaju udostępnianie,
            dopasowywanie lub łączenie, ograniczanie, usuwanie lub niszczenie;
          </li>
          <li>
            <span className="font-semibold">Ograniczenie przetwarzania</span> -
            oznacza oznaczenie przechowywanych danych osobowych w celu
            ograniczenia ich przyszłego przetwarzania
          </li>
          <li>
            <span className="font-semibold">Profilowanie</span> - oznacza
            dowolną formę zautomatyzowanego przetwarzania danych osobowych,
            które polega na wykorzystaniu danych osobowych do oceny niektórych
            czynników osobowych osoby fizycznej, w szczególności do analizy lub
            prognozy aspektów dotyczących efektów pracy tej osoby fizycznej, jej
            sytuacji ekonomicznej, zdrowia, osobistych preferencji,
            zainteresowań, wiarygodności, zachowania, lokalizacji lub
            przemieszczania się
          </li>
          <li>
            <span className="font-semibold">Zgoda</span> - zgoda osoby, której
            dane dotyczą oznacza dobrowolne, konkretne, świadome i jednoznaczne
            okazanie woli, którym osoba, której dane dotyczą, w formie
            oświadczenia lub wyraźnego działania potwierdzającego, przyzwala na
            przetwarzanie dotyczących jej danych osobowych
          </li>
          <li>
            <span className="font-semibold">
              Naruszenie ochrony danych osobowych
            </span>{" "}
            - oznacza naruszenie bezpieczeństwa prowadzące do przypadkowego lub
            niezgodnego z prawem zniszczenia, utracenia, zmodyfikowania,
            nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych
            osobowych przesyłanych, przechowywanych lub w inny sposób
            przetwarzanych
          </li>
          <li>
            <span className="font-semibold">Pseudonimizacja</span> - oznacza
            przetworzenie danych osobowych w taki sposób, by nie można ich było
            już przypisać konkretnej osobie, której dane dotyczą, bez użycia
            dodatkowych informacji, pod warunkiem że takie dodatkowe informacje
            są przechowywane osobno i są objęte środkami technicznymi i
            organizacyjnymi uniemożliwiającymi ich przypisanie zidentyfikowanej
            lub możliwej do zidentyfikowania osobie fizycznej
          </li>
          <li>
            <span className="font-semibold">Anonimizacja</span> - Anonimizacja
            danych to nieodwracalny proces operacji na danych, który niszczy /
            nadpisuje &quot;dane osobowe&quot; uniemożliwiając identyfikację,
            lub powiązanie danego rekordu z konkretnym użytkownikiem lub osobą
            fizyczną.
          </li>
        </ul>

        <Typography type="h2">§2 Inspektor Ochrony Danych</Typography>
        <p>
          Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora
          Ochrony Danych.
        </p>
        <p>
          W sprawach dotyczących przetwarzania danych, w tym danych osobowych,
          należy kontaktować się bezpośrednio z Administratorem.
        </p>

        <Typography type="h2">§3 Rodzaje Plików Cookies</Typography>

        <ul className="list-inside space-y-2">
          <li>
            <span className="font-semibold">Cookies wewnętrzne</span> - pliki
            zamieszczane i odczytywane z Urządzenia Użytkownika przez system
            teleinformatyczny Serwisu
          </li>
          <li>
            <span className="font-semibold">Cookies zewnętrzne</span> - pliki
            zamieszczane i odczytywane z Urządzenia Użytkownika przez systemy
            teleinformatyczne Serwisów zewnętrznych. Skrypty Serwisów
            zewnętrznych, które mogą umieszczać pliki Cookies na Urządzeniach
            Użytkownika zostały świadomie umieszczone w Serwisie poprzez skrypty
            i usługi udostępnione i zainstalowane w Serwisie
          </li>
          <li>
            <span className="font-semibold">Cookies sesyjne</span> - pliki
            zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis
            podczas jednej sesji danego Urządzenia. Po zakończeniu sesji pliki
            są usuwane z Urządzenia Użytkownika.
          </li>
          <li>
            <span className="font-semibold">Cookies trwałe</span> - pliki
            zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis do
            momentu ich ręcznego usunięcia. Pliki nie są usuwane automatycznie
            po zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia
            Użytkownika jest ustawiona na tryb usuwanie plików Cookie po
            zakończeniu sesji Urządzenia.
          </li>
        </ul>

        <Typography type="h2">§4 Bezpieczeństwo składowania danych</Typography>

        <ul className="list-inside space-y-2">
          <li>
            <span className="font-semibold">
              Mechanizmy składowania i odczytu plików Cookie
            </span>{" "}
            - Mechanizmy składowania, odczytu i wymiany danych pomiędzy Plikami
            Cookies zapisywanymi na Urządzeniu Użytkownika a Serwisem są
            realizowane poprzez wbudowane mechanizmy przeglądarek internetowych
            i nie pozwalają na pobieranie innych danych z Urządzenia Użytkownika
            lub danych innych witryn internetowych, które odwiedzał Użytkownik,
            w tym danych osobowych ani informacji poufnych. Przeniesienie na
            Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków
            jest także praktycznie niemożliwe.
          </li>
          <li>
            <span className="font-semibold">Cookie wewnętrzne</span> -
            zastosowane przez Administratora pliki Cookie są bezpieczne dla
            Urządzeń Użytkowników i nie zawierają skryptów, treści lub
            informacji mogących zagrażać bezpieczeństwu danych osobowych lub
            bezpieczeństwu Urządzenia z którego korzysta Użytkownik.
          </li>
          <li>
            <span className="font-semibold">Cookie zewnętrzne</span> -
            Administrator dokonuje wszelkich możliwych działań w celu
            weryfikacji i doboru partnerów serwisu w kontekście bezpieczeństwa
            Użytkowników. Administrator do współpracy dobiera znanych, dużych
            partnerów o globalnym zaufaniu społecznym. Nie posiada on jednak
            pełnej kontroli nad zawartością plików Cookie pochodzących od
            zewnętrznych partnerów. Za bezpieczeństwo plików Cookie, ich
            zawartość oraz zgodne z licencją wykorzystanie przez zainstalowane w
            serwisie Skrypty, pochodzących z Serwisów zewnętrznych,
            Administrator nie ponosi odpowiedzialności na tyle na ile pozwala na
            to prawo. Lista partnerów zamieszczona jest w dalszej części
            Polityki Prywatności.
          </li>

          <li>
            <span className="font-semibold">Kontrola plików Cookie</span>
            <ul className="list-inside list-disc ml-4 space-y-2 mt-2">
              <li>
                Użytkownik może w dowolnym momencie, samodzielnie zmienić
                ustawienia dotyczące zapisywania, usuwania oraz dostępu do
                danych zapisanych plików Cookies przez każdą witrynę internetową
              </li>
              <li>
                Informacje o sposobie wyłączenia plików Cookie w
                najpopularniejszych przeglądarkach komputerowych dostępne są na
                stronie: jak wyłączyć cookie lub u jednego ze wskazanych
                dostawców:
                <ul className="list-inside list-disc ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
                      href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=pl"
                    >
                      Zarządzanie plikami cookies w przeglądarce Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
                      href="https://help.opera.com/pl/latest/web-preferences/"
                    >
                      Zarządzanie plikami cookies w przeglądarce Opera
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
                      href="https://support.mozilla.org/pl/kb/blokowanie-ciasteczek"
                    >
                      Zarządzanie plikami cookies w przeglądarce FireFox
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
                      href="https://support.microsoft.com/pl-pl/help/4027947/microsoft-edge-delete-cookies"
                    >
                      Zarządzanie plikami cookies w przeglądarce Edge
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
                      href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                    >
                      Zarządzanie plikami cookies w przeglądarce Safari
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4 bg-main/10 hover:bg-main/20"
                      href="https://windows.microsoft.com/pl-pl/internet-explorer/delete-manage-cookies#ie=ie-11"
                    >
                      Zarządzanie plikami cookies w przeglądarce Internet
                      Explorer 11
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do
                tej pory pliki Cookie korzystając z narzędzi Urządzenia
                Użytkownika, za pośrednictwem którego Użytkownik korzysta z
                usług Serwisu.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">
              Zagrożenia po stronie Użytkownika
            </span>{" "}
            - Administrator stosuje wszelkie możliwe środki techniczne w celu
            zapewnienia bezpieczeństwa danych umieszczanych w plikach Cookie.
            Należy jednak zwrócić uwagę, że zapewnienie bezpieczeństwa tych
            danych zależy od obu stron w tym działalności Użytkownika.
            Administrator nie bierze odpowiedzialności za przechwycenie tych
            danych, podszycie się pod sesję Użytkownika lub ich usunięcie, na
            skutek świadomej lub nieświadomej działalność Użytkownika, wirusów,
            koni trojańskich i innego oprogramowania szpiegującego, którymi może
            jest lub było zainfekowane Urządzenie Użytkownika. Użytkownicy w
            celu zabezpieczenia się przed tymi zagrożeniami powinni stosować się
            do zasad zwiększających ich cyberbezpieczeństwo.
          </li>
          <li>
            <span className="font-semibold">
              Przechowywanie danych osobowych
            </span>{" "}
            - Administrator zapewnia, że dokonuje wszelkich starań, by
            przetwarzane dane osobowe wprowadzone dobrowolnie przez Użytkowników
            były bezpieczne, dostęp do nich był ograniczony i realizowany
            zgodnie z ich przeznaczeniem i celami przetwarzania. Administrator
            zapewnia także, że dokonuje wszelkich starań w celu zabezpieczenia
            posiadanych danych przed ich utratą, poprzez stosowanie odpowiednich
            zabezpieczeń fizycznych jak i organizacyjnych.
          </li>
        </ul>

        <Typography type="h2">
          §5 Cele do których wykorzystywane są pliki Cookie
        </Typography>

        <ul className="list-inside space-y-2">
          <li>Usprawnienie i ułatwienie dostępu do Serwisu</li>
          <li>Personalizacja Serwisu dla Użytkowników</li>
          <li>
            Prowadzenie statystyk (użytkowników, ilości odwiedzin, rodzajów
            urządzeń, łącze itp.)
          </li>
        </ul>

        <Typography type="h2">
          §6 Cele przetwarzania danych osobowych
        </Typography>

        <p>
          Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane w
          jednym z następujących celów:
        </p>

        <ul className="list-inside space-y-2">
          <li>Realizacji usług elektronicznych:</li>
          <li>
            Komunikacji Administratora z Użytkownikami w sprawach związanych z
            Serwisem oraz ochrony danych
          </li>
          <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
        </ul>

        <p>
          Dane o Użytkownikach gromadzone anonimowo i automatycznie są
          przetwarzane w jednym z następujących celów:
        </p>

        <ul className="list-inside space-y-2">
          <li>Prowadzenie statystyk</li>
          <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
        </ul>

        <Typography type="h2">
          §7 Pliki Cookies Serwisów zewnętrznych
        </Typography>

        <p>
          Administrator w Serwisie wykorzystuje skrypty javascript i komponenty
          webowe partnerów, którzy mogą umieszczać własne pliki cookies na
          Urządzeniu Użytkownika. Pamiętaj, że w ustawieniach swojej
          przeglądarki możesz sam decydować o dozwolonych plikach cookies jakie
          mogą być używane przez poszczególne witryny internetowe. Poniżej
          znajduje się lista partnerów lub ich usług zaimplementowanych w
          Serwisie, mogących umieszczać pliki cookies:
        </p>
        <p className="font-semibold">Prowadzenie statystyk:</p>
        <ul className="list-inside space-y-2">
          <li>
            <a href="https://policies.google.com/privacy?hl=pl">
              Google Analytics
            </a>
          </li>
        </ul>
        <p>
          Usługi świadczone przez podmioty trzecie są poza kontrolą
          Administratora. Podmioty te mogą w każdej chwili zmienić swoje warunki
          świadczenia usług, polityki prywatności, cel przetwarzania danych oraz
          sposów wykorzystywania plików cookie.
        </p>

        <Typography type="h2">§8 Rodzaje gromadzonych danych</Typography>
        <p>
          Serwis gromadzi dane o Użytkownikach. Cześć danych jest gromadzona
          automatycznie i anonimowo, a część danych to dane osobowe podane
          dobrowolnie przez Użytkowników w trakcie zapisywania się do
          poszczególnych usług oferowanych przez Serwis.
        </p>
        <p className="font-semibold">
          Anonimowe dane gromadzone automatycznie:
        </p>
        <ul className="list-inside space-y-2">
          <li>Adres IP</li>
          <li>Typ przeglądarki</li>
          <li>Rozdzielczość ekranu</li>
          <li>Przybliżona lokalizacja</li>
          <li>Otwierane podstrony serwisu</li>
          <li>Czas spędzony na odpowiedniej podstronie serwisu</li>
          <li>Rodzaj systemu operacyjnego</li>
          <li>Adres poprzedniej podstrony</li>
          <li>Adres strony odsyłającej</li>
          <li>Język przeglądarki</li>
          <li>Prędkość łącza internetowego</li>
          <li>Dostawca usług internetowych</li>
        </ul>
      </div>
    </section>
  );
}
