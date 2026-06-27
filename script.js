window.addEventListener('error', (event) => {
  try {
    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.inset = '16px';
    panel.style.background = 'rgba(12,15,20,0.95)';
    panel.style.color = '#f2f5f9';
    panel.style.padding = '16px';
    panel.style.border = '1px solid rgba(255,255,255,0.15)';
    panel.style.borderRadius = '12px';
    panel.style.zIndex = '9999';
    panel.style.fontFamily = 'monospace';
    panel.style.whiteSpace = 'pre-wrap';
    const msg = event.message || 'Unknown error';
    const src = event.filename || 'unknown';
    const line = event.lineno || 0;
    const col = event.colno || 0;
    const stack = event.error?.stack || '';
    panel.textContent = `Script error: ${msg}${src}:${line}:${col}${stack}`;
    document.body.appendChild(panel);
  } catch (e) {
    // ignore
  }
});

window.addEventListener('unhandledrejection', (event) => {
  try {
    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.inset = '16px';
    panel.style.background = 'rgba(12,15,20,0.95)';
    panel.style.color = '#f2f5f9';
    panel.style.padding = '16px';
    panel.style.border = '1px solid rgba(255,255,255,0.15)';
    panel.style.borderRadius = '12px';
    panel.style.zIndex = '9999';
    panel.style.fontFamily = 'monospace';
    panel.style.whiteSpace = 'pre-wrap';
    const reason = event.reason?.stack || event.reason?.message || String(event.reason);
    panel.textContent = `Unhandled rejection:${reason}`;
    document.body.appendChild(panel);
  } catch (e) {
    // ignore
  }
});

