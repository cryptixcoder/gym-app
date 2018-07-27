import React from 'react';
import { ImageGallery } from '@nlabs/react-native-image-gallery';

export default ({ images }) => {
	const imageUrls = images.map((image) => ({
		url: image.uri,
		id: image.id,
		title: image.title,
		description: image.description
	}));
	return <ImageGallery images={imageUrls} />;
};
