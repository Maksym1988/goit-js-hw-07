import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function getGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

const galleryMarkup = getGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  document.addEventListener('keydown', onKeyPress);

  function onKeyPress(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
