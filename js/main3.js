(function ($) {

    'use strict';

    $(document).ready(function () {

        // Init here.
        var //$body = $('body'),
            $main3 = $('#main3'),
            //$site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main3.smoothState({
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                
                if (current === target) {
                    transition = 'fade';
                } else if (current < target) {
                    transition = 'moveright';
                } else {
                    transition = 'moveleft';
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    $main3.attr('data-transition', transition);
                    $main3.addClass('is-exiting');
                    //$site.animate({scrollTop: 0});
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    $container.removeClass('is-exiting');
                }
            },
        }).data('smoothState');

    });

}(jQuery));