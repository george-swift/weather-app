/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/loading-component.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/loading-component.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* stylelint-disable */\\n\\n.loader {\\n  color: #fff;\\n  position: fixed;\\n  box-sizing: border-box;\\n  left: -9999px;\\n  top: -9999px;\\n  width: 0;\\n  height: 0;\\n  overflow: hidden;\\n  z-index: 999999;\\n}\\n\\n.loader::after,\\n.loader::before {\\n  box-sizing: border-box;\\n  display: none;\\n}\\n\\n.loader.is-active {\\n  background-color: rgba(0, 0, 0, 0.85);\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n}\\n\\n.loader.is-active::after,\\n.loader.is-active::before {\\n  display: block;\\n}\\n\\n@keyframes rotation {\\n  0% {\\n      transform: rotate(0);\\n  }\\n  to {\\n      transform: rotate(359deg);\\n  }\\n}\\n\\n@keyframes blink {\\n  0% {\\n      opacity: 0.5;\\n  }\\n  to {\\n      opacity: 1;\\n  }\\n}\\n\\n.loader[data-text]::before {\\n  position: fixed;\\n  left: 0;\\n  top: 50%;\\n  color: currentColor;\\n  font-family: Helvetica, Arial, sans-serif;\\n  text-align: center;\\n  width: 100%;\\n  font-size: 14px;\\n}\\n\\n.loader[data-text=\\\"\\\"]::before {\\n  content: \\\"Loading\\\";\\n}\\n\\n.loader[data-text]:not([data-text=\\\"\\\"])::before {\\n  content: attr(data-text);\\n}\\n\\n.loader[data-text][data-blink]::before {\\n  animation: blink 1s linear infinite alternate;\\n}\\n\\n.loader-default[data-text]::before {\\n  top: calc(50% - 63px);\\n}\\n\\n.loader-default::after {\\n  content: \\\"\\\";\\n  position: fixed;\\n  width: 48px;\\n  height: 48px;\\n  border: 8px solid #fff;\\n  border-left-color: transparent;\\n  border-radius: 50%;\\n  top: calc(50% - 24px);\\n  left: calc(50% - 24px);\\n  animation: rotation 1s linear infinite;\\n}\\n\\n.loader-default[data-half]::after {\\n  border-right-color: transparent;\\n}\\n\\n.loader-default[data-inverse]::after {\\n  animation-direction: reverse;\\n}\\n\\n.loader-double::after,\\n.loader-double::before {\\n  content: \\\"\\\";\\n  position: fixed;\\n  border-radius: 50%;\\n  border: 8px solid;\\n  animation: rotation 1s linear infinite;\\n}\\n\\n.loader-double::after {\\n  width: 48px;\\n  height: 48px;\\n  border-color: #fff;\\n  border-left-color: transparent;\\n  top: calc(50% - 24px);\\n  left: calc(50% - 24px);\\n}\\n\\n.loader-double::before {\\n  width: 64px;\\n  height: 64px;\\n  border-color: #eb974e;\\n  border-right-color: transparent;\\n  animation-duration: 2s;\\n  top: calc(50% - 32px);\\n  left: calc(50% - 32px);\\n}\\n\\n.loader-bar[data-text]::before {\\n  top: calc(50% - 40px);\\n  color: #fff;\\n}\\n\\n.loader-bar::after {\\n  content: \\\"\\\";\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  width: 200px;\\n  height: 20px;\\n  transform: translate(-50%, -50%);\\n  background: linear-gradient(-45deg, #4183d7 25%, #52b3d9 0, #52b3d9 50%, #4183d7 0, #4183d7 75%, #52b3d9 0, #52b3d9);\\n  background-size: 20px 20px;\\n  box-shadow: inset 0 10px 0 hsla(0, 0%, 100%, 0.2), 0 0 0 5px rgba(0, 0, 0, 0.2);\\n  animation: moveBar 1.5s linear infinite reverse;\\n}\\n\\n.loader-bar[data-rounded]::after {\\n  border-radius: 15px;\\n}\\n\\n.loader-bar[data-inverse]::after {\\n  animation-direction: normal;\\n}\\n\\n@keyframes moveBar {\\n  0% {\\n      background-position: 0 0;\\n  }\\n  to {\\n      background-position: 20px 20px;\\n  }\\n}\\n\\n.loader-bar-ping-pong::before {\\n  width: 200px;\\n  background-color: #000;\\n}\\n\\n.loader-bar-ping-pong::after,\\n.loader-bar-ping-pong::before {\\n  content: \\\"\\\";\\n  height: 20px;\\n  position: absolute;\\n  top: calc(50% - 10px);\\n  left: calc(50% - 100px);\\n}\\n\\n.loader-bar-ping-pong::after {\\n  width: 50px;\\n  background-color: #f19;\\n  animation: moveBarPingPong 0.5s linear infinite alternate;\\n}\\n\\n.loader-bar-ping-pong[data-rounded]::before {\\n  border-radius: 10px;\\n}\\n\\n.loader-bar-ping-pong[data-rounded]::after {\\n  border-radius: 50%;\\n  width: 20px;\\n  animation-name: moveBarPingPongRounded;\\n}\\n\\n@keyframes moveBarPingPong {\\n  0% {\\n      left: calc(50% - 100px);\\n  }\\n  to {\\n      left: calc(50% - -50px);\\n  }\\n}\\n\\n@keyframes moveBarPingPongRounded {\\n  0% {\\n      left: calc(50% - 100px);\\n  }\\n  to {\\n      left: calc(50% - -80px);\\n  }\\n}\\n\\n@keyframes corners {\\n  6% {\\n      width: 60px;\\n      height: 15px;\\n  }\\n  25% {\\n      width: 15px;\\n      height: 15px;\\n      left: calc(100% - 15px);\\n      top: 0;\\n  }\\n  31% {\\n      height: 60px;\\n  }\\n  50% {\\n      height: 15px;\\n      top: calc(100% - 15px);\\n      left: calc(100% - 15px);\\n  }\\n  56% {\\n      width: 60px;\\n  }\\n  75% {\\n      width: 15px;\\n      left: 0;\\n      top: calc(100% - 15px);\\n  }\\n  81% {\\n      height: 60px;\\n  }\\n}\\n\\n.loader-border[data-text]::before {\\n  color: #fff;\\n}\\n\\n.loader-border::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 15px;\\n  height: 15px;\\n  background-color: #ff0;\\n  animation: corners 3s ease both infinite;\\n}\\n\\n.loader-ball::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 50px;\\n  height: 50px;\\n  top: 50%;\\n  left: 50%;\\n  margin: -25px 0 0 -25px;\\n  background-color: #fff;\\n  border-radius: 50%;\\n  z-index: 1;\\n  animation: kickBall 1s infinite alternate ease-in both;\\n}\\n\\n.loader-ball[data-shadow]::before {\\n  box-shadow: inset -5px -5px 10px 0 rgba(0, 0, 0, 0.5);\\n}\\n\\n.loader-ball::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border-radius: 50%;\\n  width: 45px;\\n  height: 20px;\\n  top: calc(50% + 10px);\\n  left: 50%;\\n  margin: 0 0 0 -22.5px;\\n  z-index: 0;\\n  animation: shadow 1s infinite alternate ease-out both;\\n}\\n\\n@keyframes shadow {\\n  0% {\\n      background-color: transparent;\\n      transform: scale(0);\\n  }\\n  40% {\\n      background-color: transparent;\\n      transform: scale(0);\\n  }\\n  95% {\\n      background-color: rgba(0, 0, 0, 0.75);\\n      transform: scale(1);\\n  }\\n  to {\\n      background-color: rgba(0, 0, 0, 0.75);\\n      transform: scale(1);\\n  }\\n}\\n\\n@keyframes kickBall {\\n  0% {\\n      transform: translateY(-80px) scaleX(0.95);\\n  }\\n  90% {\\n      border-radius: 50%;\\n  }\\n  to {\\n      transform: translateY(0) scaleX(1);\\n      border-radius: 50% 50% 20% 20%;\\n  }\\n}\\n\\n.loader-smartphone::after {\\n  content: \\\"\\\";\\n  color: #fff;\\n  font-size: 12px;\\n  font-family: Helvetica, Arial, sans-serif;\\n  text-align: center;\\n  line-height: 120px;\\n  position: fixed;\\n  left: 50%;\\n  top: 50%;\\n  width: 70px;\\n  height: 130px;\\n  margin: -65px 0 0 -35px;\\n  border: 5px solid #fd0;\\n  border-radius: 10px;\\n  box-shadow: inset 0 5px 0 0 #fd0;\\n  background: radial-gradient(circle at 50% 90%, rgba(0, 0, 0, 0.5) 6px, transparent 0), linear-gradient(0deg, #fd0 22px, transparent 0), linear-gradient(0deg, rgba(0, 0, 0, 0.5) 22px, rgba(0, 0, 0, 0.5));\\n  animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;\\n}\\n\\n.loader-smartphone[data-screen=\\\"\\\"]::after {\\n  content: \\\"Loading\\\";\\n}\\n\\n.loader-smartphone:not([data-screen=\\\"\\\"])::after {\\n  content: attr(data-screen);\\n}\\n\\n@keyframes shake {\\n  5% {\\n      transform: translate3d(-1px, 0, 0);\\n  }\\n  10% {\\n      transform: translate3d(1px, 0, 0);\\n  }\\n  15% {\\n      transform: translate3d(-1px, 0, 0);\\n  }\\n  20% {\\n      transform: translate3d(1px, 0, 0);\\n  }\\n  25% {\\n      transform: translate3d(-1px, 0, 0);\\n  }\\n  30% {\\n      transform: translate3d(1px, 0, 0);\\n  }\\n  35% {\\n      transform: translate3d(-1px, 0, 0);\\n  }\\n  40% {\\n      transform: translate3d(1px, 0, 0);\\n  }\\n  45% {\\n      transform: translate3d(-1px, 0, 0);\\n  }\\n  50% {\\n      transform: translate3d(1px, 0, 0);\\n  }\\n  55% {\\n      transform: translate3d(-1px, 0, 0);\\n  }\\n}\\n\\n.loader-clock::before {\\n  width: 120px;\\n  height: 120px;\\n  border-radius: 50%;\\n  margin: -60px 0 0 -60px;\\n  background: linear-gradient(180deg, transparent 50%, #f5f5f5 0), linear-gradient(90deg, transparent 55px, #2ecc71 0, #2ecc71 65px, transparent 0), linear-gradient(180deg, #f5f5f5 50%, #f5f5f5 0);\\n  box-shadow: inset 0 0 0 10px #f5f5f5, 0 0 0 5px #555, 0 0 0 10px #7b7b7b;\\n  animation: rotation infinite 2s linear;\\n}\\n\\n.loader-clock::after,\\n.loader-clock::before {\\n  content: \\\"\\\";\\n  position: fixed;\\n  left: 50%;\\n  top: 50%;\\n  overflow: hidden;\\n}\\n\\n.loader-clock::after {\\n  width: 60px;\\n  height: 40px;\\n  margin: -20px 0 0 -15px;\\n  border-radius: 20px 0 0 20px;\\n  background: radial-gradient(circle at 14px 20px, #25a25a 10px, transparent 0), radial-gradient(circle at 14px 20px, #1b7943 14px, transparent 0), linear-gradient(180deg, transparent 15px, #2ecc71 0, #2ecc71 25px, transparent 0);\\n  animation: rotation infinite 24s linear;\\n  transform-origin: 15px center;\\n}\\n\\n.loader-curtain::after,\\n.loader-curtain::before {\\n  position: fixed;\\n  width: 100%;\\n  top: 50%;\\n  margin-top: -35px;\\n  font-size: 70px;\\n  text-align: center;\\n  font-family: Helvetica, Arial, sans-serif;\\n  overflow: hidden;\\n  line-height: 1.2;\\n  content: \\\"Loading\\\";\\n}\\n\\n.loader-curtain::before {\\n  color: #666;\\n}\\n\\n.loader-curtain::after {\\n  color: #fff;\\n  height: 0;\\n  animation: curtain 1s linear infinite alternate both;\\n}\\n\\n.loader-curtain[data-curtain-text]:not([data-curtain-text=\\\"\\\"])::after,\\n.loader-curtain[data-curtain-text]:not([data-curtain-text=\\\"\\\"])::before {\\n  content: attr(data-curtain-text);\\n}\\n\\n.loader-curtain[data-brazilian]::before {\\n  color: #f1c40f;\\n}\\n\\n.loader-curtain[data-brazilian]::after {\\n  color: #2ecc71;\\n}\\n\\n.loader-curtain[data-colorful]::before {\\n  animation: maskColorful 2s linear infinite alternate both;\\n}\\n\\n.loader-curtain[data-colorful]::after {\\n  animation: curtain 1s linear infinite alternate both, maskColorful-front 2s 1s linear infinite alternate both;\\n  color: #000;\\n}\\n\\n@keyframes maskColorful {\\n  0% {\\n      color: #3498db;\\n  }\\n  49.5% {\\n      color: #3498db;\\n  }\\n  50.5% {\\n      color: #e74c3c;\\n  }\\n  to {\\n      color: #e74c3c;\\n  }\\n}\\n\\n@keyframes maskColorful-front {\\n  0% {\\n      color: #2ecc71;\\n  }\\n  49.5% {\\n      color: #2ecc71;\\n  }\\n  50.5% {\\n      color: #f1c40f;\\n  }\\n  to {\\n      color: #f1c40f;\\n  }\\n}\\n\\n@keyframes curtain {\\n  0% {\\n      height: 0;\\n  }\\n  to {\\n      height: 84px;\\n  }\\n}\\n\\n.loader-music::after,\\n.loader-music::before {\\n  content: \\\"\\\";\\n  position: fixed;\\n  width: 240px;\\n  height: 240px;\\n  top: 50%;\\n  left: 50%;\\n  margin: -120px 0 0 -120px;\\n  border-radius: 50%;\\n  text-align: center;\\n  line-height: 240px;\\n  color: #fff;\\n  font-size: 40px;\\n  font-family: Helvetica, Arial, sans-serif;\\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);\\n  letter-spacing: -1px;\\n}\\n\\n.loader-music::after {\\n  backface-visibility: hidden;\\n}\\n\\n.loader-music[data-hey-oh]::after,\\n.loader-music[data-hey-oh]::before {\\n  box-shadow: 0 0 0 10px;\\n}\\n\\n.loader-music[data-hey-oh]::before {\\n  background-color: #fff;\\n  color: #000;\\n  animation: coinBack 2.5s linear infinite, oh 5s 1.25s linear infinite both;\\n}\\n\\n.loader-music[data-hey-oh]::after {\\n  background-color: #000;\\n  animation: coin 2.5s linear infinite, hey 5s linear infinite both;\\n}\\n\\n.loader-music[data-no-cry]::after,\\n.loader-music[data-no-cry]::before {\\n  background: linear-gradient(45deg, #009b3a 50%, #fed100 51%);\\n  box-shadow: 0 0 0 10px #000;\\n}\\n\\n.loader-music[data-no-cry]::before {\\n  animation: coinBack 2.5s linear infinite, cry 5s 1.25s linear infinite both;\\n}\\n\\n.loader-music[data-no-cry]::after {\\n  animation: coin 2.5s linear infinite, no 5s linear infinite both;\\n}\\n\\n.loader-music[data-we-are]::before {\\n  animation: coinBack 2.5s linear infinite, theWorld 5s 1.25s linear infinite both;\\n  background: radial-gradient(ellipse at center, #4ecdc4 0, #556270);\\n}\\n\\n.loader-music[data-we-are]::after {\\n  animation: coin 2.5s linear infinite, weAre 5s linear infinite both;\\n  background: radial-gradient(ellipse at center, #26d0ce 0, #1a2980);\\n}\\n\\n.loader-music[data-rock-you]::before {\\n  animation: coinBack 2.5s linear infinite, rockYou 5s 1.25s linear infinite both;\\n  background: #444;\\n}\\n\\n.loader-music[data-rock-you]::after {\\n  animation: coin 2.5s linear infinite, weWill 5s linear infinite both;\\n  background: #96281b;\\n}\\n\\n@keyframes coin {\\n  to {\\n      transform: rotateY(359deg);\\n  }\\n}\\n\\n@keyframes coinBack {\\n  0% {\\n      transform: rotateY(180deg);\\n  }\\n  50% {\\n      transform: rotateY(1turn);\\n  }\\n  to {\\n      transform: rotateY(180deg);\\n  }\\n}\\n\\n@keyframes hey {\\n  0% {\\n      content: \\\"Hey!\\\";\\n  }\\n  50% {\\n      content: \\\"Let's!\\\";\\n  }\\n  to {\\n      content: \\\"Hey!\\\";\\n  }\\n}\\n\\n@keyframes oh {\\n  0% {\\n      content: \\\"Oh!\\\";\\n  }\\n  50% {\\n      content: \\\"Go!\\\";\\n  }\\n  to {\\n      content: \\\"Oh!\\\";\\n  }\\n}\\n\\n@keyframes no {\\n  0% {\\n      content: \\\"No...\\\";\\n  }\\n  50% {\\n      content: \\\"no\\\";\\n  }\\n  to {\\n      content: \\\"No...\\\";\\n  }\\n}\\n\\n@keyframes cry {\\n  0% {\\n      content: \\\"woman\\\";\\n  }\\n  50% {\\n      content: \\\"cry!\\\";\\n  }\\n  to {\\n      content: \\\"woman\\\";\\n  }\\n}\\n\\n@keyframes weAre {\\n  0% {\\n      content: \\\"We are\\\";\\n  }\\n  50% {\\n      content: \\\"we are\\\";\\n  }\\n  to {\\n      content: \\\"We are\\\";\\n  }\\n}\\n\\n@keyframes theWorld {\\n  0% {\\n      content: \\\"the world,\\\";\\n  }\\n  50% {\\n      content: \\\"the children!\\\";\\n  }\\n  to {\\n      content: \\\"the world,\\\";\\n  }\\n}\\n\\n@keyframes weWill {\\n  0% {\\n      content: \\\"We will,\\\";\\n  }\\n  50% {\\n      content: \\\"rock you!\\\";\\n  }\\n  to {\\n      content: \\\"We will,\\\";\\n  }\\n}\\n\\n@keyframes rockYou {\\n  0% {\\n      content: \\\"we will\\\";\\n  }\\n  50% {\\n      content: \\\"\\\\1F918\\\";\\n  }\\n  to {\\n      content: \\\"we will\\\";\\n  }\\n}\\n\\n.loader-pokeball::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 100px;\\n  height: 100px;\\n  top: 50%;\\n  left: 50%;\\n  margin: -50px 0 0 -50px;\\n  background: linear-gradient(180deg, red 42%, #000 0, #000 58%, #fff 0);\\n  background-repeat: no-repeat;\\n  background-color: #fff;\\n  border-radius: 50%;\\n  z-index: 1;\\n  animation: movePokeball 1s linear infinite both;\\n}\\n\\n.loader-pokeball::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 24px;\\n  height: 24px;\\n  top: 50%;\\n  left: 50%;\\n  margin: -12px 0 0 -12px;\\n  background-color: #fff;\\n  border-radius: 50%;\\n  z-index: 2;\\n  animation: movePokeball 1s linear infinite both, flashPokeball 0.5s infinite alternate;\\n  border: 2px solid #000;\\n  box-shadow: 0 0 0 5px #fff, 0 0 0 10px #000;\\n}\\n\\n@keyframes movePokeball {\\n  0% {\\n      transform: translateX(0) rotate(0);\\n  }\\n  15% {\\n      transform: translateX(-10px) rotate(-5deg);\\n  }\\n  30% {\\n      transform: translateX(10px) rotate(5deg);\\n  }\\n  45% {\\n      transform: translateX(0) rotate(0);\\n  }\\n}\\n\\n@keyframes flashPokeball {\\n  0% {\\n      background-color: #fff;\\n  }\\n  to {\\n      background-color: #fd0;\\n  }\\n}\\n\\n.loader-bouncing::after,\\n.loader-bouncing::before {\\n  content: \\\"\\\";\\n  width: 20px;\\n  height: 20px;\\n  position: absolute;\\n  top: calc(50% - 10px);\\n  left: calc(50% - 10px);\\n  border-radius: 50%;\\n  background-color: #fff;\\n  animation: kick 0.6s infinite alternate;\\n}\\n\\n.loader-bouncing::after {\\n  margin-left: -30px;\\n  animation: kick 0.6s infinite alternate;\\n}\\n\\n.loader-bouncing::before {\\n  animation-delay: 0.2s;\\n}\\n\\n@keyframes kick {\\n  0% {\\n      opacity: 1;\\n      transform: translateY(0);\\n  }\\n  to {\\n      opacity: 0.3;\\n      transform: translateY(-1rem);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/loading-component.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/background.jpg */ \"./src/assets/background.jpg\");\n/* harmony import */ var _assets_rain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/rain.jpg */ \"./src/assets/rain.jpg\");\n/* harmony import */ var _assets_clear_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/clear.jpg */ \"./src/assets/clear.jpg\");\n/* harmony import */ var _assets_clouds_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/clouds.jpg */ \"./src/assets/clouds.jpg\");\n/* harmony import */ var _assets_drizzle_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/drizzle.jpg */ \"./src/assets/drizzle.jpg\");\n/* harmony import */ var _assets_dust_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/dust.jpg */ \"./src/assets/dust.jpg\");\n/* harmony import */ var _assets_fog_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/fog.jpg */ \"./src/assets/fog.jpg\");\n/* harmony import */ var _assets_haze_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/haze.jpg */ \"./src/assets/haze.jpg\");\n/* harmony import */ var _assets_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/thunderstorm.jpg */ \"./src/assets/thunderstorm.jpg\");\n// Imports\n\n\n\n\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_background_jpg__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_rain_jpg__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_clear_jpg__WEBPACK_IMPORTED_MODULE_4__);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_clouds_jpg__WEBPACK_IMPORTED_MODULE_5__);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_drizzle_jpg__WEBPACK_IMPORTED_MODULE_6__);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_dust_jpg__WEBPACK_IMPORTED_MODULE_7__);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fog_jpg__WEBPACK_IMPORTED_MODULE_8__);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_haze_jpg__WEBPACK_IMPORTED_MODULE_9__);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_10__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: 50% 50%;\\n  color: white;\\n}\\n\\n.navbar {\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  padding: 0 2rem !important;\\n}\\n\\n.center {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.icon {\\n  width: 30px;\\n}\\n\\n.font-custom {\\n  font-size: 15px !important;\\n  font-weight: 500;\\n  letter-spacing: 0.25px;\\n}\\n\\n.weather-icons {\\n  width: 30px;\\n}\\n\\n.text-smoke {\\n  color: rgb(217, 217, 217);\\n}\\n\\n.list-group-item {\\n  height: 96px;\\n  display: block;\\n}\\n\\np {\\n  margin-bottom: 0;\\n}\\n\\n.highlight {\\n  background-color: rgba(255, 255, 255, 0.2);\\n  text-align: center;\\n  padding: 1rem;\\n}\\n\\n@media screen and (max-width: 1024px) {\\n  .w-fluid {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 500px) {\\n  .container-fluid {\\n    padding-top: 0.5rem;\\n    justify-content: center !important;\\n  }\\n\\n  .navbar-brand,\\n  form,\\n  .converter {\\n    width: 100%;\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .navbar-brand {\\n    justify-content: center;\\n  }\\n}\\n\\n.background-rain {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.background-clear {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.background-clouds {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.background-drizzle {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.background-dust {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n}\\n\\n.background-fog {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n\\n.background-haze {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n}\\n\\n.background-thunderstorm {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/stylesheets/loading-component.css":
/*!***********************************************!*\
  !*** ./src/stylesheets/loading-component.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loading_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./loading-component.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/loading-component.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loading_component_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loading_component_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/loading-component.css?");

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/stylesheets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/a6462d20346e14d3a67e.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/background.jpg?");

/***/ }),

