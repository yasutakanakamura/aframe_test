
/*
AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var lastIndex = -1;
      var IMAGES = ['#images_01', '#images_02', '#images_03'];
      this.el.addEventListener('click', function (evt) {
        lastIndex = (lastIndex + 1) % IMAGES.length;
        this.setAttribute('src', IMAGES[lastIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });


AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var lastIndex = -1;
      var LINKS = ['#images_01', '#images_02', '#images_03'];
      this.el.addEventListener('click', function (evt) {
        lastIndex = (lastIndex + 1) % LINKS.length;
        this.setAttribute('src', LINKS[lastIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });
*/


  AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
  
    init: function () {
      this.el.addEventListener('raycaster-intersection', function () {
        console.log('Player hit something!');
      });
    }
  });