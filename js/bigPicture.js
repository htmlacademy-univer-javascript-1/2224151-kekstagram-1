
const COMMENTS_TO_SHOW = 5;
let currentComments = [];
const bigPicture = document.querySelector('.big-picture');
const pictureComments = bigPicture.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('#picture-cancel');
const commentItem = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');

function renderAllComments(commentsData) {
  const commentFragment = document.createDocumentFragment();

  commentsData.forEach(({ avatar, name, message }) => {
    const comment = commentItem.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentFragment.append(comment);
  });

  return commentFragment;
}
function showFirstComments(comments) {
  const displayedComments = comments.slice(0, COMMENTS_TO_SHOW);
  const renderFirstComments = renderAllComments(displayedComments);

  commentCount.firstChild.textContent = `${displayedComments.length  } из  `;
  pictureComments.appendChild(renderFirstComments);

  if (pictureComments.length === comments.length) {
    commentLoader.classList.add('hidden');
  }
}

function commentLoadClickHandler() {
  const additionalComments = currentComments.slice(
    pictureComments.children.length,
    pictureComments.children.length + COMMENTS_TO_SHOW,
  );
  const renderMoreComments = renderAllComments(additionalComments);

  pictureComments.appendChild(renderMoreComments);

  commentCount.firstChild.textContent = `${pictureComments.children.length  } из  `;
}


const addPictureEvent = (picture, data) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__caption').textContent = data.description;
  pictureComments.innerHTML = '';
  currentComments = data.comments;
  showFirstComments(data.comments);
  commentLoader.addEventListener('click', commentLoadClickHandler);
  document.querySelector('body').classList.add('modal-open');
};


const EscapeKeyDown = (evt) => {
  if(evt.key === 'Escape'){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
};

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', EscapeKeyDown);
});
document.addEventListener('keydown', EscapeKeyDown);
export {addPictureEvent};
