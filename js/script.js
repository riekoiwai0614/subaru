//modal
$(function(){
	　　　$('.menu-trigger').on("click", function(){
	　　　　if ($('.menu-trigger').hasClass('active')) {
	　　　　　$('.menu-trigger').removeClass('active');
	　　　　} else {
	　　　　　$('.menu-trigger').addClass('active');
	　　　　}
	　　　});
	　　});		


$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('.gnav').hasClass('active')) {
　　　　　$('.gnav').removeClass('active');
　　　　} else {
　　　　　$('.gnav').addClass('active');
　　　　}
　　　});
　　});
		
$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('body').hasClass('open')) {
　　　　　$('body').removeClass('open');
　　　　} else {
　　　　　$('body').addClass('open');
　　　　}
　　　});
　　});


//slider
$('.slider').slick({
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,

	responsive: [
		{
		  breakpoint: 768,
		  settings: {

		  }
		},
		{
		  breakpoint: 480,
		  settings: {

		  }
		}
	  ]
});

$('.slider02').slick({
	infinite: true,
	autoplay: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});


//ハンバーガーリンク--------------

$('#overlay a[href]').on('click', function(event) {
    $('#overlay-button').trigger('click');
});


//LODINGここから--------------

// window.onload = function() {
// 	const spinner = document.getElementById('loading');
// 	spinner.classList.add('loaded');
//   }



//TOPアニメーションここから--------------


//MV
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
	triggerElement: ".cover-item",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".cover-item .left,.cover-item .right").addClass("active");
})
.addTo(controller);
});

$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".data-item.ratio01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
$(".data-item.ratio01 li").addClass("active");
})
.addTo(controller);
});

//1
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".content01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".content01 dt,.content01 dd").addClass("active");
  })
  .addTo(controller);
});

//2
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content02",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content02 li,.content02 li").addClass("active");
	})
	.addTo(controller);
	});

//3	
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content04",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content04 li").addClass("active");
	})
	.addTo(controller);
	});


//4
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content05",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content05 div").addClass("active");
	})
	.addTo(controller);
	});



//TOPアニメーションここまで--------------



//PAGETOP
$(document).ready(function(){
    $("#pageTop").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#pageTop").fadeIn("fast");
        } else {
            $("#pageTop").fadeOut("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight(); //footerの高さ(＝止めたい位置)
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pageTop").css({
                "position":"absolute", 
                "bottom": footHeight + 20
            });
        } else { 
            $("#pageTop").css({
                "position":"fixed",
                "bottom": "120px" 
            });
        }
    });
    $('#pageTop').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});


$(document).ready(function() {
    $('.submenu h3').on('click', function() {
        $(this).next().slideToggle('hidden');
    });
});


$(document).ready(function() {
    $('.faq dt').on('click', function() {
        $(this).next().slideToggle('hidden');
		$(this).find(".icon").toggleClass('open');
    });
});


/*document.addEventListener('DOMContentLoaded', () => {
	const tableContainers = document.querySelectorAll('.tableBox01');
  
	for (const tableContainer of tableContainers) {
	  const scrollHint = document.createElement('div');
	  scrollHint.className = 'scroll-hint scroll-hint--show';
	  scrollHint.innerText = '横にスクロールできます';
	  tableContainer.appendChild(scrollHint);
  
	  const showScrollHint = () => {
		if (tableContainer.scrollWidth > tableContainer.clientWidth) {
		  scrollHint.classList.add('scroll-hint--show');
		} else {
		  scrollHint.classList.remove('scroll-hint--show');
		}
	  };
	  showScrollHint();
  
	  tableContainer.addEventListener('scroll', () => {
		scrollHint.classList.remove('scroll-hint--show');
	  });
	}
  });*/