

(function ($) {

        $(window).resize(function () {
                var windowWidth = $(window).width();
                if (windowWidth <= 772) {
                    $(".tab-content").addClass("theteam__slider");
                } else if (windowWidth > 772) {
                    $(".tab-content").removeClass("theteam__slider");
                }

                $('.theteam__slider').slick({
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                });
            });

})(jQuery);

// (function ($) {
//
//     $(window).resize(function () {
//         var windowWidth = $(window).width();
//         if (windowWidth <= 320) $(".tab-content").addClass("theteam__slider");
//         else if (windowWidth > 320) $(".tab-content").removeClass("theteam__slider");
//     });
//     
// })(jQuery);
//
// //       Скрипт для слайдера
//
// //     $('theteam__slider').slick({
// //         dots: true,
// //         arrows: false,
// //
// //     });

