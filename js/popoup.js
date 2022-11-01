import {generateData} from './data.js';

const userDialog = document.querySelector('#picture');
userDialog.classList.remove('hidden');

const pict = userDialog.querySelector('.pictures');
const pictTemp = document.querySelector('#DocumentFragment').content;

const simPicture = generateData();

const pictFragment = document.createDocumentFragment();

simPicture.forEach((picture) => {
  const wizardElement = pictTemp.cloneNode(true);
  wizardElement.querySelector('.src').textContent = picture.url;
  wizardElement.querySelector('.picture__likes').textContent = picture.likes;
  wizardElement.querySelector('.picture__comments').textContent = picture.comments;
  pict.appendChild(wizardElement);
});

pict.appendChild(pictFragment);
