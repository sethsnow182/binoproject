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
    
    var navbar = document.getElementById("header");
    var sticky = navbar.offsetTop;
    
function myFunction() {
    if (window.pageYOffset >= 1) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}




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


