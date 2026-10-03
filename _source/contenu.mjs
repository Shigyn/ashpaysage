// ===================================================================
//  A.S.H Paysage & Multiservices — le contenu du site.
//
//  Source : son profil AlloVoisins (presentation, prestations, photos,
//  horaires, diplomes, SIRET) et ses echanges avec Nicolas. Rien n'est
//  invente : pas de note ni d'avis affiches (il n'a pas encore de fiche
//  Google), pas de numero tant qu'il n'est pas confirme.
// ===================================================================

export const ENTREPRISE = {
  nom: 'A.S.H Paysage & Multiservices',
  court: 'A.S.H Paysage',
  dirigeant: 'Aurélien Saint-Hilaire',
  slogan: 'Paysage & Multiservices',
  ville: 'Brétigny-sur-Orge',
  codePostal: '91220',
  departement: 'Essonne',
  creation: 2024,
  siret: '930 654 116 00019',
  // PROVISOIRE (decision de Nicolas, 2026-10-03) : numero bouche-trou
  // pour l'apercu, a remplacer par son vrai numero AVANT toute mise en
  // ligne. Le build refuse le mode PROD tant qu'il reste celui-ci.
  tel: '07 77 77 77 77',
  telLien: '+33777777777',
  email: '',
  url: 'https://ash-paysage.fr/', // domaine a choisir avec lui
  horaires: [
    ['Lundi au vendredi', '8 h – 19 h'],
    ['Samedi', '8 h – 18 h'],
    ['Dimanche', 'Fermé'],
  ],
  horairesSchema: [
    { jours: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], de: '08:00', a: '19:00' },
    { jours: ['Saturday'], de: '08:00', a: '18:00' },
  ],
  diplomes: ['Bac professionnel Aménagements paysagers', 'Certificat de spécialisation Maçonnerie paysagère'],
};

export const ZONE = [
  'Brétigny-sur-Orge', 'Saint-Michel-sur-Orge', 'Le Plessis-Pâté', 'Leuville-sur-Orge',
  'Marolles-en-Hurepoix', 'Saint-Germain-lès-Arpajon', 'Arpajon', 'La Norville',
  'Longpont-sur-Orge', 'Sainte-Geneviève-des-Bois', 'Villiers-sur-Orge', 'Linas',
  'Montlhéry', 'Morsang-sur-Orge', 'Fleury-Mérogis', 'Cheptainville', 'Guibeville',
  'Ollainville', 'Courson-Monteloup', 'Saint-Vrain',
];

/* Les prestations, regroupees comme on les cherche sur Google.
   Chaque groupe est une page : c'est ce qui permet de sortir sur
   « entretien de jardin Bretigny » comme sur « pose de cloture Essonne ». */
