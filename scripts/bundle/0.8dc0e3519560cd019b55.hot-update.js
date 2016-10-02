webpackHotUpdate(0,{

/***/ 4:
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

	function onDrop(ev) {
	  ev.preventDefault();
	  debugger;
	}

	var isLeft = function isLeft(ev) {
	  return ev.pageX <= getOffsetLeft(ev.target);
	};

	var getOffsetLeft = function getOffsetLeft(target) {
	  return target.offsetLeft + target.offSetWidth / 2;
	};

	module.exports = {
	  onDragStart: onDragStart,
	  onDragOver: onDragOver,
	  onDrop: onDrop
	};

/***/ }

})