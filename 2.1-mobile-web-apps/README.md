# 2.1 - TP Mobile Web apps 

## Objectifs
Créer une web app mobile en HTML/CSS que nous appelerons "Youtube" et qui permettra de consulter des vidéos.

## Préparatifs
1. Télécharger et Installer Apache, PHP et MySQL à l'aide de [Xampp](https://www.apachefriends.org/fr/index.html), ou une autre solution packagée comme [WAMP](http://www.wampserver.com/) ou [MAMP](https://www.mamp.info/en/).
2. Lancer Apache, PHP et MySQL
3. Créer un hotspot sur votre téléphone et connecter votre ordinateur à ce hotspot
4. Noter l'adresse IP de l'ordinateur associée à ce hotspot grâce à la commande `ìpconfig /all`
5. Tenter de joindre votre serveur apache depuis votre téléphone en tapant dans le navigateur : `http://<mon.adresse.ip>` une page par défaut doit s'afficher (si ce n'est pas le cas vérifier que Apache autorise bien les connections de l'extérieur - sur wampserver, utiliser la fonction "Put online"). La suite du TP se testera dans le navigateur du téléphone.


## Instructions
1. Dans le dossier racine du serveur web (ex. dossier "htdocs" sur Xampp), créer un fichier "index.html".
2. Cette page "index.html" doit présenter une dizaine de vignettes de vidéo (chaque vignette est accompagnée du titre de la vidéo qu'elle représente et d'un court texte de description).
3. Créer une page html pour chaque vidéo. Ces pages doivent permettre de lire une vidéo au format mp4 hébergée sur votre serveur local (pas de lecteur embed youtube !). En dessous de la vidéo doit s'afficher le titre de la vidéo, sa description et une liste de commentaires.
4. Dans la page index.html, ajouter des liens hypertexte sur élément de la liste vers la page video associée
5. Ajouter des styles CSS pour rendre l'application claire et agréable à utiliser.

## Pour aller plus loin
1. transformer l'application en Single Page App grâce à l'utilisation de JavaScript : 
    - externaliser la liste des vidéos dans un fichier de configuration au format JSON
    - dans la page index.html, charger ce fichier JSON en AJAX et générer la liste des vidéos à partir des informations contenues dans ce fichier JSON
    - au clic sur un des éléments, remplacer en JavaScript le contenu de la page par le lecteur vidéo 