$(function() {
    
    $(window).scroll(function() {
    var height = $(window).scrollTop();
//  console.log(height);

    if(height  > 110) {$('#header').addClass('header');
    }
    if(height  < 110) {$('#header').removeClass('header');
    }      
});

                            
    $('.affiche').click(function(){
        var cadj = $(this).siblings('.cache');
        $(cadj).slideToggle();
      console.log(cadj);
        });
    $('.survol').hover(function(){
        var cadj = $(this).siblings('.cache');
        $(cadj).slideToggle();
//      console.log(cadj);
        });
    
});
