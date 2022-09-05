

$(function () {
    $('#back-to-top').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        };

        let footerY = $('footer').offset().top - 500;

        if ($(this).scrollTop() >= footerY) {
            $('#back-to-top i').addClass('on');
        } else {
            $('#back-to-top i').removeClass('on');
        };

    });




    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });




    AOS.init();

    // const circle = document.querySelector("#circle");

    //   document.addEventListener("mousemove", (e) => {
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle.style.left = mouseX + "px";
    //     circle.style.top = mouseY + "px";
    //   });

})

