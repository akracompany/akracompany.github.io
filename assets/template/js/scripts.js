// ============= PRELOADER SCRIPT ===================
        $(window).load(function() { 
        	setTimeout(function() {
                $('#preloader').addClass('hid');
            }, 50);
        });
// ============= END PRELOADER SCRIPT ===================
/*closestchild*/
 
        ;(function($){
          $.fn.closestChild = function(selector) {
            var $children, $results;
            
            $children = this.children();
            
            if ($children.length === 0)
              return $();
          
            $results = $children.filter(selector);
            
            if ($results.length > 0)
              return $results;
            else
              return $children.closestChild(selector);
          };
        })(window.jQuery);

/* /. closestchild*/


$(function(){
        var top_show = 280;
        var speed = 500;
    	var $backButton = $('#up');

    	$(window).scroll(function () {
    		if ($(this).scrollTop() > top_show) {
    			$backButton.fadeIn();
    		}
    		else {
    			$backButton.fadeOut();
    		}
    	});
        
        
    	$backButton.click(function () {
    		scrollto(0, speed);
    	});
        
    	window.scrollto = function(destination, speed) {
    		if (typeof speed == 'undefined') {
    			speed = 800;
    		}
    		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-60}, speed);
    	};
    	$("a.scrollto").click(function () {
    		var elementClick = $(this).attr("href")
    		var destination = $(elementClick).offset().top;
    		scrollto(destination);
    		return false;
    	});
        
        
        // fancybox
        $('.fancybox').fancybox({
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        $('.fancyboxModal').fancybox({
            autoResize:true,            
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            fitToView : false, 
            maxWidth: '100%',
            scrolling : "no",
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        $('.fancyboxvideo').fancybox({
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            width: '1300px',
            height: '730px',
            maxWidth: '100%',
            maxHeight: '100%',
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        // end fancybox
        
        
        
        // validation
        
        $('.rf').each(function(){
            var item = $(this),
            
            btn = item.find('.btn');
            
            
            function checkInput(){
                item.find('select.required').each(function(){
                    if($(this).val() == '0'){
                        $(this).parents('.form-group').addClass('error');
                        $(this).parents('.form-group').find('.error-message').show();

                    } else {
                        $(this).parents('.form-group').removeClass('error');
                    }
                });                
                
                item.find('input[type=text].required').each(function(){
                    if($(this).val() != ''){
                        $(this).removeClass('error');
                    } else {
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                    }
                });
                item.find('textarea.required').each(function(){
                    if($(this).val() != ''){
                        $(this).removeClass('error');
                    } else {
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                    }
                });
                
                item.find('input[type=email]').each(function(){
                    var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                    var $this = $(this);
                    if($this.hasClass('required')){
                        
                        if (regexp.test($this.val())) {
                            $this.removeClass('error');
                        }else {
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                        }
                    }else{
                        
                        if($this.val() != ''){
                            if (regexp.test($this.val())) {
                                $this.removeClass('error');
                            }else {
                            
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                            }
                        }else{
                            $this.removeClass('error');
                        }
                    }
                    
                });
                
                item.find('input[type=checkbox].required').each(function(){
                    if($(this).is(':checked')){
                        $(this).removeClass('error');
                    } else {
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                    }
                });            
            }

            btn.click(function(){
                checkInput();
                var sizeEmpty = item.find('.error:visible').size();
                if(sizeEmpty > 0){
                    return false;
                } else {                    
                    item.submit();
                    $.fancybox.close();
                }
            });

        });
        
        
        $('select').change(function(){
            if($(this).val() == ''){
                $(this).parents('.form-group').removeClass('selected');

            } else {
                $(this).parents('.form-group').addClass('selected');
                $(this).parents('.form-group').removeClass('error');
            }
        });
        
        // end validation
        



        // Carousels
        
        $('.top-slider').slick({
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: true,
            fade: true,
            prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a href="#" class="slick-next"><i class="fa fa-angle-right"></i></a>'
        });
        
        
        $('.partners-carousel').slick({
            autoplay: true,
            infinite: true,
            autoplaySpeed: 4000,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: true,
            prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a href="#" class="slick-next"><i class="fa fa-angle-right"></i></a>',
            responsive:[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
            ]
        });
        
        
        $('.about-slider').slick({
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: true,
            fade: true,
            prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a href="#" class="slick-next"><i class="fa fa-angle-right"></i></a>'
        });
        
        
        // End Carousels
                
       

        //Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if(isIE){
            $('body').addClass('ie');
        }
        // end         
        
        
        // lightgallery begin
        
        if($(".lightgallery").length > 0){
            $(".lightgallery").lightGallery({
                selector: 'a.lightgallery-link',
                thumbnail: false,
                counter: false
            });
        }
        // /. light gallery end
        
        
        
        $('.menu-button').click(function(){
            $('.menu-button').toggleClass('active');
            $('.mobile-menu').toggleClass('open');
        });
        $('.mobile-menu, .menu-button').click(function(e){
            if ($(e.target).hasClass('fancyboxModal') == false) {
                e.stopPropagation();
            }
        });
        $('body').click(function(){
            $('.mobile-menu').removeClass('open');
            $('.menu-button').removeClass('active');
        });
        
        
        $('.mobile-menu ul > li').has('ul').addClass('down');
        $('.mobile-menu .down > ul').before('<span class="dropdown-button"></span>');
        

        
        $('.mobile-menu .dropdown-button').click(function(){
            $(this).toggleClass('active');
            if($(this).siblings('ul').is(':visible')){
                $(this).siblings('ul').slideUp();
            }else{
                $(this).siblings('ul').slideDown();
            }
            
        });
             
        
        
         
});// end ready












