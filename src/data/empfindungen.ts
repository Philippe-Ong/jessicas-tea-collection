export interface Empfindung {
  slug: string;
  title: string;
  beobachtungen: string;
  tcmEinordnung: string;
  passendeTees: string[];
}

export const empfindungen: Empfindung[] = [
  {
    slug: 'innere-hitze-spannungsgefuehl',
    title: 'Innere Hitze & Spannungsgefühl',
    beobachtungen:
      'Gerötete Augen oder müde Augen; Innere Unruhe; Druck- oder Spannungsgefühl im Kopfbereich; Wärme- oder Hitzegefühl; Schnelle Gereiztheit; Frustration.',
    tcmEinordnung:
      'Leber-Qi-Stagnation (Leberblockade); Leberhitze; Innere Wind; Aufsteigendes Leber-Yang.',
    passendeTees: [
      'chrysantheme',
      'chrysantheme-goji-mischung',
      'gruener-tee',
      'weisser-tee',
      'roselle-hibiskus',
      'maulbeerblaetter',
      'geissblatt',
      'zitrone-wassermelone-schmetterlingswicke',
      'drachenfrucht-orange-zitrone-melone',
      'chrysanthemen-pu-erh-ball',
      'golden-mum-pu-erh-ball',
      'loewenzahn',
    ],
  },
  {
    slug: 'stress-emotionale-anspannung-zyklus',
    title: 'Stress, emotionale Anspannung & Zyklus',
    beobachtungen:
      'Schneller gereizt als sonst; Stimmungsschwankungen; Spannungsgefühl im Unterbauch rund um die Monatsblutung; Emotionale Unruhe; Gefühl von Unzufriedenheit oder innerem Druck; Emotionale Empfindlichkeit vor oder während des Zyklus; Spannungsgefühl im Brust- oder Bauchbereich.',
    tcmEinordnung:
      'Leber-Qi-Stagnation (Leberblockade); Leber-Hitze; Leber-Blut-Mangel.',
    passendeTees: [
      'rosenblueten',
      'jasmintee',
      'osmanthus',
      'chrysantheme-rosenblueten',
      'longan',
      'goji-beeren',
      'longan-spezial-mischung',
      'osmanthus-spezial-mischung',
    ],
  },
  {
    slug: 'kaeltegefuehl-stimmungstief',
    title: 'Kältegefühl & Stimmungstief in der dunklen Jahreszeit',
    beobachtungen:
      'Kalte Hände oder Füße; Häufiges Frieren; Weniger Energie während der Herbst- und Wintermonate; Gedrückte Stimmung an dunklen Tagen; Wunsch nach Wärme und Rückzug; Das Gefühl, nicht richtig in Schwung zu kommen.',
    tcmEinordnung:
      'Yang-Schwäche. Nach der TCM kann die kalte und lichtarme Jahreszeit das Yang und die innere Wärme beeinflussen.',
    passendeTees: [
      'ingwer',
      'zimtzweig',
      'ingwer-rote-datteln',
      'ingwer-brauner-zucker',
      'rote-datteln',
      'longan',
      'ginseng-teebeutel',
      'schwarzer-tee',
      'pu-erh-tee',
      'ginseng-granulat',
      'victoria-schwarzer-tee',
    ],
  },
  {
    slug: 'verdauung-mitte-staerken',
    title: 'Verdauung & die Mitte stärken',
    beobachtungen:
      'Völlegefühl; Blähungsgefühl; Schweresgefühl im Bauch; Müdigkeit nach dem Essen; Empfindliche Verdauung; Neigung zu Schweregefühl im Körper; Neigung zu Wassereinlagerungen; Gefühl von "aufgedunsen sein"; Allgemeines Energietief; Antriebsmangel.',
    tcmEinordnung:
      'Milz-Qi-Schwäche; Nahrungsstagnation; Feuchtigkeit/Wasserstagnation. Nach TCM spielt die "Mitte" (Milz und Magen) eine zentrale Rolle für Energie, Verdauung und den Umgang mit Feuchtigkeit.',
    passendeTees: [
      'pu-erh-tee',
      'oolong-tee',
      'mandarinschale-chen-pi',
      'weissdornfrucht',
      'gerstentee',
      'lotusblatt',
    ],
  },
  {
    slug: 'ruhe-regeneration',
    title: 'Ruhe & Regeneration',
    beobachtungen:
      'Abends zur Entspannung; Innere Balance und Ruhe finden; Ausgleich nach einem langen Tag.',
    tcmEinordnung:
      'Herz-Geist beruhigen (Shen beruhigen). In der TCM steht der "Herz-Geist" für innere Ruhe, emotionale Balance und einen klaren Geist.',
    passendeTees: [
      'longan',
      'rote-datteln',
      'jujube-longan-goji-brauner-zucker',
      'rosenblueten',
      'jasmintee',
      'osmanthus',
      'lily-pu-erh-ball',
      'sea-lavender-pu-erh-ball',
      'peony-pu-erh-ball',
    ],
  },
  {
    slug: 'blut-substanz-aufbauen',
    title: 'Blut & Substanz aufbauen (nährend & stärkend)',
    beobachtungen:
      'Blässe; Müdigkeit oder Erschöpfung; während oder nach der Menstruation; Zeit der Regeneration nach der Geburt; Gefühl von Schwäche oder wenig Energie.',
    tcmEinordnung:
      'Blut-Mangel. In der TCM bedeutet "Blut-Mangel" nicht, dass zu wenig Blut vorhanden ist, sondern dass dem Körper nährende Substanz und Kraft fehlen, die für Energie, Haut, Haare, Augen und emotionale Balance wichtig sind.',
    passendeTees: [
      'rote-datteln',
      'longan',
      'goji-beeren',
      'jujube-longan-goji-brauner-zucker',
      'rosenblueten',
      'chrysantheme-rote-datteln',
      'longan-spezial-mischung',
    ],
  },
  {
    slug: 'atemwege-wohlbefinden',
    title: 'Atemwege & Wohlbefinden',
    beobachtungen:
      'Trockener Hals; Kratzen im Hals; Trockener Mund; Trockenheitsgefühl im Mund oder Rachen; Empfindliche Atemwege; Hustenreiz; Häufiges Räuspern; Heisere Stimme; Bedürfnis nach wohltuender Wärme oder Befeuchtung.',
    tcmEinordnung:
      'Lungen-Qi-Schwäche; Lungen-Yin-Mangel; Lungen-Hitze (je nach Situation). Nach der TCM spielt die Lunge eine wichtige Rolle für die Atmung, die Befeuchtung der Atemwege und die Abwehrkräfte des Körpers.',
    passendeTees: ['maulbeerblaetter', 'osmanthus', 'chrysantheme', 'weisser-tee'],
  },
  {
    slug: 'kraft-vitalitaet',
    title: 'Kraft & Vitalität',
    beobachtungen:
      'Wenig Energie; Kälteempfindlichkeit; Kalte Hände oder Füße; Bedürfnis nach Wärme; Rückenschwäche; Schwächegefühl in den Knien; Gefühl nachlassender Vitalität; Das Gefühl, häufiger Wasser lösen zu müssen.',
    tcmEinordnung:
      'Nieren-Qi-Schwäche; Nieren-Yang-Schwäche. Nach der TCM gelten die Nieren als Quelle der Lebensenergie. Sie stehen mit Vitalität, Wärme, Belastbarkeit und dem Alterungsprozess in Verbindung.',
    passendeTees: [
      'ginseng-teebeutel',
      'ginseng-granulat',
      'longan',
      'rote-datteln',
      'jujube-longan-goji-brauner-zucker',
      'schwarzer-tee',
      'pu-erh-tee',
    ],
  },
];

export function getEmpfindungBySlug(slug: string): Empfindung | undefined {
  return empfindungen.find((e) => e.slug === slug);
}
