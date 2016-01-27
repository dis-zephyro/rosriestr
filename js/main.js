$( document ).ready(function() {
    var myCode = (function() {

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
            autoplay: true,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            mobileFirst: true,
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
        }); //

        $('.btn-action-send').click(function(e){
            e.preventDefault();
            $(this).closest('.action-form').hide();
            $(this).closest('.action-tab').find('.after-action').show();
        });

// Tabs

        $('.action-title li').click(function(e) {
            e.preventDefault();
            var tab = $($(this).attr("data-target"));
            $('.action-title').find('li').removeClass('active');
            $(this).closest('li').addClass('active');

            $('.action-block-title').find('span').hide();
            $('.action-content').find('.action-tab').hide();
            tab.show();
        });

        $('.btn-form-back').click(function(e) {
            e.preventDefault();

            $('.action-content').find('.action-tab').hide();
            $('.action-block-title').find('span').hide();
            $('.action-content .support').show();
            $('.action-block-title .support').show();
        });


        $('.service-description').slick({
            arrows: false,
            autoplay: false,
            dots: true,
            fade: false,
            adaptiveHeight: true,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1365,
                    settings: {
                        fade: true,
                        speed: 10,
                        cssEase: 'step-end',
                        easing: 'step-end'
                    }
                }
            ]
        });

        $('.service-description').on('afterChange', function(event, slick, currentSlide){

            var slide = '.item' + currentSlide;

            $('.service-nav').find('li').removeClass('active');
            $('.service-nav').find(slide).addClass('active');

        });


        $('.service-nav li').click(function(e) {
            e.preventDefault();

            $('.service-nav').find('li').removeClass('active');
            $(this).closest('li').addClass('active');

        });

        $('.service-nav li.item0').click(function(e) {
            e.preventDefault();
            $('.service-description').slick('slickGoTo', 0);
        });

        $('.service-nav li.item1').click(function(e) {
            e.preventDefault();
            $('.service-description').slick('slickGoTo', 1);
        });

        $('.service-nav li.item2').click(function(e) {
            e.preventDefault();
            $('.service-description').slick('slickGoTo', 2);
        });

        $('.service-nav li.item3').click(function(e) {
            e.preventDefault();
            $('.service-description').slick('slickGoTo', 3);
        });


// warranty

        $('.warranty-btn').click(function(e) {
            e.preventDefault();
            var tab = $($(this).attr("data-target"));
            $('.warranty-head').find('.warranty-btn').removeClass('active');
            $(this).addClass('active');

            $('.warranty').find('.warranty-tab').hide();
            tab.show();
        });



        $('.header_nav li a').click(function(){
            var str=$(this).attr('href');
            $.scrollTo(str, 500, {offset:-120 });
            return false;
        });


