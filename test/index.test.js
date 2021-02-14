import assert from 'assert';
import store from '@indlekofer/redux-store';
import { GET_SIZE, REDUCER, config, setup, unset, isRetina } from '../src/index';

describe('dispatch', () => {
  var unsubscribe;
  function handleChangeTest(done, width, height) {
    const state = store.getState()[REDUCER].get(GET_SIZE)
    assert.equal(width, state.width);
    assert.equal(height, state.height);
    done();
  }
  beforeEach(() => {
    function Window() {
      this.testAdd = 0;
      this.testRemove = 0;
      this.innerWidth = 1111;
      this.innerHeight = 2222;
    };
    Window.prototype.addEventListener = function (name, func) {this.testAdd++};
    Window.prototype.removeEventListener = function (name, func) {this.testRemove++};
    global.window = new Window();
  });

  afterEach(() => {
    unsubscribe();
  });
  it('check config', (done) => {
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, 1111, 2222));
    config();
  });
  it('check setup', () => {
    setup();
    assert.equal(window.testAdd === 1, true);
    assert.equal(window.testRemove === 0, true);
  });
  it('check unset', () => {
    unset();
    assert.equal(window.testAdd === 0, true);
    assert.equal(window.testRemove === 1, true);
  });
  it('check unset with undefinedwindow', () => {
    global.window = undefined;
    unset();
    assert.equal(typeof window === 'undefined', true);
  });
  it('check isRetina pixel ratio', () => {
    global.window = {
      devicePixelRatio: 1.5
    };
    assert.equal(isRetina(), true);
  });
  it('check isRetina normal pixel ratio', () => {
    global.window = {
      devicePixelRatio: 1
    };
    assert.equal(isRetina(), false);
  });
  it('check isRetina empty window object', () => {
    global.window = {};
    assert.equal(isRetina(), false);
  });
  it('check isRetina matchMedia', () => {
    global.window = {
      devicePixelRatio: 1,
      matchMedia: function() { return { matches: true } }
    };
    assert.equal(isRetina(), true);
  });

});

