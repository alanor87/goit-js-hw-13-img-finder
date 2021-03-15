
import { nextPageLoad } from './apiService'
export { observer };

const options = {
    root: null,
    rootMargin: '50px',
    threshold: 1.0
}

const observer = new IntersectionObserver(nextPageLoad, options);