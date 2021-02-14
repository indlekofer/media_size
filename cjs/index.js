"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "REDUCER", {
  enumerable: true,
  get: function get() {
    return _media.REDUCER;
  }
});
exports["default"] = exports.isRetina = exports.GET_SIZE = exports.unset = exports.setup = exports.config = void 0;

var _debounce = _interopRequireDefault(require("@indlekofer/debounce"));

var _media = require("@indlekofer/media");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var GET_SIZE = '@indlekofer/media_size/GET_SIZE';
exports.GET_SIZE = GET_SIZE;

var config = function config() {
  (0, _media.handleChange)(GET_SIZE, {
    width: (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window.innerWidth : null,
    height: (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window.innerHeight : null
  });
};

exports.config = config;
var configDebounced = (0, _debounce["default"])(config, 400);

var setup = function setup() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') window.addEventListener('resize', configDebounced);
};

exports.setup = setup;

var unset = function unset() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') window.removeEventListener('resize', configDebounced);
};

exports.unset = unset;
setup();
config();

var isRetina = function isRetina() {
  var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5),';
  mediaQuery += '(min--moz-device-pixel-ratio: 1.5),';
  mediaQuery += '(-o-min-device-pixel-ratio: 3/2),';
  mediaQuery += '(min-resolution: 1.5dppx)';
  if (window.devicePixelRatio > 1) return true;else if (window.matchMedia && window.matchMedia(mediaQuery).matches) return true;else return false;
};

exports.isRetina = isRetina;
var _default = GET_SIZE;
exports["default"] = _default;