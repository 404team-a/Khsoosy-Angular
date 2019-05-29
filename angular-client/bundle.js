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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var app = angular.module('app22', []);
app
.controller('AppCtrl', function(itemsService) {
	console.log("dddddd")
  // itemsService.getAll((data) => {
  //   this.items = data;
  // });
})
.component('app1', {
  // bindings: {},
  controller: 'AppCtrl',
  template: '<h1>hhhhh</h1>'
});
// for the config
// app.config(["$","$", ($, $) => {
//     // do whatever we want to do here.
//      // example routing
// }]);

// search controller
////////////////////////////
// app.controller("search", ($scope) => {
//   // search function should be here
//     $scope.search = () => {

//         const body = {
// 			location: $scope.location,
// 			name: $scope.subject,
// 			level: $scope.level
// 		};

// 		return fetch('http://localhost:4000/search', {
// 			method: 'post',
// 			body: JSON.stringify(body),
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Accept: 'application/json'
// 			}
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				console.log(data);
// 				$scope.people = data;
// 				$scope.$apply();
// 				return data;
// 			})
// 			.catch((err) => console.log(err));

//     };

// 	$scope.search();
    
// });




/***/ })
/******/ ]);