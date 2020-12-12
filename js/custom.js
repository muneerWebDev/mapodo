//global variables
var mainContainerWidth;
var mainContainerOffset;
var siteHeaderHeight;

jQuery(document).ready(function () {

  /* basic layouts and variables */
  dynamicCssVariables();
  mobileNavbarTitleSlider();
  footerSlider();
  sidebarSlider();

  jQuery(window).resize(function () {
    dynamicCssVariables();
    mobileNavbarTitleSlider();
    footerSlider()
    sidebarSlider();
  });

  /* basic variables and layouts ends */

  /*  bootstrap multi level dropdown */

  // Prevent closing from click inside dropdown
  $(document).on('click', '.navbar-nav .dropdown-menu', function (e) {
    e.stopPropagation();
  });

  // managing dropdown inside dropdown 
  $('.dropdown .dropdown .dropdown-toggle').on('click', function (event) {
    
    $(this).toggleClass("active").parent().toggleClass('show');
    $(this).siblings(".dropdown-menu").toggleClass("show");
  });


  // sliders
  jQuery(".categories-sec .slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });


  jQuery(".brands-wrapper").slick({
    infinite: false,
    slidesToScroll: 3,
    slidesPerRow: 6,
    rows: 2,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesPerRow: 3,
        rows: 1,
        dots: true
      }
    }]
  });

  jQuery(".related-product-list").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  //  sliders end 

});

// dynamic css variables
function dynamicCssVariables() {
  mainContainerWidth = jQuery(".container").width();
  mainContainerOffset = jQuery(".container").offset().left;
  siteHeaderHeight = jQuery("header.siteHeader").height();

  $("body").get(0).style.setProperty("--containerWidth", mainContainerWidth + "px");
  $("body").get(0).style.setProperty("--containerOffset", mainContainerOffset + "px");
  $("body").get(0).style.setProperty("--siteHeaderHeight", siteHeaderHeight + "px");
}

// header mobile slider 

var excecuteOncemobileNavbarTitleSlider = false;

function mobileNavbarTitleSlider() {

  if (jQuery(window).width() < 1200) {

    if (!excecuteOncemobileNavbarTitleSlider) {
      excecuteOncemobileNavbarTitleSlider = true;
      jQuery(".dropdown-title-item").siblings().hide();
      jQuery(".dropdown-title-item").click(function () {
        jQuery(this).toggleClass("active").siblings().toggle();
      });
    }

  } else {
    jQuery(".dropdown-title-item").siblings().show();

    jQuery(".dropdown-title-item").click(function (e) {
      e.preventDefault();
    });
  }
}


// footer mobile slider 

var excecuteOnceFooterSlider = false;

function footerSlider() {


  if (jQuery(window).width() < 768) {

    if (!excecuteOnceFooterSlider) {
      excecuteOnceFooterSlider = true;
      jQuery(".footer-menu ul").hide();
      jQuery(".footer-menu h5").click(function () {
        jQuery(this).toggleClass("active");
        jQuery(this).siblings("ul").slideToggle();
      });
    }

  } else {
    jQuery(".footer-menu ul").show();
  }
}



// sidebar mobile slider 
var excecuteOnceSidebarSlider = false;

function sidebarSlider() {


  if (jQuery(window).width() < 768) {

    if (!excecuteOnceSidebarSlider) {
      excecuteOnceSidebarSlider = true;
      jQuery(".sidebar ul,.sidebar .price-filter, .sidebar .rating").hide();
      jQuery(".sidebar .group h4").click(function () {
        jQuery(this).toggleClass("active");
        jQuery(this).siblings("ul,.price-filter,.rating").slideToggle();
      });
    }

  } else {
    jQuery(".sidebar ul,.sidebar .price-filter, .sidebar .rating").show();
  }
}