const i18n = {
  en: {
    eyebrow: 'Interactive Chemistry Atlas',
    title: 'Periodic Table',
    lede: 'Click any element to reveal its details. Filter, search, and explore with smooth, responsive interactions.',
    statElements: 'Elements',
    statCategories: 'Categories',
    statMode: 'Mode',
    modeFocus: 'Focus',
    themeFocus: 'Focus',
    themeLight: 'Light',
    themeBlack: 'Black',
    themeSunset: 'Sunset',
    themeOcean: 'Ocean',
    themeForest: 'Forest',
    language: 'Language',
    modeButton: 'Mode',
    search: 'Search',
    searchPlaceholder: 'Hydrogen, H, 1...',
    gridCompact: 'Compact Grid',
    gridSpacious: 'Spacious Grid',
    legendShow: 'Show Legend',
    legendHide: 'Hide Legend',
    close: 'Close',
    selectPrompt: 'Select an element to begin.',
    selectedSuffix: 'selected.',
    lanthanides: 'Lanthanides',
    actinides: 'Actinides',
    atomicShort: 'Atomic #',
    valueUnknown: '—',
    detailsNote: 'Some properties are unknown for short-lived or recently discovered elements.',
    fieldAtomicNumber: 'Atomic Number',
    fieldSymbol: 'Symbol',
    fieldName: 'Name',
    fieldCategory: 'Category',
    fieldGroup: 'Group',
    fieldPeriod: 'Period',
    fieldAtomicMass: 'Atomic Mass',
    fieldElectronConfig: 'Electron Config',
    fieldOxidationStates: 'Oxidation States',
    fieldElectronegativity: 'Electronegativity',
    fieldPhase: 'Phase (STP)',
    fieldDensity: 'Density',
    fieldMeltingPoint: 'Melting Point',
    fieldBoilingPoint: 'Boiling Point',
    fieldIsotopes: 'Known Isotopes',
    fieldStableIsotopes: 'Stable Isotopes',
    loaderTitle: 'Initializing Reaction',
    loaderStep1: 'Mixing noble gases...',
    loaderStep2: 'Balancing electrons...',
    loaderStep3: 'Aligning periods...',
    loaderStep4: 'Reaction complete.',
    crafted: 'Crafted with curiosity by',
    compare: 'Compare',
    compareTitle: 'Compare Elements',
    compareAdd: 'Add to Compare',
    compareClear: 'Clear',
    compareClose: 'Close',
    comparePickerTitle: 'Add Element',
    comparePickerPlaceholder: 'Search elements...',
    experiment: 'Experiment',
    experimentTitle: 'Live Experiment',
    experimentClear: 'Clear',
    experimentClose: 'Close',
    experimentAdd: 'Add Element',
    experimentStart: 'Start Reaction',
    experimentHint: 'Select two elements to simulate a reaction.',
    experimentSlotA: 'Drop Element A',
    experimentSlotB: 'Drop Element B',
    reactionNo: 'No significant reaction observed.',
    reactionIonic: 'Ionic reaction likely: electron transfer and salt formation.',
    reactionCovalent: 'Covalent bonding likely: shared electrons.',
    reactionMetallic: 'Metallic bonding: alloy formation possible.',
    reactionInert: 'Inert behavior: noble gases rarely react.',
    radiation: 'Radiation',
    radiationOn: 'Radiation: On',
    radiationOff: 'Radiation: Off',
    hundExceptions: 'Hund Exceptions',
    hundOn: 'Hund Exceptions: On',
    hundOff: 'Hund Exceptions: Off',
    phaseReady: 'Ready',
    phaseMix: 'Mixing',
    phaseActivate: 'Activation',
    phaseReact: 'Reaction',
    phaseSettle: 'Stabilizing',
    phaseComplete: 'Complete',
    tempLabel: 'Temp',
    energyLabel: 'Energy',
    phaseSolid: 'Solid',
    phaseLiquid: 'Liquid',
    phaseGas: 'Gas',
    phaseUnknown: 'Unknown',
    timeline: 'Timeline',
    timelineTitle: 'Discovery Timeline',
    timelineNote: 'Elements discovered up to this year are highlighted.',
    timelineClose: 'Close Timeline',
    timelineReset: 'Reset to Today',
    soundOn: 'Sound: On',
    soundOff: 'Sound: Off',
    settings: 'Settings',
    settingsTitle: 'Settings',
    settingsClose: 'Close',
    settingsAnimations: 'Disable Animations',
    settingsEffects: 'Disable Special Effects',
    settingsPulses: 'Disable Pulsing Effects',
    settingsMenus: 'Disable Menu Animations',
    settingsSweep: 'Disable Sweep Outline',
    settingsGlass: 'Glass',
    hint: 'Try: battery, inert, noble gas, catalyst',
    calcTitle: 'Molar Mass Calculator',
    calcPlaceholder: 'e.g. Ca2SO4',
    calcButton: 'Calculate',
    calcDefault: 'Enter a formula to get molar mass.',
    calcErrorEmpty: 'Enter a formula first.',
    calcErrorInvalid: 'Unknown element or invalid formula.',
    reactTitle: 'Reaction Calculator',
    reactPlaceholder: 'e.g. NaCl + H2O',
    reactButton: 'Predict',
    reactDefault: 'Enter reactants to predict products.',
    reactErrorEmpty: 'Enter reactants first.',
    reactErrorInvalid: 'Invalid formula or reactant.',
    reactNo: 'No clear reaction predicted (likely dissolution or no reaction).',
    reactDissolve: 'Likely dissolves in water: ions present in solution.',
    reactWaterMetal: 'Metal + water reaction: metal hydroxide + hydrogen gas.',
    reactIonic: 'Ionic compound likely: metal + nonmetal.',
    reactCovalent: 'Covalent compound likely: nonmetal + nonmetal.',
    reactInert: 'Inert behavior: noble gases rarely react.',
    reactProducts: 'Products',
    reactNoReaction: 'No reaction',
    reactAmphoteric: 'No reaction',
    reactProductsUnknown: 'Products unclear with current rules.',
    appearance: 'Appearance',
    summary: 'Summary',
    uses: 'Uses',
    summaryTemplate: '{name} is a {category} element with atomic number {number}. It is in period {period}, group {group}. At STP it is {phase}.',
    summaryTemplateNoGroup: '{name} is a {category} element with atomic number {number}. It is in period {period}. At STP it is {phase}.',
    usesTemplate: 'Commonly studied in chemistry and materials science; specific uses vary by compound and application.',
    discoveredBy: 'Discovered By',
    namedBy: 'Named By',
    discoveryYear: 'Discovery Year',
    source: 'Source',
    geometry: 'Geometry',
    orbitals: 'Orbitals',
    quantumNumbers: 'Quantum Numbers',
    lastOrbital: 'Last Orbital',
    shapeS: 'Spherical',
    shapeP: 'Dumbbell',
    shapeD: 'Clover',
    shapeF: 'Complex',
    chemistry: 'Chemistry',
    chemistryOn: 'Chemistry: On',
    chemistryOff: 'Chemistry: Off',
    chemCompounds: 'Compounds',
    chemReactions: 'Reactions',
    chemNoResults: 'No chemistry matches yet.',
    chemHint: 'Type a formula like H2O or NaCl.',
    chemComponents: 'Components',
    chemTopMatch: 'Top match',
    chemTry: 'Try typing a formula on the left.'
  },
  sq: {
    eyebrow: 'Atlas Interaktiv i Kimisë',
    title: 'Sistemi Periodik',
    lede: 'Kliko çdo element për të parë detajet. Filtro, kërko dhe eksploro me ndërveprime të buta.',
    statElements: 'Elemente',
    statCategories: 'Kategori',
    statMode: 'Modalitet',
    modeFocus: 'Fokus',
    themeFocus: 'Fokus',
    themeLight: 'I lehtë',
    themeBlack: 'E zezë',
    themeSunset: 'Perëndim',
    themeOcean: 'Oqeani',
    themeForest: 'Pyll',
    language: 'Gjuha',
    modeButton: 'Modalitet',
    search: 'Kërko',
    searchPlaceholder: 'Hidrogjeni, H, 1...',
    gridCompact: 'Rrjetë kompakte',
    gridSpacious: 'Rrjetë e gjerë',
    legendShow: 'Shfaq legjendën',
    legendHide: 'Fshih legjendën',
    close: 'Mbyll',
    selectPrompt: 'Zgjidh një element për të filluar.',
    selectedSuffix: 'u zgjodh.',
    lanthanides: 'Lantanidet',
    actinides: 'Aktinidet',
    atomicShort: 'Numri atomik',
    valueUnknown: '—',
    detailsNote: 'Disa veti nuk dihen për elemente shumë jetëshkurtra ose të zbuluara së fundmi.',
    fieldAtomicNumber: 'Numri atomik',
    fieldSymbol: 'Simboli',
    fieldName: 'Emri',
    fieldCategory: 'Kategoria',
    fieldGroup: 'Grupi',
    fieldPeriod: 'Periudha',
    fieldAtomicMass: 'Masa atomike',
    fieldElectronConfig: 'Konfigurimi elektronik',
    fieldOxidationStates: 'Gjendjet e oksidimit',
    fieldElectronegativity: 'Elektronegativiteti',
    fieldPhase: 'Faza (STP)',
    fieldDensity: 'Dendësia',
    fieldMeltingPoint: 'Pika e shkrirjes',
    fieldBoilingPoint: 'Pika e vlimit',
    fieldIsotopes: 'Izotope të njohura',
    fieldStableIsotopes: 'Izotope të qëndrueshme',
    loaderTitle: 'Duke nisur reaksionin',
    loaderStep1: 'Duke përzier gazrat fisnikë...',
    loaderStep2: 'Duke balancuar elektronët...',
    loaderStep3: 'Duke rregulluar periodat...',
    loaderStep4: 'Reaksioni përfundoi.',
    crafted: 'Krijuar me kuriozitet nga',
    compare: 'Krahaso',
    compareTitle: 'Krahaso elementet',
    compareAdd: 'Shto për krahasim',
    compareClear: 'Pastro',
    compareClose: 'Mbyll',
    comparePickerTitle: 'Shto element',
    comparePickerPlaceholder: 'Kërko elemente...',
    experiment: 'Eksperiment',
    experimentTitle: 'Eksperiment i gjallë',
    experimentClear: 'Pastro',
    experimentClose: 'Mbyll',
    experimentAdd: 'Shto element',
    experimentStart: 'Nis reaksionin',
    experimentHint: 'Zgjidh dy elemente për të simuluar një reaksion.',
    experimentSlotA: 'Vendos Elementin A',
    experimentSlotB: 'Vendos Elementin B',
    reactionNo: 'Nuk u vërejt reaksion i rëndësishëm.',
    reactionIonic: 'Reaksion jonik i mundshëm: transferim i elektroneve.',
    reactionCovalent: 'Lidhje kovalente e mundshme: ndarje elektronike.',
    reactionMetallic: 'Lidhje metalike: mundësi për aliazh.',
    reactionInert: 'Sjellje inerte: gazrat fisnikë rrallë reagojnë.',
    radiation: 'Rrezatim',
    radiationOn: 'Rrezatim: Aktiv',
    radiationOff: 'Rrezatim: Fikur',
    hundExceptions: 'Përjashtime të Hund-it',
    hundOn: 'Përjashtime të Hund-it: Aktiv',
    hundOff: 'Përjashtime të Hund-it: Fikur',
    phaseReady: 'Gati',
    phaseMix: 'Përzierje',
    phaseActivate: 'Aktivizim',
    phaseReact: 'Reaksion',
    phaseSettle: 'Stabilizim',
    phaseComplete: 'Përfunduar',
    tempLabel: 'Temp',
    energyLabel: 'Energji',
    phaseSolid: 'I ngurtë',
    phaseLiquid: 'I lëngshëm',
    phaseGas: 'Gaz',
    phaseUnknown: 'E panjohur',
    timeline: 'Kronologji',
    timelineTitle: 'Kronologjia e Zbulimeve',
    timelineNote: 'Elementet e zbuluara deri në këtë vit theksohen.',
    timelineClose: 'Mbyll kronologjinë',
    timelineReset: 'Rivendos sot',
    soundOn: 'Zëri: Aktiv',
    soundOff: 'Zëri: Fikur',
    settings: 'Cilësimet',
    settingsTitle: 'Cilësimet',
    settingsClose: 'Mbyll',
    settingsAnimations: 'Çaktivizo animacionet',
    settingsEffects: 'Çaktivizo efektet speciale',
    settingsPulses: 'Çaktivizo pulsimet',
    settingsMenus: 'Çaktivizo animacionet e menuve',
    settingsSweep: 'Çaktivizo vijën e valës',
    settingsGlass: 'Xham',
    hint: 'Provo: bateri, inert, gaz fisnik, katalizator',
    calcTitle: 'Llogaritësi i masës molare',
    calcPlaceholder: 'p.sh. Ca2SO4',
    calcButton: 'Llogarit',
    calcDefault: 'Shkruaj një formulë për masën molare.',
    calcErrorEmpty: 'Shkruaj një formulë më parë.',
    calcErrorInvalid: 'Element i panjohur ose formulë e pavlefshme.',
    reactTitle: 'Llogaritësi i reaksionit',
    reactPlaceholder: 'p.sh. NaCl + H2O',
    reactButton: 'Parashiko',
    reactDefault: 'Shkruaj reaktantët për të parashikuar produktet.',
    reactErrorEmpty: 'Shkruaj reaktantët më parë.',
    reactErrorInvalid: 'Formulë ose reaktant i pavlefshëm.',
    reactNo: 'Nuk u parashikua reaksion i qartë (shkrirje ose pa reaksion).',
    reactDissolve: 'Ka gjasa të tretet në ujë: jone në solucion.',
    reactWaterMetal: 'Metal + ujë: hidroksid metali + hidrogjen.',
    reactIonic: 'Komponim jonik i mundshëm: metal + jometal.',
    reactCovalent: 'Komponim kovalent i mundshëm: jometal + jometal.',
    reactInert: 'Sjellje inerte: gazrat fisnikë rrallë reagojnë.',
    reactProducts: 'Produktet',
    reactNoReaction: 'Pa reaksion',
    reactAmphoteric: 'Pa reaksion',
    reactProductsUnknown: 'Produktet janë të paqarta me rregullat aktuale.',
    appearance: 'Pamja',
    summary: 'Përmbledhje',
    uses: 'Përdorime',
    summaryTemplate: '{name} është një element {category} me numër atomik {number}. Është në periudhën {period}, grupin {group}. Në STP është {phase}.',
    summaryTemplateNoGroup: '{name} është një element {category} me numër atomik {number}. Është në periudhën {period}. Në STP është {phase}.',
    usesTemplate: 'Studjohet gjerësisht në kimi dhe shkencën e materialeve; përdorimet specifike varen nga përbërja dhe aplikimi.',
    discoveredBy: 'Zbuluesi',
    namedBy: 'Emërtuar nga',
    discoveryYear: 'Viti i zbulimit',
    source: 'Burimi',
    geometry: 'Gjeometria',
    orbitals: 'Orbitalet',
    quantumNumbers: 'Numrat kuantikë',
    lastOrbital: 'Orbitali i fundit',
    shapeS: 'Sferike',
    shapeP: 'Dumbbell',
    shapeD: 'Tërfil',
    shapeF: 'Komplekse',
    chemistry: 'Kimi',
    chemistryOn: 'Kimi: Aktiv',
    chemistryOff: 'Kimi: Fikur',
    chemCompounds: 'Përbërjet',
    chemReactions: 'Reaksionet',
    chemNoResults: 'Nuk ka përputhje kimike ende.',
    chemHint: 'Shkruaj një formulë si H2O ose NaCl.',
    chemComponents: 'Përbërësit',
    chemTopMatch: 'Përputhja kryesore',
    chemTry: 'Provoni të shkruani një formulë të vlefshme.'
  },  de: {
    eyebrow: 'Interaktiver Chemieatlas',
    title: 'Periodensystem',
    lede: 'Klicke auf ein Element, um Details zu sehen. Filtere, suche und erkunde mit sanften, reaktionsschnellen Interaktionen.',
    statElements: 'Elemente',
    statCategories: 'Kategorien',
    statMode: 'Modus',
    modeFocus: 'Fokus',
    themeFocus: 'Fokus',
    themeLight: 'Hell',
    themeBlack: 'Schwarz',
    themeSunset: 'Sonnenuntergang',
    themeOcean: 'Ozean',
    themeForest: 'Wald',
    language: 'Sprache',
    modeButton: 'Modus',
    search: 'Suchen',
    searchPlaceholder: 'Wasserstoff, H, 1...',
    gridCompact: 'Kompaktes Raster',
    gridSpacious: 'Weites Raster',
    legendShow: 'Legende anzeigen',
    legendHide: 'Legende ausblenden',
    close: 'Schliessen',
    selectPrompt: 'Waehle ein Element, um zu beginnen.',
    selectedSuffix: 'ausgewaehlt.',
    lanthanides: 'Lanthaniden',
    actinides: 'Actiniden',
    atomicShort: 'Ordnungszahl',
    valueUnknown: '—',
    detailsNote: 'Einige Eigenschaften sind fuer kurzlebige oder kuerzlich entdeckte Elemente unbekannt.',
    fieldAtomicNumber: 'Ordnungszahl',
    fieldSymbol: 'Symbol',
    fieldName: 'Name',
    fieldCategory: 'Kategorie',
    fieldGroup: 'Gruppe',
    fieldPeriod: 'Periode',
    fieldAtomicMass: 'Atommasse',
    fieldElectronConfig: 'Elektronenkonfiguration',
    fieldOxidationStates: 'Oxidationsstufen',
    fieldElectronegativity: 'Elektronegativitaet',
    fieldPhase: 'Phase (STP)',
    fieldDensity: 'Dichte',
    fieldMeltingPoint: 'Schmelzpunkt',
    fieldBoilingPoint: 'Siedepunkt',
    fieldIsotopes: 'Bekannte Isotope',
    fieldStableIsotopes: 'Stabile Isotope',
    loaderTitle: 'Reaktion wird gestartet',
    loaderStep1: 'Edelgase werden gemischt...',
    loaderStep2: 'Elektronen werden ausbalanciert...',
    loaderStep3: 'Perioden werden ausgerichtet...',
    loaderStep4: 'Reaktion abgeschlossen.',
    crafted: 'Mit Neugier geschaffen von',
    compare: 'Vergleichen',
    compareTitle: 'Elemente vergleichen',
    compareAdd: 'Zum Vergleich hinzufuegen',
    compareClear: 'Leeren',
    compareClose: 'Schliessen',
    comparePickerTitle: 'Element hinzufuegen',
    comparePickerPlaceholder: 'Elemente suchen...',
    experiment: 'Experiment',
    experimentTitle: 'Live-Experiment',
    experimentClear: 'Leeren',
    experimentClose: 'Schliessen',
    experimentAdd: 'Element hinzufuegen',
    experimentStart: 'Reaktion starten',
    experimentHint: 'Waehle zwei Elemente, um eine Reaktion zu simulieren.',
    experimentSlotA: 'Element A',
    experimentSlotB: 'Element B',
    reactionNo: 'Keine signifikante Reaktion.',
    reactionIonic: 'Ionenreaktion moeglich: Elektronenuebertrag.',
    reactionCovalent: 'Kovalente Bindung: geteilte Elektronen.',
    reactionMetallic: 'Metallische Bindung: Legierung moeglich.',
    reactionInert: 'Inertes Verhalten: Edelgase reagieren selten.',
    radiation: 'Strahlung',
    radiationOn: 'Strahlung: An',
    radiationOff: 'Strahlung: Aus',
    hundExceptions: 'Hund-Ausnahmen',
    hundOn: 'Hund-Ausnahmen: An',
    hundOff: 'Hund-Ausnahmen: Aus',
    phaseReady: 'Bereit',
    phaseMix: 'Mischen',
    phaseActivate: 'Aktivierung',
    phaseReact: 'Reaktion',
    phaseSettle: 'Stabilisierung',
    phaseComplete: 'Fertig',
    tempLabel: 'Temp',
    energyLabel: 'Energie',
    phaseSolid: 'Fest',
    phaseLiquid: 'Fluessig',
    phaseGas: 'Gas',
    phaseUnknown: 'Unbekannt',
    timeline: 'Zeitachse',
    timelineTitle: 'Entdeckungszeitachse',
    timelineNote: 'Bis zu diesem Jahr entdeckte Elemente werden hervorgehoben.',
    timelineClose: 'Zeitachse schliessen',
    timelineReset: 'Auf Heute setzen',
    soundOn: 'Sound: An',
    soundOff: 'Sound: Aus',
    settings: 'Einstellungen',
    settingsTitle: 'Einstellungen',
    settingsClose: 'Schliessen',
    settingsAnimations: 'Animationen deaktivieren',
    settingsEffects: 'Spezialeffekte deaktivieren',
    settingsPulses: 'Pulsieren deaktivieren',
    settingsMenus: 'Menue-Animationen deaktivieren',
    settingsSweep: 'Sweep-Umrandung deaktivieren',
    settingsGlass: 'Glas',
    hint: 'Tipp: Batterie, inert, Edelgas, Katalysator',
    calcTitle: 'Molare Massenberechnung',
    calcPlaceholder: 'z.B. Ca2SO4',
    calcButton: 'Berechnen',
    calcDefault: 'Gib eine Formel ein, um die molare Masse zu erhalten.',
    calcErrorEmpty: 'Bitte zuerst eine Formel eingeben.',
    calcErrorInvalid: 'Unbekanntes Element oder ungueltige Formel.',
    reactTitle: 'Reaktionsrechner',
    reactPlaceholder: 'z.B. NaCl + H2O',
    reactButton: 'Vorhersagen',
    reactDefault: 'Gib Edukte ein, um Produkte vorherzusagen.',
    reactErrorEmpty: 'Bitte zuerst Edukte eingeben.',
    reactErrorInvalid: 'Ungueltige Formel oder Edukt.',
    reactNo: 'Keine klare Reaktion vorhergesagt (loeslich oder keine Reaktion).',
    reactDissolve: 'Wahrscheinlich in Wasser geloest: Ionen in Loesung.',
    reactWaterMetal: 'Metall + Wasser: Metallhydroxid + Wasserstoff.',
    reactIonic: 'Ionenverbindung moeglich: Metall + Nichtmetall.',
    reactCovalent: 'Kovalente Verbindung moeglich: Nichtmetall + Nichtmetall.',
    reactInert: 'Inertes Verhalten: Edelgase reagieren selten.',
    reactProducts: 'Produkte',
    reactNoReaction: 'Keine Reaktion',
    reactAmphoteric: 'Keine Reaktion',
    reactProductsUnknown: 'Produkte unklar mit den aktuellen Regeln.',
    appearance: 'Aussehen',
    summary: 'Zusammenfassung',
    uses: 'Verwendung',
    summaryTemplate: '{name} ist ein {category}-Element mit der Ordnungszahl {number}. Es liegt in Periode {period}, Gruppe {group}. Bei STP ist es {phase}.',
    summaryTemplateNoGroup: '{name} ist ein {category}-Element mit der Ordnungszahl {number}. Es liegt in Periode {period}. Bei STP ist es {phase}.',
    usesTemplate: 'Wird haeufig in Chemie und Materialwissenschaft untersucht; konkrete Anwendungen variieren je nach Einsatz.',
    discoveredBy: 'Entdeckt von',
    namedBy: 'Benannt von',
    discoveryYear: 'Entdeckungsjahr',
    source: 'Quelle',
    geometry: 'Geometrie',
    orbitals: 'Orbitale',
    quantumNumbers: 'Quantenzahlen',
    lastOrbital: 'Letztes Orbital',
    shapeS: 'Kugelfoermig',
    shapeP: 'Hantelfoermig',
    shapeD: 'Kleeblattfoermig',
    shapeF: 'Komplex',
    chemistry: 'Chemie',
    chemistryOn: 'Chemie: An',
    chemistryOff: 'Chemie: Aus',
    chemCompounds: 'Verbindungen',
    chemReactions: 'Reaktionen',
    chemNoResults: 'Keine Chemie-Treffer.',
    chemHint: 'Formel eingeben, z.B. H2O oder NaCl.',
    chemComponents: 'Bestandteile',
    chemTopMatch: 'Top-Treffer',
    chemTry: 'Formel links eingeben.'
  },
  fr: {
    eyebrow: 'Atlas interactif de chimie',
    title: 'Tableau périodique des éléments',
    lede: 'Cliquez sur un élément pour voir ses détails. Filtrez, recherchez et explorez avec des interactions fluides.',
    statElements: 'Éléments',
    statCategories: 'Catégories',
    statMode: 'Mode',
    modeFocus: 'Focus',
    themeFocus: 'Focus',
    themeLight: 'Clair',
    themeBlack: 'Noir',
    themeSunset: 'Coucher de soleil',
    themeOcean: 'Océan',
    themeForest: 'Forêt',
    language: 'Langue',
    modeButton: 'Mode',
    search: 'Recherche',
    searchPlaceholder: 'Hydrogène, H, 1...',
    gridCompact: 'Grille compacte',
    gridSpacious: 'Grille aérée',
    legendShow: 'Afficher la légende',
    legendHide: 'Masquer la légende',
    close: 'Fermer',
    selectPrompt: 'Sélectionnez un élément pour commencer.',
    selectedSuffix: 'sélectionné.',
    lanthanides: 'Lanthanoïdes',
    actinides: 'Actinides',
    atomicShort: 'N° atomique',
    valueUnknown: '—',
    detailsNote: 'Certaines propriétés sont inconnues pour des éléments à très courte durée de vie ou récemment découverts.',
    fieldAtomicNumber: 'Numéro atomique',
    fieldSymbol: 'Symbole',
    fieldName: 'Nom',
    fieldCategory: 'Catégorie',
    fieldGroup: 'Groupe',
    fieldPeriod: 'Période',
    fieldAtomicMass: 'Masse atomique',
    fieldElectronConfig: 'Configuration électronique',
    fieldOxidationStates: "États d'oxydation",
    fieldElectronegativity: 'Électronégativité',
    fieldPhase: 'Phase (STP)',
    fieldDensity: 'Densité',
    fieldMeltingPoint: 'Point de fusion',
    fieldBoilingPoint: "Point d'ébullition",
    fieldIsotopes: 'Isotopes connus',
    fieldStableIsotopes: 'Isotopes stables',
    loaderTitle: 'Initialisation de la réaction',
    loaderStep1: 'Mélange des gaz nobles...',
    loaderStep2: 'Équilibrage des électrons...',
    loaderStep3: 'Alignement des périodes...',
    loaderStep4: 'Réaction terminée.',
    crafted: 'Créé avec curiosité par',
    compare: 'Comparer',
    compareTitle: 'Comparer les éléments',
    compareAdd: 'Ajouter à la comparaison',
    compareClear: 'Effacer',
    compareClose: 'Fermer',
    comparePickerTitle: 'Ajouter un élément',
    comparePickerPlaceholder: 'Rechercher des éléments...',
    experiment: 'Expérience',
    experimentTitle: 'Expérience en direct',
    experimentClear: 'Effacer',
    experimentClose: 'Fermer',
    experimentAdd: 'Ajouter un élément',
    experimentStart: 'Démarrer la réaction',
    experimentHint: 'Choisissez deux éléments pour simuler une réaction.',
    experimentSlotA: "Déposer l'élément A",
    experimentSlotB: "Déposer l'élément B",
    reactionNo: 'Aucune réaction significative observée.',
    reactionIonic: 'Réaction ionique probable : transfert d\'électrons.',
    reactionCovalent: 'Liaison covalente probable : partage d\'électrons.',
    reactionMetallic: "Liaison métallique : formation d'alliage possible.",
    reactionInert: 'Comportement inerte : les gaz nobles réagissent rarement.',
    radiation: 'Radiation',
    radiationOn: 'Radiation : Activée',
    radiationOff: 'Radiation : Désactivée',
    hundExceptions: 'Exceptions de Hund',
    hundOn: 'Exceptions de Hund : Activées',
    hundOff: 'Exceptions de Hund : Désactivées',
    phaseReady: 'Prêt',
    phaseMix: 'Mélange',
    phaseActivate: 'Activation',
    phaseReact: 'Réaction',
    phaseSettle: 'Stabilisation',
    phaseComplete: 'Terminé',
    tempLabel: 'Temp',
    energyLabel: 'Énergie',
    phaseSolid: 'Solide',
    phaseLiquid: 'Liquide',
    phaseGas: 'Gaz',
    phaseUnknown: 'Inconnue',
    timeline: 'Chronologie',
    timelineTitle: 'Chronologie des découvertes',
    timelineNote: 'Les éléments découverts jusqu\'à cette année sont mis en évidence.',
    timelineClose: 'Fermer la chronologie',
    timelineReset: "Réinitialiser à aujourd'hui",
    soundOn: 'Son : Activé',
    soundOff: 'Son : Désactivé',
    settings: 'Paramètres',
    settingsTitle: 'Paramètres',
    settingsClose: 'Fermer',
    settingsAnimations: 'Désactiver les animations',
    settingsEffects: 'Désactiver les effets spéciaux',
    settingsPulses: 'Désactiver les pulsations',
    settingsMenus: 'Désactiver les animations de menu',
    settingsSweep: 'Désactiver le contour animé',
    settingsGlass: 'Verre',
    hint: 'Essayez : batterie, inerte, gaz noble, catalyseur',
    calcTitle: 'Calculateur de masse molaire',
    calcPlaceholder: 'ex. Ca2SO4',
    calcButton: 'Calculer',
    calcDefault: 'Entrez une formule pour obtenir la masse molaire.',
    calcErrorEmpty: "Entrez d'abord une formule.",
    calcErrorInvalid: 'Élément inconnu ou formule invalide.',
    reactTitle: 'Calculateur de réaction',
    reactPlaceholder: 'ex. NaCl + H2O',
    reactButton: 'Prédire',
    reactDefault: 'Entrez des réactifs pour prédire les produits.',
    reactErrorEmpty: "Entrez d'abord des réactifs.",
    reactErrorInvalid: 'Formule ou réactif invalide.',
    reactNo: 'Aucune réaction claire prédite (probablement dissolution ou aucune réaction).',
    reactDissolve: "Probablement soluble dans l'eau : ions en solution.",
    reactWaterMetal: 'Métal + eau : hydroxyde métallique + hydrogène.',
    reactIonic: 'Composé ionique probable : métal + non‑métal.',
    reactCovalent: 'Composé covalent probable : non‑métal + non‑métal.',
    reactInert: 'Comportement inerte : les gaz nobles réagissent rarement.',
    reactProducts: 'Produits',
    reactNoReaction: 'Aucune réaction',
    reactAmphoteric: 'Aucune réaction',
    reactProductsUnknown: 'Produits incertains avec les règles actuelles.',
    appearance: 'Apparence',
    summary: 'Résumé',
    uses: 'Usages',
    summaryTemplate: '{name} est un élément {category} de numéro atomique {number}. Il est en période {period}, groupe {group}. À STP, il est {phase}.',
    summaryTemplateNoGroup: '{name} est un élément {category} de numéro atomique {number}. Il est en période {period}. À STP, il est {phase}.',
    usesTemplate: 'Étudié couramment en chimie et en science des matériaux ; les usages spécifiques varient selon les composés et les applications.',
    discoveredBy: 'Découvert par',
    namedBy: 'Nommé par',
    discoveryYear: 'Année de découverte',
    source: 'Source',
    geometry: 'Géométrie',
    orbitals: 'Orbitales',
    quantumNumbers: 'Nombres quantiques',
    lastOrbital: 'Dernière orbitale',
    shapeS: 'Sphérique',
    shapeP: 'Haltère',
    shapeD: 'Trèfle',
    shapeF: 'Complexe',
    chemistry: 'Chimie',
    chemistryOn: 'Chimie : Activée',
    chemistryOff: 'Chimie : Désactivée',
    chemCompounds: 'Composés',
    chemReactions: 'Réactions',
    chemNoResults: "Aucune correspondance chimique pour l'instant.",
    chemHint: 'Tapez une formule comme H2O ou NaCl.',
    chemComponents: 'Composants',
    chemTopMatch: 'Meilleure correspondance',
    chemTry: 'Essayez de saisir une formule valide.'
  },  ru: {
    eyebrow: 'Интерактивный атлас химии',
    title: 'Периодическая таблица',
    lede: 'Нажмите на любой элемент, чтобы увидеть детали. Фильтруйте, ищите и исследуйте с плавными взаимодействиями.',
    statElements: 'Элементы',
    statCategories: 'Категории',
    statMode: 'Режим',
    modeFocus: 'Фокус',
    themeFocus: 'Фокус',
    themeLight: 'Светлый',
    themeBlack: 'Чёрный',
    themeSunset: 'Закат',
    themeOcean: 'Океан',
    themeForest: 'Лес',
    language: 'Язык',
    modeButton: 'Режим',
    search: 'Поиск',
    searchPlaceholder: 'Водород, H, 1...',
    gridCompact: 'Компактная сетка',
    gridSpacious: 'Просторная сетка',
    legendShow: 'Показать легенду',
    legendHide: 'Скрыть легенду',
    close: 'Закрыть',
    selectPrompt: 'Выберите элемент, чтобы начать.',
    selectedSuffix: 'выбран.',
    lanthanides: 'Лантаноиды',
    actinides: 'Актиноиды',
    atomicShort: 'Атомный №',
    valueUnknown: '—',
    detailsNote: 'Некоторые свойства неизвестны для короткоживущих или недавно открытых элементов.',
    fieldAtomicNumber: 'Атомный номер',
    fieldSymbol: 'Символ',
    fieldName: 'Название',
    fieldCategory: 'Категория',
    fieldGroup: 'Группа',
    fieldPeriod: 'Период',
    fieldAtomicMass: 'Атомная масса',
    fieldElectronConfig: 'Электронная конфигурация',
    fieldOxidationStates: 'Степени окисления',
    fieldElectronegativity: 'Электроотрицательность',
    fieldPhase: 'Фаза (STP)',
    fieldDensity: 'Плотность',
    fieldMeltingPoint: 'Температура плавления',
    fieldBoilingPoint: 'Температура кипения',
    fieldIsotopes: 'Известные изотопы',
    fieldStableIsotopes: 'Стабильные изотопы',
    loaderTitle: 'Запуск реакции',
    loaderStep1: 'Смешиваем инертные газы...',
    loaderStep2: 'Балансируем электроны...',
    loaderStep3: 'Выравниваем периоды...',
    loaderStep4: 'Реакция завершена.',
    crafted: 'Создано с любопытством —',
    compare: 'Сравнить',
    compareTitle: 'Сравнить элементы',
    compareAdd: 'Добавить к сравнению',
    compareClear: 'Очистить',
    compareClose: 'Закрыть',
    comparePickerTitle: 'Добавить элемент',
    comparePickerPlaceholder: 'Искать элементы...',
    experiment: 'Эксперимент',
    experimentTitle: 'Живой эксперимент',
    experimentClear: 'Очистить',
    experimentClose: 'Закрыть',
    experimentAdd: 'Добавить элемент',
    experimentStart: 'Запустить реакцию',
    experimentHint: 'Выберите два элемента, чтобы смоделировать реакцию.',
    experimentSlotA: 'Поместите элемент A',
    experimentSlotB: 'Поместите элемент B',
    reactionNo: 'Значимой реакции не наблюдается.',
    reactionIonic: 'Вероятна ионная реакция: перенос электронов.',
    reactionCovalent: 'Вероятна ковалентная связь: совместное использование электронов.',
    reactionMetallic: 'Металлическая связь: возможно образование сплава.',
    reactionInert: 'Инертное поведение: благородные газы редко реагируют.',
    radiation: 'Радиация',
    radiationOn: 'Радиация: Вкл',
    radiationOff: 'Радиация: Выкл',
    hundExceptions: 'Исключения Хунда',
    hundOn: 'Исключения Хунда: Вкл',
    hundOff: 'Исключения Хунда: Выкл',
    phaseReady: 'Готово',
    phaseMix: 'Смешивание',
    phaseActivate: 'Активация',
    phaseReact: 'Реакция',
    phaseSettle: 'Стабилизация',
    phaseComplete: 'Завершено',
    tempLabel: 'Темп',
    energyLabel: 'Энергия',
    phaseSolid: 'Твёрдое',
    phaseLiquid: 'Жидкое',
    phaseGas: 'Газ',
    phaseUnknown: 'Неизвестно',
    timeline: 'Хронология',
    timelineTitle: 'Хронология открытий',
    timelineNote: 'Элементы, открытые к этому году, выделены.',
    timelineClose: 'Закрыть хронологию',
    timelineReset: 'Сбросить на сегодня',
    soundOn: 'Звук: Вкл',
    soundOff: 'Звук: Выкл',
    settings: 'Настройки',
    settingsTitle: 'Настройки',
    settingsClose: 'Закрыть',
    settingsAnimations: 'Отключить анимации',
    settingsEffects: 'Отключить спецэффекты',
    settingsPulses: 'Отключить пульсации',
    settingsMenus: 'Отключить анимацию меню',
    settingsSweep: 'Отключить контурный пробег',
    settingsGlass: 'Стекло',
    hint: 'Попробуйте: батарея, инертный, благородный газ, катализатор',
    calcTitle: 'Калькулятор молярной массы',
    calcPlaceholder: 'например Ca2SO4',
    calcButton: 'Рассчитать',
    calcDefault: 'Введите формулу для молярной массы.',
    calcErrorEmpty: 'Сначала введите формулу.',
    calcErrorInvalid: 'Неизвестный элемент или неверная формула.',
    reactTitle: 'Калькулятор реакции',
    reactPlaceholder: 'например NaCl + H2O',
    reactButton: 'Предсказать',
    reactDefault: 'Введите реагенты для предсказания продуктов.',
    reactErrorEmpty: 'Сначала введите реагенты.',
    reactErrorInvalid: 'Неверная формула или реагент.',
    reactNo: 'Чёткая реакция не предсказана (вероятно растворение или отсутствует реакция).',
    reactDissolve: 'Вероятно растворяется в воде: ионы в растворе.',
    reactWaterMetal: 'Металл + вода: гидроксид металла + водород.',
    reactIonic: 'Вероятно ионное соединение: металл + неметалл.',
    reactCovalent: 'Вероятно ковалентное соединение: неметалл + неметалл.',
    reactInert: 'Инертное поведение: благородные газы редко реагируют.',
    reactProducts: 'Продукты',
    reactNoReaction: 'Нет реакции',
    reactAmphoteric: 'Нет реакции',
    reactProductsUnknown: 'Продукты неясны по текущим правилам.',
    appearance: 'Внешний вид',
    summary: 'Сводка',
    uses: 'Применение',
    summaryTemplate: '{name} — элемент категории {category} с атомным номером {number}. Он находится в периоде {period}, группе {group}. При STP это {phase}.',
    summaryTemplateNoGroup: '{name} — элемент категории {category} с атомным номером {number}. Он находится в периоде {period}. При STP это {phase}.',
    usesTemplate: 'Широко изучается в химии и материаловедении; конкретные применения зависят от соединений и задач.',
    discoveredBy: 'Открыл',
    namedBy: 'Назван',
    discoveryYear: 'Год открытия',
    source: 'Источник',
    geometry: 'Геометрия',
    orbitals: 'Орбитали',
    quantumNumbers: 'Квантовые числа',
    lastOrbital: 'Последняя орбиталь',
    shapeS: 'Сферическая',
    shapeP: 'Гантель',
    shapeD: 'Клевер',
    shapeF: 'Сложная',
    chemistry: 'Химия',
    chemistryOn: 'Химия: Вкл',
    chemistryOff: 'Химия: Выкл',
    chemCompounds: 'Соединения',
    chemReactions: 'Реакции',
    chemNoResults: 'Пока нет химических совпадений.',
    chemHint: 'Введите формулу вроде H2O или NaCl.',
    chemComponents: 'Компоненты',
    chemTopMatch: 'Лучшее совпадение',
    chemTry: 'Попробуйте ввести корректную формулу.'
  }};

