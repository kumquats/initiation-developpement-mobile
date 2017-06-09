# 4.1 - TP Écosystème Cordova

## Objectifs
Travailler avec les plugins Cordova : Améliorer l'application "CordovaTube" développée dans le précédent TP pour permettre à l'utilisateur d'ajouter ses propres vidéos dans la liste.

## Préparatifs
Repartir des fichiers du TP précédent ou des fichiers HTML/CSS/JS de démarrage fournis.

## Instructions
1. Bloquer l'orientation de l'application en portrait
2. Passer l'application en plein écran
3. Dans la page liste des vidéos, placer un bouton "Ajouter une vidéo"
4. Lorsque l'utilisateur appuie sur le bouton, lancer l'appareil photo à l'aide du plugin `cordova-plugin-camera` de la Core API
5. Afficher la photo prise par l'utilisateur dans la page comme s'il s'agissait d'une vignette de vidéo supplémentaire.


## Pour aller plus loin
1. Modifier l'action du bouton "Ajouter une vidéo" pour afficher un formulaire en popin (modale). Le formulaire permet d'ajouter une nouvelle vignette dans la liste comme précédemment mais permet de configurer :
    + le nom de la vidéo (champ de saisie texte)
    + la vignette de la vidéo (bouton qui lance l'appareil photo)
    + le fichier mp4 de la vidéo (bouton qui lance la caméra)
    Pour lancer la caméra, utiliser le plugin `cordova-plugin-media-capture` cf. https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media-capture/index.html#capturecapturevideo
2. Lors de l'appui sur une vignette, afficher un page contenant le titre de la vidéo choisie et le lecteur de la vidéo
