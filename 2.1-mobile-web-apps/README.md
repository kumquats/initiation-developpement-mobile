# 2.1 - TP Mobile Web apps

## Objectifs
Créer une web app mobile en HTML/CSS que nous appelerons "Youtube" et qui permettra de consulter des vidéos. Cette interface servira de base pour les tps suivants !

## Préparatifs
1. Télécharger et Installer Apache, PHP et MySQL à l'aide de [Xampp](https://www.apachefriends.org/fr/index.html), ou une autre solution packagée comme [WAMP](http://www.wampserver.com/) ou [MAMP](https://www.mamp.info/en/).
2. Lancer Apache, PHP et MySQL
3. Créer un hotspot sur votre téléphone et connecter votre ordinateur à ce hotspot
4. Noter l'adresse IP de l'ordinateur associée à ce hotspot grâce à la commande `ìpconfig /all`
5. Tenter de joindre votre serveur apache depuis votre téléphone en tapant dans le navigateur : `http://<mon.adresse.ip>` une page par défaut doit s'afficher (si ce n'est pas le cas vérifier que Apache autorise bien les connections de l'extérieur - sur wampserver, utiliser la fonction "Put online"). La suite du TP se testera dans le navigateur du téléphone.


## Instructions
1. Créer un dossier pour ce tp dans le dossier racine du serveur web (ex. dossier "c:/xampp/htdocs/youtube" sur Xampp), puis dans ce dossier, créer un fichier "index.html".
2. Cette page "index.html" doit présenter 4 ou 5 vignettes de vidéo : chaque vignette est composée d'une image et du titre de la vidéo qu'elle représente.
3. Au clic sur une vignette de la liste, remplacer le contenu de la page html par un player video (balise `<video>`) permettant d'afficher la vidéo associée à la vignette et le titre de la vidéo

## Pour aller plus loin
1. En haut de la liste, placer un bouton "ajouter une vidéo", au clic sur le bouton afficher une alerte "nouvelle vidéo" (le comportement définitif de cette fonction sera codé dans les prochains tps)
1. Utiliser Bootstrap pour les styles de la page avec :
	- une barre de navigation
	- un menu composé de 4 liens "Home", "My videos", "Watch later", et "About"
1. externaliser la liste des vidéos dans un fichier de configuration au format JSON puis dans la page index.html, charger ce fichier JSON en AJAX et générer la liste des vidéos à partir des informations contenues dans ce fichier JSON. Pour cela, utiliser la fetch API :
	```js
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(jsonData) {
		console.log(jsonData);
	}).catch(function() {
		console.log("Houston, we've got a problem.");
	});
	```
