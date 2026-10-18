(function($) {
    "use strict";

    // Rolagem suave da página ao clicar no menu
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250);
        event.preventDefault();
    });

    // Ativação do popup da galeria de fotos (Magnific Popup)
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

})(jQuery);