
$(window).bind('scroll.once', function(){
    scrollPage();
});

function scrollPage() {

    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {


    } else {

        var h = $(".scroll-wrap").height() - $(window).height();
        console.log(h + 'px');

        if (h > 0) {

            $(window).scrollTo({top: h + 'px', left:'0px'}, 500);
        }

    }

    $(window).unbind('scroll.once')
}


$('.order-button').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset: -85}, 800);
    return false;
});



// Меню

$(function($){
   var topnav = $('.agencies_float_wrap');
    $h = topnav.offset().top;

    $(window).scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию

        if ( $(window).scrollTop() > $h) {
            topnav.addClass('fix_top');
        }else{
            //Иначе возвращаем всё назад. Тут вы вносите свои данные
            topnav.removeClass('fix_top');
        }
    });
});


var abcToggle = function () {
    var sections = $('.agencies_abc__partial'),
        section = $(this).closest('.agencies_abc__partial');

    sections.removeClass('agencies_abc__partial--up');
    section.addClass('agencies_abc__partial--up');

    return false;
};

$(document).on('click', '.agencies_abc__button', abcToggle);


// Стилизация Select

$(function () {
    $('select').ikSelect({
        autoWidth: false,
        ddFullWidth: false,
        dynamicWidth: false,
        equalWidths: true,
        extractLink: false,
        linkCustomClass: '',
        ddCustomClass: '',
        filter: false,
        ddMaxHeight: 300,
        customClass: 'select-control'
    });
});


// Slider

$('.slider').slick({
    arrows: false,
    autoplay: false,
    dots: true,
    mobileFirst: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                dots: false,
                arrows: true,
                prevArrow: '<span class="slide-nav prev">',
                nextArrow: '<span class="slide-nav next">'
            }
        }
    ]
});


$('.reply-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    mobileFirst: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                dots: false,
                arrows: true,
                prevArrow: '<span class="slide-nav prev">',
                nextArrow: '<span class="slide-nav next">'
            }
        }
    ]
});

$('.btn-reply').click(function(){
    $('.reply-new').show();
});


// Tabs

$('.action-title li').click(function(e) {
    e.preventDefault();
    var tab = $($(this).attr("data-target"));
    $('.action-title').find('li').removeClass('active');
    $(this).closest('li').addClass('active');

    $('.action-content').find('.action-tab').hide();
    tab.show();
});


$('.service-nav .service-item').click(function(e) {
    e.preventDefault();
    var tab = $($(this).attr("data-target"));

    $('.service-description-line').find('li').removeClass('service-line-active');
    $('.service-description-line').find(tab).addClass('service-line-active');

    $('.service-nav').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    $('.service-description').find('.service-tab').hide();
    tab.show();
});




$('.btn-form-reset').click(function(){
    $('.reply-new').hide();
});

$('.btn-form-close').click(function(){
    $('.after-form').hide();
});

// Удалить!!!!!
$('.btn-reply-send').click(function(e){
    e.preventDefault();
    $('.reply-new').hide();
    $('.after-form').show();
});