const categories = {
  alkali: { label: { en: 'Alkali metal', sq: 'Metal alkalin', de: 'Alkalimetall', fr: 'Metal alcalin', ru: 'Щелочной металл' }, color: '#ff8c61' },
  alkaline: { label: { en: 'Alkaline earth', sq: 'Metal tokësor alkalin', de: 'Erdalkalimetall', fr: 'Metal alcalino-terreux', ru: 'Щёлочноземельный металл' }, color: '#ffd56a' },
  transition: { label: { en: 'Transition metal', sq: 'Metal kalimtar', de: 'Uebergangsmetall', fr: 'Metal de transition', ru: 'Переходный металл' }, color: '#6dd6ff' },
  post: { label: { en: 'Post-transition', sq: 'Metal post-kalimtar', de: 'Post-Transition', fr: 'Post-transition', ru: 'Постпереходный металл' }, color: '#5ef2a5' },
  metalloid: { label: { en: 'Metalloid', sq: 'Metaloid', de: 'Halbmetall', fr: 'Metalloide', ru: 'Металлоид' }, color: '#7df0ff' },
  nonmetal: { label: { en: 'Reactive nonmetal', sq: 'Jometal reaktiv', de: 'Reaktives Nichtmetall', fr: 'Non-metal reactif', ru: 'Реактивный неметалл' }, color: '#9f86ff' },
  halogen: { label: { en: 'Halogen', sq: 'Halogjen', de: 'Halogen', fr: 'Halogene', ru: 'Галоген' }, color: '#ff76c6' },
  noble: { label: { en: 'Noble gas', sq: 'Gaz fisnik', de: 'Edelgas', fr: 'Gaz noble', ru: 'Благородный газ' }, color: '#a6ffcb' },
  lanthanide: { label: { en: 'Lanthanide', sq: 'Lantanid', de: 'Lanthanid', fr: 'Lanthanide', ru: 'Лантаноид' }, color: '#ffb86b' },
  actinide: { label: { en: 'Actinide', sq: 'Aktinid', de: 'Actinid', fr: 'Actinide', ru: 'Актиноид' }, color: '#ff8bd1' }
};

const elements = Array.isArray(window.ELEMENTS_DATA) ? window.ELEMENTS_DATA : [];
const elementByNumber = new Map(elements.map((el) => [el.number, el]));
const elementBySymbol = new Map(elements.map((el) => [el.symbol, el]));
const elementSearch = new Map(
  elements.map((el) => [
    el.number,
    {
      en: (el.name || '').toLowerCase(),
      sq: (el.name_sq || '').toLowerCase(),
      de: (el.name_de || '').toLowerCase(),
      fr: (el.name_fr || '').toLowerCase(),
      ru: (el.name_ru || '').toLowerCase(),
      symbol: (el.symbol || '').toLowerCase()
    }
  ])
);

const table = document.getElementById('table');
const details = document.getElementById('details');
const detailsGrid = document.getElementById('details-grid');
const detailsNote = document.getElementById('details-note');
const selectionPill = document.getElementById('selection-pill');
const detailsQuantum = document.getElementById('details-quantum');
const searchInput = document.getElementById('search');
const searchHint = document.getElementById('search-hint');
const legend = document.getElementById('legend');
const tableWrap = document.querySelector('.table-wrap');
const mobileTable = document.getElementById('mobile-table');
const toggleGrid = document.getElementById('toggle-grid');
const toggleLegend = document.getElementById('toggle-legend');
const toggleLang = document.getElementById('toggle-lang');
const toggleCompare = document.getElementById('toggle-compare');
const toggleTimeline = document.getElementById('toggle-timeline');
const toggleSound = document.getElementById('toggle-sound');
const toggleExperiment = document.getElementById('toggle-experiment');
const toggleRadiation = document.getElementById('toggle-radiation');
const toggleHund = document.getElementById('toggle-hund');
const toggleSettings = document.getElementById('toggle-settings');
const togglesBar = document.querySelector('.controls .toggles');
const langMenu = document.getElementById('lang-menu');
const langContainer = document.getElementById('lang-container');
const langOptions = document.querySelectorAll('.lang-option');
const langLabels = { en: 'EN', sq: 'SHQ', de: 'DE', fr: 'FR', ru: 'RU' };
const toggleMode = document.getElementById('toggle-mode');
const modeMenu = document.getElementById('mode-menu');
const modeContainer = document.getElementById('mode-container');
const modeOptions = document.querySelectorAll('.mode-option');
const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loader-fill');
const loaderNote = document.getElementById('loader-note');
const loaderTitle = document.getElementById('loader-title');
const footerCredit = document.getElementById('footer-credit');
const appShell = document.querySelector('.app-shell');
const detailsExtra = document.getElementById('details-extra');
const shells = document.getElementById('shells');
const elementImage = document.getElementById('element-image');
const controls = document.querySelector('.controls');
const chemResults = document.getElementById('chem-results');
const toggleChem = document.getElementById('toggle-chem');
const searchBlock = document.querySelector('.search-block');
const comparePanel = document.getElementById('compare');
const compareAdd = document.getElementById('compare-add');
const compareClear = document.getElementById('compare-clear');
const compareClose = document.getElementById('compare-close');
const compareAddBtn = document.getElementById('compare-add-btn');
const compareSlots = document.getElementById('compare-slots');
const compareGrid = document.getElementById('compare-grid');
const picker = document.getElementById('picker');
const pickerGrid = document.getElementById('picker-grid');
const pickerClose = document.getElementById('picker-close');
const pickerSearch = document.getElementById('picker-search');
const timelinePanel = document.getElementById('timeline');
const timelineRange = document.getElementById('timeline-range');
const timelineYear = document.getElementById('timeline-year');
const timelineNote = document.getElementById('timeline-note');
const timelineClose = document.getElementById('timeline-close');
const timelineReset = document.getElementById('timeline-reset');
const formulaInput = document.getElementById('formula-input');
const formulaCalc = document.getElementById('formula-calc');
const formulaResult = document.getElementById('formula-result');
const calculatorTitle = document.querySelector('.calculator-title');
const reactionInput = document.getElementById('reaction-input');
const reactionCalc = document.getElementById('reaction-calc');
const reactionResult = document.getElementById('reaction-result');
const reactionTitle = document.getElementById('reaction-title');
const reactionCard = document.getElementById('reaction-card');
const mobileMenuItems = [
  controls,
  document.getElementById('calculator'),
  reactionCard?.closest('.calculator'),
  legend
].filter(Boolean);
const mobileMenuAnchors = mobileMenuItems.map((item) => {
  const anchor = document.createComment('mobile-menu-anchor');
  item.parentNode.insertBefore(anchor, item);
  return { item, anchor };
});
const mobileMenu = document.createElement('section');
mobileMenu.className = 'mobile-menu';
mobileMenu.setAttribute('aria-label', 'Mobile controls');
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.type = 'button';
mobileMenuToggle.setAttribute('aria-label', 'Open menu');
mobileMenuToggle.innerHTML = `
  <span class="mobile-menu-icon" aria-hidden="true">
    <span></span><span></span><span></span>
  </span>
  <span class="mobile-menu-label">Menu</span>
`;
document.body.append(mobileMenu, mobileMenuToggle);
const experimentPanel = document.getElementById('experiment');
const experimentA = document.getElementById('experiment-a');
const experimentB = document.getElementById('experiment-b');
const experimentResult = document.getElementById('experiment-result');
const experimentClear = document.getElementById('experiment-clear');
const experimentClose = document.getElementById('experiment-close');
const experimentAdd = document.getElementById('experiment-add');
const experimentStart = document.getElementById('experiment-start');
const experimentStage = document.getElementById('experiment-stage');
const experimentPhase = document.getElementById('experiment-phase');
const experimentTemp = document.getElementById('experiment-temp');
const experimentEnergy = document.getElementById('experiment-energy');
const experimentProgressFill = document.getElementById('experiment-progress-fill');
const energyGraph = document.getElementById('energy-graph');
const experimentCard = document.querySelector('.experiment-card');
const experimentCanvas = document.getElementById('experiment-canvas');
const settingsPanel = document.getElementById('settings-panel');
const settingsClose = document.getElementById('settings-close');
const settingAnimations = document.getElementById('setting-animations');
const settingEffects = document.getElementById('setting-effects');
const settingPulses = document.getElementById('setting-pulses');
const settingMenuAnimations = document.getElementById('setting-menu-animations');
const settingSweep = document.getElementById('setting-sweep');
const settingBlackTint = document.getElementById('setting-black-tint');
const settingBlackTintStrength = document.getElementById('setting-black-tint-strength');
const settingBlackTintLabel = document.getElementById('setting-black-tint-label');
const blackTintStrengthWrap = document.getElementById('black-tint-strength-wrap');
const settingGlass = document.getElementById('setting-glass');
const settingGlassLabel = document.getElementById('setting-glass-label');

