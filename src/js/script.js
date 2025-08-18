jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.box__bottom').on('click', function() {
    $(this).find('.box__main').next('.box__sub').slideToggle();
    $(this).find('.box__body').toggleClass('js-open');
    });

    $('.accordion__q').on('click', function() {
        $(this).next('.accordion__a').slideToggle();
        $(this).toggleClass('js-open');
        $(this).next('.accordion__a').toggleClass('js-open');
    });
});
