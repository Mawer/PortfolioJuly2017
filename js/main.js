var navTop = $('#navbar').offset().top;


   $(window).scroll(function(){

   if ($(window).scrollTop() > navTop) {
        $('#navbar').addClass('fixed');
    }
    else {
        $('#navbar').removeClass('fixed');
    }
  });
   

