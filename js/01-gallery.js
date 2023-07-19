import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';

const gallery = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems.map(createGalleryItemMarkup).join('');
gallery.innerHTML = galleryItemsMarkup;

const onGalleryItemClick = event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.dataset.source;
    openModal(largeImageUrl);
  }
};

gallery.addEventListener('click', onGalleryItemClick);

const openModal = largeImageUrl => {
  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
  `);
  instance.show();

  window.addEventListener('keydown', onModalWindowKeydown);

  function onModalWindowKeydown(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onModalWindowKeydown);
    }
  }
};
