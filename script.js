// MARIO RUBY ARIESUSANDI / NIM 0706012410028 / CLASS WEB PROGRAMMING B

$(document).ready(function () {
    // Scroll to top when clicking logo-link, only if scrolled down
    $('header nav a.logo-link').on('click', function (e) {
        e.preventDefault();

        if ($(window).scrollTop() > 100) {
            $('html, body').animate({ scrollTop: 0 }, 600);
        }
        // else do nothing (stay at top)
    });

    // Toggle mobile menu open/close
    $('#menu-toggle').on('click', function () {
        $('#mobile-menu').toggleClass('translate-x-0 translate-x-full');
        $('#menu-toggle-icon').toggleClass('hidden');
        $('#menu-close-icon').toggleClass('hidden');
    });

    // Close mobile menu when clicking any link inside it
    $('#mobile-menu a').on('click', function () {
        $('#mobile-menu').removeClass('translate-x-0').addClass('translate-x-full');
        $('#menu-toggle-icon').removeClass('hidden');
        $('#menu-close-icon').addClass('hidden');
    });

    // Sections to highlight in nav
    const sections = ['#hi', '#projects', '#skills'];

    function activateNav() {
        const scrollPos = $(document).scrollTop();

        sections.forEach(id => {
            const section = $(id);
            if (section.length) {
                const offset = section.offset().top - 100;
                const height = section.outerHeight();

                if (scrollPos >= offset && scrollPos < offset + height) {
                    $('.fixed a').removeClass('active');
                    $(`.fixed a[href="${id}"]`).addClass('active');
                }
            }
        });
    }

    $('.project-card').on('click', function () {
        $(this).find('.project-detail').slideToggle(300);
    });

    activateNav();
    $(document).on('scroll', activateNav);
});
