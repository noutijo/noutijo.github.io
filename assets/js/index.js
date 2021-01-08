
$(document).ready(function () {
    
    $("#show-portfolio-design").on('click', function () {


    $('.portfolio-web-block').hide();
    $('.portfolio-design-block').show();


    $('#show-portfolio-design').removeClass('make-gray-bg');
    $('#show-portfolio-design').addClass('make-green-bg');
    $('#show-portfolio-web').removeClass('make-green-bg');
    $('#show-portfolio-web').addClass('make-gray-bg');
})


$("#show-portfolio-web").on('click', function () {


    $('.portfolio-web-block').show();
    $('.portfolio-design-block').hide();

    $('#show-portfolio-design').removeClass('make-green-bg');
    $('#show-portfolio-design').addClass('make-gray-bg');
    $('#show-portfolio-web').removeClass('make-gray-bg');
    $('#show-portfolio-web').addClass('make-green-bg');
})

});


if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#navbar_top').addClass("fixed-top");
            $('#navbar_top').addClass("make-navbar-bg");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top");
            $('#navbar_top').removeClass("make-navbar-bg");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
} // end if