import {getRandomArrayElement,getRandomPositiveInteger} from './util.js';

const DESCRIPTION = [
  'Супер',
  'Красота',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Александра',
  'Вера',
  'Андрей',
  'Антон',
];

const NUMBER_OF_PHOTOS =25;
const commentsId =[];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENT_ID = 1000;
const MIN_IMAGE = 1;
const MAX_IMAGE = 6;

function generateCommentId () {
  let newId =0;
  do{
    newId = getRandomPositiveInteger(1,MAX_COMMENT_ID);
  }
  while (Array.prototype.indexOf(commentsId,newId) !==-1);
  commentsId.push(newId);
  return newId;
}

function createComment (){
  return {
    id: generateCommentId(),
    avatar : `img/avatar${getRandomPositiveInteger(MIN_IMAGE,MAX_IMAGE)}.svg `,
    MESSAGE : getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME)
  };
}

function createPicture (index) {
  return {
    id: index+1,
    url: `photos/${index +1}.jpg`,
    DESCRIPTION : getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(MIN_LIKES,MAX_LIKES),
    comments: createComment(2)
  };
}

// eslint-disable-next-line no-unused-vars
function lenghtString(string , maxLenght)
{
  return string.lenght <=maxLenght;
}

const generateData = Array.from({length: NUMBER_OF_PHOTOS},(cur,i) => createPicture(i) );

export{generateData};
