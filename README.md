# Circuit Parkour Bretagne — guide du site

Site public statique du Circuit Parkour Bretagne 2026–2027, hébergé sur **GitHub Pages**. Aucun serveur, aucune installation et aucune base de données : les pages sont faites en HTML, les styles en CSS et le formulaire d'inscription est fourni par Tally.

## Pages officielles et fichiers

| Page | HTML : les textes | CSS : le style |
|---|---|---|
| Accueil `/` | `index.html` | `styles.css` |
| Le circuit `/le-circuit/` | `le-circuit/index.html` | `le-circuit/page.css` |
| Brest `/2026-2027/brest/` | `2026-2027/brest/index.html` | `2026-2027/brest/page.css` |

**Ne pas renommer ces dossiers** : leurs URL figurent potentiellement sur des QR codes et des documents diffusés.

## Modifications ordinaires

- **Changer une date, un lieu ou un horaire de Brest** : modifier `2026-2027/brest/index.html`, rubrique « INFORMATIONS PRATIQUES ». Vérifier aussi les éventuels rappels sur l'accueil et « Le circuit ».
- **Modifier la présentation du circuit ou le calendrier** : `le-circuit/index.html`.
- **Modifier le titre ou la présentation de la page d'accueil** : `index.html`.
- **Modifier l'apparence** : utiliser le fichier CSS de la page concernée, et non des attributs `style` ajoutés dans le HTML.
- **Activer, suspendre ou changer les préinscriptions Tally** : `2026-2027/brest/config.js`. Mettre `window.TALLY_FORM_ID = "";` pour désactiver, ou l'identifiant du formulaire publié pour activer. Ne jamais copier d'informations d'inscrits dans GitHub.
- **Ne pas modifier** `2026-2027/brest/registration.js` pour des changements habituels : ce fichier charge automatiquement le formulaire choisi dans `config.js`.

Consulter le [mode d'emploi pas à pas](docs/MAINTENANCE.md).

## Architecture

```text
/
  index.html                      Accueil : contenu
  styles.css                      Accueil : présentation
  le-circuit/
    index.html                    Page Le circuit
    page.css                      Présentation de cette page
  2026-2027/brest/
    index.html                    Page officielle Brest
    page.css                      Présentation Brest
    config.js                     Identifiant Tally (éditable)
    registration.js               Intégration Tally (technique)
    test-inscription-v3/assets/   Photos actuellement utilisées
    test-inscription-v4/assets/   Photos et logo actuellement utilisés
  docs/MAINTENANCE.md             Procédures de mise à jour
  .nojekyll                       Publication GitHub Pages
```

**Attention aux images :** certains dossiers portent encore « test-inscription » dans leur nom. Il s'agit d'un héritage de la création du site, mais leurs fichiers sont utilisés sur les **pages officielles**. Ne pas les supprimer sans migrer toutes les références. Les anciens `index.html` de test ont été retirés.

## Règles de publication

1. Sauvegarder les URL publiques : ne pas renommer les fichiers `index.html`.
2. Les **Opens** sont indépendants les uns des autres ; seul le **circuit fédéral** utilise un classement qualificatif.
3. Les quatre dimensions du jugement Freestyle Open présentées sur « Le circuit » sont **indicatives**, pas des règles approuvées.
4. Vérifier la page sur téléphone et les liens après chaque modification.
5. Attendre la publication GitHub Pages avant de conclure qu'une modification ne fonctionne pas.
6. Utiliser des accès GitHub individuels pour la transmission, sans partage de mot de passe.

Le domaine personnalisé sera configuré dans GitHub Pages et chez le fournisseur DNS lors de son achat.