// Auto complete

        $(function() {

            var place = [
                "Хабаровск / Хабаровский Край",
                "Москва / Московская обл.",
                "Волгоград / Волгоградская обл.",
                "Рязянь /Рязанская обл."
            ];


            $('.place-complete').autocomplete({
                source: place,
                minLength: 0,
                delay: 0
            });
            $('.place-complete').bind('focus', function() {
                if ($(this).val() == '')
                    $(this).autocomplete('search', '');
            });
        });


        ymaps.ready(init);

        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [55.7547,37.5852],
                zoom: 17,
                controls: ['smallMapDefaultSet']
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('multiTouch');
        }


        $('.scroll-nav').liLanding({
        });

        $('.scroll-nav li a').click(function(){
            var str=$(this).attr('href');
            $.scrollTo(str, 1000, {offset:-120 });
            return false;
        });



    })();

    var LandingAboutAnimations = {
        init: function (guar) {
            LandingAboutAnimations.config = {
                commandBlock: $('.command-blocks'),
                contactsBlock: $('.contacts-block'),
                startAnimate: false,
                timeAnimation: 500,
                commandCount: 24,
                swipeMove: false,
                wow: null,
                commandMoveCoords: null,
                notScroll: false,
                commandBlockTop: $('.command-text').offset().top,
                guaranteesBlockTop: $('.guarantees-text').offset().top,
                contactsBlockTop: $('.contacts-text').offset().top,
                aboutMenuItem: $('[data-scroll=".scroll_about"]').parent(),
                commandMenuItem: $('[data-scroll=".scroll_command"]').parent(),
                guaranteesMenuItem: $('[data-scroll=".scroll_guar"]').parent(),
                contactsMenuItem: $('[data-scroll=".scroll_contacts"]').parent()
            };

            LandingAboutAnimations.setup();

            $(document).on('resize', window, LandingAboutAnimations.setup);

            LandingAboutAnimations.scrollToGuar(guar);
            $(window).load(function() {
                LandingAboutAnimations.scrollToGuar(guar)
            });


        },

        setup: function () {
            LandingAboutAnimations.config.commandBlock.on('touchstart', LandingAboutAnimations.commandMoveStart);
            LandingAboutAnimations.config.commandBlock.on('touchmove', LandingAboutAnimations.commandMove);
            LandingAboutAnimations.config.commandBlock.on('touchend', LandingAboutAnimations.commandMoveEnd);

            LandingAboutAnimations.config.commandBlock.on('click', '.ws_prev', LandingAboutAnimations.commandLeft);
            LandingAboutAnimations.config.commandBlock.on('click', '.ws_next', LandingAboutAnimations.commandRight);

            $(document).on('click', '.guarantees-btn', LandingAboutAnimations.guaranteesBtnClick);

            $(document).on('click', '.openContactsForm', LandingAboutAnimations.openContactsForm);
            $(document).on('click', '.sendContactsForm', LandingAboutAnimations.sendContactsForm);
            $(document).on('click', '.openContactsBlock', LandingAboutAnimations.openContactsBlock);
            $(document).on('click', '.agencies_header_search_menu a', LandingAboutAnimations.scrollMenuClick);

            $(window).scroll(LandingAboutAnimations.scroll);

            $(document).on('focus', '.maskcellphone', function () {
                $(this).mask('+7 999 999 9999');
            });

            LandingAboutAnimations.setupWow();
            LandingAboutAnimations.commandSetup();

            $('.select2').select2({
                minimumResultsForSearch: Infinity,
                placeholder: 'Кто вы'
            });
        },

        setupWow: function () {
            $('.work-block').addClass('wow').addClass('fadeInUp');
            if ($('body').width() < 995) {
                $('.work-block').attr('data-wow-duration', '1s');
            } else {
                $('.work-block.left').attr('data-wow-duration', '1s');
                $('.work-block.right').attr('data-wow-duration', '1s').attr('data-wow-delay', '0.25s');
            }
            $('.wow').each(function () {
                if (!$(this).attr('data-wow-duration')) {
                    $(this).attr('data-wow-duration', '2s');
                }
            });

            $('.advantages-block').each(function (ind) {
                $(this).attr('data-wow-duration', '1s');
                if ($('body').width() < 995) {
                    $(this).attr('data-wow-delay', (ind % 2 * 0.25) + 's');
                } else {
                    $(this).attr('data-wow-delay', (ind % 3 * 0.25) + 's');
                }
            });

            LandingAboutAnimations.config.wow = new WOW();
            LandingAboutAnimations.config.wow.init();
        },

        scrollMenuClick: function (e) {
            e.preventDefault();
            var btn = $(this);
            btn.parent().parent().find('li').removeClass('active');
            btn.parent().addClass('active');
            LandingAboutAnimations.config.notScroll = true;
            setTimeout(function () {
                LandingAboutAnimations.config.notScroll = false;
            }, LandingAboutAnimations.config.timeAnimation);
            $('html, body').animate({
                scrollTop: $(btn.attr('data-scroll')).offset().top - 150
            }, LandingAboutAnimations.config.timeAnimation);
        },

        openContactsForm: function (e) {
            e.preventDefault();
            LandingAboutAnimations.config.contactsBlock.find('.before-form').addClass('hide');
            LandingAboutAnimations.config.contactsBlock.find('.contacts-form').removeClass('hide');
            LandingAboutAnimations.config.contactsBlock.find('.after-form').addClass('hide');
        },

        sendContactsForm: function (e) {
            return false;
            e.preventDefault();
            LandingAboutAnimations.config.contactsBlock.find('.before-form').addClass('hide');
            LandingAboutAnimations.config.contactsBlock.find('.contacts-form').addClass('hide');
            LandingAboutAnimations.config.contactsBlock.find('.after-form').removeClass('hide');
        },

        openContactsBlock: function (e) {
            e.preventDefault();
            LandingAboutAnimations.config.contactsBlock.find('.before-form').removeClass('hide');
            LandingAboutAnimations.config.contactsBlock.find('.contacts-form').addClass('hide');
            LandingAboutAnimations.config.contactsBlock.find('.after-form').addClass('hide');
        },

        commandRight: function (e) {
            e.preventDefault();
            if (!LandingAboutAnimations.config.startAnimate) {
                LandingAboutAnimations.config.startAnimate = true;
                var curr = LandingAboutAnimations.config.commandBlock;
                var wrap = curr.find('.wrap');
                // if (wrap.width() > curr.width()) {
                var offset = parseFloat(wrap.css('margin-left'));
                var max_offset_left = -wrap.width() * LandingAboutAnimations.config.commandCount / 2;
                var max_offset_right = wrap.width() * LandingAboutAnimations.config.commandCount / 2;
                offset -= 178 * 2;
                if (offset < max_offset_left) {
                    offset = max_offset_left;
                } else if (offset > max_offset_right) {
                    offset = max_offset_right;
                }
                wrap.animate({
                    'margin-left': offset + 'px'
                }, LandingAboutAnimations.config.timeAnimation, done = function () {
                    LandingAboutAnimations.config.startAnimate = false;
                });
                // }
            }
            return true;
        },

        commandLeft: function (e) {
            e.preventDefault();
            if (!LandingAboutAnimations.config.startAnimate) {
                LandingAboutAnimations.config.startAnimate = true;
                var curr = LandingAboutAnimations.config.commandBlock;
                var wrap = curr.find('.wrap');
                // if (wrap.width() > curr.width()) {
                var offset = parseFloat(wrap.css('margin-left'));
                var max_offset_left = -wrap.width() * LandingAboutAnimations.config.commandCount / 2;
                var max_offset_right = wrap.width() * LandingAboutAnimations.config.commandCount / 2;
                offset += 178 * 2;
                if (offset < max_offset_left) {
                    offset = max_offset_left;
                } else if (offset > max_offset_right) {
                    offset = max_offset_right;
                }
                wrap.animate({
                    'margin-left': offset + 'px'
                }, LandingAboutAnimations.config.timeAnimation, done = function () {
                    LandingAboutAnimations.config.startAnimate = false;
                });
                // }
            }
            return true;
        },

        commandMove: function (e) {
            var coords = e.originalEvent.targetTouches[0];
            if (LandingAboutAnimations.config.commandMoveCoords) {
                var curr = LandingAboutAnimations.config.commandBlock;
                var wrap = curr.find('.wrap');
                if (wrap.width() > curr.width()) {
                    var percent = (coords.pageX - LandingAboutAnimations.config.commandMoveCoords.pageX) / curr.width() * 4;
                    var offset = parseFloat(wrap.css('margin-left'));
                    var max_offset_left = -wrap.width() * LandingAboutAnimations.config.commandCount / 2;
                    var max_offset_right = wrap.width() * LandingAboutAnimations.config.commandCount / 2;
                    offset += (wrap.width() - curr.width()) * percent;
                    if (offset < max_offset_left) {
                        offset = max_offset_left;
                    } else if (offset > max_offset_right) {
                        offset = max_offset_right;
                    }
                    wrap.css({
                        'margin-left': offset + 'px'
                    });
                }
            }
            LandingAboutAnimations.config.commandMoveCoords = coords;
            return true;
        },

        commandMoveStart: function (e) {
            LandingAboutAnimations.config.commandMoveCoords = e.originalEvent.targetTouches[0];
            return true;
        },

        commandMoveEnd: function (e) {
            LandingAboutAnimations.config.commandMoveCoords = null;
            return true;
        },

        commandSetup: function () {
            var curr = LandingAboutAnimations.config.commandBlock;
            var wrap = curr.find('.wrap');
            var multi = wrap.find('.multi').clone();
            wrap.find('.multi').remove();
            for (var i = 0; i < (LandingAboutAnimations.config.commandCount + 1); i++) {
                multi.css({
                    position: 'absolute',
                    left: (i - LandingAboutAnimations.config.commandCount / 12) * 1416 + 'px',
                    width: '1416px'
                });
                wrap.append(multi);
                multi = multi.clone();
            }
        },

        guaranteesBtnClick: function (e) {
            e.preventDefault();
            var btn = $(this);
            if (btn.hasClass('active')) return false;
            if (LandingAboutAnimations.config.startAnimate) return false;
            LandingAboutAnimations.config.startAnimate = true;
            $('.guarantees-btn').removeClass('active');
            btn.addClass('active');
            var curr_block = $('.guarantees-block.active');
            var next_block = $('.guarantees-block[data-block="' + btn.attr('data-block') + '"]');
            var wrap = $('.guarantees-blocks .wrap');
            curr_block.css({
                'position': 'absolute',
                'top': 0
            });
            var offset = (wrap.width() - curr_block.width()) / 2.0;
            curr_block.css({
                'left': offset + 'px'
            });
            curr_block.find('.text').animate({
                'opacity': 0
            }, LandingAboutAnimations.config.timeAnimation / 2, done = function () {
                curr_block.find('.img').animate({
                    'opacity': 0
                }, LandingAboutAnimations.config.timeAnimation, done = function () {
                    curr_block.addClass('hide').removeClass('active');
                    curr_block.css({left: '0'});
                });
            });

            next_block.removeClass('hide').addClass('active').css({
                'position': 'relative',
            });
            next_block.find('.img').css({
                'opacity': 0
            });
            next_block.find('.text').css({
                'opacity': 0
            });
            next_block.find('.img').animate({
                'opacity': 1
            }, LandingAboutAnimations.config.timeAnimation, done = function () {
                setTimeout(function () {
                    next_block.find('.text').animate({
                        'opacity': 1
                    }, LandingAboutAnimations.config.timeAnimation / 2, done = function () {
                        LandingAboutAnimations.config.startAnimate = false;
                    });
                }, LandingAboutAnimations.config.timeAnimation / 2);
            });

        },

        scroll: function () {
            if (LandingAboutAnimations.config.notScroll) return false;
            var pageY = window.pageYOffset;

            var offsetForSwitch = 300;

            pageY = pageY + offsetForSwitch;

            LandingAboutAnimations.config.aboutMenuItem.removeClass("active");
            LandingAboutAnimations.config.commandMenuItem.removeClass("active");
            LandingAboutAnimations.config.guaranteesMenuItem.removeClass("active");
            LandingAboutAnimations.config.contactsMenuItem.removeClass("active");

            if (pageY > LandingAboutAnimations.config.contactsBlockTop) {
                LandingAboutAnimations.config.contactsMenuItem.addClass("active");
            } else if (pageY > LandingAboutAnimations.config.guaranteesBlockTop) {
                LandingAboutAnimations.config.guaranteesMenuItem.addClass("active");
            } else if (pageY > LandingAboutAnimations.config.commandBlockTop) {
                LandingAboutAnimations.config.commandMenuItem.addClass("active");
            } else {
                LandingAboutAnimations.config.aboutMenuItem.addClass("active");
            }

        },

        scrollToGuar: function(guar) {
            if (guar) $('a[data-scroll=".scroll_guar"]').trigger("click");
        }
    };

    new WOW().init();

    myCode;

    LandingAboutAnimations;
});


