function syncMobileMenu() {
  const useMobileMenu = window.matchMedia('(max-width: 820px)').matches;
  if (useMobileMenu) {
    mobileMenuItems.forEach((item) => mobileMenu.appendChild(item));
  } else {
    mobileMenuAnchors.forEach(({ item, anchor }) => {
      anchor.parentNode.insertBefore(item, anchor.nextSibling);
    });
    document.body.classList.remove('mobile-menu-open');
  }
  document.body.classList.toggle('has-mobile-menu', useMobileMenu);
}

let mobileMenuToggleSyncFrame = null;
let mobileMenuToggleIdleTimer = null;

function syncMobileMenuToggleState() {
  const anyPanelOpen = [details, comparePanel, timelinePanel, experimentPanel, settingsPanel, picker].some((panel) => panel?.classList.contains('open'));
  const menuOpen = document.body.classList.contains('mobile-menu-open');
  const scrolled = mobileMenuToggle.classList.contains('is-scrolled');
  mobileMenuToggle.classList.toggle('is-hidden', anyPanelOpen || menuOpen);
  mobileMenuToggle.classList.toggle('is-scrolled', scrolled && !anyPanelOpen && !menuOpen);
}

function queueMobileMenuToggleSync() {
  if (mobileMenuToggleSyncFrame !== null) return;
  mobileMenuToggleSyncFrame = requestAnimationFrame(() => {
    mobileMenuToggleSyncFrame = null;
    syncMobileMenuToggleState();
  });
}

function setMobileMenuToggleScrollActive(active) {
  if (mobileMenuToggleIdleTimer) {
    clearTimeout(mobileMenuToggleIdleTimer);
    mobileMenuToggleIdleTimer = null;
  }
  if (active) {
    mobileMenuToggle.classList.add('is-scrolled');
    syncMobileMenuToggleState();
    return;
  }
  mobileMenuToggleIdleTimer = window.setTimeout(() => {
    mobileMenuToggle.classList.remove('is-scrolled');
    syncMobileMenuToggleState();
  }, 220);
}

mobileMenuToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  document.body.classList.toggle('mobile-menu-open');
  syncMobileMenuToggleState();
});

mobileMenu.addEventListener('click', (event) => {
  const interactive = event.target.closest('button, a, input, select, textarea, label');
  if (!interactive) return;
  const insideSubmenuTrigger = interactive.closest('.lang, .mode');
  if (insideSubmenuTrigger) return;
  window.setTimeout(() => {
    document.body.classList.remove('mobile-menu-open');
    syncMobileMenuToggleState();
  }, 65);
});

const activeCategories = new Set();
let selectedNumber = null;
let currentLang = localStorage.getItem('lang') || 'sq';
let currentTheme = localStorage.getItem('theme') || 'focus';
let hydrogenClicks = 0;
let sweepIntervalId = null;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let compareList = [];
let soundEnabled = localStorage.getItem('sound') === '1';
let audioContext = null;
let lastActiveElement = null;
let experimentSlots = [];
let radiationOn = false;
let hundOn = localStorage.getItem('hundOn') === '1';
let mobileFilter = null;
let pickerMode = 'compare';
let experimentRunning = false;
let experimentTimer = null;
let panelTimer = null;
let simFrameId = null;
let simParticles = [];
let chemistryMode = false;
let chemistryLibrary = null;
let animationsOff = localStorage.getItem('animationsOff') === '1';
let effectsOff = localStorage.getItem('effectsOff') === '1';
let pulsesOff = localStorage.getItem('pulsesOff') === '1';
let blackTintEnabled = localStorage.getItem('blackTint') === '1';
let blackTintLevel = Number(localStorage.getItem('blackTintLevel') || 100);
let menuAnimationsOff = localStorage.getItem('menuAnimationsOff') === '1';
let sweepOff = localStorage.getItem('sweepOff') === '1';
let glassLevel = Number(localStorage.getItem('glassLevel') || 100);
const hundExceptions = new Set([24, 29, 41, 42, 44, 45, 46, 47, 78, 79]);

function t(key) {
  return i18n[currentLang]?.[key] || i18n.en[key] || key;
}

function elementName(element) {
  if (currentLang === 'sq') return element.name_sq || element.name;
  if (currentLang === 'de') return element.name_de || element.name;
  if (currentLang === 'fr') return element.name_fr || element.name;
  if (currentLang === 'ru') return element.name_ru || element.name;
  return element.name;
}

function categoryColor(category) {
  return categories[category]?.color || '#7f8ea3';
}

function categoryLabel(category) {
  return categories[category]?.label?.[currentLang] || categories[category]?.label?.en || 'Unknown';
}

function formatValue(value) {
  if (value === 0) return '0';
  if (value === null || value === undefined || value === '') return t('valueUnknown');
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object' && 'value' in value && 'unit' in value) {
    return `${value.value} ${value.unit}`.trim();
  }
  return String(value);
}

function localizePhase(phase) {
  if (!phase) return t('phaseUnknown');
  const p = String(phase).toLowerCase();
  if (p === 'solid') return t('phaseSolid');
  if (p === 'liquid') return t('phaseLiquid');
  if (p === 'gas') return t('phaseGas');
  return phase;
}

function templateText(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
}

function getLocalizedSummary(element) {
  const extra = element.details || {};
  if (currentLang === 'en' && extra.summary) return extra.summary;
  const phase = localizePhase(extra.phase);
  const category = categoryLabel(element.category);
  const baseVars = {
    name: elementName(element),
    category,
    number: element.number,
    period: element.period,
    group: element.group,
    phase
  };
  const template = element.group ? t('summaryTemplate') : t('summaryTemplateNoGroup');
  return templateText(template, baseVars);
}

function getLocalizedUses(element) {
  const extra = element.details || {};
  if (currentLang === 'en' && extra.uses) return extra.uses;
  return t('usesTemplate');
}

const orbitalShape = {
  s: () => t('shapeS'),
  p: () => t('shapeP'),
  d: () => t('shapeD'),
  f: () => t('shapeF')
};

const orbitalL = {
  s: 0,
  p: 1,
  d: 2,
  f: 3
};

function parseElectronConfig(config) {
  if (!config) return null;
  const cleaned = config.replace(/\[[^\]]+\]/g, '').trim();
  if (!cleaned) return null;
  const tokens = cleaned.split(/\s+/);
  const subshells = tokens
    .map((token) => {
      const match = token.match(/^(\d+)([spdf])(\d+)$/i);
      if (!match) return null;
      return {
        n: Number(match[1]),
        ltr: match[2].toLowerCase(),
        e: Number(match[3])
      };
    })
    .filter(Boolean);
  if (!subshells.length) return null;
  const last = subshells[subshells.length - 1];
  const orbitals = Array.from(new Set(subshells.map((s) => s.ltr))).join(' ');
  return {
    last,
    orbitals
  };
}

function quantumInfo(element) {
  const config = element.details?.electronConfig;
  const parsed = parseElectronConfig(config);
  if (!parsed) return null;
  const last = parsed.last;
  const l = orbitalL[last.ltr];
  const mlRange = l === 0 ? '0' : `-${l}..${l}`;
  return {
    lastOrbital: `${last.n}${last.ltr}`,
    orbitals: parsed.orbitals || t('valueUnknown'),
    shape: orbitalShape[last.ltr]?.() || t('valueUnknown'),
    quantum: `n=${last.n}, l=${l}, m_l=${mlRange}, m_s=+/-1/2`
  };
}

function elementLabelForLang(element, lang) {
  if (lang === 'sq') return element.name_sq || element.name;
  if (lang === 'de') return element.name_de || element.name;
  if (lang === 'fr') return element.name_fr || element.name;
  if (lang === 'ru') return element.name_ru || element.name;
  return element.name;
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : Math.abs(a);
}

function buildIonicFormula(cationSymbol, cCharge, anionSymbol, aCharge) {
  const c = Math.abs(cCharge);
  const a = Math.abs(aCharge);
  const g = gcd(c, a);
  const cCount = a / g;
  const aCount = c / g;
  const cPart = `${cationSymbol}${cCount > 1 ? cCount : ''}`;
  const aPart = `${anionSymbol}${aCount > 1 ? aCount : ''}`;
  return { formula: `${cPart}${aPart}`, cCount, aCount };
}

function buildChemistryLibrary() {
  if (chemistryLibrary) return chemistryLibrary;
  const compounds = [];
  const reactions = [];
  const compoundSeen = new Set();
  const manualSymbols = new Set();
  const maxCompounds = 9000;
  const maxReactions = 9000;
  const diatomic = new Set(['H', 'N', 'O', 'F', 'Cl', 'Br', 'I']);
  const commonAliases = {
    H2O: { en: 'water', sq: 'uje', de: 'wasser', fr: 'eau', ru: 'вода' },
    NH3: { en: 'ammonia', sq: 'amoniak', de: 'ammoniak', fr: 'ammoniac', ru: 'аммиак' },
    CO2: { en: 'carbon dioxide', sq: 'dioksid karboni', de: 'kohlenstoffdioxid', fr: 'dioxyde de carbone', ru: 'диоксид углерода' },
    CH4: { en: 'methane', sq: 'metan', de: 'methan', fr: 'methane', ru: 'метан' },
    H2SO4: { en: 'sulfuric acid', sq: 'acid sulfurik', de: 'schwefelsaeure', fr: 'acide sulfurique', ru: 'серная кислота' },
    HCl: { en: 'hydrochloric acid', sq: 'acid klorhidrik', de: 'salzsaeure', fr: 'acide chlorhydrique', ru: 'соляная кислота' }
  };

  const manualCompounds = [
    { formula: 'H2O', components: ['H', 'O'] },
    { formula: 'H2O2', components: ['H', 'O'] },
    { formula: 'CO2', components: ['C', 'O'] },
    { formula: 'CO', components: ['C', 'O'] },
    { formula: 'NH3', components: ['N', 'H'] },
    { formula: 'CH4', components: ['C', 'H'] },
    { formula: 'H2S', components: ['H', 'S'] },
    { formula: 'SO2', components: ['S', 'O'] },
    { formula: 'SO3', components: ['S', 'O'] },
    { formula: 'HCl', components: ['H', 'Cl'] },
    { formula: 'HNO3', components: ['H', 'N', 'O'] },
    { formula: 'H2SO4', components: ['H', 'S', 'O'] },
    { formula: 'H3PO4', components: ['H', 'P', 'O'] },
    { formula: 'NaCl', components: ['Na', 'Cl'] },
    { formula: 'KCl', components: ['K', 'Cl'] },
    { formula: 'CaCO3', components: ['Ca', 'C', 'O'] },
    { formula: 'NaHCO3', components: ['Na', 'H', 'C', 'O'] },
    { formula: 'C6H12O6', components: ['C', 'H', 'O'] }
  ];

  const manualReactions = [
    { equation: '2H2 + O2 -> 2H2O', components: ['H', 'O'] },
    { equation: 'N2 + 3H2 -> 2NH3', components: ['N', 'H'] },
    { equation: 'CH4 + 2O2 -> CO2 + 2H2O', components: ['C', 'H', 'O'] },
    { equation: '2Na + Cl2 -> 2NaCl', components: ['Na', 'Cl'] },
    { equation: 'CaCO3 -> CaO + CO2', components: ['Ca', 'C', 'O'] },
    { equation: 'HCl + NaOH -> NaCl + H2O', components: ['H', 'Cl', 'Na', 'O'] }
  ];

  manualCompounds.forEach((entry) => {
    const componentNums = entry.components
      .map((sym) => elementBySymbol.get(sym)?.number)
      .filter(Boolean);
    if (!componentNums.length) return;
    if (compoundSeen.has(entry.formula)) return;
    compoundSeen.add(entry.formula);
    const item = {
      formula: entry.formula,
      components: componentNums,
      type: 'manual',
      search: {}
    };
    Object.keys(i18n).forEach((lang) => {
      const names = entry.components
        .map((sym) => {
          const el = elementBySymbol.get(sym);
          return (el ? elementLabelForLang(el, lang) : sym).toLowerCase();
        })
        .join(' ');
      const alias = commonAliases[entry.formula]?.[lang] || '';
      item.search[lang] = `${entry.formula.toLowerCase()} ${entry.components.join(' ').toLowerCase()} ${names} ${alias}`;
    });
    compounds.push(item);
    manualSymbols.add(entry.formula.toLowerCase());
  });

  manualReactions.forEach((entry) => {
    if (reactions.length >= maxReactions) return;
    const componentNums = entry.components
      .map((sym) => elementBySymbol.get(sym)?.number)
      .filter(Boolean);
    const item = {
      equation: entry.equation,
      components: componentNums,
      search: {}
    };
    Object.keys(i18n).forEach((lang) => {
      const names = entry.components
        .map((sym) => {
          const el = elementBySymbol.get(sym);
          return (el ? elementLabelForLang(el, lang) : sym).toLowerCase();
        })
        .join(' ');
      item.search[lang] = `${entry.equation.toLowerCase()} ${names}`;
    });
    reactions.push(item);
  });

  const cations = elements.filter((el) => {
    const states = el.details?.oxidationStates || [];
    return states.some((v) => v > 0) && el.category !== 'noble' && el.category !== 'halogen';
  });

  const anions = elements.filter((el) => {
    const states = el.details?.oxidationStates || [];
    return states.some((v) => v < 0) && (el.category === 'nonmetal' || el.category === 'halogen' || el.category === 'metalloid');
  });

  const chargeCache = new Map();
  const getCharges = (el, sign) => {
    const key = `${el.symbol}:${sign}`;
    if (chargeCache.has(key)) return chargeCache.get(key);
    const list = (el.details?.oxidationStates || [])
      .filter((v) => (sign > 0 ? v > 0 : v < 0))
      .map((v) => Math.abs(v));
    const unique = Array.from(new Set(list)).sort((a, b) => a - b).slice(0, 3);
    const charges = unique.map((v) => (sign > 0 ? v : -v));
    chargeCache.set(key, charges);
    return charges;
  };

  for (const cation of cations) {
    const cCharges = getCharges(cation, 1);
    if (!cCharges.length) continue;
    for (const anion of anions) {
      const aCharges = getCharges(anion, -1);
      if (!aCharges.length) continue;
      for (const cCharge of cCharges) {
        for (const aCharge of aCharges) {
          const { formula, cCount, aCount } = buildIonicFormula(cation.symbol, cCharge, anion.symbol, aCharge);
          if (compoundSeen.has(formula)) continue;
          compoundSeen.add(formula);
          const entry = {
            formula,
            components: [cation.number, anion.number],
            type: 'ionic',
            search: {}
          };
          Object.keys(i18n).forEach((lang) => {
            const cName = elementLabelForLang(cation, lang).toLowerCase();
            const aName = elementLabelForLang(anion, lang).toLowerCase();
            const alias = commonAliases[formula]?.[lang] || '';
            entry.search[lang] = `${formula.toLowerCase()} ${cation.symbol.toLowerCase()} ${anion.symbol.toLowerCase()} ${cName} ${aName} ${alias}`;
          });
          compounds.push(entry);

          if (reactions.length < maxReactions) {
            const isDiatomic = diatomic.has(anion.symbol);
            let reactM = cCount;
            let reactX = aCount;
            let productCoeff = 1;
            let reactAnion = anion.symbol;
            if (isDiatomic) {
              if (aCount % 2 === 1) {
                productCoeff = 2;
                reactM = 2 * cCount;
                reactX = aCount;
              } else {
                reactX = aCount / 2;
              }
              reactAnion = `${anion.symbol}2`;
            }
            const fmt = (n, f) => (n === 1 ? f : `${n}${f}`);
            const reaction = `${fmt(reactM, cation.symbol)} + ${fmt(reactX, reactAnion)} -> ${fmt(productCoeff, formula)}`;
            reactions.push({
              equation: reaction,
              components: [cation.number, anion.number],
              search: {}
            });
            Object.keys(i18n).forEach((lang) => {
              const cName = elementLabelForLang(cation, lang).toLowerCase();
              const aName = elementLabelForLang(anion, lang).toLowerCase();
              reactions[reactions.length - 1].search[lang] = `${reaction.toLowerCase()} ${formula.toLowerCase()} ${cName} ${aName}`;
            });
          }

          if (compounds.length >= maxCompounds) break;
        }
        if (compounds.length >= maxCompounds) break;
      }
      if (compounds.length >= maxCompounds) break;
    }
    if (compounds.length >= maxCompounds) break;
  }

  chemistryLibrary = { compounds, reactions, manualSymbols };
  return chemistryLibrary;
}

function setChemistryMode(on) {
  chemistryMode = on;
  localStorage.setItem('chemMode', chemistryMode ? '1' : '0');
  if (toggleChem) toggleChem.textContent = chemistryMode ? t('chemistryOn') : t('chemistryOff');
  if (controls) controls.classList.remove('hidden');
  if (!chemResults) return;
  if (chemistryMode) {
    chemResults.classList.add('show');
    updateChemistryFromMain();
  } else {
    chemResults.classList.remove('show');
    chemResults.innerHTML = '';
  }
}

