webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _image_gallery = __webpack_require__(1);

	var mountGallery = function mountGallery(images, id) {
	  var gallery = new _image_gallery.ImageGallery(images, id);
	  gallery.render(id);
	};

	window.mountGallery = mountGallery;

/***/ }
])