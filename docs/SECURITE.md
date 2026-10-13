# Sécurité et droits d'accès — Circuit Parkour Bretagne

Ce site est hébergé avec GitHub Pages. Son **code source est public**, ce qui est normal pour un site statique public. La sécurité repose surtout sur la gestion des comptes autorisés à modifier le dépôt.

## Mesures de base — à contrôler par un administrateur GitHub

1. **Activer la double authentification (2FA)** sur tous les comptes autorisés à publier. Idéalement, privilégier une clé de sécurité ou une application d'authentification.
2. **Vérifier les membres et collaborateurs** : GitHub > organisation `circuit-parkour-bretagne` > **People**, puis dépôt > **Settings > Collaborators and teams**. N'accorder l'écriture qu'aux gestionnaires désignés ; éviter les comptes partagés.
3. **Vérifier les autorisations des applications GitHub** : organisation/dépôt > Settings, rubrique intégrations ou applications installées. Révoquer les accès inutilisés ; contrôler les applications avec écriture sur le code.
4. **Protéger `main`**, qui publie le site : dépôt > **Settings > Rules > Rulesets** (ou Branches selon l'interface). Au minimum empêcher la suppression ou les poussées forcées ; pour davantage de sécurité, exiger une pull request avant publication, avec une approbation. Cette dernière option change la façon de travailler : le gestionnaire devra passer par une branche et une validation.
5. **Contrôler GitHub Pages** : dépôt > **Settings > Pages** ; vérifier que le domaine personnalisé est `circuit-parkour-bretagne.fr` et activer **Enforce HTTPS** lorsque le DNS et le certificat sont prêts.
6. **Ne jamais publier** dans ce dépôt de mots de passe, jetons d'accès, clés privées, exports Tally, listes de participants, autorisations parentales ou données personnelles.
7. **Limiter les privilèges** : les nouveaux bénévoles n'ont pas tous besoin du rôle administrateur. Prévoir une procédure pour retirer rapidement un accès lorsqu'une personne quitte le projet.

## Ce qui est public par conception

- Pages HTML, feuilles CSS, JavaScript et photographies.
- L'identifiant du formulaire Tally : il permet d'afficher le formulaire, **ce n'est pas un mot de passe**.
- L'historique des versions précédemment enregistrées dans Git, y compris d'anciennes pages de test.

**Important :** supprimer un fichier ne suffit pas à l'effacer de l'historique. Si un secret a été enregistré par erreur, il faut d'abord le révoquer ou le remplacer, puis évaluer une purge d'historique adaptée. Il ne faut pas réécrire l'historique sans mesurer les conséquences pour les contributeurs.

## Mode de publication recommandé

Pour une équipe réduite : des comptes individuels, 2FA activée, droits d'écriture limités, sauvegarde du contenu via Git et revue régulière des accès.

Si le comité souhaite un processus plus strict : créer une branche pour les modifications, vérifier l'aperçu, faire relire les textes sportifs puis fusionner une pull request vers `main`.

Ne pas publier comme définitifs les tarifs, dates ou règlements sportifs non validés. Pour les Opens, les quatre dimensions du jugement Freestyle restent indicatives.

## En cas de problème

1. Suspendre immédiatement les accès suspects.
2. Révoquer/renouveler les identifiants compromis auprès de leur fournisseur.
3. Examiner l'historique des changements de `main` et restaurer un commit sain si nécessaire.
4. Informer les gestionnaires du site et, si des données personnelles sont concernées, appliquer les procédures appropriées de l'organisation.

Voir aussi [README.md](../README.md) et [MAINTENANCE.md](MAINTENANCE.md).
