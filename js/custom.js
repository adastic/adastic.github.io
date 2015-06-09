// JavaScript Document


	/*----------------------------------------------------*/
	/*	Parallax
	/*----------------------------------------------------*/

	$(window).bind('load', function() {
	
		"use strict";	
		parallaxInit();
		
	});

	function parallaxInit() {
		$('#intro').parallax();
	}
	
	
	/*----------------------------------------------------*/
	/*	Register Form Validation
	/*----------------------------------------------------*/
	
	$(document).ready(function(){
	
		"use strict";

		$(".form_register form").validate({
			rules:{ 
				sender_name:{
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
				comments:{
					required: false,
					minlength: 2,
					}
				},
				messages:{
						sender_name:{
							required: "שם השולח נדרש"
						}, 
						email:{
							required: "כתובת האימייל נדרשת על מנת שנוכל ליצור עמך קשר",
							email: "כתובת האימייל לא בפורמט הנכון, כך כתובת אימייל נראית: name@domain.com"
						}, 
						phone:{
							required: "ניתן להזין ספרות בלבד",
							digits: "המספר שהוזן אינו תקין"
						}, 
						comments:{
							minlength: "אורך השדה חייב להיות לפחות {0} תווים"
						}, 
					}
		});			
		
	});

	