
$(document).ready(function () {

    // --sidebar--
    $('.yes i').click(function () {
        $('.sidebar1').animate({ left: '0' }, 400);
        $(this).toggleClass("fa-bars");
        $(this).toggleClass("fa-arrow-left");
        if ($(this).hasClass("fa-bars")) {

         $('.sidebar1').animate({left: '-400'}, 200);
        }
    });
    $(".sidebar1 li  i").click(function () {
        $(this).toggleClass("fa-angle-up");
        $(this).toggleClass("fa-angle-down");
        // $(".js-toggle").css("display","none");
        var myattr = $(this).attr("rel");
        $("#" + myattr).slideToggle();
    });


//three dots
    $(".dotclose i").click(function () {
        $(".numberbar").toggle();
        $(this).toggleClass("fa-ellipsis-v");
        $(this).toggleClass("fa-times");
    });

        // forsearch focus
    $(".forsearch input").focus(function(){
               $(this).animate({
             'padding-top': '1%',
            'padding-left': "2%",
            'font-size': '12px',
        }, '0.3s');
            $(".forsearch input").blur(function () {
        $(this).animate({
            'padding-top': '4%',
            'padding-left': "3%",
            'font-size': '16px',
        }, '0.3s');
    })
});

   //search-click

    $("#lastsearch i").click(function () {
        $(".hit input").toggleClass("typeactive", "1000");
        $(this).toggleClass("fa-times", "1000");
    });

    $(".hit input").focus(function () {
        $(this).animate({
            'padding-bottom': '3%',
            'padding-left': "4%",
            'font-size': '12px',
        }, '0.3s');
    });
    $(".hit input").blur(function () {
        $(this).animate({
            'padding-bottom': '0%',
            'padding-left': "0%",
            'font-size': '26px',
        }, '0.3s');
    })

    // -----menubar--scroll
    var elementPosition = $('.menubar').offset();
    console.log(elementPosition);
    $(window).scroll(function () {
        if ($(window).scrollTop() > elementPosition.top) {
            $('.menubar').css('position', 'fixed').css('top', '0').css('width', '100%').css('z-index', "8000");
        } else {
            $('.menubar').css('position', 'static').css('width', '1170');
        }
    });


      $('.circle').click(function(){
       $('html, body').animate({ scrollTop: 0 }, "slow")
       return false;
   })

      $(window).scroll(function() {
    if ($(this).scrollTop()>500)
     {
        $('.circle').show();
     }
    else
     {
      $('.circle').hide();
     }
 });
    });