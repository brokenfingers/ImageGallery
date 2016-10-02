webpackHotUpdate(0,{

/***/ 2:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Image = exports.Image = function () {
	  function Image(url, ordinal) {
	    _classCallCheck(this, Image);

	    this.url = url;
	    this.ordinal = ordinal;
	  }

	  _createClass(Image, [{
	    key: 'onDragStart',
	    value: function onDragStart(ev) {
	      debugger;
	    }
	  }, {
	    key: 'createImgDom',
	    value: function createImgDom() {
	      var img = document.createElement('img');

	      img.setAttribute('src', this.url);
	      img.setAttribute('draggable', true);
	      img.setAttribute('data-ordinal', this.ordinal);

	      img.addEventListener('dragstart', onDragStart);
	      return img;
	    }
	  }]);

	  return Image;
	}();

/***/ }

})