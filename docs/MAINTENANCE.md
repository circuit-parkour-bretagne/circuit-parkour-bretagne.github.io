# Mode d'emploi — gestion du site Circuit Parkour Bretagne

Document destiné à un ou une bénévole qui prend en charge les mises à jour du site.

## 1. Modifier le site dans GitHub, sans outil spécial

1. Ouvrir [le dépôt du site](https://github.com/circuit-parkour-bretagne/circuit-parkour-bretagne.github.io).
2. Naviguer jusqu'au fichier voulu, par exemple `2026-2027/brest/index.html`.
3. Cliquer sur l'icône **crayon** (« Edit this file »).
4. Repérer le bloc indiqué par un commentaire HTML, par exemple `<!-- INFORMATIONS PRATIQUES -->`. Modifier uniquement les textes entre les balises.
5. Cliquer sur **Commit changes**, puis valider. Utiliser un message explicite, par exemple « Corriger horaire Open Brest ».
6. Attendre quelques minutes avant de vérifier la page publique : GitHub Pages ne se met pas toujours à jour immédiatement.

**Astuce :** dans le navigateur ou dans l'éditeur GitHub, utiliser `Ctrl+F` pour trouver une date, une ville ou un nom de club.

## 2. Changer les informations pratiques de Brest

Fichier : `2026-2027/brest/index.html`.

Chercher « INFORMATIONS PRATIQUES », puis modifier les paragraphes portant les informations à faire évoluer. Les éléments actuellement annoncés sont :

- **Événement :** dimanche 29 novembre 2026.
- **Compétition :** gymnase de Quilbignon, 4 rue de la Résistance, 29200 Brest.
- **Fédéral :** de 10 h à 12 h (indicatif).
- **Initiations :** de 13 h 30 à 15 h 15, deux séances (indicatif).
- **Open :** de 15 h 30 à 17 h 30 (indicatif).
- **Club d'accueil :** Légion Saint-Pierre.

**Attention :** un changement de date, de lieu ou de club doit aussi être reporté sur la page `index.html` et, si nécessaire, sur `le-circuit/index.html`. Le site utilise des fichiers indépendants : il n'y a pas encore de calendrier centralisé.

## 3. Activer, arrêter ou changer Tally

Fichier à ouvrir : `2026-2027/brest/config.js`.

```js
window.TALLY_FORM_ID = "q4xkM9";
```

- **Activer un nouveau formulaire :** remplacer uniquement `q4xkM9` par l'identifiant du formulaire Tally publié (la partie après `tally.so/r/`).
- **Suspendre les préinscriptions :** remplacer l'identifiant par une chaîne vide : `window.TALLY_FORM_ID = "";`.
- **Reprendre les inscriptions :** remettre l'identifiant voulu.

Le reste du fonctionnement est géré par `registration.js`, qui ne demande pas d'intervention pour l'exploitation courante. Une fois Tally activé, le formulaire prend automatiquement la place du message d'attente sur la page officielle Brest.

**Avant ouverture au public :** dupliquer notre formulaire Tally d'essai pour disposer d'une liste de réponses propre. Vérifier les catégories, tarifs, autorisations parentales, données personnelles et modalités de règlement avant de communiquer le formulaire.

## 4. Mettre à jour une photographie ou un logo

Les balises HTML se présentent ainsi :

```html
<img src="chemin/vers/image.jpg" alt="Description de l'image">
```

Déposer d'abord la nouvelle image dans le dépôt, puis modifier son chemin `src`. Conserver une description `alt` utile. Pour une photographie large, privilégier un JPEG/WebP optimisé ; pour un logo, PNG ou SVG. Éviter les images de plusieurs mégaoctets.

**Attention — dette technique connue :** les images de Brest et le logo FFGym Bretagne se trouvent aujourd'hui dans des sous-dossiers `test-inscription-v3/assets/` et `test-inscription-v4/assets/`. Malgré leur nom, ils sont utilisés par les pages officielles. Ne pas les supprimer.

## 5. Modifier le design

Fichiers dédiés :

- Accueil : `styles.css`.
- Le circuit : `le-circuit/page.css`.
- Les Opens : `les-opens/page.css`.
- Brest : `2026-2027/brest/page.css`.

Chaque CSS contient aussi les règles `@media` pour les écrans étroits. Tester sur ordinateur **et sur smartphone** après modification. Modifier les couleurs ou espacements dans le CSS ; éviter d'ajouter un nouveau `<style>` directement dans le HTML.

## 6. Ajouter une étape ou une nouvelle page

1. Créer un dossier avec `index.html`, par exemple `les-opens/index.html`.
2. Ajouter `page.css` si une apparence particulière est nécessaire.
3. Copier la structure d'en-tête et de pied de page existante ; ajuster les liens relatifs.
4. Vérifier les liens des images, qui varient selon la profondeur du dossier.
5. Ajouter un lien dans les menus de l'accueil et des autres pages.
6. Vérifier le rendu sur téléphone.

**Page « Les Opens » :** créée dans `les-opens/index.html`. Les quatre dimensions indicatives du jugement Freestyle s’y trouvent. Avant de modifier ces dimensions ou de publier un règlement, obtenir la validation du comité régional.

## 7. Contrôles avant et après chaque publication

- Les quatre URL publiques principales fonctionnent-elles (accueil, Le circuit, Les Opens, Brest) ?
- Les images et le logo s'affichent-ils ?
- Les liens « Le circuit », « Brest » et les boutons mènent-ils à la bonne page ?
- Le formulaire Tally s'ouvre-t-il et s'adapte-t-il à la hauteur de la page ?
- Date, horaires, adresse et prix sont-ils exacts et cohérents sur les différentes pages ?
- Le site reste-t-il lisible sur téléphone ?
- GitHub Pages a-t-il achevé son déploiement ? Une nouvelle page peut apparaître avec plusieurs minutes de retard.

## 8. Nom de domaine

Le site est actuellement hébergé sur GitHub Pages. Le futur domaine `circuit-parkour-bretagne.fr` nécessitera une configuration DNS auprès du fournisseur et un domaine personnalisé GitHub Pages, mais ne demandera pas d'hébergement supplémentaire. **Ne remplacer les liens des QR codes qu'après vérification du domaine et du HTTPS.**

## 9. Transmission à un nouveau gestionnaire

Accorder l'accès au dépôt à un compte GitHub individuel, avec les droits adaptés. Montrer comment modifier le HTML, effectuer un commit, vérifier le déploiement et changer le formulaire Tally. Les accès aux réponses Tally restent distincts des accès GitHub. Ne jamais partager de mot de passe.