/***/ "./src/assets/clear.jpg":
/*!******************************!*\
  !*** ./src/assets/clear.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/f866ff042c5a787c7cdb.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/clear.jpg?");

/***/ }),

/***/ "./src/assets/cloudiness.png":
/*!***********************************!*\
  !*** ./src/assets/cloudiness.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/f7760dc8808c1c71cf76.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/cloudiness.png?");

/***/ }),

/***/ "./src/assets/clouds.jpg":
/*!*******************************!*\
  !*** ./src/assets/clouds.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/08b05cb3b3c72c8af509.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/clouds.jpg?");

/***/ }),

/***/ "./src/assets/data-time.png":
/*!**********************************!*\
  !*** ./src/assets/data-time.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/8e8d6fb81679bf2b346b.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/data-time.png?");

/***/ }),

/***/ "./src/assets/drizzle.jpg":
/*!********************************!*\
  !*** ./src/assets/drizzle.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/39a4b746c1ff0290e8cd.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/drizzle.jpg?");

/***/ }),

/***/ "./src/assets/dust.jpg":
/*!*****************************!*\
  !*** ./src/assets/dust.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1448196a2f7322347341.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/dust.jpg?");

/***/ }),

/***/ "./src/assets/fog.jpg":
/*!****************************!*\
  !*** ./src/assets/fog.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/99836c3ea7bd9cef8c37.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/fog.jpg?");

/***/ }),

