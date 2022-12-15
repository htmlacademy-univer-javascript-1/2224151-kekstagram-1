import { isEscapeKey } from './util.js';
import { setDefoltScale } from './scale.js';


const imageUploadStart = document.querySelector('.img-upload__start');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const imageUploadForm = document.querySelector('.img-upload__form');
// eslint-disable-next-line no-unused-vars
const imageUploadPreview = imageUploadOverlay.querySelector('.img-upload__preview');
const effectLevelSlider = imageUploadForm.querySelector('.effect-level__slider');
const photoEffectsPreview = imageUploadForm.querySelectorAll('.effects__preview');


const deleteForm = () => {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  textHashtags.value = '';
  textDescription.value = '';
};

const formClosing = (evt) => {
  if (isEscapeKey(evt)) {
    document.removeEventListener('keydown', formClosing);
    deleteForm();
  }
};

const listenerControl = () => {
  document.addEventListener('keydown', formClosing);
  imageUploadOverlay.querySelector('.img-upload__cancel').addEventListener('click', () => {
    deleteForm();
    document.removeEventListener('keydown', formClosing);
  }, { once: true } );
};

const addForm = () => {
  imageUploadStart.addEventListener('change', () => {
    imageUploadOverlay.classList.remove('hidden');
    effectLevelSlider.classList.add('hidden');
    document.body.classList.add('modal-open');
    listenerControl();
    setDefoltScale();
  });
};

export { addForm};
