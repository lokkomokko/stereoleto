window.onbeforeunload = function () {
    if (document.querySelector('body').classList.contains('scroll-body')) {
        window.scrollTo(0, 300);
    }
};

$(document).ready(function () {


    var body = $('body');
    var html = $('html');

    if (body.hasClass('scroll-body')) {
        setTimeout(function () {
            window.scrollTo(0, 300);
            $(this).scrollTop(300);
        }, 10)
    }

    var scrollingText = $('.header__bottom-text')
    var current_width = scrollingText.width(),
        full_text = '';

        full_text = scrollingText.find('p').text()
    //
    while(current_width <= 20000) {
        scrollingText.find('p').append(full_text);
        current_width = scrollingText.find('p').width()
    }

    var artistList = $('.main-block__artists-list');
    if (artistList.length) {
        artistList.find('li').first().addClass('main-block__artists-list-item--hovered')
    }
    artistList.find('li a').hover(function () {
        if (artistList.find('li').first().hasClass('main-block__artists-list-item--hovered')) {
            artistList.find('li').first().removeClass('main-block__artists-list-item--hovered')
        }
    });
    artistList.find('li a').mouseleave(function () {
        if (!artistList.find('li').first().hasClass('main-block__artists-list-item--hovered')) {
            artistList.find('li').first().addClass('main-block__artists-list-item--hovered')
        }
    });

    var artistListLineup = $('.lineup');
    if (artistListLineup.length) {
        artistListLineup.find('a').first().addClass('lineup-item--hovered')
    }
    artistListLineup.find('a').hover(function () {
        if (artistListLineup.find('a').first().hasClass('lineup-item--hovered')) {
            artistListLineup.find('a').first().removeClass('lineup-item--hovered')
        }
    });
    artistListLineup.find('a').mouseleave(function () {
        if (!artistListLineup.find('a').first().hasClass('lineup-item--hovered')) {
            artistListLineup.find('a').first().addClass('lineup-item--hovered')
        }
    });


    $('.buy-button__circle-text').lettering();

    $('.inner-list-wrap__trigger').click(function () {
       $(this).closest('.inner-list-wrap').toggleClass('inner-list-wrap--open')
    });
    $('.inner-list-wrap').mouseleave(function () {
        $(this).removeClass('inner-list-wrap--open')
    });

    $('#mobile-menu-toggle').click(function () {
        var header = $('.header');
        header.toggleClass('header--mobile-open');
        if ($(window).innerWidth() <= 600) {
            if (header.hasClass('header--mobile-open')) {
                var header__top = $(".header__top");
                $('html, body').animate({
                    scrollTop: header__top.css('display') === 'none' ? 0 : header__top.height()
                }, 500, 'linear', function () {
                    html.addClass('overflow-hidden');
                });
            } else {
                html.removeClass('overflow-hidden');
            }
        }
    });

    function toggleOrderMenu (remove) {
        if (remove) {
            if ($('.header-mobile-menu li').hasClass('order-unset')) {
                $('.header-mobile-menu li').removeClass('order-unset')
            }
        } else {
            if (!$('.header-mobile-menu li').hasClass('order-unset')) {
                $('.header-mobile-menu li').addClass('order-unset')
            }
        }
    }
    toggleOrderMenu($(window).innerWidth()<=600);
    $(window).resize(function () {
        toggleOrderMenu($(window).innerWidth()<=600)
    });

    var offset_top = $(window).innerWidth() <= 900 ? $(window).innerWidth() <= 740 ? 10 : 20 : 30;
    $('#buy-button').stick_in_parent({
        offset_top: offset_top
    });

    if ($('.place-block__how-mobile-current').length) {
        var howTabs = $('.place-block__how li');
        howTabs.click(function () {
            var id = $(this).data('id');
            howTabs.removeClass('place-block__how--active');
            $(this).addClass('place-block__how--active')
            $('.place-block__how_text-item').addClass('place-block__how_text--hidden');
            $('.place-block__how-mobile-current p').text($(this).text())
            $('.place-block__how_text-item[data-id="'+id+'"]').removeClass('place-block__how_text--hidden');
        });
    }
    $('.place-block__how-mobile-current').click(function () {
        $('.place-block__how-mobile-list').toggleClass('place-block__how-mobile-list--open')
    });


    if ($('.main-block__new-link').length  && $(window).width() <= 960) {
        var leftOffset = $('.main-block__new-link').offset().left;
        leftOffset = $(window).width() <= 740 ? leftOffset - 10 :  leftOffset - 40;
        $('.place-block__link').css('margin-left', leftOffset)
        $(window).resize(function () {
            var leftOffset = $('.main-block__new-link').offset().left;
            leftOffset = $(window).width() <= 740 ? leftOffset - 10 :  leftOffset - 40;
            $('.place-block__link').css('margin-left', leftOffset)
        })
    }

    objectFitImages();
    svg4everybody()
});