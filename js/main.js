(function() {
    "use strict";


    document.documentElement.classList.add('is-loaded');
    document.documentElement.classList.remove('is-loading');

    setTimeout(() => {
        document.documentElement.classList.add('is-ready');
    }, 300)


    const scroll = new LocomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
        getSpeed: true,
        getDirection: true
    });


    $('[data-bs-toggle]').on('click', function() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 800);
        console.log('window resize triggered')
    });




})();
