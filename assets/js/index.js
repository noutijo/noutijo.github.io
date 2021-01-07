
$(document).ready(function () {
    
$("#show-portfolio-design").on('click', function () {
    $('#portfolio-web').hide();
    $('#portfolio-design').show();

    $('#show-portfolio-design').removeClass('make-gray-bg');
    $('#show-portfolio-design').addClass('make-green-bg');
    $('#show-portfolio-web').removeClass('make-green-bg');
    $('#show-portfolio-web').addClass('make-gray-bg');
})


$("#show-portfolio-web").on('click', function () {
    $('#portfolio-web').show();
    $('#portfolio-design').hide();

    $('#show-portfolio-design').removeClass('make-green-bg');
    $('#show-portfolio-design').addClass('make-gray-bg');
    $('#show-portfolio-web').removeClass('make-gray-bg');
    $('#show-portfolio-web').addClass('make-green-bg');
})

});