webpackHotUpdate(0,{

/***/ 4:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOffsetLeft = getOffsetLeft;
	exports.isLeft = isLeft;
	exports.onDragStart = onDragStart;
	exports.onDropImage = onDropImage;
	exports.onDragOver = onDragOver;
	function getOffsetLeft(target) {
	  return target.offsetLeft + target.offSetWidth / 2;
	}

	function isLeft(ev) {
	  return ev.pageX <= getOffsetLeft(ev.target);
	}

	function onDragStart(ev) {
	  console.log('Event Started By: ' + ev.target.dataset.id);
	  ev.dataTransfer.effectAllowed = 'move';
	  ev.dataTransfer.setData('id', ev.target.dataset.id);
	  ev.dataTransfer.setData('ordinal', ev.target.dataset.ordinal);
	}

	function onDropImage(ev) {
	  ev.preventDefault();
	  var isLeft = isLeft(ev);
	}

	function onDragOver(ev) {
	  ev.preventDefault();
	}

/***/ }

})