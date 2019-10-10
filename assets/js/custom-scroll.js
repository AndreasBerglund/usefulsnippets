
(function($) {

    var $container = $('.custom-scroll-container');
    var container = $container.get(0);
    var $arrow_down = $('.arrow');
    var open_for_transition = false;
    var offset = 100;

    //add only if container has scroll
    container.addEventListener('scroll', function(event){
        var element = event.target;
        console.log(element.scrollHeight - element.scrollTop - offset,element.clientHeight);
        if (element.scrollHeight - element.scrollTop === element.clientHeight ) {
            //alert('scrolled');
            open_for_transition = true;
        } else if (element.scrollTop == 0) {
            //open_for_transition = true;
        } else {
            open_for_transition = false;
        }

    });
     
 
    setInterval(function(){
        if ( open_for_transition ) {
            if (!$arrow_down.hasClass('indication')) {
                $arrow_down.addClass('indication');
                setTimeout(function() {
                    bind();
                },500);
            }
        } else {
            $arrow_down.removeClass('indication');
            unbind();
            
        }
        
    }, 250);


    function bind() {
        $container.on('wheel', function(e) {
            var y = e.originalEvent.wheelDelta;
            
                if ( open_for_transition ) {
                    if (y < 0) {
                        
                        transition();
                    }          
                }
          
        }); 
    }

    function unbind() {
        $container.off('wheel');
    }

    function transition() {
        console.log('transition');
        unbind();
        open_for_transition = false;
        container.scrollTo(0,0);
      
    }

})(jQuery);