export const SERVICES = [
  {
    slug: 'entretien-de-jardin',
    nom: 'Entretien de jardin',
    court: 'Entretien de jardin',
    icone: 'feuille',
    carte: 'Tonte, taille de haies, débroussaillage, élagage, désherbage et ramassage des déchets verts.',
    titre: 'Entretien de jardin à Brétigny-sur-Orge — Tonte, taille de haies',
    description: 'Entretien de jardin à Brétigny-sur-Orge et en Essonne : tonte, taille de haies et d’arbustes, débroussaillage, élagage, bêchage. Réalisation sur devis.',
    h1: 'Entretien de jardin à Brétigny-sur-Orge',
    chapo: 'Une pelouse nette, des haies taillées droites, des massifs propres : votre jardin entretenu toute l’année, sans y passer vos week-ends.',
    photo: 'taille-arbuste-cisailles',
    galerie: ['reel-taille-de-haie', 'tonte-pelouse', 'debroussaillage-jardin', 'taille-haie-haute'],
    sections: [
      { h: 'Ce que nous faisons', li: ['Tonte de pelouse et finitions des bordures', 'Taille de haies et d’arbustes, en hauteur comme en partie basse', 'Débroussaillage des terrains et des zones envahies', 'Élagage et coupe de branches', 'Bêchage, désherbage et entretien des massifs', 'Ramassage et évacuation des déchets verts'] },
      { h: 'Ponctuel ou régulier', p: ['Un grand nettoyage avant l’été, une remise en état après des mois sans entretien, ou un passage régulier pour garder le jardin propre toute l’année : nous adaptons la fréquence à votre jardin et à votre budget. Chaque prestation est réalisée sur devis.'] },
      { h: 'Le bon geste au bon moment', p: ['Une haie se taille au bon moment pour repartir dense, une pelouse se tond à la bonne hauteur pour rester verte l’été, un arbuste se rabat sans l’abîmer. Diplômé en aménagements paysagers, Aurélien connaît les végétaux et leur rythme : votre jardin est entretenu, pas seulement coupé.'] },
      { h: 'Contre les chenilles processionnaires', p: ['Les chenilles processionnaires du pin et du chêne sont fréquentes en Essonne et dangereuses pour les enfants et les animaux. Nous posons des écopièges autour du tronc, qui capturent les chenilles lors de leur descente, sans produit chimique.'] },
    ],
    faq: [
      { q: 'Faut-il être présent pendant l’intervention ?', a: 'Pas forcément. Si le jardin est accessible, nous pouvons intervenir en votre absence, après avoir convenu ensemble du travail à faire.' },
      { q: 'Les déchets verts sont-ils évacués ?', a: 'Oui, nous pouvons ramasser et évacuer les déchets verts : précisez-le lors de la demande de devis.' },
      { q: 'Quand tailler une haie ?', a: 'En général à la fin de l’hiver et à la fin de l’été, en évitant la période de nidification des oiseaux au printemps. Nous vous conseillons selon les espèces de votre haie.' },
    ],
  },
  {
    slug: 'amenagement-paysager',
    nom: 'Aménagement paysager',
    court: 'Aménagement paysager',
    icone: 'arbre',
    carte: 'Création de jardin, gazon naturel ou synthétique, plantations, allées et pas japonais, arrosage automatique.',
    titre: 'Paysagiste à Brétigny-sur-Orge — Aménagement de jardin',
    description: 'Paysagiste à Brétigny-sur-Orge : aménagement de jardin, gazon naturel ou synthétique, plantations, pas japonais, arrosage automatique, maçonnerie paysagère.',
    h1: 'Aménagement paysager à Brétigny-sur-Orge',
    chapo: 'Un jardin pensé pour vous : où passer, où s’asseoir, quoi planter. Nous créons ou transformons votre extérieur, de la terre au dernier pas japonais.',
    photo: 'amenagement-paysager-jardin',
    galerie: ['reel-pas-japonais-imitation-pierre', 'reel-arrosage-automatique', 'pose-gazon-en-rouleau', 'allee-pas-japonais-jardin'],
    sections: [
      { h: 'Nos aménagements', li: ['Création et réaménagement de jardin', 'Pose de gazon en rouleau ou semé, et de gazon synthétique', 'Plantation d’arbres, d’arbustes et de massifs', 'Allées, bordures et pas japonais (pierre ou imitation pierre)', 'Installation d’arrosage automatique enterré', 'Bêchage et préparation du sol'] },
      { h: 'Un paysagiste diplômé', p: ['Aurélien est titulaire d’un bac professionnel Aménagements paysagers et d’un certificat de spécialisation en maçonnerie paysagère. Concrètement, ça veut dire un jardin qui tient dans le temps : des végétaux adaptés à votre sol et à l’exposition, des allées posées sur une vraie fondation, un arrosage dimensionné pour votre terrain.'] },
      { h: 'L’arrosage automatique', p: ['Un réseau enterré, des arroseurs placés au bon endroit et un programmateur réglé selon la saison : votre jardin reste vert l’été, même pendant vos vacances, et vous arrêtez de tirer le tuyau tous les soirs. Nous creusons, posons et raccordons l’installation, puis nous refermons proprement.'] },
      { h: 'Gazon naturel ou synthétique ?', p: ['Le gazon naturel est vivant et frais, mais demande tonte et arrosage. Le gazon synthétique reste vert toute l’année sans entretien, idéal pour les petites surfaces, les zones à l’ombre ou les terrasses. Nous posons les deux et vous conseillons selon l’usage de votre jardin.'] },
    ],
    faq: [
      { q: 'Pouvez-vous aménager une partie du jardin seulement ?', a: 'Oui : une allée, un massif, une zone de gazon ou un coin terrasse. Pas besoin de tout refaire.' },
      { q: 'L’arrosage automatique abîme-t-il la pelouse existante ?', a: 'Les tranchées sont étroites et refermées proprement. La pelouse reprend en quelques semaines.' },
      { q: 'Proposez-vous la maçonnerie paysagère ?', a: 'Oui : bordures, seuils, petits murets et fondations d’allées. Aurélien est titulaire d’un certificat de spécialisation en maçonnerie paysagère.' },
    ],
  },
  {
    slug: 'cloture-portail',
    nom: 'Clôture & portail',
    court: 'Clôture & portail',
    icone: 'cloture',
    carte: 'Pose de clôtures et de grillages, lames d’occultation, portails et seuils maçonnés.',
    titre: 'Pose de clôture et de portail à Brétigny-sur-Orge',
    description: 'Pose de clôture, grillage, lames d’occultation et portail à Brétigny-sur-Orge et en Essonne. Seuils de portail maçonnés. Réalisation sur devis.',
    h1: 'Pose de clôture et de portail à Brétigny-sur-Orge',
    chapo: 'Fermer son terrain, se protéger des regards, sécuriser l’accès : nous posons votre clôture et votre portail, fondations comprises.',
    photo: 'reel-cloture-occultation-bois',
    galerie: ['reel-cloture-occultation-bois', 'reel-seuil-de-portail'],
    sections: [
      { h: 'Nos poses', li: ['Clôture rigide et grillage', 'Lames d’occultation (imitation bois, composite…) pour un jardin à l’abri des regards', 'Portails et portillons', 'Seuils de portail maçonnés', 'Fondations et scellement des poteaux'] },
      { h: 'Ce qui fait une clôture qui dure', p: ['Une clôture tient grâce à ce qu’on ne voit pas : des poteaux scellés au bon espacement, dans des fondations adaptées au terrain, alignés au cordeau. C’est là que la formation en maçonnerie paysagère fait la différence. Et pour un portail, un seuil maçonné de niveau évite qu’il frotte ou se décale avec le temps.'] },
      { h: 'Avant de poser', p: ['Selon votre commune, une clôture peut nécessiter une déclaration préalable en mairie et respecter une hauteur maximale. Nous vous indiquons les points à vérifier avant le chantier.'] },
    ],
    faq: [
      { q: 'Faut-il une autorisation pour poser une clôture ?', a: 'Cela dépend de votre commune et du plan local d’urbanisme. Renseignez-vous en mairie : une déclaration préalable est souvent demandée.' },
      { q: 'Fournissez-vous le matériel ?', a: 'Nous pouvons fournir et poser, ou poser le matériel que vous avez déjà acheté. Précisez-le lors de votre demande.' },
    ],
  },
  {
    slug: 'terrasse-pergola-abri',
    nom: 'Terrasse, pergola & abri',
    court: 'Terrasse & pergola',
    icone: 'pergola',
    carte: 'Montage de pergolas et d’abris de jardin, nettoyage de terrasse, entretien de piscine.',
    titre: 'Pergola, abri de jardin et terrasse à Brétigny-sur-Orge',
    description: 'Montage de pergola bioclimatique et d’abri de jardin, nettoyage de terrasse et entretien de piscine à Brétigny-sur-Orge et en Essonne.',
    h1: 'Terrasse, pergola et abri de jardin à Brétigny-sur-Orge',
    chapo: 'Profiter de son extérieur, c’est aussi une pergola pour l’ombre, un abri pour ranger et une terrasse propre. Nous montons, installons et entretenons.',
    photo: 'reel-pergola-bioclimatique',
    galerie: ['reel-pergola-bioclimatique', 'reel-montage-abri-de-jardin', 'pergola-jardin'],
    sections: [
      { h: 'Nos prestations', li: ['Montage de pergolas, y compris bioclimatiques à lames orientables électriques avec éclairage intégré', 'Montage d’abris de jardin en kit, avec préparation de la dalle ou du sol', 'Nettoyage de terrasses et de dallages', 'Entretien de piscine : nettoyage, filtre, pompe'] },
      { h: 'Une pergola montée dans les règles', p: ['Une pergola bioclimatique est un vrai ouvrage : ancrage au sol, mise de niveau, raccordement des lames motorisées et de l’éclairage. Nous la montons proprement, réglée pour que les lames s’ouvrent et se ferment sans forcer, et que l’eau s’écoule par où elle doit.'] },
      { h: 'Un abri qui reste d’aplomb', p: ['Un abri de jardin en kit se monte en une journée, mais il ne reste droit que s’il repose sur une base plane et stable. Nous préparons le sol avant le montage, pour des portes qui ferment encore dans cinq ans.'] },
    ],
    faq: [
      { q: 'Montez-vous les pergolas achetées en magasin ?', a: 'Oui, nous montons les pergolas et abris en kit que vous avez achetés, y compris les modèles bioclimatiques motorisés.' },
      { q: 'Combien de temps pour monter un abri de jardin ?', a: 'Généralement une journée pour un abri standard, plus la préparation du sol si elle est nécessaire.' },
    ],
  },
  {
    slug: 'multiservices',
    nom: 'Multiservices',
    court: 'Multiservices',
    icone: 'outils',
    carte: 'Petits travaux, montage de meubles et de cuisines en kit, pose de sol, carrelage, peinture, petite plomberie.',
    titre: 'Multiservices et petits travaux à Brétigny-sur-Orge',
    description: 'Petits travaux à Brétigny-sur-Orge : montage de meubles et de cuisines en kit, pose de sol et de parquet, carrelage, peinture, petite plomberie.',
    h1: 'Multiservices et petits travaux à Brétigny-sur-Orge',
    chapo: 'Les travaux qu’on repousse depuis des mois : une cuisine à monter, un sol à poser, un mur à repeindre. Un seul artisan pour l’intérieur comme pour l’extérieur.',
    photo: 'outils-multiservices',
    galerie: ['reel-peinture-decorative-murale', 'outils-multiservices'],
    sections: [
      { h: 'Ce que nous faisons', li: ['Montage de meubles en kit et de meubles de cuisine, découpe de plan de travail', 'Pose et dépose de parquet et de revêtements de sol', 'Pose de carrelage', 'Peinture, y compris peinture décorative murale', 'Petite plomberie et réparations courantes', 'Petits travaux de menuiserie et d’électricité courante'] },
      { h: 'Un seul interlocuteur', p: ['Plutôt que d’appeler trois artisans pour trois petits chantiers, vous avez un seul interlocuteur qui s’occupe de tout. Aurélien aime le travail manuel et soigné, à l’intérieur comme à l’extérieur, et dispose de tout le matériel professionnel nécessaire.'] },
    ],
    faq: [
      { q: 'Vous déplacez-vous pour un petit travail ?', a: 'Oui. Décrivez-nous le travail dans le formulaire, nous vous répondons avec un devis.' },
      { q: 'Montez-vous les cuisines achetées en grande surface ?', a: 'Oui, nous montons les meubles et cuisines en kit, avec la découpe du plan de travail.' },
    ],
  },
];

