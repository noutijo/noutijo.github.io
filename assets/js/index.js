$('#show-portfolio-design').on('click', () => {
    $('.porfolio #portfolio-web').hide();
    $('.porfolio #portfolio-design').show();

    $('.porfolio #show-portfolio-design').removeClass('make-gray-bg');
    $('.porfolio #show-portfolio-design').addClass('make-green-bg');
    $('.porfolio #show-portfolio-web').removeClass('make-green-bg');
    $('.porfolio #show-portfolio-web').addClass('make-gray-bg');
})
$('#show-portfolio-web').on('click', () => {
    $('.porfolio #portfolio-web').show();
    $('.porfolio #portfolio-design').hide();

    $('.porfolio #show-portfolio-design').removeClass('make-green-bg');
    $('.porfolio #show-portfolio-design').addClass('make-gray-bg');
    $('.porfolio #show-portfolio-web').removeClass('make-gray-bg');
    $('.porfolio #show-portfolio-web').addClass('make-green-bg');
})