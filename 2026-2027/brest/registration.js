/* Intégration du formulaire Tally de l'Open de Brest.
 *
 * Pour changer le formulaire (ou suspendre les inscriptions), modifier UNIQUEMENT config.js.
 * Le formulaire s'affiche lorsque TALLY_FORM_ID contient un identifiant valide.
 * Quand TALLY_FORM_ID vaut une chaîne vide, le texte d'attente du HTML reste affiché.
 * Pas de stockage personnel ici : les réponses sont envoyées directement à Tally.
 */
(function initTallyRegistration() {
  "use strict";

  const formId = (window.TALLY_FORM_ID || "").trim();
  if (!/^[A-Za-z0-9]+$/.test(formId)) {
    return;
  }

  const container = document.getElementById("inscription-form");
  if (!container) {
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.dataset.tallySrc =
    "https://tally.so/embed/" +
    encodeURIComponent(formId) +
    "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
  iframe.title = "Préinscription Open Parkour Brest";
  iframe.loading = "lazy";

  container.replaceChildren(iframe);

  const tallyScript = document.createElement("script");
  tallyScript.async = true;
  tallyScript.src = "https://tally.so/widgets/embed.js";
  document.body.appendChild(tallyScript);
})();