/***/ "./src/assets/haze.jpg":
/*!*****************************!*\
  !*** ./src/assets/haze.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/a57b5b65efd6111b19b6.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/haze.jpg?");

/***/ }),

/***/ "./src/assets/latitude.png":
/*!*********************************!*\
  !*** ./src/assets/latitude.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/f32f7b02a2e4f1e7e4b9.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/latitude.png?");

/***/ }),

/***/ "./src/assets/longitude.png":
/*!**********************************!*\
  !*** ./src/assets/longitude.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/e62badd5ed8a06b6f832.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/longitude.png?");

/***/ }),

/***/ "./src/assets/rain.jpg":
/*!*****************************!*\
  !*** ./src/assets/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/eafa142c06f336fed2ad.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/rain.jpg?");

/***/ }),

/***/ "./src/assets/temperature.png":
/*!************************************!*\
  !*** ./src/assets/temperature.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/593de69c50d7a2c498fc.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/temperature.png?");

/***/ }),

/***/ "./src/assets/thunderstorm.jpg":
/*!*************************************!*\
  !*** ./src/assets/thunderstorm.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/07094676bc64189d862b.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/thunderstorm.jpg?");

/***/ }),

/***/ "./src/assets/visibility.png":
/*!***********************************!*\
  !*** ./src/assets/visibility.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/f86d4c24c02b47028181.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/visibility.png?");

/***/ }),

