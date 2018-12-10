# 5.1 - TP React Native

## Objectifs
Créer une première application mobile React native, et manipuler les outils de debug.

## Préparatifs
1. S'assurer que les **SDK android 27**, Git, Node JS sont bien installés et que **toutes** les variables d'environnment sont bien renseignées conformément aux instructions du TP [1.1-environnement-dev](../1.1-environnement-dev)
2. Installer react-native-cli
	```bash
	npm install -g react-native-cli
	```
3. Installer [React Native Debugger](https://github.com/jhen0409/react-native-debugger), suivre les instructions d'installation sur https://github.com/jhen0409/react-native-debugger#installation

## Instructions
1. **Créer une application React Native** appelée **ReactTube**
	```bash
	react-native init ReactTube
	cd ReactTube
	```
1. **Lancer l'application générée par React Native** et s'assurer que tout fonctionne :
	```bash
	react-native run-android
	```
1. **Afficher le menu de debug de l'app** (en secouant le téléphone !) :
    + Activer le Live Reload
    + modifier le contenu du fichier App.js et constater le rechargement de l'appli
	+ Activer le Hot Reload, modifier le code JS et constater  le rafraîchissement de l'interface sans rechargement (seule la partie de code modifiée est mise à jour)
    + Activer la fonction "Debug JS Remotely", un nouvel onglet doit s'ouvrir dans Chrome : penser à afficher les outils de développement (touche F12) pour que le mode debug fonctionne
    + Ajouter un console.log dans le code et constater l'affichage dans la console de la fenêtre de debug
    + Inspecter le code JS et mettre un point d'arrêt. Recharger l'application et constater que l'exécution s'interrompt au point d'arrêt
1. **Utiliser React Native Debugger** :
 	+ Désactiver la fonction "Debug JS Remotely"
 	+ Fermer l'onglet Chrome du debugger
    + Lancer l'application react-native-debugger sur le poste de développement
    + Activer la fonction "Debug JS Remotely"
    + Via RNDebugger modifier le texte de l'application
    + Via RNDebugger modifier la taille et la couleur du texte de l'application
1. **Modifier le code de l'application** pour afficher une liste de vidéos les unes en dessous des autres :
	+ Les données de la liste devront être contenues dans un Array.
	+ Chaque vidéo est représentée par une vignette et son titre
	+ Au dessus de la liste, afficher header contenant le titre de l'application puis juste avant la liste des vidéos un bouton "Ajouter une vidéo"

## En cas de problème
- Le remote debugging via USB ne fonctionne pas avec android < 5.0. Dans ce cas utiliser le debug via wifi
- Dans le sdk manager : vérifier et installer/mettre à jour les `Extras > Android Support repository` cf. http://stackoverflow.com/questions/33023018/react-native-awesome-project-not-building-android-project#33023883
- En cas d'erreur `Execution failed for task ':app:mergeDebugResources'. > Error: Failed to crunch file <....>.png`, modifier le fichier ReactTube/android/build.gradle en ajoutant une propriété `buildDir` pointant vers un dossier de votre disque proche de la racine (l'erreur est souvent due à des chemins de fichiers de build trop longs) par exemple :
	```gradle
	...
	allprojects {
		buildDir = "C:/builds/${rootProject.name}"
		repositories {
			mavenLocal()
			jcenter()
			maven {
				// All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
				url "$rootDir/../node_modules/react-native/android"
			}
		}
	}
	```