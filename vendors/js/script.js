$(document).ready(function(){
	
	$("[data-fancybox]").fancybox({
		// Options will go here
	});
	
	$().fancybox({
  		selector : '[data-fancybox="images"]',
  		loop     : true
	});
	
	/*
	$('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 3000,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplaySpeed: 3000,
	});
	*/
	
	
	/*
	$('.multiple-items').slick({
		dots: true,
	  	infinite: true,
		speed: 3000,
		autoplay: true,
		autoplaySpeed: 3000,
	    slidesToShow: 3,
  		slidesToScroll: 3
	});
		*/
	
	
	/** Nodig om submenus klikbaar te maken om daarvan de childs weer te laten zien **/
	if($(window).width() < 767) {
		$('.sublink').on('click', function(){
		
		if(! $(this).attr('data-counter')) {

			$('a[data-counter]').removeAttr('data-counter');
            $(this).attr('data-counter', 0);
		}
		$(this).attr('data-counter', Number($(this).attr('data-counter')) + 1);

		counter = $(this).attr('data-counter');

		if(counter == 2) {
			window.location.href = $(this).attr('href');
		}

		return false;
		});
	}
	
	
	
/*
	var hash = window.location.hash;
	
	if(hash) {
		
		var timeout = null;
		
		clearTimeout(timeout);

		timeout = setTimeout(function() {
			if($(window).width() < 767) {
			$('html, body').animate({ scrollTop: $(hash).offset().top-200 }, 500);
			} 
			else { 
			$('html, body').animate({ scrollTop: $(hash).offset().top-100 }, 500);
			}

			return false;

		},200);
	} 
	
	$('.menu a').on('click',function(e){
	
	//$('#').click(function() {
	var click = true;
	var target = $(this.hash);
	var timeout = null;
		
		$(window).bind('scroll',function(){

			clearTimeout(timeout);

			timeout = setTimeout(function(){

				if(click === true) {
					
					if($(window).width() < 767) {
						$('html, body').animate({ scrollTop: target.offset().top-200 }, 750);
						} 
					else {
						$('html, body').animate({ scrollTop: target.offset().top-100 }, 750);
						}
					}

				click = false;

				return false;

			},200);
		});		
	});	


	
	
	
	
	
	jQuery(function($) {
		function ScrollDiv() {
		
		var $TextDiv = $('.navigation_menu');
		var $ImageDiv = $('.slick-initialized .slick-slide');
		//var $color3 = $('#thuiszorg');
		//var $color4 = $('#gastzorg');
			
		var x = $(window).scrollTop();
			
		console.log(x);
		
		if ($(window).scrollTop() > 30) {
			$TextDiv.css({
			//'position': 'fixed',
			//'top': '0px', 
			'border-bottom': '2px solid #ff0000',
			'top': '0px '+parseInt(-x/5)+'px'
			
			
			//'background-color': 'rgba(255,255,255,0.9)'
			});
			
			//$ImageDiv.css('background-position','0% '+parseInt(-x/5)+'px');
			
			$ImageDiv.css({
			//'position': 'fixed',
			//'top': '0px', 
			'border-bottom': '2px solid #20aea7',
			'background-position': '0% '+parseInt(-x/5)+'px'
			//'background-color': 'rgba(253,241,236,0.9)'
			});
			
		
		}
		else {
			$TextDiv.css({
			//'position': 'relative',
			'top': 'auto',
			'border-bottom': '2px solid #ffffff'
			});
			
			$ImageDiv.css({
			//'position': 'relative',
			'top': 'auto',
			'border-bottom': '2px solid #ffffff'
			});
			
			
			
		}
	}
	$(window).scroll(ScrollDiv);
	ScrollDiv();
	});
	
	*/
	
	
	$('.ajax-form').submit(function(evt) {
        // Captcha
        if($('#capcode'))
        {
            $('#capcode').val(1);
        }
		
        var action      = $(this).attr('action');
        var formData    = new FormData($(this)[0]);
		
		$.ajax({
			method: 'POST',
			dataType: 'json',
			contentType:false,
            cache: false,
			processData:false,
			url: action,
            data: formData,
			success: function(data) {
				
				console.log(data);
				
				if (data.errors) {
					$('.error_wrapper').css({
					'display': 'block'
					});
					
					$( ".errors" ).html( data.errors );
					
					var target_offset = $("#form").offset();
					var target_top = target_offset.top;
					
					console.log(target_offset); 
					console.log(target_top); 
					
					$('html, body').animate({scrollTop:target_top}, 1000);
					return false;
                }

                if (data.redirect) {
					window.location.href = data.redirect;
                }
								
			}
		});
		
		evt.preventDefault();
    });
	
	
});