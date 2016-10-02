var dragAndDrop = require('./drag_and_drop');

export class Image {
  constructor(url, id, ordinal, reorderImages) {
    this.url = url;
    this.ordinal = ordinal;
    this.id = id;

    this.reorderImages = reorderImages;
  }

  createImgDom() {
    let img = document.createElement('img');

    img.setAttribute('src', this.url);
    img.setAttribute('draggable', true);
    img.setAttribute('data-ordinal', this.ordinal);
    img.setAttribute('data-id', this.id);

    img.addEventListener('dragstart', dragAndDrop.onDragStart);
    img.addEventListener('dragover', dragAndDrop.onDragOver);
    img.addEventListener('drop', dragAndDrop.onDrop.bind(null, this.reorderImages));

    return img;
  }
}
