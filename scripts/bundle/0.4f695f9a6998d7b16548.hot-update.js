webpackHotUpdate(0,[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var dragAndDrop = __webpack_require__(3);

	var Image = exports.Image = function () {
	  function Image(url, id, ordinal, galleryId, reorderImages) {
	    _classCallCheck(this, Image);

	    this.url = url;
	    this.ordinal = ordinal;
	    this.id = id;
	    this.galleryId = galleryId;

	    this.reorderImages = reorderImages;
	  }

	  _createClass(Image, [{
	    key: 'createImgDom',
	    value: function createImgDom() {
	      var img = document.createElement('img');

	      img.setAttribute('src', this.url);
	      img.setAttribute('draggable', true);
	      img.setAttribute('data-ordinal', this.ordinal);
	      img.setAttribute('data-id', this.id);

	      img.addEventListener('dragstart', dragAndDrop.onDragStart);
	      img.addEventListener('dragover', dragAndDrop.onDragOver);
	      img.addEventListener('drop', dragAndDrop.onDrop.bind(this, this.reorderImages));

	      return img;
	    }
	  }]);

	  return Image;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function onDragStart(ev) {
	  console.log('Event Started By: ' + ev.target.dataset.id);
	  ev.dataTransfer.effectAllowed = 'move';
	  ev.dataTransfer.setData('id', ev.target.dataset.id);
	  ev.dataTransfer.setData('ordinal', ev.target.dataset.ordinal);
	}

	function onDragOver(ev) {
	  ev.preventDefault();
	}

	function onDrop(callback, ev) {
	  ev.preventDefault();
	  console.log('Same: ' + onSameDom(ev));
	  console.log('Left: ' + isLeft(ev));
	  console.log('From Ordinal: ' + ev.dataTransfer.getData('ordinal'));
	  console.log('To Ordinal: ' + getToOrdinal(ev));
	  console.log('ID: ' + ev.dataTransfer.getData('id'));

	  var id = parseInt(ev.dataTransfer.getData('id'));
	  var fromOrdinal = parseInt(ev.dataTransfer.getData('ordinal'));
	  var toOrdinal = getToOrdinal(ev);
	  // Some condition to prevent calling callback such as dropped on same spot, ordinal does not change
	  callback();
	  // Use the callback to re-order
	}

	var onSameDom = function onSameDom(ev) {
	  return ev.dataTransfer.getData('id') === ev.target.dataset.id;
	};

	var isLeft = function isLeft(ev) {
	  return ev.pageX <= getOffsetLeft(ev.target);
	};

	var getOffsetLeft = function getOffsetLeft(target) {
	  return target.offsetLeft + target.offsetWidth / 2;
	};

	var isFromLowToHigh = function isFromLowToHigh(event) {
	  return parseInt(event.dataTransfer.getData('ordinal')) < parseInt(event.currentTarget.dataset.ordinal);
	};

	// Returns the new ordinal when dropped to the left side of a grid
	var ordinalToLeft = function ordinalToLeft(event) {
	  if (isFromLowToHigh(event)) {
	    return parseInt(event.currentTarget.dataset.ordinal) - 1;
	  } else {
	    return parseInt(event.currentTarget.dataset.ordinal);
	  }
	};

	// Returns the new ordinal when dropped to the right side of a grid
	var ordinalToRight = function ordinalToRight(event) {
	  if (isFromLowToHigh(event)) {
	    return parseInt(event.currentTarget.dataset.ordinal);
	  } else {
	    return parseInt(event.currentTarget.dataset.ordinal) + 1;
	  }
	};

	var getToOrdinal = function getToOrdinal(event) {
	  // dropped to the left of an object
	  if (isLeft(event)) {
	    return ordinalToLeft(event);
	  }

	  // dropped to the right of an objedt
	  if (!isLeft(event)) {
	    return ordinalToRight(event);
	  }
	};

	module.exports = {
	  onDragStart: onDragStart,
	  onDragOver: onDragOver,
	  onDrop: onDrop
	};

/***/ }
])