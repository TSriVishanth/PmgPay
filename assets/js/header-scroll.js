
      $(window).scroll(function()
             
             {
                    var sticky = $('.inner-header'),
                    scroll = $(window).scrollTop();
                    
                    if (scroll >= 40)
                     { 
                    sticky.addClass('inner-fixed'); 
                    }
                    else { 
                    sticky.removeClass('inner-fixed');
                    }
            });
      
   