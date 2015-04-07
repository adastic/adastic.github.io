/*----------------------------------------------------*/
/*	Template Animations
/*----------------------------------------------------*/
	
$(document).ready(function(){
	
		"use strict";
	
		$('#intro').waypoint(function() {		
            setTimeout(function(){$('#intro_description_en').addClass('animated fadeInLeft')},200);
            setTimeout(function(){$('#intro_description_he').addClass('animated fadeInRight')},200);			
            setTimeout(function(){$('#intro_form').addClass('animated fadeInRight')},200);
        }, { offset: '85%' });
	
		$('#footer').waypoint(function() {
			setTimeout(function(){$('.footer-nav').addClass('animated fadeInDown')},400);
            setTimeout(function(){$('#footer_copy').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('#footer_icons').addClass('animated fadeInDown')},400);
			setTimeout(function(){$('#subscribe-form').addClass('animated fadeInDown')},400);
			setTimeout(function(){$('#newsletter-paragraph').addClass('animated fadeInUp')},400);
		}, { offset: '94%' });
		
		
});