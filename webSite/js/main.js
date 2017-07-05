$( document ).ready(function() {

	/* accessibility */
	$(".acessibility-btn").on("click", function() {
		$("h1, .secondary-navigation").toggleClass("accesibility-text-contrast");
		$("html").toggleClass("accessibility-font-size");
	})

	/* banner slider */
	$("body").keydown(function(e) {
	  if(e.keyCode == 37 || e.keyCode == 39) { // left or right
	    $(".arrow-r").click();
	  }
	});

    var arrowBtn = $(".arrows li");
    var slides = $(".slide");

    arrowBtn.on("click", function() {
    	slides.toggleClass("active");
    });

    /* carousel */
    var carouselArrow = $(".carousel-arrow");
    var arrowLeft = $(".carousel-arrow-left");
    var arrowRight = $(".carousel-arrow-right");
    var carousel = $('.carousel ul');
    var isMoving = false;

    carouselArrow.on("click", function() {

    	if(!isMoving) {
	    	var currTrans = carousel.css('transform').split(/[()]/)[1] || carousel.css('-webkit-transform').split(/[()]/)[1] || carousel.css('-ms-transform').split(/[()]/)[1] || carousel.css('-moz-transform').split(/[()]/)[1];
	    	var pos = parseInt(currTrans.split(',')[4]);
	    	if( $(this).hasClass("carousel-arrow-left") ) {
	    		var newPos = pos+240;
	    	} else {
	    		var newPos = pos-240;
	    	}
	    	
	    	console.log(newPos);

	    	if(newPos == 0) {
	    		arrowRight.addClass("hidden");
	    	} else if(newPos > 0 && newPos < 1200) {
	    		arrowRight.removeClass("hidden");
	    		arrowLeft.removeClass("hidden");
	    	} else {
	    		arrowLeft.addClass("hidden");
	    	}

	    	if (newPos > 1200 || newPos < 0) {
	    		return;
	    	} else {
				isMoving = true;
				carousel.animate({ textIndent: 0 }, {
				    step: function() {
				      $(this).css('-moz-transform','translateX('+newPos+'px)');
				      $(this).css('-webkit-transform','translateX('+newPos+'px)');
				      $(this).css('-ms-transform','translateX'+newPos+'px)');
				      $(this).css('transform','translateX('+newPos+'px)');
				    },
				    duration: 300,
				    complete: function(){ isMoving = false }
				});
	    	}
    	}
    })

    /* accordion */
    if (window.location.hash == "#section2") {
        $("#section2").removeClass("closed");
        $("#section2 .accordion-content").slideDown();
    }
    var accordionTitle = $(".accordion-title");
    
    accordionTitle.on("click", function() {
    	var accordion = $(this).closest(".accordion");
    	if(accordion.hasClass("closed")) {
    		accordion.removeClass("closed");
    		accordion.find(".accordion-content").slideDown();
    	} else {
	    	accordion.addClass("closed");
	    	accordion.find(".accordion-content").slideUp();
    	}
    })

});

//slider kitzur holiday
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}


function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

//slider tab nav
function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}


//4 απιν

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

