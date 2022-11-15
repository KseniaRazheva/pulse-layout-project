// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		// infinite: true, двигаться бесконечно
// 		// slidesToShow: 3, сколько слайдов показывать
// 		// slidesToScroll: 3, сколько слайдов перелистывать при нажатии на кнопку
// 		// dots: true,  точки кружочки для навигации можно застилизовать
// 		// autoplay: true, автоматически перелистывает слайды
// 		// autoplaySpeed: 2000, перелистывает через 2 секунды
// 		// fade: true,  проявление картинки с заднего фона
// 		// cssEase: 'linear',  проявление картинки происходит равномерно
// 		// arrows: false, убрать стрелочки
// 		// adaptiveHeight: true,   подстраивается под разную высоту картинок
// 		speed: 1200, // скорость переключения слайдов в миллисекундах
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>', // стрелочка слева
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>', // стрелочка справа
// 		responsive: [
// 			{
// 				breakpoint: 992, // правила работают от 0 до 768px
// 				settings: {
// 					dots: true, // добавляю точки навигации
// 					arrows: false // выключаю стрелочки
// 				}
// 			}
// 		]
// 	  	});
// }); для slick-слайдера
		
const slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		nav: false
		// controlsText: [
		// 	'<img src="icons/left.svg">',
		// 	'<img src="icons/right.svg">'
		// ] стрелочки

		// responsive: {
		// 	640: {
		// 	  edgePadding: 20,
		// 	  gutter: 20,
		// 	  items: 2
		// 	},
		// 	700: {
		// 	  gutter: 30
		// 	},
		// 	900: {
		// 	  items: 3
		// 	}
		//   } адаптивность
	});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
}); // для tiny-slider


$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
});
