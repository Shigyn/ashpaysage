# Prepare les photos du site A.S.H Paysage & Multiservices.
#   - « reel-* » : ses propres chantiers (profil AlloVoisins).
#   - le reste : Unsplash (licence libre), en attendant ses photos,
#     comme toujours avant paiement.
# Usage : python _source/photos.py <dossier source>
import os, sys, json
from PIL import Image, ImageOps

SRC = sys.argv[1]
ICI = os.path.dirname(os.path.abspath(__file__))
DST = os.path.join(ICI, '..', 'photos')
os.makedirs(DST, exist_ok=True)

PHOTOS = {
    # Unsplash
    'un/HD-1734079692160-fcbe4be6ab96.jpg': 'jardinier-paysagiste-bretigny',
    'un/HD-1668120089662-42642838cfef.jpg': 'amenagement-paysager-jardin',
    'un/HD-1617576683096-00fc8eecb3af.jpg': 'taille-arbuste-cisailles',
    'un/HD-1683316924890-6a8c5ab10d29.jpg': 'debroussaillage-jardin',
    'un/HD-1734079692079-aae7e24a7035.jpg': 'pose-gazon-en-rouleau',
    'un/HD-1738193830098-2d92352a1856.jpg': 'massif-bordure-maison',
    'un/HD-1788508493167-eee9f14161e1.jpg': 'allee-pas-japonais-jardin',
    'un/HD-1605117882932-f9e32b03fea9.jpg': 'entretien-bordures-pelouse',
    'un/HD-1597868165956-03a6827955b1.jpg': 'plantation-jardin',
    'un/HD-1783923186778-be68aad1a61d.jpg': 'pergola-jardin',
    'un/HD-1734303023491-db8037a21f09.jpg': 'tonte-pelouse',
    'un/HD-1676311396794-f14881e9daaa.jpg': 'outils-multiservices',
    'un/HD-1788610830488-1343095c571c.jpg': 'taille-haie-haute',
    # ses chantiers
    'p0.jpg': 'reel-montage-abri-de-jardin',
    'p1.jpg': 'reel-pas-japonais-imitation-pierre',
    'p2.jpg': 'reel-eco-piege-chenilles-processionnaires',
    'p3.jpg': 'reel-pergola-bioclimatique',
    'p4.jpg': 'reel-arrosage-automatique',
    'p5.jpg': 'reel-peinture-decorative-murale',
    'p6.jpg': 'reel-cloture-occultation-bois',
    'p7.jpg': 'reel-seuil-de-portail',
    'p8.jpg': 'reel-taille-de-haie',
}

dims = {}
for src, nom in PHOTOS.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, src))).convert('RGB')
    for larg in (1600, 800):
        c = im if im.width <= larg else im.resize((larg, round(im.height * larg / im.width)), Image.LANCZOS)
        c.save(os.path.join(DST, f'{nom}-{larg}.webp'), 'WEBP', quality=78, method=6)
    big = Image.open(os.path.join(DST, f'{nom}-1600.webp'))
    dims[nom] = {'l': big.width, 'h': big.height}
    print(f'{nom:42s} {im.width}x{im.height}')

# Le logo : fond blanc rendu transparent, pour le poser sur toutes les couleurs.
logo = Image.open(os.path.join(SRC, 'logo-src.jpg')).convert('RGBA')
px = logo.load()
for y in range(logo.height):
    for x in range(logo.width):
        r, g, b, a = px[x, y]
        m = min(r, g, b)
        if m > 235:
            px[x, y] = (255, 255, 255, 0)
        elif m > 200:
            px[x, y] = (r, g, b, int(255 * (235 - m) / 35))
logo = logo.crop(logo.getbbox())
logo.save(os.path.join(DST, 'logo-ash.png'), optimize=True)
# Le pictogramme seul (maison et feuilles), sans la ligne de texte du bas.
picto = logo.crop((0, 0, logo.width, int(logo.height * 0.80)))
picto = picto.crop(picto.getbbox())
picto.thumbnail((240, 240))
picto.save(os.path.join(DST, 'logo-picto.png'), optimize=True)
json.dump(dims, open(os.path.join(ICI, 'photos.json'), 'w'), indent=0)
print('logo', logo.size, 'picto', picto.size)
