/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const InstrumentFamilies = __webpack_require__(/*! ./models/instrument_families */ \"./src/models/instrument_families.js\")\nconst SelectView = __webpack_require__(/*! ./view/select_view */ \"./src/view/select_view.js\")\nconst ResultView = __webpack_require__(/*! ./view/result_view */ \"./src/view/result_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n  const field = document.createElement('label');\n  const instrumentFamilies = new InstrumentFamilies();\n  const instrumentData = instrumentFamilies.instrumentFamilies;\n  const selectView = new SelectView(instrumentData);\n  const resultView = new ResultView(field);\n\n  selectView.bindEvent();\n  resultView.bindEvent();\n  instrumentFamilies.bindEvent();\n\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helper/pub_sub.js":
/*!*******************************!*\
  !*** ./src/helper/pub_sub.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n\n  publish: function(channel, payload){\n    const event = new CustomEvent(channel,{\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function(channel,callback){\n    document.addEventListener(channel,callback)\n  }\n}\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helper/pub_sub.js?");

/***/ }),

/***/ "./src/models/instrument_families.js":
/*!*******************************************!*\
  !*** ./src/models/instrument_families.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helper/pub_sub */ \"./src/helper/pub_sub.js\")\n\nconst InstrumentFamilies = function() {\n  this.instrumentFamilies = [\n    {\n      name: 'Brass',\n      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\\'s lips',\n      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']\n    },\n    {\n      name: 'Strings',\n      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',\n      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']\n    },\n    {\n      name: 'Wind',\n      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',\n      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']\n    },\n    {\n      name: 'Percussion',\n      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',\n      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']\n    },\n    {\n      name: 'Keyboard',\n      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',\n      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']\n    }\n  ];\n};\n\nInstrumentFamilies.prototype.bindEvent = function () {\n  PubSub.subscribe('SelectView:selectedInstrument',(event) => {\n    const indexNumber = event.detail\n    const instrument = this.instrumentFamilies[indexNumber]\n    \n    PubSub.publish('InstrumentFamilies:instrument', instrument);\n  })\n\n};\nmodule.exports = InstrumentFamilies;\n\n\n//# sourceURL=webpack:///./src/models/instrument_families.js?");

/***/ }),

/***/ "./src/view/result_view.js":
/*!*********************************!*\
  !*** ./src/view/result_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helper/pub_sub.js */ \"./src/helper/pub_sub.js\")\n\nconst ResultView = function(field){\n  this.field = field;\n}\n\nResultView.prototype.bindEvent = function () {\n  PubSub.subscribe('InstrumentFamilies:instrument',(event) =>{\n    const selectedInstrument = event.detail;\n    this.displayResult(selectedInstrument);\n  });\n};\n\nResultView.prototype.displayResult = function (instrument) {\n  console.log(instrument);\n  const resultField = document.querySelector('#result-field');\n  this.field.textContent = `${instrument.name} ${instrument.description} ${instrument.instruments}`;\n  resultField.appendChild(this.field);\n};\n\nmodule.exports = ResultView;\n\n\n//# sourceURL=webpack:///./src/view/result_view.js?");

/***/ }),

/***/ "./src/view/select_view.js":
/*!*********************************!*\
  !*** ./src/view/select_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helper/pub_sub.js */ \"./src/helper/pub_sub.js\")\n\nconst SelectView = function(instrumentData){\n  this.instrumentData = instrumentData;\n};\n\nSelectView.prototype.bindEvent = function () {\n  const selection = document.querySelector('#instrument-families');\n  this.populate(this.instrumentData,selection);\n\n  selection.addEventListener('change',(event) => {\n    const selectedInstrument = event.target.value;\n    PubSub.publish('SelectView:selectedInstrument', selectedInstrument);\n  })\n\n};\n\n\nSelectView.prototype.populate = function (instrumentsData, selection) {\n  instrumentsData.forEach((instrument, index) =>{\n    const option = document.createElement('option');\n    option.textContent = instrument.name;\n    option.value = index\n    selection.appendChild(option);\n  })\n\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/view/select_view.js?");

/***/ })

/******/ });