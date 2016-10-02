webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	function onDragStart(ev) {
	  console.log('Event Started By: ' + ev.target.dataset.id);
	  ev.dataTransfer.effectAllowed = 'move';
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

	  var fromOrdinal = parseInt(ev.dataTransfer.getData('ordinal'));
	  var toOrdinal = getToOrdinal(ev);
	  // Some condition to prevent calling callback such as dropped on same spot, ordinal does not change
	  if (fromOrdinal !== toOrdinal && !onSameDom(ev)) callback(fromOrdinal, toOrdinal);
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

})