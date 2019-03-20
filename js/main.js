$(document).ready(function () {
    $('.nav a').click(function(){
        $('.nav a').removeClass("active");
        $(this).addClass("active");
    });
    $('.infobtn').click(function(){
        $('.nav a').removeClass("active");
        $('.nav a[href="#info"]').addClass("active");
    });

    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 1200;
          
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'}, 500);
            }
        }); 
    });

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $(".masthead").css('top', "0px");
      } else {
        $(".masthead").css('top', "-70px");
      }
    }

    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 500, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1');
                $target.focus();
              };
            });
          }
        }
      });   
});

