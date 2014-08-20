// JavaScript Document//sticky sub nav code	
				
				//only run this code on the services page
				$(document).ready(function(){
				
				// set position of the sub nav before the scroll event to get the relative position
				var scrollPos = $(".sub-nav").offset().top;
				//test to see if it is a mobile device 
				if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				}else{
				
				$(window).scroll(function (event) {
					//Dont run on IE 8
					$(".sub-nav").removeClass('fixed');
					if(!$(".sub-nav").hasClass("row")){
						$(".sub-nav").addClass("row");
					}
					var width = $(window).width();
					if(width > 960){
					var windowPos = $(window).scrollTop();
	
					if($(window).scrollTop() > scrollPos){
						$(".sub-nav").removeClass('row').addClass('fixed');	
					}else{
						$(".sub-nav").removeClass('fixed').addClass('row');	
					}	
					}
					
				}); // END $(window).scroll(function (event)
				} 
				
				});
				

				