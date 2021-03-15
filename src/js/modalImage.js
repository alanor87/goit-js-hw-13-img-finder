import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import { modalImgTemplate } from './DOMrefs';
export { renderModalImg };

const modalImg = basicLightbox.create(modalImgTemplate);

function renderModalImg(event) {
    if (!event.target.classList.contains('small-image')) return;
    const src = event.target.dataset.fullImageSrc;
    const modalImgRef = modalImg.element().querySelector('.modal-image');
    modalImgRef.src = src;
    modalImg.show();
}