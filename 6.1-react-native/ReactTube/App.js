import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button
} from 'react-native';

export default class App extends Component {
	videos = [{
			"title":"CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation",
			"thumbnail":"images/catlaugh.jpg",
			"video": "videos/catfails.mp4"
		},
		{
			"title":"Hilarious Cat Fails (April 2017)",
			"thumbnail":"images/catfails.jpg",
			"video": "videos/catfails.mp4"
		},
		{
			"title":"Cats are so funny you will die laughing - Funny cat compilation",
			"thumbnail":"images/catssofunny.jpg",
			"video": "videos/catfails.mp4"
		}];

	render() {
		return (
			<View>
				<View>
					<Text>ReactTube</Text>
				</View>
				<Button title="Ajouter une vidéo" />
				{ this.renderVideoList() }
			</View>
		);
	}

	renderVideoList() {
		const videoList = [];
		this.videos.forEach( video => {
			videoList.push(
				<View key={video.thumbnail+video.video}>
					{/* <Image /> */}
					<Text>{video.thumbnail}</Text>
					<Text>{video.title}</Text>
				</View>
			);
		});
		return videoList;
	}
}

