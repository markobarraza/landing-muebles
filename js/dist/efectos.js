$(".button-collapse").sideNav({menuWidth:270}),$(".parallax").parallax(),$(".carousel.carousel-slider").carousel({fullWidth:!1}),$(".slider").slider({height:313}),$(".carousel").carousel();var altura=$(".efecto-menu").offset().top;$(window).on("scroll",function(){$(window).scrollTop()>altura?$(".efecto-menu").addClass("menu-fixed"):$(".efecto-menu").removeClass("menu-fixed")}),$(function(){$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){var a=e.offset().top;return $("html,body").animate({scrollTop:a},500),!1}}})});var swiper=new Swiper(".swiper-container",{slidesPerView:3,spaceBetween:5,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:5},768:{slidesPerView:2,spaceBetween:5},640:{slidesPerView:1,spaceBetween:5},320:{slidesPerView:1,spaceBetween:5}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});