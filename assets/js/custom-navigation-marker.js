
(function($) {

    var $ami // active menu item
    var $marker;

    if ( $('.initial').length > 0 ) { spawn_marker( get_info( $('.initial') ) ); }

    $('nav > ul > li > a').on('click', function(e){

        e.preventDefault(); //prevent goint to link before animation

        $ami =  $(this);

        if (!$marker) {

            spawn_marker(get_info($ami));        

        } else {

            move_marker(get_info($ami));

        }



    });

    function spawn_marker(_init) {

        $marker = $('<div class="marker"></div>').css({ left: _init.l, top: _init.t, width: _init.w, height: _init.h });

        $('nav').append($marker);

        $marker.animate({opacity:1});

    }

    function move_marker(_to) {

        $marker.animate(

            { left: _to.l, top: _to.t, width: _to.w, height: _to.h }, 

            { complete: function() {

                window.location.href = $ami.attr('href'); 

            }

            });  

    }

    function get_info(_element) {

        obj = { l : _element.offset().left, t: _element.offset().top, w: _element.outerWidth(), h: _element.outerHeight() };

        return obj;

    }

})(jQuery);
