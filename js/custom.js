// JavaScript Document


	/*----------------------------------------------------*/
	/*	Preloader
	/*----------------------------------------------------*/

    $(window).load(function() {
	
		"use strict";	
	
       $('#status').delay(100).fadeOut('slow');
       $('#preloader').delay(500).fadeOut('slow');
       $('body').delay(500).css({'overflow':'visible'});
	   
	});
	

	/*----------------------------------------------------*/
	/*	Parallax
	/*----------------------------------------------------*/
	$(window).bind('load', function() {
	
		"use strict";	
		//parallaxInit();
		
	});

	function parallaxInit() {
		$('#intro').parallax("1000%", 3.6, false);	
	}
	
	
	/*----------------------------------------------------*/
	/*	Register Form Validation
	/*----------------------------------------------------*/
	
	$(document).ready(function(){
	
		"use strict";

		$(".form_register form").validate({
			rules:{ 
				first_name:{
					required: true,
					minlength: 4,
					maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},
					phone:{
						required: true,
						digits: true,
					},	
					message:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							phone:{
								required: "Please enter only digits",
								digits: "Please enter a valid number"
							}, 
							message:{
								required: "Please enter no more than (2) characters"
							}, 
						}
		});			
		
	});

	