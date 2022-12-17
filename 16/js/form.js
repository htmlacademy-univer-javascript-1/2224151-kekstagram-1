import { isEscapeKey } from './util.js';
import { setDefoltScale } from './scale.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadInpuc = document.querySelector('.img-upload__input');
// eslint-disable-next-line no-unused-vars
const imageUploadPreview = imageUploadOverlay.querySelector('.img-upload__preview');
const photoPreview = imageUploadForm.querySelector('.img-upload__preview img');
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
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  listenerControl();
  setDefoltScale();
};

imageUploadInpuc.addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    addForm();

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.src = reader.result;
      photoEffectsPreview.forEach((preview) => {
        preview.style.backgroundImage = `url('${reader.result}')`;
      });
    });

    reader.readAsDataURL(file);
  }
});
