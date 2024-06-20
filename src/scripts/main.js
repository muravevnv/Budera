// const menu = document.querySelector('.js-header-menu');
// const menuToggler = document.querySelector('.js-header-menu-toggler');

// menuToggler.addEventListener('click', () => {
//   menu.classList.toggle('is-open');
//   menuToggler.classList.toggle('is-active');
// })


const productsSlider = document.querySelector('.js-products-slider');
if(productsSlider) {
  new Swiper(productsSlider, {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.js-products-slider-next',
      prevEl: '.js-products-slider-prev',
    },
    breakpoints: {
      0:{
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
}

const similarSlider = document.querySelector('.js-similar-slider');
if(similarSlider) {
  new Swiper(similarSlider, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.js-similar-slider-next',
      prevEl: '.js-similar-slider-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
}

const videoSlider = document.querySelector('.js-video-slider');
if(videoSlider) {
  new Swiper(videoSlider, {
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
      992: {
        allowTouchMove: false
      }
    }
  });
}

const sertSlider = document.querySelectorAll('.js-sert-slider');
if(sertSlider.length) {
  sertSlider.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1.5,
      spaceBetween: 20,

      breakpoints: {
        560: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5
        }
      }
    });
  })
}

const tabsSection = document.querySelector('[data-tabs]');

if(tabsSection) {
    const tabsControls = tabsSection.querySelectorAll('[data-tabs-control]');
    const tabsPanels = tabsSection.querySelectorAll('[data-tabs-panel]');

    tabsControls.forEach((item) => {
        item.addEventListener('click', function() {
            const tabsId = item.dataset.tabsControl;
            tabsControls.forEach(tab => tab.classList.remove('is-selected'));
            tabsPanels.forEach(tab => tab.classList.remove('is-active'));
            item.classList.add('is-selected')
            document.querySelector(`[data-tabs-panel="${tabsId}"]`).classList.add('is-active')
        })
    })
}

const popupBtn = document.querySelectorAll('.js-popup-btn');
const popupBtnClose = document.querySelectorAll('.js-popup-close');

if(popupBtn.length) {
  popupBtn.forEach(item => {
    item.addEventListener('click', function() {
      const dataPopup = item.dataset.popup;
      console.log(dataPopup);
      document.querySelector(`.js-popup[data-popup="${dataPopup}"]`).classList.add('is-open');
      document.body.classList.add('scroll-lock');
    })
  })

  popupBtnClose.forEach(item => {
    item.addEventListener('click', function() {
      const currentPopup = item.closest('.js-popup');
      currentPopup.classList.remove('is-open');
      document.body.classList.remove('scroll-lock');
    })
  })
}

const map = document.querySelector('.js-map');

if(map) {
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map(map, {
      center: [55.75, 54.61],
      zoom: 5
    });

    var myPlacemark = new ymaps.Placemark([55.75, 37.61], {
      hintContent: 'Москва'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-pin.png',
      iconImageSize: [45, 60],
      iconImageOffset: [-3, -60]
    });

    var myPlacemark2 = new ymaps.Placemark([54.735152, 54.958722], {
      hintContent: 'Москва'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-pin.png',
      iconImageSize: [45, 60],
      iconImageOffset: [-3, -60]
    });

    var myPlacemark3 = new ymaps.Placemark([54.989347, 73.368221], {
      hintContent: 'Москва'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-pin.png',
      iconImageSize: [45, 60],
      iconImageOffset: [-3, -60]
    });

    var myPlacemark4 = new ymaps.Placemark([56.838011, 58.597474], {
      hintContent: 'Москва'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-pin.png',
      iconImageSize: [45, 60],
      iconImageOffset: [-3, -60]
    });

    var myPlacemark5 = new ymaps.Placemark([56.838011, 59.597474], {
      hintContent: 'Москва'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-pin.png',
      iconImageSize: [45, 60],
      iconImageOffset: [-3, -60]
    });

    var myPlacemark6 = new ymaps.Placemark([55.755864, 37.617698], {
      hintContent: 'Москва'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-pin.png',
      iconImageSize: [45, 60],
      iconImageOffset: [-3, -30]
    });

    var myPlacemark7 = new ymaps.Placemark([55.395355, 37.807233], {
      hintContent: 'Москва'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-pin.png',
      iconImageSize: [45, 60],
      iconImageOffset: [-45, -60]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);
    myMap.geoObjects.add(myPlacemark7);
  }
}

const select = document.querySelector('.js-select');

if(select) {
  const choices = new Choices(select, {
    removeItems: true,
    removeItemButton: true,
  })
}