# 3.1 - TP Cordova

## Objectifs
Créer une première application mobile Cordova à partir d'une mobile web app.

## Préparatifs
1. Activer le mode développeur sur le smartphone en vous rendant dans
`Paramètres > À propos du téléphone`
et en appuyant frénétiquement sur "Numéro de build" jusqu'à ce qu'un message de confirmation apparaisse
1. Activer le débuggage USB dans `Paramètres > Options pour les développeurs`
1. Installer Java JDK (avec JRE) et modifier les variables d’environnement JAVA_HOME et PATH:
    ```bash
    JAVA_HOME = C:\Program Files\Java\jdk1.8.0_121
    PATH +=
        C:\Program Files\Java\jdk1.8.0_121;
        C:\Program Files\Java\jdk1.8.0_121\bin;
    ```
1. Installer Android Studio
    + augmenter la RAM allouée à l'émulateur si possible
1. Lancer le SDK Manager fourni avec Android Studio et installer les SDK **Android 6.0 (API 23)** puis installer les outils additionnels via le SDK Manager en cochant les éléments suivants :
    ```bash
    Tools /
        + Android SDK Tools
        + Android SDK Platform-tools
        + Android SDK Build-tools (23.0.1)
    Android 6.0 (API 23) /
        + SDK Platform
        + Intel x86 Atom system Image (émulateur)
    Extra /
        + Google USB Driver
        + Android Support Repository
        + Intel x86 Emulator Accelerator (HAXM installer)
    ```
1. Ajouter les dossiers du sdk suivants aux variables d’environnement :
    ```bash
    PATH +=
        C:\<chemin-vers-votre-dossier-sdk>\tools
        C:\<chemin-vers-votre-dossier-sdk>\platform-tools
	ANDROID_HOME = C:\<chemin-vers-votre-dossier-sdk>
    ```
1. Afin de vérifier que le SDK a bien été installé, brancher le smartphone en USB et lancer la commande suivante `adb devices`. Le résultat devrait ressembler à ceci :
    ```
    List of devices attached
    015d21098658181a        device
    ```
1. Installer NodeJS http://nodejs.org/ (version 9.x.x)
1. Installer Git http://git-scm.com/ et sélectionner les choix suivants pendant le processus d'installation :
    + "Use Git from the Windows Command Prompt"
    + "Checkout as-is, commit as-is"
1. Installer la CLI Cordova & PhoneGap
```bash
(sudo) npm install -g cordova
(sudo) npm install -g phonegap
```

## Instructions
1. Créer un nouveau projet cordova, dans un terminal lancer les commandes suivantes :
```
cordova create cordovatube fr.kumquats.cordovatube CordovaTube
cd cordovatube
cordova platform add android
```

2. Tester sur l'emulateur
```
cordova emulate android
```

3. Test sur un périphérique connecté en USB
- activer les options développeur et autoriser le débogage usb sur le téléphone
- installer le driver USB du téléphone sur le PC
- connecter le téléphone au PC avec le cable USB
- lancer la commande : ```adb devices```. Cela doit afficher une demande  une autorisation sur le téléphone puis, après acceptation, afficher l'id du périphérique suivi de "device" dans la console
- déployer le projet sur le téléphone connecté :
````
cordova run android --device
````

4. Inspecter l'application avec chrome dev tools (android 4.4 mini)
- ouvrir dans Chrome (côté poste de développement) l'adresse : `chrome://inspect`
- ouvrir l'onglet "Elements" et inspecter/modifier le code html de l'application


5. Installer l'apk depuis une URL
- sur le poste de développement :
    + ```cordova build android```
    + copier l'apk généré depuis le dossier platforms/android/build/outputs/apk/
    + coller l'apk dans le répertoire web racine de votre serveur apache (ex. c:/xampp/htdocs)
- sur le téléphone :
    + autoriser l'installation de sources inconnues (settings>security)
    + lancer Chrome et aller sur l'adresse du poste de développement pour télécharger le fichier apk (http://192.168.xxxxx/bazinga.apk)

6. Remplacer le contenu du dossier www du projet par les fichiers du TP précédent et compiler + lancer l'application

