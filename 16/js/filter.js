const NUMBER_OF_RANDOM_PHOTOS = 10;
const NUMBER_START =0;
const filterContainer = document.querySelector('.img-filters');
const filterButtons = [...document.querySelectorAll('.img-filters__button')];

export function filterByDefault(photos) {
  return photos;
}

export function filterByRandom(photos) {
  return shuffleArray(photos).slice(NUMBER_START, NUMBER_OF_RANDOM_PHOTOS);
}

export function filterByComments(photos) {
  const photosCopy = photos.slice();

  return photosCopy.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1);
}

export function activateFilters() {
  filterContainer.classList.remove('img-filters--inactive');

  filterContainer.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target && target.matches('.img-filters__button')) {
      filterButtons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });

      target.classList.add('img-filters__button--active');
    }
  });
}
export function shuffleArray(arr) {
  const copyArray = arr.slice();
  for (let i = copyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }
  return copyArray;
}
