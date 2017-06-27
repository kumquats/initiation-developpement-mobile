# 5.1 - TP React Native

## Objectifs
Créer une première application mobile React native, manipuler les outils de debug.

## Préparatifs
1. S'assurer que les SDK android sont bien installés conformément aux instructions des TPs précédents
2. Ajouter la variable d'environnement ANDROID_HOME vers le dossier des sdk android (si pas déjà présente)
3. Vérifier la version de node et si nécessaire désinstaller et installer une version à jour
```bash
node -v
```
4. Mettre à jour npm 
```bash
npm install -g npm
```
5. Installer react-native-cli 
```bash
npm install -g react-native-cli
```
6. Créer un nouveau projet 
```bash
react-native init ReactTube
cd ReactTube
```
7. Lancer l'application hello world générée par React native et s'assurer que tout fonctionne
```bash
react-native run-android
```


## En cas de problème
- Le remote debugging via USB ne fonctionne pas avec android < 5.0. Dans ce cas utiliser le debug via wifi
- en cas de soucis avec les versions de sdk, soit installer les sdk build tools demandés (solution recommandée) soit modifier ./android/app/build.gradle pour remplacer les valeurs de buildToolsVersion et targetSdkVersion pour correspondre aux build-tools et sdk installés (normalement aux lignes 87 et 92) cf. http://stackoverflow.com/questions/33155087/react-native-on-android-failed-to-find-build-tools#34928913
- Dans le sdk manager : vérifier et installer/mettre à jour les `Extras > Android Support repository` cf. http://stackoverflow.com/questions/33023018/react-native-awesome-project-not-building-android-project#33023883

## Prise en main des outils de debug
- Afficher les outils de debug de l'app, en appuyant sur la touche "menu" du téléphone (ou appui long sur la touche "carré" sur android 6) ou simplement en secouant le téléphone !
    + Activer le Live Reload
    + modifier le contenu du fichier index.android.js et constater le rechargement à chaud de l'appli
    + Activer la fonction "Debug JS Remotely"
    + ajouter un console.log dans le code et constater l'affichage dans la fenêtre de debug
    + inspecter le code JS et mettre un point d'arrêt. Recharger l'application et constater que l'exécution s'interromp au point d'arrêt
- télécharger react-native-debugger : https://github.com/jhen0409/react-native-debugger :
    + désactiver la fonction "Debug JS Remotely"
    + fermer l'onglet de debug de Chrome
    + fermer l'application mobile
    + dans un terminal sur le poste de développement, lancer la commande
    ```bash
    $ adb reverse tcp:8097 tcp:8097
    ```
    + lancer l'application react-native-debugger sur le poste de développement
    + lancer l'application sur le téléphone (en cliquant sur son icone)
    + activer la fonction "Debug JS Remotely"
    + via RNDebugger modifier le texte de l'application
    + via RNDebugger modifier la taille et la couleur du texte de l'application


## Instructions
- Créer une application présentant une liste de vignettes vidéos les unes en dessous des autres. Chaque vignette comprend une image et un titre. 
