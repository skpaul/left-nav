$(document).ready(function(){         
    $('.left-nav a').click(function(e){
        e.preventDefault();
        let link = $(this);
        let parent = $(link.closest('li'));
        let child = link.next();
        if (child.length > 0) {
            if(parent.hasClass('expanded')){
                child.slideUp(500);
                parent.removeClass('expanded').removeClass('bg-subtle');
            }
           else{
            child.slideDown(500);
                parent.addClass('expanded').addClass('bg-subtle',1000);
           }
        } else {
           
            window.location = link.attr('href');
        }
    });

});