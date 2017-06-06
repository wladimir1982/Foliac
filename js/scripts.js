(function ($) {

    $(document).ready(function () {
        //Toggle menu icon
        $(".menu-icon").on("click", function () {
//            $( ".fa-times" ).css( "display", "block" );
//            $( ".fa-bars" ).css( "display", "none" );
            $(this).toggleClass( "toggle" );
            
//            if ( $(this).hasClass( "toggle" ) ) {
//                $( ".menu" ).css( "display", "block" );
//                } else {
//                   $( ".menu" ).css( "display", "none" ); 
//                }
        });
    });
})(jQuery);
