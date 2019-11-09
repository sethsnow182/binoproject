/* NAVIGATION */


    // Open navigation
    $("#open_nav").on("click", function () { // When button is clicked
        $("#navigation").toggleClass("active");  // Toggle active class of #navigation
});

/* Sticky header
function stickyHeader() {
    if ($(window).width() > 840) {
        if (window.pageYOffset >= 30) {
            $("#background").css("padding-top", $("#header").height());
            $("#header").addClass("sticky");
        } else {
            $("#background").removeAttr("style");
            $("#header").removeClass("sticky");
        }
    }
}

*/



//HEADER
    window.onscroll = function() {myFunction()};
    var prev = document.querySelector(".carousel-control-prev");
    var next = document.querySelector(".carousel-control-next");
    var car = document.querySelector(".container_extra");
    var navbar = document.querySelector("#header");
    var sticky = navbar.offsetTop;
    
function myFunction() {
    if (window.pageYOffset >= 1) {
        navbar.classList.add("sticky")
        car.classList.add("stick")
        prev.classList.add("new")
        next.classList.add("new1")
    } else {
        navbar.classList.remove("sticky")
        car.classList.remove("stick")
        prev.classList.remove("new")
        next.classList.remove("new1")
    }
}

//Carousel





/* OUR NUMBERS */

// Count up

var a = 0;
$(window).scroll(function () {

    var oTop = $('#numbers').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 5000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

// Scroll to top
$('#return-to-top').on("click", function () { // When arrow is clicked
    $('body, html').animate({ // Animate scroll to top of body
        scrollTop: 0
    });
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 300) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});


