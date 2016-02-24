/**
 * Created by Stefan on 22/12/2015.
 */
jQuery(document).ready(function($) {
    $('#block-illutek8-main-menu li').hover(function(){
        $(this).parent().find('.sub-menu').toggle();
    });
});