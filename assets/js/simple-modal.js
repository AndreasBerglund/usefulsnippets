(function($) {

    $('button.modal').click(function(){

        $('.modal-outer').addClass('active');
        $('body').addClass('no-scroll');
        
    });

    $('.modal-inner').click(function(e){

        if (e.target != this) { return false; }
        $(this).parent().removeClass('active');
        $('body').removeClass('no-scroll');

    })

})(jQuery);