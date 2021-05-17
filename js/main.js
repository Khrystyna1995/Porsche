$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true
    });

    $('.actions .button.big').on('click', function (e) {
        e.preventDefault();
        $(this).text($(this).text() == "Details" ? "Show Less" : "Details");
        $(this).closest('article.post').find('.hidden-content').slideToggle()
    });

    const search = document.querySelector('.search');
    const body = document.querySelector('body');

    search.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.add('search_active');
    });

});

