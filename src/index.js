import debounce from '@indlekofer/debounce';
import { handleChange, REDUCER } from '@indlekofer/media';

const GET_SIZE = '@indlekofer/media_size/GET_SIZE';

export const config = () => {
  handleChange(GET_SIZE, {
    width: typeof window === 'object' ? window.innerWidth : null,
    height: typeof window === 'object' ? window.innerHeight : null
  });
};

const configDebounced = debounce(config, 400);

export const setup = () => {
  if (typeof window === 'object') window.addEventListener('resize', configDebounced);
};
export const unset = () => {
  if (typeof window === 'object') window.removeEventListener('resize', configDebounced);
};
setup();
config();

export {
  REDUCER,
  GET_SIZE
};

export const isRetina = () => {
  let mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5),';
  mediaQuery += '(min--moz-device-pixel-ratio: 1.5),';
  mediaQuery += '(-o-min-device-pixel-ratio: 3/2),';
  mediaQuery += '(min-resolution: 1.5dppx)';
  if (window.devicePixelRatio > 1) return true;
  else if (window.matchMedia && window.matchMedia(mediaQuery).matches) return true;
  else return false;
};

export default GET_SIZE;
