$(document).ready(function(){
    // right-slider
    var classlength=$(".slide").innerWidth();
    // console.log(classlength);
    $(".slides").css ("position","relative");
    
    var y =0;
    $(".slides").css("right",y + "px");
    $("#points .point").click(function() {
       var x = parseInt($(this).attr('index'));
       if (x!=null) {
            y = x * classlength;
             $(".slides").css("right",y + "px");
            //  console.log(y);
             $("#points .point").removeClass("active");
             $(this).addClass("active");
             
       }                
    })

//   <---first slider
$("#mydots .dotone").click(function(){
    var mywordarray=["Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.","We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.","Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care."];
    var myh1array=["HIGH QUALITY MEDICAL CARE THAT'S FAST AND CONVENIENT","AFFORDABLE PEDIATRIC DENTISTRY SERVICES","WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES"]
    var b = parseInt($(this).attr('value'));
    console.log(b);
    if (b != null){
     $("#main1").css("background-image", "url('images/pages/main"+b+".jpg')");
            $(".myh1").text(myh1array[b]);
            $(".mywords").text(mywordarray[b]);
             $("#mydots .dotone").removeClass("active1");
             $(this).addClass("active1");
    }

})
// side bar home
   $('.yes111').click(function(){
       $('.sidebar').animate({left: '0'}, "1000");
   })
     $('.no').click(function(){
       $('.sidebar').animate({left: '-400'}, "1000");
   })
  $(".sidebar li i").click(function (){
      $(this).toggleClass("fa-angle-up");
     $(this).toggleClass("fa-angle-down");
    // $(".js-toggle").css("display","none");
     var myattr1=$(this).attr("rel");
      $("#" + myattr1).slideToggle(); 
})
});




// difference


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
// difference


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
    // ---myform--
$(".myform").submit(function(){
    if( ($(".txtform input").val() === "") && ($(".emform input").val() === "")) {
           $('.txtform input').attr('value','The text field is required.').css('color','red');
           $('.emform input').attr('value','The email is required.').css('color','red');
        $(".myform .mybtn").css("background-color","#18afd3").css("outline","0");
        event.preventDefault();
    }
    else if ($(".txtform input").val() === "") {
         $('.txtform input').attr('value','The text field is required.').css('color','red');
         $(".myform .mybtn").css("background-color","#18afd3").css("outline","0");
         event.preventDefault();
    }
    else if ($(".emform input").val() === "") {
         $('.emform input').attr('value','The email is required.').css('color','red');
         $(".myform .mybtn").css("background-color","#18afd3").css("outline","0");
         event.preventDefault();
    }
});




// ---slider---
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:3
        }
    }
  });
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