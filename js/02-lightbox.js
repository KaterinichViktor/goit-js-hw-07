import { galleryItems } from './gallery-items.js';
// Change code below this line
  
  const gallery = document.querySelector('.gallery');
  
  const createGalleryItemMarkup = ({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  };
  
  const galleryItemsMarkup = galleryItems.map(createGalleryItemMarkup).join('');
  gallery.innerHTML = galleryItemsMarkup;
  
  script.onload = initializeLightbox;

  
//   // Ініціалізація бібліотеки SimpleLightbox після завантаження скрипту
//   function initializeLightbox() {
//     const lightbox = new SimpleLightbox('.gallery a', {
//       captions: true,
//       captionDelay: 250,
//       captionPosition: 'bottom',
//       captionType: 'attr',
//       captionSrc: 'alt',
//     });
//   }

// console.log(galleryItems);
