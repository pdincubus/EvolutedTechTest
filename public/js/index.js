import NASAAstronomyPicturesOfTheDay from './NASAAstronomyPicturesOfTheDay.js';

const todayPhotoContainer = document.getElementById('today-photo');
const randomPhotosContainer = document.getElementById('other-images');

if (todayPhotoContainer && randomPhotosContainer) {
    const NASAPhotos = new NASAAstronomyPicturesOfTheDay(
        todayPhotoContainer,
        randomPhotosContainer
    );
}