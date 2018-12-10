# 3.1 - TP Cordova

## Objectifs
Créer une première application mobile Cordova à partir d'une mobile web app.

## Préparatifs
1. Installer la CLI Cordova & PhoneGap
```bash
(sudo) npm install -g cordova
(sudo) npm install -g phonegap
```

## Instructions
1. **Créer un nouveau projet cordova, dans un terminal lancer les commandes suivantes :**
	```
	cordova create cordovatube fr.kumquats.cordovatube CordovaTube
	cd cordovatube
	cordova platform add android
	```
2. **Tester sur l'emulateur**
	```
	cordova emulate android
	```
3. ***Test sur un périphérique connecté en USB***
	- activer les options développeur et autoriser le débogage usb sur le téléphone
	- installer le driver USB du téléphone sur le PC
	- connecter le téléphone au PC avec le cable USB
	- lancer la commande : ```adb devices```. Cela doit afficher une demande  une autorisation sur le téléphone puis, après acceptation, afficher l'id du périphérique suivi de "device" dans la console
	- déployer le projet sur le téléphone connecté :
	````
	cordova run android --device
	````
4. **Inspecter l'application avec chrome dev tools (android 4.4 mini)**
	- ouvrir dans Chrome (côté poste de développement) l'adresse : `chrome://inspect`
	- ouvrir l'onglet "Elements" et inspecter/modifier le code html de l'application
5. **Installer l'apk depuis une URL**
	- sur le poste de développement :
		+ ```cordova build android```
		+ copier l'apk généré depuis le dossier platforms/android/build/outputs/apk/
		+ coller l'apk dans le répertoire web racine de votre serveur apache (ex. c:/xampp/htdocs)
	- sur le téléphone :
		+ autoriser l'installation de sources inconnues (settings>security)
		+ lancer Chrome et aller sur l'adresse du poste de développement pour télécharger le fichier apk (http://192.168.xxxxx/cordovatube.apk)
6. **Utiliser Phonegap Developer app**
	- facultatif selon les installations : dans le fichier index.html commenter la ligne
		```html
		<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
		```
	- connecter le téléphone et le poste de développement au même réseau wifi (hotspot si nécessaire)
	- installer Phonegap Developer App sur le téléphone depuis le store  ([Android](https://play.google.com/store/apps/details?id=com.adobe.phonegap.app) ou [Windows](http://www.windowsphone.com/en-us/store/app/phonegap-developer/5c6a2d1e-4fad-4bf8-aaf7-71380cc84fe3) uniquement)
	- dans le dossier du projet lancer la commande :
		```bash
		phonegap serve
		```
	- lancer l'appli PhoneGap Developer App sur le téléphone
	- entrer l'url affichée dans la ligne de commande > L'application se lance dans le téléphone
	- en cas de soucis, creer un dossier + fichier : .cordova/config.json
	- modifier les fichiers html/css/js et voir l'effet du live reload de l'app
	<br>NB : on peut voir les console.log dans la ligne de commande
	<br>NB : plusieurs devices peuvent se connecter au même serveur
7. **Remplacer le contenu du dossier www du projet par les fichiers du TP précédent et compiler + lancer l'application**

