import {Scene2} from './scene2';
import {content} from './content.js';

export var Site = function ( ){
	$('.jarallax').jarallax({
		speed: 0.2
	});
	$('.navlink').hover(function(){
		if(!$(this).hasClass('activeli')){
			$(this).addClass('showli');
		}
	}, function(){
		if(!$(this).hasClass('activeli')){
			$(this).removeClass('showli');
		}
	});
	// footer 
	if ($('body').height() >= 1302  || ($('body').height() >= 400 && $('body').width() <= 550 )) {
	$('.footer-out').css({ 'position': 'absolute', 'bottom': '0'})
	}
	// scroll 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.nav').css({"position":"fixed", "width":"100%", "top":"0"})
		}else{
			$('.nav').css({"position":"relative", "width":"100%", "top":"0"})
		} 
    });
    // event
    $('.play-game').one('click', function () {  
        $('.movie').addClass('mv-hide');  
        $('.movie').append('<div class="bt_close"></div>');    
        let yt = $('#yt'); 
        yt .css({"display":"block" })
        yt.attr('src', yt.attr('src')+'&autoplay=1'); 
        // .bt_close
        $('.bt_close').one('click', function () { 
			$('body').empty();
			// $('.d').remove();
			// $('*[src="https://www.youtube.com/iframe_api"]').remove();
			// $('#www-widgetapi-script').remove();
			content();
			new Scene2();
        })
	})  
	
}(); 

