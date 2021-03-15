import './styles.css';
import { newQueryLoad } from './js/apiService';
import { observer } from './js/intersection-observer';
import { observerAnchorRef, searchInputRef } from './js/DOMrefs';
import { galleryRef } from './js/DOMrefs';
import { renderModalImg } from './js/modalImage';
import { arrowUpScroll } from './js/arrowUpScroll';
import { arrowUp } from './js/DOMrefs';
import debounce from 'lodash.debounce';

observer.observe(observerAnchorRef);
searchInputRef.addEventListener('input', debounce(newQueryLoad, 1000));
galleryRef.addEventListener('click', renderModalImg);
arrowUp.addEventListener('click', arrowUpScroll);