function normalizeChemQuery(text) {
  return text.replace(/\s+/g, '').toLowerCase();
}

function chemMatches(entry, query, lang, manualSymbols) {
  const normalized = normalizeChemQuery(query);
  const searchText = entry.search[lang] || '';
  if (searchText.includes(query)) return true;
  if (entry.formula && manualSymbols?.has(entry.formula.toLowerCase()) && entry.formula.toLowerCase() === normalized) {
    return true;
  }
  if (entry.equation && normalizeChemQuery(entry.equation).includes(normalized)) return true;
  if (entry.formula && normalizeChemQuery(entry.formula).includes(normalized)) return true;
  return normalizeChemQuery(searchText).includes(normalized);
}

function updateChemistryFromMain() {
  if (!chemResults) return;
  if (!chemistryMode) return;
  const rawQuery = (searchInput?.value || '').trim();
  const query = rawQuery.toLowerCase();
  if (!query) {
    chemResults.innerHTML = `<div class="chem-item"><strong>${t('chemHint')}</strong></div>`;
    return;
  }

  const { compounds, reactions, manualSymbols } = buildChemistryLibrary();
  const lang = currentLang;
  const compoundMatches = compounds.filter((c) => chemMatches(c, query, lang, manualSymbols)).slice(0, 8);
  const reactionMatches = reactions.filter((r) => chemMatches(r, query, lang, manualSymbols)).slice(0, 8);

  if (!compoundMatches.length && !reactionMatches.length) {
    chemResults.innerHTML = `<div class="chem-item"><strong>${t('chemNoResults')}</strong></div>`;
    return;
  }

  const renderCompound = (c) => {
    const [cNum, aNum] = c.components;
    const cEl = elementByNumber.get(cNum);
    const aEl = elementByNumber.get(aNum);
    const comp = `${elementLabelForLang(cEl, currentLang)} + ${elementLabelForLang(aEl, currentLang)}`;
    return `<div class="chem-item"><strong>${c.formula}</strong><span>${t('chemComponents')}: ${comp}</span></div>`;
  };

  const renderReaction = (r) => `<div class="chem-item"><strong>${r.equation}</strong><span>${t('chemReactions')}</span></div>`;

  const compoundBlock = compoundMatches.length
    ? `<div class="chem-group"><div class="chem-title">${t('chemCompounds')}</div>${compoundMatches
        .map(renderCompound)
        .join('')}</div>`
    : '';

  const reactionBlock = reactionMatches.length
    ? `<div class="chem-group"><div class="chem-title">${t('chemReactions')}</div>${reactionMatches
        .map(renderReaction)
        .join('')}</div>`
    : '';

  chemResults.innerHTML = `${compoundBlock}${reactionBlock}`;
}

function buildLegend() {
  legend.innerHTML = '';
  Object.entries(categories).forEach(([key, info]) => {
    const button = document.createElement('button');
    button.dataset.category = key;
    button.innerHTML = `<span class="swatch" style="background:${info.color}"></span>${info.label[currentLang] || info.label.en}`;
    if (activeCategories.has(key)) {
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      if (activeCategories.has(key)) {
        activeCategories.delete(key);
        button.classList.remove('active');
      } else {
        activeCategories.add(key);
        button.classList.add('active');
      }
      filterElements();
    });
    legend.appendChild(button);
  });
}

function gridPosition(element) {
  if (element.category === 'lanthanide' && typeof element.seriesIndex === 'number') {
    return { row: 8, col: element.seriesIndex + 4 };
  }
  if (element.category === 'actinide' && typeof element.seriesIndex === 'number') {
    return { row: 9, col: element.seriesIndex + 4 };
  }
  return { row: element.period, col: element.group };
}

function renderTable() {
  table.innerHTML = '';
  const lanLabel = document.createElement('div');
  lanLabel.className = 'element label';
  lanLabel.style.gridColumn = '1 / span 3';
  lanLabel.style.gridRow = '8';
  lanLabel.textContent = t('lanthanides');

  const actLabel = document.createElement('div');
  actLabel.className = 'element label';
  actLabel.style.gridColumn = '1 / span 3';
  actLabel.style.gridRow = '9';
  actLabel.textContent = t('actinides');

  table.appendChild(lanLabel);
  table.appendChild(actLabel);

  elements.forEach((element) => {
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'element';
    tile.setAttribute('aria-pressed', 'false');
    const pos = gridPosition(element);
    tile.style.gridColumn = `${pos.col}`;
    tile.style.gridRow = `${pos.row}`;
    tile.dataset.number = element.number;
    tile.dataset.category = element.category;
    if (Number(element.details?.stableIsotopes || 0) === 0) {
      tile.classList.add('radioactive');
    }

    tile.innerHTML = `
      <span class="number">${element.number}</span>
      <span class="symbol">${element.symbol}</span>
      <span class="name">${elementName(element)}</span>
    `;

    tile.style.background = `linear-gradient(135deg, ${categoryColor(element.category)}33, rgba(17,20,26,0.9))`;

    tile.addEventListener('click', () => selectElement(element.number));
    table.appendChild(tile);
  });
  triggerTableWhiteFade();
  fitTableToViewport();
}

function renderMobileTable() {
  if (!mobileTable) return;
  mobileTable.innerHTML = '';
  const periods = new Map();
  elements.forEach((element) => {
    if (!periods.has(element.period)) periods.set(element.period, []);
    periods.get(element.period).push(element);
  });

  Array.from(periods.keys()).sort((a, b) => a - b).forEach((period) => {
    const row = document.createElement('section');
    row.className = 'period-row';
    row.dataset.period = period;

    const title = document.createElement('div');
    title.className = 'period-title';
    title.textContent = `${t('fieldPeriod')} ${period}`;

    const scroller = document.createElement('div');
    scroller.className = 'period-scroll';

    periods.get(period).forEach((element) => {
      const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'element';
    tile.setAttribute('aria-pressed', 'false');
      tile.dataset.number = element.number;
      tile.dataset.category = element.category;
      if (Number(element.details?.stableIsotopes || 0) === 0) {
        tile.classList.add('radioactive');
      }

      tile.innerHTML = `
        <span class="number">${element.number}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="name">${elementName(element)}</span>
      `;

      tile.style.background = `linear-gradient(135deg, ${categoryColor(element.category)}33, rgba(17,20,26,0.9))`;
      tile.addEventListener('click', () => selectElement(element.number));
      scroller.appendChild(tile);
    });

    row.appendChild(title);
    row.appendChild(scroller);
    mobileTable.appendChild(row);
  });
  updateHundHighlights();
}

function updateHundHighlights() {
  document.querySelectorAll('.element[data-number]').forEach((tile) => {
    const number = Number(tile.dataset.number);
    const isException = hundExceptions.has(number);
    tile.classList.toggle('hund-exception', hundOn && isException);
  });
  if (toggleHund) {
    toggleHund.classList.toggle('active', hundOn);
    toggleHund.textContent = hundOn ? t('hundOn') : t('hundOff');
  }
}

function isMobileView() {
  return window.matchMedia('(max-width: 560px)').matches;
}

function updateMobileFilter(mode) {
  if (!isMobileView()) {
    mobileFilter = null;
    return;
  }
  mobileFilter = mode;
  filterElements();
}

function applyVisualSettings() {
  document.body.classList.toggle('animations-off', animationsOff);
  document.body.classList.toggle('effects-off', effectsOff);
  document.body.classList.toggle('pulses-off', pulsesOff);
  document.body.classList.toggle('menu-animations-off', menuAnimationsOff);
  document.body.classList.toggle('sweep-off', sweepOff);
  document.body.classList.toggle('black-tint', blackTintEnabled);
  if (blackTintStrengthWrap) blackTintStrengthWrap.classList.toggle('open', blackTintEnabled);
  if (settingBlackTint) settingBlackTint.checked = blackTintEnabled;
  if (settingAnimations) settingAnimations.checked = animationsOff;
  if (settingEffects) settingEffects.checked = effectsOff;
  if (settingPulses) settingPulses.checked = pulsesOff;
  if (settingMenuAnimations) settingMenuAnimations.checked = menuAnimationsOff;
  if (settingSweep) settingSweep.checked = sweepOff;
  if (effectsOff) {
    document.body.classList.remove('rgb-mode');
    if (sweepIntervalId) {
      clearInterval(sweepIntervalId);
      sweepIntervalId = null;
    }
    if (table) {
      table.classList.remove('white-fade');
    }
  } else {
    scheduleTableSweep();
  }
}

function setupControlsAutoHide() {
  if (!controls) return;
  const targets = [tableWrap, mobileTable].filter(Boolean);
  if (!targets.length) return;
  const visibleTargets = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleTargets.add(entry.target);
        } else {
          visibleTargets.delete(entry.target);
        }
      });
      const shouldHide =
        visibleTargets.size > 0 &&
        !details.classList.contains('open') &&
        document.activeElement !== searchInput &&
        !chemistryMode;
      controls.classList.toggle('hidden', shouldHide);
    },
    { threshold: 0.15, rootMargin: '-20% 0px -40% 0px' }
  );

  targets.forEach((target) => observer.observe(target));
}

window.addEventListener('resize', () => {
  if (!isMobileView()) {
    mobileFilter = null;
    filterElements();
  }
});

function selectElement(number) {
  const element = elementByNumber.get(number);
  if (!element) return;

  if (selectedNumber === number && details.classList.contains('open')) {
    closeButton.click();
    return;
  }

  selectedNumber = number;
  if (number === 1) {
    if (document.body.classList.contains('rgb-mode')) {
      document.body.classList.remove('rgb-mode');
      hydrogenClicks = 0;
    } else {
      hydrogenClicks += 1;
      if (hydrogenClicks >= 10) {
        document.body.classList.add('rgb-mode');
        hydrogenClicks = 0;
      }
    }
  } else {
    hydrogenClicks = 0;
  }
  document.querySelectorAll('.element').forEach((tile) => {
    if (!tile.dataset.number) return;
    const isSelected = Number(tile.dataset.number) === number;
    tile.classList.toggle('selected', isSelected);
    tile.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });
  const activeTile = document.querySelector(`.element[data-number="${number}"]`);
  if (activeTile) {
    activeTile.classList.remove('pulse-white', 'pulse-red');
    void activeTile.offsetWidth;
    const stable = element.details?.stableIsotopes;
    const stableCount = Array.isArray(stable) ? stable.length : Number(stable || 0);
    if (stableCount === 0) {
      activeTile.classList.add('pulse-red');
    } else {
      activeTile.classList.add('pulse-white');
    }
    lastActiveElement = activeTile;
  }

  details.classList.add('open');
  document.body.classList.add('details-open');
  details.setAttribute('aria-hidden', 'false');
  if (togglesBar) {
    togglesBar.style.display = 'none';
  }
  document.getElementById('d-symbol').textContent = element.symbol;
  document.getElementById('d-name').textContent = elementName(element);
  document.getElementById('d-meta').textContent = `${t('atomicShort')} ${element.number} · ${categoryLabel(element.category)}`;
  if (detailsQuantum) {
    const info = quantumInfo(element);
    if (info) {
      detailsQuantum.innerHTML = `
        <span class="quantum-pill"><strong>${t('geometry')}:</strong> ${info.shape}</span>
        <span class="quantum-pill"><strong>${t('orbitals')}:</strong> ${info.orbitals}</span>
        <span class="quantum-pill"><strong>${t('quantumNumbers')}:</strong> ${info.quantum}</span>
      `;
    } else {
      detailsQuantum.innerHTML = '';
    }
  }

  const extra = element.details || {};

  const fields = [
    { label: t('fieldAtomicNumber'), value: element.number },
    { label: t('fieldSymbol'), value: element.symbol },
    { label: t('fieldName'), value: elementName(element) },
    { label: t('fieldCategory'), value: categoryLabel(element.category) },
    { label: t('fieldGroup'), value: element.group },
    { label: t('fieldPeriod'), value: element.period },
    { label: t('fieldAtomicMass'), value: extra.atomicMass },
    { label: t('fieldElectronConfig'), value: extra.electronConfig },
    { label: t('fieldOxidationStates'), value: extra.oxidationStates },
    { label: t('fieldElectronegativity'), value: extra.electronegativity },
    { label: t('fieldPhase'), value: extra.phase },
    { label: t('fieldDensity'), value: extra.density },
    { label: t('fieldMeltingPoint'), value: extra.meltingPoint },
    { label: t('fieldBoilingPoint'), value: extra.boilingPoint },
    { label: t('fieldIsotopes'), value: extra.isotopes },
    { label: t('fieldStableIsotopes'), value: extra.stableIsotopes }
  ];

  detailsGrid.innerHTML = fields
    .map((field) => `<div class="detail"><span>${field.label}</span><strong>${formatValue(field.value)}</strong></div>`)
    .join('');

  detailsNote.textContent = t('detailsNote');
  selectionPill.textContent = `${elementName(element)} ${t('selectedSuffix')}`;
  selectionPill.classList.add('show');
  renderShells(element);
  if (elementImage) {
    const url = element.details?.image;
    if (url) {
      elementImage.classList.remove('empty');
      elementImage.innerHTML = `<img src="${url}" alt="${elementName(element)}" loading="lazy" />`;
    } else {
      elementImage.classList.add('empty');
      elementImage.innerHTML = '';
    }
  }
  renderDetailsExtra(element);
  playClickSound();
  closeButton.focus();
  if (experimentPanel && experimentPanel.classList.contains('open')) {
    addToExperiment(element.number);
  }
}

function filterElements() {
  const query = chemistryMode ? '' : searchInput.value.trim().toLowerCase();
  const magic = getMagicMatches(query);
  document.querySelectorAll('.element').forEach((tile) => {
    if (!tile.dataset.number) return;
    const number = Number(tile.dataset.number);
    const element = elementByNumber.get(number);
    if (!element) return;
    const search = elementSearch.get(number);
    const matchesQuery =
      !query ||
      (search?.en || '').includes(query) ||
      (search?.sq || '').includes(query) ||
      (search?.de || '').includes(query) ||
      (search?.fr || '').includes(query) ||
      (search?.ru || '').includes(query) ||
      (search?.symbol || '').includes(query) ||
      String(element.number) === query;

  const matchesMagic =
      !magic ||
      (Array.isArray(magic) && magic.includes(element.number)) ||
      (magic === 'radioactive' && Number(element.details?.stableIsotopes || 0) === 0) ||
      (typeof magic === 'string' && element.category === magic);

    const matchesMobileFilter =
      !mobileFilter ||
      (mobileFilter === 'radioactive' && Number(element.details?.stableIsotopes || 0) === 0) ||
      (mobileFilter === 'hund' && hundExceptions.has(element.number));

    const matchesCategory =
      activeCategories.size === 0 || activeCategories.has(element.category);

    tile.style.display =
      matchesQuery && matchesCategory && matchesMagic && matchesMobileFilter ? 'flex' : 'none';
  });

  if (mobileTable) {
    mobileTable.querySelectorAll('.period-row').forEach((row) => {
      const visibleTiles = row.querySelectorAll('.element:not([style*=\"display: none\"])').length;
      row.style.display = visibleTiles > 0 ? 'block' : 'none';
    });
  }
}

function updateToggleLabels() {
  document.documentElement.lang = currentLang;
  document.documentElement.setAttribute('lang', currentLang);
  toggleGrid.textContent = table.classList.contains('compact') ? t('gridSpacious') : t('gridCompact');
  toggleLegend.textContent = legend.classList.contains('hidden') ? t('legendShow') : t('legendHide');
  toggleLang.textContent = `${t('language')}: ${langLabels[currentLang] || currentLang.toUpperCase()}`;
}

function applyGlassLevel(level) {
  glassLevel = Math.max(0, Math.min(100, Number(level) || 0));
  localStorage.setItem('glassLevel', String(glassLevel));
  document.documentElement.style.setProperty('--glass-level', String(glassLevel / 100));
  if (settingGlass) settingGlass.value = String(glassLevel);
  if (settingGlassLabel) settingGlassLabel.textContent = `${t('settingsGlass')}: ${glassLevel}%`;
}

