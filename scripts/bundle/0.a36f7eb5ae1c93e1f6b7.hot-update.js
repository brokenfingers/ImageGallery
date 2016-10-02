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
	  function Image(url, id, ordinal) {
	    _classCallCheck(this, Image);

	    this.url = url;
	    this.ordinal = ordinal;
	    this.id = id;
	  }

	  _createClass(Image, [{
	    key: 'onDragStart',
	    value: function onDragStart(ev) {
	      console.log('Event Started By: ' + ev.target.dataset.id);
	      ev.dataTransfer.effectAllowed = 'move';
	      ev.dataTransfer.setData('id', ev.target.dataset.id);
	      ev.dataTransfer.setData('ordinal', ev.target.dataset.ordinal);
	    }
	  }, {
	    key: 'onDropImage',
	    value: function onDropImage(ev) {
	      debugger;
	    }
	  }, {
	    key: 'onDragOver',
	    value: function onDragOver(ev) {
	      ev.preventDefault();
	    }
	  }, {
	    key: 'createImgDom',
	    value: function createImgDom() {
	      var img = document.createElement('img');

	      img.setAttribute('src', this.url);
	      img.setAttribute('draggable', true);
	      img.setAttribute('data-ordinal', this.ordinal);
	      img.setAttribute('data-id', this.id);

	      img.addEventListener('dragstart', this.onDragStart);
	      img.addEventListener('dragover', this.onDragOver);
	      img.addEventListener('drop', this.onDropImage);
	      return img;
	    }
	  }]);

	  return Image;
	}();

/***/ }

})