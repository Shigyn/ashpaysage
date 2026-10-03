// ===================================================================
//  A.S.H Paysage & Multiservices — generateur du site (LocWeb, 2026-10-03)
//     node build.mjs          -> apercu (noindex)
//     PROD=1 node build.mjs   -> mise en ligne
//  Pages : accueil, 5 pages prestations, realisations, zone, contact,
//  mentions legales, confidentialite. Liens relatifs : le site marche
//  sous github.io comme sur son futur domaine.
// ===================================================================
import fs from 'node:fs';
import path from 'node:path';
import { ENTREPRISE as E, ZONE, SERVICES, REALISATIONS, FAQ } from './_source/contenu.mjs';

const ICI = path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Z]:)/, '$1');
const PROD = process.env.PROD === '1';
const PHOTOS = JSON.parse(fs.readFileSync(path.join(ICI, '_source', 'photos.json'), 'utf8'));
const V = '1';
if (PROD && /^07 77 77 77 77$/.test(E.tel)) throw new Error('Numero provisoire : renseigner le vrai numero avant la mise en ligne.');

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (ch) => E.url + ch;

function img(r, nom, alt, { eager = false, sizes = '(min-width: 900px) 50vw, 100vw', cls = '' } = {}) {
  const p = PHOTOS[nom];
  if (!p) throw new Error('photo inconnue : ' + nom);
  return `<img${cls ? ` class="${cls}"` : ''} src="${r}photos/${nom}-800.webp" srcset="${r}photos/${nom}-800.webp 800w, ${r}photos/${nom}-1600.webp ${p.l}w" sizes="${sizes}" alt="${esc(alt)}" width="${p.l}" height="${p.h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

const ICONES = {
  tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/></svg>',
  devis: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 7V3.5L18.5 9zM8 13h8v2H8zm0 4h5v2H8z"/></svg>',
  fleche: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 5.3 19.9 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  horloge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.6 2.1-1 1.7L11 13V6h2z"/></svg>',
  diplome: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.9V17h2V9zm-6.5 9.3V16c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-3.7L12 16z"/></svg>',
  materiel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 18.6 13.5 10.4a5.5 5.5 0 0 0-7.2-7.1L9.9 7 7 9.9 3.3 6.3a5.5 5.5 0 0 0 7.1 7.2l8.2 8.2a1.1 1.1 0 0 0 1.6 0l1.5-1.5a1.1 1.1 0 0 0 0-1.6z"/></svg>',
  eclair: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  feuille: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3S8 2.5 5 9.5C3.2 13.6 5 17 5 17L3 21h2l1.6-2.6C13 20 19.6 15.2 20 3zM7.8 15.9C9.4 11.6 13 8.6 16.5 7.2 13.3 9 10.6 12 9.3 16.3z"/></svg>',
  arbre: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a6 6 0 0 0-5.8 7.6A5 5 0 0 0 8 19h3v3h2v-3h3a5 5 0 0 0 1.8-9.4A6 6 0 0 0 12 2z"/></svg>',
  cloture: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4 2 7v14h4V7zm7 0L9 7v14h4V7zm7 0-2 3v14h4V7zM6 10h3v2H6zm0 5h3v2H6zm7-5h3v2h-3zm0 5h3v2h-3z"/></svg>',
  pergola: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5h20v3H2zm2 4h2v12H4zm14 0h2v12h-2zM7 9h10v2H7z"/></svg>',
  outils: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.6 3.4 2 2-1.4 1.4-2-2zM3 17.6 12.6 8l3.4 3.4L6.4 21H3zm15.5-5.7 2.1 2.1a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0l-2.1-2.1z"/></svg>',
};
const ic = (n) => `<span class="ic">${ICONES[n]}</span>`;

/* Le bouton principal : appeler s'il y a un numero, sinon le devis. */
const boutonAppel = (r, cls = 'bouton bouton-vert') => E.tel
  ? `<a class="${cls}" href="tel:${E.telLien}">${ICONES.tel} ${E.tel}</a>`
  : `<a class="${cls}" href="${r}contact/#devis">${ICONES.devis} Demander un devis</a>`;

/* ---------------- donnees structurees ---------------- */
const ENTITE = {
  '@type': 'LandscapingBusiness',
  '@id': E.url + '#entreprise',
  name: E.nom,
  url: E.url,
  logo: E.url + 'photos/logo-ash.png',
  image: E.url + 'photos/jardinier-paysagiste-bretigny-1600.webp',
  founder: { '@type': 'Person', name: E.dirigeant },
  foundingDate: '2024-06',
  ...(E.tel ? { telephone: E.tel } : {}),
  ...(E.email ? { email: E.email } : {}),
  address: { '@type': 'PostalAddress', addressLocality: E.ville, postalCode: E.codePostal, addressRegion: 'Île-de-France', addressCountry: 'FR' },
  areaServed: ZONE.map((v) => ({ '@type': 'City', name: v })),
  openingHoursSpecification: E.horairesSchema.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.jours, opens: h.de, closes: h.a })),
  makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.nom, url: abs(s.slug + '/') } })),
};
const fil = (etapes) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [['Accueil', ''], ...etapes].map(([n, ch], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(ch) })),
});
const faqSchema = (l) => ({ '@type': 'FAQPage', mainEntity: l.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) });

/* ---------------- gabarit commun ---------------- */
function page(chemin, { titre, description, corps, schemas = [], ariane = null, image = 'jardinier-paysagiste-bretigny', classe = '' }) {
  const r = '../'.repeat(chemin.split('/').filter(Boolean).length);
  const titreComplet = chemin === '' || titre.length > 46 ? titre : `${titre} | ${E.court}`;
  const actif = (ch) => (chemin === ch ? ' aria-current="page"' : '');
  const sousMenu = SERVICES.map((s) => `<a href="${r}${s.slug}/">${ic(s.icone)}${esc(s.court)}</a>`).join('');
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
<title>${esc(titreComplet)}</title>
<meta name="description" content="${esc(description)}">
${PROD ? '' : '<meta name="robots" content="noindex,nofollow">\n'}<link rel="canonical" href="${abs(chemin)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="${esc(E.nom)}">
<meta property="og:title" content="${esc(titreComplet)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${E.url}photos/${image}-1600.webp">
<meta name="theme-color" content="#2f5713">
<link rel="icon" href="${r}photos/logo-picto.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${r}assets/style.css?v=${V}">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [ENTITE, ...schemas] })}</script>
</head>
<body class="${classe}">
<a class="evitement" href="#contenu">Aller au contenu</a>

<header class="entete" data-entete>
  <div class="entete-in">
    <a class="marque" href="${r || './'}" aria-label="${esc(E.nom)}, accueil">
      <img src="${r}photos/logo-picto.png" alt="" width="240" height="187">
      <span><b>A.S.H</b><small>Paysage <em>&amp;</em> Multiservices</small></span>
    </a>
    <nav class="nav" aria-label="Navigation principale">
      <a href="${r || './'}"${actif('')}>Accueil</a>
      <div class="nav-deroule">
        <a href="${r}${SERVICES[0].slug}/"${SERVICES.some((s) => chemin === s.slug + '/') ? ' aria-current="page"' : ''}>Prestations</a>
        <div class="nav-sous">${sousMenu}</div>
      </div>
      <a href="${r}realisations/"${actif('realisations/')}>Réalisations</a>
      <a href="${r}zone-intervention/"${actif('zone-intervention/')}>Zone</a>
      <a href="${r}contact/"${actif('contact/')}>Contact</a>
    </nav>
    ${E.tel ? `<a class="entete-tel" href="tel:${E.telLien}">${ICONES.tel}<b>${E.tel}</b></a>` : ''}
    <a class="bouton bouton-vert entete-cta" href="${r}contact/#devis">Demander un devis</a>
    <button class="burger" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button>
  </div>
  <div class="menu-mobile" id="menu-mobile" hidden>
    <a href="${r || './'}">Accueil</a>
    <div class="menu-mobile-services">${sousMenu}</div>
    <a href="${r}realisations/">Réalisations</a>
    <a href="${r}zone-intervention/">Zone d’intervention</a>
    <a href="${r}contact/">Contact</a>
    ${boutonAppel(r)}
  </div>
</header>

<main id="contenu">
${ariane ? `<nav class="ariane" aria-label="Fil d’Ariane"><div class="cadre"><a href="${r || './'}">Accueil</a>${ariane.map(([n, ch], i) => (i === ariane.length - 1 ? `<span aria-current="page">${esc(n)}</span>` : `<a href="${r}${ch}">${esc(n)}</a>`)).join('')}</div></nav>` : ''}
${corps(r)}
</main>

<footer class="pied">
  <div class="cadre pied-haut">
    <div>
      <img class="pied-logo" src="${r}photos/logo-ash.png" alt="${esc(E.nom)}" width="978" height="843" loading="lazy">
      <p>Paysagiste et multiservices à ${E.ville}. Entretien et aménagement de jardin, clôtures, pergolas et petits travaux en Essonne.</p>
    </div>
    <div>
      <h2 class="pied-titre">Prestations</h2>
      <ul>${SERVICES.map((s) => `<li><a href="${r}${s.slug}/">${esc(s.court)}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="pied-titre">Horaires</h2>
      <ul class="pied-horaires">${E.horaires.map(([j, h]) => `<li><span>${j}</span><b>${h}</b></li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="pied-titre">Contact</h2>
      <ul>
        ${E.tel ? `<li><a href="tel:${E.telLien}">${E.tel}</a></li>` : ''}
        <li>${E.ville} (${E.codePostal})</li>
        <li><a href="${r}zone-intervention/">Communes desservies</a></li>
      </ul>
      <a class="bouton bouton-vert" href="${r}contact/#devis">Demander un devis</a>
    </div>
  </div>
  <div class="cadre pied-bas">
    <span>© ${new Date().getFullYear()} ${esc(E.nom)}</span>
    <span><a href="${r}mentions-legales/">Mentions légales</a> · <a href="${r}politique-de-confidentialite/">Confidentialité</a>${PROD ? ' · Site réalisé par <a href="https://locweb.fr" target="_blank" rel="noopener">LocWeb</a>' : ''}</span>
  </div>
</footer>

<div class="barre-mobile${E.tel ? '' : ' barre-seule'}">
  ${E.tel ? `<a href="tel:${E.telLien}">${ICONES.tel}<span>Appeler</span></a>` : ''}
  <a href="${r}contact/#devis" class="barre-devis">${ICONES.devis}<span>Demander un devis</span></a>
</div>

<script>
  window.LOCWEB_CONFIG = {
    supabaseUrl: 'https://ibqawtgnucakzdldnitj.supabase.co',
    supabaseAnonKey: 'sb_publishable_rpLrUo4Cqnfl8zSohDqO0A_Q5Vkj2Hk',
    clientId: '',
    ga4Id: ''
  };
</script>
<script src="${r}contenu-loader.js" defer></script>
<script src="${r}leads-form.js" defer></script>
<script src="${r}mesure.js" defer></script>
<script src="${r}assets/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

/* ---------------- blocs ---------------- */
const carteService = (r, s) => `
<a class="carte-service reveler" href="${r}${s.slug}/">
  <span class="carte-photo">${img(r, s.photo, s.nom, { sizes: '(min-width: 1100px) 380px, (min-width: 700px) 45vw, 100vw' })}</span>
  <span class="carte-corps">${ic(s.icone)}<b>${esc(s.nom)}</b><span>${esc(s.carte)}</span><span class="lien-fleche">Découvrir ${ICONES.fleche}</span></span>
</a>`;

const formulaire = (id, titre = 'Demandez votre devis') => `
<form class="devis" id="${id}" data-devis novalidate>
  <h2>${titre}</h2>
  <p class="devis-intro">Décrivez votre projet, nous vous recontactons rapidement.</p>
  <label><span>Nom et prénom</span><input name="nom" autocomplete="name" required></label>
  <label><span>Téléphone</span><input name="telephone" type="tel" autocomplete="tel" inputmode="tel" required></label>
  <label><span>Commune</span><input name="ville" autocomplete="address-level2" placeholder="Brétigny-sur-Orge, Arpajon…"></label>
  <label><span>Prestation</span>
    <select name="besoin"><option value="">Choisir…</option>${SERVICES.map((s) => `<option>${esc(s.court)}</option>`).join('')}<option>Autre</option></select>
  </label>
  <label><span>Votre projet</span><textarea name="message" rows="3" placeholder="Ex. : taille d’une haie de 20 m, pose d’une clôture…"></textarea></label>
  <button class="bouton bouton-vert" type="submit">Envoyer ma demande ${ICONES.fleche}</button>
  <p class="devis-note" data-note hidden></p>
</form>`;

const atouts = () => `
<div class="atouts">
  <div>${ic('diplome')}<p><b>Paysagiste diplômé</b><span>Bac pro aménagements paysagers</span></p></div>
  <div>${ic('materiel')}<p><b>Matériel professionnel</b><span>Tout l’équipement pour vos travaux</span></p></div>
  <div>${ic('eclair')}<p><b>Réponse rapide</b><span>À vos demandes de devis</span></p></div>
  <div>${ic('pin')}<p><b>Basé à ${E.ville}</b><span>Intervention en Essonne</span></p></div>
</div>`;

const faqHtml = (l) => `<div class="faq">${l.map((x, i) => `
  <details class="reveler"${i === 0 ? ' open' : ''}><summary><span>${esc(x.q)}</span><i aria-hidden="true"></i></summary><p>${esc(x.a)}</p></details>`).join('')}</div>`;

const bandeau = (r) => `
<section class="appel">
  <div class="cadre appel-in reveler">
    <div><h2>Un jardin à entretenir, un projet à lancer ?</h2><p>Parlez-nous de votre projet : nous vous recontactons rapidement avec un devis.</p></div>
    <div class="appel-actions">${E.tel ? boutonAppel(r, 'bouton bouton-blanc') : ''}<a class="bouton bouton-vert-vif" href="${r}contact/#devis">${ICONES.devis} Demander un devis</a></div>
  </div>
</section>`;

/* ===================================================================
   PAGES
   =================================================================== */
const PAGES = [];
const ajouter = (ch, o) => PAGES.push([ch, o]);

ajouter('', {
  titre: `Paysagiste à ${E.ville} — Jardin & multiservices | A.S.H`,
  description: `Paysagiste à ${E.ville} (91) : entretien et aménagement de jardin, taille de haies, clôtures, pergolas, arrosage automatique et petits travaux.`,
  schemas: [{ '@type': 'WebSite', url: E.url, name: E.nom, inLanguage: 'fr-FR' }, faqSchema(FAQ)],
  classe: 'accueil',
  corps: (r) => `
<section class="hero">
  <div class="hero-fond" data-parallaxe>${img(r, 'jardinier-paysagiste-bretigny', 'Jardinier paysagiste au travail dans un jardin', { eager: true, sizes: '100vw' })}</div>
  <div class="cadre hero-in">
    <p class="surtitre hero-anim">${ICONES.pin} ${E.ville} · Essonne</p>
    <h1 class="hero-anim">Paysagiste à ${E.ville}</h1>
    <p class="hero-sous hero-anim">Entretien et aménagement de jardin, clôtures, pergolas<br>et petits travaux : un seul artisan pour votre extérieur et votre maison.</p>
    <div class="hero-actions hero-anim">
      <a class="bouton bouton-vert-vif" href="${r}contact/#devis">${ICONES.devis} Demander un devis</a>
      ${E.tel ? boutonAppel(r, 'bouton bouton-blanc') : `<a class="bouton bouton-blanc" href="${r}realisations/">Voir nos réalisations</a>`}
    </div>
  </div>
</section>

<div class="cadre">${atouts()}</div>

<section class="section">
  <div class="cadre">
    <div class="tete-section reveler">
      <p class="surtitre">Nos prestations</p>
      <h2>Du jardin à la maison, <em>tout ce qu’il faut</em></h2>
    </div>
    <div class="grille-services">${SERVICES.map((s) => carteService(r, s)).join('')}
      <a class="carte-devis reveler" href="${r}contact/#devis"><b>Un autre projet ?</b><span>Décrivez-le-nous, on vous dit ce qu’on peut faire.</span><span class="lien-fleche">Demander un devis ${ICONES.fleche}</span></a>
    </div>
  </div>
</section>

<section class="section section-claire">
  <div class="cadre presentation">
    <figure class="presentation-photo reveler">${img(r, 'reel-pergola-bioclimatique', 'Pergola bioclimatique montée par A.S.H Paysage & Multiservices', { sizes: '(min-width: 900px) 40vw, 100vw' })}<figcaption>Une de nos réalisations : pergola bioclimatique</figcaption></figure>
    <div class="presentation-texte reveler">
      <p class="surtitre">Qui sommes-nous</p>
      <h2>Un jeune paysagiste, le goût du travail bien fait</h2>
      <p>A.S.H Paysage &amp; Multiservices, c’est ${E.dirigeant}, paysagiste diplômé installé à ${E.ville}. Titulaire d’un bac professionnel Aménagements paysagers et d’un certificat de spécialisation en maçonnerie paysagère, il a créé son entreprise en ${E.creation} pour proposer un service complet : le jardin, bien sûr, mais aussi les petits travaux de la maison.</p>
      <p>Il aime tout ce qui est manuel et créatif, à l’extérieur comme à l’intérieur, et dispose de tout le matériel professionnel pour mener vos projets avec soin et souci du détail.</p>
      <ul class="liste-coche">${E.diplomes.map((d) => `<li>${d}</li>`).join('')}<li>Entreprise immatriculée, SIRET ${E.siret}</li></ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="cadre">
    <div class="tete-section tete-ligne reveler">
      <div><p class="surtitre">Nos chantiers</p><h2>Quelques <em>réalisations</em></h2></div>
      <a class="lien-fleche" href="${r}realisations/">Toutes les réalisations ${ICONES.fleche}</a>
    </div>
    <div class="grille-realisations">${REALISATIONS.slice(1, 7).map((x) => `
      <figure class="realisation reveler"><span class="realisation-photo">${img(r, x.photo, x.titre, { sizes: '(min-width: 900px) 33vw, 50vw' })}</span><figcaption><b>${esc(x.titre)}</b><span>${esc(x.type)}</span></figcaption></figure>`).join('')}
    </div>
  </div>
</section>

<section class="section section-sombre">
  <div class="cadre">
    <div class="tete-section tete-centree reveler"><p class="surtitre">Comment ça se passe</p><h2>Trois étapes, simplement</h2></div>
    <ol class="etapes">
      <li class="reveler"><b>Vous décrivez votre projet</b><span>Par le formulaire, avec quelques photos si possible. Nous vous recontactons rapidement.</span></li>
      <li class="reveler"><b>Nous passons voir</b><span>Une visite sur place pour comprendre ce que vous voulez et vous établir un devis clair.</span></li>
      <li class="reveler"><b>Nous réalisons</b><span>À la date convenue, avec le matériel adapté, et le chantier laissé propre.</span></li>
    </ol>
  </div>
</section>

<section class="section section-claire" id="devis-accueil">
  <div class="cadre contact">
    <div class="contact-infos reveler">
      <p class="surtitre">Contact</p>
      <h2>Parlons de votre projet</h2>
      <p class="contact-ligne">${ICONES.pin}<span>Basé à ${E.ville} (${E.codePostal}), intervention dans les communes voisines</span></p>
      <div class="contact-ligne contact-horaires">${ICONES.horloge}<ul>${E.horaires.map(([j, h]) => `<li><span>${j}</span><b>${h}</b></li>`).join('')}</ul></div>
      <p class="zone-courte">${ZONE.slice(0, 12).join(' · ')}… <a href="${r}zone-intervention/">toutes les communes</a></p>
    </div>
    <div class="devis-carte reveler">${formulaire('quick-form')}</div>
  </div>
</section>

<section class="section">
  <div class="cadre etroit">
    <div class="tete-section tete-centree reveler"><h2>Questions fréquentes</h2></div>
    ${faqHtml(FAQ)}
  </div>
</section>`,
});

for (const s of SERVICES) {
  const ch = s.slug + '/';
  const autres = SERVICES.filter((x) => x !== s);
  ajouter(ch, {
    titre: s.titre,
    description: s.description,
    image: s.photo,
    ariane: [[s.court, ch]],
    schemas: [
      fil([[s.court, ch]]),
      { '@type': 'Service', name: s.nom, description: s.description, url: abs(ch), provider: { '@id': E.url + '#entreprise' }, areaServed: { '@type': 'City', name: E.ville } },
      faqSchema(s.faq),
    ],
    corps: (r) => `
<section class="tete-service">
  <div class="cadre tete-service-in">
    <div class="reveler">
      <p class="surtitre">${ic(s.icone)} ${esc(s.court)}</p>
      <h1>${esc(s.h1)}</h1>
      <p class="chapo">${esc(s.chapo)}</p>
      <div class="hero-actions"><a class="bouton bouton-vert-vif" href="#devis">${ICONES.devis} Demander un devis</a>${E.tel ? boutonAppel(r, 'bouton bouton-blanc') : ''}</div>
    </div>
    <figure class="tete-service-photo reveler">${img(r, s.photo, s.h1, { eager: true, sizes: '(min-width: 900px) 45vw, 100vw' })}</figure>
  </div>
</section>

<div class="cadre">${atouts()}</div>

<div class="cadre article-service">
  <article class="texte-riche">
    ${s.sections.map((sec) => `
    <section class="reveler">
      <h2>${esc(sec.h)}</h2>
      ${(sec.p || []).map((p) => `<p>${esc(p)}</p>`).join('')}
      ${sec.li ? `<ul class="liste-coche">${sec.li.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
    </section>`).join('')}
    <section class="reveler">
      <h2>En images</h2>
      <div class="galerie">${s.galerie.map((g) => `<figure>${img(r, g, `${s.nom} — ${E.court}`, { sizes: '(min-width: 900px) 25vw, 50vw' })}</figure>`).join('')}</div>
    </section>
    <section class="reveler"><h2>Vos questions</h2>${faqHtml(s.faq)}</section>
    <section class="reveler"><h2>Où intervenons-nous ?</h2><p>Basés à ${E.ville}, nous intervenons en Essonne : ${ZONE.slice(1, 11).join(', ')} et les communes voisines. <a href="${r}zone-intervention/">Voir toutes les communes</a>.</p></section>
  </article>
  <aside class="cote">
    <div class="cote-collant">
      <div class="devis-carte" id="devis">${formulaire('quick-form', 'Votre devis')}</div>
      <nav class="cote-services" aria-label="Nos autres prestations"><h2>Autres prestations</h2>${autres.map((x) => `<a href="${r}${x.slug}/">${ic(x.icone)}${esc(x.court)}</a>`).join('')}</nav>
    </div>
  </aside>
</div>
${bandeau(r)}`,
  });
}

ajouter('realisations/', {
  titre: `Réalisations — Paysagiste à ${E.ville}`,
  description: `Les chantiers d’A.S.H Paysage & Multiservices à ${E.ville} et en Essonne : pergola, clôture, pas japonais, arrosage automatique, abri de jardin.`,
  ariane: [['Réalisations', 'realisations/']],
  schemas: [fil([['Réalisations', 'realisations/']])],
  corps: (r) => `
<section class="tete-page"><div class="cadre"><h1>Nos réalisations</h1><p>Des photos de nos propres chantiers, en Essonne. Pergolas, clôtures, allées, arrosage, abris : voici ce que nous faisons, concrètement.</p></div></section>
<section class="section"><div class="cadre grille-realisations">${REALISATIONS.map((x) => `
  <figure class="realisation reveler"><span class="realisation-photo">${img(r, x.photo, x.titre, { sizes: '(min-width: 900px) 33vw, 50vw' })}</span><figcaption><b>${esc(x.titre)}</b><span>${esc(x.type)}</span></figcaption></figure>`).join('')}
</div></section>
${bandeau(r)}`,
});

ajouter('zone-intervention/', {
  titre: `Zone d’intervention — Paysagiste en Essonne`,
  description: `Basé à ${E.ville}, A.S.H Paysage intervient en Essonne : Saint-Michel-sur-Orge, Le Plessis-Pâté, Arpajon, Marolles-en-Hurepoix, Linas, Montlhéry…`,
  ariane: [['Zone d’intervention', 'zone-intervention/']],
  schemas: [fil([['Zone d’intervention', 'zone-intervention/']])],
  corps: (r) => `
<section class="tete-page"><div class="cadre"><h1>Paysagiste à ${E.ville} et en Essonne</h1><p>Basés à ${E.ville}, nous intervenons dans les communes voisines pour l’entretien et l’aménagement de votre jardin et vos petits travaux.</p></div></section>
<section class="section"><div class="cadre etroit texte-riche">
  <h2 class="reveler">Les communes où nous intervenons</h2>
  <ul class="communes reveler">${ZONE.map((v) => `<li>${ICONES.pin}${esc(v)}</li>`).join('')}</ul>
  <p class="reveler">Votre commune n’est pas dans la liste ? <a href="${r}contact/#devis">Envoyez-nous votre demande</a> : selon la distance et le chantier, nous pouvons sûrement venir.</p>
</div></section>
${bandeau(r)}`,
});

ajouter('contact/', {
  titre: `Contact et devis — Paysagiste à ${E.ville}`,
  description: `Contactez A.S.H Paysage & Multiservices à ${E.ville} pour votre jardin ou vos petits travaux : décrivez votre projet, nous vous recontactons rapidement.`,
  ariane: [['Contact', 'contact/']],
  schemas: [fil([['Contact', 'contact/']])],
  corps: () => `
<section class="tete-page"><div class="cadre"><h1>Contact et devis</h1><p>Décrivez votre projet, avec des photos si possible : nous vous recontactons rapidement pour convenir d’une visite.</p></div></section>
<section class="section"><div class="cadre contact">
  <div class="contact-infos reveler">
    ${E.tel ? `<a class="contact-tel" href="tel:${E.telLien}">${ICONES.tel}<span><small>Appel direct</small><b>${E.tel}</b></span></a>` : ''}
    <p class="contact-ligne">${ICONES.pin}<span>${E.ville} (${E.codePostal}) et communes voisines</span></p>
    <div class="contact-ligne contact-horaires">${ICONES.horloge}<ul>${E.horaires.map(([j, h]) => `<li><span>${j}</span><b>${h}</b></li>`).join('')}</ul></div>
  </div>
  <div class="devis-carte reveler" id="devis">${formulaire('contact-form')}</div>
</div></section>`,
});

ajouter('mentions-legales/', {
  titre: 'Mentions légales',
  description: `Mentions légales du site ${E.nom}.`,
  ariane: [['Mentions légales', 'mentions-legales/']],
  corps: () => `
<section class="tete-page"><div class="cadre"><h1>Mentions légales</h1></div></section>
<section class="section"><div class="cadre etroit texte-riche">
  <h2>Éditeur du site</h2>
  <p>${esc(E.nom)} — ${E.dirigeant}, entrepreneur individuel<br>${E.ville} (${E.codePostal})<br>SIRET : ${E.siret}</p>
  <p>Directeur de la publication : ${E.dirigeant}</p>
  <h2>Hébergement</h2><p>[À compléter à la mise en ligne]</p>
  <h2>Crédits photos</h2><p>Photos de réalisations : ${esc(E.nom)}. Autres visuels : Unsplash (licence libre).</p>
</div></section>`,
});

ajouter('politique-de-confidentialite/', {
  titre: 'Politique de confidentialité',
  description: `Comment ${E.nom} traite les données transmises via son site.`,
  ariane: [['Confidentialité', 'politique-de-confidentialite/']],
  corps: () => `
<section class="tete-page"><div class="cadre"><h1>Politique de confidentialité</h1></div></section>
<section class="section"><div class="cadre etroit texte-riche">
  <h2>Les données recueillies</h2><p>Le formulaire de devis recueille votre nom, votre téléphone, votre commune et la description de votre projet, uniquement pour vous recontacter et établir un devis.</p>
  <h2>Conservation</h2><p>Ces données sont conservées le temps du traitement de votre demande, et au maximum trois ans après le dernier échange si aucun chantier n’est engagé.</p>
  <h2>Mesure d’audience</h2><p>Le site utilise Google Analytics pour mesurer sa fréquentation de façon anonymisée.</p>
  <h2>Vos droits</h2><p>Vous pouvez demander l’accès, la rectification ou la suppression de vos données à tout moment. Aucune donnée n’est vendue ni cédée à des tiers.</p>
</div></section>`,
});

for (const [ch, o] of PAGES) {
  fs.mkdirSync(path.join(ICI, ch), { recursive: true });
  fs.writeFileSync(path.join(ICI, ch, 'index.html'), page(ch, o));
}
fs.writeFileSync(path.join(ICI, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGES.map(([ch]) => `  <url><loc>${abs(ch)}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(ICI, 'robots.txt'), PROD ? `User-agent: *\nAllow: /\n\nSitemap: ${E.url}sitemap.xml\n` : `# Apercu : pas d'indexation avant la mise en ligne.\nUser-agent: *\nDisallow: /\n`);
console.log(`${PAGES.length} pages — ${PROD ? 'PRODUCTION' : 'apercu (noindex)'}${/^07 77 77/.test(E.tel) ? ' — numero PROVISOIRE' : ''}`);
