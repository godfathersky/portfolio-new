document.addEventListener('DOMContentLoaded', function() {
    const slide1 = document.getElementById('slide-1');
    const slide2 = document.getElementById('slide-2');
    const slide3 = document.getElementById('slide-3');

    const prev = document.getElementById('sort-up');
    const next = document.getElementById('sort-down');

    prev.addEventListener('click', function() {
        if (slide1.classList.contains('flex')) {
            slide1.classList.remove('flex');
            slide3.classList.add('flex');
        } else if (slide2.classList.contains('flex')) {
            slide2.classList.remove('flex');
            slide1.classList.add('flex');
        } else if (slide3.classList.contains('flex')) {
            slide3.classList.remove('flex');
            slide2.classList.add('flex');
        }
    });

    next.addEventListener('click', function() {
        if (slide1.classList.contains('flex')) {
            slide1.classList.remove('flex');
            slide2.classList.add('flex');
        } else if (slide2.classList.contains('flex')) {
            slide2.classList.remove('flex');
            slide3.classList.add('flex');
        } else if (slide3.classList.contains('flex')) {
            slide3.classList.remove('flex');
            slide1.classList.add('flex');
        }
    });
});