# @indlekofer/media_size

## Usage

```js
import GET_SIZE, { REDUCER as MEDIA_REDUCER } from '@indlekofer/media_size';

const mapStateToProps = (state) => {
  return {
    mediaSize: state[MEDIA_REDUCER].get(GET_SIZE) //mediaSize -> {width: 100, height: 100}
  }
}

```

## Function exports

### setup

### unset

### config

will set initial values for width and height. will be called automaticaly.

## Constant exports

### REDUCER
