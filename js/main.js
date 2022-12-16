import './scale.js';
import './effect.js';
import {initPictures} from './popoup.js';
import { getData } from './api.js';
import { onFail } from './util.js';
import  './form.js';

getData(onSuccess, onFail);

function onSuccess(data) {
  initPictures(data);
}
