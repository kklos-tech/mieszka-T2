const scenarioConfigAlter2 = { 1: true, 2: true, 3: true, 4: true, 5: false, 6: true };

const scenarioImages = {
  1: "https://images.pexels.com/photos/16865477/pexels-photo-16865477.jpeg?auto=compress&cs=tinysrgb&w=600",
  2: "https://images.pexels.com/photos/8469938/pexels-photo-8469938.jpeg?auto=compress&cs=tinysrgb&w=600",
  3: "https://images.pexels.com/photos/8381908/pexels-photo-8381908.jpeg?auto=compress&cs=tinysrgb&w=600",
  4: "https://images.pexels.com/photos/2225430/pexels-photo-2225430.jpeg?auto=compress&cs=tinysrgb&w=600",
  5: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
  6: "https://images.pexels.com/photos/17647252/pexels-photo-17647252.jpeg?auto=compress&cs=tinysrgb&w=600"
};

const scenariosDataAlter2 = {
  1: {
    title: "PLANUJESZ ZAKUP",
    subtitle: "Wsparcie na starcie",
    description: "Masz na oku lokal? Sprawdzimy go. Nie masz? Pomo\u017Cemy Ci go znale\u017A\u0107.",
    icon: "iconSearch",
    stages: [
      { number: 1, title: "To asystent przy zakupie", icon: "iconHome", question: "Nie wiesz czy lokal nie ma wad? Nie wiesz gdzie lub czego dok\u0142adnie szukasz?" },
      { number: 2, title: "Bez audytu ryzykujesz", icon: "iconAlert", points: ["Ukryte wady konstrukcyjne", "Z\u0142e rozmieszczenie pomieszcze\u0144", "Problemy z instalacjami", "Koszty remontu przekraczaj\u0105ce bud\u017Cet", "Utrata warto\u015Bci inwestycji"] },
      { number: 3, title: "Audyt to Twoja polisa", icon: "iconCheck", points: ["Sprawdzimy ka\u017Cdy metr kwadratowy", "Wykryjemy wady PRZED zakupem", "Ocenimy potencja\u0142 przestrzeni", "Wycenimy realny koszt zmian", "Doradzimy czy warto inwestowa\u0107"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["\u015Awiadoma decyzja \u2013 kupisz lub odrzucisz ze spokojem", "Negocjacje \u2013 zbijasz cen\u0119 o koszt napraw", "Plan dzia\u0142ania \u2013 wiesz co zmieni\u0107 i w jakiej kolejno\u015Bci", "Oszcz\u0119dno\u015B\u0107 \u2013 unikniesz kosztownych b\u0142\u0119d\u00F3w"] }
    ]
  },
  2: {
    title: "JU\u017B KUPIONE",
    subtitle: "Szybki Audyt",
    description: "Tu liczy si\u0119 czas. Mo\u017Ce zd\u0105\u017Cymy ze zmianami lokatorskimi.",
    icon: "iconContract",
    stages: [
      { number: 1, title: "Masz nowy lokal", icon: "iconContract", question: "Cena by\u0142a dobra, lokalizacja te\u017C..." },
      { number: 2, title: "Deweloperski standard \u2260 Twoje potrzeby", icon: "iconAlert", points: ["Uniwersalny uk\u0142ad dla 'przeci\u0119tnego' klienta", "Nieprzemyslane strefy funkcjonalne", "Marnowana powierzchnia", "Niewykorzystany potencja\u0142 wn\u0119trza", "Brak personalizacji pod Tw\u00F3j styl \u017Cycia"] },
      { number: 3, title: "Audyt odkryje potencja\u0142", icon: "iconCheck", points: ["Sprawdzimy funkcjonalno\u015B\u0107 uk\u0142adu", "Znajdziemy nieoczywiste mo\u017Cliwo\u015Bci", "Zaproponujemy zmiany lokatorskie", "Optymalizujemy przestrze\u0144 pod Ciebie", "Doradzimy co zmieni\u0107 PRZED wyko\u0144czeniem"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Optymalizacja \u2013 ka\u017Cdy metr wykorzystany sensownie", "Oszcz\u0119dno\u015B\u0107 \u2013 zmiany przed wyko\u0144czeniem = mniejsze koszty", "Komfort \u2013 lokal idealnie dopasowany do Ciebie", "Warto\u015B\u0107 \u2013 przemy\u015Blane wn\u0119trze = wy\u017Csza cena przy sprzeda\u017Cy"] }
    ]
  },
  3: {
    title: "POTRZEBA ZMIAN",
    subtitle: "Retusz Przestrzeni",
    description: "Co\u015B nie funkcjonuje prawid\u0142owo. Sprawd\u017Amy, czy mo\u017Cna lepiej.",
    icon: "iconHourglass",
    stages: [
      { number: 1, title: "Masz lokal od dawna", icon: "iconHourglass", question: "Co\u015B jednak nie funkcjonuje prawid\u0142owo...", subQuestion: "Czujesz, \u017Ce mo\u017Cna lepiej, ale nie wiesz jak? Dowiedz si\u0119..." },
      { number: 2, title: "Symptomy z\u0142ego uk\u0142adu", icon: "iconAlert", points: ["Ci\u0105g\u0142y ba\u0142agan mimo sprz\u0105tania", "Brak miejsca na wszystko", "Niewygodne codzienne czynno\u015Bci", "Pomieszczenia kt\u00F3re nie s\u0105 u\u017Cywane", "Uczucie ciasno\u015Bci mimo du\u017Cej powierzchni"] },
      { number: 3, title: "Audyt zdiagnozuje problemy", icon: "iconCheck", points: ["Przeanalizujemy Twoje nawyki i potrzeby", "Znajdziemy \u017Ar\u00F3d\u0142o problem\u00F3w", "Zaproponujemy konkretne rozwi\u0105zania", "Poka\u017Cemy jak zmieni\u0107 przestrze\u0144 bez remontu", "Lub zaplanujemy efektywny remont"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Diagnoza \u2013 zrozumiesz dlaczego co\u015B nie dzia\u0142a", "Rozwi\u0105zania \u2013 konkretne pomys\u0142y na zmiany", "Priorytetyzacja \u2013 wiesz od czego zacz\u0105\u0107", "Komfort \u017Cycia \u2013 lokal wreszcie wspiera Twoje potrzeby"] }
    ]
  },
  4: {
    title: "POD WYNAJEM",
    subtitle: "Kalkulator rentowno\u015Bci",
    description: "Sprawd\u017Amy jak szybko i niedrogo dostosowa\u0107 lokal.",
    icon: "iconKey",
    stages: [
      { number: 1, title: "Masz lokal inwestycyjny", icon: "iconKey", question: "Chcesz wynajmowa\u0107 z zyskiem?", subQuestion: "Mo\u017Cemy szybko i niedrogo sprawdzi\u0107 jak j\u0105 dostosowa\u0107 do najmu." },
      { number: 2, title: "Typowe problemy lokali pod wynajem", icon: "iconAlert", points: ["Nieprzemyslany uk\u0142ad odstraszaj\u0105cy najemc\u00F3w", "Za ma\u0142a rentowno\u015B\u0107 w stosunku do potencja\u0142u", "Brak uniwersalno\u015Bci dla r\u00F3\u017Cnych grup najemc\u00F3w", "Wysokie koszty utrzymania zjadaj\u0105ce zyski", "Nieoptymalne wyko\u0144czenie = wy\u017Csze koszty remont\u00F3w"] },
      { number: 3, title: "Audyt maksymalizuje rentowno\u015B\u0107", icon: "iconCheck", points: ["Sprawdzimy jak zwi\u0119kszy\u0107 atrakcyjno\u015B\u0107 dla najemc\u00F3w", "Zaproponujemy optymalne rozwi\u0105zania wyko\u0144czeniowe", "Poka\u017Cemy jak obni\u017Cy\u0107 koszty eksploatacji", "Doradzimy jak unikn\u0105\u0107 drogich b\u0142\u0119d\u00F3w", "Zaplanujemy inwestycj\u0119 pod d\u0142ugoterminowy zysk"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Wy\u017Csza stawka najmu \u2013 atrakcyjna przestrze\u0144 = wi\u0119cej zainteresowanych", "Szybszy najem \u2013 przemy\u015Blany uk\u0142ad przyci\u0105ga najemc\u00F3w", "Ni\u017Csze koszty \u2013 optymalizacja medi\u00F3w i materia\u0142\u00F3w", "D\u0142ugoterminowy zysk \u2013 inwestycja kt\u00F3ra si\u0119 zwraca"] }
    ]
  },
  5: {
    title: "Nowy Projekt Wn\u0119trza",
    subtitle: "Projekt bez zb\u0119dno\u015Bci",
    description: "Mniej dekoracji, wi\u0119cej konkret\u00F3w.",
    icon: "iconSparkles",
    stages: [
      { number: 1, title: "Szukasz projektu wn\u0119trza", icon: "iconSparkles", question: "Niezale\u017Cnie od statusu twojego lokalu...", subQuestion: "Chcesz funkcjonalny projekt bez przep\u0142acania za zb\u0119dne dekoracje?" },
      { number: 2, title: "Tradycyjne projekty s\u0105 drogie", icon: "iconAlert", points: ["Wysokie koszty projektowania (cz\u0119sto 5-10 tys. z\u0142)", "D\u0142ugi czas realizacji (2-3 miesi\u0105ce)", "Skupienie na dekoracjach zamiast funkcji", "Drogie materia\u0142y bez uzasadnienia", "Brak elastyczno\u015Bci w realizacji"] },
      { number: 3, title: "Nasz projekt to konkret", icon: "iconCheck", points: ["Skupiamy si\u0119 na funkcjonalno\u015Bci i ergonomii", "Optymalizujemy koszty bez utraty jako\u015Bci", "Szybka realizacja projektu (1-2 tygodnie)", "Praktyczne rozwi\u0105zania dla Twojego stylu \u017Cycia", "Pe\u0142na dokumentacja techniczna"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Oszcz\u0119dno\u015B\u0107 \u2013 projekt 2-3x ta\u0144szy ni\u017C u tradycyjnych architekt\u00F3w", "Szybko\u015B\u0107 \u2013 gotowy projekt w u\u0142amku czasu", "Praktyczno\u015B\u0107 \u2013 ka\u017Cdy element ma uzasadnienie", "Elastyczno\u015B\u0107 \u2013 \u0142atwe modyfikacje i adaptacje"] }
    ]
  },
  6: {
    title: "JESTE\u015A DEWELOPEREM",
    subtitle: "Partner Inwestycji",
    description: "Upewnijmy si\u0119, \u017Ce oddajesz klientom najwy\u017Csz\u0105 jako\u015B\u0107.",
    icon: "iconHouseUp",
    stages: [
      { number: 1, title: "Budujesz dla klient\u00F3w", icon: "iconHouseUp", question: "Chcesz zapewni\u0107 najwy\u017Csz\u0105 jako\u015B\u0107?", subQuestion: "Spr\u00F3bujmy razem sprawdzi\u0107, co da si\u0119 poprawi\u0107 w Twojej inwestycji." },
      { number: 2, title: "Ryzyko dla dewelopera", icon: "iconAlert", points: ["Uk\u0142ady nieoptymalne dla przysz\u0142ych mieszka\u0144c\u00F3w", "B\u0142\u0119dy ergonomiczne w standardowych projektach", "Marnowana przestrze\u0144 w lokalach", "Niezadowoleni klienci = gorsze opinie", "Trudno\u015Bci w sprzeda\u017Cy/wynajmie problemowych lokali"] },
      { number: 3, title: "Audyt deweloperski", icon: "iconCheck", points: ["Sprawdzimy ergonomi\u0119 i funkcjonalno\u015B\u0107 uk\u0142ad\u00F3w", "Wykryjemy problemy zanim trafi\u0105 do klient\u00F3w", "Zaproponujemy optymalizacje zwi\u0119kszaj\u0105ce warto\u015B\u0107", "Pomo\u017Cemy stworzy\u0107 lokale \u0142atwiejsze w sprzeda\u017Cy", "Doradzamy jak zwi\u0119kszy\u0107 satysfakcj\u0119 klient\u00F3w"] },
      { number: 4, title: "Co zyskujesz?", icon: "iconTrending", points: ["Jako\u015B\u0107 \u2013 zadowoleni klienci = lepsza reputacja", "Sprzeda\u017C \u2013 lepsze lokale sprzedaj\u0105 si\u0119 szybciej", "Warto\u015B\u0107 \u2013 optymalne uk\u0142ady = wy\u017Csza cena za m\u00B2", "Przewaga \u2013 wyr\u00F3\u017Cnij si\u0119 jako\u015Bci\u0105 na tle konkurencji"] }
    ]
  }
};

const iconsAlter2 = {
  iconSearch: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  iconContract: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15l2 2 4-4"></path>',
  iconHourglass: '<path d="M6.5 2h11M6.5 22h11M6 2v4l6 6-6 6v4M18 2v4l-6 6 6 6v4M12 12h.01" stroke-linecap="round" stroke-linejoin="round"/>',
  iconKey: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
  iconSparkles: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z">',
  iconHouseUp: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="12 15 12 9"></polyline><polyline points="9 12 12 9 15 12"></polyline>',
  iconHome: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  iconAlert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path> <line x1="12" y1="8" x2="12" y2="13"></line><circle cx="12" cy="17" r="0.3"></circle>',
  iconCheck: '<polyline points="20 6 9 17 4 12"></polyline>',
  iconTrending: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>'
};

export function initSchematAlter2() {
  renderScenarioCardsAlter2();
  const backBtn = document.getElementById('back-btn');
  const collapseBtn = document.getElementById('collapse-btn');
  if (backBtn) backBtn.addEventListener('click', (e) => { e.preventDefault(); hideFlowchartAlter2(); });
  if (collapseBtn) collapseBtn.addEventListener('click', (e) => { e.preventDefault(); hideFlowchartAlter2(); });
}

function renderScenarioCardsAlter2() {
  const container = document.getElementById('scenario-selector');
  if (!container) return;

  container.innerHTML = Object.keys(scenariosDataAlter2)
    .filter(id => scenarioConfigAlter2[id])
    .map(id => {
      const scenario = scenariosDataAlter2[id];
      const imageUrl = scenarioImages[id];
      return `<div class="scenario-card" data-scenario="${id}"><div class="scenario-image" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url('${imageUrl}');"><svg class="scenario-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconsAlter2[scenario.icon]}</svg></div><div class="scenario-content"><h3>${scenario.title}</h3><p class="scenario-title">${scenario.subtitle}</p><p class="scenario-desc">${scenario.description}</p><div class="scenario-cta">Zobacz schemat &rarr;</div></div></div>`;
    }).join('');

  document.querySelectorAll('.scenario-card').forEach(card => {
    card.addEventListener('click', function() {
      const scenarioId = parseInt(this.getAttribute('data-scenario'));
      showFlowchartAlter2(scenarioId);
    });
  });
}

function showFlowchartAlter2(scenarioId) {
  const data = scenariosDataAlter2[scenarioId];
  if (!data) return;

  const selector = document.getElementById('scenario-selector');
  const container = document.getElementById('flowchart-container');
  const steps = document.getElementById('flowchart-steps');
  const collapseBtn = document.getElementById('collapse-btn');

  if (selector) selector.style.display = 'none';
  if (container) container.style.display = 'block';
  if (collapseBtn) collapseBtn.style.display = 'inline-block';

  if (steps) {
    steps.innerHTML = data.stages.map(stage => `<div class="flow-step"><div class="flow-step-number">${stage.number}</div><div class="flow-step-header"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconsAlter2[stage.icon] || iconsAlter2.iconHome}</svg><div class="flow-step-content"><h4>${stage.title}</h4>${stage.question ? `<p class="flow-step-question">${stage.question}</p>` : ''}${stage.points ? `<ul class="flow-step-list">${stage.points.map(point => `<li>${point}</li>`).join('')}</ul>` : ''}</div></div></div>`).join('');
  }

  setTimeout(() => {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      const rect = backBtn.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 120;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, 100);
}

function hideFlowchartAlter2() {
  const selector = document.getElementById('scenario-selector');
  const container = document.getElementById('flowchart-container');
  const collapseBtn = document.getElementById('collapse-btn');

  if (container) container.style.display = 'none';
  if (selector) selector.style.display = 'grid';
  if (collapseBtn) collapseBtn.style.display = 'none';

  setTimeout(() => {
    if (selector) selector.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}