/* Ses realisations, telles qu'il les decrit sur son profil. */
export const REALISATIONS = [
  { photo: 'reel-pergola-bioclimatique', titre: 'Pergola bioclimatique à lames électriques et éclairage intégré', type: 'Terrasse & pergola' },
  { photo: 'reel-cloture-occultation-bois', titre: 'Clôture avec lames d’occultation imitation bois', type: 'Clôture & portail' },
  { photo: 'reel-pas-japonais-imitation-pierre', titre: 'Pose de pas japonais imitation pierre', type: 'Aménagement paysager' },
  { photo: 'reel-arrosage-automatique', titre: 'Installation d’arrosage automatique', type: 'Aménagement paysager' },
  { photo: 'reel-montage-abri-de-jardin', titre: 'Montage d’abri de jardin', type: 'Terrasse & abri' },
  { photo: 'reel-seuil-de-portail', titre: 'Création d’un seuil de portail', type: 'Maçonnerie paysagère' },
  { photo: 'reel-taille-de-haie', titre: 'Taille d’une haie en partie basse', type: 'Entretien de jardin' },
  { photo: 'reel-eco-piege-chenilles-processionnaires', titre: 'Écopiège à chenilles processionnaires', type: 'Entretien de jardin' },
  { photo: 'reel-peinture-decorative-murale', titre: 'Peinture décorative murale', type: 'Multiservices' },
];