/***/ "./src/assets/weather-app.gif":
/*!************************************!*\
  !*** ./src/assets/weather-app.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/dc3636cc1a66a423a635.gif\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-app.gif?");

/***/ }),

/***/ "./src/assets/wind-direction.png":
/*!***************************************!*\
  !*** ./src/assets/wind-direction.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/0dd43faf915de4367bfb.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/wind-direction.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.css */ \"./src/stylesheets/style.css\");\n/* harmony import */ var _stylesheets_loading_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/loading-component.css */ \"./src/stylesheets/loading-component.css\");\n/* harmony import */ var _modules_UIManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UIManager.js */ \"./src/modules/UIManager.js\");\n/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/helpers.js */ \"./src/modules/helpers.js\");\n/* harmony import */ var _modules_weatherAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/weatherAPI.js */ \"./src/modules/weatherAPI.js\");\n\n\n\n\n\n\nconst handleSearch = () => {\n  const searchField = document.querySelector('#searchField');\n  const searchBtn = document.querySelector('#searchBtn');\n  const displayError = document.querySelector('#errorMessage');\n  const unit = document.querySelector('#temperature');\n\n  searchBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    const loader = document.getElementById('loading-component');\n    loader.classList.add('is-active');\n\n    const userInput = searchField.value.trim();\n    if ((0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_3__.searchValidator)(userInput)) {\n      (0,_modules_weatherAPI_js__WEBPACK_IMPORTED_MODULE_4__.default)(userInput)\n        .then((response) => {\n          (0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_3__.dataFiller)(response);\n          searchField.value = '';\n          unit.textContent = '??C';\n          loader.classList.remove('is-active');\n        })\n        .catch(() => {\n          // eslint-disable-next-line no-undef\n          $('#errorModal').modal('show');\n          displayError.textContent = 'City not found';\n          searchField.value = '';\n          loader.classList.remove('is-active');\n        });\n    } else {\n      // eslint-disable-next-line no-undef\n      $('#errorModal').modal('show');\n      displayError.textContent = 'Invalid input. Enter a valid city name';\n      searchField.value = '';\n      loader.classList.remove('is-active');\n    }\n  });\n};\n\nconst changeUnit = () => {\n  const unitConverter = document.querySelector('.converter');\n  const unit = document.querySelector('#temperature');\n\n  unitConverter.addEventListener('click', () => {\n    if (unit.textContent === '??C' && localStorage.getItem('weather-report')) {\n      const weather = JSON.parse(localStorage.getItem('weather-report'));\n      (0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_3__.dataFiller)(weather);\n\n      const tempDisplays = document.getElementsByClassName('unit');\n      Array.from(tempDisplays).forEach((display) => {\n        const [temp] = display.textContent.split('??');\n        display.textContent = `${(0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_3__.celsiusToFahrenheit)(temp)}??`;\n      });\n\n      unit.textContent = '??F';\n    } else if (unit.textContent === '??F' && localStorage.getItem('weather-report')) {\n      const weather = JSON.parse(localStorage.getItem('weather-report'));\n      (0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_3__.dataFiller)(weather);\n      unit.textContent = '??C';\n    }\n  });\n};\n\n(0,_modules_UIManager_js__WEBPACK_IMPORTED_MODULE_2__.manageNavbar)();\n\n(0,_modules_UIManager_js__WEBPACK_IMPORTED_MODULE_2__.reportManager)();\n\nhandleSearch();\n\nchangeUnit();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/UIManager.js":
