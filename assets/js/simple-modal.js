(function($) {

    $('button.modal').click(function(){

        $('.modal-outer').addClass('active');
        $('body').addClass('no-scroll');
        
    });

    $('.modal-outer').click(function(e){

        if(e.target != this) return;
        $(this).removeClass('active');
        $('body').removeClass('no-scroll');
    })

})(jQuery);