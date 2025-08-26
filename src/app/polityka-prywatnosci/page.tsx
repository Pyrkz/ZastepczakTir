'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Stałe kolorów - spójne z resztą aplikacji
const COLORS = {
  primary: '#A4833B',
  text: '#171717',
  textSecondary: '#6b7280',
  border: '#e5e7eb'
} as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: COLORS.primary }}
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>

          <div className="prose prose-lg max-w-none">
            
            <h1 style={{ color: COLORS.primary }}>POLITYKA PRYWATNOŚCI I WYKORZYSTYWANIA PLIKÓW COOKIES</h1>
            
            <p>Wszystkie dane osobowe gromadzimy i przechowujemy zgodnie z przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej jako: &bdquo;RODO&rdquo;) oraz ustawy z dnia 12 lipca 2024 r. – Prawo komunikacji elektronicznej.</p>

            <p>Dlatego też, dbając o ochronę prywatności Użytkowników serwisu: <strong>https://zastepczaktaxi.pl/</strong> (dalej jako &bdquo;Serwis&rdquo;), w niniejszym dokumencie Administrator informuje o podstawach prawnych przetwarzania danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z Serwisu oraz usług Administratora, sposobach zbierania, przetwarzania i ochrony danych osobowych, a także o prawach Użytkowników.</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Administrator danych osobowych</h2>
            
            <p>Administratorem danych osobowych jest <strong>MOTO ASSIST SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong></p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2" style={{ color: COLORS.primary }}>Dane firmy:</h3>
              <ul className="space-y-1 text-sm">
                <li><strong>KRS:</strong> 0001015937</li>
                <li><strong>NIP:</strong> 5732941058</li>
                <li><strong>REGON:</strong> 524295811</li>
                <li><strong>Adres siedziby:</strong> Równoległa 82/86, 42-216 Częstochowa, Polska</li>
                <li><strong>Forma prawna:</strong> SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</li>
                <li><strong>Data rejestracji:</strong> 26 stycznia 2023 r.</li>
              </ul>
            </div>
            
            <p><strong>Dane kontaktowe Administratora:</strong></p>
            <ul>
              <li>e-mail: biuro@zastepczak.pl</li>
              <li>tel.: +48 536 565 565</li>
            </ul>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Inspektor Ochrony Danych</h2>
            
            <p>Administrator wyznaczył Inspektora Ochrony Danych z którym można się kontaktować elektronicznie pod adresem: <strong>iod@motoassist.pl</strong></p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Jakie dane przetwarzamy</h2>
            
            <p>Przetwarzamy dane osobowe, które nam Państwo przekazują, korzystając z naszych usług lub dane osobowe, które mogą być przez nas gromadzone w związku z korzystaniem z naszego Serwisu (np. dane osobowe podane podczas korzystania z formularza kontaktowego). Dane obejmują w szczególności: imię i nazwisko Klienta, adres e-mail, numer tel. Ewentualnie także dane dotyczące zdarzenia szkodowego, w tym numer PESEL, dane sprawcy, nr rejestracyjny.</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Na jakich zasadach przetwarzamy Państwa dane</h2>
            
            <p>Dokładamy należytej staranności w celu ochrony interesów osób, których dane dotyczą, a w szczególności zapewniamy, aby dane te były:</p>
            <ul>
              <li>przetwarzane zgodnie z prawem, rzetelnie i w sposób przejrzysty dla osoby, której dane dotyczą;</li>
              <li>zbierane w konkretnych, wyraźnych i prawnie uzasadnionych celach i nieprzetwarzane dalej w sposób niezgodny z tymi celami;</li>
              <li>adekwatne, stosowne oraz ograniczone do tego, co niezbędne do celów, w których są przetwarzane;</li>
              <li>prawidłowe i w razie potrzeby uaktualniane; podejmujemy działania, aby dane osobowe, które są nieprawidłowe w świetle celów ich przetwarzania, zostały niezwłocznie usunięte lub sprostowane;</li>
              <li>przechowywane w formie umożliwiającej identyfikację osoby, której dane dotyczą, przez okres nie dłuższy niż jest to niezbędne do celów;</li>
              <li>przetwarzane w sposób zapewniający odpowiednie bezpieczeństwo danych osobowych, w tym ochronę przed niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą, zniszczeniem.</li>
            </ul>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Cel i podstawa przetwarzania danych</h2>
            
            <p>Państwa dane osobowe są przetwarzane:</p>
            <ul>
              <li>w celu zawarcia i wykonania umowy, tj. świadczenia usługi (art. 6 ust. 1 pkt b RODO) najmu pojazdu zastępczego oraz obsługi formalności związanych z OC sprawcy;</li>
              <li>w celu realizacji obowiązków ustawowych ciążących na Administratorze, wynikających w szczególności z przepisów podatkowych i przepisów o rachunkowości – podstawą prawną przetwarzania jest obowiązek prawny (art. 6 ust. 1 lit. c RODO);</li>
              <li>w celu ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed nimi – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO) polegający na ochronie jego praw;</li>
              <li>w celach analitycznych i statystycznych – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO);</li>
              <li>w celu świadczenia przez Administratora usługi drogą elektroniczną – podstawą prawną jest zgoda (art. 6 ust. 1 lit. a RODO);</li>
              <li>w celu zapewnienia bezpieczeństwa informatycznego – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO);</li>
              <li>w celu korzystania z Serwisu i zapewnienia jego prawidłowego działania – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO).</li>
            </ul>

            <p>Gdy korzystają Państwo z formularza kontaktowego, przetwarzamy Państwa dane osobowe zawarte w formularzu. Robimy to w celu odpowiedzi na Państwa wiadomość oraz prowadzenia ewentualnej dalszej korespondencji, co stanowi nasz prawnie uzasadniony interes, o którym mowa w art. 6 ust. 1 lit. f RODO. Podanie danych osobowych jest dobrowolne, ale niezbędne by przesłać wiadomość.</p>

            <p>Państwa dane mogą być również przetwarzane na podstawie art. 6 ust. 1 lit. a – tj. Państwa zgody.</p>

            <p>Podanie danych osobowych, w zależności od celu przetwarzania może być wymogiem ustawowym lub umownym. W zakresie rozliczeń księgowo-podatkowych podanie danych jest obowiązkowe, a w przypadku, gdy przetwarzanie odbywa się na podstawie zgody – podanie danych osobowych jest dobrowolne, jednakże konsekwencją niepodania danych będzie brak możliwości podjęcia przez Administratora stosownych działań w zakresie, w jakim nie wyrazili Państwo podania danych. Zgoda może być w dowolnym momencie wycofana bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Kryteria ustalania okresu, przez który dane osobowe będą przechowywane</h2>
            
            <p>Okres przetwarzania danych przez Administratora zależy od rodzaju świadczonej usługi i celu przetwarzania. Okres przetwarzania danych może także wynikać z przepisów, gdy stanowią one podstawę przetwarzania. W przypadku przetwarzania danych na podstawie uzasadnionego interesu Administratora – np. ze względów bezpieczeństwa – dane przetwarzane są przez okres umożliwiający realizację tego interesu lub do zgłoszenia skutecznego sprzeciwu względem przetwarzania danych.</p>

            <p>Dane osobowe przetwarzamy przez okres wymagany przepisami prawa, jeśli celem przetwarzania Twoich danych jest dochodzenie roszczeń, to przetwarzamy dane przez okres przedawnienia roszczeń wynikający z przepisów Kodeksu Cywilnego. Wszelkie dane przetwarzane na potrzeby rachunkowości oraz ze względów podatkowych przetwarzamy przez 5 lat liczonych od końca roku kalendarzowego, w którym powstał obowiązek podatkowy. Po upływie wyżej wymienionych okresów Twoje dane są usuwane lub poddawane anonimizacji. Jeżeli wyraziłeś nam zgodę na przetwarzanie danych w innych celach, przetwarzamy Twoje dane od chwili wyrażenia zgody do czasu jej cofnięcia. Po upływie wyżej wymienionych okresów Twoje dane są usuwane lub poddawane anonimizacji.</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Odbiorcy danych</h2>
            
            <p>Państwa dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul>
              <li>upoważnionym przez Administratora osobom zatrudnionym u Administratora lub współpracującym z Administratorem na podstawie umów cywilnoprawnych;</li>
              <li>podmiotom przetwarzającym w naszym imieniu Państwa dane osobowe i uczestniczącym w wykonywaniu naszych czynności:
                <ul>
                  <li>w celu przechowywania danych osobowych na serwerze;</li>
                  <li>w celu korzystania z wsparcia IT, zarządzania stronami internetowymi, w związku z którymi podmiot realizujący wsparcie może mieć dostęp do Państwa danych osobowych gromadzonych w ramach serwisu;</li>
                  <li>w celu realizacji usług doradczych, audytowych, prawnych, podatkowych, rachunkowych, oraz organom państwowym lub innym podmiotom publicznym, w celu spełnienia wymogów prawnych;</li>
                </ul>
              </li>
              <li>ubezpieczycielom w zakresie roszczeń odszkodowawczych przysługujących Państwu lub Administratorowi;</li>
              <li>podmiotom świadczącym usługi pocztowe i kurierskie.</li>
            </ul>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Uprawnienia</h2>
            
            <p>Osobom, których dane dotyczą, przysługują następujące prawa:</p>
            <ul>
              <li>prawo do informacji o przetwarzaniu danych osobowych – na tej podstawie osobie zgłaszającej takie żądanie Administrator przekazuje informację o przetwarzaniu danych osobowych, w tym przede wszystkim o celach i podstawach prawnych przetwarzania, zakresie posiadanych danych, podmiotach, którym dane osobowe są ujawniane i planowanym terminie ich usunięcia;</li>
              <li>prawo uzyskania kopii danych – na tej podstawie Administrator przekazuje kopię przetwarzanych danych, dotyczących osoby zgłaszającej żądanie;</li>
              <li>prawo do sprostowania – na tej podstawie Administrator usuwa ewentualne niezgodności lub błędy dotyczące przetwarzanych danych osobowych, oraz uzupełnia je lub aktualizuje, jeśli są niekompletne lub uległy zmianie;</li>
              <li>prawo do usunięcia danych – na tej podstawie można żądać usunięcia danych, których przetwarzanie nie jest już niezbędne do realizowania żadnego z celów, dla których zostały zebrane;</li>
              <li>prawo do ograniczenia przetwarzania – na tej podstawie Administrator zaprzestaje dokonywania operacji na danych osobowych, z wyjątkiem operacji, na które wyraziła zgodę osoba, której dane dotyczą oraz ich przechowywania, zgodnie z przyjętymi zasadami retencji, lub dopóki nie ustaną przyczyny ograniczenia przetwarzania danych;</li>
              <li>prawo do przenoszenia danych – na tej podstawie, w zakresie w jakim dane są przetwarzane w związku z zawartą umową lub wyrażoną zgodą, Administrator wydaje dane dostarczone przez osobę, której one dotyczą, w formacie pozwalającym na ich odczyt przez komputer. Możliwe jest także zażądanie przesłania tych danych innemu podmiotowi – jednak pod warunkiem, że istnieją w tym zakresie techniczne możliwości zarówno po stronie Administratora jak i tego innego podmiotu;</li>
              <li>prawo do sprzeciwu – osoba, której dane dotyczą, ma prawo w dowolnym momencie wnieść sprzeciw – z przyczyn związanych z jej szczególną sytuacją – wobec przetwarzania dotyczących jej danych osobowych opartego na art. 6 ust. 1 lit. f) (prawnie uzasadniony interes administratora), w tym profilowania na podstawie tych przepisów. Administratorowi w takim przypadku nie wolno już przetwarzać tych danych osobowych, chyba że wykaże on istnienie ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec interesów, praw i wolności osoby, której dane dotyczą, lub podstaw do ustalenia, dochodzenia lub obrony roszczeń.</li>
            </ul>

            <p>W celu realizacji uprawnień, o których mowa powyżej można kontaktować się z Administratorem poprzez przesłanie stosownej wiadomości pisemnie lub pocztą elektroniczną na adres Administratora wskazany na wstępie Polityki.</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Informacja o prawie wniesienia skargi do organu nadzorczego</h2>
            
            <p>Przysługuje Państwu także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, w przypadku gdy uznają Państwo, że Administrator narusza Państwa prawa w zakresie danych osobowych.</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Przekazanie danych poza EOG</h2>
            
            <p>Dane osobowe użytkowników są przechowywane wyłącznie na terenie Europejskiego Obszaru Gospodarczego (EOG).</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Profilowanie</h2>
            
            <p>Dane osobowe nie podlegają zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu. Przetwarzanie Państwa danych będzie odbywało się zarówno w sposób ręczny, jak i z wykorzystaniem systemu teleinformatycznego.</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Informacja czy podanie danych osobowych jest wymogiem ustawowym lub umownym lub warunkiem zawarcia umowy oraz czy osoba, której dane dotyczą, jest zobowiązana do ich podania i jakie są ewentualne konsekwencje niepodania danych</h2>
            
            <p>Podanie danych jest dobrowolne, jednakże niepodanie pewnych informacji, co do zasady zaznaczonych na stronie Administratora jako obowiązkowe, wiązać się będzie z brakiem możliwości wykonania danej usługi i osiągnięcia określonego celu lub podjęcia określonych działań.</p>

            <p>Podanie przez Użytkownika danych, które nie są obowiązkowe lub nadmiaru danych, których Administrator nie potrzebuje przetwarzać następuje na podstawie decyzji samego Użytkownika i wówczas przetwarzanie odbywa się na podstawie przesłanki zawartej w art. 6 ust. 1 lit. a RODO (zgoda).</p>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Pliki cookies</h2>
            
            <p>Serwis jak większość witryn internetowych korzysta z technologii przechowującej i uzyskującej dostęp do informacji na komputerze Użytkownika bądź innym urządzeniu podłączonym do sieci (w szczególności z wykorzystaniem tzw. plików cookies) dotyczących aktywności Użytkowników w Internecie, w celu analiz rynkowych oraz statystycznych, poprawy jakości prezentowanych informacji, nie wpływając jednak istotnie na ich decyzje – chyba, że Użytkownik wyrazi na to odrębną zgodę.</p>

            <p>Pliki cookies (tzw. &ldquo;ciasteczka&rdquo;): są to dane informatyczne, w szczególności pliki tekstowe, przechowywane w urządzeniu końcowym użytkownika Serwisu, przeznaczone do korzystania ze stron Serwisu. Pliki te zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym, a także unikalny numer służący do identyfikacji przeglądarki, z jakiej następuje połączenie ze stroną internetową.</p>

            <p>Przez używanie stron Serwisu użytkownik strony wyraża zgodę na używanie plików cookies zgodnie z niniejszą Polityką prywatności dotycząca plików cookies.</p>

            <p>Pliki cookies wykorzystywane są w celu:</p>
            <ul>
              <li>dostosowania zawartości Serwisu do preferencji użytkownika, w tym do optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie użytkownika Serwisu i odpowiednio wyświetlić stronę, dostosowaną do jego indywidualnych potrzeb;</li>
              <li>tworzenia statystyk, które pomagają zrozumieć, w jaki sposób użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;</li>
            </ul>

            <p>Serwis stosuje dwa zasadnicze rodzaje plików (cookies) – sesyjne i stałe. Pliki sesyjne są tymczasowe, przechowuje się je do momentu opuszczenia strony serwisu (poprzez wejście na inną stronę, wylogowanie lub wyłączenie przeglądarki). Pliki stałe przechowywane są w urządzeniu końcowym użytkownika do czasu ich usunięcia przez użytkownika lub przez czas wynikający z ich ustawień.</p>

            <p>Poprzez wykorzystywanie plików cookies w powyższy sposób, Administrator nigdy nie identyfikuje tożsamości użytkowników na podstawie informacji przechowywanych w tych plikach.</p>

            <p>Co do zasady przeglądarki internetowe domyślnie dopuszczają przechowywanie plików cookies w urządzeniu końcowym użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym zamieszczeniu w urządzeniu użytkownika strony Serwisu.</p>

            <p>Administrator informuje, że zmiany ustawień w przeglądarce internetowej użytkownika mogą ograniczyć dostęp do niektórych funkcji Serwisu.</p>

            <p>Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).</p>

            <p>Sposób wyłączenia obsługi plików cookies w poszczególnych przeglądarkach można znaleźć na następujących stronach:</p>
            <ul>
              <li>Mozilla Firefox: http://support.mozilla.org/pl/kb/blokowanie-ciasteczek</li>
              <li>Google Chrome: http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647</li>
              <li>Microsoft Edge: https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d</li>
              <li>Opera: http://help.opera.com/Linux/9.22/pl/cookies.html</li>
              <li>Safari: http://support.apple.com/kb/ph5042</li>
            </ul>

            <h2 style={{ color: COLORS.primary, fontSize: '1.5rem', marginTop: '2rem' }}>Zmiany polityki prywatności</h2>
            
            <p>Niniejsza Polityka Prywatności jest na bieżąco weryfikowana i w razie potrzeby aktualizowana. Wraz z każdą zmianą, nowa wersja Polityki Prywatności będzie się pojawiała na stronie Serwisu wraz ze stosownym komunikatem i będzie obowiązywała w nowym brzmieniu od dnia powiadomienia o jej zmianie poprzez jej umieszczenie w Serwisie.</p>

            <p>W celu zasięgnięcia informacji o sposobie ochrony danych osobowych, Administrator rekomenduje Użytkownikom regularne zapoznawanie się z postanowieniami Polityki Prywatności.</p>

          </div>
        </div>
      </section>
    </div>
  );
}