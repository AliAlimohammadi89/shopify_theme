function khazaiSlider() {
    setTimeout(() => {
      new Flickity(document.querySelector('.js-flickity-main'), {
        freeScroll: false,
        contain: true,
        percentPosition: false,
        resize: false,
        initialIndex: 2,
        accessibility: false,
        wrapAround: true,
        cellAlign: 'center',
        pageDots: false,
        prevNextButtons: false,
        autoPlay: 5000,
      });
    }, 100);
  }
  function setFlickity() {
    var flkty = $('.js-flickity-main').flickity();
    if (!flkty) {
      flkty.flickity();
    } else {
      flkty.flickity('destroy');
      setTimeout(() => {
        flkty.flickity();
      }, 300);
      this.khazaiSlider();
    }
  }
  function khazaiCarousels() {
    setTimeout(() => {
      new Flickity(document.querySelector('.js-flickity-carousel'), {
        freeScroll: false,
        contain: true,
        percentPosition: false,
        resize: false,
        initialIndex: 2,
        accessibility: false,
        wrapAround: true,
        cellAlign: 'left',
        pageDots: true,
        prevNextButtons: false,
      });
    }, 100);
  }
  function setFlickityCarousel() {
    var flkty = $('.js-flickity-carousel').flickity();
    if (!flkty) {
      flkty.flickity();
    } else {
      flkty.flickity('destroy');
      setTimeout(() => {
        flkty.flickity();
      }, 300);
      this.khazaiCarousels();
    }
  }
  function khazaiCarouselsClearance() {
    setTimeout(() => {
      new Flickity(document.querySelector('.js-flickity-carousel-clearance'), {
        freeScroll: false,
        contain: true,
        percentPosition: false,
        resize: false,
        initialIndex: 2,
        accessibility: false,
        wrapAround: true,
        cellAlign: 'left',
        pageDots: true,
        prevNextButtons: false,
      });
    }, 100);
  }
  function setFlickityCarouselClearance() {
    var flkty = $('.js-flickity-carousel-clearance').flickity();
    if (!flkty) {
      flkty.flickity();
    } else {
      flkty.flickity('destroy');
      setTimeout(() => {
        flkty.flickity();
      }, 300);
      this.khazaiCarouselsClearance();
    }
  }
  function khazaiCarouselsBest() {
    setTimeout(() => {
      new Flickity(document.querySelector('.js-flickity-carousel-best-seller'), {
        freeScroll: false,
        contain: true,
        percentPosition: false,
        resize: false,
        initialIndex: 2,
        accessibility: false,
        wrapAround: true,
        cellAlign: 'left',
        pageDots: true,
        prevNextButtons: false,
      });
    }, 100);
  }
  function setFlickityCarouselBest() {
    var flkty = $('.js-flickity-carousel-best-seller').flickity();
    if (!flkty) {
      flkty.flickity();
    } else {
      flkty.flickity('destroy');
      setTimeout(() => {
        flkty.flickity();
      }, 300);
      this.khazaiCarouselsBest();
    }
  }
  function khazaiCarouselsWeekly() {
    setTimeout(() => {
      new Flickity(document.querySelector('.js-flickity-weekly-carousel'), {
        freeScroll: false,
        contain: true,
        percentPosition: false,
        resize: false,
        initialIndex: 2,
        accessibility: false,
        wrapAround: true,
        cellAlign: 'left',
        pageDots: true,
        prevNextButtons: false,
      });
    }, 100);
  }
  function setFlickityCarouselWeekly() {
    var flkty = $('.js-flickity-weekly-carousel').flickity();
    if (!flkty) {
      flkty.flickity();
    } else {
      flkty.flickity('destroy');
      setTimeout(() => {
        flkty.flickity();
      }, 300);
      this.khazaiCarouselsWeekly();
    }
  }
  function colorShow() {
    $('.search-tabs-right-1').css('display', 'flex');
    $('.search-tabs-right-2').css('display', 'none');
    $('.search-tabs-right-3').css('display', 'none');
    setTimeout(() => {
      $('.dot-1').css('opacity', '1');
      $('.line-1-top').css('height', '100px');
      setTimeout(() => {$('.line-1-bottom').css('width', '50vw'); }, 500);
    }, 500);
    setTimeout(() => {
      $('.dot-2').css('opacity', '0');
      $('.dot-3').css('opacity', '0');
    }, 1000);
    setTimeout(() => {
      $('.line-2-top').css('height', '0px');
      $('.line-3-top').css('height', '0px');
    }, 500);
    $('.line-2-bottom').css('width', '0vw');
    $('.line-3-bottom').css('width', '0vw');
  }
  function sizeShow() {
    $('.search-tabs-right-1').css('display', 'none');
    $('.search-tabs-right-2').css('display', 'flex');
    $('.search-tabs-right-3').css('display', 'none');
    setTimeout(() => {
      $('.dot-2').css('opacity', '1');
      $('.line-2-top').css('height', '100px');
      setTimeout(() => {$('.line-2-bottom').css('width', '50vw'); }, 500);
    }, 500);
    setTimeout(() => {
      $('.dot-1').css('opacity', '0');
      $('.dot-3').css('opacity', '0');
    }, 1000);
    setTimeout(() => {
      $('.line-1-top').css('height', '0px');
      $('.line-3-top').css('height', '0px');
    }, 500);
    $('.line-1-bottom').css('width', '0vw');
    $('.line-3-bottom').css('width', '0vw');
  }
	function shapeShow() {
    $('.search-tabs-right-1').css('display', 'none');
    $('.search-tabs-right-2').css('display', 'none');
    $('.search-tabs-right-3').css('display', 'flex');
    setTimeout(() => {
      $('.dot-3').css('opacity', '1');
      $('.line-3-top').css('height', '100px');
      setTimeout(() => {$('.line-3-bottom').css('width', '50vw'); }, 500);
    }, 500);
    setTimeout(() => {
      $('.dot-1').css('opacity', '0');
      $('.dot-2').css('opacity', '0');
    }, 1000);
    setTimeout(() => {
      $('.line-1-top').css('height', '0px');
      $('.line-2-top').css('height', '0px');
    }, 500);
    $('.line-1-bottom').css('width', '0vw');
    $('.line-2-bottom').css('width', '0vw');
  }

  function openMenuToggle() {
    if ($('.header-bottom-menu').css('left') === '0px') {
      $('.header-bottom-menu').css('left', '-250px');
      $('.menu-overlay').css('left', '-100%');
      $('html, body').css({
        'overflow-y': 'auto',
        'overflow-x': 'hidden',
        'height': 'auto'
      });
    } else {
      $('.header-bottom-menu').css('left', '0px');
      $('.menu-overlay').css('left', '0px');
      $('html, body').css({
        'overflow-y': 'hidden',
        'height': '100%'
      });
    }
}


setFlickity();
setFlickityCarousel();
setFlickityCarouselWeekly();
setFlickityCarouselClearance();
setFlickityCarouselBest();