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
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
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

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
}); // для tiny-slider

$(document).ready(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  ); // скрипт для табов (вкладок)

  //	$('.catalog-item__link').each(function(i) {
  //		$(this).on('click', function(e) {
  //			e.preventDefault();
  //			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //		})
  //	});  // неоптимизмизированный скрипт для кнопки подробнее

  //	$('.catalog-item__back').each(function(i) { // класс ссылки, перебор ссылок
  //		$(this).on('click', function(e) { // буду кликать на эту ссылку
  //			e.preventDefault(); // отменяю стандартное поведение браузера
  //			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active'); // переключение классов: если не активен - станет активным(класс будет добавляться), если активный - станет не активным(класс будет убираться)
  //		})
  //	});  // неоптимизмизированный скрипт для кнопки назад

  function toggleSlide(item) {
    // функция с аргументом item
    $(item).each(function (i) {
      // там где меняется класс - item
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link"); // возьму функцию и во внутрь передам класс ссылки который надо переключать
  toggleSlide(".catalog-item__back"); // оптимизированный скрипт для кнопок подробнее и назад
  // ('.class')
  // .each - метод (перебор каждого элемента (для каждой ссылки подробнее из каждой карточки) [function=что будет происходить при переборе элементов?]
  // (i-определенный аргумент который мне понадобится)
  // на каждую ссылку я буду кликать (метод .on)) [function=и что будет происходить после этого клика?]
  // стандартное поведение браузера - когда пользователь кликает по ссылке он переходит по определенномк адресу
  // отменить стандартное поведение можно командой e.preventDefault - не переходить по ссылкам по определенному адресу, а выполняли какие-то другие действия (чтобы это сработало, внутри функции нужно прописать е)
  // логическое выражение: я получаю блок с классом catalog-item__content. при клике у меня переключается класс (toggleClass) [если класс есть - он убирается, если класса нет - он добавляется]
  // команда .eq позволяет получать элемент по определенному индексу (по порядку) берем все ссылки что есть на странице: перебираем i=1 и при клике на 1 ссылку будут меняться классы первого элементами [если его не поставит, то все ссылки нажимаются одновременно]

  // Modal

  // $('[data-modal=consultation]').fadeOut(); эффект jquery команда которая позволяет анимированно скрыть элемент со страницы
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
  });
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });


  // jquery-validation
  // $('.feed-form').validate(); работает только на первой форме с этим селектором на странице

  function valideForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        } 
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите свой телефон",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты",
        }
      }
    });
  };

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  // Mask
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //Mailer не работает
  $('form').submit(function(e) {
    e.preventDefault();
    
    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      // url: "mailer/smart.php",
      // url: "nodejs-mail-sender/static/nodemailer.js",
      // url: "http://localhost:3001/api/sendmail",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  // Smooth scroll and padeup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
     $('.pageup').fadeOut();
    }
  }); // элемент вверх появляется если проскролить 1600px и поднимает вверх страницы

  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  }); // для плавной прокрутки, но браузер и без этой части скрипта плавно прокручивает

  // wow.js (после обновления страницы анимация работает не сразу, а когда прокрутишь до элемента и его увидишь)
  new WOW().init();
});