/*!**********************************!*\
  !*** ./src/modules/UIManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"manageNavbar\": () => (/* binding */ manageNavbar),\n/* harmony export */   \"reportManager\": () => (/* binding */ reportManager)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/modules/domManager.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n/* harmony import */ var _assets_weather_app_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/weather-app.gif */ \"./src/assets/weather-app.gif\");\n/* harmony import */ var _assets_temperature_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/temperature.png */ \"./src/assets/temperature.png\");\n/* harmony import */ var _assets_longitude_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/longitude.png */ \"./src/assets/longitude.png\");\n/* harmony import */ var _assets_latitude_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/latitude.png */ \"./src/assets/latitude.png\");\n/* harmony import */ var _assets_visibility_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/visibility.png */ \"./src/assets/visibility.png\");\n/* harmony import */ var _assets_cloudiness_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/cloudiness.png */ \"./src/assets/cloudiness.png\");\n/* harmony import */ var _assets_wind_direction_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/wind-direction.png */ \"./src/assets/wind-direction.png\");\n/* harmony import */ var _assets_data_time_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/data-time.png */ \"./src/assets/data-time.png\");\n\n\n\n\n\n\n\n\n\n\n\nconst manageNavbar = () => {\n  const navbarBrand = document.querySelector('.navbar-brand');\n\n  const icon = document.createElement('img');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.navbar.icon, _assets_weather_app_gif__WEBPACK_IMPORTED_MODULE_2__);\n\n  navbarBrand.append(icon, 'Weather App');\n};\n\nconst highlight = () => {\n  const section = document.createElement('section');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(section, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.highlight.section);\n\n  const wrapper = document.createElement('div');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(wrapper, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.highlight.wrapper);\n\n  const location = document.createElement('h3');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(location, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.highlight.location);\n  location.textContent = '- -';\n\n  const description = document.createElement('h4');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(description, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.highlight.description);\n  description.textContent = '- -';\n\n  const temperature = document.createElement('h1');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(temperature, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.highlight.temperature);\n  temperature.textContent = '- -';\n\n  wrapper.append(location, description, temperature);\n\n  section.appendChild(wrapper);\n\n  return section;\n};\n\nconst weather = () => {\n  const {\n    wrapper,\n    param,\n    data,\n    figure,\n    icon,\n    value,\n  } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createWidgets)();\n\n  param.textContent = 'Now';\n  data.textContent = 'Weather';\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.icon, _assets_temperature_png__WEBPACK_IMPORTED_MODULE_3__);\n  figure.appendChild(icon);\n  value.classList.add('weather-main');\n  wrapper.append(param, data, figure, value);\n  return wrapper;\n};\n\nconst coordLong = () => {\n  const {\n    wrapper,\n    param,\n    data,\n    figure,\n    icon,\n    value,\n  } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createWidgets)();\n\n  param.textContent = 'Coord';\n  data.textContent = 'Long';\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.icon, _assets_longitude_png__WEBPACK_IMPORTED_MODULE_4__);\n  figure.appendChild(icon);\n  value.classList.add('longitude');\n  wrapper.append(param, data, figure, value);\n  return wrapper;\n};\n\nconst coordLat = () => {\n  const {\n    wrapper,\n    param,\n    data,\n    figure,\n    icon,\n    value,\n  } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createWidgets)();\n\n  param.textContent = 'Coord';\n  data.textContent = 'Lat';\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.icon, _assets_latitude_png__WEBPACK_IMPORTED_MODULE_5__);\n  figure.appendChild(icon);\n  value.classList.add('latitude');\n  wrapper.append(param, data, figure, value);\n  return wrapper;\n};\n\nconst visibility = () => {\n  const {\n    wrapper,\n    param,\n    data,\n    figure,\n    icon,\n    value,\n  } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createWidgets)();\n\n  param.textContent = 'Cond';\n  data.textContent = 'Visibility';\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.icon, _assets_visibility_png__WEBPACK_IMPORTED_MODULE_6__);\n  figure.appendChild(icon);\n  value.classList.add('visibility');\n  wrapper.append(param, data, figure, value);\n  return wrapper;\n};\n\nconst cloudiness = () => {\n  const {\n    wrapper,\n    param,\n    data,\n    figure,\n    icon,\n    value,\n  } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createWidgets)();\n\n  param.textContent = 'Clouds';\n  data.textContent = 'All';\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.icon, _assets_cloudiness_png__WEBPACK_IMPORTED_MODULE_7__);\n  figure.appendChild(icon);\n  value.classList.add('cloudiness');\n  wrapper.append(param, data, figure, value);\n  return wrapper;\n};\n\nconst wind = () => {\n  const {\n    wrapper,\n    param,\n    data,\n    figure,\n    icon,\n    value,\n  } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createWidgets)();\n\n  param.textContent = 'Wind';\n  data.textContent = 'Deg';\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.icon, _assets_wind_direction_png__WEBPACK_IMPORTED_MODULE_8__);\n  figure.appendChild(icon);\n  value.classList.add('wind-direction');\n  wrapper.append(param, data, figure, value);\n  return wrapper;\n};\n\nconst collectionTime = () => {\n  const {\n    wrapper,\n    param,\n    data,\n    figure,\n    icon,\n    value,\n  } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createWidgets)();\n\n  param.textContent = 'Data';\n  data.textContent = 'Time';\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.icon, _assets_data_time_png__WEBPACK_IMPORTED_MODULE_9__);\n  figure.appendChild(icon);\n  value.classList.add('calculation-time');\n  wrapper.append(param, data, figure, value);\n  return wrapper;\n};\n\nconst apiWidgets = () => {\n  const widgetSection = document.createElement('section');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(widgetSection, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.section);\n\n  const container = document.createElement('div');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(container, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.div);\n\n  const apiWeather = weather();\n  const apiCoordLong = coordLong();\n  const apiCoordLat = coordLat();\n  const apiVisibility = visibility();\n  const apiCloudiness = cloudiness();\n  const apiWind = wind();\n  const apiDataTime = collectionTime();\n\n  container.append(\n    apiWeather, apiCoordLong, apiCoordLat, apiVisibility, apiCloudiness, apiWind, apiDataTime,\n  );\n\n  widgetSection.appendChild(container);\n  return widgetSection;\n};\n\nconst measurements = () => {\n  const detailSection = document.createElement('section');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(detailSection, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.measurements.section);\n\n  const container = document.createElement('div');\n  container.classList.add('container');\n\n  const topRow = document.createElement('div');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(topRow, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.measurements.wrapper);\n\n  const paramsTop = ['FEELS LIKE', 'TEMP MIN', 'TEMP MAX', 'WIND SPEED', 'SEA LEVEL'];\n\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.creatListGroup)(paramsTop, topRow);\n\n  const bottomRow = document.createElement('div');\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.defineAttributes)(bottomRow, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.measurements.wrapper);\n\n  const paramsBottom = ['SUNRISE TIME', 'SUNSET TIME', 'PRESSURE', 'HUMIDITY', 'TIMEZONE'];\n\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.creatListGroup)(paramsBottom, bottomRow);\n\n  container.append(topRow, bottomRow);\n  detailSection.appendChild(container);\n\n  return detailSection;\n};\n\nconst reportManager = () => {\n  const main = document.querySelector('#container');\n\n  const highlighted = highlight();\n  const widgets = apiWidgets();\n  const weatherDetails = measurements();\n\n  main.append(highlighted, widgets, weatherDetails);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/UIManager.js?");

