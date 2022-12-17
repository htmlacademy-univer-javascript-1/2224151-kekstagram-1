import {addPictureEvent} from './bigPicture.js';
import { activateFilters, filterByComments, filterByDefault, filterByRandom } from './filter.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const pictFragment = document.createDocumentFragment();
const filterContainer = document.querySelector('.img-filters');
const RERENDER_DELAY = 500;


function removeOldList() {
  pictures.querySelectorAll('.picture').forEach((item) => item.remove());
}

export function debounce(cb, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

const renderPicture = (picture) => {
  removeOldList();
  picture.forEach((element) => {
    const pictElement = pictureTemplate.cloneNode(true);

    pictElement.querySelector('.picture__img').src = element.url;
    pictElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictElement.querySelector('.picture__likes').textContent = element.likes;
    pictElement.addEventListener('click', () => {
      addPictureEvent(pictElement,element);
    });
    pictFragment.appendChild(pictElement);
  });
  pictures.appendChild(pictFragment);
};

export function renderPictureList(pictureData) {
  renderPicture(pictureData);

  function changeFilterHandler(evt) {
    const target = evt.target;

    switch (target.id) {
      case 'filter-default':
        renderPicture(
          filterByDefault(pictureData),
        );
        break;
      case 'filter-random':
        renderPicture(
          filterByRandom(pictureData),
        );
        break;
      case 'filter-discussed':
        renderPicture(
          filterByComments(pictureData),
        );
        break;
    }
  }

  filterContainer.addEventListener('click', debounce(changeFilterHandler, RERENDER_DELAY));
}

const initPictures = (images) => {
  renderPictureList(images);
  activateFilters();
};
export {initPictures};
