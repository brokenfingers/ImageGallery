webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _image_gallery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./image_gallery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var mountGallery = function mountGallery(images) {
	  var gallery = new _image_gallery.ImageGallery(images);
	  debugger;
	};

	window.mountGallery = mountGallery;

/***/ }
])