/***/ }),

/***/ "./src/modules/domManager.js":
/*!***********************************!*\
  !*** ./src/modules/domManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst attributes = (() => ({\n  navbar: {\n    icon: {\n      alt: 'weather icon',\n      class: 'border border-1 rounded-circle icon me-2',\n    },\n  },\n  highlight: {\n    section: {\n      class: 'col-md-4',\n    },\n    wrapper: {\n      class: 'center flex-column highlight',\n    },\n    location: {\n      class: 'display-6',\n      id: 'location-name',\n    },\n    description: {\n      id: 'weather-description',\n    },\n    temperature: {\n      class: 'display-1 temperature unit',\n    },\n  },\n  widgets: {\n    section: {\n      class: 'col-md-8 pe-0',\n    },\n    div: {\n      class: 'd-flex overflow-auto border-top border-bottom',\n    },\n    wrapper: {\n      class: 'py-3 px-3 flex-column center col-2',\n    },\n    figure: {\n      class: 'py-2 m-0',\n    },\n    icon: {\n      alt: 'widget',\n      class: 'weather-icons',\n    },\n  },\n  measurements: {\n    section: {\n      class: 'col-md-6 offset-md-3 mt-5 py-5 bg-dark bg-gradient',\n    },\n    wrapper: {\n      class: 'row flex-column flex-md-row list-group-flush',\n    },\n    list: {\n      class: 'list-group-item border-0 col bg-transparent text-smoke text-md-center',\n    },\n  },\n}))();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);\n\n//# sourceURL=webpack://weather-app/./src/modules/domManager.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defineAttributes\": () => (/* binding */ defineAttributes),\n/* harmony export */   \"createWidgets\": () => (/* binding */ createWidgets),\n/* harmony export */   \"creatListGroup\": () => (/* binding */ creatListGroup),\n/* harmony export */   \"searchValidator\": () => (/* binding */ searchValidator),\n/* harmony export */   \"dataFiller\": () => (/* binding */ dataFiller),\n/* harmony export */   \"celsiusToFahrenheit\": () => (/* binding */ celsiusToFahrenheit)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/modules/domManager.js\");\n\n\nconst defineAttributes = (elem, attributes, asset = null) => {\n  Object.entries(attributes).forEach(([key, value]) => {\n    elem.setAttribute(key, value);\n  });\n  if (asset) elem.src = asset;\n};\n\nconst createWidgets = () => {\n  const wrapper = document.createElement('div');\n  defineAttributes(wrapper, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.wrapper);\n\n  const param = document.createElement('p');\n  param.classList.add('fw-bolder');\n\n  const data = document.createElement('p');\n  const figure = document.createElement('figure');\n  defineAttributes(figure, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.widgets.figure);\n\n  const icon = document.createElement('img');\n\n  const value = document.createElement('p');\n  value.textContent = '- -';\n\n  return {\n    wrapper, param, data, figure, icon, value,\n  };\n};\n\nconst creatListGroup = (arr, parent) => {\n  const tempData = ['FEELS LIKE', 'TEMP MIN', 'TEMP MAX'];\n\n  arr.forEach((parameter) => {\n    const list = document.createElement('li');\n    defineAttributes(list, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.measurements.list);\n\n    const small = document.createElement('small');\n    small.textContent = parameter;\n\n    const heading = document.createElement('h5');\n    heading.id = parameter.split(' ').join('-').toLowerCase();\n    heading.textContent = '- -';\n\n    if (tempData.includes(parameter)) heading.classList.add('unit');\n\n    list.append(small, heading);\n    parent.appendChild(list);\n  });\n};\n\nconst searchValidator = (input) => input !== '' && Number.isNaN(input - 1);\n\nconst titleCase = (text) => text[0].toUpperCase() + text.slice(1).toLowerCase();\n\nconst kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);\n\nconst celsiusToFahrenheit = (temp) => ((temp * 9) / 5 + 32).toFixed(1);\n\nconst unixToUTC = (unix) => {\n  const T = new Date(unix * 1000);\n  const hours = T.getHours() < 10 ? `0${T.getHours()}` : T.getHours();\n  const minutes = T.getMinutes() < 10 ? `0${T.getMinutes()}` : T.getMinutes();\n  return `${hours} : ${minutes}`;\n};\n\nconst timezone = (time) => {\n  const zone = Math.sign(time / 3600) === 1 ? `+${time / 3600}` : time / 3600;\n  return `UTC ${zone}`;\n};\n\nconst dataFiller = (response) => {\n  document.body.className = `background-${response.weather[0].main.toLowerCase()}`;\n  document.querySelector('#location-name').textContent = response.name;\n  document.querySelector('#weather-description').textContent = titleCase(response.weather[0].description);\n  document.querySelector('.temperature').textContent = `${kelvinToCelsius(response.main.temp)}??`;\n  document.querySelector('.weather-main').textContent = response.weather[0].main;\n  document.querySelector('.longitude').textContent = response.coord.lon;\n  document.querySelector('.latitude').textContent = response.coord.lat;\n  document.querySelector('.visibility').textContent = response.visibility;\n  document.querySelector('.cloudiness').textContent = `${response.clouds.all} %`;\n  document.querySelector('.wind-direction').textContent = `${response.wind.deg}??`;\n  document.querySelector('.calculation-time').textContent = `${unixToUTC(response.dt)}`;\n  document.querySelector('#feels-like').textContent = `${kelvinToCelsius(response.main.feels_like)}??`;\n  document.querySelector('#temp-min').textContent = `${kelvinToCelsius(response.main.temp_min)}??`;\n  document.querySelector('#temp-max').textContent = `${kelvinToCelsius(response.main.temp_max)}??`;\n  document.querySelector('#wind-speed').textContent = `${response.wind.speed} m/s`;\n  document.querySelector('#sea-level').textContent = `${response.main.sea_level ? response.main.sea_level : '- -'} hPa`;\n  document.querySelector('#sunrise-time').textContent = `${unixToUTC(response.sys.sunrise)}`;\n  document.querySelector('#sunset-time').textContent = `${unixToUTC(response.sys.sunset)}`;\n  document.querySelector('#pressure').textContent = `${response.main.pressure} hPa`;\n  document.querySelector('#humidity').textContent = `${response.main.humidity} %`;\n  document.querySelector('#timezone').textContent = `${timezone(response.timezone)}`;\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/weatherAPI.js":
/*!***********************************!*\
  !*** ./src/modules/weatherAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeather = async (city) => {\n  const response = await fetch(`https://${{\"WEATHER_URL\":\"api.openweathermap.org/data/2.5/weather\",\"API_KEY\":\"834698cf6d860dbd43444ef7d1707862\"}.WEATHER_URL}?q=${city}&appid=${{\"WEATHER_URL\":\"api.openweathermap.org/data/2.5/weather\",\"API_KEY\":\"834698cf6d860dbd43444ef7d1707862\"}.API_KEY}`);\n  const weatherReport = await response.json();\n\n  localStorage.setItem('weather-report', JSON.stringify(weatherReport));\n  return weatherReport;\n};\n\nconst handleErrors = (fn) => (...params) => fn(...params).catch((error) => {\n  throw new Error(error);\n});\n\nconst weatherReport = handleErrors(getWeather);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherReport);\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherAPI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;