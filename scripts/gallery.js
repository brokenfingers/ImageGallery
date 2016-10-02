import {ImageGallery} from './image_gallery';

const mountGallery = (images, id) => {
  let gallery = new ImageGallery(images, id);
  gallery.render();
}

window.mountGallery = mountGallery;
