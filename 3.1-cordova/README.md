# 3.1 - TP Cordova

## Objectifs
Utiliser Cordova et créer une première application mobile à partir d'un mobile web app.

## Préparatifs
1. Installer Java JDK (avec JRE) et modifier les variables d’environnement :
```bash
JAVA_HOME = C:\Program Files\Java\jdk1.8.0_45   
PATH :
    C:\Program Files\Java\jdk1.8.0_45;
    C:\Program Files\Java\jdk1.8.0_45\bin;
```
2. Installer Android Studio
    + bien préciser le dossier dans lequel enregistrer les SDK
    + paramétrer la RAM utilisée par l'émulateur
3. Mettre à jour les SDK et installer les outils additionnels via le SDK Manager en cochant les éléments suivants :
```bash
Tools /    
    - Android SDK Tools
    - Android SDK Platform-tools
    - Android SDK Build-tools (dernière version stable)
Android (dernière version stable)/
    - SDK Platform
    - Intel x86 Atom system Image (émulateur)
Extra / 
    - Google USB Driver
    - Android Support Repository
    - Intel x86 Emulator Accelerator (HAXM installer)
```
4. Ajouter deux dossiers des sdk aux variables d’environnement
```bash
    PATH :
    C:\cordova-dev\sdk\tools
    C:\cordova-dev\sdk\platform-tools
```
5. Installer NodeJS http://nodejs.org/
6. Installer Git http://git-scm.com/ et sélectionner les choix suivants pendant le processus d'installation :
    + "Use Git from the Windows Command Prompt"
    + "Checkout as-is, commit as-is"
7. Installer la CLI Cordova & PhoneGap
```bash
(sudo) npm install -g cordova
(sudo) npm install -g phonegap
```

## Instructions
1. Créer un nouveau projet cordova, dans un terminal lancer les commandes suivantes :
```
cordova create youtube fr.kumquats.youtube Youtube
cd youtube
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

