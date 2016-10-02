import {Image} from './image';

export class ImageGallery {
  constructor(images, galleryId) {
    let image_urls = JSON.parse(images);
    this.images = this._instantiateImages(image_urls);
    this.galleryId = galleryId;
  }

  _instantiateImages(image_urls) {
    let images = [];

    image_urls.forEach((url, ordinal) => {
      images.push(
        new Image(url, ordinal, ordinal, this.reorderImages.bind(this))
      );
    });

    return images;
  }

  _clearGallery() {
    let gallery = document.getElementById(this.galleryId);
    while (gallery.hasChildNodes()) {
      gallery.removeChild(gallery.lastChild);
    }
  }

  _updateImagesOrdinals() {
    this.images.forEach((image, index) => {
      image.ordinal = index;
    });
  }

  reorderImages(from, to) {
    // Reorder this.images and render again
    this.images.splice(to, 0, this.images.splice(from, 1)[0]);

    this._updateImagesOrdinals();
    this._clearGallery();
    this.render();
  }

  render() {
    let gallery = document.getElementById(this.galleryId);

    this.images.forEach(image => {
      gallery.appendChild(image.createImgDom());
    });
  }
}
