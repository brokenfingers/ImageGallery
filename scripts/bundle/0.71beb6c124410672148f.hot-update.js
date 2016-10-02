webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ImageGallery = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _image = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImageGallery = exports.ImageGallery = function () {
	  function ImageGallery(images, galleryId) {
	    _classCallCheck(this, ImageGallery);

	    var image_urls = JSON.parse(images);
	    this.images = this.instantiateImages(image_urls);
	    this.galleryId = galleryId;
	  }

	  _createClass(ImageGallery, [{
	    key: 'instantiateImages',
	    value: function instantiateImages(image_urls) {
	      var _this = this;

	      var images = [];

	      image_urls.forEach(function (url, ordinal) {
	        images.push(new _image.Image(url, ordinal, ordinal, _this.galleryId, _this.reorderImages));
	      });

	      return images;
	    }
	  }, {
	    key: 'reorderImages',
	    value: function reorderImages(id, from, to) {}
	  }, {
	    key: 'render',
	    value: function render(id) {
	      var gallery = document.getElementById(id);

	      this.images.forEach(function (image) {
	        gallery.appendChild(image.createImgDom());
	      });
	    }
	  }]);

	  return ImageGallery;
	}();

/***/ }
])