# TP Formulaire de réservation

## Formulaire
Le formulaire correspond à la demande énoncée
- Le fichier ReservationForm.jsx contient la validation Yup et la définition du form avec Formik. Il contient aussi un template intégrant les sous-composants (le formulaire est subdivisé en composants pour des raisons de lisibilité).
- Dans le dossier form-parts, trois composants contiennent chacun une partie du formulaire avec la gestion des affichages conditionnels et les inputs
- Dans le dossier layout, des composants de mise en forme pure du formulaire

## Router
J'ai utilisé un router pour la navigation dans l'application :
- Une page d'accueil
- La page de formulaire
- Une page NotFound, accessible en cliquant sur "Participants" dans la navbar (cela ne correspond à ce stade à aucune page référencée)

Fichiers concernés:
- router.jsx dans lequel les routes sont définies
- main.jsx où le RouterProvider est déclaré
- App.jsx où un Outlet est déclaré pour l'affichage des pages de l'app (le layout avec navbar est défini dans App)

## Context
Pour appliquer un thème au site, j'ai utilisé un contexte et stocké la valeur pertinente dans le localStorage.
Fichiers concernés :
- ThemeContext.jsx pour définir contexte et provider
- ThemeWrapper.jsx pour fournir un wrapper
- ThemeSwitch.jsx qui est le composant qui permet de gérer le changement de thème dans l'interface