function applyBlackTintLevel(level) {
  blackTintLevel = Math.max(0, Math.min(100, Number(level) || 0));
  localStorage.setItem('blackTintLevel', String(blackTintLevel));
  document.documentElement.style.setProperty('--black-tint-level', String(blackTintLevel / 100));
  if (settingBlackTintStrength) settingBlackTintStrength.value = String(blackTintLevel);
  if (settingBlackTintLabel) settingBlackTintLabel.textContent = `Black Tint Strength: ${blackTintLevel}%`;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.setAttribute('lang', currentLang);
  document.getElementById('eyebrow').textContent = t('eyebrow');
  document.getElementById('hero-title').textContent = t('title');
  document.getElementById('hero-lede').textContent = t('lede');
  document.getElementById('stat-elements').textContent = t('statElements');
  document.getElementById('stat-categories').textContent = t('statCategories');
  document.getElementById('stat-mode-label').textContent = t('statMode');
  document.getElementById('stat-count').textContent = elements.length;
  document.getElementById('stat-cats').textContent = Object.keys(categories).length;
  document.getElementById('search-label').textContent = t('search');
  searchInput.placeholder = t('searchPlaceholder');
  if (searchHint) searchHint.textContent = t('hint');
  document.getElementById('close').textContent = t('close');
  if (calculatorTitle) calculatorTitle.textContent = t('calcTitle');
  if (formulaInput) formulaInput.placeholder = t('calcPlaceholder');
  if (formulaCalc) formulaCalc.textContent = t('calcButton');
  if (formulaResult && !formulaResult.dataset.locked) {
    formulaResult.textContent = t('calcDefault');
  }
  if (reactionTitle) reactionTitle.textContent = t('reactTitle');
  if (reactionInput) reactionInput.placeholder = t('reactPlaceholder');
  if (reactionCalc) reactionCalc.textContent = t('reactButton');
  if (reactionResult && !reactionResult.dataset.locked) {
    reactionResult.textContent = t('reactDefault');
  }
  if (toggleExperiment) toggleExperiment.textContent = t('experiment');
  if (toggleRadiation) toggleRadiation.textContent = radiationOn ? t('radiationOn') : t('radiationOff');
  if (toggleHund) toggleHund.textContent = hundOn ? t('hundOn') : t('hundOff');
  if (toggleSettings) toggleSettings.textContent = t('settings');
  if (settingsPanel) {
    const title = settingsPanel.querySelector('.settings-title');
    if (title) title.textContent = t('settingsTitle');
    if (settingsClose) settingsClose.textContent = t('settingsClose');
    if (settingAnimations?.parentElement) {
      const label = settingAnimations.parentElement.querySelector('span');
      if (label) label.textContent = t('settingsAnimations');
    }
    if (settingEffects?.parentElement) {
      const label = settingEffects.parentElement.querySelector('span');
      if (label) label.textContent = t('settingsEffects');
    }
    if (settingPulses?.parentElement) {
      const label = settingPulses.parentElement.querySelector('span');
      if (label) label.textContent = t('settingsPulses');
    }
    if (settingMenuAnimations?.parentElement) {
      const label = settingMenuAnimations.parentElement.querySelector('span');
      if (label) label.textContent = t('settingsMenus');
    }
    if (settingSweep?.parentElement) {
      const label = settingSweep.parentElement.querySelector('span');
      if (label) label.textContent = t('settingsSweep');
    }
    if (settingGlassLabel) {
      settingGlassLabel.textContent = `${t('settingsGlass')}: ${glassLevel}%`;
    }
  }
  applyGlassLevel(glassLevel);
  if (experimentPanel) {
    const title = experimentPanel.querySelector('.experiment-title');
    if (title) title.textContent = t('experimentTitle');
    if (experimentClear) experimentClear.textContent = t('experimentClear');
    if (experimentClose) experimentClose.textContent = t('experimentClose');
    if (experimentAdd) experimentAdd.setAttribute('aria-label', t('experimentAdd'));
    if (experimentStart) experimentStart.textContent = t('experimentStart');
    updateExperimentUI();
  }
  if (toggleCompare) toggleCompare.textContent = t('compare');
  if (toggleTimeline) toggleTimeline.textContent = t('timeline');
  updateSoundToggle();
  if (compareAdd) compareAdd.textContent = t('compareAdd');
  if (compareClear) compareClear.textContent = t('compareClear');
  if (compareClose) compareClose.textContent = t('compareClose');
  if (timelineNote) timelineNote.textContent = t('timelineNote');
  if (timelineClose) timelineClose.textContent = t('timelineClose');
  if (timelineReset) timelineReset.textContent = t('timelineReset');
  if (timelinePanel) {
    const title = timelinePanel.querySelector('.timeline-title');
    if (title) title.textContent = t('timelineTitle');
  }
  if (comparePanel) {
    const title = comparePanel.querySelector('.compare-title');
    if (title) title.textContent = t('compareTitle');
  }
  if (picker) {
    const title = picker.querySelector('.picker-title');
    if (title) {
      title.textContent = pickerMode === 'compare' ? t('comparePickerTitle') : t('experimentAdd');
    }
  }
  if (pickerSearch) pickerSearch.placeholder = t('comparePickerPlaceholder');

  if (footerCredit) {
    const link = footerCredit.querySelector('.footer-link');
    footerCredit.innerHTML = `${t('crafted')} <strong>Eros Halitaj</strong>`;
    if (link) {
      footerCredit.appendChild(link);
    } else {
      const span = document.createElement('span');
      span.className = 'footer-link';
      span.textContent = 'www.halitajchemie.de';
      footerCredit.appendChild(span);
    }
  }

  buildLegend();
  renderTable();
  renderMobileTable();
  filterElements();
  updateToggleLabels();
  updateComparePanel();
  if (chemResults && chemistryMode) {
    chemResults.classList.add('show');
    updateChemistryFromMain();
  } else if (chemResults) {
    chemResults.classList.remove('show');
    chemResults.innerHTML = '';
  }

  if (selectedNumber) {
    selectElement(selectedNumber);
  } else {
    selectionPill.textContent = t('selectPrompt');
    selectionPill.classList.remove('show');
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  document.body.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  const themeKey = `theme${currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}`;
  const themeLabel = t(themeKey);
  document.getElementById('stat-mode').textContent = themeLabel;
  toggleMode.textContent = `${t('modeButton')}: ${themeLabel}`;
}

function initAudio() {
  if (audioContext) return;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

function playClickSound() {
  if (!soundEnabled) return;
  initAudio();
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = 'sine';
  osc.frequency.value = 520;
  gain.gain.value = 0.05;
  osc.connect(gain).connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + 0.06);
}

function updateSoundToggle() {
  if (!toggleSound) return;
  toggleSound.textContent = soundEnabled ? t('soundOn') : t('soundOff');
}

function openPanel(panel) {
  if (!panel) return;
  panel.classList.remove('closing');
  panel.classList.add('open');
}

function closePanel(panel) {
  if (!panel || !panel.classList.contains('open')) return;
  panel.classList.add('closing');
  panel.classList.remove('open');
  setTimeout(() => panel.classList.remove('closing'), 300);
}

function pulseError(element) {
  if (!element) return;
  element.classList.remove('error');
  void element.offsetWidth;
  element.classList.add('error');
  setTimeout(() => element.classList.remove('error'), 3000);
}

const magicMap = new Map([
  ['battery', [3, 4, 6, 8, 14, 15, 22, 28, 29, 30]],
  ['catalyst', [26, 27, 28, 29, 44, 45, 46, 47, 78]],
  ['inert', 'noble'],
  ['noble gas', 'noble'],
  ['halogen', 'halogen'],
  ['alkali', 'alkali'],
  ['alkaline', 'alkaline'],
  ['transition', 'transition'],
  ['metalloid', 'metalloid'],
  ['radioactive', 'radioactive']
]);

function getMagicMatches(query) {
  const lower = query.toLowerCase();
  for (const [key, value] of magicMap.entries()) {
    if (lower.includes(key)) return value;
  }
  return null;
}

function renderShells(element) {
  if (!shells) return;
  shells.innerHTML = '';
  const shellCounts = element.details?.shells;
  if (!Array.isArray(shellCounts)) return;
  const count = shellCounts.length;
  const size = Math.max(120, 100 + count * 14);
  const center = size / 2;
  shells.style.width = `${size}px`;
  shells.style.height = `${size}px`;
  const maxRadius = size / 2 - 10;
  const step = maxRadius / Math.max(1, count);
  shellCounts.forEach((count, index) => {
    const radius = 10 + step * (index + 1);
    const ring = document.createElement('div');
    ring.className = 'shell';
    ring.style.width = `${radius * 2}px`;
    ring.style.height = `${radius * 2}px`;
    ring.style.left = `${center - radius}px`;
    ring.style.top = `${center - radius}px`;
    shells.appendChild(ring);

    const electrons = Math.min(count, 12);
    for (let i = 0; i < electrons; i += 1) {
      const electron = document.createElement('div');
      electron.className = 'electron';
      const angle = (360 / electrons) * i;
      electron.style.setProperty('--radius', `${radius}px`);
      electron.style.setProperty('--angle', `${angle}deg`);
      electron.style.animationDuration = `${4 + index * 1.2}s`;
      shells.appendChild(electron);
    }
  });
}

function renderDetailsExtra(element) {
  if (!detailsExtra) return;
  const extra = element.details || {};
  const blocks = [];
  if (extra.appearance) blocks.push({ title: t('appearance'), body: extra.appearance });
  const summaryText = getLocalizedSummary(element);
  if (summaryText) blocks.push({ title: t('summary'), body: summaryText });
  const usesText = getLocalizedUses(element);
  if (usesText) blocks.push({ title: t('uses'), body: usesText });
  if (extra.discoveredBy) blocks.push({ title: t('discoveredBy'), body: extra.discoveredBy });
  if (extra.namedBy) blocks.push({ title: t('namedBy'), body: extra.namedBy });
  if (extra.discoveryYear) blocks.push({ title: t('discoveryYear'), body: extra.discoveryYear });
  if (extra.source) blocks.push({ title: t('source'), body: extra.source });

  detailsExtra.innerHTML = blocks
    .map((b) => `<div class="extra-card"><h4>${b.title}</h4><p>${b.body}</p></div>`)
    .join('');
}

function updateComparePanel() {
  if (!compareSlots || !compareGrid || !comparePanel) return;
  compareSlots.innerHTML = '';
  compareGrid.innerHTML = '';

  const slots = 3;
  for (let i = 0; i < slots; i += 1) {
    const slot = document.createElement('div');
    slot.className = 'compare-slot';
    if (compareList[i]) {
      const el = elementByNumber.get(compareList[i]);
      slot.textContent = `${el.symbol} · ${elementName(el)}`;
      slot.addEventListener('click', () => {
        compareList = compareList.filter((n) => n !== compareList[i]);
        updateComparePanel();
      });
    } else {
      slot.textContent = '—';
    }
    compareSlots.appendChild(slot);
  }

  compareList.forEach((num) => {
    const el = elementByNumber.get(num);
    const extra = el.details || {};
    const card = document.createElement('div');
    card.className = 'compare-card';
    card.innerHTML = `
      <strong>${el.symbol}</strong> ${elementName(el)}<br />
      ${t('fieldAtomicNumber')}: ${el.number}<br />
      ${t('fieldAtomicMass')}: ${formatValue(extra.atomicMass)}<br />
      ${t('fieldPhase')}: ${formatValue(extra.phase)}<br />
      ${t('fieldElectronegativity')}: ${formatValue(extra.electronegativity)}<br />
      ${t('discoveryYear')}: ${formatValue(extra.discoveryYear)}
    `;
    compareGrid.appendChild(card);
  });

  if (compareList.length > 0) {
    openPanel(comparePanel);
  } else {
    closePanel(comparePanel);
  }
}

function parseFormula(formula) {
  const parts = formula.replace(/\s+/g, '').split(/[·.]/);
  const total = {};

  function mergeCounts(target, src, mult = 1) {
    Object.entries(src).forEach(([sym, cnt]) => {
      target[sym] = (target[sym] || 0) + cnt * mult;
    });
  }

  function parseSegment(segment) {
    const tokens = segment.match(/[A-Z][a-z]?|\d+|[()\[\]]/g);
    if (!tokens) return null;
    let index = 0;

    function parseGroup(stopToken) {
      const counts = {};
      while (index < tokens.length) {
        const token = tokens[index];
        if (token === '(' || token === '[') {
          const endToken = token === '(' ? ')' : ']';
          index += 1;
          const inner = parseGroup(endToken);
          if (tokens[index] !== endToken) return null;
          index += 1;
          const mult = Number(tokens[index]) || 1;
          if (tokens[index] && /^\d+$/.test(tokens[index])) index += 1;
          mergeCounts(counts, inner, mult);
        } else if (token === stopToken) {
          break;
        } else if (/^[A-Z][a-z]?$/.test(token)) {
          index += 1;
          const mult = Number(tokens[index]) || 1;
          if (tokens[index] && /^\d+$/.test(tokens[index])) index += 1;
          counts[token] = (counts[token] || 0) + mult;
        } else {
          return null;
        }
      }
      return counts;
    }

    // Leading multiplier
    let leading = 1;
    if (tokens[0] && /^\d+$/.test(tokens[0])) {
      leading = Number(tokens[0]);
      index += 1;
    }
    const result = parseGroup();
    if (!result || index < tokens.length) return null;
    const scaled = {};
    mergeCounts(scaled, result, leading);
    return scaled;
  }

  for (const part of parts) {
    if (!part) continue;
    const parsed = parseSegment(part);
    if (!parsed) return null;
    mergeCounts(total, parsed, 1);
  }
  return total;
}

function calculateMolarMass(formula) {
  const counts = parseFormula(formula);
  if (!counts) return null;
  let total = 0;
  for (const [sym, cnt] of Object.entries(counts)) {
    const el = elementBySymbol.get(sym);
    const mass = el?.details?.atomicMass?.value;
    if (!el || !mass) return null;
    total += mass * cnt;
  }
  return total;
}

function showCalcError(message) {
  if (!formulaResult) return;
  formulaResult.dataset.locked = 'true';
  formulaResult.textContent = message;
  const card = document.querySelector('.calculator-card');
  if (card) pulseError(card);
}

function handleCalc() {
  const value = (formulaInput?.value || '').trim();
  if (!value) {
    showCalcError(t('calcErrorEmpty'));
    return;
  }
  const mass = calculateMolarMass(value);
  if (!mass) {
    showCalcError(t('calcErrorInvalid'));
    return;
  }
  if (formulaResult) {
    formulaResult.textContent = `${value} = ${mass.toFixed(3)} g/mol`;
    formulaResult.dataset.locked = 'true';
  }
}

function parseReactants(input) {
  const left = input.split(/=|\?|->/)[0];
  return left.split('+').map((p) => p.trim()).filter(Boolean);
}

function isElementFormula(counts) {
  const keys = Object.keys(counts || {});
  return keys.length === 1;
}

function classifyFormula(counts) {
  const symbols = Object.keys(counts || {});
  const elementsList = symbols.map((s) => elementBySymbol.get(s)).filter(Boolean);
  const hasNoble = elementsList.some((el) => el.category === 'noble');
  const hasMetal = elementsList.some((el) => ['alkali','alkaline','transition','post','lanthanide','actinide'].includes(el.category));
  const hasNonmetal = elementsList.some((el) => ['nonmetal','halogen','metalloid'].includes(el.category));
  const hasWater = symbols.length === 2 && counts.H === 2 && counts.O === 1;
  return { hasNoble, hasMetal, hasNonmetal, hasWater };
}

function isOxide(counts) {
  const symbols = Object.keys(counts || {});
  if (!counts || !counts.O) return null;
  const others = symbols.filter((s) => s !== 'O');
  if (others.length !== 1) return null;
  return others[0];
}

function isIonicSalt(counts) {
  const symbols = Object.keys(counts || {});
  if (symbols.length < 2) return false;
  if (counts.H === 2 && counts.O === 1 && symbols.length === 2) return false;
  if (counts.O) {
    const oxide = isOxide(counts);
    if (oxide) return false;
  }
  const elementsList = symbols.map((s) => elementBySymbol.get(s)).filter(Boolean);
  const hasMetal = elementsList.some((el) => ['alkali','alkaline','transition','post','lanthanide','actinide'].includes(el.category));
  const hasNonmetal = elementsList.some((el) => ['nonmetal','halogen','metalloid'].includes(el.category));
  return hasMetal && hasNonmetal;
}

function oxideToAcid(symbol, oCount) {
  const map = {
    'CO2': 'H2CO3',
    'SO2': 'H2SO3',
    'SO3': 'H2SO4',
    'N2O5': 'HNO3',
    'P2O5': 'H3PO4',
    'Cl2O7': 'HClO4'
  };
  return map[`${symbol}${oCount === 1 ? '' : ''}O${oCount}`] || null;
}

function hydroxideFormula(symbol, group) {
  if (group === 1) return `${symbol}OH`;
  if (group === 2) return `${symbol}(OH)2`;
  return null;
}

function predictReaction(input) {
  const parts = parseReactants(input);
  if (parts.length === 0) return { ok: false, message: t('reactErrorEmpty') };
  const parsed = parts.map((p) => ({ p, counts: parseFormula(p) }));
  if (parsed.some((x) => !x.counts)) return { ok: false, message: t('reactErrorInvalid') };

  if (parsed.length === 1) return { ok: true, message: t('reactNo') };

  const a = parsed[0];
  const b = parsed[1];
  const aClass = classifyFormula(a.counts);
  const bClass = classifyFormula(b.counts);
  const amphoteric = new Set(['Al', 'Zn', 'Be', 'Sn', 'Pb', 'Cr']);

  if (aClass.hasNoble || bClass.hasNoble) return { ok: true, message: t('reactInert') };

  if (aClass.hasWater || bClass.hasWater) {
    const other = aClass.hasWater ? bClass : aClass;
    const otherCounts = aClass.hasWater ? b.counts : a.counts;
    const otherElement = isElementFormula(otherCounts) ? Object.keys(otherCounts)[0] : null;
    if (other.hasMetal && otherElement) {
      return { ok: true, message: `${otherElement}OH + H2` };
    }
    const oxide = isOxide(otherCounts);
    if (oxide) {
      if (amphoteric.has(oxide)) return { ok: true, message: t('reactAmphoteric') };
      const el = elementBySymbol.get(oxide);
      if (el && ['alkali','alkaline'].includes(el.category)) {
        const product = hydroxideFormula(oxide, el.group);
        if (product) return { ok: true, message: product };
      }
      const acid = oxideToAcid(oxide, otherCounts.O);
      if (acid) return { ok: true, message: acid };
    }
    if (isIonicSalt(otherCounts)) {
      return { ok: true, message: `${aClass.hasWater ? b.p : a.p}(aq)` };
    }
    return { ok: true, message: t('reactDissolve') };
  }

  const aElement = isElementFormula(a.counts);
  const bElement = isElementFormula(b.counts);
  if (aElement && bElement) {
    if ((aClass.hasMetal && bClass.hasNonmetal) || (bClass.hasMetal && aClass.hasNonmetal)) {
      const metal = aClass.hasMetal ? Object.keys(a.counts)[0] : Object.keys(b.counts)[0];
      const nonmetal = aClass.hasMetal ? Object.keys(b.counts)[0] : Object.keys(a.counts)[0];
      const metalEl = elementBySymbol.get(metal);
      const nonmetalEl = elementBySymbol.get(nonmetal);
      if (nonmetal === 'O' && metalEl) {
        let product = `${metal}O`;
        if (metalEl.group === 1) product = `${metal}2O`;
        else if (metalEl.group === 2) product = `${metal}O`;
        else if (metalEl.group === 13) product = `${metal}2O3`;
        return { ok: true, message: product };
      }
      if (metalEl && nonmetalEl && nonmetalEl.category === 'halogen') {
        const product = metalEl.group === 2 ? `${metal}${nonmetal}2` : `${metal}${nonmetal}`;
        return { ok: true, message: product };
      }
      return { ok: true, message: t('reactIonic') };
    }
    if (aClass.hasNonmetal && bClass.hasNonmetal) {
      return { ok: true, message: t('reactCovalent') };
    }
  }

  return { ok: true, message: t('reactProductsUnknown') };
}

function handleReaction() {
  const value = (reactionInput?.value || '').trim();
  if (!value) {
    if (reactionResult) {
      reactionResult.dataset.locked = 'true';
      reactionResult.textContent = t('reactErrorEmpty');
    }
    pulseError(reactionCard);
    return;
  }
  const result = predictReaction(value);
  if (!result.ok) {
    if (reactionResult) {
      reactionResult.dataset.locked = 'true';
      reactionResult.textContent = result.message;
    }
    pulseError(reactionCard);
    return;
  }
  if (reactionResult) {
    reactionResult.dataset.locked = 'true';
    reactionResult.textContent = result.message;
  }
}

function openPicker(mode = 'compare') {
  if (!picker) return;
  pickerMode = mode;
  const title = picker.querySelector('.picker-title');
  if (title) {
    title.textContent = pickerMode === 'compare' ? t('comparePickerTitle') : t('experimentAdd');
  }
  picker.classList.add('open');
  renderPicker('');
  if (pickerSearch) {
    pickerSearch.value = '';
    pickerSearch.focus();
  }
}

function closePicker() {
  if (!picker) return;
  picker.classList.remove('open');
}

function renderPicker(query) {
  if (!pickerGrid) return;
  const q = query.trim().toLowerCase();
  pickerGrid.innerHTML = '';
  elements.forEach((el) => {
    const name = elementName(el);
    const match =
      !q ||
      name.toLowerCase().includes(q) ||
      el.symbol.toLowerCase().includes(q) ||
      String(el.number) === q;
    if (!match) return;

    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'picker-item';
    item.innerHTML = `<strong>${el.symbol}</strong> ${name}`;
    item.addEventListener('click', () => {
      if (pickerMode === 'compare') {
        if (!compareList.includes(el.number)) {
          compareList = [...compareList, el.number].slice(0, 3);
          updateComparePanel();
        }
      } else {
        addToExperiment(el.number);
      }
      closePicker();
    });
    pickerGrid.appendChild(item);
  });
}

function updateExperimentUI() {
  if (!experimentA || !experimentB || !experimentResult) return;
  const [a, b] = experimentSlots.map((n) => elementByNumber.get(n));
  experimentA.textContent = a ? `${a.symbol} · ${elementName(a)}` : t('experimentSlotA');
  experimentB.textContent = b ? `${b.symbol} · ${elementName(b)}` : t('experimentSlotB');
  experimentResult.textContent = a && b ? getReactionText(a, b) : t('experimentHint');
  if (experimentStart) {
    experimentStart.disabled = !(a && b) || experimentRunning;
  }
  if (experimentPhase) experimentPhase.textContent = t('phaseReady');
  if (experimentTemp) experimentTemp.textContent = `${t('tempLabel')}: -- °C`;
  if (experimentEnergy) experimentEnergy.textContent = `${t('energyLabel')}: --`;
  if (experimentProgressFill) experimentProgressFill.style.width = '0%';
  if (energyGraph) {
    energyGraph.querySelectorAll('span').forEach((bar) => {
      bar.style.height = '20%';
      bar.style.background = 'rgba(141,232,255,0.3)';
    });
  }
}

function getReactionText(a, b) {
  if (a.category === 'noble' || b.category === 'noble') return t('reactionInert');
  const aMetal = ['alkali', 'alkaline', 'transition', 'post', 'lanthanide', 'actinide'].includes(a.category);
  const bMetal = ['alkali', 'alkaline', 'transition', 'post', 'lanthanide', 'actinide'].includes(b.category);
  const aNonmetal = ['nonmetal', 'halogen', 'metalloid'].includes(a.category);
  const bNonmetal = ['nonmetal', 'halogen', 'metalloid'].includes(b.category);
  if (aMetal && bMetal) return t('reactionMetallic');
  if (aNonmetal && bNonmetal) return t('reactionCovalent');
  if ((aMetal && bNonmetal) || (bMetal && aNonmetal)) return t('reactionIonic');
  return t('reactionNo');
}

function initSimulationCanvas() {
  if (!experimentCanvas || !experimentStage) return null;
  const rect = experimentStage.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  experimentCanvas.width = rect.width * dpr;
  experimentCanvas.height = rect.height * dpr;
  const ctx = experimentCanvas.getContext('2d');
  ctx.scale(dpr, dpr);
  return { ctx, width: rect.width, height: rect.height };
}

function createParticles(count, width, height, speed, color) {
  const particles = [];
  for (let i = 0; i < count; i += 1) {
    const r = 4 + Math.random() * 3;
    particles.push({
      x: 20 + Math.random() * (width - 40),
      y: 20 + Math.random() * (height - 40),
      vx: (Math.random() * 2 - 1) * speed,
      vy: (Math.random() * 2 - 1) * speed,
      r,
      color
    });
  }
  return particles;
}

function updateParticles(particles, width, height) {
  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x - p.r < 0 || p.x + p.r > width) p.vx *= -1;
    if (p.y - p.r < 0 || p.y + p.r > height) p.vy *= -1;

    for (let j = i + 1; j < particles.length; j += 1) {
      const q = particles[j];
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const dist = Math.hypot(dx, dy);
      const minDist = p.r + q.r;
      if (dist < minDist && dist > 0) {
        const nx = dx / dist;
        const ny = dy / dist;
        const pScalar = p.vx * nx + p.vy * ny;
        const qScalar = q.vx * nx + q.vy * ny;
        const m = 1;
        const impulse = (2 * (pScalar - qScalar)) / (m + m);
        p.vx -= impulse * nx;
        p.vy -= impulse * ny;
        q.vx += impulse * nx;
        q.vy += impulse * ny;
        const overlap = minDist - dist;
        p.x -= nx * overlap * 0.5;
        p.y -= ny * overlap * 0.5;
        q.x += nx * overlap * 0.5;
        q.y += ny * overlap * 0.5;
      }
    }
  }
}

