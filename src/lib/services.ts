export interface ServicePage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
}

export const services: ServicePage[] = [
  {
    slug: "zapalenie-dziasel",
    title: "Zapalenie dziąseł",
    subtitle: "Gingivitis",
    description:
      "Kompleksowa diagnostyka i leczenie stanów zapalnych dziąseł — od skalingu po zaawansowane procedury chirurgiczne.",
    icon: "01",
    content: {
      lead: "Zapalenie dziąseł to najwcześniejszy i w pełni odwracalny etap choroby przyzębia. Objawia się krwawieniem, zaczerwienieniem i obrzękiem dziąseł. Wczesna interwencja pozwala całkowicie zatrzymać proces chorobowy.",
      sections: [
        {
          heading: "Objawy",
          body: "Krwawienie dziąseł podczas szczotkowania lub nitkowania, zaczerwienienie i obrzęk brzegu dziąsłowego, nieprzyjemny zapach z ust. Zapalenie dziąseł często przebiega bezbólowo, dlatego regularne wizyty kontrolne są kluczowe dla wczesnego wykrycia.",
        },
        {
          heading: "Diagnostyka",
          body: "Kompleksowe badanie periodontologiczne obejmuje ocenę głębokości kieszonek dziąsłowych, poziomu przyczepu łącznotkankowego, krwawienia przy sondowaniu oraz analizę zdjęć rentgenowskich. Precyzyjna diagnostyka pozwala dobrać optymalny plan leczenia.",
        },
        {
          heading: "Leczenie",
          body: "Profesjonalne oczyszczanie kamienia nazębnego (skaling) i wygładzanie powierzchni korzeni (root planing) to fundament terapii. W połączeniu z instruktażem higieny i regularnym monitoringiem, leczenie prowadzi do pełnego cofnięcia stanu zapalnego.",
        },
      ],
    },
  },
  {
    slug: "zapalenie-przyzebia",
    title: "Zapalenie przyzębia",
    subtitle: "Periodontitis",
    description:
      "Diagnostyka i leczenie choroby przyzębia — zapobieganie powstawaniu kieszeni przyzębnych, utracie kości i ruchomości zębów.",
    icon: "02",
    content: {
      lead: "Zapalenie przyzębia to zaawansowana forma choroby, w której stan zapalny rozprzestrzenia się na tkanki podtrzymujące ząb — kość wyrostka zębodołowego, ozębną i cement korzeniowy. Nieleczone prowadzi do utraty zębów.",
      sections: [
        {
          heading: "Progresja choroby",
          body: "Choroba przyzębia rozwija się stopniowo — od początkowego zapalenia dziąseł, przez powstawanie kieszeni przyzębnych i utratę kości, aż do ruchomości i utraty zębów. Na każdym etapie istnieją skuteczne metody leczenia, które mogą zatrzymać progresję.",
        },
        {
          heading: "Leczenie zachowawcze",
          body: "Niechirurgiczne leczenie periodontologiczne obejmuje skaling poddziąsłowy, root planing oraz terapię antybakteryjną. Celem jest eliminacja biofilmu bakteryjnego i stworzenie warunków do regeneracji tkanek przyzębia.",
        },
        {
          heading: "Leczenie chirurgiczne",
          body: "W zaawansowanych przypadkach stosuje się techniki chirurgii płatowej, regeneracji tkanek kierowanej (GTR) oraz przeszczepy kostne. Precyzyjne podejście mikrochirurgiczne minimalizuje urazowość i przyspiesza gojenie.",
        },
        {
          heading: "Związek ze zdrowiem ogólnym",
          body: "Choroby przyzębia mogą mieć związek z cukrzycą, udarem mózgu, chorobami sercowo-naczyniowymi, miażdżycą, przedwczesnym porodem i niską masą urodzeniową. Leczenie dziąseł to inwestycja w zdrowie całego organizmu.",
        },
      ],
    },
  },
  {
    slug: "recesje-dziasel",
    title: "Recesje dziąseł",
    subtitle: "Gingival recession",
    description:
      "Precyzyjne techniki mikrochirurgiczne z wykorzystaniem przeszczepów tkanki łącznej — pokrycie odsłoniętych szyjek zębowych.",
    icon: "07",
    content: {
      lead: "Recesja dziąsła to cofnięcie się brzegu dziąsłowego, które odsłania szyjkę lub korzeń zęba. Powoduje nadwrażliwość, pogorszenie estetyki i zwiększone ryzyko próchnicy korzeniowej.",
      sections: [
        {
          heading: "Przyczyny",
          body: "Najczęstsze przyczyny to nieprawidłowa technika szczotkowania, cienki biotyp dziąsła, zapalenie przyzębia, nieprawidłowe ustawienie zębów w łuku oraz nawykowe zaciskanie i zgrzytanie zębami (bruksizm).",
        },
        {
          heading: "Techniki mikrochirurgiczne",
          body: "Złotym standardem leczenia recesji jest przeszczep tkanki łącznej pobieranej z podniebienia. Techniki tunelowe i kopertowe pozwalają na minimalizację urazowości i osiągnięcie optymalnego pokrycia odsłoniętych korzeni.",
        },
        {
          heading: "Efekty leczenia",
          body: "Nowoczesne techniki mikrochirurgiczne pozwalają na pokrycie odsłoniętych korzeni w 80–100% przypadków. Przywrócenie prawidłowej linii dziąsła eliminuje nadwrażliwość, poprawia estetykę i chroni zęby przed dalszą destrukcją.",
        },
      ],
    },
  },
  {
    slug: "augmentacja-dziasel",
    title: "Augmentacja dziąseł",
    subtitle: "Soft tissue augmentation",
    description:
      "Pogrubienie dziąsła przed leczeniem ortodontycznym — zapobieganie pogłębianiu recesji podczas noszenia aparatu stałego.",
    icon: "04",
    content: {
      lead: "Augmentacja dziąseł to zabieg pogrubienia cienkiego dziąsła, szczególnie istotny przed planowanym leczeniem ortodontycznym. Odpowiednio gruba strefa dziąsła związanego stanowi ochronę przed powstaniem recesji.",
      sections: [
        {
          heading: "Wskazania",
          body: "Cienki biotyp dziąsła, planowane leczenie ortodontyczne, profilaktyka recesji w okolicy zębów narażonych na przeciążenia lub przesuwanie w kierunku wargowym.",
        },
        {
          heading: "Technika zabiegu",
          body: "Przeszczep wolnej tkanki łącznej lub przeszczep śluzówkowy pozwala na poszerzenie i pogrubienie strefy dziąsła związanego. Zabieg wykonywany jest w znieczuleniu miejscowym z zastosowaniem technik mikrochirurgicznych.",
        },
        {
          heading: "Ortodoncja a przyzębie",
          body: "Współpraca periodontologa z ortodontą to klucz do bezpiecznego przesuwania zębów. Augmentacja dziąsła przed założeniem aparatu minimalizuje ryzyko powikłań i zapewnia stabilny wynik leczenia ortodontycznego.",
        },
      ],
    },
  },
  {
    slug: "wydluzenie-koron-klinicznych",
    title: "Wydłużenie koron klinicznych",
    subtitle: "Crown lengthening",
    description:
      "Chirurgiczne modelowanie dziąsła i kości w celu odsłonięcia większej części zęba — przywrócenie proporcjonalnej, zbalansowanej estetyki.",
    icon: "08",
    content: {
      lead: "Wydłużenie korony klinicznej to precyzyjny zabieg chirurgiczny polegający na usunięciu nadmiaru dziąsła i/lub kości, aby odsłonić większą powierzchnię zęba. Stosowany zarówno ze wskazań estetycznych, jak i protetycznych.",
      sections: [
        {
          heading: "Wskazania estetyczne",
          body: "Tak zwany \u201Euśmiech dziąsłowy\u201D (gummy smile) — nadmierne odsłanianie dziąsła podczas uśmiechu. Chirurgiczne modelowanie linii dziąsła przywraca proporcjonalną, harmonijną estetykę uśmiechu.",
        },
        {
          heading: "Wskazania protetyczne",
          body: "Zbyt krótka korona kliniczna zęba uniemożliwia prawidłowe wykonanie korony protetycznej. Wydłużenie korony zapewnia wystarczającą retencję i właściwy kontur biologiczny odbudowy.",
        },
        {
          heading: "Przebieg zabiegu",
          body: "Zabieg wykonywany jest w znieczuleniu miejscowym. Precyzyjne usunięcie nadmiaru tkanek miękkich i kostnych pozwala na odsłonięcie odpowiedniej powierzchni zęba z zachowaniem szerokości biologicznej przyzębia.",
        },
      ],
    },
  },
  {
    slug: "tkanki-wokol-implantow",
    title: "Tkanki wokół implantów",
    subtitle: "Peri-implant tissues",
    description:
      "Specjalistyczne leczenie stanów zapalnych tkanek wokół implantów — ochrona integracji i długoterminowego powodzenia leczenia.",
    icon: "06",
    content: {
      lead: "Zapalenie tkanek wokół implantów (mucositis i peri-implantitis) to narastający problem w implantologii. Jako periodontolog specjalizuję się w diagnostyce i leczeniu tych stanów, które zagrażają długoterminowemu utrzymaniu implantów.",
      sections: [
        {
          heading: "Mucositis i peri-implantitis",
          body: "Mucositis to odwracalne zapalenie błony śluzowej wokół implantu. Peri-implantitis to zaawansowany stan zapalny z utratą kości podpierającej implant. Wczesna diagnostyka jest kluczowa dla zachowania implantu.",
        },
        {
          heading: "Leczenie",
          body: "Terapia obejmuje dekontaminację powierzchni implantu, leczenie zachowawcze oraz — w zaawansowanych przypadkach — chirurgię regeneracyjną z zastosowaniem biomateriałów kościozastępczych i błon kolagenowych.",
        },
        {
          heading: "Profilaktyka",
          body: "Regularne wizyty kontrolne, profesjonalna higienizacja i indywidualny program profilaktyczny to podstawa długoterminowego powodzenia leczenia implantologicznego.",
        },
      ],
    },
  },
  {
    slug: "wedzidelka-warg-i-jezyka",
    title: "Wędzidełka warg i języka",
    subtitle: "Frenectomy",
    description:
      "Frenulektomia i miofrenuloplastyka przy skróconym wędzidełku — przywrócenie prawidłowej funkcji mowy, oddychania i połykania.",
    icon: "05",
    content: {
      lead: "Skrócone wędzidełko wargi lub języka może wpływać na karmienie piersią u niemowląt, rozwój mowy u dzieci oraz komfort i funkcję u dorosłych. Zabieg frenulektomii przywraca prawidłową ruchomość i funkcję.",
      sections: [
        {
          heading: "Wędzidełko języka (ankyloglossia)",
          body: "Skrócone wędzidełko języka ogranicza jego ruchomość, wpływając na karmienie piersią, rozwój mowy, oddychanie przez nos i pozycję spoczynkową języka. Zabieg plastyki wędzidełka przywraca pełen zakres ruchu.",
        },
        {
          heading: "Wędzidełko wargi",
          body: "Masywne lub nisko przyczepione wędzidełko wargi górnej może powodować diastema (szpara między jedynkami) lub recesję dziąsła. Frenulektomia eliminuje napięcie tkanek i ułatwia zamknięcie szpary ortodontycznie.",
        },
        {
          heading: "Technika zabiegu",
          body: "Zabieg wykonywany jest w znieczuleniu miejscowym z zastosowaniem technik mikrochirurgicznych. Gojenie jest szybkie, a efekt — natychmiastowy. W przypadku dzieci współpracuję z logopedami i ortodontami.",
        },
      ],
    },
  },
  {
    slug: "choroby-blony-sluzowej",
    title: "Choroby błony śluzowej",
    subtitle: "Oral mucosal diseases",
    description:
      "Diagnostyka i leczenie aft, zmian zapalnych i chorób błony śluzowej jamy ustnej — gdzie medycyna stomatologiczna spotyka codzienny komfort.",
    icon: "03",
    content: {
      lead: "Choroby błony śluzowej jamy ustnej obejmują szerokie spektrum zmian — od nawracających aft, przez liszaj płaski, po zmiany przedrakowe. Precyzyjna diagnostyka i wczesne leczenie są kluczowe dla zdrowia i komfortu pacjenta.",
      sections: [
        {
          heading: "Najczęstsze schorzenia",
          body: "Afty nawracające, liszaj płaski jamy ustnej, leukoplakia, pemfigoid błon śluzowych, zmiany polekowe i grzybicze. Każda przewlekła zmiana w jamie ustnej wymaga diagnostyki w celu wykluczenia procesu nowotworowego.",
        },
        {
          heading: "Diagnostyka",
          body: "Badanie kliniczne, dokumentacja fotograficzna, badanie cytologiczne i histopatologiczne (biopsja). Współpraca z dermatologami i patologami w przypadku zmian wymagających diagnostyki interdyscyplinarnej.",
        },
        {
          heading: "Leczenie",
          body: "Terapia farmakologiczna miejscowa i ogólna, eliminacja czynników drażniących, leczenie chorób współistniejących. Regularne monitorowanie zmian potencjalnie złośliwych.",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getNextService(slug: string): ServicePage {
  const index = services.findIndex((s) => s.slug === slug);
  return services[(index + 1) % services.length];
}
