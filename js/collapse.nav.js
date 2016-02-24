/**
 * Created by stefan on 4/10/2015.
 * http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
 * It's best practice to wrap your code in a closure. A closure is nothing more
 * than a function that helps limit the scope of variables so you don't
 * accidentally overwrite global variables.
 * https://www.drupal.org/node/171213
 */

jQuery(document).ready(function($) {
    //navigation collapse after click on menu item
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(this).find(".navbar-toggle").trigger( "click" );
        }
    });

    $("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in
        // navigation while collapse() is called
        if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
    });
});