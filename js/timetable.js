$(document).ready(function(){
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
$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('.menubar').css('position','fixed').css('top','0').css('width','100%').css('z-index',"8000");
        } else {
            $('.menubar').css('position','static').css('width','1170');
        }    
});

// $(document).on('click',  function(event){
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });
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


//  TIMETABLE

adultDentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
		["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 11:00:00"),new Date("April 20, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		["Carolyn  Hunt",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]	
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]

]

dentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
				
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 11:00:00"),new Date("April 20, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]


]

dentalHygienist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[		
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 08:00:00"),new Date("April 19, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
			
		
	],
//Friday

	[		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
			
	],
//Sunday
	[
					
	]

]

cosmeticDentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
					
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 11:00:00"),new Date("April 20, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]

]

pediatricDentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
			
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
				
	],
//Wednesday
	[
				
	],
//THursday
	[
				
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]

]

////////////////////////////////////////////////////////////////////////////////

doctors=[adultDentist,dentist,dentalHygienist,cosmeticDentist,pediatricDentist]


// Tdleri doldururuq
for(var i=1;i<=10;i++){
	tr=$("#timetable table tbody tr:nth-child("+i+")")
	for(var j=0;j<7;j++){
		$('<td></td>').appendTo(tr);
	}
}

/////////////////////////////////////////////////////////////////////////////

function PlaceTimeTable(index){
	//Birinci tdden bashqa (mes 09:00-10:00) hamisini sil
	$("#timetable table tbody tr td:not(:nth-child(1)").empty()

	//Uygun timetableleri doldurur
	for(var j=0; j<7;j++){
		for(var i=0; i<doctors[index][j].length;i++){		

			//uygun dentisti goturur
			var dentist=doctors[index][j][i];
            if(dentist[0]=="Eric Synder"){
                color="#18afd3";
            }
            else if(dentist[0]=="Christina Holland"){
                color="#f57e57";
            }
            else {
                 color ="blue";
             }
        
			//Uzunlugunu teyin edir
			var lengthOfDiv=dentist[2].getHours()-dentist[1].getHours();
			//Start positionu hesablayir
			var startPosition= dentist[1].getHours()-8;
			//Div yaradir
			$("<div></div>",{
				class: "doctor",
				style: "background: "+color+"; height:"+100*lengthOfDiv+"px",
			}).append(dentist[0]+"<img  class='img-circle img-responsive' src="+dentist[3]+"><p class='job'>"+dentist[4]+"</p>").
			//Buralari zehmet chekib etude  gelerdiz basha dusherdiz niye buna append edirem 
			appendTo($("#timetable table tbody tr:nth-child("+(startPosition+1)+") td:nth-child(+"+(j+2)+")"))

		}
	}
}

$("#timetable ul li").click(function(){
	//Nechenchi tabdi onu tapir
	var index=$("#timetable ul li").index($(this));
	//Hemin tabi uygun fuksiyaya gonderir
	PlaceTimeTable(index)
	$("#timetable ul li").removeClass("active")
	$(this).addClass("active")
	//Eger sehife kichikdise table-i clickden sonraya append edir
	if($(window).width()<600){
		$(this).after($("#timetable #tableScroll"))
	}
})

//Resize olanda ve bashlayanda yoxlayirki accordion yaratmalidi yayox

function CheckForAccordion(){
	if($(window).width()<600){
		// accordion qurulushu yaradir sonrasin ozunuz edersiz
		$('#timetable ul li').css("display",'block')
		//table-i active classdan sonraya append edir
		$('#timetable ul .active').after($("#timetable #tableScroll"))
	}
	else{
		$('#timetable ul li').css("display",'inline-block')
		//Ekrani boyudende table-i yerine getirr
		$('#timetable').append($('#timetable #tableScroll'))

	}
}

$(document).ready(function(){
	PlaceTimeTable(0);
	CheckForAccordion()
})

$(window).resize(function(){
	CheckForAccordion()
})

});