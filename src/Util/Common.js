import AsyncStorage from '@react-native-async-storage/async-storage';
import {PixelRatio} from 'react-native';
import Storage from 'react-native-storage';

export const storage = new Storage({
  storageBackend: AsyncStorage,
});

export const memoObject = {
  id: '',
  title: '',
  lastDate: '',
  lineList: [],
};

export const getGuid = () => {
  let s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};

export const getDate = () => {
  const d = new Date();
  return (
    d.getFullYear() +
    '/' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + d.getDate()).slice(-2) +
    ' ' +
    ('0' + d.getHours()).slice(-2) +
    ':' +
    ('0' + d.getMinutes()).slice(-2) +
    ':' +
    ('0' + d.getSeconds()).slice(-2)
  );
};

export const getPixels = () => {
  const targetPixelCount = 1080;
  const pixelRatio = PixelRatio.get();
  return targetPixelCount / pixelRatio;
};
