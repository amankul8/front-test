
(function(){
    new Glide('.glide', { autoplay: 4000 }).mount();

    const carousel = new Glide('.glide-products', {
        type: 'carousel',
        startAt: 0,
        gap: 20,
        perView: 4,
        breakpoints: {
          1300: {
            perView: 3
      },
          950: {
            perView: 2                   
        },
          700: {
            perView: 1
        }
      }
      })
      carousel.mount();

      let map;

      DG.then(function () {
          map = DG.map('twoGisMap', {
              center: [42.87088762417882, 74.57998681467481],
              zoom: 13
          });
  
          DG.marker([42.87088762417882, 74.57998681467481]).addTo(map);
      });



      const open = document.getElementById('open-menu-icon');
      const close = document.getElementById('close-menu-icon');
      const menu = document.getElementById('menu');

      open.addEventListener('click', function(event) {
          menu.classList.add('open-menu')
      });

      close.addEventListener('click', function(event) {
        menu.classList.remove('open-menu')
    });
})()


