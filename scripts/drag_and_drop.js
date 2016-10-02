var _onSameDom = function(ev) {
  return ev.dataTransfer.getData('id') === ev.target.dataset.id;
}

var _isLeft = function(ev) {
  return ev.pageX <= _getOffsetLeft(ev.target);
}

var _getOffsetLeft = function(target) {
  return target.offsetLeft + (target.offsetWidth / 2);
}

var _isFromLowToHigh = function(event) {
  return parseInt(event.dataTransfer.getData('ordinal')) < parseInt(event.currentTarget.dataset.ordinal);
}

// Returns the new ordinal when dropped to the left side of a grid
var _ordinalToLeft = function(event) {
  if (_isFromLowToHigh(event)) {
    return parseInt(event.currentTarget.dataset.ordinal) - 1;
  } else {
    return parseInt(event.currentTarget.dataset.ordinal);
  }
}

// Returns the new ordinal when dropped to the right side of a grid
var _ordinalToRight = function(event) {
  if (_isFromLowToHigh(event)) {
    return parseInt(event.currentTarget.dataset.ordinal);
  } else {
    return parseInt(event.currentTarget.dataset.ordinal) + 1;
  }
}

var _getToOrdinal = function(event) {
  // dropped to the left of an object
  if (_isLeft(event)) {
    return _ordinalToLeft(event);
  }

  // dropped to the right of an objedt
  if (!_isLeft(event)) {
    return _ordinalToRight(event);
  }
}

function onDragStart(ev) {
  ev.dataTransfer.effectAllowed = 'move';
  ev.dataTransfer.setData('ordinal', ev.target.dataset.ordinal);
}

function onDragOver(ev) {
  ev.preventDefault();
}

function onDrop(callback, ev) {
  ev.preventDefault();

  let fromOrdinal = parseInt(ev.dataTransfer.getData('ordinal'));
  let toOrdinal = _getToOrdinal(ev);
  // Some condition to prevent calling callback such as dropped on same spot, ordinal does not change
  if (fromOrdinal !== toOrdinal && !_onSameDom(ev))
    callback(fromOrdinal, toOrdinal);
}

module.exports = {
  onDragStart: onDragStart,
  onDragOver: onDragOver,
  onDrop: onDrop
};