function drawParticles(ctx, particles) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 8;
    ctx.shadowColor = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function startCollisionSim(mode) {
  if (prefersReducedMotion || !experimentCanvas) return;
  const canvasData = initSimulationCanvas();
  if (!canvasData) return;
  const { ctx, width, height } = canvasData;
  const speed = mode === 'energetic' ? 1.8 : mode === 'inert' ? 0.8 : 1.2;
  const color =
    mode === 'energetic' ? 'rgba(255,120,120,0.85)' :
    mode === 'inert' ? 'rgba(140,190,255,0.7)' :
    'rgba(141,232,255,0.85)';
  simParticles = createParticles(20, width, height, speed, color);

  const step = () => {
    updateParticles(simParticles, width, height);
    drawParticles(ctx, simParticles);
    simFrameId = requestAnimationFrame(step);
  };
  step();
}

function stopCollisionSim() {
  if (simFrameId) {
    cancelAnimationFrame(simFrameId);
    simFrameId = null;
  }
  if (experimentCanvas) {
    const ctx = experimentCanvas.getContext('2d');
    ctx.clearRect(0, 0, experimentCanvas.width, experimentCanvas.height);
  }
}

function runExperiment() {
  if (!experimentStage || experimentRunning) return;
  if (experimentSlots.length < 2) {
    pulseError(experimentCard);
    return;
  }
  const [a, b] = experimentSlots.map((n) => elementByNumber.get(n));
  if (!a || !b) return;
  experimentRunning = true;
  if (experimentStart) experimentStart.disabled = true;
  experimentStage.classList.remove('success', 'inert', 'energetic');
  experimentStage.classList.add('running');

  const text = getReactionText(a, b);
  if (text === t('reactionInert')) {
    experimentStage.classList.add('inert');
    startCollisionSim('inert');
  } else if (text === t('reactionIonic')) {
    experimentStage.classList.add('energetic');
    startCollisionSim('energetic');
  } else {
    experimentStage.classList.add('success');
    startCollisionSim('success');
  }

  const phases = [
    { key: 'phaseMix', pct: 20, temp: 25, energy: 15 },
    { key: 'phaseActivate', pct: 45, temp: 120, energy: 60 },
    { key: 'phaseReact', pct: 75, temp: text === t('reactionIonic') ? 260 : 180, energy: 90 },
    { key: 'phaseSettle', pct: 95, temp: 60, energy: 35 },
    { key: 'phaseComplete', pct: 100, temp: 30, energy: 10 }
  ];

  let step = 0;
  if (experimentResult) experimentResult.textContent = '...';
  if (experimentTimer) clearInterval(experimentTimer);
  experimentTimer = setInterval(() => {
    const phase = phases[step];
    if (!phase) {
      clearInterval(experimentTimer);
      experimentTimer = null;
      experimentRunning = false;
      experimentStage.classList.remove('running');
      stopCollisionSim();
      if (experimentStart) experimentStart.disabled = false;
      if (experimentResult) experimentResult.textContent = text;
      return;
    }
    if (experimentPhase) experimentPhase.textContent = t(phase.key);
    if (experimentProgressFill) experimentProgressFill.style.width = `${phase.pct}%`;
    if (experimentTemp) experimentTemp.textContent = `${t('tempLabel')}: ${phase.temp} °C`;
    if (experimentEnergy) experimentEnergy.textContent = `${t('energyLabel')}: ${phase.energy}%`;
    if (energyGraph) {
      const bars = energyGraph.querySelectorAll('span');
      bars.forEach((bar, i) => {
        const height = Math.min(100, 20 + phase.energy + (i * 4));
        bar.style.height = `${height}%`;
        bar.style.background = phase.energy > 70 ? 'rgba(255,100,100,0.5)' : 'rgba(141,232,255,0.35)';
      });
    }
    step += 1;
  }, 700);
}

function addToExperiment(number) {
  if (experimentSlots.includes(number)) return;
  if (experimentSlots.length < 2) {
    experimentSlots = [...experimentSlots, number];
  } else {
    experimentSlots = [experimentSlots[1], number];
  }
  updateExperimentUI();
}
function runLoader() {
  if (!loader || !loaderFill) return;
  const seen = localStorage.getItem('loaderSeen') === '1';
  if (loaderTitle) loaderTitle.textContent = t('loaderTitle');
  const steps = [
    { pct: 30, note: t('loaderStep1') },
    { pct: 60, note: t('loaderStep2') },
    { pct: 85, note: t('loaderStep3') },
    { pct: 100, note: t('loaderStep4') }
  ];

  if (seen || prefersReducedMotion) {
    loaderFill.style.width = '100%';
    if (loaderNote) loaderNote.textContent = t('loaderStep4');
    setTimeout(() => {
      loader.classList.add('hidden');
      loader.setAttribute('aria-busy', 'false');
      setTimeout(() => loader.remove(), 400);
    }, 300);
    return;
  }

  let index = 0;
  const tick = () => {
    const step = steps[index];
    loaderFill.style.width = `${step.pct}%`;
    if (loaderNote) loaderNote.textContent = step.note;
    index += 1;
    if (index < steps.length) {
      setTimeout(tick, 420);
    } else {
      localStorage.setItem('loaderSeen', '1');
      setTimeout(() => {
        loader.classList.add('hidden');
        loader.setAttribute('aria-busy', 'false');
        setTimeout(() => loader.remove(), 600);
      }, 300);
    }
  };
  setTimeout(tick, 120);
}

function triggerTableWhiteFade() {
  if (!table) return;
  table.classList.remove('white-fade');
  void table.offsetWidth;
  table.classList.add('white-fade');
}

function scheduleTableSweep() {
  if (!table || prefersReducedMotion || effectsOff || sweepOff) return;
  if (sweepIntervalId) {
    clearInterval(sweepIntervalId);
    sweepIntervalId = null;
  }
  const runSweep = () => {
    const tiles = document.querySelectorAll('.element[data-number]');
    tiles.forEach((tile) => {
      const num = Number(tile.dataset.number);
      const element = elementByNumber.get(num);
      if (!element) return;
      let col = element.group || 1;
      if (element.category === 'lanthanide' && typeof element.seriesIndex === 'number') {
        col = element.seriesIndex + 4;
      }
      if (element.category === 'actinide' && typeof element.seriesIndex === 'number') {
        col = element.seriesIndex + 4;
      }
      tile.style.setProperty('--sweep-delay', `${(col - 1) * 0.06}s`);
      tile.classList.remove('sweep-outline');
      void tile.offsetWidth;
      tile.classList.add('sweep-outline');
    });
  };
  sweepIntervalId = setInterval(runSweep, 10000);
}

function handleFooterReveal() {
  if (!footerCredit || !appShell) return;
  const canScroll = appShell.scrollHeight > appShell.clientHeight + 1;
  const scrolledToEnd = !canScroll ? false : appShell.scrollTop + appShell.clientHeight >= appShell.scrollHeight - 48;
  footerCredit.classList.toggle('show', scrolledToEnd);
}

function closeMenus(except = null) {
  document.body.classList.remove('submenu-open');
  if (modeMenu && except !== 'mode') {
    modeMenu.classList.remove('open');
    modeMenu.classList.remove('mobile-panel');
    modeMenu.style.position = '';
    modeMenu.style.left = '';
    modeMenu.style.top = '';
    modeMenu.style.right = '';
    modeMenu.style.minWidth = '';
    modeMenu.style.maxWidth = '';
    modeMenu.style.maxHeight = '';
    modeMenu.style.transform = '';
    toggleMode.setAttribute('aria-expanded', 'false');
  }
  if (langMenu && except !== 'lang') {
    langMenu.classList.remove('open');
    langMenu.classList.remove('mobile-panel');
    langMenu.style.position = '';
    langMenu.style.left = '';
    langMenu.style.top = '';
    langMenu.style.right = '';
    langMenu.style.minWidth = '';
    langMenu.style.maxWidth = '';
    langMenu.style.maxHeight = '';
    langMenu.style.transform = '';
    toggleLang.setAttribute('aria-expanded', 'false');
  }
}

