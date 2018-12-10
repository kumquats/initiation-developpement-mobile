let videos = [];

const videoListContainer = document.querySelector('.videoListContainer'),
	videoList = videoListContainer.querySelector('.videoList'),
	videoPlayer = document.querySelector('.videoPlayer'),
	title = videoPlayer.querySelector('h1'),
	video = videoPlayer.querySelector('video'),
	logo = document.querySelector('.navbar-brand');


// au chargement de l'app on récupère la liste des vidéos
let request = new XMLHttpRequest();
request.open('GET', 'videos/data.json');
request.onload = () => {
	const json = JSON.parse( request.responseText );
	videos = json;
	showVideoList();
}
request.send();


/**
 * Affiche la liste des vidéos et masque le player
 */
const showVideoList = () => {
	let html = '';
	toggleListeners( 'off' );
	videos.forEach( video => {
		html += `<a href="#" class="list-group-item"
			data-video="${encodeURIComponent( JSON.stringify(video) )}">
			<img src="${video.thumbnail}" class="img-responsive"/>
			<h4 style="padding:10px" class="list-group-item-heading">${video.title}</h4>
			</a>`;
	});
	videoList.innerHTML = html;
	videoListContainer.classList.remove( 'hidden' );
	videoPlayer.classList.add( 'hidden' );
	toggleListeners( 'on' );
}

/**
 * Ajoute ou supprime les écouteurs d'événements
 * sur les liens de la videoList
 * @param {string} state 'on' | 'off'
 */
const toggleListeners = state => {
	const links = videoList.querySelectorAll('a');
	links.forEach( link => {
		if (state == 'on') {
			link.addEventListener('click', showVideoPlayer );
		} else {
			link.removeEventListener('click', showVideoPlayer );
		}
	});
}
/**
 * Affiche le player vidéo en fonction du lien qui a déclenché la fonction
 * @param {Event} event
 */
function showVideoPlayer( event ){
	event.preventDefault();
	const link = event.currentTarget;
	const media = JSON.parse( decodeURIComponent( link.getAttribute('data-video') ) );
	title.innerHTML = media.title;
	video.setAttribute('src', media.video);
	video.setAttribute('poster', media.thumbnail);

	videoPlayer.classList.remove('hidden');
	videoListContainer.classList.add('hidden');
}

// au press sur le logo on affiche la liste
logo.addEventListener('click', showVideoList );
