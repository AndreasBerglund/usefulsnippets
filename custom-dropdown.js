(function($) {

    $('.custom-dropdown').each(function(){
        
        var $custom_dropdown = $(this);
        var $select = $custom_dropdown.find('select');

        $select.each(function( i ){

            var $options = $(this).find('option');

            // new selected           
            var $new_option_selected = $('<div class="select-selected"></div>').html( $options.eq( $(this).prop('selectedIndex') ).html() );
            $custom_dropdown.append($new_option_selected);

            $new_option_selected.on('click', function(e){

                e.stopPropagation();

                //close all select boxes
                closeAllCustomDropdown($select);

                $(this).next().toggleClass('select-hide');
                $(this).toggleClass('select-arrow-active');
            });
          
            // new list
            var $new_option_list = $('<div class="select-items select-hide"></div>');
            $custom_dropdown.append($new_option_list);

            $options.each(function( j ){
                var $option = $(this);
                var $new_option = $('<div id="new-opt-' + j + '"></div>').html( $option.html() );
                $new_option_list.append($new_option);
                
                $new_option.on('click', function(e){
                    
                    if ($option.html() == $new_option.html()) {
                        $select.prop('selectedIndex', j );
                        $select.trigger('change');

                        selectUpdate($select);

                        $new_option_selected.html($new_option.html());
                        $new_option_list.find('div').removeClass('same-as-selected');
                        $new_option.addClass('same-as-selected');
                    }

                });

            });


        });
        
    });

    function closeAllCustomDropdown($_select) {

        //other selects
        $('.custom-dropdown').each(function(){

            if ( $(this).find('.select-arrow-active').length > 0 && !$(this).find('select').is($_select) ) {
                //if a dropdown is open and it is not the one interacted with
                $(this).find('.select-selected').next().addClass('select-hide');
                $(this).find('.select-selected').toggleClass('select-arrow-active');
            }

        });
    }

    $(document).on('click', closeAllCustomDropdown);

    function selectUpdate($element) {
        //things to do when select changed:
        console.log($element.val());
    }


})(jQuery);