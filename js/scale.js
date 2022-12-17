const scaleCounter = document.querySelector('.scale__control--value');
const scaleMinusButton = document.querySelector('.scale__control--smaller');
const scalePlusButton = document.querySelector('.scale__control--bigger');
const photoPreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_STEP = 25;
const DEFAULT_SCALE_VALUE = 100;


function setScaleOnImg() {
  const currentValue = parseFloat(scaleCounter.value);
  photoPreview.style.transform = `scale(${currentValue / DEFAULT_SCALE_VALUE})`;
}
function setDefoltScale(){
  scaleCounter.value = DEFAULT_SCALE_VALUE;
  setScaleOnImg();
}

function prevScaleClickHandler() {
  const currentValue = parseFloat(scaleCounter.value);

  if (currentValue <= MIN_SCALE_VALUE) {
    return false;
  }

  scaleCounter.value = `${currentValue - DEFAULT_SCALE_STEP}%`;

  setScaleOnImg();
}

function nextScaleClickHandler() {
  const currentValue = parseFloat(scaleCounter.value);

  if (currentValue >= MAX_SCALE_VALUE) {
    return false;
  }

  scaleCounter.value = `${currentValue + DEFAULT_SCALE_STEP}%`;

  setScaleOnImg();
}

export function resetScaleModifier() {
  photoPreview.style.transform = '';
}

scaleMinusButton.addEventListener('click', prevScaleClickHandler);
scalePlusButton.addEventListener('click', nextScaleClickHandler);

export{setDefoltScale};
