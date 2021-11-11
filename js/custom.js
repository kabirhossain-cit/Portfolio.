$(document).ready(function(){

// =========================   scroll start    ============================
    $(window).scroll(function(){
		var scrolling = $(this).scrollTop();
        if(scrolling > 50){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
// ===============================  backtop  start =============================
	$('.back-to-top').click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if(scrolling > 500){
			$('.back-to-top').fadeIn(500);
		}
		else{
			$('.back-to-top').fadeOut(500);
		}
	});
	// ===============================  backtop  end =============================
// ================================ typed js start =============================
$(function(){
    $(".typed").typed({
		strings: ["Designers.", "Developers.", "Responsiver.","Freelancer.","People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		// loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
// ===================== wow js start=================================
	new WOW().init();
// ===================== wow js end====================================
});
// ===============================  preloader  statt ==========================
$(window).on('load',function(){
	$('#preloader').delay(500).fadeOut(500);
});
// ===============================  preloader  end =============================
// ===============================  slider  start =============================




// ===============================  slider  end =============================





});
