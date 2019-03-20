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
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 3000;
          
            if( bottom_of_window > bottom_of_object ){
                //$(this).animate({'opacity':'1'}, 500);
                var circle1 = document.getElementById("circle1");
                var radius = circle1.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;
                
                circle1.style.strokeDasharray = `${circumference} ${circumference}`;
                circle1.style.strokeDashoffset = `${circumference}`;
                
                function setProgress1(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle1.style.strokeDashoffset = offset;
                }
                setProgress1(15);

                var circle2 = document.getElementById("circle2");
                var radius = circle2.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle2.style.strokeDasharray = `${circumference} ${circumference}`;
                circle2.style.strokeDashoffset = `${circumference}`;

                function setProgress2(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle2.style.strokeDashoffset = offset;
                }
                setProgress2(10);

                var circle3 = document.getElementById("circle3");
                var radius = circle3.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle3.style.strokeDasharray = `${circumference} ${circumference}`;
                circle3.style.strokeDashoffset = `${circumference}`;

                function setProgress3(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle3.style.strokeDashoffset = offset;
                }
                setProgress3(30);

                var circle4 = document.getElementById("circle4");
                var radius = circle4.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle4.style.strokeDasharray = `${circumference} ${circumference}`;
                circle4.style.strokeDashoffset = `${circumference}`;

                function setProgress4(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle4.style.strokeDashoffset = offset;
                }
                setProgress4(50);

                var circle5 = document.getElementById("circle5");
                var radius = circle5.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle5.style.strokeDasharray = `${circumference} ${circumference}`;
                circle5.style.strokeDashoffset = `${circumference}`;

                function setProgress5(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle5.style.strokeDashoffset = offset;
                }
                setProgress5(20);

                var circle6 = document.getElementById("circle6");
                var radius = circle6.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle6.style.strokeDasharray = `${circumference} ${circumference}`;
                circle6.style.strokeDashoffset = `${circumference}`;

                function setProgress6(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle6.style.strokeDashoffset = offset;
                }
                setProgress6(70);

                var circle7 = document.getElementById("circle7");
                var radius = circle7.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle7.style.strokeDasharray = `${circumference} ${circumference}`;
                circle7.style.strokeDashoffset = `${circumference}`;

                function setProgress7(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle7.style.strokeDashoffset = offset;
                }
                setProgress7(70);

                var circle8 = document.getElementById("circle8");
                var radius = circle8.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle8.style.strokeDasharray = `${circumference} ${circumference}`;
                circle8.style.strokeDashoffset = `${circumference}`;

                function setProgress8(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle8.style.strokeDashoffset = offset;
                }
                setProgress8(70);

                var circle9 = document.getElementById("circle9");
                var radius = circle9.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle9.style.strokeDasharray = `${circumference} ${circumference}`;
                circle9.style.strokeDashoffset = `${circumference}`;

                function setProgress9(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle9.style.strokeDashoffset = offset;
                }
                setProgress9(70);

                var circle10 = document.getElementById("circle10");
                var radius = circle10.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle10.style.strokeDasharray = `${circumference} ${circumference}`;
                circle10.style.strokeDashoffset = `${circumference}`;

                function setProgress10(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle10.style.strokeDashoffset = offset;
                }
                setProgress10(30);

                var circle11 = document.getElementById("circle11");
                var radius = circle11.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle11.style.strokeDasharray = `${circumference} ${circumference}`;
                circle11.style.strokeDashoffset = `${circumference}`;

                function setProgress11(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle11.style.strokeDashoffset = offset;
                }
                setProgress11(50);

                var circle12 = document.getElementById("circle12");
                var radius = circle12.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle12.style.strokeDasharray = `${circumference} ${circumference}`;
                circle12.style.strokeDashoffset = `${circumference}`;

                function setProgress12(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle12.style.strokeDashoffset = offset;
                }
                setProgress12(60);

                var circle13 = document.getElementById("circle13");
                var radius = circle13.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle13.style.strokeDasharray = `${circumference} ${circumference}`;
                circle13.style.strokeDashoffset = `${circumference}`;

                function setProgress13(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle13.style.strokeDashoffset = offset;
                }
                setProgress13(60);

                var circle14 = document.getElementById("circle14");
                var radius = circle14.r.baseVal.value;
                var circumference = radius * 2 * Math.PI;

                circle14.style.strokeDasharray = `${circumference} ${circumference}`;
                circle14.style.strokeDashoffset = `${circumference}`;

                function setProgress14(percent) {
                  const offset = circumference - percent / 100 * circumference;
                  circle14.style.strokeDashoffset = offset;
                }
                setProgress14(60);
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

