import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api.js';
import {
  renderImageGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions.js';

import './css/styles.css';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery(gallery);
  showLoader(loader);

  fetchImages(query)
    .then(data => {
      hideLoader(loader);

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const markup = renderImageGallery(data.hits);
      gallery.innerHTML = markup;

      lightbox.refresh();

      iziToast.success({
        title: 'Success',
        message: `Found ${data.hits.length} images!`,
        position: 'topRight',
      });
    })
    .catch(error => {
      hideLoader(loader);
      console.error('Error fetching images:', error);

      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
    });
}