export const FAQ = [
  { q: 'Dans quelles communes intervenez-vous ?', a: 'Nous sommes basés à Brétigny-sur-Orge et intervenons dans les communes voisines de l’Essonne : Saint-Michel-sur-Orge, Le Plessis-Pâté, Leuville-sur-Orge, Marolles-en-Hurepoix, Arpajon, Sainte-Geneviève-des-Bois, Linas, Montlhéry…' },
  { q: 'Comment obtenir un devis ?', a: 'Remplissez le formulaire en décrivant votre projet, avec des photos si possible. Nous vous recontactons rapidement pour convenir d’une visite et établir le devis.' },
  { q: 'Êtes-vous un professionnel déclaré ?', a: 'Oui. A.S.H Paysage & Multiservices est une entreprise immatriculée (SIRET 930 654 116 00019), dirigée par Aurélien Saint-Hilaire, diplômé en aménagements paysagers.' },
  { q: 'Quels sont vos horaires ?', a: 'Du lundi au vendredi de 8 h à 19 h, et le samedi de 8 h à 18 h.' },
  { q: 'Faites-vous aussi des travaux à l’intérieur ?', a: 'Oui, c’est la partie multiservices : montage de meubles et de cuisines, pose de sol, carrelage, peinture et petite plomberie.' },
];
