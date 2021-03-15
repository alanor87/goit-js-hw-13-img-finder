
import imgCardTemplate from '../templates/imgCard.hbs';
import { galleryRef, searchInputRef } from './DOMrefs';
import '../../node_modules/@pnotify/core/dist/PNotify.css';
import '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { info } from '@pnotify/core';
export { fetchImages, newQueryLoad, nextPageLoad };

const noticeOptions = {
    shadow: true,
    hide: true,
    delay: 1000,
}
const BASE_URL = 'https://pixabay.com/api/';
const API_TOKEN = '20496318-c7af985c6ce4a327e41f45e16';
let currentPage = 1;
let query = 'cats';

function fetchImages() {
    return fetch(`${BASE_URL}?key=${API_TOKEN}&q=${query}&page=${currentPage}&per_page=12`)
        .then(responce => responce.json())
        .then(renderGallery);
};

function renderGallery(imgArray) {
    const renderArray = imgArray.hits;
    const cardMarkup = imgCardTemplate(renderArray);
    galleryRef.insertAdjacentHTML('beforeend', cardMarkup);
};

function nextPageLoad(entries) {
    if (entries[0].isIntersecting) {
        fetchImages();
        currentPage += 1;
    }
};

function newQueryLoad() {
    query = searchInputRef.value;
    currentPage = 1;
    galleryRef.innerHTML = '';
    renderNotify();
    console.log(query);
};

function renderNotify() {
    info({ text: `${query} results`, ...noticeOptions})
}





