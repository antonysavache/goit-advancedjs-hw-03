function createImageCard(image) {
  return `
    <a href="${image.largeImageURL}" class="gallery-item">
      <div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${image.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${image.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${image.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${image.downloads}
          </p>
        </div>
      </div>
    </a>
  `;
}

export function renderImageGallery(images) {
  return images.map(createImageCard).join('');
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function showLoader(loader) {
  loader.style.display = 'block';
}

export function hideLoader(loader) {
  loader.style.display = 'none';
}
