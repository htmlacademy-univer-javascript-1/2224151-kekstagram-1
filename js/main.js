
const description = [
  'Супер',
  'Красота',
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const nameY = [
  'Александра',
  'Вера',
  'Андрей',
  'Антон',
];

const data =25;
const commentsId =[];


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const max_comment_id = 1000;

function generateCommentId () {
  let newId =0;
  do{
    newId = getRandomPositiveInteger(1,max_comment_id);
  }
  while (Array.prototype.indexOf(commentsId,newId) !==-1);
  commentsId.push(newId);
  return newId;
}

const min_image =1;
const max_image =6;

function createComment (){
  return {
    id: generateCommentId(),
    avatar : `img/avatar${getRandomPositiveInteger(min_image,max_image)}.svg `,
    message : getRandomArrayElement(message),
    name: getRandomArrayElement(nameY)
  };
}


const min_likes = 15;
const max_likes = 200;

function createPicture (index) {
  return {
    id: index+1,
    url: `photos/${index +1}.jpg`,
    description : getRandomArrayElement(description),
    likes: getRandomPositiveInteger(min_likes,max_likes),
    comments: createComment()
  };
}

const generateDataPicture = Array.from({length: data},createPicture() );

console.log(generateDataPicture);