function openMenu(menu, trigger, keepOpenKey) {
  if (!menu || !trigger) return;
  const isMobile = window.matchMedia('(max-width: 820px)').matches;
  const isAlreadyOpen = menu.classList.contains('open');
  closeMenus(keepOpenKey);
  if (isAlreadyOpen) {
    menu.classList.remove('open');
    menu.classList.remove('mobile-panel');
    menu.style.position = '';
    menu.style.left = '';
    menu.style.top = '';
    menu.style.right = '';
    menu.style.minWidth = '';
    menu.style.maxWidth = '';
    menu.style.maxHeight = '';
    menu.style.transform = '';
    document.body.classList.remove('submenu-open');
    trigger.setAttribute('aria-expanded', 'false');
    return;
  }

  if (isMobile) {
    document.body.classList.remove('mobile-menu-open');
    document.body.classList.add('submenu-open');
    if (!menu.parentElement || menu.parentElement !== document.body) {
      document.body.appendChild(menu);
    }
    menu.classList.add('open');
    menu.classList.add('mobile-panel');
    trigger.setAttribute('aria-expanded', 'true');
    syncMobileMenuToggleState();
    return;
  }

  document.body.classList.remove('submenu-open');
  menu.classList.add('open');
  menu.classList.remove('mobile-panel');
  trigger.setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => {
    positionMenu(menu, trigger);
  });
}

function dismissMenu(menu, trigger) {
  if (!menu || !trigger) return;
  menu.classList.remove('open');
  menu.classList.remove('mobile-panel');
  menu.style.position = '';
  menu.style.left = '';
  menu.style.top = '';
  menu.style.right = '';
  menu.style.minWidth = '';
  menu.style.maxWidth = '';
  menu.style.maxHeight = '';
  menu.style.transform = '';
  trigger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('submenu-open');
}

function closeMobileMenu() {
  document.body.classList.remove('mobile-menu-open');
}

function closeMenuLayers(event) {
  const clickedInsideMobileMenu = mobileMenu && mobileMenu.contains(event.target);
  const clickedMobileToggle = mobileMenuToggle && (event.target === mobileMenuToggle || mobileMenuToggle.contains(event.target));
  const clickedInsideModeMenu = modeContainer && modeContainer.contains(event.target);
  const clickedInsideLangMenu = langContainer && langContainer.contains(event.target);

  if (!clickedInsideMobileMenu && !clickedMobileToggle) {
    closeMobileMenu();
  }

  if (!clickedInsideModeMenu && !clickedInsideLangMenu) {
    closeMenus();
  }
}

function positionMenu(menu, trigger) {
  if (!menu || !trigger) return;
  const rect = trigger.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const width = Math.min(280, Math.max(rect.width + 24, 220));
  const maxHeight = Math.max(180, viewportHeight - 24);
  const left = Math.min(Math.max(rect.left, 12), Math.max(12, viewportWidth - width - 12));
  const top = Math.min(Math.max(rect.bottom + 24, 12), Math.max(12, viewportHeight - maxHeight - 12));

  menu.style.position = 'fixed';
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.right = 'auto';
  menu.style.minWidth = `${width}px`;
  menu.style.maxWidth = `${width}px`;
  menu.style.maxHeight = `${maxHeight}px`;
  menu.style.transform = 'translateY(0) scale(1)';
}

searchInput.addEventListener('input', () => {
  filterElements();
  if (chemistryMode) {
    updateChemistryFromMain();
  }
});

// Chemistry search UI removed for now.

toggleGrid.addEventListener('click', () => {
  table.classList.toggle('compact');
  updateToggleLabels();
  fitTableToViewport();
});

toggleLegend.addEventListener('click', () => {
  legend.classList.toggle('hidden');
  updateToggleLabels();
});

toggleLang.addEventListener('click', (event) => {
  event.stopPropagation();
  if (langMenu.classList.contains('open')) {
    closeMenus();
  } else {
    openMenu(langMenu, toggleLang, 'lang');
  }
});

if (toggleSound) {
  updateSoundToggle();
  toggleSound.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('sound', soundEnabled ? '1' : '0');
    updateSoundToggle();
    playClickSound();
  });
}

if (toggleExperiment) {
  toggleExperiment.addEventListener('click', () => {
    openPanel(experimentPanel);
    updateExperimentUI();
  });
}

if (experimentAdd) {
  experimentAdd.addEventListener('click', () => {
    openPicker('experiment');
  });
}

if (experimentStart) {
  experimentStart.addEventListener('click', () => {
    runExperiment();
  });
}

if (experimentClear) {
  experimentClear.addEventListener('click', () => {
    experimentSlots = [];
    experimentRunning = false;
    if (experimentTimer) {
      clearInterval(experimentTimer);
      experimentTimer = null;
    }
    stopCollisionSim();
    updateExperimentUI();
  });
}

if (experimentClose) {
  experimentClose.addEventListener('click', () => {
    closePanel(experimentPanel);
    experimentRunning = false;
    if (experimentTimer) {
      clearInterval(experimentTimer);
      experimentTimer = null;
    }
    stopCollisionSim();
  });
}

if (experimentPanel) {
  experimentPanel.addEventListener('click', (event) => {
    if (event.target === experimentPanel) {
      closePanel(experimentPanel);
      stopCollisionSim();
    }
  });
}

if (toggleRadiation) {
  toggleRadiation.addEventListener('click', () => {
    radiationOn = !radiationOn;
    document.body.classList.toggle('radiation-on', radiationOn);
    toggleRadiation.textContent = radiationOn ? t('radiationOn') : t('radiationOff');
    if (isMobileView()) {
      if (radiationOn) {
        updateMobileFilter('radioactive');
      } else if (hundOn) {
        updateMobileFilter('hund');
      } else {
        updateMobileFilter(null);
      }
    }
  });
}

if (toggleHund) {
  toggleHund.addEventListener('click', () => {
    hundOn = !hundOn;
    localStorage.setItem('hundOn', hundOn ? '1' : '0');
    updateHundHighlights();
    if (toggleHund) toggleHund.textContent = hundOn ? t('hundOn') : t('hundOff');
    if (isMobileView()) {
      if (hundOn) {
        updateMobileFilter('hund');
      } else if (radiationOn) {
        updateMobileFilter('radioactive');
      } else {
        updateMobileFilter(null);
      }
    }
  });
}

if (toggleSettings) {
  toggleSettings.addEventListener('click', () => {
    document.body.classList.remove('mobile-menu-open');
    if (settingsPanel) settingsPanel.classList.add('open');
  });
}

if (settingsClose) {
  settingsClose.addEventListener('click', () => {
    if (settingsPanel) settingsPanel.classList.remove('open');
  });
}

if (settingsPanel) {
  settingsPanel.addEventListener('click', (event) => {
    if (event.target === settingsPanel) settingsPanel.classList.remove('open');
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && settingsPanel?.classList.contains('open')) {
    settingsPanel.classList.remove('open');
  }
});

if (settingAnimations) {
  settingAnimations.addEventListener('change', () => {
    animationsOff = settingAnimations.checked;
    localStorage.setItem('animationsOff', animationsOff ? '1' : '0');
    applyVisualSettings();
  });
}

if (settingEffects) {
  settingEffects.addEventListener('change', () => {
    effectsOff = settingEffects.checked;
    localStorage.setItem('effectsOff', effectsOff ? '1' : '0');
    applyVisualSettings();
  });
}

if (settingPulses) {
  settingPulses.addEventListener('change', () => {
    pulsesOff = settingPulses.checked;
    localStorage.setItem('pulsesOff', pulsesOff ? '1' : '0');
    applyVisualSettings();
  });
}

if (settingMenuAnimations) {
  settingMenuAnimations.addEventListener('change', () => {
    menuAnimationsOff = settingMenuAnimations.checked;
    localStorage.setItem('menuAnimationsOff', menuAnimationsOff ? '1' : '0');
    applyVisualSettings();
  });
}

if (settingSweep) {
  settingSweep.addEventListener('change', () => {
    sweepOff = settingSweep.checked;
    localStorage.setItem('sweepOff', sweepOff ? '1' : '0');
    applyVisualSettings();
  });
}

if (settingGlass) {
  settingGlass.addEventListener('input', () => {
    applyGlassLevel(settingGlass.value);
  });
}

if (settingBlackTintStrength) {
  settingBlackTintStrength.addEventListener('input', () => {
    applyBlackTintLevel(settingBlackTintStrength.value);
  });
}

if (settingBlackTint) {
  settingBlackTint.checked = blackTintEnabled;
  settingBlackTint.addEventListener('change', () => {
    blackTintEnabled = settingBlackTint.checked;
    localStorage.setItem('blackTint', blackTintEnabled ? '1' : '0');
    applyVisualSettings();
  });
}

applyBlackTintLevel(blackTintLevel);

if (searchBlock && controls) {
  searchBlock.addEventListener('pointerdown', () => {
    controls.classList.remove('hidden');
  });
}

if (toggleChem) {
  toggleChem.addEventListener('click', () => {
    setChemistryMode(!chemistryMode);
    filterElements();
  });
}

if (toggleCompare) {
  toggleCompare.addEventListener('click', () => {
    if (comparePanel.classList.contains('open')) {
      closePanel(comparePanel);
    } else {
      openPanel(comparePanel);
    }
  });
}

if (compareAdd) {
  compareAdd.addEventListener('click', () => {
    if (!selectedNumber) return;
    if (!compareList.includes(selectedNumber)) {
      compareList = [...compareList, selectedNumber].slice(0, 3);
      updateComparePanel();
    }
  });
}

if (compareAddBtn) {
  compareAddBtn.addEventListener('click', () => {
    openPicker('compare');
  });
}

if (compareClear) {
  compareClear.addEventListener('click', () => {
    compareList = [];
    updateComparePanel();
  });
}

if (compareClose) {
  compareClose.addEventListener('click', () => {
    closePanel(comparePanel);
  });
}

function applyTimeline(year) {
  document.querySelectorAll('.element[data-number]').forEach((tile) => {
    const num = Number(tile.dataset.number);
    const el = elementByNumber.get(num);
    if (!el) return;
    const discovery = Number(el.details?.discoveryYear || 0);
    if (discovery && discovery > year) {
      tile.classList.add('timeline-dim');
    } else {
      tile.classList.remove('timeline-dim');
    }
  });
}

if (toggleTimeline) {
  toggleTimeline.addEventListener('click', () => {
    openPanel(timelinePanel);
  });
}

if (timelineRange) {
  const years = elements
    .map((e) => Number(e.details?.discoveryYear || 0))
    .filter((y) => y > 0);
  const minYear = years.length ? Math.min(...years) : 1600;
  const maxYear = years.length ? Math.max(...years) : 2025;
  timelineRange.min = String(minYear);
  timelineRange.max = String(maxYear);
  const currentYear = 2015;
  timelineRange.value = String(Math.min(currentYear, maxYear));
  if (timelineYear) timelineYear.textContent = timelineRange.value;
  applyTimeline(Number(timelineRange.value));

  timelineRange.addEventListener('input', () => {
    if (timelineYear) timelineYear.textContent = timelineRange.value;
    applyTimeline(Number(timelineRange.value));
  });
}

if (timelineClose) {
  timelineClose.addEventListener('click', () => {
    closePanel(timelinePanel);
  });
}

if (timelineReset) {
  timelineReset.addEventListener('click', () => {
    const year = 2015;
    if (timelineRange) timelineRange.value = String(year);
    if (timelineYear) timelineYear.textContent = String(year);
    applyTimeline(year);
  });
}

if (timelinePanel) {
  timelinePanel.addEventListener('click', (event) => {
    if (event.target === timelinePanel) {
      closePanel(timelinePanel);
    }
  });
}

if (pickerClose) {
  pickerClose.addEventListener('click', closePicker);
}

if (picker) {
  picker.addEventListener('click', (event) => {
    if (event.target === picker) closePicker();
  });
}

if (pickerSearch) {
  pickerSearch.addEventListener('input', () => {
    renderPicker(pickerSearch.value);
  });
}

if (formulaCalc) {
  formulaCalc.addEventListener('click', handleCalc);
}

if (formulaInput) {
  formulaInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleCalc();
    }
  });
  formulaInput.addEventListener('input', () => {
    if (formulaResult) {
      formulaResult.dataset.locked = '';
      formulaResult.textContent = t('calcDefault');
    }
  });
}

if (reactionCalc) {
  reactionCalc.addEventListener('click', handleReaction);
}

if (reactionInput) {
  reactionInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleReaction();
    }
  });
  reactionInput.addEventListener('input', () => {
    if (reactionResult) {
      reactionResult.dataset.locked = '';
      reactionResult.textContent = t('reactDefault');
    }
  });
}

langOptions.forEach((option) => {
  option.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    currentLang = option.dataset.lang;
    localStorage.setItem('lang', currentLang);
    applyLanguage();
    dismissMenu(langMenu, toggleLang);
  });
});

toggleMode.addEventListener('click', (event) => {
  event.stopPropagation();
  if (modeMenu.classList.contains('open')) {
    closeMenus();
  } else {
    openMenu(modeMenu, toggleMode, 'mode');
  }
});

modeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const theme = option.dataset.mode;
    applyTheme(theme);
    dismissMenu(modeMenu, toggleMode);
  });
});

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
  details.classList.remove('open');
  document.body.classList.remove('details-open');
  details.setAttribute('aria-hidden', 'true');
  if (togglesBar) {
    togglesBar.style.display = '';
  }
  if (controls) {
    controls.classList.toggle('hidden', false);
  }
  selectionPill.textContent = t('selectPrompt');
  selectionPill.classList.remove('show');
  document.querySelectorAll('.element').forEach((tile) => {
    tile.classList.remove('selected');
    if (tile.dataset.number) tile.setAttribute('aria-pressed', 'false');
  });
  selectedNumber = null;
  if (lastActiveElement) lastActiveElement.focus();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && details.classList.contains('open')) {
    closeButton.click();
  }
  if (event.key === 'Escape') {
    document.body.classList.remove('mobile-menu-open');
    closeMenus();
    if (timelinePanel) closePanel(timelinePanel);
    if (comparePanel) closePanel(comparePanel);
    if (picker) closePicker();
    if (experimentPanel) closePanel(experimentPanel);
  }
});

document.addEventListener('click', (event) => {
  closeMenuLayers(event);
  if (
    details.classList.contains('open') &&
    !details.contains(event.target) &&
    !event.target.closest('.element')
  ) {
    closeButton.click();
  }
});

buildLegend();
renderTable();
renderMobileTable();
applyLanguage();
updateToggleLabels();
setupControlsAutoHide();
  // Chemistry UI removed.
applyTheme(currentTheme);
fitTableToViewport();
scheduleTableSweep();
applyVisualSettings();
syncMobileMenu();
window.addEventListener('load', runLoader);













if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // ignore registration errors
    });
  });
}

// Ensure the mode menu can be toggled even if other layers overlap.
modeMenu.style.pointerEvents = 'auto';
langMenu.style.pointerEvents = 'auto';

const mobileToggleObserver = new MutationObserver(() => {
  syncMobileMenuToggleState();
});
mobileToggleObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
[details, comparePanel, timelinePanel, experimentPanel, settingsPanel, picker].filter(Boolean).forEach((panel) => {
  mobileToggleObserver.observe(panel, { attributes: true, attributeFilter: ['class'] });
});
syncMobileMenuToggleState();

function fitTableToViewport() {
  if (!tableWrap) return;
  const isMobile = window.innerWidth <= 560;
  table.style.transform = '';
  tableWrap.style.height = '';
  if (!isMobile) return;
  const wrapWidth = tableWrap.clientWidth;
  if (!wrapWidth) return;
  const tableWidth = table.scrollWidth;
  if (!tableWidth) return;
  const scale = Math.min(1, wrapWidth / tableWidth);
  table.style.transform = `scale(${scale})`;
  tableWrap.style.height = `${table.scrollHeight * scale + 120}px`;
}

window.addEventListener('resize', () => {
  syncMobileMenu();
  syncMobileMenuToggleState();
  fitTableToViewport();
  if (modeMenu.classList.contains('open') && !modeMenu.classList.contains('mobile-panel')) positionMenu(modeMenu, toggleMode);
  if (langMenu.classList.contains('open') && !langMenu.classList.contains('mobile-panel')) positionMenu(langMenu, toggleLang);
  handleFooterReveal();
});

document.addEventListener('visibilitychange', () => {
  if (prefersReducedMotion || effectsOff) return;
  if (document.hidden && sweepIntervalId) {
    clearInterval(sweepIntervalId);
    sweepIntervalId = null;
  } else if (!document.hidden && !sweepIntervalId) {
    scheduleTableSweep();
  }
});

const handlePageScroll = () => {
  handleFooterReveal();
  setMobileMenuToggleScrollActive(true);
};

if (appShell) {
  appShell.addEventListener('scroll', handlePageScroll, { passive: true });
}
window.addEventListener('scroll', handlePageScroll, { passive: true });
window.addEventListener('wheel', () => setMobileMenuToggleScrollActive(true), { passive: true });
window.addEventListener('touchmove', () => setMobileMenuToggleScrollActive(true), { passive: true });
window.addEventListener('touchend', () => setMobileMenuToggleScrollActive(false), { passive: true });
window.addEventListener('mouseup', () => setMobileMenuToggleScrollActive(false), { passive: true });
window.addEventListener('pointerup', () => setMobileMenuToggleScrollActive(false), { passive: true });

handleFooterReveal();













