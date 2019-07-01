$(document).ready(function(){

	$(".toggle-mnu").click(function() {  // срабатывает бри клике на кнопку и закрытии
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.menu').slideUp(500);
		}else{
		$(this).addClass("on");
		$('.menu').slideDown(500);	
		}
	});  

	$('.slider').slick({			    // Стили для слайдера
  		dots: true,
  		arrows: false,  		
	});

	$('.service-slide').click(function(){
		let more = $(this).children('.service-slide-popup');
		if(more.is(':visible')){
			more.hide(200);
		}else{
			more.show(200);
		}
	});

});
