
const description = [
    'Супер',
    'Красота',
]

const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',

]

const nameY = [
    'Александра',
    'Вера',
    'Андрей',
    'Антон',
]

const data =25;


const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

const getRandomArrayElement = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
  };

const comment = {
    id: getRandomPositiveInteger(1,25),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: getRandomArrayElement(message),
    name: getRandomArrayElement(nameY)

}

const createDescription = () => {
    return {
      id: getRandomPositiveInteger(1,25),
      url: `photos/${id}.jpg`,
      description: getRandomArrayElement(description),
      likes: Math.random(15,200),
      comment: comment
    };
  };

const generateData = Array.from({length: data}, createDescription )

console.log(generateData)
