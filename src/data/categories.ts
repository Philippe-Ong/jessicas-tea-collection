export interface Category {
  slug: string;
  name: string;
  description: string;
  order: number;
}

export const categories: Category[] = [
  {
    slug: 'klassische-tees',
    name: 'Klassische Tees',
    description: 'Die sechs klassischen Teesorten aus der Camellia sinensis Pflanze – von Grün über Weiss bis Pu-Erh.',
    order: 1,
  },
  {
    slug: 'fruechte-qi-tees',
    name: 'Früchte & Qi Tees',
    description: 'Fruchtige und Qi-bewegende Einzeltees aus der TCM für den täglichen Genuss.',
    order: 2,
  },
  {
    slug: 'fruechtemischungen',
    name: 'Früchtemischungen',
    description: 'Harmonische Früchtemischungen mit erfrischenden und ausgleichenden Aromen.',
    order: 3,
  },
  {
    slug: 'bluetentees',
    name: 'Blütentees',
    description: 'Zarte Blütentees mit betörendem Aroma – von Chrysantheme bis Jasmin.',
    order: 4,
  },
  {
    slug: 'krautertees',
    name: 'Kräutertees',
    description: 'Klassische Kräutertees aus der TCM – von Maulbeerblatt bis Süssholz.',
    order: 5,
  },
  {
    slug: 'waermende-wurzeln-zweige',
    name: 'Wärmende Wurzeln & Zweige',
    description: 'Wärmende Wurzeln und Zweige für mehr innere Wärme und Vitalität.',
    order: 6,
  },
  {
    slug: 'exklusive-mischungen',
    name: 'Exklusive Mischungen & Premium',
    description: 'Besondere TCM-Kombinationen und Premium-Mischungen für gezielte Bedürfnisse.',
    order: 7,
  },
  {
    slug: 'blueten-pu-erh-kugeln',
    name: 'Blüten-Pu-Erh-Kugeln',
    description: 'Handgefertigte Pu-Erh-Kugeln mit edlen Blüten – ein Erlebnis für die Sinne.',
    order: 8,
  },
  {
    slug: 'schweizer-klassiker',
    name: 'Schweizer Klassiker',
    description: 'Bewährte Schweizer Klassiker aus heimischen Kräutern und Pflanzen.',
    order: 9,
  },
  {
    slug: 'premium-spezial',
    name: 'Premium & Spezial',
    description: 'Exklusive Spezialitäten und Premium-Mischungen für besondere Momente.',
    order: 10,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}
