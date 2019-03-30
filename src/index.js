import debounce from '@indlekofer/debounce';
import { handleChange, REDUCER } from '@indlekofer/media';

const GET_SIZE = '@indlekofer/media_size/GET_SIZE';

export const config = (width = null, height = null, force = false) => {
  handleChange(GET_SIZE, {
    width: typeof window === 'object' && !force ? window.innerWidth : width,
    height: typeof window === 'object' && !force ? window.innerHeight : height
  });
}

const configDebounced = debounce(config, 400);

export const setup = () => {
  if (typeof window === 'object') window.addEventListener('resize', configDebounced);
}
export const unset = () => {
  if (typeof window === 'object') window.removeEventListener('resize', configDebounced);
}
setup();
config();

export {
  REDUCER,
  GET_SIZE
}
export default GET_SIZE;
