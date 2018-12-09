# TP 01 - Installation d'un environnement de développement

## Objectifs
Mettre en place les outils nécessaires au développement d'application mobile crossplatform.

## Préparatifs
1. Activer le mode développeur sur le smartphone en vous rendant dans
`Paramètres > À propos du téléphone`
et en appuyant frénétiquement sur "Numéro de build" jusqu'à ce qu'un message de confirmation apparaisse
1. Activer le débuggage USB dans `Paramètres > Options pour les développeurs`

## Instructions
**Dans ce TP nous allons installer plusieurs éléments indispensables au développement d'applications crossplatform :**
- **un éditeur de code**
- **les SDK android pour permettre de compiler nos applis**
- **Git et Node qui vont permettre d'installer des programmes (paquets npm) et notamment Cordova et React Native**
- **Python 2**

### 1. L'IDE
1. Installer Visual Studio Code (https://code.visualstudio.com/)

### 2. Les SDK Android
1. Télécharger et installer le Java JDK 8 (avec JRE) : http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. Créer la variable d’environnement JAVA_HOME et modifier la variable PATH:
    ```bash
    JAVA_HOME = C:\Program Files\Java\jdk1.8.xxxx
    PATH +=
        C:\Program Files\Java\jdk1.8.xxxx;
        C:\Program Files\Java\jdk1.8.xxxx\bin;
    ```
3. Télécharger et installer Android Studio : https://developer.android.com/studio/
    + lors de l'install, augmenter la RAM allouée à l'émulateur
4. Lancer Android Studio et ouvrir le SDK Manager
	<img src="images/sdk-manager-button.jpg" width="700">
6. Dans le SDK Manager, installer les SDK **Android 8.1 (API 27)** (le numéro de version est important) en cochant les éléments suivants (cocher la case "Show Package details" en bas à droite pour afficher toutes les options) :
	```
	SDK Platforms /
		Android 8.1 (Oreo) /
			+ Android SDK Platform 27
	```
	<img src="images/sdk-manager-1.jpg" width="700"><br>
	Puis dans l'onglet **"SDK Tools"** cocher :
	```
	SDK Tools /
		Android SDK Build-tools /
			+ 27.0.3
		+ Android SDK Platform-tools
		+ Android SDK Tools
		+ Google USB Driver
		Support Repository /
			+ Android Support Repository
	```
	<img src="images/sdk-manager-2.jpg" width="700">
	<img src="images/sdk-manager-3.jpg" width="700">

7. Noter le dossier dans lequel sont installés les SDK en examinant le champ "Android SDK Location:" du SDK Manager
	<img src="images/sdk-manager-sdk-location.jpg" width="700">

8.  Ajouter les sous-dossiers `tools` et `platform-tools` du sdk dans la variable d’environnement `PATH` puis créer une variable `ANDROID_HOME` contenant le chemin vers la racine du dossier sdk :
    ```bash
    PATH +=
        C:\<chemin-vers-votre-dossier-sdk>\tools
        C:\<chemin-vers-votre-dossier-sdk>\platform-tools
	ANDROID_HOME = C:\<chemin-vers-votre-dossier-sdk>
    ```
9. Afin de vérifier que le SDK a bien été installé, brancher le smartphone en USB et lancer la commande suivante `adb devices`. Le résultat devrait ressembler à ceci :
    ```
    List of devices attached
    015d21098658181a        device
    ```
	*En cas d'échec, vérifier que tous les préparatifs (cf. début du TP) ont bien été réalisés, débrancher/rebrancher le câble USB, et installer si besoin les drivers de votre téléphone (disponibles en principe sur le site du fabricant)*

### 3. Node, Git & Python
1. Installer NodeJS http://nodejs.org/ (version <u>11.x.x</u>)
1. Installer Git http://git-scm.com/ et sélectionner les choix suivants pendant le processus d'installation :
    + "Use Git from the Windows Command Prompt"
    + "Checkout as-is, commit as-is"
2. Si votre connexion internet se trouve derrière un proxy, entrer les commandes suivantes :
    ```bash
    npm config set proxy "http://username:password@servername:port/"
    npm config set https-proxy "http://username:password@servername:port/"
    ```
3. Installer Python 2 (et les Visual C++ Build Tools) via le paquet npm `windows-build-tools` en ouvrant le CMD <u>en tant qu'administrateur</u> et en tapant la commande suivante :
    ```bash
    npm install --global --production windows-build-tools
    ```
