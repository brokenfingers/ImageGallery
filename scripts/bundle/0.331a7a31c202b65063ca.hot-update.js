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
	        images.push(new _image.Image(url, ordinal, ordinal, _this.reorderImages.bind(_this)));
	      });

	      return images;
	    }
	  }, {
	    key: 'reorderImages',
	    value: function reorderImages(from, to) {
	      debugger;
	      // Reorder this.images and render again
	      this.images.splice(to, 0, this.images.splice(from, 1)[0]);

	      this.updateImagesOrdinals();

	      this.render();
	    }
	  }, {
	    key: 'updateImagesOrdinals',
	    value: function updateImagesOrdinals() {
	      this.images.forEach(function (image, index) {
	        image.ordinal = index;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var gallery = document.getElementById(this.galleryId);

	      this.images.forEach(function (image) {
	        gallery.appendChild(image.createImgDom());
	      });
	    }
	  }]);

	  return ImageGallery;
	}();

/***/ }
])