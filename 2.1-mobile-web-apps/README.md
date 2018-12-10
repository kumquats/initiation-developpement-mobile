# 2.1 - TP Mobile Web apps

## Objectifs
Créer une web app mobile en HTML/CSS que nous appelerons "Youtube" et qui permettra de consulter des vidéos. Cette interface servira de base pour les tps suivants !

## Préparatifs
- Télécharger et Installer Apache, PHP et MySQL à l'aide de [Xampp](https://www.apachefriends.org/fr/index.html), ou une autre solution packagée comme [WAMP](http://www.wampserver.com/) ou [MAMP](https://www.mamp.info/en/).
- Lancer Apache, PHP et MySQL
- Créer un hotspot sur votre téléphone et connecter votre ordinateur à ce hotspot
- Noter l'adresse IP de l'ordinateur associée à ce hotspot grâce à la commande `ìpconfig /all`
- Tenter de joindre votre serveur apache depuis votre téléphone en tapant dans le navigateur : `http://<mon.adresse.ip>` une page par défaut doit s'afficher (si ce n'est pas le cas vérifier que Apache autorise bien les connections de l'extérieur - sur wampserver, utiliser la fonction "Put online"). La suite du TP se testera dans le navigateur du téléphone.
- Dans le dossier du projet, installer [Babel](https://babeljs.io/docs/setup/#installation)
	```bash
	cd /chemin/vers/mon/dossier/
	npm install --save-dev @babel/core @babel/cli
	```
- Installer le preset `env` qui permettra de transpiler les features ES2015+
	```bash
	npm install --save-dev @babel/preset-env
	```
- Puis créer un fichier `.babelrc` et configurer Babel avec le preset `env` :
	```json
	{
		"presets": ["@babel/env"]
	}
	```
	*NB : pour lancer la compilation, vous pourrez utiliser la commande suivante :*
	```bash
	.\node_modules\.bin\babel <dossiersource> -d <dossierdestination>
	```
  	*Ou bien lancer la commande suivante qui tournera en tâche de fond et relancera la compilation dès que les fichiers js seront modifiés !*
	```bash
	.\node_modules\.bin\babel <dossiersource> -d <dossierdestination> --verbose --watch --source-maps
	```

## Instructions
1. Créer un dossier pour ce tp dans le dossier racine du serveur web (ex. dossier "c:/xampp/htdocs/youtube" sur Xampp), puis dans ce dossier, créer un fichier "index.html".
2. Ajouter dans le fichier index.html une balise `viewport` dans le `<head>` de manière à gérer correctement l'affichage sur terminal mobile :
	```html
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	```
3. Créer un dossier `js` et y placer un fichier `main.js`. C'est dans ce fichier que vous aller placer votre code.
4. Compiler le fichier avec babel :
	```bash
	.\node_modules\.bin\babel js -d build
	```
5. Charger le fichier js compilé dans le dossier "build" dans la page html à l'aide d'une balise script en fin de `<body>`.
5. Cette page "index.html" doit présenter 4 ou 5 vignettes de vidéo : chaque vignette est composée d'une image et du titre de la vidéo qu'elle représente.
6. Au clic sur une vignette de la liste, remplacer le contenu de la page html par un player video (balise `<video>`) permettant d'afficher la vidéo associée à la vignette et le titre de la vidéo

## Pour aller plus loin
1. En haut de la liste, placer un bouton "ajouter une vidéo", au clic sur le bouton afficher une alerte "nouvelle vidéo" (le comportement définitif de cette fonction sera codé dans les prochains tps)
2. externaliser la liste des vidéos dans un fichier de configuration au format JSON. Puis charger ce fichier JSON en AJAX et générer la liste des vidéos à partir des informations contenues dans ce fichier JSON. Pour cela, utiliser la fetch API :
	```js
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(jsonData) {
		// cette fonction est appelée en cas de succès
		console.log(jsonData);
	}).catch(function() {
		// cette fonction est appelée en cas d'erreur
		console.log("Houston, we've got a problem.");
	});
	```
3. Utiliser un thème Bootstrap (par exemple un de thèmes de https://bootswatch.com/ ) pour les styles de la page avec :
	- une barre de navigation
	- un menu composé de 4 liens "Home", "My videos", "Watch later", et "About"