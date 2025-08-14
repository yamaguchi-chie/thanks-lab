jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.box__bottom').on('click', function() {
    $(this).find('.box__main').next('.box__sub').slideToggle();
    $(this).find('.box__body').toggleClass('js-open');
    });

});
