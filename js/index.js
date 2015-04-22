$(document).ready(function(){
	//navbar scroll to section
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var id = $(this).attr("data-id");
		scrollToID('#'+id, 750);
	});

	$('.nav-toggle').on('click', function(event){
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});

	//company logo highlight colour
	$('.logo').hover(function(){
		$(this).css({'backgroundImage':$(this).data('hover')});
	},
	function(){
		$(this).css({'backgroundImage':$(this).data('original')});
	});

	//hide job description
	$('.more_body').hide();
	//show job description
	$('.more_head').click(function(){
		if($(this).hasClass('active')){
			
			$(this).removeClass('active');
		}
		else{
			$('.active').next('.more_body').slideToggle(600);
			$('.active').removeClass('active');
			$(this).addClass('active');
		}
		$(this).next('.more_body').slideToggle(600);
		
	});



	//show app details
	$('.icon_head').hover(function(){
		//$(this).css({'backgroundImage':'url(images/watchthismovie_nexus.jpg)'});
		$(this).css({'backgroundImage':$(this).data('preview')});
	},
	function(){
		if($(this).attr('id') == 'watchthismovie'){
			$(this).css({'backgroundImage':'url(images/watchthismovie_icon_nexus.jpg)'});
		}
		else if($(this).attr('id') == 'saladbowl'){
			$(this).css({'backgroundImage':'url(images/saladbowl_icon_nexus.jpg)'});
		}
		// $(this).css({'backgroundImage':$(this).data('icon')});
	});
	$('.icon_head').click(function(){
		$(this).next('.more_body').slideToggle(600);
	});

	$('.thumbnails').hover(function(){
		$(this).attr('src', $(this).data('title'));
	},
	function(){
		$(this).attr('src', $(this).data('original'));
	});



	//slideshow
	// $(function() {
 //    $("#slider").responsiveSlides({
 //    	auto: true,
 //    	pager:true,
 //        nav: true,
 //        speed:500,
 //        namespace: "centered-btns"
 //    });
 //  });

});

function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if(mainNav.hasClass("open")){
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}

if(typeof console==="undefined"){
	console = {
		log: function(){}
	};
}