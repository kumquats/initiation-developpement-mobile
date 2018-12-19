# 6.1 - TP React Native

## Objectifs
Manipuler le JSX, utiliser une api native

## Préparatifs
Repartir de vos fichiers du précédent TP ou des fichiers fournis dans ce dossier.

## Instructions
1. Lorsqu'on appuie sur une vignette, remplacer le contenu de l'application par une page contenant l'image de la video et son titre.
1. un bouton permet de revenir à la liste

## Pour aller plus loin
1. Ajouter un player video dans la page de détail. Vous pouvez utiliser le composant [react-native-video](https://github.com/react-native-community/react-native-video)<br>
	NB: si vous avez des problèmes pour compiler l'application avec ce plugin, ajoutez le code suivant au fichier `android/app/build.gradle` :
	```
	android {
		...
		compileOptions {
			targetCompatibility JavaVersion.VERSION_1_8
		}
	}
	```
2. Ajouter un bouton dans la page liste qui va permettre à l'utilisateur d'ajouter une nouvelle vidéo dans la liste : Au clic sur le bouton, une [Modal](https://facebook.github.io/react-native/docs/modal.html) doit s'afficher. Cette Modal contient un champ de saisie du titre de la vidéo, un bouton pour prendre une image pour la vignette, et un autre pour capturer une vidéo.<br>
	NB: Le composant [react-native-camera](https://github.com/react-native-community/react-native-camera) permet à la fois de prendre des photos et d'enregistrer des vidéos. N'oubliez pas d'ajouter les permissions nécessaires comme indiqué dans la documentation.<br>
	Vous êtes bien entendu libres d'utiliser la librairie qui vous semble adaptée en explorant par exemple le site [js.coach](https://js.coach/?collection=React+Native).d
3. La modale contient également des boutons permettant :
	- d'annuler la saisie et de revenir à la liste (fermeture de la modale)
	- d'ajouter la vidéo à la liste (en fermant également la Modal)
