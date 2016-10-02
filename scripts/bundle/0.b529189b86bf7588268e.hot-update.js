webpackHotUpdate(0,{

/***/ 4:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOffsetLeft = getOffsetLeft;
	function dragAndDrop() {
	  this.onDragStart = function (ev) {
	    console.log('Event Started By: ' + ev.target.dataset.id);
	    ev.dataTransfer.effectAllowed = 'move';
	    ev.dataTransfer.setData('id', ev.target.dataset.id);
	    ev.dataTransfer.setData('ordinal', ev.target.dataset.ordinal);
	  };

	  this.onDragOver = function (ev) {
	    ev.preventDefault();
	  };

	  this.onDrop = function (ev) {
	    ev.preventDefault();
	    debugger;
	  };
	}

	function getOffsetLeft(target) {
	  return target.offsetLeft + target.offSetWidth / 2;
	}

	var isLeft = function isLeft(ev) {
	  return ev.pageX <= getOffsetLeft(ev.target);
	};

	module.exports = dragAndDrop;

/***/ }

})