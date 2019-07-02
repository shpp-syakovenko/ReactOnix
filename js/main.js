$(document).ready(function(){

	$(".toggle-mnu").click(function() { 	 // срабатывает бри клике на кнопку и закрытии(Для верхнего меню)
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.menu').slideUp(500);
		}else{
		$(this).addClass("on");
		$('.menu').slideDown(500);	
		}
	});  

	$('.slider').slick({			   		 // Стили для слайдера
  		dots: true,
  		arrows: false,  		
	});

	$('.slider-say').slick({			   	 // Стили для слайдера, стрелки указываем свои
  		dots: true,
  		arrows: true,
  		appendArrows:'.arrows',
  		prevArrow:'.prev',
 		nextArrow:'.next',
	});
	

	$('.service-slide').click(function(){    // Эфект для секции OUR SERVICES
		let more = $(this).children('.service-slide-popup');
		if(more.is(':visible')){
			more.hide(200);
		}else{
			more.show(200);
		}
	});

	$('.wrapper-team').click(function(){     // Эфект для секции Small Team
		let more = $(this).children('.wrapper-team-description');
		if(more.is(':visible')){
			more.hide(200);
		}else{
			more.show(200);
		}
	});

											// Плавный переход по якорным ссылка
	$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
   	 	});
	});
});
