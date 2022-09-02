$(document).ready(function(){
	$('.carousel__inner').slick({
		// infinite: true, двигаться бесконечно
		// slidesToShow: 3, сколько слайдов показывать
		// slidesToScroll: 3, сколько слайдов перелистывать при нажатии на кнопку
		// dots: true,  точки кружочки для навигации можно застилизовать
		// autoplay: true, автоматически перелистывает слайды
		// autoplaySpeed: 2000, перелистывает через 2 секунды
		// fade: true,  проявление картинки с заднего фона
		// cssEase: 'linear',  проявление картинки происходит равномерно
		// arrows: false, убрать стрелочки
		// adaptiveHeight: true,   подстраивается под разную высоту картинок
		speed: 1200, // скорость переключения слайдов в миллисекундах
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>', // стрелочка слева
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>', // стрелочка справа
		responsive: [
			{
				breakpoint: 992, // правила работают от 0 до 768px
				settings: {
					dots: true, // добавляю точки навигации
					arrows: false // выключаю стрелочки
				}
			}
		]
	  	});
});
			