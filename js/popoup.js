import addPictureEvent from './bigPicture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const pictFragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const pictElement = pictureTemplate.cloneNode(true);

  pictElement.querySelector('.picture__img').src = picture.url;
  pictElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictElement.querySelector('.picture__likes').textContent = picture.likes;

  addPictureEvent(pictElement, picture);

  return pictElement;
};

const initPictures = (images) => {
  images.forEach((picture) => {
    pictFragment.appendChild(renderPicture(picture));
  });

  pictures.appendChild(pictFragment);
};


export {initPictures};
