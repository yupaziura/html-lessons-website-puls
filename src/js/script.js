$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron_left_solid.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron_right_solid.svg"/></button>'
    });

    $('ul.catalog__list').on('click', 'li:not(.catalog__item_active)', function() {
        $(this)
          .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
          .closest('div.container').find('div.catalog__cards').removeClass('catalog__cards_active').eq($(this).index()).addClass('catalog__cards_active');
      });



    function toggleSlide (item) {
        $(item).each(function(i){
            $(this).on('click',function (e) {
                e.preventDefault();
                $('.catalog-card__main').eq(i).toggleClass('catalog-card__main_active');
                $('.catalog-card__secondary').eq(i).toggleClass('catalog-card__secondary_active');
            })
        })
    }

    toggleSlide('.catalog-card__details');
    toggleSlide('.catalog-card__back');

    //MODAL

    $('[data-modal=consult]').on('click', function(){
        $('.overlay, #consult').fadeIn();
    })

    $('.modal__close').on('click', function (){
        $('.overlay, #consult, #success, #order').fadeOut();
    })

    $('.button_catalog').each(function(i){
        $(this).on('click', function (){
            $('#order .modal__descr').text($('.catalog-card__title').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    })

  });
      